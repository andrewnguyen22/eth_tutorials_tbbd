var contract=artifacts.require("./Tampa_Bay_Token.sol")
module.exports = function(deployer) {
  deployer.deploy(contract)
};
