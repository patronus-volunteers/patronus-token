import decodeLogs from '../node_modules/openzeppelin-solidity/test/helpers/decodeLogs';
const PatronusToken = artifacts.require('PatronusToken');

contract('PatronusToken', accounts => {
  let token;
  const creator = accounts[0];

  beforeEach(async function () {
    token = await PatronusToken.new({ from: creator });
  });

  it('has a name', async function () {
    const name = await token.name();
    assert.equal(name, 'Patronus Token');
  });

  it('has a symbol', async function () {
    const symbol = await token.symbol();
    assert.equal(symbol, 'ETV');
  });

  it('has 18 decimals', async function () {
    const decimals = await token.decimals();
    assert(decimals.eq(18));
  });
});