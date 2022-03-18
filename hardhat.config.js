require("@nomiclabs/hardhat-waffle")

// const AVALANCHE_TEST_PRIVATE_KEY = "PRIVATE_KEY_FOR_FIJI";
// const AVALANCHE_MAIN_PRIVATE_KEY = "PRIVATE_KEY_FOR_MAINNET";

const MUMBAI_PRIVATE_KEY = "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
// const MATIC_PRIVATE_KEY = "";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [`${MUMBAI_PRIVATE_KEY}`]
    },
    // matic: {
    //   url: "https://rpc-mainnet.maticvigil.com",
    //   accounts: [`${MATIC_PRIVATE_KEY}`]
    // },
    // avalancheTest: {
    //   url: 'https://api.avax-test.network/ext/bc/C/rpc',
    //   gasPrice: 225000000000,
    //   chainId: 43113,
    //   accounts: [`0x${AVALANCHE_TEST_PRIVATE_KEY}`]
    // },
    // avalancheMain: {
    //   url: 'https://api.avax.network/ext/bc/C/rpc',
    //   gasPrice: 225000000000,
    //   chainId: 43114,
    //   accounts: [`0x${AVALANCHE_MAIN_PRIVATE_KEY}`]
    // }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}