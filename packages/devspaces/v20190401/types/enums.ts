export const SkuName = {
    S1: "S1",
} as const;

export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const SkuTier = {
    Standard: "Standard",
} as const;

export type SkuTier = (typeof SkuTier)[keyof typeof SkuTier];
