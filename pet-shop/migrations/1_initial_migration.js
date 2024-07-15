var Migrations = artifacts.require("./contracts/Adoption.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
