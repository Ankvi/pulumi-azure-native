export const ArtifactKind = {
    Template: "template",
    RoleAssignment: "roleAssignment",
    PolicyAssignment: "policyAssignment",
} as const;

export type ArtifactKind = (typeof ArtifactKind)[keyof typeof ArtifactKind];

export const AssignmentLockMode = {
    None: "None",
    AllResourcesReadOnly: "AllResourcesReadOnly",
    AllResourcesDoNotDelete: "AllResourcesDoNotDelete",
} as const;

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

export type BlueprintTargetScope = (typeof BlueprintTargetScope)[keyof typeof BlueprintTargetScope];

export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
} as const;

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

export type TemplateParameterType = (typeof TemplateParameterType)[keyof typeof TemplateParameterType];