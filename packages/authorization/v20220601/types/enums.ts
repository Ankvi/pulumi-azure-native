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

export type EnforcementMode = (typeof EnforcementMode)[keyof typeof EnforcementMode];

export const OverrideKind = {
    /**
     * It will override the policy effect type.
     */
    PolicyEffect: "policyEffect",
} as const;

export type OverrideKind = (typeof OverrideKind)[keyof typeof OverrideKind];

export const ResourceIdentityType = {
    /**
     * Indicates that a system assigned identity is associated with the resource.
     */
    SystemAssigned: "SystemAssigned",
    /**
     * Indicates that a system assigned identity is associated with the resource.
     */
    UserAssigned: "UserAssigned",
    /**
     * Indicates that no identity is associated with the resource or that the existing identity should be removed.
     */
    None: "None",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const SelectorKind = {
    /**
     * The selector kind to filter policies by the resource location.
     */
    ResourceLocation: "resourceLocation",
    /**
     * The selector kind to filter policies by the resource type.
     */
    ResourceType: "resourceType",
    /**
     * The selector kind to filter policies by the resource without location.
     */
    ResourceWithoutLocation: "resourceWithoutLocation",
    /**
     * The selector kind to filter policies by the policy definition reference ID.
     */
    PolicyDefinitionReferenceId: "policyDefinitionReferenceId",
} as const;

export type SelectorKind = (typeof SelectorKind)[keyof typeof SelectorKind];