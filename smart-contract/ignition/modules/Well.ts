// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const WellModule = buildModule("WellModule", (m) => {

  // Passe o endereço do owner como argumento do construtor
  const well = m.contract("Well", ["{{deployer}}"]);

  return { well };
});

export default WellModule;
