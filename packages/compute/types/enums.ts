export const AccessControlRulesMode = {
    Audit: "Audit",
    Enforce: "Enforce",
    Disabled: "Disabled",
} as const;

/**
 * This property allows you to specify whether the access control rules are in Audit mode, in Enforce mode or Disabled. Possible values are: 'Audit', 'Enforce' or 'Disabled'.
 */
export type AccessControlRulesMode = (typeof AccessControlRulesMode)[keyof typeof AccessControlRulesMode];

export const AllocationStrategy = {
    LowestPrice: "LowestPrice",
    CapacityOptimized: "CapacityOptimized",
    Prioritized: "Prioritized",
} as const;

/**
 * Specifies the allocation strategy for the virtual machine scale set based on which the VMs will be allocated.
 */
export type AllocationStrategy = (typeof AllocationStrategy)[keyof typeof AllocationStrategy];

export const Architecture = {
    X64: "x64",
    Arm64: "Arm64",
} as const;

/**
 * CPU architecture supported by an OS disk.
 */
export type Architecture = (typeof Architecture)[keyof typeof Architecture];

export const CachingTypes = {
    None: "None",
    ReadOnly: "ReadOnly",
    ReadWrite: "ReadWrite",
} as const;

/**
 * Specifies the caching requirements. Possible values are: **None,** **ReadOnly,** **ReadWrite.** The defaulting behavior is: **None for Standard storage. ReadOnly for Premium storage.**
 */
export type CachingTypes = (typeof CachingTypes)[keyof typeof CachingTypes];

export const CloudServiceSlotType = {
    Production: "Production",
    Staging: "Staging",
} as const;

/**
 * Slot type for the cloud service.
 * Possible values are <br /><br />**Production**<br /><br />**Staging**<br /><br />
 * If not specified, the default value is Production.
 */
export type CloudServiceSlotType = (typeof CloudServiceSlotType)[keyof typeof CloudServiceSlotType];

export const CloudServiceUpgradeMode = {
    Auto: "Auto",
    Manual: "Manual",
    Simultaneous: "Simultaneous",
} as const;

/**
 * Update mode for the cloud service. Role instances are allocated to update domains when the service is deployed. Updates can be initiated manually in each update domain or initiated automatically in all update domains.
 * Possible Values are <br /><br />**Auto**<br /><br />**Manual** <br /><br />**Simultaneous**<br /><br />
 * If not specified, the default value is Auto. If set to Manual, PUT UpdateDomain must be called to apply the update. If set to Auto, the update is automatically applied to each update domain in sequence.
 */
export type CloudServiceUpgradeMode = (typeof CloudServiceUpgradeMode)[keyof typeof CloudServiceUpgradeMode];

export const ComponentNames = {
    Microsoft_Windows_Shell_Setup: "Microsoft-Windows-Shell-Setup",
} as const;

/**
 * The component name. Currently, the only allowable value is Microsoft-Windows-Shell-Setup.
 */
export type ComponentNames = (typeof ComponentNames)[keyof typeof ComponentNames];

export const ConfidentialVMEncryptionType = {
    EncryptedVMGuestStateOnlyWithPmk: "EncryptedVMGuestStateOnlyWithPmk",
    EncryptedWithPmk: "EncryptedWithPmk",
    EncryptedWithCmk: "EncryptedWithCmk",
    NonPersistedTPM: "NonPersistedTPM",
} as const;

/**
 * confidential VM encryption types
 */
export type ConfidentialVMEncryptionType = (typeof ConfidentialVMEncryptionType)[keyof typeof ConfidentialVMEncryptionType];

export const ConsistencyModeTypes = {
    CrashConsistent: "CrashConsistent",
    FileSystemConsistent: "FileSystemConsistent",
    ApplicationConsistent: "ApplicationConsistent",
} as const;

/**
 * ConsistencyMode of the RestorePoint. Can be specified in the input while creating a restore point. For now, only CrashConsistent is accepted as a valid input. Please refer to https://aka.ms/RestorePoints for more details.
 */
