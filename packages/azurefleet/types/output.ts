import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * AdditionalCapabilities for VM.
 */
export interface AdditionalCapabilitiesResponse {
    /**
     * The flag that enables or disables hibernation capability on the VM.
     */
    hibernationEnabled?: boolean;
    /**
     * The flag that enables or disables a capability to have one or more managed data disks with UltraSSD_LRS storage account type on the VM or VMSS.
     * Managed disks with storage account type UltraSSD_LRS can be added to a virtual machine or virtual machine scale set only if this property is enabled.
     */
    ultraSSDEnabled?: boolean;
}

/**
 * Represents the configuration for additional locations where Fleet resources may be deployed.
 */
export interface AdditionalLocationsProfileResponse {
    /**
     * The list of location profiles.
     */
    locationProfiles: LocationProfileResponse[];
}

/**
 * Specifies additional XML formatted information that can be included in the
 * Unattend.xml file, which is used by Windows Setup. Contents are defined by
 * setting name, component name, and the pass in which the content is applied.
 */
export interface AdditionalUnattendContentResponse {
    /**
     * The component name. Currently, the only allowable value is
     * Microsoft-Windows-Shell-Setup.
     */
    componentName?: string;
    /**
     * The pass name. Currently, the only allowable value is OobeSystem.
     */
    passName?: string;
    /**
     * Specifies the name of the setting to which the content applies. Possible values
     * are: FirstLogonCommands and AutoLogon.
     */
    settingName?: string;
}

/**
 * The API entity reference.
 */
export interface ApiEntityReferenceResponse {
    /**
     * The ARM resource id in the form of
     * /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...
     */
    id?: string;
}

/**
 * Contains the list of gallery applications that should be made available to the
 * VM/VMSS
 */
export interface ApplicationProfileResponse {
    /**
     * Specifies the gallery applications that should be made available to the VM/VMSS
     */
    galleryApplications?: VMGalleryApplicationResponse[];
}

/**
 * Describes the base virtual machine profile for fleet
 */
export interface BaseVirtualMachineProfileResponse {
    /**
     * Specifies the gallery applications that should be made available to the VM/VMSS
     */
    applicationProfile?: ApplicationProfileResponse;
    /**
     * Specifies the capacity reservation related details of a scale set. Minimum
     * api-version: 2021-04-01.
     */
    capacityReservation?: CapacityReservationProfileResponse;
    /**
     * Specifies the boot diagnostic settings state.
     */
    diagnosticsProfile?: DiagnosticsProfileResponse;
    /**
     * Specifies a collection of settings for extensions installed on virtual machines
     * in the scale set.
     */
    extensionProfile?: VirtualMachineScaleSetExtensionProfileResponse;
    /**
     * Specifies the hardware profile related details of a scale set. Minimum
     * api-version: 2021-11-01.
     */
    hardwareProfile?: VirtualMachineScaleSetHardwareProfileResponse;
    /**
     * Specifies that the image or disk that is being used was licensed on-premises.
     * <br><br> Possible values for Windows Server operating system are: <br><br>
     * Windows_Client <br><br> Windows_Server <br><br> Possible values for Linux
     * Server operating system are: <br><br> RHEL_BYOS (for RHEL) <br><br> SLES_BYOS
     * (for SUSE) <br><br> For more information, see [Azure Hybrid Use Benefit for
     * Windows
     * Server](https://learn.microsoft.com/azure/virtual-machines/windows/hybrid-use-benefit-licensing)
     * <br><br> [Azure Hybrid Use Benefit for Linux
     * Server](https://learn.microsoft.com/azure/virtual-machines/linux/azure-hybrid-benefit-linux)
     * <br><br> Minimum api-version: 2015-06-15
     */
    licenseType?: string;
    /**
     * Specifies properties of the network interfaces of the virtual machines in the
     * scale set.
     */
    networkProfile?: VirtualMachineScaleSetNetworkProfileResponse;
    /**
     * Specifies the operating system settings for the virtual machines in the scale
     * set.
     */
    osProfile?: VirtualMachineScaleSetOSProfileResponse;
    /**
     * Specifies Scheduled Event related configurations.
     */
    scheduledEventsProfile?: ScheduledEventsProfileResponse;
    /**
     * Specifies the security posture to be used for all virtual machines in the scale
     * set. Minimum api-version: 2023-03-01
     */
    securityPostureReference?: SecurityPostureReferenceResponse;
    /**
     * Specifies the Security related profile settings for the virtual machines in the
     * scale set.
     */
    securityProfile?: SecurityProfileResponse;
    /**
     * Specifies the service artifact reference id used to set same image version for
     * all virtual machines in the scale set when using 'latest' image version.
     * Minimum api-version: 2022-11-01
     */
    serviceArtifactReference?: ServiceArtifactReferenceResponse;
    /**
     * Specifies the storage settings for the virtual machine disks.
     */
    storageProfile?: VirtualMachineScaleSetStorageProfileResponse;
    /**
     * Specifies the time in which this VM profile for the Virtual Machine Scale Set
     * was created. Minimum API version for this property is 2023-09-01. This value
     * will be added to VMSS Flex VM tags when creating/updating the VMSS VM Profile
     * with minimum api-version 2023-09-01. Examples: "2024-07-01T00:00:01.1234567+00:00"
     */
    timeCreated: string;
    /**
     * UserData for the virtual machines in the scale set, which must be base-64
     * encoded. Customer should not pass any secrets in here. Minimum api-version:
     * 2021-03-01.
     */
    userData?: string;
}

/**
 * Boot Diagnostics is a debugging feature which allows you to view Console Output
 * and Screenshot to diagnose VM status. You can easily view the output of your
 * console log. Azure also enables you to see a screenshot of the VM from the
 * hypervisor.
 */
