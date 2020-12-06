pragma solidity >=0.6.8;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/// @title ERC20 implementation
/// @author Ramiro Fernandez



contract CokeERC20 is ERC20 {


/// @param _name Name of the ERC20 Token
/// @param _symbol Short name of the ERC20 Token
    constructor(
      string memory _name,
      string memory _symbol,
      uint256 _mintAmount
      ) public ERC20(_name, _symbol){
        _mint(msg.sender, _mintAmount);
      }
}
