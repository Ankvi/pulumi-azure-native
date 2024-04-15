export const AccountProvisioningMode = {
    Automatic: "automatic",
    Manual: "manual",
} as const;

/**
 * The service account provisioning mode for this Active Directory connector.
 */
export type AccountProvisioningMode = (typeof AccountProvisioningMode)[keyof typeof AccountProvisioningMode];

export const AggregationType = {
    Average: "Average",
    Minimum: "Minimum",
    Maximum: "Maximum",
    Sum: "Sum",
    Count: "Count",
} as const;

/**
 * The aggregation type to use for the numerical columns in the dataset.
 */
export type AggregationType = (typeof AggregationType)[keyof typeof AggregationType];

export const ArcSqlManagedInstanceLicenseType = {
    BasePrice: "BasePrice",
    LicenseIncluded: "LicenseIncluded",
    DisasterRecovery: "DisasterRecovery",
} as const;

/**
 * The license type to apply for this managed instance.
 */
export type ArcSqlManagedInstanceLicenseType = (typeof ArcSqlManagedInstanceLicenseType)[keyof typeof ArcSqlManagedInstanceLicenseType];

export const ArcSqlServerLicenseType = {
    Undefined: "Undefined",
    Free: "Free",
    HADR: "HADR",
    ServerCAL: "ServerCAL",
    LicenseOnly: "LicenseOnly",
    PAYG: "PAYG",
    Paid: "Paid",
} as const;

/**
 * SQL Server license type.
 */
export type ArcSqlServerLicenseType = (typeof ArcSqlServerLicenseType)[keyof typeof ArcSqlServerLicenseType];

export const ConnectionStatus = {
    Connected: "Connected",
    Disconnected: "Disconnected",
    Registered: "Registered",
    Unknown: "Unknown",
} as const;

/**
 * The cloud connectivity status.
 */
export type ConnectionStatus = (typeof ConnectionStatus)[keyof typeof ConnectionStatus];

export const DatabaseState = {
    Online: "Online",
    Restoring: "Restoring",
    Recovering: "Recovering",
    RecoveryPending: "RecoveryPending",
    Suspect: "Suspect",
    Emergency: "Emergency",
    Offline: "Offline",
    Copying: "Copying",
    OfflineSecondary: "OfflineSecondary",
} as const;

/**
 * State of the database.
 */
export type DatabaseState = (typeof DatabaseState)[keyof typeof DatabaseState];

export const DefenderStatus = {
    Protected: "Protected",
    Unprotected: "Unprotected",
    Unknown: "Unknown",
} as const;

/**
 * Status of Azure Defender.
 */
export type DefenderStatus = (typeof DefenderStatus)[keyof typeof DefenderStatus];

export const EditionType = {
    Evaluation: "Evaluation",
    Enterprise: "Enterprise",
    Standard: "Standard",
    Web: "Web",
    Developer: "Developer",
    Express: "Express",
    Business_Intelligence: "Business Intelligence",
} as const;

/**
 * SQL Server edition.
 */
export type EditionType = (typeof EditionType)[keyof typeof EditionType];

export const ExtendedLocationTypes = {
    CustomLocation: "CustomLocation",
} as const;

/**
 * The type of the extended location.
 */
export type ExtendedLocationTypes = (typeof ExtendedLocationTypes)[keyof typeof ExtendedLocationTypes];

export const FailoverGroupPartnerSyncMode = {
    Async: "async",
    Sync: "sync",
} as const;

/**
 * The partner sync mode of the SQL managed instance.
 */
export type FailoverGroupPartnerSyncMode = (typeof FailoverGroupPartnerSyncMode)[keyof typeof FailoverGroupPartnerSyncMode];

export const HostType = {
    Azure_Virtual_Machine: "Azure Virtual Machine",
    Azure_VMWare_Virtual_Machine: "Azure VMWare Virtual Machine",
    Azure_Kubernetes_Service: "Azure Kubernetes Service",
    AWS_VMWare_Virtual_Machine: "AWS VMWare Virtual Machine",
    AWS_Kubernetes_Service: "AWS Kubernetes Service",
    GCP_VMWare_Virtual_Machine: "GCP VMWare Virtual Machine",
    GCP_Kubernetes_Service: "GCP Kubernetes Service",
    Container: "Container",
    Virtual_Machine: "Virtual Machine",
    Physical_Server: "Physical Server",
    AWS_Virtual_Machine: "AWS Virtual Machine",
    GCP_Virtual_Machine: "GCP Virtual Machine",
    Other: "Other",
} as const;

/**
 * Type of host for Azure Arc SQL Server
 */
export type HostType = (typeof HostType)[keyof typeof HostType];

export const Infrastructure = {
    Azure: "azure",
    Gcp: "gcp",
    Aws: "aws",
    Alibaba: "alibaba",
    Onpremises: "onpremises",
    Other: "other",
} as const;

/**
 * The infrastructure the data controller is running on.
 */
export type Infrastructure = (typeof Infrastructure)[keyof typeof Infrastructure];

export const InstanceFailoverGroupRole = {
    Primary: "primary",
    Secondary: "secondary",
    Force_primary_allow_data_loss: "force-primary-allow-data-loss",
    Force_secondary: "force-secondary",
} as const;

/**
 * The role of the SQL managed instance in this failover group.
 */
export type InstanceFailoverGroupRole = (typeof InstanceFailoverGroupRole)[keyof typeof InstanceFailoverGroupRole];

export const PostgresInstanceSkuTier = {
    Hyperscale: "Hyperscale",
} as const;

/**
 * This field is required to be implemented by the Resource Provider if the service has more than one tier.
 */
export type PostgresInstanceSkuTier = (typeof PostgresInstanceSkuTier)[keyof typeof PostgresInstanceSkuTier];

export const RecoveryMode = {
    Full: "Full",
    Bulk_logged: "Bulk-logged",
    Simple: "Simple",
} as const;

/**
 * Status of the database.
 */
export type RecoveryMode = (typeof RecoveryMode)[keyof typeof RecoveryMode];

export const SqlManagedInstanceSkuName = {
    VCore: "vCore",
} as const;

/**
 * The name of the SKU.
 */
export type SqlManagedInstanceSkuName = (typeof SqlManagedInstanceSkuName)[keyof typeof SqlManagedInstanceSkuName];

export const SqlManagedInstanceSkuTier = {
    GeneralPurpose: "GeneralPurpose",
    BusinessCritical: "BusinessCritical",
} as const;

/**
 * The pricing tier for the instance.
 */
export type SqlManagedInstanceSkuTier = (typeof SqlManagedInstanceSkuTier)[keyof typeof SqlManagedInstanceSkuTier];

export const SqlVersion = {
    SQL_Server_2012: "SQL Server 2012",
    SQL_Server_2014: "SQL Server 2014",
    SQL_Server_2016: "SQL Server 2016",
    SQL_Server_2017: "SQL Server 2017",
    SQL_Server_2019: "SQL Server 2019",
    SQL_Server_2022: "SQL Server 2022",
    Unknown: "Unknown",
} as const;

/**
 * SQL Server version.
 */
export type SqlVersion = (typeof SqlVersion)[keyof typeof SqlVersion];
