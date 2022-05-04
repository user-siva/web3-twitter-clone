require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.2",
  networks:{
    rinkeby:{
      url:'https://eth-rinkeby.alchemyapi.io/v2/6zPS00X__7D8LUNT8gr-ymQDvGOkrAyo',
      accounts:['c666b4f77b7be3ccb148732ac3dc35b79ccd19c461cc582436b22c45bbc6e8c3']
    }
  }
};
