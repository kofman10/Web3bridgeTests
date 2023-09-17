const hre = require("hardhat");

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const gameContract = await hre.ethers.deployContract("Game");
  await gameContract.waitForDeployment();
  console.log("Game deployed to:", gameContract.target);



  // Wait for 30 seconds to let Etherscan catch up on contract deployments
  await sleep(30 * 1000);

  // Verify the contracts on Etherscan

  await hre.run("verify:verify", {
    address: gameContract.target,
    constructorArguments: [],
    contract: "contracts/Game.sol:Game",
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
