export const CachingTypes = {
    None: "None",
    ReadOnly: "ReadOnly",
    ReadWrite: "ReadWrite",
} as const;

export type CachingTypes = (typeof CachingTypes)[keyof typeof CachingTypes];

export const ComponentNames = {
    Microsoft_Windows_Shell_Setup: "Microsoft-Windows-Shell-Setup",
} as const;

export type ComponentNames = (typeof ComponentNames)[keyof typeof ComponentNames];

export const ConsistencyModeTypes = {
    CrashConsistent: "CrashConsistent",
    FileSystemConsistent: "FileSystemConsistent",
    ApplicationConsistent: "ApplicationConsistent",
} as const;

export type ConsistencyModeTypes = (typeof ConsistencyModeTypes)[keyof typeof ConsistencyModeTypes];

export const DedicatedHostLicenseTypes = {
    None: "None",
    Windows_Server_Hybrid: "Windows_Server_Hybrid",
    Windows_Server_Perpetual: "Windows_Server_Perpetual",
} as const;

export type DedicatedHostLicenseTypes = (typeof DedicatedHostLicenseTypes)[keyof typeof DedicatedHostLicenseTypes];

export const DeleteOptions = {
    Delete: "Delete",
    Detach: "Detach",
} as const;

export type DeleteOptions = (typeof DeleteOptions)[keyof typeof DeleteOptions];

export const DiffDiskOptions = {
    Local: "Local",
} as const;

export type DiffDiskOptions = (typeof DiffDiskOptions)[keyof typeof DiffDiskOptions];

export const DiffDiskPlacement = {
    CacheDisk: "CacheDisk",
    ResourceDisk: "ResourceDisk",
} as const;

export type DiffDiskPlacement = (typeof DiffDiskPlacement)[keyof typeof DiffDiskPlacement];

export const DiskControllerTypes = {
    SCSI: "SCSI",
    NVMe: "NVMe",
} as const;

export type DiskControllerTypes = (typeof DiskControllerTypes)[keyof typeof DiskControllerTypes];

export const DiskCreateOptionTypes = {
    FromImage: "FromImage",
    Empty: "Empty",
    Attach: "Attach",
} as const;

export type DiskCreateOptionTypes = (typeof DiskCreateOptionTypes)[keyof typeof DiskCreateOptionTypes];

export const DiskDeleteOptionTypes = {
    Delete: "Delete",
    Detach: "Detach",
} as const;

export type DiskDeleteOptionTypes = (typeof DiskDeleteOptionTypes)[keyof typeof DiskDeleteOptionTypes];

export const DiskDetachOptionTypes = {
    ForceDetach: "ForceDetach",
} as const;

export type DiskDetachOptionTypes = (typeof DiskDetachOptionTypes)[keyof typeof DiskDetachOptionTypes];

export const ExtendedLocationTypes = {
    EdgeZone: "EdgeZone",
} as const;

export type ExtendedLocationTypes = (typeof ExtendedLocationTypes)[keyof typeof ExtendedLocationTypes];

export const HyperVGenerationTypes = {
    V1: "V1",
    V2: "V2",
} as const;

export type HyperVGenerationTypes = (typeof HyperVGenerationTypes)[keyof typeof HyperVGenerationTypes];

export const IPVersion = {
    IPv4: "IPv4",
    IPv6: "IPv6",
} as const;

export type IPVersion = (typeof IPVersion)[keyof typeof IPVersion];

export const IPVersions = {
    IPv4: "IPv4",
    IPv6: "IPv6",
} as const;

export type IPVersions = (typeof IPVersions)[keyof typeof IPVersions];

export const IntervalInMins = {
    ThreeMins: "ThreeMins",
    FiveMins: "FiveMins",
    ThirtyMins: "ThirtyMins",
    SixtyMins: "SixtyMins",
} as const;

export type IntervalInMins = (typeof IntervalInMins)[keyof typeof IntervalInMins];

export const LinuxPatchAssessmentMode = {
    ImageDefault: "ImageDefault",
    AutomaticByPlatform: "AutomaticByPlatform",
} as const;

export type LinuxPatchAssessmentMode = (typeof LinuxPatchAssessmentMode)[keyof typeof LinuxPatchAssessmentMode];

