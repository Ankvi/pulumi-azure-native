export const Action = {
    Allow: "Allow",
} as const;

export type Action = (typeof Action)[keyof typeof Action];

export const EncryptionType = {
    /**
     * Volume is encrypted at rest with Platform managed key. It is the default encryption type.
     */
    EncryptionAtRestWithPlatformKey: "EncryptionAtRestWithPlatformKey",
} as const;

export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Failed: "Failed",
    Rejected: "Rejected",
} as const;

export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const SkuName = {
    /**
     * Premium locally redundant storage
     */
    Premium_LRS: "Premium_LRS",
    /**
     * Premium zone redundant storage
     */
    Premium_ZRS: "Premium_ZRS",
} as const;

export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const SkuTier = {
    /**
     * Premium Tier
     */
    Premium: "Premium",
} as const;

export type SkuTier = (typeof SkuTier)[keyof typeof SkuTier];

export const StorageTargetType = {
    Iscsi: "Iscsi",
    None: "None",
} as const;

export type StorageTargetType = (typeof StorageTargetType)[keyof typeof StorageTargetType];

export const VolumeCreateOption = {
    None: "None",
} as const;

export type VolumeCreateOption = (typeof VolumeCreateOption)[keyof typeof VolumeCreateOption];