export type ConsistencyModeTypes = (typeof ConsistencyModeTypes)[keyof typeof ConsistencyModeTypes];

export const CopyCompletionErrorReason = {
    /**
     * Indicates that the source snapshot was deleted while the background copy of the resource created via CopyStart operation was in progress.
     */
    CopySourceNotFound: "CopySourceNotFound",
} as const;

/**
 * Indicates the error code if the background copy of a resource created via the CopyStart operation fails.
 */
export type CopyCompletionErrorReason = (typeof CopyCompletionErrorReason)[keyof typeof CopyCompletionErrorReason];

export const DataAccessAuthMode = {
    /**
     * When export/upload URL is used, the system checks if the user has an identity in Azure Active Directory and has necessary permissions to export/upload the data. Please refer to aka.ms/DisksAzureADAuth.
     */
    AzureActiveDirectory: "AzureActiveDirectory",
    /**
     * No additional authentication would be performed when accessing export/upload URL.
     */
    None: "None",
} as const;

/**
 * Additional authentication requirements when exporting or uploading to a disk or snapshot.
 */
export type DataAccessAuthMode = (typeof DataAccessAuthMode)[keyof typeof DataAccessAuthMode];

export const DedicatedHostLicenseTypes = {
    None: "None",
    Windows_Server_Hybrid: "Windows_Server_Hybrid",
    Windows_Server_Perpetual: "Windows_Server_Perpetual",
} as const;

/**
 * Specifies the software license type that will be applied to the VMs deployed on the dedicated host. Possible values are: **None,** **Windows_Server_Hybrid,** **Windows_Server_Perpetual.** The default value is: **None.**
 */
export type DedicatedHostLicenseTypes = (typeof DedicatedHostLicenseTypes)[keyof typeof DedicatedHostLicenseTypes];

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
    NvmeDisk: "NvmeDisk",
} as const;

/**
 * Specifies the ephemeral disk placement for operating system disk. Possible values are: **CacheDisk,** **ResourceDisk,** **NvmeDisk.** The defaulting behavior is: **CacheDisk** if one is configured for the VM size otherwise **ResourceDisk** or **NvmeDisk** is used. Refer to the VM size documentation for Windows VM at https://docs.microsoft.com/azure/virtual-machines/windows/sizes and Linux VM at https://docs.microsoft.com/azure/virtual-machines/linux/sizes to check which VM sizes exposes a cache disk. Minimum api-version for NvmeDisk: 2024-03-01.
 */
export type DiffDiskPlacement = (typeof DiffDiskPlacement)[keyof typeof DiffDiskPlacement];

export const DiskControllerTypes = {
    SCSI: "SCSI",
    NVMe: "NVMe",
} as const;

/**
 * Specifies the disk controller type configured for the VM. **Note:** This property will be set to the default disk controller type if not specified provided virtual machine is being created with 'hyperVGeneration' set to V2 based on the capabilities of the operating system disk and VM size from the the specified minimum api version. You need to deallocate the VM before updating its disk controller type unless you are updating the VM size in the VM configuration which implicitly deallocates and reallocates the VM. Minimum api-version: 2022-08-01.
 */
export type DiskControllerTypes = (typeof DiskControllerTypes)[keyof typeof DiskControllerTypes];

export const DiskCreateOption = {
    /**
     * Create an empty data disk of a size given by diskSizeGB.
     */
    Empty: "Empty",
    /**
     * Disk will be attached to a VM.
     */
    Attach: "Attach",
    /**
     * Create a new disk from a platform image specified by the given imageReference or galleryImageReference.
     */
    FromImage: "FromImage",
    /**
     * Create a disk by importing from a blob specified by a sourceUri in a storage account specified by storageAccountId.
     */
    Import: "Import",
    /**
     * Create a new disk or snapshot by copying from a disk or snapshot specified by the given sourceResourceId.
     */
    Copy: "Copy",
    /**
     * Create a new disk by copying from a backup recovery point.
     */
    Restore: "Restore",
    /**
     * Create a new disk by obtaining a write token and using it to directly upload the contents of the disk.
     */
    Upload: "Upload",
    /**
     * Create a new disk by using a deep copy process, where the resource creation is considered complete only after all data has been copied from the source.
     */
    CopyStart: "CopyStart",
    /**
     * Similar to Import create option. Create a new Trusted Launch VM or Confidential VM supported disk by importing additional blob for VM guest state specified by securityDataUri in storage account specified by storageAccountId
     */
    ImportSecure: "ImportSecure",
    /**
     * Similar to Upload create option. Create a new Trusted Launch VM or Confidential VM supported disk and upload using write token in both disk and VM guest state
     */
    UploadPreparedSecure: "UploadPreparedSecure",
    /**
     * Create a new disk by exporting from elastic san volume snapshot
     */
    CopyFromSanSnapshot: "CopyFromSanSnapshot",
} as const;

