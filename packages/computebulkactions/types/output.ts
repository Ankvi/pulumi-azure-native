import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Enables or disables a capability on the virtual machine or virtual machine scale set.
 */
export interface AdditionalCapabilitiesResponse {
    /**
     * The flag that enables or disables hibernation capability on the VM.
     */
    hibernationEnabled?: boolean;
    /**
     * The flag that enables or disables a capability to have one or more managed data disks with UltraSSD_LRS storage account type on the VM or VMSS. Managed disks with storage account type UltraSSD_LRS can be added to a virtual machine or virtual machine scale set only if this property is enabled.
     */
    ultraSSDEnabled?: boolean;
}

/**
 * Specifies additional XML formatted information that can be included in the Unattend.xml file, which is used by Windows Setup. Contents are defined by setting name, component name, and the pass in which the content is applied.
 */
export interface AdditionalUnattendContentResponse {
    /**
     * The component name. Currently, the only allowable value is Microsoft-Windows-Shell-Setup.
     */
    componentName?: string;
    /**
     * Specifies the XML formatted content that is added to the unattend.xml file for the specified path and component. The XML must be less than 4KB and must include the root element for the setting or feature that is being inserted.
     */
    content?: string;
    /**
     * The pass name. Currently, the only allowable value is OobeSystem.
     */
    passName?: string;
    /**
     * Specifies the name of the setting to which the content applies. Possible values are: FirstLogonCommands and AutoLogon.
     */
    settingName?: string;
}

/**
 * Specifies if Scheduled Events should be auto-approved when all instances are down.
 */
export interface AllInstancesDownResponse {
    /**
     * Specifies if Scheduled Events should be auto-approved when all instances are down. Its default value is true.
     */
    automaticallyApprove?: boolean;
}

/**
 * The API entity reference.
 */
export interface ApiEntityReferenceResponse {
    /**
     * The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...
     */
    id?: string;
}

/**
 * Contains the list of gallery applications that should be made available to the VM
 */
export interface ApplicationProfileResponse {
    /**
     * Specifies the gallery applications that should be made available to the VM
     */
    galleryApplications?: VMGalleryApplicationResponse[];
}

/**
 * Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status. You can easily view the output of your console log. Azure also enables you to see a screenshot of the VM from the hypervisor.
 */
export interface BootDiagnosticsResponse {
    /**
     * Whether boot diagnostics should be enabled on the Virtual Machine.
     */
    enabled?: boolean;
    /**
     * Uri of the storage account to use for placing the console output and screenshot. If storageUri is not specified while enabling boot diagnostics, managed storage will be used.
     */
    storageUri?: string;
}

/**
 * The parameters of a capacity reservation Profile.
 */
export interface CapacityReservationProfileResponse {
    /**
     * Specifies the capacity reservation group resource id that should be used for allocating the virtual machine provided enough capacity has been reserved. Please refer to https://aka.ms/CapacityReservation for more details.
     */
    capacityReservationGroup?: SubResourceResponse;
}

/**
 * Compute Profile to configure the Virtual Machines.
 */
export interface ComputeProfileResponse {
    /**
     * Specifies the Microsoft.Compute API version to use when creating underlying Virtual Machines.
     * The default value will be the latest supported computeApiVersion by LaunchBulkInstancesOperation.
     */
    computeApiVersion?: string;
    /**
     * Virtual Machine Extensions Array to be specified according to "specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/{computeApiVersion}/virtualMachine.json#/definitions/VirtualMachineExtension"
     */
    extensions?: VirtualMachineExtensionResponse[];
    /**
     * Base Virtual Machine Profile Properties to be specified according to "specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/{computeApiVersion}/virtualMachine.json#/definitions/VirtualMachineProperties"
     */
    virtualMachineProfile: VirtualMachineProfileResponse;
}

/**
 * Describes a data disk.
 */
export interface DataDiskResponse {
    /**
     * Specifies the caching requirements. Possible values are: None, ReadOnly, ReadWrite. The defaulting behavior is: None for Standard storage. ReadOnly for Premium storage.
     */
    caching?: string;
    /**
     * Specifies how the virtual machine disk should be created. Possible values are Attach, FromImage, Empty, Copy, Restore.
     */
    createOption: string;
    /**
     * Specifies whether data disk should be deleted or detached upon VM deletion. Possible values are: Delete, Detach. The default value is set to Detach.
     */
    deleteOption?: string;
    /**
     * Specifies the detach behavior to be used while detaching a disk or which is already in the process of detachment from the virtual machine. Supported values: ForceDetach. This feature is still in preview. To force-detach a data disk update toBeDetached to 'true' along with setting detachOption: 'ForceDetach'.
     */
    detachOption?: string;
    /**
     * Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. The property 'diskSizeGB' is the number of bytes x 1024^3 for the disk and the value cannot be larger than 1023.
     */
    diskSizeGB?: number;
    /**
     * The source user image virtual hard disk. The virtual hard disk will be copied before being attached to the virtual machine. If SourceImage is provided, the destination virtual hard drive must not exist.
     */
    image?: VirtualHardDiskResponse;
    /**
     * Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
     */
    lun: number;
    /**
     * The managed disk parameters.
     */
    managedDisk?: ManagedDiskParametersResponse;
    /**
     * The disk name.
     */
    name?: string;
    /**
     * The source resource identifier. It can be a snapshot, or disk restore point from which to create a disk.
     */
    sourceResource?: ApiEntityReferenceResponse;
    /**
     * Specifies whether the data disk is in process of detachment from the VirtualMachine/VirtualMachineScaleset.
     */
    toBeDetached?: boolean;
    /**
     * The virtual hard disk.
     */
    vhd?: VirtualHardDiskResponse;
    /**
     * Specifies whether writeAccelerator should be enabled or disabled on the disk.
     */
    writeAcceleratorEnabled?: boolean;
}

/**
 * Specifies the boot diagnostic settings state. Minimum compute api-version: 2015-06-15.
 */
export interface DiagnosticsProfileResponse {
    /**
     * Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status. **NOTE**: If storageUri is being specified then ensure that the storage account is in the same region and subscription as the VM. You can easily view the output of your console log. Azure also enables you to see a screenshot of the VM from the hypervisor.
     */
    bootDiagnostics?: BootDiagnosticsResponse;
}

/**
 * Describes the parameters of ephemeral disk settings that can be specified for operating system disk. Note: The ephemeral disk settings can only be specified for managed disk.
 */
export interface DiffDiskSettingsResponse {
    /**
     * Specifies the ephemeral disk settings for operating system disk.
     */
    option?: string;
    /**
     * Specifies the ephemeral disk placement for operating system disk. Possible values are: CacheDisk, ResourceDisk, NvmeDisk. The defaulting behavior is: CacheDisk if one is configured for the VM size otherwise ResourceDisk or NvmeDisk is used. Minimum api-version for NvmeDisk: 2024-03-01.
     */
    placement?: string;
}

/**
 * Describes the parameter of customer managed disk encryption set resource id that can be specified for disk. **Note:** The disk encryption set resource id can only be specified for managed disk. Please refer https://aka.ms/mdssewithcmkoverview for more details.
 */
export interface DiskEncryptionSetParametersResponse {
    /**
     * The ID of the sub-resource.
     */
    id?: string;
}

