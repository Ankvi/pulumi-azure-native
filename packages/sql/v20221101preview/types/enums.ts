export const AdministratorType = {
    ActiveDirectory: "ActiveDirectory",
} as const;

export type AdministratorType = (typeof AdministratorType)[keyof typeof AdministratorType];

export const AlwaysEncryptedEnclaveType = {
    Default: "Default",
    VBS: "VBS",
} as const;

export type AlwaysEncryptedEnclaveType = (typeof AlwaysEncryptedEnclaveType)[keyof typeof AlwaysEncryptedEnclaveType];

export const AutoExecuteStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
    Default: "Default",
} as const;

export type AutoExecuteStatus = (typeof AutoExecuteStatus)[keyof typeof AutoExecuteStatus];

export const AvailabilityZoneType = {
    NoPreference: "NoPreference",
    One: "1",
    Two: "2",
    Three: "3",
} as const;

export type AvailabilityZoneType = (typeof AvailabilityZoneType)[keyof typeof AvailabilityZoneType];

export const BackupStorageRedundancy = {
    Geo: "Geo",
    Local: "Local",
    Zone: "Zone",
    GeoZone: "GeoZone",
} as const;

export type BackupStorageRedundancy = (typeof BackupStorageRedundancy)[keyof typeof BackupStorageRedundancy];

export const BlobAuditingPolicyState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type BlobAuditingPolicyState = (typeof BlobAuditingPolicyState)[keyof typeof BlobAuditingPolicyState];

export const CatalogCollationType = {
    DATABASE_DEFAULT: "DATABASE_DEFAULT",
    SQL_Latin1_General_CP1_CI_AS: "SQL_Latin1_General_CP1_CI_AS",
} as const;

export type CatalogCollationType = (typeof CatalogCollationType)[keyof typeof CatalogCollationType];

export const CreateMode = {
    Default: "Default",
    Copy: "Copy",
    Secondary: "Secondary",
    PointInTimeRestore: "PointInTimeRestore",
    Restore: "Restore",
    Recovery: "Recovery",
    RestoreExternalBackup: "RestoreExternalBackup",
    RestoreExternalBackupSecondary: "RestoreExternalBackupSecondary",
    RestoreLongTermRetentionBackup: "RestoreLongTermRetentionBackup",
    OnlineSecondary: "OnlineSecondary",
} as const;

export type CreateMode = (typeof CreateMode)[keyof typeof CreateMode];

export const DataMaskingState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type DataMaskingState = (typeof DataMaskingState)[keyof typeof DataMaskingState];

export const DatabaseIdentityType = {
    None: "None",
    UserAssigned: "UserAssigned",
} as const;

export type DatabaseIdentityType = (typeof DatabaseIdentityType)[keyof typeof DatabaseIdentityType];

export const DatabaseLicenseType = {
    LicenseIncluded: "LicenseIncluded",
    BasePrice: "BasePrice",
} as const;

export type DatabaseLicenseType = (typeof DatabaseLicenseType)[keyof typeof DatabaseLicenseType];

export const DatabaseReadScale = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type DatabaseReadScale = (typeof DatabaseReadScale)[keyof typeof DatabaseReadScale];

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

export const ElasticPoolLicenseType = {
    LicenseIncluded: "LicenseIncluded",
    BasePrice: "BasePrice",
} as const;

export type ElasticPoolLicenseType = (typeof ElasticPoolLicenseType)[keyof typeof ElasticPoolLicenseType];

export const GeoBackupPolicyState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type GeoBackupPolicyState = (typeof GeoBackupPolicyState)[keyof typeof GeoBackupPolicyState];

export const IdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const InstancePoolLicenseType = {
    LicenseIncluded: "LicenseIncluded",
    BasePrice: "BasePrice",
} as const;

export type InstancePoolLicenseType = (typeof InstancePoolLicenseType)[keyof typeof InstancePoolLicenseType];

export const JobScheduleType = {
    Once: "Once",
    Recurring: "Recurring",
} as const;

export type JobScheduleType = (typeof JobScheduleType)[keyof typeof JobScheduleType];

export const JobStepActionSource = {
    Inline: "Inline",
} as const;

export type JobStepActionSource = (typeof JobStepActionSource)[keyof typeof JobStepActionSource];

export const JobStepActionType = {
    TSql: "TSql",
} as const;

export type JobStepActionType = (typeof JobStepActionType)[keyof typeof JobStepActionType];

export const JobStepOutputType = {
    SqlDatabase: "SqlDatabase",
} as const;

export type JobStepOutputType = (typeof JobStepOutputType)[keyof typeof JobStepOutputType];

export const JobTargetGroupMembershipType = {
    Include: "Include",
    Exclude: "Exclude",
} as const;

export type JobTargetGroupMembershipType = (typeof JobTargetGroupMembershipType)[keyof typeof JobTargetGroupMembershipType];

export const JobTargetType = {
    TargetGroup: "TargetGroup",
    SqlDatabase: "SqlDatabase",
    SqlElasticPool: "SqlElasticPool",
    SqlShardMap: "SqlShardMap",
    SqlServer: "SqlServer",
} as const;

export type JobTargetType = (typeof JobTargetType)[keyof typeof JobTargetType];

export const ManagedDatabaseCreateMode = {
    Default: "Default",
    RestoreExternalBackup: "RestoreExternalBackup",
    PointInTimeRestore: "PointInTimeRestore",
    Recovery: "Recovery",
    RestoreLongTermRetentionBackup: "RestoreLongTermRetentionBackup",
} as const;

export type ManagedDatabaseCreateMode = (typeof ManagedDatabaseCreateMode)[keyof typeof ManagedDatabaseCreateMode];

