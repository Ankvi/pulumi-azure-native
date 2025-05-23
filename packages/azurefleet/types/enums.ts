export const AcceleratorManufacturer = {
    /**
     * AMD GpuType
     */
    AMD: "AMD",
    /**
     * Nvidia GpuType
     */
    Nvidia: "Nvidia",
    /**
     * Xilinx GpuType
     */
    Xilinx: "Xilinx",
} as const;

/**
 * Accelerator manufacturers supported by Azure VMs.
 */
export type AcceleratorManufacturer = (typeof AcceleratorManufacturer)[keyof typeof AcceleratorManufacturer];

export const AcceleratorType = {
    /**
     * GPU Accelerator
     */
    GPU: "GPU",
    /**
     * FPGA Accelerator
     */
    FPGA: "FPGA",
} as const;

/**
 * Accelerator types supported by Azure VMs.
 */
export type AcceleratorType = (typeof AcceleratorType)[keyof typeof AcceleratorType];

export const ArchitectureType = {
    /**
     * ARM64 Architecture
     */
    ARM64: "ARM64",
    /**
     * X64 Architecture
     */
    X64: "X64",
} as const;

/**
 * Architecture types supported by Azure VMs.
 */
export type ArchitectureType = (typeof ArchitectureType)[keyof typeof ArchitectureType];

export const CachingTypes = {
    /**
     * 'None' is default for Standard Storage
     */
    None: "None",
    /**
     * 'ReadOnly' is default for Premium Storage
     */
    ReadOnly: "ReadOnly",
    /**
     * 'ReadWrite' is default for OS Disk
     */
    ReadWrite: "ReadWrite",
} as const;

/**
 * Specifies the caching requirements. Possible values are: **None,**
 * **ReadOnly,** **ReadWrite.** The default values are: **None for Standard
 * storage. ReadOnly for Premium storage.**
 */
export type CachingTypes = (typeof CachingTypes)[keyof typeof CachingTypes];

export const ComponentName = {
    Microsoft_Windows_Shell_Setup: "Microsoft-Windows-Shell-Setup",
} as const;

/**
 * The component name. Currently, the only allowable value is
 * Microsoft-Windows-Shell-Setup.
 */
export type ComponentName = (typeof ComponentName)[keyof typeof ComponentName];

export const CpuManufacturer = {
    /**
     * Intel CPU.
     */
    Intel: "Intel",
    /**
     * AMD CPU.
     */
    AMD: "AMD",
    /**
     * Microsoft CPU.
     */
    Microsoft: "Microsoft",
    /**
     * Ampere CPU.
     */
    Ampere: "Ampere",
} as const;

/**
 * Cpu Manufacturers  supported by Azure VMs.
 */
export type CpuManufacturer = (typeof CpuManufacturer)[keyof typeof CpuManufacturer];

export const DeleteOptions = {
    /**
     * Delete Option
     */
    Delete: "Delete",
    /**
     * Detach Option
     */
    Detach: "Detach",
} as const;

/**
 * Specify what happens to the public IP when the VM is deleted
 */
export type DeleteOptions = (typeof DeleteOptions)[keyof typeof DeleteOptions];

export const DiffDiskOptions = {
    /**
     * Local Option.
     */
    Local: "Local",
} as const;

/**
 * Specifies the ephemeral disk settings for operating system disk.
 */
export type DiffDiskOptions = (typeof DiffDiskOptions)[keyof typeof DiffDiskOptions];

export const DiffDiskPlacement = {
    /**
     * CacheDisk option.
     */
    CacheDisk: "CacheDisk",
    /**
     * Resource Disk option.
     */
    ResourceDisk: "ResourceDisk",
    /**
     * NvmeDisk option.
     */
    NvmeDisk: "NvmeDisk",
} as const;