/**
 * This enumerates the possible sources of a disk's creation.
 */
export type DiskCreateOption = (typeof DiskCreateOption)[keyof typeof DiskCreateOption];

export const DiskCreateOptionTypes = {
    FromImage: "FromImage",
    Empty: "Empty",
    Attach: "Attach",
    Copy: "Copy",
    Restore: "Restore",
} as const;

/**
 * Specifies how the virtual machine disk should be created. Possible values are **Attach:** This value is used when you are using a specialized disk to create the virtual machine. **FromImage:** This value is used when you are using an image to create the virtual machine. If you are using a platform image, you should also use the imageReference element described above. If you are using a marketplace image, you should also use the plan element previously described.
 */
export type DiskCreateOptionTypes = (typeof DiskCreateOptionTypes)[keyof typeof DiskCreateOptionTypes];

export const DiskDeleteOptionTypes = {
    Delete: "Delete",
    Detach: "Detach",
} as const;

/**
 * Specifies whether OS Disk should be deleted or detached upon VM deletion. Possible values are: **Delete.** If this value is used, the OS disk is deleted when VM is deleted. **Detach.** If this value is used, the os disk is retained after VM is deleted. The default value is set to **Detach**. For an ephemeral OS Disk, the default value is set to **Delete**. The user cannot change the delete option for an ephemeral OS Disk.
 */
export type DiskDeleteOptionTypes = (typeof DiskDeleteOptionTypes)[keyof typeof DiskDeleteOptionTypes];

export const DiskDetachOptionTypes = {
    ForceDetach: "ForceDetach",
} as const;

/**
 * Specifies the detach behavior to be used while detaching a disk or which is already in the process of detachment from the virtual machine. Supported values: **ForceDetach.** detachOption: **ForceDetach** is applicable only for managed data disks. If a previous detachment attempt of the data disk did not complete due to an unexpected failure from the virtual machine and the disk is still not released then use force-detach as a last resort option to detach the disk forcibly from the VM. All writes might not have been flushed when using this detach behavior. To force-detach a data disk update toBeDetached to 'true' along with setting detachOption: 'ForceDetach'.
 */
export type DiskDetachOptionTypes = (typeof DiskDetachOptionTypes)[keyof typeof DiskDetachOptionTypes];

export const DiskEncryptionSetIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
    None: "None",
} as const;

/**
 * The type of Managed Identity used by the DiskEncryptionSet. Only SystemAssigned is supported for new creations. Disk Encryption Sets can be updated with Identity type None during migration of subscription to a new Azure Active Directory tenant; it will cause the encrypted resources to lose access to the keys.
 */
export type DiskEncryptionSetIdentityType = (typeof DiskEncryptionSetIdentityType)[keyof typeof DiskEncryptionSetIdentityType];

export const DiskEncryptionSetType = {
    /**
     * Resource using diskEncryptionSet would be encrypted at rest with Customer managed key that can be changed and revoked by a customer.
     */
    EncryptionAtRestWithCustomerKey: "EncryptionAtRestWithCustomerKey",
    /**
     * Resource using diskEncryptionSet would be encrypted at rest with two layers of encryption. One of the keys is Customer managed and the other key is Platform managed.
     */
    EncryptionAtRestWithPlatformAndCustomerKeys: "EncryptionAtRestWithPlatformAndCustomerKeys",
    /**
     * Confidential VM supported disk and VM guest state would be encrypted with customer managed key.
     */
    ConfidentialVmEncryptedWithCustomerKey: "ConfidentialVmEncryptedWithCustomerKey",
} as const;

