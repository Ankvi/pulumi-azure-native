export const AofFrequency = {
    AofFrequency_1s: "1s",
    Always: "always",
} as const;

export type AofFrequency = (typeof AofFrequency)[keyof typeof AofFrequency];

export const ClusteringPolicy = {
    EnterpriseCluster: "EnterpriseCluster",
    OSSCluster: "OSSCluster",
} as const;

export type ClusteringPolicy = (typeof ClusteringPolicy)[keyof typeof ClusteringPolicy];

export const CmkIdentityType = {
    SystemAssignedIdentity: "systemAssignedIdentity",
    UserAssignedIdentity: "userAssignedIdentity",
} as const;

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

export type EvictionPolicy = (typeof EvictionPolicy)[keyof typeof EvictionPolicy];

export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
} as const;

export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const Protocol = {
    Encrypted: "Encrypted",
    Plaintext: "Plaintext",
} as const;

export type Protocol = (typeof Protocol)[keyof typeof Protocol];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const RdbFrequency = {
    RdbFrequency_1h: "1h",
    RdbFrequency_6h: "6h",
    RdbFrequency_12h: "12h",
} as const;

export type RdbFrequency = (typeof RdbFrequency)[keyof typeof RdbFrequency];

export const ReplicationRole = {
    Primary: "Primary",
    Secondary: "Secondary",
} as const;

export type ReplicationRole = (typeof ReplicationRole)[keyof typeof ReplicationRole];

export const SkuFamily = {
    C: "C",
    P: "P",
} as const;

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

export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const TlsVersion = {
    TlsVersion_1_0: "1.0",
    TlsVersion_1_1: "1.1",
    TlsVersion_1_2: "1.2",
} as const;

export type TlsVersion = (typeof TlsVersion)[keyof typeof TlsVersion];