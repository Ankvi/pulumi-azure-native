export const SkuType = {
    Free: "Free",
    Standard: "Standard",
} as const;

export type SkuType = (typeof SkuType)[keyof typeof SkuType];
