# CHANGELOG

### Does the PR have any schema changes?

Found 29 breaking changes:

#### Resources
- `🔴` "azure-native:mobilepacketcore:AmfDeployment" missing
- `🔴` "azure-native:mobilepacketcore:ClusterService" missing
- `🔴` "azure-native:mobilepacketcore:NetworkFunction" missing
- `🔴` "azure-native:mobilepacketcore:NrfDeployment" missing
- `🔴` "azure-native:mobilepacketcore:NssfDeployment" missing
- `🔴` "azure-native:mobilepacketcore:ObservabilityService" missing
- `🔴` "azure-native:mobilepacketcore:SmfDeployment" missing
- `🔴` "azure-native:mobilepacketcore:UpfDeployment" missing
#### Functions
- `🔴` "azure-native:mobilepacketcore:getAmfDeployment" missing
- `🔴` "azure-native:mobilepacketcore:getClusterService" missing
- `🔴` "azure-native:mobilepacketcore:getNetworkFunction" missing
- `🔴` "azure-native:mobilepacketcore:getNrfDeployment" missing
- `🔴` "azure-native:mobilepacketcore:getNssfDeployment" missing
- `🔴` "azure-native:mobilepacketcore:getObservabilityService" missing
- `🔴` "azure-native:mobilepacketcore:getSmfDeployment" missing
- `🔴` "azure-native:mobilepacketcore:getUpfDeployment" missing
#### Types
- `🔴` "azure-native:mobilepacketcore:ClusterServiceAksClusterData" missing
- `🔴` "azure-native:mobilepacketcore:ClusterServiceAksClusterDataResponse" missing
- `🔴` "azure-native:mobilepacketcore:ClusterServiceNexusAksClusterData" missing
- `🔴` "azure-native:mobilepacketcore:ClusterServiceNexusAksClusterDataResponse" missing
- `🔴` "azure-native:mobilepacketcore:ClusterType" missing
- `🔴` "azure-native:mobilepacketcore:NetworkFunctionAdministrativeState" missing
- `🔴` "azure-native:mobilepacketcore:NetworkFunctionType" missing
- `🔴` "azure-native:mobilepacketcore:OperationalStatusResponse" missing
- `🔴` "azure-native:mobilepacketcore:QualifiedComponentDeploymentParameters" missing
- `🔴` "azure-native:mobilepacketcore:QualifiedComponentDeploymentParametersResponse" missing
- `🔴` "azure-native:mobilepacketcore:SkuDefinitions" missing
- `🔴` "azure-native:mobilepacketcore:SkuDeploymentType" missing
- `🔴` "azure-native:mobilepacketcore:SystemDataResponse" missing

#### New resources:

- `apicenter.ApiSource`
- `durabletask.Scheduler`
- `durabletask.TaskHub`
- `impact.Connector`
- `impact.Insight`
- `impact.WorkloadImpact`

#### New functions:

- `apicenter.getApiSource`
- `durabletask.getScheduler`
- `durabletask.getTaskHub`
- `impact.getConnector`
- `impact.getInsight`
- `impact.getWorkloadImpact`
- `kusto.listClusterCalloutPolicies`

<!-- Release notes generated using configuration in .github/release.yml at v2.72.0 -->

## What's Changed
* Port custom blob and static website resources to current SDK, azcore, and azidentity by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/3698
* Add docs about MachineLearningServices ServerlessEndpoint requiring a MarketplaceSubscription by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/3704


**Full Changelog**: https://github.com/pulumi/pulumi-azure-native/compare/v2.71.0...v2.72.0