export const LinuxVMGuestPatchAutomaticByPlatformRebootSetting = {
    Unknown: "Unknown",
    IfRequired: "IfRequired",
    Never: "Never",
    Always: "Always",
} as const;

export type LinuxVMGuestPatchAutomaticByPlatformRebootSetting = (typeof LinuxVMGuestPatchAutomaticByPlatformRebootSetting)[keyof typeof LinuxVMGuestPatchAutomaticByPlatformRebootSetting];

export const LinuxVMGuestPatchMode = {
    ImageDefault: "ImageDefault",
    AutomaticByPlatform: "AutomaticByPlatform",
} as const;

export type LinuxVMGuestPatchMode = (typeof LinuxVMGuestPatchMode)[keyof typeof LinuxVMGuestPatchMode];

export const NetworkApiVersion = {
    NetworkApiVersion_2020_11_01: "2020-11-01",
} as const;

export type NetworkApiVersion = (typeof NetworkApiVersion)[keyof typeof NetworkApiVersion];

export const OperatingSystemStateTypes = {
    /**
     * Generalized image. Needs to be provisioned during deployment time.
     */
    Generalized: "Generalized",
    /**
     * Specialized image. Contains already provisioned OS Disk.
     */
    Specialized: "Specialized",
} as const;

export type OperatingSystemStateTypes = (typeof OperatingSystemStateTypes)[keyof typeof OperatingSystemStateTypes];

export const OperatingSystemTypes = {
    Windows: "Windows",
    Linux: "Linux",
} as const;

export type OperatingSystemTypes = (typeof OperatingSystemTypes)[keyof typeof OperatingSystemTypes];

export const OrchestrationMode = {
    Uniform: "Uniform",
    Flexible: "Flexible",
} as const;

export type OrchestrationMode = (typeof OrchestrationMode)[keyof typeof OrchestrationMode];

export const PassNames = {
    OobeSystem: "OobeSystem",
} as const;

export type PassNames = (typeof PassNames)[keyof typeof PassNames];

export const ProtocolTypes = {
    Http: "Http",
    Https: "Https",
} as const;

export type ProtocolTypes = (typeof ProtocolTypes)[keyof typeof ProtocolTypes];

export const ProximityPlacementGroupType = {
    Standard: "Standard",
    Ultra: "Ultra",
} as const;

export type ProximityPlacementGroupType = (typeof ProximityPlacementGroupType)[keyof typeof ProximityPlacementGroupType];

export const PublicIPAddressSkuName = {
    Basic: "Basic",
    Standard: "Standard",
} as const;

export type PublicIPAddressSkuName = (typeof PublicIPAddressSkuName)[keyof typeof PublicIPAddressSkuName];

export const PublicIPAddressSkuTier = {
    Regional: "Regional",
    Global: "Global",
} as const;

export type PublicIPAddressSkuTier = (typeof PublicIPAddressSkuTier)[keyof typeof PublicIPAddressSkuTier];

export const PublicIPAllocationMethod = {
    Dynamic: "Dynamic",
    Static: "Static",
} as const;

export type PublicIPAllocationMethod = (typeof PublicIPAllocationMethod)[keyof typeof PublicIPAllocationMethod];

export const RepairAction = {
    Replace: "Replace",
    Restart: "Restart",
    Reimage: "Reimage",
} as const;

export type RepairAction = (typeof RepairAction)[keyof typeof RepairAction];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
    None: "None",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const RestorePointEncryptionType = {
    /**
     * Disk Restore Point is encrypted at rest with Platform managed key. 
     */
    EncryptionAtRestWithPlatformKey: "EncryptionAtRestWithPlatformKey",
    /**
     * Disk Restore Point is encrypted at rest with Customer managed key that can be changed and revoked by a customer.
     */
    EncryptionAtRestWithCustomerKey: "EncryptionAtRestWithCustomerKey",
    /**
     * Disk Restore Point is encrypted at rest with 2 layers of encryption. One of the keys is Customer managed and the other key is Platform managed.
     */
    EncryptionAtRestWithPlatformAndCustomerKeys: "EncryptionAtRestWithPlatformAndCustomerKeys",
} as const;

export type RestorePointEncryptionType = (typeof RestorePointEncryptionType)[keyof typeof RestorePointEncryptionType];

