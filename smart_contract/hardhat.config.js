//https://eth-ropsten.alchemyapi.io/v2/6X6papNNMHfiZMHYClrHv-WJfuY46SZ4

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks:{
    ropsten:{
      url: 'https://eth-ropsten.alchemyapi.io/v2/6X6papNNMHfiZMHYClrHv-WJfuY46SZ4',
      accounts:['f37b450822b4b76afe2d3f2fd48d5b2ff6e97146cc468577f6de1379c228cd32']
    }
  }
}