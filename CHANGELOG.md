# CHANGELOG

### Does the PR have any schema changes?

Looking good! No breaking changes found.

#### New resources:

- `app.DotNetComponent`
- `app.JavaComponent`
- `databasewatcher.SharedPrivateLinkResource`
- `databasewatcher.Target`
- `databasewatcher.Watcher`
- `standbypool.StandbyContainerGroupPool`
- `standbypool.StandbyVirtualMachinePool`
- `storage.BlobContainerLegalHold`

#### New functions:

- `app.getDotNetComponent`
- `app.getJavaComponent`
- `databasewatcher.getSharedPrivateLinkResource`
- `databasewatcher.getTarget`
- `databasewatcher.getWatcher`
- `standbypool.getStandbyContainerGroupPool`
- `standbypool.getStandbyVirtualMachinePool`

<!-- Release notes generated using configuration in .github/release.yml at v2.30.0 -->

## What's Changed
* Add a custom resource for blob container legal holds by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/3079
* Reorganize examples integration tests into long and short based on run times by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/3095
* Re-enable the go-aks e2e test and extend it with a K8s upgrade by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/3078
* Fix and simplify 'make prebuild' to fix master workflow by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/3097
* Skip Microsoft.Network 2023-03-01-preview when generating the schema by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/3102


**Full Changelog**: https://github.com/pulumi/pulumi-azure-native/compare/v2.29.0...v2.30.0