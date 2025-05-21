const MockUSDTOne = artifacts.require("MockUSDTOne");
const MockUSDTTwo = artifacts.require("MockUSDTTwo");
const PriceFeed = artifacts.require("PriceFeed");

module.exports = async function (callback) {
  try {
    const priceFeed = await PriceFeed.deployed();
    const mockUsdtOne = await MockUSDTOne.deployed();
    const mockUsdtTwo = await MockUSDTTwo.deployed();

    let USDTMockOnePrice = await priceFeed.getUsdtMockOnePrice();
    console.log("USDTMockOne Price (Raw): ", USDTMockOnePrice.toString());
    console.log("USDTMockOne Price (USDT): ", (USDTMockOnePrice / 1e8).toString());

    let USDTMockTwoPrice = await priceFeed.getUsdtMockTwoPrice();
    console.log("USDTMockTwo Price (Raw): ", USDTMockTwoPrice.toString());
    console.log("USDTMockTwo Price (USDT: ", (USDTMockTwoPrice / 1e8).toString());

    console.log("Checking Price Difference & Updating Price for USDTMockTwo");
    await mockUsdtTwo.updatePrice(350000000000);
    console.log("Price UPDATED to 3500 USDT");

    const updatedUsdtMockTwoPrice = await priceFeed.getUsdtMockTwoPrice();
    console.log("USDTMockTwo Price (Raw): ", updatedUsdtMockTwoPrice.toString());
    console.log("USDTMockTwo Price (USDT): ", (updatedUsdtMockTwoPrice / 1e8).toString());

    console.log("--- Now Checking Price Difference ---");
    const priceOneInUsdt = USDTMockOnePrice / 1e8;
    const updatedPriceTwoInUsdt = updatedUsdtMockTwoPrice / 1e8;
    if (priceOneInUsdt === 0) {
      console.log("Erro: USDTMockOne price is zero, cannot calculate difference");
    } else {
      const priceRatio = updatedPriceTwoInUsdt / priceOneInUsdt;
      if (priceRatio > 1.05) {
        console.log(`Price Difference is ${(priceRatio - 1)*100}% (>${5}%). Initiating Swap...`);
      } else {
        console.log(`Price Difference is ${(priceRatio - 1)*100}% (<=${5}%). Not a profitable Swap...`);
      }
    }

    callback();
  } catch (error) {
    console.error("Error: ", error);
    callback(error);
  }
}