export interface BootDiagnosticsResponse {
    /**
     * Whether boot diagnostics should be enabled on the Virtual Machine.
     */
    enabled?: boolean;
    /**
     * Uri of the storage account to use for placing the console output and
     * screenshot. If storageUri is not specified while enabling boot diagnostics,
     * managed storage will be used.
     */
    storageUri?: string;
}

/**
 * The parameters of a capacity reservation Profile.
 */
export interface CapacityReservationProfileResponse {
    /**
     * Specifies the capacity reservation group resource id that should be used for
     * allocating the virtual machine or scaleset vm instances provided enough
     * capacity has been reserved. Please refer to https://aka.ms/CapacityReservation
     * for more details.
     */
    capacityReservationGroup?: SubResourceResponse;
}

/**
 * Compute Profile to use for running user's workloads.
 */
export interface ComputeProfileResponse {
    /**
     * Specifies VMSS and VM API entity models support two additional capabilities as of today: ultraSSDEnabled and hibernationEnabled.
     * ultraSSDEnabled: Enables UltraSSD_LRS storage account type on the VMSS VMs.
     * hibernationEnabled: Enables the hibernation capability on the VMSS VMs.
     * Default value is null if not specified. This property cannot be updated once set.
     */
    additionalVirtualMachineCapabilities?: AdditionalCapabilitiesResponse;
    /**
     * Base Virtual Machine Profile Properties to be specified according to "specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/{computeApiVersion}/virtualMachineScaleSet.json#/definitions/VirtualMachineScaleSetVMProfile"
     */
    baseVirtualMachineProfile: BaseVirtualMachineProfileResponse;
    /**
     * Specifies the Microsoft.Compute API version to use when creating underlying Virtual Machine scale sets and Virtual Machines.
     * The default value will be the latest supported computeApiVersion by Compute Fleet.
     */
    computeApiVersion?: string;
    /**
     * Specifies the number of fault domains to use when creating the underlying VMSS.
     * A fault domain is a logical group of hardware within an Azure datacenter.
     * VMs in the same fault domain share a common power source and network switch.
     * If not specified, defaults to 1, which represents "Max Spreading" (using as many fault domains as possible).
     * This property cannot be updated.
     */
    platformFaultDomainCount?: number;
}

/**
 * Specifies the boot diagnostic settings state. Minimum api-version: 2015-06-15.
 */
export interface DiagnosticsProfileResponse {
    /**
     * Boot Diagnostics is a debugging feature which allows you to view Console Output
     * and Screenshot to diagnose VM status. **NOTE**: If storageUri is being
     * specified then ensure that the storage account is in the same region and
     * subscription as the VM. You can easily view the output of your console log.
     * Azure also enables you to see a screenshot of the VM from the hypervisor.
     */
    bootDiagnostics?: BootDiagnosticsResponse;
}

/**
 * Describes the parameters of ephemeral disk settings that can be specified for
 * operating system disk. **Note:** The ephemeral disk settings can only be
 * specified for managed disk.
 */
export interface DiffDiskSettingsResponse {
    /**
     * Specifies the ephemeral disk settings for operating system disk.
     */
    option?: string;
    /**
     * Specifies the ephemeral disk placement for operating system disk. Possible
     * values are: **CacheDisk,** **ResourceDisk.** The defaulting behavior is:
     * **CacheDisk** if one is configured for the VM size otherwise **ResourceDisk**
     * is used. Refer to the VM size documentation for Windows VM at
     * https://learn.microsoft.com/azure/virtual-machines/windows/sizes and Linux VM at
     * https://learn.microsoft.com/azure/virtual-machines/linux/sizes to check which VM
     * sizes exposes a cache disk.
     */
    placement?: string;
}

/**
 * Describes the parameter of customer managed disk encryption set resource id
 * that can be specified for disk. **Note:** The disk encryption set resource id
 * can only be specified for managed disk. Please refer
 * https://aka.ms/mdssewithcmkoverview for more details.
 */
export interface DiskEncryptionSetParametersResponse {
    /**
     * Resource Id
     */
    id?: string;
}

/**
 * Specifies the Managed Identity used by ADE to get access token for keyvault
 * operations.
 */
export interface EncryptionIdentityResponse {
    /**
     * Specifies ARM Resource ID of one of the user identities associated with the VM.
     */
    userAssignedIdentityResourceId?: string;
}

/**
 * Specifies information about the image to use. You can specify information about
 * platform images, marketplace images, or virtual machine images. This element is
 * required when you want to use a platform image, marketplace image, or virtual
 * machine image, but is not used in other creation operations. NOTE: Image
 * reference publisher and offer can only be set when you create the scale set.
 */
