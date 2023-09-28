export const AutoHealActionType = {
    Recycle: "Recycle",
    LogEvent: "LogEvent",
    CustomAction: "CustomAction",
} as const;

/**
 * Predefined action to be taken.
 */
export type AutoHealActionType = (typeof AutoHealActionType)[keyof typeof AutoHealActionType];

export const AzureResourceType = {
    Website: "Website",
    TrafficManager: "TrafficManager",
} as const;

/**
 * Azure resource type.
 */
export type AzureResourceType = (typeof AzureResourceType)[keyof typeof AzureResourceType];

export const AzureStorageType = {
    AzureFiles: "AzureFiles",
    AzureBlob: "AzureBlob",
} as const;

/**
 * Type of storage.
 */
export type AzureStorageType = (typeof AzureStorageType)[keyof typeof AzureStorageType];

export const BuiltInAuthenticationProvider = {
    AzureActiveDirectory: "AzureActiveDirectory",
    Facebook: "Facebook",
    Google: "Google",
    MicrosoftAccount: "MicrosoftAccount",
    Twitter: "Twitter",
    Github: "Github",
} as const;

/**
 * The default authentication provider to use when multiple providers are configured.
 * This setting is only needed if multiple providers are configured and the unauthenticated client
 * action is set to "RedirectToLoginPage".
 */
export type BuiltInAuthenticationProvider = (typeof BuiltInAuthenticationProvider)[keyof typeof BuiltInAuthenticationProvider];

export const ClientCertMode = {
    Required: "Required",
    Optional: "Optional",
    OptionalInteractiveUser: "OptionalInteractiveUser",
} as const;

/**
 * This composes with ClientCertEnabled setting.
 * - ClientCertEnabled: false means ClientCert is ignored.
 * - ClientCertEnabled: true and ClientCertMode: Required means ClientCert is required.
 * - ClientCertEnabled: true and ClientCertMode: Optional means ClientCert is optional or accepted.
 */
export type ClientCertMode = (typeof ClientCertMode)[keyof typeof ClientCertMode];

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

export const CustomHostNameDnsRecordType = {
    CName: "CName",
    A: "A",
} as const;

/**
 * Custom DNS record type.
 */
export type CustomHostNameDnsRecordType = (typeof CustomHostNameDnsRecordType)[keyof typeof CustomHostNameDnsRecordType];

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

export const DefaultAction = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

/**
 * Default action for scm access restriction if no rules are matched.
 */
export type DefaultAction = (typeof DefaultAction)[keyof typeof DefaultAction];

export const EnterpriseGradeCdnStatus = {
    Enabled: "Enabled",
    Enabling: "Enabling",
    Disabled: "Disabled",
    Disabling: "Disabling",
} as const;

/**
 * State indicating the status of the enterprise grade CDN serving traffic to the static web app.
 */
export type EnterpriseGradeCdnStatus = (typeof EnterpriseGradeCdnStatus)[keyof typeof EnterpriseGradeCdnStatus];

export const FrequencyUnit = {
    Day: "Day",
    Hour: "Hour",
} as const;

/**
 * The unit of time for how often the backup should be executed (e.g. for weekly backup, this should be set to Day and FrequencyInterval should be set to 7)
 */
export type FrequencyUnit = (typeof FrequencyUnit)[keyof typeof FrequencyUnit];

export const FrontEndServiceType = {
    NodePort: "NodePort",
    LoadBalancer: "LoadBalancer",
} as const;

export type FrontEndServiceType = (typeof FrontEndServiceType)[keyof typeof FrontEndServiceType];

export const FtpsState = {
    AllAllowed: "AllAllowed",
    FtpsOnly: "FtpsOnly",
    Disabled: "Disabled",
} as const;

/**
 * State of FTP / FTPS service
 */
export type FtpsState = (typeof FtpsState)[keyof typeof FtpsState];

