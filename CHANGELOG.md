# CHANGELOG

### Does the PR have any schema changes?

Looking good! No breaking changes found.

#### New resources:

- `databasewatcher.AlertRuleResource`
- `dbforpostgresql.Backup`

#### New functions:

- `databasewatcher.getAlertRuleResource`
- `dbforpostgresql.getBackup`
- `machinelearningservices.listConnectionModels`

<!-- Release notes generated using configuration in .github/release.yml at v2.52.0 -->

## What's Changed
* Re-enable postgres test, take 2 by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/3467
* Custom Read for WebApp to get the full siteConfig by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/3464
* Azure-in-Azure integration test that runs Pulumi in Azure to test managed identity auth by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/3449
* Filter REDACTED user name from SiteConfig to avoid meaningless diffs by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/3480
* Expect refresh changes to WebApp.SiteConfig because it's modified by other resources by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/3482


**Full Changelog**: https://github.com/pulumi/pulumi-azure-native/compare/v2.51.0...v2.52.0