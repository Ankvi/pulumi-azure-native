export const CachingTypes = {
    None: "None",
    ReadOnly: "ReadOnly",
    ReadWrite: "ReadWrite",
} as const;

/**
 * Specifies the caching requirements. Possible values are: **None,** **ReadOnly,** **ReadWrite.** The default values are: **None for Standard storage. ReadOnly for Premium storage.**
 */
export type CachingTypes = (typeof CachingTypes)[keyof typeof CachingTypes];

export const ComponentNames = {
    Microsoft_Windows_Shell_Setup: "Microsoft-Windows-Shell-Setup",
} as const;

/**
 * The component name. Currently, the only allowable value is Microsoft-Windows-Shell-Setup.
 */
export type ComponentNames = (typeof ComponentNames)[keyof typeof ComponentNames];

export const DeleteOptions = {
    Delete: "Delete",
    Detach: "Detach",
} as const;

/**
 * Specify what happens to the public IP when the VM is deleted
 */
export type DeleteOptions = (typeof DeleteOptions)[keyof typeof DeleteOptions];

export const DiffDiskOptions = {
    Local: "Local",
} as const;

/**
 * Specifies the ephemeral disk settings for operating system disk.
 */
export type DiffDiskOptions = (typeof DiffDiskOptions)[keyof typeof DiffDiskOptions];

export const DiffDiskPlacement = {
    CacheDisk: "CacheDisk",
    ResourceDisk: "ResourceDisk",
} as const;

/**
 * Specifies the ephemeral disk placement for operating system disk. Possible values are: **CacheDisk,** **ResourceDisk.** The defaulting behavior is: **CacheDisk** if one is configured for the VM size otherwise **ResourceDisk** is used. Refer to the VM size documentation for Windows VM at https://docs.microsoft.com/azure/virtual-machines/windows/sizes and Linux VM at https://docs.microsoft.com/azure/virtual-machines/linux/sizes to check which VM sizes exposes a cache disk.
 */
export type DiffDiskPlacement = (typeof DiffDiskPlacement)[keyof typeof DiffDiskPlacement];

export const DiskControllerTypes = {
    SCSI: "SCSI",
    NVMe: "NVMe",
} as const;

/**
 * Specifies the disk controller type configured for the virtual machines in the scale set. Minimum api-version: 2022-08-01
 */
export type DiskControllerTypes = (typeof DiskControllerTypes)[keyof typeof DiskControllerTypes];

export const DiskCreateOptionTypes = {
    FromImage: "FromImage",
    Empty: "Empty",
    Attach: "Attach",
} as const;

/**
 * Specifies how the virtual machines in the scale set should be created. The only allowed value is: **FromImage.** This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described.
 */
export type DiskCreateOptionTypes = (typeof DiskCreateOptionTypes)[keyof typeof DiskCreateOptionTypes];

export const DiskDeleteOptionTypes = {
    Delete: "Delete",
    Detach: "Detach",
} as const;

/**
 * Specifies whether OS Disk should be deleted or detached upon VMSS Flex deletion (This feature is available for VMSS with Flexible OrchestrationMode only). <br><br> Possible values: <br><br> **Delete** If this value is used, the OS disk is deleted when VMSS Flex VM is deleted.<br><br> **Detach** If this value is used, the OS disk is retained after VMSS Flex VM is deleted. <br><br> The default value is set to **Delete**. For an Ephemeral OS Disk, the default value is set to **Delete**. User cannot change the delete option for Ephemeral OS Disk.
 */
export type DiskDeleteOptionTypes = (typeof DiskDeleteOptionTypes)[keyof typeof DiskDeleteOptionTypes];

export const DomainNameLabelScopeTypes = {
    TenantReuse: "TenantReuse",
    SubscriptionReuse: "SubscriptionReuse",
    ResourceGroupReuse: "ResourceGroupReuse",
    NoReuse: "NoReuse",
} as const;

/**
 * The Domain name label scope.The concatenation of the hashed domain name label that generated according to the policy from domain name label scope and vm index will be the domain name labels of the PublicIPAddress resources that will be created
 */
