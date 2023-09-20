export const AnalyticalStorageSchemaType = {
    WellDefined: "WellDefined",
    FullFidelity: "FullFidelity",
} as const;

export type AnalyticalStorageSchemaType = (typeof AnalyticalStorageSchemaType)[keyof typeof AnalyticalStorageSchemaType];

export const AuthenticationMethod = {
    None: "None",
    Cassandra: "Cassandra",
    Ldap: "Ldap",
} as const;

export type AuthenticationMethod = (typeof AuthenticationMethod)[keyof typeof AuthenticationMethod];

export const BackupPolicyMigrationStatus = {
    Invalid: "Invalid",
    InProgress: "InProgress",
    Completed: "Completed",
    Failed: "Failed",
} as const;

export type BackupPolicyMigrationStatus = (typeof BackupPolicyMigrationStatus)[keyof typeof BackupPolicyMigrationStatus];

export const BackupPolicyType = {
    Periodic: "Periodic",
    Continuous: "Continuous",
} as const;

export type BackupPolicyType = (typeof BackupPolicyType)[keyof typeof BackupPolicyType];

export const BackupStorageRedundancy = {
    Geo: "Geo",
    Local: "Local",
    Zone: "Zone",
} as const;

export type BackupStorageRedundancy = (typeof BackupStorageRedundancy)[keyof typeof BackupStorageRedundancy];

export const CompositePathSortOrder = {
    Ascending: "ascending",
    Descending: "descending",
} as const;

export type CompositePathSortOrder = (typeof CompositePathSortOrder)[keyof typeof CompositePathSortOrder];

export const ConflictResolutionMode = {
    LastWriterWins: "LastWriterWins",
    Custom: "Custom",
} as const;

export type ConflictResolutionMode = (typeof ConflictResolutionMode)[keyof typeof ConflictResolutionMode];

export const ConnectorOffer = {
    Small: "Small",
} as const;

export type ConnectorOffer = (typeof ConnectorOffer)[keyof typeof ConnectorOffer];

export const ContinuousTier = {
    Continuous7Days: "Continuous7Days",
    Continuous30Days: "Continuous30Days",
} as const;

export type ContinuousTier = (typeof ContinuousTier)[keyof typeof ContinuousTier];

export const CreateMode = {
    Default: "Default",
    PointInTimeRestore: "PointInTimeRestore",
} as const;

export type CreateMode = (typeof CreateMode)[keyof typeof CreateMode];

export const DataType = {
    String: "String",
    Number: "Number",
    Point: "Point",
    Polygon: "Polygon",
    LineString: "LineString",
    MultiPolygon: "MultiPolygon",
} as const;

export type DataType = (typeof DataType)[keyof typeof DataType];

export const DatabaseAccountKind = {
    GlobalDocumentDB: "GlobalDocumentDB",
    MongoDB: "MongoDB",
    Parse: "Parse",
} as const;

export type DatabaseAccountKind = (typeof DatabaseAccountKind)[keyof typeof DatabaseAccountKind];

export const DatabaseAccountOfferType = {
    Standard: "Standard",
} as const;

export type DatabaseAccountOfferType = (typeof DatabaseAccountOfferType)[keyof typeof DatabaseAccountOfferType];

export const DefaultConsistencyLevel = {
    Eventual: "Eventual",
    Session: "Session",
    BoundedStaleness: "BoundedStaleness",
    Strong: "Strong",
    ConsistentPrefix: "ConsistentPrefix",
} as const;

export type DefaultConsistencyLevel = (typeof DefaultConsistencyLevel)[keyof typeof DefaultConsistencyLevel];

export const IndexKind = {
    Hash: "Hash",
    Range: "Range",
    Spatial: "Spatial",
} as const;

export type IndexKind = (typeof IndexKind)[keyof typeof IndexKind];

export const IndexingMode = {
    Consistent: "consistent",
    Lazy: "lazy",
    None: "none",
} as const;

