const hre = require("hardhat");

async function main() {

  const ProfileImageMinter = await hre.ethers.getContractFactory("ProfileImageNft");
  const ProfileImageContract = await ProfileImageMinter.deploy();

  await ProfileImageContract.deployed();

  console.log("Profile Image Contract deployed to:", ProfileImageContract.address);
}

;(async () => {
  try {
    await main()
  }catch(error) {
    console.error(error);
    process.exit(1)
  }
})()