/**
 * Describes a Encryption Settings for a Disk
 */
export interface DiskEncryptionSettingsResponse {
    /**
     * Specifies the location of the disk encryption key, which is a Key Vault Secret.
     */
    diskEncryptionKey?: KeyVaultSecretReferenceResponse;
    /**
     * Specifies whether disk encryption should be enabled on the virtual machine.
     */
    enabled?: boolean;
    /**
     * Specifies the location of the key encryption key in Key Vault.
     */
    keyEncryptionKey?: KeyVaultKeyReferenceResponse;
}

/**
 * Specifies the Managed Identity used by ADE to get access token for keyvault operations.
 */
export interface EncryptionIdentityResponse {
    /**
     * Specifies ARM Resource ID of one of the user identities associated with the VM.
     */
    userAssignedIdentityResourceId?: string;
}

/**
 * Specifies eventGridAndResourceGraph related Scheduled Event related configurations.
 */
export interface EventGridAndResourceGraphResponse {
    /**
     * Specifies if event grid and resource graph is enabled for Scheduled event related configurations.
     */
    enable?: boolean;
    /**
     * Specifies the api-version to determine which Scheduled Events configuration schema version will be delivered.
     */
    scheduledEventsApiVersion?: string;
}

/**
 * Specifies particular host endpoint settings.
 */
export interface HostEndpointSettingsResponse {
    /**
     * Specifies the InVMAccessControlProfileVersion resource id in the format of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/inVMAccessControlProfiles/{profile}/versions/{version}
     */
    inVMAccessControlProfileReferenceId?: string;
    /**
     * Specifies the execution mode. In Audit mode, the system acts as if it is enforcing the access control policy, including emitting access denial entries in the logs but it does not actually deny any requests to host endpoints. In Enforce mode, the system will enforce the access control and it is the recommended mode of operation.
     */
    mode?: string;
}

/**
 * Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations. NOTE: Image reference publisher and offer can only be set when you create the scale set.
 */
export interface ImageReferenceResponse {
    /**
     * Specified the community gallery image unique id for vm deployment. This can be fetched from community gallery image GET call.
     */
    communityGalleryImageId?: string;
    /**
     * The ID of the sub-resource.
     */
    id?: string;
    /**
     * Specifies the offer of the platform image or marketplace image used to create the virtual machine.
     */
    offer?: string;
    /**
     * The image publisher.
     */
    publisher?: string;
    /**
     * Specified the shared gallery image unique id for vm deployment. This can be fetched from shared gallery image GET call.
     */
    sharedGalleryImageId?: string;
    /**
     * The image SKU.
     */
    sku?: string;
    /**
     * Specifies the version of the platform image or marketplace image used to create the virtual machine. The allowed formats are Major.Minor.Build or 'latest'. Major, Minor, and Build are decimal numbers. Specify 'latest' to use the latest version of an image available at deploy time. Even if you use 'latest', the VM image will not automatically update after deploy time even if a new version becomes available. Please do not use field 'version' for gallery image deployment, gallery image should always use 'id' field for deployment, to use 'latest' version of gallery image, just set '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{imageName}' in the 'id' field without version input.
     */
    version?: string;
}

/**
 * Describes a reference to Key Vault Key
 */
export interface KeyVaultKeyReferenceResponse {
    /**
     * The URL referencing a key encryption key in Key Vault.
     */
    keyUrl: string;
    /**
     * The relative URL of the Key Vault containing the key.
     */
    sourceVault: SubResourceResponse;
}

/**
 * Describes a reference to Key Vault Secret
 */
export interface KeyVaultSecretReferenceResponse {
    /**
     * The URL referencing a secret in a Key Vault.
     */
    secretUrl: string;
    /**
     * The relative URL of the Key Vault containing the secret.
     */
    sourceVault: SubResourceResponse;
}

/**
 * Details of the LaunchBulkInstancesOperation.
 */
export interface LaunchBulkInstancesOperationPropertiesResponse {
    /**
     * Total capacity to achieve. It can be in terms of VMs or vCPUs.
     */
    capacity: number;
    /**
     * Specifies capacity type for launching instances. It can be in terms of VMs or vCPUs.
     */
    capacityType?: string;
    /**
     * Compute Profile to configure the Virtual Machines.
     */
    computeProfile: ComputeProfileResponse;
    /**
     * Configuration Options for Regular or Spot instances in LaunchBulkInstancesOperation.
     */
    priorityProfile: PriorityProfileResponse;
    /**
     * The status of the last operation.
     */
    provisioningState: string;
    /**
     * Retry policy the user can pass
     */
    retryPolicy?: RetryPolicyResponse;
    /**
     * Attributes to launch instances.
     */
    vmAttributes?: VMAttributesResponse;
    /**
     * List of VM sizes supported for LaunchBulkInstancesOperation
     */
    vmSizesProfile?: VmSizeProfileResponse[];
    /**
     * Zone Allocation Policy for launching instances.
     */
    zoneAllocationPolicy?: ZoneAllocationPolicyResponse;
}

/**
 * Specifies the Linux operating system settings on the virtual machine. For a list of supported Linux distributions, see [Linux on Azure-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/linux/endorsed-distros).
 */
export interface LinuxConfigurationResponse {
    /**
     * Specifies whether password authentication should be disabled.
     */
    disablePasswordAuthentication?: boolean;
    /**
     * Indicates whether VMAgent Platform Updates is enabled for the Linux virtual machine. Default value is false.
     */
    enableVMAgentPlatformUpdates?: boolean;
    /**
     * [Preview Feature] Specifies settings related to VM Guest Patching on Linux.
     */
    patchSettings?: LinuxPatchSettingsResponse;
    /**
     * Indicates whether virtual machine agent should be provisioned on the virtual machine. When this property is not specified in the request body, default behavior is to set it to true. This will ensure that VM Agent is installed on the VM so that extensions can be added to the VM later.
     */
    provisionVMAgent?: boolean;
    /**
     * Specifies the ssh key configuration for a Linux OS.
     */
    ssh?: SshConfigurationResponse;
}

/**
 * Specifies settings related to VM Guest Patching on Linux.
 */
export interface LinuxPatchSettingsResponse {
    /**
     * Specifies the mode of VM Guest Patch Assessment for the IaaS virtual machine.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - You control the timing of patch assessments on a virtual machine. <br /><br /> **AutomaticByPlatform** - The platform will trigger periodic patch assessments. The property provisionVMAgent must be true.
     */
    assessmentMode?: string;
    /**
     * Specifies additional settings for patch mode AutomaticByPlatform in VM Guest Patching on Linux.
     */
    automaticByPlatformSettings?: LinuxVMGuestPatchAutomaticByPlatformSettingsResponse;
    /**
     * Specifies the mode of VM Guest Patching to IaaS virtual machine or virtual machines associated to virtual machine scale set with OrchestrationMode as Flexible.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - The virtual machine's default patching configuration is used. <br /><br /> **AutomaticByPlatform** - The virtual machine will be automatically updated by the platform. The property provisionVMAgent must be true
     */
    patchMode?: string;
}

/**
 * Specifies additional settings to be applied when patch mode AutomaticByPlatform is selected in Linux patch settings.
 */
