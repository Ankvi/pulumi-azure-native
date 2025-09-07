# CHANGELOG

### Does the PR have any schema changes?

Found 10 breaking changes:

#### Resources
- `🟡` "azure-native:edge:DynamicSchemaVersion": inputs: "schemaVersionName" missing
- `🟡` "azure-native:search:Service": inputs: "publicNetworkAccess" type changed from "#/types/azure-native:search:PublicNetworkAccess" to ""
#### Functions
- "azure-native:edge:getDynamicSchemaVersion": inputs:
    - `🟡` "schemaVersionName" missing input "schemaVersionName"
    - `🟢` required: "dynamicSchemaVersionName" input has changed to Required
#### Types
- `🟡` "azure-native:search:Identity": properties: "type" type changed from "#/types/azure-native:search:IdentityType" to ""
- `🟢` "azure-native:search:PrivateEndpointConnectionResponse": required: "systemData" property has changed to Required
- "azure-native:search:SharedPrivateLinkResourceProperties": properties:
    - `🟡` "provisioningState" type changed from "#/types/azure-native:search:SharedPrivateLinkResourceProvisioningState" to ""
    - `🟡` "status" type changed from "#/types/azure-native:search:SharedPrivateLinkResourceStatus" to ""
- `🟢` "azure-native:search:SharedPrivateLinkResourceResponse": required: "systemData" property has changed to Required
- `🟡` "azure-native:search:Sku": properties: "name" type changed from "#/types/azure-native:search:SkuName" to ""

#### New resources:

- `apimanagement.ClientApplication`
- `apimanagement.ClientApplicationProductLink`

#### New functions:

- `apimanagement.getClientApplication`
- `apimanagement.getClientApplicationProductLink`
- `apimanagement.listClientApplicationSecrets`

<!-- Release notes generated using configuration in .github/release.yml at v3.8.0 -->

## What's Changed
* Fix link in CHANGELOG_OLD.md by @bradoyler in https://github.com/pulumi/pulumi-azure-native/pull/4237
* Remove deprecated CDN resource from example by @blampe in https://github.com/pulumi/pulumi-azure-native/pull/4272
* Bump default version for ScheduledQueryRules to 2025-01-01-preview by @mjeffryes in https://github.com/pulumi/pulumi-azure-native/pull/4271
* Decouple provider from go-autorest legacy system by @EronWright in https://github.com/pulumi/pulumi-azure-native/pull/4242
* Update search API by @blampe in https://github.com/pulumi/pulumi-azure-native/pull/4278
* Update redisenterprise API by @blampe in https://github.com/pulumi/pulumi-azure-native/pull/4279
* new provider option: useDefaultAzureCredential by @EronWright in https://github.com/pulumi/pulumi-azure-native/pull/4174
* Skip OIDC test if OIDC_ARM_CLIENT_ID is not set by @EronWright in https://github.com/pulumi/pulumi-azure-native/pull/4289
* Support for custom Azure environments and disabling instance discovery by @EronWright in https://github.com/pulumi/pulumi-azure-native/pull/4288
* [TestAccKeyVaultTs_CLI] NoParallel by @EronWright in https://github.com/pulumi/pulumi-azure-native/pull/4293

## New Contributors
* @bradoyler made their first contribution in https://github.com/pulumi/pulumi-azure-native/pull/4237

**Full Changelog**: https://github.com/pulumi/pulumi-azure-native/compare/v3.7.1...v3.8.0