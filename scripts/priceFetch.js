const MockV3Aggregator = artifacts.require("MockV3Aggregator");
const PriceFeed = artifacts.require("PriceFeed");

module.exports = async function(callback) {
  try {
    const priceFeed = await PriceFeed.deployed();
    const mockAggregator = await MockV3Aggregator.deployed();

    // Fetching USDTMockOnePrice
    let price = await priceFeed.getLatestPrice();
    console.log("Initial Price (raw): ", price.toString());
    console.log("Initial Price (USDT): ", (price / 1e8).toString());

    // Fetching USDTMockTwoPrice
    await mockAggregator.updatePrice(350000000000);
    console.log("Price Updated to 3500 USDT");


    price = await priceFeed.getLatestPrice();
    console.log("Updated Price (raw): ", price.toString());
    console.log("Updated Price (USDT): ", (price / 1e8).toString());


    callback();
  } catch (error) {
    console.error("Error: ", error);
    callback(error);
  }
};