export interface LinuxVMGuestPatchAutomaticByPlatformSettingsResponse {
    /**
     * Enables customer to schedule patching without accidental upgrades
     */
    bypassPlatformSafetyChecksOnUserSchedule?: boolean;
    /**
     * Specifies the reboot setting for all AutomaticByPlatform patch installation operations.
     */
    rebootSetting?: string;
}

/**
 * The parameters of a managed disk.
 */
export interface ManagedDiskParametersResponse {
    /**
     * Specifies the customer managed disk encryption set resource id for the managed disk.
     */
    diskEncryptionSet?: DiskEncryptionSetParametersResponse;
    /**
     * The ID of the sub-resource.
     */
    id?: string;
    /**
     * Specifies the security profile for the managed disk.
     */
    securityProfile?: VMDiskSecurityProfileResponse;
    /**
     * Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks, it cannot be used with OS Disk.
     */
    storageAccountType?: string;
}

/**
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityResponse {
    /**
     * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    principalId: string;
    /**
     * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    tenantId: string;
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: string;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
}

/**
 * Describes a network interface reference properties.
 */
export interface NetworkInterfaceReferencePropertiesResponse {
    /**
     * Specify what happens to the network interface when the VM is deleted
     */
    deleteOption?: string;
    /**
     * Specifies the primary network interface in case the virtual machine has more than 1 network interface.
     */
    primary?: boolean;
}

/**
 * Describes a network interface reference.
 */
export interface NetworkInterfaceReferenceResponse {
    /**
     * The ID of the sub-resource.
     */
    id?: string;
    /**
     * Describes a network interface reference properties.
     */
    properties?: NetworkInterfaceReferencePropertiesResponse;
}

/**
 * Specifies the network interfaces or the networking configuration of the virtual machine.
 */
export interface NetworkProfileResponse {
    /**
     * specifies the Microsoft.Network API version used when creating networking resources in the Network Interface Configurations
     */
    networkApiVersion?: string;
    /**
     * Specifies the networking configurations that will be used to create the virtual machine networking resources.
     */
    networkInterfaceConfigurations?: VirtualMachineNetworkInterfaceConfigurationResponse[];
    /**
     * Specifies the list of resource Ids for the network interfaces associated with the virtual machine.
     */
    networkInterfaces?: NetworkInterfaceReferenceResponse[];
}

/**
 * Specifies information about the operating system disk used by the virtual machine. For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/managed-disks-overview).
 */
export interface OSDiskResponse {
    /**
     * Specifies the caching requirements. Possible values are: None, ReadOnly, ReadWrite. The defaulting behavior is: None for Standard storage. ReadOnly for Premium storage.
     */
    caching?: string;
    /**
     * Specifies how the virtual machine disk should be created. Possible values are Attach, FromImage. If you are using a platform image, you should also use the imageReference element described above. If you are using a marketplace image, you should also use the plan element previously described.
     */
    createOption: string;
    /**
     * Specifies whether OS Disk should be deleted or detached upon VM deletion. Possible values are: Delete, Detach. The default value is set to Detach. For an ephemeral OS Disk, the default value is set to Delete. The user cannot change the delete option for an ephemeral OS Disk.
     */
    deleteOption?: string;
    /**
     * Specifies the ephemeral Disk Settings for the operating system disk used by the virtual machine.
     */
    diffDiskSettings?: DiffDiskSettingsResponse;
    /**
     * Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. The property 'diskSizeGB' is the number of bytes x 1024^3 for the disk and the value cannot be larger than 1023.
     */
    diskSizeGB?: number;
    /**
     * Specifies the encryption settings for the OS Disk. Minimum compute api-version: 2015-06-15.
     */
    encryptionSettings?: DiskEncryptionSettingsResponse;
    /**
     * The source user image virtual hard disk. The virtual hard disk will be copied before being attached to the virtual machine. If SourceImage is provided, the destination virtual hard drive must not exist.
     */
    image?: VirtualHardDiskResponse;
    /**
     * The managed disk parameters.
     */
    managedDisk?: ManagedDiskParametersResponse;
    /**
     * The disk name.
     */
    name?: string;
    /**
     * This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. Possible values are: Windows, Linux.
     */
    osType?: string;
    /**
     * The virtual hard disk.
     */
    vhd?: VirtualHardDiskResponse;
    /**
     * Specifies whether writeAccelerator should be enabled or disabled on the disk.
     */
    writeAcceleratorEnabled?: boolean;
}

/**
 * Profile for the OS Image Scheduled event.
 */
export interface OSImageNotificationProfileResponse {
    /**
     * Specifies whether the OS Image Scheduled event is enabled or disabled.
     */
    enable?: boolean;
    /**
     * Length of time a Virtual Machine being reimaged or having its OS upgraded will have to potentially approve the OS Image Scheduled Event before the event is auto approved (timed out). The configuration is specified in ISO 8601 format, and the value must be 15 minutes (PT15M)
     */
    notBeforeTimeout?: string;
}

/**
 * Specifies the operating system settings for the virtual machine. Some of the settings cannot be changed once VM is provisioned.
 */
export interface OSProfileResponse {
    /**
     * Specifies the password of the administrator account. <br><br> **Minimum-length (Windows):** 8 characters <br><br> **Minimum-length (Linux):** 6 characters <br><br> **Max-length (Windows):** 123 characters <br><br> **Max-length (Linux):** 72 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!" <br><br> For resetting the password, see [How to reset the Remote Desktop service or its login password in a Windows VM](https://docs.microsoft.com/troubleshoot/azure/virtual-machines/reset-rdp) <br><br> For resetting root password, see [Manage users, SSH, and check or repair disks on Azure Linux VMs using the VMAccess Extension](https://docs.microsoft.com/troubleshoot/azure/virtual-machines/troubleshoot-ssh-connection)
     */
    adminPassword?: string;
    /**
     * Specifies the name of the administrator account. <br><br> This property cannot be updated after the VM is created. <br><br> **Windows-only restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length (Linux):** 1  character <br><br> **Max-length (Linux):** 64 characters <br><br> **Max-length (Windows):** 20 characters.
     */
    adminUsername?: string;
    /**
     * Specifies whether extension operations should be allowed on the virtual machine. This may only be set to False when no extensions are present on the virtual machine.
     */
    allowExtensionOperations?: boolean;
    /**
     * Specifies the host OS name of the virtual machine. This name cannot be updated after the VM is created. **Max-length (Windows):** 15 characters. **Max-length (Linux):** 64 characters. For naming conventions and restrictions see [Azure infrastructure services implementation guidelines](https://docs.microsoft.com/azure/azure-resource-manager/management/resource-name-rules).
     */
    computerName?: string;
    /**
     * Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the Virtual Machine. The maximum length of the binary array is 65535 bytes. **Note: Do not pass any secrets or passwords in customData property.** This property cannot be updated after the VM is created. The property 'customData' is passed to the VM to be saved as a file, for more information see [Custom Data on Azure VMs](https://azure.microsoft.com/blog/custom-data-and-cloud-init-on-windows-azure/). For using cloud-init for your Linux VM, see [Using cloud-init to customize a Linux VM during creation](https://docs.microsoft.com/azure/virtual-machines/linux/using-cloud-init).
     */
    customData?: string;
    /**
     * Specifies the Linux operating system settings on the virtual machine. For a list of supported Linux distributions, see [Linux on Azure-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/linux/endorsed-distros).
     */
    linuxConfiguration?: LinuxConfigurationResponse;
    /**
     * Optional property which must either be set to True or omitted.
     */
    requireGuestProvisionSignal?: boolean;
    /**
     * Specifies set of certificates that should be installed onto the virtual machine. To install certificates on a virtual machine it is recommended to use the [Azure Key Vault virtual machine extension for Linux](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-linux) or the [Azure Key Vault virtual machine extension for Windows](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-windows).
     */
    secrets?: VaultSecretGroupResponse[];
    /**
     * Specifies Windows operating system settings on the virtual machine.
     */
    windowsConfiguration?: WindowsConfigurationResponse;
}

