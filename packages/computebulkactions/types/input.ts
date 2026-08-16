import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Enables or disables a capability on the virtual machine or virtual machine scale set.
 */
export interface AdditionalCapabilitiesArgs {
    /**
     * The flag that enables or disables hibernation capability on the VM.
     */
    hibernationEnabled?: pulumi.Input<boolean | undefined>;
    /**
     * The flag that enables or disables a capability to have one or more managed data disks with UltraSSD_LRS storage account type on the VM or VMSS. Managed disks with storage account type UltraSSD_LRS can be added to a virtual machine or virtual machine scale set only if this property is enabled.
     */
    ultraSSDEnabled?: pulumi.Input<boolean | undefined>;
}

/**
 * Specifies additional XML formatted information that can be included in the Unattend.xml file, which is used by Windows Setup. Contents are defined by setting name, component name, and the pass in which the content is applied.
 */
export interface AdditionalUnattendContentArgs {
    /**
     * The component name. Currently, the only allowable value is Microsoft-Windows-Shell-Setup.
     */
    componentName?: pulumi.Input<enums.ComponentName | undefined>;
    /**
     * Specifies the XML formatted content that is added to the unattend.xml file for the specified path and component. The XML must be less than 4KB and must include the root element for the setting or feature that is being inserted.
     */
    content?: pulumi.Input<string | undefined>;
    /**
     * The pass name. Currently, the only allowable value is OobeSystem.
     */
    passName?: pulumi.Input<enums.PassName | undefined>;
    /**
     * Specifies the name of the setting to which the content applies. Possible values are: FirstLogonCommands and AutoLogon.
     */
    settingName?: pulumi.Input<string | enums.SettingNames | undefined>;
}

/**
 * Specifies if Scheduled Events should be auto-approved when all instances are down.
 */
export interface AllInstancesDownArgs {
    /**
     * Specifies if Scheduled Events should be auto-approved when all instances are down. Its default value is true.
     */
    automaticallyApprove?: pulumi.Input<boolean | undefined>;
}

/**
 * The API entity reference.
 */
export interface ApiEntityReferenceArgs {
    /**
     * The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...
     */
    id?: pulumi.Input<string | undefined>;
}

/**
 * Contains the list of gallery applications that should be made available to the VM
 */
export interface ApplicationProfileArgs {
    /**
     * Specifies the gallery applications that should be made available to the VM
     */
    galleryApplications?: pulumi.Input<pulumi.Input<VMGalleryApplicationArgs>[] | undefined>;
}

/**
 * Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status. You can easily view the output of your console log. Azure also enables you to see a screenshot of the VM from the hypervisor.
 */
export interface BootDiagnosticsArgs {
    /**
     * Whether boot diagnostics should be enabled on the Virtual Machine.
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * Uri of the storage account to use for placing the console output and screenshot. If storageUri is not specified while enabling boot diagnostics, managed storage will be used.
     */
    storageUri?: pulumi.Input<string | undefined>;
}

/**
 * The parameters of a capacity reservation Profile.
 */
export interface CapacityReservationProfileArgs {
    /**
     * Specifies the capacity reservation group resource id that should be used for allocating the virtual machine provided enough capacity has been reserved. Please refer to https://aka.ms/CapacityReservation for more details.
     */
    capacityReservationGroup?: pulumi.Input<SubResourceArgs | undefined>;
}

/**
 * Compute Profile to configure the Virtual Machines.
 */
export interface ComputeProfileArgs {
    /**
     * Specifies the Microsoft.Compute API version to use when creating underlying Virtual Machines.
     * The default value will be the latest supported computeApiVersion by LaunchBulkInstancesOperation.
     */
    computeApiVersion?: pulumi.Input<string | undefined>;
    /**
     * Virtual Machine Extensions Array to be specified according to "specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/{computeApiVersion}/virtualMachine.json#/definitions/VirtualMachineExtension"
     */
    extensions?: pulumi.Input<pulumi.Input<VirtualMachineExtensionArgs>[] | undefined>;
    /**
     * Base Virtual Machine Profile Properties to be specified according to "specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/{computeApiVersion}/virtualMachine.json#/definitions/VirtualMachineProperties"
     */
    virtualMachineProfile: pulumi.Input<VirtualMachineProfileArgs>;
}

/**
 * Describes a data disk.
 */
export interface DataDiskArgs {
    /**
     * Specifies the caching requirements. Possible values are: None, ReadOnly, ReadWrite. The defaulting behavior is: None for Standard storage. ReadOnly for Premium storage.
     */
    caching?: pulumi.Input<string | enums.CachingTypes | undefined>;
    /**
     * Specifies how the virtual machine disk should be created. Possible values are Attach, FromImage, Empty, Copy, Restore.
     */
    createOption: pulumi.Input<string | enums.DiskCreateOptionTypes>;
    /**
     * Specifies whether data disk should be deleted or detached upon VM deletion. Possible values are: Delete, Detach. The default value is set to Detach.
     */
    deleteOption?: pulumi.Input<string | enums.DiskDeleteOptionTypes | undefined>;
    /**
     * Specifies the detach behavior to be used while detaching a disk or which is already in the process of detachment from the virtual machine. Supported values: ForceDetach. This feature is still in preview. To force-detach a data disk update toBeDetached to 'true' along with setting detachOption: 'ForceDetach'.
     */
    detachOption?: pulumi.Input<string | enums.DiskDetachOptionTypes | undefined>;
    /**
     * Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. The property 'diskSizeGB' is the number of bytes x 1024^3 for the disk and the value cannot be larger than 1023.
     */
    diskSizeGB?: pulumi.Input<number | undefined>;
    /**
     * The source user image virtual hard disk. The virtual hard disk will be copied before being attached to the virtual machine. If SourceImage is provided, the destination virtual hard drive must not exist.
     */
    image?: pulumi.Input<VirtualHardDiskArgs | undefined>;
    /**
     * Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
     */
    lun: pulumi.Input<number>;
    /**
     * The managed disk parameters.
     */
    managedDisk?: pulumi.Input<ManagedDiskParametersArgs | undefined>;
    /**
     * The disk name.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * The source resource identifier. It can be a snapshot, or disk restore point from which to create a disk.
     */
    sourceResource?: pulumi.Input<ApiEntityReferenceArgs | undefined>;
    /**
     * Specifies whether the data disk is in process of detachment from the VirtualMachine/VirtualMachineScaleset.
     */
    toBeDetached?: pulumi.Input<boolean | undefined>;
    /**
     * The virtual hard disk.
     */
    vhd?: pulumi.Input<VirtualHardDiskArgs | undefined>;
    /**
     * Specifies whether writeAccelerator should be enabled or disabled on the disk.
     */
    writeAcceleratorEnabled?: pulumi.Input<boolean | undefined>;
}

/**
 * Specifies the boot diagnostic settings state. Minimum compute api-version: 2015-06-15.
 */
export interface DiagnosticsProfileArgs {
    /**
     * Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status. **NOTE**: If storageUri is being specified then ensure that the storage account is in the same region and subscription as the VM. You can easily view the output of your console log. Azure also enables you to see a screenshot of the VM from the hypervisor.
     */
    bootDiagnostics?: pulumi.Input<BootDiagnosticsArgs | undefined>;
}

/**
 * Describes the parameters of ephemeral disk settings that can be specified for operating system disk. Note: The ephemeral disk settings can only be specified for managed disk.
 */
export interface DiffDiskSettingsArgs {
    /**
     * Specifies the ephemeral disk settings for operating system disk.
     */
    option?: pulumi.Input<string | enums.DiffDiskOptions | undefined>;
    /**
     * Specifies the ephemeral disk placement for operating system disk. Possible values are: CacheDisk, ResourceDisk, NvmeDisk. The defaulting behavior is: CacheDisk if one is configured for the VM size otherwise ResourceDisk or NvmeDisk is used. Minimum api-version for NvmeDisk: 2024-03-01.
     */
    placement?: pulumi.Input<string | enums.DiffDiskPlacement | undefined>;
}

/**
 * Describes the parameter of customer managed disk encryption set resource id that can be specified for disk. **Note:** The disk encryption set resource id can only be specified for managed disk. Please refer https://aka.ms/mdssewithcmkoverview for more details.
 */
export interface DiskEncryptionSetParametersArgs {
    /**
     * The ID of the sub-resource.
     */
    id?: pulumi.Input<string | undefined>;
}

/**
 * Describes a Encryption Settings for a Disk
 */
