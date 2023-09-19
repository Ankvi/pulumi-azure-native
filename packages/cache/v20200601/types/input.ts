import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * All Redis Settings. Few possible keys: rdb-backup-enabled,rdb-storage-connection-string,rdb-backup-frequency,maxmemory-delta,maxmemory-policy,notify-keyspace-events,maxmemory-samples,slowlog-log-slower-than,slowlog-max-len,list-max-ziplist-entries,list-max-ziplist-value,hash-max-ziplist-entries,hash-max-ziplist-value,set-max-intset-entries,zset-max-ziplist-entries,zset-max-ziplist-value etc.
     */
    export interface RedisCommonPropertiesRedisConfigurationArgs {
        /**
         * First storage account connection string
         */
        aofStorageConnectionString0?: pulumi.Input<string>;
        /**
         * Second storage account connection string
         */
        aofStorageConnectionString1?: pulumi.Input<string>;
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
         * Specifies whether the rdb backup is enabled
         */
        rdbBackupEnabled?: pulumi.Input<string>;
        /**
         * Specifies the frequency for creating rdb backup
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