/**
 * Specifies settings related to VM Guest Patching on Windows.
 */
export interface PatchSettingsResponse {
    /**
     * Specifies the mode of VM Guest patch assessment for the IaaS virtual machine.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - You control the timing of patch assessments on a virtual machine.<br /><br /> **AutomaticByPlatform** - The platform will trigger periodic patch assessments. The property provisionVMAgent must be true.
     */
    assessmentMode?: string;
    /**
     * Specifies additional settings for patch mode AutomaticByPlatform in VM Guest Patching on Windows.
     */
    automaticByPlatformSettings?: WindowsVMGuestPatchAutomaticByPlatformSettingsResponse;
    /**
     * Enables customers to patch their Azure VMs without requiring a reboot. For enableHotpatching, the 'provisionVMAgent' must be set to true and 'patchMode' must be set to 'AutomaticByPlatform'.
     */
    enableHotpatching?: boolean;
    /**
     * Specifies the mode of VM Guest Patching to IaaS virtual machine or virtual machines associated to virtual machine scale set with OrchestrationMode as Flexible.<br /><br /> Possible values are:<br /><br /> **Manual** - You  control the application of patches to a virtual machine. You do this by applying patches manually inside the VM. In this mode, automatic updates are disabled; the property WindowsConfiguration.enableAutomaticUpdates must be false<br /><br /> **AutomaticByOS** - The virtual machine will automatically be updated by the OS. The property WindowsConfiguration.enableAutomaticUpdates must be true. <br /><br /> **AutomaticByPlatform** - the virtual machine will automatically updated by the platform. The properties provisionVMAgent and WindowsConfiguration.enableAutomaticUpdates must be true
     */
    patchMode?: string;
}

/**
 * Plan for the resource.
 */
export interface PlanResponse {
    /**
     * A user defined name of the 3rd Party Artifact that is being procured.
     */
    name: string;
    /**
     * The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding. 
     */
    product: string;
    /**
     * A publisher provided promotion code as provisioned in Data Market for the said product/artifact.
     */
    promotionCode?: string;
    /**
     * The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic
     */
    publisher: string;
    /**
     * The version of the desired product/artifact.
     */
    version?: string;
}

/**
 * Contains properties that are applicable to both Spot and Regular.
 */
export interface PriorityProfileResponse {
    /**
     * Allocation strategy to follow when determining the VM sizes distribution.
     */
    allocationStrategy?: string;
    /**
     * Eviction Policy to follow when evicting Spot VMs.
     */
    evictionPolicy?: string;
    /**
     * Price per hour of each Spot VM will never exceed this.
     */
    maxPricePerVM?: number;
    /**
     * Specifies the type of Virtual Machine.
     */
    type?: string;
}

/**
 * Specifies ProxyAgent settings for the virtual machine or virtual machine scale set. Minimum api-version: 2023-09-01.
 */
export interface ProxyAgentSettingsResponse {
    /**
     * Specify whether to implicitly install the ProxyAgent Extension. This option is currently applicable only for Linux Os.
     */
    addProxyAgentExtension?: boolean;
    /**
     * Specifies whether ProxyAgent feature should be enabled on the virtual machine or virtual machine scale set.
     */
    enabled?: boolean;
    /**
     * Specifies the IMDS endpoint settings while creating the virtual machine or virtual machine scale set. Minimum api-version: 2024-03-01.
     */
    imds?: HostEndpointSettingsResponse;
    /**
     * Increase the value of this property allows users to reset the key used for securing communication channel between guest and host.
     */
    keyIncarnationId?: number;
    /**
     * Specifies the mode that ProxyAgent will execute on. Warning: this property has been deprecated, please specify 'mode' under particular hostendpoint setting.
     */
    mode?: string;
    /**
     * Specifies the Wire Server endpoint settings while creating the virtual machine or virtual machine scale set. Minimum api-version: 2024-03-01.
     */
    wireServer?: HostEndpointSettingsResponse;
}

/**
 * Describes the public IP Sku. It can only be set with OrchestrationMode as Flexible.
 */
export interface PublicIPAddressSkuResponse {
    /**
     * Specify public IP sku name
     */
    name?: string;
    /**
     * Specify public IP sku tier
     */
    tier?: string;
}

/**
 * The retry policy for the user request
 */
export interface RetryPolicyResponse {
    /**
     * Retry count for user request
     */
    retryCount?: number;
    /**
     * Retry window in minutes for user request
     */
    retryWindowInMinutes?: number;
}

/**
 * Specifies additional publishing targets for scheduled events.
 */
export interface ScheduledEventsAdditionalPublishingTargetsResponse {
    /**
     * The configuration parameters used while creating eventGridAndResourceGraph Scheduled Event setting.
     */
    eventGridAndResourceGraph?: EventGridAndResourceGraphResponse;
}

/**
 * Specifies Redeploy, Reboot and ScheduledEventsAdditionalPublishingTargets Scheduled Event related configurations.
 */
export interface ScheduledEventsPolicyResponse {
    /**
     * The configuration parameters used while creating AllInstancesDown scheduled event setting creation.
     */
    allInstancesDown?: AllInstancesDownResponse;
    /**
     * The configuration parameters used while publishing scheduledEventsAdditionalPublishingTargets.
     */
    scheduledEventsAdditionalPublishingTargets?: ScheduledEventsAdditionalPublishingTargetsResponse;
    /**
     * The configuration parameters used while creating userInitiatedReboot scheduled event setting creation.
     */
    userInitiatedReboot?: UserInitiatedRebootResponse;
    /**
     * The configuration parameters used while creating userInitiatedRedeploy scheduled event setting creation.
     */
    userInitiatedRedeploy?: UserInitiatedRedeployResponse;
}

/**
 * Profile for the scheduled events.
 */
export interface ScheduledEventsProfileResponse {
    /**
     * Specifies OS Image Scheduled Event related configurations.
     */
    osImageNotificationProfile?: OSImageNotificationProfileResponse;
    /**
     * Specifies Terminate Scheduled Event related configurations.
     */
    terminateNotificationProfile?: TerminateNotificationProfileResponse;
}

/**
 * Specifies the Security profile settings for the virtual machine or virtual machine scale set.
 */
