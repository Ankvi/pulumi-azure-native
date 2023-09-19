export const AzureSkuName = {
    Dev_No_SLA_Standard_D11_v2: "Dev(No SLA)_Standard_D11_v2",
    Dev_No_SLA_Standard_E2a_v4: "Dev(No SLA)_Standard_E2a_v4",
    Standard_D11_v2: "Standard_D11_v2",
    Standard_D12_v2: "Standard_D12_v2",
    Standard_D13_v2: "Standard_D13_v2",
    Standard_D14_v2: "Standard_D14_v2",
    Standard_D32d_v4: "Standard_D32d_v4",
    Standard_D16d_v5: "Standard_D16d_v5",
    Standard_D32d_v5: "Standard_D32d_v5",
    Standard_DS13_v2_1TB_PS: "Standard_DS13_v2+1TB_PS",
    Standard_DS13_v2_2TB_PS: "Standard_DS13_v2+2TB_PS",
    Standard_DS14_v2_3TB_PS: "Standard_DS14_v2+3TB_PS",
    Standard_DS14_v2_4TB_PS: "Standard_DS14_v2+4TB_PS",
    Standard_L4s: "Standard_L4s",
    Standard_L8s: "Standard_L8s",
    Standard_L16s: "Standard_L16s",
    Standard_L8s_v2: "Standard_L8s_v2",
    Standard_L16s_v2: "Standard_L16s_v2",
    Standard_L8s_v3: "Standard_L8s_v3",
    Standard_L16s_v3: "Standard_L16s_v3",
    Standard_L32s_v3: "Standard_L32s_v3",
    Standard_L8as_v3: "Standard_L8as_v3",
    Standard_L16as_v3: "Standard_L16as_v3",
    Standard_L32as_v3: "Standard_L32as_v3",
    Standard_E64i_v3: "Standard_E64i_v3",
    Standard_E80ids_v4: "Standard_E80ids_v4",
    Standard_E2a_v4: "Standard_E2a_v4",
    Standard_E4a_v4: "Standard_E4a_v4",
    Standard_E8a_v4: "Standard_E8a_v4",
    Standard_E16a_v4: "Standard_E16a_v4",
    Standard_E8as_v4_1TB_PS: "Standard_E8as_v4+1TB_PS",
    Standard_E8as_v4_2TB_PS: "Standard_E8as_v4+2TB_PS",
    Standard_E16as_v4_3TB_PS: "Standard_E16as_v4+3TB_PS",
    Standard_E16as_v4_4TB_PS: "Standard_E16as_v4+4TB_PS",
    Standard_E8as_v5_1TB_PS: "Standard_E8as_v5+1TB_PS",
    Standard_E8as_v5_2TB_PS: "Standard_E8as_v5+2TB_PS",
    Standard_E16as_v5_3TB_PS: "Standard_E16as_v5+3TB_PS",
    Standard_E16as_v5_4TB_PS: "Standard_E16as_v5+4TB_PS",
    Standard_E2ads_v5: "Standard_E2ads_v5",
    Standard_E4ads_v5: "Standard_E4ads_v5",
    Standard_E8ads_v5: "Standard_E8ads_v5",
    Standard_E16ads_v5: "Standard_E16ads_v5",
    Standard_EC8as_v5_1TB_PS: "Standard_EC8as_v5+1TB_PS",
    Standard_EC8as_v5_2TB_PS: "Standard_EC8as_v5+2TB_PS",
    Standard_EC16as_v5_3TB_PS: "Standard_EC16as_v5+3TB_PS",
    Standard_EC16as_v5_4TB_PS: "Standard_EC16as_v5+4TB_PS",
    Standard_EC8ads_v5: "Standard_EC8ads_v5",
    Standard_EC16ads_v5: "Standard_EC16ads_v5",
    Standard_E8s_v4_1TB_PS: "Standard_E8s_v4+1TB_PS",
    Standard_E8s_v4_2TB_PS: "Standard_E8s_v4+2TB_PS",
    Standard_E16s_v4_3TB_PS: "Standard_E16s_v4+3TB_PS",
    Standard_E16s_v4_4TB_PS: "Standard_E16s_v4+4TB_PS",
    Standard_E8s_v5_1TB_PS: "Standard_E8s_v5+1TB_PS",
    Standard_E8s_v5_2TB_PS: "Standard_E8s_v5+2TB_PS",
    Standard_E16s_v5_3TB_PS: "Standard_E16s_v5+3TB_PS",
    Standard_E16s_v5_4TB_PS: "Standard_E16s_v5+4TB_PS",
    Standard_E2d_v4: "Standard_E2d_v4",
    Standard_E4d_v4: "Standard_E4d_v4",
    Standard_E8d_v4: "Standard_E8d_v4",
    Standard_E16d_v4: "Standard_E16d_v4",
    Standard_E2d_v5: "Standard_E2d_v5",
    Standard_E4d_v5: "Standard_E4d_v5",
    Standard_E8d_v5: "Standard_E8d_v5",
    Standard_E16d_v5: "Standard_E16d_v5",
} as const;