export type DomainNameLabelScopeTypes = (typeof DomainNameLabelScopeTypes)[keyof typeof DomainNameLabelScopeTypes];

export const EvictionPolicy = {
    /**
     * When evicted, the Spot VM will be deleted and the corresponding capacity will be updated to reflect this.
     */
    Delete: "Delete",
    /**
     * When evicted, the Spot VM will be deallocated/stopped
     */
    Deallocate: "Deallocate",
} as const;

/**
 * Eviction Policy to follow when evicting Spot VMs.
 */
export type EvictionPolicy = (typeof EvictionPolicy)[keyof typeof EvictionPolicy];

export const IPVersion = {
    IPv4: "IPv4",
    IPv6: "IPv6",
} as const;

/**
 * Available from Api-Version 2019-07-01 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4. Possible values are: 'IPv4' and 'IPv6'.
 */
export type IPVersion = (typeof IPVersion)[keyof typeof IPVersion];

export const LinuxPatchAssessmentMode = {
    ImageDefault: "ImageDefault",
    AutomaticByPlatform: "AutomaticByPlatform",
} as const;

/**
 * Specifies the mode of VM Guest Patch Assessment for the IaaS virtual machine.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - You control the timing of patch assessments on a virtual machine. <br /><br /> **AutomaticByPlatform** - The platform will trigger periodic patch assessments. The property provisionVMAgent must be true.
 */
export type LinuxPatchAssessmentMode = (typeof LinuxPatchAssessmentMode)[keyof typeof LinuxPatchAssessmentMode];

export const LinuxVMGuestPatchAutomaticByPlatformRebootSetting = {
    Unknown: "Unknown",
    IfRequired: "IfRequired",
    Never: "Never",
    Always: "Always",
} as const;

/**
 * Specifies the reboot setting for all AutomaticByPlatform patch installation operations.
 */
export type LinuxVMGuestPatchAutomaticByPlatformRebootSetting = (typeof LinuxVMGuestPatchAutomaticByPlatformRebootSetting)[keyof typeof LinuxVMGuestPatchAutomaticByPlatformRebootSetting];

export const LinuxVMGuestPatchMode = {
    ImageDefault: "ImageDefault",
    AutomaticByPlatform: "AutomaticByPlatform",
} as const;

/**
 * Specifies the mode of VM Guest Patching to IaaS virtual machine or virtual machines associated to virtual machine scale set with OrchestrationMode as Flexible.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - The virtual machine's default patching configuration is used. <br /><br /> **AutomaticByPlatform** - The virtual machine will be automatically updated by the platform. The property provisionVMAgent must be true
 */
export type LinuxVMGuestPatchMode = (typeof LinuxVMGuestPatchMode)[keyof typeof LinuxVMGuestPatchMode];

export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

/**
 * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const Mode = {
    Audit: "Audit",
    Enforce: "Enforce",
} as const;

/**
 * Specifies the mode that ProxyAgent will execute on if the feature is enabled. ProxyAgent will start to audit or monitor but not enforce access control over requests to host endpoints in Audit mode, while in Enforce mode it will enforce access control. The default value is Enforce mode.
 */
export type Mode = (typeof Mode)[keyof typeof Mode];

export const NetworkApiVersion = {
    NetworkApiVersion_2020_11_01: "2020-11-01",
} as const;

/**
 * specifies the Microsoft.Network API version used when creating networking resources in the Network Interface Configurations for Virtual Machine Scale Set with orchestration mode 'Flexible'
 */
export type NetworkApiVersion = (typeof NetworkApiVersion)[keyof typeof NetworkApiVersion];

export const NetworkInterfaceAuxiliaryMode = {
    None: "None",
    AcceleratedConnections: "AcceleratedConnections",
    Floating: "Floating",
} as const;

/**
 * Specifies whether the Auxiliary mode is enabled for the Network Interface resource.
 */
export type NetworkInterfaceAuxiliaryMode = (typeof NetworkInterfaceAuxiliaryMode)[keyof typeof NetworkInterfaceAuxiliaryMode];

export const NetworkInterfaceAuxiliarySku = {
    None: "None",
    A1: "A1",
    A2: "A2",
    A4: "A4",
    A8: "A8",
} as const;