export interface DiskEncryptionSettingsArgs {
    /**
     * Specifies the location of the disk encryption key, which is a Key Vault Secret.
     */
    diskEncryptionKey?: pulumi.Input<KeyVaultSecretReferenceArgs | undefined>;
    /**
     * Specifies whether disk encryption should be enabled on the virtual machine.
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * Specifies the location of the key encryption key in Key Vault.
     */
    keyEncryptionKey?: pulumi.Input<KeyVaultKeyReferenceArgs | undefined>;
}

/**
 * Specifies the Managed Identity used by ADE to get access token for keyvault operations.
 */
export interface EncryptionIdentityArgs {
    /**
     * Specifies ARM Resource ID of one of the user identities associated with the VM.
     */
    userAssignedIdentityResourceId?: pulumi.Input<string | undefined>;
}

/**
 * Specifies eventGridAndResourceGraph related Scheduled Event related configurations.
 */
export interface EventGridAndResourceGraphArgs {
    /**
     * Specifies if event grid and resource graph is enabled for Scheduled event related configurations.
     */
    enable?: pulumi.Input<boolean | undefined>;
    /**
     * Specifies the api-version to determine which Scheduled Events configuration schema version will be delivered.
     */
    scheduledEventsApiVersion?: pulumi.Input<string | undefined>;
}

/**
 * Specifies particular host endpoint settings.
 */
export interface HostEndpointSettingsArgs {
    /**
     * Specifies the InVMAccessControlProfileVersion resource id in the format of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/inVMAccessControlProfiles/{profile}/versions/{version}
     */
    inVMAccessControlProfileReferenceId?: pulumi.Input<string | undefined>;
    /**
     * Specifies the execution mode. In Audit mode, the system acts as if it is enforcing the access control policy, including emitting access denial entries in the logs but it does not actually deny any requests to host endpoints. In Enforce mode, the system will enforce the access control and it is the recommended mode of operation.
     */
    mode?: pulumi.Input<string | enums.Modes | undefined>;
}

/**
 * Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations. NOTE: Image reference publisher and offer can only be set when you create the scale set.
 */
export interface ImageReferenceArgs {
    /**
     * Specified the community gallery image unique id for vm deployment. This can be fetched from community gallery image GET call.
     */
    communityGalleryImageId?: pulumi.Input<string | undefined>;
    /**
     * The ID of the sub-resource.
     */
    id?: pulumi.Input<string | undefined>;
    /**
     * Specifies the offer of the platform image or marketplace image used to create the virtual machine.
     */
    offer?: pulumi.Input<string | undefined>;
    /**
     * The image publisher.
     */
    publisher?: pulumi.Input<string | undefined>;
    /**
     * Specified the shared gallery image unique id for vm deployment. This can be fetched from shared gallery image GET call.
     */
    sharedGalleryImageId?: pulumi.Input<string | undefined>;
    /**
     * The image SKU.
     */
    sku?: pulumi.Input<string | undefined>;
    /**
     * Specifies the version of the platform image or marketplace image used to create the virtual machine. The allowed formats are Major.Minor.Build or 'latest'. Major, Minor, and Build are decimal numbers. Specify 'latest' to use the latest version of an image available at deploy time. Even if you use 'latest', the VM image will not automatically update after deploy time even if a new version becomes available. Please do not use field 'version' for gallery image deployment, gallery image should always use 'id' field for deployment, to use 'latest' version of gallery image, just set '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{imageName}' in the 'id' field without version input.
     */
    version?: pulumi.Input<string | undefined>;
}

/**
 * Describes a reference to Key Vault Key
 */
export interface KeyVaultKeyReferenceArgs {
    /**
     * The URL referencing a key encryption key in Key Vault.
     */
    keyUrl: pulumi.Input<string>;
    /**
     * The relative URL of the Key Vault containing the key.
     */
    sourceVault: pulumi.Input<SubResourceArgs>;
}

/**
 * Describes a reference to Key Vault Secret
 */
export interface KeyVaultSecretReferenceArgs {
    /**
     * The URL referencing a secret in a Key Vault.
     */
    secretUrl: pulumi.Input<string>;
    /**
     * The relative URL of the Key Vault containing the secret.
     */
    sourceVault: pulumi.Input<SubResourceArgs>;
}

/**
 * Details of the LaunchBulkInstancesOperation.
 */
export interface LaunchBulkInstancesOperationPropertiesArgs {
    /**
     * Total capacity to achieve. It can be in terms of VMs or vCPUs.
     */
    capacity: pulumi.Input<number>;
    /**
     * Specifies capacity type for launching instances. It can be in terms of VMs or vCPUs.
     */
    capacityType?: pulumi.Input<string | enums.CapacityType | undefined>;
    /**
     * Compute Profile to configure the Virtual Machines.
     */
    computeProfile: pulumi.Input<ComputeProfileArgs>;
    /**
     * Configuration Options for Regular or Spot instances in LaunchBulkInstancesOperation.
     */
    priorityProfile: pulumi.Input<PriorityProfileArgs>;
    /**
     * Retry policy the user can pass
     */
    retryPolicy?: pulumi.Input<RetryPolicyArgs | undefined>;
    /**
     * Attributes to launch instances.
     */
    vmAttributes?: pulumi.Input<VMAttributesArgs | undefined>;
    /**
     * List of VM sizes supported for LaunchBulkInstancesOperation
     */
    vmSizesProfile?: pulumi.Input<pulumi.Input<VmSizeProfileArgs>[] | undefined>;
    /**
     * Zone Allocation Policy for launching instances.
     */
    zoneAllocationPolicy?: pulumi.Input<ZoneAllocationPolicyArgs | undefined>;
}

/**
 * Specifies the Linux operating system settings on the virtual machine. For a list of supported Linux distributions, see [Linux on Azure-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/linux/endorsed-distros).
 */
export interface LinuxConfigurationArgs {
    /**
     * Specifies whether password authentication should be disabled.
     */
    disablePasswordAuthentication?: pulumi.Input<boolean | undefined>;
    /**
     * Indicates whether VMAgent Platform Updates is enabled for the Linux virtual machine. Default value is false.
     */
    enableVMAgentPlatformUpdates?: pulumi.Input<boolean | undefined>;
    /**
     * [Preview Feature] Specifies settings related to VM Guest Patching on Linux.
     */
    patchSettings?: pulumi.Input<LinuxPatchSettingsArgs | undefined>;
    /**
     * Indicates whether virtual machine agent should be provisioned on the virtual machine. When this property is not specified in the request body, default behavior is to set it to true. This will ensure that VM Agent is installed on the VM so that extensions can be added to the VM later.
     */
    provisionVMAgent?: pulumi.Input<boolean | undefined>;
    /**
     * Specifies the ssh key configuration for a Linux OS.
     */
    ssh?: pulumi.Input<SshConfigurationArgs | undefined>;
}

/**
 * Specifies settings related to VM Guest Patching on Linux.
 */
export interface LinuxPatchSettingsArgs {
    /**
     * Specifies the mode of VM Guest Patch Assessment for the IaaS virtual machine.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - You control the timing of patch assessments on a virtual machine. <br /><br /> **AutomaticByPlatform** - The platform will trigger periodic patch assessments. The property provisionVMAgent must be true.
     */
    assessmentMode?: pulumi.Input<string | enums.LinuxPatchAssessmentMode | undefined>;
    /**
     * Specifies additional settings for patch mode AutomaticByPlatform in VM Guest Patching on Linux.
     */
    automaticByPlatformSettings?: pulumi.Input<LinuxVMGuestPatchAutomaticByPlatformSettingsArgs | undefined>;
    /**
     * Specifies the mode of VM Guest Patching to IaaS virtual machine or virtual machines associated to virtual machine scale set with OrchestrationMode as Flexible.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - The virtual machine's default patching configuration is used. <br /><br /> **AutomaticByPlatform** - The virtual machine will be automatically updated by the platform. The property provisionVMAgent must be true
     */
    patchMode?: pulumi.Input<string | enums.LinuxVMGuestPatchMode | undefined>;
}

/**
 * Specifies additional settings to be applied when patch mode AutomaticByPlatform is selected in Linux patch settings.
 */
export interface LinuxVMGuestPatchAutomaticByPlatformSettingsArgs {
    /**
     * Enables customer to schedule patching without accidental upgrades
     */
    bypassPlatformSafetyChecksOnUserSchedule?: pulumi.Input<boolean | undefined>;
    /**
     * Specifies the reboot setting for all AutomaticByPlatform patch installation operations.
     */
    rebootSetting?: pulumi.Input<string | enums.LinuxVMGuestPatchAutomaticByPlatformRebootSetting | undefined>;
}

