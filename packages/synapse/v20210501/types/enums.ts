export const CreateMode = {
    Default: "Default",
    PointInTimeRestore: "PointInTimeRestore",
    Recovery: "Recovery",
    Restore: "Restore",
} as const;

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

export type NodeSize = (typeof NodeSize)[keyof typeof NodeSize];

export const NodeSizeFamily = {
    None: "None",
    MemoryOptimized: "MemoryOptimized",
    HardwareAcceleratedFPGA: "HardwareAcceleratedFPGA",
    HardwareAcceleratedGPU: "HardwareAcceleratedGPU",
} as const;

export type NodeSizeFamily = (typeof NodeSizeFamily)[keyof typeof NodeSizeFamily];

export const ResourceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const StorageAccountType = {
    GRS: "GRS",
    LRS: "LRS",
    ZRS: "ZRS",
} as const;

export type StorageAccountType = (typeof StorageAccountType)[keyof typeof StorageAccountType];

export const WorkspacePublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type WorkspacePublicNetworkAccess = (typeof WorkspacePublicNetworkAccess)[keyof typeof WorkspacePublicNetworkAccess];
