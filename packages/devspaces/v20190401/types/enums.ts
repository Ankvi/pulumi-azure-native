export const SkuName = {
    S1: "S1",
} as const;

/**
 * The name of the SKU for Azure Dev Spaces Controller.
 */
export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const SkuTier = {
    Standard: "Standard",
} as const;

/**
 * The tier of the SKU for Azure Dev Spaces Controller.
 */
export type SkuTier = (typeof SkuTier)[keyof typeof SkuTier];
