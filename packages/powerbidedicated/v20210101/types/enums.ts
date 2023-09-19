export const CapacitySkuTier = {
    PBIE_Azure: "PBIE_Azure",
    Premium: "Premium",
    AutoPremiumHost: "AutoPremiumHost",
} as const;

export type CapacitySkuTier = (typeof CapacitySkuTier)[keyof typeof CapacitySkuTier];

export const IdentityType = {
    User: "User",
    Application: "Application",
    ManagedIdentity: "ManagedIdentity",
    Key: "Key",
} as const;

export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const Mode = {
    Gen1: "Gen1",
    Gen2: "Gen2",
} as const;

export type Mode = (typeof Mode)[keyof typeof Mode];

export const VCoreSkuTier = {
    AutoScale: "AutoScale",
} as const;

export type VCoreSkuTier = (typeof VCoreSkuTier)[keyof typeof VCoreSkuTier];
