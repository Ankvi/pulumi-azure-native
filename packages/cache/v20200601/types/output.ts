import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
     * All Redis Settings. Few possible keys: rdb-backup-enabled,rdb-storage-connection-string,rdb-backup-frequency,maxmemory-delta,maxmemory-policy,notify-keyspace-events,maxmemory-samples,slowlog-log-slower-than,slowlog-max-len,list-max-ziplist-entries,list-max-ziplist-value,hash-max-ziplist-entries,hash-max-ziplist-value,set-max-intset-entries,zset-max-ziplist-entries,zset-max-ziplist-value etc.
     */
    export interface RedisCommonPropertiesResponseRedisConfiguration {
        /**
         * First storage account connection string
         */
        aofStorageConnectionString0?: string;
        /**
         * Second storage account connection string
         */
        aofStorageConnectionString1?: string;
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
         * Specifies whether the rdb backup is enabled
         */
        rdbBackupEnabled?: string;
        /**
         * Specifies the frequency for creating rdb backup
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
    }

    /**
     * Details of single instance of redis.
     */
    export interface RedisInstanceDetailsResponse {
        /**
         * Specifies whether the instance is a master node.
         */
        isMaster: boolean;
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