/**
 * The parameters of a managed disk.
 */
export interface ManagedDiskParametersArgs {
    /**
     * Specifies the customer managed disk encryption set resource id for the managed disk.
     */
    diskEncryptionSet?: pulumi.Input<DiskEncryptionSetParametersArgs | undefined>;
    /**
     * The ID of the sub-resource.
     */
    id?: pulumi.Input<string | undefined>;
    /**
     * Specifies the security profile for the managed disk.
     */
    securityProfile?: pulumi.Input<VMDiskSecurityProfileArgs | undefined>;
    /**
     * Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks, it cannot be used with OS Disk.
     */
    storageAccountType?: pulumi.Input<string | enums.StorageAccountTypes | undefined>;
}

/**
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityArgs {
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Describes a network interface reference.
 */
export interface NetworkInterfaceReferenceArgs {
    /**
     * The ID of the sub-resource.
     */
    id?: pulumi.Input<string | undefined>;
    /**
     * Describes a network interface reference properties.
     */
    properties?: pulumi.Input<NetworkInterfaceReferencePropertiesArgs | undefined>;
}

/**
 * Describes a network interface reference properties.
 */
export interface NetworkInterfaceReferencePropertiesArgs {
    /**
     * Specify what happens to the network interface when the VM is deleted
     */
    deleteOption?: pulumi.Input<string | enums.DeleteOptions | undefined>;
    /**
     * Specifies the primary network interface in case the virtual machine has more than 1 network interface.
     */
    primary?: pulumi.Input<boolean | undefined>;
}

/**
 * Specifies the network interfaces or the networking configuration of the virtual machine.
 */
export interface NetworkProfileArgs {
    /**
     * specifies the Microsoft.Network API version used when creating networking resources in the Network Interface Configurations
     */
    networkApiVersion?: pulumi.Input<string | enums.NetworkApiVersion | undefined>;
    /**
     * Specifies the networking configurations that will be used to create the virtual machine networking resources.
     */
    networkInterfaceConfigurations?: pulumi.Input<pulumi.Input<VirtualMachineNetworkInterfaceConfigurationArgs>[] | undefined>;
    /**
     * Specifies the list of resource Ids for the network interfaces associated with the virtual machine.
     */
    networkInterfaces?: pulumi.Input<pulumi.Input<NetworkInterfaceReferenceArgs>[] | undefined>;
}

/**
 * Specifies information about the operating system disk used by the virtual machine. For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/managed-disks-overview).
 */
export interface OSDiskArgs {
    /**
     * Specifies the caching requirements. Possible values are: None, ReadOnly, ReadWrite. The defaulting behavior is: None for Standard storage. ReadOnly for Premium storage.
     */
    caching?: pulumi.Input<string | enums.CachingTypes | undefined>;
    /**
     * Specifies how the virtual machine disk should be created. Possible values are Attach, FromImage. If you are using a platform image, you should also use the imageReference element described above. If you are using a marketplace image, you should also use the plan element previously described.
     */
    createOption: pulumi.Input<string | enums.DiskCreateOptionTypes>;
    /**
     * Specifies whether OS Disk should be deleted or detached upon VM deletion. Possible values are: Delete, Detach. The default value is set to Detach. For an ephemeral OS Disk, the default value is set to Delete. The user cannot change the delete option for an ephemeral OS Disk.
     */
    deleteOption?: pulumi.Input<string | enums.DiskDeleteOptionTypes | undefined>;
    /**
     * Specifies the ephemeral Disk Settings for the operating system disk used by the virtual machine.
     */
    diffDiskSettings?: pulumi.Input<DiffDiskSettingsArgs | undefined>;
    /**
     * Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. The property 'diskSizeGB' is the number of bytes x 1024^3 for the disk and the value cannot be larger than 1023.
     */
    diskSizeGB?: pulumi.Input<number | undefined>;
    /**
     * Specifies the encryption settings for the OS Disk. Minimum compute api-version: 2015-06-15.
     */
    encryptionSettings?: pulumi.Input<DiskEncryptionSettingsArgs | undefined>;
    /**
     * The source user image virtual hard disk. The virtual hard disk will be copied before being attached to the virtual machine. If SourceImage is provided, the destination virtual hard drive must not exist.
     */
    image?: pulumi.Input<VirtualHardDiskArgs | undefined>;
    /**
     * The managed disk parameters.
     */
    managedDisk?: pulumi.Input<ManagedDiskParametersArgs | undefined>;
    /**
     * The disk name.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. Possible values are: Windows, Linux.
     */
    osType?: pulumi.Input<string | enums.OperatingSystemTypes | undefined>;
    /**
     * The virtual hard disk.
     */
    vhd?: pulumi.Input<VirtualHardDiskArgs | undefined>;
    /**
     * Specifies whether writeAccelerator should be enabled or disabled on the disk.
     */
    writeAcceleratorEnabled?: pulumi.Input<boolean | undefined>;
}

/**
 * Profile for the OS Image Scheduled event.
 */
export interface OSImageNotificationProfileArgs {
    /**
     * Specifies whether the OS Image Scheduled event is enabled or disabled.
     */
    enable?: pulumi.Input<boolean | undefined>;
    /**
     * Length of time a Virtual Machine being reimaged or having its OS upgraded will have to potentially approve the OS Image Scheduled Event before the event is auto approved (timed out). The configuration is specified in ISO 8601 format, and the value must be 15 minutes (PT15M)
     */
    notBeforeTimeout?: pulumi.Input<string | undefined>;
}

/**
 * Specifies the operating system settings for the virtual machine. Some of the settings cannot be changed once VM is provisioned.
 */
export interface OSProfileArgs {
    /**
     * Specifies the password of the administrator account. <br><br> **Minimum-length (Windows):** 8 characters <br><br> **Minimum-length (Linux):** 6 characters <br><br> **Max-length (Windows):** 123 characters <br><br> **Max-length (Linux):** 72 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!" <br><br> For resetting the password, see [How to reset the Remote Desktop service or its login password in a Windows VM](https://docs.microsoft.com/troubleshoot/azure/virtual-machines/reset-rdp) <br><br> For resetting root password, see [Manage users, SSH, and check or repair disks on Azure Linux VMs using the VMAccess Extension](https://docs.microsoft.com/troubleshoot/azure/virtual-machines/troubleshoot-ssh-connection)
     */
    adminPassword?: pulumi.Input<string | undefined>;
    /**
     * Specifies the name of the administrator account. <br><br> This property cannot be updated after the VM is created. <br><br> **Windows-only restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length (Linux):** 1  character <br><br> **Max-length (Linux):** 64 characters <br><br> **Max-length (Windows):** 20 characters.
     */
    adminUsername?: pulumi.Input<string | undefined>;
    /**
     * Specifies whether extension operations should be allowed on the virtual machine. This may only be set to False when no extensions are present on the virtual machine.
     */
    allowExtensionOperations?: pulumi.Input<boolean | undefined>;
    /**
     * Specifies the host OS name of the virtual machine. This name cannot be updated after the VM is created. **Max-length (Windows):** 15 characters. **Max-length (Linux):** 64 characters. For naming conventions and restrictions see [Azure infrastructure services implementation guidelines](https://docs.microsoft.com/azure/azure-resource-manager/management/resource-name-rules).
     */
    computerName?: pulumi.Input<string | undefined>;
    /**
     * Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the Virtual Machine. The maximum length of the binary array is 65535 bytes. **Note: Do not pass any secrets or passwords in customData property.** This property cannot be updated after the VM is created. The property 'customData' is passed to the VM to be saved as a file, for more information see [Custom Data on Azure VMs](https://azure.microsoft.com/blog/custom-data-and-cloud-init-on-windows-azure/). For using cloud-init for your Linux VM, see [Using cloud-init to customize a Linux VM during creation](https://docs.microsoft.com/azure/virtual-machines/linux/using-cloud-init).
     */
    customData?: pulumi.Input<string | undefined>;
    /**
     * Specifies the Linux operating system settings on the virtual machine. For a list of supported Linux distributions, see [Linux on Azure-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/linux/endorsed-distros).
     */
    linuxConfiguration?: pulumi.Input<LinuxConfigurationArgs | undefined>;
    /**
     * Optional property which must either be set to True or omitted.
     */
    requireGuestProvisionSignal?: pulumi.Input<boolean | undefined>;
    /**
     * Specifies set of certificates that should be installed onto the virtual machine. To install certificates on a virtual machine it is recommended to use the [Azure Key Vault virtual machine extension for Linux](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-linux) or the [Azure Key Vault virtual machine extension for Windows](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-windows).
     */
    secrets?: pulumi.Input<pulumi.Input<VaultSecretGroupArgs>[] | undefined>;
    /**
     * Specifies Windows operating system settings on the virtual machine.
     */
    windowsConfiguration?: pulumi.Input<WindowsConfigurationArgs | undefined>;
}

