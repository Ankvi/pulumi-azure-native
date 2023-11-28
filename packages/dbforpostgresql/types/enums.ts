export const ActiveDirectoryAuthEnum = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * If Enabled, Azure Active Directory authentication is enabled.
 */
export type ActiveDirectoryAuthEnum = (typeof ActiveDirectoryAuthEnum)[keyof typeof ActiveDirectoryAuthEnum];

export const ArmServerKeyType = {
    SystemManaged: "SystemManaged",
    AzureKeyVault: "AzureKeyVault",
} as const;

/**
 * Data encryption type to depict if it is System Managed vs Azure Key vault.
 */
export type ArmServerKeyType = (typeof ArmServerKeyType)[keyof typeof ArmServerKeyType];

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
} as const;

/**
 * The mode to create a new PostgreSQL server.
 */
export type CreateMode = (typeof CreateMode)[keyof typeof CreateMode];

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
    None: "None",
    UserAssigned: "UserAssigned",
} as const;

/**
 * the types of identities associated with this resource; currently restricted to 'None and UserAssigned'
 */
export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const LogicalReplicationOnSourceDbEnum = {
    True: "True",
    False: "False",
} as const;

/**
 * Indicates whether to setup LogicalReplicationOnSourceDb, if needed
 */
export type LogicalReplicationOnSourceDbEnum = (typeof LogicalReplicationOnSourceDbEnum)[keyof typeof LogicalReplicationOnSourceDbEnum];

export const MigrationMode = {
    Offline: "Offline",
    Online: "Online",
} as const;

/**
 * There are two types of migration modes Online and Offline
 */
export type MigrationMode = (typeof MigrationMode)[keyof typeof MigrationMode];

export const OverwriteDbsInTargetEnum = {
    True: "True",
    False: "False",
} as const;

/**
 * Indicates whether the databases on the target server can be overwritten, if already present. If set to False, the migration workflow will wait for a confirmation, if it detects that the database already exists.
 */
export type OverwriteDbsInTargetEnum = (typeof OverwriteDbsInTargetEnum)[keyof typeof OverwriteDbsInTargetEnum];

export const PasswordAuthEnum = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * If Enabled, Password authentication is enabled.
 */
export type PasswordAuthEnum = (typeof PasswordAuthEnum)[keyof typeof PasswordAuthEnum];

export const PrincipalType = {
    Unknown: "Unknown",
    User: "User",
    Group: "Group",
    ServicePrincipal: "ServicePrincipal",
} as const;

/**
 * The principal type used to represent the type of Active Directory Administrator.
 */
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

export const ServerVersion = {
    ServerVersion_14: "14",
    ServerVersion_13: "13",
    ServerVersion_12: "12",
    ServerVersion_11: "11",
} as const;

/**
 * PostgreSQL Server version.
 */
export type ServerVersion = (typeof ServerVersion)[keyof typeof ServerVersion];

export const SkuTier = {
    Burstable: "Burstable",
    GeneralPurpose: "GeneralPurpose",
    MemoryOptimized: "MemoryOptimized",
} as const;

/**
 * The tier of the particular SKU, e.g. Burstable.
 */
export type SkuTier = (typeof SkuTier)[keyof typeof SkuTier];

export const StartDataMigrationEnum = {
    True: "True",
    False: "False",
} as const;

/**
 * Indicates whether the data migration should start right away
 */
export type StartDataMigrationEnum = (typeof StartDataMigrationEnum)[keyof typeof StartDataMigrationEnum];

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
