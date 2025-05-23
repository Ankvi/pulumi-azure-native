export const ActiveDirectoryAuth = {
    Enabled: "enabled",
    Disabled: "disabled",
} as const;

export type ActiveDirectoryAuth = (typeof ActiveDirectoryAuth)[keyof typeof ActiveDirectoryAuth];

export const ActiveDirectoryAuthEnum = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * If Enabled, Azure Active Directory authentication is enabled.
 */
export type ActiveDirectoryAuthEnum = (typeof ActiveDirectoryAuthEnum)[keyof typeof ActiveDirectoryAuthEnum];

export const AdministratorType = {
    ActiveDirectory: "ActiveDirectory",
} as const;

/**
 * The type of administrator.
 */
export type AdministratorType = (typeof AdministratorType)[keyof typeof AdministratorType];

export const ArmServerKeyType = {
    SystemManaged: "SystemManaged",
    AzureKeyVault: "AzureKeyVault",
} as const;

/**
 * Data encryption type to depict if it is System Managed vs Azure Key vault.
 */
export type ArmServerKeyType = (typeof ArmServerKeyType)[keyof typeof ArmServerKeyType];

export const AzureManagedDiskPerformanceTiers = {
    P1: "P1",
    P2: "P2",
    P3: "P3",
    P4: "P4",
    P6: "P6",
    P10: "P10",
    P15: "P15",
    P20: "P20",
    P30: "P30",
    P40: "P40",
    P50: "P50",
    P60: "P60",
    P70: "P70",
    P80: "P80",
} as const;

/**
 * Name of storage tier for IOPS.
 */
export type AzureManagedDiskPerformanceTiers = (typeof AzureManagedDiskPerformanceTiers)[keyof typeof AzureManagedDiskPerformanceTiers];

export const CancelEnum = {
    True: "True",
    False: "False",
} as const;

/**
 * To trigger cancel for entire migration we need to send this flag as True
 */
export type CancelEnum = (typeof CancelEnum)[keyof typeof CancelEnum];

export const CreateMode = {
    Default: "Default",
    Create: "Create",
    Update: "Update",
    PointInTimeRestore: "PointInTimeRestore",
    GeoRestore: "GeoRestore",
    Replica: "Replica",
    ReviveDropped: "ReviveDropped",
} as const;

/**
 * The mode to create a new PostgreSQL server.
 */
export type CreateMode = (typeof CreateMode)[keyof typeof CreateMode];

export const DataEncryptionType = {
    AzureKeyVault: "AzureKeyVault",
    SystemAssigned: "SystemAssigned",
} as const;

export type DataEncryptionType = (typeof DataEncryptionType)[keyof typeof DataEncryptionType];

export const GeoRedundantBackup = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Enable Geo-redundant or not for server backup.
 */
export type GeoRedundantBackup = (typeof GeoRedundantBackup)[keyof typeof GeoRedundantBackup];

export const GeoRedundantBackupEnum = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * A value indicating whether Geo-Redundant backup is enabled on the server.
 */
export type GeoRedundantBackupEnum = (typeof GeoRedundantBackupEnum)[keyof typeof GeoRedundantBackupEnum];

export const HighAvailabilityMode = {
    Disabled: "Disabled",
    ZoneRedundant: "ZoneRedundant",
    SameZone: "SameZone",
} as const;

/**
 * The HA mode for the server.
 */
export type HighAvailabilityMode = (typeof HighAvailabilityMode)[keyof typeof HighAvailabilityMode];

export const IdentityType = {
    UserAssigned: "UserAssigned",
    SystemAssigned: "SystemAssigned",
} as const;

export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const InfrastructureEncryption = {
    /**
     * Default value for single layer of encryption for data at rest.
     */
    Enabled: "Enabled",
    /**
     * Additional (2nd) layer of encryption for data at rest
     */
    Disabled: "Disabled",
} as const;

/**
 * Status showing whether the server enabled infrastructure encryption.
 */
export type InfrastructureEncryption = (typeof InfrastructureEncryption)[keyof typeof InfrastructureEncryption];

export const KeyStatusEnum = {
    Valid: "Valid",
    Invalid: "Invalid",
} as const;

/**
 * Primary encryption key status for Data encryption enabled server.
 */
export type KeyStatusEnum = (typeof KeyStatusEnum)[keyof typeof KeyStatusEnum];

export const LogicalReplicationOnSourceDbEnum = {
    True: "True",
    False: "False",
} as const;

/**
 * Indicates whether to setup LogicalReplicationOnSourceDb, if needed
 */
export type LogicalReplicationOnSourceDbEnum = (typeof LogicalReplicationOnSourceDbEnum)[keyof typeof LogicalReplicationOnSourceDbEnum];

