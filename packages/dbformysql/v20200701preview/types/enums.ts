export const CreateMode = {
    Default: "Default",
    PointInTimeRestore: "PointInTimeRestore",
    Replica: "Replica",
} as const;

export type CreateMode = (typeof CreateMode)[keyof typeof CreateMode];

export const HaEnabledEnum = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type HaEnabledEnum = (typeof HaEnabledEnum)[keyof typeof HaEnabledEnum];

export const InfrastructureEncryptionEnum = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type InfrastructureEncryptionEnum = (typeof InfrastructureEncryptionEnum)[keyof typeof InfrastructureEncryptionEnum];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const ServerVersion = {
    ServerVersion_5_7: "5.7",
} as const;

export type ServerVersion = (typeof ServerVersion)[keyof typeof ServerVersion];

export const SkuTier = {
    Burstable: "Burstable",
    GeneralPurpose: "GeneralPurpose",
    MemoryOptimized: "MemoryOptimized",
} as const;

export type SkuTier = (typeof SkuTier)[keyof typeof SkuTier];

export const SslEnforcementEnum = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type SslEnforcementEnum = (typeof SslEnforcementEnum)[keyof typeof SslEnforcementEnum];

export const StorageAutogrow = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type StorageAutogrow = (typeof StorageAutogrow)[keyof typeof StorageAutogrow];
