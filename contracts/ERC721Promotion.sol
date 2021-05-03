// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract ERC721Promotion is ERC721, Ownable {
    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {}

    address private to;

    function setTo(address _to) external onlyOwner {
        to = _to;
    }

    function mint(uint256 _tokenId) external onlyOwner {
        _mint(to, _tokenId);
    }

    function burn(uint256 _tokenId) external onlyOwner {
        _burn(_tokenId);
    }

    function transferFromOwner(address _from, address _to, uint256 _tokenId) external onlyOwner {
        _transfer(_from, _to, _tokenId);
    }

    function getTo() public view returns (address) {
        return to;
    }
}
