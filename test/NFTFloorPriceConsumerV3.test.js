
const NFTFloorPriceConsumerV3 = artifacts.require("NFTFloorPriceConsumerV3");

contract("NFTFloorPriceConsumerV3", (accounts) => {
  it("should retrieve the latest NFT floor price", async () => {
    const nftFloorPriceConsumer = await NFTFloorPriceConsumerV3.deployed();

    // Call the getLatestPrice function to retrieve the price
    const nftPrice = await nftFloorPriceConsumer.getLatestPrice();

    // Log the price to the console
    console.log("Latest NFT Floor Price:", nftPrice.toString());

    // You can add your assertions here to validate the price
    // For example, you can use Chai assertions:
    // assert.isTrue(nftPrice.toNumber() > 0, "Price should be greater than zero");
  });
});



// const { BN, constants, expectEvent, expectRevert, time } = require('@openzeppelin/test-helpers');
// const { web3 } = require('@openzeppelin/test-helpers/src/setup');
// const { ZERO_ADDRESS } = constants;

// const { expect } = require('chai');

// const NFTFloorPriceConsumerV3 = artifacts.require('NFTFloorPriceConsumerV3');

// const fromWei = (x) => web3.utils.fromWei(x.toString());
// const toWei = (x) => web3.utils.toWei(x.toString());
// const fromWei8Dec = (x) => x / Math.pow(10, 8);
// const toWei8Dec = (x) => x * Math.pow(10, 8);
// const fromWei2Dec = (x) => x / Math.pow(10, 2);
// const toWei2Dec = (x) => x * Math.pow(10, 2);



// contract ('NFTFloorPriceConsumerV3', function (accounts) {
//     const [ deployer, firstAccount, secondAccount, fake0wner ] = accounts;

//     it('retrieve deployed contracts', async function () {
//         NFTFloorPriceConsumerV3 = await Collector.deployed();
//         expect(NFTFloorPriceConsumerV3.address).to.be.not.equal(ZERO_ADDRESS);
//         expect(NFTFloorPriceConsumerV3.address).to.match(/0x[0-9a-fA-F]{40}/);

//         console.log(await NFTFloorPriceConsumerV3.NFTFloorPriceConsumerV3())
//     });

//     it('get price feed', async function () {
//         console.log("1 ETH = " + fromWei8Dec(await collectorContract.getLatestPrice()) + " USD")
//     })

//     // it(' send some eth and get user deposit in dollars', async function () {
//     // await collectorContract.sendTransaction({from: firstAccount, value: toWei(1)})
//     // console.log(fromWei(await collectorContract.userEthDeposits(firstAccount)) + " ETH")    // I can also put secondAccount here
//     // console.log(fromWei2Dec(await collectorContract.convertEthInUSD(firstAccount)) + " USD") // I can also put secondAccount here
//     // })

//     // it(' send some eth and get user deposit in dollars', async function () {
//     //     await collectorContract.sendTransaction({from: secondAccount, value: toWei(1.5)})
//     //     console.log(fromWei(await collectorContract.userEthDeposits(secondAccount)) + " ETH")    
//     //     console.log(fromWei2Dec(await collectorContract.convertEthInUSD(secondAccount)) + " USD") 
//     //     })

//     // it('get smart contract balance in ETH', async function () {
//     //     console.log(fromWei(await collectorContract.getNativeCoinsBalance()) + "ETH")
//     // })

//     // it('withdraw first account', async function () {
//     //     await collectorContract.userETHWithdraw({from: firstAccount})
//     //     console.log(fromWei(await collectorContract.getNativeCoinsBalance()) + "ETH")
//     // })

//     // it('withdraw second account', async function () {
//     //     await collectorContract.userETHWithdraw({from: secondAccount})
//     //     console.log(fromWei(await collectorContract.getNativeCoinsBalance()) + "ETH")
//     // })
// });


