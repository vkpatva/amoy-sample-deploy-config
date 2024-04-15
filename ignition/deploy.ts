import { ethers, network, upgrades } from "hardhat";

async function main() {
  const PriceFeedTracker = await ethers.getContractFactory("PriceFeedTracker");
  console.log("Deploying PriceFeedTracker to ", network.name);

  const [account1] = await ethers.getSigners();

  const pricefeedTracker = await upgrades.deployProxy(
    PriceFeedTracker,

    [account1.address],

    { initializer: "initialize" }
  );
  console.log({ ...pricefeedTracker });
  await pricefeedTracker.waitForDeployment();

  console.log("PriceFeedTracker deployed to:", pricefeedTracker.target);
}

main();
