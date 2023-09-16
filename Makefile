node_modules:
	pnpm install

node_modules/ci:
	IGNORE_PULUMI_SCRIPTS=1 pnpm install --frozen-lockfile

lint:
	pnpm -r run lint

build:
	pnpm -r run build
