// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract MockUSDTOne {
  uint8 public decimals;
  int256 public latestPrice;
  uint256 public latestTimestamp;


  constructor(uint8 _decimals, int256 _initialPrice) {
    decimals = _decimals;
    latestPrice = _initialPrice;
    latestTimestamp = block.timestamp;
  }

   function latestRoundData() public view returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound) {
    return (1, latestPrice, latestTimestamp, latestTimestamp, 1);
  }

  function updatePrice(int256 _newPrice) public {
    latestPrice = _newPrice;
    latestTimestamp = block.timestamp;
  }
}
