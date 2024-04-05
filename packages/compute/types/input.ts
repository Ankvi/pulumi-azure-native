import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Enables or disables a capability on the virtual machine or virtual machine scale set.
 */
export interface AdditionalCapabilitiesArgs {
    /**
     * The flag that enables or disables hibernation capability on the VM.
     */
    hibernationEnabled?: pulumi.Input<boolean>;
    /**
     * The flag that enables or disables a capability to have one or more managed data disks with UltraSSD_LRS storage account type on the VM or VMSS. Managed disks with storage account type UltraSSD_LRS can be added to a virtual machine or virtual machine scale set only if this property is enabled.
     */
    ultraSSDEnabled?: pulumi.Input<boolean>;
}

/**
 * Specifies additional XML formatted information that can be included in the Unattend.xml file, which is used by Windows Setup. Contents are defined by setting name, component name, and the pass in which the content is applied.
 */
export interface AdditionalUnattendContentArgs {
    /**
     * The component name. Currently, the only allowable value is Microsoft-Windows-Shell-Setup.
     */
    componentName?: pulumi.Input<enums.ComponentNames>;
    /**
     * Specifies the XML formatted content that is added to the unattend.xml file for the specified path and component. The XML must be less than 4KB and must include the root element for the setting or feature that is being inserted.
     */
    content?: pulumi.Input<string>;
    /**
     * The pass name. Currently, the only allowable value is OobeSystem.
     */
    passName?: pulumi.Input<enums.PassNames>;
    /**
     * Specifies the name of the setting to which the content applies. Possible values are: FirstLogonCommands and AutoLogon.
     */
    settingName?: pulumi.Input<enums.SettingNames>;
}

/**
 * The API entity reference.
 */
export interface ApiEntityReferenceArgs {
    /**
     * The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...
     */
    id?: pulumi.Input<string>;
}

/**
 * Contains the list of gallery applications that should be made available to the VM/VMSS
 */
export interface ApplicationProfileArgs {
    /**
     * Specifies the gallery applications that should be made available to the VM/VMSS
     */
    galleryApplications?: pulumi.Input<pulumi.Input<VMGalleryApplicationArgs>[]>;
}

/**
 * The configuration parameters used for performing automatic OS upgrade.
 */
export interface AutomaticOSUpgradePolicyArgs {
    /**
     * Whether OS image rollback feature should be disabled. Default value is false.
     */
    disableAutomaticRollback?: pulumi.Input<boolean>;
    /**
     * Indicates whether OS upgrades should automatically be applied to scale set instances in a rolling fashion when a newer version of the OS image becomes available. Default value is false. If this is set to true for Windows based scale sets, [enableAutomaticUpdates](https://docs.microsoft.com/dotnet/api/microsoft.azure.management.compute.models.windowsconfiguration.enableautomaticupdates?view=azure-dotnet) is automatically set to false and cannot be set to true.
     */
    enableAutomaticOSUpgrade?: pulumi.Input<boolean>;
    /**
     * Indicates whether rolling upgrade policy should be used during Auto OS Upgrade. Default value is false. Auto OS Upgrade will fallback to the default policy if no policy is defined on the VMSS.
     */
    useRollingUpgradePolicy?: pulumi.Input<boolean>;
}

/**
 * Specifies the configuration parameters for automatic repairs on the virtual machine scale set.
 */
export interface AutomaticRepairsPolicyArgs {
    /**
     * Specifies whether automatic repairs should be enabled on the virtual machine scale set. The default value is false.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The amount of time for which automatic repairs are suspended due to a state change on VM. The grace time starts after the state change has completed. This helps avoid premature or accidental repairs. The time duration should be specified in ISO 8601 format. The minimum allowed grace period is 10 minutes (PT10M), which is also the default value. The maximum allowed grace period is 90 minutes (PT90M).
     */
    gracePeriod?: pulumi.Input<string>;
    /**
     * Type of repair action (replace, restart, reimage) that will be used for repairing unhealthy virtual machines in the scale set. Default value is replace.
     */
    repairAction?: pulumi.Input<string | enums.RepairAction>;
}

/**
 * Specifies the billing related details of a Azure Spot VM or VMSS. Minimum api-version: 2019-03-01.
 */
export interface BillingProfileArgs {
    /**
     * Specifies the maximum price you are willing to pay for a Azure Spot VM/VMSS. This price is in US Dollars. <br><br> This price will be compared with the current Azure Spot price for the VM size. Also, the prices are compared at the time of create/update of Azure Spot VM/VMSS and the operation will only succeed if  the maxPrice is greater than the current Azure Spot price. <br><br> The maxPrice will also be used for evicting a Azure Spot VM/VMSS if the current Azure Spot price goes beyond the maxPrice after creation of VM/VMSS. <br><br> Possible values are: <br><br> - Any decimal value greater than zero. Example: 0.01538 <br><br> -1 – indicates default price to be up-to on-demand. <br><br> You can set the maxPrice to -1 to indicate that the Azure Spot VM/VMSS should not be evicted for price reasons. Also, the default max price is -1 if it is not provided by you. <br><br>Minimum api-version: 2019-03-01.
     */
    maxPrice?: pulumi.Input<number>;
}

/**
 * Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status. You can easily view the output of your console log. Azure also enables you to see a screenshot of the VM from the hypervisor.
 */
export interface BootDiagnosticsArgs {
    /**
     * Whether boot diagnostics should be enabled on the Virtual Machine.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Uri of the storage account to use for placing the console output and screenshot. If storageUri is not specified while enabling boot diagnostics, managed storage will be used.
     */
    storageUri?: pulumi.Input<string>;
}

/**
 * The parameters of a capacity reservation Profile.
 */
export interface CapacityReservationProfileArgs {
    /**
     * Specifies the capacity reservation group resource id that should be used for allocating the virtual machine or scaleset vm instances provided enough capacity has been reserved. Please refer to https://aka.ms/CapacityReservation for more details.
     */
    capacityReservationGroup?: pulumi.Input<SubResourceArgs>;
}

/**
 * Describes a cloud service extension profile.
 */
export interface CloudServiceExtensionProfileArgs {
    /**
     * List of extensions for the cloud service.
     */
    extensions?: pulumi.Input<pulumi.Input<ExtensionArgs>[]>;
}

/**
 * Extension Properties.
 */
export interface CloudServiceExtensionPropertiesArgs {
    /**
     * Explicitly specify whether platform can automatically upgrade typeHandlerVersion to higher minor versions when they become available.
     */
    autoUpgradeMinorVersion?: pulumi.Input<boolean>;
    /**
     * Tag to force apply the provided public and protected settings.
     * Changing the tag value allows for re-running the extension without changing any of the public or protected settings.
     * If forceUpdateTag is not changed, updates to public or protected settings would still be applied by the handler.
     * If neither forceUpdateTag nor any of public or protected settings change, extension would flow to the role instance with the same sequence-number, and
     * it is up to handler implementation whether to re-run it or not
     */
    forceUpdateTag?: pulumi.Input<string>;
    /**
     * Protected settings for the extension which are encrypted before sent to the role instance.
     */
    protectedSettings?: any;
    /**
     * Protected settings for the extension, referenced using KeyVault which are encrypted before sent to the role instance.
     */
    protectedSettingsFromKeyVault?: pulumi.Input<CloudServiceVaultAndSecretReferenceArgs>;
    /**
     * The name of the extension handler publisher.
     */
    publisher?: pulumi.Input<string>;
    /**
     * Optional list of roles to apply this extension. If property is not specified or '*' is specified, extension is applied to all roles in the cloud service.
     */
    rolesAppliedTo?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Public settings for the extension. For JSON extensions, this is the JSON settings for the extension. For XML Extension (like RDP), this is the XML setting for the extension.
     */
    settings?: any;
    /**
     * Specifies the type of the extension.
     */
    type?: pulumi.Input<string>;
    /**
     * Specifies the version of the extension. Specifies the version of the extension. If this element is not specified or an asterisk (*) is used as the value, the latest version of the extension is used. If the value is specified with a major version number and an asterisk as the minor version number (X.), the latest minor version of the specified major version is selected. If a major version number and a minor version number are specified (X.Y), the specific extension version is selected. If a version is specified, an auto-upgrade is performed on the role instance.
     */
    typeHandlerVersion?: pulumi.Input<string>;
}

/**
 * Network Profile for the cloud service.
 */
export interface CloudServiceNetworkProfileArgs {
    /**
     * List of Load balancer configurations. Cloud service can have up to two load balancer configurations, corresponding to a Public Load Balancer and an Internal Load Balancer.
     */
    loadBalancerConfigurations?: pulumi.Input<pulumi.Input<LoadBalancerConfigurationArgs>[]>;
    /**
     * Slot type for the cloud service.
     * Possible values are <br /><br />**Production**<br /><br />**Staging**<br /><br />
     * If not specified, the default value is Production.
     */
    slotType?: pulumi.Input<string | enums.CloudServiceSlotType>;
    /**
     * The id reference of the cloud service containing the target IP with which the subject cloud service can perform a swap. This property cannot be updated once it is set. The swappable cloud service referred by this id must be present otherwise an error will be thrown.
     */
    swappableCloudService?: pulumi.Input<SubResourceArgs>;
}

/**
 * Describes the OS profile for the cloud service.
 */
export interface CloudServiceOsProfileArgs {
    /**
     * Specifies set of certificates that should be installed onto the role instances.
     */
    secrets?: pulumi.Input<pulumi.Input<CloudServiceVaultSecretGroupArgs>[]>;
}

/**
 * Cloud service properties
 */
export interface CloudServicePropertiesArgs {
    /**
     * (Optional) Indicates whether the role sku properties (roleProfile.roles.sku) specified in the model/template should override the role instance count and vm size specified in the .cscfg and .csdef respectively.
     * The default value is `false`.
     */
    allowModelOverride?: pulumi.Input<boolean>;
    /**
     * Specifies the XML service configuration (.cscfg) for the cloud service.
     */
    configuration?: pulumi.Input<string>;
    /**
     * Specifies a URL that refers to the location of the service configuration in the Blob service. The service package URL  can be Shared Access Signature (SAS) URI from any storage account.
     * This is a write-only property and is not returned in GET calls.
     */
    configurationUrl?: pulumi.Input<string>;
    /**
     * Describes a cloud service extension profile.
     */
    extensionProfile?: pulumi.Input<CloudServiceExtensionProfileArgs>;
    /**
     * Network Profile for the cloud service.
     */
    networkProfile?: pulumi.Input<CloudServiceNetworkProfileArgs>;
    /**
     * Describes the OS profile for the cloud service.
     */
    osProfile?: pulumi.Input<CloudServiceOsProfileArgs>;
    /**
     * Specifies a URL that refers to the location of the service package in the Blob service. The service package URL can be Shared Access Signature (SAS) URI from any storage account.
     * This is a write-only property and is not returned in GET calls.
     */
    packageUrl?: pulumi.Input<string>;
    /**
     * Describes the role profile for the cloud service.
     */
    roleProfile?: pulumi.Input<CloudServiceRoleProfileArgs>;
    /**
     * (Optional) Indicates whether to start the cloud service immediately after it is created. The default value is `true`.
     * If false, the service model is still deployed, but the code is not run immediately. Instead, the service is PoweredOff until you call Start, at which time the service will be started. A deployed service still incurs charges, even if it is poweredoff.
     */
    startCloudService?: pulumi.Input<boolean>;
    /**
     * Update mode for the cloud service. Role instances are allocated to update domains when the service is deployed. Updates can be initiated manually in each update domain or initiated automatically in all update domains.
     * Possible Values are <br /><br />**Auto**<br /><br />**Manual** <br /><br />**Simultaneous**<br /><br />
     * If not specified, the default value is Auto. If set to Manual, PUT UpdateDomain must be called to apply the update. If set to Auto, the update is automatically applied to each update domain in sequence.
     */
    upgradeMode?: pulumi.Input<string | enums.CloudServiceUpgradeMode>;
}

/**
 * Describes the role profile for the cloud service.
 */
export interface CloudServiceRoleProfileArgs {
    /**
     * List of roles for the cloud service.
     */
    roles?: pulumi.Input<pulumi.Input<CloudServiceRoleProfilePropertiesArgs>[]>;
}

/**
 * Describes the role properties.
 */
export interface CloudServiceRoleProfilePropertiesArgs {
    /**
     * Resource name.
     */
    name?: pulumi.Input<string>;
    /**
     * Describes the cloud service role sku.
     */
    sku?: pulumi.Input<CloudServiceRoleSkuArgs>;
}

/**
 * Describes the cloud service role sku.
 */
export interface CloudServiceRoleSkuArgs {
    /**
     * Specifies the number of role instances in the cloud service.
     */
    capacity?: pulumi.Input<number>;
    /**
     * The sku name. NOTE: If the new SKU is not supported on the hardware the cloud service is currently on, you need to delete and recreate the cloud service or move back to the old sku.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the tier of the cloud service. Possible Values are <br /><br /> **Standard** <br /><br /> **Basic**
     */
    tier?: pulumi.Input<string>;
}

/**
 * Protected settings for the extension, referenced using KeyVault which are encrypted before sent to the role instance.
 */
export interface CloudServiceVaultAndSecretReferenceArgs {
    /**
     * Secret URL which contains the protected settings of the extension
     */
    secretUrl?: pulumi.Input<string>;
    /**
     * The ARM Resource ID of the Key Vault
     */
    sourceVault?: pulumi.Input<SubResourceArgs>;
}

/**
 * Describes a single certificate reference in a Key Vault, and where the certificate should reside on the role instance.
 */
export interface CloudServiceVaultCertificateArgs {
    /**
     * This is the URL of a certificate that has been uploaded to Key Vault as a secret.
     */
    certificateUrl?: pulumi.Input<string>;
}

/**
 * Describes a set of certificates which are all in the same Key Vault.
 */
export interface CloudServiceVaultSecretGroupArgs {
    /**
     * The relative URL of the Key Vault containing all of the certificates in VaultCertificates.
     */
    sourceVault?: pulumi.Input<SubResourceArgs>;
    /**
     * The list of key vault references in SourceVault which contain certificates.
     */
    vaultCertificates?: pulumi.Input<pulumi.Input<CloudServiceVaultCertificateArgs>[]>;
}

/**
 * Information of community gallery if current gallery is shared to community
 */
export interface CommunityGalleryInfoArgs {
    /**
     * End-user license agreement for community gallery image.
     */
    eula?: pulumi.Input<string>;
    /**
     * The prefix of the gallery name that will be displayed publicly. Visible to all users.
     */
    publicNamePrefix?: pulumi.Input<string>;
    /**
     * Community gallery publisher support email. The email address of the publisher. Visible to all users.
     */
    publisherContact?: pulumi.Input<string>;
    /**
     * The link to the publisher website. Visible to all users.
     */
    publisherUri?: pulumi.Input<string>;
}

/**
 * Indicates the error details if the background copy of a resource created via the CopyStart operation fails.
 */
export interface CopyCompletionErrorArgs {
    /**
     * Indicates the error code if the background copy of a resource created via the CopyStart operation fails.
     */
    errorCode: pulumi.Input<string | enums.CopyCompletionErrorReason>;
    /**
     * Indicates the error message if the background copy of a resource created via the CopyStart operation fails.
     */
    errorMessage: pulumi.Input<string>;
}

/**
 * Data used when creating a disk.
 */
