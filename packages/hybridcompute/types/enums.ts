export const ArcKindEnum = {
    AVS: "AVS",
    HCI: "HCI",
    SCVMM: "SCVMM",
    VMware: "VMware",
    EPS: "EPS",
    GCP: "GCP",
    AWS: "AWS",
} as const;

/**
 * Indicates which kind of Arc machine placement on-premises, such as HCI, SCVMM or VMware etc.
 */
export type ArcKindEnum = (typeof ArcKindEnum)[keyof typeof ArcKindEnum];

export const AssessmentModeTypes = {
    ImageDefault: "ImageDefault",
    AutomaticByPlatform: "AutomaticByPlatform",
} as const;

/**
 * Specifies the assessment mode.
 */
export type AssessmentModeTypes = (typeof AssessmentModeTypes)[keyof typeof AssessmentModeTypes];

export const GatewayType = {
    Public: "Public",
} as const;

/**
 * The type of the Gateway resource.
 */
export type GatewayType = (typeof GatewayType)[keyof typeof GatewayType];

export const LicenseAssignmentState = {
    Assigned: "Assigned",
    NotAssigned: "NotAssigned",
} as const;

/**
 * Describes the license assignment state (Assigned or NotAssigned).
 */
export type LicenseAssignmentState = (typeof LicenseAssignmentState)[keyof typeof LicenseAssignmentState];

export const LicenseCoreType = {
    PCore: "pCore",
    VCore: "vCore",
} as const;

/**
 * Describes the license core type (pCore or vCore).
 */
export type LicenseCoreType = (typeof LicenseCoreType)[keyof typeof LicenseCoreType];

export const LicenseEdition = {
    Standard: "Standard",
    Datacenter: "Datacenter",
} as const;

/**
 * Describes the edition of the license. The values are either Standard or Datacenter.
 */
export type LicenseEdition = (typeof LicenseEdition)[keyof typeof LicenseEdition];

export const LicenseProfileProductType = {
    WindowsServer: "WindowsServer",
    WindowsIoTEnterprise: "WindowsIoTEnterprise",
} as const;

/**
 * Indicates the product type of the license.
 */
export type LicenseProfileProductType = (typeof LicenseProfileProductType)[keyof typeof LicenseProfileProductType];

export const LicenseProfileSubscriptionStatus = {
    Unknown: "Unknown",
    Enabling: "Enabling",
    Enabled: "Enabled",
    Disabled: "Disabled",
    Disabling: "Disabling",
    Failed: "Failed",
} as const;

/**
 * Indicates the subscription status of the product.
 */
export type LicenseProfileSubscriptionStatus = (typeof LicenseProfileSubscriptionStatus)[keyof typeof LicenseProfileSubscriptionStatus];

export const LicenseState = {
    Activated: "Activated",
    Deactivated: "Deactivated",
} as const;

/**
 * Describes the state of the license.
 */
export type LicenseState = (typeof LicenseState)[keyof typeof LicenseState];

export const LicenseTarget = {
    Windows_Server_2012: "Windows Server 2012",
    Windows_Server_2012_R2: "Windows Server 2012 R2",
} as const;

/**
 * Describes the license target server.
 */
export type LicenseTarget = (typeof LicenseTarget)[keyof typeof LicenseTarget];

export const LicenseType = {
    ESU: "ESU",
} as const;

/**
 * The type of the license resource.
 */
export type LicenseType = (typeof LicenseType)[keyof typeof LicenseType];

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

export const ProgramYear = {
    Year_1: "Year 1",
    Year_2: "Year 2",
    Year_3: "Year 3",
} as const;

/**
 * Describes the program year the volume license is for.
 */
export type ProgramYear = (typeof ProgramYear)[keyof typeof ProgramYear];

export const PublicNetworkAccessType = {
    /**
     * Allows Azure Arc agents to communicate with Azure Arc services over both public (internet) and private endpoints.
     */
    Enabled: "Enabled",
    /**
     * Does not allow Azure Arc agents to communicate with Azure Arc services over public (internet) endpoints. The agents must use the private link.
     */
    Disabled: "Disabled",
    /**
     * Azure Arc agent communication with Azure Arc services over public (internet) is enforced by Network Security Perimeter (NSP)
     */
    SecuredByPerimeter: "SecuredByPerimeter",
} as const;

/**
 * Indicates whether machines associated with the private link scope can also use public Azure Arc service endpoints.
 */
export type PublicNetworkAccessType = (typeof PublicNetworkAccessType)[keyof typeof PublicNetworkAccessType];

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
