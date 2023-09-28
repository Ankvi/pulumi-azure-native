export const AzureSkuName = {
    S1: "S1",
} as const;

/**
 * SKU name
 */
export type AzureSkuName = (typeof AzureSkuName)[keyof typeof AzureSkuName];

export const AzureSkuTier = {
    Standard: "Standard",
} as const;

/**
 * SKU tier
 */
export type AzureSkuTier = (typeof AzureSkuTier)[keyof typeof AzureSkuTier];
