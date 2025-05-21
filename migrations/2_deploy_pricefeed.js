const MockV3Aggregator = artifacts.require("MockV3Aggregator");
const PriceFeed = artifacts.require("PriceFeed");


module.exports = async function (deployer) {
  await deployer.deploy(MockV3Aggregator, 8, 300000000000);
  const mockAggregator = await MockV3Aggregator.deployed();

  await deployer.deploy(PriceFeed, mockAggregator.address);
};