/**
 * The type of key used to encrypt the data of the disk.
 */
export type DiskEncryptionSetType = (typeof DiskEncryptionSetType)[keyof typeof DiskEncryptionSetType];

export const DiskSecurityTypes = {
    /**
     * Trusted Launch provides security features such as secure boot and virtual Trusted Platform Module (vTPM)
     */
    TrustedLaunch: "TrustedLaunch",
    /**
     * Indicates Confidential VM disk with only VM guest state encrypted
     */
    ConfidentialVM_VMGuestStateOnlyEncryptedWithPlatformKey: "ConfidentialVM_VMGuestStateOnlyEncryptedWithPlatformKey",
    /**
     * Indicates Confidential VM disk with both OS disk and VM guest state encrypted with a platform managed key
     */
    ConfidentialVM_DiskEncryptedWithPlatformKey: "ConfidentialVM_DiskEncryptedWithPlatformKey",
    /**
     * Indicates Confidential VM disk with both OS disk and VM guest state encrypted with a customer managed key
     */
    ConfidentialVM_DiskEncryptedWithCustomerKey: "ConfidentialVM_DiskEncryptedWithCustomerKey",
    /**
     * Indicates Confidential VM disk with a ephemeral vTPM. vTPM state is not persisted across VM reboots.
     */
    ConfidentialVM_NonPersistedTPM: "ConfidentialVM_NonPersistedTPM",
} as const;

/**
 * Specifies the SecurityType of the VM. Applicable for OS disks only.
 */
export type DiskSecurityTypes = (typeof DiskSecurityTypes)[keyof typeof DiskSecurityTypes];

export const DiskStorageAccountTypes = {
    /**
     * Standard HDD locally redundant storage. Best for backup, non-critical, and infrequent access.
     */
    Standard_LRS: "Standard_LRS",
    /**
     * Premium SSD locally redundant storage. Best for production and performance sensitive workloads.
     */
    Premium_LRS: "Premium_LRS",
    /**
     * Standard SSD locally redundant storage. Best for web servers, lightly used enterprise applications and dev/test.
     */
    StandardSSD_LRS: "StandardSSD_LRS",
    /**
     * Ultra SSD locally redundant storage. Best for IO-intensive workloads such as SAP HANA, top tier databases (for example, SQL, Oracle), and other transaction-heavy workloads.
     */
    UltraSSD_LRS: "UltraSSD_LRS",
    /**
     * Premium SSD zone redundant storage. Best for the production workloads that need storage resiliency against zone failures.
     */
    Premium_ZRS: "Premium_ZRS",
    /**
     * Standard SSD zone redundant storage. Best for web servers, lightly used enterprise applications and dev/test that need storage resiliency against zone failures.
     */
    StandardSSD_ZRS: "StandardSSD_ZRS",
    /**
     * Premium SSD v2 locally redundant storage. Best for production and performance-sensitive workloads that consistently require low latency and high IOPS and throughput.
     */
    PremiumV2_LRS: "PremiumV2_LRS",
} as const;

/**
 * The sku name.
 */
export type DiskStorageAccountTypes = (typeof DiskStorageAccountTypes)[keyof typeof DiskStorageAccountTypes];

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

export const EdgeZoneStorageAccountType = {
    Standard_LRS: "Standard_LRS",
    Standard_ZRS: "Standard_ZRS",
    StandardSSD_LRS: "StandardSSD_LRS",
    Premium_LRS: "Premium_LRS",
} as const;

/**
 * Specifies the storage account type to be used to store the image. This property is not updatable.
 */
export type EdgeZoneStorageAccountType = (typeof EdgeZoneStorageAccountType)[keyof typeof EdgeZoneStorageAccountType];

