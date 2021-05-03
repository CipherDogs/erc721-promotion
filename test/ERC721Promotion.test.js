const ERC721Promotion = artifacts.require('ERC721Promotion');

contract('ERC721Promotion', (accounts) => {
    let erc721;

    const to = accounts[1];

    beforeEach(async () => {
        erc721 = await ERC721Promotion.new("Test", "TEST");
    });

    it('has correct', async () => {
        assert.equal(await erc721.name(), "Test");
        assert.equal(await erc721.symbol(), "TEST");

        await erc721.setTo(to);
        assert.equal(await erc721.getTo(), to);

        await erc721.mint(1);
        assert.equal(await erc721.balanceOf(to), 1);
        assert.equal(await erc721.ownerOf(1), to);

        await erc721.burn(1);
        assert.equal(await erc721.balanceOf(to), 0);
    });
});
