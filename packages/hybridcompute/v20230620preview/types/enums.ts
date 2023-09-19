export const ArcKindEnum = {
    AVS: "AVS",
    HCI: "HCI",
    SCVMM: "SCVMM",
    VMware: "VMware",
    EPS: "EPS",
    GCP: "GCP",
    AWS: "AWS",
} as const;

export type ArcKindEnum = (typeof ArcKindEnum)[keyof typeof ArcKindEnum];

export const AssessmentModeTypes = {
    ImageDefault: "ImageDefault",
    AutomaticByPlatform: "AutomaticByPlatform",
} as const;

export type AssessmentModeTypes = (typeof AssessmentModeTypes)[keyof typeof AssessmentModeTypes];

export const LicenseAssignmentState = {
    Assigned: "Assigned",
    NotAssigned: "NotAssigned",
} as const;

export type LicenseAssignmentState = (typeof LicenseAssignmentState)[keyof typeof LicenseAssignmentState];

export const LicenseCoreType = {
    PCore: "pCore",
    VCore: "vCore",
} as const;

export type LicenseCoreType = (typeof LicenseCoreType)[keyof typeof LicenseCoreType];

export const LicenseEdition = {
    Standard: "Standard",
    Datacenter: "Datacenter",
} as const;

export type LicenseEdition = (typeof LicenseEdition)[keyof typeof LicenseEdition];

export const LicenseState = {
    Activated: "Activated",
    Deactivated: "Deactivated",
} as const;

export type LicenseState = (typeof LicenseState)[keyof typeof LicenseState];

export const LicenseTarget = {
    Windows_Server_2012: "Windows Server 2012",
    Windows_Server_2012_R2: "Windows Server 2012 R2",
} as const;

export type LicenseTarget = (typeof LicenseTarget)[keyof typeof LicenseTarget];

export const LicenseType = {
    ESU: "ESU",
} as const;

export type LicenseType = (typeof LicenseType)[keyof typeof LicenseType];

export const PatchModeTypes = {
    ImageDefault: "ImageDefault",
    AutomaticByPlatform: "AutomaticByPlatform",
    AutomaticByOS: "AutomaticByOS",
    Manual: "Manual",
} as const;

export type PatchModeTypes = (typeof PatchModeTypes)[keyof typeof PatchModeTypes];

export const PublicNetworkAccessType = {
    /**
     * Allows Azure Arc agents to communicate with Azure Arc services over both public (internet) and private endpoints.
     */
    Enabled: "Enabled",
    /**
     * Does not allow Azure Arc agents to communicate with Azure Arc services over public (internet) endpoints. The agents must use the private link.
     */
    Disabled: "Disabled",
} as const;

export type PublicNetworkAccessType = (typeof PublicNetworkAccessType)[keyof typeof PublicNetworkAccessType];

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
