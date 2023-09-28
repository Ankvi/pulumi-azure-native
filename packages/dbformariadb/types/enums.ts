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

export const MinimalTlsVersionEnum = {
    TLS1_0: "TLS1_0",
    TLS1_1: "TLS1_1",
    TLS1_2: "TLS1_2",
    TLSEnforcementDisabled: "TLSEnforcementDisabled",
} as const;

/**
 * Enforce a minimal Tls version for the server.
 */
export type MinimalTlsVersionEnum = (typeof MinimalTlsVersionEnum)[keyof typeof MinimalTlsVersionEnum];

export const PublicNetworkAccessEnum = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Whether or not public network access is allowed for this server. Value is optional but if passed in, must be 'Enabled' or 'Disabled'
 */
export type PublicNetworkAccessEnum = (typeof PublicNetworkAccessEnum)[keyof typeof PublicNetworkAccessEnum];

export const ServerVersion = {
    ServerVersion_10_2: "10.2",
    ServerVersion_10_3: "10.3",
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
