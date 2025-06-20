import dotenv from "dotenv";
dotenv.config();

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    local: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
      accounts: {
        mnemonic: "test test test test test test test test test test test junk"
      }
    },
    bsctest: {
      url: process.env.BSC_TESTNET_URL,
      chainId: 97,
      accounts: {
        mnemonic: process.env.SECRET
      }
    }
  },
  etherscan: {
    apiKey: process.env.BSCSCAN_API_KEY
  }
};

export default config;
