export const AccountProvisioningMode = {
    Automatic: "automatic",
    Manual: "manual",
} as const;

export type AccountProvisioningMode = (typeof AccountProvisioningMode)[keyof typeof AccountProvisioningMode];

export const ArcSqlManagedInstanceLicenseType = {
    BasePrice: "BasePrice",
    LicenseIncluded: "LicenseIncluded",
    DisasterRecovery: "DisasterRecovery",
} as const;

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

export type ArcSqlServerLicenseType = (typeof ArcSqlServerLicenseType)[keyof typeof ArcSqlServerLicenseType];

export const ConnectionStatus = {
    Connected: "Connected",
    Disconnected: "Disconnected",
    Registered: "Registered",
    Unknown: "Unknown",
} as const;

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

export type DatabaseState = (typeof DatabaseState)[keyof typeof DatabaseState];

export const DefenderStatus = {
    Protected: "Protected",
    Unprotected: "Unprotected",
    Unknown: "Unknown",
} as const;

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

export type EditionType = (typeof EditionType)[keyof typeof EditionType];

export const ExtendedLocationTypes = {
    CustomLocation: "CustomLocation",
} as const;

export type ExtendedLocationTypes = (typeof ExtendedLocationTypes)[keyof typeof ExtendedLocationTypes];

export const FailoverGroupPartnerSyncMode = {
    Async: "async",
    Sync: "sync",
} as const;

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

export type HostType = (typeof HostType)[keyof typeof HostType];

export const Infrastructure = {
    Azure: "azure",
    Gcp: "gcp",
    Aws: "aws",
    Alibaba: "alibaba",
    Onpremises: "onpremises",
    Other: "other",
} as const;

export type Infrastructure = (typeof Infrastructure)[keyof typeof Infrastructure];

export const InstanceFailoverGroupRole = {
    Primary: "primary",
    Secondary: "secondary",
    Force_primary_allow_data_loss: "force-primary-allow-data-loss",
    Force_secondary: "force-secondary",
} as const;

export type InstanceFailoverGroupRole = (typeof InstanceFailoverGroupRole)[keyof typeof InstanceFailoverGroupRole];

export const PostgresInstanceSkuTier = {
    Hyperscale: "Hyperscale",
} as const;

export type PostgresInstanceSkuTier = (typeof PostgresInstanceSkuTier)[keyof typeof PostgresInstanceSkuTier];

export const RecoveryMode = {
    Full: "Full",
    Bulk_logged: "Bulk-logged",
    Simple: "Simple",
} as const;

export type RecoveryMode = (typeof RecoveryMode)[keyof typeof RecoveryMode];

export const SqlManagedInstanceSkuName = {
    VCore: "vCore",
} as const;

export type SqlManagedInstanceSkuName = (typeof SqlManagedInstanceSkuName)[keyof typeof SqlManagedInstanceSkuName];

export const SqlManagedInstanceSkuTier = {
    GeneralPurpose: "GeneralPurpose",
    BusinessCritical: "BusinessCritical",
} as const;

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

export type SqlVersion = (typeof SqlVersion)[keyof typeof SqlVersion];