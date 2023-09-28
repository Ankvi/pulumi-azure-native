export const CreateMode = {
    Default: "Default",
    PointInTimeRestore: "PointInTimeRestore",
    GeoRestore: "GeoRestore",
} as const;

/**
 * The mode to create a new PostgreSQL server.
 */
export type CreateMode = (typeof CreateMode)[keyof typeof CreateMode];

export const GeoRedundantBackupOption = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Geo Backup redundancy option
 */
export type GeoRedundantBackupOption = (typeof GeoRedundantBackupOption)[keyof typeof GeoRedundantBackupOption];

export const HAEnabledEnum = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * stand by count value can be either enabled or disabled
 */
export type HAEnabledEnum = (typeof HAEnabledEnum)[keyof typeof HAEnabledEnum];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
} as const;

/**
 * The identity type.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const ServerVersion = {
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
