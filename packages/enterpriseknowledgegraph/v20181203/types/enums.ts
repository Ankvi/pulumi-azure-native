export const SkuName = {
    F0: "F0",
    S1: "S1",
} as const;

export type SkuName = (typeof SkuName)[keyof typeof SkuName];
