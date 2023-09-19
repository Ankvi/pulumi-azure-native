import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Analytical storage specific properties.
     */
    export interface AnalyticalStorageConfigurationArgs {
        /**
         * Describes the types of schema for analytical storage.
         */
        schemaType?: pulumi.Input<string | enums.AnalyticalStorageSchemaType>;
    }

    export interface ApiPropertiesArgs {
        /**
         * Describes the ServerVersion of an a MongoDB account.
         */
        serverVersion?: pulumi.Input<string | enums.ServerVersion>;
    }

    export interface AutoscaleSettingsArgs {
        /**
         * Represents maximum throughput, the resource can scale up to.
         */
        maxThroughput?: pulumi.Input<number>;
    }

    /**
     * The object representing the state of the migration between the backup policies.
     */
    export interface BackupPolicyMigrationStateArgs {
        /**
         * Time at which the backup policy migration started (ISO-8601 format).
         */
        startTime?: pulumi.Input<string>;
        /**
         * Describes the status of migration between backup policy types.
         */
        status?: pulumi.Input<string | enums.BackupPolicyMigrationStatus>;
        /**
         * Describes the target backup policy type of the backup policy migration.
         */
        targetType?: pulumi.Input<string | enums.BackupPolicyType>;
    }

    /**
     * Cosmos DB capability object
     */
    export interface CapabilityArgs {
        /**
         * Name of the Cosmos DB capability. For example, "name": "EnableCassandra". Current values also include "EnableTable" and "EnableGremlin".
         */
        name?: pulumi.Input<string>;
    }

    /**
     * The object that represents all properties related to capacity enforcement on an account.
     */
    export interface CapacityArgs {
        /**
         * The total throughput limit imposed on the account. A totalThroughputLimit of 2000 imposes a strict limit of max throughput that can be provisioned on that account to be 2000. A totalThroughputLimit of -1 indicates no limits on provisioning of throughput.
         */
        totalThroughputLimit?: pulumi.Input<number>;
    }

    /**
     * Cosmos DB Cassandra keyspace resource object
     */
    export interface CassandraKeyspaceResourceArgs {
        /**
         * Name of the Cosmos DB Cassandra keyspace
         */
        id: pulumi.Input<string>;
    }

    /**
     * Cosmos DB Cassandra table partition key
     */
    export interface CassandraPartitionKeyArgs {
        /**
         * Name of the Cosmos DB Cassandra table partition key
         */
        name?: pulumi.Input<string>;
    }

    /**
     * Cosmos DB Cassandra table schema
     */
    export interface CassandraSchemaArgs {
        /**
         * List of cluster key.
         */
        clusterKeys?: pulumi.Input<pulumi.Input<ClusterKeyArgs>[]>;
        /**
         * List of Cassandra table columns.
         */
        columns?: pulumi.Input<pulumi.Input<ColumnArgs>[]>;
        /**
         * List of partition key.
         */
        partitionKeys?: pulumi.Input<pulumi.Input<CassandraPartitionKeyArgs>[]>;
    }

    /**
     * Cosmos DB Cassandra table resource object
     */
    export interface CassandraTableResourceArgs {
        /**
         * Analytical TTL.
         */
        analyticalStorageTtl?: pulumi.Input<number>;
        /**
         * Time to live of the Cosmos DB Cassandra table
         */
        defaultTtl?: pulumi.Input<number>;
        /**
         * Name of the Cosmos DB Cassandra table
         */
        id: pulumi.Input<string>;
        /**
         * Schema of the Cosmos DB Cassandra table
         */
        schema?: pulumi.Input<CassandraSchemaArgs>;
    }

    /**
     * Cosmos DB Cassandra view resource object
     */
    export interface CassandraViewResourceArgs {
        /**
         * Name of the Cosmos DB Cassandra view
         */
        id: pulumi.Input<string>;
        /**
         * View Definition of the Cosmos DB Cassandra view
         */
        viewDefinition: pulumi.Input<string>;
    }

    /**
     * .
     */
    export interface ClientEncryptionIncludedPathArgs {
        /**
         * The identifier of the Client Encryption Key to be used to encrypt the path.
         */
        clientEncryptionKeyId: pulumi.Input<string>;
        /**
         * The encryption algorithm which will be used. Eg - AEAD_AES_256_CBC_HMAC_SHA256.
         */
        encryptionAlgorithm: pulumi.Input<string>;
        /**
         * The type of encryption to be performed. Eg - Deterministic, Randomized.
         */
        encryptionType: pulumi.Input<string>;
        /**
         * Path that needs to be encrypted.
         */
        path: pulumi.Input<string>;
    }

    /**
     * Cosmos DB client encryption policy.
     */
    export interface ClientEncryptionPolicyArgs {
        /**
         * Paths of the item that need encryption along with path-specific settings.
         */
        includedPaths: pulumi.Input<pulumi.Input<ClientEncryptionIncludedPathArgs>[]>;
        /**
         * Version of the client encryption policy definition. Supported versions are 1 and 2. Version 2 supports id and partition key path encryption. 
         */
        policyFormatVersion: pulumi.Input<number>;
    }

    /**
     * Cosmos DB Cassandra table cluster key
     */
    export interface ClusterKeyArgs {
        /**
         * Name of the Cosmos DB Cassandra table cluster key
         */
        name?: pulumi.Input<string>;
        /**
         * Order of the Cosmos DB Cassandra table cluster key, only support "Asc" and "Desc"
         */
        orderBy?: pulumi.Input<string>;
    }

    /**
     * Cosmos DB Cassandra table column
     */
    export interface ColumnArgs {
        /**
         * Name of the Cosmos DB Cassandra table column
         */
        name?: pulumi.Input<string>;
        /**
         * Type of the Cosmos DB Cassandra table column
         */
        type?: pulumi.Input<string>;
    }

    export interface CompositePathArgs {
        /**
         * Sort order for composite paths.
         */
        order?: pulumi.Input<string | enums.CompositePathSortOrder>;
        /**
         * The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*)
         */
        path?: pulumi.Input<string>;
    }

    /**
     * The conflict resolution policy for the container.
     */
    export interface ConflictResolutionPolicyArgs {
        /**
         * The conflict resolution path in the case of LastWriterWins mode.
         */
        conflictResolutionPath?: pulumi.Input<string>;
        /**
         * The procedure to resolve conflicts in the case of custom mode.
         */
        conflictResolutionProcedure?: pulumi.Input<string>;
        /**
         * Indicates the conflict resolution mode.
         */
        mode?: pulumi.Input<string | enums.ConflictResolutionMode>;
    }
    /**
     * conflictResolutionPolicyArgsProvideDefaults sets the appropriate defaults for ConflictResolutionPolicyArgs
     */
    export function conflictResolutionPolicyArgsProvideDefaults(val: ConflictResolutionPolicyArgs): ConflictResolutionPolicyArgs {
        return {
            ...val,
            mode: (val.mode) ?? "LastWriterWins",
        };
    }

    /**
     * The consistency policy for the Cosmos DB database account.
     */
    export interface ConsistencyPolicyArgs {
        /**
         * The default consistency level and configuration settings of the Cosmos DB account.
         */
        defaultConsistencyLevel: pulumi.Input<enums.DefaultConsistencyLevel>;
        /**
         * When used with the Bounded Staleness consistency level, this value represents the time amount of staleness (in seconds) tolerated. Accepted range for this value is 5 - 86400. Required when defaultConsistencyPolicy is set to 'BoundedStaleness'.
         */
        maxIntervalInSeconds?: pulumi.Input<number>;
        /**
         * When used with the Bounded Staleness consistency level, this value represents the number of stale requests tolerated. Accepted range for this value is 1 – 2,147,483,647. Required when defaultConsistencyPolicy is set to 'BoundedStaleness'.
         */
        maxStalenessPrefix?: pulumi.Input<number>;
    }

    /**
     * The configuration of the partition key to be used for partitioning data into multiple partitions
     */
    export interface ContainerPartitionKeyArgs {
        /**
         * Indicates the kind of algorithm used for partitioning. For MultiHash, multiple partition keys (upto three maximum) are supported for container create
         */
        kind?: pulumi.Input<string | enums.PartitionKind>;
        /**
         * List of paths using which data within the container can be partitioned
         */
        paths?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Indicates the version of the partition key definition
         */
        version?: pulumi.Input<number>;
    }
    /**
     * containerPartitionKeyArgsProvideDefaults sets the appropriate defaults for ContainerPartitionKeyArgs
     */
    export function containerPartitionKeyArgsProvideDefaults(val: ContainerPartitionKeyArgs): ContainerPartitionKeyArgs {
        return {
            ...val,
            kind: (val.kind) ?? "Hash",
        };
    }

    /**
     * The object representing continuous mode backup policy.
     */
    export interface ContinuousModeBackupPolicyArgs {
        /**
         * Configuration values for continuous mode backup
         */
        continuousModeProperties?: pulumi.Input<ContinuousModePropertiesArgs>;
        /**
         * The object representing the state of the migration between the backup policies.
         */
        migrationState?: pulumi.Input<BackupPolicyMigrationStateArgs>;
        /**
         * Describes the mode of backups.
         * Expected value is 'Continuous'.
         */
        type: pulumi.Input<"Continuous">;
    }

    /**
     * Configuration values for periodic mode backup
     */
    export interface ContinuousModePropertiesArgs {
        /**
         * Enum to indicate type of Continuos backup mode
         */
        tier?: pulumi.Input<string | enums.ContinuousTier>;
    }

    /**
     * The CORS policy for the Cosmos DB database account.
     */
    export interface CorsPolicyArgs {
        /**
         * The request headers that the origin domain may specify on the CORS request.
         */
        allowedHeaders?: pulumi.Input<string>;
        /**
         * The methods (HTTP request verbs) that the origin domain may use for a CORS request.
         */
        allowedMethods?: pulumi.Input<string>;
        /**
         * The origin domains that are permitted to make a request against the service via CORS.
         */
        allowedOrigins: pulumi.Input<string>;
        /**
         * The response headers that may be sent in the response to the CORS request and exposed by the browser to the request issuer.
         */
        exposedHeaders?: pulumi.Input<string>;
        /**
         * The maximum amount time that a browser should cache the preflight OPTIONS request.
         */
        maxAgeInSeconds?: pulumi.Input<number>;
    }

    /**
     * CreateUpdateOptions are a list of key-value pairs that describe the resource. Supported keys are "If-Match", "If-None-Match", "Session-Token" and "Throughput"
     */
    export interface CreateUpdateOptionsArgs {
        /**
         * Specifies the Autoscale settings.
         */
        autoscaleSettings?: pulumi.Input<AutoscaleSettingsArgs>;
        /**
         * Request Units per second. For example, "throughput": 10000.
         */
        throughput?: pulumi.Input<number>;
    }

    /**
     * Specific Databases to restore.
     */
    export interface DatabaseRestoreResourceArgs {
        /**
         * The names of the collections available for restore.
         */
        collectionNames?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The name of the database available for restore.
         */
        databaseName?: pulumi.Input<string>;
    }

    /**
     * Indicates what diagnostic log settings are to be enabled.
     */
    export interface DiagnosticLogSettingsArgs {
        /**
         * Describe the level of detail with which queries are to be logged.
         */
        enableFullTextQuery?: pulumi.Input<enums.EnableFullTextQuery>;
    }

    export interface ExcludedPathArgs {
        /**
         * The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*)
         */
        path?: pulumi.Input<string>;
    }

    /**
     * Cosmos DB Graph resource object
     */
    export interface GraphResourceArgs {
        /**
         * Name of the Cosmos DB Graph
         */
        id: pulumi.Input<string>;
    }

    /**
     * Cosmos DB Gremlin database resource object
     */
    export interface GremlinDatabaseResourceArgs {
        /**
         * Enum to indicate the mode of resource creation.
         */
        createMode?: pulumi.Input<string | enums.CreateMode>;
        /**
         * Name of the Cosmos DB Gremlin database
         */
        id: pulumi.Input<string>;
        /**
         * Parameters to indicate the information about the restore
         */
        restoreParameters?: pulumi.Input<ResourceRestoreParametersArgs>;
    }

    /**
     * Specific Gremlin Databases to restore.
     */
    export interface GremlinDatabaseRestoreResourceArgs {
        /**
         * The name of the gremlin database available for restore.
         */
        databaseName?: pulumi.Input<string>;
        /**
         * The names of the graphs available for restore.
         */
        graphNames?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Cosmos DB Gremlin graph resource object
     */
    export interface GremlinGraphResourceArgs {
        /**
         * Analytical TTL.
         */
        analyticalStorageTtl?: pulumi.Input<number>;
        /**
         * The conflict resolution policy for the graph.
         */
        conflictResolutionPolicy?: pulumi.Input<ConflictResolutionPolicyArgs>;
        /**
         * Enum to indicate the mode of resource creation.
         */
        createMode?: pulumi.Input<string | enums.CreateMode>;
        /**
         * Default time to live
         */
        defaultTtl?: pulumi.Input<number>;
        /**
         * Name of the Cosmos DB Gremlin graph
         */
        id: pulumi.Input<string>;
        /**
         * The configuration of the indexing policy. By default, the indexing is automatic for all document paths within the graph
         */
        indexingPolicy?: pulumi.Input<IndexingPolicyArgs>;
        /**
         * The configuration of the partition key to be used for partitioning data into multiple partitions
         */
        partitionKey?: pulumi.Input<ContainerPartitionKeyArgs>;
        /**
         * Parameters to indicate the information about the restore
         */
        restoreParameters?: pulumi.Input<ResourceRestoreParametersArgs>;
        /**
         * The unique key policy configuration for specifying uniqueness constraints on documents in the collection in the Azure Cosmos DB service.
         */
        uniqueKeyPolicy?: pulumi.Input<UniqueKeyPolicyArgs>;
    }
    /**
     * gremlinGraphResourceArgsProvideDefaults sets the appropriate defaults for GremlinGraphResourceArgs
     */
    export function gremlinGraphResourceArgsProvideDefaults(val: GremlinGraphResourceArgs): GremlinGraphResourceArgs {
        return {
            ...val,
            conflictResolutionPolicy: (val.conflictResolutionPolicy ? pulumi.output(val.conflictResolutionPolicy).apply(conflictResolutionPolicyArgsProvideDefaults) : undefined),
            indexingPolicy: (val.indexingPolicy ? pulumi.output(val.indexingPolicy).apply(indexingPolicyArgsProvideDefaults) : undefined),
            partitionKey: (val.partitionKey ? pulumi.output(val.partitionKey).apply(containerPartitionKeyArgsProvideDefaults) : undefined),
        };
    }

    /**
     * The paths that are included in indexing
     */
    export interface IncludedPathArgs {
        /**
         * List of indexes for this path
         */
        indexes?: pulumi.Input<pulumi.Input<IndexesArgs>[]>;
        /**
         * The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*)
         */
        path?: pulumi.Input<string>;
    }

    /**
     * The indexes for the path.
     */
    export interface IndexesArgs {
        /**
         * The datatype for which the indexing behavior is applied to.
         */
        dataType?: pulumi.Input<string | enums.DataType>;
        /**
         * Indicates the type of index.
         */
        kind?: pulumi.Input<string | enums.IndexKind>;
        /**
         * The precision of the index. -1 is maximum precision.
         */
        precision?: pulumi.Input<number>;
    }
    /**
     * indexesArgsProvideDefaults sets the appropriate defaults for IndexesArgs
     */
    export function indexesArgsProvideDefaults(val: IndexesArgs): IndexesArgs {
        return {
            ...val,
            dataType: (val.dataType) ?? "String",
            kind: (val.kind) ?? "Hash",
        };
    }

    /**
     * Cosmos DB indexing policy
     */
    export interface IndexingPolicyArgs {
        /**
         * Indicates if the indexing policy is automatic
         */
        automatic?: pulumi.Input<boolean>;
        /**
         * List of composite path list
         */
        compositeIndexes?: pulumi.Input<pulumi.Input<pulumi.Input<CompositePathArgs>[]>[]>;
        /**
         * List of paths to exclude from indexing
         */
        excludedPaths?: pulumi.Input<pulumi.Input<ExcludedPathArgs>[]>;
        /**
         * List of paths to include in the indexing
         */
        includedPaths?: pulumi.Input<pulumi.Input<IncludedPathArgs>[]>;
        /**
         * Indicates the indexing mode.
         */
        indexingMode?: pulumi.Input<string | enums.IndexingMode>;
        /**
         * List of spatial specifics
         */
        spatialIndexes?: pulumi.Input<pulumi.Input<SpatialSpecArgs>[]>;
    }
    /**
     * indexingPolicyArgsProvideDefaults sets the appropriate defaults for IndexingPolicyArgs
     */
    export function indexingPolicyArgsProvideDefaults(val: IndexingPolicyArgs): IndexingPolicyArgs {
        return {
            ...val,
            indexingMode: (val.indexingMode) ?? "consistent",
        };
    }

    /**
     * IpAddressOrRange object
     */
    export interface IpAddressOrRangeArgs {
        /**
         * A single IPv4 address or a single IPv4 address range in CIDR format. Provided IPs must be well-formatted and cannot be contained in one of the following ranges: 10.0.0.0/8, 100.64.0.0/10, 172.16.0.0/12, 192.168.0.0/16, since these are not enforceable by the IP address filter. Example of valid inputs: “23.40.210.245” or “23.40.210.0/8”.
         */
        ipAddressOrRange?: pulumi.Input<string>;
    }

    /**
     * A region in which the Azure Cosmos DB database account is deployed.
     */
    export interface LocationArgs {
        /**
         * The failover priority of the region. A failover priority of 0 indicates a write region. The maximum value for a failover priority = (total number of regions - 1). Failover priority values must be unique for each of the regions in which the database account exists.
         */
        failoverPriority?: pulumi.Input<number>;
        /**
         * Flag to indicate whether or not this region is an AvailabilityZone region
         */
        isZoneRedundant?: pulumi.Input<boolean>;
        /**
         * The name of the region.
         */
        locationName?: pulumi.Input<string>;
    }

    /**
     * Identity for the resource.
     */
    export interface ManagedServiceIdentityArgs {
        /**
         * The type of identity used for the resource. The type 'SystemAssigned,UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service.
         */
        type?: pulumi.Input<enums.ResourceIdentityType>;
        /**
         * The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Materialized View definition for the container.
     */
    export interface MaterializedViewDefinitionArgs {
        /**
         * The definition should be an SQL query which would be used to fetch data from the source container to populate into the Materialized View container.
         */
        definition: pulumi.Input<string>;
        /**
         * The name of the source container on which the Materialized View will be created.
         */
        sourceCollectionId: pulumi.Input<string>;
    }

    /**
     * Parameters used for restore operations
     */
    export interface MongoClusterRestoreParametersArgs {
        /**
         * UTC point in time to restore a mongo cluster
         */
        pointInTimeUTC?: pulumi.Input<string>;
        /**
         * Resource ID to locate the source cluster to restore
         */
        sourceResourceId?: pulumi.Input<string>;
    }

    /**
     * Cosmos DB MongoDB collection resource object
     */
    export interface MongoDBCollectionResourceArgs {
        /**
         * Analytical TTL.
         */
        analyticalStorageTtl?: pulumi.Input<number>;
        /**
         * Enum to indicate the mode of resource creation.
         */
        createMode?: pulumi.Input<string | enums.CreateMode>;
        /**
         * Name of the Cosmos DB MongoDB collection
         */
        id: pulumi.Input<string>;
        /**
         * List of index keys
         */
        indexes?: pulumi.Input<pulumi.Input<MongoIndexArgs>[]>;
        /**
         * Parameters to indicate the information about the restore
         */
        restoreParameters?: pulumi.Input<ResourceRestoreParametersArgs>;
        /**
         * A key-value pair of shard keys to be applied for the request.
         */
        shardKey?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * Cosmos DB MongoDB database resource object
     */
    export interface MongoDBDatabaseResourceArgs {
        /**
         * Enum to indicate the mode of resource creation.
         */
        createMode?: pulumi.Input<string | enums.CreateMode>;
        /**
         * Name of the Cosmos DB MongoDB database
         */
        id: pulumi.Input<string>;
        /**
         * Parameters to indicate the information about the restore
         */
        restoreParameters?: pulumi.Input<ResourceRestoreParametersArgs>;
    }

    /**
     * Cosmos DB MongoDB collection index key
     */
    export interface MongoIndexArgs {
        /**
         * Cosmos DB MongoDB collection index keys
         */
        key?: pulumi.Input<MongoIndexKeysArgs>;
        /**
         * Cosmos DB MongoDB collection index key options
         */
        options?: pulumi.Input<MongoIndexOptionsArgs>;
    }

    /**
     * Cosmos DB MongoDB collection resource object
     */
    export interface MongoIndexKeysArgs {
        /**
         * List of keys for each MongoDB collection in the Azure Cosmos DB service
         */
        keys?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Cosmos DB MongoDB collection index options
     */
    export interface MongoIndexOptionsArgs {
        /**
         * Expire after seconds
         */
        expireAfterSeconds?: pulumi.Input<number>;
        /**
         * Is unique or not
         */
        unique?: pulumi.Input<boolean>;
    }

    /**
     * Specification for a node group.
     */
    export interface NodeGroupSpecArgs {
        /**
         * The disk storage size for the node group in GB. Example values: 128, 256, 512, 1024.
         */
        diskSizeGB?: pulumi.Input<number>;
        /**
         * Whether high availability is enabled on the node group.
         */
        enableHa?: pulumi.Input<boolean>;
        /**
         * The node type deployed in the node group.
         */
        kind?: pulumi.Input<string | enums.NodeKind>;
        /**
         * The number of nodes in the node group.
         */
        nodeCount?: pulumi.Input<number>;
        /**
         * The resource sku for the node group. This defines the size of CPU and memory that is provisioned for each node. Example values: 'M30', 'M40'.
         */
        sku?: pulumi.Input<string>;
    }

    /**
     * The object representing periodic mode backup policy.
     */
    export interface PeriodicModeBackupPolicyArgs {
        /**
         * The object representing the state of the migration between the backup policies.
         */
        migrationState?: pulumi.Input<BackupPolicyMigrationStateArgs>;
        /**
         * Configuration values for periodic mode backup
         */
        periodicModeProperties?: pulumi.Input<PeriodicModePropertiesArgs>;
        /**
         * Describes the mode of backups.
         * Expected value is 'Periodic'.
         */
        type: pulumi.Input<"Periodic">;
    }

    /**
     * Configuration values for periodic mode backup
     */
    export interface PeriodicModePropertiesArgs {
        /**
         * An integer representing the interval in minutes between two backups
         */
        backupIntervalInMinutes?: pulumi.Input<number>;
        /**
         * An integer representing the time (in hours) that each backup is retained
         */
        backupRetentionIntervalInHours?: pulumi.Input<number>;
        /**
         * Enum to indicate type of backup residency
         */
        backupStorageRedundancy?: pulumi.Input<string | enums.BackupStorageRedundancy>;
    }

    /**
     * Parameters to indicate the information about the restore.
     */
    export interface ResourceRestoreParametersArgs {
        /**
         * The id of the restorable database account from which the restore has to be initiated. For example: /subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/locations/{location}/restorableDatabaseAccounts/{restorableDatabaseAccountName}
         */
        restoreSource?: pulumi.Input<string>;
        /**
         * Time to which the account has to be restored (ISO-8601 format).
         */
        restoreTimestampInUtc?: pulumi.Input<string>;
    }

    /**
     * Parameters to indicate the information about the restore.
     */
    export interface RestoreParametersArgs {
        /**
         * List of specific databases available for restore.
         */
        databasesToRestore?: pulumi.Input<pulumi.Input<DatabaseRestoreResourceArgs>[]>;
        /**
         * List of specific gremlin databases available for restore.
         */
        gremlinDatabasesToRestore?: pulumi.Input<pulumi.Input<GremlinDatabaseRestoreResourceArgs>[]>;
        /**
         * Describes the mode of the restore.
         */
        restoreMode?: pulumi.Input<string | enums.RestoreMode>;
        /**
         * The id of the restorable database account from which the restore has to be initiated. For example: /subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/locations/{location}/restorableDatabaseAccounts/{restorableDatabaseAccountName}
         */
        restoreSource?: pulumi.Input<string>;
        /**
         * Time to which the account has to be restored (ISO-8601 format).
         */
        restoreTimestampInUtc?: pulumi.Input<string>;
        /**
         * The source backup location for restore.
         */
        sourceBackupLocation?: pulumi.Input<string>;
        /**
         * List of specific tables available for restore.
         */
        tablesToRestore?: pulumi.Input<pulumi.Input<string>[]>;
    }

    export interface SpatialSpecArgs {
        /**
         * The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*)
         */
        path?: pulumi.Input<string>;
        /**
         * List of path's spatial type
         */
        types?: pulumi.Input<pulumi.Input<string | enums.SpatialType>[]>;
    }

    /**
     * Cosmos DB SQL container resource object
     */
    export interface SqlContainerResourceArgs {
        /**
         * Analytical TTL.
         */
        analyticalStorageTtl?: pulumi.Input<number>;
        /**
         * The client encryption policy for the container.
         */
        clientEncryptionPolicy?: pulumi.Input<ClientEncryptionPolicyArgs>;
        /**
         * The conflict resolution policy for the container.
         */
        conflictResolutionPolicy?: pulumi.Input<ConflictResolutionPolicyArgs>;
        /**
         * Enum to indicate the mode of resource creation.
         */
        createMode?: pulumi.Input<string | enums.CreateMode>;
        /**
         * Default time to live
         */
        defaultTtl?: pulumi.Input<number>;
        /**
         * Name of the Cosmos DB SQL container
         */
        id: pulumi.Input<string>;
        /**
         * The configuration of the indexing policy. By default, the indexing is automatic for all document paths within the container
         */
        indexingPolicy?: pulumi.Input<IndexingPolicyArgs>;
        /**
         * The configuration for defining Materialized Views. This must be specified only for creating a Materialized View container.
         */
        materializedViewDefinition?: pulumi.Input<MaterializedViewDefinitionArgs>;
        /**
         * The configuration of the partition key to be used for partitioning data into multiple partitions
         */
        partitionKey?: pulumi.Input<ContainerPartitionKeyArgs>;
        /**
         * Parameters to indicate the information about the restore
         */
        restoreParameters?: pulumi.Input<ResourceRestoreParametersArgs>;
        /**
         * The unique key policy configuration for specifying uniqueness constraints on documents in the collection in the Azure Cosmos DB service.
         */
        uniqueKeyPolicy?: pulumi.Input<UniqueKeyPolicyArgs>;
    }
    /**
     * sqlContainerResourceArgsProvideDefaults sets the appropriate defaults for SqlContainerResourceArgs
     */
    export function sqlContainerResourceArgsProvideDefaults(val: SqlContainerResourceArgs): SqlContainerResourceArgs {
        return {
            ...val,
            conflictResolutionPolicy: (val.conflictResolutionPolicy ? pulumi.output(val.conflictResolutionPolicy).apply(conflictResolutionPolicyArgsProvideDefaults) : undefined),
            indexingPolicy: (val.indexingPolicy ? pulumi.output(val.indexingPolicy).apply(indexingPolicyArgsProvideDefaults) : undefined),
            partitionKey: (val.partitionKey ? pulumi.output(val.partitionKey).apply(containerPartitionKeyArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Cosmos DB SQL database resource object
     */
    export interface SqlDatabaseResourceArgs {
        /**
         * Enum to indicate the mode of resource creation.
         */
        createMode?: pulumi.Input<string | enums.CreateMode>;
        /**
         * Name of the Cosmos DB SQL database
         */
        id: pulumi.Input<string>;
        /**
         * Parameters to indicate the information about the restore
         */
        restoreParameters?: pulumi.Input<ResourceRestoreParametersArgs>;
    }

    /**
     * Cosmos DB SQL storedProcedure resource object
     */
    export interface SqlStoredProcedureResourceArgs {
        /**
         * Body of the Stored Procedure
         */
        body?: pulumi.Input<string>;
        /**
         * Name of the Cosmos DB SQL storedProcedure
         */
        id: pulumi.Input<string>;
    }

    /**
     * Cosmos DB SQL trigger resource object
     */
    export interface SqlTriggerResourceArgs {
        /**
         * Body of the Trigger
         */
        body?: pulumi.Input<string>;
        /**
         * Name of the Cosmos DB SQL trigger
         */
        id: pulumi.Input<string>;
        /**
         * The operation the trigger is associated with
         */
        triggerOperation?: pulumi.Input<string | enums.TriggerOperation>;
        /**
         * Type of the Trigger
         */
        triggerType?: pulumi.Input<string | enums.TriggerType>;
    }

    /**
     * Cosmos DB SQL userDefinedFunction resource object
     */
    export interface SqlUserDefinedFunctionResourceArgs {
        /**
         * Body of the User Defined Function
         */
        body?: pulumi.Input<string>;
        /**
         * Name of the Cosmos DB SQL userDefinedFunction
         */
        id: pulumi.Input<string>;
    }

    /**
     * Cosmos DB table resource object
     */
    export interface TableResourceArgs {
        /**
         * Enum to indicate the mode of resource creation.
         */
        createMode?: pulumi.Input<string | enums.CreateMode>;
        /**
         * Name of the Cosmos DB table
         */
        id: pulumi.Input<string>;
        /**
         * Parameters to indicate the information about the restore
         */
        restoreParameters?: pulumi.Input<ResourceRestoreParametersArgs>;
    }

    /**
     * The unique key on that enforces uniqueness constraint on documents in the collection in the Azure Cosmos DB service.
     */
    export interface UniqueKeyArgs {
        /**
         * List of paths must be unique for each document in the Azure Cosmos DB service
         */
        paths?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The unique key policy configuration for specifying uniqueness constraints on documents in the collection in the Azure Cosmos DB service.
     */
    export interface UniqueKeyPolicyArgs {
        /**
         * List of unique keys on that enforces uniqueness constraint on documents in the collection in the Azure Cosmos DB service.
         */
        uniqueKeys?: pulumi.Input<pulumi.Input<UniqueKeyArgs>[]>;
    }

    /**
     * Virtual Network ACL Rule object
     */
    export interface VirtualNetworkRuleArgs {
        /**
         * Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}.
         */
        id?: pulumi.Input<string>;
        /**
         * Create firewall rule before the virtual network has vnet service endpoint enabled.
         */
        ignoreMissingVNetServiceEndpoint?: pulumi.Input<boolean>;
    }
