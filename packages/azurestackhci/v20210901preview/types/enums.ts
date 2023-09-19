export const CloudInitDataSource = {
    NoCloud: "NoCloud",
    Azure: "Azure",
} as const;

export type CloudInitDataSource = (typeof CloudInitDataSource)[keyof typeof CloudInitDataSource];

export const CreatedByType = {
    User: "User",
    Application: "Application",
    ManagedIdentity: "ManagedIdentity",
    Key: "Key",
} as const;

export type CreatedByType = (typeof CreatedByType)[keyof typeof CreatedByType];

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

export const IPPoolTypeEnum = {
    Vm: "vm",
    Vippool: "vippool",
} as const;

export type IPPoolTypeEnum = (typeof IPPoolTypeEnum)[keyof typeof IPPoolTypeEnum];

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
    Windows: "Windows",
    Linux: "Linux",
} as const;

export type OperatingSystemTypes = (typeof OperatingSystemTypes)[keyof typeof OperatingSystemTypes];

export const OsTypeEnum = {
    Linux: "Linux",
    Windows: "Windows",
} as const;

export type OsTypeEnum = (typeof OsTypeEnum)[keyof typeof OsTypeEnum];

export const PrivateIPAllocationMethodEnum = {
    Dynamic: "Dynamic",
    Static: "Static",
} as const;

export type PrivateIPAllocationMethodEnum = (typeof PrivateIPAllocationMethodEnum)[keyof typeof PrivateIPAllocationMethodEnum];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];