export interface ImageReferenceResponse {
    /**
     * Specified the community gallery image unique id for vm deployment. This can be
     * fetched from community gallery image GET call.
     */
    communityGalleryImageId?: string;
    /**
     * Specifies in decimal numbers, the version of platform image or marketplace
     * image used to create the virtual machine. This readonly field differs from 'version',
     * only if the value specified in 'version' field is 'latest'.
     */
    exactVersion: string;
    /**
     * Resource Id
     */
    id?: string;
    /**
     * Specifies the offer of the platform image or marketplace image used to create
     * the virtual machine.
     */
    offer?: string;
    /**
     * The image publisher.
     */
    publisher?: string;
    /**
     * Specified the shared gallery image unique id for vm deployment. This can be
     * fetched from shared gallery image GET call.
     */
    sharedGalleryImageId?: string;
    /**
     * The image SKU.
     */
    sku?: string;
    /**
     * Specifies the version of the platform image or marketplace image used to create
     * the virtual machine. The allowed formats are Major.Minor.Build or 'latest'.
     * Major, Minor, and Build are decimal numbers. Specify 'latest' to use the latest
     * version of an image available at deploy time. Even if you use 'latest', the VM
     * image will not automatically update after deploy time even if a new version
     * becomes available. Please do not use field 'version' for gallery image
     * deployment, gallery image should always use 'id' field for deployment, to use 'latest'
     * version of gallery image, just set
     * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{imageName}'
     * in the 'id' field without version input.
     */
    version?: string;
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
 * Specifies the Linux operating system settings on the virtual machine. For a
 * list of supported Linux distributions, see [Linux on Azure-Endorsed
 * Distributions](https://learn.microsoft.com/azure/virtual-machines/linux/endorsed-distros).
 */
export interface LinuxConfigurationResponse {
    /**
     * Specifies whether password authentication should be disabled.
     */
    disablePasswordAuthentication?: boolean;
    /**
     * Indicates whether VMAgent Platform Updates is enabled for the Linux virtual
     * machine. Default value is false.
     */
    enableVMAgentPlatformUpdates?: boolean;
    /**
     * [Preview Feature] Specifies settings related to VM Guest Patching on Linux.
     */
    patchSettings?: LinuxPatchSettingsResponse;
    /**
     * Indicates whether virtual machine agent should be provisioned on the virtual
     * machine. When this property is not specified in the request body, default
     * behavior is to set it to true. This will ensure that VM Agent is installed on
     * the VM so that extensions can be added to the VM later.
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
     * Specifies the mode of VM Guest Patch Assessment for the IaaS virtual
     * machine.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - You
     * control the timing of patch assessments on a virtual machine. <br /><br />
     * **AutomaticByPlatform** - The platform will trigger periodic patch assessments.
     * The property provisionVMAgent must be true.
     */
    assessmentMode?: string;
    /**
     * Specifies additional settings for patch mode AutomaticByPlatform in VM Guest
     * Patching on Linux.
     */
    automaticByPlatformSettings?: LinuxVMGuestPatchAutomaticByPlatformSettingsResponse;
    /**
     * Specifies the mode of VM Guest Patching to IaaS virtual machine or virtual
     * machines associated to virtual machine scale set with OrchestrationMode as
     * Flexible.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - The
     * virtual machine's default patching configuration is used. <br /><br />
     * **AutomaticByPlatform** - The virtual machine will be automatically updated by
     * the platform. The property provisionVMAgent must be true
     */
    patchMode?: string;
}

/**
 * Specifies additional settings to be applied when patch mode AutomaticByPlatform
 * is selected in Linux patch settings.
 */
export interface LinuxVMGuestPatchAutomaticByPlatformSettingsResponse {
    /**
     * Enables customer to schedule patching without accidental upgrades
     */
    bypassPlatformSafetyChecksOnUserSchedule?: boolean;
    /**
     * Specifies the reboot setting for all AutomaticByPlatform patch installation
     * operations.
     */
    rebootSetting?: string;
}

/**
 * Represents the profile for a single additional location in the Fleet. The location and the virtualMachineProfileOverride (optional).
 */
export interface LocationProfileResponse {
    /**
     * The ARM location name of the additional region. If LocationProfile is specified, then location is required.
     */
    location: string;
    /**
     * An override for computeProfile.baseVirtualMachineProfile specific to this region. 
     * This override is merged with the base virtual machine profile to define the final virtual machine profile for the resources deployed in this location.
     */
    virtualMachineProfileOverride?: BaseVirtualMachineProfileResponse;
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
 * Specifies OS Image Scheduled Event related configurations.
 */
export interface OSImageNotificationProfileResponse {
    /**
     * Specifies whether the OS Image Scheduled event is enabled or disabled.
     */
    enable?: boolean;
    /**
     * Length of time a Virtual Machine being reimaged or having its OS upgraded will
     * have to potentially approve the OS Image Scheduled Event before the event is
     * auto approved (timed out). The configuration is specified in ISO 8601 format,
     * and the value must not exceed 15 minutes (PT15M)
     */
    notBeforeTimeout?: string;
}

/**
 * Specifies settings related to VM Guest Patching on Windows.
 */
export interface PatchSettingsResponse {
    /**
     * Specifies the mode of VM Guest patch assessment for the IaaS virtual
     * machine.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - You
     * control the timing of patch assessments on a virtual machine.<br /><br />
     * **AutomaticByPlatform** - The platform will trigger periodic patch assessments.
     * The property provisionVMAgent must be true.
     */
    assessmentMode?: string;
    /**
     * Specifies additional settings for patch mode AutomaticByPlatform in VM Guest
     * Patching on Windows.
     */
    automaticByPlatformSettings?: WindowsVMGuestPatchAutomaticByPlatformSettingsResponse;
    /**
     * Enables customers to patch their Azure VMs without requiring a reboot. For
     * enableHotpatching, the 'provisionVMAgent' must be set to true and 'patchMode'
     * must be set to 'AutomaticByPlatform'.
     */
    enableHotpatching?: boolean;
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
 * Specifies ProxyAgent settings while creating the virtual machine. Minimum
 * api-version: 2023-09-01.
 */
export interface ProxyAgentSettingsResponse {
    /**
     * Specifies whether ProxyAgent feature should be enabled on the virtual machine
     * or virtual machine scale set.
     */
    enabled?: boolean;
    /**
     * Increase the value of this property allows user to reset the key used for
     * securing communication channel between guest and host.
     */
    keyIncarnationId?: number;
    /**
     * Specifies the mode that ProxyAgent will execute on if the feature is enabled.
     * ProxyAgent will start to audit or monitor but not enforce access control over
     * requests to host endpoints in Audit mode, while in Enforce mode it will enforce
     * access control. The default value is Enforce mode.
     */
    mode?: string;
}

/**
 * Describes the public IP Sku. It can only be set with OrchestrationMode as
 * Flexible.
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
 * Configuration Options for Regular instances in Compute Fleet.
 */
export interface RegularPriorityProfileResponse {
    /**
     * Allocation strategy to follow when determining the VM sizes distribution for Regular VMs.
     */
    allocationStrategy?: string;
    /**
     * Total capacity to achieve. It is currently in terms of number of VMs.
     */
    capacity?: number;
    /**
     * Minimum capacity to achieve which cannot be updated. If we will not be able to "guarantee" minimum capacity, we will reject the request in the sync path itself.
     */
    minCapacity?: number;
}

/**
 * Specifies Scheduled Event related configurations.
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
 * Specifies the security posture to be used for all virtual machines in the scale
 * set. Minimum api-version: 2023-03-01
 */
export interface SecurityPostureReferenceResponse {
    /**
     * List of virtual machine extension names to exclude when applying the security
     * posture.
     */
    excludeExtensions?: string[];
    /**
     * The security posture reference id in the form of
     * /CommunityGalleries/{communityGalleryName}/securityPostures/{securityPostureName}/versions/{major.minor.patch}|{major.*}|latest
     */
    id?: string;
    /**
     * Whether the security posture can be overridden by the user.
     */
    isOverridable?: boolean;
}

/**
 * Specifies the Security profile settings for the virtual machine or virtual
 * machine scale set.
 */
export interface SecurityProfileResponse {
    /**
     * This property can be used by user in the request to enable or disable the Host
     * Encryption for the virtual machine or virtual machine scale set. This will
     * enable the encryption for all the disks including Resource/Temp disk at host
     * itself. The default behavior is: The Encryption at host will be disabled unless
     * this property is set to true for the resource.
     */
    encryptionAtHost?: boolean;
    /**
     * Specifies the Managed Identity used by ADE to get access token for keyvault
     * operations.
     */
    encryptionIdentity?: EncryptionIdentityResponse;
    /**
     * Specifies ProxyAgent settings while creating the virtual machine. Minimum
     * api-version: 2023-09-01.
     */
    proxyAgentSettings?: ProxyAgentSettingsResponse;
    /**
     * Specifies the SecurityType of the virtual machine. It has to be set to any
     * specified value to enable UefiSettings. The default behavior is: UefiSettings
     * will not be enabled unless this property is set.
     */
    securityType?: string;
    /**
     * Specifies the security settings like secure boot and vTPM used while creating
     * the virtual machine. Minimum api-version: 2020-12-01.
     */
    uefiSettings?: UefiSettingsResponse;
}

/**
 * Specifies the service artifact reference id used to set same image version for
 * all virtual machines in the scale set when using 'latest' image version.
 * Minimum api-version: 2022-11-01
 */
export interface ServiceArtifactReferenceResponse {
    /**
     * The service artifact reference id in the form of
     * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/galleries/{galleryName}/serviceArtifacts/{serviceArtifactName}/vmArtifactsProfiles/{vmArtifactsProfilesName}
     */
    id?: string;
}

/**
 * Configuration Options for Spot instances in Compute Fleet.
 */
export interface SpotPriorityProfileResponse {
    /**
     * Allocation strategy to follow when determining the VM sizes distribution for Spot VMs.
     */
    allocationStrategy?: string;
    /**
     * Total capacity to achieve. It is currently in terms of number of VMs.
     */
    capacity?: number;
    /**
     * Eviction Policy to follow when evicting Spot VMs.
     */
    evictionPolicy?: string;
    /**
     * Flag to enable/disable continuous goal seeking for the desired capacity and restoration of evicted Spot VMs.
     * If maintain is enabled, AzureFleetRP will use all VM sizes in vmSizesProfile to create new VMs (if VMs are evicted deleted)
     * or update existing VMs with new VM sizes (if VMs are evicted deallocated or failed to allocate due to capacity constraint) in order to achieve the desired capacity.
     * Maintain is enabled by default.
     */
    maintain?: boolean;
    /**
     * Price per hour of each Spot VM will never exceed this.
     */
    maxPricePerVM?: number;
    /**
     * Minimum capacity to achieve which cannot be updated. If we will not be able to "guarantee" minimum capacity, we will reject the request in the sync path itself.
     */
    minCapacity?: number;
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
 * Contains information about SSH certificate public key and the path on the Linux
 * VM where the public key is placed.
 */
export interface SshPublicKeyResponse {
    /**
     * SSH public key certificate used to authenticate with the VM through ssh. The
     * key needs to be at least 2048-bit and in ssh-rsa format. For creating ssh keys,
     * see [Create SSH keys on Linux and Mac for Linux VMs in
     * Azure]https://learn.microsoft.com/azure/virtual-machines/linux/create-ssh-keys-detailed).
     */
    keyData?: string;
    /**
     * Specifies the full path on the created VM where ssh public key is stored. If
     * the file already exists, the specified key is appended to the file. Example:
     * /home/user/.ssh/authorized_keys
     */
    path?: string;
}

/**
 * Describes SubResource
 */
export interface SubResourceResponse {
    /**
     * Resource Id
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
 * Specifies Terminate Scheduled Event related configurations.
 */
export interface TerminateNotificationProfileResponse {
    /**
     * Specifies whether the Terminate Scheduled event is enabled or disabled.
     */
    enable?: boolean;
    /**
     * Configurable length of time a Virtual Machine being deleted will have to
     * potentially approve the Terminate Scheduled Event before the event is auto
     * approved (timed out). The configuration must be specified in ISO 8601 format,
     * the default value is 5 minutes (PT5M)
     */
    notBeforeTimeout?: string;
}

/**
 * Specifies the security settings like secure boot and vTPM used while creating
 * the virtual machine. Minimum api-version: 2020-12-01.
 */
export interface UefiSettingsResponse {
    /**
     * Specifies whether secure boot should be enabled on the virtual machine. Minimum
     * api-version: 2020-12-01.
     */
    secureBootEnabled?: boolean;
    /**
     * Specifies whether vTPM should be enabled on the virtual machine. Minimum
     * api-version: 2020-12-01.
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
 * VMAttributes using double values.
 */
export interface VMAttributeMinMaxDoubleResponse {
    /**
     * Maximum value. Double.MaxValue(1.7976931348623157E+308)
     */
    max?: number;
    /**
     * Minimum value. default 0. Double.MinValue()
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
 * VMAttributes that will be used to filter VMSizes which will be used to build Fleet.
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
     * Specifies whether the VMSize supporting accelerator should be used to build Fleet or not.
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
     * The VM architecture types specified as a list. Optional parameter.
     */
    architectureTypes?: string[];
    /**
     * Specifies whether the VMSize supporting burstable capability should be used to build Fleet or not.
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
     * Specifies which VMSizes should be excluded while building Fleet. Optional parameter.
     */
    excludedVMSizes?: string[];
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
     * Specifies whether the VMSize supporting local storage should be used to build Fleet or not.
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
     * Specifies whether the VMSize supporting RDMA (Remote Direct Memory Access) should be used to build Fleet or not.
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
 * Specifies the security profile settings for the managed disk. **Note:** It can
 * only be set for Confidential VMs.
 */
export interface VMDiskSecurityProfileResponse {
    /**
     * Specifies the customer managed disk encryption set resource id for the managed
     * disk that is used for Customer Managed Key encrypted ConfidentialVM OS Disk and
     * VMGuest blob.
     */
    diskEncryptionSet?: DiskEncryptionSetParametersResponse;
    /**
     * Specifies the EncryptionType of the managed disk. It is set to
     * DiskWithVMGuestState for encryption of the managed disk along with VMGuestState
     * blob, VMGuestStateOnly for encryption of just the VMGuestState blob, and
     * NonPersistedTPM for not persisting firmware state in the VMGuestState blob..
     * **Note:** It can be set for only Confidential VMs.
     */
    securityEncryptionType?: string;
}

/**
 * Specifies the required information to reference a compute gallery application
 * version
 */
export interface VMGalleryApplicationResponse {
    /**
     * Optional, Specifies the uri to an azure blob that will replace the default
     * configuration for the package if provided
     */
    configurationReference?: string;
    /**
     * If set to true, when a new Gallery Application version is available in PIR/SIG,
     * it will be automatically updated for the VM/VMSS
     */
    enableAutomaticUpgrade?: boolean;
    /**
     * Optional, Specifies the order in which the packages have to be installed
     */
    order?: number;
    /**
     * Specifies the GalleryApplicationVersion resource id on the form of
     * /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{application}/versions/{version}
     */
    packageReferenceId: string;
    /**
     * Optional, Specifies a passthrough value for more generic context.
     */
    tags?: string;
    /**
     * Optional, If true, any failure for any operation in the VmApplication will fail
     * the deployment
     */
    treatFailureAsDeploymentFailure?: boolean;
}

/**
 * Specifies VM Size Property settings on the virtual machine.
 */
export interface VMSizePropertiesResponse {
    /**
     * Specifies the number of vCPUs available for the VM. When this property is not
     * specified in the request body the default behavior is to set it to the value of
     * vCPUs available for that VM size exposed in api response of [List all available
     * virtual machine sizes in a
     * region](https://learn.microsoft.com/en-us/rest/api/compute/resource-skus/list).
     */
    vCPUsAvailable?: number;
    /**
     * Specifies the vCPU to physical core ratio. When this property is not specified
     * in the request body the default behavior is set to the value of vCPUsPerCore
     * for the VM Size exposed in api response of [List all available virtual machine
     * sizes in a
     * region](https://learn.microsoft.com/en-us/rest/api/compute/resource-skus/list).
     * **Setting this property to 1 also means that hyper-threading is disabled.**
     */
    vCPUsPerCore?: number;
}

/**
 * Describes a single certificate reference in a Key Vault, and where the
 * certificate should reside on the VM.
 */
export interface VaultCertificateResponse {
    /**
     * For Windows VMs, specifies the certificate store on the Virtual Machine to
     * which the certificate should be added. The specified certificate store is
     * implicitly in the LocalMachine account. For Linux VMs, the certificate file is
     * placed under the /var/lib/waagent directory, with the file name
     * &lt;UppercaseThumbprint&gt;.crt for the X509 certificate file and
     * &lt;UppercaseThumbprint&gt;.prv for private key. Both of these files are .pem
     * formatted.
     */
    certificateStore?: string;
    /**
     * This is the URL of a certificate that has been uploaded to Key Vault as a
     * secret. For adding a secret to the Key Vault, see [Add a key or secret to the
     * key
     * vault](https://learn.microsoft.com/azure/key-vault/key-vault-get-started/#add).
     * In this case, your certificate needs to be It is the Base64 encoding of the
     * following JSON Object which is encoded in UTF-8: <br><br> {<br>
     * "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>
     * "password":"<pfx-file-password>"<br>} <br> To install certificates on a virtual
     * machine it is recommended to use the [Azure Key Vault virtual machine extension
     * for
     * Linux](https://learn.microsoft.com/azure/virtual-machines/extensions/key-vault-linux)
     * or the [Azure Key Vault virtual machine extension for
     * Windows](https://learn.microsoft.com/azure/virtual-machines/extensions/key-vault-windows).
     */
    certificateUrl?: string;
}

/**
 * Describes a set of certificates which are all in the same Key Vault.
 */
export interface VaultSecretGroupResponse {
    /**
     * The relative URL of the Key Vault containing all of the certificates in
     * VaultCertificates.
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
 * Describes a virtual machine scale set data disk.
 */
export interface VirtualMachineScaleSetDataDiskResponse {
    /**
     * Specifies the caching requirements. Possible values are: **None,**
     * **ReadOnly,** **ReadWrite.** The default values are: **None for Standard
     * storage. ReadOnly for Premium storage.**
     */
    caching?: string;
    /**
     * The create option.
     */
    createOption: string;
    /**
     * Specifies whether data disk should be deleted or detached upon VMSS Flex
     * deletion (This feature is available for VMSS with Flexible OrchestrationMode
     * only).<br><br> Possible values: <br><br> **Delete** If this value is used, the
     * data disk is deleted when the VMSS Flex VM is deleted.<br><br> **Detach** If
     * this value is used, the data disk is retained after VMSS Flex VM is
     * deleted.<br><br> The default value is set to **Delete**.
     */
    deleteOption?: string;
    /**
     * Specifies the Read-Write IOPS for the managed disk. Should be used only when
     * StorageAccountType is UltraSSD_LRS. If not specified, a default value would be
     * assigned based on diskSizeGB.
     */
    diskIOPSReadWrite?: number;
    /**
     * Specifies the bandwidth in MB per second for the managed disk. Should be used
     * only when StorageAccountType is UltraSSD_LRS. If not specified, a default value
     * would be assigned based on diskSizeGB.
     */
    diskMBpsReadWrite?: number;
    /**
     * Specifies the size of an empty data disk in gigabytes. This element can be used
     * to overwrite the size of the disk in a virtual machine image. The property
     * diskSizeGB is the number of bytes x 1024^3 for the disk and the value cannot be
     * larger than 1023.
     */
    diskSizeGB?: number;
    /**
     * Specifies the logical unit number of the data disk. This value is used to
     * identify data disks within the VM and therefore must be unique for each data
     * disk attached to a VM.
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
     * Specifies the time alloted for all extensions to start. The time duration
     * should be between 15 minutes and 120 minutes (inclusive) and should be
     * specified in ISO 8601 format. The default value is 90 minutes (PT1H30M).
     * Minimum api-version: 2020-06-01.
     */
    extensionsTimeBudget?: string;
}

/**
 * Describes the properties of a Virtual Machine Scale Set Extension.
 */
export interface VirtualMachineScaleSetExtensionPropertiesResponse {
    /**
     * Indicates whether the extension should use a newer minor version if one is
     * available at deployment time. Once deployed, however, the extension will not
     * upgrade minor versions unless redeployed, even with this property set to true.
     */
    autoUpgradeMinorVersion?: boolean;
    /**
     * Indicates whether the extension should be automatically upgraded by the
     * platform if there is a newer version of the extension available.
     */
    enableAutomaticUpgrade?: boolean;
    /**
     * If a value is provided and is different from the previous value, the extension
     * handler will be forced to update even if the extension configuration has not
     * changed.
     */
    forceUpdateTag?: string;
    /**
     * The extensions protected settings that are passed by reference, and consumed
     * from key vault
     */
    protectedSettingsFromKeyVault?: KeyVaultSecretReferenceResponse;
    /**
     * Collection of extension names after which this extension needs to be
     * provisioned.
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
     * Indicates whether failures stemming from the extension will be suppressed
     * (Operational failures such as not connecting to the VM will not be suppressed
     * regardless of this value). The default is false.
     */
    suppressFailures?: boolean;
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
 * Describes a Virtual Machine Scale Set Extension.
 */
export interface VirtualMachineScaleSetExtensionResponse {
    /**
     * Resource Id
     */
    id: string;
    /**
     * The name of the extension.
     */
    name?: string;
    /**
     * Describes the properties of a Virtual Machine Scale Set Extension.
     */
    properties?: VirtualMachineScaleSetExtensionPropertiesResponse;
    /**
     * Resource type
     */
    type: string;
}

/**
 * Specifies the hardware settings for the virtual machine scale set.
 */
export interface VirtualMachineScaleSetHardwareProfileResponse {
    /**
     * Specifies the properties for customizing the size of the virtual machine.
     * Minimum api-version: 2021-11-01. Please follow the instructions in [VM
     * Customization](https://aka.ms/vmcustomization) for more details.
     */
    vmSizeProperties?: VMSizePropertiesResponse;
}

/**
 * Describes a virtual machine scale set network profile's IP configuration
 * properties.
 */
export interface VirtualMachineScaleSetIPConfigurationPropertiesResponse {
    /**
     * Specifies an array of references to backend address pools of application
     * gateways. A scale set can reference backend address pools of multiple
     * application gateways. Multiple scale sets cannot use the same application
     * gateway.
     */
    applicationGatewayBackendAddressPools?: SubResourceResponse[];
    /**
     * Specifies an array of references to application security group.
     */
    applicationSecurityGroups?: SubResourceResponse[];
    /**
     * Specifies an array of references to backend address pools of load balancers. A
     * scale set can reference backend address pools of one public and one internal
     * load balancer. Multiple scale sets cannot use the same basic sku load balancer.
     */
    loadBalancerBackendAddressPools?: SubResourceResponse[];
    /**
     * Specifies an array of references to inbound Nat pools of the load balancers. A
     * scale set can reference inbound nat pools of one public and one internal load
     * balancer. Multiple scale sets cannot use the same basic sku load balancer.
     */
    loadBalancerInboundNatPools?: SubResourceResponse[];
    /**
     * Specifies the primary network interface in case the virtual machine has more
     * than 1 network interface.
     */
    primary?: boolean;
    /**
     * Available from Api-Version 2017-03-30 onwards, it represents whether the
     * specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible
     * values are: 'IPv4' and 'IPv6'.
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
 * Describes a virtual machine scale set network profile's IP configuration.
 */
export interface VirtualMachineScaleSetIPConfigurationResponse {
    /**
     * The IP configuration name.
     */
    name: string;
    /**
     * Describes a virtual machine scale set network profile's IP configuration
     * properties.
     */
    properties?: VirtualMachineScaleSetIPConfigurationPropertiesResponse;
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
     * Specifies the customer managed disk encryption set resource id for the managed
     * disk.
     */
    diskEncryptionSet?: DiskEncryptionSetParametersResponse;
    /**
     * Specifies the security profile for the managed disk.
     */
    securityProfile?: VMDiskSecurityProfileResponse;
    /**
     * Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can
     * only be used with data disks, it cannot be used with OS Disk.
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
 * Describes a virtual machine scale set network profile's IP configuration.
 */
export interface VirtualMachineScaleSetNetworkConfigurationPropertiesResponse {
    /**
     * Specifies whether the Auxiliary mode is enabled for the Network Interface
     * resource.
     */
    auxiliaryMode?: string;
    /**
     * Specifies whether the Auxiliary sku is enabled for the Network Interface
     * resource.
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
     * The network security group.
     */
    networkSecurityGroup?: SubResourceResponse;
    /**
     * Specifies the primary network interface in case the virtual machine has more
     * than 1 network interface.
     */
    primary?: boolean;
}

/**
 * Describes a virtual machine scale set network profile's network configurations.
 */
export interface VirtualMachineScaleSetNetworkConfigurationResponse {
    /**
     * The network configuration name.
     */
    name: string;
    /**
     * Describes a virtual machine scale set network profile's IP configuration.
     */
    properties?: VirtualMachineScaleSetNetworkConfigurationPropertiesResponse;
}

/**
 * Describes a virtual machine scale set network profile.
 */
export interface VirtualMachineScaleSetNetworkProfileResponse {
    /**
     * A reference to a load balancer probe used to determine the health of an
     * instance in the virtual machine scale set. The reference will be in the form:
     * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/probes/{probeName}'.
     */
    healthProbe?: ApiEntityReferenceResponse;
    /**
     * specifies the Microsoft.Network API version used when creating networking
     * resources in the Network Interface Configurations for Virtual Machine Scale Set
     * with orchestration mode 'Flexible'
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
     * Specifies the caching requirements. Possible values are: **None,**
     * **ReadOnly,** **ReadWrite.** The default values are: **None for Standard
     * storage. ReadOnly for Premium storage.**
     */
    caching?: string;
    /**
     * Specifies how the virtual machines in the scale set should be created. The only
     * allowed value is: **FromImage.** This value is used when you are using an image
     * to create the virtual machine. If you are using a platform image, you also use
     * the imageReference element described above. If you are using a marketplace
     * image, you  also use the plan element previously described.
     */
    createOption: string;
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
    deleteOption?: string;
    /**
     * Specifies the ephemeral disk Settings for the operating system disk used by the
     * virtual machine scale set.
     */
    diffDiskSettings?: DiffDiskSettingsResponse;
    /**
     * Specifies the size of an empty data disk in gigabytes. This element can be used
     * to overwrite the size of the disk in a virtual machine image. The property 'diskSizeGB'
     * is the number of bytes x 1024^3 for the disk and the value cannot
     * be larger than 1023.
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
     * This property allows you to specify the type of the OS that is included in the
     * disk if creating a VM from user-image or a specialized VHD. Possible values
     * are: **Windows,** **Linux.**
     */
    osType?: string;
    /**
     * Specifies the container urls that are used to store operating system disks for
     * the scale set.
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
     * Specifies the name of the administrator account. <br><br> **Windows-only
     * restriction:** Cannot end in "." <br><br> **Disallowed values:**
     * "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3",
     * "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup",
     * "console", "david", "guest", "john", "owner", "root", "server", "sql",
     * "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5".
     * <br><br> **Minimum-length (Linux):** 1  character <br><br> **Max-length
     * (Linux):** 64 characters <br><br> **Max-length (Windows):** 20 characters
     */
    adminUsername?: string;
    /**
     * Specifies whether extension operations should be allowed on the virtual machine
     * scale set. This may only be set to False when no extensions are present on the
     * virtual machine scale set.
     */
    allowExtensionOperations?: boolean;
    /**
     * Specifies the computer name prefix for all of the virtual machines in the scale
     * set. Computer name prefixes must be 1 to 15 characters long.
     */
    computerNamePrefix?: string;
    /**
     * Specifies the Linux operating system settings on the virtual machine. For a
     * list of supported Linux distributions, see [Linux on Azure-Endorsed
     * Distributions](https://learn.microsoft.com/azure/virtual-machines/linux/endorsed-distros).
     */
    linuxConfiguration?: LinuxConfigurationResponse;
    /**
     * Optional property which must either be set to True or omitted.
     */
    requireGuestProvisionSignal?: boolean;
    /**
     * Specifies set of certificates that should be installed onto the virtual
     * machines in the scale set. To install certificates on a virtual machine it is
     * recommended to use the [Azure Key Vault virtual machine extension for
     * Linux](https://learn.microsoft.com/azure/virtual-machines/extensions/key-vault-linux)
     * or the [Azure Key Vault virtual machine extension for
     * Windows](https://learn.microsoft.com/azure/virtual-machines/extensions/key-vault-windows).
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
     * The Domain name label.The concatenation of the domain name label and vm index
     * will be the domain name labels of the PublicIPAddress resources that will be
     * created
     */
    domainNameLabel: string;
    /**
     * The Domain name label scope.The concatenation of the hashed domain name label
     * that generated according to the policy from domain name label scope and vm
     * index will be the domain name labels of the PublicIPAddress resources that will
     * be created
     */
    domainNameLabelScope?: string;
}

/**
 * Describes a virtual machines scale set IP Configuration's PublicIPAddress
 * configuration
 */
export interface VirtualMachineScaleSetPublicIPAddressConfigurationPropertiesResponse {
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
     * Available from Api-Version 2019-07-01 onwards, it represents whether the
     * specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4. Possible
     * values are: 'IPv4' and 'IPv6'.
     */
    publicIPAddressVersion?: string;
    /**
     * The PublicIPPrefix from which to allocate publicIP addresses.
     */
    publicIPPrefix?: SubResourceResponse;
}

/**
 * Describes a virtual machines scale set IP Configuration's PublicIPAddress
 * configuration
 */
export interface VirtualMachineScaleSetPublicIPAddressConfigurationResponse {
    /**
     * The publicIP address configuration name.
     */
    name: string;
    /**
     * Describes a virtual machines scale set IP Configuration's PublicIPAddress
     * configuration
     */
    properties?: VirtualMachineScaleSetPublicIPAddressConfigurationPropertiesResponse;
    /**
     * Describes the public IP Sku. It can only be set with OrchestrationMode as
     * Flexible.
     */
    sku?: PublicIPAddressSkuResponse;
}

/**
 * Describes a virtual machine scale set storage profile.
 */
export interface VirtualMachineScaleSetStorageProfileResponse {
    /**
     * Specifies the parameters that are used to add data disks to the virtual
     * machines in the scale set. For more information about disks, see [About disks
     * and VHDs for Azure virtual
     * machines](https://learn.microsoft.com/azure/virtual-machines/managed-disks-overview).
     */
    dataDisks?: VirtualMachineScaleSetDataDiskResponse[];
    /**
     * Specifies the disk controller type configured for the virtual machines in the scale set. Minimum api-version: 2022-08-01
     */
    diskControllerType?: string;
    /**
     * Specifies information about the image to use. You can specify information about
     * platform images, marketplace images, or virtual machine images. This element is
     * required when you want to use a platform image, marketplace image, or virtual
     * machine image, but is not used in other creation operations.
     */
    imageReference?: ImageReferenceResponse;
    /**
     * Specifies information about the operating system disk used by the virtual
     * machines in the scale set. For more information about disks, see [About disks
     * and VHDs for Azure virtual
     * machines](https://learn.microsoft.com/azure/virtual-machines/managed-disks-overview).
     */
    osDisk?: VirtualMachineScaleSetOSDiskResponse;
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
     * The rank of the VM size. This is used with 'RegularPriorityAllocationStrategy.Prioritized'
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
     * This is the URL of a certificate that has been uploaded to Key Vault as a
     * secret. For adding a secret to the Key Vault, see [Add a key or secret to the
     * key
     * vault](https://learn.microsoft.com/azure/key-vault/key-vault-get-started/#add).
     * In this case, your certificate needs to be the Base64 encoding of the following
     * JSON Object which is encoded in UTF-8: <br><br> {<br>
     * "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>
     * "password":"<pfx-file-password>"<br>} <br> To install certificates on a virtual
     * machine it is recommended to use the [Azure Key Vault virtual machine extension
     * for
     * Linux](https://learn.microsoft.com/azure/virtual-machines/extensions/key-vault-linux)
     * or the [Azure Key Vault virtual machine extension for
     * Windows](https://learn.microsoft.com/azure/virtual-machines/extensions/key-vault-windows).
     */
    certificateUrl?: string;
    /**
     * Specifies the protocol of WinRM listener. Possible values are: **http,**
     * **https.**
     */
    protocol?: string;
}

/**
 * Specifies Windows operating system settings on the virtual machine.
 */
export interface WindowsConfigurationResponse {
    /**
     * Specifies additional base-64 encoded XML formatted information that can be
     * included in the Unattend.xml file, which is used by Windows Setup.
     */
    additionalUnattendContent?: AdditionalUnattendContentResponse[];
    /**
     * Indicates whether Automatic Updates is enabled for the Windows virtual machine.
     * Default value is true. For virtual machine scale sets, this property can be
     * updated and updates will take effect on OS reprovisioning.
     */
    enableAutomaticUpdates?: boolean;
    /**
     * Indicates whether VMAgent Platform Updates is enabled for the Windows virtual
     * machine. Default value is false.
     */
    enableVMAgentPlatformUpdates?: boolean;
    /**
     * [Preview Feature] Specifies settings related to VM Guest Patching on Windows.
     */
    patchSettings?: PatchSettingsResponse;
    /**
     * Indicates whether virtual machine agent should be provisioned on the virtual
     * machine. When this property is not specified in the request body, it is set to
     * true by default. This will ensure that VM Agent is installed on the VM so that
     * extensions can be added to the VM later.
     */
    provisionVMAgent?: boolean;
    /**
     * Specifies the time zone of the virtual machine. e.g. "Pacific Standard Time".
     * Possible values can be
     * [TimeZoneInfo.Id](https://learn.microsoft.com/dotnet/api/system.timezoneinfo.id?#System_TimeZoneInfo_Id)
     * value from time zones returned by
     * [TimeZoneInfo.GetSystemTimeZones](https://learn.microsoft.com/dotnet/api/system.timezoneinfo.getsystemtimezones).
     */
    timeZone?: string;
    /**
     * Specifies the Windows Remote Management listeners. This enables remote Windows
     * PowerShell.
     */
    winRM?: WinRMConfigurationResponse;
}

/**
 * Specifies additional settings to be applied when patch mode AutomaticByPlatform
 * is selected in Windows patch settings.
 */
export interface WindowsVMGuestPatchAutomaticByPlatformSettingsResponse {
    /**
     * Enables customer to schedule patching without accidental upgrades
     */
    bypassPlatformSafetyChecksOnUserSchedule?: boolean;
    /**
     * Specifies the reboot setting for all AutomaticByPlatform patch installation
     * operations.
     */
    rebootSetting?: string;
}
