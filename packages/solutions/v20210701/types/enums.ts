export const ApplicationArtifactType = {
    NotSpecified: "NotSpecified",
    Template: "Template",
    Custom: "Custom",
} as const;

export type ApplicationArtifactType = (typeof ApplicationArtifactType)[keyof typeof ApplicationArtifactType];

export const ApplicationDefinitionArtifactName = {
    NotSpecified: "NotSpecified",
    ApplicationResourceTemplate: "ApplicationResourceTemplate",
    CreateUiDefinition: "CreateUiDefinition",
    MainTemplateParameters: "MainTemplateParameters",
} as const;

export type ApplicationDefinitionArtifactName = (typeof ApplicationDefinitionArtifactName)[keyof typeof ApplicationDefinitionArtifactName];

export const ApplicationLockLevel = {
    CanNotDelete: "CanNotDelete",
    ReadOnly: "ReadOnly",
    None: "None",
} as const;

export type ApplicationLockLevel = (typeof ApplicationLockLevel)[keyof typeof ApplicationLockLevel];

export const ApplicationManagementMode = {
    NotSpecified: "NotSpecified",
    Unmanaged: "Unmanaged",
    Managed: "Managed",
} as const;

export type ApplicationManagementMode = (typeof ApplicationManagementMode)[keyof typeof ApplicationManagementMode];

export const DeploymentMode = {
    NotSpecified: "NotSpecified",
    Incremental: "Incremental",
    Complete: "Complete",
} as const;

export type DeploymentMode = (typeof DeploymentMode)[keyof typeof DeploymentMode];

export const JitApprovalMode = {
    NotSpecified: "NotSpecified",
    AutoApprove: "AutoApprove",
    ManualApprove: "ManualApprove",
} as const;

export type JitApprovalMode = (typeof JitApprovalMode)[keyof typeof JitApprovalMode];

export const JitApproverType = {
    User: "user",
    Group: "group",
} as const;

export type JitApproverType = (typeof JitApproverType)[keyof typeof JitApproverType];

export const JitSchedulingType = {
    NotSpecified: "NotSpecified",
    Once: "Once",
    Recurring: "Recurring",
} as const;

export type JitSchedulingType = (typeof JitSchedulingType)[keyof typeof JitSchedulingType];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
    None: "None",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];