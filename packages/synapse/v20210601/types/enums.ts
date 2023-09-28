export const ConfigurationType = {
    File: "File",
    Artifact: "Artifact",
} as const;

/**
 * The type of the spark config properties file.
 */
export type ConfigurationType = (typeof ConfigurationType)[keyof typeof ConfigurationType];

export const CreateMode = {
    Default: "Default",
    PointInTimeRestore: "PointInTimeRestore",
    Recovery: "Recovery",
    Restore: "Restore",
} as const;

/**
 * Specifies the mode of sql pool creation.
 *
 * Default: regular sql pool creation.
 *
 * PointInTimeRestore: Creates a sql pool by restoring a point in time backup of an existing sql pool. sourceDatabaseId must be specified as the resource ID of the existing sql pool, and restorePointInTime must be specified.
 *
 * Recovery: Creates a sql pool by a geo-replicated backup. sourceDatabaseId  must be specified as the recoverableDatabaseId to restore.
 *
 * Restore: Creates a sql pool by restoring a backup of a deleted sql  pool. SourceDatabaseId should be the sql pool's original resource ID. SourceDatabaseId and sourceDatabaseDeletionDate must be specified.
 */
export type CreateMode = (typeof CreateMode)[keyof typeof CreateMode];

export const DataFlowComputeType = {
    General: "General",
    MemoryOptimized: "MemoryOptimized",
    ComputeOptimized: "ComputeOptimized",
} as const;

/**
 * Compute type of the cluster which will execute data flow job.
 */
export type DataFlowComputeType = (typeof DataFlowComputeType)[keyof typeof DataFlowComputeType];

export const IntegrationRuntimeEdition = {
    Standard: "Standard",
    Enterprise: "Enterprise",
} as const;

/**
 * The edition for the SSIS Integration Runtime
 */
export type IntegrationRuntimeEdition = (typeof IntegrationRuntimeEdition)[keyof typeof IntegrationRuntimeEdition];

export const IntegrationRuntimeEntityReferenceType = {
    IntegrationRuntimeReference: "IntegrationRuntimeReference",
    LinkedServiceReference: "LinkedServiceReference",
} as const;

/**
 * The type of this referenced entity.
 */
export type IntegrationRuntimeEntityReferenceType = (typeof IntegrationRuntimeEntityReferenceType)[keyof typeof IntegrationRuntimeEntityReferenceType];

export const IntegrationRuntimeLicenseType = {
    BasePrice: "BasePrice",
    LicenseIncluded: "LicenseIncluded",
} as const;

/**
 * License type for bringing your own license scenario.
 */
export type IntegrationRuntimeLicenseType = (typeof IntegrationRuntimeLicenseType)[keyof typeof IntegrationRuntimeLicenseType];

export const IntegrationRuntimeSsisCatalogPricingTier = {
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
    PremiumRS: "PremiumRS",
} as const;

/**
 * The pricing tier for the catalog database. The valid values could be found in https://azure.microsoft.com/en-us/pricing/details/sql-database/
 */
export type IntegrationRuntimeSsisCatalogPricingTier = (typeof IntegrationRuntimeSsisCatalogPricingTier)[keyof typeof IntegrationRuntimeSsisCatalogPricingTier];

export const IntegrationRuntimeType = {
    Managed: "Managed",
    SelfHosted: "SelfHosted",
} as const;

/**
 * Type of integration runtime.
 */
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

/**
 * The level of compute power that each node in the Big Data pool has.
 */
export type NodeSize = (typeof NodeSize)[keyof typeof NodeSize];

export const NodeSizeFamily = {
    None: "None",
    MemoryOptimized: "MemoryOptimized",
    HardwareAcceleratedFPGA: "HardwareAcceleratedFPGA",
    HardwareAcceleratedGPU: "HardwareAcceleratedGPU",
} as const;

/**
 * The kind of nodes that the Big Data pool provides.
 */
export type NodeSizeFamily = (typeof NodeSizeFamily)[keyof typeof NodeSizeFamily];

export const ResourceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

/**
 * The type of managed identity for the workspace
 */
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

/**
 * The storage account type used to store backups for this sql pool.
 */
export type StorageAccountType = (typeof StorageAccountType)[keyof typeof StorageAccountType];

export const TransparentDataEncryptionStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * The status of the database transparent data encryption.
 */
export type TransparentDataEncryptionStatus = (typeof TransparentDataEncryptionStatus)[keyof typeof TransparentDataEncryptionStatus];

export const WorkspacePublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Enable or Disable public network access to workspace
 */
export type WorkspacePublicNetworkAccess = (typeof WorkspacePublicNetworkAccess)[keyof typeof WorkspacePublicNetworkAccess];
