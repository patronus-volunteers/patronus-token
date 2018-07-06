pragma solidity ^0.4.23;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/MintableToken.sol";

contract PatronusToken is MintableToken {
  string public constant name = "Patronus Token";
  string public constant symbol = "ETV";
  uint8 public constant decimals = 18;
}