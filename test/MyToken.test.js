describe('MyToken', function () {
    it('deploy', async function () {
        const myTokenContractFactory = await hre.ethers.getContractFactory('MyToken')
        const myTokenContract = await myTokenContractFactory.deploy()
        await myTokenContract.deployed()
        console.log('Contract deployed to:', myTokenContract.address)
    })
})