export interface SecurityProfileResponse {
    /**
     * This property can be used by user in the request to enable or disable the Host Encryption for the virtual machine or virtual machine scale set. This will enable the encryption for all the disks including Resource/Temp disk at host itself. The default behavior is: The Encryption at host will be disabled unless this property is set to true for the resource.
     */
    encryptionAtHost?: boolean;
    /**
     * Specifies the Managed Identity used by ADE to get access token for keyvault operations.
     */
    encryptionIdentity?: EncryptionIdentityResponse;
    /**
     * Specifies ProxyAgent settings while creating the virtual machine. Minimum compute api-version: 2023-09-01.
     */
    proxyAgentSettings?: ProxyAgentSettingsResponse;
    /**
     * Specifies the SecurityType of the virtual machine. It has to be set to any specified value to enable UefiSettings. The default behavior is: UefiSettings will not be enabled unless this property is set.
     */
    securityType?: string;
    /**
     * Specifies the security settings like secure boot and vTPM used while creating the virtual machine. Minimum compute api-version: 2020-12-01.
     */
    uefiSettings?: UefiSettingsResponse;
}

/**
 * SSH configuration for Linux based VMs running on Azure
 */
export interface SshConfigurationResponse {
    /**
     * The list of SSH public keys used to authenticate with linux based VMs.
     */
    publicKeys?: SshPublicKeyResponse[];
}

/**
 * Contains information about SSH certificate public key and the path on the Linux VM where the public key is placed.
 */
export interface SshPublicKeyResponse {
    /**
     * SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. For creating ssh keys, see [Create SSH keys on Linux and Mac for Linux VMs in Azure]https://docs.microsoft.com/azure/virtual-machines/linux/create-ssh-keys-detailed).
     */
    keyData?: string;
    /**
     * Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys
     */
    path?: string;
}

/**
 * Specifies the storage settings for the virtual machine disks.
 */
export interface StorageProfileResponse {
    /**
     * Specifies the parameters that are used to add a data disk to a virtual machine. For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/managed-disks-overview).
     */
    dataDisks?: DataDiskResponse[];
    /**
     * Specifies the disk controller type configured for the VM. **Note:** This property will be set to the default disk controller type if not specified provided virtual machine is being created with 'hyperVGeneration' set to V2 based on the capabilities of the operating system disk and VM size from the the specified minimum api version. You need to deallocate the VM before updating its disk controller type unless you are updating the VM size in the VM configuration which implicitly deallocates and reallocates the VM. Minimum api-version: 2022-08-01.
     */
    diskControllerType?: string;
    /**
     * Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations.
     */
    imageReference?: ImageReferenceResponse;
    /**
     * Specifies information about the operating system disk used by the virtual machine. For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/managed-disks-overview).
     */
    osDisk?: OSDiskResponse;
}

/**
 * Describes a reference to a sub-resource.
 */
export interface SubResourceResponse {
    /**
     * The ID of the sub-resource.
     */
    id?: string;
}

/**
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface SystemDataResponse {
    /**
     * The timestamp of resource creation (UTC).
     */
    createdAt?: string;
    /**
     * The identity that created the resource.
     */
    createdBy?: string;
    /**
     * The type of identity that created the resource.
     */
    createdByType?: string;
    /**
     * The timestamp of resource last modification (UTC)
     */
    lastModifiedAt?: string;
    /**
     * The identity that last modified the resource.
     */
    lastModifiedBy?: string;
    /**
     * The type of identity that last modified the resource.
     */
    lastModifiedByType?: string;
}

/**
 * Profile properties for the Terminate Scheduled event.
 */
export interface TerminateNotificationProfileResponse {
    /**
     * Specifies whether the Terminate Scheduled event is enabled or disabled.
     */
    enable?: boolean;
    /**
     * Configurable length of time a Virtual Machine being deleted will have to potentially approve the Terminate Scheduled Event before the event is auto approved (timed out). The configuration must be specified in ISO 8601 format, the default value is 5 minutes (PT5M)
     */
    notBeforeTimeout?: string;
}

/**
 * Specifies the security settings like secure boot and vTPM used while creating the virtual machine. Minimum api-version: 2020-12-01.
 */
export interface UefiSettingsResponse {
    /**
     * Specifies whether secure boot should be enabled on the virtual machine. Minimum compute api-version: 2020-12-01.
     */
    secureBootEnabled?: boolean;
    /**
     * Specifies whether vTPM should be enabled on the virtual machine. Minimum compute api-version: 2020-12-01.
     */
    vTpmEnabled?: boolean;
}

/**
 * User assigned identity properties
 */
export interface UserAssignedIdentityResponse {
    /**
     * The client ID of the assigned identity.
     */
    clientId: string;
    /**
     * The principal ID of the assigned identity.
     */
    principalId: string;
}

/**
 * Specifies Reboot related Scheduled Event related configurations.
 */
export interface UserInitiatedRebootResponse {
    /**
     * Specifies Reboot Scheduled Event related configurations.
     */
    automaticallyApprove?: boolean;
}

/**
 * Specifies Redeploy related Scheduled Event related configurations.
 */
export interface UserInitiatedRedeployResponse {
    /**
     * Specifies Redeploy Scheduled Event related configurations.
     */
    automaticallyApprove?: boolean;
}

/**
 * VMAttributes using double values.
 */
export interface VMAttributeMinMaxDoubleResponse {
    /**
     * Maximum value. Must be greater than zero. Double.MaxValue(1.7976931348623157E+308).
     */
    max?: number;
    /**
     * Minimum value. If not specified, no minimum filter is applied.
     */
    min?: number;
}

/**
 * While retrieving VMSizes from CRS, Min = 0 (uint.MinValue) if not specified, Max = 4294967295 (uint.MaxValue) if not specified. This allows to filter VMAttributes on all available VMSizes.
 */
export interface VMAttributeMinMaxIntegerResponse {
    /**
     * Max VMSize from CRS, Max = 4294967295 (uint.MaxValue) if not specified.
     */
    max?: number;
    /**
     * Min VMSize from CRS, Min = 0 (uint.MinValue) if not specified.
     */
    min?: number;
}

/**
 * VMAttributes that will be used to filter VMSizes which will be used to launch instances.
 */