/**
 * Specifies the ephemeral disk placement for operating system disk. Possible
 * values are: **CacheDisk,** **ResourceDisk.** The defaulting behavior is:
 * **CacheDisk** if one is configured for the VM size otherwise **ResourceDisk**
 * is used. Refer to the VM size documentation for Windows VM at
 * https://learn.microsoft.com/azure/virtual-machines/windows/sizes and Linux VM at
 * https://learn.microsoft.com/azure/virtual-machines/linux/sizes to check which VM
 * sizes exposes a cache disk.
 */
export type DiffDiskPlacement = (typeof DiffDiskPlacement)[keyof typeof DiffDiskPlacement];

export const DiskControllerTypes = {
    /**
     * SCSI disk type
     */
    SCSI: "SCSI",
    /**
     * NVMe disk type
     */
    NVMe: "NVMe",
} as const;

/**
 * Specifies the disk controller type configured for the virtual machines in the scale set. Minimum api-version: 2022-08-01
 */
export type DiskControllerTypes = (typeof DiskControllerTypes)[keyof typeof DiskControllerTypes];

export const DiskCreateOptionTypes = {
    /**
     * This value is used when you are using an image to create the virtual machine.
     * If you are using a platform image, you also use the imageReference element
     * described above. If you are using a marketplace image, you also use the
     * plan element previously described.
     */
    FromImage: "FromImage",
    /**
     * This value is used when creating an empty data disk.
     */
    Empty: "Empty",
    /**
     * This value is used when you are using a specialized disk to create the virtual machine.
     */
    Attach: "Attach",
    /**
     * This value is used to create a data disk from a snapshot or another disk.
     */
    Copy: "Copy",
    /**
     * This value is used to create a data disk from a disk restore point.
     */
    Restore: "Restore",
} as const;

/**
 * Specifies how the virtual machines in the scale set should be created. The only
 * allowed value is: **FromImage.** This value is used when you are using an image
 * to create the virtual machine. If you are using a platform image, you also use
 * the imageReference element described above. If you are using a marketplace
 * image, you  also use the plan element previously described.
 */
export type DiskCreateOptionTypes = (typeof DiskCreateOptionTypes)[keyof typeof DiskCreateOptionTypes];

export const DiskDeleteOptionTypes = {
    /**
     * If this value is used, the managed disk is deleted when VM gets deleted.
     */
    Delete: "Delete",
    /**
     * If this value is used, the managed disk is retained after VM gets deleted.
     */
    Detach: "Detach",
} as const;

/**
 * Specifies whether OS Disk should be deleted or detached upon VMSS Flex deletion
 * (This feature is available for VMSS with Flexible OrchestrationMode only).
 * <br><br> Possible values: <br><br> **Delete** If this value is used, the OS
 * disk is deleted when VMSS Flex VM is deleted.<br><br> **Detach** If this value
 * is used, the OS disk is retained after VMSS Flex VM is deleted. <br><br> The
 * default value is set to **Delete**. For an Ephemeral OS Disk, the default value
 * is set to **Delete**. User cannot change the delete option for Ephemeral OS
 * Disk.
 */
export type DiskDeleteOptionTypes = (typeof DiskDeleteOptionTypes)[keyof typeof DiskDeleteOptionTypes];

export const DomainNameLabelScopeTypes = {
    /**
     * TenantReuse type
     */
    TenantReuse: "TenantReuse",
    /**
     * SubscriptionReuse type
     */
    SubscriptionReuse: "SubscriptionReuse",
    /**
     * ResourceGroupReuse type
     */
    ResourceGroupReuse: "ResourceGroupReuse",
    /**
     * NoReuse type
     */
    NoReuse: "NoReuse",
} as const;

/**
 * The Domain name label scope.The concatenation of the hashed domain name label
 * that generated according to the policy from domain name label scope and vm
 * index will be the domain name labels of the PublicIPAddress resources that will
 * be created
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
    /**
     * IPv4 version
     */
    IPv4: "IPv4",
    /**
     * IPv6 version
     */
    IPv6: "IPv6",
} as const;

/**
 * Available from Api-Version 2019-07-01 onwards, it represents whether the
 * specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4. Possible
 * values are: 'IPv4' and 'IPv6'.
 */
