import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import "dotenv/config";
const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.19",
      },
      {
        version: "0.8.20",
      },
      {
        version: "0.8.22",
      },
      {
        version: "0.8.23",
      },
      {
        version: "0.8.24",
      },
    ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  sourcify: {
    enabled: false,
  },
  networks: {
    polygonAmoy: {
      url: process.env.POLYGON_AMOY_RPC as string,
      accounts: [process.env.PRIVATE_KEY as string],
      gasPrice: "auto",
    },
    sepolia: {
      url: process.env.SEPOLIA_URL,
      chainId: 11155111,
      accounts: [process.env.PRIVATE_KEY as string],
      gasPrice: "auto",
    },
  },

  etherscan: {
    apiKey: {
      polygonAmoy: process.env.ETHERSCAN_POLYGON_API as string,
      sepolia: process.env.SEPOLIA_API_KEY as string,
    },
    customChains: [
      {
        network: "polygonAmoy",
        chainId: 80002,
        urls: {
          apiURL: "https://api-amoy.polygonscan.com/api",
          browserURL: "https://amoy.polygonscan.com/",
        },
      },
    ],
  },
};

export default config;
