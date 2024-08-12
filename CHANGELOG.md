# CHANGELOG

### Does the PR have any schema changes?

Found 4 breaking changes:

#### Resources
- "azure-native:monitor:PipelineGroup":
    - `🟡` inputs: "extendedLocation" type changed from "#/types/azure-native:monitor:ExtendedLocation" to "#/types/azure-native:monitor:AzureResourceManagerCommonTypesExtendedLocation"
    - `🟡` properties: "extendedLocation" type changed from "#/types/azure-native:monitor:ExtendedLocationResponse" to "#/types/azure-native:monitor:AzureResourceManagerCommonTypesExtendedLocationResponse"
#### Types
- `🔴` "azure-native:monitor:ExtendedLocation" missing
- `🔴` "azure-native:monitor:ExtendedLocationResponse" missing
No new resources/functions.

<!-- Release notes generated using configuration in .github/release.yml at v2.55.0 -->

## What's Changed
* Manually set JobSchedule.parameters to ForceNew by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/3506
* Add WebApp slot config resources by @danielrbradley in https://github.com/pulumi/pulumi-azure-native/pull/3508


**Full Changelog**: https://github.com/pulumi/pulumi-azure-native/compare/v2.54.0...v2.55.0