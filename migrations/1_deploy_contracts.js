const NFTFloorPriceConsumerV3 = artifacts.require("NFTFloorPriceConsumerV3");

module.exports = async(deployer, network, accounts) => {
    await deployer.deploy(NFTFloorPriceConsumerV3);
    const wallet = await NFTFloorPriceConsumerV3.deployed();
    console.log("Deployed wallet is @: " + wallet.address);
}