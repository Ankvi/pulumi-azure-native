export const AdministratorType = {
    ActiveDirectory: "ActiveDirectory",
} as const;

/**
 * Type of the sever administrator.
 */
export type AdministratorType = (typeof AdministratorType)[keyof typeof AdministratorType];

export const AlwaysEncryptedEnclaveType = {
    Default: "Default",
    VBS: "VBS",
} as const;

/**
 * Type of enclave requested on the elastic pool.
 */
export type AlwaysEncryptedEnclaveType = (typeof AlwaysEncryptedEnclaveType)[keyof typeof AlwaysEncryptedEnclaveType];

export const AuthMetadataLookupModes = {
    AzureAD: "AzureAD",
    Paired: "Paired",
    Windows: "Windows",
} as const;

/**
 * The managed instance's authentication metadata lookup mode.
 */
export type AuthMetadataLookupModes = (typeof AuthMetadataLookupModes)[keyof typeof AuthMetadataLookupModes];

export const AutoExecuteStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
    Default: "Default",
} as const;

/**
 * Gets the auto-execute status (whether to let the system execute the recommendations) of this advisor. Possible values are 'Enabled' and 'Disabled'
 */
export type AutoExecuteStatus = (typeof AutoExecuteStatus)[keyof typeof AutoExecuteStatus];

export const AvailabilityZoneType = {
    NoPreference: "NoPreference",
    One: "1",
    Two: "2",
    Three: "3",
} as const;

/**
 * Specifies the availability zone the pool's primary replica is pinned to.
 */
export type AvailabilityZoneType = (typeof AvailabilityZoneType)[keyof typeof AvailabilityZoneType];

export const BackupStorageAccessTier = {
    Hot: "Hot",
    Archive: "Archive",
} as const;

/**
 * The BackupStorageAccessTier for the LTR backups
 */
export type BackupStorageAccessTier = (typeof BackupStorageAccessTier)[keyof typeof BackupStorageAccessTier];

export const BackupStorageRedundancy = {
    Geo: "Geo",
    Local: "Local",
    Zone: "Zone",
    GeoZone: "GeoZone",
} as const;

/**
 * The storage account type to be used to store backups for this instance. The options are Local (LocallyRedundantStorage), Zone (ZoneRedundantStorage), Geo (GeoRedundantStorage) and GeoZone(GeoZoneRedundantStorage)
 */
export type BackupStorageRedundancy = (typeof BackupStorageRedundancy)[keyof typeof BackupStorageRedundancy];

export const BlobAuditingPolicyState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Specifies the state of the audit. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required.
 */
export type BlobAuditingPolicyState = (typeof BlobAuditingPolicyState)[keyof typeof BlobAuditingPolicyState];

export const CatalogCollationType = {
    DATABASE_DEFAULT: "DATABASE_DEFAULT",
    SQL_Latin1_General_CP1_CI_AS: "SQL_Latin1_General_CP1_CI_AS",
} as const;

/**
 * Collation of the metadata catalog.
 */
export type CatalogCollationType = (typeof CatalogCollationType)[keyof typeof CatalogCollationType];

export const ClientClassificationSource = {
    None: "None",
    Native: "Native",
    Recommended: "Recommended",
    MIP: "MIP",
} as const;

export type ClientClassificationSource = (typeof ClientClassificationSource)[keyof typeof ClientClassificationSource];

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