export type IPVersion = (typeof IPVersion)[keyof typeof IPVersion];

export const LinuxPatchAssessmentMode = {
    /**
     * You control the timing of patch assessments on a virtual machine.
     */
    ImageDefault: "ImageDefault",
    /**
     * The platform will trigger periodic patch assessments.The property provisionVMAgent must be true.
     */
    AutomaticByPlatform: "AutomaticByPlatform",
} as const;

/**
 * Specifies the mode of VM Guest Patch Assessment for the IaaS virtual
 * machine.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - You
 * control the timing of patch assessments on a virtual machine. <br /><br />
 * **AutomaticByPlatform** - The platform will trigger periodic patch assessments.
 * The property provisionVMAgent must be true.
 */
export type LinuxPatchAssessmentMode = (typeof LinuxPatchAssessmentMode)[keyof typeof LinuxPatchAssessmentMode];

export const LinuxVMGuestPatchAutomaticByPlatformRebootSetting = {
    /**
     * Unknown Reboot setting
     */
    Unknown: "Unknown",
    /**
     * IfRequired Reboot setting
     */
    IfRequired: "IfRequired",
    /**
     * Never Reboot setting
     */
    Never: "Never",
    /**
     * Always Reboot setting
     */
    Always: "Always",
} as const;

/**
 * Specifies the reboot setting for all AutomaticByPlatform patch installation
 * operations.
 */
export type LinuxVMGuestPatchAutomaticByPlatformRebootSetting = (typeof LinuxVMGuestPatchAutomaticByPlatformRebootSetting)[keyof typeof LinuxVMGuestPatchAutomaticByPlatformRebootSetting];

export const LinuxVMGuestPatchMode = {
    /**
     * The virtual machine's default patching configuration is used.
     */
    ImageDefault: "ImageDefault",
    /**
     * The virtual machine will be automatically updated by the platform. The property provisionVMAgent must be true.
     */
    AutomaticByPlatform: "AutomaticByPlatform",
} as const;

/**
 * Specifies the mode of VM Guest Patching to IaaS virtual machine or virtual
 * machines associated to virtual machine scale set with OrchestrationMode as
 * Flexible.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - The
 * virtual machine's default patching configuration is used. <br /><br />
 * **AutomaticByPlatform** - The virtual machine will be automatically updated by
 * the platform. The property provisionVMAgent must be true
 */
export type LinuxVMGuestPatchMode = (typeof LinuxVMGuestPatchMode)[keyof typeof LinuxVMGuestPatchMode];

export const LocalStorageDiskType = {
    /**
     * HDD DiskType.
     */
    HDD: "HDD",
    /**
     * SDD DiskType.
     */
    SSD: "SSD",
} as const;

/**
 * Different kind of Local storage disk types supported by Azure VMs.
 */
export type LocalStorageDiskType = (typeof LocalStorageDiskType)[keyof typeof LocalStorageDiskType];

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
    /**
     * Audit Mode
     */
    Audit: "Audit",
    /**
     * Enforce Mode
     */
    Enforce: "Enforce",
} as const;

/**
 * Specifies the mode that ProxyAgent will execute on if the feature is enabled.
 * ProxyAgent will start to audit or monitor but not enforce access control over
 * requests to host endpoints in Audit mode, while in Enforce mode it will enforce
 * access control. The default value is Enforce mode.
 */
export type Mode = (typeof Mode)[keyof typeof Mode];

export const NetworkApiVersion = {
    /**
     * Initial version supported. Later versions are supported as well.
     */
    V2020_11_01: "2020-11-01",
} as const;

/**
 * specifies the Microsoft.Network API version used when creating networking
 * resources in the Network Interface Configurations for Virtual Machine Scale Set
 * with orchestration mode 'Flexible'
 */
export type NetworkApiVersion = (typeof NetworkApiVersion)[keyof typeof NetworkApiVersion];

export const NetworkInterfaceAuxiliaryMode = {
    /**
     * None Mode
     */
    None: "None",
    /**
     * AcceleratedConnections Mode
     */
    AcceleratedConnections: "AcceleratedConnections",
    /**
     * Floating Mode
     */
    Floating: "Floating",
} as const;