/**
 * Specifies settings related to VM Guest Patching on Windows.
 */
export interface PatchSettingsArgs {
    /**
     * Specifies the mode of VM Guest patch assessment for the IaaS virtual machine.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - You control the timing of patch assessments on a virtual machine.<br /><br /> **AutomaticByPlatform** - The platform will trigger periodic patch assessments. The property provisionVMAgent must be true.
     */
    assessmentMode?: pulumi.Input<string | enums.WindowsPatchAssessmentMode | undefined>;
    /**
     * Specifies additional settings for patch mode AutomaticByPlatform in VM Guest Patching on Windows.
     */
    automaticByPlatformSettings?: pulumi.Input<WindowsVMGuestPatchAutomaticByPlatformSettingsArgs | undefined>;
    /**
     * Enables customers to patch their Azure VMs without requiring a reboot. For enableHotpatching, the 'provisionVMAgent' must be set to true and 'patchMode' must be set to 'AutomaticByPlatform'.
     */
    enableHotpatching?: pulumi.Input<boolean | undefined>;
    /**
     * Specifies the mode of VM Guest Patching to IaaS virtual machine or virtual machines associated to virtual machine scale set with OrchestrationMode as Flexible.<br /><br /> Possible values are:<br /><br /> **Manual** - You  control the application of patches to a virtual machine. You do this by applying patches manually inside the VM. In this mode, automatic updates are disabled; the property WindowsConfiguration.enableAutomaticUpdates must be false<br /><br /> **AutomaticByOS** - The virtual machine will automatically be updated by the OS. The property WindowsConfiguration.enableAutomaticUpdates must be true. <br /><br /> **AutomaticByPlatform** - the virtual machine will automatically updated by the platform. The properties provisionVMAgent and WindowsConfiguration.enableAutomaticUpdates must be true
     */
    patchMode?: pulumi.Input<string | enums.WindowsVMGuestPatchMode | undefined>;
}

/**
 * Plan for the resource.
 */
export interface PlanArgs {
    /**
     * A user defined name of the 3rd Party Artifact that is being procured.
     */
    name: pulumi.Input<string>;
    /**
     * The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding.
     */
    product: pulumi.Input<string>;
    /**
     * A publisher provided promotion code as provisioned in Data Market for the said product/artifact.
     */
    promotionCode?: pulumi.Input<string | undefined>;
    /**
     * The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic
     */
    publisher: pulumi.Input<string>;
    /**
     * The version of the desired product/artifact.
     */
    version?: pulumi.Input<string | undefined>;
}

/**
 * Contains properties that are applicable to both Spot and Regular.
 */
export interface PriorityProfileArgs {
    /**
     * Allocation strategy to follow when determining the VM sizes distribution.
     */
    allocationStrategy?: pulumi.Input<string | enums.AllocationStrategy | undefined>;
    /**
     * Eviction Policy to follow when evicting Spot VMs.
     */
    evictionPolicy?: pulumi.Input<string | enums.EvictionPolicy | undefined>;
    /**
     * Price per hour of each Spot VM will never exceed this.
     */
    maxPricePerVM?: pulumi.Input<number | undefined>;
    /**
     * Specifies the type of Virtual Machine.
     */
    type?: pulumi.Input<string | enums.VirtualMachineType | undefined>;
}

/**
 * Specifies ProxyAgent settings for the virtual machine or virtual machine scale set. Minimum api-version: 2023-09-01.
 */
export interface ProxyAgentSettingsArgs {
    /**
     * Specify whether to implicitly install the ProxyAgent Extension. This option is currently applicable only for Linux Os.
     */
    addProxyAgentExtension?: pulumi.Input<boolean | undefined>;
    /**
     * Specifies whether ProxyAgent feature should be enabled on the virtual machine or virtual machine scale set.
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * Specifies the IMDS endpoint settings while creating the virtual machine or virtual machine scale set. Minimum api-version: 2024-03-01.
     */
    imds?: pulumi.Input<HostEndpointSettingsArgs | undefined>;
    /**
     * Increase the value of this property allows users to reset the key used for securing communication channel between guest and host.
     */
    keyIncarnationId?: pulumi.Input<number | undefined>;
    /**
     * Specifies the mode that ProxyAgent will execute on. Warning: this property has been deprecated, please specify 'mode' under particular hostendpoint setting.
     */
    mode?: pulumi.Input<string | enums.Mode | undefined>;
    /**
     * Specifies the Wire Server endpoint settings while creating the virtual machine or virtual machine scale set. Minimum api-version: 2024-03-01.
     */
    wireServer?: pulumi.Input<HostEndpointSettingsArgs | undefined>;
}

/**
 * Describes the public IP Sku. It can only be set with OrchestrationMode as Flexible.
 */
export interface PublicIPAddressSkuArgs {
    /**
     * Specify public IP sku name
     */
    name?: pulumi.Input<string | enums.PublicIPAddressSkuName | undefined>;
    /**
     * Specify public IP sku tier
     */
    tier?: pulumi.Input<string | enums.PublicIPAddressSkuTier | undefined>;
}

/**
 * The retry policy for the user request
 */
export interface RetryPolicyArgs {
    /**
     * Retry count for user request
     */
    retryCount?: pulumi.Input<number | undefined>;
    /**
     * Retry window in minutes for user request
     */
    retryWindowInMinutes?: pulumi.Input<number | undefined>;
}

/**
 * Specifies additional publishing targets for scheduled events.
 */
export interface ScheduledEventsAdditionalPublishingTargetsArgs {
    /**
     * The configuration parameters used while creating eventGridAndResourceGraph Scheduled Event setting.
     */
    eventGridAndResourceGraph?: pulumi.Input<EventGridAndResourceGraphArgs | undefined>;
}

/**
 * Specifies Redeploy, Reboot and ScheduledEventsAdditionalPublishingTargets Scheduled Event related configurations.
 */
export interface ScheduledEventsPolicyArgs {
    /**
     * The configuration parameters used while creating AllInstancesDown scheduled event setting creation.
     */
    allInstancesDown?: pulumi.Input<AllInstancesDownArgs | undefined>;
    /**
     * The configuration parameters used while publishing scheduledEventsAdditionalPublishingTargets.
     */
    scheduledEventsAdditionalPublishingTargets?: pulumi.Input<ScheduledEventsAdditionalPublishingTargetsArgs | undefined>;
    /**
     * The configuration parameters used while creating userInitiatedReboot scheduled event setting creation.
     */
    userInitiatedReboot?: pulumi.Input<UserInitiatedRebootArgs | undefined>;
    /**
     * The configuration parameters used while creating userInitiatedRedeploy scheduled event setting creation.
     */
    userInitiatedRedeploy?: pulumi.Input<UserInitiatedRedeployArgs | undefined>;
}

/**
 * Profile for the scheduled events.
 */
export interface ScheduledEventsProfileArgs {
    /**
     * Specifies OS Image Scheduled Event related configurations.
     */
    osImageNotificationProfile?: pulumi.Input<OSImageNotificationProfileArgs | undefined>;
    /**
     * Specifies Terminate Scheduled Event related configurations.
     */
    terminateNotificationProfile?: pulumi.Input<TerminateNotificationProfileArgs | undefined>;
}

/**
 * Specifies the Security profile settings for the virtual machine or virtual machine scale set.
 */
