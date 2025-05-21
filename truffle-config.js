module.exports = {
  networks: {
    sepolia: {
      host: "127.0.0.1",
      port: 8545,
      network_id: 11155111,
    },
  },
  compilers: {
    solc: {
      version: "^0.8.0",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
  contracts_directory: './contracts',
  contracts_build_directory: './build/contracts',
};
