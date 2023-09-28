export const DiskMode = {
    Persistent: "persistent",
    Independent_persistent: "independent_persistent",
    Independent_nonpersistent: "independent_nonpersistent",
} as const;

/**
 * Gets or sets the disk mode.
 */
export type DiskMode = (typeof DiskMode)[keyof typeof DiskMode];

export const DiskType = {
    Flat: "flat",
    Pmem: "pmem",
    Rawphysical: "rawphysical",
    Rawvirtual: "rawvirtual",
    Sparse: "sparse",
    Sesparse: "sesparse",
    Unknown: "unknown",
} as const;

/**
 * Gets or sets the disk backing type.
 */
export type DiskType = (typeof DiskType)[keyof typeof DiskType];

export const FirmwareType = {
    Bios: "bios",
    Efi: "efi",
} as const;

/**
 * Firmware type
 */
export type FirmwareType = (typeof FirmwareType)[keyof typeof FirmwareType];

export const IPAddressAllocationMethod = {
    Unset: "unset",
    Dynamic: "dynamic",
    Static: "static",
    Linklayer: "linklayer",
    Random: "random",
    Other: "other",
} as const;

/**
 * Gets or sets the nic allocation method.
 */
export type IPAddressAllocationMethod = (typeof IPAddressAllocationMethod)[keyof typeof IPAddressAllocationMethod];

export const InventoryType = {
    ResourcePool: "ResourcePool",
    VirtualMachine: "VirtualMachine",
    VirtualMachineTemplate: "VirtualMachineTemplate",
    VirtualNetwork: "VirtualNetwork",
    Cluster: "Cluster",
    Datastore: "Datastore",
    Host: "Host",
} as const;

/**
 * They inventory type.
 */
export type InventoryType = (typeof InventoryType)[keyof typeof InventoryType];

export const NICType = {
    Vmxnet3: "vmxnet3",
    Vmxnet2: "vmxnet2",
    Vmxnet: "vmxnet",
    E1000: "e1000",
    E1000e: "e1000e",
    Pcnet32: "pcnet32",
} as const;

/**
 * NIC type
 */
export type NICType = (typeof NICType)[keyof typeof NICType];

export const OsType = {
    Windows: "Windows",
    Linux: "Linux",
    Other: "Other",
} as const;

/**
 * Gets or sets the type of the os.
 */
export type OsType = (typeof OsType)[keyof typeof OsType];

export const PowerOnBootOption = {
    Enabled: "enabled",
    Disabled: "disabled",
} as const;

/**
 * Gets or sets the power on boot.
 */
export type PowerOnBootOption = (typeof PowerOnBootOption)[keyof typeof PowerOnBootOption];

export const ProvisioningAction = {
    Install: "install",
    Uninstall: "uninstall",
    Repair: "repair",
} as const;

/**
 * Gets or sets the guest agent provisioning action.
 */
export type ProvisioningAction = (typeof ProvisioningAction)[keyof typeof ProvisioningAction];
