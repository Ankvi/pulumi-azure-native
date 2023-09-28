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

export const ConnectorOffer = {
    Small: "Small",
} as const;

/**
 * The cassandra connector offer type for the Cosmos DB database C* account.
 */
export type ConnectorOffer = (typeof ConnectorOffer)[keyof typeof ConnectorOffer];

export const CreateMode = {
    Default: "Default",
    Restore: "Restore",
} as const;

/**
 * Enum to indicate the mode of account creation.
 */
export type CreateMode = (typeof CreateMode)[keyof typeof CreateMode];

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

export const NetworkAclBypass = {
    None: "None",
    AzureServices: "AzureServices",
} as const;

/**
 * Indicates what services are allowed to bypass firewall checks.
 */
export type NetworkAclBypass = (typeof NetworkAclBypass)[keyof typeof NetworkAclBypass];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
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

export const ServerVersion = {
    ServerVersion_3_2: "3.2",
    ServerVersion_3_6: "3.6",
    ServerVersion_4_0: "4.0",
} as const;

/**
 * Describes the ServerVersion of an a MongoDB account.
 */
export type ServerVersion = (typeof ServerVersion)[keyof typeof ServerVersion];
