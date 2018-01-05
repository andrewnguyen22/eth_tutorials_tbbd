var contract=artifacts.require("./Crowdsale.sol")
module.exports = function(deployer) {
  deployer.deploy(contract)
};
