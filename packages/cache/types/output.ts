import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
 * SKU parameters supplied to the create RedisEnterprise operation.
 */
export interface EnterpriseSkuResponse {
    /**
     * The size of the RedisEnterprise cluster. Defaults to 2 or 3 depending on SKU. Valid values are (2, 4, 6, ...) for Enterprise SKUs and (3, 9, 15, ...) for Flash SKUs.
     */
    capacity?: number;
    /**
     * The type of RedisEnterprise cluster to deploy. Possible values: (Enterprise_E10, EnterpriseFlash_F300 etc.)
     */
    name: string;
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
 * Persistence-related configuration for the RedisEnterprise database
 */
export interface PersistenceResponse {
    /**
     * Sets whether AOF is enabled.
     */
    aofEnabled?: boolean;
    /**
     * Sets the frequency at which data is written to disk.
     */
    aofFrequency?: string;
    /**
     * Sets whether RDB is enabled.
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
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    systemData: SystemDataResponse;
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
 * Redis cache access keys.
 */
export interface RedisAccessKeysResponse {
    /**
     * The current primary key that clients can use to authenticate with Redis cache.
     */
    primaryKey: string;
    /**
     * The current secondary key that clients can use to authenticate with Redis cache.
     */
    secondaryKey: string;
}

/**
 * All Redis Settings. Few possible keys: rdb-backup-enabled,rdb-storage-connection-string,rdb-backup-frequency,maxmemory-delta,maxmemory-policy,notify-keyspace-events,maxmemory-samples,slowlog-log-slower-than,slowlog-max-len,list-max-ziplist-entries,list-max-ziplist-value,hash-max-ziplist-entries,hash-max-ziplist-value,set-max-intset-entries,zset-max-ziplist-entries,zset-max-ziplist-value etc.
 */
export interface RedisCommonPropertiesResponseRedisConfiguration {
    /**
     * Specifies whether the aof backup is enabled
     */
    aofBackupEnabled?: string;
    /**
     * First storage account connection string
     */
    aofStorageConnectionString0?: string;
    /**
     * Second storage account connection string
     */
    aofStorageConnectionString1?: string;
    /**
     * Specifies whether the authentication is disabled. Setting this property is highly discouraged from security point of view.
     */
    authnotrequired?: string;
    /**
     * The max clients config
     */
    maxclients: string;
    /**
     * Value in megabytes reserved for fragmentation per shard
     */
    maxfragmentationmemoryReserved?: string;
    /**
     * Value in megabytes reserved for non-cache usage per shard e.g. failover.
     */
    maxmemoryDelta?: string;
    /**
     * The eviction strategy used when your data won't fit within its memory limit.
     */
    maxmemoryPolicy?: string;
    /**
     * Value in megabytes reserved for non-cache usage per shard e.g. failover.
     */
    maxmemoryReserved?: string;
    /**
     * Preferred auth method to communicate to storage account used for data archive, specify SAS or ManagedIdentity, default value is SAS
     */
    preferredDataArchiveAuthMethod: string;
    /**
     * Preferred auth method to communicate to storage account used for data persistence, specify SAS or ManagedIdentity, default value is SAS
     */
    preferredDataPersistenceAuthMethod?: string;
    /**
     * Specifies whether the rdb backup is enabled
     */
    rdbBackupEnabled?: string;
    /**
     * Specifies the frequency for creating rdb backup in minutes. Valid values: (15, 30, 60, 360, 720, 1440)
     */
    rdbBackupFrequency?: string;
    /**
     * Specifies the maximum number of snapshots for rdb backup
     */
    rdbBackupMaxSnapshotCount?: string;
    /**
     * The storage account connection string for storing rdb file
     */
    rdbStorageConnectionString?: string;
    /**
     * SubscriptionId of the storage account for persistence (aof/rdb) using ManagedIdentity.
     */
    storageSubscriptionId?: string;
    /**
     * Zonal Configuration
     */
    zonalConfiguration: string;
}

/**
 * Details of single instance of redis.
 */
export interface RedisInstanceDetailsResponse {
    /**
     * Specifies whether the instance is a primary node.
     */
    isMaster: boolean;
    /**
     * Specifies whether the instance is a primary node.
     */
    isPrimary: boolean;
    /**
     * If enableNonSslPort is true, provides Redis instance Non-SSL port.
     */
    nonSslPort: number;
    /**
     * If clustering is enabled, the Shard ID of Redis Instance
     */
    shardId: number;
    /**
     * Redis instance SSL port.
     */
    sslPort: number;
    /**
     * If the Cache uses availability zones, specifies availability zone where this instance is located.
     */
    zone: string;
}

/**
 * Linked server Id
 */
export interface RedisLinkedServerResponse {
    /**
     * Linked server Id.
     */
    id: string;
}

/**
 * Patch schedule entry for a Premium Redis Cache.
 */
export interface ScheduleEntryResponse {
    /**
     * Day of the week when a cache can be patched.
     */
    dayOfWeek: string;
    /**
     * ISO8601 timespan specifying how much time cache patching can take. 
     */
    maintenanceWindow?: string;
    /**
     * Start hour after which cache patching can start.
     */
    startHourUtc: number;
}

/**
 * SKU parameters supplied to the create Redis operation.
 */
export interface SkuResponse {
    /**
     * The size of the Redis cache to deploy. Valid values: for C (Basic/Standard) family (0, 1, 2, 3, 4, 5, 6), for P (Premium) family (1, 2, 3, 4).
     */
    capacity: number;
    /**
     * The SKU family to use. Valid values: (C, P). (C = Basic/Standard, P = Premium).
     */
    family: string;
    /**
     * The type of Redis cache to deploy. Valid values: (Basic, Standard, Premium)
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