export const SecurityEncryptionTypes = {
    VMGuestStateOnly: "VMGuestStateOnly",
    DiskWithVMGuestState: "DiskWithVMGuestState",
} as const;

export type SecurityEncryptionTypes = (typeof SecurityEncryptionTypes)[keyof typeof SecurityEncryptionTypes];

export const SecurityTypes = {
    TrustedLaunch: "TrustedLaunch",
    ConfidentialVM: "ConfidentialVM",
} as const;

export type SecurityTypes = (typeof SecurityTypes)[keyof typeof SecurityTypes];

export const SettingNames = {
    AutoLogon: "AutoLogon",
    FirstLogonCommands: "FirstLogonCommands",
} as const;

export type SettingNames = (typeof SettingNames)[keyof typeof SettingNames];

export const StatusLevelTypes = {
    Info: "Info",
    Warning: "Warning",
    Error: "Error",
} as const;

export type StatusLevelTypes = (typeof StatusLevelTypes)[keyof typeof StatusLevelTypes];

export const StorageAccountTypes = {
    Standard_LRS: "Standard_LRS",
    Premium_LRS: "Premium_LRS",
    StandardSSD_LRS: "StandardSSD_LRS",
    UltraSSD_LRS: "UltraSSD_LRS",
    Premium_ZRS: "Premium_ZRS",
    StandardSSD_ZRS: "StandardSSD_ZRS",
    PremiumV2_LRS: "PremiumV2_LRS",
} as const;

export type StorageAccountTypes = (typeof StorageAccountTypes)[keyof typeof StorageAccountTypes];

export const UpgradeMode = {
    Automatic: "Automatic",
    Manual: "Manual",
    Rolling: "Rolling",
} as const;

export type UpgradeMode = (typeof UpgradeMode)[keyof typeof UpgradeMode];

export const VirtualMachineEvictionPolicyTypes = {
    Deallocate: "Deallocate",
    Delete: "Delete",
} as const;

export type VirtualMachineEvictionPolicyTypes = (typeof VirtualMachineEvictionPolicyTypes)[keyof typeof VirtualMachineEvictionPolicyTypes];

export const VirtualMachinePriorityTypes = {
    Regular: "Regular",
    Low: "Low",
    Spot: "Spot",
} as const;

export type VirtualMachinePriorityTypes = (typeof VirtualMachinePriorityTypes)[keyof typeof VirtualMachinePriorityTypes];

export const VirtualMachineScaleSetScaleInRules = {
    Default: "Default",
    OldestVM: "OldestVM",
    NewestVM: "NewestVM",
} as const;

export type VirtualMachineScaleSetScaleInRules = (typeof VirtualMachineScaleSetScaleInRules)[keyof typeof VirtualMachineScaleSetScaleInRules];

