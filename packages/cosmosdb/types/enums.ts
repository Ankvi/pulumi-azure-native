export const AnalyticalStorageSchemaType = {
    WellDefined: "WellDefined",
    FullFidelity: "FullFidelity",
} as const;

/**
 * Describes the types of schema for analytical storage.
 */
export type AnalyticalStorageSchemaType = (typeof AnalyticalStorageSchemaType)[keyof typeof AnalyticalStorageSchemaType];

export const AuthenticationMethod = {
    None: "None",
    Cassandra: "Cassandra",
    Ldap: "Ldap",
} as const;

/**
 * Which authentication method Cassandra should use to authenticate clients. 'None' turns off authentication, so should not be used except in emergencies. 'Cassandra' is the default password based authentication. The default is 'Cassandra'.
 */
export type AuthenticationMethod = (typeof AuthenticationMethod)[keyof typeof AuthenticationMethod];

export const AzureConnectionType = {
    None: "None",
    VPN: "VPN",
} as const;

/**
 * How to connect to the azure services needed for running the cluster
 */
export type AzureConnectionType = (typeof AzureConnectionType)[keyof typeof AzureConnectionType];

export const BackupPolicyMigrationStatus = {
    Invalid: "Invalid",
    InProgress: "InProgress",
    Completed: "Completed",
    Failed: "Failed",
} as const;

/**
 * Describes the status of migration between backup policy types.
 */
export type BackupPolicyMigrationStatus = (typeof BackupPolicyMigrationStatus)[keyof typeof BackupPolicyMigrationStatus];

export const BackupPolicyType = {
    Periodic: "Periodic",
    Continuous: "Continuous",
} as const;

/**
 * Describes the mode of backups.
 */
export type BackupPolicyType = (typeof BackupPolicyType)[keyof typeof BackupPolicyType];

export const BackupStorageRedundancy = {
    Geo: "Geo",
    Local: "Local",
    Zone: "Zone",
} as const;

/**
 * Enum to indicate type of backup residency
 */
export type BackupStorageRedundancy = (typeof BackupStorageRedundancy)[keyof typeof BackupStorageRedundancy];

export const CompositePathSortOrder = {
    Ascending: "ascending",
    Descending: "descending",
} as const;

/**
 * Sort order for composite paths.
 */
export type CompositePathSortOrder = (typeof CompositePathSortOrder)[keyof typeof CompositePathSortOrder];

export const ConflictResolutionMode = {
    LastWriterWins: "LastWriterWins",
    Custom: "Custom",
} as const;

/**
 * Indicates the conflict resolution mode.
 */
export type ConflictResolutionMode = (typeof ConflictResolutionMode)[keyof typeof ConflictResolutionMode];

export const ConnectorOffer = {
    Small: "Small",
} as const;

/**
 * The cassandra connector offer type for the Cosmos DB database C* account.
 */
export type ConnectorOffer = (typeof ConnectorOffer)[keyof typeof ConnectorOffer];

export const ContinuousTier = {
    Continuous7Days: "Continuous7Days",
    Continuous30Days: "Continuous30Days",
} as const;

/**
 * Enum to indicate type of Continuous backup mode
 */
export type ContinuousTier = (typeof ContinuousTier)[keyof typeof ContinuousTier];

export const CreateMode = {
    Default: "Default",
    Restore: "Restore",
} as const;

/**
 * Enum to indicate the mode of resource creation.
 */
export type CreateMode = (typeof CreateMode)[keyof typeof CreateMode];

export const DataType = {
    String: "String",
    Number: "Number",
    Point: "Point",
    Polygon: "Polygon",
    LineString: "LineString",
    MultiPolygon: "MultiPolygon",
} as const;

/**
 * The datatype for which the indexing behavior is applied to.
 */
export type DataType = (typeof DataType)[keyof typeof DataType];

export const DatabaseAccountKind = {
    GlobalDocumentDB: "GlobalDocumentDB",
    MongoDB: "MongoDB",
    Parse: "Parse",
} as const;

/**
 * Indicates the type of database account. This can only be set at database account creation.
 */
export type DatabaseAccountKind = (typeof DatabaseAccountKind)[keyof typeof DatabaseAccountKind];

export const DatabaseAccountOfferType = {
    Standard: "Standard",
} as const;

/**
 * The offer type for the database
 */
export type DatabaseAccountOfferType = (typeof DatabaseAccountOfferType)[keyof typeof DatabaseAccountOfferType];

