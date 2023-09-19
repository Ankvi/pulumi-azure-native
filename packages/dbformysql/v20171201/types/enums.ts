export const CreateMode = {
    Default: "Default",
    PointInTimeRestore: "PointInTimeRestore",
    GeoRestore: "GeoRestore",
    Replica: "Replica",
} as const;

export type CreateMode = (typeof CreateMode)[keyof typeof CreateMode];

export const GeoRedundantBackup = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type GeoRedundantBackup = (typeof GeoRedundantBackup)[keyof typeof GeoRedundantBackup];

export const IdentityType = {
    SystemAssigned: "SystemAssigned",
} as const;

export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const InfrastructureEncryption = {
    /**
     * Default value for single layer of encryption for data at rest.
     */
    Enabled: "Enabled",
    /**
     * Additional (2nd) layer of encryption for data at rest
     */
    Disabled: "Disabled",
} as const;

export type InfrastructureEncryption = (typeof InfrastructureEncryption)[keyof typeof InfrastructureEncryption];

export const MinimalTlsVersionEnum = {
    TLS1_0: "TLS1_0",
    TLS1_1: "TLS1_1",
    TLS1_2: "TLS1_2",
    TLSEnforcementDisabled: "TLSEnforcementDisabled",
} as const;

export type MinimalTlsVersionEnum = (typeof MinimalTlsVersionEnum)[keyof typeof MinimalTlsVersionEnum];

export const PublicNetworkAccessEnum = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type PublicNetworkAccessEnum = (typeof PublicNetworkAccessEnum)[keyof typeof PublicNetworkAccessEnum];

export const ServerVersion = {
    ServerVersion_5_6: "5.6",
    ServerVersion_5_7: "5.7",
    ServerVersion_8_0: "8.0",
} as const;

export type ServerVersion = (typeof ServerVersion)[keyof typeof ServerVersion];

export const SkuTier = {
    Basic: "Basic",
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
