export const AllocationMethod = {
    Dynamic: "Dynamic",
    Static: "Static",
} as const;

/**
 * Gets or sets the mac address type.
 */
export type AllocationMethod = (typeof AllocationMethod)[keyof typeof AllocationMethod];

export const CreateDiffDisk = {
    False: "false",
    True: "true",
} as const;

/**
 * Gets or sets a value indicating diff disk.
 */
export type CreateDiffDisk = (typeof CreateDiffDisk)[keyof typeof CreateDiffDisk];

export const DynamicMemoryEnabled = {
    False: "false",
    True: "true",
} as const;

/**
 * Gets or sets a value indicating whether to enable dynamic memory or not.
 */
export type DynamicMemoryEnabled = (typeof DynamicMemoryEnabled)[keyof typeof DynamicMemoryEnabled];

export const InventoryType = {
    Cloud: "Cloud",
    VirtualNetwork: "VirtualNetwork",
    VirtualMachineTemplate: "VirtualMachineTemplate",
    VirtualMachine: "VirtualMachine",
} as const;

/**
 * They inventory type.
 */
export type InventoryType = (typeof InventoryType)[keyof typeof InventoryType];

export const LimitCpuForMigration = {
    False: "false",
    True: "true",
} as const;

/**
 * Gets or sets a value indicating whether to enable processor compatibility mode for live migration of VMs.
 */
export type LimitCpuForMigration = (typeof LimitCpuForMigration)[keyof typeof LimitCpuForMigration];

export const ProvisioningAction = {
    Install: "install",
    Uninstall: "uninstall",
    Repair: "repair",
} as const;

/**
 * Gets or sets the guest agent provisioning action.
 */
export type ProvisioningAction = (typeof ProvisioningAction)[keyof typeof ProvisioningAction];
