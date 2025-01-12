node_modules:
	IGNORE_PULUMI_SCRIPTS=1 pnpm install

node_modules/ci:
	IGNORE_PULUMI_SCRIPTS=1 pnpm install --frozen-lockfile

lint:
	pnpm -r run lint

build:
	pnpm -r run build

publish:
	pnpm -r publish --no-git-checks

clean:
	rm -f scripts/pulumi-azure-native-version.cache

clean/azure-native:
	rm -rf azure-native

clean/all: clean clean/azure-native

azure-native:
	git clone --no-checkout --filter=blob:none --sparse --depth 1 https://github.com/pulumi/pulumi-azure-native azure-native
	cd azure-native && \
		git sparse-checkout set sdk/nodejs && \
		git checkout master

azure-native/pull: azure-native
	cd azure-native && git pull

list-module-names: azure-native/pull  node_modules
	pnpm --filter scripts list-module-names

check-version: node_modules
	pnpm --filter scripts check-version

generate-packages: clean azure-native/pull node_modules
	pnpm --filter scripts generate-packages

generate-packages/push: generate-packages
	pnpm --filter scripts commit-and-push
