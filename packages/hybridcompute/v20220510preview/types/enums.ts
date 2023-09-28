export const AssessmentModeTypes = {
    ImageDefault: "ImageDefault",
    AutomaticByPlatform: "AutomaticByPlatform",
} as const;

/**
 * Specifies the assessment mode.
 */
export type AssessmentModeTypes = (typeof AssessmentModeTypes)[keyof typeof AssessmentModeTypes];

export const PatchModeTypes = {
    ImageDefault: "ImageDefault",
    AutomaticByPlatform: "AutomaticByPlatform",
    AutomaticByOS: "AutomaticByOS",
    Manual: "Manual",
} as const;

/**
 * Specifies the patch mode.
 */
export type PatchModeTypes = (typeof PatchModeTypes)[keyof typeof PatchModeTypes];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
} as const;

/**
 * The identity type.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const StatusLevelTypes = {
    Info: "Info",
    Warning: "Warning",
    Error: "Error",
} as const;

/**
 * The level code.
 */
export type StatusLevelTypes = (typeof StatusLevelTypes)[keyof typeof StatusLevelTypes];