export const DedicatedGatewayType = {
    IntegratedCache: "IntegratedCache",
    DistributedQuery: "DistributedQuery",
} as const;

/**
 * DedicatedGatewayType for the service.
 */
export type DedicatedGatewayType = (typeof DedicatedGatewayType)[keyof typeof DedicatedGatewayType];

export const DefaultConsistencyLevel = {
    Eventual: "Eventual",
    Session: "Session",
    BoundedStaleness: "BoundedStaleness",
    Strong: "Strong",
    ConsistentPrefix: "ConsistentPrefix",
} as const;

/**
 * The default consistency level and configuration settings of the Cosmos DB account.
 */
export type DefaultConsistencyLevel = (typeof DefaultConsistencyLevel)[keyof typeof DefaultConsistencyLevel];

export const DistanceFunction = {
    Euclidean: "euclidean",
    Cosine: "cosine",
    Dotproduct: "dotproduct",
} as const;

/**
 * The distance function to use for distance calculation in between vectors.
 */
export type DistanceFunction = (typeof DistanceFunction)[keyof typeof DistanceFunction];

export const FleetspaceApiKind = {
    NoSQL: "NoSQL",
} as const;

/**
 * The kind of API this fleetspace belongs to. Acceptable values: 'NoSQL'
 */
export type FleetspaceApiKind = (typeof FleetspaceApiKind)[keyof typeof FleetspaceApiKind];

export const IndexKind = {
    Hash: "Hash",
    Range: "Range",
    Spatial: "Spatial",
} as const;

/**
 * Indicates the type of index.
 */
export type IndexKind = (typeof IndexKind)[keyof typeof IndexKind];

export const IndexingMode = {
    Consistent: "consistent",
    Lazy: "lazy",
    None: "none",
} as const;

/**
 * Indicates the indexing mode.
 */
export type IndexingMode = (typeof IndexingMode)[keyof typeof IndexingMode];

export const ManagedCassandraProvisioningState = {
    Creating: "Creating",
    Updating: "Updating",
    Deleting: "Deleting",
    Succeeded: "Succeeded",
    Failed: "Failed",
    Canceled: "Canceled",
} as const;

/**
 * The status of the resource at the time the operation was called.
 */
export type ManagedCassandraProvisioningState = (typeof ManagedCassandraProvisioningState)[keyof typeof ManagedCassandraProvisioningState];

export const ManagedCassandraResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    None: "None",
} as const;

/**
 * The type of the resource.
 */
export type ManagedCassandraResourceIdentityType = (typeof ManagedCassandraResourceIdentityType)[keyof typeof ManagedCassandraResourceIdentityType];

export const MinimalTlsVersion = {
    Tls: "Tls",
    Tls11: "Tls11",
    Tls12: "Tls12",
} as const;

/**
 * Indicates the minimum allowed Tls version. The default value is Tls 1.2. Cassandra and Mongo APIs only work with Tls 1.2.
 */
export type MinimalTlsVersion = (typeof MinimalTlsVersion)[keyof typeof MinimalTlsVersion];

export const MongoClusterCreateMode = {
    Default: "Default",
    PointInTimeRestore: "PointInTimeRestore",
} as const;

/**
 * The mode to create a mongo cluster.
 */
export type MongoClusterCreateMode = (typeof MongoClusterCreateMode)[keyof typeof MongoClusterCreateMode];

export const MongoRoleDefinitionType = {
    BuiltInRole: "BuiltInRole",
    CustomRole: "CustomRole",
} as const;

/**
 * Indicates whether the Role Definition was built-in or user created.
 */
export type MongoRoleDefinitionType = (typeof MongoRoleDefinitionType)[keyof typeof MongoRoleDefinitionType];

export const NetworkAclBypass = {
    None: "None",
    AzureServices: "AzureServices",
} as const;

/**
 * Indicates what services are allowed to bypass firewall checks.
 */
export type NetworkAclBypass = (typeof NetworkAclBypass)[keyof typeof NetworkAclBypass];

export const NodeKind = {
    Shard: "Shard",
} as const;

/**
 * The node type deployed in the node group.
 */
export type NodeKind = (typeof NodeKind)[keyof typeof NodeKind];

export const PartitionKind = {
    Hash: "Hash",
    Range: "Range",
    MultiHash: "MultiHash",
} as const;

