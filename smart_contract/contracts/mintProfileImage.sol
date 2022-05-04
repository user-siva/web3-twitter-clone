//SPDX-License-Identifier: MIT

pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract ProfileImageNft is ERC721,Ownable {
    using Counters for Counters.Counter;
    using Strings for uint256;

    Counters.Counter _tokenIds;

    mapping(uint256 => string) _tokenURIs;

    struct RenderToken {
        uint256 id;
        string uri;
        string space;
    }

    constructor() ERC721("ProfileNfts","PIN") {}

    function _setTokenURI(uint256 tokenId,string memory _tokenURI) internal {
        _tokenURIs[tokenId] = _tokenURI;
    }

    function tokenURI(uint256 _tokenId) public view virtual override returns(string memory) {
        require(_exists(_tokenId),"URI does not exists");
        string memory _RUri = _tokenURIs[_tokenId];
        return _RUri;
    }

    function getAllToken() public view returns(RenderToken[] memory) {
        uint256 latestid = _tokenIds.current();
        RenderToken[] memory res = new RenderToken[](latestid);
        for(uint i = 0; i<=latestid; i++) {
            if(_exists(i)) {
                string memory uri = tokenURI(i);
                res[i] = RenderToken(i,uri,"");
            }
        }
        return res;
    }

    function mint(address recipient,string memory _uri) public returns(uint256) {
        uint256 newId = _tokenIds.current();
        _mint(recipient,newId);
        _setTokenURI(newId,_uri);
        _tokenIds.increment();
        return newId;
    }

}