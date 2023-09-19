export const CleanupOptions = {
    Always: "Always",
    OnSuccess: "OnSuccess",
    OnExpiration: "OnExpiration",
} as const;

export type CleanupOptions = (typeof CleanupOptions)[keyof typeof CleanupOptions];

export const DenySettingsMode = {
    /**
     * Authorized users are able to read and modify the resources, but cannot delete.
     */
    DenyDelete: "denyDelete",
    /**
     * Authorized users can only read from a resource, but cannot modify or delete it.
     */
    DenyWriteAndDelete: "denyWriteAndDelete",
    /**
     * No denyAssignments have been applied.
     */
    None: "none",
} as const;

export type DenySettingsMode = (typeof DenySettingsMode)[keyof typeof DenySettingsMode];

export const DeploymentMode = {
    Incremental: "Incremental",
    Complete: "Complete",
} as const;

export type DeploymentMode = (typeof DeploymentMode)[keyof typeof DeploymentMode];

export const DeploymentStacksDeleteDetachEnum = {
    Delete: "delete",
    Detach: "detach",
} as const;

export type DeploymentStacksDeleteDetachEnum = (typeof DeploymentStacksDeleteDetachEnum)[keyof typeof DeploymentStacksDeleteDetachEnum];

export const ExpressionEvaluationOptionsScopeType = {
    NotSpecified: "NotSpecified",
    Outer: "Outer",
    Inner: "Inner",
} as const;

export type ExpressionEvaluationOptionsScopeType = (typeof ExpressionEvaluationOptionsScopeType)[keyof typeof ExpressionEvaluationOptionsScopeType];

export const ExtendedLocationType = {
    EdgeZone: "EdgeZone",
} as const;

export type ExtendedLocationType = (typeof ExtendedLocationType)[keyof typeof ExtendedLocationType];

export const ManagedServiceIdentityType = {
    UserAssigned: "UserAssigned",
} as const;

export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const OnErrorDeploymentType = {
    LastSuccessful: "LastSuccessful",
    SpecificDeployment: "SpecificDeployment",
} as const;

export type OnErrorDeploymentType = (typeof OnErrorDeploymentType)[keyof typeof OnErrorDeploymentType];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
    None: "None",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const ScriptType = {
    AzurePowerShell: "AzurePowerShell",
    AzureCLI: "AzureCLI",
} as const;

export type ScriptType = (typeof ScriptType)[keyof typeof ScriptType];
