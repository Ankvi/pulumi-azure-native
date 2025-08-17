# CHANGELOG

### Does the PR have any schema changes?

Found 5 breaking changes:

#### Types
- `🟢` "azure-native:app:BlobStorageTokenStore": required: "sasUrlSettingName" property is no longer Required
- `🟢` "azure-native:app:BlobStorageTokenStoreResponse": required: "sasUrlSettingName" property is no longer Required
- `🟢` "azure-native:app:CertificateResponseProperties": required: "deploymentErrors" property has changed to Required
- "azure-native:app:ConnectedEnvironmentStorageResponseProperties": required:
    - `🟢` "deploymentErrors" property has changed to Required
    - `🟢` "provisioningState" property has changed to Required
No new resources/functions.

<!-- Release notes generated using configuration in .github/release.yml at v3.7.1 -->

## What's Changed
* Regenerate schema for 3.7 by @EronWright in https://github.com/pulumi/pulumi-azure-native/pull/4259


**Full Changelog**: https://github.com/pulumi/pulumi-azure-native/compare/v3.7.0...v3.7.1