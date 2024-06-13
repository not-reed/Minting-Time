# Minting Time

> Project Boilerplate started using https://github.com/not-reed/fullstack-alephium

```sh
bunx degit not-reed/fullstack-alephium minting-time
```

## Backend Development

```sh
cd apps/backend
bun install
bun dev
```

## Frontend Development

> requires some backend to be operational, either locally, or using live API

```sh
cd apps/frontend
bun install
bun dev
```

## Contract Development

```sh
cd packages/nft-contracts

# run in separate terminals
bun test:watch
bun compile:watch

# Running scripts
bun dev/mint.ts
bun dev/burn.ts
bun dev/destroy.ts
bun dev/transfer.ts <YOUR_ADDRESS>
bun dev/withdraw.ts 
```

## Deployments

```sh
# contracts
cd packages/nft-contracts
bun cli compile --network devnet && bun cli deploy --network devnet

# Backend API
bun deploy:api

# Frontend - on push to main
git push
```
