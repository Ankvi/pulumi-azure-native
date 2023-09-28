export const AofFrequency = {
    AofFrequency_1s: "1s",
    Always: "always",
} as const;

/**
 * Sets the frequency at which data is written to disk.
 */
export type AofFrequency = (typeof AofFrequency)[keyof typeof AofFrequency];

export const ClusteringPolicy = {
    EnterpriseCluster: "EnterpriseCluster",
    OSSCluster: "OSSCluster",
} as const;

/**
 * Clustering policy - default is OSSCluster. Specified at create time.
 */
export type ClusteringPolicy = (typeof ClusteringPolicy)[keyof typeof ClusteringPolicy];

export const CmkIdentityType = {
    SystemAssignedIdentity: "systemAssignedIdentity",
    UserAssignedIdentity: "userAssignedIdentity",
} as const;

/**
 * Only userAssignedIdentity is supported in this API version; other types may be supported in the future
 */
export type CmkIdentityType = (typeof CmkIdentityType)[keyof typeof CmkIdentityType];

export const DayOfWeek = {
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
    Sunday: "Sunday",
    Everyday: "Everyday",
    Weekend: "Weekend",
} as const;

/**
 * Day of the week when a cache can be patched.
 */
export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];

export const EvictionPolicy = {
    AllKeysLFU: "AllKeysLFU",
    AllKeysLRU: "AllKeysLRU",
    AllKeysRandom: "AllKeysRandom",
    VolatileLRU: "VolatileLRU",
    VolatileLFU: "VolatileLFU",
    VolatileTTL: "VolatileTTL",
    VolatileRandom: "VolatileRandom",
    NoEviction: "NoEviction",
} as const;

/**
 * Redis eviction policy - default is VolatileLRU
 */
export type EvictionPolicy = (typeof EvictionPolicy)[keyof typeof EvictionPolicy];

export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
} as const;

/**
 * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

/**
 * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
 */
export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const Protocol = {
    Encrypted: "Encrypted",
    Plaintext: "Plaintext",
} as const;

/**
 * Specifies whether redis clients can connect using TLS-encrypted or plaintext redis protocols. Default is TLS-encrypted.
 */
export type Protocol = (typeof Protocol)[keyof typeof Protocol];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Whether or not public endpoint access is allowed for this cache.  Value is optional, but if passed in, must be 'Enabled' or 'Disabled'. If 'Disabled', private endpoints are the exclusive access method. Default value is 'Enabled'. Note: This setting is important for caches with private endpoints. It has *no effect* on caches that are joined to, or injected into, a virtual network subnet.
 */
export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const RdbFrequency = {
    RdbFrequency_1h: "1h",
    RdbFrequency_6h: "6h",
    RdbFrequency_12h: "12h",
} as const;

/**
 * Sets the frequency at which a snapshot of the database is created.
 */
export type RdbFrequency = (typeof RdbFrequency)[keyof typeof RdbFrequency];

export const ReplicationRole = {
    Primary: "Primary",
    Secondary: "Secondary",
} as const;

/**
 * Role of the linked server.
 */
export type ReplicationRole = (typeof ReplicationRole)[keyof typeof ReplicationRole];

export const SkuFamily = {
    C: "C",
    P: "P",
} as const;

/**
 * The SKU family to use. Valid values: (C, P). (C = Basic/Standard, P = Premium).
 */
export type SkuFamily = (typeof SkuFamily)[keyof typeof SkuFamily];

export const SkuName = {
    Enterprise_E10: "Enterprise_E10",
    Enterprise_E20: "Enterprise_E20",
    Enterprise_E50: "Enterprise_E50",
    Enterprise_E100: "Enterprise_E100",
    EnterpriseFlash_F300: "EnterpriseFlash_F300",
    EnterpriseFlash_F700: "EnterpriseFlash_F700",
    EnterpriseFlash_F1500: "EnterpriseFlash_F1500",
} as const;

/**
 * The type of RedisEnterprise cluster to deploy. Possible values: (Enterprise_E10, EnterpriseFlash_F300 etc.)
 */
export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const TlsVersion = {
    TlsVersion_1_0: "1.0",
    TlsVersion_1_1: "1.1",
    TlsVersion_1_2: "1.2",
} as const;

/**
 * The minimum TLS version for the cluster to support, e.g. '1.2'
 */
export type TlsVersion = (typeof TlsVersion)[keyof typeof TlsVersion];