export const ManagedInstanceAdministratorType = {
    ActiveDirectory: "ActiveDirectory",
} as const;

export type ManagedInstanceAdministratorType = (typeof ManagedInstanceAdministratorType)[keyof typeof ManagedInstanceAdministratorType];

export const ManagedInstanceLicenseType = {
    LicenseIncluded: "LicenseIncluded",
    BasePrice: "BasePrice",
} as const;

export type ManagedInstanceLicenseType = (typeof ManagedInstanceLicenseType)[keyof typeof ManagedInstanceLicenseType];

export const ManagedInstanceProxyOverride = {
    Proxy: "Proxy",
    Redirect: "Redirect",
    Default: "Default",
} as const;

export type ManagedInstanceProxyOverride = (typeof ManagedInstanceProxyOverride)[keyof typeof ManagedInstanceProxyOverride];

export const ManagedServerCreateMode = {
    Default: "Default",
    PointInTimeRestore: "PointInTimeRestore",
} as const;

export type ManagedServerCreateMode = (typeof ManagedServerCreateMode)[keyof typeof ManagedServerCreateMode];

export const PrincipalType = {
    User: "User",
    Group: "Group",
    Application: "Application",
} as const;

export type PrincipalType = (typeof PrincipalType)[keyof typeof PrincipalType];

export const PrivateLinkServiceConnectionStateStatus = {
    Approved: "Approved",
    Pending: "Pending",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
} as const;

export type PrivateLinkServiceConnectionStateStatus = (typeof PrivateLinkServiceConnectionStateStatus)[keyof typeof PrivateLinkServiceConnectionStateStatus];

export const ReadOnlyEndpointFailoverPolicy = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type ReadOnlyEndpointFailoverPolicy = (typeof ReadOnlyEndpointFailoverPolicy)[keyof typeof ReadOnlyEndpointFailoverPolicy];

export const ReadWriteEndpointFailoverPolicy = {
    Manual: "Manual",
    Automatic: "Automatic",
} as const;

export type ReadWriteEndpointFailoverPolicy = (typeof ReadWriteEndpointFailoverPolicy)[keyof typeof ReadWriteEndpointFailoverPolicy];

export const ReplicationMode = {
    Async: "Async",
    Sync: "Sync",
} as const;

export type ReplicationMode = (typeof ReplicationMode)[keyof typeof ReplicationMode];

export const SampleName = {
    AdventureWorksLT: "AdventureWorksLT",
    WideWorldImportersStd: "WideWorldImportersStd",
    WideWorldImportersFull: "WideWorldImportersFull",
} as const;

export type SampleName = (typeof SampleName)[keyof typeof SampleName];

export const SecondaryInstanceType = {
    Geo: "Geo",
    Standby: "Standby",
} as const;

export type SecondaryInstanceType = (typeof SecondaryInstanceType)[keyof typeof SecondaryInstanceType];

export const SecondaryType = {
    Geo: "Geo",
    Named: "Named",
    Standby: "Standby",
} as const;

export type SecondaryType = (typeof SecondaryType)[keyof typeof SecondaryType];

export const SecurityAlertsPolicyState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type SecurityAlertsPolicyState = (typeof SecurityAlertsPolicyState)[keyof typeof SecurityAlertsPolicyState];

export const SensitivityLabelRank = {
    None: "None",
    Low: "Low",
    Medium: "Medium",
    High: "High",
    Critical: "Critical",
} as const;

export type SensitivityLabelRank = (typeof SensitivityLabelRank)[keyof typeof SensitivityLabelRank];

export const ServerKeyType = {
    ServiceManaged: "ServiceManaged",
    AzureKeyVault: "AzureKeyVault",
} as const;

export type ServerKeyType = (typeof ServerKeyType)[keyof typeof ServerKeyType];

export const ServerNetworkAccessFlag = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type ServerNetworkAccessFlag = (typeof ServerNetworkAccessFlag)[keyof typeof ServerNetworkAccessFlag];

export const ServerPublicNetworkAccessFlag = {
    Enabled: "Enabled",
    Disabled: "Disabled",
    SecuredByPerimeter: "SecuredByPerimeter",
} as const;

export type ServerPublicNetworkAccessFlag = (typeof ServerPublicNetworkAccessFlag)[keyof typeof ServerPublicNetworkAccessFlag];

export const ServicePrincipalType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
} as const;

export type ServicePrincipalType = (typeof ServicePrincipalType)[keyof typeof ServicePrincipalType];

export const SqlVulnerabilityAssessmentState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type SqlVulnerabilityAssessmentState = (typeof SqlVulnerabilityAssessmentState)[keyof typeof SqlVulnerabilityAssessmentState];

export const SyncConflictResolutionPolicy = {
    HubWin: "HubWin",
    MemberWin: "MemberWin",
} as const;

export type SyncConflictResolutionPolicy = (typeof SyncConflictResolutionPolicy)[keyof typeof SyncConflictResolutionPolicy];

export const SyncDirection = {
    Bidirectional: "Bidirectional",
    OneWayMemberToHub: "OneWayMemberToHub",
    OneWayHubToMember: "OneWayHubToMember",
} as const;

export type SyncDirection = (typeof SyncDirection)[keyof typeof SyncDirection];

export const SyncMemberDbType = {
    AzureSqlDatabase: "AzureSqlDatabase",
    SqlServerDatabase: "SqlServerDatabase",
} as const;

export type SyncMemberDbType = (typeof SyncMemberDbType)[keyof typeof SyncMemberDbType];

export const TransparentDataEncryptionState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type TransparentDataEncryptionState = (typeof TransparentDataEncryptionState)[keyof typeof TransparentDataEncryptionState];