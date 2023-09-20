export const AssessmentModeTypes = {
    ImageDefault: "ImageDefault",
    AutomaticByPlatform: "AutomaticByPlatform",
} as const;

export type AssessmentModeTypes = (typeof AssessmentModeTypes)[keyof typeof AssessmentModeTypes];

export const PatchModeTypes = {
    ImageDefault: "ImageDefault",
    AutomaticByPlatform: "AutomaticByPlatform",
    AutomaticByOS: "AutomaticByOS",
    Manual: "Manual",
} as const;

export type PatchModeTypes = (typeof PatchModeTypes)[keyof typeof PatchModeTypes];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const StatusLevelTypes = {
    Info: "Info",
    Warning: "Warning",
    Error: "Error",
} as const;

export type StatusLevelTypes = (typeof StatusLevelTypes)[keyof typeof StatusLevelTypes];