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

export const ResourceIdentityType = {
    /**
     * Indicates that a system assigned identity is associated with the resource.
     */
    SystemAssigned: "SystemAssigned",
    /**
     * Indicates that no identity is associated with the resource or that the existing identity should be removed.
     */
    None: "None",
} as const;

/**
 * The identity type. This is the only required field when adding a system assigned identity to a resource.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];
