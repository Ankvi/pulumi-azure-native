export const DiskIndependenceMode = {
    Persistent: "persistent",
    Independent_persistent: "independent_persistent",
    Independent_nonpersistent: "independent_nonpersistent",
} as const;

/**
 * Disk's independence mode type
 */
export type DiskIndependenceMode = (typeof DiskIndependenceMode)[keyof typeof DiskIndependenceMode];

export const NICType = {
    E1000: "E1000",
    E1000E: "E1000E",
    PCNET32: "PCNET32",
    VMXNET: "VMXNET",
    VMXNET2: "VMXNET2",
    VMXNET3: "VMXNET3",
} as const;

/**
 * NIC type
 */
export type NICType = (typeof NICType)[keyof typeof NICType];