export const MigrateRolesEnum = {
    True: "True",
    False: "False",
} as const;

/**
 * To migrate roles and permissions we need to send this flag as True
 */
export type MigrateRolesEnum = (typeof MigrateRolesEnum)[keyof typeof MigrateRolesEnum];

export const MigrationMode = {
    Offline: "Offline",
    Online: "Online",
} as const;

/**
 * There are two types of migration modes Online and Offline
 */
export type MigrationMode = (typeof MigrationMode)[keyof typeof MigrationMode];

export const MigrationOption = {
    Validate: "Validate",
    Migrate: "Migrate",
    ValidateAndMigrate: "ValidateAndMigrate",
} as const;

/**
 * This indicates the supported Migration option for the migration
 */
export type MigrationOption = (typeof MigrationOption)[keyof typeof MigrationOption];

export const MinimalTlsVersionEnum = {
    TLS1_0: "TLS1_0",
    TLS1_1: "TLS1_1",
    TLS1_2: "TLS1_2",
    TLSEnforcementDisabled: "TLSEnforcementDisabled",
} as const;

/**
 * Enforce a minimal Tls version for the server.
 */
export type MinimalTlsVersionEnum = (typeof MinimalTlsVersionEnum)[keyof typeof MinimalTlsVersionEnum];

export const OverwriteDbsInTargetEnum = {
    True: "True",
    False: "False",
} as const;

/**
 * Indicates whether the databases on the target server can be overwritten, if already present. If set to False, the migration workflow will wait for a confirmation, if it detects that the database already exists.
 */
export type OverwriteDbsInTargetEnum = (typeof OverwriteDbsInTargetEnum)[keyof typeof OverwriteDbsInTargetEnum];

export const PasswordAuth = {
    Enabled: "enabled",
    Disabled: "disabled",
} as const;

export type PasswordAuth = (typeof PasswordAuth)[keyof typeof PasswordAuth];

export const PasswordAuthEnum = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * If Enabled, Password authentication is enabled.
 */
export type PasswordAuthEnum = (typeof PasswordAuthEnum)[keyof typeof PasswordAuthEnum];

export const PrincipalType = {
    User: "user",
    ServicePrincipal: "servicePrincipal",
    Group: "group",
} as const;

export type PrincipalType = (typeof PrincipalType)[keyof typeof PrincipalType];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

/**
 * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
 */
export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const PublicNetworkAccessEnum = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Whether or not public network access is allowed for this server. Value is optional but if passed in, must be 'Enabled' or 'Disabled'
 */
export type PublicNetworkAccessEnum = (typeof PublicNetworkAccessEnum)[keyof typeof PublicNetworkAccessEnum];

export const ReadReplicaPromoteMode = {
    Standalone: "standalone",
    Switchover: "switchover",
} as const;

/**
 * Sets the promote mode for a replica server. This is a write only property.
 */
export type ReadReplicaPromoteMode = (typeof ReadReplicaPromoteMode)[keyof typeof ReadReplicaPromoteMode];

export const ReplicationPromoteOption = {
    Planned: "planned",
    Forced: "forced",
} as const;

/**
 * Sets the promote options for a replica server. This is a write only property.
 */
export type ReplicationPromoteOption = (typeof ReplicationPromoteOption)[keyof typeof ReplicationPromoteOption];

export const ReplicationRole = {
    None: "None",
    Primary: "Primary",
    AsyncReplica: "AsyncReplica",
    GeoAsyncReplica: "GeoAsyncReplica",
} as const;

/**
 * Replication role of the server
 */
export type ReplicationRole = (typeof ReplicationRole)[keyof typeof ReplicationRole];

export const RoleType = {
    User: "user",
    Admin: "admin",
} as const;

export type RoleType = (typeof RoleType)[keyof typeof RoleType];

export const ServerPublicNetworkAccessState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * public network access is enabled or not
 */
export type ServerPublicNetworkAccessState = (typeof ServerPublicNetworkAccessState)[keyof typeof ServerPublicNetworkAccessState];

export const ServerSecurityAlertPolicyState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Specifies the state of the policy, whether it is enabled or disabled.
 */
export type ServerSecurityAlertPolicyState = (typeof ServerSecurityAlertPolicyState)[keyof typeof ServerSecurityAlertPolicyState];

export const ServerVersion = {
    ServerVersion_16: "16",
    ServerVersion_15: "15",
    ServerVersion_14: "14",
    ServerVersion_13: "13",
    ServerVersion_12: "12",
    ServerVersion_11: "11",
} as const;

/**
 * PostgreSQL Server version.
 */
export type ServerVersion = (typeof ServerVersion)[keyof typeof ServerVersion];