export const EncryptionType = {
    /**
     * Disk is encrypted at rest with Platform managed key. It is the default encryption type. This is not a valid encryption type for disk encryption sets.
     */
    EncryptionAtRestWithPlatformKey: "EncryptionAtRestWithPlatformKey",
    /**
     * Disk is encrypted at rest with Customer managed key that can be changed and revoked by a customer.
     */
    EncryptionAtRestWithCustomerKey: "EncryptionAtRestWithCustomerKey",
    /**
     * Disk is encrypted at rest with 2 layers of encryption. One of the keys is Customer managed and the other key is Platform managed.
     */
    EncryptionAtRestWithPlatformAndCustomerKeys: "EncryptionAtRestWithPlatformAndCustomerKeys",
} as const;

/**
 * The type of key used to encrypt the data of the disk.
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

export const EndpointAccess = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

/**
 * This property allows you to specify if the requests will be allowed to access the host endpoints. Possible values are: 'Allow', 'Deny'.
 */
export type EndpointAccess = (typeof EndpointAccess)[keyof typeof EndpointAccess];

export const EndpointTypes = {
    WireServer: "WireServer",
    IMDS: "IMDS",
} as const;

/**
 * This property allows you to specify the Endpoint type for which this profile is defining the access control for. Possible values are: 'WireServer' or 'IMDS'
 */
export type EndpointTypes = (typeof EndpointTypes)[keyof typeof EndpointTypes];

export const ExtendedLocationTypes = {
    EdgeZone: "EdgeZone",
} as const;

/**
 * The type of the extended location.
 */
export type ExtendedLocationTypes = (typeof ExtendedLocationTypes)[keyof typeof ExtendedLocationTypes];

export const GalleryApplicationCustomActionParameterType = {
    String: "String",
    ConfigurationDataBlob: "ConfigurationDataBlob",
    LogOutputBlob: "LogOutputBlob",
} as const;

/**
 * Specifies the type of the custom action parameter. Possible values are: String, ConfigurationDataBlob or LogOutputBlob
 */
export type GalleryApplicationCustomActionParameterType = (typeof GalleryApplicationCustomActionParameterType)[keyof typeof GalleryApplicationCustomActionParameterType];

export const GalleryApplicationScriptRebootBehavior = {
    None: "None",
    Rerun: "Rerun",
} as const;

/**
 * Optional. The action to be taken with regards to install/update/remove of the gallery application in the event of a reboot.
 */
export type GalleryApplicationScriptRebootBehavior = (typeof GalleryApplicationScriptRebootBehavior)[keyof typeof GalleryApplicationScriptRebootBehavior];

export const GalleryExtendedLocationType = {
    EdgeZone: "EdgeZone",
    Unknown: "Unknown",
} as const;

/**
 * It is type of the extended location.
 */
export type GalleryExtendedLocationType = (typeof GalleryExtendedLocationType)[keyof typeof GalleryExtendedLocationType];

export const GallerySharingPermissionTypes = {
    Private: "Private",
    Groups: "Groups",
    Community: "Community",
} as const;

/**
 * This property allows you to specify the permission of sharing gallery. Possible values are: **Private,** **Groups,** **Community.**
 */
export type GallerySharingPermissionTypes = (typeof GallerySharingPermissionTypes)[keyof typeof GallerySharingPermissionTypes];

export const HostCaching = {
    None: "None",
    ReadOnly: "ReadOnly",
    ReadWrite: "ReadWrite",
} as const;

/**
 * The host caching of the disk. Valid values are 'None', 'ReadOnly', and 'ReadWrite'
 */
export type HostCaching = (typeof HostCaching)[keyof typeof HostCaching];

export const HyperVGeneration = {
    V1: "V1",
    V2: "V2",
} as const;

/**
 * The hypervisor generation of the Virtual Machine. Applicable to OS disks only.
 */
export type HyperVGeneration = (typeof HyperVGeneration)[keyof typeof HyperVGeneration];

export const HyperVGenerationTypes = {
    V1: "V1",
    V2: "V2",
} as const;

/**
 * Specifies the HyperVGenerationType of the VirtualMachine created from the image. From API Version 2019-03-01 if the image source is a blob, then we need the user to specify the value, if the source is managed resource like disk or snapshot, we may require the user to specify the property if we cannot deduce it from the source managed resource.
 */
