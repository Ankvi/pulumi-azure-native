export const DeviceType = {
    Unknown: "Unknown",
    AzureStackEdge: "AzureStackEdge",
} as const;

/**
 * The type of the device.
 */
export type DeviceType = (typeof DeviceType)[keyof typeof DeviceType];

export const DiskCreateOptionTypes = {
    Unknown: "Unknown",
    Empty: "Empty",
} as const;

/**
 * Specifies how the virtual machine should be created.
 */
export type DiskCreateOptionTypes = (typeof DiskCreateOptionTypes)[keyof typeof DiskCreateOptionTypes];

export const IPAllocationMethod = {
    Unknown: "Unknown",
    Static: "Static",
    Dynamic: "Dynamic",
} as const;

/**
 * IP address allocation method.
 */
export type IPAllocationMethod = (typeof IPAllocationMethod)[keyof typeof IPAllocationMethod];

export const IPVersion = {
    Unknown: "Unknown",
    IPv4: "IPv4",
} as const;

/**
 * IP address version.
 */
export type IPVersion = (typeof IPVersion)[keyof typeof IPVersion];

export const NetworkFunctionRoleConfigurationType = {
    Unknown: "Unknown",
    VirtualMachine: "VirtualMachine",
} as const;

/**
 * Role type.
 */
export type NetworkFunctionRoleConfigurationType = (typeof NetworkFunctionRoleConfigurationType)[keyof typeof NetworkFunctionRoleConfigurationType];

export const NetworkFunctionType = {
    Unknown: "Unknown",
    VirtualNetworkFunction: "VirtualNetworkFunction",
    ContainerizedNetworkFunction: "ContainerizedNetworkFunction",
} as const;

/**
 * The network function type.
 */
export type NetworkFunctionType = (typeof NetworkFunctionType)[keyof typeof NetworkFunctionType];

export const OperatingSystemTypes = {
    Unknown: "Unknown",
    Windows: "Windows",
    Linux: "Linux",
} as const;

/**
 * The OS type.
 */
export type OperatingSystemTypes = (typeof OperatingSystemTypes)[keyof typeof OperatingSystemTypes];

export const SkuDeploymentMode = {
    Unknown: "Unknown",
    Azure: "Azure",
    PrivateEdgeZone: "PrivateEdgeZone",
} as const;

/**
 * The sku deployment mode.
 */
export type SkuDeploymentMode = (typeof SkuDeploymentMode)[keyof typeof SkuDeploymentMode];

export const SkuType = {
    Unknown: "Unknown",
    EvolvedPacketCore: "EvolvedPacketCore",
    SDWAN: "SDWAN",
    Firewall: "Firewall",
} as const;

/**
 * The sku type.
 */
export type SkuType = (typeof SkuType)[keyof typeof SkuType];

export const VMSwitchType = {
    Unknown: "Unknown",
    Management: "Management",
    Wan: "Wan",
    Lan: "Lan",
} as const;

/**
 * The type of the VM switch.
 */
export type VMSwitchType = (typeof VMSwitchType)[keyof typeof VMSwitchType];

export const VirtualMachineSizeTypes = {
    Unknown: "Unknown",
    Standard_D1_v2: "Standard_D1_v2",
    Standard_D2_v2: "Standard_D2_v2",
    Standard_D3_v2: "Standard_D3_v2",
    Standard_D4_v2: "Standard_D4_v2",
    Standard_D5_v2: "Standard_D5_v2",
    Standard_D11_v2: "Standard_D11_v2",
    Standard_D12_v2: "Standard_D12_v2",
    Standard_D13_v2: "Standard_D13_v2",
    Standard_DS1_v2: "Standard_DS1_v2",
    Standard_DS2_v2: "Standard_DS2_v2",
    Standard_DS3_v2: "Standard_DS3_v2",
    Standard_DS4_v2: "Standard_DS4_v2",
    Standard_DS5_v2: "Standard_DS5_v2",
    Standard_DS11_v2: "Standard_DS11_v2",
    Standard_DS12_v2: "Standard_DS12_v2",
    Standard_DS13_v2: "Standard_DS13_v2",
    Standard_F1: "Standard_F1",
    Standard_F2: "Standard_F2",
    Standard_F4: "Standard_F4",
    Standard_F8: "Standard_F8",
    Standard_F16: "Standard_F16",
    Standard_F1s: "Standard_F1s",
    Standard_F2s: "Standard_F2s",
    Standard_F4s: "Standard_F4s",
    Standard_F8s: "Standard_F8s",
    Standard_F16s: "Standard_F16s",
} as const;

/**
 * The size of the virtual machine.
 */
export type VirtualMachineSizeTypes = (typeof VirtualMachineSizeTypes)[keyof typeof VirtualMachineSizeTypes];
