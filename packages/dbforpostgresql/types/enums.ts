export const ActiveDirectoryAuthEnum = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type ActiveDirectoryAuthEnum = (typeof ActiveDirectoryAuthEnum)[keyof typeof ActiveDirectoryAuthEnum];

export const ArmServerKeyType = {
    SystemManaged: "SystemManaged",
    AzureKeyVault: "AzureKeyVault",
} as const;

export type ArmServerKeyType = (typeof ArmServerKeyType)[keyof typeof ArmServerKeyType];

export const CancelEnum = {
    True: "True",
    False: "False",
} as const;

export type CancelEnum = (typeof CancelEnum)[keyof typeof CancelEnum];

export const CreateMode = {
    Default: "Default",
    Create: "Create",
    Update: "Update",
    PointInTimeRestore: "PointInTimeRestore",
    GeoRestore: "GeoRestore",
    Replica: "Replica",
} as const;

export type CreateMode = (typeof CreateMode)[keyof typeof CreateMode];

export const GeoRedundantBackupEnum = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type GeoRedundantBackupEnum = (typeof GeoRedundantBackupEnum)[keyof typeof GeoRedundantBackupEnum];

export const HighAvailabilityMode = {
    Disabled: "Disabled",
    ZoneRedundant: "ZoneRedundant",
    SameZone: "SameZone",
} as const;

export type HighAvailabilityMode = (typeof HighAvailabilityMode)[keyof typeof HighAvailabilityMode];

export const IdentityType = {
    None: "None",
    UserAssigned: "UserAssigned",
} as const;

export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const LogicalReplicationOnSourceDbEnum = {
    True: "True",
    False: "False",
} as const;

export type LogicalReplicationOnSourceDbEnum = (typeof LogicalReplicationOnSourceDbEnum)[keyof typeof LogicalReplicationOnSourceDbEnum];

export const MigrationMode = {
    Offline: "Offline",
    Online: "Online",
} as const;

export type MigrationMode = (typeof MigrationMode)[keyof typeof MigrationMode];

export const OverwriteDbsInTargetEnum = {
    True: "True",
    False: "False",
} as const;

export type OverwriteDbsInTargetEnum = (typeof OverwriteDbsInTargetEnum)[keyof typeof OverwriteDbsInTargetEnum];

export const PasswordAuthEnum = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type PasswordAuthEnum = (typeof PasswordAuthEnum)[keyof typeof PasswordAuthEnum];

export const PrincipalType = {
    Unknown: "Unknown",
    User: "User",
    Group: "Group",
    ServicePrincipal: "ServicePrincipal",
} as const;

export type PrincipalType = (typeof PrincipalType)[keyof typeof PrincipalType];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const ReplicationRole = {
    None: "None",
    Primary: "Primary",
    AsyncReplica: "AsyncReplica",
    GeoAsyncReplica: "GeoAsyncReplica",
} as const;

export type ReplicationRole = (typeof ReplicationRole)[keyof typeof ReplicationRole];

export const ServerVersion = {
    ServerVersion_14: "14",
    ServerVersion_13: "13",
    ServerVersion_12: "12",
    ServerVersion_11: "11",
} as const;

export type ServerVersion = (typeof ServerVersion)[keyof typeof ServerVersion];

export const SkuTier = {
    Burstable: "Burstable",
    GeneralPurpose: "GeneralPurpose",
    MemoryOptimized: "MemoryOptimized",
} as const;

export type SkuTier = (typeof SkuTier)[keyof typeof SkuTier];

export const StartDataMigrationEnum = {
    True: "True",
    False: "False",
} as const;

export type StartDataMigrationEnum = (typeof StartDataMigrationEnum)[keyof typeof StartDataMigrationEnum];

export const TriggerCutoverEnum = {
    True: "True",
    False: "False",
} as const;

export type TriggerCutoverEnum = (typeof TriggerCutoverEnum)[keyof typeof TriggerCutoverEnum];
