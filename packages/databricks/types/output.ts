import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export interface AccessConnectorPropertiesResponse {
    /**
     * Provisioning status of the Access Connector.
     */
    provisioningState: string;
    /**
     * List of workspaces referring this Access Connector.
     */
    referedBy: string[];
}

/**
 * AddressSpace contains an array of IP address ranges that can be used by subnets of the virtual network.
 */
export interface AddressSpaceResponse {
    /**
     * A list of address blocks reserved for this virtual network in CIDR notation.
     */
    addressPrefixes?: string[];
}

/**
 * Status of automated cluster updates feature.
 */
export interface AutomaticClusterUpdateDefinitionResponse {
    value?: string;
}

/**
 * Status of Compliance Security Profile feature.
 */
export interface ComplianceSecurityProfileDefinitionResponse {
    /**
     * Compliance standards associated with the workspace.
     */
    complianceStandards?: string[];
    value?: string;
}

/**
 * Provides details of the entity that created/updated the workspace.
 */
export interface CreatedByResponse {
    /**
     * The application ID of the application that initiated the creation of the workspace. For example, Azure Portal.
     */
    applicationId: string;
    /**
     * The Object ID that created the workspace.
     */
    oid: string;
    /**
     * The Personal Object ID corresponding to the object ID above
     */
    puid: string;
}

/**
 * These properties lets user specify default catalog properties during workspace creation.
 */
export interface DefaultCatalogPropertiesResponse {
    /**
     * Specifies the initial Name of default catalog. If not specified, the name of the workspace will be used.
     */
    initialName?: string;
    /**
     * Defines the initial type of the default catalog. Possible values (case-insensitive):  HiveMetastore, UnityCatalog
     */
    initialType?: string;
}
/**
 * defaultCatalogPropertiesResponseProvideDefaults sets the appropriate defaults for DefaultCatalogPropertiesResponse
 */
export function defaultCatalogPropertiesResponseProvideDefaults(val: DefaultCatalogPropertiesResponse): DefaultCatalogPropertiesResponse {
    return {
        ...val,
        initialType: (val.initialType) ?? "HiveMetastore",
    };
}

/**
 * Encryption entities for databricks workspace resource.
 */
export interface EncryptionEntitiesDefinitionResponse {
    /**
     * Encryption properties for the databricks managed disks.
     */
    managedDisk?: ManagedDiskEncryptionResponse;
    /**
     * Encryption properties for the databricks managed services.
     */
    managedServices?: EncryptionV2Response;
}

/**
 * The object that contains details of encryption used on the workspace.
 */
export interface EncryptionResponse {
    /**
     * The name of KeyVault key.
     */
    keyName?: string;
    /**
     * The encryption keySource (provider). Possible values (case-insensitive):  Default, Microsoft.Keyvault
     */
    keySource?: string;
    /**
     * The Uri of KeyVault.
     */
    keyVaultUri?: string;
    /**
     * The version of KeyVault key.
     */
    keyVersion?: string;
}
/**
 * encryptionResponseProvideDefaults sets the appropriate defaults for EncryptionResponse
 */
export function encryptionResponseProvideDefaults(val: EncryptionResponse): EncryptionResponse {
    return {
        ...val,
        keySource: (val.keySource) ?? "Default",
    };
}

/**
 * The object that contains details of encryption used on the workspace.
 */
export interface EncryptionV2Response {
    /**
     * The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.Keyvault
     */
    keySource: string;
    /**
     * Key Vault input properties for encryption.
     */
    keyVaultProperties?: EncryptionV2ResponseKeyVaultProperties;
}

/**
 * Key Vault input properties for encryption.
 */
export interface EncryptionV2ResponseKeyVaultProperties {
    /**
     * The name of KeyVault key.
     */
    keyName: string;
    /**
     * The Uri of KeyVault.
     */
    keyVaultUri: string;
    /**
     * The version of KeyVault key.
     */
    keyVersion: string;
}

