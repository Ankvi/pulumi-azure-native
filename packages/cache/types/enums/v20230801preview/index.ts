// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


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

export const RdbFrequency = {
    RdbFrequency_1h: "1h",
    RdbFrequency_6h: "6h",
    RdbFrequency_12h: "12h",
} as const;

export type RdbFrequency = (typeof RdbFrequency)[keyof typeof RdbFrequency];

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