/**
 * Specifies whether the Auxiliary sku is enabled for the Network Interface resource.
 */
export type NetworkInterfaceAuxiliarySku = (typeof NetworkInterfaceAuxiliarySku)[keyof typeof NetworkInterfaceAuxiliarySku];

export const OperatingSystemTypes = {
    Windows: "Windows",
    Linux: "Linux",
} as const;

/**
 * This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. Possible values are: **Windows,** **Linux.**
 */
export type OperatingSystemTypes = (typeof OperatingSystemTypes)[keyof typeof OperatingSystemTypes];

export const PassNames = {
    OobeSystem: "OobeSystem",
} as const;

/**
 * The pass name. Currently, the only allowable value is OobeSystem.
 */
export type PassNames = (typeof PassNames)[keyof typeof PassNames];

export const ProtocolTypes = {
    Http: "Http",
    Https: "Https",
} as const;

/**
 * Specifies the protocol of WinRM listener. Possible values are: **http,** **https.**
 */
export type ProtocolTypes = (typeof ProtocolTypes)[keyof typeof ProtocolTypes];

export const PublicIPAddressSkuName = {
    Basic: "Basic",
    Standard: "Standard",
} as const;

/**
 * Specify public IP sku name
 */
export type PublicIPAddressSkuName = (typeof PublicIPAddressSkuName)[keyof typeof PublicIPAddressSkuName];

export const PublicIPAddressSkuTier = {
    Regional: "Regional",
    Global: "Global",
} as const;

/**
 * Specify public IP sku tier
 */
export type PublicIPAddressSkuTier = (typeof PublicIPAddressSkuTier)[keyof typeof PublicIPAddressSkuTier];

export const RegularPriorityAllocationStrategy = {
    /**
     * Default. VM sizes distribution will be determined to optimize for price.
     */
    LowestPrice: "LowestPrice",
    /**
     * VM sizes distribution will be determined to optimize for the 'priority' as specified for each vm size.
     */
    Prioritized: "Prioritized",
} as const;

/**
 * Allocation strategy to follow when determining the VM sizes distribution for Regular VMs.
 */
export type RegularPriorityAllocationStrategy = (typeof RegularPriorityAllocationStrategy)[keyof typeof RegularPriorityAllocationStrategy];

export const SecurityEncryptionTypes = {
    VMGuestStateOnly: "VMGuestStateOnly",
    DiskWithVMGuestState: "DiskWithVMGuestState",
    NonPersistedTPM: "NonPersistedTPM",
} as const;

/**
 * Specifies the EncryptionType of the managed disk. It is set to DiskWithVMGuestState for encryption of the managed disk along with VMGuestState blob, VMGuestStateOnly for encryption of just the VMGuestState blob, and NonPersistedTPM for not persisting firmware state in the VMGuestState blob.. **Note:** It can be set for only Confidential VMs.
 */
export type SecurityEncryptionTypes = (typeof SecurityEncryptionTypes)[keyof typeof SecurityEncryptionTypes];

export const SecurityTypes = {
    TrustedLaunch: "TrustedLaunch",
    ConfidentialVM: "ConfidentialVM",
} as const;

/**
 * Specifies the SecurityType of the virtual machine. It has to be set to any specified value to enable UefiSettings. The default behavior is: UefiSettings will not be enabled unless this property is set.
 */
export type SecurityTypes = (typeof SecurityTypes)[keyof typeof SecurityTypes];

export const SettingNames = {
    AutoLogon: "AutoLogon",
    FirstLogonCommands: "FirstLogonCommands",
} as const;

/**
 * Specifies the name of the setting to which the content applies. Possible values are: FirstLogonCommands and AutoLogon.
 */
export type SettingNames = (typeof SettingNames)[keyof typeof SettingNames];

export const SpotAllocationStrategy = {
    /**
     * Default. VM sizes distribution will be determined to optimize for both price and capacity.
     */
    PriceCapacityOptimized: "PriceCapacityOptimized",
    /**
     * VM sizes distribution will be determined to optimize for price. Note: Capacity will still be considered here but will be given much less weight.
     */
    LowestPrice: "LowestPrice",
    /**
     * VM sizes distribution will be determined to optimize for capacity.
     */
    CapacityOptimized: "CapacityOptimized",
} as const;

