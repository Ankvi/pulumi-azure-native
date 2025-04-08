# CHANGELOG

### Does the PR have any schema changes?

Looking good! No breaking changes found.

#### New resources:

- `monitor.AutoscaleSetting`
- `monitor.DiagnosticSetting`
- `monitor.ManagementGroupDiagnosticSetting`
- `monitor.SubscriptionDiagnosticSetting`

#### New functions:

- `monitor.getAutoscaleSetting`
- `monitor.getDiagnosticSetting`
- `monitor.getManagementGroupDiagnosticSetting`
- `monitor.getSubscriptionDiagnosticSetting`
- `monitor.listDiagnosticSettingsCategory`

<!-- Release notes generated using configuration in .github/release.yml at v3.0.1 -->

## What's Changed
* Bring back erroneously removed Monitor.DiagnosticSetting by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/4082
* Fix: bump Go SDK module version to /v3 by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/4075


**Full Changelog**: https://github.com/pulumi/pulumi-azure-native/compare/v3.0.0...v3.0.1