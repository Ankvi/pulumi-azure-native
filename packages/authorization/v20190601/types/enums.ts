export const EnforcementMode = {
    /**
     * The policy effect is enforced during resource creation or update.
     */
    Default: "Default",
    /**
     * The policy effect is not enforced during resource creation or update.
     */
    DoNotEnforce: "DoNotEnforce",
} as const;

/**
 * The policy assignment enforcement mode. Possible values are Default and DoNotEnforce.
 */
export type EnforcementMode = (typeof EnforcementMode)[keyof typeof EnforcementMode];

export const PolicyType = {
    NotSpecified: "NotSpecified",
    BuiltIn: "BuiltIn",
    Custom: "Custom",
} as const;

/**
 * The type of policy definition. Possible values are NotSpecified, BuiltIn, and Custom.
 */
export type PolicyType = (typeof PolicyType)[keyof typeof PolicyType];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    None: "None",
} as const;

/**
 * The identity type.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];
