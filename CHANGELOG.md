# CHANGELOG

### Does the PR have any schema changes?

Found 9 breaking changes:

#### Resources
- "azure-native:documentdb:FirewallRule":
    - inputs:
        - `🟡` "endIpAddress" missing
        - `🟡` "startIpAddress" missing
    - properties:
        - `🟡` "endIpAddress" missing output "endIpAddress"
        - `🟡` "provisioningState" missing output "provisioningState"
        - `🟡` "startIpAddress" missing output "startIpAddress"
#### Types
- `🟡` "azure-native:billing:InvoiceSectionProperties": properties: "targetCloud" type changed from "" to "string"
- `🔴` "azure-native:billing:TargetCloud" missing
- `🟢` "azure-native:datafactory:SharePointOnlineListLinkedService": required: "servicePrincipalKey" property is no longer Required
- `🟢` "azure-native:datafactory:SharePointOnlineListLinkedServiceResponse": required: "servicePrincipalKey" property is no longer Required

#### New resources:

- `network.IpamPool`
- `network.ReachabilityAnalysisIntent`
- `network.ReachabilityAnalysisRun`
- `network.StaticCidr`
- `network.VerifierWorkspace`

#### New functions:

- `network.getIpamPool`
- `network.getIpamPoolUsage`
- `network.getReachabilityAnalysisIntent`
- `network.getReachabilityAnalysisRun`
- `network.getStaticCidr`
- `network.getVerifierWorkspace`
- `network.listIpamPoolAssociatedResources`

<!-- Release notes generated using configuration in .github/release.yml at v2.57.0 -->

## What's Changed
* Remove erroneous useOids and useMsi defaults that interfere with env variables by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/3525
* Fix nightly gen by @danielrbradley in https://github.com/pulumi/pulumi-azure-native/pull/3527


**Full Changelog**: https://github.com/pulumi/pulumi-azure-native/compare/v2.56.0...v2.57.0