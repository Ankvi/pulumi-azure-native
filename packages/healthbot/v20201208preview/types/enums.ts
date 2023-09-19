export const SkuName = {
    F0: "F0",
    S1: "S1",
    C0: "C0",
} as const;

export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const SkuTier = {
    Free: "Free",
    Standard: "Standard",
} as const;

export type SkuTier = (typeof SkuTier)[keyof typeof SkuTier];
