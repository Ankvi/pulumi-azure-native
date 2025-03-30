export const DiscountAppliedScopeType = {
    BillingAccount: "BillingAccount",
    BillingProfile: "BillingProfile",
    Customer: "Customer",
} as const;

/**
 * List of applied scopes supported for discounts.
 */
export type DiscountAppliedScopeType = (typeof DiscountAppliedScopeType)[keyof typeof DiscountAppliedScopeType];

export const DiscountEntityType = {
    Primary: "Primary",
    Affiliate: "Affiliate",
} as const;

/**
 * This defines whether the entity being created is primary or affiliate. Supported values: primary, affiliate. Validation: Required, must match one of the 2 values.
 */
export type DiscountEntityType = (typeof DiscountEntityType)[keyof typeof DiscountEntityType];

export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

/**
 * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const SkuTier = {
    Free: "Free",
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
} as const;

/**
 * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
 */
export type SkuTier = (typeof SkuTier)[keyof typeof SkuTier];