/**
 * Specifies the mode of database creation.
 * 
 * Default: regular database creation.
 * 
 * Copy: creates a database as a copy of an existing database. sourceDatabaseId must be specified as the resource ID of the source database.
 * 
 * Secondary: creates a database as a secondary replica of an existing database. sourceDatabaseId must be specified as the resource ID of the existing primary database.
 * 
 * PointInTimeRestore: Creates a database by restoring a point in time backup of an existing database. sourceDatabaseId must be specified as the resource ID of the existing database, and restorePointInTime must be specified.
 * 
 * Recovery: Creates a database by restoring a geo-replicated backup. sourceDatabaseId must be specified as the recoverable database resource ID to restore.
 * 
 * Restore: Creates a database by restoring a backup of a deleted database. sourceDatabaseId must be specified. If sourceDatabaseId is the database's original resource ID, then sourceDatabaseDeletionDate must be specified. Otherwise sourceDatabaseId must be the restorable dropped database resource ID and sourceDatabaseDeletionDate is ignored. restorePointInTime may also be specified to restore from an earlier point in time.
 * 
 * RestoreLongTermRetentionBackup: Creates a database by restoring from a long term retention vault. recoveryServicesRecoveryPointResourceId must be specified as the recovery point resource ID.
 * 
 * Copy, Secondary, and RestoreLongTermRetentionBackup are not supported for DataWarehouse edition.
 */
export type CreateMode = (typeof CreateMode)[keyof typeof CreateMode];

export const DataMaskingState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * The state of the data masking policy.
 */
export type DataMaskingState = (typeof DataMaskingState)[keyof typeof DataMaskingState];

export const DatabaseIdentityType = {
    None: "None",
    UserAssigned: "UserAssigned",
} as const;

/**
 * The identity type
 */
export type DatabaseIdentityType = (typeof DatabaseIdentityType)[keyof typeof DatabaseIdentityType];

export const DatabaseLicenseType = {
    LicenseIncluded: "LicenseIncluded",
    BasePrice: "BasePrice",
} as const;

/**
 * The license type to apply for this database. `LicenseIncluded` if you need a license, or `BasePrice` if you have a license and are eligible for the Azure Hybrid Benefit.
 */
export type DatabaseLicenseType = (typeof DatabaseLicenseType)[keyof typeof DatabaseLicenseType];

export const DatabaseReadScale = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * The state of read-only routing. If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica in the same region. Not applicable to a Hyperscale database within an elastic pool.
 */
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

/**
 * Stop day.
 */
export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];

export const ElasticPoolLicenseType = {
    LicenseIncluded: "LicenseIncluded",
    BasePrice: "BasePrice",
} as const;

/**
 * The license type to apply for this elastic pool.
 */
export type ElasticPoolLicenseType = (typeof ElasticPoolLicenseType)[keyof typeof ElasticPoolLicenseType];

export const FailoverGroupDatabasesSecondaryType = {
    Geo: "Geo",
    Standby: "Standby",
} as const;

/**
 * Databases secondary type on partner server.
 */
export type FailoverGroupDatabasesSecondaryType = (typeof FailoverGroupDatabasesSecondaryType)[keyof typeof FailoverGroupDatabasesSecondaryType];

export const FailoverModeType = {
    None: "None",
    Manual: "Manual",
} as const;

/**
 * The link failover mode - can be Manual if intended to be used for two-way failover with a supported SQL Server, or None for one-way failover to Azure.
 */
export type FailoverModeType = (typeof FailoverModeType)[keyof typeof FailoverModeType];

export const FreeLimitExhaustionBehavior = {
    AutoPause: "AutoPause",
    BillOverUsage: "BillOverUsage",
} as const;

/**
 * Specifies the behavior when monthly free limits are exhausted for the free database.
 * 
 * AutoPause: The database will be auto paused upon exhaustion of free limits for remainder of the month.
 * 
 * BillForUsage: The database will continue to be online upon exhaustion of free limits and any overage will be billed.
 */
export type FreeLimitExhaustionBehavior = (typeof FreeLimitExhaustionBehavior)[keyof typeof FreeLimitExhaustionBehavior];

export const FreemiumType = {
    Regular: "Regular",
    Freemium: "Freemium",
} as const;

/**
 * Weather or not Managed Instance is freemium.
 */
export type FreemiumType = (typeof FreemiumType)[keyof typeof FreemiumType];

export const GeoBackupPolicyState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * The state of the geo backup policy.
 */
export type GeoBackupPolicyState = (typeof GeoBackupPolicyState)[keyof typeof GeoBackupPolicyState];

export const HybridSecondaryUsage = {
    Active: "Active",
    Passive: "Passive",
} as const;

