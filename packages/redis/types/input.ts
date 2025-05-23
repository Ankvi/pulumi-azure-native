import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
 * A collection of information about the state of the connection between service consumer and provider.
 */
export interface PrivateLinkServiceConnectionStateArgs {
    /**
     * A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionsRequired?: pulumi.Input<string>;
    /**
     * The reason for approval/rejection of the connection.
     */
    description?: pulumi.Input<string>;
    /**
     * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
     */
    status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus>;
}

/**
 * All Redis Settings. Few possible keys: rdb-backup-enabled,rdb-storage-connection-string,rdb-backup-frequency,maxmemory-delta, maxmemory-policy,notify-keyspace-events, aof-backup-enabled, aof-storage-connection-string-0, aof-storage-connection-string-1 etc.
 */
export interface RedisCommonPropertiesRedisConfigurationArgs {
    /**
     * Specifies whether AAD based authentication has been enabled or disabled for the cache
     */
    aadEnabled?: pulumi.Input<string>;
    /**
     * Specifies whether the aof backup is enabled
     */
    aofBackupEnabled?: pulumi.Input<string>;
    /**
     * First storage account connection string
     */
    aofStorageConnectionString0?: pulumi.Input<string>;
    /**
     * Second storage account connection string
     */
    aofStorageConnectionString1?: pulumi.Input<string>;
    /**
     * Specifies whether the authentication is disabled. Setting this property is highly discouraged from security point of view.
     */
    authnotrequired?: pulumi.Input<string>;
    /**
     * Value in megabytes reserved for fragmentation per shard
     */
    maxfragmentationmemoryReserved?: pulumi.Input<string>;
    /**
     * Value in megabytes reserved for non-cache usage per shard e.g. failover.
     */
    maxmemoryDelta?: pulumi.Input<string>;
    /**
     * The eviction strategy used when your data won't fit within its memory limit.
     */
    maxmemoryPolicy?: pulumi.Input<string>;
    /**
     * Value in megabytes reserved for non-cache usage per shard e.g. failover.
     */
    maxmemoryReserved?: pulumi.Input<string>;
    /**
     * The keyspace events which should be monitored.
     */
    notifyKeyspaceEvents?: pulumi.Input<string>;
    /**
     * Preferred auth method to communicate to storage account used for data persistence, specify SAS or ManagedIdentity, default value is SAS
     */
    preferredDataPersistenceAuthMethod?: pulumi.Input<string>;
    /**
     * Specifies whether the rdb backup is enabled
     */
    rdbBackupEnabled?: pulumi.Input<string>;
    /**
     * Specifies the frequency for creating rdb backup in minutes. Valid values: (15, 30, 60, 360, 720, 1440)
     */
    rdbBackupFrequency?: pulumi.Input<string>;
    /**
     * Specifies the maximum number of snapshots for rdb backup
     */
    rdbBackupMaxSnapshotCount?: pulumi.Input<string>;
    /**
     * The storage account connection string for storing rdb file
     */
    rdbStorageConnectionString?: pulumi.Input<string>;
    /**
     * SubscriptionId of the storage account for persistence (aof/rdb) using ManagedIdentity.
     */
    storageSubscriptionId?: pulumi.Input<string>;
}

/**
 * Patch schedule entry for a Premium Redis Cache.
 */
export interface ScheduleEntryArgs {
    /**
     * Day of the week when a cache can be patched.
     */
    dayOfWeek: pulumi.Input<enums.DayOfWeek>;
    /**
     * ISO8601 timespan specifying how much time cache patching can take. 
     */
    maintenanceWindow?: pulumi.Input<string>;
    /**
     * Start hour after which cache patching can start.
     */
    startHourUtc: pulumi.Input<number>;
}

/**
 * SKU parameters supplied to the create Redis operation.
 */
export interface SkuArgs {
    /**
     * The size of the Redis cache to deploy. Valid values: for C (Basic/Standard) family (0, 1, 2, 3, 4, 5, 6), for P (Premium) family (1, 2, 3, 4).
     */
    capacity: pulumi.Input<number>;
    /**
     * The SKU family to use. Valid values: (C, P). (C = Basic/Standard, P = Premium).
     */
    family: pulumi.Input<string | enums.SkuFamily>;
    /**
     * The type of Redis cache to deploy. Valid values: (Basic, Standard, Premium)
     */
    name: pulumi.Input<string | enums.SkuName>;
}