export type IndexingMode = (typeof IndexingMode)[keyof typeof IndexingMode];

export const ManagedCassandraProvisioningState = {
    Creating: "Creating",
    Updating: "Updating",
    Deleting: "Deleting",
    Succeeded: "Succeeded",
    Failed: "Failed",
    Canceled: "Canceled",
} as const;

export type ManagedCassandraProvisioningState = (typeof ManagedCassandraProvisioningState)[keyof typeof ManagedCassandraProvisioningState];

export const ManagedCassandraResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    None: "None",
} as const;

export type ManagedCassandraResourceIdentityType = (typeof ManagedCassandraResourceIdentityType)[keyof typeof ManagedCassandraResourceIdentityType];

export const MinimalTlsVersion = {
    Tls: "Tls",
    Tls11: "Tls11",
    Tls12: "Tls12",
} as const;

export type MinimalTlsVersion = (typeof MinimalTlsVersion)[keyof typeof MinimalTlsVersion];

export const MongoRoleDefinitionType = {
    BuiltInRole: "BuiltInRole",
    CustomRole: "CustomRole",
} as const;

export type MongoRoleDefinitionType = (typeof MongoRoleDefinitionType)[keyof typeof MongoRoleDefinitionType];

export const NetworkAclBypass = {
    None: "None",
    AzureServices: "AzureServices",
} as const;

export type NetworkAclBypass = (typeof NetworkAclBypass)[keyof typeof NetworkAclBypass];

export const NodeKind = {
    Shard: "Shard",
} as const;

export type NodeKind = (typeof NodeKind)[keyof typeof NodeKind];

export const PartitionKind = {
    Hash: "Hash",
    Range: "Range",
    MultiHash: "MultiHash",
} as const;

export type PartitionKind = (typeof PartitionKind)[keyof typeof PartitionKind];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
    SecuredByPerimeter: "SecuredByPerimeter",
} as const;

export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
    None: "None",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const RestoreMode = {
    PointInTime: "PointInTime",
} as const;

export type RestoreMode = (typeof RestoreMode)[keyof typeof RestoreMode];

export const RoleDefinitionType = {
    BuiltInRole: "BuiltInRole",
    CustomRole: "CustomRole",
} as const;

export type RoleDefinitionType = (typeof RoleDefinitionType)[keyof typeof RoleDefinitionType];

export const ServerVersion = {
    ServerVersion_3_2: "3.2",
    ServerVersion_3_6: "3.6",
    ServerVersion_4_0: "4.0",
    ServerVersion_4_2: "4.2",
} as const;

export type ServerVersion = (typeof ServerVersion)[keyof typeof ServerVersion];

export const ServiceSize = {
    Cosmos_D4s: "Cosmos.D4s",
    Cosmos_D8s: "Cosmos.D8s",
    Cosmos_D16s: "Cosmos.D16s",
} as const;

export type ServiceSize = (typeof ServiceSize)[keyof typeof ServiceSize];

export const ServiceType = {
    SqlDedicatedGateway: "SqlDedicatedGateway",
    DataTransfer: "DataTransfer",
    GraphAPICompute: "GraphAPICompute",
    MaterializedViewsBuilder: "MaterializedViewsBuilder",
} as const;

export type ServiceType = (typeof ServiceType)[keyof typeof ServiceType];

export const SpatialType = {
    Point: "Point",
    LineString: "LineString",
    Polygon: "Polygon",
    MultiPolygon: "MultiPolygon",
} as const;

export type SpatialType = (typeof SpatialType)[keyof typeof SpatialType];

export const TriggerOperation = {
    All: "All",
    Create: "Create",
    Update: "Update",
    Delete: "Delete",
    Replace: "Replace",
} as const;

export type TriggerOperation = (typeof TriggerOperation)[keyof typeof TriggerOperation];

export const TriggerType = {
    Pre: "Pre",
    Post: "Post",
} as const;

export type TriggerType = (typeof TriggerType)[keyof typeof TriggerType];