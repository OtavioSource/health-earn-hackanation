import {
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import hre from "hardhat";

describe("Well", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployFixture() {

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await hre.ethers.getSigners();

    const Well = await hre.ethers.getContractFactory("Well");
    const well = await Well.deploy(owner.address)

    return { well, owner, otherAccount };
  }
  // Test minting tokens

 it("reverts if called by non-owner", async function () {
    const { well, owner, otherAccount } = await loadFixture(deployFixture);
    const instance = well.connect(otherAccount);

    await expect(instance.mint(owner, 1000)).to.be.revertedWithCustomError(well, "OwnableUnauthorizedAccount");
  });

  it("reverts if `to` is zero address", async function () {
    const { well, owner } = await loadFixture(deployFixture);
    const instance = well.connect(owner);
    hre.ethers.ZeroAddress
    await expect(instance.mint(hre.ethers.ZeroAddress, 1000))
      .to.be.revertedWithCustomError(well, "MintToZero");
  });

  it("reverts if `amount` is zero", async function () {
    const { well, owner, otherAccount } = await loadFixture(deployFixture);
    const instance = well.connect(owner);

    await expect(instance.mint(await otherAccount.getAddress(), 0))
      .to.be.revertedWithCustomError(well, "MintAmountZero");
  });

  it("mints tokens correctly and updates balance and totalSupply", async function () {
    const { well, owner, otherAccount } = await loadFixture(deployFixture);
    const instance = well.connect(owner);
    const toAddress = await otherAccount.getAddress();

    await expect(instance.mint(toAddress, 1000))
      .to.emit(well, "Transfer")
      .withArgs(hre.ethers.ZeroAddress, toAddress, 1000);

    expect(await well.balanceOf(toAddress)).to.equal(1000);
    expect(await well.totalSupply()).to.equal(1000);
  });

  it("allows multiple mints (no cap)", async function () {
    const { well, owner, otherAccount } = await loadFixture(deployFixture);
    const instance = well.connect(owner);
    const toAddress = await otherAccount.getAddress();

    await instance.mint(toAddress, 500);
    await instance.mint(toAddress, 700);

    expect(await well.balanceOf(toAddress)).to.equal(1200);
    expect(await well.totalSupply()).to.equal(1200);
  });

  // Test changing the owner

  it("reverts if called by non-owner", async function () {
    const { well, otherAccount, owner } = await loadFixture(deployFixture);
    const instance = well.connect(otherAccount);
    const newOwner = await owner.getAddress();

    await expect(instance.changeOwner(newOwner))
      .to.be.revertedWithCustomError(well, "OwnableUnauthorizedAccount");
  });

  it("reverts if newOwner is zero address", async function () {
    const { well, owner } = await loadFixture(deployFixture);
    const instance = well.connect(owner);
    const zero = hre.ethers.ZeroAddress;

    await expect(instance.changeOwner(zero))
      .to.be.revertedWithCustomError(well, "OwnableInvalidOwner");
  });

  it("transfers ownership correctly", async function () {
    const { well, owner, otherAccount } = await loadFixture(deployFixture);
    const instance = well.connect(owner);
    const newOwner = await otherAccount.getAddress();
    const oldOwner = await owner.getAddress();

    await expect(instance.changeOwner(newOwner))
      .to.emit(well, "OwnershipTransferred")
      .withArgs(oldOwner, newOwner);

    expect(await well.owner()).to.equal(newOwner);
  });

  // Test recovering tokens

  it("reverts if called by non-owner", async function () {
    const { well, otherAccount } = await loadFixture(deployFixture);
    const instance = well.connect(otherAccount);
    
    await expect(
      instance.recoverERC20(well.getAddress(), 10)
    ).to.be.revertedWithCustomError(well, "OwnableUnauthorizedAccount");
  });

  it("reverts if tokenAddress is zero", async function () {
    const { well, owner } = await loadFixture(deployFixture);
    const instance = well.connect(owner);
    await expect(
      instance.recoverERC20(hre.ethers.ZeroAddress, 10)
    ).to.be.revertedWithCustomError(well, "TokenAddressZero");
  });

  it("reverts if tokenAddress is WELL contract address", async function () {
    const { well, owner } = await loadFixture(deployFixture);
    const instance = well.connect(owner);

    await expect(
      instance.recoverERC20(well.getAddress(), 10)
    ).to.be.revertedWithCustomError(well, "CannotRecoverWell");
  });

  it("reverts if tokenAmount is zero", async function () {
    const { well, owner } = await loadFixture(deployFixture);
    const instance = well.connect(owner);
    const ownerAddress = await owner.getAddress();

    await expect(
      instance.recoverERC20(ownerAddress, 0)
    ).to.be.revertedWithCustomError(well, "TokenAmountZero");
  });

  // Tet burning 
    it("reverts if amount is zero", async function () {
    const { well, otherAccount } = await loadFixture(deployFixture);
    const instance = well.connect(otherAccount);

    await expect(instance.burn(0)).to.be.revertedWithCustomError(well, "BurnAmountZero");
  });

  it("reverts if burning more than balance", async function () {
    const { well, owner, otherAccount } = await loadFixture(deployFixture);
    const instanceOwner = well.connect(owner);
    const instanceOther = well.connect(otherAccount);

    // Mint 100 tokens para otherAccount
    await instanceOwner.mint(await otherAccount.getAddress(), 100);

    // otherAccount tenta queimar 200 (> 100)
    await expect(instanceOther.burn(200)).to.be.revertedWithCustomError(well, "ERC20InsufficientBalance");
  });

  it("burns tokens correctly and updates balances", async function () {
    const { well, owner, otherAccount } = await loadFixture(deployFixture);
    const instanceOwner = well.connect(owner);
    const instanceOther = well.connect(otherAccount);
    const toAddress = await otherAccount.getAddress();

    // Mint 100 tokens para otherAccount
    await instanceOwner.mint(toAddress, 100);

    // Queima 40 tokens
    await expect(instanceOther.burn(40))
      .to.emit(well, "Transfer")
      .withArgs(toAddress, hre.ethers.ZeroAddress, 40);

    expect(await well.balanceOf(toAddress)).to.equal(60);
    expect(await well.totalSupply()).to.equal(60);
  });

  // Test burning from a specific address

    it("reverts if called by non-owner", async function () {
    const { well, otherAccount } = await loadFixture(deployFixture);
    const instance = well.connect(otherAccount);

    // Tentativa de queimar do contrato por não-owner
    await expect(
      instance.burnFromContract(well.getAddress(), 10)
    ).to.be.revertedWithCustomError(well, "OwnableUnauthorizedAccount");
  });

  it("reverts if account is not address(this)", async function () {
    const { well, owner, otherAccount } = await loadFixture(deployFixture);
    const instance = well.connect(owner);
    const otherAddress = await otherAccount.getAddress();

    // Mint mínimo para contrato, não importa o valor pois falha antes
    await instance.mint(well.getAddress(), 50);

    // Owner especifica conta diferente de address(this)
    await expect(
      instance.burnFromContract(otherAddress, 10)
    ).to.be.revertedWithCustomError(well, "BurnFromNotContract");
  });

  it("reverts if amount is zero", async function () {
    const { well, owner } = await loadFixture(deployFixture);
    const instance = well.connect(owner);

    // Mint tokens ao próprio contrato
    await instance.mint(well.getAddress(), 50);

    // Tenta queimar zero
    await expect(
      instance.burnFromContract(well.getAddress(), 0)
    ).to.be.revertedWithCustomError(well, "BurnFromAmountZero");
  });

  it("burns contract-held tokens correctly and updates totalSupply", async function () {
    const { well, owner } = await loadFixture(deployFixture);
    const instance = well.connect(owner);

    // Mint 50 WELL para o próprio contrato
    await instance.mint(well.getAddress(), 50);
    expect(await well.balanceOf(well.getAddress())).to.equal(50);
    expect(await well.totalSupply()).to.equal(50);

    // Queima 20 tokens do contrato
    await expect(
      instance.burnFromContract(well.getAddress(), 20)
    )
      .to.emit(well, "Transfer")
      .withArgs(well.getAddress(), hre.ethers.ZeroAddress, 20);

    // Saldo do contrato deve ser 30, totalSupply 30
    expect(await well.balanceOf(well.getAddress())).to.equal(30);
    expect(await well.totalSupply()).to.equal(30);
  });

  // Test pausing

  
  it("reverts if called by non-owner", async function () {
    const { well, otherAccount } = await loadFixture(deployFixture);
    const instance = well.connect(otherAccount);

    await expect(instance.pause()).to.be.revertedWithCustomError(well, "OwnableUnauthorizedAccount");
  });

  it("pauses successfully and emits Paused event", async function () {
    const { well, owner } = await loadFixture(deployFixture);
    const instance = well.connect(owner);
    const ownerAddress = await owner.getAddress();

    await expect(instance.pause())
      .to.emit(well, "Paused")
      .withArgs(ownerAddress);

    expect(await well.paused()).to.be.true;
  });

  it("prevents transfers once paused", async function () {
    const { well, owner, otherAccount } = await loadFixture(deployFixture);
    const instanceOwner = well.connect(owner);
    const instanceOther = well.connect(otherAccount);

    // Antes de pausar, transfer deve funcionar
    const ownerAddress = await owner.getAddress();
    await well.connect(owner).mint(otherAccount, 10);

    await well.connect(otherAccount).transfer(ownerAddress, 5);
    expect(await well.balanceOf(ownerAddress)).to.equal(5);

    // Pausa o contrato
    await instanceOwner.pause();
    expect(await well.paused()).to.be.true;

    // Tentativa de transferência deve reverter
    await expect(
      instanceOther.transfer(ownerAddress, 1)
    ).to.be.revertedWithCustomError(well,"EnforcedPause");
  });

  // Test unpausing
  
  it("reverts if called by non-owner", async function () {
    const { well, otherAccount } = await loadFixture(deployFixture);
    const instance = well.connect(otherAccount);

    await expect(instance.unpause()).to.be.revertedWithCustomError(well, "OwnableUnauthorizedAccount");
  });

  it("reverts if contract is not paused", async function () {
    const { well, owner } = await loadFixture(deployFixture);
    const instance = well.connect(owner);

    expect(await instance.paused()).to.be.false;

    // Agora o contrato não está pausado, então unpause deve reverter
    await expect(instance.unpause()).to.be.revertedWithCustomError(well, "ExpectedPause");
  });

  it("unpauses successfully and emits Unpaused event", async function () {
    const { well, owner } = await loadFixture(deployFixture);
    await well.pause();
    // Confirma que está pausado inicialmente
    expect(await well.paused()).to.be.true;

    await expect(well.unpause())
      .to.emit(well, "Unpaused")
      .withArgs(await owner.getAddress());

    expect(await well.paused()).to.be.false;
  });

  it("allows transfers once unpaused", async function () {
    const { well, owner, otherAccount } = await loadFixture(deployFixture);
    const instanceOwner = well.connect(owner);
    const instanceOther = well.connect(otherAccount);
    const ownerAddress = await owner.getAddress();

    await instanceOwner.mint(otherAccount, 10);
    await instanceOwner.pause();
    // Contrato está pausado, então transfer reverte
    await expect(
      instanceOther.transfer(ownerAddress, 1)
    ).to.be.revertedWithCustomError(well, "EnforcedPause");

    // Despausa
    await instanceOwner.unpause();
    expect(await well.paused()).to.be.false;

    // Agora transfer deve funcionar
    await instanceOther.transfer(ownerAddress, 5);
    expect(await well.balanceOf(ownerAddress)).to.equal(5);
  });

});


