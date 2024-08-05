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
 * The API entity reference.
 */
export interface ApiEntityReferenceResponse {
    /**
     * The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...
     */
    id?: string;
}

/**
 * Api error base.
 */
export interface ApiErrorBaseResponse {
    /**
     * The error code.
     */
    code?: string;
    /**
     * The error message.
     */
    message?: string;
    /**
     * The target of the particular error.
     */
    target?: string;
}

/**
 * Api error.
 */
export interface ApiErrorResponse {
    /**
     * The error code.
     */
    code?: string;
    /**
     * The Api error details
     */
    details?: ApiErrorBaseResponse[];
    /**
     * The Api inner error
     */
    innererror?: InnerErrorResponse;
    /**
     * The error message.
     */
    message?: string;
    /**
     * The target of the particular error.
     */
    target?: string;
}

/**
 * Contains the list of gallery applications that should be made available to the VM/VMSS
 */
export interface ApplicationProfileResponse {
    /**
     * Specifies the gallery applications that should be made available to the VM/VMSS
     */
    galleryApplications?: VMGalleryApplicationResponse[];
}

/**
 * The configuration parameters used for performing automatic OS upgrade.
 */
export interface AutomaticOSUpgradePolicyResponse {
    /**
     * Whether OS image rollback feature should be disabled. Default value is false.
     */
    disableAutomaticRollback?: boolean;
    /**
     * Indicates whether OS upgrades should automatically be applied to scale set instances in a rolling fashion when a newer version of the OS image becomes available. Default value is false. If this is set to true for Windows based scale sets, [enableAutomaticUpdates](https://docs.microsoft.com/dotnet/api/microsoft.azure.management.compute.models.windowsconfiguration.enableautomaticupdates?view=azure-dotnet) is automatically set to false and cannot be set to true.
     */
    enableAutomaticOSUpgrade?: boolean;
    /**
     * Indicates whether rolling upgrade policy should be used during Auto OS Upgrade. Default value is false. Auto OS Upgrade will fallback to the default policy if no policy is defined on the VMSS.
     */
    useRollingUpgradePolicy?: boolean;
}

/**
 * Specifies the configuration parameters for automatic repairs on the virtual machine scale set.
 */
export interface AutomaticRepairsPolicyResponse {
    /**
     * Specifies whether automatic repairs should be enabled on the virtual machine scale set. The default value is false.
     */
    enabled?: boolean;
    /**
     * The amount of time for which automatic repairs are suspended due to a state change on VM. The grace time starts after the state change has completed. This helps avoid premature or accidental repairs. The time duration should be specified in ISO 8601 format. The minimum allowed grace period is 10 minutes (PT10M), which is also the default value. The maximum allowed grace period is 90 minutes (PT90M).
     */
    gracePeriod?: string;
    /**
     * Type of repair action (replace, restart, reimage) that will be used for repairing unhealthy virtual machines in the scale set. Default value is replace.
     */
    repairAction?: string;
}

/**
 * Describes the properties of an virtual machine instance view for available patch summary.
 */
export interface AvailablePatchSummaryResponse {
    /**
     * The activity ID of the operation that produced this result. It is used to correlate across CRP and extension logs.
     */
    assessmentActivityId: string;
    /**
     * The number of critical or security patches that have been detected as available and not yet installed.
     */
    criticalAndSecurityPatchCount: number;
    /**
     * The errors that were encountered during execution of the operation. The details array contains the list of them.
     */
    error: ApiErrorResponse;
    /**
     * The UTC timestamp when the operation began.
     */
    lastModifiedTime: string;
    /**
     * The number of all available patches excluding critical and security.
     */
    otherPatchCount: number;
    /**
     * The overall reboot status of the VM. It will be true when partially installed patches require a reboot to complete installation but the reboot has not yet occurred.
     */
    rebootPending: boolean;
    /**
     * The UTC timestamp when the operation began.
     */
    startTime: string;
    /**
     * The overall success or failure status of the operation. It remains "InProgress" until the operation completes. At that point it will become "Unknown", "Failed", "Succeeded", or "CompletedWithWarnings."
     */
    status: string;
}

/**
 * Specifies the billing related details of a Azure Spot VM or VMSS. Minimum api-version: 2019-03-01.
 */
export interface BillingProfileResponse {
    /**
     * Specifies the maximum price you are willing to pay for a Azure Spot VM/VMSS. This price is in US Dollars. <br><br> This price will be compared with the current Azure Spot price for the VM size. Also, the prices are compared at the time of create/update of Azure Spot VM/VMSS and the operation will only succeed if  the maxPrice is greater than the current Azure Spot price. <br><br> The maxPrice will also be used for evicting a Azure Spot VM/VMSS if the current Azure Spot price goes beyond the maxPrice after creation of VM/VMSS. <br><br> Possible values are: <br><br> - Any decimal value greater than zero. Example: 0.01538 <br><br> -1 – indicates default price to be up-to on-demand. <br><br> You can set the maxPrice to -1 to indicate that the Azure Spot VM/VMSS should not be evicted for price reasons. Also, the default max price is -1 if it is not provided by you. <br><br>Minimum api-version: 2019-03-01.
     */
    maxPrice?: number;
}

/**
 * The instance view of a virtual machine boot diagnostics.
 */
