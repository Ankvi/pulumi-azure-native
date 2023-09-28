export const CreateMode = {
    Default: "Default",
    Create: "Create",
    Update: "Update",
    PointInTimeRestore: "PointInTimeRestore",
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
} as const;

/**
 * The HA mode for the server.
 */
export type HighAvailabilityMode = (typeof HighAvailabilityMode)[keyof typeof HighAvailabilityMode];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
} as const;

/**
 * The identity type.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const ServerVersion = {
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
