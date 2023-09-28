export const Action = {
    Allow: "Allow",
} as const;

/**
 * The action of virtual network rule.
 */
export type Action = (typeof Action)[keyof typeof Action];

export const DefaultAction = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

/**
 * The default action of allow or deny when no other rules match.
 */
export type DefaultAction = (typeof DefaultAction)[keyof typeof DefaultAction];

export const PolicyStatus = {
    Enabled: "enabled",
    Disabled: "disabled",
} as const;

/**
 * The value that indicates whether the policy is enabled or not.
 */
export type PolicyStatus = (typeof PolicyStatus)[keyof typeof PolicyStatus];

export const SkuName = {
    Classic: "Classic",
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
} as const;

/**
 * The SKU name of the container registry. Required for registry creation.
 */
export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const TrustPolicyType = {
    Notary: "Notary",
} as const;

/**
 * The type of trust policy.
 */
export type TrustPolicyType = (typeof TrustPolicyType)[keyof typeof TrustPolicyType];
