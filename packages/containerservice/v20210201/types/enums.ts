export const AgentPoolMode = {
    System: "System",
    User: "User",
} as const;

/**
 * AgentPoolMode represents mode of an agent pool
 */
export type AgentPoolMode = (typeof AgentPoolMode)[keyof typeof AgentPoolMode];

export const AgentPoolType = {
    VirtualMachineScaleSets: "VirtualMachineScaleSets",
    AvailabilitySet: "AvailabilitySet",
} as const;

/**
 * AgentPoolType represents types of an agent pool
 */
export type AgentPoolType = (typeof AgentPoolType)[keyof typeof AgentPoolType];

export const ContainerServiceVMSizeTypes = {
    Standard_A1: "Standard_A1",
    Standard_A10: "Standard_A10",
    Standard_A11: "Standard_A11",
    Standard_A1_v2: "Standard_A1_v2",
    Standard_A2: "Standard_A2",
    Standard_A2_v2: "Standard_A2_v2",
    Standard_A2m_v2: "Standard_A2m_v2",
    Standard_A3: "Standard_A3",
    Standard_A4: "Standard_A4",
    Standard_A4_v2: "Standard_A4_v2",
    Standard_A4m_v2: "Standard_A4m_v2",
    Standard_A5: "Standard_A5",
    Standard_A6: "Standard_A6",
    Standard_A7: "Standard_A7",
    Standard_A8: "Standard_A8",
    Standard_A8_v2: "Standard_A8_v2",
    Standard_A8m_v2: "Standard_A8m_v2",
    Standard_A9: "Standard_A9",
    Standard_B2ms: "Standard_B2ms",
    Standard_B2s: "Standard_B2s",
    Standard_B4ms: "Standard_B4ms",
    Standard_B8ms: "Standard_B8ms",
    Standard_D1: "Standard_D1",
    Standard_D11: "Standard_D11",
    Standard_D11_v2: "Standard_D11_v2",
    Standard_D11_v2_Promo: "Standard_D11_v2_Promo",
    Standard_D12: "Standard_D12",
    Standard_D12_v2: "Standard_D12_v2",
    Standard_D12_v2_Promo: "Standard_D12_v2_Promo",
    Standard_D13: "Standard_D13",
    Standard_D13_v2: "Standard_D13_v2",
    Standard_D13_v2_Promo: "Standard_D13_v2_Promo",
    Standard_D14: "Standard_D14",
    Standard_D14_v2: "Standard_D14_v2",
    Standard_D14_v2_Promo: "Standard_D14_v2_Promo",
    Standard_D15_v2: "Standard_D15_v2",
    Standard_D16_v3: "Standard_D16_v3",
    Standard_D16s_v3: "Standard_D16s_v3",
    Standard_D1_v2: "Standard_D1_v2",
    Standard_D2: "Standard_D2",
    Standard_D2_v2: "Standard_D2_v2",
    Standard_D2_v2_Promo: "Standard_D2_v2_Promo",
    Standard_D2_v3: "Standard_D2_v3",
    Standard_D2s_v3: "Standard_D2s_v3",
    Standard_D3: "Standard_D3",
    Standard_D32_v3: "Standard_D32_v3",
    Standard_D32s_v3: "Standard_D32s_v3",
    Standard_D3_v2: "Standard_D3_v2",
    Standard_D3_v2_Promo: "Standard_D3_v2_Promo",
    Standard_D4: "Standard_D4",
    Standard_D4_v2: "Standard_D4_v2",
    Standard_D4_v2_Promo: "Standard_D4_v2_Promo",
    Standard_D4_v3: "Standard_D4_v3",
    Standard_D4s_v3: "Standard_D4s_v3",
    Standard_D5_v2: "Standard_D5_v2",
    Standard_D5_v2_Promo: "Standard_D5_v2_Promo",
    Standard_D64_v3: "Standard_D64_v3",
    Standard_D64s_v3: "Standard_D64s_v3",
    Standard_D8_v3: "Standard_D8_v3",
    Standard_D8s_v3: "Standard_D8s_v3",
    Standard_DS1: "Standard_DS1",
    Standard_DS11: "Standard_DS11",
    Standard_DS11_v2: "Standard_DS11_v2",
    Standard_DS11_v2_Promo: "Standard_DS11_v2_Promo",
    Standard_DS12: "Standard_DS12",
    Standard_DS12_v2: "Standard_DS12_v2",
    Standard_DS12_v2_Promo: "Standard_DS12_v2_Promo",
    Standard_DS13: "Standard_DS13",
    Standard_DS13_2_v2: "Standard_DS13-2_v2",
    Standard_DS13_4_v2: "Standard_DS13-4_v2",
    Standard_DS13_v2: "Standard_DS13_v2",
    Standard_DS13_v2_Promo: "Standard_DS13_v2_Promo",
    Standard_DS14: "Standard_DS14",
    Standard_DS14_4_v2: "Standard_DS14-4_v2",
    Standard_DS14_8_v2: "Standard_DS14-8_v2",
    Standard_DS14_v2: "Standard_DS14_v2",
    Standard_DS14_v2_Promo: "Standard_DS14_v2_Promo",
    Standard_DS15_v2: "Standard_DS15_v2",
    Standard_DS1_v2: "Standard_DS1_v2",
    Standard_DS2: "Standard_DS2",
    Standard_DS2_v2: "Standard_DS2_v2",
    Standard_DS2_v2_Promo: "Standard_DS2_v2_Promo",
    Standard_DS3: "Standard_DS3",
    Standard_DS3_v2: "Standard_DS3_v2",
    Standard_DS3_v2_Promo: "Standard_DS3_v2_Promo",
    Standard_DS4: "Standard_DS4",
    Standard_DS4_v2: "Standard_DS4_v2",
    Standard_DS4_v2_Promo: "Standard_DS4_v2_Promo",
    Standard_DS5_v2: "Standard_DS5_v2",
    Standard_DS5_v2_Promo: "Standard_DS5_v2_Promo",
    Standard_E16_v3: "Standard_E16_v3",
    Standard_E16s_v3: "Standard_E16s_v3",
    Standard_E2_v3: "Standard_E2_v3",
    Standard_E2s_v3: "Standard_E2s_v3",
    Standard_E32_16s_v3: "Standard_E32-16s_v3",
    Standard_E32_8s_v3: "Standard_E32-8s_v3",
    Standard_E32_v3: "Standard_E32_v3",
    Standard_E32s_v3: "Standard_E32s_v3",
    Standard_E4_v3: "Standard_E4_v3",
    Standard_E4s_v3: "Standard_E4s_v3",
    Standard_E64_16s_v3: "Standard_E64-16s_v3",
    Standard_E64_32s_v3: "Standard_E64-32s_v3",
    Standard_E64_v3: "Standard_E64_v3",
    Standard_E64s_v3: "Standard_E64s_v3",
    Standard_E8_v3: "Standard_E8_v3",
    Standard_E8s_v3: "Standard_E8s_v3",
    Standard_F1: "Standard_F1",
    Standard_F16: "Standard_F16",
    Standard_F16s: "Standard_F16s",
    Standard_F16s_v2: "Standard_F16s_v2",
    Standard_F1s: "Standard_F1s",
    Standard_F2: "Standard_F2",
    Standard_F2s: "Standard_F2s",
    Standard_F2s_v2: "Standard_F2s_v2",
    Standard_F32s_v2: "Standard_F32s_v2",
    Standard_F4: "Standard_F4",
    Standard_F4s: "Standard_F4s",
    Standard_F4s_v2: "Standard_F4s_v2",
    Standard_F64s_v2: "Standard_F64s_v2",
    Standard_F72s_v2: "Standard_F72s_v2",
    Standard_F8: "Standard_F8",
    Standard_F8s: "Standard_F8s",
    Standard_F8s_v2: "Standard_F8s_v2",
    Standard_G1: "Standard_G1",
    Standard_G2: "Standard_G2",
    Standard_G3: "Standard_G3",
    Standard_G4: "Standard_G4",
    Standard_G5: "Standard_G5",
    Standard_GS1: "Standard_GS1",
    Standard_GS2: "Standard_GS2",
    Standard_GS3: "Standard_GS3",
    Standard_GS4: "Standard_GS4",
    Standard_GS4_4: "Standard_GS4-4",
    Standard_GS4_8: "Standard_GS4-8",
    Standard_GS5: "Standard_GS5",
    Standard_GS5_16: "Standard_GS5-16",
    Standard_GS5_8: "Standard_GS5-8",
    Standard_H16: "Standard_H16",
    Standard_H16m: "Standard_H16m",
    Standard_H16mr: "Standard_H16mr",
    Standard_H16r: "Standard_H16r",
    Standard_H8: "Standard_H8",
    Standard_H8m: "Standard_H8m",
    Standard_L16s: "Standard_L16s",
    Standard_L32s: "Standard_L32s",
    Standard_L4s: "Standard_L4s",
    Standard_L8s: "Standard_L8s",
    Standard_M128_32ms: "Standard_M128-32ms",
    Standard_M128_64ms: "Standard_M128-64ms",
    Standard_M128ms: "Standard_M128ms",
    Standard_M128s: "Standard_M128s",
    Standard_M64_16ms: "Standard_M64-16ms",
    Standard_M64_32ms: "Standard_M64-32ms",
    Standard_M64ms: "Standard_M64ms",
    Standard_M64s: "Standard_M64s",
    Standard_NC12: "Standard_NC12",
    Standard_NC12s_v2: "Standard_NC12s_v2",
    Standard_NC12s_v3: "Standard_NC12s_v3",
    Standard_NC24: "Standard_NC24",
    Standard_NC24r: "Standard_NC24r",
    Standard_NC24rs_v2: "Standard_NC24rs_v2",
    Standard_NC24rs_v3: "Standard_NC24rs_v3",
    Standard_NC24s_v2: "Standard_NC24s_v2",
    Standard_NC24s_v3: "Standard_NC24s_v3",
    Standard_NC6: "Standard_NC6",
    Standard_NC6s_v2: "Standard_NC6s_v2",
    Standard_NC6s_v3: "Standard_NC6s_v3",
    Standard_ND12s: "Standard_ND12s",
    Standard_ND24rs: "Standard_ND24rs",
    Standard_ND24s: "Standard_ND24s",
    Standard_ND6s: "Standard_ND6s",
    Standard_NV12: "Standard_NV12",
    Standard_NV24: "Standard_NV24",
    Standard_NV6: "Standard_NV6",
} as const;

