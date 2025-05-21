// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract priceFeed {
  AggregatorV3Interface internal USDTMockOne;
  AggregatorV3Interface internal USDTMockTwo;


  constructor(address _priceUSDTMockOne, address _priceUSDTMockTwo) {
    USDTMockOne = AggregatorV3Interface(_priceUSDTMockOne);
    USDTMockTwo = AggregatorV3Interface(_priceUSDTMockTwo);
  }

  function getUsdtMockOnePrice() public view returns (int) {
    (, int price, , , ) = USDTMockOne.latestRoundData();
    return price;
  }

  function getUsdtMockTwoPrice() public view returns (int) {
    (, int price, , , ) = USDTMockTwo.latestRoundData();
    return price;
  }
}
