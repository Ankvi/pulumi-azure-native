# CHANGELOG

### Does the PR have any schema changes?

Found 10 breaking changes:

#### Resources
- "azure-native:quota:GroupQuota":
    - `🟡` inputs: "mgId" missing
    - `🟢` required inputs: "managementGroupId" input has changed to Required
- "azure-native:quota:GroupQuotaSubscription":
    - `🟡` inputs: "mgId" missing
    - `🟢` required inputs: "managementGroupId" input has changed to Required
#### Functions
- "azure-native:quota:getGroupQuota": inputs:
    - `🟡` "mgId" missing input "mgId"
    - `🟢` required: "managementGroupId" input has changed to Required
- "azure-native:quota:getGroupQuotaSubscription": inputs:
    - `🟡` "mgId" missing input "mgId"
    - `🟢` required: "managementGroupId" input has changed to Required
#### Types
- `🟡` "azure-native:loadtestservice:EncryptionPropertiesResponse": properties: "identity" type changed from "#/types/azure-native:loadtestservice:EncryptionPropertiesResponseIdentity" to "#/types/azure-native:loadtestservice:EncryptionPropertiesIdentityResponse"
- `🔴` "azure-native:loadtestservice:EncryptionPropertiesResponseIdentity" missing

#### New resources:

- `azurearcdata.SqlServerAvailabilityGroup`

#### New functions:

- `azurearcdata.getSqlServerAvailabilityGroup`
- `azurearcdata.getSqlServerAvailabilityGroupDetailView`
- `azurearcdata.getSqlServerInstanceTelemetry`

<!-- Release notes generated using configuration in .github/release.yml at v2.36.0 -->



**Full Changelog**: https://github.com/pulumi/pulumi-azure-native/compare/v2.35.0...v2.36.0