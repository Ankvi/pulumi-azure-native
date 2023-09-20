export const AzureDiskSkuName = {
    /**
     * Premium_LRS SKU
     */
    Premium_LRS: "Premium_LRS",
    /**
     * Standard_LRS SKU
     */
    Standard_LRS: "Standard_LRS",
    /**
     * StandardSSD_LRS SKU
     */
    StandardSSD_LRS: "StandardSSD_LRS",
    /**
     * UltraSSD_LRS SKU
     */
    UltraSSD_LRS: "UltraSSD_LRS",
    /**
     * Premium_ZRS SKU
     */
    Premium_ZRS: "Premium_ZRS",
    /**
     * PremiumV2_LRS SKU
     */
    PremiumV2_LRS: "PremiumV2_LRS",
    /**
     * StandardSSD_ZRS SKU
     */
    StandardSSD_ZRS: "StandardSSD_ZRS",
} as const;

export type AzureDiskSkuName = (typeof AzureDiskSkuName)[keyof typeof AzureDiskSkuName];

export const ElasticSanSkuName = {
    /**
     * Premium_LRS SKU
     */
    Premium_LRS: "Premium_LRS",
    /**
     * Premium_ZRS SKU
     */
    Premium_ZRS: "Premium_ZRS",
} as const;

export type ElasticSanSkuName = (typeof ElasticSanSkuName)[keyof typeof ElasticSanSkuName];

export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
} as const;

export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const ReclaimPolicy = {
    /**
     * Delete resource
     */
    Delete: "Delete",
    /**
     * Retain resource
     */
    Retain: "Retain",
} as const;

export type ReclaimPolicy = (typeof ReclaimPolicy)[keyof typeof ReclaimPolicy];

export const Zone = {
    /**
     * First availability zone.
     */
    Zone1: "1",
    /**
     * Second availability zone.
     */
    Zone2: "2",
    /**
     * Third availability zone.
     */
    Zone3: "3",
} as const;

export type Zone = (typeof Zone)[keyof typeof Zone];