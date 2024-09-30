export const B2CResourceSKUName = {
    /**
     * Azure AD B2C usage is billed to a linked Azure subscription and uses a monthly active users (MAU) billing model.
     */
    Standard: "Standard",
    /**
     * Azure AD B2C usage is billed to a linked Azure subscription and uses number of authentications based billing.
     */
    PremiumP1: "PremiumP1",
    /**
     * Azure AD B2C usage is billed to a linked Azure subscription and uses number of authentications based billing.
     */
    PremiumP2: "PremiumP2",
} as const;

/**
 * The name of the SKU for the tenant.
 */
export type B2CResourceSKUName = (typeof B2CResourceSKUName)[keyof typeof B2CResourceSKUName];

export const B2CResourceSKUTier = {
    /**
     * The SKU tier used for all Azure AD B2C tenants.
     */
    A0: "A0",
} as const;

/**
 * The tier of the tenant.
 */
export type B2CResourceSKUTier = (typeof B2CResourceSKUTier)[keyof typeof B2CResourceSKUTier];

export const CIAMResourceSKUName = {
    Standard: "Standard",
    PremiumP1: "PremiumP1",
    PremiumP2: "PremiumP2",
} as const;

/**
 * The name of the SKU for the tenant.
 */
export type CIAMResourceSKUName = (typeof CIAMResourceSKUName)[keyof typeof CIAMResourceSKUName];

export const CIAMResourceSKUTier = {
    /**
     * The SKU tier used for all Azure AD for customers tenants.
     */
    A0: "A0",
} as const;

/**
 * The tier of the tenant.
 */
export type CIAMResourceSKUTier = (typeof CIAMResourceSKUTier)[keyof typeof CIAMResourceSKUTier];