export interface SecurityProfileArgs {
    /**
     * This property can be used by user in the request to enable or disable the Host Encryption for the virtual machine or virtual machine scale set. This will enable the encryption for all the disks including Resource/Temp disk at host itself. The default behavior is: The Encryption at host will be disabled unless this property is set to true for the resource.
     */
    encryptionAtHost?: pulumi.Input<boolean | undefined>;
    /**
     * Specifies the Managed Identity used by ADE to get access token for keyvault operations.
     */
    encryptionIdentity?: pulumi.Input<EncryptionIdentityArgs | undefined>;
    /**
     * Specifies ProxyAgent settings while creating the virtual machine. Minimum compute api-version: 2023-09-01.
     */
    proxyAgentSettings?: pulumi.Input<ProxyAgentSettingsArgs | undefined>;
    /**
     * Specifies the SecurityType of the virtual machine. It has to be set to any specified value to enable UefiSettings. The default behavior is: UefiSettings will not be enabled unless this property is set.
     */
    securityType?: pulumi.Input<string | enums.SecurityTypes | undefined>;
    /**
     * Specifies the security settings like secure boot and vTPM used while creating the virtual machine. Minimum compute api-version: 2020-12-01.
     */
    uefiSettings?: pulumi.Input<UefiSettingsArgs | undefined>;
}

/**
 * SSH configuration for Linux based VMs running on Azure
 */
export interface SshConfigurationArgs {
    /**
     * The list of SSH public keys used to authenticate with linux based VMs.
     */
    publicKeys?: pulumi.Input<pulumi.Input<SshPublicKeyArgs>[] | undefined>;
}

/**
 * Contains information about SSH certificate public key and the path on the Linux VM where the public key is placed.
 */
export interface SshPublicKeyArgs {
    /**
     * SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. For creating ssh keys, see [Create SSH keys on Linux and Mac for Linux VMs in Azure]https://docs.microsoft.com/azure/virtual-machines/linux/create-ssh-keys-detailed).
     */
    keyData?: pulumi.Input<string | undefined>;
    /**
     * Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys
     */
    path?: pulumi.Input<string | undefined>;
}

/**
 * Specifies the storage settings for the virtual machine disks.
 */
export interface StorageProfileArgs {
    /**
     * Specifies the parameters that are used to add a data disk to a virtual machine. For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/managed-disks-overview).
     */
    dataDisks?: pulumi.Input<pulumi.Input<DataDiskArgs>[] | undefined>;
    /**
     * Specifies the disk controller type configured for the VM. **Note:** This property will be set to the default disk controller type if not specified provided virtual machine is being created with 'hyperVGeneration' set to V2 based on the capabilities of the operating system disk and VM size from the the specified minimum api version. You need to deallocate the VM before updating its disk controller type unless you are updating the VM size in the VM configuration which implicitly deallocates and reallocates the VM. Minimum api-version: 2022-08-01.
     */
    diskControllerType?: pulumi.Input<string | enums.DiskControllerTypes | undefined>;
    /**
     * Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations.
     */
    imageReference?: pulumi.Input<ImageReferenceArgs | undefined>;
    /**
     * Specifies information about the operating system disk used by the virtual machine. For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/managed-disks-overview).
     */
    osDisk?: pulumi.Input<OSDiskArgs | undefined>;
}

/**
 * Describes a reference to a sub-resource.
 */
export interface SubResourceArgs {
    /**
     * Sub-resource ID. Both absolute resource ID and a relative resource ID are accepted.
     * An absolute ID starts with /subscriptions/ and contains the entire ID of the parent resource and the ID of the sub-resource in the end.
     * A relative ID replaces the ID of the parent resource with a token '$self', followed by the sub-resource ID itself.
     * Example of a relative ID: $self/frontEndConfigurations/my-frontend.
     */
    id?: pulumi.Input<string | undefined>;
}

/**
 * Profile properties for the Terminate Scheduled event.
 */
export interface TerminateNotificationProfileArgs {
    /**
     * Specifies whether the Terminate Scheduled event is enabled or disabled.
     */
    enable?: pulumi.Input<boolean | undefined>;
    /**
     * Configurable length of time a Virtual Machine being deleted will have to potentially approve the Terminate Scheduled Event before the event is auto approved (timed out). The configuration must be specified in ISO 8601 format, the default value is 5 minutes (PT5M)
     */
    notBeforeTimeout?: pulumi.Input<string | undefined>;
}

/**
 * Specifies the security settings like secure boot and vTPM used while creating the virtual machine. Minimum api-version: 2020-12-01.
 */
export interface UefiSettingsArgs {
    /**
     * Specifies whether secure boot should be enabled on the virtual machine. Minimum compute api-version: 2020-12-01.
     */
    secureBootEnabled?: pulumi.Input<boolean | undefined>;
    /**
     * Specifies whether vTPM should be enabled on the virtual machine. Minimum compute api-version: 2020-12-01.
     */
    vTpmEnabled?: pulumi.Input<boolean | undefined>;
}

/**
 * Specifies Reboot related Scheduled Event related configurations.
 */
export interface UserInitiatedRebootArgs {
    /**
     * Specifies Reboot Scheduled Event related configurations.
     */
    automaticallyApprove?: pulumi.Input<boolean | undefined>;
}

/**
 * Specifies Redeploy related Scheduled Event related configurations.
 */
export interface UserInitiatedRedeployArgs {
    /**
     * Specifies Redeploy Scheduled Event related configurations.
     */
    automaticallyApprove?: pulumi.Input<boolean | undefined>;
}

/**
 * VMAttributes using double values.
 */
export interface VMAttributeMinMaxDoubleArgs {
    /**
     * Maximum value. Must be greater than zero. Double.MaxValue(1.7976931348623157E+308).
     */
    max?: pulumi.Input<number | undefined>;
    /**
     * Minimum value. If not specified, no minimum filter is applied.
     */
    min?: pulumi.Input<number | undefined>;
}

/**
 * While retrieving VMSizes from CRS, Min = 0 (uint.MinValue) if not specified, Max = 4294967295 (uint.MaxValue) if not specified. This allows to filter VMAttributes on all available VMSizes.
 */
export interface VMAttributeMinMaxIntegerArgs {
    /**
     * Max VMSize from CRS, Max = 4294967295 (uint.MaxValue) if not specified.
     */
    max?: pulumi.Input<number | undefined>;
    /**
     * Min VMSize from CRS, Min = 0 (uint.MinValue) if not specified.
     */
    min?: pulumi.Input<number | undefined>;
}

/**
 * VMAttributes that will be used to filter VMSizes which will be used to launch instances.
 */