export interface BootDiagnosticsInstanceViewResponse {
    /**
     * The console screenshot blob URI. **Note:** This will **not** be set if boot diagnostics is currently enabled with managed storage.
     */
    consoleScreenshotBlobUri: string;
    /**
     * The serial console log blob Uri. **Note:** This will **not** be set if boot diagnostics is currently enabled with managed storage.
     */
    serialConsoleLogBlobUri: string;
    /**
     * The boot diagnostics status information for the VM. **Note:** It will be set only if there are errors encountered in enabling boot diagnostics.
     */
    status: InstanceViewStatusResponse;
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

export interface CapacityReservationGroupInstanceViewResponse {
    /**
     * List of instance view of the capacity reservations under the capacity reservation group.
     */
    capacityReservations: CapacityReservationInstanceViewWithNameResponse[];
}

/**
 * The instance view of a capacity reservation that provides as snapshot of the runtime properties of the capacity reservation that is managed by the platform and can change outside of control plane operations.
 */
export interface CapacityReservationInstanceViewResponse {
    /**
     * The resource status information.
     */
    statuses?: InstanceViewStatusResponse[];
    /**
     * Unutilized capacity of the capacity reservation.
     */
    utilizationInfo?: CapacityReservationUtilizationResponse;
}

/**
 * The instance view of a capacity reservation that includes the name of the capacity reservation. It is used for the response to the instance view of a capacity reservation group.
 */
export interface CapacityReservationInstanceViewWithNameResponse {
    /**
     * The name of the capacity reservation.
     */
    name: string;
    /**
     * The resource status information.
     */
    statuses?: InstanceViewStatusResponse[];
    /**
     * Unutilized capacity of the capacity reservation.
     */
    utilizationInfo?: CapacityReservationUtilizationResponse;
}

/**
 * The parameters of a capacity reservation Profile.
 */
export interface CapacityReservationProfileResponse {
    /**
     * Specifies the capacity reservation group resource id that should be used for allocating the virtual machine or scaleset vm instances provided enough capacity has been reserved. Please refer to https://aka.ms/CapacityReservation for more details.
     */
    capacityReservationGroup?: SubResourceResponse;
}

/**
 * Represents the capacity reservation utilization in terms of resources allocated.
 */
export interface CapacityReservationUtilizationResponse {
    /**
     * The value provides the current capacity of the VM size which was reserved successfully and for which the customer is getting billed. Minimum api-version: 2022-08-01.
     */
    currentCapacity: number;
    /**
     * A list of all virtual machines resource ids allocated against the capacity reservation.
     */
    virtualMachinesAllocated: SubResourceReadOnlyResponse[];
}

/**
 * Describes a cloud service extension profile.
 */
export interface CloudServiceExtensionProfileResponse {
    /**
     * List of extensions for the cloud service.
     */
    extensions?: ExtensionResponse[];
}

/**
 * Extension Properties.
 */
export interface CloudServiceExtensionPropertiesResponse {
    /**
     * Explicitly specify whether platform can automatically upgrade typeHandlerVersion to higher minor versions when they become available.
     */
    autoUpgradeMinorVersion?: boolean;
    /**
     * Tag to force apply the provided public and protected settings.
     * Changing the tag value allows for re-running the extension without changing any of the public or protected settings.
     * If forceUpdateTag is not changed, updates to public or protected settings would still be applied by the handler.
     * If neither forceUpdateTag nor any of public or protected settings change, extension would flow to the role instance with the same sequence-number, and
     * it is up to handler implementation whether to re-run it or not
     */
    forceUpdateTag?: string;
    /**
     * Protected settings for the extension which are encrypted before sent to the role instance.
     */
    protectedSettings?: any;
    /**
     * Protected settings for the extension, referenced using KeyVault which are encrypted before sent to the role instance.
     */
    protectedSettingsFromKeyVault?: CloudServiceVaultAndSecretReferenceResponse;
    /**
     * The provisioning state, which only appears in the response.
     */
    provisioningState: string;
    /**
     * The name of the extension handler publisher.
     */
    publisher?: string;
    /**
     * Optional list of roles to apply this extension. If property is not specified or '*' is specified, extension is applied to all roles in the cloud service.
     */
    rolesAppliedTo?: string[];
    /**
     * Public settings for the extension. For JSON extensions, this is the JSON settings for the extension. For XML Extension (like RDP), this is the XML setting for the extension.
     */
    settings?: any;
    /**
     * Specifies the type of the extension.
     */
    type?: string;
    /**
     * Specifies the version of the extension. Specifies the version of the extension. If this element is not specified or an asterisk (*) is used as the value, the latest version of the extension is used. If the value is specified with a major version number and an asterisk as the minor version number (X.), the latest minor version of the specified major version is selected. If a major version number and a minor version number are specified (X.Y), the specific extension version is selected. If a version is specified, an auto-upgrade is performed on the role instance.
     */
    typeHandlerVersion?: string;
}

/**
 * Network Profile for the cloud service.
 */
export interface CloudServiceNetworkProfileResponse {
    /**
     * List of Load balancer configurations. Cloud service can have up to two load balancer configurations, corresponding to a Public Load Balancer and an Internal Load Balancer.
     */
    loadBalancerConfigurations?: LoadBalancerConfigurationResponse[];
    /**
     * Slot type for the cloud service.
     * Possible values are <br /><br />**Production**<br /><br />**Staging**<br /><br />
     * If not specified, the default value is Production.
     */
    slotType?: string;
    /**
     * The id reference of the cloud service containing the target IP with which the subject cloud service can perform a swap. This property cannot be updated once it is set. The swappable cloud service referred by this id must be present otherwise an error will be thrown.
     */
    swappableCloudService?: SubResourceResponse;
}

/**
 * Describes the OS profile for the cloud service.
 */
export interface CloudServiceOsProfileResponse {
    /**
     * Specifies set of certificates that should be installed onto the role instances.
     */
    secrets?: CloudServiceVaultSecretGroupResponse[];
}

/**
 * Cloud service properties
 */
export interface CloudServicePropertiesResponse {
    /**
     * (Optional) Indicates whether the role sku properties (roleProfile.roles.sku) specified in the model/template should override the role instance count and vm size specified in the .cscfg and .csdef respectively.
     * The default value is `false`.
     */
    allowModelOverride?: boolean;
    /**
     * Specifies the XML service configuration (.cscfg) for the cloud service.
     */
    configuration?: string;
    /**
     * Specifies a URL that refers to the location of the service configuration in the Blob service. The service package URL  can be Shared Access Signature (SAS) URI from any storage account.
     * This is a write-only property and is not returned in GET calls.
     */
    configurationUrl?: string;
    /**
     * Describes a cloud service extension profile.
     */
    extensionProfile?: CloudServiceExtensionProfileResponse;
    /**
     * Network Profile for the cloud service.
     */
    networkProfile?: CloudServiceNetworkProfileResponse;
    /**
     * Describes the OS profile for the cloud service.
     */
    osProfile?: CloudServiceOsProfileResponse;
    /**
     * Specifies a URL that refers to the location of the service package in the Blob service. The service package URL can be Shared Access Signature (SAS) URI from any storage account.
     * This is a write-only property and is not returned in GET calls.
     */
    packageUrl?: string;
    /**
     * The provisioning state, which only appears in the response.
     */
    provisioningState: string;
    /**
     * Describes the role profile for the cloud service.
     */
    roleProfile?: CloudServiceRoleProfileResponse;
    /**
     * (Optional) Indicates whether to start the cloud service immediately after it is created. The default value is `true`.
     * If false, the service model is still deployed, but the code is not run immediately. Instead, the service is PoweredOff until you call Start, at which time the service will be started. A deployed service still incurs charges, even if it is poweredoff.
     */
    startCloudService?: boolean;
    /**
     * The unique identifier for the cloud service.
     */
    uniqueId: string;
    /**
     * Update mode for the cloud service. Role instances are allocated to update domains when the service is deployed. Updates can be initiated manually in each update domain or initiated automatically in all update domains.
     * Possible Values are <br /><br />**Auto**<br /><br />**Manual** <br /><br />**Simultaneous**<br /><br />
     * If not specified, the default value is Auto. If set to Manual, PUT UpdateDomain must be called to apply the update. If set to Auto, the update is automatically applied to each update domain in sequence.
     */
    upgradeMode?: string;
}

/**
 * Describes the role properties.
 */
export interface CloudServiceRoleProfilePropertiesResponse {
    /**
     * Resource name.
     */
    name?: string;
    /**
     * Describes the cloud service role sku.
     */
    sku?: CloudServiceRoleSkuResponse;
}

/**
 * Describes the role profile for the cloud service.
 */
export interface CloudServiceRoleProfileResponse {
    /**
     * List of roles for the cloud service.
     */
    roles?: CloudServiceRoleProfilePropertiesResponse[];
}

/**
 * Describes the cloud service role sku.
 */
export interface CloudServiceRoleSkuResponse {
    /**
     * Specifies the number of role instances in the cloud service.
     */
    capacity?: number;
    /**
     * The sku name. NOTE: If the new SKU is not supported on the hardware the cloud service is currently on, you need to delete and recreate the cloud service or move back to the old sku.
     */
    name?: string;
    /**
     * Specifies the tier of the cloud service. Possible Values are <br /><br /> **Standard** <br /><br /> **Basic**
     */
    tier?: string;
}

/**
 * Protected settings for the extension, referenced using KeyVault which are encrypted before sent to the role instance.
 */
export interface CloudServiceVaultAndSecretReferenceResponse {
    /**
     * Secret URL which contains the protected settings of the extension
     */
    secretUrl?: string;
    /**
     * The ARM Resource ID of the Key Vault
     */
    sourceVault?: SubResourceResponse;
}

/**
 * Describes a single certificate reference in a Key Vault, and where the certificate should reside on the role instance.
 */
export interface CloudServiceVaultCertificateResponse {
    /**
     * This is the URL of a certificate that has been uploaded to Key Vault as a secret.
     */
    certificateUrl?: string;
}

/**
 * Describes a set of certificates which are all in the same Key Vault.
 */
export interface CloudServiceVaultSecretGroupResponse {
    /**
     * The relative URL of the Key Vault containing all of the certificates in VaultCertificates.
     */
    sourceVault?: SubResourceResponse;
    /**
     * The list of key vault references in SourceVault which contain certificates.
     */
    vaultCertificates?: CloudServiceVaultCertificateResponse[];
}

/**
 * Information of community gallery if current gallery is shared to community
 */
export interface CommunityGalleryInfoResponse {
    /**
     * Contains info about whether community gallery sharing is enabled.
     */
    communityGalleryEnabled: boolean;
    /**
     * End-user license agreement for community gallery image.
     */
    eula?: string;
    /**
     * The prefix of the gallery name that will be displayed publicly. Visible to all users.
     */
    publicNamePrefix?: string;
    /**
     * Community gallery public name list.
     */
    publicNames: string[];
    /**
     * Community gallery publisher support email. The email address of the publisher. Visible to all users.
     */
    publisherContact?: string;
    /**
     * The link to the publisher website. Visible to all users.
     */
    publisherUri?: string;
}

/**
 * Indicates the error details if the background copy of a resource created via the CopyStart operation fails.
 */
export interface CopyCompletionErrorResponse {
    /**
     * Indicates the error code if the background copy of a resource created via the CopyStart operation fails.
     */
    errorCode: string;
    /**
     * Indicates the error message if the background copy of a resource created via the CopyStart operation fails.
     */
    errorMessage: string;
}

/**
 * Data used when creating a disk.
 */
export interface CreationDataResponse {
    /**
     * This enumerates the possible sources of a disk's creation.
     */
    createOption: string;
    /**
     * Required if creating from a Gallery Image. The id/sharedGalleryImageId/communityGalleryImageId of the ImageDiskReference will be the ARM id of the shared galley image version from which to create a disk.
     */
    galleryImageReference?: ImageDiskReferenceResponse;
    /**
     * Disk source information for PIR or user images.
     */
    imageReference?: ImageDiskReferenceResponse;
    /**
     * Logical sector size in bytes for Ultra disks. Supported values are 512 ad 4096. 4096 is the default.
     */
    logicalSectorSize?: number;
    /**
     * Set this flag to true to get a boost on the performance target of the disk deployed, see here on the respective performance target. This flag can only be set on disk creation time and cannot be disabled after enabled.
     */
    performancePlus?: boolean;
    /**
     * If createOption is ImportSecure, this is the URI of a blob to be imported into VM guest state.
     */
    securityDataUri?: string;
    /**
     * If createOption is Copy, this is the ARM id of the source snapshot or disk.
     */
    sourceResourceId?: string;
    /**
     * If this field is set, this is the unique id identifying the source of this resource.
     */
    sourceUniqueId: string;
    /**
     * If createOption is Import, this is the URI of a blob to be imported into a managed disk.
     */
    sourceUri?: string;
    /**
     * Required if createOption is Import. The Azure Resource Manager identifier of the storage account containing the blob to import as a disk.
     */
    storageAccountId?: string;
    /**
     * If createOption is Upload, this is the size of the contents of the upload including the VHD footer. This value should be between 20972032 (20 MiB + 512 bytes for the VHD footer) and 35183298347520 bytes (32 TiB + 512 bytes for the VHD footer).
     */
    uploadSizeBytes?: number;
}

/**
 * Contains encryption settings for a data disk image.
 */
export interface DataDiskImageEncryptionResponse {
    /**
     * A relative URI containing the resource ID of the disk encryption set.
     */
    diskEncryptionSetId?: string;
    /**
     * This property specifies the logical unit number of the data disk. This value is used to identify data disks within the Virtual Machine and therefore must be unique for each data disk attached to the Virtual Machine.
     */
    lun: number;
}

/**
 * Describes a data disk.
 */
export interface DataDiskResponse {
    /**
     * Specifies the caching requirements. Possible values are: **None,** **ReadOnly,** **ReadWrite.** The defaulting behavior is: **None for Standard storage. ReadOnly for Premium storage.**
     */
    caching?: string;
    /**
     * Specifies how the virtual machine should be created. Possible values are: **Attach.** This value is used when you are using a specialized disk to create the virtual machine. **FromImage.** This value is used when you are using an image to create the virtual machine. If you are using a platform image, you should also use the imageReference element described above. If you are using a marketplace image, you should also use the plan element previously described.
     */
    createOption: string;
    /**
     * Specifies whether data disk should be deleted or detached upon VM deletion. Possible values are: **Delete.** If this value is used, the data disk is deleted when VM is deleted. **Detach.** If this value is used, the data disk is retained after VM is deleted. The default value is set to **Detach**.
     */
    deleteOption?: string;
    /**
     * Specifies the detach behavior to be used while detaching a disk or which is already in the process of detachment from the virtual machine. Supported values: **ForceDetach.** detachOption: **ForceDetach** is applicable only for managed data disks. If a previous detachment attempt of the data disk did not complete due to an unexpected failure from the virtual machine and the disk is still not released then use force-detach as a last resort option to detach the disk forcibly from the VM. All writes might not have been flushed when using this detach behavior. **This feature is still in preview** mode and is not supported for VirtualMachineScaleSet. To force-detach a data disk update toBeDetached to 'true' along with setting detachOption: 'ForceDetach'.
     */
    detachOption?: string;
    /**
     * Specifies the Read-Write IOPS for the managed disk when StorageAccountType is UltraSSD_LRS. Returned only for VirtualMachine ScaleSet VM disks. Can be updated only via updates to the VirtualMachine Scale Set.
     */
    diskIOPSReadWrite: number;
    /**
     * Specifies the bandwidth in MB per second for the managed disk when StorageAccountType is UltraSSD_LRS. Returned only for VirtualMachine ScaleSet VM disks. Can be updated only via updates to the VirtualMachine Scale Set.
     */
    diskMBpsReadWrite: number;
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
     * Specifies whether the data disk is in process of detachment from the VirtualMachine/VirtualMachineScaleset
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
 * Represents the dedicated host unutilized capacity in terms of a specific VM size.
 */
export interface DedicatedHostAllocatableVMResponse {
    /**
     * Maximum number of VMs of size vmSize that can fit in the dedicated host's remaining capacity.
     */
    count?: number;
    /**
     * VM size in terms of which the unutilized capacity is represented.
     */
    vmSize?: string;
}

/**
 * Dedicated host unutilized capacity.
 */
export interface DedicatedHostAvailableCapacityResponse {
    /**
     * The unutilized capacity of the dedicated host represented in terms of each VM size that is allowed to be deployed to the dedicated host.
     */
    allocatableVMs?: DedicatedHostAllocatableVMResponse[];
}

export interface DedicatedHostGroupInstanceViewResponse {
    /**
     * List of instance view of the dedicated hosts under the dedicated host group.
     */
    hosts?: DedicatedHostInstanceViewWithNameResponse[];
}

/**
 * Enables or disables a capability on the dedicated host group. Minimum api-version: 2022-03-01.
 */
export interface DedicatedHostGroupPropertiesResponseAdditionalCapabilities {
    /**
     * The flag that enables or disables a capability to have UltraSSD Enabled Virtual Machines on Dedicated Hosts of the Dedicated Host Group. For the Virtual Machines to be UltraSSD Enabled, UltraSSDEnabled flag for the resource needs to be set true as well. The value is defaulted to 'false' when not provided. Please refer to https://docs.microsoft.com/en-us/azure/virtual-machines/disks-enable-ultra-ssd for more details on Ultra SSD feature. **Note:** The ultraSSDEnabled setting can only be enabled for Host Groups that are created as zonal. Minimum api-version: 2022-03-01.
     */
    ultraSSDEnabled?: boolean;
}

/**
 * The instance view of a dedicated host.
 */
export interface DedicatedHostInstanceViewResponse {
    /**
     * Specifies the unique id of the dedicated physical machine on which the dedicated host resides.
     */
    assetId: string;
    /**
     * Unutilized capacity of the dedicated host.
     */
    availableCapacity?: DedicatedHostAvailableCapacityResponse;
    /**
     * The resource status information.
     */
    statuses?: InstanceViewStatusResponse[];
}

/**
 * The instance view of a dedicated host that includes the name of the dedicated host. It is used for the response to the instance view of a dedicated host group.
 */
export interface DedicatedHostInstanceViewWithNameResponse {
    /**
     * Specifies the unique id of the dedicated physical machine on which the dedicated host resides.
     */
    assetId: string;
    /**
     * Unutilized capacity of the dedicated host.
     */
    availableCapacity?: DedicatedHostAvailableCapacityResponse;
    /**
     * The name of the dedicated host.
     */
    name: string;
    /**
     * The resource status information.
     */
    statuses?: InstanceViewStatusResponse[];
}

/**
 * Specifies the boot diagnostic settings state. Minimum api-version: 2015-06-15.
 */
export interface DiagnosticsProfileResponse {
    /**
     * Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status. **NOTE**: If storageUri is being specified then ensure that the storage account is in the same region and subscription as the VM. You can easily view the output of your console log. Azure also enables you to see a screenshot of the VM from the hypervisor.
     */
    bootDiagnostics?: BootDiagnosticsResponse;
}

/**
 * Describes the parameters of ephemeral disk settings that can be specified for operating system disk. **Note:** The ephemeral disk settings can only be specified for managed disk.
 */
export interface DiffDiskSettingsResponse {
    /**
     * Specifies the ephemeral disk settings for operating system disk.
     */
    option?: string;
    /**
     * Specifies the ephemeral disk placement for operating system disk. Possible values are: **CacheDisk,** **ResourceDisk.** The defaulting behavior is: **CacheDisk** if one is configured for the VM size otherwise **ResourceDisk** is used. Refer to the VM size documentation for Windows VM at https://docs.microsoft.com/azure/virtual-machines/windows/sizes and Linux VM at https://docs.microsoft.com/azure/virtual-machines/linux/sizes to check which VM sizes exposes a cache disk.
     */
    placement?: string;
}

/**
 * Describes the disallowed disk types.
 */
export interface DisallowedResponse {
    /**
     * A list of disk types.
     */
    diskTypes?: string[];
}

/**
 * Describes the parameter of customer managed disk encryption set resource id that can be specified for disk. **Note:** The disk encryption set resource id can only be specified for managed disk. Please refer https://aka.ms/mdssewithcmkoverview for more details.
 */
export interface DiskEncryptionSetParametersResponse {
    /**
     * Resource Id
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
 * The instance view of the disk.
 */
export interface DiskInstanceViewResponse {
    /**
     * Specifies the encryption settings for the OS Disk. <br><br> Minimum api-version: 2015-06-15
     */
    encryptionSettings?: DiskEncryptionSettingsResponse[];
    /**
     * The disk name.
     */
    name?: string;
    /**
     * The resource status information.
     */
    statuses?: InstanceViewStatusResponse[];
}

/**
 * Disk Restore Point details.
 */
export interface DiskRestorePointAttributesResponse {
    /**
     * Encryption at rest settings for disk restore point. It is an optional property that can be specified in the input while creating a restore point.
     */
    encryption?: RestorePointEncryptionResponse;
    /**
     * Resource Id
     */
    id: string;
    /**
     * Resource Id of the source disk restore point.
     */
    sourceDiskRestorePoint?: ApiEntityReferenceResponse;
}

/**
 * The instance view of a disk restore point.
 */
export interface DiskRestorePointInstanceViewResponse {
    /**
     * Disk restore point Id.
     */
    id?: string;
    /**
     * The disk restore point replication status information.
     */
    replicationStatus?: DiskRestorePointReplicationStatusResponse;
}

/**
 * The instance view of a disk restore point.
 */
export interface DiskRestorePointReplicationStatusResponse {
    /**
     * Replication completion percentage.
     */
    completionPercent?: number;
    /**
     * The resource status information.
     */
    status?: InstanceViewStatusResponse;
}

/**
 * Contains the security related information for the resource.
 */
export interface DiskSecurityProfileResponse {
    /**
     * ResourceId of the disk encryption set associated to Confidential VM supported disk encrypted with customer managed key
     */
    secureVMDiskEncryptionSetId?: string;
    /**
     * Specifies the SecurityType of the VM. Applicable for OS disks only.
     */
    securityType?: string;
}

/**
 * The disks sku name. Can be Standard_LRS, Premium_LRS, StandardSSD_LRS, UltraSSD_LRS, Premium_ZRS, StandardSSD_ZRS, or PremiumV2_LRS.
 */
export interface DiskSkuResponse {
    /**
     * The sku name.
     */
    name?: string;
    /**
     * The sku tier.
     */
    tier: string;
}

/**
 * Optional. Allows users to provide customer managed keys for encrypting the OS and data disks in the gallery artifact.
 */
export interface EncryptionImagesResponse {
    /**
     * A list of encryption specifications for data disk images.
     */
    dataDiskImages?: DataDiskImageEncryptionResponse[];
    /**
     * Contains encryption settings for an OS disk image.
     */
    osDiskImage?: OSDiskImageEncryptionResponse;
}

/**
 * Encryption at rest settings for disk or snapshot
 */
export interface EncryptionResponse {
    /**
     * ResourceId of the disk encryption set to use for enabling encryption at rest.
     */
    diskEncryptionSetId?: string;
    /**
     * The type of key used to encrypt the data of the disk.
     */
    type?: string;
}

/**
 * The managed identity for the disk encryption set. It should be given permission on the key vault before it can be used to encrypt disks.
 */
export interface EncryptionSetIdentityResponse {
    /**
     * The object id of the Managed Identity Resource. This will be sent to the RP from ARM via the x-ms-identity-principal-id header in the PUT request if the resource has a systemAssigned(implicit) identity
     */
    principalId: string;
    /**
     * The tenant id of the Managed Identity Resource. This will be sent to the RP from ARM via the x-ms-client-tenant-id header in the PUT request if the resource has a systemAssigned(implicit) identity
     */
    tenantId: string;
    /**
     * The type of Managed Identity used by the DiskEncryptionSet. Only SystemAssigned is supported for new creations. Disk Encryption Sets can be updated with Identity type None during migration of subscription to a new Azure Active Directory tenant; it will cause the encrypted resources to lose access to the keys.
     */
    type?: string;
    /**
     * The list of user identities associated with the disk encryption set. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
     */
    userAssignedIdentities?: {[key: string]: UserAssignedIdentitiesResponseUserAssignedIdentities};
}

/**
 * Encryption settings for disk or snapshot
 */
export interface EncryptionSettingsCollectionResponse {
    /**
     * Set this flag to true and provide DiskEncryptionKey and optional KeyEncryptionKey to enable encryption. Set this flag to false and remove DiskEncryptionKey and KeyEncryptionKey to disable encryption. If EncryptionSettings is null in the request object, the existing settings remain unchanged.
     */
    enabled: boolean;
    /**
     * A collection of encryption settings, one for each disk volume.
     */
    encryptionSettings?: EncryptionSettingsElementResponse[];
    /**
     * Describes what type of encryption is used for the disks. Once this field is set, it cannot be overwritten. '1.0' corresponds to Azure Disk Encryption with AAD app.'1.1' corresponds to Azure Disk Encryption.
     */
    encryptionSettingsVersion?: string;
}

/**
 * Encryption settings for one disk volume.
 */
export interface EncryptionSettingsElementResponse {
    /**
     * Key Vault Secret Url and vault id of the disk encryption key
     */
    diskEncryptionKey?: KeyVaultAndSecretReferenceResponse;
    /**
     * Key Vault Key Url and vault id of the key encryption key. KeyEncryptionKey is optional and when provided is used to unwrap the disk encryption key.
     */
    keyEncryptionKey?: KeyVaultAndKeyReferenceResponse;
}

/**
 * The complex type of the extended location.
 */
export interface ExtendedLocationResponse {
    /**
     * The name of the extended location.
     */
    name?: string;
    /**
     * The type of the extended location.
     */
    type?: string;
}

/**
 * Describes a cloud service Extension.
 */
export interface ExtensionResponse {
    /**
     * The name of the extension.
     */
    name?: string;
    /**
     * Extension Properties.
     */
    properties?: CloudServiceExtensionPropertiesResponse;
}

/**
 * The definition of a parameter that can be passed to a custom action of a Gallery Application Version.
 */
export interface GalleryApplicationCustomActionParameterResponse {
    /**
     * The default value of the parameter.  Only applies to string types
     */
    defaultValue?: string;
    /**
     * A description to help users understand what this parameter means
     */
    description?: string;
    /**
     * The name of the custom action.  Must be unique within the Gallery Application Version.
     */
    name: string;
    /**
     * Indicates whether this parameter must be passed when running the custom action.
     */
    required?: boolean;
    /**
     * Specifies the type of the custom action parameter. Possible values are: String, ConfigurationDataBlob or LogOutputBlob
     */
    type?: string;
}

/**
 * A custom action that can be performed with a Gallery Application Version.
 */
export interface GalleryApplicationCustomActionResponse {
    /**
     * Description to help the users understand what this custom action does.
     */
    description?: string;
    /**
     * The name of the custom action.  Must be unique within the Gallery Application Version.
     */
    name: string;
    /**
     * The parameters that this custom action uses
     */
    parameters?: GalleryApplicationCustomActionParameterResponse[];
    /**
     * The script to run when executing this custom action.
     */
    script: string;
}

/**
 * The publishing profile of a gallery image version.
 */
export interface GalleryApplicationVersionPublishingProfileResponse {
    /**
     * Optional. Additional settings to pass to the vm-application-manager extension. For advanced use only.
     */
    advancedSettings?: {[key: string]: string};
    /**
     * A list of custom actions that can be performed with this Gallery Application Version.
     */
    customActions?: GalleryApplicationCustomActionResponse[];
    /**
     * Optional. Whether or not this application reports health.
     */
    enableHealthCheck?: boolean;
    /**
     * The end of life date of the gallery image version. This property can be used for decommissioning purposes. This property is updatable.
     */
    endOfLifeDate?: string;
    /**
     * If set to true, Virtual Machines deployed from the latest version of the Image Definition won't use this Image Version.
     */
    excludeFromLatest?: boolean;
    manageActions?: UserArtifactManageResponse;
    /**
     * The timestamp for when the gallery image version is published.
     */
    publishedDate: string;
    /**
     * The number of replicas of the Image Version to be created per region. This property would take effect for a region when regionalReplicaCount is not specified. This property is updatable.
     */
    replicaCount?: number;
    /**
     * Optional parameter which specifies the mode to be used for replication. This property is not updatable.
     */
    replicationMode?: string;
    /**
     * Additional settings for the VM app that contains the target package and config file name when it is deployed to target VM or VM scale set.
     */
    settings?: UserArtifactSettingsResponse;
    /**
     * The source image from which the Image Version is going to be created.
     */
    source: UserArtifactSourceResponse;
    /**
     * Specifies the storage account type to be used to store the image. This property is not updatable.
     */
    storageAccountType?: string;
    /**
     * The target extended locations where the Image Version is going to be replicated to. This property is updatable.
     */
    targetExtendedLocations?: GalleryTargetExtendedLocationResponse[];
    /**
     * The target regions where the Image Version is going to be replicated to. This property is updatable.
     */
    targetRegions?: TargetRegionResponse[];
}

/**
 * The safety profile of the Gallery Application Version.
 */
export interface GalleryApplicationVersionSafetyProfileResponse {
    /**
     * Indicates whether or not removing this Gallery Image Version from replicated regions is allowed.
     */
    allowDeletionOfReplicatedLocations?: boolean;
}

/**
 * The source of the gallery artifact version.
 */
export interface GalleryArtifactVersionFullSourceResponse {
    /**
     * The resource Id of the source Community Gallery Image.  Only required when using Community Gallery Image as a source.
     */
    communityGalleryImageId?: string;
    /**
     * The id of the gallery artifact version source. Can specify a disk uri, snapshot uri, user image or storage account resource.
     */
    id?: string;
}

/**
 * This is the data disk image.
 */
export interface GalleryDataDiskImageResponse {
    /**
     * The host caching of the disk. Valid values are 'None', 'ReadOnly', and 'ReadWrite'
     */
    hostCaching?: string;
    /**
     * This property specifies the logical unit number of the data disk. This value is used to identify data disks within the Virtual Machine and therefore must be unique for each data disk attached to the Virtual Machine.
     */
    lun: number;
    /**
     * This property indicates the size of the VHD to be created.
     */
    sizeInGB: number;
    /**
     * The source for the disk image.
     */
    source?: GalleryDiskImageSourceResponse;
}

/**
 * The source for the disk image.
 */
export interface GalleryDiskImageSourceResponse {
    /**
     * The id of the gallery artifact version source. Can specify a disk uri, snapshot uri, user image or storage account resource.
     */
    id?: string;
    /**
     * The Storage Account Id that contains the vhd blob being used as a source for this artifact version.
     */
    storageAccountId?: string;
    /**
     * The uri of the gallery artifact version source. Currently used to specify vhd/blob source.
     */
    uri?: string;
}

/**
 * The name of the extended location.
 */
export interface GalleryExtendedLocationResponse {
    name?: string;
    /**
     * It is type of the extended location.
     */
    type?: string;
}

/**
 * Describes the gallery unique name.
 */
export interface GalleryIdentifierResponse {
    /**
     * The unique name of the Shared Image Gallery. This name is generated automatically by Azure.
     */
    uniqueName: string;
}

/**
 * A feature for gallery image.
 */
export interface GalleryImageFeatureResponse {
    /**
     * The name of the gallery image feature.
     */
    name?: string;
    /**
     * The value of the gallery image feature.
     */
    value?: string;
}

/**
 * This is the gallery image definition identifier.
 */
export interface GalleryImageIdentifierResponse {
    /**
     * The name of the gallery image definition offer.
     */
    offer: string;
    /**
     * The name of the gallery image definition publisher.
     */
    publisher: string;
    /**
     * The name of the gallery image definition SKU.
     */
    sku: string;
}

/**
 * The publishing profile of a gallery image Version.
 */
export interface GalleryImageVersionPublishingProfileResponse {
    /**
     * The end of life date of the gallery image version. This property can be used for decommissioning purposes. This property is updatable.
     */
    endOfLifeDate?: string;
    /**
     * If set to true, Virtual Machines deployed from the latest version of the Image Definition won't use this Image Version.
     */
    excludeFromLatest?: boolean;
    /**
     * The timestamp for when the gallery image version is published.
     */
    publishedDate: string;
    /**
     * The number of replicas of the Image Version to be created per region. This property would take effect for a region when regionalReplicaCount is not specified. This property is updatable.
     */
    replicaCount?: number;
    /**
     * Optional parameter which specifies the mode to be used for replication. This property is not updatable.
     */
    replicationMode?: string;
    /**
     * Specifies the storage account type to be used to store the image. This property is not updatable.
     */
    storageAccountType?: string;
    /**
     * The target extended locations where the Image Version is going to be replicated to. This property is updatable.
     */
    targetExtendedLocations?: GalleryTargetExtendedLocationResponse[];
    /**
     * The target regions where the Image Version is going to be replicated to. This property is updatable.
     */
    targetRegions?: TargetRegionResponse[];
}

/**
 * This is the safety profile of the Gallery Image Version.
 */
export interface GalleryImageVersionSafetyProfileResponse {
    /**
     * Indicates whether or not removing this Gallery Image Version from replicated regions is allowed.
     */
    allowDeletionOfReplicatedLocations?: boolean;
    /**
     * A list of Policy Violations that have been reported for this Gallery Image Version.
     */
    policyViolations: PolicyViolationResponse[];
    /**
     * Indicates whether this image has been reported as violating Microsoft's policies.
     */
    reportedForPolicyViolation: boolean;
}

/**
 * This is the storage profile of a Gallery Image Version.
 */
export interface GalleryImageVersionStorageProfileResponse {
    /**
     * A list of data disk images.
     */
    dataDiskImages?: GalleryDataDiskImageResponse[];
    /**
     * This is the OS disk image.
     */
    osDiskImage?: GalleryOSDiskImageResponse;
    /**
     * The source of the gallery artifact version.
     */
    source?: GalleryArtifactVersionFullSourceResponse;
}

/**
 * This is the OS disk image.
 */
export interface GalleryOSDiskImageResponse {
    /**
     * The host caching of the disk. Valid values are 'None', 'ReadOnly', and 'ReadWrite'
     */
    hostCaching?: string;
    /**
     * This property indicates the size of the VHD to be created.
     */
    sizeInGB: number;
    /**
     * The source for the disk image.
     */
    source?: GalleryDiskImageSourceResponse;
}

export interface GalleryTargetExtendedLocationResponse {
    /**
     * Optional. Allows users to provide customer managed keys for encrypting the OS and data disks in the gallery artifact.
     */
    encryption?: EncryptionImagesResponse;
    /**
     * The name of the extended location.
     */
    extendedLocation?: GalleryExtendedLocationResponse;
    /**
     * The number of replicas of the Image Version to be created per extended location. This property is updatable.
     */
    extendedLocationReplicaCount?: number;
    /**
     * The name of the region.
     */
    name?: string;
    /**
     * Specifies the storage account type to be used to store the image. This property is not updatable.
     */
    storageAccountType?: string;
}

/**
 * Specifies the hardware settings for the virtual machine.
 */
export interface HardwareProfileResponse {
    /**
     * Specifies the size of the virtual machine. The enum data type is currently deprecated and will be removed by December 23rd 2023. The recommended way to get the list of available sizes is using these APIs: [List all available virtual machine sizes in an availability set](https://docs.microsoft.com/rest/api/compute/availabilitysets/listavailablesizes), [List all available virtual machine sizes in a region]( https://docs.microsoft.com/rest/api/compute/resourceskus/list), [List all available virtual machine sizes for resizing](https://docs.microsoft.com/rest/api/compute/virtualmachines/listavailablesizes). For more information about virtual machine sizes, see [Sizes for virtual machines](https://docs.microsoft.com/azure/virtual-machines/sizes). The available VM sizes depend on region and availability set.
     */
    vmSize?: string;
    /**
     * Specifies the properties for customizing the size of the virtual machine. Minimum api-version: 2021-07-01. This feature is still in preview mode and is not supported for VirtualMachineScaleSet. Please follow the instructions in [VM Customization](https://aka.ms/vmcustomization) for more details.
     */
    vmSizeProperties?: VMSizePropertiesResponse;
}

/**
 * Describes a data disk.
 */
export interface ImageDataDiskResponse {
    /**
     * The Virtual Hard Disk.
     */
    blobUri?: string;
    /**
     * Specifies the caching requirements. Possible values are: **None,** **ReadOnly,** **ReadWrite.** The default values are: **None for Standard storage. ReadOnly for Premium storage.**
     */
    caching?: string;
    /**
     * Specifies the customer managed disk encryption set resource id for the managed image disk.
     */
    diskEncryptionSet?: DiskEncryptionSetParametersResponse;
    /**
     * Specifies the size of empty data disks in gigabytes. This element can be used to overwrite the name of the disk in a virtual machine image. This value cannot be larger than 1023 GB.
     */
    diskSizeGB?: number;
    /**
     * Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
     */
    lun: number;
    /**
     * The managedDisk.
     */
    managedDisk?: SubResourceResponse;
    /**
     * The snapshot.
     */
    snapshot?: SubResourceResponse;
    /**
     * Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks, it cannot be used with OS Disk.
     */
    storageAccountType?: string;
}

/**
 * The source image used for creating the disk.
 */
export interface ImageDiskReferenceResponse {
    /**
     * A relative uri containing a community Azure Compute Gallery image reference.
     */
    communityGalleryImageId?: string;
    /**
     * A relative uri containing either a Platform Image Repository, user image, or Azure Compute Gallery image reference.
     */
    id?: string;
    /**
     * If the disk is created from an image's data disk, this is an index that indicates which of the data disks in the image to use. For OS disks, this field is null.
     */
    lun?: number;
    /**
     * A relative uri containing a direct shared Azure Compute Gallery image reference.
     */
    sharedGalleryImageId?: string;
}

/**
 * Describes an Operating System disk.
 */
export interface ImageOSDiskResponse {
    /**
     * The Virtual Hard Disk.
     */
    blobUri?: string;
    /**
     * Specifies the caching requirements. Possible values are: **None,** **ReadOnly,** **ReadWrite.** The default values are: **None for Standard storage. ReadOnly for Premium storage.**
     */
    caching?: string;
    /**
     * Specifies the customer managed disk encryption set resource id for the managed image disk.
     */
    diskEncryptionSet?: DiskEncryptionSetParametersResponse;
    /**
     * Specifies the size of empty data disks in gigabytes. This element can be used to overwrite the name of the disk in a virtual machine image. This value cannot be larger than 1023 GB.
     */
    diskSizeGB?: number;
    /**
     * The managedDisk.
     */
    managedDisk?: SubResourceResponse;
    /**
     * The OS State. For managed images, use Generalized.
     */
    osState: string;
    /**
     * This property allows you to specify the type of the OS that is included in the disk if creating a VM from a custom image. Possible values are: **Windows,** **Linux.**
     */
    osType: string;
    /**
     * The snapshot.
     */
    snapshot?: SubResourceResponse;
    /**
     * Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks, it cannot be used with OS Disk.
     */
    storageAccountType?: string;
}

/**
 * Describes the gallery image definition purchase plan. This is used by marketplace images.
 */
export interface ImagePurchasePlanResponse {
    /**
     * The plan ID.
     */
    name?: string;
    /**
     * The product ID.
     */
    product?: string;
    /**
     * The publisher ID.
     */
    publisher?: string;
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
     * Specifies in decimal numbers, the version of platform image or marketplace image used to create the virtual machine. This readonly field differs from 'version', only if the value specified in 'version' field is 'latest'.
     */
    exactVersion: string;
    /**
     * Resource Id
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
 * Describes a storage profile.
 */
export interface ImageStorageProfileResponse {
    /**
     * Specifies the parameters that are used to add a data disk to a virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/managed-disks-overview).
     */
    dataDisks?: ImageDataDiskResponse[];
    /**
     * Specifies information about the operating system disk used by the virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/managed-disks-overview).
     */
    osDisk?: ImageOSDiskResponse;
    /**
     * Specifies whether an image is zone resilient or not. Default is false. Zone resilient images can be created only in regions that provide Zone Redundant Storage (ZRS).
     */
    zoneResilient?: boolean;
}

/**
 * Inner error details.
 */
export interface InnerErrorResponse {
    /**
     * The internal error message or exception dump.
     */
    errordetail?: string;
    /**
     * The exception type.
     */
    exceptiontype?: string;
}

/**
 * Instance view status.
 */
export interface InstanceViewStatusResponse {
    /**
     * The status code.
     */
    code?: string;
    /**
     * The short localizable label for the status.
     */
    displayStatus?: string;
    /**
     * The level code.
     */
    level?: string;
    /**
     * The detailed status message, including for alerts and error messages.
     */
    message?: string;
    /**
     * The time of the status.
     */
    time?: string;
}

/**
 * Key Vault Key Url to be used for server side encryption of Managed Disks and Snapshots
 */
export interface KeyForDiskEncryptionSetResponse {
    /**
     * Fully versioned Key Url pointing to a key in KeyVault. Version segment of the Url is required regardless of rotationToLatestKeyVersionEnabled value.
     */
    keyUrl: string;
    /**
     * Resource id of the KeyVault containing the key or secret. This property is optional and cannot be used if the KeyVault subscription is not the same as the Disk Encryption Set subscription.
     */
    sourceVault?: SourceVaultResponse;
}

/**
 * Key Vault Key Url and vault id of KeK, KeK is optional and when provided is used to unwrap the encryptionKey
 */
export interface KeyVaultAndKeyReferenceResponse {
    /**
     * Url pointing to a key or secret in KeyVault
     */
    keyUrl: string;
    /**
     * Resource id of the KeyVault containing the key or secret
     */
    sourceVault: SourceVaultResponse;
}

/**
 * Key Vault Secret Url and vault id of the encryption key 
 */
export interface KeyVaultAndSecretReferenceResponse {
    /**
     * Url pointing to a key or secret in KeyVault
     */
    secretUrl: string;
    /**
     * Resource id of the KeyVault containing the key or secret
     */
    sourceVault: SourceVaultResponse;
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
 * Describes the properties of the last installed patch summary.
 */
export interface LastPatchInstallationSummaryResponse {
    /**
     * The errors that were encountered during execution of the operation. The details array contains the list of them.
     */
    error: ApiErrorResponse;
    /**
     * The number of all available patches but excluded explicitly by a customer-specified exclusion list match.
     */
    excludedPatchCount: number;
    /**
     * The count of patches that failed installation.
     */
    failedPatchCount: number;
    /**
     * The activity ID of the operation that produced this result. It is used to correlate across CRP and extension logs.
     */
    installationActivityId: string;
    /**
     * The count of patches that successfully installed.
     */
    installedPatchCount: number;
    /**
     * The UTC timestamp when the operation began.
     */
    lastModifiedTime: string;
    /**
     * Describes whether the operation ran out of time before it completed all its intended actions
     */
    maintenanceWindowExceeded: boolean;
    /**
     * The number of all available patches but not going to be installed because it didn't match a classification or inclusion list entry.
     */
    notSelectedPatchCount: number;
    /**
     * The number of all available patches expected to be installed over the course of the patch installation operation.
     */
    pendingPatchCount: number;
    /**
     * The UTC timestamp when the operation began.
     */
    startTime: string;
    /**
     * The overall success or failure status of the operation. It remains "InProgress" until the operation completes. At that point it will become "Unknown", "Failed", "Succeeded", or "CompletedWithWarnings."
     */
    status: string;
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
 * Describes the properties of the load balancer configuration.
 */
export interface LoadBalancerConfigurationPropertiesResponse {
    /**
     * Specifies the frontend IP to be used for the load balancer. Only IPv4 frontend IP address is supported. Each load balancer configuration must have exactly one frontend IP configuration.
     */
    frontendIpConfigurations: LoadBalancerFrontendIpConfigurationResponse[];
}

/**
 * Describes the load balancer configuration.
 */
export interface LoadBalancerConfigurationResponse {
    /**
     * Resource Id
     */
    id?: string;
    /**
     * The name of the Load balancer
     */
    name: string;
    /**
     * Properties of the load balancer configuration.
     */
    properties: LoadBalancerConfigurationPropertiesResponse;
}

/**
 * Describes a cloud service IP Configuration
 */
export interface LoadBalancerFrontendIpConfigurationPropertiesResponse {
    /**
     * The virtual network private IP address of the IP configuration.
     */
    privateIPAddress?: string;
    /**
     * The reference to the public ip address resource.
     */
    publicIPAddress?: SubResourceResponse;
    /**
     * The reference to the virtual network subnet resource.
     */
    subnet?: SubResourceResponse;
}

/**
 * Specifies the frontend IP to be used for the load balancer. Only IPv4 frontend IP address is supported. Each load balancer configuration must have exactly one frontend IP configuration.
 */
export interface LoadBalancerFrontendIpConfigurationResponse {
    /**
     * The name of the resource that is unique within the set of frontend IP configurations used by the load balancer. This name can be used to access the resource.
     */
    name: string;
    /**
     * Properties of load balancer frontend ip configuration.
     */
    properties: LoadBalancerFrontendIpConfigurationPropertiesResponse;
}

/**
 * LogAnalytics output properties
 */
export interface LogAnalyticsOutputResponse {
    /**
     * Output file Uri path to blob container.
     */
    output: string;
}

/**
 * Maintenance Operation Status.
 */
export interface MaintenanceRedeployStatusResponse {
    /**
     * True, if customer is allowed to perform Maintenance.
     */
    isCustomerInitiatedMaintenanceAllowed?: boolean;
    /**
     * Message returned for the last Maintenance Operation.
     */
    lastOperationMessage?: string;
    /**
     * The Last Maintenance Operation Result Code.
     */
    lastOperationResultCode?: string;
    /**
     * End Time for the Maintenance Window.
     */
    maintenanceWindowEndTime?: string;
    /**
     * Start Time for the Maintenance Window.
     */
    maintenanceWindowStartTime?: string;
    /**
     * End Time for the Pre Maintenance Window.
     */
    preMaintenanceWindowEndTime?: string;
    /**
     * Start Time for the Pre Maintenance Window.
     */
    preMaintenanceWindowStartTime?: string;
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
     * Resource Id
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
 * Describes a network interface reference.
 */
export interface NetworkInterfaceReferenceResponse {
    /**
     * Specify what happens to the network interface when the VM is deleted
     */
    deleteOption?: string;
    /**
     * Resource Id
     */
    id?: string;
    /**
     * Specifies the primary network interface in case the virtual machine has more than 1 network interface.
     */
    primary?: boolean;
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
 * Contains encryption settings for an OS disk image.
 */
export interface OSDiskImageEncryptionResponse {
    /**
     * A relative URI containing the resource ID of the disk encryption set.
     */
    diskEncryptionSetId?: string;
    /**
     * This property specifies the security profile of an OS disk image.
     */
    securityProfile?: OSDiskImageSecurityProfileResponse;
}

/**
 * Contains security profile for an OS disk image.
 */
export interface OSDiskImageSecurityProfileResponse {
    /**
     * confidential VM encryption types
     */
    confidentialVMEncryptionType?: string;
    /**
     * secure VM disk encryption set id
     */
    secureVMDiskEncryptionSetId?: string;
}

/**
 * Specifies information about the operating system disk used by the virtual machine. For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/managed-disks-overview).
 */
export interface OSDiskResponse {
    /**
     * Specifies the caching requirements. Possible values are: **None,** **ReadOnly,** **ReadWrite.** The defaulting behavior is: **None for Standard storage. ReadOnly for Premium storage.**
     */
    caching?: string;
    /**
     * Specifies how the virtual machine should be created. Possible values are: **Attach.** This value is used when you are using a specialized disk to create the virtual machine. **FromImage.** This value is used when you are using an image to create the virtual machine. If you are using a platform image, you should also use the imageReference element described above. If you are using a marketplace image, you should also use the plan element previously described.
     */
    createOption: string;
    /**
     * Specifies whether OS Disk should be deleted or detached upon VM deletion. Possible values are: **Delete.** If this value is used, the OS disk is deleted when VM is deleted. **Detach.** If this value is used, the os disk is retained after VM is deleted. The default value is set to **Detach**. For an ephemeral OS Disk, the default value is set to **Delete**. The user cannot change the delete option for an ephemeral OS Disk.
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
     * Specifies the encryption settings for the OS Disk. Minimum api-version: 2015-06-15.
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
     * This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. Possible values are: **Windows,** **Linux.**
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
 * Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
 */
export interface PlanResponse {
    /**
     * The plan ID.
     */
    name?: string;
    /**
     * Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element.
     */
    product?: string;
    /**
     * The promotion code.
     */
    promotionCode?: string;
    /**
     * The publisher ID.
     */
    publisher?: string;
}

/**
 * A policy violation reported against a gallery artifact.
 */
export interface PolicyViolationResponse {
    /**
     * Describes the nature of the policy violation.
     */
    category?: string;
    /**
     * Describes specific details about why this policy violation was reported.
     */
    details?: string;
}

/**
 * Specifies the target splits for Spot and Regular priority VMs within a scale set with flexible orchestration mode. With this property the customer is able to specify the base number of regular priority VMs created as the VMSS flex instance scales out and the split between Spot and Regular priority VMs after this base target has been reached.
 */
export interface PriorityMixPolicyResponse {
    /**
     * The base number of regular priority VMs that will be created in this scale set as it scales out.
     */
    baseRegularPriorityCount?: number;
    /**
     * The percentage of VM instances, after the base regular priority count has been reached, that are expected to use regular priority.
     */
    regularPriorityPercentageAboveBase?: number;
}

/**
 * The Private Endpoint Connection resource.
 */
export interface PrivateEndpointConnectionResponse {
    /**
     * private endpoint connection Id
     */
    id: string;
    /**
     * private endpoint connection name
     */
    name: string;
    /**
     * The resource of private end point.
     */
    privateEndpoint: PrivateEndpointResponse;
    /**
     * A collection of information about the state of the connection between DiskAccess and Virtual Network.
     */
    privateLinkServiceConnectionState: PrivateLinkServiceConnectionStateResponse;
    /**
     * The provisioning state of the private endpoint connection resource.
     */
    provisioningState: string;
    /**
     * private endpoint connection type
     */
    type: string;
}

/**
 * The Private Endpoint resource.
 */
export interface PrivateEndpointResponse {
    /**
     * The ARM identifier for Private Endpoint
     */
    id: string;
}

/**
 * A collection of information about the state of the connection between service consumer and provider.
 */
export interface PrivateLinkServiceConnectionStateResponse {
    /**
     * A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionsRequired?: string;
    /**
     * The reason for approval/rejection of the connection.
     */
    description?: string;
    /**
     * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
     */
    status?: string;
}

/**
 * Properties of the disk for which update is pending.
 */
export interface PropertyUpdatesInProgressResponse {
    /**
     * The target performance tier of the disk if a tier change operation is in progress.
     */
    targetTier?: string;
}

/**
 * Specifies the user intent of the proximity placement group.
 */
export interface ProximityPlacementGroupPropertiesResponseIntent {
    /**
     * Specifies possible sizes of virtual machines that can be created in the proximity placement group.
     */
    vmSizes?: string[];
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
 * Used for establishing the purchase context of any 3rd Party artifact through MarketPlace.
 */
export interface PurchasePlanResponse {
    /**
     * The plan ID.
     */
    name: string;
    /**
     * Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element.
     */
    product: string;
    /**
     * The Offer Promotion Code.
     */
    promotionCode?: string;
    /**
     * The publisher ID.
     */
    publisher: string;
}

/**
 * The properties describe the recommended machine configuration for this Image Definition. These properties are updatable.
 */
export interface RecommendedMachineConfigurationResponse {
    /**
     * Describes the resource range.
     */
    memory?: ResourceRangeResponse;
    /**
     * Describes the resource range.
     */
    vCPUs?: ResourceRangeResponse;
}

/**
 * This is the regional replication status.
 */
export interface RegionalReplicationStatusResponse {
    /**
     * The details of the replication status.
     */
    details: string;
    /**
     * It indicates progress of the replication job.
     */
    progress: number;
    /**
     * The region to which the gallery image version is being replicated to.
     */
    region: string;
    /**
     * This is the regional replication state.
     */
    state: string;
}

/**
 * Gallery regional sharing status
 */
export interface RegionalSharingStatusResponse {
    /**
     * Details of gallery regional sharing failure.
     */
    details?: string;
    /**
     * Region name
     */
    region?: string;
    /**
     * Gallery sharing state in current region
     */
    state: string;
}

/**
 * This is the replication status of the gallery image version.
 */
export interface ReplicationStatusResponse {
    /**
     * This is the aggregated replication status based on all the regional replication status flags.
     */
    aggregatedState: string;
    /**
     * This is a summary of replication status for each region.
     */
    summary: RegionalReplicationStatusResponse[];
}

/**
 * Describes the resource range.
 */
export interface ResourceRangeResponse {
    /**
     * The maximum number of the resource.
     */
    max?: number;
    /**
     * The minimum number of the resource.
     */
    min?: number;
}

/**
 * The properties of the source resource that this restore point collection is created from.
 */
export interface RestorePointCollectionSourcePropertiesResponse {
    /**
     * Resource Id of the source resource used to create this restore point collection
     */
    id?: string;
    /**
     * Location of the source resource used to create this restore point collection.
     */
    location: string;
}

/**
 * Encryption at rest settings for disk restore point. It is an optional property that can be specified in the input while creating a restore point.
 */
export interface RestorePointEncryptionResponse {
    /**
     * Describes the parameter of customer managed disk encryption set resource id that can be specified for disk. **Note:** The disk encryption set resource id can only be specified for managed disk. Please refer https://aka.ms/mdssewithcmkoverview for more details.
     */
    diskEncryptionSet?: DiskEncryptionSetParametersResponse;
    /**
     * The type of key used to encrypt the data of the disk restore point.
     */
    type?: string;
}

/**
 * The instance view of a restore point.
 */
export interface RestorePointInstanceViewResponse {
    /**
     * The disk restore points information.
     */
    diskRestorePoints?: DiskRestorePointInstanceViewResponse[];
    /**
     * The resource status information.
     */
    statuses?: InstanceViewStatusResponse[];
}

/**
 * Restore Point details.
 */
export interface RestorePointResponse {
    /**
     * ConsistencyMode of the RestorePoint. Can be specified in the input while creating a restore point. For now, only CrashConsistent is accepted as a valid input. Please refer to https://aka.ms/RestorePoints for more details.
     */
    consistencyMode?: string;
    /**
     * List of disk resource ids that the customer wishes to exclude from the restore point. If no disks are specified, all disks will be included.
     */
    excludeDisks?: ApiEntityReferenceResponse[];
    /**
     * Resource Id
     */
    id: string;
    /**
     * The restore point instance view.
     */
    instanceView: RestorePointInstanceViewResponse;
    /**
     * Resource name
     */
    name: string;
    /**
     * Gets the provisioning state of the restore point.
     */
    provisioningState: string;
    /**
     * Gets the details of the VM captured at the time of the restore point creation.
     */
    sourceMetadata?: RestorePointSourceMetadataResponse;
    /**
     * Resource Id of the source restore point from which a copy needs to be created.
     */
    sourceRestorePoint?: ApiEntityReferenceResponse;
    /**
     * Gets the creation time of the restore point.
     */
    timeCreated?: string;
    /**
     * Resource type
     */
    type: string;
}

/**
 * Describes the properties of the Virtual Machine for which the restore point was created. The properties provided are a subset and the snapshot of the overall Virtual Machine properties captured at the time of the restore point creation.
 */
export interface RestorePointSourceMetadataResponse {
    /**
     * Gets the diagnostics profile.
     */
    diagnosticsProfile: DiagnosticsProfileResponse;
    /**
     * Gets the hardware profile.
     */
    hardwareProfile: HardwareProfileResponse;
    /**
     * HyperVGeneration of the source VM for which restore point is captured.
     */
    hyperVGeneration: string;
    /**
     * Gets the license type, which is for bring your own license scenario.
     */
    licenseType: string;
    /**
     * Location of the VM from which the restore point was created.
     */
    location: string;
    /**
     * Gets the OS profile.
     */
    osProfile: OSProfileResponse;
    /**
     * Gets the security profile.
     */
    securityProfile: SecurityProfileResponse;
    /**
     * Gets the storage profile.
     */
    storageProfile?: RestorePointSourceVMStorageProfileResponse;
    /**
     * UserData associated with the source VM for which restore point is captured, which is a base-64 encoded value.
     */
    userData: string;
    /**
     * Gets the virtual machine unique id.
     */
    vmId: string;
}

/**
 * Describes a data disk.
 */
export interface RestorePointSourceVMDataDiskResponse {
    /**
     * Gets the caching type.
     */
    caching: string;
    /**
     * Contains Disk Restore Point properties.
     */
    diskRestorePoint?: DiskRestorePointAttributesResponse;
    /**
     * Gets the initial disk size in GB for blank data disks, and the new desired size for existing OS and Data disks.
     */
    diskSizeGB: number;
    /**
     * Gets the logical unit number.
     */
    lun: number;
    /**
     * Contains the managed disk details.
     */
    managedDisk?: ManagedDiskParametersResponse;
    /**
     * Gets the disk name.
     */
    name: string;
    /**
     * Shows true if the disk is write-accelerator enabled.
     */
    writeAcceleratorEnabled: boolean;
}

/**
 * Describes an Operating System disk.
 */
export interface RestorePointSourceVMOSDiskResponse {
    /**
     * Gets the caching type.
     */
    caching: string;
    /**
     * Contains Disk Restore Point properties.
     */
    diskRestorePoint?: DiskRestorePointAttributesResponse;
    /**
     * Gets the disk size in GB.
     */
    diskSizeGB: number;
    /**
     * Gets the disk encryption settings.
     */
    encryptionSettings: DiskEncryptionSettingsResponse;
    /**
     * Gets the managed disk details
     */
    managedDisk?: ManagedDiskParametersResponse;
    /**
     * Gets the disk name.
     */
    name: string;
    /**
     * Gets the Operating System type.
     */
    osType: string;
    /**
     * Shows true if the disk is write-accelerator enabled.
     */
    writeAcceleratorEnabled: boolean;
}

/**
 * Describes the storage profile.
 */
export interface RestorePointSourceVMStorageProfileResponse {
    /**
     * Gets the data disks of the VM captured at the time of the restore point creation.
     */
    dataDisks?: RestorePointSourceVMDataDiskResponse[];
    /**
     * Gets the OS disk of the VM captured at the time of the restore point creation.
     */
    osDisk?: RestorePointSourceVMOSDiskResponse;
}

/**
 * The configuration parameters used while performing a rolling upgrade.
 */
export interface RollingUpgradePolicyResponse {
    /**
     * Allow VMSS to ignore AZ boundaries when constructing upgrade batches. Take into consideration the Update Domain and maxBatchInstancePercent to determine the batch size.
     */
    enableCrossZoneUpgrade?: boolean;
    /**
     * The maximum percent of total virtual machine instances that will be upgraded simultaneously by the rolling upgrade in one batch. As this is a maximum, unhealthy instances in previous or future batches can cause the percentage of instances in a batch to decrease to ensure higher reliability. The default value for this parameter is 20%.
     */
    maxBatchInstancePercent?: number;
    /**
     * Create new virtual machines to upgrade the scale set, rather than updating the existing virtual machines. Existing virtual machines will be deleted once the new virtual machines are created for each batch.
     */
    maxSurge?: boolean;
    /**
     * The maximum percentage of the total virtual machine instances in the scale set that can be simultaneously unhealthy, either as a result of being upgraded, or by being found in an unhealthy state by the virtual machine health checks before the rolling upgrade aborts. This constraint will be checked prior to starting any batch. The default value for this parameter is 20%.
     */
    maxUnhealthyInstancePercent?: number;
    /**
     * The maximum percentage of upgraded virtual machine instances that can be found to be in an unhealthy state. This check will happen after each batch is upgraded. If this percentage is ever exceeded, the rolling update aborts. The default value for this parameter is 20%.
     */
    maxUnhealthyUpgradedInstancePercent?: number;
    /**
     * The wait time between completing the update for all virtual machines in one batch and starting the next batch. The time duration should be specified in ISO 8601 format. The default value is 0 seconds (PT0S).
     */
    pauseTimeBetweenBatches?: string;
    /**
     * Upgrade all unhealthy instances in a scale set before any healthy instances.
     */
    prioritizeUnhealthyInstances?: boolean;
    /**
     * Rollback failed instances to previous model if the Rolling Upgrade policy is violated.
     */
    rollbackFailedInstancesOnPolicyBreach?: boolean;
}

/**
 * Describes the properties of a run command parameter.
 */
export interface RunCommandInputParameterResponse {
    /**
     * The run command parameter name.
     */
    name: string;
    /**
     * The run command parameter value.
     */
    value: string;
}

/**
 *  Contains clientId or objectId (use only one, not both) of a user-assigned managed identity that has access to storage blob used in Run Command. Use an empty RunCommandManagedIdentity object in case of system-assigned identity. Make sure the Azure storage blob exists in case of scriptUri, and managed identity has been given access to blob's container with 'Storage Blob Data Reader' role assignment with scriptUri blob and 'Storage Blob Data Contributor' for Append blobs(outputBlobUri, errorBlobUri). In case of user assigned identity, make sure you add it under VM's identity. For more info on managed identity and Run Command, refer https://aka.ms/ManagedIdentity and https://aka.ms/RunCommandManaged.
 */
export interface RunCommandManagedIdentityResponse {
    /**
     * Client Id (GUID value) of the user-assigned managed identity. ObjectId should not be used if this is provided.
     */
    clientId?: string;
    /**
     * Object Id (GUID value) of the user-assigned managed identity. ClientId should not be used if this is provided.
     */
    objectId?: string;
}

/**
 * Describes a scale-in policy for a virtual machine scale set.
 */
export interface ScaleInPolicyResponse {
    /**
     * This property allows you to specify if virtual machines chosen for removal have to be force deleted when a virtual machine scale set is being scaled-in.(Feature in Preview)
     */
    forceDeletion?: boolean;
    /**
     * The rules to be followed when scaling-in a virtual machine scale set. <br><br> Possible values are: <br><br> **Default** When a virtual machine scale set is scaled in, the scale set will first be balanced across zones if it is a zonal scale set. Then, it will be balanced across Fault Domains as far as possible. Within each Fault Domain, the virtual machines chosen for removal will be the newest ones that are not protected from scale-in. <br><br> **OldestVM** When a virtual machine scale set is being scaled-in, the oldest virtual machines that are not protected from scale-in will be chosen for removal. For zonal virtual machine scale sets, the scale set will first be balanced across zones. Within each zone, the oldest virtual machines that are not protected will be chosen for removal. <br><br> **NewestVM** When a virtual machine scale set is being scaled-in, the newest virtual machines that are not protected from scale-in will be chosen for removal. For zonal virtual machine scale sets, the scale set will first be balanced across zones. Within each zone, the newest virtual machines that are not protected will be chosen for removal. <br><br>
     */
    rules?: string[];
}

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
 * Specifies the security posture to be used for all virtual machines in the scale set. Minimum api-version: 2023-03-01
 */
export interface SecurityPostureReferenceResponse {
    /**
     * List of virtual machine extensions to exclude when applying the Security Posture.
     */
    excludeExtensions?: VirtualMachineExtensionResponse[];
    /**
     * The security posture reference id in the form of /CommunityGalleries/{communityGalleryName}/securityPostures/{securityPostureName}/versions/{major.minor.patch}|{major.*}|latest
     */
    id?: string;
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
     * Specifies the SecurityType of the virtual machine. It has to be set to any specified value to enable UefiSettings. The default behavior is: UefiSettings will not be enabled unless this property is set.
     */
    securityType?: string;
    /**
     * Specifies the security settings like secure boot and vTPM used while creating the virtual machine. Minimum api-version: 2020-12-01.
     */
    uefiSettings?: UefiSettingsResponse;
}

/**
 * Specifies the service artifact reference id used to set same image version for all virtual machines in the scale set when using 'latest' image version. Minimum api-version: 2022-11-01
 */
export interface ServiceArtifactReferenceResponse {
    /**
     * The service artifact reference id in the form of /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/galleries/{galleryName}/serviceArtifacts/{serviceArtifactName}/vmArtifactsProfiles/{vmArtifactsProfilesName}
     */
    id?: string;
}

export interface ShareInfoElementResponse {
    /**
     * A relative URI containing the ID of the VM that has the disk attached.
     */
    vmUri: string;
}

/**
 * Group of the gallery sharing profile
 */
export interface SharingProfileGroupResponse {
    /**
     * A list of subscription/tenant ids the gallery is aimed to be shared to.
     */
    ids?: string[];
    /**
     * This property allows you to specify the type of sharing group. <br><br> Possible values are: <br><br> **Subscriptions** <br><br> **AADTenants**
     */
    type?: string;
}

/**
 * Profile for gallery sharing to subscription or tenant
 */
export interface SharingProfileResponse {
    /**
     * Information of community gallery if current gallery is shared to community.
     */
    communityGalleryInfo?: CommunityGalleryInfoResponse;
    /**
     * A list of sharing profile groups.
     */
    groups: SharingProfileGroupResponse[];
    /**
     * This property allows you to specify the permission of sharing gallery. <br><br> Possible values are: <br><br> **Private** <br><br> **Groups** <br><br> **Community**
     */
    permissions?: string;
}

/**
 * Sharing status of current gallery.
 */
export interface SharingStatusResponse {
    /**
     * Aggregated sharing state of current gallery.
     */
    aggregatedState: string;
    /**
     * Summary of all regional sharing status.
     */
    summary?: RegionalSharingStatusResponse[];
}

/**
 * Describes a virtual machine scale set sku. NOTE: If the new VM SKU is not supported on the hardware the scale set is currently on, you need to deallocate the VMs in the scale set before you modify the SKU name.
 */
export interface SkuResponse {
    /**
     * Specifies the number of virtual machines in the scale set.
     */
    capacity?: number;
    /**
     * The sku name.
     */
    name?: string;
    /**
     * Specifies the tier of virtual machines in a scale set.<br /><br /> Possible Values:<br /><br /> **Standard**<br /><br /> **Basic**
     */
    tier?: string;
}

/**
 * The snapshots sku name. Can be Standard_LRS, Premium_LRS, or Standard_ZRS. This is an optional parameter for incremental snapshot and the default behavior is the SKU will be set to the same sku as the previous snapshot
 */
export interface SnapshotSkuResponse {
    /**
     * The sku name.
     */
    name?: string;
    /**
     * The sku tier.
     */
    tier: string;
}

/**
 * Contains information about the soft deletion policy of the gallery.
 */
export interface SoftDeletePolicyResponse {
    /**
     * Enables soft-deletion for resources in this gallery, allowing them to be recovered within retention time.
     */
    isSoftDeleteEnabled?: boolean;
}

/**
 * The vault id is an Azure Resource Manager Resource id in the form /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}
 */
export interface SourceVaultResponse {
    /**
     * Resource Id
     */
    id?: string;
}

/**
 * Specifies the Spot-Try-Restore properties for the virtual machine scale set. With this property customer can enable or disable automatic restore of the evicted Spot VMSS VM instances opportunistically based on capacity availability and pricing constraint.
 */
export interface SpotRestorePolicyResponse {
    /**
     * Enables the Spot-Try-Restore feature where evicted VMSS SPOT instances will be tried to be restored opportunistically based on capacity availability and pricing constraints
     */
    enabled?: boolean;
    /**
     * Timeout value expressed as an ISO 8601 time duration after which the platform will not try to restore the VMSS SPOT instances
     */
    restoreTimeout?: string;
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

export interface SubResourceReadOnlyResponse {
    /**
     * Resource Id
     */
    id: string;
}

export interface SubResourceResponse {
    /**
     * Resource Id
     */
    id?: string;
}

export interface SubResourceWithColocationStatusResponse {
    /**
     * Describes colocation status of a resource in the Proximity Placement Group.
     */
    colocationStatus?: InstanceViewStatusResponse;
    /**
     * Resource Id
     */
    id?: string;
}

/**
 * List of supported capabilities persisted on the disk resource for VM use.
 */
export interface SupportedCapabilitiesResponse {
    /**
     * True if the image from which the OS disk is created supports accelerated networking.
     */
    acceleratedNetwork?: boolean;
    /**
     * CPU architecture supported by an OS disk.
     */
    architecture?: string;
    /**
     * The disk controllers that an OS disk supports. If set it can be SCSI or SCSI, NVME or NVME, SCSI.
     */
    diskControllerTypes?: string;
}

/**
 * The system meta data relating to this resource.
 */
export interface SystemDataResponse {
    /**
     * Specifies the time in UTC at which the Cloud Service (extended support) resource was created. <br />Minimum api-version: 2022-04-04.
     */
    createdAt: string;
    /**
     * Specifies the time in UTC at which the Cloud Service (extended support) resource was last modified. <br />Minimum api-version: 2022-04-04.
     */
    lastModifiedAt: string;
}

/**
 * Describes the target region information.
 */
export interface TargetRegionResponse {
    /**
     * Optional. Allows users to provide customer managed keys for encrypting the OS and data disks in the gallery artifact.
     */
    encryption?: EncryptionImagesResponse;
    /**
     * Contains the flag setting to hide an image when users specify version='latest'
     */
    excludeFromLatest?: boolean;
    /**
     * The name of the region.
     */
    name: string;
    /**
     * The number of replicas of the Image Version to be created per region. This property is updatable.
     */
    regionalReplicaCount?: number;
    /**
     * Specifies the storage account type to be used to store the image. This property is not updatable.
     */
    storageAccountType?: string;
}

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
     * Specifies whether secure boot should be enabled on the virtual machine. Minimum api-version: 2020-12-01.
     */
    secureBootEnabled?: boolean;
    /**
     * Specifies whether vTPM should be enabled on the virtual machine. Minimum api-version: 2020-12-01.
     */
    vTpmEnabled?: boolean;
}

/**
 * Describes an upgrade policy - automatic, manual, or rolling.
 */
export interface UpgradePolicyResponse {
    /**
     * Configuration parameters used for performing automatic OS Upgrade.
     */
    automaticOSUpgradePolicy?: AutomaticOSUpgradePolicyResponse;
    /**
     * Specifies the mode of an upgrade to virtual machines in the scale set.<br /><br /> Possible values are:<br /><br /> **Manual** - You  control the application of updates to virtual machines in the scale set. You do this by using the manualUpgrade action.<br /><br /> **Automatic** - All virtual machines in the scale set are  automatically updated at the same time.
     */
    mode?: string;
    /**
     * The configuration parameters used while performing a rolling upgrade.
     */
    rollingUpgradePolicy?: RollingUpgradePolicyResponse;
}

export interface UserArtifactManageResponse {
    /**
     * Required. The path and arguments to install the gallery application. This is limited to 4096 characters.
     */
    install: string;
    /**
     * Required. The path and arguments to remove the gallery application. This is limited to 4096 characters.
     */
    remove: string;
    /**
     * Optional. The path and arguments to update the gallery application. If not present, then update operation will invoke remove command on the previous version and install command on the current version of the gallery application. This is limited to 4096 characters.
     */
    update?: string;
}

/**
 * Additional settings for the VM app that contains the target package and config file name when it is deployed to target VM or VM scale set.
 */
export interface UserArtifactSettingsResponse {
    /**
     * Optional. The name to assign the downloaded config file on the VM. This is limited to 4096 characters. If not specified, the config file will be named the Gallery Application name appended with "_config".
     */
    configFileName?: string;
    /**
     * Optional. The name to assign the downloaded package file on the VM. This is limited to 4096 characters. If not specified, the package file will be named the same as the Gallery Application name.
     */
    packageFileName?: string;
}

/**
 * The source image from which the Image Version is going to be created.
 */
export interface UserArtifactSourceResponse {
    /**
     * Optional. The defaultConfigurationLink of the artifact, must be a readable storage page blob.
     */
    defaultConfigurationLink?: string;
    /**
     * Required. The mediaLink of the artifact, must be a readable storage page blob.
     */
    mediaLink: string;
}

export interface UserAssignedIdentitiesResponseUserAssignedIdentities {
    /**
     * The client id of user assigned identity.
     */
    clientId: string;
    /**
     * The principal id of user assigned identity.
     */
    principalId: string;
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
     * Specifies the EncryptionType of the managed disk. It is set to DiskWithVMGuestState for encryption of the managed disk along with VMGuestState blob, and VMGuestStateOnly for encryption of just the VMGuestState blob. **Note:** It can be set for only Confidential VMs.
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
 * Specifies VM Size Property settings on the virtual machine.
 */
export interface VMSizePropertiesResponse {
    /**
     * Specifies the number of vCPUs available for the VM. When this property is not specified in the request body the default behavior is to set it to the value of vCPUs available for that VM size exposed in api response of [List all available virtual machine sizes in a region](https://docs.microsoft.com/en-us/rest/api/compute/resource-skus/list).
     */
    vCPUsAvailable?: number;
    /**
     * Specifies the vCPU to physical core ratio. When this property is not specified in the request body the default behavior is set to the value of vCPUsPerCore for the VM Size exposed in api response of [List all available virtual machine sizes in a region](https://docs.microsoft.com/en-us/rest/api/compute/resource-skus/list). **Setting this property to 1 also means that hyper-threading is disabled.**
     */
    vCPUsPerCore?: number;
}

/**
 * Describes a single certificate reference in a Key Vault, and where the certificate should reside on the VM.
 */
export interface VaultCertificateResponse {
    /**
     * For Windows VMs, specifies the certificate store on the Virtual Machine to which the certificate should be added. The specified certificate store is implicitly in the LocalMachine account. For Linux VMs, the certificate file is placed under the /var/lib/waagent directory, with the file name &lt;UppercaseThumbprint&gt;.crt for the X509 certificate file and &lt;UppercaseThumbprint&gt;.prv for private key. Both of these files are .pem formatted.
     */
    certificateStore?: string;
    /**
     * This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>} <br> To install certificates on a virtual machine it is recommended to use the [Azure Key Vault virtual machine extension for Linux](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-linux) or the [Azure Key Vault virtual machine extension for Windows](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-windows).
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
 * The instance view of the VM Agent running on the virtual machine.
 */
export interface VirtualMachineAgentInstanceViewResponse {
    /**
     * The virtual machine extension handler instance view.
     */
    extensionHandlers?: VirtualMachineExtensionHandlerInstanceViewResponse[];
    /**
     * The resource status information.
     */
    statuses?: InstanceViewStatusResponse[];
    /**
     * The VM Agent full version.
     */
    vmAgentVersion?: string;
}

/**
 * The instance view of a virtual machine extension handler.
 */
export interface VirtualMachineExtensionHandlerInstanceViewResponse {
    /**
     * The extension handler status.
     */
    status?: InstanceViewStatusResponse;
    /**
     * Specifies the type of the extension; an example is "CustomScriptExtension".
     */
    type?: string;
    /**
     * Specifies the version of the script handler.
     */
    typeHandlerVersion?: string;
}

/**
 * The instance view of a virtual machine extension.
 */
export interface VirtualMachineExtensionInstanceViewResponse {
    /**
     * The virtual machine extension name.
     */
    name?: string;
    /**
     * The resource status information.
     */
    statuses?: InstanceViewStatusResponse[];
    /**
     * The resource status information.
     */
    substatuses?: InstanceViewStatusResponse[];
    /**
     * Specifies the type of the extension; an example is "CustomScriptExtension".
     */
    type?: string;
    /**
     * Specifies the version of the script handler.
     */
    typeHandlerVersion?: string;
}

/**
 * Describes a Virtual Machine Extension.
 */
export interface VirtualMachineExtensionResponse {
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
     * Resource Id
     */
    id: string;
    /**
     * The virtual machine extension instance view.
     */
    instanceView?: VirtualMachineExtensionInstanceViewResponse;
    /**
     * Resource location
     */
    location?: string;
    /**
     * Resource name
     */
    name: string;
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
     * The provisioning state, which only appears in the response.
     */
    provisioningState: string;
    /**
     * The name of the extension handler publisher.
     */
    publisher?: string;
    /**
     * Json formatted public settings for the extension.
     */
    settings?: any;
    /**
     * Indicates whether failures stemming from the extension will be suppressed (Operational failures such as not connecting to the VM will not be suppressed regardless of this value). The default is false.
     */
    suppressFailures?: boolean;
    /**
     * Resource tags
     */
    tags?: {[key: string]: string};
    /**
     * Resource type
     */
    type: string;
    /**
     * Specifies the version of the script handler.
     */
    typeHandlerVersion?: string;
}

/**
 * The health status of the VM.
 */
export interface VirtualMachineHealthStatusResponse {
    /**
     * The health status information for the VM.
     */
    status: InstanceViewStatusResponse;
}

/**
 * Identity for the virtual machine.
 */
export interface VirtualMachineIdentityResponse {
    /**
     * The principal id of virtual machine identity. This property will only be provided for a system assigned identity.
     */
    principalId: string;
    /**
     * The tenant id associated with the virtual machine. This property will only be provided for a system assigned identity.
     */
    tenantId: string;
    /**
     * The type of identity used for the virtual machine. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine.
     */
    type?: string;
    /**
     * The list of user identities associated with the Virtual Machine. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
     */
    userAssignedIdentities?: {[key: string]: UserAssignedIdentitiesResponseUserAssignedIdentities};
}

/**
 * The instance view of a virtual machine.
 */
export interface VirtualMachineInstanceViewResponse {
    /**
     * Resource id of the dedicated host, on which the virtual machine is allocated through automatic placement, when the virtual machine is associated with a dedicated host group that has automatic placement enabled. Minimum api-version: 2020-06-01.
     */
    assignedHost: string;
    /**
     * Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status. You can easily view the output of your console log. Azure also enables you to see a screenshot of the VM from the hypervisor.
     */
    bootDiagnostics?: BootDiagnosticsInstanceViewResponse;
    /**
     * The computer name assigned to the virtual machine.
     */
    computerName?: string;
    /**
     * The virtual machine disk information.
     */
    disks?: DiskInstanceViewResponse[];
    /**
     * The extensions information.
     */
    extensions?: VirtualMachineExtensionInstanceViewResponse[];
    /**
     * Specifies the HyperVGeneration Type associated with a resource
     */
    hyperVGeneration?: string;
    /**
     * The Maintenance Operation status on the virtual machine.
     */
    maintenanceRedeployStatus?: MaintenanceRedeployStatusResponse;
    /**
     * The Operating System running on the virtual machine.
     */
    osName?: string;
    /**
     * The version of Operating System running on the virtual machine.
     */
    osVersion?: string;
    /**
     * [Preview Feature] The status of virtual machine patch operations.
     */
    patchStatus?: VirtualMachinePatchStatusResponse;
    /**
     * Specifies the fault domain of the virtual machine.
     */
    platformFaultDomain?: number;
    /**
     * Specifies the update domain of the virtual machine.
     */
    platformUpdateDomain?: number;
    /**
     * The Remote desktop certificate thumbprint.
     */
    rdpThumbPrint?: string;
    /**
     * The resource status information.
     */
    statuses?: InstanceViewStatusResponse[];
    /**
     * The VM Agent running on the virtual machine.
     */
    vmAgent?: VirtualMachineAgentInstanceViewResponse;
    /**
     * The health status for the VM.
     */
    vmHealth: VirtualMachineHealthStatusResponse;
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
 * Describes a virtual machine network interface configurations.
 */
export interface VirtualMachineNetworkInterfaceConfigurationResponse {
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
     * The network interface configuration name.
     */
    name: string;
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
 * Describes a virtual machines network configuration's DNS settings.
 */
export interface VirtualMachineNetworkInterfaceDnsSettingsConfigurationResponse {
    /**
     * List of DNS servers IP addresses
     */
    dnsServers?: string[];
}

/**
 * Describes a virtual machine network profile's IP configuration.
 */
export interface VirtualMachineNetworkInterfaceIPConfigurationResponse {
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
     * The IP configuration name.
     */
    name: string;
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
 * The status of virtual machine patch operations.
 */
export interface VirtualMachinePatchStatusResponse {
    /**
     * The available patch summary of the latest assessment operation for the virtual machine.
     */
    availablePatchSummary?: AvailablePatchSummaryResponse;
    /**
     * The enablement status of the specified patchMode
     */
    configurationStatuses: InstanceViewStatusResponse[];
    /**
     * The installation summary of the latest installation operation for the virtual machine.
     */
    lastPatchInstallationSummary?: LastPatchInstallationSummaryResponse;
}

/**
 * Describes a virtual machines IP Configuration's PublicIPAddress configuration
 */
export interface VirtualMachinePublicIPAddressConfigurationResponse {
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
     * The publicIP address configuration name.
     */
    name: string;
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
    /**
     * Describes the public IP Sku. It can only be set with OrchestrationMode as Flexible.
     */
    sku?: PublicIPAddressSkuResponse;
}

/**
 * Describes a virtual machines network configuration's DNS settings.
 */
export interface VirtualMachinePublicIPAddressDnsSettingsConfigurationResponse {
    /**
     * The Domain name label prefix of the PublicIPAddress resources that will be created. The generated name label is the concatenation of the domain name label and vm network profile unique ID.
     */
    domainNameLabel: string;
}

/**
 * The instance view of a virtual machine run command.
 */
export interface VirtualMachineRunCommandInstanceViewResponse {
    /**
     * Script end time.
     */
    endTime?: string;
    /**
     * Script error stream.
     */
    error?: string;
    /**
     * Communicate script configuration errors or execution messages.
     */
    executionMessage?: string;
    /**
     * Script execution status.
     */
    executionState?: string;
    /**
     * Exit code returned from script execution.
     */
    exitCode?: number;
    /**
     * Script output stream.
     */
    output?: string;
    /**
     * Script start time.
     */
    startTime?: string;
    /**
     * The resource status information.
     */
    statuses?: InstanceViewStatusResponse[];
}

/**
 * Describes the script sources for run command. Use only one of script, scriptUri, commandId.
 */
export interface VirtualMachineRunCommandScriptSourceResponse {
    /**
     * Specifies a commandId of predefined built-in script.
     */
    commandId?: string;
    /**
     * Specifies the script content to be executed on the VM.
     */
    script?: string;
    /**
     * Specifies the script download location. It can be either SAS URI of an Azure storage blob with read access or public URI.
     */
    scriptUri?: string;
    /**
     * User-assigned managed identity that has access to scriptUri in case of Azure storage blob. Use an empty object in case of system-assigned identity. Make sure the Azure storage blob exists, and managed identity has been given access to blob's container with 'Storage Blob Data Reader' role assignment. In case of user-assigned identity, make sure you add it under VM's identity. For more info on managed identity and Run Command, refer https://aka.ms/ManagedIdentity and https://aka.ms/RunCommandManaged.
     */
    scriptUriManagedIdentity?: RunCommandManagedIdentityResponse;
}

/**
 * Describes a virtual machine scale set data disk.
 */
export interface VirtualMachineScaleSetDataDiskResponse {
    /**
     * Specifies the caching requirements. Possible values are: **None,** **ReadOnly,** **ReadWrite.** The default values are: **None for Standard storage. ReadOnly for Premium storage.**
     */
    caching?: string;
    /**
     * The create option.
     */
    createOption: string;
    /**
     * Specifies whether data disk should be deleted or detached upon VMSS Flex deletion (This feature is available for VMSS with Flexible OrchestrationMode only).<br><br> Possible values: <br><br> **Delete** If this value is used, the data disk is deleted when the VMSS Flex VM is deleted.<br><br> **Detach** If this value is used, the data disk is retained after VMSS Flex VM is deleted.<br><br> The default value is set to **Delete**.
     */
    deleteOption?: string;
    /**
     * Specifies the Read-Write IOPS for the managed disk. Should be used only when StorageAccountType is UltraSSD_LRS. If not specified, a default value would be assigned based on diskSizeGB.
     */
    diskIOPSReadWrite?: number;
    /**
     * Specifies the bandwidth in MB per second for the managed disk. Should be used only when StorageAccountType is UltraSSD_LRS. If not specified, a default value would be assigned based on diskSizeGB.
     */
    diskMBpsReadWrite?: number;
    /**
     * Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. The property diskSizeGB is the number of bytes x 1024^3 for the disk and the value cannot be larger than 1023.
     */
    diskSizeGB?: number;
    /**
     * Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
     */
    lun: number;
    /**
     * The managed disk parameters.
     */
    managedDisk?: VirtualMachineScaleSetManagedDiskParametersResponse;
    /**
     * The disk name.
     */
    name?: string;
    /**
     * Specifies whether writeAccelerator should be enabled or disabled on the disk.
     */
    writeAcceleratorEnabled?: boolean;
}

/**
 * Describes a virtual machine scale set extension profile.
 */
export interface VirtualMachineScaleSetExtensionProfileResponse {
    /**
     * The virtual machine scale set child extension resources.
     */
    extensions?: VirtualMachineScaleSetExtensionResponse[];
    /**
     * Specifies the time alloted for all extensions to start. The time duration should be between 15 minutes and 120 minutes (inclusive) and should be specified in ISO 8601 format. The default value is 90 minutes (PT1H30M). Minimum api-version: 2020-06-01.
     */
    extensionsTimeBudget?: string;
}

/**
 * Describes a Virtual Machine Scale Set Extension.
 */
export interface VirtualMachineScaleSetExtensionResponse {
    /**
     * Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
     */
    autoUpgradeMinorVersion?: boolean;
    /**
     * Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available.
     */
    enableAutomaticUpgrade?: boolean;
    /**
     * If a value is provided and is different from the previous value, the extension handler will be forced to update even if the extension configuration has not changed.
     */
    forceUpdateTag?: string;
    /**
     * Resource Id
     */
    id: string;
    /**
     * The name of the extension.
     */
    name?: string;
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
     * The provisioning state, which only appears in the response.
     */
    provisioningState: string;
    /**
     * The name of the extension handler publisher.
     */
    publisher?: string;
    /**
     * Json formatted public settings for the extension.
     */
    settings?: any;
    /**
     * Indicates whether failures stemming from the extension will be suppressed (Operational failures such as not connecting to the VM will not be suppressed regardless of this value). The default is false.
     */
    suppressFailures?: boolean;
    /**
     * Resource type
     */
    type: string;
    /**
     * Specifies the version of the script handler.
     */
    typeHandlerVersion?: string;
}

/**
 * Specifies the hardware settings for the virtual machine scale set.
 */
export interface VirtualMachineScaleSetHardwareProfileResponse {
    /**
     * Specifies the properties for customizing the size of the virtual machine. Minimum api-version: 2021-11-01. Please follow the instructions in [VM Customization](https://aka.ms/vmcustomization) for more details.
     */
    vmSizeProperties?: VMSizePropertiesResponse;
}

/**
 * Describes a virtual machine scale set network profile's IP configuration.
 */
export interface VirtualMachineScaleSetIPConfigurationResponse {
    /**
     * Specifies an array of references to backend address pools of application gateways. A scale set can reference backend address pools of multiple application gateways. Multiple scale sets cannot use the same application gateway.
     */
    applicationGatewayBackendAddressPools?: SubResourceResponse[];
    /**
     * Specifies an array of references to application security group.
     */
    applicationSecurityGroups?: SubResourceResponse[];
    /**
     * Specifies an array of references to backend address pools of load balancers. A scale set can reference backend address pools of one public and one internal load balancer. Multiple scale sets cannot use the same basic sku load balancer.
     */
    loadBalancerBackendAddressPools?: SubResourceResponse[];
    /**
     * Specifies an array of references to inbound Nat pools of the load balancers. A scale set can reference inbound nat pools of one public and one internal load balancer. Multiple scale sets cannot use the same basic sku load balancer.
     */
    loadBalancerInboundNatPools?: SubResourceResponse[];
    /**
     * The IP configuration name.
     */
    name: string;
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
    publicIPAddressConfiguration?: VirtualMachineScaleSetPublicIPAddressConfigurationResponse;
    /**
     * Specifies the identifier of the subnet.
     */
    subnet?: ApiEntityReferenceResponse;
}

/**
 * Identity for the virtual machine scale set.
 */
export interface VirtualMachineScaleSetIdentityResponse {
    /**
     * The principal id of virtual machine scale set identity. This property will only be provided for a system assigned identity.
     */
    principalId: string;
    /**
     * The tenant id associated with the virtual machine scale set. This property will only be provided for a system assigned identity.
     */
    tenantId: string;
    /**
     * The type of identity used for the virtual machine scale set. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine scale set.
     */
    type?: string;
    /**
     * The list of user identities associated with the virtual machine scale set. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
     */
    userAssignedIdentities?: {[key: string]: UserAssignedIdentitiesResponseUserAssignedIdentities};
}

/**
 * Contains the IP tag associated with the public IP address.
 */
export interface VirtualMachineScaleSetIpTagResponse {
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
 * Describes the parameters of a ScaleSet managed disk.
 */
export interface VirtualMachineScaleSetManagedDiskParametersResponse {
    /**
     * Specifies the customer managed disk encryption set resource id for the managed disk.
     */
    diskEncryptionSet?: DiskEncryptionSetParametersResponse;
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
 * Describes a virtual machines scale sets network configuration's DNS settings.
 */
export interface VirtualMachineScaleSetNetworkConfigurationDnsSettingsResponse {
    /**
     * List of DNS servers IP addresses
     */
    dnsServers?: string[];
}

/**
 * Describes a virtual machine scale set network profile's network configurations.
 */
export interface VirtualMachineScaleSetNetworkConfigurationResponse {
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
    dnsSettings?: VirtualMachineScaleSetNetworkConfigurationDnsSettingsResponse;
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
    ipConfigurations: VirtualMachineScaleSetIPConfigurationResponse[];
    /**
     * The network configuration name.
     */
    name: string;
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
 * Describes a virtual machine scale set network profile.
 */
export interface VirtualMachineScaleSetNetworkProfileResponse {
    /**
     * A reference to a load balancer probe used to determine the health of an instance in the virtual machine scale set. The reference will be in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/probes/{probeName}'.
     */
    healthProbe?: ApiEntityReferenceResponse;
    /**
     * specifies the Microsoft.Network API version used when creating networking resources in the Network Interface Configurations for Virtual Machine Scale Set with orchestration mode 'Flexible'
     */
    networkApiVersion?: string;
    /**
     * The list of network configurations.
     */
    networkInterfaceConfigurations?: VirtualMachineScaleSetNetworkConfigurationResponse[];
}

/**
 * Describes a virtual machine scale set operating system disk.
 */
export interface VirtualMachineScaleSetOSDiskResponse {
    /**
     * Specifies the caching requirements. Possible values are: **None,** **ReadOnly,** **ReadWrite.** The default values are: **None for Standard storage. ReadOnly for Premium storage.**
     */
    caching?: string;
    /**
     * Specifies how the virtual machines in the scale set should be created. The only allowed value is: **FromImage.** This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described.
     */
    createOption: string;
    /**
     * Specifies whether OS Disk should be deleted or detached upon VMSS Flex deletion (This feature is available for VMSS with Flexible OrchestrationMode only). <br><br> Possible values: <br><br> **Delete** If this value is used, the OS disk is deleted when VMSS Flex VM is deleted.<br><br> **Detach** If this value is used, the OS disk is retained after VMSS Flex VM is deleted. <br><br> The default value is set to **Delete**. For an Ephemeral OS Disk, the default value is set to **Delete**. User cannot change the delete option for Ephemeral OS Disk.
     */
    deleteOption?: string;
    /**
     * Specifies the ephemeral disk Settings for the operating system disk used by the virtual machine scale set.
     */
    diffDiskSettings?: DiffDiskSettingsResponse;
    /**
     * Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. The property 'diskSizeGB' is the number of bytes x 1024^3 for the disk and the value cannot be larger than 1023.
     */
    diskSizeGB?: number;
    /**
     * Specifies information about the unmanaged user image to base the scale set on.
     */
    image?: VirtualHardDiskResponse;
    /**
     * The managed disk parameters.
     */
    managedDisk?: VirtualMachineScaleSetManagedDiskParametersResponse;
    /**
     * The disk name.
     */
    name?: string;
    /**
     * This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. Possible values are: **Windows,** **Linux.**
     */
    osType?: string;
    /**
     * Specifies the container urls that are used to store operating system disks for the scale set.
     */
    vhdContainers?: string[];
    /**
     * Specifies whether writeAccelerator should be enabled or disabled on the disk.
     */
    writeAcceleratorEnabled?: boolean;
}

/**
 * Describes a virtual machine scale set OS profile.
 */
export interface VirtualMachineScaleSetOSProfileResponse {
    /**
     * Specifies the password of the administrator account. <br><br> **Minimum-length (Windows):** 8 characters <br><br> **Minimum-length (Linux):** 6 characters <br><br> **Max-length (Windows):** 123 characters <br><br> **Max-length (Linux):** 72 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!" <br><br> For resetting the password, see [How to reset the Remote Desktop service or its login password in a Windows VM](https://docs.microsoft.com/troubleshoot/azure/virtual-machines/reset-rdp) <br><br> For resetting root password, see [Manage users, SSH, and check or repair disks on Azure Linux VMs using the VMAccess Extension](https://docs.microsoft.com/troubleshoot/azure/virtual-machines/troubleshoot-ssh-connection)
     */
    adminPassword?: string;
    /**
     * Specifies the name of the administrator account. <br><br> **Windows-only restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length (Linux):** 1  character <br><br> **Max-length (Linux):** 64 characters <br><br> **Max-length (Windows):** 20 characters
     */
    adminUsername?: string;
    /**
     * Specifies whether extension operations should be allowed on the virtual machine scale set. This may only be set to False when no extensions are present on the virtual machine scale set.
     */
    allowExtensionOperations?: boolean;
    /**
     * Specifies the computer name prefix for all of the virtual machines in the scale set. Computer name prefixes must be 1 to 15 characters long.
     */
    computerNamePrefix?: string;
    /**
     * Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the Virtual Machine. The maximum length of the binary array is 65535 bytes. For using cloud-init for your VM, see [Using cloud-init to customize a Linux VM during creation](https://docs.microsoft.com/azure/virtual-machines/linux/using-cloud-init)
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
     * Specifies set of certificates that should be installed onto the virtual machines in the scale set. To install certificates on a virtual machine it is recommended to use the [Azure Key Vault virtual machine extension for Linux](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-linux) or the [Azure Key Vault virtual machine extension for Windows](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-windows).
     */
    secrets?: VaultSecretGroupResponse[];
    /**
     * Specifies Windows operating system settings on the virtual machine.
     */
    windowsConfiguration?: WindowsConfigurationResponse;
}

/**
 * Describes a virtual machines scale sets network configuration's DNS settings.
 */
export interface VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettingsResponse {
    /**
     * The Domain name label.The concatenation of the domain name label and vm index will be the domain name labels of the PublicIPAddress resources that will be created
     */
    domainNameLabel: string;
}

/**
 * Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration
 */
export interface VirtualMachineScaleSetPublicIPAddressConfigurationResponse {
    /**
     * Specify what happens to the public IP when the VM is deleted
     */
    deleteOption?: string;
    /**
     * The dns settings to be applied on the publicIP addresses .
     */
    dnsSettings?: VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettingsResponse;
    /**
     * The idle timeout of the public IP address.
     */
    idleTimeoutInMinutes?: number;
    /**
     * The list of IP tags associated with the public IP address.
     */
    ipTags?: VirtualMachineScaleSetIpTagResponse[];
    /**
     * The publicIP address configuration name.
     */
    name: string;
    /**
     * Available from Api-Version 2019-07-01 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4. Possible values are: 'IPv4' and 'IPv6'.
     */
    publicIPAddressVersion?: string;
    /**
     * The PublicIPPrefix from which to allocate publicIP addresses.
     */
    publicIPPrefix?: SubResourceResponse;
    /**
     * Describes the public IP Sku. It can only be set with OrchestrationMode as Flexible.
     */
    sku?: PublicIPAddressSkuResponse;
}

/**
 * Describes a virtual machine scale set storage profile.
 */
export interface VirtualMachineScaleSetStorageProfileResponse {
    /**
     * Specifies the parameters that are used to add data disks to the virtual machines in the scale set. For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/managed-disks-overview).
     */
    dataDisks?: VirtualMachineScaleSetDataDiskResponse[];
    diskControllerType?: string[];
    /**
     * Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations.
     */
    imageReference?: ImageReferenceResponse;
    /**
     * Specifies information about the operating system disk used by the virtual machines in the scale set. For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/managed-disks-overview).
     */
    osDisk?: VirtualMachineScaleSetOSDiskResponse;
}

/**
 * The instance view of a virtual machine scale set VM.
 */
export interface VirtualMachineScaleSetVMInstanceViewResponse {
    /**
     * Resource id of the dedicated host, on which the virtual machine is allocated through automatic placement, when the virtual machine is associated with a dedicated host group that has automatic placement enabled. Minimum api-version: 2020-06-01.
     */
    assignedHost: string;
    /**
     * Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status. You can easily view the output of your console log. Azure also enables you to see a screenshot of the VM from the hypervisor.
     */
    bootDiagnostics?: BootDiagnosticsInstanceViewResponse;
    /**
     * Specifies the host OS name of the virtual machine. <br><br> This name cannot be updated after the VM is created. <br><br> **Max-length (Windows):** 15 characters <br><br> **Max-length (Linux):** 64 characters. <br><br> For naming conventions and restrictions see [Azure infrastructure services implementation guidelines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-infrastructure-subscription-accounts-guidelines?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json#1-naming-conventions).
     */
    computerName?: string;
    /**
     * The disks information.
     */
    disks?: DiskInstanceViewResponse[];
    /**
     * The extensions information.
     */
    extensions?: VirtualMachineExtensionInstanceViewResponse[];
    /**
     * The hypervisor generation of the Virtual Machine [V1, V2]
     */
    hyperVGeneration?: string;
    /**
     * The Maintenance Operation status on the virtual machine.
     */
    maintenanceRedeployStatus?: MaintenanceRedeployStatusResponse;
    /**
     * The Operating System running on the hybrid machine.
     */
    osName?: string;
    /**
     * The version of Operating System running on the hybrid machine.
     */
    osVersion?: string;
    /**
     * The placement group in which the VM is running. If the VM is deallocated it will not have a placementGroupId.
     */
    placementGroupId?: string;
    /**
     * The Fault Domain count.
     */
    platformFaultDomain?: number;
    /**
     * The Update Domain count.
     */
    platformUpdateDomain?: number;
    /**
     * The Remote desktop certificate thumbprint.
     */
    rdpThumbPrint?: string;
    /**
     * The resource status information.
     */
    statuses?: InstanceViewStatusResponse[];
    /**
     * The VM Agent running on the virtual machine.
     */
    vmAgent?: VirtualMachineAgentInstanceViewResponse;
    /**
     * The health status for the VM.
     */
    vmHealth: VirtualMachineHealthStatusResponse;
}

/**
 * Describes a virtual machine scale set VM network profile.
 */
export interface VirtualMachineScaleSetVMNetworkProfileConfigurationResponse {
    /**
     * The list of network configurations.
     */
    networkInterfaceConfigurations?: VirtualMachineScaleSetNetworkConfigurationResponse[];
}

/**
 * Describes a virtual machine scale set virtual machine profile.
 */
export interface VirtualMachineScaleSetVMProfileResponse {
    /**
     * Specifies the gallery applications that should be made available to the VM/VMSS
     */
    applicationProfile?: ApplicationProfileResponse;
    /**
     * Specifies the billing related details of a Azure Spot VMSS. Minimum api-version: 2019-03-01.
     */
    billingProfile?: BillingProfileResponse;
    /**
     * Specifies the capacity reservation related details of a scale set. Minimum api-version: 2021-04-01.
     */
    capacityReservation?: CapacityReservationProfileResponse;
    /**
     * Specifies the boot diagnostic settings state. Minimum api-version: 2015-06-15.
     */
    diagnosticsProfile?: DiagnosticsProfileResponse;
    /**
     * Specifies the eviction policy for the Azure Spot virtual machine and Azure Spot scale set. For Azure Spot virtual machines, both 'Deallocate' and 'Delete' are supported and the minimum api-version is 2019-03-01. For Azure Spot scale sets, both 'Deallocate' and 'Delete' are supported and the minimum api-version is 2017-10-30-preview.
     */
    evictionPolicy?: string;
    /**
     * Specifies a collection of settings for extensions installed on virtual machines in the scale set.
     */
    extensionProfile?: VirtualMachineScaleSetExtensionProfileResponse;
    /**
     * Specifies the hardware profile related details of a scale set. Minimum api-version: 2021-11-01.
     */
    hardwareProfile?: VirtualMachineScaleSetHardwareProfileResponse;
    /**
     * Specifies that the image or disk that is being used was licensed on-premises. <br><br> Possible values for Windows Server operating system are: <br><br> Windows_Client <br><br> Windows_Server <br><br> Possible values for Linux Server operating system are: <br><br> RHEL_BYOS (for RHEL) <br><br> SLES_BYOS (for SUSE) <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/windows/hybrid-use-benefit-licensing) <br><br> [Azure Hybrid Use Benefit for Linux Server](https://docs.microsoft.com/azure/virtual-machines/linux/azure-hybrid-benefit-linux) <br><br> Minimum api-version: 2015-06-15
     */
    licenseType?: string;
    /**
     * Specifies properties of the network interfaces of the virtual machines in the scale set.
     */
    networkProfile?: VirtualMachineScaleSetNetworkProfileResponse;
    /**
     * Specifies the operating system settings for the virtual machines in the scale set.
     */
    osProfile?: VirtualMachineScaleSetOSProfileResponse;
    /**
     * Specifies the priority for the virtual machines in the scale set. Minimum api-version: 2017-10-30-preview.
     */
    priority?: string;
    /**
     * Specifies Scheduled Event related configurations.
     */
    scheduledEventsProfile?: ScheduledEventsProfileResponse;
    /**
     * Specifies the security posture to be used for all virtual machines in the scale set. Minimum api-version: 2023-03-01
     */
    securityPostureReference?: SecurityPostureReferenceResponse;
    /**
     * Specifies the Security related profile settings for the virtual machines in the scale set.
     */
    securityProfile?: SecurityProfileResponse;
    /**
     * Specifies the service artifact reference id used to set same image version for all virtual machines in the scale set when using 'latest' image version. Minimum api-version: 2022-11-01
     */
    serviceArtifactReference?: ServiceArtifactReferenceResponse;
    /**
     * Specifies the storage settings for the virtual machine disks.
     */
    storageProfile?: VirtualMachineScaleSetStorageProfileResponse;
    /**
     * UserData for the virtual machines in the scale set, which must be base-64 encoded. Customer should not pass any secrets in here. Minimum api-version: 2021-03-01.
     */
    userData?: string;
}

/**
 * The protection policy of a virtual machine scale set VM.
 */
export interface VirtualMachineScaleSetVMProtectionPolicyResponse {
    /**
     * Indicates that the virtual machine scale set VM shouldn't be considered for deletion during a scale-in operation.
     */
    protectFromScaleIn?: boolean;
    /**
     * Indicates that model updates or actions (including scale-in) initiated on the virtual machine scale set should not be applied to the virtual machine scale set VM.
     */
    protectFromScaleSetActions?: boolean;
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
     * Indicates whether VMAgent Platform Updates is enabled for the Windows virtual machine. Default value is false.
     */
    enableVMAgentPlatformUpdates?: boolean;
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





