export interface VMAttributesResponse {
    /**
     * The range of accelerator count specified from min to max. Optional parameter. Either Min or Max is required if specified.
     * acceleratorSupport should be set to "Included" or "Required" to use this VMAttribute. 
     * If acceleratorSupport is "Excluded", this VMAttribute can not be used.
     */
    acceleratorCount?: VMAttributeMinMaxIntegerResponse;
    /**
     * The accelerator manufacturers specified as a list. 
     * acceleratorSupport should be set to "Included" or "Required" to use this VMAttribute. 
     * If acceleratorSupport is "Excluded", this VMAttribute can not be used.
     */
    acceleratorManufacturers?: string[];
    /**
     * Specifies whether the VMSize supporting accelerator should be used to launch instances or not.
     * acceleratorSupport should be set to "Included" or "Required" to use this VMAttribute. 
     * If acceleratorSupport is "Excluded", this VMAttribute can not be used.
     */
    acceleratorSupport?: string;
    /**
     * The accelerator types specified as a list. acceleratorSupport should be set to "Included" or "Required" to use this VMAttribute. 
     * If acceleratorSupport is "Excluded", this VMAttribute can not be used.
     */
    acceleratorTypes?: string[];
    /**
     * Specifies which VMSizes should be allowed while filtering on VMAttributes. Cannot be specified together with excludedVMSizes. Maximum of 10 VM sizes allowed. Optional parameter.
     */
    allowedVMSizes?: string[];
    /**
     * The VM architecture types specified as a list. Must be specified if VMAttributes are specified. Must be compatible with image used.
     */
    architectureTypes: string[];
    /**
     * Specifies whether the VMSize supporting burstable capability should be used to launch instances or not.
     */
    burstableSupport?: string;
    /**
     * The VM CPU manufacturers specified as a list. Optional parameter.
     */
    cpuManufacturers?: string[];
    /**
     * The range of data disk count specified from Min to Max. Optional parameter. Either Min or Max is required if specified.
     */
    dataDiskCount?: VMAttributeMinMaxIntegerResponse;
    /**
     * Specifies which VMSizes should be excluded while filtering on VMAttributes. Cannot be specified together with allowedVMSizes. Maximum of 10 VM sizes allowed. Optional parameter.
     */
    excludedVMSizes?: string[];
    /**
     * The hyperV generations specified as a list. Optional parameter.
     */
    hyperVGenerations?: string[];
    /**
     * The local storage disk types specified as a list. LocalStorageSupport should be set to "Included" or "Required" to use this VMAttribute. 
     * If localStorageSupport is "Excluded", this VMAttribute can not be used.
     */
    localStorageDiskTypes?: string[];
    /**
     * LocalStorageSupport should be set to "Included" or "Required" to use this VMAttribute. 
     * If localStorageSupport is "Excluded", this VMAttribute can not be used.
     */
    localStorageInGiB?: VMAttributeMinMaxDoubleResponse;
    /**
     * Specifies whether the VMSize supporting local storage should be used to launch instances or not.
     * Included - Default if not specified as most Azure VMs support local storage.
     */
    localStorageSupport?: string;
    /**
     * The range of memory specified from Min to Max. Must be specified if VMAttributes are specified, either Min or Max is required if specified.
     */
    memoryInGiB: VMAttributeMinMaxDoubleResponse;
    /**
     * The range of memory in GiB per vCPU specified from min to max. Optional parameter. Either Min or Max is required if specified.
     */
    memoryInGiBPerVCpu?: VMAttributeMinMaxDoubleResponse;
    /**
     * The range of network bandwidth in Mbps specified from Min to Max. Optional parameter. Either Min or Max is required if specified.
     */
    networkBandwidthInMbps?: VMAttributeMinMaxDoubleResponse;
    /**
     * The range of network interface count specified from Min to Max. Optional parameter. Either Min or Max is required if specified.
     */
    networkInterfaceCount?: VMAttributeMinMaxIntegerResponse;
    /**
     * The range of RDMA (Remote Direct Memory Access) network interface count specified from Min to Max. Optional parameter. Either Min or Max is required if specified.
     * rdmaSupport should be set to "Included" or "Required" to use this VMAttribute. 
     * If rdmaSupport is "Excluded", this VMAttribute can not be used.
     */
    rdmaNetworkInterfaceCount?: VMAttributeMinMaxIntegerResponse;
    /**
     * Specifies whether the VMSize supporting RDMA (Remote Direct Memory Access) should be used to build launch instances or not.
     */
    rdmaSupport?: string;
    /**
     * The range of vCpuCount specified from Min to Max. Must be specified if VMAttributes are specified, either Min or Max is required if specified.
     */
    vCpuCount: VMAttributeMinMaxIntegerResponse;
    /**
     * The VM category specified as a list. Optional parameter.
     */
    vmCategories?: string[];
}

/**
 * Specifies the security profile settings for the managed disk. **Note:** It can only be set for Confidential VMs.
 */
export interface VMDiskSecurityProfileResponse {
    /**
     * Specifies the customer managed disk encryption set resource id for the managed disk that is used for Customer Managed Key encrypted ConfidentialVM OS Disk and VMGuest blob.
     */
    diskEncryptionSet?: DiskEncryptionSetParametersResponse;
    /**
     * Specifies the EncryptionType of the managed disk. It is set to DiskWithVMGuestState for encryption of the managed disk along with VMGuestState blob, VMGuestStateOnly for encryption of just the VMGuestState blob, and NonPersistedTPM for not persisting firmware state in the VMGuestState blob.. **Note:** It can be set for only Confidential VMs.
     */
    securityEncryptionType?: string;
}

/**
 * Specifies the required information to reference a compute gallery application version
 */
export interface VMGalleryApplicationResponse {
    /**
     * Optional, Specifies the uri to an azure blob that will replace the default configuration for the package if provided
     */
    configurationReference?: string;
    /**
     * If set to true, when a new Gallery Application version is available in PIR/SIG, it will be automatically updated for the VM/VMSS
     */
    enableAutomaticUpgrade?: boolean;
    /**
     * Optional, Specifies the order in which the packages have to be installed
     */
    order?: number;
    /**
     * Specifies the GalleryApplicationVersion resource id on the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{application}/versions/{version}
     */
    packageReferenceId: string;
    /**
     * Optional, Specifies a passthrough value for more generic context.
     */
    tags?: string;
    /**
     * Optional, If true, any failure for any operation in the VmApplication will fail the deployment
     */
    treatFailureAsDeploymentFailure?: boolean;
}

/**
 * Describes a single certificate reference in a Key Vault, and where the certificate should reside on the VM.
 */
export interface VaultCertificateResponse {
    /**
     * For Windows VMs, specifies the certificate store on the Virtual Machine to which the certificate should be added. The specified certificate store is implicitly in the LocalMachine account. For Linux VMs, the certificate file is placed under the /var/lib/waagent directory, with the file name <UppercaseThumbprint>.crt for the X509 certificate file and <UppercaseThumbprint>.prv for private key. Both of these files are .pem formatted.
     */
    certificateStore?: string;
    /**
     * This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  'data':'<Base64-encoded-certificate>',<br>  'dataType':'pfx',<br>  'password':'<pfx-file-password>'<br>} <br> To install certificates on a virtual machine it is recommended to use the [Azure Key Vault virtual machine extension for Linux](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-linux) or the [Azure Key Vault virtual machine extension for Windows](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-windows).
     */
    certificateUrl?: string;
}

/**
 * Describes a set of certificates which are all in the same Key Vault.
 */
export interface VaultSecretGroupResponse {
    /**
     * The relative URL of the Key Vault containing all of the certificates in VaultCertificates.
     */
    sourceVault?: SubResourceResponse;
    /**
     * The list of key vault references in SourceVault which contain certificates.
     */
    vaultCertificates?: VaultCertificateResponse[];
}

/**
 * Describes the uri of a disk.
 */
export interface VirtualHardDiskResponse {
    /**
     * Specifies the virtual hard disk's uri.
     */
    uri?: string;
}

/**
 * Describes the properties of a Virtual Machine Extension.
 */