export type HyperVGenerationTypes = (typeof HyperVGenerationTypes)[keyof typeof HyperVGenerationTypes];

export const IPVersion = {
    IPv4: "IPv4",
    IPv6: "IPv6",
} as const;

/**
 * Available from Api-Version 2019-07-01 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4. Possible values are: 'IPv4' and 'IPv6'.
 */
export type IPVersion = (typeof IPVersion)[keyof typeof IPVersion];

export const IPVersions = {
    IPv4: "IPv4",
    IPv6: "IPv6",
} as const;

/**
 * Available from Api-Version 2019-07-01 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4. Possible values are: 'IPv4' and 'IPv6'.
 */
export type IPVersions = (typeof IPVersions)[keyof typeof IPVersions];

export const IntervalInMins = {
    ThreeMins: "ThreeMins",
    FiveMins: "FiveMins",
    ThirtyMins: "ThirtyMins",
    SixtyMins: "SixtyMins",
} as const;

/**
 * Interval value in minutes used to create LogAnalytics call rate logs.
 */
export type IntervalInMins = (typeof IntervalInMins)[keyof typeof IntervalInMins];

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

export const Mode = {
    Audit: "Audit",
    Enforce: "Enforce",
} as const;

/**
 * Specifies the mode that ProxyAgent will execute on. Warning: this property has been deprecated, please specify 'mode' under particular hostendpoint setting.
 */
export type Mode = (typeof Mode)[keyof typeof Mode];

export const Modes = {
    Audit: "Audit",
    Enforce: "Enforce",
    Disabled: "Disabled",
} as const;

/**
 * Specifies the execution mode. In Audit mode, the system acts as if it is enforcing the access control policy, including emitting access denial entries in the logs but it does not actually deny any requests to host endpoints. In Enforce mode, the system will enforce the access control and it is the recommended mode of operation.
 */
export type Modes = (typeof Modes)[keyof typeof Modes];

export const NetworkAccessPolicy = {
    /**
     * The disk can be exported or uploaded to from any network.
     */
    AllowAll: "AllowAll",
    /**
     * The disk can be exported or uploaded to using a DiskAccess resource's private endpoints.
     */
    AllowPrivate: "AllowPrivate",
    /**
     * The disk cannot be exported.
     */
    DenyAll: "DenyAll",
} as const;

/**
 * Policy for accessing the disk via network.
 */
export type NetworkAccessPolicy = (typeof NetworkAccessPolicy)[keyof typeof NetworkAccessPolicy];

export const NetworkApiVersion = {
    NetworkApiVersion_2020_11_01: "2020-11-01",
} as const;

/**
 * specifies the Microsoft.Network API version used when creating networking resources in the Network Interface Configurations
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

/**
 * The OS State. For managed images, use Generalized.
 */
export type OperatingSystemStateTypes = (typeof OperatingSystemStateTypes)[keyof typeof OperatingSystemStateTypes];

export const OperatingSystemTypes = {
    Windows: "Windows",
    Linux: "Linux",
} as const;

/**
 * This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. Possible values are: **Windows,** **Linux.**
 */
export type OperatingSystemTypes = (typeof OperatingSystemTypes)[keyof typeof OperatingSystemTypes];

export const OrchestrationMode = {
    Uniform: "Uniform",
    Flexible: "Flexible",
} as const;

/**
 * Specifies the orchestration mode for the virtual machine scale set.
 */
export type OrchestrationMode = (typeof OrchestrationMode)[keyof typeof OrchestrationMode];

export const PassNames = {
    OobeSystem: "OobeSystem",
} as const;

/**
 * The pass name. Currently, the only allowable value is OobeSystem.
 */
export type PassNames = (typeof PassNames)[keyof typeof PassNames];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

/**
 * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
 */
export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const ProtocolTypes = {
    Http: "Http",
    Https: "Https",
} as const;

/**
 * Specifies the protocol of WinRM listener. Possible values are: **http,** **https.**
 */