/**
 * Hybrid secondary usage. Possible values are 'Active' (default value) and 'Passive' (customer uses the secondary as Passive DR).
 */
export type HybridSecondaryUsage = (typeof HybridSecondaryUsage)[keyof typeof HybridSecondaryUsage];

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

export const InstancePoolLicenseType = {
    LicenseIncluded: "LicenseIncluded",
    BasePrice: "BasePrice",
} as const;

/**
 * The license type. Possible values are 'LicenseIncluded' (price for SQL license is included) and 'BasePrice' (without SQL license price).
 */
export type InstancePoolLicenseType = (typeof InstancePoolLicenseType)[keyof typeof InstancePoolLicenseType];

export const JobAgentIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssignedUserAssigned: "SystemAssignedUserAssigned",
} as const;

/**
 * The job agent identity type
 */
export type JobAgentIdentityType = (typeof JobAgentIdentityType)[keyof typeof JobAgentIdentityType];

export const JobScheduleType = {
    Once: "Once",
    Recurring: "Recurring",
} as const;

/**
 * Schedule interval type
 */
export type JobScheduleType = (typeof JobScheduleType)[keyof typeof JobScheduleType];

export const JobStepActionSource = {
    Inline: "Inline",
} as const;

/**
 * The source of the action to execute.
 */
export type JobStepActionSource = (typeof JobStepActionSource)[keyof typeof JobStepActionSource];

export const JobStepActionType = {
    TSql: "TSql",
} as const;

/**
 * Type of action being executed by the job step.
 */
export type JobStepActionType = (typeof JobStepActionType)[keyof typeof JobStepActionType];

export const JobStepOutputType = {
    SqlDatabase: "SqlDatabase",
} as const;

/**
 * The output destination type.
 */
export type JobStepOutputType = (typeof JobStepOutputType)[keyof typeof JobStepOutputType];

export const JobTargetGroupMembershipType = {
    Include: "Include",
    Exclude: "Exclude",
} as const;

/**
 * Whether the target is included or excluded from the group.
 */
export type JobTargetGroupMembershipType = (typeof JobTargetGroupMembershipType)[keyof typeof JobTargetGroupMembershipType];

export const JobTargetType = {
    TargetGroup: "TargetGroup",
    SqlDatabase: "SqlDatabase",
    SqlElasticPool: "SqlElasticPool",
    SqlShardMap: "SqlShardMap",
    SqlServer: "SqlServer",
} as const;

/**
 * The target type.
 */
export type JobTargetType = (typeof JobTargetType)[keyof typeof JobTargetType];

export const LinkRole = {
    Primary: "Primary",
    Secondary: "Secondary",
} as const;

/**
 * Managed instance side link role
 */
export type LinkRole = (typeof LinkRole)[keyof typeof LinkRole];

export const ManagedDatabaseCreateMode = {
    Default: "Default",
    RestoreExternalBackup: "RestoreExternalBackup",
    PointInTimeRestore: "PointInTimeRestore",
    Recovery: "Recovery",
    RestoreLongTermRetentionBackup: "RestoreLongTermRetentionBackup",
} as const;

/**
 * Managed database create mode. PointInTimeRestore: Create a database by restoring a point in time backup of an existing database. SourceDatabaseName, SourceManagedInstanceName and PointInTime must be specified. RestoreExternalBackup: Create a database by restoring from external backup files. Collation, StorageContainerUri and StorageContainerSasToken must be specified. Recovery: Creates a database by restoring a geo-replicated backup. RecoverableDatabaseId must be specified as the recoverable database resource ID to restore. RestoreLongTermRetentionBackup: Create a database by restoring from a long term retention backup (longTermRetentionBackupResourceId required).
 */
export type ManagedDatabaseCreateMode = (typeof ManagedDatabaseCreateMode)[keyof typeof ManagedDatabaseCreateMode];

export const ManagedInstanceAdministratorType = {
    ActiveDirectory: "ActiveDirectory",
} as const;

/**
 * Type of the managed instance administrator.
 */
export type ManagedInstanceAdministratorType = (typeof ManagedInstanceAdministratorType)[keyof typeof ManagedInstanceAdministratorType];