export interface VirtualMachineExtensionPropertiesResponse {
    /**
     * Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
     */
    autoUpgradeMinorVersion?: boolean;
    /**
     * Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available.
     */
    enableAutomaticUpgrade?: boolean;
    /**
     * How the extension handler should be forced to update even if the extension configuration has not changed.
     */
    forceUpdateTag?: string;
    /**
     * The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
     */
    protectedSettings?: any;
    /**
     * The extensions protected settings that are passed by reference, and consumed from key vault
     */
    protectedSettingsFromKeyVault?: KeyVaultSecretReferenceResponse;
    /**
     * Collection of extension names after which this extension needs to be provisioned.
     */
    provisionAfterExtensions?: string[];
    /**
     * The name of the extension handler publisher.
     */
    publisher?: string;
    /**
     * JSON formatted public settings for the extension.
     */
    settings?: any;
    /**
     * Indicates whether failures stemming from the extension will be suppressed (Operational failures such as not connecting to the VM will not be suppressed regardless of this value). The default is false.
     */
    suppressFailures?: boolean;
    /**
     * Specifies the type of the extension; an example is 'CustomScriptExtension'.
     */
    type?: string;
    /**
     * Specifies the version of the script handler.
     */
    typeHandlerVersion?: string;
}

/**
 * Defines a virtual machine extension.
 */
export interface VirtualMachineExtensionResponse {
    /**
     * The name of the virtual machine extension.
     */
    name: string;
    /**
     * Properties of the virtual machine extension.
     */
    properties: VirtualMachineExtensionPropertiesResponse;
}

/**
 * Contains the IP tag associated with the public IP address.
 */
export interface VirtualMachineIpTagResponse {
    /**
     * IP tag type. Example: FirstPartyUsage.
     */
    ipTagType?: string;
    /**
     * IP tag associated with the public IP. Example: SQL, Storage etc.
     */
    tag?: string;
}

/**
 * Describes a virtual machine network profile's IP configuration.
 */
export interface VirtualMachineNetworkInterfaceConfigurationPropertiesResponse {
    /**
     * Specifies whether the Auxiliary mode is enabled for the Network Interface resource.
     */
    auxiliaryMode?: string;
    /**
     * Specifies whether the Auxiliary sku is enabled for the Network Interface resource.
     */
    auxiliarySku?: string;
    /**
     * Specify what happens to the network interface when the VM is deleted
     */
    deleteOption?: string;
    /**
     * Specifies whether the network interface is disabled for tcp state tracking.
     */
    disableTcpStateTracking?: boolean;
    /**
     * The dns settings to be applied on the network interfaces.
     */
    dnsSettings?: VirtualMachineNetworkInterfaceDnsSettingsConfigurationResponse;
    /**
     * The DSCP configuration for the network interface.
     */
    dscpConfiguration?: SubResourceResponse;
    /**
     * Specifies whether the network interface is accelerated networking-enabled.
     */
    enableAcceleratedNetworking?: boolean;
    /**
     * Specifies whether the network interface is FPGA networking-enabled.
     */
    enableFpga?: boolean;
    /**
     * Whether IP forwarding enabled on this NIC.
     */
    enableIPForwarding?: boolean;
    /**
     * Specifies the IP configurations of the network interface.
     */
    ipConfigurations: VirtualMachineNetworkInterfaceIPConfigurationResponse[];
    /**
     * The network security group.
     */
    networkSecurityGroup?: SubResourceResponse;
    /**
     * Specifies the primary network interface in case the virtual machine has more than 1 network interface.
     */
    primary?: boolean;
}

/**
 * Describes a virtual machine network interface configurations.
 */
export interface VirtualMachineNetworkInterfaceConfigurationResponse {
    /**
     * The network interface configuration name.
     */
    name: string;
    /**
     * Describes a virtual machine network profile's IP configuration.
     */
    properties?: VirtualMachineNetworkInterfaceConfigurationPropertiesResponse;
    /**
     * Resource tags applied to the networkInterface address created by this NetworkInterfaceConfiguration
     */
    tags?: {[key: string]: string};
}

/**
 * Describes a virtual machines network configuration's DNS settings.
 */
export interface VirtualMachineNetworkInterfaceDnsSettingsConfigurationResponse {
    /**
     * List of DNS servers IP addresses
     */
    dnsServers?: string[];
}

/**
 * Describes a virtual machine network interface IP configuration properties.
 */
export interface VirtualMachineNetworkInterfaceIPConfigurationPropertiesResponse {
    /**
     * Specifies an array of references to backend address pools of application gateways. A virtual machine can reference backend address pools of multiple application gateways. Multiple virtual machines cannot use the same application gateway.
     */
    applicationGatewayBackendAddressPools?: SubResourceResponse[];
    /**
     * Specifies an array of references to application security group.
     */
    applicationSecurityGroups?: SubResourceResponse[];
    /**
     * Specifies an array of references to backend address pools of load balancers. A virtual machine can reference backend address pools of one public and one internal load balancer. [Multiple virtual machines cannot use the same basic sku load balancer].
     */
    loadBalancerBackendAddressPools?: SubResourceResponse[];
    /**
     * Specifies the primary network interface in case the virtual machine has more than 1 network interface.
     */
    primary?: boolean;
    /**
     * Available from Api-Version 2017-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'.
     */
    privateIPAddressVersion?: string;
    /**
     * The publicIPAddressConfiguration.
     */
    publicIPAddressConfiguration?: VirtualMachinePublicIPAddressConfigurationResponse;
    /**
     * Specifies the identifier of the subnet.
     */
    subnet?: SubResourceResponse;
}

/**
 * Describes a virtual machine network profile's IP configuration.
 */
export interface VirtualMachineNetworkInterfaceIPConfigurationResponse {
    /**
     * The IP configuration name.
     */
    name: string;
    /**
     * Describes a virtual machine network interface IP configuration properties.
     */
    properties?: VirtualMachineNetworkInterfaceIPConfigurationPropertiesResponse;
}

/**
 * Describes the properties of a Virtual Machine.
 */
export interface VirtualMachineProfileResponse {
    /**
     * Specifies additional capabilities enabled or disabled on the virtual machine.
     */
    additionalCapabilities?: AdditionalCapabilitiesResponse;
    /**
     * Specifies the gallery applications that should be made available to the VM.
     */
    applicationProfile?: ApplicationProfileResponse;
    /**
     * Specifies information about the capacity reservation that is used to allocate virtual machine. Minimum compute api-version: 2021-04-01.
     */
    capacityReservation?: CapacityReservationProfileResponse;
    /**
     * Specifies the boot diagnostic settings state. Minimum compute api-version: 2015-06-15.
     */
    diagnosticsProfile?: DiagnosticsProfileResponse;
    /**
     * Specifies the time alloted for all extensions to start. The time duration should be between 15 minutes and 120 minutes (inclusive) and should be specified in ISO 8601 format. The default value is 90 minutes (PT1H30M). Minimum compute api-version: 2020-06-01.
     */
    extensionsTimeBudget?: string;
    /**
     * Specifies that the image or disk that is being used was licensed on-premises. <br><br> Possible values for Windows Server operating system are: <br><br> Windows_Client <br><br> Windows_Server <br><br> Possible values for Linux Server operating system are: <br><br> RHEL_BYOS (for RHEL) <br><br> SLES_BYOS (for SUSE) <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/windows/hybrid-use-benefit-licensing) <br><br> [Azure Hybrid Use Benefit for Linux Server](https://docs.microsoft.com/azure/virtual-machines/linux/azure-hybrid-benefit-linux) <br><br> Minimum api-version: 2015-06-15
     */
    licenseType?: string;
    /**
     * Specifies the network interfaces of the virtual machine.
     */
    networkProfile?: NetworkProfileResponse;
    /**
     * Specifies the operating system settings used while creating the virtual machine. Some of the settings cannot be changed once VM is provisioned.
     */
    osProfile?: OSProfileResponse;
    /**
     * Specifies Redeploy, Reboot and ScheduledEventsAdditionalPublishingTargets Scheduled Event related configurations for the virtual machine.
     */
    scheduledEventsPolicy?: ScheduledEventsPolicyResponse;
    /**
     * Specifies Scheduled Event related configurations.
     */
    scheduledEventsProfile?: ScheduledEventsProfileResponse;
    /**
     * Specifies the Security related profile settings for the virtual machine.
     */
    securityProfile?: SecurityProfileResponse;
    /**
     * Specifies the storage settings for the virtual machine disks.
     */
    storageProfile?: StorageProfileResponse;
    /**
     * UserData for the VM, which must be base-64 encoded. Customer should not pass any secrets in here. Minimum compute api-version: 2021-03-01.
     */
    userData?: string;
}

