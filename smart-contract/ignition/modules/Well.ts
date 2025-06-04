// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition
import dotenv from "dotenv";
dotenv.config();

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const WellModule = buildModule("WellModule", (m) => {

  const owner = process.env.OWNER_ADDRESS || "0xc19a3BB4dd76DdFDab66dcDc900431407dd76bA3";
  // Passe o endereço do owner como argumento do construtor
  const well = m.contract("Well", [owner]);

  return { well };
});

export default WellModule;