export interface CreationDataArgs {
    /**
     * This enumerates the possible sources of a disk's creation.
     */
    createOption: pulumi.Input<string | enums.DiskCreateOption>;
    /**
     * Required if creating from a Gallery Image. The id/sharedGalleryImageId/communityGalleryImageId of the ImageDiskReference will be the ARM id of the shared galley image version from which to create a disk.
     */
    galleryImageReference?: pulumi.Input<ImageDiskReferenceArgs>;
    /**
     * Disk source information for PIR or user images.
     */
    imageReference?: pulumi.Input<ImageDiskReferenceArgs>;
    /**
     * Logical sector size in bytes for Ultra disks. Supported values are 512 ad 4096. 4096 is the default.
     */
    logicalSectorSize?: pulumi.Input<number>;
    /**
     * Set this flag to true to get a boost on the performance target of the disk deployed, see here on the respective performance target. This flag can only be set on disk creation time and cannot be disabled after enabled.
     */
    performancePlus?: pulumi.Input<boolean>;
    /**
     * If createOption is ImportSecure, this is the URI of a blob to be imported into VM guest state.
     */
    securityDataUri?: pulumi.Input<string>;
    /**
     * If createOption is Copy, this is the ARM id of the source snapshot or disk.
     */
    sourceResourceId?: pulumi.Input<string>;
    /**
     * If createOption is Import, this is the URI of a blob to be imported into a managed disk.
     */
    sourceUri?: pulumi.Input<string>;
    /**
     * Required if createOption is Import. The Azure Resource Manager identifier of the storage account containing the blob to import as a disk.
     */
    storageAccountId?: pulumi.Input<string>;
    /**
     * If createOption is Upload, this is the size of the contents of the upload including the VHD footer. This value should be between 20972032 (20 MiB + 512 bytes for the VHD footer) and 35183298347520 bytes (32 TiB + 512 bytes for the VHD footer).
     */
    uploadSizeBytes?: pulumi.Input<number>;
}

/**
 * Describes a data disk.
 */
export interface DataDiskArgs {
    /**
     * Specifies the caching requirements. Possible values are: **None,** **ReadOnly,** **ReadWrite.** The defaulting behavior is: **None for Standard storage. ReadOnly for Premium storage.**
     */
    caching?: pulumi.Input<enums.CachingTypes>;
    /**
     * Specifies how the virtual machine should be created. Possible values are: **Attach.** This value is used when you are using a specialized disk to create the virtual machine. **FromImage.** This value is used when you are using an image to create the virtual machine. If you are using a platform image, you should also use the imageReference element described above. If you are using a marketplace image, you should also use the plan element previously described.
     */
    createOption: pulumi.Input<string | enums.DiskCreateOptionTypes>;
    /**
     * Specifies whether data disk should be deleted or detached upon VM deletion. Possible values are: **Delete.** If this value is used, the data disk is deleted when VM is deleted. **Detach.** If this value is used, the data disk is retained after VM is deleted. The default value is set to **Detach**.
     */
    deleteOption?: pulumi.Input<string | enums.DiskDeleteOptionTypes>;
    /**
     * Specifies the detach behavior to be used while detaching a disk or which is already in the process of detachment from the virtual machine. Supported values: **ForceDetach.** detachOption: **ForceDetach** is applicable only for managed data disks. If a previous detachment attempt of the data disk did not complete due to an unexpected failure from the virtual machine and the disk is still not released then use force-detach as a last resort option to detach the disk forcibly from the VM. All writes might not have been flushed when using this detach behavior. **This feature is still in preview** mode and is not supported for VirtualMachineScaleSet. To force-detach a data disk update toBeDetached to 'true' along with setting detachOption: 'ForceDetach'.
     */
    detachOption?: pulumi.Input<string | enums.DiskDetachOptionTypes>;
    /**
     * Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. The property 'diskSizeGB' is the number of bytes x 1024^3 for the disk and the value cannot be larger than 1023.
     */
    diskSizeGB?: pulumi.Input<number>;
    /**
     * The source user image virtual hard disk. The virtual hard disk will be copied before being attached to the virtual machine. If SourceImage is provided, the destination virtual hard drive must not exist.
     */
    image?: pulumi.Input<VirtualHardDiskArgs>;
    /**
     * Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
     */
    lun: pulumi.Input<number>;
    /**
     * The managed disk parameters.
     */
    managedDisk?: pulumi.Input<ManagedDiskParametersArgs>;
    /**
     * The disk name.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies whether the data disk is in process of detachment from the VirtualMachine/VirtualMachineScaleset
     */
    toBeDetached?: pulumi.Input<boolean>;
    /**
     * The virtual hard disk.
     */
    vhd?: pulumi.Input<VirtualHardDiskArgs>;
    /**
     * Specifies whether writeAccelerator should be enabled or disabled on the disk.
     */
    writeAcceleratorEnabled?: pulumi.Input<boolean>;
}

/**
 * Contains encryption settings for a data disk image.
 */
export interface DataDiskImageEncryptionArgs {
    /**
     * A relative URI containing the resource ID of the disk encryption set.
     */
    diskEncryptionSetId?: pulumi.Input<string>;
    /**
     * This property specifies the logical unit number of the data disk. This value is used to identify data disks within the Virtual Machine and therefore must be unique for each data disk attached to the Virtual Machine.
     */
    lun: pulumi.Input<number>;
}

/**
 * Enables or disables a capability on the dedicated host group. Minimum api-version: 2022-03-01.
 */
export interface DedicatedHostGroupPropertiesAdditionalCapabilitiesArgs {
    /**
     * The flag that enables or disables a capability to have UltraSSD Enabled Virtual Machines on Dedicated Hosts of the Dedicated Host Group. For the Virtual Machines to be UltraSSD Enabled, UltraSSDEnabled flag for the resource needs to be set true as well. The value is defaulted to 'false' when not provided. Please refer to https://docs.microsoft.com/en-us/azure/virtual-machines/disks-enable-ultra-ssd for more details on Ultra SSD feature. **Note:** The ultraSSDEnabled setting can only be enabled for Host Groups that are created as zonal. Minimum api-version: 2022-03-01.
     */
    ultraSSDEnabled?: pulumi.Input<boolean>;
}

/**
 * Specifies the boot diagnostic settings state. Minimum api-version: 2015-06-15.
 */
export interface DiagnosticsProfileArgs {
    /**
     * Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status. **NOTE**: If storageUri is being specified then ensure that the storage account is in the same region and subscription as the VM. You can easily view the output of your console log. Azure also enables you to see a screenshot of the VM from the hypervisor.
     */
    bootDiagnostics?: pulumi.Input<BootDiagnosticsArgs>;
}

/**
 * Describes the parameters of ephemeral disk settings that can be specified for operating system disk. **Note:** The ephemeral disk settings can only be specified for managed disk.
 */
export interface DiffDiskSettingsArgs {
    /**
     * Specifies the ephemeral disk settings for operating system disk.
     */
    option?: pulumi.Input<string | enums.DiffDiskOptions>;
    /**
     * Specifies the ephemeral disk placement for operating system disk. Possible values are: **CacheDisk,** **ResourceDisk.** The defaulting behavior is: **CacheDisk** if one is configured for the VM size otherwise **ResourceDisk** is used. Refer to the VM size documentation for Windows VM at https://docs.microsoft.com/azure/virtual-machines/windows/sizes and Linux VM at https://docs.microsoft.com/azure/virtual-machines/linux/sizes to check which VM sizes exposes a cache disk.
     */
    placement?: pulumi.Input<string | enums.DiffDiskPlacement>;
}

/**
 * Describes the disallowed disk types.
 */
