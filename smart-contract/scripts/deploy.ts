import { ethers } from "hardhat";

async function main() {

    // 1) Pega a primeira conta do Hardhat como deployer
  const [deployer] = await ethers.getSigners();
  const ownerAddress = deployer.address;
  
  const well = await ethers.deployContract("Well", [ownerAddress]);

  await well.waitForDeployment();

  console.log("Well deployed to:", well.target);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });