export const DeploymentMode = {
    Incremental: "Incremental",
    Complete: "Complete",
} as const;

export type DeploymentMode = (typeof DeploymentMode)[keyof typeof DeploymentMode];

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