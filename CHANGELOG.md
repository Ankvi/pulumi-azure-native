# CHANGELOG

### Does the PR have any schema changes?

Found 21 breaking changes:

#### Resources
- `🔴` "azure-native:insights:AlertRule" missing
#### Functions
- `🔴` "azure-native:insights:getAlertRule" missing
#### Types
- `🔴` "azure-native:insights:LocationThresholdRuleCondition" missing
- `🔴` "azure-native:insights:LocationThresholdRuleConditionResponse" missing
- `🔴` "azure-native:insights:ManagementEventAggregationCondition" missing
- `🔴` "azure-native:insights:ManagementEventAggregationConditionResponse" missing
- `🔴` "azure-native:insights:ManagementEventRuleCondition" missing
- `🔴` "azure-native:insights:ManagementEventRuleConditionResponse" missing
- `🔴` "azure-native:insights:RuleEmailAction" missing
- `🔴` "azure-native:insights:RuleEmailActionResponse" missing
- `🔴` "azure-native:insights:RuleManagementEventClaimsDataSource" missing
- `🔴` "azure-native:insights:RuleManagementEventClaimsDataSourceResponse" missing
- `🔴` "azure-native:insights:RuleManagementEventDataSource" missing
- `🔴` "azure-native:insights:RuleManagementEventDataSourceResponse" missing
- `🔴` "azure-native:insights:RuleMetricDataSource" missing
- `🔴` "azure-native:insights:RuleMetricDataSourceResponse" missing
- `🔴` "azure-native:insights:RuleWebhookAction" missing
- `🔴` "azure-native:insights:RuleWebhookActionResponse" missing
- `🔴` "azure-native:insights:ThresholdRuleCondition" missing
- `🔴` "azure-native:insights:ThresholdRuleConditionResponse" missing
- `🔴` "azure-native:insights:TimeAggregationOperator" missing
No new resources/functions.

<!-- Release notes generated using configuration in .github/release.yml at v2.76.0 -->

## What's Changed
* Leverage az provider list by @danielrbradley in https://github.com/pulumi/pulumi-azure-native/pull/3707
* Remove aliases for lower-cased types introduced for v2 by @EronWright in https://github.com/pulumi/pulumi-azure-native/pull/3749
* Strongly type ApiVersion and SdkVersion by @danielrbradley in https://github.com/pulumi/pulumi-azure-native/pull/3753
* Preserve previous default versions in v3 by @danielrbradley in https://github.com/pulumi/pulumi-azure-native/pull/3748
* Custom delete for dbforpostgresql:Configuration to reset to the correct default by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/3752

## New Contributors
* @EronWright made their first contribution in https://github.com/pulumi/pulumi-azure-native/pull/3749

**Full Changelog**: https://github.com/pulumi/pulumi-azure-native/compare/v2.75.0...v2.76.0