export type ProtocolTypes = (typeof ProtocolTypes)[keyof typeof ProtocolTypes];

export const ProvisionedBandwidthCopyOption = {
    None: "None",
    Enhanced: "Enhanced",
} as const;

/**
 * If this field is set on a snapshot and createOption is CopyStart, the snapshot will be copied at a quicker speed.
 */
export type ProvisionedBandwidthCopyOption = (typeof ProvisionedBandwidthCopyOption)[keyof typeof ProvisionedBandwidthCopyOption];

export const ProximityPlacementGroupType = {
    Standard: "Standard",
    Ultra: "Ultra",
} as const;

/**
 * Specifies the type of the proximity placement group. Possible values are: **Standard** : Co-locate resources within an Azure region or Availability Zone. **Ultra** : For future use.
 */
export type ProximityPlacementGroupType = (typeof ProximityPlacementGroupType)[keyof typeof ProximityPlacementGroupType];

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

export const PublicIPAllocationMethod = {
    Dynamic: "Dynamic",
    Static: "Static",
} as const;

/**
 * Specify the public IP allocation type
 */
export type PublicIPAllocationMethod = (typeof PublicIPAllocationMethod)[keyof typeof PublicIPAllocationMethod];

export const PublicNetworkAccess = {
    /**
     * You can generate a SAS URI to access the underlying data of the disk publicly on the internet when NetworkAccessPolicy is set to AllowAll. You can access the data via the SAS URI only from your trusted Azure VNET when NetworkAccessPolicy is set to AllowPrivate.
     */
    Enabled: "Enabled",
    /**
     * You cannot access the underlying data of the disk publicly on the internet even when NetworkAccessPolicy is set to AllowAll. You can access the data via the SAS URI only from your trusted Azure VNET when NetworkAccessPolicy is set to AllowPrivate.
     */
    Disabled: "Disabled",
} as const;

/**
 * Policy for controlling export on the disk.
 */
export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const RebalanceBehavior = {
    CreateBeforeDelete: "CreateBeforeDelete",
} as const;

/**
 * Type of rebalance behavior that will be used for recreating virtual machines in the scale set across availability zones. Default and only supported value for now is CreateBeforeDelete.
 */
export type RebalanceBehavior = (typeof RebalanceBehavior)[keyof typeof RebalanceBehavior];

export const RebalanceStrategy = {
    Recreate: "Recreate",
} as const;

/**
 * Type of rebalance strategy that will be used for rebalancing virtual machines in the scale set across availability zones. Default and only supported value for now is Recreate.
 */
export type RebalanceStrategy = (typeof RebalanceStrategy)[keyof typeof RebalanceStrategy];

export const RepairAction = {
    Replace: "Replace",
    Restart: "Restart",
    Reimage: "Reimage",
} as const;

/**
 * Type of repair action (replace, restart, reimage) that will be used for repairing unhealthy virtual machines in the scale set. Default value is replace.
 */
export type RepairAction = (typeof RepairAction)[keyof typeof RepairAction];

export const ReplicationMode = {
    Full: "Full",
    Shallow: "Shallow",
} as const;

/**
 * Optional parameter which specifies the mode to be used for replication. This property is not updatable.
 */
export type ReplicationMode = (typeof ReplicationMode)[keyof typeof ReplicationMode];

export const ResilientVMDeletionStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
    InProgress: "InProgress",
    Failed: "Failed",
} as const;

/**
 * Specifies the resilient VM deletion status for the virtual machine.
 */
export type ResilientVMDeletionStatus = (typeof ResilientVMDeletionStatus)[keyof typeof ResilientVMDeletionStatus];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
    None: "None",
} as const;

/**
 * The type of identity used for the virtual machine. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine.
 */
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

/**
 * The type of key used to encrypt the data of the disk restore point.
 */
export type RestorePointEncryptionType = (typeof RestorePointEncryptionType)[keyof typeof RestorePointEncryptionType];

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

export const SnapshotStorageAccountTypes = {
    /**
     * Standard HDD locally redundant storage
     */
    Standard_LRS: "Standard_LRS",
    /**
     * Premium SSD locally redundant storage
     */
    Premium_LRS: "Premium_LRS",
    /**
     * Standard zone redundant storage
     */
    Standard_ZRS: "Standard_ZRS",
} as const;

