# CHANGELOG

### Does the PR have any schema changes?

Found 8 breaking changes:

#### Types
- `🟡` "azure-native:powerplatform:PropertiesNetworkInjection": properties: "virtualNetworks" type changed from "#/types/azure-native:powerplatform:VirtualNetworkPropertiesList" to "array":
    - `🟡` items had no type but now has &{Type:object Ref:#/types/azure-native:powerplatform:VirtualNetworkProperties AdditionalProperties:<nil> Items:<nil> OneOf:[] Discriminator:<nil> Plain:false}
- `🟡` "azure-native:powerplatform:PropertiesResponseNetworkInjection": properties: "virtualNetworks" type changed from "#/types/azure-native:powerplatform:VirtualNetworkPropertiesListResponse" to "array":
    - `🟡` items had no type but now has &{Type:object Ref:#/types/azure-native:powerplatform:VirtualNetworkPropertiesResponse AdditionalProperties:<nil> Items:<nil> OneOf:[] Discriminator:<nil> Plain:false}
- `🔴` "azure-native:powerplatform:VirtualNetworkPropertiesList" missing
- `🔴` "azure-native:powerplatform:VirtualNetworkPropertiesListResponse" missing
- "azure-native:storageactions:StorageTaskOperation": properties:
    - `🟡` "onFailure" type changed from "#/types/azure-native:storageactions:OnFailure" to ""
    - `🟡` "onSuccess" type changed from "#/types/azure-native:storageactions:OnSuccess" to ""

#### New resources:

- `cognitiveservices.AccountCapabilityHost`
- `cognitiveservices.AccountConnection`
- `cognitiveservices.Project`
- `cognitiveservices.ProjectCapabilityHost`
- `cognitiveservices.ProjectConnection`
- `communication.SmtpUsername`
- `containerinstance.CGProfile`
- `datareplication.FabricAgent`
- `datareplication.PrivateEndpointConnection`
- `datareplication.PrivateEndpointConnectionProxy`
- `durabletask.RetentionPolicy`
- `migrate.AvsAssessmentsV2Operation`
- `migrate.CompoundAssessmentOperation`
- `migrate.HeterogeneousAssessmentOperation`
- `migrate.ImportSqlCollectorOperation`
- `migrate.MachineAssessmentsV2Operation`
- `migrate.SqlAssessmentV3Operation`
- `migrate.WebAppAssessmentV3Operation`
- `netapp.CapacityPoolBucket`
- `storagecache.AutoExportJob`

#### New functions:

- `cognitiveservices.getAccountCapabilityHost`
- `cognitiveservices.getAccountConnection`
- `cognitiveservices.getProject`
- `cognitiveservices.getProjectCapabilityHost`
- `cognitiveservices.getProjectConnection`
- `communication.getSmtpUsername`
- `containerinstance.getCGProfile`
- `datareplication.getFabricAgent`
- `datareplication.getPrivateEndpointConnection`
- `datareplication.getPrivateEndpointConnectionProxy`
- `devcenter.getProjectCatalogImageDefinitionErrorDetails`
- `devhub.getADOOAuthInfo`
- `durabletask.getRetentionPolicy`
- `migrate.getAvsAssessmentsV2Operation`
- `migrate.getCompoundAssessmentOperation`
- `migrate.getHeterogeneousAssessmentOperation`
- `migrate.getImportSqlCollectorOperation`
- `migrate.getMachineAssessmentsV2Operation`
- `migrate.getSqlAssessmentV3Operation`
- `migrate.getWebAppAssessmentV3Operation`
- `netapp.getCapacityPoolBucket`
- `storagecache.getAutoExportJob`

<!-- Release notes generated using configuration in .github/release.yml at v3.2.0 -->

## What's Changed
* Bump CI workflows nightly SDK gen and Pulumi update to provider v3 by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/4087


**Full Changelog**: https://github.com/pulumi/pulumi-azure-native/compare/v3.1.0...v3.2.0