export const CleanupOptions = {
    Always: "Always",
    OnSuccess: "OnSuccess",
    OnExpiration: "OnExpiration",
} as const;

/**
 * The clean up preference when the script execution gets in a terminal state. Default setting is 'Always'.
 */
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

/**
 * denySettings Mode.
 */
export type DenySettingsMode = (typeof DenySettingsMode)[keyof typeof DenySettingsMode];

export const DeploymentMode = {
    Incremental: "Incremental",
    Complete: "Complete",
} as const;

/**
 * The mode that is used to deploy resources. This value can be either Incremental or Complete. In Incremental mode, resources are deployed without deleting existing resources that are not included in the template. In Complete mode, resources are deployed and existing resources in the resource group that are not included in the template are deleted. Be careful when using Complete mode as you may unintentionally delete resources.
 */
export type DeploymentMode = (typeof DeploymentMode)[keyof typeof DeploymentMode];

export const DeploymentStacksDeleteDetachEnum = {
    Delete: "delete",
    Detach: "detach",
} as const;

/**
 * Specifies the action that should be taken on the resource when the deployment stack is deleted. Delete will attempt to delete the resource from Azure. Detach will leave the resource in it's current state.
 */
export type DeploymentStacksDeleteDetachEnum = (typeof DeploymentStacksDeleteDetachEnum)[keyof typeof DeploymentStacksDeleteDetachEnum];

export const ExpressionEvaluationOptionsScopeType = {
    NotSpecified: "NotSpecified",
    Outer: "Outer",
    Inner: "Inner",
} as const;

/**
 * The scope to be used for evaluation of parameters, variables and functions in a nested template.
 */
export type ExpressionEvaluationOptionsScopeType = (typeof ExpressionEvaluationOptionsScopeType)[keyof typeof ExpressionEvaluationOptionsScopeType];

export const ExtendedLocationType = {
    EdgeZone: "EdgeZone",
} as const;

/**
 * The extended location type.
 */
export type ExtendedLocationType = (typeof ExtendedLocationType)[keyof typeof ExtendedLocationType];

export const ManagedServiceIdentityType = {
    UserAssigned: "UserAssigned",
} as const;

/**
 * Type of the managed identity.
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const OnErrorDeploymentType = {
    LastSuccessful: "LastSuccessful",
    SpecificDeployment: "SpecificDeployment",
} as const;

/**
 * The deployment on error behavior type. Possible values are LastSuccessful and SpecificDeployment.
 */
export type OnErrorDeploymentType = (typeof OnErrorDeploymentType)[keyof typeof OnErrorDeploymentType];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
    None: "None",
} as const;

/**
 * The identity type.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const ScriptType = {
    AzurePowerShell: "AzurePowerShell",
    AzureCLI: "AzureCLI",
} as const;

/**
 * Type of the script.
 */
export type ScriptType = (typeof ScriptType)[keyof typeof ScriptType];