export const ManagedInstanceDatabaseFormat = {
    AlwaysUpToDate: "AlwaysUpToDate",
    SQLServer2022: "SQLServer2022",
} as const;

/**
 * Specifies the internal format of instance databases specific to the SQL engine version.
 */
export type ManagedInstanceDatabaseFormat = (typeof ManagedInstanceDatabaseFormat)[keyof typeof ManagedInstanceDatabaseFormat];

export const ManagedInstanceLicenseType = {
    LicenseIncluded: "LicenseIncluded",
    BasePrice: "BasePrice",
} as const;

/**
 * The license type. Possible values are 'LicenseIncluded' (regular price inclusive of a new SQL license) and 'BasePrice' (discounted AHB price for bringing your own SQL licenses).
 */
export type ManagedInstanceLicenseType = (typeof ManagedInstanceLicenseType)[keyof typeof ManagedInstanceLicenseType];

export const ManagedInstanceProxyOverride = {
    Proxy: "Proxy",
    Redirect: "Redirect",
    Default: "Default",
} as const;

/**
 * Connection type used for connecting to the instance.
 */
export type ManagedInstanceProxyOverride = (typeof ManagedInstanceProxyOverride)[keyof typeof ManagedInstanceProxyOverride];

export const ManagedServerCreateMode = {
    Default: "Default",
    PointInTimeRestore: "PointInTimeRestore",
} as const;

/**
 * Specifies the mode of database creation.
 * 
 * Default: Regular instance creation.
 * 
 * Restore: Creates an instance by restoring a set of backups to specific point in time. RestorePointInTime and SourceManagedInstanceId must be specified.
 */
export type ManagedServerCreateMode = (typeof ManagedServerCreateMode)[keyof typeof ManagedServerCreateMode];

export const PrincipalType = {
    User: "User",
    Group: "Group",
    Application: "Application",
} as const;

/**
 * Principal Type of the sever administrator.
 */
export type PrincipalType = (typeof PrincipalType)[keyof typeof PrincipalType];

export const PrivateLinkServiceConnectionStateStatus = {
    Approved: "Approved",
    Pending: "Pending",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
} as const;

/**
 * The private link service connection status.
 */
export type PrivateLinkServiceConnectionStateStatus = (typeof PrivateLinkServiceConnectionStateStatus)[keyof typeof PrivateLinkServiceConnectionStateStatus];

export const ReadOnlyEndpointFailoverPolicy = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * Failover policy of the read-only endpoint for the failover group.
 */
export type ReadOnlyEndpointFailoverPolicy = (typeof ReadOnlyEndpointFailoverPolicy)[keyof typeof ReadOnlyEndpointFailoverPolicy];

export const ReadWriteEndpointFailoverPolicy = {
    Manual: "Manual",
    Automatic: "Automatic",
} as const;

/**
 * Failover policy of the read-write endpoint for the failover group. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required.
 */
export type ReadWriteEndpointFailoverPolicy = (typeof ReadWriteEndpointFailoverPolicy)[keyof typeof ReadWriteEndpointFailoverPolicy];

export const ReplicationLinkType = {
    GEO: "GEO",
    NAMED: "NAMED",
    STANDBY: "STANDBY",
} as const;

/**
 * Link type (GEO, NAMED, STANDBY). Update operation does not support NAMED.
 */
export type ReplicationLinkType = (typeof ReplicationLinkType)[keyof typeof ReplicationLinkType];

export const ReplicationModeType = {
    Async: "Async",
    Sync: "Sync",
} as const;

/**
 * Replication mode of the link
 */
export type ReplicationModeType = (typeof ReplicationModeType)[keyof typeof ReplicationModeType];

export const SampleName = {
    AdventureWorksLT: "AdventureWorksLT",
    WideWorldImportersStd: "WideWorldImportersStd",
    WideWorldImportersFull: "WideWorldImportersFull",
} as const;

/**
 * The name of the sample schema to apply when creating this database.
 */
export type SampleName = (typeof SampleName)[keyof typeof SampleName];

