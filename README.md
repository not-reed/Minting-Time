# Alph.Pro Alephium Boiler Plate

```
apps/
    frontend/          - user facing UI
    backend/           - backend API
packages/
    token-contracts/   - example token faucet
    typescript-config/ - 
    web3/              - web3 shim for faster bun compiles & development
services/
    devnet/            - devnet docker compose
```

To developing quickly:

```bash
# install dependencies
bun install

# start devnet node
bun run start:devnet

# compile, test, and deploy contracts
bun run compile -d devnet
bun run test
bun run deploy -d devnet

# start web services
bun run dev
```
