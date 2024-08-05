export const RpSkuTier = {
    /**
     * Fabric tier
     */
    Fabric: "Fabric",
} as const;

/**
 * The name of the Azure pricing tier to which the SKU applies.
 */
export type RpSkuTier = (typeof RpSkuTier)[keyof typeof RpSkuTier];
