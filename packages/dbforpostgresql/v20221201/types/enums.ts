export const ActiveDirectoryAuthEnum = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * If Enabled, Azure Active Directory authentication is enabled.
 */
export type ActiveDirectoryAuthEnum = (typeof ActiveDirectoryAuthEnum)[keyof typeof ActiveDirectoryAuthEnum];

export const ArmServerKeyType = {
    SystemManaged: "SystemManaged",
    AzureKeyVault: "AzureKeyVault",
} as const;

/**
 * Data encryption type to depict if it is System Managed vs Azure Key vault.
 */
export type ArmServerKeyType = (typeof ArmServerKeyType)[keyof typeof ArmServerKeyType];

export const CreateMode = {
    Default: "Default",
    Create: "Create",
    Update: "Update",
    PointInTimeRestore: "PointInTimeRestore",
    GeoRestore: "GeoRestore",
    Replica: "Replica",
} as const;

/**
 * The mode to create a new PostgreSQL server.
 */
export type CreateMode = (typeof CreateMode)[keyof typeof CreateMode];

export const GeoRedundantBackupEnum = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * A value indicating whether Geo-Redundant backup is enabled on the server.
 */
export type GeoRedundantBackupEnum = (typeof GeoRedundantBackupEnum)[keyof typeof GeoRedundantBackupEnum];

export const HighAvailabilityMode = {
    Disabled: "Disabled",
    ZoneRedundant: "ZoneRedundant",
    SameZone: "SameZone",
} as const;

/**
 * The HA mode for the server.
 */
export type HighAvailabilityMode = (typeof HighAvailabilityMode)[keyof typeof HighAvailabilityMode];

export const IdentityType = {
    None: "None",
    UserAssigned: "UserAssigned",
} as const;

/**
 * the types of identities associated with this resource; currently restricted to 'None and UserAssigned'
 */
export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const PasswordAuthEnum = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * If Enabled, Password authentication is enabled.
 */
export type PasswordAuthEnum = (typeof PasswordAuthEnum)[keyof typeof PasswordAuthEnum];

export const PrincipalType = {
    Unknown: "Unknown",
    User: "User",
    Group: "Group",
    ServicePrincipal: "ServicePrincipal",
} as const;

/**
 * The principal type used to represent the type of Active Directory Administrator.
 */
export type PrincipalType = (typeof PrincipalType)[keyof typeof PrincipalType];

export const ReplicationRole = {
    None: "None",
    Primary: "Primary",
    AsyncReplica: "AsyncReplica",
    GeoAsyncReplica: "GeoAsyncReplica",
} as const;

/**
 * Replication role of the server
 */
export type ReplicationRole = (typeof ReplicationRole)[keyof typeof ReplicationRole];

export const ServerVersion = {
    ServerVersion_14: "14",
    ServerVersion_13: "13",
    ServerVersion_12: "12",
    ServerVersion_11: "11",
} as const;

/**
 * PostgreSQL Server version.
 */
export type ServerVersion = (typeof ServerVersion)[keyof typeof ServerVersion];

export const SkuTier = {
    Burstable: "Burstable",
    GeneralPurpose: "GeneralPurpose",
    MemoryOptimized: "MemoryOptimized",
} as const;

/**
 * The tier of the particular SKU, e.g. Burstable.
 */
export type SkuTier = (typeof SkuTier)[keyof typeof SkuTier];
