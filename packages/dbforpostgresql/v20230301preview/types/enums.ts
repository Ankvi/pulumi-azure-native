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

export type AzureManagedDiskPerformanceTiers = (typeof AzureManagedDiskPerformanceTiers)[keyof typeof AzureManagedDiskPerformanceTiers];

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
    ReviveDropped: "ReviveDropped",
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

export const KeyStatusEnum = {
    Valid: "Valid",
    Invalid: "Invalid",
} as const;

export type KeyStatusEnum = (typeof KeyStatusEnum)[keyof typeof KeyStatusEnum];

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

export const ReplicationRole = {
    None: "None",
    Primary: "Primary",
    AsyncReplica: "AsyncReplica",
    GeoAsyncReplica: "GeoAsyncReplica",
} as const;

export type ReplicationRole = (typeof ReplicationRole)[keyof typeof ReplicationRole];

export const ServerVersion = {
    ServerVersion_15: "15",
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

export const StorageAutoGrow = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type StorageAutoGrow = (typeof StorageAutoGrow)[keyof typeof StorageAutoGrow];

export const TriggerCutoverEnum = {
    True: "True",
    False: "False",
} as const;

export type TriggerCutoverEnum = (typeof TriggerCutoverEnum)[keyof typeof TriggerCutoverEnum];
