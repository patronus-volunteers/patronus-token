require('babel-polyfill')
require('babel-register')({
  // Ignore everything in node_modules except node_modules/zeppelin-solidity.
  presets: ['es2015'],
  plugins: ['syntax-async-functions', 'transform-regenerator'],
  ignore: /node_modules\/(?!openzeppelin-solidity\/test\/helpers)/
})

require('dotenv').config()
const Web3 = require('web3')
const web3 = new Web3()

let mainnetProvider

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    },
    mainnet: {
      provider: mainnetProvider,
      gas: 4600000,
      gasPrice: web3.toWei('20', 'gwei'),
      network_id: '1'
    }
  }
}