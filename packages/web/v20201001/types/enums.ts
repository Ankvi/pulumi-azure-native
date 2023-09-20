export const AccessControlEntryAction = {
    Permit: "Permit",
    Deny: "Deny",
} as const;

export type AccessControlEntryAction = (typeof AccessControlEntryAction)[keyof typeof AccessControlEntryAction];

export const AutoHealActionType = {
    Recycle: "Recycle",
    LogEvent: "LogEvent",
    CustomAction: "CustomAction",
} as const;

export type AutoHealActionType = (typeof AutoHealActionType)[keyof typeof AutoHealActionType];

export const AzureResourceType = {
    Website: "Website",
    TrafficManager: "TrafficManager",
} as const;

export type AzureResourceType = (typeof AzureResourceType)[keyof typeof AzureResourceType];

export const AzureStorageType = {
    AzureFiles: "AzureFiles",
    AzureBlob: "AzureBlob",
} as const;

export type AzureStorageType = (typeof AzureStorageType)[keyof typeof AzureStorageType];

export const BuiltInAuthenticationProvider = {
    AzureActiveDirectory: "AzureActiveDirectory",
    Facebook: "Facebook",
    Google: "Google",
    MicrosoftAccount: "MicrosoftAccount",
    Twitter: "Twitter",
    Github: "Github",
} as const;

export type BuiltInAuthenticationProvider = (typeof BuiltInAuthenticationProvider)[keyof typeof BuiltInAuthenticationProvider];

export const ClientCertMode = {
    Required: "Required",
    Optional: "Optional",
} as const;

export type ClientCertMode = (typeof ClientCertMode)[keyof typeof ClientCertMode];

export const ClientCredentialMethod = {
    ClientSecretPost: "ClientSecretPost",
} as const;

export type ClientCredentialMethod = (typeof ClientCredentialMethod)[keyof typeof ClientCredentialMethod];

export const ComputeModeOptions = {
    Shared: "Shared",
    Dedicated: "Dedicated",
    Dynamic: "Dynamic",
} as const;

export type ComputeModeOptions = (typeof ComputeModeOptions)[keyof typeof ComputeModeOptions];

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

export const CookieExpirationConvention = {
    FixedTime: "FixedTime",
    IdentityProviderDerived: "IdentityProviderDerived",
} as const;

export type CookieExpirationConvention = (typeof CookieExpirationConvention)[keyof typeof CookieExpirationConvention];

export const CustomHostNameDnsRecordType = {
    CName: "CName",
    A: "A",
} as const;

export type CustomHostNameDnsRecordType = (typeof CustomHostNameDnsRecordType)[keyof typeof CustomHostNameDnsRecordType];

export const DatabaseType = {
    SqlAzure: "SqlAzure",
    MySql: "MySql",
    LocalMySql: "LocalMySql",
    PostgreSql: "PostgreSql",
} as const;

export type DatabaseType = (typeof DatabaseType)[keyof typeof DatabaseType];

export const ForwardProxyConvention = {
    NoProxy: "NoProxy",
    Standard: "Standard",
    Custom: "Custom",
} as const;

export type ForwardProxyConvention = (typeof ForwardProxyConvention)[keyof typeof ForwardProxyConvention];

export const FrequencyUnit = {
    Day: "Day",
    Hour: "Hour",
} as const;

export type FrequencyUnit = (typeof FrequencyUnit)[keyof typeof FrequencyUnit];

export const FtpsState = {
    AllAllowed: "AllAllowed",
    FtpsOnly: "FtpsOnly",
    Disabled: "Disabled",
} as const;

export type FtpsState = (typeof FtpsState)[keyof typeof FtpsState];

export const HostNameType = {
    Verified: "Verified",
    Managed: "Managed",
} as const;

export type HostNameType = (typeof HostNameType)[keyof typeof HostNameType];

export const HostType = {
    Standard: "Standard",
    Repository: "Repository",
} as const;

export type HostType = (typeof HostType)[keyof typeof HostType];

export const IpFilterTag = {
    Default: "Default",
    XffProxy: "XffProxy",
    ServiceTag: "ServiceTag",
} as const;

export type IpFilterTag = (typeof IpFilterTag)[keyof typeof IpFilterTag];

export const LoadBalancingMode = {
    None: "None",
    Web: "Web",
    Publishing: "Publishing",
    Web_Publishing: "Web,Publishing",
} as const;

export type LoadBalancingMode = (typeof LoadBalancingMode)[keyof typeof LoadBalancingMode];

export const LogLevel = {
    Off: "Off",
    Verbose: "Verbose",
    Information: "Information",
    Warning: "Warning",
    Error: "Error",
} as const;

export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel];

export const ManagedPipelineMode = {
    Integrated: "Integrated",
    Classic: "Classic",
} as const;

export type ManagedPipelineMode = (typeof ManagedPipelineMode)[keyof typeof ManagedPipelineMode];

export const ManagedServiceIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
    None: "None",
} as const;

export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const PublicCertificateLocation = {
    CurrentUserMy: "CurrentUserMy",
    LocalMachineMy: "LocalMachineMy",
    Unknown: "Unknown",
} as const;

export type PublicCertificateLocation = (typeof PublicCertificateLocation)[keyof typeof PublicCertificateLocation];

export const RedundancyMode = {
    None: "None",
    Manual: "Manual",
    Failover: "Failover",
    ActiveActive: "ActiveActive",
    GeoRedundant: "GeoRedundant",
} as const;

export type RedundancyMode = (typeof RedundancyMode)[keyof typeof RedundancyMode];

export const RouteType = {
    DEFAULT: "DEFAULT",
    INHERITED: "INHERITED",
    STATIC: "STATIC",
} as const;

export type RouteType = (typeof RouteType)[keyof typeof RouteType];

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
    VSTSRM: "VSTSRM",
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

export const UnauthenticatedClientAction = {
    RedirectToLoginPage: "RedirectToLoginPage",
    AllowAnonymous: "AllowAnonymous",
} as const;

export type UnauthenticatedClientAction = (typeof UnauthenticatedClientAction)[keyof typeof UnauthenticatedClientAction];

export const UnauthenticatedClientActionV2 = {
    RedirectToLoginPage: "RedirectToLoginPage",
    AllowAnonymous: "AllowAnonymous",
    Return401: "Return401",
    Return403: "Return403",
} as const;

export type UnauthenticatedClientActionV2 = (typeof UnauthenticatedClientActionV2)[keyof typeof UnauthenticatedClientActionV2];