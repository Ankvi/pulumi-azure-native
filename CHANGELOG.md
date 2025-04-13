# CHANGELOG

### Does the PR have any schema changes?

Looking good! No breaking changes found.

#### New resources:

- `monitor.ActivityLogAlert`
- `monitor.DataCollectionEndpoint`
- `monitor.DataCollectionRule`
- `monitor.DataCollectionRuleAssociation`
- `monitor.MetricAlert`

#### New functions:

- `monitor.getActivityLogAlert`
- `monitor.getDataCollectionEndpoint`
- `monitor.getDataCollectionRule`
- `monitor.getDataCollectionRuleAssociation`
- `monitor.getMetricAlert`

<!-- Release notes generated using configuration in .github/release.yml at v3.1.0 -->

## What's Changed
* Add versions/tools/compare_major_versions.go by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/4083
* Re-add Insights 2022-06-01 to bring back Monitor.ActionGroup and Monitor.DataCollection* by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/4084
* Bring back more Insights API version to restore MetricAlert and ActivityLogAlert by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/4085
* Local packages: fail with appropriate error messages when module or API version are not found by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/4086


**Full Changelog**: https://github.com/pulumi/pulumi-azure-native/compare/v3.0.1...v3.1.0