/**
 * Specifies whether the Auxiliary mode is enabled for the Network Interface
 * resource.
 */
export type NetworkInterfaceAuxiliaryMode = (typeof NetworkInterfaceAuxiliaryMode)[keyof typeof NetworkInterfaceAuxiliaryMode];

export const NetworkInterfaceAuxiliarySku = {
    /**
     * no sku
     */
    None: "None",
    /**
     * A1 sku
     */
    A1: "A1",
    /**
     * A2 sku
     */
    A2: "A2",
    /**
     * A4 sku
     */
    A4: "A4",
    /**
     * A8 sku
     */
    A8: "A8",
} as const;

/**
 * Specifies whether the Auxiliary sku is enabled for the Network Interface
 * resource.
 */
export type NetworkInterfaceAuxiliarySku = (typeof NetworkInterfaceAuxiliarySku)[keyof typeof NetworkInterfaceAuxiliarySku];

export const OperatingSystemTypes = {
    /**
     * Windows OS type
     */
    Windows: "Windows",
    /**
     * Linux OS type
     */
    Linux: "Linux",
} as const;

/**
 * This property allows you to specify the type of the OS that is included in the
 * disk if creating a VM from user-image or a specialized VHD. Possible values
 * are: **Windows,** **Linux.**
 */
export type OperatingSystemTypes = (typeof OperatingSystemTypes)[keyof typeof OperatingSystemTypes];

export const PassName = {
    OobeSystem: "OobeSystem",
} as const;

/**
 * The pass name. Currently, the only allowable value is OobeSystem.
 */
export type PassName = (typeof PassName)[keyof typeof PassName];

export const ProtocolTypes = {
    /**
     * Http protocol
     */
    Http: "Http",
    /**
     * Https protocol
     */
    Https: "Https",
} as const;

/**
 * Specifies the protocol of WinRM listener. Possible values are: **http,**
 * **https.**
 */
export type ProtocolTypes = (typeof ProtocolTypes)[keyof typeof ProtocolTypes];

export const PublicIPAddressSkuName = {
    /**
     * Basic sku name
     */
    Basic: "Basic",
    /**
     * Standard sku name
     */
    Standard: "Standard",
} as const;

/**
 * Specify public IP sku name
 */
export type PublicIPAddressSkuName = (typeof PublicIPAddressSkuName)[keyof typeof PublicIPAddressSkuName];

export const PublicIPAddressSkuTier = {
    /**
     * Regional sku tier
     */
    Regional: "Regional",
    /**
     * Global sku tier
     */
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
    /**
     * EncryptionType of the managed disk is set to VMGuestStateOnly for encryption
     * of just the VMGuestState blob.
     */
    VMGuestStateOnly: "VMGuestStateOnly",
    /**
     * EncryptionType of the managed disk is set to DiskWithVMGuestState for encryption
     * of the managed disk along with VMGuestState blob.
     */
    DiskWithVMGuestState: "DiskWithVMGuestState",
    /**
     * EncryptionType of the managed disk is set to NonPersistedTPM for not persisting
     * firmware state in the VMGuestState blob.
     */
    NonPersistedTPM: "NonPersistedTPM",
} as const;

/**
 * Specifies the EncryptionType of the managed disk. It is set to
 * DiskWithVMGuestState for encryption of the managed disk along with VMGuestState
 * blob, VMGuestStateOnly for encryption of just the VMGuestState blob, and
 * NonPersistedTPM for not persisting firmware state in the VMGuestState blob..
 * **Note:** It can be set for only Confidential VMs.
 */
export type SecurityEncryptionTypes = (typeof SecurityEncryptionTypes)[keyof typeof SecurityEncryptionTypes];

export const SecurityTypes = {
    /**
     * TrustedLaunch security type
     */
    TrustedLaunch: "TrustedLaunch",
    /**
     * ConfidentialVM security type
     */
    ConfidentialVM: "ConfidentialVM",
} as const;

