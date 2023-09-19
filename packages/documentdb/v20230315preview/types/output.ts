import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The metadata related to an access key for a given database account.
     */
    export interface AccountKeyMetadataResponse {
        /**
         * Generation time in UTC of the key in ISO-8601 format. If the value is missing from the object, it means that the last key regeneration was triggered before 2022-06-18.
         */
        generationTime: string;
    }

    /**
     * Analytical storage specific properties.
     */
    export interface AnalyticalStorageConfigurationResponse {
        /**
         * Describes the types of schema for analytical storage.
         */
        schemaType?: string;
    }

    export interface ApiPropertiesResponse {
        /**
         * Describes the ServerVersion of an a MongoDB account.
         */
        serverVersion?: string;
    }

    export interface AutoscaleSettingsResponse {
        /**
         * Represents maximum throughput, the resource can scale up to.
         */
        maxThroughput?: number;
    }

    /**
     * The object representing the state of the migration between the backup policies.
     */
    export interface BackupPolicyMigrationStateResponse {
        /**
         * Time at which the backup policy migration started (ISO-8601 format).
         */
        startTime?: string;
        /**
         * Describes the status of migration between backup policy types.
         */
        status?: string;
        /**
         * Describes the target backup policy type of the backup policy migration.
         */
        targetType?: string;
    }

    /**
     * Cosmos DB capability object
     */
    export interface CapabilityResponse {
        /**
         * Name of the Cosmos DB capability. For example, "name": "EnableCassandra". Current values also include "EnableTable" and "EnableGremlin".
         */
        name?: string;
    }

    /**
     * The object that represents all properties related to capacity enforcement on an account.
     */
    export interface CapacityResponse {
        /**
         * The total throughput limit imposed on the account. A totalThroughputLimit of 2000 imposes a strict limit of max throughput that can be provisioned on that account to be 2000. A totalThroughputLimit of -1 indicates no limits on provisioning of throughput.
         */
        totalThroughputLimit?: number;
    }

    export interface CassandraKeyspaceGetPropertiesResponseOptions {
        /**
         * Specifies the Autoscale settings.
         */
        autoscaleSettings?: AutoscaleSettingsResponse;
        /**
         * Value of the Cosmos DB resource throughput or autoscaleSettings. Use the ThroughputSetting resource when retrieving offer details.
         */
        throughput?: number;
    }

    export interface CassandraKeyspaceGetPropertiesResponseResource {
        /**
         * A system generated property representing the resource etag required for optimistic concurrency control.
         */
        etag: string;
        /**
         * Name of the Cosmos DB Cassandra keyspace
         */
        id: string;
        /**
         * A system generated property. A unique identifier.
         */
        rid: string;
        /**
         * A system generated property that denotes the last updated timestamp of the resource.
         */
        ts: number;
    }

    /**
     * Cosmos DB Cassandra table partition key
     */
    export interface CassandraPartitionKeyResponse {
        /**
         * Name of the Cosmos DB Cassandra table partition key
         */
        name?: string;
    }

    /**
     * Cosmos DB Cassandra table schema
     */
    export interface CassandraSchemaResponse {
        /**
         * List of cluster key.
         */
        clusterKeys?: ClusterKeyResponse[];
        /**
         * List of Cassandra table columns.
         */
        columns?: ColumnResponse[];
        /**
         * List of partition key.
         */
        partitionKeys?: CassandraPartitionKeyResponse[];
    }

    export interface CassandraTableGetPropertiesResponseOptions {
        /**
         * Specifies the Autoscale settings.
         */
        autoscaleSettings?: AutoscaleSettingsResponse;
        /**
         * Value of the Cosmos DB resource throughput or autoscaleSettings. Use the ThroughputSetting resource when retrieving offer details.
         */
        throughput?: number;
    }

    export interface CassandraTableGetPropertiesResponseResource {
        /**
         * Analytical TTL.
         */
        analyticalStorageTtl?: number;
        /**
         * Time to live of the Cosmos DB Cassandra table
         */
        defaultTtl?: number;
        /**
         * A system generated property representing the resource etag required for optimistic concurrency control.
         */
        etag: string;
        /**
         * Name of the Cosmos DB Cassandra table
         */
        id: string;
        /**
         * A system generated property. A unique identifier.
         */
        rid: string;
        /**
         * Schema of the Cosmos DB Cassandra table
         */
        schema?: CassandraSchemaResponse;
        /**
         * A system generated property that denotes the last updated timestamp of the resource.
         */
        ts: number;
    }

    export interface CassandraViewGetPropertiesResponseOptions {
        /**
         * Specifies the Autoscale settings.
         */
        autoscaleSettings?: AutoscaleSettingsResponse;
        /**
         * Value of the Cosmos DB resource throughput or autoscaleSettings. Use the ThroughputSetting resource when retrieving offer details.
         */
        throughput?: number;
    }

    export interface CassandraViewGetPropertiesResponseResource {
        /**
         * A system generated property representing the resource etag required for optimistic concurrency control.
         */
        etag: string;
        /**
         * Name of the Cosmos DB Cassandra view
         */
        id: string;
        /**
         * A system generated property. A unique identifier.
         */
        rid: string;
        /**
         * A system generated property that denotes the last updated timestamp of the resource.
         */
        ts: number;
        /**
         * View Definition of the Cosmos DB Cassandra view
         */
        viewDefinition: string;
    }

    /**
     * .
     */
    export interface ClientEncryptionIncludedPathResponse {
        /**
         * The identifier of the Client Encryption Key to be used to encrypt the path.
         */
        clientEncryptionKeyId: string;
        /**
         * The encryption algorithm which will be used. Eg - AEAD_AES_256_CBC_HMAC_SHA256.
         */
        encryptionAlgorithm: string;
        /**
         * The type of encryption to be performed. Eg - Deterministic, Randomized.
         */
        encryptionType: string;
        /**
         * Path that needs to be encrypted.
         */
        path: string;
    }

    /**
     * Cosmos DB client encryption policy.
     */
    export interface ClientEncryptionPolicyResponse {
        /**
         * Paths of the item that need encryption along with path-specific settings.
         */
        includedPaths: ClientEncryptionIncludedPathResponse[];
        /**
         * Version of the client encryption policy definition. Supported versions are 1 and 2. Version 2 supports id and partition key path encryption. 
         */
        policyFormatVersion: number;
    }

    /**
     * Cosmos DB Cassandra table cluster key
     */
    export interface ClusterKeyResponse {
        /**
         * Name of the Cosmos DB Cassandra table cluster key
         */
        name?: string;
        /**
         * Order of the Cosmos DB Cassandra table cluster key, only support "Asc" and "Desc"
         */
        orderBy?: string;
    }

    /**
     * Cosmos DB Cassandra table column
     */
    export interface ColumnResponse {
        /**
         * Name of the Cosmos DB Cassandra table column
         */
        name?: string;
        /**
         * Type of the Cosmos DB Cassandra table column
         */
        type?: string;
    }

    export interface CompositePathResponse {
        /**
         * Sort order for composite paths.
         */
        order?: string;
        /**
         * The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*)
         */
        path?: string;
    }

    /**
     * The conflict resolution policy for the container.
     */
    export interface ConflictResolutionPolicyResponse {
        /**
         * The conflict resolution path in the case of LastWriterWins mode.
         */
        conflictResolutionPath?: string;
        /**
         * The procedure to resolve conflicts in the case of custom mode.
         */
        conflictResolutionProcedure?: string;
        /**
         * Indicates the conflict resolution mode.
         */
        mode?: string;
    }
    /**
     * conflictResolutionPolicyResponseProvideDefaults sets the appropriate defaults for ConflictResolutionPolicyResponse
     */
    export function conflictResolutionPolicyResponseProvideDefaults(val: ConflictResolutionPolicyResponse): ConflictResolutionPolicyResponse {
        return {
            ...val,
            mode: (val.mode) ?? "LastWriterWins",
        };
    }

    /**
     * Connection string for the mongo cluster
     */
    export interface ConnectionStringResponse {
        /**
         * Value of the connection string
         */
        connectionString: string;
        /**
         * Description of the connection string
         */
        description: string;
    }

    /**
     * The consistency policy for the Cosmos DB database account.
     */
    export interface ConsistencyPolicyResponse {
        /**
         * The default consistency level and configuration settings of the Cosmos DB account.
         */
        defaultConsistencyLevel: string;
        /**
         * When used with the Bounded Staleness consistency level, this value represents the time amount of staleness (in seconds) tolerated. Accepted range for this value is 5 - 86400. Required when defaultConsistencyPolicy is set to 'BoundedStaleness'.
         */
        maxIntervalInSeconds?: number;
        /**
         * When used with the Bounded Staleness consistency level, this value represents the number of stale requests tolerated. Accepted range for this value is 1 – 2,147,483,647. Required when defaultConsistencyPolicy is set to 'BoundedStaleness'.
         */
        maxStalenessPrefix?: number;
    }

    /**
     * The configuration of the partition key to be used for partitioning data into multiple partitions
     */
    export interface ContainerPartitionKeyResponse {
        /**
         * Indicates the kind of algorithm used for partitioning. For MultiHash, multiple partition keys (upto three maximum) are supported for container create
         */
        kind?: string;
        /**
         * List of paths using which data within the container can be partitioned
         */
        paths?: string[];
        /**
         * Indicates if the container is using a system generated partition key
         */
        systemKey: boolean;
        /**
         * Indicates the version of the partition key definition
         */
        version?: number;
    }
    /**
     * containerPartitionKeyResponseProvideDefaults sets the appropriate defaults for ContainerPartitionKeyResponse
     */
    export function containerPartitionKeyResponseProvideDefaults(val: ContainerPartitionKeyResponse): ContainerPartitionKeyResponse {
        return {
            ...val,
            kind: (val.kind) ?? "Hash",
        };
    }

    /**
     * The object representing continuous mode backup policy.
     */
    export interface ContinuousModeBackupPolicyResponse {
        /**
         * Configuration values for continuous mode backup
         */
        continuousModeProperties?: ContinuousModePropertiesResponse;
        /**
         * The object representing the state of the migration between the backup policies.
         */
        migrationState?: BackupPolicyMigrationStateResponse;
        /**
         * Describes the mode of backups.
         * Expected value is 'Continuous'.
         */
        type: "Continuous";
    }

    /**
     * Configuration values for periodic mode backup
     */
    export interface ContinuousModePropertiesResponse {
        /**
         * Enum to indicate type of Continuos backup mode
         */
        tier?: string;
    }

    /**
     * The CORS policy for the Cosmos DB database account.
     */
    export interface CorsPolicyResponse {
        /**
         * The request headers that the origin domain may specify on the CORS request.
         */
        allowedHeaders?: string;
        /**
         * The methods (HTTP request verbs) that the origin domain may use for a CORS request.
         */
        allowedMethods?: string;
        /**
         * The origin domains that are permitted to make a request against the service via CORS.
         */
        allowedOrigins: string;
        /**
         * The response headers that may be sent in the response to the CORS request and exposed by the browser to the request issuer.
         */
        exposedHeaders?: string;
        /**
         * The maximum amount time that a browser should cache the preflight OPTIONS request.
         */
        maxAgeInSeconds?: number;
    }

    /**
     * Connection string for the Cosmos DB account
     */
    export interface DatabaseAccountConnectionStringResponse {
        /**
         * Value of the connection string
         */
        connectionString: string;
        /**
         * Description of the connection string
         */
        description: string;
        /**
         * Kind of the connection string key
         */
        keyKind: string;
        /**
         * Type of the connection string
         */
        type: string;
    }

    /**
     * The metadata related to each access key for the given Cosmos DB database account.
     */
    export interface DatabaseAccountKeysMetadataResponse {
        /**
         * The metadata related to the Primary Read-Write Key for the given Cosmos DB database account.
         */
        primaryMasterKey: AccountKeyMetadataResponse;
        /**
         * The metadata related to the Primary Read-Only Key for the given Cosmos DB database account.
         */
        primaryReadonlyMasterKey: AccountKeyMetadataResponse;
        /**
         * The metadata related to the Secondary Read-Write Key for the given Cosmos DB database account.
         */
        secondaryMasterKey: AccountKeyMetadataResponse;
        /**
         * The metadata related to the Secondary Read-Only Key for the given Cosmos DB database account.
         */
        secondaryReadonlyMasterKey: AccountKeyMetadataResponse;
    }

    /**
     * Specific Databases to restore.
     */
    export interface DatabaseRestoreResourceResponse {
        /**
         * The names of the collections available for restore.
         */
        collectionNames?: string[];
        /**
         * The name of the database available for restore.
         */
        databaseName?: string;
    }

    /**
     * Indicates what diagnostic log settings are to be enabled.
     */
    export interface DiagnosticLogSettingsResponse {
        /**
         * Describe the level of detail with which queries are to be logged.
         */
        enableFullTextQuery?: string;
    }

    export interface ExcludedPathResponse {
        /**
         * The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*)
         */
        path?: string;
    }

    /**
     * The failover policy for a given region of a database account.
     */
    export interface FailoverPolicyResponse {
        /**
         * The failover priority of the region. A failover priority of 0 indicates a write region. The maximum value for a failover priority = (total number of regions - 1). Failover priority values must be unique for each of the regions in which the database account exists.
         */
        failoverPriority?: number;
        /**
         * The unique identifier of the region in which the database account replicates to. Example: &lt;accountName&gt;-&lt;locationName&gt;.
         */
        id: string;
        /**
         * The name of the region in which the database account exists.
         */
        locationName?: string;
    }

    export interface GraphResourceGetPropertiesResponseOptions {
        /**
         * Specifies the Autoscale settings.
         */
        autoscaleSettings?: AutoscaleSettingsResponse;
        /**
         * Value of the Cosmos DB resource throughput or autoscaleSettings. Use the ThroughputSetting resource when retrieving offer details.
         */
        throughput?: number;
    }

    export interface GraphResourceGetPropertiesResponseResource {
        /**
         * Name of the Cosmos DB Graph
         */
        id: string;
    }

    export interface GremlinDatabaseGetPropertiesResponseOptions {
        /**
         * Specifies the Autoscale settings.
         */
        autoscaleSettings?: AutoscaleSettingsResponse;
        /**
         * Value of the Cosmos DB resource throughput or autoscaleSettings. Use the ThroughputSetting resource when retrieving offer details.
         */
        throughput?: number;
    }

    export interface GremlinDatabaseGetPropertiesResponseResource {
        /**
         * Enum to indicate the mode of resource creation.
         */
        createMode?: string;
        /**
         * A system generated property representing the resource etag required for optimistic concurrency control.
         */
        etag: string;
        /**
         * Name of the Cosmos DB Gremlin database
         */
        id: string;
        /**
         * Parameters to indicate the information about the restore
         */
        restoreParameters?: ResourceRestoreParametersResponse;
        /**
         * A system generated property. A unique identifier.
         */
        rid: string;
        /**
         * A system generated property that denotes the last updated timestamp of the resource.
         */
        ts: number;
    }

    /**
     * Specific Gremlin Databases to restore.
     */
    export interface GremlinDatabaseRestoreResourceResponse {
        /**
         * The name of the gremlin database available for restore.
         */
        databaseName?: string;
        /**
         * The names of the graphs available for restore.
         */
        graphNames?: string[];
    }

    export interface GremlinGraphGetPropertiesResponseOptions {
        /**
         * Specifies the Autoscale settings.
         */
        autoscaleSettings?: AutoscaleSettingsResponse;
        /**
         * Value of the Cosmos DB resource throughput or autoscaleSettings. Use the ThroughputSetting resource when retrieving offer details.
         */
        throughput?: number;
    }

    export interface GremlinGraphGetPropertiesResponseResource {
        /**
         * Analytical TTL.
         */
        analyticalStorageTtl?: number;
        /**
         * The conflict resolution policy for the graph.
         */
        conflictResolutionPolicy?: ConflictResolutionPolicyResponse;
        /**
         * Enum to indicate the mode of resource creation.
         */
        createMode?: string;
        /**
         * Default time to live
         */
        defaultTtl?: number;
        /**
         * A system generated property representing the resource etag required for optimistic concurrency control.
         */
        etag: string;
        /**
         * Name of the Cosmos DB Gremlin graph
         */
        id: string;
        /**
         * The configuration of the indexing policy. By default, the indexing is automatic for all document paths within the graph
         */
        indexingPolicy?: IndexingPolicyResponse;
        /**
         * The configuration of the partition key to be used for partitioning data into multiple partitions
         */
        partitionKey?: ContainerPartitionKeyResponse;
        /**
         * Parameters to indicate the information about the restore
         */
        restoreParameters?: ResourceRestoreParametersResponse;
        /**
         * A system generated property. A unique identifier.
         */
        rid: string;
        /**
         * A system generated property that denotes the last updated timestamp of the resource.
         */
        ts: number;
        /**
         * The unique key policy configuration for specifying uniqueness constraints on documents in the collection in the Azure Cosmos DB service.
         */
        uniqueKeyPolicy?: UniqueKeyPolicyResponse;
    }
    /**
     * gremlinGraphGetPropertiesResponseResourceProvideDefaults sets the appropriate defaults for GremlinGraphGetPropertiesResponseResource
     */
    export function gremlinGraphGetPropertiesResponseResourceProvideDefaults(val: GremlinGraphGetPropertiesResponseResource): GremlinGraphGetPropertiesResponseResource {
        return {
            ...val,
            conflictResolutionPolicy: (val.conflictResolutionPolicy ? conflictResolutionPolicyResponseProvideDefaults(val.conflictResolutionPolicy) : undefined),
            indexingPolicy: (val.indexingPolicy ? indexingPolicyResponseProvideDefaults(val.indexingPolicy) : undefined),
            partitionKey: (val.partitionKey ? containerPartitionKeyResponseProvideDefaults(val.partitionKey) : undefined),
        };
    }

    /**
     * The paths that are included in indexing
     */
    export interface IncludedPathResponse {
        /**
         * List of indexes for this path
         */
        indexes?: IndexesResponse[];
        /**
         * The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*)
         */
        path?: string;
    }

    /**
     * The indexes for the path.
     */
    export interface IndexesResponse {
        /**
         * The datatype for which the indexing behavior is applied to.
         */
        dataType?: string;
        /**
         * Indicates the type of index.
         */
        kind?: string;
        /**
         * The precision of the index. -1 is maximum precision.
         */
        precision?: number;
    }
    /**
     * indexesResponseProvideDefaults sets the appropriate defaults for IndexesResponse
     */
    export function indexesResponseProvideDefaults(val: IndexesResponse): IndexesResponse {
        return {
            ...val,
            dataType: (val.dataType) ?? "String",
            kind: (val.kind) ?? "Hash",
        };
    }

    /**
     * Cosmos DB indexing policy
     */
    export interface IndexingPolicyResponse {
        /**
         * Indicates if the indexing policy is automatic
         */
        automatic?: boolean;
        /**
         * List of composite path list
         */
        compositeIndexes?: CompositePathResponse[][];
        /**
         * List of paths to exclude from indexing
         */
        excludedPaths?: ExcludedPathResponse[];
        /**
         * List of paths to include in the indexing
         */
        includedPaths?: IncludedPathResponse[];
        /**
         * Indicates the indexing mode.
         */
        indexingMode?: string;
        /**
         * List of spatial specifics
         */
        spatialIndexes?: SpatialSpecResponse[];
    }
    /**
     * indexingPolicyResponseProvideDefaults sets the appropriate defaults for IndexingPolicyResponse
     */
    export function indexingPolicyResponseProvideDefaults(val: IndexingPolicyResponse): IndexingPolicyResponse {
        return {
            ...val,
            indexingMode: (val.indexingMode) ?? "consistent",
        };
    }

    /**
     * IpAddressOrRange object
     */
    export interface IpAddressOrRangeResponse {
        /**
         * A single IPv4 address or a single IPv4 address range in CIDR format. Provided IPs must be well-formatted and cannot be contained in one of the following ranges: 10.0.0.0/8, 100.64.0.0/10, 172.16.0.0/12, 192.168.0.0/16, since these are not enforceable by the IP address filter. Example of valid inputs: “23.40.210.245” or “23.40.210.0/8”.
         */
        ipAddressOrRange?: string;
    }

    /**
     * A region in which the Azure Cosmos DB database account is deployed.
     */
    export interface LocationResponse {
        /**
         * The connection endpoint for the specific region. Example: https://&lt;accountName&gt;-&lt;locationName&gt;.documents.azure.com:443/
         */
        documentEndpoint: string;
        /**
         * The failover priority of the region. A failover priority of 0 indicates a write region. The maximum value for a failover priority = (total number of regions - 1). Failover priority values must be unique for each of the regions in which the database account exists.
         */
        failoverPriority?: number;
        /**
         * The unique identifier of the region within the database account. Example: &lt;accountName&gt;-&lt;locationName&gt;.
         */
        id: string;
        /**
         * Flag to indicate whether or not this region is an AvailabilityZone region
         */
        isZoneRedundant?: boolean;
        /**
         * The name of the region.
         */
        locationName?: string;
        /**
         * The status of the Cosmos DB account at the time the operation was called. The status can be one of following. 'Creating' – the Cosmos DB account is being created. When an account is in Creating state, only properties that are specified as input for the Create Cosmos DB account operation are returned. 'Succeeded' – the Cosmos DB account is active for use. 'Updating' – the Cosmos DB account is being updated. 'Deleting' – the Cosmos DB account is being deleted. 'Failed' – the Cosmos DB account failed creation. 'DeletionFailed' – the Cosmos DB account deletion failed.
         */
        provisioningState: string;
    }

    /**
     * Identity for the resource.
     */
    export interface ManagedServiceIdentityResponse {
        /**
         * The principal id of the system assigned identity. This property will only be provided for a system assigned identity.
         */
        principalId: string;
        /**
         * The tenant id of the system assigned identity. This property will only be provided for a system assigned identity.
         */
        tenantId: string;
        /**
         * The type of identity used for the resource. The type 'SystemAssigned,UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service.
         */
        type?: string;
        /**
         * The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: {[key: string]: ManagedServiceIdentityResponseUserAssignedIdentities};
    }

    export interface ManagedServiceIdentityResponseUserAssignedIdentities {
        /**
         * The client id of user assigned identity.
         */
        clientId: string;
        /**
         * The principal id of user assigned identity.
         */
        principalId: string;
    }

    /**
     * Materialized View definition for the container.
     */
    export interface MaterializedViewDefinitionResponse {
        /**
         * The definition should be an SQL query which would be used to fetch data from the source container to populate into the Materialized View container.
         */
        definition: string;
        /**
         * The name of the source container on which the Materialized View will be created.
         */
        sourceCollectionId: string;
        /**
         * An unique identifier for the source collection. This is a system generated property.
         */
        sourceCollectionRid: string;
    }

    export interface MongoDBCollectionGetPropertiesResponseOptions {
        /**
         * Specifies the Autoscale settings.
         */
        autoscaleSettings?: AutoscaleSettingsResponse;
        /**
         * Value of the Cosmos DB resource throughput or autoscaleSettings. Use the ThroughputSetting resource when retrieving offer details.
         */
        throughput?: number;
    }

    export interface MongoDBCollectionGetPropertiesResponseResource {
        /**
         * Analytical TTL.
         */
        analyticalStorageTtl?: number;
        /**
         * Enum to indicate the mode of resource creation.
         */
        createMode?: string;
        /**
         * A system generated property representing the resource etag required for optimistic concurrency control.
         */
        etag: string;
        /**
         * Name of the Cosmos DB MongoDB collection
         */
        id: string;
        /**
         * List of index keys
         */
        indexes?: MongoIndexResponse[];
        /**
         * Parameters to indicate the information about the restore
         */
        restoreParameters?: ResourceRestoreParametersResponse;
        /**
         * A system generated property. A unique identifier.
         */
        rid: string;
        /**
         * A key-value pair of shard keys to be applied for the request.
         */
        shardKey?: {[key: string]: string};
        /**
         * A system generated property that denotes the last updated timestamp of the resource.
         */
        ts: number;
    }

    export interface MongoDBDatabaseGetPropertiesResponseOptions {
        /**
         * Specifies the Autoscale settings.
         */
        autoscaleSettings?: AutoscaleSettingsResponse;
        /**
         * Value of the Cosmos DB resource throughput or autoscaleSettings. Use the ThroughputSetting resource when retrieving offer details.
         */
        throughput?: number;
    }

    export interface MongoDBDatabaseGetPropertiesResponseResource {
        /**
         * Enum to indicate the mode of resource creation.
         */
        createMode?: string;
        /**
         * A system generated property representing the resource etag required for optimistic concurrency control.
         */
        etag: string;
        /**
         * Name of the Cosmos DB MongoDB database
         */
        id: string;
        /**
         * Parameters to indicate the information about the restore
         */
        restoreParameters?: ResourceRestoreParametersResponse;
        /**
         * A system generated property. A unique identifier.
         */
        rid: string;
        /**
         * A system generated property that denotes the last updated timestamp of the resource.
         */
        ts: number;
    }

    /**
     * Cosmos DB MongoDB collection resource object
     */
    export interface MongoIndexKeysResponse {
        /**
         * List of keys for each MongoDB collection in the Azure Cosmos DB service
         */
        keys?: string[];
    }

    /**
     * Cosmos DB MongoDB collection index options
     */
    export interface MongoIndexOptionsResponse {
        /**
         * Expire after seconds
         */
        expireAfterSeconds?: number;
        /**
         * Is unique or not
         */
        unique?: boolean;
    }

    /**
     * Cosmos DB MongoDB collection index key
     */
    export interface MongoIndexResponse {
        /**
         * Cosmos DB MongoDB collection index keys
         */
        key?: MongoIndexKeysResponse;
        /**
         * Cosmos DB MongoDB collection index key options
         */
        options?: MongoIndexOptionsResponse;
    }

    /**
     * Specification for a node group.
     */
    export interface NodeGroupSpecResponse {
        /**
         * The disk storage size for the node group in GB. Example values: 128, 256, 512, 1024.
         */
        diskSizeGB?: number;
        /**
         * Whether high availability is enabled on the node group.
         */
        enableHa?: boolean;
        /**
         * The node type deployed in the node group.
         */
        kind?: string;
        /**
         * The number of nodes in the node group.
         */
        nodeCount?: number;
        /**
         * The resource sku for the node group. This defines the size of CPU and memory that is provisioned for each node. Example values: 'M30', 'M40'.
         */
        sku?: string;
    }

    /**
     * The object representing periodic mode backup policy.
     */
    export interface PeriodicModeBackupPolicyResponse {
        /**
         * The object representing the state of the migration between the backup policies.
         */
        migrationState?: BackupPolicyMigrationStateResponse;
        /**
         * Configuration values for periodic mode backup
         */
        periodicModeProperties?: PeriodicModePropertiesResponse;
        /**
         * Describes the mode of backups.
         * Expected value is 'Periodic'.
         */
        type: "Periodic";
    }

    /**
     * Configuration values for periodic mode backup
     */
    export interface PeriodicModePropertiesResponse {
        /**
         * An integer representing the interval in minutes between two backups
         */
        backupIntervalInMinutes?: number;
        /**
         * An integer representing the time (in hours) that each backup is retained
         */
        backupRetentionIntervalInHours?: number;
        /**
         * Enum to indicate type of backup residency
         */
        backupStorageRedundancy?: string;
    }

    /**
     * A private endpoint connection
     */
    export interface PrivateEndpointConnectionResponse {
        /**
         * Group id of the private endpoint.
         */
        groupId?: string;
        /**
         * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
         */
        id: string;
        /**
         * The name of the resource
         */
        name: string;
        /**
         * Private endpoint which the connection belongs to.
         */
        privateEndpoint?: PrivateEndpointPropertyResponse;
        /**
         * Connection State of the Private Endpoint Connection.
         */
        privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStatePropertyResponse;
        /**
         * Provisioning state of the private endpoint.
         */
        provisioningState?: string;
        /**
         * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
         */
        type: string;
    }

    /**
     * Private endpoint which the connection belongs to.
     */
    export interface PrivateEndpointPropertyResponse {
        /**
         * Resource id of the private endpoint.
         */
        id?: string;
    }

    /**
     * Connection State of the Private Endpoint Connection.
     */
    export interface PrivateLinkServiceConnectionStatePropertyResponse {
        /**
         * Any action that is required beyond basic workflow (approve/ reject/ disconnect)
         */
        actionsRequired: string;
        /**
         * The private link service connection description.
         */
        description?: string;
        /**
         * The private link service connection status.
         */
        status?: string;
    }

    /**
     * Parameters to indicate the information about the restore.
     */
    export interface ResourceRestoreParametersResponse {
        /**
         * The id of the restorable database account from which the restore has to be initiated. For example: /subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/locations/{location}/restorableDatabaseAccounts/{restorableDatabaseAccountName}
         */
        restoreSource?: string;
        /**
         * Time to which the account has to be restored (ISO-8601 format).
         */
        restoreTimestampInUtc?: string;
    }

    /**
     * Parameters to indicate the information about the restore.
     */
    export interface RestoreParametersResponse {
        /**
         * List of specific databases available for restore.
         */
        databasesToRestore?: DatabaseRestoreResourceResponse[];
        /**
         * List of specific gremlin databases available for restore.
         */
        gremlinDatabasesToRestore?: GremlinDatabaseRestoreResourceResponse[];
        /**
         * Describes the mode of the restore.
         */
        restoreMode?: string;
        /**
         * The id of the restorable database account from which the restore has to be initiated. For example: /subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/locations/{location}/restorableDatabaseAccounts/{restorableDatabaseAccountName}
         */
        restoreSource?: string;
        /**
         * Time to which the account has to be restored (ISO-8601 format).
         */
        restoreTimestampInUtc?: string;
        /**
         * The source backup location for restore.
         */
        sourceBackupLocation?: string;
        /**
         * List of specific tables available for restore.
         */
        tablesToRestore?: string[];
    }

    export interface SpatialSpecResponse {
        /**
         * The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*)
         */
        path?: string;
        /**
         * List of path's spatial type
         */
        types?: string[];
    }

    export interface SqlContainerGetPropertiesResponseOptions {
        /**
         * Specifies the Autoscale settings.
         */
        autoscaleSettings?: AutoscaleSettingsResponse;
        /**
         * Value of the Cosmos DB resource throughput or autoscaleSettings. Use the ThroughputSetting resource when retrieving offer details.
         */
        throughput?: number;
    }

    export interface SqlContainerGetPropertiesResponseResource {
        /**
         * Analytical TTL.
         */
        analyticalStorageTtl?: number;
        /**
         * The client encryption policy for the container.
         */
        clientEncryptionPolicy?: ClientEncryptionPolicyResponse;
        /**
         * The conflict resolution policy for the container.
         */
        conflictResolutionPolicy?: ConflictResolutionPolicyResponse;
        /**
         * Enum to indicate the mode of resource creation.
         */
        createMode?: string;
        /**
         * Default time to live
         */
        defaultTtl?: number;
        /**
         * A system generated property representing the resource etag required for optimistic concurrency control.
         */
        etag: string;
        /**
         * Name of the Cosmos DB SQL container
         */
        id: string;
        /**
         * The configuration of the indexing policy. By default, the indexing is automatic for all document paths within the container
         */
        indexingPolicy?: IndexingPolicyResponse;
        /**
         * The configuration for defining Materialized Views. This must be specified only for creating a Materialized View container.
         */
        materializedViewDefinition?: MaterializedViewDefinitionResponse;
        /**
         * The configuration of the partition key to be used for partitioning data into multiple partitions
         */
        partitionKey?: ContainerPartitionKeyResponse;
        /**
         * Parameters to indicate the information about the restore
         */
        restoreParameters?: ResourceRestoreParametersResponse;
        /**
         * A system generated property. A unique identifier.
         */
        rid: string;
        /**
         * A system generated property that denotes the last updated timestamp of the resource.
         */
        ts: number;
        /**
         * The unique key policy configuration for specifying uniqueness constraints on documents in the collection in the Azure Cosmos DB service.
         */
        uniqueKeyPolicy?: UniqueKeyPolicyResponse;
    }
    /**
     * sqlContainerGetPropertiesResponseResourceProvideDefaults sets the appropriate defaults for SqlContainerGetPropertiesResponseResource
     */
    export function sqlContainerGetPropertiesResponseResourceProvideDefaults(val: SqlContainerGetPropertiesResponseResource): SqlContainerGetPropertiesResponseResource {
        return {
            ...val,
            conflictResolutionPolicy: (val.conflictResolutionPolicy ? conflictResolutionPolicyResponseProvideDefaults(val.conflictResolutionPolicy) : undefined),
            indexingPolicy: (val.indexingPolicy ? indexingPolicyResponseProvideDefaults(val.indexingPolicy) : undefined),
            partitionKey: (val.partitionKey ? containerPartitionKeyResponseProvideDefaults(val.partitionKey) : undefined),
        };
    }

    export interface SqlDatabaseGetPropertiesResponseOptions {
        /**
         * Specifies the Autoscale settings.
         */
        autoscaleSettings?: AutoscaleSettingsResponse;
        /**
         * Value of the Cosmos DB resource throughput or autoscaleSettings. Use the ThroughputSetting resource when retrieving offer details.
         */
        throughput?: number;
    }

    export interface SqlDatabaseGetPropertiesResponseResource {
        /**
         * A system generated property that specified the addressable path of the collections resource.
         */
        colls?: string;
        /**
         * Enum to indicate the mode of resource creation.
         */
        createMode?: string;
        /**
         * A system generated property representing the resource etag required for optimistic concurrency control.
         */
        etag: string;
        /**
         * Name of the Cosmos DB SQL database
         */
        id: string;
        /**
         * Parameters to indicate the information about the restore
         */
        restoreParameters?: ResourceRestoreParametersResponse;
        /**
         * A system generated property. A unique identifier.
         */
        rid: string;
        /**
         * A system generated property that denotes the last updated timestamp of the resource.
         */
        ts: number;
        /**
         * A system generated property that specifies the addressable path of the users resource.
         */
        users?: string;
    }

    export interface SqlStoredProcedureGetPropertiesResponseResource {
        /**
         * Body of the Stored Procedure
         */
        body?: string;
        /**
         * A system generated property representing the resource etag required for optimistic concurrency control.
         */
        etag: string;
        /**
         * Name of the Cosmos DB SQL storedProcedure
         */
        id: string;
        /**
         * A system generated property. A unique identifier.
         */
        rid: string;
        /**
         * A system generated property that denotes the last updated timestamp of the resource.
         */
        ts: number;
    }

    export interface SqlTriggerGetPropertiesResponseResource {
        /**
         * Body of the Trigger
         */
        body?: string;
        /**
         * A system generated property representing the resource etag required for optimistic concurrency control.
         */
        etag: string;
        /**
         * Name of the Cosmos DB SQL trigger
         */
        id: string;
        /**
         * A system generated property. A unique identifier.
         */
        rid: string;
        /**
         * The operation the trigger is associated with
         */
        triggerOperation?: string;
        /**
         * Type of the Trigger
         */
        triggerType?: string;
        /**
         * A system generated property that denotes the last updated timestamp of the resource.
         */
        ts: number;
    }

    export interface SqlUserDefinedFunctionGetPropertiesResponseResource {
        /**
         * Body of the User Defined Function
         */
        body?: string;
        /**
         * A system generated property representing the resource etag required for optimistic concurrency control.
         */
        etag: string;
        /**
         * Name of the Cosmos DB SQL userDefinedFunction
         */
        id: string;
        /**
         * A system generated property. A unique identifier.
         */
        rid: string;
        /**
         * A system generated property that denotes the last updated timestamp of the resource.
         */
        ts: number;
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

    export interface TableGetPropertiesResponseOptions {
        /**
         * Specifies the Autoscale settings.
         */
        autoscaleSettings?: AutoscaleSettingsResponse;
        /**
         * Value of the Cosmos DB resource throughput or autoscaleSettings. Use the ThroughputSetting resource when retrieving offer details.
         */
        throughput?: number;
    }

    export interface TableGetPropertiesResponseResource {
        /**
         * Enum to indicate the mode of resource creation.
         */
        createMode?: string;
        /**
         * A system generated property representing the resource etag required for optimistic concurrency control.
         */
        etag: string;
        /**
         * Name of the Cosmos DB table
         */
        id: string;
        /**
         * Parameters to indicate the information about the restore
         */
        restoreParameters?: ResourceRestoreParametersResponse;
        /**
         * A system generated property. A unique identifier.
         */
        rid: string;
        /**
         * A system generated property that denotes the last updated timestamp of the resource.
         */
        ts: number;
    }

    /**
     * The unique key policy configuration for specifying uniqueness constraints on documents in the collection in the Azure Cosmos DB service.
     */
    export interface UniqueKeyPolicyResponse {
        /**
         * List of unique keys on that enforces uniqueness constraint on documents in the collection in the Azure Cosmos DB service.
         */
        uniqueKeys?: UniqueKeyResponse[];
    }

    /**
     * The unique key on that enforces uniqueness constraint on documents in the collection in the Azure Cosmos DB service.
     */
    export interface UniqueKeyResponse {
        /**
         * List of paths must be unique for each document in the Azure Cosmos DB service
         */
        paths?: string[];
    }

    /**
     * Virtual Network ACL Rule object
     */
    export interface VirtualNetworkRuleResponse {
        /**
         * Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}.
         */
        id?: string;
        /**
         * Create firewall rule before the virtual network has vnet service endpoint enabled.
         */
        ignoreMissingVNetServiceEndpoint?: boolean;
    }
