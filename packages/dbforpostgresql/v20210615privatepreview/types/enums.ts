export const CreateMode = {
    Default: "Default",
    Create: "Create",
    Update: "Update",
    PointInTimeRestore: "PointInTimeRestore",
} as const;

export type CreateMode = (typeof CreateMode)[keyof typeof CreateMode];

export const GeoRedundantBackupEnum = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type GeoRedundantBackupEnum = (typeof GeoRedundantBackupEnum)[keyof typeof GeoRedundantBackupEnum];

export const HighAvailabilityMode = {
    Disabled: "Disabled",
    ZoneRedundant: "ZoneRedundant",
} as const;

export type HighAvailabilityMode = (typeof HighAvailabilityMode)[keyof typeof HighAvailabilityMode];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const ServerVersion = {
    ServerVersion_13: "13",
    ServerVersion_12: "12",
    ServerVersion_11: "11",
} as const;

export type ServerVersion = (typeof ServerVersion)[keyof typeof ServerVersion];

export const SkuTier = {
    Burstable: "Burstable",
    GeneralPurpose: "GeneralPurpose",
    MemoryOptimized: "MemoryOptimized",
} as const;

export type SkuTier = (typeof SkuTier)[keyof typeof SkuTier];