/**
 * Size of agent VMs.
 */
export type ContainerServiceVMSizeTypes = (typeof ContainerServiceVMSizeTypes)[keyof typeof ContainerServiceVMSizeTypes];

export const KubeletDiskType = {
    OS: "OS",
    Temporary: "Temporary",
} as const;

/**
 * KubeletDiskType determines the placement of emptyDir volumes, container runtime data root, and Kubelet ephemeral storage. Currently allows one value, OS, resulting in Kubelet using the OS disk for data.
 */
export type KubeletDiskType = (typeof KubeletDiskType)[keyof typeof KubeletDiskType];

export const OSDiskType = {
    Managed: "Managed",
    Ephemeral: "Ephemeral",
} as const;

/**
 * OS disk type to be used for machines in a given agent pool. Allowed values are 'Ephemeral' and 'Managed'. If unspecified, defaults to 'Ephemeral' when the VM supports ephemeral OS and has a cache disk larger than the requested OSDiskSizeGB. Otherwise, defaults to 'Managed'. May not be changed after creation.
 */
export type OSDiskType = (typeof OSDiskType)[keyof typeof OSDiskType];

export const OSType = {
    Linux: "Linux",
    Windows: "Windows",
} as const;

/**
 * OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.
 */
export type OSType = (typeof OSType)[keyof typeof OSType];

export const ScaleSetEvictionPolicy = {
    Delete: "Delete",
    Deallocate: "Deallocate",
} as const;

/**
 * ScaleSetEvictionPolicy to be used to specify eviction policy for Spot virtual machine scale set. Default to Delete.
 */
export type ScaleSetEvictionPolicy = (typeof ScaleSetEvictionPolicy)[keyof typeof ScaleSetEvictionPolicy];

export const ScaleSetPriority = {
    Spot: "Spot",
    Regular: "Regular",
} as const;

/**
 * ScaleSetPriority to be used to specify virtual machine scale set priority. Default to regular.
 */
export type ScaleSetPriority = (typeof ScaleSetPriority)[keyof typeof ScaleSetPriority];
