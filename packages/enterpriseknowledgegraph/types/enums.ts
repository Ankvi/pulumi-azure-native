export const SkuName = {
    F0: "F0",
    S1: "S1",
} as const;

/**
 * The sku name
 */
export type SkuName = (typeof SkuName)[keyof typeof SkuName];
