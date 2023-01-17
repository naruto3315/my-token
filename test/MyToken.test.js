const { expect } = require("chai")

describe('MyToken', function () {
    it('Check balances', async function () {
        // 1. deploy
        const myTokenContractFactory = await hre.ethers.getContractFactory('MyToken')
        const mintTokenNumber = hre.ethers.BigNumber.from(10)
        const myTokenContract = await myTokenContractFactory.deploy(mintTokenNumber)
        await myTokenContract.deployed()

        // 2. connect wallet and mint
        const [_, otherAccount] = await hre.ethers.getSigners()
        await myTokenContract.connect(otherAccount).mint()

        // 3. check whether user balance change is right
        //    or not
        const balance = await myTokenContract.balanceOf(otherAccount.address)
        expect(balance).to.equal(mintTokenNumber)
    })
})