export const SingleServerCreateMode = {
    Default: "Default",
    PointInTimeRestore: "PointInTimeRestore",
    GeoRestore: "GeoRestore",
    Replica: "Replica",
} as const;

/**
 * The mode to create a new server.
 */
export type SingleServerCreateMode = (typeof SingleServerCreateMode)[keyof typeof SingleServerCreateMode];

export const SingleServerIdentityProperties = {
    SystemAssigned: "SystemAssigned",
} as const;

/**
 * The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource.
 */
export type SingleServerIdentityProperties = (typeof SingleServerIdentityProperties)[keyof typeof SingleServerIdentityProperties];

export const SingleServerSkuTier = {
    Basic: "Basic",
    GeneralPurpose: "GeneralPurpose",
    MemoryOptimized: "MemoryOptimized",
} as const;

/**
 * The tier of the particular SKU, e.g. Basic.
 */
export type SingleServerSkuTier = (typeof SingleServerSkuTier)[keyof typeof SingleServerSkuTier];

export const SingleServerVersion = {
    SingleServerVersion_9_5: "9.5",
    SingleServerVersion_9_6: "9.6",
    SingleServerVersion_10: "10",
    SingleServerVersion_10_0: "10.0",
    SingleServerVersion_10_2: "10.2",
    SingleServerVersion_11: "11",
} as const;

/**
 * Server version.
 */
export type SingleServerVersion = (typeof SingleServerVersion)[keyof typeof SingleServerVersion];

export const SkuTier = {
    Burstable: "Burstable",
    GeneralPurpose: "GeneralPurpose",
    MemoryOptimized: "MemoryOptimized",
} as const;

/**
 * The tier of the particular SKU, e.g. Burstable.
 */
export type SkuTier = (typeof SkuTier)[keyof typeof SkuTier];

export const SourceType = {
    OnPremises: "OnPremises",
    AWS: "AWS",
    GCP: "GCP",
    AzureVM: "AzureVM",
    PostgreSQLSingleServer: "PostgreSQLSingleServer",
    AWS_RDS: "AWS_RDS",
    AWS_AURORA: "AWS_AURORA",
    AWS_EC2: "AWS_EC2",
    GCP_CloudSQL: "GCP_CloudSQL",
    GCP_AlloyDB: "GCP_AlloyDB",
    GCP_Compute: "GCP_Compute",
    EDB: "EDB",
} as const;

/**
 * migration source server type : OnPremises, AWS, GCP, AzureVM, PostgreSQLSingleServer, AWS_RDS, AWS_AURORA, AWS_EC2, GCP_CloudSQL, GCP_AlloyDB, GCP_Compute, or EDB
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];

export const SslEnforcementEnum = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Enable ssl enforcement or not when connect to server.
 */
export type SslEnforcementEnum = (typeof SslEnforcementEnum)[keyof typeof SslEnforcementEnum];

export const SslMode = {
    Prefer: "Prefer",
    Require: "Require",
    VerifyCA: "VerifyCA",
    VerifyFull: "VerifyFull",
} as const;

/**
 * SSL modes for migration. Default SSL mode for PostgreSQLSingleServer is VerifyFull and Prefer for other source types
 */
export type SslMode = (typeof SslMode)[keyof typeof SslMode];

export const StartDataMigrationEnum = {
    True: "True",
    False: "False",
} as const;

/**
 * Indicates whether the data migration should start right away
 */
export type StartDataMigrationEnum = (typeof StartDataMigrationEnum)[keyof typeof StartDataMigrationEnum];

export const StorageAutoGrow = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Flag to enable / disable Storage Auto grow for flexible server.
 */
export type StorageAutoGrow = (typeof StorageAutoGrow)[keyof typeof StorageAutoGrow];

export const StorageAutogrow = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Enable Storage Auto Grow.
 */
export type StorageAutogrow = (typeof StorageAutogrow)[keyof typeof StorageAutogrow];

export const StorageType = {
    Premium_LRS: "Premium_LRS",
    PremiumV2_LRS: "PremiumV2_LRS",
} as const;

/**
 * Storage type for the server. Allowed values are Premium_LRS and PremiumV2_LRS, and default is Premium_LRS if not specified
 */
export type StorageType = (typeof StorageType)[keyof typeof StorageType];

export const TriggerCutoverEnum = {
    True: "True",
    False: "False",
} as const;

/**
 * To trigger cutover for entire migration we need to send this flag as True
 */
export type TriggerCutoverEnum = (typeof TriggerCutoverEnum)[keyof typeof TriggerCutoverEnum];

export const VirtualEndpointType = {
    ReadWrite: "ReadWrite",
} as const;

/**
 * The endpoint type for the virtual endpoint.
 */
export type VirtualEndpointType = (typeof VirtualEndpointType)[keyof typeof VirtualEndpointType];
