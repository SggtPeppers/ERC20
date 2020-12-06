async function main() {

  const [deployer] = await ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const base18DecimalUnit = ethers.BigNumber.from(1).mul(10).pow(18)
  const initialSupply = base18DecimalUnit.mul(420)
  const Token = await ethers.getContractFactory("CokeERC20");
  const token = await Token.deploy("Coke Token","CKE4",initialSupply );

  console.log("Token address:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
