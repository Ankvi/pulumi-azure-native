export const AutoHealActionType = {
    Recycle: "Recycle",
    LogEvent: "LogEvent",
    CustomAction: "CustomAction",
} as const;

/**
 * Predefined action to be taken.
 */
export type AutoHealActionType = (typeof AutoHealActionType)[keyof typeof AutoHealActionType];

export const AzureStorageType = {
    AzureFiles: "AzureFiles",
    AzureBlob: "AzureBlob",
} as const;

/**
 * Type of storage.
 */
export type AzureStorageType = (typeof AzureStorageType)[keyof typeof AzureStorageType];

export const ConnectionStringType = {
    MySql: "MySql",
    SQLServer: "SQLServer",
    SQLAzure: "SQLAzure",
    Custom: "Custom",
    NotificationHub: "NotificationHub",
    ServiceBus: "ServiceBus",
    EventHub: "EventHub",
    ApiHub: "ApiHub",
    DocDb: "DocDb",
    RedisCache: "RedisCache",
    PostgreSQL: "PostgreSQL",
} as const;

/**
 * Type of database.
 */
export type ConnectionStringType = (typeof ConnectionStringType)[keyof typeof ConnectionStringType];

export const DatabaseType = {
    SqlAzure: "SqlAzure",
    MySql: "MySql",
    LocalMySql: "LocalMySql",
    PostgreSql: "PostgreSql",
} as const;

/**
 * Database type (e.g. SqlAzure / MySql).
 */
export type DatabaseType = (typeof DatabaseType)[keyof typeof DatabaseType];

export const FrequencyUnit = {
    Day: "Day",
    Hour: "Hour",
} as const;

/**
 * The unit of time for how often the backup should be executed (e.g. for weekly backup, this should be set to Day and FrequencyInterval should be set to 7)
 */
export type FrequencyUnit = (typeof FrequencyUnit)[keyof typeof FrequencyUnit];

export const FtpsState = {
    AllAllowed: "AllAllowed",
    FtpsOnly: "FtpsOnly",
    Disabled: "Disabled",
} as const;

/**
 * State of FTP / FTPS service
 */
export type FtpsState = (typeof FtpsState)[keyof typeof FtpsState];

export const HostType = {
    Standard: "Standard",
    Repository: "Repository",
} as const;

/**
 * Indicates whether the hostname is a standard or repository hostname.
 */
export type HostType = (typeof HostType)[keyof typeof HostType];

export const IpFilterTag = {
    Default: "Default",
    XffProxy: "XffProxy",
} as const;

/**
 * Defines what this IP filter will be used for. This is to support IP filtering on proxies.
 */
export type IpFilterTag = (typeof IpFilterTag)[keyof typeof IpFilterTag];

export const ManagedPipelineMode = {
    Integrated: "Integrated",
    Classic: "Classic",
} as const;

/**
 * Managed pipeline mode.
 */
export type ManagedPipelineMode = (typeof ManagedPipelineMode)[keyof typeof ManagedPipelineMode];

export const ManagedServiceIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
    None: "None",
} as const;

/**
 * Type of managed service identity.
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const RedundancyMode = {
    None: "None",
    Manual: "Manual",
    Failover: "Failover",
    ActiveActive: "ActiveActive",
    GeoRedundant: "GeoRedundant",
} as const;

/**
 * Site redundancy mode
 */
export type RedundancyMode = (typeof RedundancyMode)[keyof typeof RedundancyMode];

export const ScmType = {
    None: "None",
    Dropbox: "Dropbox",
    Tfs: "Tfs",
    LocalGit: "LocalGit",
    GitHub: "GitHub",
    CodePlexGit: "CodePlexGit",
    CodePlexHg: "CodePlexHg",
    BitbucketGit: "BitbucketGit",
    BitbucketHg: "BitbucketHg",
    ExternalGit: "ExternalGit",
    ExternalHg: "ExternalHg",
    OneDrive: "OneDrive",
    VSO: "VSO",
} as const;

/**
 * SCM type.
 */
export type ScmType = (typeof ScmType)[keyof typeof ScmType];

export const SiteLoadBalancing = {
    WeightedRoundRobin: "WeightedRoundRobin",
    LeastRequests: "LeastRequests",
    LeastResponseTime: "LeastResponseTime",
    WeightedTotalTraffic: "WeightedTotalTraffic",
    RequestHash: "RequestHash",
} as const;

/**
 * Site load balancing.
 */
export type SiteLoadBalancing = (typeof SiteLoadBalancing)[keyof typeof SiteLoadBalancing];

export const SslState = {
    Disabled: "Disabled",
    SniEnabled: "SniEnabled",
    IpBasedEnabled: "IpBasedEnabled",
} as const;

/**
 * SSL type.
 */
export type SslState = (typeof SslState)[keyof typeof SslState];

export const SupportedTlsVersions = {
    SupportedTlsVersions_1_0: "1.0",
    SupportedTlsVersions_1_1: "1.1",
    SupportedTlsVersions_1_2: "1.2",
} as const;

/**
 * MinTlsVersion: configures the minimum version of TLS required for SSL requests
 */
export type SupportedTlsVersions = (typeof SupportedTlsVersions)[keyof typeof SupportedTlsVersions];
