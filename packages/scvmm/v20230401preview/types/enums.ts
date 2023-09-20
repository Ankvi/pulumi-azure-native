export const AllocationMethod = {
    Dynamic: "Dynamic",
    Static: "Static",
} as const;

export type AllocationMethod = (typeof AllocationMethod)[keyof typeof AllocationMethod];

export const CreateDiffDisk = {
    False: "false",
    True: "true",
} as const;

export type CreateDiffDisk = (typeof CreateDiffDisk)[keyof typeof CreateDiffDisk];

export const DynamicMemoryEnabled = {
    False: "false",
    True: "true",
} as const;

export type DynamicMemoryEnabled = (typeof DynamicMemoryEnabled)[keyof typeof DynamicMemoryEnabled];

export const IdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
} as const;

export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const InventoryType = {
    Cloud: "Cloud",
    VirtualNetwork: "VirtualNetwork",
    VirtualMachineTemplate: "VirtualMachineTemplate",
    VirtualMachine: "VirtualMachine",
} as const;

export type InventoryType = (typeof InventoryType)[keyof typeof InventoryType];

export const LimitCpuForMigration = {
    False: "false",
    True: "true",
} as const;

export type LimitCpuForMigration = (typeof LimitCpuForMigration)[keyof typeof LimitCpuForMigration];

export const ProvisioningAction = {
    Install: "install",
    Uninstall: "uninstall",
    Repair: "repair",
} as const;

export type ProvisioningAction = (typeof ProvisioningAction)[keyof typeof ProvisioningAction];