const MockUSDTOne = artifacts.require("MockUSDTOne");
const MockUSDTTwo = artifacts.require("MockUSDTTwo");
const PriceFeed = artifacts.require("PriceFeed");



module.exports = async function (deployer) {
  await deployer.deploy(MockUSDTOne, 8, 300000000000);
  await deployer.deploy(MockUSDTTwo, 8, 300000000000);

  const mockUSDTOne = await MockUSDTOne.deployed();
  const mockUSDTTwo = await MockUSDTTwo.deployed();

  await deployer.deploy(PriceFeed, MockUSDTOne.address, MockUSDTTwo.address);
}