/**
 * Allocation strategy to follow when determining the VM sizes distribution for Spot VMs.
 */
export type SpotAllocationStrategy = (typeof SpotAllocationStrategy)[keyof typeof SpotAllocationStrategy];

export const StatusLevelTypes = {
    Info: "Info",
    Warning: "Warning",
    Error: "Error",
} as const;

/**
 * The level code.
 */
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

/**
 * Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks, it cannot be used with OS Disk.
 */
export type StorageAccountTypes = (typeof StorageAccountTypes)[keyof typeof StorageAccountTypes];

export const VirtualMachineEvictionPolicyTypes = {
    Deallocate: "Deallocate",
    Delete: "Delete",
} as const;

/**
 * Specifies the eviction policy for the Azure Spot virtual machine and Azure Spot scale set. For Azure Spot virtual machines, both 'Deallocate' and 'Delete' are supported and the minimum api-version is 2019-03-01. For Azure Spot scale sets, both 'Deallocate' and 'Delete' are supported and the minimum api-version is 2017-10-30-preview.
 */
export type VirtualMachineEvictionPolicyTypes = (typeof VirtualMachineEvictionPolicyTypes)[keyof typeof VirtualMachineEvictionPolicyTypes];

export const VirtualMachinePriorityTypes = {
    Regular: "Regular",
    Low: "Low",
    Spot: "Spot",
} as const;

/**
 * Specifies the priority for the virtual machines in the scale set. Minimum api-version: 2017-10-30-preview.
 */
export type VirtualMachinePriorityTypes = (typeof VirtualMachinePriorityTypes)[keyof typeof VirtualMachinePriorityTypes];

export const WindowsPatchAssessmentMode = {
    ImageDefault: "ImageDefault",
    AutomaticByPlatform: "AutomaticByPlatform",
} as const;

/**
 * Specifies the mode of VM Guest patch assessment for the IaaS virtual machine.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - You control the timing of patch assessments on a virtual machine.<br /><br /> **AutomaticByPlatform** - The platform will trigger periodic patch assessments. The property provisionVMAgent must be true. 
 */
export type WindowsPatchAssessmentMode = (typeof WindowsPatchAssessmentMode)[keyof typeof WindowsPatchAssessmentMode];

export const WindowsVMGuestPatchAutomaticByPlatformRebootSetting = {
    Unknown: "Unknown",
    IfRequired: "IfRequired",
    Never: "Never",
    Always: "Always",
} as const;

/**
 * Specifies the reboot setting for all AutomaticByPlatform patch installation operations.
 */
export type WindowsVMGuestPatchAutomaticByPlatformRebootSetting = (typeof WindowsVMGuestPatchAutomaticByPlatformRebootSetting)[keyof typeof WindowsVMGuestPatchAutomaticByPlatformRebootSetting];

export const WindowsVMGuestPatchMode = {
    Manual: "Manual",
    AutomaticByOS: "AutomaticByOS",
    AutomaticByPlatform: "AutomaticByPlatform",
} as const;

/**
 * Specifies the mode of VM Guest Patching to IaaS virtual machine or virtual machines associated to virtual machine scale set with OrchestrationMode as Flexible.<br /><br /> Possible values are:<br /><br /> **Manual** - You  control the application of patches to a virtual machine. You do this by applying patches manually inside the VM. In this mode, automatic updates are disabled; the property WindowsConfiguration.enableAutomaticUpdates must be false<br /><br /> **AutomaticByOS** - The virtual machine will automatically be updated by the OS. The property WindowsConfiguration.enableAutomaticUpdates must be true. <br /><br /> **AutomaticByPlatform** - the virtual machine will automatically updated by the platform. The properties provisionVMAgent and WindowsConfiguration.enableAutomaticUpdates must be true 
 */
export type WindowsVMGuestPatchMode = (typeof WindowsVMGuestPatchMode)[keyof typeof WindowsVMGuestPatchMode];