/**
 * Status of settings related to the Enhanced Security and Compliance Add-On.
 */
export interface EnhancedSecurityComplianceDefinitionResponse {
    /**
     * Status of automated cluster updates feature.
     */
    automaticClusterUpdate?: AutomaticClusterUpdateDefinitionResponse;
    /**
     * Status of Compliance Security Profile feature.
     */
    complianceSecurityProfile?: ComplianceSecurityProfileDefinitionResponse;
    /**
     * Status of Enhanced Security Monitoring feature.
     */
    enhancedSecurityMonitoring?: EnhancedSecurityMonitoringDefinitionResponse;
}

/**
 * Status of Enhanced Security Monitoring feature.
 */
export interface EnhancedSecurityMonitoringDefinitionResponse {
    value?: string;
}

/**
 * The object that contains details of encryption used on the workspace.
 */
export interface ManagedDiskEncryptionResponse {
    /**
     * The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.Keyvault
     */
    keySource: string;
    /**
     * Key Vault input properties for encryption.
     */
    keyVaultProperties: ManagedDiskEncryptionResponseKeyVaultProperties;
    /**
     * Indicate whether the latest key version should be automatically used for Managed Disk Encryption.
     */
    rotationToLatestKeyVersionEnabled?: boolean;
}

/**
 * Key Vault input properties for encryption.
 */
export interface ManagedDiskEncryptionResponseKeyVaultProperties {
    /**
     * The name of KeyVault key.
     */
    keyName: string;
    /**
     * The URI of KeyVault.
     */
    keyVaultUri: string;
    /**
     * The version of KeyVault key.
     */
    keyVersion: string;
}

/**
 * The Managed Identity details for storage account.
 */
export interface ManagedIdentityConfigurationResponse {
    /**
     * The objectId of the Managed Identity that is linked to the Managed Storage account.
     */
    principalId: string;
    /**
     * The tenant Id where the Managed Identity is created.
     */
    tenantId: string;
    /**
     * The type of Identity created. It can be either SystemAssigned or UserAssigned.
     */
    type: string;
}

/**
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityResponse {
    /**
     * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    principalId: string;
    /**
     * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    tenantId: string;
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: string;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
}

/**
 * The properties of a private endpoint connection
 */
export interface PrivateEndpointConnectionPropertiesResponse {
    /**
     * GroupIds from the private link service resource.
     */
    groupIds?: string[];
    /**
     * Private endpoint
     */
    privateEndpoint?: PrivateEndpointResponse;
    /**
     * Private endpoint connection state
     */
    privateLinkServiceConnectionState: PrivateLinkServiceConnectionStateResponse;
    /**
     * Provisioning state of the private endpoint connection.
     */
    provisioningState: string;
}

/**
 * The private endpoint connection of a workspace
 */
export interface PrivateEndpointConnectionResponse {
    /**
     * The resource identifier.
     */
    id: string;
    /**
     * The resource name.
     */
    name: string;
    /**
     * The private endpoint connection properties.
     */
    properties: PrivateEndpointConnectionPropertiesResponse;
    /**
     * The resource type.
     */
    type: string;
}

/**
 * The private endpoint property of a private endpoint connection
 */
export interface PrivateEndpointResponse {
    /**
     * The resource identifier.
     */
    id: string;
}

/**
 * The current state of a private endpoint connection
 */
export interface PrivateLinkServiceConnectionStateResponse {
    /**
     * Actions required for a private endpoint connection
     */
    actionsRequired?: string;
    /**
     * The description for the current state of a private endpoint connection
     */
    description?: string;
    /**
     * The status of a private endpoint connection
     */
    status: string;
}

/**
 * SKU for the resource.
 */
export interface SkuResponse {
    /**
     * The SKU name.
     */
    name: string;
    /**
     * The SKU tier.
     */
    tier?: string;
}

