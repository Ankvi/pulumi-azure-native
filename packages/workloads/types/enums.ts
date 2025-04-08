export const AlertAutoMitigate = {
    /**
     * The alert should be automatically resolved.
     */
    Enable: "Enable",
    /**
     * The alert should not be automatically resolved.
     */
    Disable: "Disable",
} as const;

/**
 * The value that indicates whether the alert should be automatically resolved or not. The default is Disable.
 */
export type AlertAutoMitigate = (typeof AlertAutoMitigate)[keyof typeof AlertAutoMitigate];

export const AlertRuleStatus = {
    /**
     * The scheduled query rule is enabled
     */
    Enabled: "Enabled",
    /**
     * The scheduled query rule is disabled
     */
    Disabled: "Disabled",
} as const;

/**
 * Indicates whether the alert is in an enabled state.
 */
export type AlertRuleStatus = (typeof AlertRuleStatus)[keyof typeof AlertRuleStatus];

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

export const ConditionalOperator = {
    /**
     * The value is less than the specified value.
     */
    LessThan: "LessThan",
    /**
     * The value is greater than the specified value.
     */
    GreaterThan: "GreaterThan",
    /**
     * The value is equal to the specified value.
     */
    Equal: "Equal",
    /**
     * The value is greater than or equal to the specified value.
     */
    GreaterThanOrEqual: "GreaterThanOrEqual",
    /**
     * The value is less than or equal to the specified value.
     */
    LessThanOrEqual: "LessThanOrEqual",
} as const;

/**
 * The threshold operator of the alert.
 */
export type ConditionalOperator = (typeof ConditionalOperator)[keyof typeof ConditionalOperator];

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
    /**
     * Standard LRS Disk SKU.
     */
    Standard_LRS: "Standard_LRS",
    /**
     * Premium_LRS Disk SKU.
     */
    Premium_LRS: "Premium_LRS",
    /**
     * StandardSSD_LRS Disk SKU.
     */
    StandardSSD_LRS: "StandardSSD_LRS",
    /**
     * UltraSSD_LRS Disk SKU.
     */
    UltraSSD_LRS: "UltraSSD_LRS",
    /**
     * Premium_ZRS Disk SKU.
     */
    Premium_ZRS: "Premium_ZRS",
    /**
     * StandardSSD_ZRS Disk SKU.
     */
    StandardSSD_ZRS: "StandardSSD_ZRS",
    /**
     * PremiumV2_LRS Disk SKU.
     */
    PremiumV2_LRS: "PremiumV2_LRS",
} as const;

/**
 * Defines the disk sku name.
 */
export type DiskSkuName = (typeof DiskSkuName)[keyof typeof DiskSkuName];

export const FileShareConfigurationType = {
    /**
     * Skip creating the file share.
     */
    Skip: "Skip",
    /**
     * Fileshare will be created and mounted by service.
     */
    CreateAndMount: "CreateAndMount",
    /**
     * Existing fileshare provided will be mounted by service.
     */
    Mount: "Mount",
} as const;

/**
 * The type of file share config, eg: Mount/CreateAndMount/Skip.
 */
export type FileShareConfigurationType = (typeof FileShareConfigurationType)[keyof typeof FileShareConfigurationType];

export const IAASVMPolicyType = {
    Invalid: "Invalid",
    V1: "V1",
    V2: "V2",
} as const;

/**
 * The policy type.
 */
export type IAASVMPolicyType = (typeof IAASVMPolicyType)[keyof typeof IAASVMPolicyType];

export const ManagedResourcesNetworkAccessType = {
    /**
     * Managed resources will be deployed with public network access enabled.
     */
    Public: "Public",
    /**
     * Managed resources will be deployed with public network access disabled.
     */
    Private: "Private",
} as const;

/**
 * Specifies the network access configuration for the resources that will be deployed in the Managed Resource Group. The options to choose from are Public and Private. If 'Private' is chosen, the Storage Account service tag should be enabled on the subnets in which the SAP VMs exist. This is required for establishing connectivity between VM extensions and the managed resource group storage account. This setting is currently applicable only to Storage Account. Learn more here https://go.microsoft.com/fwlink/?linkid=2247228
 */
export type ManagedResourcesNetworkAccessType = (typeof ManagedResourcesNetworkAccessType)[keyof typeof ManagedResourcesNetworkAccessType];

export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

/**
 * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
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
    /**
     * Full resource names that will be created by service.
     */
    FullResourceName: "FullResourceName",
} as const;

/**
 * The pattern type to be used for resource naming.
 */
export type NamingPatternType = (typeof NamingPatternType)[keyof typeof NamingPatternType];

