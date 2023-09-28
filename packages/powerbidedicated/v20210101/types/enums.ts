export const CapacitySkuTier = {
    PBIE_Azure: "PBIE_Azure",
    Premium: "Premium",
    AutoPremiumHost: "AutoPremiumHost",
} as const;

/**
 * The name of the Azure pricing tier to which the SKU applies.
 */
export type CapacitySkuTier = (typeof CapacitySkuTier)[keyof typeof CapacitySkuTier];

export const IdentityType = {
    User: "User",
    Application: "Application",
    ManagedIdentity: "ManagedIdentity",
    Key: "Key",
} as const;

/**
 * The type of identity that last modified the resource
 */
export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const Mode = {
    Gen1: "Gen1",
    Gen2: "Gen2",
} as const;

/**
 * Specifies the generation of the Power BI Embedded capacity. If no value is specified, the default value 'Gen2' is used. [Learn More](https://docs.microsoft.com/power-bi/developer/embedded/power-bi-embedded-generation-2)
 */
export type Mode = (typeof Mode)[keyof typeof Mode];

export const VCoreSkuTier = {
    AutoScale: "AutoScale",
} as const;

/**
 * The name of the Azure pricing tier to which the SKU applies.
 */
export type VCoreSkuTier = (typeof VCoreSkuTier)[keyof typeof VCoreSkuTier];
