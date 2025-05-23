export const AdditionalVmPatch = {
    NotSet: "NotSet",
    MicrosoftUpdate: "MicrosoftUpdate",
} as const;

/**
 * Additional Patch to be enable or enabled on the SQL Virtual Machine.
 */
export type AdditionalVmPatch = (typeof AdditionalVmPatch)[keyof typeof AdditionalVmPatch];

export const AssessmentDayOfWeek = {
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
    Sunday: "Sunday",
} as const;

/**
 * Day of the week to run assessment.
 */
export type AssessmentDayOfWeek = (typeof AssessmentDayOfWeek)[keyof typeof AssessmentDayOfWeek];

export const AutoBackupDaysOfWeek = {
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
    Sunday: "Sunday",
} as const;

export type AutoBackupDaysOfWeek = (typeof AutoBackupDaysOfWeek)[keyof typeof AutoBackupDaysOfWeek];

export const BackupScheduleType = {
    Manual: "Manual",
    Automated: "Automated",
} as const;

/**
 * Backup schedule type.
 */
export type BackupScheduleType = (typeof BackupScheduleType)[keyof typeof BackupScheduleType];

export const ClusterSubnetType = {
    SingleSubnet: "SingleSubnet",
    MultiSubnet: "MultiSubnet",
} as const;

/**
 * Cluster subnet type.
 */
export type ClusterSubnetType = (typeof ClusterSubnetType)[keyof typeof ClusterSubnetType];

export const Commit = {
    Synchronous_Commit: "Synchronous_Commit",
    Asynchronous_Commit: "Asynchronous_Commit",
} as const;

/**
 * Replica commit mode in availability group.
 */
export type Commit = (typeof Commit)[keyof typeof Commit];

export const ConnectivityType = {
    LOCAL: "LOCAL",
    PRIVATE: "PRIVATE",
    PUBLIC: "PUBLIC",
} as const;

/**
 * SQL Server connectivity option.
 */
export type ConnectivityType = (typeof ConnectivityType)[keyof typeof ConnectivityType];

export const DayOfWeek = {
    Everyday: "Everyday",
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
    Sunday: "Sunday",
} as const;

/**
 * Day of week to apply the patch on.
 */
export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];

export const DiskConfigurationType = {
    NEW: "NEW",
    EXTEND: "EXTEND",
    ADD: "ADD",
} as const;

/**
 * Disk configuration to apply to SQL Server.
 */
export type DiskConfigurationType = (typeof DiskConfigurationType)[keyof typeof DiskConfigurationType];

export const Failover = {
    Automatic: "Automatic",
    Manual: "Manual",
} as const;

/**
 * Replica failover mode in availability group.
 */
export type Failover = (typeof Failover)[keyof typeof Failover];

export const FullBackupFrequencyType = {
    Daily: "Daily",
    Weekly: "Weekly",
} as const;

/**
 * Frequency of full backups. In both cases, full backups begin during the next scheduled time window.
 */
export type FullBackupFrequencyType = (typeof FullBackupFrequencyType)[keyof typeof FullBackupFrequencyType];

export const IdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

/**
 * The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource.
 */
export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const LeastPrivilegeMode = {
    Enabled: "Enabled",
    NotSet: "NotSet",
} as const;

/**
 * SQL IaaS Agent least privilege mode.
 */
export type LeastPrivilegeMode = (typeof LeastPrivilegeMode)[keyof typeof LeastPrivilegeMode];

export const ReadableSecondary = {
    No: "No",
    All: "All",
    Read_Only: "Read_Only",
} as const;

/**
 * Replica readable secondary mode in availability group.
 */
export type ReadableSecondary = (typeof ReadableSecondary)[keyof typeof ReadableSecondary];

export const Role = {
    Primary: "Primary",
    Secondary: "Secondary",
} as const;

/**
 * Replica Role in availability group.
 */
export type Role = (typeof Role)[keyof typeof Role];

export const SqlImageSku = {
    Developer: "Developer",
    Express: "Express",
    Standard: "Standard",
    Enterprise: "Enterprise",
    Web: "Web",
} as const;

/**
 * SQL Server edition type.
 */
export type SqlImageSku = (typeof SqlImageSku)[keyof typeof SqlImageSku];

export const SqlManagementMode = {
    Full: "Full",
    LightWeight: "LightWeight",
    NoAgent: "NoAgent",
} as const;

/**
 * SQL Server Management type. NOTE: This parameter is not used anymore. API will automatically detect the Sql Management, refrain from using it.
 */
export type SqlManagementMode = (typeof SqlManagementMode)[keyof typeof SqlManagementMode];

export const SqlServerLicenseType = {
    PAYG: "PAYG",
    AHUB: "AHUB",
    DR: "DR",
} as const;

/**
 * SQL Server license type.
 */
export type SqlServerLicenseType = (typeof SqlServerLicenseType)[keyof typeof SqlServerLicenseType];

export const SqlVmGroupImageSku = {
    Developer: "Developer",
    Enterprise: "Enterprise",
} as const;

/**
 * SQL image sku.
 */
export type SqlVmGroupImageSku = (typeof SqlVmGroupImageSku)[keyof typeof SqlVmGroupImageSku];

export const SqlWorkloadType = {
    GENERAL: "GENERAL",
    OLTP: "OLTP",
    DW: "DW",
} as const;

/**
 * SQL Server workload type.
 */
export type SqlWorkloadType = (typeof SqlWorkloadType)[keyof typeof SqlWorkloadType];

export const StorageWorkloadType = {
    GENERAL: "GENERAL",
    OLTP: "OLTP",
    DW: "DW",
} as const;

/**
 * Storage workload type.
 */
export type StorageWorkloadType = (typeof StorageWorkloadType)[keyof typeof StorageWorkloadType];

export const VmIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
} as const;

/**
 * Identity type of the virtual machine. Specify None to opt-out of Managed Identities.
 */
export type VmIdentityType = (typeof VmIdentityType)[keyof typeof VmIdentityType];
