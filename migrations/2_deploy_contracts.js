const token = artifacts.require("../contracts/PatronusToken.sol");

module.exports = function(deployer, network, accounts) {
    return deployer
        .then(() => {
            return deployer.deploy(token);
        });
};