export interface VMAttributesArgs {
    /**
     * The range of accelerator count specified from min to max. Optional parameter. Either Min or Max is required if specified.
     * acceleratorSupport should be set to "Included" or "Required" to use this VMAttribute.
     * If acceleratorSupport is "Excluded", this VMAttribute can not be used.
     */
    acceleratorCount?: pulumi.Input<VMAttributeMinMaxIntegerArgs | undefined>;
    /**
     * The accelerator manufacturers specified as a list.
     * acceleratorSupport should be set to "Included" or "Required" to use this VMAttribute.
     * If acceleratorSupport is "Excluded", this VMAttribute can not be used.
     */
    acceleratorManufacturers?: pulumi.Input<pulumi.Input<string | enums.AcceleratorManufacturer>[] | undefined>;
    /**
     * Specifies whether the VMSize supporting accelerator should be used to launch instances or not.
     * acceleratorSupport should be set to "Included" or "Required" to use this VMAttribute.
     * If acceleratorSupport is "Excluded", this VMAttribute can not be used.
     */
    acceleratorSupport?: pulumi.Input<string | enums.VMAttributeSupport | undefined>;
    /**
     * The accelerator types specified as a list. acceleratorSupport should be set to "Included" or "Required" to use this VMAttribute.
     * If acceleratorSupport is "Excluded", this VMAttribute can not be used.
     */
    acceleratorTypes?: pulumi.Input<pulumi.Input<string | enums.AcceleratorType>[] | undefined>;
    /**
     * Specifies which VMSizes should be allowed while filtering on VMAttributes. Cannot be specified together with excludedVMSizes. Maximum of 10 VM sizes allowed. Optional parameter.
     */
    allowedVMSizes?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The VM architecture types specified as a list. Must be specified if VMAttributes are specified. Must be compatible with image used.
     */
    architectureTypes: pulumi.Input<pulumi.Input<string | enums.ArchitectureType>[]>;
    /**
     * Specifies whether the VMSize supporting burstable capability should be used to launch instances or not.
     */
    burstableSupport?: pulumi.Input<string | enums.VMAttributeSupport | undefined>;
    /**
     * The VM CPU manufacturers specified as a list. Optional parameter.
     */
    cpuManufacturers?: pulumi.Input<pulumi.Input<string | enums.CpuManufacturer>[] | undefined>;
    /**
     * The range of data disk count specified from Min to Max. Optional parameter. Either Min or Max is required if specified.
     */
    dataDiskCount?: pulumi.Input<VMAttributeMinMaxIntegerArgs | undefined>;
    /**
     * Specifies which VMSizes should be excluded while filtering on VMAttributes. Cannot be specified together with allowedVMSizes. Maximum of 10 VM sizes allowed. Optional parameter.
     */
    excludedVMSizes?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The hyperV generations specified as a list. Optional parameter.
     */
    hyperVGenerations?: pulumi.Input<pulumi.Input<string | enums.HyperVGeneration>[] | undefined>;
    /**
     * The local storage disk types specified as a list. LocalStorageSupport should be set to "Included" or "Required" to use this VMAttribute.
     * If localStorageSupport is "Excluded", this VMAttribute can not be used.
     */
    localStorageDiskTypes?: pulumi.Input<pulumi.Input<string | enums.LocalStorageDiskType>[] | undefined>;
    /**
     * LocalStorageSupport should be set to "Included" or "Required" to use this VMAttribute.
     * If localStorageSupport is "Excluded", this VMAttribute can not be used.
     */
    localStorageInGiB?: pulumi.Input<VMAttributeMinMaxDoubleArgs | undefined>;
    /**
     * Specifies whether the VMSize supporting local storage should be used to launch instances or not.
     * Included - Default if not specified as most Azure VMs support local storage.
     */
    localStorageSupport?: pulumi.Input<string | enums.VMAttributeSupport | undefined>;
    /**
     * The range of memory specified from Min to Max. Must be specified if VMAttributes are specified, either Min or Max is required if specified.
     */
    memoryInGiB: pulumi.Input<VMAttributeMinMaxDoubleArgs>;
    /**
     * The range of memory in GiB per vCPU specified from min to max. Optional parameter. Either Min or Max is required if specified.
     */
    memoryInGiBPerVCpu?: pulumi.Input<VMAttributeMinMaxDoubleArgs | undefined>;
    /**
     * The range of network bandwidth in Mbps specified from Min to Max. Optional parameter. Either Min or Max is required if specified.
     */
    networkBandwidthInMbps?: pulumi.Input<VMAttributeMinMaxDoubleArgs | undefined>;
    /**
     * The range of network interface count specified from Min to Max. Optional parameter. Either Min or Max is required if specified.
     */
    networkInterfaceCount?: pulumi.Input<VMAttributeMinMaxIntegerArgs | undefined>;
    /**
     * The range of RDMA (Remote Direct Memory Access) network interface count specified from Min to Max. Optional parameter. Either Min or Max is required if specified.
     * rdmaSupport should be set to "Included" or "Required" to use this VMAttribute.
     * If rdmaSupport is "Excluded", this VMAttribute can not be used.
     */
    rdmaNetworkInterfaceCount?: pulumi.Input<VMAttributeMinMaxIntegerArgs | undefined>;
    /**
     * Specifies whether the VMSize supporting RDMA (Remote Direct Memory Access) should be used to build launch instances or not.
     */
    rdmaSupport?: pulumi.Input<string | enums.VMAttributeSupport | undefined>;
    /**
     * The range of vCpuCount specified from Min to Max. Must be specified if VMAttributes are specified, either Min or Max is required if specified.
     */
    vCpuCount: pulumi.Input<VMAttributeMinMaxIntegerArgs>;
    /**
     * The VM category specified as a list. Optional parameter.
     */
    vmCategories?: pulumi.Input<pulumi.Input<string | enums.VMCategory>[] | undefined>;
}

/**
 * Specifies the security profile settings for the managed disk. **Note:** It can only be set for Confidential VMs.
 */
export interface VMDiskSecurityProfileArgs {
    /**
     * Specifies the customer managed disk encryption set resource id for the managed disk that is used for Customer Managed Key encrypted ConfidentialVM OS Disk and VMGuest blob.
     */
    diskEncryptionSet?: pulumi.Input<DiskEncryptionSetParametersArgs | undefined>;
    /**
     * Specifies the EncryptionType of the managed disk. It is set to DiskWithVMGuestState for encryption of the managed disk along with VMGuestState blob, VMGuestStateOnly for encryption of just the VMGuestState blob, and NonPersistedTPM for not persisting firmware state in the VMGuestState blob.. **Note:** It can be set for only Confidential VMs.
     */
    securityEncryptionType?: pulumi.Input<string | enums.SecurityEncryptionTypes | undefined>;
}

/**
 * Specifies the required information to reference a compute gallery application version
 */
export interface VMGalleryApplicationArgs {
    /**
     * Optional, Specifies the uri to an azure blob that will replace the default configuration for the package if provided
     */
    configurationReference?: pulumi.Input<string | undefined>;
    /**
     * If set to true, when a new Gallery Application version is available in PIR/SIG, it will be automatically updated for the VM/VMSS
     */
    enableAutomaticUpgrade?: pulumi.Input<boolean | undefined>;
    /**
     * Optional, Specifies the order in which the packages have to be installed
     */
    order?: pulumi.Input<number | undefined>;
    /**
     * Specifies the GalleryApplicationVersion resource id on the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{application}/versions/{version}
     */
    packageReferenceId: pulumi.Input<string>;
    /**
     * Optional, Specifies a passthrough value for more generic context.
     */
    tags?: pulumi.Input<string | undefined>;
    /**
     * Optional, If true, any failure for any operation in the VmApplication will fail the deployment
     */
    treatFailureAsDeploymentFailure?: pulumi.Input<boolean | undefined>;
}

/**
 * Describes a single certificate reference in a Key Vault, and where the certificate should reside on the VM.
 */
export interface VaultCertificateArgs {
    /**
     * For Windows VMs, specifies the certificate store on the Virtual Machine to which the certificate should be added. The specified certificate store is implicitly in the LocalMachine account. For Linux VMs, the certificate file is placed under the /var/lib/waagent directory, with the file name <UppercaseThumbprint>.crt for the X509 certificate file and <UppercaseThumbprint>.prv for private key. Both of these files are .pem formatted.
     */
    certificateStore?: pulumi.Input<string | undefined>;
    /**
     * This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  'data':'<Base64-encoded-certificate>',<br>  'dataType':'pfx',<br>  'password':'<pfx-file-password>'<br>} <br> To install certificates on a virtual machine it is recommended to use the [Azure Key Vault virtual machine extension for Linux](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-linux) or the [Azure Key Vault virtual machine extension for Windows](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-windows).
     */
    certificateUrl?: pulumi.Input<string | undefined>;
}

/**
 * Describes a set of certificates which are all in the same Key Vault.
 */
export interface VaultSecretGroupArgs {
    /**
     * The relative URL of the Key Vault containing all of the certificates in VaultCertificates.
     */
    sourceVault?: pulumi.Input<SubResourceArgs | undefined>;
    /**
     * The list of key vault references in SourceVault which contain certificates.
     */
    vaultCertificates?: pulumi.Input<pulumi.Input<VaultCertificateArgs>[] | undefined>;
}

/**
 * Describes the uri of a disk.
 */
export interface VirtualHardDiskArgs {
    /**
     * Specifies the virtual hard disk's uri.
     */
    uri?: pulumi.Input<string | undefined>;
}

/**
 * Defines a virtual machine extension.
 */
export interface VirtualMachineExtensionArgs {
    /**
     * The name of the virtual machine extension.
     */
    name: pulumi.Input<string>;
    /**
     * Properties of the virtual machine extension.
     */
    properties: pulumi.Input<VirtualMachineExtensionPropertiesArgs>;
}

/**
 * Describes the properties of a Virtual Machine Extension.
 */
export interface VirtualMachineExtensionPropertiesArgs {
    /**
     * Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
     */
    autoUpgradeMinorVersion?: pulumi.Input<boolean | undefined>;
    /**
     * Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available.
     */
    enableAutomaticUpgrade?: pulumi.Input<boolean | undefined>;
    /**
     * How the extension handler should be forced to update even if the extension configuration has not changed.
     */
    forceUpdateTag?: pulumi.Input<string | undefined>;
    /**
     * The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
     */
    protectedSettings?: any | undefined;
    /**
     * The extensions protected settings that are passed by reference, and consumed from key vault
     */
    protectedSettingsFromKeyVault?: pulumi.Input<KeyVaultSecretReferenceArgs | undefined>;
    /**
     * Collection of extension names after which this extension needs to be provisioned.
     */
    provisionAfterExtensions?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The name of the extension handler publisher.
     */
    publisher?: pulumi.Input<string | undefined>;
    /**
     * JSON formatted public settings for the extension.
     */
    settings?: any | undefined;
    /**
     * Indicates whether failures stemming from the extension will be suppressed (Operational failures such as not connecting to the VM will not be suppressed regardless of this value). The default is false.
     */
    suppressFailures?: pulumi.Input<boolean | undefined>;
    /**
     * Specifies the type of the extension; an example is 'CustomScriptExtension'.
     */
    type?: pulumi.Input<string | undefined>;
    /**
     * Specifies the version of the script handler.
     */
    typeHandlerVersion?: pulumi.Input<string | undefined>;
}