/**
 * Specifies the SecurityType of the virtual machine. It has to be set to any
 * specified value to enable UefiSettings. The default behavior is: UefiSettings
 * will not be enabled unless this property is set.
 */
export type SecurityTypes = (typeof SecurityTypes)[keyof typeof SecurityTypes];

export const SettingNames = {
    /**
     * AutoLogon setting
     */
    AutoLogon: "AutoLogon",
    /**
     * FirstLogonCommands setting
     */
    FirstLogonCommands: "FirstLogonCommands",
} as const;

/**
 * Specifies the name of the setting to which the content applies. Possible values
 * are: FirstLogonCommands and AutoLogon.
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

export const StorageAccountTypes = {
    /**
     * Standard_LRS option.
     */
    Standard_LRS: "Standard_LRS",
    /**
     * Premium_LRS option.
     */
    Premium_LRS: "Premium_LRS",
    /**
     * StandardSSD_LRS option.
     */
    StandardSSD_LRS: "StandardSSD_LRS",
    /**
     * UltraSSD_LRS option.
     */
    UltraSSD_LRS: "UltraSSD_LRS",
    /**
     * Premium_ZRS option.
     */
    Premium_ZRS: "Premium_ZRS",
    /**
     * StandardSSD_ZRS option.
     */
    StandardSSD_ZRS: "StandardSSD_ZRS",
    /**
     * PremiumV2_LRS option.
     */
    PremiumV2_LRS: "PremiumV2_LRS",
} as const;

/**
 * Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can
 * only be used with data disks, it cannot be used with OS Disk.
 */
export type StorageAccountTypes = (typeof StorageAccountTypes)[keyof typeof StorageAccountTypes];

export const VMAttributeSupport = {
    /**
     * All VMSizes having the feature support will be excluded.
     */
    Excluded: "Excluded",
    /**
     *  VMSizes that have the feature support and that do not have the feature support will be used. Included is a union of Excluded and Required.
     */
    Included: "Included",
    /**
     * Only the VMSizes having the feature support will be used.
     */
    Required: "Required",
} as const;

/**
 * Specifies whether the VMSize supporting RDMA (Remote Direct Memory Access) should be used to build Fleet or not.
 */
export type VMAttributeSupport = (typeof VMAttributeSupport)[keyof typeof VMAttributeSupport];

export const VMCategory = {
    /**
     * General purpose VM sizes provide balanced CPU-to-memory ratio. Ideal for testing and development, small to medium databases, and low to medium traffic web servers.
     */
    GeneralPurpose: "GeneralPurpose",
    /**
     * Compute optimized VM sizes have a high CPU-to-memory ratio. These sizes are good for medium traffic web servers, network appliances, batch processes, and application servers.
     */
    ComputeOptimized: "ComputeOptimized",
    /**
     * Memory optimized VM sizes offer a high memory-to-CPU ratio that is great for relational database servers, medium to large caches, and in-memory analytics.
     */
    MemoryOptimized: "MemoryOptimized",
    /**
     * Storage optimized virtual machine (VM) sizes offer high disk throughput and IO, and are ideal for Big Data, SQL, NoSQL databases, data warehousing, and large transactional databases. 
     * Examples include Cassandra, MongoDB, Cloudera, and Redis.
     */
    StorageOptimized: "StorageOptimized",
    /**
     * GPU optimized VM sizes are specialized virtual machines available with single, multiple, or fractional GPUs. 
     * These sizes are designed for compute-intensive, graphics-intensive, and visualization workloads.
     */
    GpuAccelerated: "GpuAccelerated",
    /**
     * FPGA optimized VM sizes are specialized virtual machines available with single or multiple FPGA. 
     * These sizes are designed for compute-intensive workloads. This article provides information about the number and type of FPGA, vCPUs, data disks, and NICs. 
     * Storage throughput and network bandwidth are also included for each size in this grouping.
     */
    FpgaAccelerated: "FpgaAccelerated",
    /**
     * Azure High Performance Compute VMs are optimized for various HPC workloads such as computational fluid dynamics, finite element analysis, frontend and backend EDA, 
     * rendering, molecular dynamics, computational geo science, weather simulation, and financial risk analysis.
     */
    HighPerformanceCompute: "HighPerformanceCompute",
} as const;

