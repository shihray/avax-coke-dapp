const hre = require("hardhat");
const fs = require('fs');

async function main() {
    const NFTMarketplace = await hre.ethers.getContractFactory("NFTMarketplace");
    const nftMarketplace = await NFTMarketplace.deploy();
    await nftMarketplace.deployed();
    console.log("Marketplace deployed to:", nftMarketplace.address);


    const AvaxCoke = await hre.ethers.getContractFactory("AvaxCoke");
    const avaxCoke = await AvaxCoke.deploy("", 10000, "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
    await avaxCoke.deployed();
    console.log("Avax Coke deployed to:", avaxCoke.address);

    fs.writeFileSync('./config.js', `export const marketplaceAddress = "${nftMarketplace.address}"\n
    export const avaxCokeAddress = "${avaxCoke.address}"`)
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});