/**
 * Contains the IP tag associated with the public IP address.
 */
export interface VirtualMachineIpTagArgs {
    /**
     * IP tag type. Example: FirstPartyUsage.
     */
    ipTagType?: pulumi.Input<string | undefined>;
    /**
     * IP tag associated with the public IP. Example: SQL, Storage etc.
     */
    tag?: pulumi.Input<string | undefined>;
}

/**
 * Describes a virtual machine network interface configurations.
 */
export interface VirtualMachineNetworkInterfaceConfigurationArgs {
    /**
     * The network interface configuration name.
     */
    name: pulumi.Input<string>;
    /**
     * Describes a virtual machine network profile's IP configuration.
     */
    properties?: pulumi.Input<VirtualMachineNetworkInterfaceConfigurationPropertiesArgs | undefined>;
    /**
     * Resource tags applied to the networkInterface address created by this NetworkInterfaceConfiguration
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}

/**
 * Describes a virtual machine network profile's IP configuration.
 */
export interface VirtualMachineNetworkInterfaceConfigurationPropertiesArgs {
    /**
     * Specifies whether the Auxiliary mode is enabled for the Network Interface resource.
     */
    auxiliaryMode?: pulumi.Input<string | enums.NetworkInterfaceAuxiliaryMode | undefined>;
    /**
     * Specifies whether the Auxiliary sku is enabled for the Network Interface resource.
     */
    auxiliarySku?: pulumi.Input<string | enums.NetworkInterfaceAuxiliarySku | undefined>;
    /**
     * Specify what happens to the network interface when the VM is deleted
     */
    deleteOption?: pulumi.Input<string | enums.DeleteOptions | undefined>;
    /**
     * Specifies whether the network interface is disabled for tcp state tracking.
     */
    disableTcpStateTracking?: pulumi.Input<boolean | undefined>;
    /**
     * The dns settings to be applied on the network interfaces.
     */
    dnsSettings?: pulumi.Input<VirtualMachineNetworkInterfaceDnsSettingsConfigurationArgs | undefined>;
    /**
     * The DSCP configuration for the network interface.
     */
    dscpConfiguration?: pulumi.Input<SubResourceArgs | undefined>;
    /**
     * Specifies whether the network interface is accelerated networking-enabled.
     */
    enableAcceleratedNetworking?: pulumi.Input<boolean | undefined>;
    /**
     * Specifies whether the network interface is FPGA networking-enabled.
     */
    enableFpga?: pulumi.Input<boolean | undefined>;
    /**
     * Whether IP forwarding enabled on this NIC.
     */
    enableIPForwarding?: pulumi.Input<boolean | undefined>;
    /**
     * Specifies the IP configurations of the network interface.
     */
    ipConfigurations: pulumi.Input<pulumi.Input<VirtualMachineNetworkInterfaceIPConfigurationArgs>[]>;
    /**
     * The network security group.
     */
    networkSecurityGroup?: pulumi.Input<SubResourceArgs | undefined>;
    /**
     * Specifies the primary network interface in case the virtual machine has more than 1 network interface.
     */
    primary?: pulumi.Input<boolean | undefined>;
}

/**
 * Describes a virtual machines network configuration's DNS settings.
 */
export interface VirtualMachineNetworkInterfaceDnsSettingsConfigurationArgs {
    /**
     * List of DNS servers IP addresses
     */
    dnsServers?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Describes a virtual machine network profile's IP configuration.
 */
export interface VirtualMachineNetworkInterfaceIPConfigurationArgs {
    /**
     * The IP configuration name.
     */
    name: pulumi.Input<string>;
    /**
     * Describes a virtual machine network interface IP configuration properties.
     */
    properties?: pulumi.Input<VirtualMachineNetworkInterfaceIPConfigurationPropertiesArgs | undefined>;
}

/**
 * Describes a virtual machine network interface IP configuration properties.
 */
export interface VirtualMachineNetworkInterfaceIPConfigurationPropertiesArgs {
    /**
     * Specifies an array of references to backend address pools of application gateways. A virtual machine can reference backend address pools of multiple application gateways. Multiple virtual machines cannot use the same application gateway.
     */
    applicationGatewayBackendAddressPools?: pulumi.Input<pulumi.Input<SubResourceArgs>[] | undefined>;
    /**
     * Specifies an array of references to application security group.
     */
    applicationSecurityGroups?: pulumi.Input<pulumi.Input<SubResourceArgs>[] | undefined>;
    /**
     * Specifies an array of references to backend address pools of load balancers. A virtual machine can reference backend address pools of one public and one internal load balancer. [Multiple virtual machines cannot use the same basic sku load balancer].
     */
    loadBalancerBackendAddressPools?: pulumi.Input<pulumi.Input<SubResourceArgs>[] | undefined>;
    /**
     * Specifies the primary network interface in case the virtual machine has more than 1 network interface.
     */
    primary?: pulumi.Input<boolean | undefined>;
    /**
     * Available from Api-Version 2017-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'.
     */
    privateIPAddressVersion?: pulumi.Input<string | enums.IPVersions | undefined>;
    /**
     * The publicIPAddressConfiguration.
     */
    publicIPAddressConfiguration?: pulumi.Input<VirtualMachinePublicIPAddressConfigurationArgs | undefined>;
    /**
     * Specifies the identifier of the subnet.
     */
    subnet?: pulumi.Input<SubResourceArgs | undefined>;
}

/**
 * Describes the properties of a Virtual Machine.
 */
export interface VirtualMachineProfileArgs {
    /**
     * Specifies additional capabilities enabled or disabled on the virtual machine.
     */
    additionalCapabilities?: pulumi.Input<AdditionalCapabilitiesArgs | undefined>;
    /**
     * Specifies the gallery applications that should be made available to the VM.
     */
    applicationProfile?: pulumi.Input<ApplicationProfileArgs | undefined>;
    /**
     * Specifies information about the capacity reservation that is used to allocate virtual machine. Minimum compute api-version: 2021-04-01.
     */
    capacityReservation?: pulumi.Input<CapacityReservationProfileArgs | undefined>;
    /**
     * Specifies the boot diagnostic settings state. Minimum compute api-version: 2015-06-15.
     */
    diagnosticsProfile?: pulumi.Input<DiagnosticsProfileArgs | undefined>;
    /**
     * Specifies the time alloted for all extensions to start. The time duration should be between 15 minutes and 120 minutes (inclusive) and should be specified in ISO 8601 format. The default value is 90 minutes (PT1H30M). Minimum compute api-version: 2020-06-01.
     */
    extensionsTimeBudget?: pulumi.Input<string | undefined>;
    /**
     * Specifies that the image or disk that is being used was licensed on-premises. <br><br> Possible values for Windows Server operating system are: <br><br> Windows_Client <br><br> Windows_Server <br><br> Possible values for Linux Server operating system are: <br><br> RHEL_BYOS (for RHEL) <br><br> SLES_BYOS (for SUSE) <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/windows/hybrid-use-benefit-licensing) <br><br> [Azure Hybrid Use Benefit for Linux Server](https://docs.microsoft.com/azure/virtual-machines/linux/azure-hybrid-benefit-linux) <br><br> Minimum api-version: 2015-06-15
     */
    licenseType?: pulumi.Input<string | undefined>;
    /**
     * Specifies the network interfaces of the virtual machine.
     */
    networkProfile?: pulumi.Input<NetworkProfileArgs | undefined>;
    /**
     * Specifies the operating system settings used while creating the virtual machine. Some of the settings cannot be changed once VM is provisioned.
     */
    osProfile?: pulumi.Input<OSProfileArgs | undefined>;
    /**
     * Specifies Redeploy, Reboot and ScheduledEventsAdditionalPublishingTargets Scheduled Event related configurations for the virtual machine.
     */
    scheduledEventsPolicy?: pulumi.Input<ScheduledEventsPolicyArgs | undefined>;
    /**
     * Specifies Scheduled Event related configurations.
     */
    scheduledEventsProfile?: pulumi.Input<ScheduledEventsProfileArgs | undefined>;
    /**
     * Specifies the Security related profile settings for the virtual machine.
     */
    securityProfile?: pulumi.Input<SecurityProfileArgs | undefined>;
    /**
     * Specifies the storage settings for the virtual machine disks.
     */
    storageProfile?: pulumi.Input<StorageProfileArgs | undefined>;
    /**
     * UserData for the VM, which must be base-64 encoded. Customer should not pass any secrets in here. Minimum compute api-version: 2021-03-01.
     */
    userData?: pulumi.Input<string | undefined>;
}

/**
 * Describes a virtual machines IP Configuration's PublicIPAddress configuration
 */
export interface VirtualMachinePublicIPAddressConfigurationArgs {
    /**
     * The publicIP address configuration name.
     */
    name: pulumi.Input<string>;
    /**
     * Describes a virtual machines IP Configuration's PublicIPAddress configuration
     */
    properties?: pulumi.Input<VirtualMachinePublicIPAddressConfigurationPropertiesArgs | undefined>;
    /**
     * Describes the public IP Sku. It can only be set with OrchestrationMode as Flexible.
     */
    sku?: pulumi.Input<PublicIPAddressSkuArgs | undefined>;
    /**
     * Resource tags applied to the publicIP address created by this PublicIPAddressConfiguration
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}

/**
 * Describes a virtual machines IP Configuration's PublicIPAddress configuration
 */
export interface VirtualMachinePublicIPAddressConfigurationPropertiesArgs {
    /**
     * Specify what happens to the public IP address when the VM is deleted
     */
    deleteOption?: pulumi.Input<string | enums.DeleteOptions | undefined>;
    /**
     * The dns settings to be applied on the publicIP addresses .
     */
    dnsSettings?: pulumi.Input<VirtualMachinePublicIPAddressDnsSettingsConfigurationArgs | undefined>;
    /**
     * The idle timeout of the public IP address.
     */
    idleTimeoutInMinutes?: pulumi.Input<number | undefined>;
    /**
     * The list of IP tags associated with the public IP address.
     */
    ipTags?: pulumi.Input<pulumi.Input<VirtualMachineIpTagArgs>[] | undefined>;
    /**
     * Available from Api-Version 2019-07-01 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4. Possible values are: 'IPv4' and 'IPv6'.
     */
    publicIPAddressVersion?: pulumi.Input<string | enums.IPVersions | undefined>;
    /**
     * Specify the public IP allocation type
     */
    publicIPAllocationMethod?: pulumi.Input<string | enums.PublicIPAllocationMethod | undefined>;
    /**
     * The PublicIPPrefix from which to allocate publicIP addresses.
     */
    publicIPPrefix?: pulumi.Input<SubResourceArgs | undefined>;
}

/**
 * Describes a virtual machines network configuration's DNS settings.
 */
export interface VirtualMachinePublicIPAddressDnsSettingsConfigurationArgs {
    /**
     * The Domain name label prefix of the PublicIPAddress resources that will be created. The generated name label is the concatenation of the domain name label and vm network profile unique ID.
     */
    domainNameLabel: pulumi.Input<string>;
    /**
     * The Domain name label scope of the PublicIPAddress resources that will be created. The generated name label is the concatenation of the hashed domain name label with policy according to the domain name label scope and vm network profile unique ID.
     */
    domainNameLabelScope?: pulumi.Input<string | enums.DomainNameLabelScopeTypes | undefined>;
}

/**
 * Specifications about a VM Size. This will also contain the corresponding rank and weight in future.
 */
export interface VmSizeProfileArgs {
    /**
     * The Sku name (e.g. 'Standard_DS1_v2')
     */
    name: pulumi.Input<string>;
    /**
     * The rank of the VM size. This is used with 'AllocationStrategy.Prioritized'
     * The lower the number, the higher the priority. Starting with 0.
     */
    rank?: pulumi.Input<number | undefined>;
}

/**
 * Describes Windows Remote Management configuration of the VM
 */
export interface WinRMConfigurationArgs {
    /**
     * The list of Windows Remote Management listeners
     */
    listeners?: pulumi.Input<pulumi.Input<WinRMListenerArgs>[] | undefined>;
}

/**
 * Describes Protocol and thumbprint of Windows Remote Management listener
 */
export interface WinRMListenerArgs {
    /**
     * This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>} <br> To install certificates on a virtual machine it is recommended to use the [Azure Key Vault virtual machine extension for Linux](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-linux) or the [Azure Key Vault virtual machine extension for Windows](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-windows).
     */
    certificateUrl?: pulumi.Input<string | undefined>;
    /**
     * Specifies the protocol of WinRM listener. Possible values are: **http,** **https.**
     */
    protocol?: pulumi.Input<string | enums.ProtocolTypes | undefined>;
}

/**
 * Specifies Windows operating system settings on the virtual machine.
 */
export interface WindowsConfigurationArgs {
    /**
     * Specifies additional base-64 encoded XML formatted information that can be included in the Unattend.xml file, which is used by Windows Setup.
     */
    additionalUnattendContent?: pulumi.Input<pulumi.Input<AdditionalUnattendContentArgs>[] | undefined>;
    /**
     * Indicates whether Automatic Updates is enabled for the Windows virtual machine. Default value is true. For virtual machine scale sets, this property can be updated and updates will take effect on OS reprovisioning.
     */
    enableAutomaticUpdates?: pulumi.Input<boolean | undefined>;
    /**
     * [Preview Feature] Specifies settings related to VM Guest Patching on Windows.
     */
    patchSettings?: pulumi.Input<PatchSettingsArgs | undefined>;
    /**
     * Indicates whether virtual machine agent should be provisioned on the virtual machine. When this property is not specified in the request body, it is set to true by default. This will ensure that VM Agent is installed on the VM so that extensions can be added to the VM later.
     */
    provisionVMAgent?: pulumi.Input<boolean | undefined>;
    /**
     * Specifies the time zone of the virtual machine. e.g. "Pacific Standard Time". Possible values can be [TimeZoneInfo.Id](https://docs.microsoft.com/dotnet/api/system.timezoneinfo.id?#System_TimeZoneInfo_Id) value from time zones returned by [TimeZoneInfo.GetSystemTimeZones](https://docs.microsoft.com/dotnet/api/system.timezoneinfo.getsystemtimezones).
     */
    timeZone?: pulumi.Input<string | undefined>;
    /**
     * Specifies the Windows Remote Management listeners. This enables remote Windows PowerShell.
     */
    winRM?: pulumi.Input<WinRMConfigurationArgs | undefined>;
}

/**
 * Specifies additional settings to be applied when patch mode AutomaticByPlatform is selected in Windows patch settings.
 */
export interface WindowsVMGuestPatchAutomaticByPlatformSettingsArgs {
    /**
     * Enables customer to schedule patching without accidental upgrades
     */
    bypassPlatformSafetyChecksOnUserSchedule?: pulumi.Input<boolean | undefined>;
    /**
     * Specifies the reboot setting for all AutomaticByPlatform patch installation operations.
     */
    rebootSetting?: pulumi.Input<string | enums.WindowsVMGuestPatchAutomaticByPlatformRebootSetting | undefined>;
}

/**
 * ZoneAllocationPolicy for LaunchBulkInstancesOperation.
 */
export interface ZoneAllocationPolicyArgs {
    /**
     * Distribution strategy used for zone allocation policy.
     */
    distributionStrategy: pulumi.Input<string | enums.ZoneDistributionStrategy>;
    /**
     * Zone preferences, required when zone distribution strategy is Prioritized.
     */
    zonePreferences?: pulumi.Input<pulumi.Input<ZonePreferenceArgs>[] | undefined>;
}

/**
 * Zone preferences for LaunchBulkInstancesOperation zone allocation policy.
 */
export interface ZonePreferenceArgs {
    /**
     *     The rank of the zone. This is used with 'Prioritized' ZoneDistributionStrategy.
     *     The lower the number, the higher the priority, starting with 0.
     *     0 is the highest rank. If not specified, defaults to lowest rank.
     */
    rank?: pulumi.Input<number | undefined>;
    /**
     * Name of the zone.
     */
    zone: pulumi.Input<string>;
}
