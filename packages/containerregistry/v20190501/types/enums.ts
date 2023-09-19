export const Action = {
    Allow: "Allow",
} as const;

export type Action = (typeof Action)[keyof typeof Action];

export const DefaultAction = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

export type DefaultAction = (typeof DefaultAction)[keyof typeof DefaultAction];

export const PolicyStatus = {
    Enabled: "enabled",
    Disabled: "disabled",
} as const;

export type PolicyStatus = (typeof PolicyStatus)[keyof typeof PolicyStatus];

export const SkuName = {
    Classic: "Classic",
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
} as const;

export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const TrustPolicyType = {
    Notary: "Notary",
} as const;

export type TrustPolicyType = (typeof TrustPolicyType)[keyof typeof TrustPolicyType];
