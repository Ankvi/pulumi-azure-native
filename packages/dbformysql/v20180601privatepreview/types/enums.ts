export const AdministratorType = {
    ActiveDirectory: "ActiveDirectory",
} as const;

/**
 * The type of administrator.
 */
export type AdministratorType = (typeof AdministratorType)[keyof typeof AdministratorType];

export const CreateMode = {
    Default: "Default",
    PointInTimeRestore: "PointInTimeRestore",
    GeoRestore: "GeoRestore",
    Replica: "Replica",
} as const;

/**
 * The mode to create a new server.
 */
export type CreateMode = (typeof CreateMode)[keyof typeof CreateMode];

export const GeoRedundantBackup = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Enable Geo-redundant or not for server backup.
 */
export type GeoRedundantBackup = (typeof GeoRedundantBackup)[keyof typeof GeoRedundantBackup];

export const ServerVersion = {
    ServerVersion_5_6: "5.6",
    ServerVersion_5_7: "5.7",
} as const;

/**
 * Server version.
 */
export type ServerVersion = (typeof ServerVersion)[keyof typeof ServerVersion];

export const SkuTier = {
    Basic: "Basic",
    GeneralPurpose: "GeneralPurpose",
    MemoryOptimized: "MemoryOptimized",
} as const;

/**
 * The tier of the particular SKU, e.g. Basic.
 */
export type SkuTier = (typeof SkuTier)[keyof typeof SkuTier];

export const SslEnforcementEnum = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Enable ssl enforcement or not when connect to server.
 */
export type SslEnforcementEnum = (typeof SslEnforcementEnum)[keyof typeof SslEnforcementEnum];

export const StorageAutogrow = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Enable Storage Auto Grow.
 */
export type StorageAutogrow = (typeof StorageAutogrow)[keyof typeof StorageAutogrow];
