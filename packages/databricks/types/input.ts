import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * AddressSpace contains an array of IP address ranges that can be used by subnets of the virtual network.
 */
export interface AddressSpaceArgs {
    /**
     * A list of address blocks reserved for this virtual network in CIDR notation.
     */
    addressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The object that contains details of encryption used on the workspace.
 */
export interface EncryptionArgs {
    /**
     * The name of KeyVault key.
     */
    keyName?: pulumi.Input<string>;
    /**
     * The encryption keySource (provider). Possible values (case-insensitive):  Default, Microsoft.Keyvault
     */
    keySource?: pulumi.Input<string | enums.KeySource>;
    /**
     * The Uri of KeyVault.
     */
    keyVaultUri?: pulumi.Input<string>;
    /**
     * The version of KeyVault key.
     */
    keyVersion?: pulumi.Input<string>;
}
/**
 * encryptionArgsProvideDefaults sets the appropriate defaults for EncryptionArgs
 */
export function encryptionArgsProvideDefaults(val: EncryptionArgs): EncryptionArgs {
    return {
        ...val,
        keySource: (val.keySource) ?? "Default",
    };
}

/**
 * Encryption entities for databricks workspace resource.
 */
export interface EncryptionEntitiesDefinitionArgs {
    /**
     * Encryption properties for the databricks managed disks.
     */
    managedDisk?: pulumi.Input<ManagedDiskEncryptionArgs>;
    /**
     * Encryption properties for the databricks managed services.
     */
    managedServices?: pulumi.Input<EncryptionV2Args>;
}

/**
 * The object that contains details of encryption used on the workspace.
 */
export interface EncryptionV2Args {
    /**
     * The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.Keyvault
     */
    keySource: pulumi.Input<string | enums.EncryptionKeySource>;
    /**
     * Key Vault input properties for encryption.
     */
    keyVaultProperties?: pulumi.Input<EncryptionV2KeyVaultPropertiesArgs>;
}

/**
 * Key Vault input properties for encryption.
 */
export interface EncryptionV2KeyVaultPropertiesArgs {
    /**
     * The name of KeyVault key.
     */
    keyName: pulumi.Input<string>;
    /**
     * The Uri of KeyVault.
     */
    keyVaultUri: pulumi.Input<string>;
    /**
     * The version of KeyVault key.
     */
    keyVersion: pulumi.Input<string>;
}

/**
 * The object that contains details of encryption used on the workspace.
 */
export interface ManagedDiskEncryptionArgs {
    /**
     * The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.Keyvault
     */
    keySource: pulumi.Input<string | enums.EncryptionKeySource>;
    /**
     * Key Vault input properties for encryption.
     */
    keyVaultProperties: pulumi.Input<ManagedDiskEncryptionKeyVaultPropertiesArgs>;
    /**
     * Indicate whether the latest key version should be automatically used for Managed Disk Encryption.
     */
    rotationToLatestKeyVersionEnabled?: pulumi.Input<boolean>;
}

/**
 * Key Vault input properties for encryption.
 */
export interface ManagedDiskEncryptionKeyVaultPropertiesArgs {
    /**
     * The name of KeyVault key.
     */
    keyName: pulumi.Input<string>;
    /**
     * The URI of KeyVault.
     */
    keyVaultUri: pulumi.Input<string>;
    /**
     * The version of KeyVault key.
     */
    keyVersion: pulumi.Input<string>;
}

/**
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityArgs {
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The properties of a private endpoint connection
 */
export interface PrivateEndpointConnectionPropertiesArgs {
    /**
     * GroupIds from the private link service resource.
     */
    groupIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Private endpoint connection state
     */
    privateLinkServiceConnectionState: pulumi.Input<PrivateLinkServiceConnectionStateArgs>;
}

/**
 * The current state of a private endpoint connection
 */
export interface PrivateLinkServiceConnectionStateArgs {
    /**
     * Actions required for a private endpoint connection
     */
    actionsRequired?: pulumi.Input<string>;
    /**
     * The description for the current state of a private endpoint connection
     */
    description?: pulumi.Input<string>;
    /**
     * The status of a private endpoint connection
     */
    status: pulumi.Input<string | enums.PrivateLinkServiceConnectionStatus>;
}

/**
 * SKU for the resource.
 */
export interface SkuArgs {
    /**
     * The SKU name.
     */
    name: pulumi.Input<string>;
    /**
     * The SKU tier.
     */
    tier?: pulumi.Input<string>;
}

/**
 *  The remote virtual network should be in the same region. See here to learn more (https://docs.microsoft.com/en-us/azure/databricks/administration-guide/cloud-configurations/azure/vnet-peering).
 */
export interface VirtualNetworkPeeringPropertiesFormatDatabricksVirtualNetworkArgs {
    /**
     * The Id of the databricks virtual network.
     */
    id?: pulumi.Input<string>;
}

/**
 *  The remote virtual network should be in the same region. See here to learn more (https://docs.microsoft.com/en-us/azure/databricks/administration-guide/cloud-configurations/azure/vnet-peering).
 */
export interface VirtualNetworkPeeringPropertiesFormatRemoteVirtualNetworkArgs {
    /**
     * The Id of the remote virtual network.
     */
    id?: pulumi.Input<string>;
}

/**
 * The value which should be used for this field.
 */
export interface WorkspaceCustomBooleanParameterArgs {
    /**
     * The value which should be used for this field.
     */
    value: pulumi.Input<boolean>;
}

/**
 * Custom Parameters used for Cluster Creation.
 */
export interface WorkspaceCustomParametersArgs {
    /**
     * The ID of a Azure Machine Learning workspace to link with Databricks workspace
     */
    amlWorkspaceId?: pulumi.Input<WorkspaceCustomStringParameterArgs>;
    /**
     * The name of the Private Subnet within the Virtual Network
     */
    customPrivateSubnetName?: pulumi.Input<WorkspaceCustomStringParameterArgs>;
    /**
     * The name of a Public Subnet within the Virtual Network
     */
    customPublicSubnetName?: pulumi.Input<WorkspaceCustomStringParameterArgs>;
    /**
     * The ID of a Virtual Network where this Databricks Cluster should be created
     */
    customVirtualNetworkId?: pulumi.Input<WorkspaceCustomStringParameterArgs>;
    /**
     * Should the Public IP be Disabled?
     */
    enableNoPublicIp?: pulumi.Input<WorkspaceCustomBooleanParameterArgs>;
    /**
     * Contains the encryption details for Customer-Managed Key (CMK) enabled workspace.
     */
    encryption?: pulumi.Input<WorkspaceEncryptionParameterArgs>;
    /**
     * Name of the outbound Load Balancer Backend Pool for Secure Cluster Connectivity (No Public IP).
     */
    loadBalancerBackendPoolName?: pulumi.Input<WorkspaceCustomStringParameterArgs>;
    /**
     * Resource URI of Outbound Load balancer for Secure Cluster Connectivity (No Public IP) workspace.
     */
    loadBalancerId?: pulumi.Input<WorkspaceCustomStringParameterArgs>;
    /**
     * Name of the NAT gateway for Secure Cluster Connectivity (No Public IP) workspace subnets.
     */
    natGatewayName?: pulumi.Input<WorkspaceCustomStringParameterArgs>;
    /**
     * Prepare the workspace for encryption. Enables the Managed Identity for managed storage account.
     */
    prepareEncryption?: pulumi.Input<WorkspaceCustomBooleanParameterArgs>;
    /**
     * Name of the Public IP for No Public IP workspace with managed vNet.
     */
    publicIpName?: pulumi.Input<WorkspaceCustomStringParameterArgs>;
    /**
     * A boolean indicating whether or not the DBFS root file system will be enabled with secondary layer of encryption with platform managed keys for data at rest.
     */
    requireInfrastructureEncryption?: pulumi.Input<WorkspaceCustomBooleanParameterArgs>;
    /**
     * Default DBFS storage account name.
     */
    storageAccountName?: pulumi.Input<WorkspaceCustomStringParameterArgs>;
    /**
     * Storage account SKU name, ex: Standard_GRS, Standard_LRS. Refer https://aka.ms/storageskus for valid inputs.
     */
    storageAccountSkuName?: pulumi.Input<WorkspaceCustomStringParameterArgs>;
    /**
     * Address prefix for Managed virtual network. Default value for this input is 10.139.
     */
    vnetAddressPrefix?: pulumi.Input<WorkspaceCustomStringParameterArgs>;
}
/**
 * workspaceCustomParametersArgsProvideDefaults sets the appropriate defaults for WorkspaceCustomParametersArgs
 */
export function workspaceCustomParametersArgsProvideDefaults(val: WorkspaceCustomParametersArgs): WorkspaceCustomParametersArgs {
    return {
        ...val,
        encryption: (val.encryption ? pulumi.output(val.encryption).apply(workspaceEncryptionParameterArgsProvideDefaults) : undefined),
    };
}

/**
 * The Value.
 */
export interface WorkspaceCustomStringParameterArgs {
    /**
     * The value which should be used for this field.
     */
    value: pulumi.Input<string>;
}

/**
 * The object that contains details of encryption used on the workspace.
 */
export interface WorkspaceEncryptionParameterArgs {
    /**
     * The value which should be used for this field.
     */
    value?: pulumi.Input<EncryptionArgs>;
}
/**
 * workspaceEncryptionParameterArgsProvideDefaults sets the appropriate defaults for WorkspaceEncryptionParameterArgs
 */
export function workspaceEncryptionParameterArgsProvideDefaults(val: WorkspaceEncryptionParameterArgs): WorkspaceEncryptionParameterArgs {
    return {
        ...val,
        value: (val.value ? pulumi.output(val.value).apply(encryptionArgsProvideDefaults) : undefined),
    };
}

/**
 * Encryption properties for databricks workspace
 */
export interface WorkspacePropertiesEncryptionArgs {
    /**
     * Encryption entities definition for the workspace.
     */
    entities: pulumi.Input<EncryptionEntitiesDefinitionArgs>;
}

/**
 * The workspace provider authorization.
 */
export interface WorkspaceProviderAuthorizationArgs {
    /**
     * The provider's principal identifier. This is the identity that the provider will use to call ARM to manage the workspace resources.
     */
    principalId: pulumi.Input<string>;
    /**
     * The provider's role definition identifier. This role will define all the permissions that the provider must have on the workspace's container resource group. This role definition cannot have permission to delete the resource group.
     */
    roleDefinitionId: pulumi.Input<string>;
}




