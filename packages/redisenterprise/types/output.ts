import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The user associated with the access policy.
 */
export interface AccessPolicyAssignmentPropertiesResponseUser {
    /**
     * The object ID of the user.
     */
    objectId?: string;
}

/**
 * All Customer-managed key encryption properties for the resource. Set this to an empty object to use Microsoft-managed key encryption.
 */
export interface ClusterPropertiesResponseCustomerManagedKeyEncryption {
    /**
     * All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault.
     */
    keyEncryptionKeyIdentity?: ClusterPropertiesResponseKeyEncryptionKeyIdentity;
    /**
     * Key encryption key Url, versioned only. Ex: https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78
     */
    keyEncryptionKeyUrl?: string;
}

/**
 * Encryption-at-rest configuration for the cluster.
 */
export interface ClusterPropertiesResponseEncryption {
    /**
     * All Customer-managed key encryption properties for the resource. Set this to an empty object to use Microsoft-managed key encryption.
     */
    customerManagedKeyEncryption?: ClusterPropertiesResponseCustomerManagedKeyEncryption;
}

/**
 * All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault.
 */
export interface ClusterPropertiesResponseKeyEncryptionKeyIdentity {
    /**
     * Only userAssignedIdentity is supported in this API version; other types may be supported in the future
     */
    identityType?: string;
    /**
     * User assigned identity to use for accessing key encryption key Url. Ex: /subscriptions/<sub uuid>/resourceGroups/<resource group>/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId.
     */
    userAssignedIdentityResourceId?: string;
}

/**
 * Optional set of properties to configure geo replication for this database.
 */
export interface DatabasePropertiesResponseGeoReplication {
    /**
     * Name for the group of linked database resources
     */
    groupNickname?: string;
    /**
     * List of database resources to link with this database
     */
    linkedDatabases?: LinkedDatabaseResponse[];
}

/**
 * Specifies details of a linked database resource.
 */
export interface LinkedDatabaseResponse {
    /**
     * Resource ID of a database resource to link with this database.
     */
    id?: string;
    /**
     * State of the link between the database resources.
     */
    state: string;
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
 * Specifies configuration of a redis module
 */
export interface ModuleResponse {
    /**
     * Configuration options for the module, e.g. 'ERROR_RATE 0.01 INITIAL_SIZE 400'.
     */
    args?: string;
    /**
     * The name of the module, e.g. 'RedisBloom', 'RediSearch', 'RedisTimeSeries'
     */
    name: string;
    /**
     * The version of the module, e.g. '1.0'.
     */
    version: string;
}

/**
 * Persistence-related configuration for the Redis Enterprise database
 */
export interface PersistenceResponse {
    /**
     * Sets whether AOF is enabled. Note that at most one of AOF or RDB persistence may be enabled.
     */
    aofEnabled?: boolean;
    /**
     * Sets the frequency at which data is written to disk. Defaults to '1s', meaning 'every second'. Note that the 'always' setting is deprecated, because of its performance impact.
     */
    aofFrequency?: string;
    /**
     * Sets whether RDB is enabled. Note that at most one of AOF or RDB persistence may be enabled.
     */
    rdbEnabled?: boolean;
    /**
     * Sets the frequency at which a snapshot of the database is created.
     */
    rdbFrequency?: string;
}

/**
 * The Private Endpoint Connection resource.
 */
export interface PrivateEndpointConnectionResponse {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    id: string;
    /**
     * The name of the resource
     */
    name: string;
    /**
     * The resource of private end point.
     */
    privateEndpoint?: PrivateEndpointResponse;
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    privateLinkServiceConnectionState: PrivateLinkServiceConnectionStateResponse;
    /**
     * The provisioning state of the private endpoint connection resource.
     */
    provisioningState: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    type: string;
}

/**
 * The Private Endpoint resource.
 */
export interface PrivateEndpointResponse {
    /**
     * The ARM identifier for Private Endpoint
     */
    id: string;
}

/**
 * A collection of information about the state of the connection between service consumer and provider.
 */
export interface PrivateLinkServiceConnectionStateResponse {
    /**
     * A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionsRequired?: string;
    /**
     * The reason for approval/rejection of the connection.
     */
    description?: string;
    /**
     * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
     */
    status?: string;
}

/**
 * Details of a Redis Enterprise cluster SKU.
 */
export interface SkuDetailsResponse {
    /**
     * The name of the SKU.
     */
    name: string;
    /**
     * The cache size in GB.
     */
    sizeInGB: number;
}

/**
 * SKU parameters supplied to the create Redis Enterprise cluster operation.
 */
export interface SkuResponse {
    /**
     * This property is only used with Enterprise and EnterpriseFlash SKUs. Determines the size of the cluster. Valid values are (2, 4, 6, ...) for Enterprise SKUs and (3, 9, 15, ...) for EnterpriseFlash SKUs.
     */
    capacity?: number;
    /**
     * The level of Redis Enterprise cluster to deploy. Possible values: ('Balanced_B5', 'MemoryOptimized_M10', 'ComputeOptimized_X5', etc.). For more information on SKUs see the latest pricing documentation. Note that additional SKUs may become supported in the future.
     */
    name: string;
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
