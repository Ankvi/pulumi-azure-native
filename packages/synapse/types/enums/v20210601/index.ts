// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const ConfigurationType = {
    File: "File",
    Artifact: "Artifact",
} as const;

export type ConfigurationType = (typeof ConfigurationType)[keyof typeof ConfigurationType];

export const CreateMode = {
    Default: "Default",
    PointInTimeRestore: "PointInTimeRestore",
    Recovery: "Recovery",
    Restore: "Restore",
} as const;

export type CreateMode = (typeof CreateMode)[keyof typeof CreateMode];

export const DataFlowComputeType = {
    General: "General",
    MemoryOptimized: "MemoryOptimized",
    ComputeOptimized: "ComputeOptimized",
} as const;

export type DataFlowComputeType = (typeof DataFlowComputeType)[keyof typeof DataFlowComputeType];

export const IntegrationRuntimeEdition = {
    Standard: "Standard",
    Enterprise: "Enterprise",
} as const;

export type IntegrationRuntimeEdition = (typeof IntegrationRuntimeEdition)[keyof typeof IntegrationRuntimeEdition];

export const IntegrationRuntimeEntityReferenceType = {
    IntegrationRuntimeReference: "IntegrationRuntimeReference",
    LinkedServiceReference: "LinkedServiceReference",
} as const;

export type IntegrationRuntimeEntityReferenceType = (typeof IntegrationRuntimeEntityReferenceType)[keyof typeof IntegrationRuntimeEntityReferenceType];

export const IntegrationRuntimeLicenseType = {
    BasePrice: "BasePrice",
    LicenseIncluded: "LicenseIncluded",
} as const;

export type IntegrationRuntimeLicenseType = (typeof IntegrationRuntimeLicenseType)[keyof typeof IntegrationRuntimeLicenseType];

export const IntegrationRuntimeSsisCatalogPricingTier = {
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
    PremiumRS: "PremiumRS",
} as const;

export type IntegrationRuntimeSsisCatalogPricingTier = (typeof IntegrationRuntimeSsisCatalogPricingTier)[keyof typeof IntegrationRuntimeSsisCatalogPricingTier];

export const IntegrationRuntimeType = {
    Managed: "Managed",
    SelfHosted: "SelfHosted",
} as const;

export type IntegrationRuntimeType = (typeof IntegrationRuntimeType)[keyof typeof IntegrationRuntimeType];

export const NodeSize = {
    None: "None",
    Small: "Small",
    Medium: "Medium",
    Large: "Large",
    XLarge: "XLarge",
    XXLarge: "XXLarge",
    XXXLarge: "XXXLarge",
} as const;

export type NodeSize = (typeof NodeSize)[keyof typeof NodeSize];

export const NodeSizeFamily = {
    None: "None",
    MemoryOptimized: "MemoryOptimized",
    HardwareAcceleratedFPGA: "HardwareAcceleratedFPGA",
    HardwareAcceleratedGPU: "HardwareAcceleratedGPU",
} as const;

export type NodeSizeFamily = (typeof NodeSizeFamily)[keyof typeof NodeSizeFamily];

export const ResourceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const SensitivityLabelRank = {
    None: "None",
    Low: "Low",
    Medium: "Medium",
    High: "High",
    Critical: "Critical",
} as const;

export type SensitivityLabelRank = (typeof SensitivityLabelRank)[keyof typeof SensitivityLabelRank];

export const StorageAccountType = {
    GRS: "GRS",
    LRS: "LRS",
} as const;

export type StorageAccountType = (typeof StorageAccountType)[keyof typeof StorageAccountType];

export const TransparentDataEncryptionStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type TransparentDataEncryptionStatus = (typeof TransparentDataEncryptionStatus)[keyof typeof TransparentDataEncryptionStatus];

export const WorkspacePublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type WorkspacePublicNetworkAccess = (typeof WorkspacePublicNetworkAccess)[keyof typeof WorkspacePublicNetworkAccess];