export const VirtualMachineSizeTypes = {
    Basic_A0: "Basic_A0",
    Basic_A1: "Basic_A1",
    Basic_A2: "Basic_A2",
    Basic_A3: "Basic_A3",
    Basic_A4: "Basic_A4",
    Standard_A0: "Standard_A0",
    Standard_A1: "Standard_A1",
    Standard_A2: "Standard_A2",
    Standard_A3: "Standard_A3",
    Standard_A4: "Standard_A4",
    Standard_A5: "Standard_A5",
    Standard_A6: "Standard_A6",
    Standard_A7: "Standard_A7",
    Standard_A8: "Standard_A8",
    Standard_A9: "Standard_A9",
    Standard_A10: "Standard_A10",
    Standard_A11: "Standard_A11",
    Standard_A1_v2: "Standard_A1_v2",
    Standard_A2_v2: "Standard_A2_v2",
    Standard_A4_v2: "Standard_A4_v2",
    Standard_A8_v2: "Standard_A8_v2",
    Standard_A2m_v2: "Standard_A2m_v2",
    Standard_A4m_v2: "Standard_A4m_v2",
    Standard_A8m_v2: "Standard_A8m_v2",
    Standard_B1s: "Standard_B1s",
    Standard_B1ms: "Standard_B1ms",
    Standard_B2s: "Standard_B2s",
    Standard_B2ms: "Standard_B2ms",
    Standard_B4ms: "Standard_B4ms",
    Standard_B8ms: "Standard_B8ms",
    Standard_D1: "Standard_D1",
    Standard_D2: "Standard_D2",
    Standard_D3: "Standard_D3",
    Standard_D4: "Standard_D4",
    Standard_D11: "Standard_D11",
    Standard_D12: "Standard_D12",
    Standard_D13: "Standard_D13",
    Standard_D14: "Standard_D14",
    Standard_D1_v2: "Standard_D1_v2",
    Standard_D2_v2: "Standard_D2_v2",
    Standard_D3_v2: "Standard_D3_v2",
    Standard_D4_v2: "Standard_D4_v2",
    Standard_D5_v2: "Standard_D5_v2",
    Standard_D2_v3: "Standard_D2_v3",
    Standard_D4_v3: "Standard_D4_v3",
    Standard_D8_v3: "Standard_D8_v3",
    Standard_D16_v3: "Standard_D16_v3",
    Standard_D32_v3: "Standard_D32_v3",
    Standard_D64_v3: "Standard_D64_v3",
    Standard_D2s_v3: "Standard_D2s_v3",
    Standard_D4s_v3: "Standard_D4s_v3",
    Standard_D8s_v3: "Standard_D8s_v3",
    Standard_D16s_v3: "Standard_D16s_v3",
    Standard_D32s_v3: "Standard_D32s_v3",
    Standard_D64s_v3: "Standard_D64s_v3",
    Standard_D11_v2: "Standard_D11_v2",
    Standard_D12_v2: "Standard_D12_v2",
    Standard_D13_v2: "Standard_D13_v2",
    Standard_D14_v2: "Standard_D14_v2",
    Standard_D15_v2: "Standard_D15_v2",
    Standard_DS1: "Standard_DS1",
    Standard_DS2: "Standard_DS2",
    Standard_DS3: "Standard_DS3",
    Standard_DS4: "Standard_DS4",
    Standard_DS11: "Standard_DS11",
    Standard_DS12: "Standard_DS12",
    Standard_DS13: "Standard_DS13",
    Standard_DS14: "Standard_DS14",
    Standard_DS1_v2: "Standard_DS1_v2",
    Standard_DS2_v2: "Standard_DS2_v2",
    Standard_DS3_v2: "Standard_DS3_v2",
    Standard_DS4_v2: "Standard_DS4_v2",
    Standard_DS5_v2: "Standard_DS5_v2",
    Standard_DS11_v2: "Standard_DS11_v2",
    Standard_DS12_v2: "Standard_DS12_v2",
    Standard_DS13_v2: "Standard_DS13_v2",
    Standard_DS14_v2: "Standard_DS14_v2",
    Standard_DS15_v2: "Standard_DS15_v2",
    Standard_DS13_4_v2: "Standard_DS13-4_v2",
    Standard_DS13_2_v2: "Standard_DS13-2_v2",
    Standard_DS14_8_v2: "Standard_DS14-8_v2",
    Standard_DS14_4_v2: "Standard_DS14-4_v2",
    Standard_E2_v3: "Standard_E2_v3",
    Standard_E4_v3: "Standard_E4_v3",
    Standard_E8_v3: "Standard_E8_v3",
    Standard_E16_v3: "Standard_E16_v3",
    Standard_E32_v3: "Standard_E32_v3",
    Standard_E64_v3: "Standard_E64_v3",
    Standard_E2s_v3: "Standard_E2s_v3",
    Standard_E4s_v3: "Standard_E4s_v3",
    Standard_E8s_v3: "Standard_E8s_v3",
    Standard_E16s_v3: "Standard_E16s_v3",
    Standard_E32s_v3: "Standard_E32s_v3",
    Standard_E64s_v3: "Standard_E64s_v3",
    Standard_E32_16_v3: "Standard_E32-16_v3",
    Standard_E32_8s_v3: "Standard_E32-8s_v3",
    Standard_E64_32s_v3: "Standard_E64-32s_v3",
    Standard_E64_16s_v3: "Standard_E64-16s_v3",
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
    Standard_F2s_v2: "Standard_F2s_v2",
    Standard_F4s_v2: "Standard_F4s_v2",
    Standard_F8s_v2: "Standard_F8s_v2",
    Standard_F16s_v2: "Standard_F16s_v2",
    Standard_F32s_v2: "Standard_F32s_v2",
    Standard_F64s_v2: "Standard_F64s_v2",
    Standard_F72s_v2: "Standard_F72s_v2",
    Standard_G1: "Standard_G1",
    Standard_G2: "Standard_G2",
    Standard_G3: "Standard_G3",
    Standard_G4: "Standard_G4",
    Standard_G5: "Standard_G5",
    Standard_GS1: "Standard_GS1",
    Standard_GS2: "Standard_GS2",
    Standard_GS3: "Standard_GS3",
    Standard_GS4: "Standard_GS4",
    Standard_GS5: "Standard_GS5",
    Standard_GS4_8: "Standard_GS4-8",
    Standard_GS4_4: "Standard_GS4-4",
    Standard_GS5_16: "Standard_GS5-16",
    Standard_GS5_8: "Standard_GS5-8",
    Standard_H8: "Standard_H8",
    Standard_H16: "Standard_H16",
    Standard_H8m: "Standard_H8m",
    Standard_H16m: "Standard_H16m",
    Standard_H16r: "Standard_H16r",
    Standard_H16mr: "Standard_H16mr",
    Standard_L4s: "Standard_L4s",
    Standard_L8s: "Standard_L8s",
    Standard_L16s: "Standard_L16s",
    Standard_L32s: "Standard_L32s",
    Standard_M64s: "Standard_M64s",
    Standard_M64ms: "Standard_M64ms",
    Standard_M128s: "Standard_M128s",
    Standard_M128ms: "Standard_M128ms",
    Standard_M64_32ms: "Standard_M64-32ms",
    Standard_M64_16ms: "Standard_M64-16ms",
    Standard_M128_64ms: "Standard_M128-64ms",
    Standard_M128_32ms: "Standard_M128-32ms",
    Standard_NC6: "Standard_NC6",
    Standard_NC12: "Standard_NC12",
    Standard_NC24: "Standard_NC24",
    Standard_NC24r: "Standard_NC24r",
    Standard_NC6s_v2: "Standard_NC6s_v2",
    Standard_NC12s_v2: "Standard_NC12s_v2",
    Standard_NC24s_v2: "Standard_NC24s_v2",
    Standard_NC24rs_v2: "Standard_NC24rs_v2",
    Standard_NC6s_v3: "Standard_NC6s_v3",
    Standard_NC12s_v3: "Standard_NC12s_v3",
    Standard_NC24s_v3: "Standard_NC24s_v3",
    Standard_NC24rs_v3: "Standard_NC24rs_v3",
    Standard_ND6s: "Standard_ND6s",
    Standard_ND12s: "Standard_ND12s",
    Standard_ND24s: "Standard_ND24s",
    Standard_ND24rs: "Standard_ND24rs",
    Standard_NV6: "Standard_NV6",
    Standard_NV12: "Standard_NV12",
    Standard_NV24: "Standard_NV24",
} as const;

export type VirtualMachineSizeTypes = (typeof VirtualMachineSizeTypes)[keyof typeof VirtualMachineSizeTypes];

export const WindowsPatchAssessmentMode = {
    ImageDefault: "ImageDefault",
    AutomaticByPlatform: "AutomaticByPlatform",
} as const;

export type WindowsPatchAssessmentMode = (typeof WindowsPatchAssessmentMode)[keyof typeof WindowsPatchAssessmentMode];

export const WindowsVMGuestPatchAutomaticByPlatformRebootSetting = {
    Unknown: "Unknown",
    IfRequired: "IfRequired",
    Never: "Never",
    Always: "Always",
} as const;

export type WindowsVMGuestPatchAutomaticByPlatformRebootSetting = (typeof WindowsVMGuestPatchAutomaticByPlatformRebootSetting)[keyof typeof WindowsVMGuestPatchAutomaticByPlatformRebootSetting];

export const WindowsVMGuestPatchMode = {
    Manual: "Manual",
    AutomaticByOS: "AutomaticByOS",
    AutomaticByPlatform: "AutomaticByPlatform",
} as const;

export type WindowsVMGuestPatchMode = (typeof WindowsVMGuestPatchMode)[keyof typeof WindowsVMGuestPatchMode];
