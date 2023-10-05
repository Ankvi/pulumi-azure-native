node_modules:
	pnpm install

node_modules/ci:
	IGNORE_PULUMI_SCRIPTS=1 pnpm install --frozen-lockfile

list-sub-modules:
	bun scripts/list-packages.ts

batches:
	bun scripts/create-batches.ts

lint:
	pnpm -r run lint

build:
	pnpm -r run build

publish:
	pnpm -r run publish
