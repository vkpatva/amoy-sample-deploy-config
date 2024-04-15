import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("Crowdfunding", (m) => {
  const ERC20 = m.contract("ERC20", ["VirajPatva", "viraj", 0]);
  console.log(ERC20);
  const Crowdfunding = m.contract("CrowdFund", [ERC20]);
  return { ERC20, Crowdfunding };
});
