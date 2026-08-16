import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * AddressSpace contains an array of IP address ranges that can be used by subnets of the virtual network.
 */
export interface AddressSpaceArgs {
    /**
     * A list of address blocks reserved for this virtual network in CIDR notation.
     */
    addressPrefixes?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Status of automated cluster updates feature.
 */
export interface AutomaticClusterUpdateDefinitionArgs {
    value?: pulumi.Input<string | enums.AutomaticClusterUpdateValue | undefined>;
}

/**
 * Status of Compliance Security Profile feature.
 */
export interface ComplianceSecurityProfileDefinitionArgs {
    /**
     * Compliance standards associated with the workspace.
     */
    complianceStandards?: pulumi.Input<pulumi.Input<string | enums.ComplianceStandard>[] | undefined>;
    value?: pulumi.Input<string | enums.ComplianceSecurityProfileValue | undefined>;
}

/**
 * These properties lets user specify default catalog properties during workspace creation. Not allowed in Serverless ComputeMode workspace.
 */
export interface DefaultCatalogPropertiesArgs {
    /**
     * Specifies the initial Name of default catalog. If not specified, the name of the workspace will be used.
     */
    initialName?: pulumi.Input<string | undefined>;
    /**
     * Defines the initial type of the default catalog. Possible values (case-insensitive):  HiveMetastore, UnityCatalog
     */
    initialType?: pulumi.Input<string | enums.InitialType | undefined>;
}
/**
 * defaultCatalogPropertiesArgsProvideDefaults sets the appropriate defaults for DefaultCatalogPropertiesArgs
 */
export function defaultCatalogPropertiesArgsProvideDefaults(val: DefaultCatalogPropertiesArgs): DefaultCatalogPropertiesArgs {
    return {
        ...val,
        initialType: (val.initialType) ?? "HiveMetastore",
    };
}

/**
 * The object that contains details of encryption used on the workspace.
 */
export interface EncryptionArgs {
    /**
     * The name of KeyVault key.
     */
    keyName?: pulumi.Input<string | undefined>;
    /**
     * The encryption keySource (provider). Possible values (case-insensitive):  Default, Microsoft.Keyvault
     */
    keySource?: pulumi.Input<string | enums.KeySource | undefined>;
    /**
     * The Uri of KeyVault.
     */
    keyVaultUri?: pulumi.Input<string | undefined>;
    /**
     * The version of KeyVault key.
     */
    keyVersion?: pulumi.Input<string | undefined>;
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
     * Encryption properties for the databricks managed disks. Not allowed in Serverless ComputeMode workspace.
     */
    managedDisk?: pulumi.Input<ManagedDiskEncryptionArgs | undefined>;
    /**
     * Encryption properties for the databricks managed services. Supported in both Serverless and Hybrid ComputeMode.
     */
    managedServices?: pulumi.Input<EncryptionV2Args | undefined>;
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
    keyVaultProperties?: pulumi.Input<EncryptionV2KeyVaultPropertiesArgs | undefined>;
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
 * Status of settings related to the Enhanced Security and Compliance Add-On.
 */
export interface EnhancedSecurityComplianceDefinitionArgs {
    /**
     * Status of automated cluster updates feature.
     */
    automaticClusterUpdate?: pulumi.Input<AutomaticClusterUpdateDefinitionArgs | undefined>;
    /**
     * Status of Compliance Security Profile feature.
     */
    complianceSecurityProfile?: pulumi.Input<ComplianceSecurityProfileDefinitionArgs | undefined>;
    /**
     * Status of Enhanced Security Monitoring feature.
     */
    enhancedSecurityMonitoring?: pulumi.Input<EnhancedSecurityMonitoringDefinitionArgs | undefined>;
}

/**
 * Status of Enhanced Security Monitoring feature.
 */
export interface EnhancedSecurityMonitoringDefinitionArgs {
    value?: pulumi.Input<string | enums.EnhancedSecurityMonitoringValue | undefined>;
}

/**
 * The object that contains details of encryption used on the workspace.
 */
export interface ManagedDiskEncryptionArgs {
    /**
     * The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.Keyvault. Not allowed in Serverless ComputeMode workspace.
     */
    keySource: pulumi.Input<string | enums.EncryptionKeySource>;
    /**
     * Key Vault input properties for encryption.
     */
    keyVaultProperties: pulumi.Input<ManagedDiskEncryptionKeyVaultPropertiesArgs>;
    /**
     * Indicate whether the latest key version should be automatically used for Managed Disk Encryption.
     */
    rotationToLatestKeyVersionEnabled?: pulumi.Input<boolean | undefined>;
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
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * The properties of a private endpoint connection.
 */
export interface PrivateEndpointConnectionPropertiesArgs {
    /**
     * GroupIds from the private link service resource.
     */
    groupIds?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Private endpoint connection state
     */
    privateLinkServiceConnectionState: pulumi.Input<PrivateLinkServiceConnectionStateArgs>;
}

/**
 * The current state of a private endpoint connection.
 */
export interface PrivateLinkServiceConnectionStateArgs {
    /**
     * Actions required for a private endpoint connection
     */
    actionsRequired?: pulumi.Input<string | undefined>;
    /**
     * The description for the current state of a private endpoint connection
     */
    description?: pulumi.Input<string | undefined>;
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
    tier?: pulumi.Input<string | undefined>;
}

/**
 * The remote virtual network should be in the same region. See here to learn more (https://docs.microsoft.com/en-us/azure/databricks/administration-guide/cloud-configurations/azure/vnet-peering).
 */
export interface VirtualNetworkPeeringPropertiesFormatDatabricksVirtualNetworkArgs {
    /**
     * The Id of the databricks virtual network.
     */
    id?: pulumi.Input<string | undefined>;
}

/**
 * The remote virtual network should be in the same region. See here to learn more (https://docs.microsoft.com/en-us/azure/databricks/administration-guide/cloud-configurations/azure/vnet-peering).
 */
export interface VirtualNetworkPeeringPropertiesFormatRemoteVirtualNetworkArgs {
    /**
     * The Id of the remote virtual network.
     */
    id?: pulumi.Input<string | undefined>;
}

/**
 * The value which should be used for this field.
 */
export interface WorkspaceCustomBooleanParameterArgs {
    /**
     * The type of variable that this is
     */
    type?: pulumi.Input<string | enums.CustomParameterType | undefined>;
    /**
     * The value which should be used for this field.
     */
    value: pulumi.Input<boolean>;
}

/**
 * Custom Parameters used for Workspace Creation. Not allowed in Serverless ComputeMode workspace.
 */
export interface WorkspaceCustomParametersArgs {
    /**
     * The ID of a Azure Machine Learning workspace to link with Databricks workspace. Not allowed in Serverless ComputeMode workspace.
     */
    amlWorkspaceId?: pulumi.Input<WorkspaceCustomStringParameterArgs | undefined>;
    /**
     * The name of the Private Subnet within the Virtual Network. Not allowed in Serverless ComputeMode workspace.
     */
    customPrivateSubnetName?: pulumi.Input<WorkspaceCustomStringParameterArgs | undefined>;
    /**
     * The name of a Public Subnet within the Virtual Network. Not allowed in Serverless ComputeMode workspace.
     */
    customPublicSubnetName?: pulumi.Input<WorkspaceCustomStringParameterArgs | undefined>;
    /**
     * The ID of a Virtual Network where this Databricks Cluster should be created. Not allowed in Serverless ComputeMode workspace.
     */
    customVirtualNetworkId?: pulumi.Input<WorkspaceCustomStringParameterArgs | undefined>;
    /**
     * Boolean indicating whether the public IP should be disabled. Default value is true. Not allowed in Serverless ComputeMode workspace.
     */
    enableNoPublicIp?: pulumi.Input<WorkspaceNoPublicIPBooleanParameterArgs | undefined>;
    /**
     * Contains the encryption details for Customer-Managed Key (CMK) enabled workspace.Not allowed in Serverless ComputeMode workspace.
     */
    encryption?: pulumi.Input<WorkspaceEncryptionParameterArgs | undefined>;
    /**
     * Name of the outbound Load Balancer Backend Pool for Secure Cluster Connectivity (No Public IP). Not allowed in Serverless ComputeMode workspace.
     */
    loadBalancerBackendPoolName?: pulumi.Input<WorkspaceCustomStringParameterArgs | undefined>;
    /**
     * Resource URI of Outbound Load balancer for Secure Cluster Connectivity (No Public IP) workspace. Not allowed in Serverless ComputeMode workspace.
     */
    loadBalancerId?: pulumi.Input<WorkspaceCustomStringParameterArgs | undefined>;
    /**
     * Name of the NAT gateway for Secure Cluster Connectivity (No Public IP) workspace subnets. Not allowed in Serverless ComputeMode workspace.
     */
    natGatewayName?: pulumi.Input<WorkspaceCustomStringParameterArgs | undefined>;
    /**
     * Prepare the workspace for encryption. Enables the Managed Identity for managed storage account. Not allowed in Serverless ComputeMode workspace.
     */
    prepareEncryption?: pulumi.Input<WorkspaceCustomBooleanParameterArgs | undefined>;
    /**
     * Name of the Public IP for No Public IP workspace with managed vNet. Not allowed in Serverless ComputeMode workspace.
     */
    publicIpName?: pulumi.Input<WorkspaceCustomStringParameterArgs | undefined>;
    /**
     * A boolean indicating whether or not the DBFS root file system will be enabled with secondary layer of encryption with platform managed keys for data at rest. Not allowed in Serverless ComputeMode workspace.
     */
    requireInfrastructureEncryption?: pulumi.Input<WorkspaceCustomBooleanParameterArgs | undefined>;
    /**
     * Default DBFS storage account name. Not allowed in Serverless ComputeMode workspace.
     */
    storageAccountName?: pulumi.Input<WorkspaceCustomStringParameterArgs | undefined>;
    /**
     * Storage account SKU name, ex: Standard_GRS, Standard_LRS. Refer https://aka.ms/storageskus for valid inputs. Not allowed in Serverless ComputeMode workspace.
     */
    storageAccountSkuName?: pulumi.Input<WorkspaceCustomStringParameterArgs | undefined>;
    /**
     * Address prefix for Managed virtual network. Default value for this input is 10.139. Not allowed in Serverless ComputeMode workspace.
     */
    vnetAddressPrefix?: pulumi.Input<WorkspaceCustomStringParameterArgs | undefined>;
}
/**
 * workspaceCustomParametersArgsProvideDefaults sets the appropriate defaults for WorkspaceCustomParametersArgs
 */
export function workspaceCustomParametersArgsProvideDefaults(val: WorkspaceCustomParametersArgs): WorkspaceCustomParametersArgs {
    return {
        ...val,
        encryption: pulumi.output(val.encryption).apply(v => v === undefined ? undefined : workspaceEncryptionParameterArgsProvideDefaults(v)),
    };
}

/**
 * The Value.
 */
export interface WorkspaceCustomStringParameterArgs {
    /**
     * The type of variable that this is
     */
    type?: pulumi.Input<string | enums.CustomParameterType | undefined>;
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
     * The type of variable that this is
     */
    type?: pulumi.Input<string | enums.CustomParameterType | undefined>;
    /**
     * The value which should be used for this field.
     */
    value?: pulumi.Input<EncryptionArgs | undefined>;
}
/**
 * workspaceEncryptionParameterArgsProvideDefaults sets the appropriate defaults for WorkspaceEncryptionParameterArgs
 */
export function workspaceEncryptionParameterArgsProvideDefaults(val: WorkspaceEncryptionParameterArgs): WorkspaceEncryptionParameterArgs {
    return {
        ...val,
        value: pulumi.output(val.value).apply(v => v === undefined ? undefined : encryptionArgsProvideDefaults(v)),
    };
}

/**
 * The value which should be used for this field.
 */
export interface WorkspaceNoPublicIPBooleanParameterArgs {
    /**
     * The type of variable that this is
     */
    type?: pulumi.Input<string | enums.CustomParameterType | undefined>;
    /**
     * The value which should be used for this field.
     */
    value: pulumi.Input<boolean>;
}

/**
 * Access Connector Resource that is going to be associated with Databricks Workspace. Not allowed in Serverless ComputeMode workspace.
 */
export interface WorkspacePropertiesAccessConnectorArgs {
    /**
     * The resource ID of Azure Databricks Access Connector Resource.
     */
    id: pulumi.Input<string>;
    /**
     * The identity type of the Access Connector Resource.
     */
    identityType: pulumi.Input<string | enums.IdentityType>;
    /**
     * The resource ID of the User Assigned Identity associated with the Access Connector Resource. This is required for type 'UserAssigned' and not valid for type 'SystemAssigned'.
     */
    userAssignedIdentityId?: pulumi.Input<string | undefined>;
}

/**
 * Encryption properties for databricks workspace. Supported in both Serverless and Hybrid ComputeMode workspace.
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
