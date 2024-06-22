# CHANGELOG

### Does the PR have any schema changes?

Found 18 breaking changes:

#### Resources
- "azure-native:machinelearningservices:ConnectionDeployment":
    - `🟡` inputs: "properties" type changed from "" to "#/types/azure-native:machinelearningservices:EndpointDeploymentResourceProperties"
    - `🟡` properties: "properties" type changed from "" to "#/types/azure-native:machinelearningservices:EndpointDeploymentResourcePropertiesResponse"
- `🔴` "azure-native:securitydevops:AzureDevOpsConnector" missing
- `🔴` "azure-native:securitydevops:GitHubConnector" missing
#### Functions
- `🔴` "azure-native:securitydevops:getAzureDevOpsConnector" missing
- `🔴` "azure-native:securitydevops:getGitHubConnector" missing
#### Types
- `🔴` "azure-native:securitydevops:AuthorizationInfo" missing
- `🔴` "azure-native:securitydevops:AuthorizationInfoResponse" missing
- `🔴` "azure-native:securitydevops:AutoDiscovery" missing
- `🔴` "azure-native:securitydevops:AzureDevOpsConnectorProperties" missing
- `🔴` "azure-native:securitydevops:AzureDevOpsConnectorPropertiesResponse" missing
- `🔴` "azure-native:securitydevops:AzureDevOpsOrgMetadata" missing
- `🔴` "azure-native:securitydevops:AzureDevOpsOrgMetadataResponse" missing
- `🔴` "azure-native:securitydevops:AzureDevOpsProjectMetadata" missing
- `🔴` "azure-native:securitydevops:AzureDevOpsProjectMetadataResponse" missing
- `🔴` "azure-native:securitydevops:GitHubConnectorProperties" missing
- `🔴` "azure-native:securitydevops:GitHubConnectorPropertiesResponse" missing
- `🔴` "azure-native:securitydevops:SystemDataResponse" missing

#### New resources:

- `videoindexer.PrivateEndpointConnection`

#### New functions:

- `videoindexer.getPrivateEndpointConnection`

<!-- Release notes generated using configuration in .github/release.yml at v2.46.0 -->

## What's Changed
* Reset pulumi-java to v0.10.0 due to issue 1363 by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/3342
* Improve auth CLI missing error by @danielrbradley in https://github.com/pulumi/pulumi-azure-native/pull/3349
* Changing a web:WebApp's 'kind' should recreate the WebApp by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/3352
* Allow diffs to unblock release by @danielrbradley in https://github.com/pulumi/pulumi-azure-native/pull/3360
* Disable RequireEmptyPreviewAfterRefresh for 2 tests by @danielrbradley in https://github.com/pulumi/pulumi-azure-native/pull/3374


**Full Changelog**: https://github.com/pulumi/pulumi-azure-native/compare/v2.45.0...v2.46.0