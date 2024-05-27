# syntax = docker/dockerfile:1

# Adjust BUN_VERSION as desired
ARG BUN_VERSION=1.1.9
FROM oven/bun:${BUN_VERSION}-slim as base

LABEL fly_launch_runtime="Bun"

# Bun app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"


# Throw-away build stage to reduce size of final image
FROM base as build

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential pkg-config python-is-python3

# Install node modules
COPY --link bun.lockb package.json ./

COPY --link bun.lockb apps/backend/package.json ./apps/backend/

COPY --link bun.lockb packages/nft-contracts/package.json ./packages/nft-contracts/
COPY --link bun.lockb packages/typescript-config/package.json ./packages/typescript-config/
COPY --link bun.lockb packages/web3/package.json ./packages/web3/

RUN bun install --ci

# Copy application code
COPY --link . .


# Final stage for app image
FROM base

# Copy built application
COPY --from=build /app /app

# Start the server by default, this can be overwritten at runtime
EXPOSE 3001
CMD [ "bun", "apps/backend/src/index.ts" ]
