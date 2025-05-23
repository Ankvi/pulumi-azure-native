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
     * Describes the version of the MongoDB account.
     */
    serverVersion?: pulumi.Input<string | enums.ServerVersion>;
}

/**
 * Ldap authentication method properties. This feature is in preview.
 */
export interface AuthenticationMethodLdapPropertiesArgs {
    /**
     * Timeout for connecting to the LDAP server in miliseconds. The default is 5000 ms.
     */
    connectionTimeoutInMs?: pulumi.Input<number>;
    /**
     * Distinguished name of the object to start the recursive search of users from.
     */
    searchBaseDistinguishedName?: pulumi.Input<string>;
    /**
     * Template to use for searching. Defaults to (cn=%s) where %s will be replaced by the username used to login.
     */
    searchFilterTemplate?: pulumi.Input<string>;
    serverCertificates?: pulumi.Input<pulumi.Input<CertificateArgs>[]>;
    /**
     * Hostname of the LDAP server.
     */
    serverHostname?: pulumi.Input<string>;
    /**
     * Port of the LDAP server.
     */
    serverPort?: pulumi.Input<number>;
    /**
     * Distinguished name of the look up user account, who can look up user details on authentication.
     */
    serviceUserDistinguishedName?: pulumi.Input<string>;
    /**
     * Password of the look up user.
     */
    serviceUserPassword?: pulumi.Input<string>;
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

export interface CassandraErrorArgs {
    /**
     * Additional information about the error.
     */
    additionalErrorInfo?: pulumi.Input<string>;
    /**
     * The code of error that occurred.
     */
    code?: pulumi.Input<string>;
    /**
     * The message of the error.
     */
    message?: pulumi.Input<string>;
    /**
     * The target resource of the error.
     */
    target?: pulumi.Input<string>;
}

/**
 * Cosmos DB Cassandra keyspace id object
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
 * Cosmos DB Cassandra table id object
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

export interface CertificateArgs {
    /**
     * PEM formatted public key.
     */
    pem?: pulumi.Input<string>;
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
 * Properties of a managed Cassandra cluster.
 */
export interface ClusterResourcePropertiesArgs {
    /**
     * Which authentication method Cassandra should use to authenticate clients. 'None' turns off authentication, so should not be used except in emergencies. 'Cassandra' is the default password based authentication. The default is 'Cassandra'.
     */
    authenticationMethod?: pulumi.Input<string | enums.AuthenticationMethod>;
    /**
     * How to connect to the azure services needed for running the cluster
     */
    azureConnectionMethod?: pulumi.Input<string | enums.AzureConnectionType>;
    /**
     * Whether Cassandra audit logging is enabled
     */
    cassandraAuditLoggingEnabled?: pulumi.Input<boolean>;
    /**
     * Which version of Cassandra should this cluster converge to running (e.g., 3.11). When updated, the cluster may take some time to migrate to the new version.
     */
    cassandraVersion?: pulumi.Input<string>;
    /**
     * List of TLS certificates used to authorize clients connecting to the cluster. All connections are TLS encrypted whether clientCertificates is set or not, but if clientCertificates is set, the managed Cassandra cluster will reject all connections not bearing a TLS client certificate that can be validated from one or more of the public certificates in this property.
     */
    clientCertificates?: pulumi.Input<pulumi.Input<CertificateArgs>[]>;
    /**
     * If you need to set the clusterName property in cassandra.yaml to something besides the resource name of the cluster, set the value to use on this property.
     */
    clusterNameOverride?: pulumi.Input<string>;
    /**
     * Whether the cluster and associated data centers has been deallocated.
     */
    deallocated?: pulumi.Input<boolean>;
    /**
     * Resource id of a subnet that this cluster's management service should have its network interface attached to. The subnet must be routable to all subnets that will be delegated to data centers. The resource id must be of the form '/subscriptions/<subscription id>/resourceGroups/<resource group>/providers/Microsoft.Network/virtualNetworks/<virtual network>/subnets/<subnet>'
     */
    delegatedManagementSubnetId?: pulumi.Input<string>;
    /**
     * List of TLS certificates used to authorize gossip from unmanaged data centers. The TLS certificates of all nodes in unmanaged data centers must be verifiable using one of the certificates provided in this property.
     */
    externalGossipCertificates?: pulumi.Input<pulumi.Input<CertificateArgs>[]>;
    /**
     * List of IP addresses of seed nodes in unmanaged data centers. These will be added to the seed node lists of all managed nodes.
     */
    externalSeedNodes?: pulumi.Input<pulumi.Input<SeedNodeArgs>[]>;
    /**
     * (Deprecated) Number of hours to wait between taking a backup of the cluster.
     */
    hoursBetweenBackups?: pulumi.Input<number>;
    /**
     * Initial password for clients connecting as admin to the cluster. Should be changed after cluster creation. Returns null on GET. This field only applies when the authenticationMethod field is 'Cassandra'.
     */
    initialCassandraAdminPassword?: pulumi.Input<string>;
    /**
     * Hostname or IP address where the Prometheus endpoint containing data about the managed Cassandra nodes can be reached.
     */
    prometheusEndpoint?: pulumi.Input<SeedNodeArgs>;
    /**
     * Error related to resource provisioning.
     */
    provisionError?: pulumi.Input<CassandraErrorArgs>;
    /**
     * The status of the resource at the time the operation was called.
     */
    provisioningState?: pulumi.Input<string | enums.ManagedCassandraProvisioningState>;
    /**
     * Should automatic repairs run on this cluster? If omitted, this is true, and should stay true unless you are running a hybrid cluster where you are already doing your own repairs.
     */
    repairEnabled?: pulumi.Input<boolean>;
    /**
     * To create an empty cluster, omit this field or set it to null. To restore a backup into a new cluster, set this field to the resource id of the backup.
     */
    restoreFromBackupId?: pulumi.Input<string>;
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
 * The definition of a computed property
 */
export interface ComputedPropertyArgs {
    /**
     * The name of a computed property, for example - "cp_lowerName"
     */
    name?: pulumi.Input<string>;
    /**
     * The query that evaluates the value for computed property, for example - "SELECT VALUE LOWER(c.name) FROM c"
     */
    query?: pulumi.Input<string>;
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
     * Enum to indicate type of Continuous backup mode
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
     * Specifies the Autoscale settings. Note: Either throughput or autoscaleSettings is required, but not both.
     */
    autoscaleSettings?: pulumi.Input<AutoscaleSettingsArgs>;
    /**
     * Request Units per second. For example, "throughput": 10000.
     */
    throughput?: pulumi.Input<number>;
}

/**
 * Properties of a managed Cassandra data center.
 */
export interface DataCenterResourcePropertiesArgs {
    /**
     * Ldap authentication method properties. This feature is in preview.
     */
    authenticationMethodLdapProperties?: pulumi.Input<AuthenticationMethodLdapPropertiesArgs>;
    /**
     * If the data center has Availability Zone support, apply it to the Virtual Machine ScaleSet that host the cassandra data center virtual machines.
     */
    availabilityZone?: pulumi.Input<boolean>;
    /**
     * Indicates the Key Uri of the customer key to use for encryption of the backup storage account.
     */
    backupStorageCustomerKeyUri?: pulumi.Input<string>;
    /**
     * A fragment of a cassandra.yaml configuration file to be included in the cassandra.yaml for all nodes in this data center. The fragment should be Base64 encoded, and only a subset of keys are allowed.
     */
    base64EncodedCassandraYamlFragment?: pulumi.Input<string>;
    /**
     * The region this data center should be created in.
     */
    dataCenterLocation?: pulumi.Input<string>;
    /**
     * Whether the data center has been deallocated.
     */
    deallocated?: pulumi.Input<boolean>;
    /**
     * Resource id of a subnet the nodes in this data center should have their network interfaces connected to. The subnet must be in the same region specified in 'dataCenterLocation' and must be able to route to the subnet specified in the cluster's 'delegatedManagementSubnetId' property. This resource id will be of the form '/subscriptions/<subscription id>/resourceGroups/<resource group>/providers/Microsoft.Network/virtualNetworks/<virtual network>/subnets/<subnet>'.
     */
    delegatedSubnetId?: pulumi.Input<string>;
    /**
     * Number of disks attached to each node. Default is 4.
     */
    diskCapacity?: pulumi.Input<number>;
    /**
     * Disk SKU used for data centers. Default value is P30.
     */
    diskSku?: pulumi.Input<string>;
    /**
     * Key uri to use for encryption of managed disks. Ensure the system assigned identity of the cluster has been assigned appropriate permissions(key get/wrap/unwrap permissions) on the key.
     */
    managedDiskCustomerKeyUri?: pulumi.Input<string>;
    /**
     * The number of nodes the data center should have. This is the desired number. After it is set, it may take some time for the data center to be scaled to match. To monitor the number of nodes and their status, use the fetchNodeStatus method on the cluster.
     */
    nodeCount?: pulumi.Input<number>;
    /**
     * Ip of the VPN Endpoint for this data center.
     */
    privateEndpointIpAddress?: pulumi.Input<string>;
    /**
     * Error related to resource provisioning.
     */
    provisionError?: pulumi.Input<CassandraErrorArgs>;
    /**
     * The status of the resource at the time the operation was called.
     */
    provisioningState?: pulumi.Input<string | enums.ManagedCassandraProvisioningState>;
    /**
     * Virtual Machine SKU used for data centers. Default value is Standard_DS14_v2
     */
    sku?: pulumi.Input<string>;
}

/**
 * Properties for Create or Update request for DataTransferServiceResource
 */
export interface DataTransferServiceResourceCreateUpdatePropertiesArgs {
    /**
     * Instance count for the service.
     */
    instanceCount?: pulumi.Input<number>;
    /**
     * Instance type for the service.
     */
    instanceSize?: pulumi.Input<string | enums.ServiceSize>;
    /**
     * ServiceType for the service.
     * Expected value is 'DataTransfer'.
     */
    serviceType: pulumi.Input<"DataTransfer">;
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

export interface ExcludedPathArgs {
    /**
     * The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*)
     */
    path?: pulumi.Input<string>;
}

/**
 * Configuration for throughput pool in the fleetspace.
 */
export interface FleetspacePropertiesThroughputPoolConfigurationArgs {
    /**
     * List of data regions assigned to the fleetspace. Eg [westus2]
     */
    dataRegions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Maximum throughput for the pool.
     */
    maxThroughput?: pulumi.Input<number>;
    /**
     * Minimum throughput for the pool.
     */
    minThroughput?: pulumi.Input<number>;
    /**
     * Service Tier for the fleetspace. GeneralPurpose types refers to single write region accounts that can be added to this fleetspace, whereas BusinessCritical refers to multi write region.
     */
    serviceTier?: pulumi.Input<string | enums.ServiceTier>;
}

/**
 * Properties for Create or Update request for GraphAPIComputeServiceResource
 */
export interface GraphAPIComputeServiceResourceCreateUpdatePropertiesArgs {
    /**
     * Instance count for the service.
     */
    instanceCount?: pulumi.Input<number>;
    /**
     * Instance type for the service.
     */
    instanceSize?: pulumi.Input<string | enums.ServiceSize>;
    /**
     * ServiceType for the service.
     * Expected value is 'GraphAPICompute'.
     */
    serviceType: pulumi.Input<"GraphAPICompute">;
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
    /**
     * List of paths to include in the vector indexing
     */
    vectorIndexes?: pulumi.Input<pulumi.Input<VectorIndexArgs>[]>;
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
export interface ManagedCassandraManagedServiceIdentityArgs {
    /**
     * The type of the resource.
     */
    type?: pulumi.Input<string | enums.ManagedCassandraResourceIdentityType>;
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
 * Properties for Create or Update request for MaterializedViewsBuilderServiceResource
 */
export interface MaterializedViewsBuilderServiceResourceCreateUpdatePropertiesArgs {
    /**
     * Instance count for the service.
     */
    instanceCount?: pulumi.Input<number>;
    /**
     * Instance type for the service.
     */
    instanceSize?: pulumi.Input<string | enums.ServiceSize>;
    /**
     * ServiceType for the service.
     * Expected value is 'MaterializedViewsBuilder'.
     */
    serviceType: pulumi.Input<"MaterializedViewsBuilder">;
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
 * The set of data plane operations permitted through this Role Definition.
 */
export interface PermissionArgs {
    /**
     * An array of data actions that are allowed.
     */
    dataActions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The id for the permission.
     */
    id?: pulumi.Input<string>;
    /**
     * An array of data actions that are denied.
     */
    notDataActions?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Private endpoint which the connection belongs to.
 */
export interface PrivateEndpointPropertyArgs {
    /**
     * Resource id of the private endpoint.
     */
    id?: pulumi.Input<string>;
}

/**
 * Connection State of the Private Endpoint Connection.
 */
export interface PrivateLinkServiceConnectionStatePropertyArgs {
    /**
     * The private link service connection description.
     */
    description?: pulumi.Input<string>;
    /**
     * The private link service connection status.
     */
    status?: pulumi.Input<string>;
}

/**
 * The set of data plane operations permitted through this Role Definition.
 */
export interface PrivilegeArgs {
    /**
     * An array of actions that are allowed.
     */
    actions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An Azure Cosmos DB Mongo DB Resource.
     */
    resource?: pulumi.Input<PrivilegeResourceArgs>;
}

/**
 * An Azure Cosmos DB Mongo DB Resource.
 */
export interface PrivilegeResourceArgs {
    /**
     * The collection name the role is applied.
     */
    collection?: pulumi.Input<string>;
    /**
     * The database name the role is applied.
     */
    db?: pulumi.Input<string>;
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
    /**
     * Specifies whether the restored account will have Time-To-Live disabled upon the successful restore.
     */
    restoreWithTtlDisabled?: pulumi.Input<boolean>;
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
     * Specifies whether the restored account will have Time-To-Live disabled upon the successful restore.
     */
    restoreWithTtlDisabled?: pulumi.Input<boolean>;
    /**
     * List of specific tables available for restore.
     */
    tablesToRestore?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of roles permitted through this Role Definition.
 */
export interface RoleArgs {
    /**
     * The database name the role is applied.
     */
    db?: pulumi.Input<string>;
    /**
     * The role name.
     */
    role?: pulumi.Input<string>;
}

export interface SeedNodeArgs {
    /**
     * IP address of this seed node.
     */
    ipAddress?: pulumi.Input<string>;
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
     * List of computed properties
     */
    computedProperties?: pulumi.Input<pulumi.Input<ComputedPropertyArgs>[]>;
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
    /**
     * The vector embedding policy for the container.
     */
    vectorEmbeddingPolicy?: pulumi.Input<VectorEmbeddingPolicyArgs>;
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
 * Properties for Create or Update request for SqlDedicatedGatewayServiceResource
 */
export interface SqlDedicatedGatewayServiceResourceCreateUpdatePropertiesArgs {
    /**
     * DedicatedGatewayType for the service.
     */
    dedicatedGatewayType?: pulumi.Input<string | enums.DedicatedGatewayType>;
    /**
     * Instance count for the service.
     */
    instanceCount?: pulumi.Input<number>;
    /**
     * Instance type for the service.
     */
    instanceSize?: pulumi.Input<string | enums.ServiceSize>;
    /**
     * ServiceType for the service.
     * Expected value is 'SqlDedicatedGateway'.
     */
    serviceType: pulumi.Input<"SqlDedicatedGateway">;
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
 * Represents a vector embedding. A vector embedding is used to define a vector field in the documents.
 */
export interface VectorEmbeddingArgs {
    /**
     * Indicates the data type of vector.
     */
    dataType: pulumi.Input<string | enums.VectorDataType>;
    /**
     * The number of dimensions in the vector.
     */
    dimensions: pulumi.Input<number>;
    /**
     * The distance function to use for distance calculation in between vectors.
     */
    distanceFunction: pulumi.Input<string | enums.DistanceFunction>;
    /**
     * The path to the vector field in the document.
     */
    path: pulumi.Input<string>;
}

/**
 * Cosmos DB Vector Embedding Policy
 */
export interface VectorEmbeddingPolicyArgs {
    /**
     * List of vector embeddings
     */
    vectorEmbeddings?: pulumi.Input<pulumi.Input<VectorEmbeddingArgs>[]>;
}

export interface VectorIndexArgs {
    /**
     * The path to the vector field in the document.
     */
    path: pulumi.Input<string>;
    /**
     * The index type of the vector. Currently, flat, diskANN, and quantizedFlat are supported.
     */
    type: pulumi.Input<string | enums.VectorIndexType>;
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
