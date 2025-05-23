import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
 * All Redis Settings. Few possible keys: rdb-backup-enabled,rdb-storage-connection-string,rdb-backup-frequency,maxmemory-delta, maxmemory-policy,notify-keyspace-events, aof-backup-enabled, aof-storage-connection-string-0, aof-storage-connection-string-1 etc.
 */
export interface RedisCommonPropertiesResponseRedisConfiguration {
    /**
     * Specifies whether AAD based authentication has been enabled or disabled for the cache
     */
    aadEnabled?: string;
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
     * The keyspace events which should be monitored.
     */
    notifyKeyspaceEvents?: string;
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
