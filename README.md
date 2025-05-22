# Phantom Aggregator
Just a simple fake aggregator for getting prices from two mock coins that updates one coin to get the price difference wich should be 16.666..7%

I built this for fun and just to learn more about how the blockchain and different aggregators work and it's not a complicated project we just have 3 contracts we are using and one for testing purposes [MockV3Aggregator.sol](https://github.com/Linkan333/phantom_mockAggregator/blob/main/contracts/MockV3Aggregator.sol)



# Guide to Install & Run this

# Step 1. Install Packages
`
$> npm i
`

# Step 2. Install Truffle, ganache-cli
`
$> npm install ganache-cli
`

# Step 3. Setup a local blockchain
`
$> ganache-cli
`

# Step 3. Compile & Migrate the contracts
`
$> npm truffle compile --network sepolia
$> npm truffle migrate --network sepolia
`

# Step 4. Deploy the contracts
`
$> npm truffle exec migrations/2_deploy_pricefeed.js --network sepolia
`

# Step 5. Run the pricefetch.js script on localchain
`
$> npm truffle exec scripts/priceFetch.js --network sepolia
`