export const SecondaryInstanceType = {
    Geo: "Geo",
    Standby: "Standby",
} as const;

/**
 * Type of the geo-secondary instance. Set 'Standby' if the instance is used as a DR option only.
 */
export type SecondaryInstanceType = (typeof SecondaryInstanceType)[keyof typeof SecondaryInstanceType];

export const SecondaryType = {
    Geo: "Geo",
    Named: "Named",
    Standby: "Standby",
} as const;

/**
 * The secondary type of the database if it is a secondary.  Valid values are Geo, Named and Standby.
 */
export type SecondaryType = (typeof SecondaryType)[keyof typeof SecondaryType];

export const SecurityAlertsPolicyState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Specifies the state of the policy, whether it is enabled or disabled or a policy has not been applied yet on the specific database.
 */
export type SecurityAlertsPolicyState = (typeof SecurityAlertsPolicyState)[keyof typeof SecurityAlertsPolicyState];

export const SeedingModeType = {
    Automatic: "Automatic",
    Manual: "Manual",
} as const;

/**
 * Database seeding mode – can be Automatic (default), or Manual for supported scenarios.
 */
export type SeedingModeType = (typeof SeedingModeType)[keyof typeof SeedingModeType];

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

/**
 * The server key type like 'ServiceManaged', 'AzureKeyVault'.
 */
export type ServerKeyType = (typeof ServerKeyType)[keyof typeof ServerKeyType];

export const ServerNetworkAccessFlag = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Whether or not to restrict outbound network access for this server.  Value is optional but if passed in, must be 'Enabled' or 'Disabled'
 */
export type ServerNetworkAccessFlag = (typeof ServerNetworkAccessFlag)[keyof typeof ServerNetworkAccessFlag];

export const ServerPublicNetworkAccessFlag = {
    Enabled: "Enabled",
    Disabled: "Disabled",
    SecuredByPerimeter: "SecuredByPerimeter",
} as const;

/**
 * Whether or not public endpoint access is allowed for this server.  Value is optional but if passed in, must be 'Enabled' or 'Disabled' or 'SecuredByPerimeter'
 */
export type ServerPublicNetworkAccessFlag = (typeof ServerPublicNetworkAccessFlag)[keyof typeof ServerPublicNetworkAccessFlag];

export const ServicePrincipalType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
} as const;

/**
 * Service principal type.
 */
export type ServicePrincipalType = (typeof ServicePrincipalType)[keyof typeof ServicePrincipalType];

export const SqlVulnerabilityAssessmentState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Specifies the state of the SQL Vulnerability Assessment, whether it is enabled or disabled or a state has not been applied yet on the specific database or server.
 */
export type SqlVulnerabilityAssessmentState = (typeof SqlVulnerabilityAssessmentState)[keyof typeof SqlVulnerabilityAssessmentState];

export const SyncConflictResolutionPolicy = {
    HubWin: "HubWin",
    MemberWin: "MemberWin",
} as const;

/**
 * Conflict resolution policy of the sync group.
 */
export type SyncConflictResolutionPolicy = (typeof SyncConflictResolutionPolicy)[keyof typeof SyncConflictResolutionPolicy];

export const SyncDirection = {
    Bidirectional: "Bidirectional",
    OneWayMemberToHub: "OneWayMemberToHub",
    OneWayHubToMember: "OneWayHubToMember",
} as const;

/**
 * Sync direction of the sync member.
 */
export type SyncDirection = (typeof SyncDirection)[keyof typeof SyncDirection];

export const SyncMemberDbType = {
    AzureSqlDatabase: "AzureSqlDatabase",
    SqlServerDatabase: "SqlServerDatabase",
} as const;

/**
 * Database type of the sync member.
 */
export type SyncMemberDbType = (typeof SyncMemberDbType)[keyof typeof SyncMemberDbType];

export const TransparentDataEncryptionState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Specifies the state of the transparent data encryption.
 */
export type TransparentDataEncryptionState = (typeof TransparentDataEncryptionState)[keyof typeof TransparentDataEncryptionState];
