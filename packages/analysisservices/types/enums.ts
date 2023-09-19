export const ConnectionMode = {
    All: "All",
    ReadOnly: "ReadOnly",
} as const;

export type ConnectionMode = (typeof ConnectionMode)[keyof typeof ConnectionMode];

export const SkuTier = {
    Development: "Development",
    Basic: "Basic",
    Standard: "Standard",
} as const;

export type SkuTier = (typeof SkuTier)[keyof typeof SkuTier];
