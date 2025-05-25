# CHANGELOG

### Does the PR have any schema changes?

Found 6 breaking changes:

#### Resources
- `🔴` "azure-native:onlineexperimentation:OnlineExperimentWorkspace" missing
#### Functions
- `🔴` "azure-native:onlineexperimentation:getOnlineExperimentWorkspace" missing
#### Types
- `🔴` "azure-native:onlineexperimentation:OnlineExperimentWorkspaceProperties" missing
- `🔴` "azure-native:onlineexperimentation:OnlineExperimentWorkspacePropertiesResponse" missing
- `🟡` "azure-native:workloads:SAPVirtualInstanceIdentityResponse": properties: "userAssignedIdentities": additional properties type changed from "#/types/azure-native:workloads:SAPVirtualInstanceIdentityResponseUserAssignedIdentities" to "#/types/azure-native:workloads:UserAssignedIdentityResponse"
- `🔴` "azure-native:workloads:SAPVirtualInstanceIdentityResponseUserAssignedIdentities" missing

#### New resources:

- `onlineexperimentation.OnlineExperimentationWorkspace`

#### New functions:

- `network.getNetworkVirtualApplianceBootDiagnosticLogs`
- `network.getVirtualNetworkGatewayResiliencyInformation`
- `network.getVirtualNetworkGatewayRoutesInformation`
- `onlineexperimentation.getOnlineExperimentationWorkspace`

<!-- Release notes generated using configuration in .github/release.yml at v3.5.0 -->

## What's Changed
* Add workflow to export repo secrets by @pgavlin in https://github.com/pulumi/pulumi-azure-native/pull/4153
* Use repo-specific ESC environment by @pgavlin in https://github.com/pulumi/pulumi-azure-native/pull/4158


**Full Changelog**: https://github.com/pulumi/pulumi-azure-native/compare/v3.4.0...v3.5.0