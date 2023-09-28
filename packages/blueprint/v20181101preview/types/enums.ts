export const ArtifactKind = {
    Template: "template",
    RoleAssignment: "roleAssignment",
    PolicyAssignment: "policyAssignment",
} as const;

/**
 * Specifies the kind of blueprint artifact.
 */
export type ArtifactKind = (typeof ArtifactKind)[keyof typeof ArtifactKind];

export const AssignmentLockMode = {
    None: "None",
    AllResourcesReadOnly: "AllResourcesReadOnly",
    AllResourcesDoNotDelete: "AllResourcesDoNotDelete",
} as const;

/**
 * Lock mode.
 */
export type AssignmentLockMode = (typeof AssignmentLockMode)[keyof typeof AssignmentLockMode];

export const BlueprintTargetScope = {
    /**
     * The blueprint targets a subscription during blueprint assignment.
     */
    Subscription: "subscription",
    /**
     * The blueprint targets a management group during blueprint assignment. This is reserved for future use.
     */
    ManagementGroup: "managementGroup",
} as const;

/**
 * The scope where this blueprint definition can be assigned.
 */
export type BlueprintTargetScope = (typeof BlueprintTargetScope)[keyof typeof BlueprintTargetScope];

export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
} as const;

/**
 * Type of the managed identity.
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const TemplateParameterType = {
    String: "string",
    Array: "array",
    Bool: "bool",
    Int: "int",
    Object: "object",
    SecureObject: "secureObject",
    SecureString: "secureString",
} as const;

/**
 * Allowed data types for Resource Manager template parameters.
 */
export type TemplateParameterType = (typeof TemplateParameterType)[keyof typeof TemplateParameterType];