export const OSType = {
    /**
     * Linux OS Type.
     */
    Linux: "Linux",
    /**
     * Windows OS Type.
     */
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
    /**
     * Default routing preference. Only RFC1918 traffic is routed to the customer VNET.
     */
    Default: "Default",
    /**
     * Route all traffic to the customer VNET.
     */
    RouteAll: "RouteAll",
} as const;

/**
 * Sets the routing preference of the SAP monitor. By default only RFC1918 traffic is routed to the customer VNET.
 */
export type RoutingPreference = (typeof RoutingPreference)[keyof typeof RoutingPreference];

export const SAPConfigurationType = {
    /**
     * SAP system will be deployed by service. No OS configurations will be done.
     */
    Deployment: "Deployment",
    /**
     * Existing SAP system will be registered.
     */
    Discovery: "Discovery",
    /**
     * SAP system will be deployed by service. OS configurations will be done.
     */
    DeploymentWithOSConfig: "DeploymentWithOSConfig",
} as const;

/**
 * The configuration type. Eg: Deployment/Discovery
 */
export type SAPConfigurationType = (typeof SAPConfigurationType)[keyof typeof SAPConfigurationType];

export const SAPDatabaseScaleMethod = {
    /**
     * ScaleUp Hana Database deployment type
     */
    ScaleUp: "ScaleUp",
} as const;

/**
 * The DB scale method.
 */
export type SAPDatabaseScaleMethod = (typeof SAPDatabaseScaleMethod)[keyof typeof SAPDatabaseScaleMethod];

export const SAPDatabaseType = {
    /**
     * HANA Database type of SAP system.
     */
    HANA: "HANA",
    /**
     * DB2 database type of the SAP system.
     */
    DB2: "DB2",
} as const;

/**
 * The database type.
 */
export type SAPDatabaseType = (typeof SAPDatabaseType)[keyof typeof SAPDatabaseType];

export const SAPDeploymentType = {
    /**
     * SAP Single server deployment type.
     */
    SingleServer: "SingleServer",
    /**
     * SAP Distributed deployment type.
     */
    ThreeTier: "ThreeTier",
} as const;

/**
 * The deployment type. Eg: SingleServer/ThreeTier
 */
export type SAPDeploymentType = (typeof SAPDeploymentType)[keyof typeof SAPDeploymentType];

export const SAPEnvironmentType = {
    /**
     * Non Production SAP system.
     */
    NonProd: "NonProd",
    /**
     * Production SAP system.
     */
    Prod: "Prod",
} as const;

/**
 * Defines the environment type - Production/Non Production.
 */
export type SAPEnvironmentType = (typeof SAPEnvironmentType)[keyof typeof SAPEnvironmentType];

export const SAPHighAvailabilityType = {
    /**
     * HA deployment with availability sets.
     */
    AvailabilitySet: "AvailabilitySet",
    /**
     * HA deployment with availability zones.
     */
    AvailabilityZone: "AvailabilityZone",
} as const;

/**
 * The high availability type.
 */
export type SAPHighAvailabilityType = (typeof SAPHighAvailabilityType)[keyof typeof SAPHighAvailabilityType];

export const SAPProductType = {
    /**
     * SAP Product ECC.
     */
    ECC: "ECC",
    /**
     * SAP Product S4HANA.
     */
    S4HANA: "S4HANA",
    /**
     * SAP Products other than the ones listed.
     */
    Other: "Other",
} as const;

/**
 * Defines the SAP Product type.
 */
export type SAPProductType = (typeof SAPProductType)[keyof typeof SAPProductType];

export const SAPSoftwareInstallationType = {
    /**
     * SAP Install managed by service.
     */
    ServiceInitiated: "ServiceInitiated",
    /**
     * SAP Install without OS Config.
     */
    SAPInstallWithoutOSConfig: "SAPInstallWithoutOSConfig",
    /**
     * External software installation type.
     */
    External: "External",
} as const;

/**
 * The SAP software installation type.
 */
export type SAPSoftwareInstallationType = (typeof SAPSoftwareInstallationType)[keyof typeof SAPSoftwareInstallationType];

export const SAPVirtualInstanceIdentityType = {
    /**
     * No managed identity.
     */
    None: "None",
    /**
     * User assigned managed identity.
     */
    UserAssigned: "UserAssigned",
} as const;

/**
 * The type of managed identity assigned to this resource.
 */
export type SAPVirtualInstanceIdentityType = (typeof SAPVirtualInstanceIdentityType)[keyof typeof SAPVirtualInstanceIdentityType];

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
    /**
     * Secure communication is disabled.
     */
    Disabled: "Disabled",
    /**
     * Secure communication is enabled with root certificate.
     */
    RootCertificate: "RootCertificate",
    /**
     * Secure communication is enabled with server certificate.
     */
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
