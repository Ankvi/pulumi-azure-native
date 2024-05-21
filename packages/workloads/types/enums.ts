export const AppServicePlanTier = {
    /**
     * Elastic Premium plan
     */
    ElasticPremium: "ElasticPremium",
    /**
     * Dedicated Premium V3 plan
     */
    PremiumV3: "PremiumV3",
} as const;

/**
 * The App Service plan tier.
 */
export type AppServicePlanTier = (typeof AppServicePlanTier)[keyof typeof AppServicePlanTier];

export const BackupType = {
    VM: "VM",
    SQL: "SQL",
    HANA: "HANA",
} as const;

/**
 * The type of backup, VM, SQL or HANA.
 */
export type BackupType = (typeof BackupType)[keyof typeof BackupType];

export const ConfigurationType = {
    Skip: "Skip",
    CreateAndMount: "CreateAndMount",
    Mount: "Mount",
} as const;

/**
 * The type of file share config.
 */
export type ConfigurationType = (typeof ConfigurationType)[keyof typeof ConfigurationType];

export const DayOfWeek = {
    Sunday: "Sunday",
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
} as const;

export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];

export const DiskSkuName = {
    Standard_LRS: "Standard_LRS",
    Premium_LRS: "Premium_LRS",
    StandardSSD_LRS: "StandardSSD_LRS",
    UltraSSD_LRS: "UltraSSD_LRS",
    Premium_ZRS: "Premium_ZRS",
    StandardSSD_ZRS: "StandardSSD_ZRS",
    PremiumV2_LRS: "PremiumV2_LRS",
} as const;

/**
 * Defines the disk sku name.
 */
export type DiskSkuName = (typeof DiskSkuName)[keyof typeof DiskSkuName];

export const IAASVMPolicyType = {
    Invalid: "Invalid",
    V1: "V1",
    V2: "V2",
} as const;

/**
 * The policy type.
 */
export type IAASVMPolicyType = (typeof IAASVMPolicyType)[keyof typeof IAASVMPolicyType];

export const ManagedServiceIdentityType = {
    None: "None",
    UserAssigned: "UserAssigned",
} as const;

/**
 * Type of manage identity
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const MonthOfYear = {
    Invalid: "Invalid",
    January: "January",
    February: "February",
    March: "March",
    April: "April",
    May: "May",
    June: "June",
    July: "July",
    August: "August",
    September: "September",
    October: "October",
    November: "November",
    December: "December",
} as const;

export type MonthOfYear = (typeof MonthOfYear)[keyof typeof MonthOfYear];

export const NamingPatternType = {
    FullResourceName: "FullResourceName",
} as const;

/**
 * The pattern type to be used for resource naming.
 */
export type NamingPatternType = (typeof NamingPatternType)[keyof typeof NamingPatternType];

export const OSType = {
    Linux: "Linux",
    Windows: "Windows",
} as const;

/**
 * The OS Type
 */
export type OSType = (typeof OSType)[keyof typeof OSType];

export const PolicyType = {
    Invalid: "Invalid",
    Full: "Full",
    Differential: "Differential",
    Log: "Log",
    CopyOnlyFull: "CopyOnlyFull",
    Incremental: "Incremental",
    SnapshotFull: "SnapshotFull",
    SnapshotCopyOnlyFull: "SnapshotCopyOnlyFull",
} as const;

/**
 * Type of backup policy type
 */
export type PolicyType = (typeof PolicyType)[keyof typeof PolicyType];

export const RetentionDurationType = {
    Invalid: "Invalid",
    Days: "Days",
    Weeks: "Weeks",
    Months: "Months",
    Years: "Years",
} as const;

/**
 * Retention duration type: days/weeks/months/years
 * Used only if TieringMode is set to TierAfter
 */
export type RetentionDurationType = (typeof RetentionDurationType)[keyof typeof RetentionDurationType];

export const RetentionScheduleFormat = {
    Invalid: "Invalid",
    Daily: "Daily",
    Weekly: "Weekly",
} as const;

/**
 * Retention schedule format for yearly retention policy.
 */
export type RetentionScheduleFormat = (typeof RetentionScheduleFormat)[keyof typeof RetentionScheduleFormat];

export const RoutingPreference = {
    Default: "Default",
    RouteAll: "RouteAll",
} as const;

/**
 * Sets the routing preference of the SAP monitor. By default only RFC1918 traffic is routed to the customer VNET.
 */
export type RoutingPreference = (typeof RoutingPreference)[keyof typeof RoutingPreference];

export const SAPConfigurationType = {
    Deployment: "Deployment",
    Discovery: "Discovery",
    DeploymentWithOSConfig: "DeploymentWithOSConfig",
} as const;

/**
 * The configuration Type.
 */
export type SAPConfigurationType = (typeof SAPConfigurationType)[keyof typeof SAPConfigurationType];

export const SAPDatabaseScaleMethod = {
    ScaleUp: "ScaleUp",
} as const;

/**
 * The DB scale method.
 */
