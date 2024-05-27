#!/usr/bin/env bun

import path from "node:path";

const fixedPath = path.join(
	path.dirname(require.resolve("@alephium/cli")),
	"../",
	"cli_internal.ts",
);

require(fixedPath);
