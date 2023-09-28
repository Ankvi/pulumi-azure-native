export const BlobStorageEventType = {
    Microsoft_Storage_BlobCreated: "Microsoft.Storage.BlobCreated",
    Microsoft_Storage_BlobRenamed: "Microsoft.Storage.BlobRenamed",
} as const;

/**
 * The name of blob storage event type to process.
 */
export type BlobStorageEventType = (typeof BlobStorageEventType)[keyof typeof BlobStorageEventType];

export const ClusterPrincipalRole = {
    AllDatabasesAdmin: "AllDatabasesAdmin",
    AllDatabasesViewer: "AllDatabasesViewer",
} as const;

/**
 * Cluster principal role.
 */
export type ClusterPrincipalRole = (typeof ClusterPrincipalRole)[keyof typeof ClusterPrincipalRole];

export const Compression = {
    None: "None",
    GZip: "GZip",
} as const;

/**
 * The event hub messages compression type
 */
export type Compression = (typeof Compression)[keyof typeof Compression];

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

export const DataConnectionKind = {
    EventHub: "EventHub",
    EventGrid: "EventGrid",
    IotHub: "IotHub",
} as const;

/**
 * Kind of the endpoint for the data connection
 */
export type DataConnectionKind = (typeof DataConnectionKind)[keyof typeof DataConnectionKind];

export const DataFlowComputeType = {
    General: "General",
    MemoryOptimized: "MemoryOptimized",
    ComputeOptimized: "ComputeOptimized",
} as const;

/**
 * Compute type of the cluster which will execute data flow job.
 */
export type DataFlowComputeType = (typeof DataFlowComputeType)[keyof typeof DataFlowComputeType];

export const DatabasePrincipalRole = {
    Admin: "Admin",
    Ingestor: "Ingestor",
    Monitor: "Monitor",
    User: "User",
    UnrestrictedViewer: "UnrestrictedViewer",
    Viewer: "Viewer",
} as const;

/**
 * Database principal role.
 */
export type DatabasePrincipalRole = (typeof DatabasePrincipalRole)[keyof typeof DatabasePrincipalRole];

export const DefaultPrincipalsModificationKind = {
    Union: "Union",
    Replace: "Replace",
    None: "None",
} as const;

/**
 * The default principals modification kind
 */
export type DefaultPrincipalsModificationKind = (typeof DefaultPrincipalsModificationKind)[keyof typeof DefaultPrincipalsModificationKind];

export const EventGridDataFormat = {
    MULTIJSON: "MULTIJSON",
    JSON: "JSON",
    CSV: "CSV",
    TSV: "TSV",
    SCSV: "SCSV",
    SOHSV: "SOHSV",
    PSV: "PSV",
    TXT: "TXT",
    RAW: "RAW",
    SINGLEJSON: "SINGLEJSON",
    AVRO: "AVRO",
    TSVE: "TSVE",
    PARQUET: "PARQUET",
    ORC: "ORC",
    APACHEAVRO: "APACHEAVRO",
    W3CLOGFILE: "W3CLOGFILE",
} as const;

/**
 * The data format of the message. Optionally the data format can be added to each message.
 */
export type EventGridDataFormat = (typeof EventGridDataFormat)[keyof typeof EventGridDataFormat];

export const EventHubDataFormat = {
    MULTIJSON: "MULTIJSON",
    JSON: "JSON",
    CSV: "CSV",
    TSV: "TSV",
    SCSV: "SCSV",
    SOHSV: "SOHSV",
    PSV: "PSV",
    TXT: "TXT",
    RAW: "RAW",
    SINGLEJSON: "SINGLEJSON",
    AVRO: "AVRO",
    TSVE: "TSVE",
    PARQUET: "PARQUET",
    ORC: "ORC",
    APACHEAVRO: "APACHEAVRO",
    W3CLOGFILE: "W3CLOGFILE",
} as const;

/**
 * The data format of the message. Optionally the data format can be added to each message.
 */
export type EventHubDataFormat = (typeof EventHubDataFormat)[keyof typeof EventHubDataFormat];

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

export const IotHubDataFormat = {
    MULTIJSON: "MULTIJSON",
    JSON: "JSON",
    CSV: "CSV",
    TSV: "TSV",
    SCSV: "SCSV",
    SOHSV: "SOHSV",
    PSV: "PSV",
    TXT: "TXT",
    RAW: "RAW",
    SINGLEJSON: "SINGLEJSON",
    AVRO: "AVRO",
    TSVE: "TSVE",
    PARQUET: "PARQUET",
    ORC: "ORC",
    APACHEAVRO: "APACHEAVRO",
    W3CLOGFILE: "W3CLOGFILE",
} as const;

/**
 * The data format of the message. Optionally the data format can be added to each message.
 */
export type IotHubDataFormat = (typeof IotHubDataFormat)[keyof typeof IotHubDataFormat];

export const Kind = {
    ReadWrite: "ReadWrite",
    ReadOnlyFollowing: "ReadOnlyFollowing",
} as const;

/**
 * Kind of the database
 */
export type Kind = (typeof Kind)[keyof typeof Kind];

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

export const PrincipalType = {
    App: "App",
    Group: "Group",
    User: "User",
} as const;

/**
 * Principal type.
 */
export type PrincipalType = (typeof PrincipalType)[keyof typeof PrincipalType];

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

export const SkuName = {
    Compute_optimized: "Compute optimized",
    Storage_optimized: "Storage optimized",
} as const;

/**
 * SKU name.
 */
export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const SkuSize = {
    Extra_small: "Extra small",
    Small: "Small",
    Medium: "Medium",
    Large: "Large",
} as const;

/**
 * SKU size.
 */
export type SkuSize = (typeof SkuSize)[keyof typeof SkuSize];

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
