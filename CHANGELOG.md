# CHANGELOG

### Does the PR have any schema changes?

Found 13 breaking changes:

#### Resources
- "azure-native:databricks:VNetPeering":
    - properties:
        - `🟡` "databricksVirtualNetwork" type changed from "#/types/azure-native:databricks:VirtualNetworkPeeringPropertiesFormatResponseDatabricksVirtualNetwork" to "#/types/azure-native:databricks:VirtualNetworkPeeringPropertiesFormatDatabricksVirtualNetworkResponse"
        - `🟡` "remoteVirtualNetwork" type changed from "#/types/azure-native:databricks:VirtualNetworkPeeringPropertiesFormatResponseRemoteVirtualNetwork" to "#/types/azure-native:databricks:VirtualNetworkPeeringPropertiesFormatRemoteVirtualNetworkResponse"
- "azure-native:databricks:Workspace":
    - properties:
        - `🟡` "accessConnector" type changed from "#/types/azure-native:databricks:WorkspacePropertiesResponseAccessConnector" to "#/types/azure-native:databricks:WorkspacePropertiesAccessConnectorResponse"
        - `🟡` "encryption" type changed from "#/types/azure-native:databricks:WorkspacePropertiesResponseEncryption" to "#/types/azure-native:databricks:WorkspacePropertiesEncryptionResponse"

#### Types
- "azure-native:databricks:EncryptionV2Response":
    - properties:
        - `🟡` "keyVaultProperties" type changed from "#/types/azure-native:databricks:EncryptionV2ResponseKeyVaultProperties" to "#/types/azure-native:databricks:EncryptionV2KeyVaultPropertiesResponse"
- `🔴` "azure-native:databricks:EncryptionV2ResponseKeyVaultProperties" missing
- "azure-native:databricks:ManagedDiskEncryptionResponse":
    - properties:
        - `🟡` "keyVaultProperties" type changed from "#/types/azure-native:databricks:ManagedDiskEncryptionResponseKeyVaultProperties" to "#/types/azure-native:databricks:ManagedDiskEncryptionKeyVaultPropertiesResponse"
- `🔴` "azure-native:databricks:ManagedDiskEncryptionResponseKeyVaultProperties" missing
- "azure-native:databricks:PrivateEndpointConnectionResponse":
    - required:
        - `🟡` "systemData" property has changed to Required
- `🔴` "azure-native:databricks:VirtualNetworkPeeringPropertiesFormatResponseDatabricksVirtualNetwork" missing
- `🔴` "azure-native:databricks:VirtualNetworkPeeringPropertiesFormatResponseRemoteVirtualNetwork" missing
- `🔴` "azure-native:databricks:WorkspacePropertiesResponseAccessConnector" missing
- `🔴` "azure-native:databricks:WorkspacePropertiesResponseEncryption" missing
No new resources/functions.

<!-- Release notes generated using configuration in .github/release.yml at v3.23.0 -->

## What's Changed
* Bump Databricks default API version to 2026-01-01 by @Zaid-Ajaj in https://github.com/pulumi/pulumi-azure-native/pull/4773


**Full Changelog**: https://github.com/pulumi/pulumi-azure-native/compare/v3.22.0...v3.23.0