/**
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface SystemDataResponse {
    /**
     * The timestamp of resource creation (UTC).
     */
    createdAt?: string;
    /**
     * The identity that created the resource.
     */
    createdBy?: string;
    /**
     * The type of identity that created the resource.
     */
    createdByType?: string;
    /**
     * The timestamp of resource last modification (UTC)
     */
    lastModifiedAt?: string;
    /**
     * The identity that last modified the resource.
     */
    lastModifiedBy?: string;
    /**
     * The type of identity that last modified the resource.
     */
    lastModifiedByType?: string;
}

/**
 * User assigned identity properties
 */
export interface UserAssignedIdentityResponse {
    /**
     * The client ID of the assigned identity.
     */
    clientId: string;
    /**
     * The principal ID of the assigned identity.
     */
    principalId: string;
}

/**
 *  The remote virtual network should be in the same region. See here to learn more (https://docs.microsoft.com/en-us/azure/databricks/administration-guide/cloud-configurations/azure/vnet-peering).
 */
export interface VirtualNetworkPeeringPropertiesFormatResponseDatabricksVirtualNetwork {
    /**
     * The Id of the databricks virtual network.
     */
    id?: string;
}

/**
 *  The remote virtual network should be in the same region. See here to learn more (https://docs.microsoft.com/en-us/azure/databricks/administration-guide/cloud-configurations/azure/vnet-peering).
 */
export interface VirtualNetworkPeeringPropertiesFormatResponseRemoteVirtualNetwork {
    /**
     * The Id of the remote virtual network.
     */
    id?: string;
}

/**
 * The value which should be used for this field.
 */
export interface WorkspaceCustomBooleanParameterResponse {
    /**
     * The type of variable that this is
     */
    type: string;
    /**
     * The value which should be used for this field.
     */
    value: boolean;
}

/**
 * The value which should be used for this field.
 */
export interface WorkspaceCustomObjectParameterResponse {
    /**
     * The type of variable that this is
     */
    type: string;
    /**
     * The value which should be used for this field.
     */
    value: any;
}

/**
 * Custom Parameters used for Cluster Creation.
 */
export interface WorkspaceCustomParametersResponse {
    /**
     * The ID of a Azure Machine Learning workspace to link with Databricks workspace
     */
    amlWorkspaceId?: WorkspaceCustomStringParameterResponse;
    /**
     * The name of the Private Subnet within the Virtual Network
     */
    customPrivateSubnetName?: WorkspaceCustomStringParameterResponse;
    /**
     * The name of a Public Subnet within the Virtual Network
     */
    customPublicSubnetName?: WorkspaceCustomStringParameterResponse;
    /**
     * The ID of a Virtual Network where this Databricks Cluster should be created
     */
    customVirtualNetworkId?: WorkspaceCustomStringParameterResponse;
    /**
     * Boolean indicating whether the public IP should be disabled. Default value is true
     */
    enableNoPublicIp?: WorkspaceNoPublicIPBooleanParameterResponse;
    /**
     * Contains the encryption details for Customer-Managed Key (CMK) enabled workspace.
     */
    encryption?: WorkspaceEncryptionParameterResponse;
    /**
     * Name of the outbound Load Balancer Backend Pool for Secure Cluster Connectivity (No Public IP).
     */
    loadBalancerBackendPoolName?: WorkspaceCustomStringParameterResponse;
    /**
     * Resource URI of Outbound Load balancer for Secure Cluster Connectivity (No Public IP) workspace.
     */
    loadBalancerId?: WorkspaceCustomStringParameterResponse;
    /**
     * Name of the NAT gateway for Secure Cluster Connectivity (No Public IP) workspace subnets.
     */
    natGatewayName?: WorkspaceCustomStringParameterResponse;
    /**
     * Prepare the workspace for encryption. Enables the Managed Identity for managed storage account.
     */
    prepareEncryption?: WorkspaceCustomBooleanParameterResponse;
    /**
     * Name of the Public IP for No Public IP workspace with managed vNet.
     */
    publicIpName?: WorkspaceCustomStringParameterResponse;
    /**
     * A boolean indicating whether or not the DBFS root file system will be enabled with secondary layer of encryption with platform managed keys for data at rest.
     */
    requireInfrastructureEncryption?: WorkspaceCustomBooleanParameterResponse;
    /**
     * Tags applied to resources under Managed resource group. These can be updated by updating tags at workspace level.
     */
    resourceTags: WorkspaceCustomObjectParameterResponse;
    /**
     * Default DBFS storage account name.
     */
    storageAccountName?: WorkspaceCustomStringParameterResponse;
    /**
     * Storage account SKU name, ex: Standard_GRS, Standard_LRS. Refer https://aka.ms/storageskus for valid inputs.
     */
    storageAccountSkuName?: WorkspaceCustomStringParameterResponse;
    /**
     * Address prefix for Managed virtual network. Default value for this input is 10.139.
     */
    vnetAddressPrefix?: WorkspaceCustomStringParameterResponse;
}
/**
 * workspaceCustomParametersResponseProvideDefaults sets the appropriate defaults for WorkspaceCustomParametersResponse
 */
