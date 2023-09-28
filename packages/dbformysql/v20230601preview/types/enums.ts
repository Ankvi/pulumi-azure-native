export const AdministratorType = {
    ActiveDirectory: "ActiveDirectory",
} as const;

/**
 * Type of the sever administrator.
 */
export type AdministratorType = (typeof AdministratorType)[keyof typeof AdministratorType];

export const ConfigurationSource = {
    System_default: "system-default",
    User_override: "user-override",
} as const;

/**
 * Source of the configuration.
 */
export type ConfigurationSource = (typeof ConfigurationSource)[keyof typeof ConfigurationSource];

export const CreateMode = {
    Default: "Default",
    PointInTimeRestore: "PointInTimeRestore",
    Replica: "Replica",
    GeoRestore: "GeoRestore",
} as const;

/**
 * The mode to create a new MySQL server.
 */
export type CreateMode = (typeof CreateMode)[keyof typeof CreateMode];

export const DataEncryptionType = {
    AzureKeyVault: "AzureKeyVault",
    SystemManaged: "SystemManaged",
} as const;

/**
 * The key type, AzureKeyVault for enable cmk, SystemManaged for disable cmk.
 */
export type DataEncryptionType = (typeof DataEncryptionType)[keyof typeof DataEncryptionType];

export const EnableStatusEnum = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Enable Log On Disk or not.
 */
export type EnableStatusEnum = (typeof EnableStatusEnum)[keyof typeof EnableStatusEnum];

export const HighAvailabilityMode = {
    Disabled: "Disabled",
    ZoneRedundant: "ZoneRedundant",
    SameZone: "SameZone",
} as const;

/**
 * High availability mode for a server.
 */
export type HighAvailabilityMode = (typeof HighAvailabilityMode)[keyof typeof HighAvailabilityMode];

export const ImportSourceStorageType = {
    AzureBlob: "AzureBlob",
} as const;

/**
 * Storage type of import source.
 */
export type ImportSourceStorageType = (typeof ImportSourceStorageType)[keyof typeof ImportSourceStorageType];

export const ManagedServiceIdentityType = {
    UserAssigned: "UserAssigned",
} as const;

/**
 * Type of managed service identity.
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const ReplicationRole = {
    None: "None",
    Source: "Source",
    Replica: "Replica",
} as const;

/**
 * The replication role.
 */
export type ReplicationRole = (typeof ReplicationRole)[keyof typeof ReplicationRole];

export const ServerSkuTier = {
    Burstable: "Burstable",
    GeneralPurpose: "GeneralPurpose",
    MemoryOptimized: "MemoryOptimized",
} as const;

/**
 * The tier of the particular SKU, e.g. GeneralPurpose.
 */
export type ServerSkuTier = (typeof ServerSkuTier)[keyof typeof ServerSkuTier];

export const ServerVersion = {
    ServerVersion_5_7: "5.7",
    ServerVersion_8_0_21: "8.0.21",
} as const;

/**
 * Server version.
 */
export type ServerVersion = (typeof ServerVersion)[keyof typeof ServerVersion];