export type AzureSkuName = (typeof AzureSkuName)[keyof typeof AzureSkuName];

export const AzureSkuTier = {
    Basic: "Basic",
    Standard: "Standard",
} as const;

export type AzureSkuTier = (typeof AzureSkuTier)[keyof typeof AzureSkuTier];

export const BlobStorageEventType = {
    Microsoft_Storage_BlobCreated: "Microsoft.Storage.BlobCreated",
    Microsoft_Storage_BlobRenamed: "Microsoft.Storage.BlobRenamed",
} as const;

export type BlobStorageEventType = (typeof BlobStorageEventType)[keyof typeof BlobStorageEventType];

export const ClusterNetworkAccessFlag = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type ClusterNetworkAccessFlag = (typeof ClusterNetworkAccessFlag)[keyof typeof ClusterNetworkAccessFlag];

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

export const DataConnectionKind = {
    EventHub: "EventHub",
    EventGrid: "EventGrid",
    IotHub: "IotHub",
    CosmosDb: "CosmosDb",
} as const;

export type DataConnectionKind = (typeof DataConnectionKind)[keyof typeof DataConnectionKind];

export const DataFormat = {
    MULTIJSON: "MULTIJSON",
    JSON: "JSON",
    CSV: "CSV",
} as const;

export type DataFormat = (typeof DataFormat)[keyof typeof DataFormat];

export const DatabasePrincipalRole = {
    Admin: "Admin",
    Ingestor: "Ingestor",
    Monitor: "Monitor",
    User: "User",
    UnrestrictedViewer: "UnrestrictedViewer",
    Viewer: "Viewer",
} as const;

export type DatabasePrincipalRole = (typeof DatabasePrincipalRole)[keyof typeof DatabasePrincipalRole];

export const DatabaseRouting = {
    Single: "Single",
    Multi: "Multi",
} as const;

export type DatabaseRouting = (typeof DatabaseRouting)[keyof typeof DatabaseRouting];

export const DefaultPrincipalsModificationKind = {
    Union: "Union",
    Replace: "Replace",
    None: "None",
} as const;

export type DefaultPrincipalsModificationKind = (typeof DefaultPrincipalsModificationKind)[keyof typeof DefaultPrincipalsModificationKind];

export const EngineType = {
    V2: "V2",
    V3: "V3",
} as const;

export type EngineType = (typeof EngineType)[keyof typeof EngineType];

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

export const IdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
} as const;

export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

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

export const LanguageExtensionImageName = {
    R: "R",
    Python3_6_5: "Python3_6_5",
    Python3_10_8: "Python3_10_8",
} as const;

export type LanguageExtensionImageName = (typeof LanguageExtensionImageName)[keyof typeof LanguageExtensionImageName];

export const LanguageExtensionName = {
    PYTHON: "PYTHON",
    R: "R",
} as const;

export type LanguageExtensionName = (typeof LanguageExtensionName)[keyof typeof LanguageExtensionName];

export const PrincipalType = {
    App: "App",
    Group: "Group",
    User: "User",
} as const;

export type PrincipalType = (typeof PrincipalType)[keyof typeof PrincipalType];

export const PublicIPType = {
    IPv4: "IPv4",
    DualStack: "DualStack",
} as const;

export type PublicIPType = (typeof PublicIPType)[keyof typeof PublicIPType];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];
