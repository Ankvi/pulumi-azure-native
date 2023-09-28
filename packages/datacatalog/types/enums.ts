export const SkuType = {
    Free: "Free",
    Standard: "Standard",
} as const;

/**
 * Azure data catalog SKU.
 */
export type SkuType = (typeof SkuType)[keyof typeof SkuType];
