# CHANGELOG

### Does the PR have any schema changes?

Found 6 breaking changes:

#### Resources
- "azure-native:containerservice:ManagedCluster":
    - `🟡` inputs: "enablePodSecurityPolicy" missing
    - `🟡` properties: "enablePodSecurityPolicy" missing output "enablePodSecurityPolicy"
#### Types
- `🟡` "azure-native:containerservice:ManagedClusterLoadBalancerProfile": properties: "effectiveOutboundIPs" missing
- `🟢` "azure-native:containerservice:ManagedClusterLoadBalancerProfileResponse": required: "effectiveOutboundIPs" property has changed to Required
- `🟡` "azure-native:containerservice:ManagedClusterNATGatewayProfile": properties: "effectiveOutboundIPs" missing
- `🟢` "azure-native:containerservice:ManagedClusterNATGatewayProfileResponse": required: "effectiveOutboundIPs" property has changed to Required

#### New resources:

- `web.WebAppAuthSettingsV2WithoutSecrets`
- `web.WebAppAuthSettingsV2WithoutSecretsSlot`

#### New functions:

- `web.getWebAppAuthSettingsV2WithoutSecrets`
- `web.getWebAppAuthSettingsV2WithoutSecretsSlot`

<!-- Release notes generated using configuration in .github/release.yml at v3.11.0 -->

## What's Changed
* Fix publish creds by @blampe in https://github.com/pulumi/pulumi-azure-native/pull/4379
* Update CONTRIBUTING.md to include submodule cloning by @guineveresaenger in https://github.com/pulumi/pulumi-azure-native/pull/4374
* Fix CI authentication expiration by switching to service principal by @EronWright in https://github.com/pulumi/pulumi-azure-native/pull/4394
* Fix PIM role management policy update bug by @EronWright in https://github.com/pulumi/pulumi-azure-native/pull/4398
* Fix panic in PimRoleEligibilitySchedule with NoExpiration type by @EronWright in https://github.com/pulumi/pulumi-azure-native/pull/4402
* Don't tag prerelease SDKs by @blampe in https://github.com/pulumi/pulumi-azure-native/pull/4413
* Fix IsNotFound to validate Azure error codes before removing resources by @EronWright in https://github.com/pulumi/pulumi-azure-native/pull/4416
* Update first-party Pulumi dependencies (major) by @pulumi-renovate[bot] in https://github.com/pulumi/pulumi-azure-native/pull/4423
* Pin dependencies by @pulumi-renovate[bot] in https://github.com/pulumi/pulumi-azure-native/pull/4422
* Fix concurrent FederatedIdentityCredential creation with retry logic by @EronWright in https://github.com/pulumi/pulumi-azure-native/pull/4421
* Update module github.com/pulumi/providertest to v0.4.1 by @pulumi-renovate[bot] in https://github.com/pulumi/pulumi-azure-native/pull/4430
* Update vulnerable dependencies [SECURITY] by @pulumi-renovate[bot] in https://github.com/pulumi/pulumi-azure-native/pull/4434
* Update first-party Pulumi dependencies by @pulumi-renovate[bot] in https://github.com/pulumi/pulumi-azure-native/pull/4435
* Fix spurious resource replacements during API version upgrades with refresh by @EronWright in https://github.com/pulumi/pulumi-azure-native/pull/4429
* Update dependency @pulumi/azure-native to v3.10.2 by @pulumi-renovate[bot] in https://github.com/pulumi/pulumi-azure-native/pull/4440
* Update azure-sdk-for-go monorepo by @pulumi-renovate[bot] in https://github.com/pulumi/pulumi-azure-native/pull/4441
* Pin provider-version-action to v1.6.0 to fix PyPI upload failures by @Copilot in https://github.com/pulumi/pulumi-azure-native/pull/4443
* Disable nightly SDK gen job by @blampe in https://github.com/pulumi/pulumi-azure-native/pull/4442
* Update ContainerService to 2025-09-01 by @blampe in https://github.com/pulumi/pulumi-azure-native/pull/4407
* Update first-party Pulumi dependencies by @pulumi-renovate[bot] in https://github.com/pulumi/pulumi-azure-native/pull/4446
* Add support for Cosmos DB hybrid search (API version 2025-04-15) by @EronWright in https://github.com/pulumi/pulumi-azure-native/pull/4404
* Add /upgrade-azure-api slash command by @EronWright in https://github.com/pulumi/pulumi-azure-native/pull/4405
* Remove legacy auth code by @EronWright in https://github.com/pulumi/pulumi-azure-native/pull/4284
* Fix converter.Types not updated after parameterization by @EronWright in https://github.com/pulumi/pulumi-azure-native/pull/4455

## New Contributors
* @pulumi-renovate[bot] made their first contribution in https://github.com/pulumi/pulumi-azure-native/pull/4423

**Full Changelog**: https://github.com/pulumi/pulumi-azure-native/compare/v3.10.0...v3.11.0