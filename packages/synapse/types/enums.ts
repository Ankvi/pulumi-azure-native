export const BlobStorageEventType = {
    Microsoft_Storage_BlobCreated: "Microsoft.Storage.BlobCreated",
    Microsoft_Storage_BlobRenamed: "Microsoft.Storage.BlobRenamed",
} as const;

export type BlobStorageEventType = (typeof BlobStorageEventType)[keyof typeof BlobStorageEventType];

export const ClusterPrincipalRole = {
    AllDatabasesAdmin: "AllDatabasesAdmin",
    AllDatabasesViewer: "AllDatabasesViewer",
} as const;

export type ClusterPrincipalRole = (typeof ClusterPrincipalRole)[keyof typeof ClusterPrincipalRole];

export const Compression = {
    None: "None",
    GZip: "GZip",
} as const;

export type Compression = (typeof Compression)[keyof typeof Compression];

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

export const DataConnectionKind = {
    EventHub: "EventHub",
    EventGrid: "EventGrid",
    IotHub: "IotHub",
} as const;

export type DataConnectionKind = (typeof DataConnectionKind)[keyof typeof DataConnectionKind];

export const DataFlowComputeType = {
    General: "General",
    MemoryOptimized: "MemoryOptimized",
    ComputeOptimized: "ComputeOptimized",
} as const;

export type DataFlowComputeType = (typeof DataFlowComputeType)[keyof typeof DataFlowComputeType];

export const DatabasePrincipalRole = {
    Admin: "Admin",
    Ingestor: "Ingestor",
    Monitor: "Monitor",
    User: "User",
    UnrestrictedViewer: "UnrestrictedViewer",
    Viewer: "Viewer",
} as const;

export type DatabasePrincipalRole = (typeof DatabasePrincipalRole)[keyof typeof DatabasePrincipalRole];

export const DefaultPrincipalsModificationKind = {
    Union: "Union",
    Replace: "Replace",
    None: "None",
} as const;

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

export type EventHubDataFormat = (typeof EventHubDataFormat)[keyof typeof EventHubDataFormat];

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

export type IotHubDataFormat = (typeof IotHubDataFormat)[keyof typeof IotHubDataFormat];

export const Kind = {
    ReadWrite: "ReadWrite",
    ReadOnlyFollowing: "ReadOnlyFollowing",
} as const;

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

export type NodeSize = (typeof NodeSize)[keyof typeof NodeSize];

export const NodeSizeFamily = {
    None: "None",
    MemoryOptimized: "MemoryOptimized",
    HardwareAcceleratedFPGA: "HardwareAcceleratedFPGA",
    HardwareAcceleratedGPU: "HardwareAcceleratedGPU",
} as const;

export type NodeSizeFamily = (typeof NodeSizeFamily)[keyof typeof NodeSizeFamily];

export const PrincipalType = {
    App: "App",
    Group: "Group",
    User: "User",
} as const;

export type PrincipalType = (typeof PrincipalType)[keyof typeof PrincipalType];

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

export const SkuName = {
    Compute_optimized: "Compute optimized",
    Storage_optimized: "Storage optimized",
} as const;

export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const SkuSize = {
    Extra_small: "Extra small",
    Small: "Small",
    Medium: "Medium",
    Large: "Large",
} as const;

export type SkuSize = (typeof SkuSize)[keyof typeof SkuSize];

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