/**
 * Describes a virtual machines IP Configuration's PublicIPAddress configuration
 */
export interface VirtualMachinePublicIPAddressConfigurationPropertiesResponse {
    /**
     * Specify what happens to the public IP address when the VM is deleted
     */
    deleteOption?: string;
    /**
     * The dns settings to be applied on the publicIP addresses .
     */
    dnsSettings?: VirtualMachinePublicIPAddressDnsSettingsConfigurationResponse;
    /**
     * The idle timeout of the public IP address.
     */
    idleTimeoutInMinutes?: number;
    /**
     * The list of IP tags associated with the public IP address.
     */
    ipTags?: VirtualMachineIpTagResponse[];
    /**
     * Available from Api-Version 2019-07-01 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4. Possible values are: 'IPv4' and 'IPv6'.
     */
    publicIPAddressVersion?: string;
    /**
     * Specify the public IP allocation type
     */
    publicIPAllocationMethod?: string;
    /**
     * The PublicIPPrefix from which to allocate publicIP addresses.
     */
    publicIPPrefix?: SubResourceResponse;
}

/**
 * Describes a virtual machines IP Configuration's PublicIPAddress configuration
 */
export interface VirtualMachinePublicIPAddressConfigurationResponse {
    /**
     * The publicIP address configuration name.
     */
    name: string;
    /**
     * Describes a virtual machines IP Configuration's PublicIPAddress configuration
     */
    properties?: VirtualMachinePublicIPAddressConfigurationPropertiesResponse;
    /**
     * Describes the public IP Sku. It can only be set with OrchestrationMode as Flexible.
     */
    sku?: PublicIPAddressSkuResponse;
    /**
     * Resource tags applied to the publicIP address created by this PublicIPAddressConfiguration
     */
    tags?: {[key: string]: string};
}

/**
 * Describes a virtual machines network configuration's DNS settings.
 */
export interface VirtualMachinePublicIPAddressDnsSettingsConfigurationResponse {
    /**
     * The Domain name label prefix of the PublicIPAddress resources that will be created. The generated name label is the concatenation of the domain name label and vm network profile unique ID.
     */
    domainNameLabel: string;
    /**
     * The Domain name label scope of the PublicIPAddress resources that will be created. The generated name label is the concatenation of the hashed domain name label with policy according to the domain name label scope and vm network profile unique ID.
     */
    domainNameLabelScope?: string;
}

/**
 * Specifications about a VM Size. This will also contain the corresponding rank and weight in future.
 */
export interface VmSizeProfileResponse {
    /**
     * The Sku name (e.g. 'Standard_DS1_v2')
     */
    name: string;
    /**
     * The rank of the VM size. This is used with 'AllocationStrategy.Prioritized'
     * The lower the number, the higher the priority. Starting with 0.
     */
    rank?: number;
}

/**
 * Describes Windows Remote Management configuration of the VM
 */
export interface WinRMConfigurationResponse {
    /**
     * The list of Windows Remote Management listeners
     */
    listeners?: WinRMListenerResponse[];
}

/**
 * Describes Protocol and thumbprint of Windows Remote Management listener
 */
export interface WinRMListenerResponse {
    /**
     * This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>} <br> To install certificates on a virtual machine it is recommended to use the [Azure Key Vault virtual machine extension for Linux](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-linux) or the [Azure Key Vault virtual machine extension for Windows](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-windows).
     */
    certificateUrl?: string;
    /**
     * Specifies the protocol of WinRM listener. Possible values are: **http,** **https.**
     */
    protocol?: string;
}

/**
 * Specifies Windows operating system settings on the virtual machine.
 */
export interface WindowsConfigurationResponse {
    /**
     * Specifies additional base-64 encoded XML formatted information that can be included in the Unattend.xml file, which is used by Windows Setup.
     */
    additionalUnattendContent?: AdditionalUnattendContentResponse[];
    /**
     * Indicates whether Automatic Updates is enabled for the Windows virtual machine. Default value is true. For virtual machine scale sets, this property can be updated and updates will take effect on OS reprovisioning.
     */
    enableAutomaticUpdates?: boolean;
    /**
     * [Preview Feature] Specifies settings related to VM Guest Patching on Windows.
     */
    patchSettings?: PatchSettingsResponse;
    /**
     * Indicates whether virtual machine agent should be provisioned on the virtual machine. When this property is not specified in the request body, it is set to true by default. This will ensure that VM Agent is installed on the VM so that extensions can be added to the VM later.
     */
    provisionVMAgent?: boolean;
    /**
     * Specifies the time zone of the virtual machine. e.g. "Pacific Standard Time". Possible values can be [TimeZoneInfo.Id](https://docs.microsoft.com/dotnet/api/system.timezoneinfo.id?#System_TimeZoneInfo_Id) value from time zones returned by [TimeZoneInfo.GetSystemTimeZones](https://docs.microsoft.com/dotnet/api/system.timezoneinfo.getsystemtimezones).
     */
    timeZone?: string;
    /**
     * Specifies the Windows Remote Management listeners. This enables remote Windows PowerShell.
     */
    winRM?: WinRMConfigurationResponse;
}

/**
 * Specifies additional settings to be applied when patch mode AutomaticByPlatform is selected in Windows patch settings.
 */
export interface WindowsVMGuestPatchAutomaticByPlatformSettingsResponse {
    /**
     * Enables customer to schedule patching without accidental upgrades
     */
    bypassPlatformSafetyChecksOnUserSchedule?: boolean;
    /**
     * Specifies the reboot setting for all AutomaticByPlatform patch installation operations.
     */
    rebootSetting?: string;
}

/**
 * ZoneAllocationPolicy for LaunchBulkInstancesOperation.
 */
export interface ZoneAllocationPolicyResponse {
    /**
     * Distribution strategy used for zone allocation policy.
     */
    distributionStrategy: string;
    /**
     * Zone preferences, required when zone distribution strategy is Prioritized.
     */
    zonePreferences?: ZonePreferenceResponse[];
}

/**
 * Zone preferences for LaunchBulkInstancesOperation zone allocation policy.
 */
export interface ZonePreferenceResponse {
    /**
     *     The rank of the zone. This is used with 'Prioritized' ZoneDistributionStrategy.
     *     The lower the number, the higher the priority, starting with 0.
     *     0 is the highest rank. If not specified, defaults to lowest rank.
     */
    rank?: number;
    /**
     * Name of the zone.
     */
    zone: string;
}
