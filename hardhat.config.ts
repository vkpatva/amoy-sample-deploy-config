import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";
const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.24",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
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
  },

  etherscan: {
    apiKey: {
      polygonAmoy: process.env.OKLINK_AMOY_API as string,
    },
    customChains: [
      {
        network: "polygonAmoy",
        chainId: 80002,
        urls: {
          apiURL:
            "https://www.oklink.com/api/explorer/v1/contract/verify/async/api/polygonAmoy",
          browserURL: "https://www.oklink.com/polygonAmoy",
        },
      },
    ],
  },
};

export default config;
