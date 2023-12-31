export const PolicyMode = {
    NotSpecified: "NotSpecified",
    Indexed: "Indexed",
    All: "All",
} as const;

/**
 * The policy definition mode. Possible values are NotSpecified, Indexed, and All.
 */
export type PolicyMode = (typeof PolicyMode)[keyof typeof PolicyMode];

export const PolicyType = {
    NotSpecified: "NotSpecified",
    BuiltIn: "BuiltIn",
    Custom: "Custom",
} as const;

/**
 * The type of policy definition. Possible values are NotSpecified, BuiltIn, and Custom.
 */
export type PolicyType = (typeof PolicyType)[keyof typeof PolicyType];