export const HostNameType = {
    Verified: "Verified",
    Managed: "Managed",
} as const;

/**
 * Hostname type.
 */
export type HostNameType = (typeof HostNameType)[keyof typeof HostNameType];

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
    ServiceTag: "ServiceTag",
} as const;

/**
 * Defines what this IP filter will be used for. This is to support IP filtering on proxies.
 */
export type IpFilterTag = (typeof IpFilterTag)[keyof typeof IpFilterTag];

export const LoadBalancingMode = {
    None: "None",
    Web: "Web",
    Publishing: "Publishing",
    Web_Publishing: "Web, Publishing",
} as const;

/**
 * Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment.
 */
export type LoadBalancingMode = (typeof LoadBalancingMode)[keyof typeof LoadBalancingMode];

export const LogLevel = {
    Off: "Off",
    Verbose: "Verbose",
    Information: "Information",
    Warning: "Warning",
    Error: "Error",
} as const;

/**
 * Log level.
 */
export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel];

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

export const PublicCertificateLocation = {
    CurrentUserMy: "CurrentUserMy",
    LocalMachineMy: "LocalMachineMy",
    Unknown: "Unknown",
} as const;

/**
 * Public Certificate Location
 */
export type PublicCertificateLocation = (typeof PublicCertificateLocation)[keyof typeof PublicCertificateLocation];

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

export const RouteType = {
    DEFAULT: "DEFAULT",
    INHERITED: "INHERITED",
    STATIC: "STATIC",
} as const;

/**
 * The type of route this is:
 * DEFAULT - By default, every app has routes to the local address ranges specified by RFC1918
 * INHERITED - Routes inherited from the real Virtual Network routes
 * STATIC - Static route set on the app only
 *
 * These values will be used for syncing an app's routes with those from a Virtual Network.
 */
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
    PerSiteRoundRobin: "PerSiteRoundRobin",
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

export const StagingEnvironmentPolicy = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * State indicating whether staging environments are allowed or not allowed for a static web app.
 */
export type StagingEnvironmentPolicy = (typeof StagingEnvironmentPolicy)[keyof typeof StagingEnvironmentPolicy];

export const StorageType = {
    LocalNode: "LocalNode",
    NetworkFileSystem: "NetworkFileSystem",
} as const;

export type StorageType = (typeof StorageType)[keyof typeof StorageType];

export const SupportedTlsVersions = {
    SupportedTlsVersions_1_0: "1.0",
    SupportedTlsVersions_1_1: "1.1",
    SupportedTlsVersions_1_2: "1.2",
} as const;

/**
 * ScmMinTlsVersion: configures the minimum version of TLS required for SSL requests for SCM site
 */
export type SupportedTlsVersions = (typeof SupportedTlsVersions)[keyof typeof SupportedTlsVersions];

export const UnauthenticatedClientAction = {
    RedirectToLoginPage: "RedirectToLoginPage",
    AllowAnonymous: "AllowAnonymous",
} as const;

/**
 * The action to take when an unauthenticated client attempts to access the app.
 */
export type UnauthenticatedClientAction = (typeof UnauthenticatedClientAction)[keyof typeof UnauthenticatedClientAction];

export const UpgradePreference = {
    /**
     * No preference on when this App Service Environment will be upgraded
     */
    None: "None",
    /**
     * This App Service Environment will be upgraded before others in the same region that have Upgrade Preference 'Late'
     */
    Early: "Early",
    /**
     * This App Service Environment will be upgraded after others in the same region that have Upgrade Preference 'Early'
     */
    Late: "Late",
    /**
     * ASEv3 only. Once an upgrade is available, this App Service Environment will wait 10 days for the upgrade to be manually initiated. After 10 days the upgrade will begin automatically
     */
    Manual: "Manual",
} as const;

/**
 * Upgrade Preference
 */
export type UpgradePreference = (typeof UpgradePreference)[keyof typeof UpgradePreference];