/**
 * The sku name.
 */
export type SnapshotStorageAccountTypes = (typeof SnapshotStorageAccountTypes)[keyof typeof SnapshotStorageAccountTypes];

export const StatusLevelTypes = {
    Info: "Info",
    Warning: "Warning",
    Error: "Error",
} as const;

/**
 * The level code.
 */
export type StatusLevelTypes = (typeof StatusLevelTypes)[keyof typeof StatusLevelTypes];

export const StorageAccountType = {
    Standard_LRS: "Standard_LRS",
    Standard_ZRS: "Standard_ZRS",
    Premium_LRS: "Premium_LRS",
    PremiumV2_LRS: "PremiumV2_LRS",
} as const;

/**
 * Specifies the storage account type to be used to store the image. This property is not updatable.
 */
export type StorageAccountType = (typeof StorageAccountType)[keyof typeof StorageAccountType];

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

export const UefiKeyType = {
    Sha256: "sha256",
    X509: "x509",
} as const;

/**
 * The type of key signature.
 */
export type UefiKeyType = (typeof UefiKeyType)[keyof typeof UefiKeyType];

export const UefiSignatureTemplateName = {
    NoSignatureTemplate: "NoSignatureTemplate",
    MicrosoftUefiCertificateAuthorityTemplate: "MicrosoftUefiCertificateAuthorityTemplate",
    MicrosoftWindowsTemplate: "MicrosoftWindowsTemplate",
} as const;

/**
 * The name of the signature template that contains default UEFI keys.
 */
export type UefiSignatureTemplateName = (typeof UefiSignatureTemplateName)[keyof typeof UefiSignatureTemplateName];

export const UpgradeMode = {
    Automatic: "Automatic",
    Manual: "Manual",
    Rolling: "Rolling",
} as const;

/**
 * Specifies the mode of an upgrade to virtual machines in the scale set.<br /><br /> Possible values are:<br /><br /> **Manual** - You  control the application of updates to virtual machines in the scale set. You do this by using the manualUpgrade action.<br /><br /> **Automatic** - All virtual machines in the scale set are  automatically updated at the same time.
 */
export type UpgradeMode = (typeof UpgradeMode)[keyof typeof UpgradeMode];

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

/**
 * Specifies the size of the virtual machine. The enum data type is currently deprecated and will be removed by December 23rd 2023. The recommended way to get the list of available sizes is using these APIs: [List all available virtual machine sizes in an availability set](https://docs.microsoft.com/rest/api/compute/availabilitysets/listavailablesizes), [List all available virtual machine sizes in a region]( https://docs.microsoft.com/rest/api/compute/resourceskus/list), [List all available virtual machine sizes for resizing](https://docs.microsoft.com/rest/api/compute/virtualmachines/listavailablesizes). For more information about virtual machine sizes, see [Sizes for virtual machines](https://docs.microsoft.com/azure/virtual-machines/sizes). The available VM sizes depend on region and availability set.
 */
export type VirtualMachineSizeTypes = (typeof VirtualMachineSizeTypes)[keyof typeof VirtualMachineSizeTypes];

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

export const ZonalPlatformFaultDomainAlignMode = {
    Aligned: "Aligned",
    Unaligned: "Unaligned",
} as const;

/**
 * Specifies the align mode between Virtual Machine Scale Set compute and storage Fault Domain count.
 */
export type ZonalPlatformFaultDomainAlignMode = (typeof ZonalPlatformFaultDomainAlignMode)[keyof typeof ZonalPlatformFaultDomainAlignMode];

export const ZonePlacementPolicyType = {
    Any: "Any",
} as const;

/**
 * Specifies the policy for virtual machine's placement in availability zone. Possible values are: **Any** - An availability zone will be automatically picked by system as part of virtual machine creation.
 */
export type ZonePlacementPolicyType = (typeof ZonePlacementPolicyType)[keyof typeof ZonePlacementPolicyType];
