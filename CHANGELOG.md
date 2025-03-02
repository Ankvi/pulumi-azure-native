# CHANGELOG

### Does the PR have any schema changes?

Found 9 breaking changes:

#### Resources
- `🟢` "azure-native:authorization:ManagementLockAtResourceLevel": required inputs: "apiVersion" input has changed to Required
- `🟢` "azure-native:resources:Resource": required inputs: "apiVersion" input has changed to Required
#### Functions
- `🟢` "azure-native:authorization:getManagementLockAtResourceLevel": inputs: required: "apiVersion" input has changed to Required
- `🟢` "azure-native:resources:getResource": inputs: required: "apiVersion" input has changed to Required
#### Types
- "azure-native:keyvault:VaultProperties": properties:
    - `🟡` "provisioningState" missing
    - `🟡` "vaultUri" missing
- "azure-native:keyvault:VaultPropertiesResponse": required:
    - `🟢` "provisioningState" property has changed to Required
    - `🟢` "vaultUri" property has changed to Required
- `🔴` "azure-native:keyvault:VaultProvisioningState" missing

#### New resources:

- `authorization.PimRoleEligibilitySchedule`

#### New functions:

- `authorization.getPimRoleEligibilitySchedule`

<!-- Release notes generated using configuration in .github/release.yml at v2.89.0 -->

## What's Changed
* GH-3963: Allow user to specify audience for OIDC authentication by @robcao in https://github.com/pulumi/pulumi-azure-native/pull/3970
* Support for PIM Role Eligibility Schedules by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/3959
* Type AzureClient.GET response more explicitly by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/3957
* Add special case for Key Vault vaultUri and provisioningState, making them readonly by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/3979
* Fix for async deletion of non-existent resource by @EronWright in https://github.com/pulumi/pulumi-azure-native/pull/3980
* Add exceptions for resources where the user needs to specify the API version by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/3985
* Revert unreleased spec updates to get Wheel size below 100m by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/3988


**Full Changelog**: https://github.com/pulumi/pulumi-azure-native/compare/v2.88.0...v2.89.0