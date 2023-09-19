export const AutoHealActionType = {
    Recycle: "Recycle",
    LogEvent: "LogEvent",
    CustomAction: "CustomAction",
} as const;

export type AutoHealActionType = (typeof AutoHealActionType)[keyof typeof AutoHealActionType];

export const BackupRestoreOperationType = {
    Default: "Default",
    Clone: "Clone",
    Relocation: "Relocation",
    Snapshot: "Snapshot",
} as const;

export type BackupRestoreOperationType = (typeof BackupRestoreOperationType)[keyof typeof BackupRestoreOperationType];

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

export type ConnectionStringType = (typeof ConnectionStringType)[keyof typeof ConnectionStringType];

export const DatabaseType = {
    SqlAzure: "SqlAzure",
    MySql: "MySql",
    LocalMySql: "LocalMySql",
    PostgreSql: "PostgreSql",
} as const;

export type DatabaseType = (typeof DatabaseType)[keyof typeof DatabaseType];

export const FrequencyUnit = {
    Day: "Day",
    Hour: "Hour",
} as const;

export type FrequencyUnit = (typeof FrequencyUnit)[keyof typeof FrequencyUnit];

export const HostType = {
    Standard: "Standard",
    Repository: "Repository",
} as const;

export type HostType = (typeof HostType)[keyof typeof HostType];

export const ManagedPipelineMode = {
    Integrated: "Integrated",
    Classic: "Classic",
} as const;

export type ManagedPipelineMode = (typeof ManagedPipelineMode)[keyof typeof ManagedPipelineMode];

export const ManagedServiceIdentityType = {
    SystemAssigned: "SystemAssigned",
} as const;

export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

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

export type ScmType = (typeof ScmType)[keyof typeof ScmType];

export const SiteLoadBalancing = {
    WeightedRoundRobin: "WeightedRoundRobin",
    LeastRequests: "LeastRequests",
    LeastResponseTime: "LeastResponseTime",
    WeightedTotalTraffic: "WeightedTotalTraffic",
    RequestHash: "RequestHash",
} as const;

export type SiteLoadBalancing = (typeof SiteLoadBalancing)[keyof typeof SiteLoadBalancing];

export const SslState = {
    Disabled: "Disabled",
    SniEnabled: "SniEnabled",
    IpBasedEnabled: "IpBasedEnabled",
} as const;

export type SslState = (typeof SslState)[keyof typeof SslState];

export const SupportedTlsVersions = {
    SupportedTlsVersions_1_0: "1.0",
    SupportedTlsVersions_1_1: "1.1",
    SupportedTlsVersions_1_2: "1.2",
} as const;

export type SupportedTlsVersions = (typeof SupportedTlsVersions)[keyof typeof SupportedTlsVersions];