export type SAPDatabaseScaleMethod = (typeof SAPDatabaseScaleMethod)[keyof typeof SAPDatabaseScaleMethod];

export const SAPDatabaseType = {
    HANA: "HANA",
    DB2: "DB2",
} as const;

/**
 * The database type. Eg: HANA, DB2, etc
 */
export type SAPDatabaseType = (typeof SAPDatabaseType)[keyof typeof SAPDatabaseType];

export const SAPDeploymentType = {
    SingleServer: "SingleServer",
    ThreeTier: "ThreeTier",
} as const;

/**
 * The deployment type. Eg: SingleServer/ThreeTier
 */
export type SAPDeploymentType = (typeof SAPDeploymentType)[keyof typeof SAPDeploymentType];

export const SAPEnvironmentType = {
    NonProd: "NonProd",
    Prod: "Prod",
} as const;

/**
 * Defines the environment type - Production/Non Production.
 */
export type SAPEnvironmentType = (typeof SAPEnvironmentType)[keyof typeof SAPEnvironmentType];

export const SAPHighAvailabilityType = {
    AvailabilitySet: "AvailabilitySet",
    AvailabilityZone: "AvailabilityZone",
} as const;

/**
 * The high availability type.
 */
export type SAPHighAvailabilityType = (typeof SAPHighAvailabilityType)[keyof typeof SAPHighAvailabilityType];

export const SAPProductType = {
    ECC: "ECC",
    S4HANA: "S4HANA",
    Other: "Other",
} as const;

/**
 * Defines the SAP Product type.
 */
export type SAPProductType = (typeof SAPProductType)[keyof typeof SAPProductType];

export const SAPSoftwareInstallationType = {
    ServiceInitiated: "ServiceInitiated",
    SAPInstallWithoutOSConfig: "SAPInstallWithoutOSConfig",
    External: "External",
} as const;

/**
 * The SAP software installation Type.
 */
export type SAPSoftwareInstallationType = (typeof SAPSoftwareInstallationType)[keyof typeof SAPSoftwareInstallationType];

export const ScheduleRunType = {
    Invalid: "Invalid",
    Daily: "Daily",
    Weekly: "Weekly",
    Hourly: "Hourly",
} as const;

/**
 * Frequency of the schedule operation of this policy.
 */
export type ScheduleRunType = (typeof ScheduleRunType)[keyof typeof ScheduleRunType];

export const SslCryptoProvider = {
    Commoncrypto: "commoncrypto",
    Openssl: "openssl",
} as const;

/**
 * Specify the crypto provider being used (commoncrypto/openssl). If this argument is not provided, it is automatically determined by searching in the configuration files.
 */
export type SslCryptoProvider = (typeof SslCryptoProvider)[keyof typeof SslCryptoProvider];

export const SslPreference = {
    Disabled: "Disabled",
    RootCertificate: "RootCertificate",
    ServerCertificate: "ServerCertificate",
} as const;

/**
 * Gets or sets certificate preference if secure communication is enabled.
 */
export type SslPreference = (typeof SslPreference)[keyof typeof SslPreference];

export const TieringMode = {
    Invalid: "Invalid",
    TierRecommended: "TierRecommended",
    TierAfter: "TierAfter",
    DoNotTier: "DoNotTier",
} as const;

/**
 * Tiering Mode to control automatic tiering of recovery points. Supported values are:
 * 1. TierRecommended: Tier all recovery points recommended to be tiered
 * 2. TierAfter: Tier all recovery points after a fixed period, as specified in duration + durationType below.
 * 3. DoNotTier: Do not tier any recovery points
 */
export type TieringMode = (typeof TieringMode)[keyof typeof TieringMode];

export const VaultType = {
    Existing: "Existing",
    New: "New",
} as const;

/**
 * The vault type, whether it is existing or has to be created.
 */
export type VaultType = (typeof VaultType)[keyof typeof VaultType];

export const WeekOfMonth = {
    First: "First",
    Second: "Second",
    Third: "Third",
    Fourth: "Fourth",
    Last: "Last",
    Invalid: "Invalid",
} as const;

export type WeekOfMonth = (typeof WeekOfMonth)[keyof typeof WeekOfMonth];

export const WorkloadType = {
    Invalid: "Invalid",
    VM: "VM",
    FileFolder: "FileFolder",
    AzureSqlDb: "AzureSqlDb",
    SQLDB: "SQLDB",
    Exchange: "Exchange",
    Sharepoint: "Sharepoint",
    VMwareVM: "VMwareVM",
    SystemState: "SystemState",
    Client: "Client",
    GenericDataSource: "GenericDataSource",
    SQLDataBase: "SQLDataBase",
    AzureFileShare: "AzureFileShare",
    SAPHanaDatabase: "SAPHanaDatabase",
    SAPAseDatabase: "SAPAseDatabase",
    SAPHanaDBInstance: "SAPHanaDBInstance",
} as const;

/**
 * Type of workload for the backup management
 */
export type WorkloadType = (typeof WorkloadType)[keyof typeof WorkloadType];
