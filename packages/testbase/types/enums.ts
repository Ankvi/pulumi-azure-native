export const Action = {
    Install: "Install",
    Launch: "Launch",
    Close: "Close",
    Uninstall: "Uninstall",
    Custom: "Custom",
    FlowDrivenCustom: "FlowDrivenCustom",
} as const;

/**
 * The action of the command.
 */
export type Action = (typeof Action)[keyof typeof Action];

export const Architecture = {
    X86: "x86",
    X64: "x64",
    Arm64: "arm64",
} as const;

/**
 * The architecture of a first party application of a Test Base Account.
 */
export type Architecture = (typeof Architecture)[keyof typeof Architecture];

export const ContentType = {
    Inline: "Inline",
    File: "File",
    Path: "Path",
} as const;

/**
 * The type of command content.
 */
export type ContentType = (typeof ContentType)[keyof typeof ContentType];

export const CredentialType = {
    /**
     * Username password credential for intune enrollment.
     */
    IntuneAccount: "IntuneAccount",
} as const;

/**
 * Credential type.
 */
export type CredentialType = (typeof CredentialType)[keyof typeof CredentialType];

export const DraftPackageSourceType = {
    Native: "Native",
    IntuneWin: "IntuneWin",
    TestBasePackage: "TestBasePackage",
    GalleryApp: "GalleryApp",
    IntuneEnrollment: "IntuneEnrollment",
} as const;

/**
 * The source type.
 */
export type DraftPackageSourceType = (typeof DraftPackageSourceType)[keyof typeof DraftPackageSourceType];

export const Engagements = {
    MVI: "MVI",
    MVP: "MVP",
    SUVP: "SUVP",
    MAPP: "MAPP",
    Other: "Other",
} as const;

export type Engagements = (typeof Engagements)[keyof typeof Engagements];

export const FileUploadResourceType = {
    /**
     * Upload file for package onboarding.
     */
    Package: "Package",
    /**
     * Upload VHD file for image onboarding.
     */
    VHD: "VHD",
} as const;

/**
 * Resource type for file uploading.
 */
export type FileUploadResourceType = (typeof FileUploadResourceType)[keyof typeof FileUploadResourceType];

export const ImageArchitecture = {
    /**
     * 64-bit architecture.
     */
    X64: "x64",
} as const;

/**
 * Custom image architecture.
 */
export type ImageArchitecture = (typeof ImageArchitecture)[keyof typeof ImageArchitecture];

export const ImageOSState = {
    /**
     * Sysprep generalization processed.
     */
    Generalized: "Generalized",
    /**
     * Fully kept with user specified settings.
     */
    Specialized: "Specialized",
} as const;

/**
 * Custom image OS state.
 */
export type ImageOSState = (typeof ImageOSState)[keyof typeof ImageOSState];

export const ImageSecurityType = {
    /**
     * Standard security type.
     */
    Standard: "Standard",
    /**
     * Specify higher security level compared to Standard.
     */
    TrustedLaunch: "TrustedLaunch",
} as const;

/**
 * Custom image security type.
 */
export type ImageSecurityType = (typeof ImageSecurityType)[keyof typeof ImageSecurityType];

export const ImageSource = {
    /**
     * Unknown image source type.
     */
    Unknown: "Unknown",
    /**
     * Specify image onboarding through VHD.
     */
    VHD: "VHD",
} as const;

/**
 * Custom image source type.
 */
export type ImageSource = (typeof ImageSource)[keyof typeof ImageSource];

export const InteropExecutionMode = {
    /**
     * User application will test with the first party applications. For out-of-box tests, additional test cases for first party applications will also be run.
     */
    FirstPartyAppWithTests: "firstPartyAppWithTests",
    /**
     * User application will test with the first party applications.
     */
    FirstPartyApp: "firstPartyApp",
} as const;

/**
 * Specifies how the first party applications should be inter-operated with user's application.
 */
export type InteropExecutionMode = (typeof InteropExecutionMode)[keyof typeof InteropExecutionMode];

export const IntuneExtractStatus = {
    Ready: "Ready",
    Uploading: "Uploading",
    UploadFailed: "UploadFailed",
    ExtractFailed: "ExtractFailed",
    NoDependencyApp: "NoDependencyApp",
} as const;

/**
 * Extract status.
 */
export type IntuneExtractStatus = (typeof IntuneExtractStatus)[keyof typeof IntuneExtractStatus];

export const PackageStudioTabs = {
    Unspecified: "Unspecified",
    BasicsTab: "BasicsTab",
    ConfigureTestTab: "ConfigureTestTab",
    EditPackageTab: "EditPackageTab",
    TestMatrixTab: "TestMatrixTab",
    TagsTab: "TagsTab",
    ReviewAndCreateTab: "ReviewAndCreateTab",
} as const;

/**
 * Specifies the tabs when creating / cloning / editing a package.
 */
export type PackageStudioTabs = (typeof PackageStudioTabs)[keyof typeof PackageStudioTabs];

export const RequestTypes = {
    PreReleaseAccess: "PreReleaseAccess",
} as const;

export type RequestTypes = (typeof RequestTypes)[keyof typeof RequestTypes];

export const SystemAssignedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
} as const;

/**
 * Type of managed service identity (either system assigned, or none).
 */
export type SystemAssignedServiceIdentityType = (typeof SystemAssignedServiceIdentityType)[keyof typeof SystemAssignedServiceIdentityType];

export const TestType = {
    OutOfBoxTest: "OutOfBoxTest",
    FunctionalTest: "FunctionalTest",
    FlowDrivenTest: "FlowDrivenTest",
} as const;

/**
 * The type of the test.
 */
export type TestType = (typeof TestType)[keyof typeof TestType];

export const Tier = {
    Standard: "Standard",
} as const;

/**
 * The tier of this particular SKU.
 */
export type Tier = (typeof Tier)[keyof typeof Tier];
