export const SkuName = {
    F0: "F0",
    S1: "S1",
    C0: "C0",
} as const;

/**
 * The name of the HealthBot SKU
 */
export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const SkuTier = {
    Free: "Free",
    Standard: "Standard",
} as const;

/**
 * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
 */
export type SkuTier = (typeof SkuTier)[keyof typeof SkuTier];