/**
 * VMCategories defined for Azure VMs.
 * See: https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/overview?tabs=breakdownseries%2Cgeneralsizelist%2Ccomputesizelist%2Cmemorysizelist%2Cstoragesizelist%2Cgpusizelist%2Cfpgasizelist%2Chpcsizelist#general-purpose
 */
export type VMCategory = (typeof VMCategory)[keyof typeof VMCategory];

export const WindowsPatchAssessmentMode = {
    /**
     * You control the timing of patch assessments on a virtual machine.
     */
    ImageDefault: "ImageDefault",
    /**
     * The platform will trigger periodic patch assessments. The property provisionVMAgent must be true.
     */
    AutomaticByPlatform: "AutomaticByPlatform",
} as const;

/**
 * Specifies the mode of VM Guest patch assessment for the IaaS virtual
 * machine.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - You
 * control the timing of patch assessments on a virtual machine.<br /><br />
 * **AutomaticByPlatform** - The platform will trigger periodic patch assessments.
 * The property provisionVMAgent must be true.
 */
export type WindowsPatchAssessmentMode = (typeof WindowsPatchAssessmentMode)[keyof typeof WindowsPatchAssessmentMode];

export const WindowsVMGuestPatchAutomaticByPlatformRebootSetting = {
    /**
     * Unknown Reboot setting
     */
    Unknown: "Unknown",
    /**
     * IfRequired Reboot setting
     */
    IfRequired: "IfRequired",
    /**
     * Never Reboot setting
     */
    Never: "Never",
    /**
     * Always Reboot setting
     */
    Always: "Always",
} as const;

/**
 * Specifies the reboot setting for all AutomaticByPlatform patch installation
 * operations.
 */
export type WindowsVMGuestPatchAutomaticByPlatformRebootSetting = (typeof WindowsVMGuestPatchAutomaticByPlatformRebootSetting)[keyof typeof WindowsVMGuestPatchAutomaticByPlatformRebootSetting];

export const WindowsVMGuestPatchMode = {
    /**
     * You control the application of patches to a virtual machine.
     * You do this by applying patches manually inside the VM. In this mode,
     * automatic updates are disabled; the property WindowsConfiguration.enableAutomaticUpdates
     * must be false
     */
    Manual: "Manual",
    /**
     * The virtual machine will automatically be updated by the OS.
     * The property WindowsConfiguration.enableAutomaticUpdates must be true.
     */
    AutomaticByOS: "AutomaticByOS",
    /**
     * The virtual machine will automatically updated by the platform. The properties
     * provisionVMAgent and WindowsConfiguration.enableAutomaticUpdates must be true.
     */
    AutomaticByPlatform: "AutomaticByPlatform",
} as const;

/**
 * Specifies the mode of VM Guest Patching to IaaS virtual machine or virtual
 * machines associated to virtual machine scale set with OrchestrationMode as
 * Flexible.<br /><br /> Possible values are:<br /><br /> **Manual** - You
 * control the application of patches to a virtual machine. You do this by
 * applying patches manually inside the VM. In this mode, automatic updates are
 * disabled; the property WindowsConfiguration.enableAutomaticUpdates must be
 * false<br /><br /> **AutomaticByOS** - The virtual machine will automatically be
 * updated by the OS. The property WindowsConfiguration.enableAutomaticUpdates
 * must be true. <br /><br /> **AutomaticByPlatform** - the virtual machine will
 * automatically updated by the platform. The properties provisionVMAgent and
 * WindowsConfiguration.enableAutomaticUpdates must be true
 */
export type WindowsVMGuestPatchMode = (typeof WindowsVMGuestPatchMode)[keyof typeof WindowsVMGuestPatchMode];
