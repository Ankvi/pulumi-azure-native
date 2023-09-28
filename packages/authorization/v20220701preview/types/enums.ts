export const AssignmentScopeValidation = {
    /**
     * This option will validate the exemption is at or under the assignment scope.
     */
    Default: "Default",
    /**
     * This option will bypass the validation the exemption scope is at or under the policy assignment scope.
     */
    DoNotValidate: "DoNotValidate",
} as const;

/**
 * The option whether validate the exemption is at or under the assignment scope.
 */
export type AssignmentScopeValidation = (typeof AssignmentScopeValidation)[keyof typeof AssignmentScopeValidation];

export const ExemptionCategory = {
    /**
     * This category of exemptions usually means the scope is not applicable for the policy.
     */
    Waiver: "Waiver",
    /**
     * This category of exemptions usually means the mitigation actions have been applied to the scope.
     */
    Mitigated: "Mitigated",
} as const;

/**
 * The policy exemption category. Possible values are Waiver and Mitigated.
 */
export type ExemptionCategory = (typeof ExemptionCategory)[keyof typeof ExemptionCategory];

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

/**
 * The selector kind.
 */
export type SelectorKind = (typeof SelectorKind)[keyof typeof SelectorKind];
