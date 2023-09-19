export const AdditionalVmPatch = {
    NotSet: "NotSet",
    MicrosoftUpdate: "MicrosoftUpdate",
} as const;

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

export type BackupScheduleType = (typeof BackupScheduleType)[keyof typeof BackupScheduleType];

export const ClusterSubnetType = {
    SingleSubnet: "SingleSubnet",
    MultiSubnet: "MultiSubnet",
} as const;

export type ClusterSubnetType = (typeof ClusterSubnetType)[keyof typeof ClusterSubnetType];

export const Commit = {
    Synchronous_Commit: "Synchronous_Commit",
    Asynchronous_Commit: "Asynchronous_Commit",
} as const;

export type Commit = (typeof Commit)[keyof typeof Commit];

export const ConnectivityType = {
    LOCAL: "LOCAL",
    PRIVATE: "PRIVATE",
    PUBLIC: "PUBLIC",
} as const;

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

export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];

export const DiskConfigurationType = {
    NEW: "NEW",
    EXTEND: "EXTEND",
    ADD: "ADD",
} as const;

export type DiskConfigurationType = (typeof DiskConfigurationType)[keyof typeof DiskConfigurationType];

export const Failover = {
    Automatic: "Automatic",
    Manual: "Manual",
} as const;

export type Failover = (typeof Failover)[keyof typeof Failover];

export const FullBackupFrequencyType = {
    Daily: "Daily",
    Weekly: "Weekly",
} as const;

export type FullBackupFrequencyType = (typeof FullBackupFrequencyType)[keyof typeof FullBackupFrequencyType];

export const IdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
} as const;

export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const LeastPrivilegeMode = {
    Enabled: "Enabled",
    NotSet: "NotSet",
} as const;

export type LeastPrivilegeMode = (typeof LeastPrivilegeMode)[keyof typeof LeastPrivilegeMode];

export const ReadableSecondary = {
    No: "No",
    All: "All",
    Read_Only: "Read_Only",
} as const;

export type ReadableSecondary = (typeof ReadableSecondary)[keyof typeof ReadableSecondary];

export const Role = {
    Primary: "Primary",
    Secondary: "Secondary",
} as const;

export type Role = (typeof Role)[keyof typeof Role];

export const SqlImageSku = {
    Developer: "Developer",
    Express: "Express",
    Standard: "Standard",
    Enterprise: "Enterprise",
    Web: "Web",
} as const;

export type SqlImageSku = (typeof SqlImageSku)[keyof typeof SqlImageSku];

export const SqlManagementMode = {
    Full: "Full",
    LightWeight: "LightWeight",
    NoAgent: "NoAgent",
} as const;

export type SqlManagementMode = (typeof SqlManagementMode)[keyof typeof SqlManagementMode];

export const SqlServerLicenseType = {
    PAYG: "PAYG",
    AHUB: "AHUB",
    DR: "DR",
} as const;

export type SqlServerLicenseType = (typeof SqlServerLicenseType)[keyof typeof SqlServerLicenseType];

export const SqlVmGroupImageSku = {
    Developer: "Developer",
    Enterprise: "Enterprise",
} as const;

export type SqlVmGroupImageSku = (typeof SqlVmGroupImageSku)[keyof typeof SqlVmGroupImageSku];

export const SqlWorkloadType = {
    GENERAL: "GENERAL",
    OLTP: "OLTP",
    DW: "DW",
} as const;

export type SqlWorkloadType = (typeof SqlWorkloadType)[keyof typeof SqlWorkloadType];

export const StorageWorkloadType = {
    GENERAL: "GENERAL",
    OLTP: "OLTP",
    DW: "DW",
} as const;

export type StorageWorkloadType = (typeof StorageWorkloadType)[keyof typeof StorageWorkloadType];