/**
 * Indicates the kind of algorithm used for partitioning. For MultiHash, multiple partition keys (upto three maximum) are supported for container create
 */
export type PartitionKind = (typeof PartitionKind)[keyof typeof PartitionKind];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
    SecuredByPerimeter: "SecuredByPerimeter",
} as const;

/**
 * Whether requests from Public Network are allowed
 */
export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
    None: "None",
} as const;

/**
 * The type of identity used for the resource. The type 'SystemAssigned,UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const RestoreMode = {
    PointInTime: "PointInTime",
} as const;

/**
 * Describes the mode of the restore.
 */
export type RestoreMode = (typeof RestoreMode)[keyof typeof RestoreMode];

export const RoleDefinitionType = {
    BuiltInRole: "BuiltInRole",
    CustomRole: "CustomRole",
} as const;

/**
 * Indicates whether the Role Definition was built-in or user created.
 */
export type RoleDefinitionType = (typeof RoleDefinitionType)[keyof typeof RoleDefinitionType];

export const ServerVersion = {
    ServerVersion_3_2: "3.2",
    ServerVersion_3_6: "3.6",
    ServerVersion_4_0: "4.0",
    ServerVersion_4_2: "4.2",
    ServerVersion_5_0: "5.0",
    ServerVersion_6_0: "6.0",
    ServerVersion_7_0: "7.0",
} as const;

/**
 * Describes the version of the MongoDB account.
 */
export type ServerVersion = (typeof ServerVersion)[keyof typeof ServerVersion];

export const ServiceSize = {
    Cosmos_D4s: "Cosmos.D4s",
    Cosmos_D8s: "Cosmos.D8s",
    Cosmos_D16s: "Cosmos.D16s",
} as const;

/**
 * Instance type for the service.
 */
export type ServiceSize = (typeof ServiceSize)[keyof typeof ServiceSize];

export const ServiceTier = {
    GeneralPurpose: "GeneralPurpose",
    BusinessCritical: "BusinessCritical",
} as const;

/**
 * Service Tier for the fleetspace. GeneralPurpose types refers to single write region accounts that can be added to this fleetspace, whereas BusinessCritical refers to multi write region.
 */
export type ServiceTier = (typeof ServiceTier)[keyof typeof ServiceTier];

export const ServiceType = {
    SqlDedicatedGateway: "SqlDedicatedGateway",
    DataTransfer: "DataTransfer",
    GraphAPICompute: "GraphAPICompute",
    MaterializedViewsBuilder: "MaterializedViewsBuilder",
} as const;

/**
 * ServiceType for the service.
 */
export type ServiceType = (typeof ServiceType)[keyof typeof ServiceType];

export const SpatialType = {
    Point: "Point",
    LineString: "LineString",
    Polygon: "Polygon",
    MultiPolygon: "MultiPolygon",
} as const;

/**
 * Indicates the spatial type of index.
 */
export type SpatialType = (typeof SpatialType)[keyof typeof SpatialType];

export const StorageLocationType = {
    StorageAccount: "StorageAccount",
    FabricLakehouse: "FabricLakehouse",
} as const;

/**
 * The type of the fleet analytics resource.
 */
export type StorageLocationType = (typeof StorageLocationType)[keyof typeof StorageLocationType];

export const TriggerOperation = {
    All: "All",
    Create: "Create",
    Update: "Update",
    Delete: "Delete",
    Replace: "Replace",
} as const;

/**
 * The operation the trigger is associated with
 */
export type TriggerOperation = (typeof TriggerOperation)[keyof typeof TriggerOperation];

export const TriggerType = {
    Pre: "Pre",
    Post: "Post",
} as const;

/**
 * Type of the Trigger
 */
export type TriggerType = (typeof TriggerType)[keyof typeof TriggerType];

export const VectorDataType = {
    Float32: "float32",
    Uint8: "uint8",
    Int8: "int8",
} as const;

/**
 * Indicates the data type of vector.
 */
export type VectorDataType = (typeof VectorDataType)[keyof typeof VectorDataType];

export const VectorIndexType = {
    Flat: "flat",
    DiskANN: "diskANN",
    QuantizedFlat: "quantizedFlat",
} as const;

/**
 * The index type of the vector. Currently, flat, diskANN, and quantizedFlat are supported.
 */
export type VectorIndexType = (typeof VectorIndexType)[keyof typeof VectorIndexType];
