export const CreateMode = {
    Default: "Default",
    PointInTimeRestore: "PointInTimeRestore",
    Replica: "Replica",
} as const;

/**
 * The mode to create a new MySQL server.
 */
export type CreateMode = (typeof CreateMode)[keyof typeof CreateMode];

export const HaEnabledEnum = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Enable HA or not for a server.
 */
export type HaEnabledEnum = (typeof HaEnabledEnum)[keyof typeof HaEnabledEnum];

export const InfrastructureEncryptionEnum = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Status showing whether the server enabled infrastructure encryption.
 */
export type InfrastructureEncryptionEnum = (typeof InfrastructureEncryptionEnum)[keyof typeof InfrastructureEncryptionEnum];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
} as const;

/**
 * The identity type.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const ServerKeyType = {
    AzureKeyVault: "AzureKeyVault",
} as const;

/**
 * The key type like 'AzureKeyVault'.
 */
export type ServerKeyType = (typeof ServerKeyType)[keyof typeof ServerKeyType];

export const ServerVersion = {
    ServerVersion_5_7: "5.7",
} as const;

/**
 * Server version.
 */
export type ServerVersion = (typeof ServerVersion)[keyof typeof ServerVersion];

export const SkuTier = {
    Burstable: "Burstable",
    GeneralPurpose: "GeneralPurpose",
    MemoryOptimized: "MemoryOptimized",
} as const;

/**
 * The tier of the particular SKU, e.g. GeneralPurpose.
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
