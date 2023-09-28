export const CreateMode = {
    Default: "Default",
    PointInTimeRestore: "PointInTimeRestore",
    Recovery: "Recovery",
    Restore: "Restore",
} as const;

/**
 * Specifies the mode of sql pool creation.
 *
 * Default: regular sql pool creation.
 *
 * PointInTimeRestore: Creates a sql pool by restoring a point in time backup of an existing sql pool. sourceDatabaseId must be specified as the resource ID of the existing sql pool, and restorePointInTime must be specified.
 *
 * Recovery: Creates a sql pool by a geo-replicated backup. sourceDatabaseId  must be specified as the recoverableDatabaseId to restore.
 *
 * Restore: Creates a sql pool by restoring a backup of a deleted sql  pool. SourceDatabaseId should be the sql pool's original resource ID. SourceDatabaseId and sourceDatabaseDeletionDate must be specified.
 */
export type CreateMode = (typeof CreateMode)[keyof typeof CreateMode];

export const NodeSize = {
    None: "None",
    Small: "Small",
    Medium: "Medium",
    Large: "Large",
    XLarge: "XLarge",
    XXLarge: "XXLarge",
    XXXLarge: "XXXLarge",
} as const;

/**
 * The level of compute power that each node in the Big Data pool has.
 */
export type NodeSize = (typeof NodeSize)[keyof typeof NodeSize];

export const NodeSizeFamily = {
    None: "None",
    MemoryOptimized: "MemoryOptimized",
    HardwareAcceleratedFPGA: "HardwareAcceleratedFPGA",
    HardwareAcceleratedGPU: "HardwareAcceleratedGPU",
} as const;

/**
 * The kind of nodes that the Big Data pool provides.
 */
export type NodeSizeFamily = (typeof NodeSizeFamily)[keyof typeof NodeSizeFamily];

export const ResourceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

/**
 * The type of managed identity for the workspace
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const StorageAccountType = {
    GRS: "GRS",
    LRS: "LRS",
    ZRS: "ZRS",
} as const;

/**
 * The storage account type used to store backups for this sql pool.
 */
export type StorageAccountType = (typeof StorageAccountType)[keyof typeof StorageAccountType];

export const WorkspacePublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Enable or Disable public network access to workspace
 */
export type WorkspacePublicNetworkAccess = (typeof WorkspacePublicNetworkAccess)[keyof typeof WorkspacePublicNetworkAccess];
