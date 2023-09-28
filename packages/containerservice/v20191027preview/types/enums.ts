export const OSType = {
    Linux: "Linux",
    Windows: "Windows",
} as const;

/**
 * OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.
 */
export type OSType = (typeof OSType)[keyof typeof OSType];

export const OpenShiftAgentPoolProfileRole = {
    Compute: "compute",
    Infra: "infra",
} as const;

/**
 * Define the role of the AgentPoolProfile.
 */
export type OpenShiftAgentPoolProfileRole = (typeof OpenShiftAgentPoolProfileRole)[keyof typeof OpenShiftAgentPoolProfileRole];

export const OpenShiftContainerServiceVMSize = {
    Standard_D2s_v3: "Standard_D2s_v3",
    Standard_D4s_v3: "Standard_D4s_v3",
    Standard_D8s_v3: "Standard_D8s_v3",
    Standard_D16s_v3: "Standard_D16s_v3",
    Standard_D32s_v3: "Standard_D32s_v3",
    Standard_D64s_v3: "Standard_D64s_v3",
    Standard_DS4_v2: "Standard_DS4_v2",
    Standard_DS5_v2: "Standard_DS5_v2",
    Standard_F8s_v2: "Standard_F8s_v2",
    Standard_F16s_v2: "Standard_F16s_v2",
    Standard_F32s_v2: "Standard_F32s_v2",
    Standard_F64s_v2: "Standard_F64s_v2",
    Standard_F72s_v2: "Standard_F72s_v2",
    Standard_F8s: "Standard_F8s",
    Standard_F16s: "Standard_F16s",
    Standard_E4s_v3: "Standard_E4s_v3",
    Standard_E8s_v3: "Standard_E8s_v3",
    Standard_E16s_v3: "Standard_E16s_v3",
    Standard_E20s_v3: "Standard_E20s_v3",
    Standard_E32s_v3: "Standard_E32s_v3",
    Standard_E64s_v3: "Standard_E64s_v3",
    Standard_GS2: "Standard_GS2",
    Standard_GS3: "Standard_GS3",
    Standard_GS4: "Standard_GS4",
    Standard_GS5: "Standard_GS5",
    Standard_DS12_v2: "Standard_DS12_v2",
    Standard_DS13_v2: "Standard_DS13_v2",
    Standard_DS14_v2: "Standard_DS14_v2",
    Standard_DS15_v2: "Standard_DS15_v2",
    Standard_L4s: "Standard_L4s",
    Standard_L8s: "Standard_L8s",
    Standard_L16s: "Standard_L16s",
    Standard_L32s: "Standard_L32s",
} as const;

/**
 * Size of agent VMs.
 */
export type OpenShiftContainerServiceVMSize = (typeof OpenShiftContainerServiceVMSize)[keyof typeof OpenShiftContainerServiceVMSize];
