## Amoy Verification Key

To verify your contracts on the Amoy network, you'll need a verification key. You can refer to [https://www.oklink.com/account/my-api] to obtain your verification key.

### Deploying Contracts

To deploy contracts on the Amoy network, you can use the following command:

```
npx hardhat ignition deploy .\ignition\modules\Lock.ts --network polygonAmoy
```

Make sure to replace `.\\ignition\\modules\\Lock.ts` with the path to your deployment script.

### Verifying Contracts

After deploying your contracts, it's crucial to verify them to ensure their integrity. You can use the following command to verify your deployed contract:

```
npx hardhat verify --constructor-args .\ignition\modules\arg.ts 0xc98Fd7AD170E6a892545b4f08b73c1c2B8197468 --network polygonAmoy
```

Replace `0xc98Fd7AD170E6a892545b4f08b73c1c2B8197468` with the address of your deployed contract. Also replace args of constructor in arg.ts file

Feel free to reach out if you have any questions or need further assistance.

--- 

This README provides clear instructions on how to obtain the verification key, deploy contracts, and verify deployed contracts on the Amoy network.