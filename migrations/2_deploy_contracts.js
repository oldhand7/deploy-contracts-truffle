const PhotoNFTData = artifacts.require("PhotoNFTData");

var dataAddress = "";
var marketAddress = "";
var factoryAddress = "";
var trableAddress = "";

module.exports = async function (deployer) {
  await deployer.deploy(PhotoNFTData).then(()=>dataAddress=PhotoNFTData.address);
  console.log("PhotoNFTData:",dataAddress, "PhotoNFTMarketplace:",marketAddress, "PhotoNFTFactory:",factoryAddress, "PhotoNFTTradable:", trableAddress);
};