export interface DisallowedArgs {
    /**
     * A list of disk types.
     */
    diskTypes?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Describes the parameter of customer managed disk encryption set resource id that can be specified for disk. **Note:** The disk encryption set resource id can only be specified for managed disk. Please refer https://aka.ms/mdssewithcmkoverview for more details.
 */
export interface DiskEncryptionSetParametersArgs {
    /**
     * Resource Id
     */
    id?: pulumi.Input<string>;
}

/**
 * Describes a Encryption Settings for a Disk
 */
export interface DiskEncryptionSettingsArgs {
    /**
     * Specifies the location of the disk encryption key, which is a Key Vault Secret.
     */
    diskEncryptionKey?: pulumi.Input<KeyVaultSecretReferenceArgs>;
    /**
     * Specifies whether disk encryption should be enabled on the virtual machine.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Specifies the location of the key encryption key in Key Vault.
     */
    keyEncryptionKey?: pulumi.Input<KeyVaultKeyReferenceArgs>;
}

/**
 * Disk Restore Point details.
 */
export interface DiskRestorePointAttributesArgs {
    /**
     * Encryption at rest settings for disk restore point. It is an optional property that can be specified in the input while creating a restore point.
     */
    encryption?: pulumi.Input<RestorePointEncryptionArgs>;
    /**
     * Resource Id of the source disk restore point.
     */
    sourceDiskRestorePoint?: pulumi.Input<ApiEntityReferenceArgs>;
}

/**
 * Contains the security related information for the resource.
 */
export interface DiskSecurityProfileArgs {
    /**
     * ResourceId of the disk encryption set associated to Confidential VM supported disk encrypted with customer managed key
     */
    secureVMDiskEncryptionSetId?: pulumi.Input<string>;
    /**
     * Specifies the SecurityType of the VM. Applicable for OS disks only.
     */
    securityType?: pulumi.Input<string | enums.DiskSecurityTypes>;
}

/**
 * The disks sku name. Can be Standard_LRS, Premium_LRS, StandardSSD_LRS, UltraSSD_LRS, Premium_ZRS, StandardSSD_ZRS, or PremiumV2_LRS.
 */
export interface DiskSkuArgs {
    /**
     * The sku name.
     */
    name?: pulumi.Input<string | enums.DiskStorageAccountTypes>;
}

/**
 * Encryption at rest settings for disk or snapshot
 */
export interface EncryptionArgs {
    /**
     * ResourceId of the disk encryption set to use for enabling encryption at rest.
     */
    diskEncryptionSetId?: pulumi.Input<string>;
    /**
     * The type of key used to encrypt the data of the disk.
     */
    type?: pulumi.Input<string | enums.EncryptionType>;
}

/**
 * Optional. Allows users to provide customer managed keys for encrypting the OS and data disks in the gallery artifact.
 */
export interface EncryptionImagesArgs {
    /**
     * A list of encryption specifications for data disk images.
     */
    dataDiskImages?: pulumi.Input<pulumi.Input<DataDiskImageEncryptionArgs>[]>;
    /**
     * Contains encryption settings for an OS disk image.
     */
    osDiskImage?: pulumi.Input<OSDiskImageEncryptionArgs>;
}

/**
 * The managed identity for the disk encryption set. It should be given permission on the key vault before it can be used to encrypt disks.
 */
export interface EncryptionSetIdentityArgs {
    /**
     * The type of Managed Identity used by the DiskEncryptionSet. Only SystemAssigned is supported for new creations. Disk Encryption Sets can be updated with Identity type None during migration of subscription to a new Azure Active Directory tenant; it will cause the encrypted resources to lose access to the keys.
     */
    type?: pulumi.Input<string | enums.DiskEncryptionSetIdentityType>;
    /**
     * The list of user identities associated with the disk encryption set. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Encryption settings for disk or snapshot
 */
export interface EncryptionSettingsCollectionArgs {
    /**
     * Set this flag to true and provide DiskEncryptionKey and optional KeyEncryptionKey to enable encryption. Set this flag to false and remove DiskEncryptionKey and KeyEncryptionKey to disable encryption. If EncryptionSettings is null in the request object, the existing settings remain unchanged.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * A collection of encryption settings, one for each disk volume.
     */
    encryptionSettings?: pulumi.Input<pulumi.Input<EncryptionSettingsElementArgs>[]>;
    /**
     * Describes what type of encryption is used for the disks. Once this field is set, it cannot be overwritten. '1.0' corresponds to Azure Disk Encryption with AAD app.'1.1' corresponds to Azure Disk Encryption.
     */
    encryptionSettingsVersion?: pulumi.Input<string>;
}

/**
 * Encryption settings for one disk volume.
 */
export interface EncryptionSettingsElementArgs {
    /**
     * Key Vault Secret Url and vault id of the disk encryption key
     */
    diskEncryptionKey?: pulumi.Input<KeyVaultAndSecretReferenceArgs>;
    /**
     * Key Vault Key Url and vault id of the key encryption key. KeyEncryptionKey is optional and when provided is used to unwrap the disk encryption key.
     */
    keyEncryptionKey?: pulumi.Input<KeyVaultAndKeyReferenceArgs>;
}

/**
 * The complex type of the extended location.
 */
export interface ExtendedLocationArgs {
    /**
     * The name of the extended location.
     */
    name?: pulumi.Input<string>;
    /**
     * The type of the extended location.
     */
    type?: pulumi.Input<string | enums.ExtendedLocationTypes>;
}

/**
 * Describes a cloud service Extension.
 */
export interface ExtensionArgs {
    /**
     * The name of the extension.
     */
    name?: pulumi.Input<string>;
    /**
     * Extension Properties.
     */
    properties?: pulumi.Input<CloudServiceExtensionPropertiesArgs>;
}

/**
 * A custom action that can be performed with a Gallery Application Version.
 */
export interface GalleryApplicationCustomActionArgs {
    /**
     * Description to help the users understand what this custom action does.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the custom action.  Must be unique within the Gallery Application Version.
     */
    name: pulumi.Input<string>;
    /**
     * The parameters that this custom action uses
     */
    parameters?: pulumi.Input<pulumi.Input<GalleryApplicationCustomActionParameterArgs>[]>;
    /**
     * The script to run when executing this custom action.
     */
    script: pulumi.Input<string>;
}

/**
 * The definition of a parameter that can be passed to a custom action of a Gallery Application Version.
 */
export interface GalleryApplicationCustomActionParameterArgs {
    /**
     * The default value of the parameter.  Only applies to string types
     */
    defaultValue?: pulumi.Input<string>;
    /**
     * A description to help users understand what this parameter means
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the custom action.  Must be unique within the Gallery Application Version.
     */
    name: pulumi.Input<string>;
    /**
     * Indicates whether this parameter must be passed when running the custom action.
     */
    required?: pulumi.Input<boolean>;
    /**
     * Specifies the type of the custom action parameter. Possible values are: String, ConfigurationDataBlob or LogOutputBlob
     */
    type?: pulumi.Input<enums.GalleryApplicationCustomActionParameterType>;
}

/**
 * The publishing profile of a gallery image version.
 */
export interface GalleryApplicationVersionPublishingProfileArgs {
    /**
     * Optional. Additional settings to pass to the vm-application-manager extension. For advanced use only.
     */
    advancedSettings?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A list of custom actions that can be performed with this Gallery Application Version.
     */
    customActions?: pulumi.Input<pulumi.Input<GalleryApplicationCustomActionArgs>[]>;
    /**
     * Optional. Whether or not this application reports health.
     */
    enableHealthCheck?: pulumi.Input<boolean>;
    /**
     * The end of life date of the gallery image version. This property can be used for decommissioning purposes. This property is updatable.
     */
    endOfLifeDate?: pulumi.Input<string>;
    /**
     * If set to true, Virtual Machines deployed from the latest version of the Image Definition won't use this Image Version.
     */
    excludeFromLatest?: pulumi.Input<boolean>;
    manageActions?: pulumi.Input<UserArtifactManageArgs>;
    /**
     * The number of replicas of the Image Version to be created per region. This property would take effect for a region when regionalReplicaCount is not specified. This property is updatable.
     */
    replicaCount?: pulumi.Input<number>;
    /**
     * Optional parameter which specifies the mode to be used for replication. This property is not updatable.
     */
    replicationMode?: pulumi.Input<string | enums.ReplicationMode>;
    /**
     * Additional settings for the VM app that contains the target package and config file name when it is deployed to target VM or VM scale set.
     */
    settings?: pulumi.Input<UserArtifactSettingsArgs>;
    /**
     * The source image from which the Image Version is going to be created.
     */
    source: pulumi.Input<UserArtifactSourceArgs>;
    /**
     * Specifies the storage account type to be used to store the image. This property is not updatable.
     */
    storageAccountType?: pulumi.Input<string | enums.StorageAccountType>;
    /**
     * The target extended locations where the Image Version is going to be replicated to. This property is updatable.
     */
    targetExtendedLocations?: pulumi.Input<pulumi.Input<GalleryTargetExtendedLocationArgs>[]>;
    /**
     * The target regions where the Image Version is going to be replicated to. This property is updatable.
     */
    targetRegions?: pulumi.Input<pulumi.Input<TargetRegionArgs>[]>;
}

/**
 * The safety profile of the Gallery Application Version.
 */
export interface GalleryApplicationVersionSafetyProfileArgs {
    /**
     * Indicates whether or not removing this Gallery Image Version from replicated regions is allowed.
     */
    allowDeletionOfReplicatedLocations?: pulumi.Input<boolean>;
}

/**
 * The source of the gallery artifact version.
 */
export interface GalleryArtifactVersionFullSourceArgs {
    /**
     * The resource Id of the source Community Gallery Image.  Only required when using Community Gallery Image as a source.
     */
    communityGalleryImageId?: pulumi.Input<string>;
    /**
     * The id of the gallery artifact version source. Can specify a disk uri, snapshot uri, user image or storage account resource.
     */
    id?: pulumi.Input<string>;
}

/**
 * This is the data disk image.
 */
export interface GalleryDataDiskImageArgs {
    /**
     * The host caching of the disk. Valid values are 'None', 'ReadOnly', and 'ReadWrite'
     */
    hostCaching?: pulumi.Input<enums.HostCaching>;
    /**
     * This property specifies the logical unit number of the data disk. This value is used to identify data disks within the Virtual Machine and therefore must be unique for each data disk attached to the Virtual Machine.
     */
    lun: pulumi.Input<number>;
    /**
     * The source for the disk image.
     */
    source?: pulumi.Input<GalleryDiskImageSourceArgs>;
}

/**
 * The source for the disk image.
 */
export interface GalleryDiskImageSourceArgs {
    /**
     * The id of the gallery artifact version source. Can specify a disk uri, snapshot uri, user image or storage account resource.
     */
    id?: pulumi.Input<string>;
    /**
     * The Storage Account Id that contains the vhd blob being used as a source for this artifact version.
     */
    storageAccountId?: pulumi.Input<string>;
    /**
     * The uri of the gallery artifact version source. Currently used to specify vhd/blob source.
     */
    uri?: pulumi.Input<string>;
}

/**
 * The name of the extended location.
 */
export interface GalleryExtendedLocationArgs {
    name?: pulumi.Input<string>;
    /**
     * It is type of the extended location.
     */
    type?: pulumi.Input<string | enums.GalleryExtendedLocationType>;
}

/**
 * A feature for gallery image.
 */
export interface GalleryImageFeatureArgs {
    /**
     * The name of the gallery image feature.
     */
    name?: pulumi.Input<string>;
    /**
     * The value of the gallery image feature.
     */
    value?: pulumi.Input<string>;
}

/**
 * This is the gallery image definition identifier.
 */
export interface GalleryImageIdentifierArgs {
    /**
     * The name of the gallery image definition offer.
     */
    offer: pulumi.Input<string>;
    /**
     * The name of the gallery image definition publisher.
     */
    publisher: pulumi.Input<string>;
    /**
     * The name of the gallery image definition SKU.
     */
    sku: pulumi.Input<string>;
}

/**
 * The publishing profile of a gallery image Version.
 */
export interface GalleryImageVersionPublishingProfileArgs {
    /**
     * The end of life date of the gallery image version. This property can be used for decommissioning purposes. This property is updatable.
     */
    endOfLifeDate?: pulumi.Input<string>;
    /**
     * If set to true, Virtual Machines deployed from the latest version of the Image Definition won't use this Image Version.
     */
    excludeFromLatest?: pulumi.Input<boolean>;
    /**
     * The number of replicas of the Image Version to be created per region. This property would take effect for a region when regionalReplicaCount is not specified. This property is updatable.
     */
    replicaCount?: pulumi.Input<number>;
    /**
     * Optional parameter which specifies the mode to be used for replication. This property is not updatable.
     */
    replicationMode?: pulumi.Input<string | enums.ReplicationMode>;
    /**
     * Specifies the storage account type to be used to store the image. This property is not updatable.
     */
    storageAccountType?: pulumi.Input<string | enums.StorageAccountType>;
    /**
     * The target extended locations where the Image Version is going to be replicated to. This property is updatable.
     */
    targetExtendedLocations?: pulumi.Input<pulumi.Input<GalleryTargetExtendedLocationArgs>[]>;
    /**
     * The target regions where the Image Version is going to be replicated to. This property is updatable.
     */
    targetRegions?: pulumi.Input<pulumi.Input<TargetRegionArgs>[]>;
}

/**
 * This is the safety profile of the Gallery Image Version.
 */
export interface GalleryImageVersionSafetyProfileArgs {
    /**
     * Indicates whether or not removing this Gallery Image Version from replicated regions is allowed.
     */
    allowDeletionOfReplicatedLocations?: pulumi.Input<boolean>;
}

/**
 * This is the storage profile of a Gallery Image Version.
 */
export interface GalleryImageVersionStorageProfileArgs {
    /**
     * A list of data disk images.
     */
    dataDiskImages?: pulumi.Input<pulumi.Input<GalleryDataDiskImageArgs>[]>;
    /**
     * This is the OS disk image.
     */
    osDiskImage?: pulumi.Input<GalleryOSDiskImageArgs>;
    /**
     * The source of the gallery artifact version.
     */
    source?: pulumi.Input<GalleryArtifactVersionFullSourceArgs>;
}

/**
 * This is the OS disk image.
 */
export interface GalleryOSDiskImageArgs {
    /**
     * The host caching of the disk. Valid values are 'None', 'ReadOnly', and 'ReadWrite'
     */
    hostCaching?: pulumi.Input<enums.HostCaching>;
    /**
     * The source for the disk image.
     */
    source?: pulumi.Input<GalleryDiskImageSourceArgs>;
}

export interface GalleryTargetExtendedLocationArgs {
    /**
     * Optional. Allows users to provide customer managed keys for encrypting the OS and data disks in the gallery artifact.
     */
    encryption?: pulumi.Input<EncryptionImagesArgs>;
    /**
     * The name of the extended location.
     */
    extendedLocation?: pulumi.Input<GalleryExtendedLocationArgs>;
    /**
     * The number of replicas of the Image Version to be created per extended location. This property is updatable.
     */
    extendedLocationReplicaCount?: pulumi.Input<number>;
    /**
     * The name of the region.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the storage account type to be used to store the image. This property is not updatable.
     */
    storageAccountType?: pulumi.Input<string | enums.EdgeZoneStorageAccountType>;
}

/**
 * Specifies the hardware settings for the virtual machine.
 */
export interface HardwareProfileArgs {
    /**
     * Specifies the size of the virtual machine. The enum data type is currently deprecated and will be removed by December 23rd 2023. The recommended way to get the list of available sizes is using these APIs: [List all available virtual machine sizes in an availability set](https://docs.microsoft.com/rest/api/compute/availabilitysets/listavailablesizes), [List all available virtual machine sizes in a region]( https://docs.microsoft.com/rest/api/compute/resourceskus/list), [List all available virtual machine sizes for resizing](https://docs.microsoft.com/rest/api/compute/virtualmachines/listavailablesizes). For more information about virtual machine sizes, see [Sizes for virtual machines](https://docs.microsoft.com/azure/virtual-machines/sizes). The available VM sizes depend on region and availability set.
     */
    vmSize?: pulumi.Input<string | enums.VirtualMachineSizeTypes>;
    /**
     * Specifies the properties for customizing the size of the virtual machine. Minimum api-version: 2021-07-01. This feature is still in preview mode and is not supported for VirtualMachineScaleSet. Please follow the instructions in [VM Customization](https://aka.ms/vmcustomization) for more details.
     */
    vmSizeProperties?: pulumi.Input<VMSizePropertiesArgs>;
}

/**
 * Describes a data disk.
 */
export interface ImageDataDiskArgs {
    /**
     * The Virtual Hard Disk.
     */
    blobUri?: pulumi.Input<string>;
    /**
     * Specifies the caching requirements. Possible values are: **None,** **ReadOnly,** **ReadWrite.** The default values are: **None for Standard storage. ReadOnly for Premium storage.**
     */
    caching?: pulumi.Input<enums.CachingTypes>;
    /**
     * Specifies the customer managed disk encryption set resource id for the managed image disk.
     */
    diskEncryptionSet?: pulumi.Input<DiskEncryptionSetParametersArgs>;
    /**
     * Specifies the size of empty data disks in gigabytes. This element can be used to overwrite the name of the disk in a virtual machine image. This value cannot be larger than 1023 GB.
     */
    diskSizeGB?: pulumi.Input<number>;
    /**
     * Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
     */
    lun: pulumi.Input<number>;
    /**
     * The managedDisk.
     */
    managedDisk?: pulumi.Input<SubResourceArgs>;
    /**
     * The snapshot.
     */
    snapshot?: pulumi.Input<SubResourceArgs>;
    /**
     * Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks, it cannot be used with OS Disk.
     */
    storageAccountType?: pulumi.Input<string | enums.StorageAccountTypes>;
}

/**
 * The source image used for creating the disk.
 */
export interface ImageDiskReferenceArgs {
    /**
     * A relative uri containing a community Azure Compute Gallery image reference.
     */
    communityGalleryImageId?: pulumi.Input<string>;
    /**
     * A relative uri containing either a Platform Image Repository, user image, or Azure Compute Gallery image reference.
     */
    id?: pulumi.Input<string>;
    /**
     * If the disk is created from an image's data disk, this is an index that indicates which of the data disks in the image to use. For OS disks, this field is null.
     */
    lun?: pulumi.Input<number>;
    /**
     * A relative uri containing a direct shared Azure Compute Gallery image reference.
     */
    sharedGalleryImageId?: pulumi.Input<string>;
}

/**
 * Describes an Operating System disk.
 */
export interface ImageOSDiskArgs {
    /**
     * The Virtual Hard Disk.
     */
    blobUri?: pulumi.Input<string>;
    /**
     * Specifies the caching requirements. Possible values are: **None,** **ReadOnly,** **ReadWrite.** The default values are: **None for Standard storage. ReadOnly for Premium storage.**
     */
    caching?: pulumi.Input<enums.CachingTypes>;
    /**
     * Specifies the customer managed disk encryption set resource id for the managed image disk.
     */
    diskEncryptionSet?: pulumi.Input<DiskEncryptionSetParametersArgs>;
    /**
     * Specifies the size of empty data disks in gigabytes. This element can be used to overwrite the name of the disk in a virtual machine image. This value cannot be larger than 1023 GB.
     */
    diskSizeGB?: pulumi.Input<number>;
    /**
     * The managedDisk.
     */
    managedDisk?: pulumi.Input<SubResourceArgs>;
    /**
     * The OS State. For managed images, use Generalized.
     */
    osState: pulumi.Input<enums.OperatingSystemStateTypes>;
    /**
     * This property allows you to specify the type of the OS that is included in the disk if creating a VM from a custom image. Possible values are: **Windows,** **Linux.**
     */
    osType: pulumi.Input<enums.OperatingSystemTypes>;
    /**
     * The snapshot.
     */
    snapshot?: pulumi.Input<SubResourceArgs>;
    /**
     * Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks, it cannot be used with OS Disk.
     */
    storageAccountType?: pulumi.Input<string | enums.StorageAccountTypes>;
}

/**
 * Describes the gallery image definition purchase plan. This is used by marketplace images.
 */
export interface ImagePurchasePlanArgs {
    /**
     * The plan ID.
     */
    name?: pulumi.Input<string>;
    /**
     * The product ID.
     */
    product?: pulumi.Input<string>;
    /**
     * The publisher ID.
     */
    publisher?: pulumi.Input<string>;
}

/**
 * Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations. NOTE: Image reference publisher and offer can only be set when you create the scale set.
 */
export interface ImageReferenceArgs {
    /**
     * Specified the community gallery image unique id for vm deployment. This can be fetched from community gallery image GET call.
     */
    communityGalleryImageId?: pulumi.Input<string>;
    /**
     * Resource Id
     */
    id?: pulumi.Input<string>;
    /**
     * Specifies the offer of the platform image or marketplace image used to create the virtual machine.
     */
    offer?: pulumi.Input<string>;
    /**
     * The image publisher.
     */
    publisher?: pulumi.Input<string>;
    /**
     * Specified the shared gallery image unique id for vm deployment. This can be fetched from shared gallery image GET call.
     */
    sharedGalleryImageId?: pulumi.Input<string>;
    /**
     * The image SKU.
     */
    sku?: pulumi.Input<string>;
    /**
     * Specifies the version of the platform image or marketplace image used to create the virtual machine. The allowed formats are Major.Minor.Build or 'latest'. Major, Minor, and Build are decimal numbers. Specify 'latest' to use the latest version of an image available at deploy time. Even if you use 'latest', the VM image will not automatically update after deploy time even if a new version becomes available. Please do not use field 'version' for gallery image deployment, gallery image should always use 'id' field for deployment, to use 'latest' version of gallery image, just set '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{imageName}' in the 'id' field without version input.
     */
    version?: pulumi.Input<string>;
}

/**
 * Describes a storage profile.
 */
export interface ImageStorageProfileArgs {
    /**
     * Specifies the parameters that are used to add a data disk to a virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/managed-disks-overview).
     */
    dataDisks?: pulumi.Input<pulumi.Input<ImageDataDiskArgs>[]>;
    /**
     * Specifies information about the operating system disk used by the virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/managed-disks-overview).
     */
    osDisk?: pulumi.Input<ImageOSDiskArgs>;
    /**
     * Specifies whether an image is zone resilient or not. Default is false. Zone resilient images can be created only in regions that provide Zone Redundant Storage (ZRS).
     */
    zoneResilient?: pulumi.Input<boolean>;
}

/**
 * Instance view status.
 */
export interface InstanceViewStatusArgs {
    /**
     * The status code.
     */
    code?: pulumi.Input<string>;
    /**
     * The short localizable label for the status.
     */
    displayStatus?: pulumi.Input<string>;
    /**
     * The level code.
     */
    level?: pulumi.Input<enums.StatusLevelTypes>;
    /**
     * The detailed status message, including for alerts and error messages.
     */
    message?: pulumi.Input<string>;
    /**
     * The time of the status.
     */
    time?: pulumi.Input<string>;
}

/**
 * Key Vault Key Url to be used for server side encryption of Managed Disks and Snapshots
 */
export interface KeyForDiskEncryptionSetArgs {
    /**
     * Fully versioned Key Url pointing to a key in KeyVault. Version segment of the Url is required regardless of rotationToLatestKeyVersionEnabled value.
     */
    keyUrl: pulumi.Input<string>;
    /**
     * Resource id of the KeyVault containing the key or secret. This property is optional and cannot be used if the KeyVault subscription is not the same as the Disk Encryption Set subscription.
     */
    sourceVault?: pulumi.Input<SourceVaultArgs>;
}

/**
 * Key Vault Key Url and vault id of KeK, KeK is optional and when provided is used to unwrap the encryptionKey
 */
export interface KeyVaultAndKeyReferenceArgs {
    /**
     * Url pointing to a key or secret in KeyVault
     */
    keyUrl: pulumi.Input<string>;
    /**
     * Resource id of the KeyVault containing the key or secret
     */
    sourceVault: pulumi.Input<SourceVaultArgs>;
}

/**
 * Key Vault Secret Url and vault id of the encryption key 
 */
export interface KeyVaultAndSecretReferenceArgs {
    /**
     * Url pointing to a key or secret in KeyVault
     */
    secretUrl: pulumi.Input<string>;
    /**
     * Resource id of the KeyVault containing the key or secret
     */
    sourceVault: pulumi.Input<SourceVaultArgs>;
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
 * Specifies the Linux operating system settings on the virtual machine. For a list of supported Linux distributions, see [Linux on Azure-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/linux/endorsed-distros).
 */
export interface LinuxConfigurationArgs {
    /**
     * Specifies whether password authentication should be disabled.
     */
    disablePasswordAuthentication?: pulumi.Input<boolean>;
    /**
     * Indicates whether VMAgent Platform Updates is enabled for the Linux virtual machine. Default value is false.
     */
    enableVMAgentPlatformUpdates?: pulumi.Input<boolean>;
    /**
     * [Preview Feature] Specifies settings related to VM Guest Patching on Linux.
     */
    patchSettings?: pulumi.Input<LinuxPatchSettingsArgs>;
    /**
     * Indicates whether virtual machine agent should be provisioned on the virtual machine. When this property is not specified in the request body, default behavior is to set it to true. This will ensure that VM Agent is installed on the VM so that extensions can be added to the VM later.
     */
    provisionVMAgent?: pulumi.Input<boolean>;
    /**
     * Specifies the ssh key configuration for a Linux OS.
     */
    ssh?: pulumi.Input<SshConfigurationArgs>;
}

/**
 * Specifies settings related to VM Guest Patching on Linux.
 */
export interface LinuxPatchSettingsArgs {
    /**
     * Specifies the mode of VM Guest Patch Assessment for the IaaS virtual machine.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - You control the timing of patch assessments on a virtual machine. <br /><br /> **AutomaticByPlatform** - The platform will trigger periodic patch assessments. The property provisionVMAgent must be true.
     */
    assessmentMode?: pulumi.Input<string | enums.LinuxPatchAssessmentMode>;
    /**
     * Specifies additional settings for patch mode AutomaticByPlatform in VM Guest Patching on Linux.
     */
    automaticByPlatformSettings?: pulumi.Input<LinuxVMGuestPatchAutomaticByPlatformSettingsArgs>;
    /**
     * Specifies the mode of VM Guest Patching to IaaS virtual machine or virtual machines associated to virtual machine scale set with OrchestrationMode as Flexible.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - The virtual machine's default patching configuration is used. <br /><br /> **AutomaticByPlatform** - The virtual machine will be automatically updated by the platform. The property provisionVMAgent must be true
     */
    patchMode?: pulumi.Input<string | enums.LinuxVMGuestPatchMode>;
}

/**
 * Specifies additional settings to be applied when patch mode AutomaticByPlatform is selected in Linux patch settings.
 */
export interface LinuxVMGuestPatchAutomaticByPlatformSettingsArgs {
    /**
     * Enables customer to schedule patching without accidental upgrades
     */
    bypassPlatformSafetyChecksOnUserSchedule?: pulumi.Input<boolean>;
    /**
     * Specifies the reboot setting for all AutomaticByPlatform patch installation operations.
     */
    rebootSetting?: pulumi.Input<string | enums.LinuxVMGuestPatchAutomaticByPlatformRebootSetting>;
}

/**
 * Describes the load balancer configuration.
 */
export interface LoadBalancerConfigurationArgs {
    /**
     * Resource Id
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the Load balancer
     */
    name: pulumi.Input<string>;
    /**
     * Properties of the load balancer configuration.
     */
    properties: pulumi.Input<LoadBalancerConfigurationPropertiesArgs>;
}

/**
 * Describes the properties of the load balancer configuration.
 */
export interface LoadBalancerConfigurationPropertiesArgs {
    /**
     * Specifies the frontend IP to be used for the load balancer. Only IPv4 frontend IP address is supported. Each load balancer configuration must have exactly one frontend IP configuration.
     */
    frontendIpConfigurations: pulumi.Input<pulumi.Input<LoadBalancerFrontendIpConfigurationArgs>[]>;
}

/**
 * Specifies the frontend IP to be used for the load balancer. Only IPv4 frontend IP address is supported. Each load balancer configuration must have exactly one frontend IP configuration.
 */
export interface LoadBalancerFrontendIpConfigurationArgs {
    /**
     * The name of the resource that is unique within the set of frontend IP configurations used by the load balancer. This name can be used to access the resource.
     */
    name: pulumi.Input<string>;
    /**
     * Properties of load balancer frontend ip configuration.
     */
    properties: pulumi.Input<LoadBalancerFrontendIpConfigurationPropertiesArgs>;
}

/**
 * Describes a cloud service IP Configuration
 */
export interface LoadBalancerFrontendIpConfigurationPropertiesArgs {
    /**
     * The virtual network private IP address of the IP configuration.
     */
    privateIPAddress?: pulumi.Input<string>;
    /**
     * The reference to the public ip address resource.
     */
    publicIPAddress?: pulumi.Input<SubResourceArgs>;
    /**
     * The reference to the virtual network subnet resource.
     */
    subnet?: pulumi.Input<SubResourceArgs>;
}

/**
 * The parameters of a managed disk.
 */
export interface ManagedDiskParametersArgs {
    /**
     * Specifies the customer managed disk encryption set resource id for the managed disk.
     */
    diskEncryptionSet?: pulumi.Input<DiskEncryptionSetParametersArgs>;
    /**
     * Resource Id
     */
    id?: pulumi.Input<string>;
    /**
     * Specifies the security profile for the managed disk.
     */
    securityProfile?: pulumi.Input<VMDiskSecurityProfileArgs>;
    /**
     * Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks, it cannot be used with OS Disk.
     */
    storageAccountType?: pulumi.Input<string | enums.StorageAccountTypes>;
}

/**
 * Describes a network interface reference.
 */
export interface NetworkInterfaceReferenceArgs {
    /**
     * Specify what happens to the network interface when the VM is deleted
     */
    deleteOption?: pulumi.Input<string | enums.DeleteOptions>;
    /**
     * Resource Id
     */
    id?: pulumi.Input<string>;
    /**
     * Specifies the primary network interface in case the virtual machine has more than 1 network interface.
     */
    primary?: pulumi.Input<boolean>;
}

/**
 * Specifies the network interfaces or the networking configuration of the virtual machine.
 */
export interface NetworkProfileArgs {
    /**
     * specifies the Microsoft.Network API version used when creating networking resources in the Network Interface Configurations
     */
    networkApiVersion?: pulumi.Input<string | enums.NetworkApiVersion>;
    /**
     * Specifies the networking configurations that will be used to create the virtual machine networking resources.
     */
    networkInterfaceConfigurations?: pulumi.Input<pulumi.Input<VirtualMachineNetworkInterfaceConfigurationArgs>[]>;
    /**
     * Specifies the list of resource Ids for the network interfaces associated with the virtual machine.
     */
    networkInterfaces?: pulumi.Input<pulumi.Input<NetworkInterfaceReferenceArgs>[]>;
}

/**
 * Specifies information about the operating system disk used by the virtual machine. For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/managed-disks-overview).
 */
export interface OSDiskArgs {
    /**
     * Specifies the caching requirements. Possible values are: **None,** **ReadOnly,** **ReadWrite.** The defaulting behavior is: **None for Standard storage. ReadOnly for Premium storage.**
     */
    caching?: pulumi.Input<enums.CachingTypes>;
    /**
     * Specifies how the virtual machine should be created. Possible values are: **Attach.** This value is used when you are using a specialized disk to create the virtual machine. **FromImage.** This value is used when you are using an image to create the virtual machine. If you are using a platform image, you should also use the imageReference element described above. If you are using a marketplace image, you should also use the plan element previously described.
     */
    createOption: pulumi.Input<string | enums.DiskCreateOptionTypes>;
    /**
     * Specifies whether OS Disk should be deleted or detached upon VM deletion. Possible values are: **Delete.** If this value is used, the OS disk is deleted when VM is deleted. **Detach.** If this value is used, the os disk is retained after VM is deleted. The default value is set to **Detach**. For an ephemeral OS Disk, the default value is set to **Delete**. The user cannot change the delete option for an ephemeral OS Disk.
     */
    deleteOption?: pulumi.Input<string | enums.DiskDeleteOptionTypes>;
    /**
     * Specifies the ephemeral Disk Settings for the operating system disk used by the virtual machine.
     */
    diffDiskSettings?: pulumi.Input<DiffDiskSettingsArgs>;
    /**
     * Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. The property 'diskSizeGB' is the number of bytes x 1024^3 for the disk and the value cannot be larger than 1023.
     */
    diskSizeGB?: pulumi.Input<number>;
    /**
     * Specifies the encryption settings for the OS Disk. Minimum api-version: 2015-06-15.
     */
    encryptionSettings?: pulumi.Input<DiskEncryptionSettingsArgs>;
    /**
     * The source user image virtual hard disk. The virtual hard disk will be copied before being attached to the virtual machine. If SourceImage is provided, the destination virtual hard drive must not exist.
     */
    image?: pulumi.Input<VirtualHardDiskArgs>;
    /**
     * The managed disk parameters.
     */
    managedDisk?: pulumi.Input<ManagedDiskParametersArgs>;
    /**
     * The disk name.
     */
    name?: pulumi.Input<string>;
    /**
     * This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. Possible values are: **Windows,** **Linux.**
     */
    osType?: pulumi.Input<enums.OperatingSystemTypes>;
    /**
     * The virtual hard disk.
     */
    vhd?: pulumi.Input<VirtualHardDiskArgs>;
    /**
     * Specifies whether writeAccelerator should be enabled or disabled on the disk.
     */
    writeAcceleratorEnabled?: pulumi.Input<boolean>;
}

/**
 * Contains encryption settings for an OS disk image.
 */
export interface OSDiskImageEncryptionArgs {
    /**
     * A relative URI containing the resource ID of the disk encryption set.
     */
    diskEncryptionSetId?: pulumi.Input<string>;
    /**
     * This property specifies the security profile of an OS disk image.
     */
    securityProfile?: pulumi.Input<OSDiskImageSecurityProfileArgs>;
}

/**
 * Contains security profile for an OS disk image.
 */
export interface OSDiskImageSecurityProfileArgs {
    /**
     * confidential VM encryption types
     */
    confidentialVMEncryptionType?: pulumi.Input<string | enums.ConfidentialVMEncryptionType>;
    /**
     * secure VM disk encryption set id
     */
    secureVMDiskEncryptionSetId?: pulumi.Input<string>;
}

export interface OSImageNotificationProfileArgs {
    /**
     * Specifies whether the OS Image Scheduled event is enabled or disabled.
     */
    enable?: pulumi.Input<boolean>;
    /**
     * Length of time a Virtual Machine being reimaged or having its OS upgraded will have to potentially approve the OS Image Scheduled Event before the event is auto approved (timed out). The configuration is specified in ISO 8601 format, and the value must be 15 minutes (PT15M)
     */
    notBeforeTimeout?: pulumi.Input<string>;
}

/**
 * Specifies the operating system settings for the virtual machine. Some of the settings cannot be changed once VM is provisioned.
 */
export interface OSProfileArgs {
    /**
     * Specifies the password of the administrator account. <br><br> **Minimum-length (Windows):** 8 characters <br><br> **Minimum-length (Linux):** 6 characters <br><br> **Max-length (Windows):** 123 characters <br><br> **Max-length (Linux):** 72 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!" <br><br> For resetting the password, see [How to reset the Remote Desktop service or its login password in a Windows VM](https://docs.microsoft.com/troubleshoot/azure/virtual-machines/reset-rdp) <br><br> For resetting root password, see [Manage users, SSH, and check or repair disks on Azure Linux VMs using the VMAccess Extension](https://docs.microsoft.com/troubleshoot/azure/virtual-machines/troubleshoot-ssh-connection)
     */
    adminPassword?: pulumi.Input<string>;
    /**
     * Specifies the name of the administrator account. <br><br> This property cannot be updated after the VM is created. <br><br> **Windows-only restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length (Linux):** 1  character <br><br> **Max-length (Linux):** 64 characters <br><br> **Max-length (Windows):** 20 characters.
     */
    adminUsername?: pulumi.Input<string>;
    /**
     * Specifies whether extension operations should be allowed on the virtual machine. This may only be set to False when no extensions are present on the virtual machine.
     */
    allowExtensionOperations?: pulumi.Input<boolean>;
    /**
     * Specifies the host OS name of the virtual machine. This name cannot be updated after the VM is created. **Max-length (Windows):** 15 characters. **Max-length (Linux):** 64 characters. For naming conventions and restrictions see [Azure infrastructure services implementation guidelines](https://docs.microsoft.com/azure/azure-resource-manager/management/resource-name-rules).
     */
    computerName?: pulumi.Input<string>;
    /**
     * Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the Virtual Machine. The maximum length of the binary array is 65535 bytes. **Note: Do not pass any secrets or passwords in customData property.** This property cannot be updated after the VM is created. The property 'customData' is passed to the VM to be saved as a file, for more information see [Custom Data on Azure VMs](https://azure.microsoft.com/blog/custom-data-and-cloud-init-on-windows-azure/). For using cloud-init for your Linux VM, see [Using cloud-init to customize a Linux VM during creation](https://docs.microsoft.com/azure/virtual-machines/linux/using-cloud-init).
     */
    customData?: pulumi.Input<string>;
    /**
     * Specifies the Linux operating system settings on the virtual machine. For a list of supported Linux distributions, see [Linux on Azure-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/linux/endorsed-distros).
     */
    linuxConfiguration?: pulumi.Input<LinuxConfigurationArgs>;
    /**
     * Optional property which must either be set to True or omitted.
     */
    requireGuestProvisionSignal?: pulumi.Input<boolean>;
    /**
     * Specifies set of certificates that should be installed onto the virtual machine. To install certificates on a virtual machine it is recommended to use the [Azure Key Vault virtual machine extension for Linux](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-linux) or the [Azure Key Vault virtual machine extension for Windows](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-windows).
     */
    secrets?: pulumi.Input<pulumi.Input<VaultSecretGroupArgs>[]>;
    /**
     * Specifies Windows operating system settings on the virtual machine.
     */
    windowsConfiguration?: pulumi.Input<WindowsConfigurationArgs>;
}

/**
 * Specifies settings related to VM Guest Patching on Windows.
 */
export interface PatchSettingsArgs {
    /**
     * Specifies the mode of VM Guest patch assessment for the IaaS virtual machine.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - You control the timing of patch assessments on a virtual machine.<br /><br /> **AutomaticByPlatform** - The platform will trigger periodic patch assessments. The property provisionVMAgent must be true. 
     */
    assessmentMode?: pulumi.Input<string | enums.WindowsPatchAssessmentMode>;
    /**
     * Specifies additional settings for patch mode AutomaticByPlatform in VM Guest Patching on Windows.
     */
    automaticByPlatformSettings?: pulumi.Input<WindowsVMGuestPatchAutomaticByPlatformSettingsArgs>;
    /**
     * Enables customers to patch their Azure VMs without requiring a reboot. For enableHotpatching, the 'provisionVMAgent' must be set to true and 'patchMode' must be set to 'AutomaticByPlatform'.
     */
    enableHotpatching?: pulumi.Input<boolean>;
    /**
     * Specifies the mode of VM Guest Patching to IaaS virtual machine or virtual machines associated to virtual machine scale set with OrchestrationMode as Flexible.<br /><br /> Possible values are:<br /><br /> **Manual** - You  control the application of patches to a virtual machine. You do this by applying patches manually inside the VM. In this mode, automatic updates are disabled; the property WindowsConfiguration.enableAutomaticUpdates must be false<br /><br /> **AutomaticByOS** - The virtual machine will automatically be updated by the OS. The property WindowsConfiguration.enableAutomaticUpdates must be true. <br /><br /> **AutomaticByPlatform** - the virtual machine will automatically updated by the platform. The properties provisionVMAgent and WindowsConfiguration.enableAutomaticUpdates must be true 
     */
    patchMode?: pulumi.Input<string | enums.WindowsVMGuestPatchMode>;
}

/**
 * Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
 */
export interface PlanArgs {
    /**
     * The plan ID.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element.
     */
    product?: pulumi.Input<string>;
    /**
     * The promotion code.
     */
    promotionCode?: pulumi.Input<string>;
    /**
     * The publisher ID.
     */
    publisher?: pulumi.Input<string>;
}

/**
 * Specifies the target splits for Spot and Regular priority VMs within a scale set with flexible orchestration mode. With this property the customer is able to specify the base number of regular priority VMs created as the VMSS flex instance scales out and the split between Spot and Regular priority VMs after this base target has been reached.
 */
export interface PriorityMixPolicyArgs {
    /**
     * The base number of regular priority VMs that will be created in this scale set as it scales out.
     */
    baseRegularPriorityCount?: pulumi.Input<number>;
    /**
     * The percentage of VM instances, after the base regular priority count has been reached, that are expected to use regular priority.
     */
    regularPriorityPercentageAboveBase?: pulumi.Input<number>;
}

/**
 * A collection of information about the state of the connection between service consumer and provider.
 */
export interface PrivateLinkServiceConnectionStateArgs {
    /**
     * A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionsRequired?: pulumi.Input<string>;
    /**
     * The reason for approval/rejection of the connection.
     */
    description?: pulumi.Input<string>;
    /**
     * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
     */
    status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus>;
}

/**
 * Specifies the user intent of the proximity placement group.
 */
export interface ProximityPlacementGroupPropertiesIntentArgs {
    /**
     * Specifies possible sizes of virtual machines that can be created in the proximity placement group.
     */
    vmSizes?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Describes the public IP Sku. It can only be set with OrchestrationMode as Flexible.
 */
export interface PublicIPAddressSkuArgs {
    /**
     * Specify public IP sku name
     */
    name?: pulumi.Input<string | enums.PublicIPAddressSkuName>;
    /**
     * Specify public IP sku tier
     */
    tier?: pulumi.Input<string | enums.PublicIPAddressSkuTier>;
}

/**
 * Used for establishing the purchase context of any 3rd Party artifact through MarketPlace.
 */
export interface PurchasePlanArgs {
    /**
     * The plan ID.
     */
    name: pulumi.Input<string>;
    /**
     * Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element.
     */
    product: pulumi.Input<string>;
    /**
     * The Offer Promotion Code.
     */
    promotionCode?: pulumi.Input<string>;
    /**
     * The publisher ID.
     */
    publisher: pulumi.Input<string>;
}

/**
 * The properties describe the recommended machine configuration for this Image Definition. These properties are updatable.
 */
export interface RecommendedMachineConfigurationArgs {
    /**
     * Describes the resource range.
     */
    memory?: pulumi.Input<ResourceRangeArgs>;
    /**
     * Describes the resource range.
     */
    vCPUs?: pulumi.Input<ResourceRangeArgs>;
}

/**
 * Describes the resource range.
 */
export interface ResourceRangeArgs {
    /**
     * The maximum number of the resource.
     */
    max?: pulumi.Input<number>;
    /**
     * The minimum number of the resource.
     */
    min?: pulumi.Input<number>;
}

/**
 * The properties of the source resource that this restore point collection is created from.
 */
export interface RestorePointCollectionSourcePropertiesArgs {
    /**
     * Resource Id of the source resource used to create this restore point collection
     */
    id?: pulumi.Input<string>;
}

/**
 * Encryption at rest settings for disk restore point. It is an optional property that can be specified in the input while creating a restore point.
 */
export interface RestorePointEncryptionArgs {
    /**
     * Describes the parameter of customer managed disk encryption set resource id that can be specified for disk. **Note:** The disk encryption set resource id can only be specified for managed disk. Please refer https://aka.ms/mdssewithcmkoverview for more details.
     */
    diskEncryptionSet?: pulumi.Input<DiskEncryptionSetParametersArgs>;
    /**
     * The type of key used to encrypt the data of the disk restore point.
     */
    type?: pulumi.Input<string | enums.RestorePointEncryptionType>;
}

/**
 * Describes the properties of the Virtual Machine for which the restore point was created. The properties provided are a subset and the snapshot of the overall Virtual Machine properties captured at the time of the restore point creation.
 */
export interface RestorePointSourceMetadataArgs {
    /**
     * Gets the storage profile.
     */
    storageProfile?: pulumi.Input<RestorePointSourceVMStorageProfileArgs>;
}

/**
 * Describes a data disk.
 */
export interface RestorePointSourceVMDataDiskArgs {
    /**
     * Contains Disk Restore Point properties.
     */
    diskRestorePoint?: pulumi.Input<DiskRestorePointAttributesArgs>;
    /**
     * Contains the managed disk details.
     */
    managedDisk?: pulumi.Input<ManagedDiskParametersArgs>;
}

/**
 * Describes an Operating System disk.
 */
export interface RestorePointSourceVMOSDiskArgs {
    /**
     * Contains Disk Restore Point properties.
     */
    diskRestorePoint?: pulumi.Input<DiskRestorePointAttributesArgs>;
    /**
     * Gets the managed disk details
     */
    managedDisk?: pulumi.Input<ManagedDiskParametersArgs>;
}

/**
 * Describes the storage profile.
 */
export interface RestorePointSourceVMStorageProfileArgs {
    /**
     * Gets the data disks of the VM captured at the time of the restore point creation.
     */
    dataDisks?: pulumi.Input<pulumi.Input<RestorePointSourceVMDataDiskArgs>[]>;
    /**
     * Gets the OS disk of the VM captured at the time of the restore point creation.
     */
    osDisk?: pulumi.Input<RestorePointSourceVMOSDiskArgs>;
}

/**
 * The configuration parameters used while performing a rolling upgrade.
 */
export interface RollingUpgradePolicyArgs {
    /**
     * Allow VMSS to ignore AZ boundaries when constructing upgrade batches. Take into consideration the Update Domain and maxBatchInstancePercent to determine the batch size.
     */
    enableCrossZoneUpgrade?: pulumi.Input<boolean>;
    /**
     * The maximum percent of total virtual machine instances that will be upgraded simultaneously by the rolling upgrade in one batch. As this is a maximum, unhealthy instances in previous or future batches can cause the percentage of instances in a batch to decrease to ensure higher reliability. The default value for this parameter is 20%.
     */
    maxBatchInstancePercent?: pulumi.Input<number>;
    /**
     * Create new virtual machines to upgrade the scale set, rather than updating the existing virtual machines. Existing virtual machines will be deleted once the new virtual machines are created for each batch.
     */
    maxSurge?: pulumi.Input<boolean>;
    /**
     * The maximum percentage of the total virtual machine instances in the scale set that can be simultaneously unhealthy, either as a result of being upgraded, or by being found in an unhealthy state by the virtual machine health checks before the rolling upgrade aborts. This constraint will be checked prior to starting any batch. The default value for this parameter is 20%.
     */
    maxUnhealthyInstancePercent?: pulumi.Input<number>;
    /**
     * The maximum percentage of upgraded virtual machine instances that can be found to be in an unhealthy state. This check will happen after each batch is upgraded. If this percentage is ever exceeded, the rolling update aborts. The default value for this parameter is 20%.
     */
    maxUnhealthyUpgradedInstancePercent?: pulumi.Input<number>;
    /**
     * The wait time between completing the update for all virtual machines in one batch and starting the next batch. The time duration should be specified in ISO 8601 format. The default value is 0 seconds (PT0S).
     */
    pauseTimeBetweenBatches?: pulumi.Input<string>;
    /**
     * Upgrade all unhealthy instances in a scale set before any healthy instances.
     */
    prioritizeUnhealthyInstances?: pulumi.Input<boolean>;
    /**
     * Rollback failed instances to previous model if the Rolling Upgrade policy is violated.
     */
    rollbackFailedInstancesOnPolicyBreach?: pulumi.Input<boolean>;
}

/**
 * Describes the properties of a run command parameter.
 */
export interface RunCommandInputParameterArgs {
    /**
     * The run command parameter name.
     */
    name: pulumi.Input<string>;
    /**
     * The run command parameter value.
     */
    value: pulumi.Input<string>;
}

/**
 *  Contains clientId or objectId (use only one, not both) of a user-assigned managed identity that has access to storage blob used in Run Command. Use an empty RunCommandManagedIdentity object in case of system-assigned identity. Make sure the Azure storage blob exists in case of scriptUri, and managed identity has been given access to blob's container with 'Storage Blob Data Reader' role assignment with scriptUri blob and 'Storage Blob Data Contributor' for Append blobs(outputBlobUri, errorBlobUri). In case of user assigned identity, make sure you add it under VM's identity. For more info on managed identity and Run Command, refer https://aka.ms/ManagedIdentity and https://aka.ms/RunCommandManaged.
 */
export interface RunCommandManagedIdentityArgs {
    /**
     * Client Id (GUID value) of the user-assigned managed identity. ObjectId should not be used if this is provided.
     */
    clientId?: pulumi.Input<string>;
    /**
     * Object Id (GUID value) of the user-assigned managed identity. ClientId should not be used if this is provided.
     */
    objectId?: pulumi.Input<string>;
}

/**
 * Describes a scale-in policy for a virtual machine scale set.
 */
export interface ScaleInPolicyArgs {
    /**
     * This property allows you to specify if virtual machines chosen for removal have to be force deleted when a virtual machine scale set is being scaled-in.(Feature in Preview)
     */
    forceDeletion?: pulumi.Input<boolean>;
    /**
     * The rules to be followed when scaling-in a virtual machine scale set. <br><br> Possible values are: <br><br> **Default** When a virtual machine scale set is scaled in, the scale set will first be balanced across zones if it is a zonal scale set. Then, it will be balanced across Fault Domains as far as possible. Within each Fault Domain, the virtual machines chosen for removal will be the newest ones that are not protected from scale-in. <br><br> **OldestVM** When a virtual machine scale set is being scaled-in, the oldest virtual machines that are not protected from scale-in will be chosen for removal. For zonal virtual machine scale sets, the scale set will first be balanced across zones. Within each zone, the oldest virtual machines that are not protected will be chosen for removal. <br><br> **NewestVM** When a virtual machine scale set is being scaled-in, the newest virtual machines that are not protected from scale-in will be chosen for removal. For zonal virtual machine scale sets, the scale set will first be balanced across zones. Within each zone, the newest virtual machines that are not protected will be chosen for removal. <br><br>
     */
    rules?: pulumi.Input<pulumi.Input<string | enums.VirtualMachineScaleSetScaleInRules>[]>;
}

export interface ScheduledEventsProfileArgs {
    /**
     * Specifies OS Image Scheduled Event related configurations.
     */
    osImageNotificationProfile?: pulumi.Input<OSImageNotificationProfileArgs>;
    /**
     * Specifies Terminate Scheduled Event related configurations.
     */
    terminateNotificationProfile?: pulumi.Input<TerminateNotificationProfileArgs>;
}

/**
 * Specifies the security posture to be used for all virtual machines in the scale set. Minimum api-version: 2023-03-01
 */
export interface SecurityPostureReferenceArgs {
    /**
     * List of virtual machine extensions to exclude when applying the Security Posture.
     */
    excludeExtensions?: pulumi.Input<pulumi.Input<VirtualMachineExtensionArgs>[]>;
    /**
     * The security posture reference id in the form of /CommunityGalleries/{communityGalleryName}/securityPostures/{securityPostureName}/versions/{major.minor.patch}|{major.*}|latest
     */
    id?: pulumi.Input<string>;
}

/**
 * Specifies the Security profile settings for the virtual machine or virtual machine scale set.
 */
export interface SecurityProfileArgs {
    /**
     * This property can be used by user in the request to enable or disable the Host Encryption for the virtual machine or virtual machine scale set. This will enable the encryption for all the disks including Resource/Temp disk at host itself. The default behavior is: The Encryption at host will be disabled unless this property is set to true for the resource.
     */
    encryptionAtHost?: pulumi.Input<boolean>;
    /**
     * Specifies the SecurityType of the virtual machine. It has to be set to any specified value to enable UefiSettings. The default behavior is: UefiSettings will not be enabled unless this property is set.
     */
    securityType?: pulumi.Input<string | enums.SecurityTypes>;
    /**
     * Specifies the security settings like secure boot and vTPM used while creating the virtual machine. Minimum api-version: 2020-12-01.
     */
    uefiSettings?: pulumi.Input<UefiSettingsArgs>;
}

/**
 * Specifies the service artifact reference id used to set same image version for all virtual machines in the scale set when using 'latest' image version. Minimum api-version: 2022-11-01
 */
export interface ServiceArtifactReferenceArgs {
    /**
     * The service artifact reference id in the form of /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/galleries/{galleryName}/serviceArtifacts/{serviceArtifactName}/vmArtifactsProfiles/{vmArtifactsProfilesName}
     */
    id?: pulumi.Input<string>;
}

/**
 * Profile for gallery sharing to subscription or tenant
 */
export interface SharingProfileArgs {
    /**
     * Information of community gallery if current gallery is shared to community.
     */
    communityGalleryInfo?: pulumi.Input<CommunityGalleryInfoArgs>;
    /**
     * This property allows you to specify the permission of sharing gallery. <br><br> Possible values are: <br><br> **Private** <br><br> **Groups** <br><br> **Community**
     */
    permissions?: pulumi.Input<string | enums.GallerySharingPermissionTypes>;
}

/**
 * Describes a virtual machine scale set sku. NOTE: If the new VM SKU is not supported on the hardware the scale set is currently on, you need to deallocate the VMs in the scale set before you modify the SKU name.
 */
export interface SkuArgs {
    /**
     * Specifies the number of virtual machines in the scale set.
     */
    capacity?: pulumi.Input<number>;
    /**
     * The sku name.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the tier of virtual machines in a scale set.<br /><br /> Possible Values:<br /><br /> **Standard**<br /><br /> **Basic**
     */
    tier?: pulumi.Input<string>;
}

/**
 * The snapshots sku name. Can be Standard_LRS, Premium_LRS, or Standard_ZRS. This is an optional parameter for incremental snapshot and the default behavior is the SKU will be set to the same sku as the previous snapshot
 */
export interface SnapshotSkuArgs {
    /**
     * The sku name.
     */
    name?: pulumi.Input<string | enums.SnapshotStorageAccountTypes>;
}

/**
 * Contains information about the soft deletion policy of the gallery.
 */
export interface SoftDeletePolicyArgs {
    /**
     * Enables soft-deletion for resources in this gallery, allowing them to be recovered within retention time.
     */
    isSoftDeleteEnabled?: pulumi.Input<boolean>;
}

/**
 * The vault id is an Azure Resource Manager Resource id in the form /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}
 */
export interface SourceVaultArgs {
    /**
     * Resource Id
     */
    id?: pulumi.Input<string>;
}

/**
 * Specifies the Spot-Try-Restore properties for the virtual machine scale set. With this property customer can enable or disable automatic restore of the evicted Spot VMSS VM instances opportunistically based on capacity availability and pricing constraint.
 */
export interface SpotRestorePolicyArgs {
    /**
     * Enables the Spot-Try-Restore feature where evicted VMSS SPOT instances will be tried to be restored opportunistically based on capacity availability and pricing constraints
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Timeout value expressed as an ISO 8601 time duration after which the platform will not try to restore the VMSS SPOT instances
     */
    restoreTimeout?: pulumi.Input<string>;
}

/**
 * SSH configuration for Linux based VMs running on Azure
 */
export interface SshConfigurationArgs {
    /**
     * The list of SSH public keys used to authenticate with linux based VMs.
     */
    publicKeys?: pulumi.Input<pulumi.Input<SshPublicKeyArgs>[]>;
}

/**
 * Contains information about SSH certificate public key and the path on the Linux VM where the public key is placed.
 */
export interface SshPublicKeyArgs {
    /**
     * SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. For creating ssh keys, see [Create SSH keys on Linux and Mac for Linux VMs in Azure]https://docs.microsoft.com/azure/virtual-machines/linux/create-ssh-keys-detailed).
     */
    keyData?: pulumi.Input<string>;
    /**
     * Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys
     */
    path?: pulumi.Input<string>;
}

/**
 * Specifies the storage settings for the virtual machine disks.
 */
export interface StorageProfileArgs {
    /**
     * Specifies the parameters that are used to add a data disk to a virtual machine. For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/managed-disks-overview).
     */
    dataDisks?: pulumi.Input<pulumi.Input<DataDiskArgs>[]>;
    /**
     * Specifies the disk controller type configured for the VM. **Note:** This property will be set to the default disk controller type if not specified provided virtual machine is being created with 'hyperVGeneration' set to V2 based on the capabilities of the operating system disk and VM size from the the specified minimum api version. You need to deallocate the VM before updating its disk controller type unless you are updating the VM size in the VM configuration which implicitly deallocates and reallocates the VM. Minimum api-version: 2022-08-01.
     */
    diskControllerType?: pulumi.Input<string | enums.DiskControllerTypes>;
    /**
     * Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations.
     */
    imageReference?: pulumi.Input<ImageReferenceArgs>;
    /**
     * Specifies information about the operating system disk used by the virtual machine. For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/managed-disks-overview).
     */
    osDisk?: pulumi.Input<OSDiskArgs>;
}

export interface SubResourceArgs {
    /**
     * Sub-resource ID. Both absolute resource ID and a relative resource ID are accepted.
     * An absolute ID starts with /subscriptions/ and contains the entire ID of the parent resource and the ID of the sub-resource in the end.
     * A relative ID replaces the ID of the parent resource with a token '$self', followed by the sub-resource ID itself.
     * Example of a relative ID: $self/frontEndConfigurations/my-frontend.
     */
    id?: pulumi.Input<string>;
}

/**
 * List of supported capabilities persisted on the disk resource for VM use.
 */
export interface SupportedCapabilitiesArgs {
    /**
     * True if the image from which the OS disk is created supports accelerated networking.
     */
    acceleratedNetwork?: pulumi.Input<boolean>;
    /**
     * CPU architecture supported by an OS disk.
     */
    architecture?: pulumi.Input<string | enums.Architecture>;
    /**
     * The disk controllers that an OS disk supports. If set it can be SCSI or SCSI, NVME or NVME, SCSI.
     */
    diskControllerTypes?: pulumi.Input<string>;
}

/**
 * Describes the target region information.
 */
export interface TargetRegionArgs {
    /**
     * Optional. Allows users to provide customer managed keys for encrypting the OS and data disks in the gallery artifact.
     */
    encryption?: pulumi.Input<EncryptionImagesArgs>;
    /**
     * Contains the flag setting to hide an image when users specify version='latest'
     */
    excludeFromLatest?: pulumi.Input<boolean>;
    /**
     * The name of the region.
     */
    name: pulumi.Input<string>;
    /**
     * The number of replicas of the Image Version to be created per region. This property is updatable.
     */
    regionalReplicaCount?: pulumi.Input<number>;
    /**
     * Specifies the storage account type to be used to store the image. This property is not updatable.
     */
    storageAccountType?: pulumi.Input<string | enums.StorageAccountType>;
}

export interface TerminateNotificationProfileArgs {
    /**
     * Specifies whether the Terminate Scheduled event is enabled or disabled.
     */
    enable?: pulumi.Input<boolean>;
    /**
     * Configurable length of time a Virtual Machine being deleted will have to potentially approve the Terminate Scheduled Event before the event is auto approved (timed out). The configuration must be specified in ISO 8601 format, the default value is 5 minutes (PT5M)
     */
    notBeforeTimeout?: pulumi.Input<string>;
}

/**
 * Specifies the security settings like secure boot and vTPM used while creating the virtual machine. Minimum api-version: 2020-12-01.
 */
export interface UefiSettingsArgs {
    /**
     * Specifies whether secure boot should be enabled on the virtual machine. Minimum api-version: 2020-12-01.
     */
    secureBootEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies whether vTPM should be enabled on the virtual machine. Minimum api-version: 2020-12-01.
     */
    vTpmEnabled?: pulumi.Input<boolean>;
}

/**
 * Describes an upgrade policy - automatic, manual, or rolling.
 */
export interface UpgradePolicyArgs {
    /**
     * Configuration parameters used for performing automatic OS Upgrade.
     */
    automaticOSUpgradePolicy?: pulumi.Input<AutomaticOSUpgradePolicyArgs>;
    /**
     * Specifies the mode of an upgrade to virtual machines in the scale set.<br /><br /> Possible values are:<br /><br /> **Manual** - You  control the application of updates to virtual machines in the scale set. You do this by using the manualUpgrade action.<br /><br /> **Automatic** - All virtual machines in the scale set are  automatically updated at the same time.
     */
    mode?: pulumi.Input<enums.UpgradeMode>;
    /**
     * The configuration parameters used while performing a rolling upgrade.
     */
    rollingUpgradePolicy?: pulumi.Input<RollingUpgradePolicyArgs>;
}

export interface UserArtifactManageArgs {
    /**
     * Required. The path and arguments to install the gallery application. This is limited to 4096 characters.
     */
    install: pulumi.Input<string>;
    /**
     * Required. The path and arguments to remove the gallery application. This is limited to 4096 characters.
     */
    remove: pulumi.Input<string>;
    /**
     * Optional. The path and arguments to update the gallery application. If not present, then update operation will invoke remove command on the previous version and install command on the current version of the gallery application. This is limited to 4096 characters.
     */
    update?: pulumi.Input<string>;
}

/**
 * Additional settings for the VM app that contains the target package and config file name when it is deployed to target VM or VM scale set.
 */
export interface UserArtifactSettingsArgs {
    /**
     * Optional. The name to assign the downloaded config file on the VM. This is limited to 4096 characters. If not specified, the config file will be named the Gallery Application name appended with "_config".
     */
    configFileName?: pulumi.Input<string>;
    /**
     * Optional. The name to assign the downloaded package file on the VM. This is limited to 4096 characters. If not specified, the package file will be named the same as the Gallery Application name.
     */
    packageFileName?: pulumi.Input<string>;
}

/**
 * The source image from which the Image Version is going to be created.
 */
export interface UserArtifactSourceArgs {
    /**
     * Optional. The defaultConfigurationLink of the artifact, must be a readable storage page blob.
     */
    defaultConfigurationLink?: pulumi.Input<string>;
    /**
     * Required. The mediaLink of the artifact, must be a readable storage page blob.
     */
    mediaLink: pulumi.Input<string>;
}

/**
 * Specifies the security profile settings for the managed disk. **Note:** It can only be set for Confidential VMs.
 */
export interface VMDiskSecurityProfileArgs {
    /**
     * Specifies the customer managed disk encryption set resource id for the managed disk that is used for Customer Managed Key encrypted ConfidentialVM OS Disk and VMGuest blob.
     */
    diskEncryptionSet?: pulumi.Input<DiskEncryptionSetParametersArgs>;
    /**
     * Specifies the EncryptionType of the managed disk. It is set to DiskWithVMGuestState for encryption of the managed disk along with VMGuestState blob, and VMGuestStateOnly for encryption of just the VMGuestState blob. **Note:** It can be set for only Confidential VMs.
     */
    securityEncryptionType?: pulumi.Input<string | enums.SecurityEncryptionTypes>;
}

/**
 * Specifies the required information to reference a compute gallery application version
 */
export interface VMGalleryApplicationArgs {
    /**
     * Optional, Specifies the uri to an azure blob that will replace the default configuration for the package if provided
     */
    configurationReference?: pulumi.Input<string>;
    /**
     * If set to true, when a new Gallery Application version is available in PIR/SIG, it will be automatically updated for the VM/VMSS
     */
    enableAutomaticUpgrade?: pulumi.Input<boolean>;
    /**
     * Optional, Specifies the order in which the packages have to be installed
     */
    order?: pulumi.Input<number>;
    /**
     * Specifies the GalleryApplicationVersion resource id on the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{application}/versions/{version}
     */
    packageReferenceId: pulumi.Input<string>;
    /**
     * Optional, Specifies a passthrough value for more generic context.
     */
    tags?: pulumi.Input<string>;
    /**
     * Optional, If true, any failure for any operation in the VmApplication will fail the deployment
     */
    treatFailureAsDeploymentFailure?: pulumi.Input<boolean>;
}

/**
 * Specifies VM Size Property settings on the virtual machine.
 */
export interface VMSizePropertiesArgs {
    /**
     * Specifies the number of vCPUs available for the VM. When this property is not specified in the request body the default behavior is to set it to the value of vCPUs available for that VM size exposed in api response of [List all available virtual machine sizes in a region](https://docs.microsoft.com/en-us/rest/api/compute/resource-skus/list).
     */
    vCPUsAvailable?: pulumi.Input<number>;
    /**
     * Specifies the vCPU to physical core ratio. When this property is not specified in the request body the default behavior is set to the value of vCPUsPerCore for the VM Size exposed in api response of [List all available virtual machine sizes in a region](https://docs.microsoft.com/en-us/rest/api/compute/resource-skus/list). **Setting this property to 1 also means that hyper-threading is disabled.**
     */
    vCPUsPerCore?: pulumi.Input<number>;
}

/**
 * Describes a single certificate reference in a Key Vault, and where the certificate should reside on the VM.
 */
export interface VaultCertificateArgs {
    /**
     * For Windows VMs, specifies the certificate store on the Virtual Machine to which the certificate should be added. The specified certificate store is implicitly in the LocalMachine account. For Linux VMs, the certificate file is placed under the /var/lib/waagent directory, with the file name &lt;UppercaseThumbprint&gt;.crt for the X509 certificate file and &lt;UppercaseThumbprint&gt;.prv for private key. Both of these files are .pem formatted.
     */
    certificateStore?: pulumi.Input<string>;
    /**
     * This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>} <br> To install certificates on a virtual machine it is recommended to use the [Azure Key Vault virtual machine extension for Linux](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-linux) or the [Azure Key Vault virtual machine extension for Windows](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-windows).
     */
    certificateUrl?: pulumi.Input<string>;
}

/**
 * Describes a set of certificates which are all in the same Key Vault.
 */
export interface VaultSecretGroupArgs {
    /**
     * The relative URL of the Key Vault containing all of the certificates in VaultCertificates.
     */
    sourceVault?: pulumi.Input<SubResourceArgs>;
    /**
     * The list of key vault references in SourceVault which contain certificates.
     */
    vaultCertificates?: pulumi.Input<pulumi.Input<VaultCertificateArgs>[]>;
}

/**
 * Describes the uri of a disk.
 */
export interface VirtualHardDiskArgs {
    /**
     * Specifies the virtual hard disk's uri.
     */
    uri?: pulumi.Input<string>;
}

/**
 * Describes a Virtual Machine Extension.
 */
export interface VirtualMachineExtensionArgs {
    /**
     * Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
     */
    autoUpgradeMinorVersion?: pulumi.Input<boolean>;
    /**
     * Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available.
     */
    enableAutomaticUpgrade?: pulumi.Input<boolean>;
    /**
     * How the extension handler should be forced to update even if the extension configuration has not changed.
     */
    forceUpdateTag?: pulumi.Input<string>;
    /**
     * The virtual machine extension instance view.
     */
    instanceView?: pulumi.Input<VirtualMachineExtensionInstanceViewArgs>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
     */
    protectedSettings?: any;
    /**
     * The extensions protected settings that are passed by reference, and consumed from key vault
     */
    protectedSettingsFromKeyVault?: pulumi.Input<KeyVaultSecretReferenceArgs>;
    /**
     * Collection of extension names after which this extension needs to be provisioned.
     */
    provisionAfterExtensions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the extension handler publisher.
     */
    publisher?: pulumi.Input<string>;
    /**
     * Json formatted public settings for the extension.
     */
    settings?: any;
    /**
     * Indicates whether failures stemming from the extension will be suppressed (Operational failures such as not connecting to the VM will not be suppressed regardless of this value). The default is false.
     */
    suppressFailures?: pulumi.Input<boolean>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Specifies the type of the extension; an example is "CustomScriptExtension".
     */
    type?: pulumi.Input<string>;
    /**
     * Specifies the version of the script handler.
     */
    typeHandlerVersion?: pulumi.Input<string>;
}

/**
 * The instance view of a virtual machine extension.
 */
export interface VirtualMachineExtensionInstanceViewArgs {
    /**
     * The virtual machine extension name.
     */
    name?: pulumi.Input<string>;
    /**
     * The resource status information.
     */
    statuses?: pulumi.Input<pulumi.Input<InstanceViewStatusArgs>[]>;
    /**
     * The resource status information.
     */
    substatuses?: pulumi.Input<pulumi.Input<InstanceViewStatusArgs>[]>;
    /**
     * Specifies the type of the extension; an example is "CustomScriptExtension".
     */
    type?: pulumi.Input<string>;
    /**
     * Specifies the version of the script handler.
     */
    typeHandlerVersion?: pulumi.Input<string>;
}

/**
 * Identity for the virtual machine.
 */
export interface VirtualMachineIdentityArgs {
    /**
     * The type of identity used for the virtual machine. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine.
     */
    type?: pulumi.Input<enums.ResourceIdentityType>;
    /**
     * The list of user identities associated with the Virtual Machine. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Contains the IP tag associated with the public IP address.
 */
export interface VirtualMachineIpTagArgs {
    /**
     * IP tag type. Example: FirstPartyUsage.
     */
    ipTagType?: pulumi.Input<string>;
    /**
     * IP tag associated with the public IP. Example: SQL, Storage etc.
     */
    tag?: pulumi.Input<string>;
}

/**
 * Describes a virtual machine network interface configurations.
 */
export interface VirtualMachineNetworkInterfaceConfigurationArgs {
    /**
     * Specify what happens to the network interface when the VM is deleted
     */
    deleteOption?: pulumi.Input<string | enums.DeleteOptions>;
    /**
     * Specifies whether the network interface is disabled for tcp state tracking.
     */
    disableTcpStateTracking?: pulumi.Input<boolean>;
    /**
     * The dns settings to be applied on the network interfaces.
     */
    dnsSettings?: pulumi.Input<VirtualMachineNetworkInterfaceDnsSettingsConfigurationArgs>;
    dscpConfiguration?: pulumi.Input<SubResourceArgs>;
    /**
     * Specifies whether the network interface is accelerated networking-enabled.
     */
    enableAcceleratedNetworking?: pulumi.Input<boolean>;
    /**
     * Specifies whether the network interface is FPGA networking-enabled.
     */
    enableFpga?: pulumi.Input<boolean>;
    /**
     * Whether IP forwarding enabled on this NIC.
     */
    enableIPForwarding?: pulumi.Input<boolean>;
    /**
     * Specifies the IP configurations of the network interface.
     */
    ipConfigurations: pulumi.Input<pulumi.Input<VirtualMachineNetworkInterfaceIPConfigurationArgs>[]>;
    /**
     * The network interface configuration name.
     */
    name: pulumi.Input<string>;
    /**
     * The network security group.
     */
    networkSecurityGroup?: pulumi.Input<SubResourceArgs>;
    /**
     * Specifies the primary network interface in case the virtual machine has more than 1 network interface.
     */
    primary?: pulumi.Input<boolean>;
}

/**
 * Describes a virtual machines network configuration's DNS settings.
 */
export interface VirtualMachineNetworkInterfaceDnsSettingsConfigurationArgs {
    /**
     * List of DNS servers IP addresses
     */
    dnsServers?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Describes a virtual machine network profile's IP configuration.
 */
export interface VirtualMachineNetworkInterfaceIPConfigurationArgs {
    /**
     * Specifies an array of references to backend address pools of application gateways. A virtual machine can reference backend address pools of multiple application gateways. Multiple virtual machines cannot use the same application gateway.
     */
    applicationGatewayBackendAddressPools?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
    /**
     * Specifies an array of references to application security group.
     */
    applicationSecurityGroups?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
    /**
     * Specifies an array of references to backend address pools of load balancers. A virtual machine can reference backend address pools of one public and one internal load balancer. [Multiple virtual machines cannot use the same basic sku load balancer].
     */
    loadBalancerBackendAddressPools?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
    /**
     * The IP configuration name.
     */
    name: pulumi.Input<string>;
    /**
     * Specifies the primary network interface in case the virtual machine has more than 1 network interface.
     */
    primary?: pulumi.Input<boolean>;
    /**
     * Available from Api-Version 2017-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'.
     */
    privateIPAddressVersion?: pulumi.Input<string | enums.IPVersions>;
    /**
     * The publicIPAddressConfiguration.
     */
    publicIPAddressConfiguration?: pulumi.Input<VirtualMachinePublicIPAddressConfigurationArgs>;
    /**
     * Specifies the identifier of the subnet.
     */
    subnet?: pulumi.Input<SubResourceArgs>;
}

/**
 * Describes a virtual machines IP Configuration's PublicIPAddress configuration
 */
export interface VirtualMachinePublicIPAddressConfigurationArgs {
    /**
     * Specify what happens to the public IP address when the VM is deleted
     */
    deleteOption?: pulumi.Input<string | enums.DeleteOptions>;
    /**
     * The dns settings to be applied on the publicIP addresses .
     */
    dnsSettings?: pulumi.Input<VirtualMachinePublicIPAddressDnsSettingsConfigurationArgs>;
    /**
     * The idle timeout of the public IP address.
     */
    idleTimeoutInMinutes?: pulumi.Input<number>;
    /**
     * The list of IP tags associated with the public IP address.
     */
    ipTags?: pulumi.Input<pulumi.Input<VirtualMachineIpTagArgs>[]>;
    /**
     * The publicIP address configuration name.
     */
    name: pulumi.Input<string>;
    /**
     * Available from Api-Version 2019-07-01 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4. Possible values are: 'IPv4' and 'IPv6'.
     */
    publicIPAddressVersion?: pulumi.Input<string | enums.IPVersions>;
    /**
     * Specify the public IP allocation type
     */
    publicIPAllocationMethod?: pulumi.Input<string | enums.PublicIPAllocationMethod>;
    /**
     * The PublicIPPrefix from which to allocate publicIP addresses.
     */
    publicIPPrefix?: pulumi.Input<SubResourceArgs>;
    /**
     * Describes the public IP Sku. It can only be set with OrchestrationMode as Flexible.
     */
    sku?: pulumi.Input<PublicIPAddressSkuArgs>;
}

/**
 * Describes a virtual machines network configuration's DNS settings.
 */
export interface VirtualMachinePublicIPAddressDnsSettingsConfigurationArgs {
    /**
     * The Domain name label prefix of the PublicIPAddress resources that will be created. The generated name label is the concatenation of the domain name label and vm network profile unique ID.
     */
    domainNameLabel: pulumi.Input<string>;
}

/**
 * Describes the script sources for run command. Use only one of script, scriptUri, commandId.
 */
export interface VirtualMachineRunCommandScriptSourceArgs {
    /**
     * Specifies a commandId of predefined built-in script.
     */
    commandId?: pulumi.Input<string>;
    /**
     * Specifies the script content to be executed on the VM.
     */
    script?: pulumi.Input<string>;
    /**
     * Specifies the script download location. It can be either SAS URI of an Azure storage blob with read access or public URI.
     */
    scriptUri?: pulumi.Input<string>;
    /**
     * User-assigned managed identity that has access to scriptUri in case of Azure storage blob. Use an empty object in case of system-assigned identity. Make sure the Azure storage blob exists, and managed identity has been given access to blob's container with 'Storage Blob Data Reader' role assignment. In case of user-assigned identity, make sure you add it under VM's identity. For more info on managed identity and Run Command, refer https://aka.ms/ManagedIdentity and https://aka.ms/RunCommandManaged.
     */
    scriptUriManagedIdentity?: pulumi.Input<RunCommandManagedIdentityArgs>;
}

/**
 * Describes a virtual machine scale set data disk.
 */
export interface VirtualMachineScaleSetDataDiskArgs {
    /**
     * Specifies the caching requirements. Possible values are: **None,** **ReadOnly,** **ReadWrite.** The default values are: **None for Standard storage. ReadOnly for Premium storage.**
     */
    caching?: pulumi.Input<enums.CachingTypes>;
    /**
     * The create option.
     */
    createOption: pulumi.Input<string | enums.DiskCreateOptionTypes>;
    /**
     * Specifies whether data disk should be deleted or detached upon VMSS Flex deletion (This feature is available for VMSS with Flexible OrchestrationMode only).<br><br> Possible values: <br><br> **Delete** If this value is used, the data disk is deleted when the VMSS Flex VM is deleted.<br><br> **Detach** If this value is used, the data disk is retained after VMSS Flex VM is deleted.<br><br> The default value is set to **Delete**.
     */
    deleteOption?: pulumi.Input<string | enums.DiskDeleteOptionTypes>;
    /**
     * Specifies the Read-Write IOPS for the managed disk. Should be used only when StorageAccountType is UltraSSD_LRS. If not specified, a default value would be assigned based on diskSizeGB.
     */
    diskIOPSReadWrite?: pulumi.Input<number>;
    /**
     * Specifies the bandwidth in MB per second for the managed disk. Should be used only when StorageAccountType is UltraSSD_LRS. If not specified, a default value would be assigned based on diskSizeGB.
     */
    diskMBpsReadWrite?: pulumi.Input<number>;
    /**
     * Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. The property diskSizeGB is the number of bytes x 1024^3 for the disk and the value cannot be larger than 1023.
     */
    diskSizeGB?: pulumi.Input<number>;
    /**
     * Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
     */
    lun: pulumi.Input<number>;
    /**
     * The managed disk parameters.
     */
    managedDisk?: pulumi.Input<VirtualMachineScaleSetManagedDiskParametersArgs>;
    /**
     * The disk name.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies whether writeAccelerator should be enabled or disabled on the disk.
     */
    writeAcceleratorEnabled?: pulumi.Input<boolean>;
}

/**
 * Describes a Virtual Machine Scale Set Extension.
 */
export interface VirtualMachineScaleSetExtensionArgs {
    /**
     * Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
     */
    autoUpgradeMinorVersion?: pulumi.Input<boolean>;
    /**
     * Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available.
     */
    enableAutomaticUpgrade?: pulumi.Input<boolean>;
    /**
     * If a value is provided and is different from the previous value, the extension handler will be forced to update even if the extension configuration has not changed.
     */
    forceUpdateTag?: pulumi.Input<string>;
    /**
     * The name of the extension.
     */
    name?: pulumi.Input<string>;
    /**
     * The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
     */
    protectedSettings?: any;
    /**
     * The extensions protected settings that are passed by reference, and consumed from key vault
     */
    protectedSettingsFromKeyVault?: pulumi.Input<KeyVaultSecretReferenceArgs>;
    /**
     * Collection of extension names after which this extension needs to be provisioned.
     */
    provisionAfterExtensions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the extension handler publisher.
     */
    publisher?: pulumi.Input<string>;
    /**
     * Json formatted public settings for the extension.
     */
    settings?: any;
    /**
     * Indicates whether failures stemming from the extension will be suppressed (Operational failures such as not connecting to the VM will not be suppressed regardless of this value). The default is false.
     */
    suppressFailures?: pulumi.Input<boolean>;
    /**
     * Specifies the type of the extension; an example is "CustomScriptExtension".
     */
    type?: pulumi.Input<string>;
    /**
     * Specifies the version of the script handler.
     */
    typeHandlerVersion?: pulumi.Input<string>;
}

/**
 * Describes a virtual machine scale set extension profile.
 */
export interface VirtualMachineScaleSetExtensionProfileArgs {
    /**
     * The virtual machine scale set child extension resources.
     */
    extensions?: pulumi.Input<pulumi.Input<VirtualMachineScaleSetExtensionArgs>[]>;
    /**
     * Specifies the time alloted for all extensions to start. The time duration should be between 15 minutes and 120 minutes (inclusive) and should be specified in ISO 8601 format. The default value is 90 minutes (PT1H30M). Minimum api-version: 2020-06-01.
     */
    extensionsTimeBudget?: pulumi.Input<string>;
}

/**
 * Specifies the hardware settings for the virtual machine scale set.
 */
export interface VirtualMachineScaleSetHardwareProfileArgs {
    /**
     * Specifies the properties for customizing the size of the virtual machine. Minimum api-version: 2021-11-01. Please follow the instructions in [VM Customization](https://aka.ms/vmcustomization) for more details.
     */
    vmSizeProperties?: pulumi.Input<VMSizePropertiesArgs>;
}

/**
 * Describes a virtual machine scale set network profile's IP configuration.
 */
export interface VirtualMachineScaleSetIPConfigurationArgs {
    /**
     * Specifies an array of references to backend address pools of application gateways. A scale set can reference backend address pools of multiple application gateways. Multiple scale sets cannot use the same application gateway.
     */
    applicationGatewayBackendAddressPools?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
    /**
     * Specifies an array of references to application security group.
     */
    applicationSecurityGroups?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
    /**
     * Specifies an array of references to backend address pools of load balancers. A scale set can reference backend address pools of one public and one internal load balancer. Multiple scale sets cannot use the same basic sku load balancer.
     */
    loadBalancerBackendAddressPools?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
    /**
     * Specifies an array of references to inbound Nat pools of the load balancers. A scale set can reference inbound nat pools of one public and one internal load balancer. Multiple scale sets cannot use the same basic sku load balancer.
     */
    loadBalancerInboundNatPools?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
    /**
     * The IP configuration name.
     */
    name: pulumi.Input<string>;
    /**
     * Specifies the primary network interface in case the virtual machine has more than 1 network interface.
     */
    primary?: pulumi.Input<boolean>;
    /**
     * Available from Api-Version 2017-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'.
     */
    privateIPAddressVersion?: pulumi.Input<string | enums.IPVersion>;
    /**
     * The publicIPAddressConfiguration.
     */
    publicIPAddressConfiguration?: pulumi.Input<VirtualMachineScaleSetPublicIPAddressConfigurationArgs>;
    /**
     * Specifies the identifier of the subnet.
     */
    subnet?: pulumi.Input<ApiEntityReferenceArgs>;
}

/**
 * Identity for the virtual machine scale set.
 */
export interface VirtualMachineScaleSetIdentityArgs {
    /**
     * The type of identity used for the virtual machine scale set. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine scale set.
     */
    type?: pulumi.Input<enums.ResourceIdentityType>;
    /**
     * The list of user identities associated with the virtual machine scale set. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Contains the IP tag associated with the public IP address.
 */
export interface VirtualMachineScaleSetIpTagArgs {
    /**
     * IP tag type. Example: FirstPartyUsage.
     */
    ipTagType?: pulumi.Input<string>;
    /**
     * IP tag associated with the public IP. Example: SQL, Storage etc.
     */
    tag?: pulumi.Input<string>;
}

/**
 * Describes the parameters of a ScaleSet managed disk.
 */
export interface VirtualMachineScaleSetManagedDiskParametersArgs {
    /**
     * Specifies the customer managed disk encryption set resource id for the managed disk.
     */
    diskEncryptionSet?: pulumi.Input<DiskEncryptionSetParametersArgs>;
    /**
     * Specifies the security profile for the managed disk.
     */
    securityProfile?: pulumi.Input<VMDiskSecurityProfileArgs>;
    /**
     * Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks, it cannot be used with OS Disk.
     */
    storageAccountType?: pulumi.Input<string | enums.StorageAccountTypes>;
}

/**
 * Describes a virtual machine scale set network profile's network configurations.
 */
export interface VirtualMachineScaleSetNetworkConfigurationArgs {
    /**
     * Specify what happens to the network interface when the VM is deleted
     */
    deleteOption?: pulumi.Input<string | enums.DeleteOptions>;
    /**
     * Specifies whether the network interface is disabled for tcp state tracking.
     */
    disableTcpStateTracking?: pulumi.Input<boolean>;
    /**
     * The dns settings to be applied on the network interfaces.
     */
    dnsSettings?: pulumi.Input<VirtualMachineScaleSetNetworkConfigurationDnsSettingsArgs>;
    /**
     * Specifies whether the network interface is accelerated networking-enabled.
     */
    enableAcceleratedNetworking?: pulumi.Input<boolean>;
    /**
     * Specifies whether the network interface is FPGA networking-enabled.
     */
    enableFpga?: pulumi.Input<boolean>;
    /**
     * Whether IP forwarding enabled on this NIC.
     */
    enableIPForwarding?: pulumi.Input<boolean>;
    /**
     * Specifies the IP configurations of the network interface.
     */
    ipConfigurations: pulumi.Input<pulumi.Input<VirtualMachineScaleSetIPConfigurationArgs>[]>;
    /**
     * The network configuration name.
     */
    name: pulumi.Input<string>;
    /**
     * The network security group.
     */
    networkSecurityGroup?: pulumi.Input<SubResourceArgs>;
    /**
     * Specifies the primary network interface in case the virtual machine has more than 1 network interface.
     */
    primary?: pulumi.Input<boolean>;
}

/**
 * Describes a virtual machines scale sets network configuration's DNS settings.
 */
export interface VirtualMachineScaleSetNetworkConfigurationDnsSettingsArgs {
    /**
     * List of DNS servers IP addresses
     */
    dnsServers?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Describes a virtual machine scale set network profile.
 */
export interface VirtualMachineScaleSetNetworkProfileArgs {
    /**
     * A reference to a load balancer probe used to determine the health of an instance in the virtual machine scale set. The reference will be in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/probes/{probeName}'.
     */
    healthProbe?: pulumi.Input<ApiEntityReferenceArgs>;
    /**
     * specifies the Microsoft.Network API version used when creating networking resources in the Network Interface Configurations for Virtual Machine Scale Set with orchestration mode 'Flexible'
     */
    networkApiVersion?: pulumi.Input<string | enums.NetworkApiVersion>;
    /**
     * The list of network configurations.
     */
    networkInterfaceConfigurations?: pulumi.Input<pulumi.Input<VirtualMachineScaleSetNetworkConfigurationArgs>[]>;
}

/**
 * Describes a virtual machine scale set operating system disk.
 */
export interface VirtualMachineScaleSetOSDiskArgs {
    /**
     * Specifies the caching requirements. Possible values are: **None,** **ReadOnly,** **ReadWrite.** The default values are: **None for Standard storage. ReadOnly for Premium storage.**
     */
    caching?: pulumi.Input<enums.CachingTypes>;
    /**
     * Specifies how the virtual machines in the scale set should be created. The only allowed value is: **FromImage.** This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described.
     */
    createOption: pulumi.Input<string | enums.DiskCreateOptionTypes>;
    /**
     * Specifies whether OS Disk should be deleted or detached upon VMSS Flex deletion (This feature is available for VMSS with Flexible OrchestrationMode only). <br><br> Possible values: <br><br> **Delete** If this value is used, the OS disk is deleted when VMSS Flex VM is deleted.<br><br> **Detach** If this value is used, the OS disk is retained after VMSS Flex VM is deleted. <br><br> The default value is set to **Delete**. For an Ephemeral OS Disk, the default value is set to **Delete**. User cannot change the delete option for Ephemeral OS Disk.
     */
    deleteOption?: pulumi.Input<string | enums.DiskDeleteOptionTypes>;
    /**
     * Specifies the ephemeral disk Settings for the operating system disk used by the virtual machine scale set.
     */
    diffDiskSettings?: pulumi.Input<DiffDiskSettingsArgs>;
    /**
     * Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. The property 'diskSizeGB' is the number of bytes x 1024^3 for the disk and the value cannot be larger than 1023.
     */
    diskSizeGB?: pulumi.Input<number>;
    /**
     * Specifies information about the unmanaged user image to base the scale set on.
     */
    image?: pulumi.Input<VirtualHardDiskArgs>;
    /**
     * The managed disk parameters.
     */
    managedDisk?: pulumi.Input<VirtualMachineScaleSetManagedDiskParametersArgs>;
    /**
     * The disk name.
     */
    name?: pulumi.Input<string>;
    /**
     * This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. Possible values are: **Windows,** **Linux.**
     */
    osType?: pulumi.Input<enums.OperatingSystemTypes>;
    /**
     * Specifies the container urls that are used to store operating system disks for the scale set.
     */
    vhdContainers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies whether writeAccelerator should be enabled or disabled on the disk.
     */
    writeAcceleratorEnabled?: pulumi.Input<boolean>;
}

/**
 * Describes a virtual machine scale set OS profile.
 */
export interface VirtualMachineScaleSetOSProfileArgs {
    /**
     * Specifies the password of the administrator account. <br><br> **Minimum-length (Windows):** 8 characters <br><br> **Minimum-length (Linux):** 6 characters <br><br> **Max-length (Windows):** 123 characters <br><br> **Max-length (Linux):** 72 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!" <br><br> For resetting the password, see [How to reset the Remote Desktop service or its login password in a Windows VM](https://docs.microsoft.com/troubleshoot/azure/virtual-machines/reset-rdp) <br><br> For resetting root password, see [Manage users, SSH, and check or repair disks on Azure Linux VMs using the VMAccess Extension](https://docs.microsoft.com/troubleshoot/azure/virtual-machines/troubleshoot-ssh-connection)
     */
    adminPassword?: pulumi.Input<string>;
    /**
     * Specifies the name of the administrator account. <br><br> **Windows-only restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length (Linux):** 1  character <br><br> **Max-length (Linux):** 64 characters <br><br> **Max-length (Windows):** 20 characters
     */
    adminUsername?: pulumi.Input<string>;
    /**
     * Specifies whether extension operations should be allowed on the virtual machine scale set. This may only be set to False when no extensions are present on the virtual machine scale set.
     */
    allowExtensionOperations?: pulumi.Input<boolean>;
    /**
     * Specifies the computer name prefix for all of the virtual machines in the scale set. Computer name prefixes must be 1 to 15 characters long.
     */
    computerNamePrefix?: pulumi.Input<string>;
    /**
     * Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the Virtual Machine. The maximum length of the binary array is 65535 bytes. For using cloud-init for your VM, see [Using cloud-init to customize a Linux VM during creation](https://docs.microsoft.com/azure/virtual-machines/linux/using-cloud-init)
     */
    customData?: pulumi.Input<string>;
    /**
     * Specifies the Linux operating system settings on the virtual machine. For a list of supported Linux distributions, see [Linux on Azure-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/linux/endorsed-distros).
     */
    linuxConfiguration?: pulumi.Input<LinuxConfigurationArgs>;
    /**
     * Optional property which must either be set to True or omitted.
     */
    requireGuestProvisionSignal?: pulumi.Input<boolean>;
    /**
     * Specifies set of certificates that should be installed onto the virtual machines in the scale set. To install certificates on a virtual machine it is recommended to use the [Azure Key Vault virtual machine extension for Linux](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-linux) or the [Azure Key Vault virtual machine extension for Windows](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-windows).
     */
    secrets?: pulumi.Input<pulumi.Input<VaultSecretGroupArgs>[]>;
    /**
     * Specifies Windows operating system settings on the virtual machine.
     */
    windowsConfiguration?: pulumi.Input<WindowsConfigurationArgs>;
}

/**
 * Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration
 */
export interface VirtualMachineScaleSetPublicIPAddressConfigurationArgs {
    /**
     * Specify what happens to the public IP when the VM is deleted
     */
    deleteOption?: pulumi.Input<string | enums.DeleteOptions>;
    /**
     * The dns settings to be applied on the publicIP addresses .
     */
    dnsSettings?: pulumi.Input<VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettingsArgs>;
    /**
     * The idle timeout of the public IP address.
     */
    idleTimeoutInMinutes?: pulumi.Input<number>;
    /**
     * The list of IP tags associated with the public IP address.
     */
    ipTags?: pulumi.Input<pulumi.Input<VirtualMachineScaleSetIpTagArgs>[]>;
    /**
     * The publicIP address configuration name.
     */
    name: pulumi.Input<string>;
    /**
     * Available from Api-Version 2019-07-01 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4. Possible values are: 'IPv4' and 'IPv6'.
     */
    publicIPAddressVersion?: pulumi.Input<string | enums.IPVersion>;
    /**
     * The PublicIPPrefix from which to allocate publicIP addresses.
     */
    publicIPPrefix?: pulumi.Input<SubResourceArgs>;
    /**
     * Describes the public IP Sku. It can only be set with OrchestrationMode as Flexible.
     */
    sku?: pulumi.Input<PublicIPAddressSkuArgs>;
}

/**
 * Describes a virtual machines scale sets network configuration's DNS settings.
 */
export interface VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettingsArgs {
    /**
     * The Domain name label.The concatenation of the domain name label and vm index will be the domain name labels of the PublicIPAddress resources that will be created
     */
    domainNameLabel: pulumi.Input<string>;
}

/**
 * Describes a virtual machine scale set storage profile.
 */
export interface VirtualMachineScaleSetStorageProfileArgs {
    /**
     * Specifies the parameters that are used to add data disks to the virtual machines in the scale set. For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/managed-disks-overview).
     */
    dataDisks?: pulumi.Input<pulumi.Input<VirtualMachineScaleSetDataDiskArgs>[]>;
    diskControllerType?: pulumi.Input<pulumi.Input<string | enums.DiskControllerTypes>[]>;
    /**
     * Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations.
     */
    imageReference?: pulumi.Input<ImageReferenceArgs>;
    /**
     * Specifies information about the operating system disk used by the virtual machines in the scale set. For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/managed-disks-overview).
     */
    osDisk?: pulumi.Input<VirtualMachineScaleSetOSDiskArgs>;
}

/**
 * Describes a virtual machine scale set VM network profile.
 */
export interface VirtualMachineScaleSetVMNetworkProfileConfigurationArgs {
    /**
     * The list of network configurations.
     */
    networkInterfaceConfigurations?: pulumi.Input<pulumi.Input<VirtualMachineScaleSetNetworkConfigurationArgs>[]>;
}

/**
 * Describes a virtual machine scale set virtual machine profile.
 */
export interface VirtualMachineScaleSetVMProfileArgs {
    /**
     * Specifies the gallery applications that should be made available to the VM/VMSS
     */
    applicationProfile?: pulumi.Input<ApplicationProfileArgs>;
    /**
     * Specifies the billing related details of a Azure Spot VMSS. Minimum api-version: 2019-03-01.
     */
    billingProfile?: pulumi.Input<BillingProfileArgs>;
    /**
     * Specifies the capacity reservation related details of a scale set. Minimum api-version: 2021-04-01.
     */
    capacityReservation?: pulumi.Input<CapacityReservationProfileArgs>;
    /**
     * Specifies the boot diagnostic settings state. Minimum api-version: 2015-06-15.
     */
    diagnosticsProfile?: pulumi.Input<DiagnosticsProfileArgs>;
    /**
     * Specifies the eviction policy for the Azure Spot virtual machine and Azure Spot scale set. For Azure Spot virtual machines, both 'Deallocate' and 'Delete' are supported and the minimum api-version is 2019-03-01. For Azure Spot scale sets, both 'Deallocate' and 'Delete' are supported and the minimum api-version is 2017-10-30-preview.
     */
    evictionPolicy?: pulumi.Input<string | enums.VirtualMachineEvictionPolicyTypes>;
    /**
     * Specifies a collection of settings for extensions installed on virtual machines in the scale set.
     */
    extensionProfile?: pulumi.Input<VirtualMachineScaleSetExtensionProfileArgs>;
    /**
     * Specifies the hardware profile related details of a scale set. Minimum api-version: 2021-11-01.
     */
    hardwareProfile?: pulumi.Input<VirtualMachineScaleSetHardwareProfileArgs>;
    /**
     * Specifies that the image or disk that is being used was licensed on-premises. <br><br> Possible values for Windows Server operating system are: <br><br> Windows_Client <br><br> Windows_Server <br><br> Possible values for Linux Server operating system are: <br><br> RHEL_BYOS (for RHEL) <br><br> SLES_BYOS (for SUSE) <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/windows/hybrid-use-benefit-licensing) <br><br> [Azure Hybrid Use Benefit for Linux Server](https://docs.microsoft.com/azure/virtual-machines/linux/azure-hybrid-benefit-linux) <br><br> Minimum api-version: 2015-06-15
     */
    licenseType?: pulumi.Input<string>;
    /**
     * Specifies properties of the network interfaces of the virtual machines in the scale set.
     */
    networkProfile?: pulumi.Input<VirtualMachineScaleSetNetworkProfileArgs>;
    /**
     * Specifies the operating system settings for the virtual machines in the scale set.
     */
    osProfile?: pulumi.Input<VirtualMachineScaleSetOSProfileArgs>;
    /**
     * Specifies the priority for the virtual machines in the scale set. Minimum api-version: 2017-10-30-preview.
     */
    priority?: pulumi.Input<string | enums.VirtualMachinePriorityTypes>;
    /**
     * Specifies Scheduled Event related configurations.
     */
    scheduledEventsProfile?: pulumi.Input<ScheduledEventsProfileArgs>;
    /**
     * Specifies the security posture to be used for all virtual machines in the scale set. Minimum api-version: 2023-03-01
     */
    securityPostureReference?: pulumi.Input<SecurityPostureReferenceArgs>;
    /**
     * Specifies the Security related profile settings for the virtual machines in the scale set.
     */
    securityProfile?: pulumi.Input<SecurityProfileArgs>;
    /**
     * Specifies the service artifact reference id used to set same image version for all virtual machines in the scale set when using 'latest' image version. Minimum api-version: 2022-11-01
     */
    serviceArtifactReference?: pulumi.Input<ServiceArtifactReferenceArgs>;
    /**
     * Specifies the storage settings for the virtual machine disks.
     */
    storageProfile?: pulumi.Input<VirtualMachineScaleSetStorageProfileArgs>;
    /**
     * UserData for the virtual machines in the scale set, which must be base-64 encoded. Customer should not pass any secrets in here. Minimum api-version: 2021-03-01.
     */
    userData?: pulumi.Input<string>;
}

/**
 * The protection policy of a virtual machine scale set VM.
 */
export interface VirtualMachineScaleSetVMProtectionPolicyArgs {
    /**
     * Indicates that the virtual machine scale set VM shouldn't be considered for deletion during a scale-in operation.
     */
    protectFromScaleIn?: pulumi.Input<boolean>;
    /**
     * Indicates that model updates or actions (including scale-in) initiated on the virtual machine scale set should not be applied to the virtual machine scale set VM.
     */
    protectFromScaleSetActions?: pulumi.Input<boolean>;
}

/**
 * Describes Windows Remote Management configuration of the VM
 */
export interface WinRMConfigurationArgs {
    /**
     * The list of Windows Remote Management listeners
     */
    listeners?: pulumi.Input<pulumi.Input<WinRMListenerArgs>[]>;
}

/**
 * Describes Protocol and thumbprint of Windows Remote Management listener
 */
export interface WinRMListenerArgs {
    /**
     * This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>} <br> To install certificates on a virtual machine it is recommended to use the [Azure Key Vault virtual machine extension for Linux](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-linux) or the [Azure Key Vault virtual machine extension for Windows](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-windows).
     */
    certificateUrl?: pulumi.Input<string>;
    /**
     * Specifies the protocol of WinRM listener. Possible values are: **http,** **https.**
     */
    protocol?: pulumi.Input<enums.ProtocolTypes>;
}

/**
 * Specifies Windows operating system settings on the virtual machine.
 */
export interface WindowsConfigurationArgs {
    /**
     * Specifies additional base-64 encoded XML formatted information that can be included in the Unattend.xml file, which is used by Windows Setup.
     */
    additionalUnattendContent?: pulumi.Input<pulumi.Input<AdditionalUnattendContentArgs>[]>;
    /**
     * Indicates whether Automatic Updates is enabled for the Windows virtual machine. Default value is true. For virtual machine scale sets, this property can be updated and updates will take effect on OS reprovisioning.
     */
    enableAutomaticUpdates?: pulumi.Input<boolean>;
    /**
     * Indicates whether VMAgent Platform Updates is enabled for the Windows virtual machine. Default value is false.
     */
    enableVMAgentPlatformUpdates?: pulumi.Input<boolean>;
    /**
     * [Preview Feature] Specifies settings related to VM Guest Patching on Windows.
     */
    patchSettings?: pulumi.Input<PatchSettingsArgs>;
    /**
     * Indicates whether virtual machine agent should be provisioned on the virtual machine. When this property is not specified in the request body, it is set to true by default. This will ensure that VM Agent is installed on the VM so that extensions can be added to the VM later.
     */
    provisionVMAgent?: pulumi.Input<boolean>;
    /**
     * Specifies the time zone of the virtual machine. e.g. "Pacific Standard Time". Possible values can be [TimeZoneInfo.Id](https://docs.microsoft.com/dotnet/api/system.timezoneinfo.id?#System_TimeZoneInfo_Id) value from time zones returned by [TimeZoneInfo.GetSystemTimeZones](https://docs.microsoft.com/dotnet/api/system.timezoneinfo.getsystemtimezones).
     */
    timeZone?: pulumi.Input<string>;
    /**
     * Specifies the Windows Remote Management listeners. This enables remote Windows PowerShell.
     */
    winRM?: pulumi.Input<WinRMConfigurationArgs>;
}

/**
 * Specifies additional settings to be applied when patch mode AutomaticByPlatform is selected in Windows patch settings.
 */
export interface WindowsVMGuestPatchAutomaticByPlatformSettingsArgs {
    /**
     * Enables customer to schedule patching without accidental upgrades
     */
    bypassPlatformSafetyChecksOnUserSchedule?: pulumi.Input<boolean>;
    /**
     * Specifies the reboot setting for all AutomaticByPlatform patch installation operations.
     */
    rebootSetting?: pulumi.Input<string | enums.WindowsVMGuestPatchAutomaticByPlatformRebootSetting>;
}



