export function workspaceCustomParametersResponseProvideDefaults(val: WorkspaceCustomParametersResponse): WorkspaceCustomParametersResponse {
    return {
        ...val,
        encryption: (val.encryption ? workspaceEncryptionParameterResponseProvideDefaults(val.encryption) : undefined),
    };
}

/**
 * The Value.
 */
export interface WorkspaceCustomStringParameterResponse {
    /**
     * The type of variable that this is
     */
    type: string;
    /**
     * The value which should be used for this field.
     */
    value: string;
}

/**
 * The object that contains details of encryption used on the workspace.
 */
export interface WorkspaceEncryptionParameterResponse {
    /**
     * The type of variable that this is
     */
    type: string;
    /**
     * The value which should be used for this field.
     */
    value?: EncryptionResponse;
}
/**
 * workspaceEncryptionParameterResponseProvideDefaults sets the appropriate defaults for WorkspaceEncryptionParameterResponse
 */
export function workspaceEncryptionParameterResponseProvideDefaults(val: WorkspaceEncryptionParameterResponse): WorkspaceEncryptionParameterResponse {
    return {
        ...val,
        value: (val.value ? encryptionResponseProvideDefaults(val.value) : undefined),
    };
}

/**
 * The value which should be used for this field.
 */
export interface WorkspaceNoPublicIPBooleanParameterResponse {
    /**
     * The type of variable that this is
     */
    type: string;
    /**
     * The value which should be used for this field.
     */
    value: boolean;
}

/**
 * Access Connector Resource that is going to be associated with Databricks Workspace
 */
export interface WorkspacePropertiesResponseAccessConnector {
    /**
     * The resource ID of Azure Databricks Access Connector Resource.
     */
    id: string;
    /**
     * The identity type of the Access Connector Resource.
     */
    identityType: string;
    /**
     * The resource ID of the User Assigned Identity associated with the Access Connector Resource. This is required for type 'UserAssigned' and not valid for type 'SystemAssigned'.
     */
    userAssignedIdentityId?: string;
}

/**
 * Encryption properties for databricks workspace
 */
export interface WorkspacePropertiesResponseEncryption {
    /**
     * Encryption entities definition for the workspace.
     */
    entities: EncryptionEntitiesDefinitionResponse;
}

/**
 * The workspace provider authorization.
 */
export interface WorkspaceProviderAuthorizationResponse {
    /**
     * The provider's principal identifier. This is the identity that the provider will use to call ARM to manage the workspace resources.
     */
    principalId: string;
    /**
     * The provider's role definition identifier. This role will define all the permissions that the provider must have on the workspace's container resource group. This role definition cannot have permission to delete the resource group.
     */
    roleDefinitionId: string;
}
