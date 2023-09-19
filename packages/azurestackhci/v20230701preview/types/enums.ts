export const CloudInitDataSource = {
    NoCloud: "NoCloud",
    Azure: "Azure",
} as const;

export type CloudInitDataSource = (typeof CloudInitDataSource)[keyof typeof CloudInitDataSource];

export const DiskFileFormat = {
    Vhdx: "vhdx",
    Vhd: "vhd",
} as const;

export type DiskFileFormat = (typeof DiskFileFormat)[keyof typeof DiskFileFormat];

export const ExtendedLocationTypes = {
    CustomLocation: "CustomLocation",
} as const;

export type ExtendedLocationTypes = (typeof ExtendedLocationTypes)[keyof typeof ExtendedLocationTypes];

export const HyperVGeneration = {
    V1: "V1",
    V2: "V2",
} as const;

export type HyperVGeneration = (typeof HyperVGeneration)[keyof typeof HyperVGeneration];

export const IpAllocationMethodEnum = {
    Dynamic: "Dynamic",
    Static: "Static",
} as const;

export type IpAllocationMethodEnum = (typeof IpAllocationMethodEnum)[keyof typeof IpAllocationMethodEnum];

export const NetworkTypeEnum = {
    NAT: "NAT",
    Transparent: "Transparent",
    L2Bridge: "L2Bridge",
    L2Tunnel: "L2Tunnel",
    ICS: "ICS",
    Private: "Private",
    Overlay: "Overlay",
    Internal: "Internal",
    Mirrored: "Mirrored",
} as const;

export type NetworkTypeEnum = (typeof NetworkTypeEnum)[keyof typeof NetworkTypeEnum];

export const OperatingSystemTypes = {
    Linux: "Linux",
    Windows: "Windows",
} as const;

export type OperatingSystemTypes = (typeof OperatingSystemTypes)[keyof typeof OperatingSystemTypes];

export const ProvisioningAction = {
    Install: "install",
    Uninstall: "uninstall",
    Repair: "repair",
} as const;

export type ProvisioningAction = (typeof ProvisioningAction)[keyof typeof ProvisioningAction];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const SecurityTypes = {
    TrustedLaunch: "TrustedLaunch",
    ConfidentialVM: "ConfidentialVM",
} as const;

export type SecurityTypes = (typeof SecurityTypes)[keyof typeof SecurityTypes];

export const VmSizeEnum = {
    Default: "Default",
    Standard_A2_v2: "Standard_A2_v2",
    Standard_A4_v2: "Standard_A4_v2",
    Standard_D2s_v3: "Standard_D2s_v3",
    Standard_D4s_v3: "Standard_D4s_v3",
    Standard_D8s_v3: "Standard_D8s_v3",
    Standard_D16s_v3: "Standard_D16s_v3",
    Standard_D32s_v3: "Standard_D32s_v3",
    Standard_DS2_v2: "Standard_DS2_v2",
    Standard_DS3_v2: "Standard_DS3_v2",
    Standard_DS4_v2: "Standard_DS4_v2",
    Standard_DS5_v2: "Standard_DS5_v2",
    Standard_DS13_v2: "Standard_DS13_v2",
    Standard_K8S_v1: "Standard_K8S_v1",
    Standard_K8S2_v1: "Standard_K8S2_v1",
    Standard_K8S3_v1: "Standard_K8S3_v1",
    Standard_K8S4_v1: "Standard_K8S4_v1",
    Standard_NK6: "Standard_NK6",
    Standard_NK12: "Standard_NK12",
    Standard_NV6: "Standard_NV6",
    Standard_NV12: "Standard_NV12",
    Standard_K8S5_v1: "Standard_K8S5_v1",
    Custom: "Custom",
} as const;

export type VmSizeEnum = (typeof VmSizeEnum)[keyof typeof VmSizeEnum];
