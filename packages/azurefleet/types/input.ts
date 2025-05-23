import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * AdditionalCapabilities for VM.
 */
export interface AdditionalCapabilitiesArgs {
    /**
     * The flag that enables or disables hibernation capability on the VM.
     */
    hibernationEnabled?: pulumi.Input<boolean>;
    /**
     * The flag that enables or disables a capability to have one or more managed data disks with UltraSSD_LRS storage account type on the VM or VMSS.
     * Managed disks with storage account type UltraSSD_LRS can be added to a virtual machine or virtual machine scale set only if this property is enabled.
     */
    ultraSSDEnabled?: pulumi.Input<boolean>;
}

/**
 * Represents the configuration for additional locations where Fleet resources may be deployed.
 */
export interface AdditionalLocationsProfileArgs {
    /**
     * The list of location profiles.
     */
    locationProfiles: pulumi.Input<pulumi.Input<LocationProfileArgs>[]>;
}

/**
 * Specifies additional XML formatted information that can be included in the
 * Unattend.xml file, which is used by Windows Setup. Contents are defined by
 * setting name, component name, and the pass in which the content is applied.
 */
export interface AdditionalUnattendContentArgs {
    /**
     * The component name. Currently, the only allowable value is
     * Microsoft-Windows-Shell-Setup.
     */
    componentName?: pulumi.Input<enums.ComponentName>;
    /**
     * Specifies the XML formatted content that is added to the unattend.xml file for
     * the specified path and component. The XML must be less than 4KB and must
     * include the root element for the setting or feature that is being inserted.
     */
    content?: pulumi.Input<string>;
    /**
     * The pass name. Currently, the only allowable value is OobeSystem.
     */
    passName?: pulumi.Input<enums.PassName>;
    /**
     * Specifies the name of the setting to which the content applies. Possible values
     * are: FirstLogonCommands and AutoLogon.
     */
    settingName?: pulumi.Input<string | enums.SettingNames>;
}

/**
 * The API entity reference.
 */
export interface ApiEntityReferenceArgs {
    /**
     * The ARM resource id in the form of
     * /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...
     */
    id?: pulumi.Input<string>;
}

/**
 * Contains the list of gallery applications that should be made available to the
 * VM/VMSS
 */
export interface ApplicationProfileArgs {
    /**
     * Specifies the gallery applications that should be made available to the VM/VMSS
     */
    galleryApplications?: pulumi.Input<pulumi.Input<VMGalleryApplicationArgs>[]>;
}

/**
 * Describes the base virtual machine profile for fleet
 */
export interface BaseVirtualMachineProfileArgs {
    /**
     * Specifies the gallery applications that should be made available to the VM/VMSS
     */
    applicationProfile?: pulumi.Input<ApplicationProfileArgs>;
    /**
     * Specifies the capacity reservation related details of a scale set. Minimum
     * api-version: 2021-04-01.
     */
    capacityReservation?: pulumi.Input<CapacityReservationProfileArgs>;
    /**
     * Specifies the boot diagnostic settings state.
     */
    diagnosticsProfile?: pulumi.Input<DiagnosticsProfileArgs>;
    /**
     * Specifies a collection of settings for extensions installed on virtual machines
     * in the scale set.
     */
    extensionProfile?: pulumi.Input<VirtualMachineScaleSetExtensionProfileArgs>;
    /**
     * Specifies the hardware profile related details of a scale set. Minimum
     * api-version: 2021-11-01.
     */
    hardwareProfile?: pulumi.Input<VirtualMachineScaleSetHardwareProfileArgs>;
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
    licenseType?: pulumi.Input<string>;
    /**
     * Specifies properties of the network interfaces of the virtual machines in the
     * scale set.
     */
    networkProfile?: pulumi.Input<VirtualMachineScaleSetNetworkProfileArgs>;
    /**
     * Specifies the operating system settings for the virtual machines in the scale
     * set.
     */
    osProfile?: pulumi.Input<VirtualMachineScaleSetOSProfileArgs>;
    /**
     * Specifies Scheduled Event related configurations.
     */
    scheduledEventsProfile?: pulumi.Input<ScheduledEventsProfileArgs>;
    /**
     * Specifies the security posture to be used for all virtual machines in the scale
     * set. Minimum api-version: 2023-03-01
     */
    securityPostureReference?: pulumi.Input<SecurityPostureReferenceArgs>;
    /**
     * Specifies the Security related profile settings for the virtual machines in the
     * scale set.
     */
    securityProfile?: pulumi.Input<SecurityProfileArgs>;
    /**
     * Specifies the service artifact reference id used to set same image version for
     * all virtual machines in the scale set when using 'latest' image version.
     * Minimum api-version: 2022-11-01
     */
    serviceArtifactReference?: pulumi.Input<ServiceArtifactReferenceArgs>;
    /**
     * Specifies the storage settings for the virtual machine disks.
     */
    storageProfile?: pulumi.Input<VirtualMachineScaleSetStorageProfileArgs>;
    /**
     * UserData for the virtual machines in the scale set, which must be base-64
     * encoded. Customer should not pass any secrets in here. Minimum api-version:
     * 2021-03-01.
     */
    userData?: pulumi.Input<string>;
}

/**
 * Boot Diagnostics is a debugging feature which allows you to view Console Output
 * and Screenshot to diagnose VM status. You can easily view the output of your
 * console log. Azure also enables you to see a screenshot of the VM from the
 * hypervisor.
 */
export interface BootDiagnosticsArgs {
    /**
     * Whether boot diagnostics should be enabled on the Virtual Machine.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Uri of the storage account to use for placing the console output and
     * screenshot. If storageUri is not specified while enabling boot diagnostics,
     * managed storage will be used.
     */
    storageUri?: pulumi.Input<string>;
}

/**
 * The parameters of a capacity reservation Profile.
 */
export interface CapacityReservationProfileArgs {
    /**
     * Specifies the capacity reservation group resource id that should be used for
     * allocating the virtual machine or scaleset vm instances provided enough
     * capacity has been reserved. Please refer to https://aka.ms/CapacityReservation
     * for more details.
     */
    capacityReservationGroup?: pulumi.Input<SubResourceArgs>;
}

/**
 * Compute Profile to use for running user's workloads.
 */
export interface ComputeProfileArgs {
    /**
     * Specifies VMSS and VM API entity models support two additional capabilities as of today: ultraSSDEnabled and hibernationEnabled.
     * ultraSSDEnabled: Enables UltraSSD_LRS storage account type on the VMSS VMs.
     * hibernationEnabled: Enables the hibernation capability on the VMSS VMs.
     * Default value is null if not specified. This property cannot be updated once set.
     */
    additionalVirtualMachineCapabilities?: pulumi.Input<AdditionalCapabilitiesArgs>;
    /**
     * Base Virtual Machine Profile Properties to be specified according to "specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/{computeApiVersion}/virtualMachineScaleSet.json#/definitions/VirtualMachineScaleSetVMProfile"
     */
    baseVirtualMachineProfile: pulumi.Input<BaseVirtualMachineProfileArgs>;
    /**
     * Specifies the Microsoft.Compute API version to use when creating underlying Virtual Machine scale sets and Virtual Machines.
     * The default value will be the latest supported computeApiVersion by Compute Fleet.
     */
    computeApiVersion?: pulumi.Input<string>;
    /**
     * Specifies the number of fault domains to use when creating the underlying VMSS.
     * A fault domain is a logical group of hardware within an Azure datacenter.
     * VMs in the same fault domain share a common power source and network switch.
     * If not specified, defaults to 1, which represents "Max Spreading" (using as many fault domains as possible).
     * This property cannot be updated.
     */
    platformFaultDomainCount?: pulumi.Input<number>;
}

/**
 * Specifies the boot diagnostic settings state. Minimum api-version: 2015-06-15.
 */
export interface DiagnosticsProfileArgs {
    /**
     * Boot Diagnostics is a debugging feature which allows you to view Console Output
     * and Screenshot to diagnose VM status. **NOTE**: If storageUri is being
     * specified then ensure that the storage account is in the same region and
     * subscription as the VM. You can easily view the output of your console log.
     * Azure also enables you to see a screenshot of the VM from the hypervisor.
     */
    bootDiagnostics?: pulumi.Input<BootDiagnosticsArgs>;
}

/**
 * Describes the parameters of ephemeral disk settings that can be specified for
 * operating system disk. **Note:** The ephemeral disk settings can only be
 * specified for managed disk.
 */
export interface DiffDiskSettingsArgs {
    /**
     * Specifies the ephemeral disk settings for operating system disk.
     */
    option?: pulumi.Input<string | enums.DiffDiskOptions>;
    /**
     * Specifies the ephemeral disk placement for operating system disk. Possible
     * values are: **CacheDisk,** **ResourceDisk.** The defaulting behavior is:
     * **CacheDisk** if one is configured for the VM size otherwise **ResourceDisk**
     * is used. Refer to the VM size documentation for Windows VM at
     * https://learn.microsoft.com/azure/virtual-machines/windows/sizes and Linux VM at
     * https://learn.microsoft.com/azure/virtual-machines/linux/sizes to check which VM
     * sizes exposes a cache disk.
     */
    placement?: pulumi.Input<string | enums.DiffDiskPlacement>;
}

/**
 * Describes the parameter of customer managed disk encryption set resource id
 * that can be specified for disk. **Note:** The disk encryption set resource id
 * can only be specified for managed disk. Please refer
 * https://aka.ms/mdssewithcmkoverview for more details.
 */
export interface DiskEncryptionSetParametersArgs {
    /**
     * Resource Id
     */
    id?: pulumi.Input<string>;
}

/**
 * Specifies the Managed Identity used by ADE to get access token for keyvault
 * operations.
 */
export interface EncryptionIdentityArgs {
    /**
     * Specifies ARM Resource ID of one of the user identities associated with the VM.
     */
    userAssignedIdentityResourceId?: pulumi.Input<string>;
}

/**
 * Specifies information about the image to use. You can specify information about
 * platform images, marketplace images, or virtual machine images. This element is
 * required when you want to use a platform image, marketplace image, or virtual
 * machine image, but is not used in other creation operations. NOTE: Image
 * reference publisher and offer can only be set when you create the scale set.
 */
export interface ImageReferenceArgs {
    /**
     * Specified the community gallery image unique id for vm deployment. This can be
     * fetched from community gallery image GET call.
     */
    communityGalleryImageId?: pulumi.Input<string>;
    /**
     * Resource Id
     */
    id?: pulumi.Input<string>;
    /**
     * Specifies the offer of the platform image or marketplace image used to create
     * the virtual machine.
     */
    offer?: pulumi.Input<string>;
    /**
     * The image publisher.
     */
    publisher?: pulumi.Input<string>;
    /**
     * Specified the shared gallery image unique id for vm deployment. This can be
     * fetched from shared gallery image GET call.
     */
    sharedGalleryImageId?: pulumi.Input<string>;
    /**
     * The image SKU.
     */
    sku?: pulumi.Input<string>;
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
    version?: pulumi.Input<string>;
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
 * Specifies the Linux operating system settings on the virtual machine. For a
 * list of supported Linux distributions, see [Linux on Azure-Endorsed
 * Distributions](https://learn.microsoft.com/azure/virtual-machines/linux/endorsed-distros).
 */
export interface LinuxConfigurationArgs {
    /**
     * Specifies whether password authentication should be disabled.
     */
    disablePasswordAuthentication?: pulumi.Input<boolean>;
    /**
     * Indicates whether VMAgent Platform Updates is enabled for the Linux virtual
     * machine. Default value is false.
     */
    enableVMAgentPlatformUpdates?: pulumi.Input<boolean>;
    /**
     * [Preview Feature] Specifies settings related to VM Guest Patching on Linux.
     */
    patchSettings?: pulumi.Input<LinuxPatchSettingsArgs>;
    /**
     * Indicates whether virtual machine agent should be provisioned on the virtual
     * machine. When this property is not specified in the request body, default
     * behavior is to set it to true. This will ensure that VM Agent is installed on
     * the VM so that extensions can be added to the VM later.
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
     * Specifies the mode of VM Guest Patch Assessment for the IaaS virtual
     * machine.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - You
     * control the timing of patch assessments on a virtual machine. <br /><br />
     * **AutomaticByPlatform** - The platform will trigger periodic patch assessments.
     * The property provisionVMAgent must be true.
     */
    assessmentMode?: pulumi.Input<string | enums.LinuxPatchAssessmentMode>;
    /**
     * Specifies additional settings for patch mode AutomaticByPlatform in VM Guest
     * Patching on Linux.
     */
    automaticByPlatformSettings?: pulumi.Input<LinuxVMGuestPatchAutomaticByPlatformSettingsArgs>;
    /**
     * Specifies the mode of VM Guest Patching to IaaS virtual machine or virtual
     * machines associated to virtual machine scale set with OrchestrationMode as
     * Flexible.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - The
     * virtual machine's default patching configuration is used. <br /><br />
     * **AutomaticByPlatform** - The virtual machine will be automatically updated by
     * the platform. The property provisionVMAgent must be true
     */
    patchMode?: pulumi.Input<string | enums.LinuxVMGuestPatchMode>;
}

/**
 * Specifies additional settings to be applied when patch mode AutomaticByPlatform
 * is selected in Linux patch settings.
 */
export interface LinuxVMGuestPatchAutomaticByPlatformSettingsArgs {
    /**
     * Enables customer to schedule patching without accidental upgrades
     */
    bypassPlatformSafetyChecksOnUserSchedule?: pulumi.Input<boolean>;
    /**
     * Specifies the reboot setting for all AutomaticByPlatform patch installation
     * operations.
     */
    rebootSetting?: pulumi.Input<string | enums.LinuxVMGuestPatchAutomaticByPlatformRebootSetting>;
}

/**
 * Represents the profile for a single additional location in the Fleet. The location and the virtualMachineProfileOverride (optional).
 */
export interface LocationProfileArgs {
    /**
     * The ARM location name of the additional region. If LocationProfile is specified, then location is required.
     */
    location: pulumi.Input<string>;
    /**
     * An override for computeProfile.baseVirtualMachineProfile specific to this region. 
     * This override is merged with the base virtual machine profile to define the final virtual machine profile for the resources deployed in this location.
     */
    virtualMachineProfileOverride?: pulumi.Input<BaseVirtualMachineProfileArgs>;
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
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Specifies OS Image Scheduled Event related configurations.
 */
export interface OSImageNotificationProfileArgs {
    /**
     * Specifies whether the OS Image Scheduled event is enabled or disabled.
     */
    enable?: pulumi.Input<boolean>;
    /**
     * Length of time a Virtual Machine being reimaged or having its OS upgraded will
     * have to potentially approve the OS Image Scheduled Event before the event is
     * auto approved (timed out). The configuration is specified in ISO 8601 format,
     * and the value must not exceed 15 minutes (PT15M)
     */
    notBeforeTimeout?: pulumi.Input<string>;
}

/**
 * Specifies settings related to VM Guest Patching on Windows.
 */
export interface PatchSettingsArgs {
    /**
     * Specifies the mode of VM Guest patch assessment for the IaaS virtual
     * machine.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - You
     * control the timing of patch assessments on a virtual machine.<br /><br />
     * **AutomaticByPlatform** - The platform will trigger periodic patch assessments.
     * The property provisionVMAgent must be true.
     */
    assessmentMode?: pulumi.Input<string | enums.WindowsPatchAssessmentMode>;
    /**
     * Specifies additional settings for patch mode AutomaticByPlatform in VM Guest
     * Patching on Windows.
     */
    automaticByPlatformSettings?: pulumi.Input<WindowsVMGuestPatchAutomaticByPlatformSettingsArgs>;
    /**
     * Enables customers to patch their Azure VMs without requiring a reboot. For
     * enableHotpatching, the 'provisionVMAgent' must be set to true and 'patchMode'
     * must be set to 'AutomaticByPlatform'.
     */
    enableHotpatching?: pulumi.Input<boolean>;
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
    patchMode?: pulumi.Input<string | enums.WindowsVMGuestPatchMode>;
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
    promotionCode?: pulumi.Input<string>;
    /**
     * The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic
     */
    publisher: pulumi.Input<string>;
    /**
     * The version of the desired product/artifact.
     */
    version?: pulumi.Input<string>;
}

/**
 * Specifies ProxyAgent settings while creating the virtual machine. Minimum
 * api-version: 2023-09-01.
 */
export interface ProxyAgentSettingsArgs {
    /**
     * Specifies whether ProxyAgent feature should be enabled on the virtual machine
     * or virtual machine scale set.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Increase the value of this property allows user to reset the key used for
     * securing communication channel between guest and host.
     */
    keyIncarnationId?: pulumi.Input<number>;
    /**
     * Specifies the mode that ProxyAgent will execute on if the feature is enabled.
     * ProxyAgent will start to audit or monitor but not enforce access control over
     * requests to host endpoints in Audit mode, while in Enforce mode it will enforce
     * access control. The default value is Enforce mode.
     */
    mode?: pulumi.Input<string | enums.Mode>;
}

/**
 * Describes the public IP Sku. It can only be set with OrchestrationMode as
 * Flexible.
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
 * Configuration Options for Regular instances in Compute Fleet.
 */
export interface RegularPriorityProfileArgs {
    /**
     * Allocation strategy to follow when determining the VM sizes distribution for Regular VMs.
     */
    allocationStrategy?: pulumi.Input<string | enums.RegularPriorityAllocationStrategy>;
    /**
     * Total capacity to achieve. It is currently in terms of number of VMs.
     */
    capacity?: pulumi.Input<number>;
    /**
     * Minimum capacity to achieve which cannot be updated. If we will not be able to "guarantee" minimum capacity, we will reject the request in the sync path itself.
     */
    minCapacity?: pulumi.Input<number>;
}

/**
 * Specifies Scheduled Event related configurations.
 */
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
 * Specifies the security posture to be used for all virtual machines in the scale
 * set. Minimum api-version: 2023-03-01
 */
export interface SecurityPostureReferenceArgs {
    /**
     * List of virtual machine extension names to exclude when applying the security
     * posture.
     */
    excludeExtensions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The security posture reference id in the form of
     * /CommunityGalleries/{communityGalleryName}/securityPostures/{securityPostureName}/versions/{major.minor.patch}|{major.*}|latest
     */
    id?: pulumi.Input<string>;
    /**
     * Whether the security posture can be overridden by the user.
     */
    isOverridable?: pulumi.Input<boolean>;
}

/**
 * Specifies the Security profile settings for the virtual machine or virtual
 * machine scale set.
 */
export interface SecurityProfileArgs {
    /**
     * This property can be used by user in the request to enable or disable the Host
     * Encryption for the virtual machine or virtual machine scale set. This will
     * enable the encryption for all the disks including Resource/Temp disk at host
     * itself. The default behavior is: The Encryption at host will be disabled unless
     * this property is set to true for the resource.
     */
    encryptionAtHost?: pulumi.Input<boolean>;
    /**
     * Specifies the Managed Identity used by ADE to get access token for keyvault
     * operations.
     */
    encryptionIdentity?: pulumi.Input<EncryptionIdentityArgs>;
    /**
     * Specifies ProxyAgent settings while creating the virtual machine. Minimum
     * api-version: 2023-09-01.
     */
    proxyAgentSettings?: pulumi.Input<ProxyAgentSettingsArgs>;
    /**
     * Specifies the SecurityType of the virtual machine. It has to be set to any
     * specified value to enable UefiSettings. The default behavior is: UefiSettings
     * will not be enabled unless this property is set.
     */
    securityType?: pulumi.Input<string | enums.SecurityTypes>;
    /**
     * Specifies the security settings like secure boot and vTPM used while creating
     * the virtual machine. Minimum api-version: 2020-12-01.
     */
    uefiSettings?: pulumi.Input<UefiSettingsArgs>;
}

/**
 * Specifies the service artifact reference id used to set same image version for
 * all virtual machines in the scale set when using 'latest' image version.
 * Minimum api-version: 2022-11-01
 */
export interface ServiceArtifactReferenceArgs {
    /**
     * The service artifact reference id in the form of
     * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/galleries/{galleryName}/serviceArtifacts/{serviceArtifactName}/vmArtifactsProfiles/{vmArtifactsProfilesName}
     */
    id?: pulumi.Input<string>;
}

/**
 * Configuration Options for Spot instances in Compute Fleet.
 */
export interface SpotPriorityProfileArgs {
    /**
     * Allocation strategy to follow when determining the VM sizes distribution for Spot VMs.
     */
    allocationStrategy?: pulumi.Input<string | enums.SpotAllocationStrategy>;
    /**
     * Total capacity to achieve. It is currently in terms of number of VMs.
     */
    capacity?: pulumi.Input<number>;
    /**
     * Eviction Policy to follow when evicting Spot VMs.
     */
    evictionPolicy?: pulumi.Input<string | enums.EvictionPolicy>;
    /**
     * Flag to enable/disable continuous goal seeking for the desired capacity and restoration of evicted Spot VMs.
     * If maintain is enabled, AzureFleetRP will use all VM sizes in vmSizesProfile to create new VMs (if VMs are evicted deleted)
     * or update existing VMs with new VM sizes (if VMs are evicted deallocated or failed to allocate due to capacity constraint) in order to achieve the desired capacity.
     * Maintain is enabled by default.
     */
    maintain?: pulumi.Input<boolean>;
    /**
     * Price per hour of each Spot VM will never exceed this.
     */
    maxPricePerVM?: pulumi.Input<number>;
    /**
     * Minimum capacity to achieve which cannot be updated. If we will not be able to "guarantee" minimum capacity, we will reject the request in the sync path itself.
     */
    minCapacity?: pulumi.Input<number>;
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
 * Contains information about SSH certificate public key and the path on the Linux
 * VM where the public key is placed.
 */
export interface SshPublicKeyArgs {
    /**
     * SSH public key certificate used to authenticate with the VM through ssh. The
     * key needs to be at least 2048-bit and in ssh-rsa format. For creating ssh keys,
     * see [Create SSH keys on Linux and Mac for Linux VMs in
     * Azure]https://learn.microsoft.com/azure/virtual-machines/linux/create-ssh-keys-detailed).
     */
    keyData?: pulumi.Input<string>;
    /**
     * Specifies the full path on the created VM where ssh public key is stored. If
     * the file already exists, the specified key is appended to the file. Example:
     * /home/user/.ssh/authorized_keys
     */
    path?: pulumi.Input<string>;
}

/**
 * Describes SubResource
 */
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
 * Specifies Terminate Scheduled Event related configurations.
 */
export interface TerminateNotificationProfileArgs {
    /**
     * Specifies whether the Terminate Scheduled event is enabled or disabled.
     */
    enable?: pulumi.Input<boolean>;
    /**
     * Configurable length of time a Virtual Machine being deleted will have to
     * potentially approve the Terminate Scheduled Event before the event is auto
     * approved (timed out). The configuration must be specified in ISO 8601 format,
     * the default value is 5 minutes (PT5M)
     */
    notBeforeTimeout?: pulumi.Input<string>;
}

/**
 * Specifies the security settings like secure boot and vTPM used while creating
 * the virtual machine. Minimum api-version: 2020-12-01.
 */
export interface UefiSettingsArgs {
    /**
     * Specifies whether secure boot should be enabled on the virtual machine. Minimum
     * api-version: 2020-12-01.
     */
    secureBootEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies whether vTPM should be enabled on the virtual machine. Minimum
     * api-version: 2020-12-01.
     */
    vTpmEnabled?: pulumi.Input<boolean>;
}

/**
 * VMAttributes using double values.
 */
export interface VMAttributeMinMaxDoubleArgs {
    /**
     * Maximum value. Double.MaxValue(1.7976931348623157E+308)
     */
    max?: pulumi.Input<number>;
    /**
     * Minimum value. default 0. Double.MinValue()
     */
    min?: pulumi.Input<number>;
}

/**
 * While retrieving VMSizes from CRS, Min = 0 (uint.MinValue) if not specified, Max = 4294967295 (uint.MaxValue) if not specified. This allows to filter VMAttributes on all available VMSizes.
 */
export interface VMAttributeMinMaxIntegerArgs {
    /**
     * Max VMSize from CRS, Max = 4294967295 (uint.MaxValue) if not specified.
     */
    max?: pulumi.Input<number>;
    /**
     * Min VMSize from CRS, Min = 0 (uint.MinValue) if not specified.
     */
    min?: pulumi.Input<number>;
}

/**
 * VMAttributes that will be used to filter VMSizes which will be used to build Fleet.
 */
export interface VMAttributesArgs {
    /**
     * The range of accelerator count specified from min to max. Optional parameter. Either Min or Max is required if specified.
     * acceleratorSupport should be set to "Included" or "Required" to use this VMAttribute. 
     * If acceleratorSupport is "Excluded", this VMAttribute can not be used.
     */
    acceleratorCount?: pulumi.Input<VMAttributeMinMaxIntegerArgs>;
    /**
     * The accelerator manufacturers specified as a list. 
     * acceleratorSupport should be set to "Included" or "Required" to use this VMAttribute. 
     * If acceleratorSupport is "Excluded", this VMAttribute can not be used.
     */
    acceleratorManufacturers?: pulumi.Input<pulumi.Input<string | enums.AcceleratorManufacturer>[]>;
    /**
     * Specifies whether the VMSize supporting accelerator should be used to build Fleet or not.
     * acceleratorSupport should be set to "Included" or "Required" to use this VMAttribute. 
     * If acceleratorSupport is "Excluded", this VMAttribute can not be used.
     */
    acceleratorSupport?: pulumi.Input<string | enums.VMAttributeSupport>;
    /**
     * The accelerator types specified as a list. acceleratorSupport should be set to "Included" or "Required" to use this VMAttribute. 
     * If acceleratorSupport is "Excluded", this VMAttribute can not be used.
     */
    acceleratorTypes?: pulumi.Input<pulumi.Input<string | enums.AcceleratorType>[]>;
    /**
     * The VM architecture types specified as a list. Optional parameter.
     */
    architectureTypes?: pulumi.Input<pulumi.Input<string | enums.ArchitectureType>[]>;
    /**
     * Specifies whether the VMSize supporting burstable capability should be used to build Fleet or not.
     */
    burstableSupport?: pulumi.Input<string | enums.VMAttributeSupport>;
    /**
     * The VM CPU manufacturers specified as a list. Optional parameter.
     */
    cpuManufacturers?: pulumi.Input<pulumi.Input<string | enums.CpuManufacturer>[]>;
    /**
     * The range of data disk count specified from Min to Max. Optional parameter. Either Min or Max is required if specified.
     */
    dataDiskCount?: pulumi.Input<VMAttributeMinMaxIntegerArgs>;
    /**
     * Specifies which VMSizes should be excluded while building Fleet. Optional parameter.
     */
    excludedVMSizes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The local storage disk types specified as a list. LocalStorageSupport should be set to "Included" or "Required" to use this VMAttribute. 
     * If localStorageSupport is "Excluded", this VMAttribute can not be used.
     */
    localStorageDiskTypes?: pulumi.Input<pulumi.Input<string | enums.LocalStorageDiskType>[]>;
    /**
     * LocalStorageSupport should be set to "Included" or "Required" to use this VMAttribute. 
     * If localStorageSupport is "Excluded", this VMAttribute can not be used.
     */
    localStorageInGiB?: pulumi.Input<VMAttributeMinMaxDoubleArgs>;
    /**
     * Specifies whether the VMSize supporting local storage should be used to build Fleet or not.
     * Included - Default if not specified as most Azure VMs support local storage.
     */
    localStorageSupport?: pulumi.Input<string | enums.VMAttributeSupport>;
    /**
     * The range of memory specified from Min to Max. Must be specified if VMAttributes are specified, either Min or Max is required if specified.
     */
    memoryInGiB: pulumi.Input<VMAttributeMinMaxDoubleArgs>;
    /**
     * The range of memory in GiB per vCPU specified from min to max. Optional parameter. Either Min or Max is required if specified.
     */
    memoryInGiBPerVCpu?: pulumi.Input<VMAttributeMinMaxDoubleArgs>;
    /**
     * The range of network bandwidth in Mbps specified from Min to Max. Optional parameter. Either Min or Max is required if specified.
     */
    networkBandwidthInMbps?: pulumi.Input<VMAttributeMinMaxDoubleArgs>;
    /**
     * The range of network interface count specified from Min to Max. Optional parameter. Either Min or Max is required if specified.
     */
    networkInterfaceCount?: pulumi.Input<VMAttributeMinMaxIntegerArgs>;
    /**
     * The range of RDMA (Remote Direct Memory Access) network interface count specified from Min to Max. Optional parameter. Either Min or Max is required if specified.
     * rdmaSupport should be set to "Included" or "Required" to use this VMAttribute. 
     * If rdmaSupport is "Excluded", this VMAttribute can not be used.
     */
    rdmaNetworkInterfaceCount?: pulumi.Input<VMAttributeMinMaxIntegerArgs>;
    /**
     * Specifies whether the VMSize supporting RDMA (Remote Direct Memory Access) should be used to build Fleet or not.
     */
    rdmaSupport?: pulumi.Input<string | enums.VMAttributeSupport>;
    /**
     * The range of vCpuCount specified from Min to Max. Must be specified if VMAttributes are specified, either Min or Max is required if specified.
     */
    vCpuCount: pulumi.Input<VMAttributeMinMaxIntegerArgs>;
    /**
     * The VM category specified as a list. Optional parameter.
     */
    vmCategories?: pulumi.Input<pulumi.Input<string | enums.VMCategory>[]>;
}

/**
 * Specifies the security profile settings for the managed disk. **Note:** It can
 * only be set for Confidential VMs.
 */
export interface VMDiskSecurityProfileArgs {
    /**
     * Specifies the customer managed disk encryption set resource id for the managed
     * disk that is used for Customer Managed Key encrypted ConfidentialVM OS Disk and
     * VMGuest blob.
     */
    diskEncryptionSet?: pulumi.Input<DiskEncryptionSetParametersArgs>;
    /**
     * Specifies the EncryptionType of the managed disk. It is set to
     * DiskWithVMGuestState for encryption of the managed disk along with VMGuestState
     * blob, VMGuestStateOnly for encryption of just the VMGuestState blob, and
     * NonPersistedTPM for not persisting firmware state in the VMGuestState blob..
     * **Note:** It can be set for only Confidential VMs.
     */
    securityEncryptionType?: pulumi.Input<string | enums.SecurityEncryptionTypes>;
}

/**
 * Specifies the required information to reference a compute gallery application
 * version
 */
export interface VMGalleryApplicationArgs {
    /**
     * Optional, Specifies the uri to an azure blob that will replace the default
     * configuration for the package if provided
     */
    configurationReference?: pulumi.Input<string>;
    /**
     * If set to true, when a new Gallery Application version is available in PIR/SIG,
     * it will be automatically updated for the VM/VMSS
     */
    enableAutomaticUpgrade?: pulumi.Input<boolean>;
    /**
     * Optional, Specifies the order in which the packages have to be installed
     */
    order?: pulumi.Input<number>;
    /**
     * Specifies the GalleryApplicationVersion resource id on the form of
     * /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{application}/versions/{version}
     */
    packageReferenceId: pulumi.Input<string>;
    /**
     * Optional, Specifies a passthrough value for more generic context.
     */
    tags?: pulumi.Input<string>;
    /**
     * Optional, If true, any failure for any operation in the VmApplication will fail
     * the deployment
     */
    treatFailureAsDeploymentFailure?: pulumi.Input<boolean>;
}

/**
 * Specifies VM Size Property settings on the virtual machine.
 */
export interface VMSizePropertiesArgs {
    /**
     * Specifies the number of vCPUs available for the VM. When this property is not
     * specified in the request body the default behavior is to set it to the value of
     * vCPUs available for that VM size exposed in api response of [List all available
     * virtual machine sizes in a
     * region](https://learn.microsoft.com/en-us/rest/api/compute/resource-skus/list).
     */
    vCPUsAvailable?: pulumi.Input<number>;
    /**
     * Specifies the vCPU to physical core ratio. When this property is not specified
     * in the request body the default behavior is set to the value of vCPUsPerCore
     * for the VM Size exposed in api response of [List all available virtual machine
     * sizes in a
     * region](https://learn.microsoft.com/en-us/rest/api/compute/resource-skus/list).
     * **Setting this property to 1 also means that hyper-threading is disabled.**
     */
    vCPUsPerCore?: pulumi.Input<number>;
}

/**
 * Describes a single certificate reference in a Key Vault, and where the
 * certificate should reside on the VM.
 */
export interface VaultCertificateArgs {
    /**
     * For Windows VMs, specifies the certificate store on the Virtual Machine to
     * which the certificate should be added. The specified certificate store is
     * implicitly in the LocalMachine account. For Linux VMs, the certificate file is
     * placed under the /var/lib/waagent directory, with the file name
     * &lt;UppercaseThumbprint&gt;.crt for the X509 certificate file and
     * &lt;UppercaseThumbprint&gt;.prv for private key. Both of these files are .pem
     * formatted.
     */
    certificateStore?: pulumi.Input<string>;
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
    certificateUrl?: pulumi.Input<string>;
}

/**
 * Describes a set of certificates which are all in the same Key Vault.
 */
export interface VaultSecretGroupArgs {
    /**
     * The relative URL of the Key Vault containing all of the certificates in
     * VaultCertificates.
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
 * Describes a virtual machine scale set data disk.
 */
export interface VirtualMachineScaleSetDataDiskArgs {
    /**
     * Specifies the caching requirements. Possible values are: **None,**
     * **ReadOnly,** **ReadWrite.** The default values are: **None for Standard
     * storage. ReadOnly for Premium storage.**
     */
    caching?: pulumi.Input<string | enums.CachingTypes>;
    /**
     * The create option.
     */
    createOption: pulumi.Input<string | enums.DiskCreateOptionTypes>;
    /**
     * Specifies whether data disk should be deleted or detached upon VMSS Flex
     * deletion (This feature is available for VMSS with Flexible OrchestrationMode
     * only).<br><br> Possible values: <br><br> **Delete** If this value is used, the
     * data disk is deleted when the VMSS Flex VM is deleted.<br><br> **Detach** If
     * this value is used, the data disk is retained after VMSS Flex VM is
     * deleted.<br><br> The default value is set to **Delete**.
     */
    deleteOption?: pulumi.Input<string | enums.DiskDeleteOptionTypes>;
    /**
     * Specifies the Read-Write IOPS for the managed disk. Should be used only when
     * StorageAccountType is UltraSSD_LRS. If not specified, a default value would be
     * assigned based on diskSizeGB.
     */
    diskIOPSReadWrite?: pulumi.Input<number>;
    /**
     * Specifies the bandwidth in MB per second for the managed disk. Should be used
     * only when StorageAccountType is UltraSSD_LRS. If not specified, a default value
     * would be assigned based on diskSizeGB.
     */
    diskMBpsReadWrite?: pulumi.Input<number>;
    /**
     * Specifies the size of an empty data disk in gigabytes. This element can be used
     * to overwrite the size of the disk in a virtual machine image. The property
     * diskSizeGB is the number of bytes x 1024^3 for the disk and the value cannot be
     * larger than 1023.
     */
    diskSizeGB?: pulumi.Input<number>;
    /**
     * Specifies the logical unit number of the data disk. This value is used to
     * identify data disks within the VM and therefore must be unique for each data
     * disk attached to a VM.
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
     * The name of the extension.
     */
    name?: pulumi.Input<string>;
    /**
     * Describes the properties of a Virtual Machine Scale Set Extension.
     */
    properties?: pulumi.Input<VirtualMachineScaleSetExtensionPropertiesArgs>;
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
     * Specifies the time alloted for all extensions to start. The time duration
     * should be between 15 minutes and 120 minutes (inclusive) and should be
     * specified in ISO 8601 format. The default value is 90 minutes (PT1H30M).
     * Minimum api-version: 2020-06-01.
     */
    extensionsTimeBudget?: pulumi.Input<string>;
}

/**
 * Describes the properties of a Virtual Machine Scale Set Extension.
 */
export interface VirtualMachineScaleSetExtensionPropertiesArgs {
    /**
     * Indicates whether the extension should use a newer minor version if one is
     * available at deployment time. Once deployed, however, the extension will not
     * upgrade minor versions unless redeployed, even with this property set to true.
     */
    autoUpgradeMinorVersion?: pulumi.Input<boolean>;
    /**
     * Indicates whether the extension should be automatically upgraded by the
     * platform if there is a newer version of the extension available.
     */
    enableAutomaticUpgrade?: pulumi.Input<boolean>;
    /**
     * If a value is provided and is different from the previous value, the extension
     * handler will be forced to update even if the extension configuration has not
     * changed.
     */
    forceUpdateTag?: pulumi.Input<string>;
    /**
     * The extension can contain either protectedSettings or
     * protectedSettingsFromKeyVault or no protected settings at all.
     */
    protectedSettings?: any;
    /**
     * The extensions protected settings that are passed by reference, and consumed
     * from key vault
     */
    protectedSettingsFromKeyVault?: pulumi.Input<KeyVaultSecretReferenceArgs>;
    /**
     * Collection of extension names after which this extension needs to be
     * provisioned.
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
     * Indicates whether failures stemming from the extension will be suppressed
     * (Operational failures such as not connecting to the VM will not be suppressed
     * regardless of this value). The default is false.
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
 * Specifies the hardware settings for the virtual machine scale set.
 */
export interface VirtualMachineScaleSetHardwareProfileArgs {
    /**
     * Specifies the properties for customizing the size of the virtual machine.
     * Minimum api-version: 2021-11-01. Please follow the instructions in [VM
     * Customization](https://aka.ms/vmcustomization) for more details.
     */
    vmSizeProperties?: pulumi.Input<VMSizePropertiesArgs>;
}

/**
 * Describes a virtual machine scale set network profile's IP configuration.
 */
export interface VirtualMachineScaleSetIPConfigurationArgs {
    /**
     * The IP configuration name.
     */
    name: pulumi.Input<string>;
    /**
     * Describes a virtual machine scale set network profile's IP configuration
     * properties.
     */
    properties?: pulumi.Input<VirtualMachineScaleSetIPConfigurationPropertiesArgs>;
}

/**
 * Describes a virtual machine scale set network profile's IP configuration
 * properties.
 */
export interface VirtualMachineScaleSetIPConfigurationPropertiesArgs {
    /**
     * Specifies an array of references to backend address pools of application
     * gateways. A scale set can reference backend address pools of multiple
     * application gateways. Multiple scale sets cannot use the same application
     * gateway.
     */
    applicationGatewayBackendAddressPools?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
    /**
     * Specifies an array of references to application security group.
     */
    applicationSecurityGroups?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
    /**
     * Specifies an array of references to backend address pools of load balancers. A
     * scale set can reference backend address pools of one public and one internal
     * load balancer. Multiple scale sets cannot use the same basic sku load balancer.
     */
    loadBalancerBackendAddressPools?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
    /**
     * Specifies an array of references to inbound Nat pools of the load balancers. A
     * scale set can reference inbound nat pools of one public and one internal load
     * balancer. Multiple scale sets cannot use the same basic sku load balancer.
     */
    loadBalancerInboundNatPools?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
    /**
     * Specifies the primary network interface in case the virtual machine has more
     * than 1 network interface.
     */
    primary?: pulumi.Input<boolean>;
    /**
     * Available from Api-Version 2017-03-30 onwards, it represents whether the
     * specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible
     * values are: 'IPv4' and 'IPv6'.
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
     * Specifies the customer managed disk encryption set resource id for the managed
     * disk.
     */
    diskEncryptionSet?: pulumi.Input<DiskEncryptionSetParametersArgs>;
    /**
     * Specifies the security profile for the managed disk.
     */
    securityProfile?: pulumi.Input<VMDiskSecurityProfileArgs>;
    /**
     * Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can
     * only be used with data disks, it cannot be used with OS Disk.
     */
    storageAccountType?: pulumi.Input<string | enums.StorageAccountTypes>;
}

/**
 * Describes a virtual machine scale set network profile's network configurations.
 */
export interface VirtualMachineScaleSetNetworkConfigurationArgs {
    /**
     * The network configuration name.
     */
    name: pulumi.Input<string>;
    /**
     * Describes a virtual machine scale set network profile's IP configuration.
     */
    properties?: pulumi.Input<VirtualMachineScaleSetNetworkConfigurationPropertiesArgs>;
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
 * Describes a virtual machine scale set network profile's IP configuration.
 */
export interface VirtualMachineScaleSetNetworkConfigurationPropertiesArgs {
    /**
     * Specifies whether the Auxiliary mode is enabled for the Network Interface
     * resource.
     */
    auxiliaryMode?: pulumi.Input<string | enums.NetworkInterfaceAuxiliaryMode>;
    /**
     * Specifies whether the Auxiliary sku is enabled for the Network Interface
     * resource.
     */
    auxiliarySku?: pulumi.Input<string | enums.NetworkInterfaceAuxiliarySku>;
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
     * The network security group.
     */
    networkSecurityGroup?: pulumi.Input<SubResourceArgs>;
    /**
     * Specifies the primary network interface in case the virtual machine has more
     * than 1 network interface.
     */
    primary?: pulumi.Input<boolean>;
}

/**
 * Describes a virtual machine scale set network profile.
 */
export interface VirtualMachineScaleSetNetworkProfileArgs {
    /**
     * A reference to a load balancer probe used to determine the health of an
     * instance in the virtual machine scale set. The reference will be in the form:
     * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/probes/{probeName}'.
     */
    healthProbe?: pulumi.Input<ApiEntityReferenceArgs>;
    /**
     * specifies the Microsoft.Network API version used when creating networking
     * resources in the Network Interface Configurations for Virtual Machine Scale Set
     * with orchestration mode 'Flexible'
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
     * Specifies the caching requirements. Possible values are: **None,**
     * **ReadOnly,** **ReadWrite.** The default values are: **None for Standard
     * storage. ReadOnly for Premium storage.**
     */
    caching?: pulumi.Input<string | enums.CachingTypes>;
    /**
     * Specifies how the virtual machines in the scale set should be created. The only
     * allowed value is: **FromImage.** This value is used when you are using an image
     * to create the virtual machine. If you are using a platform image, you also use
     * the imageReference element described above. If you are using a marketplace
     * image, you  also use the plan element previously described.
     */
    createOption: pulumi.Input<string | enums.DiskCreateOptionTypes>;
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
    deleteOption?: pulumi.Input<string | enums.DiskDeleteOptionTypes>;
    /**
     * Specifies the ephemeral disk Settings for the operating system disk used by the
     * virtual machine scale set.
     */
    diffDiskSettings?: pulumi.Input<DiffDiskSettingsArgs>;
    /**
     * Specifies the size of an empty data disk in gigabytes. This element can be used
     * to overwrite the size of the disk in a virtual machine image. The property 'diskSizeGB'
     * is the number of bytes x 1024^3 for the disk and the value cannot
     * be larger than 1023.
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
     * This property allows you to specify the type of the OS that is included in the
     * disk if creating a VM from user-image or a specialized VHD. Possible values
     * are: **Windows,** **Linux.**
     */
    osType?: pulumi.Input<string | enums.OperatingSystemTypes>;
    /**
     * Specifies the container urls that are used to store operating system disks for
     * the scale set.
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
     * Specifies the password of the administrator account. <br><br> **Minimum-length
     * (Windows):** 8 characters <br><br> **Minimum-length (Linux):** 6 characters
     * <br><br> **Max-length (Windows):** 123 characters <br><br> **Max-length
     * (Linux):** 72 characters <br><br> **Complexity requirements:** 3 out of 4
     * conditions below need to be fulfilled <br> Has lower characters <br>Has upper
     * characters <br> Has a digit <br> Has a special character (Regex match [\W_])
     * <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd",
     * "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1",
     * "Password22", "iloveyou!" <br><br> For resetting the password, see [How to
     * reset the Remote Desktop service or its login password in a Windows
     * VM](https://learn.microsoft.com/troubleshoot/azure/virtual-machines/reset-rdp)
     * <br><br> For resetting root password, see [Manage users, SSH, and check or
     * repair disks on Azure Linux VMs using the VMAccess
     * Extension](https://learn.microsoft.com/troubleshoot/azure/virtual-machines/troubleshoot-ssh-connection)
     */
    adminPassword?: pulumi.Input<string>;
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
    adminUsername?: pulumi.Input<string>;
    /**
     * Specifies whether extension operations should be allowed on the virtual machine
     * scale set. This may only be set to False when no extensions are present on the
     * virtual machine scale set.
     */
    allowExtensionOperations?: pulumi.Input<boolean>;
    /**
     * Specifies the computer name prefix for all of the virtual machines in the scale
     * set. Computer name prefixes must be 1 to 15 characters long.
     */
    computerNamePrefix?: pulumi.Input<string>;
    /**
     * Specifies a base-64 encoded string of custom data. The base-64 encoded string
     * is decoded to a binary array that is saved as a file on the Virtual Machine.
     * The maximum length of the binary array is 65535 bytes. For using cloud-init for
     * your VM, see [Using cloud-init to customize a Linux VM during
     * creation](https://learn.microsoft.com/azure/virtual-machines/linux/using-cloud-init)
     */
    customData?: pulumi.Input<string>;
    /**
     * Specifies the Linux operating system settings on the virtual machine. For a
     * list of supported Linux distributions, see [Linux on Azure-Endorsed
     * Distributions](https://learn.microsoft.com/azure/virtual-machines/linux/endorsed-distros).
     */
    linuxConfiguration?: pulumi.Input<LinuxConfigurationArgs>;
    /**
     * Optional property which must either be set to True or omitted.
     */
    requireGuestProvisionSignal?: pulumi.Input<boolean>;
    /**
     * Specifies set of certificates that should be installed onto the virtual
     * machines in the scale set. To install certificates on a virtual machine it is
     * recommended to use the [Azure Key Vault virtual machine extension for
     * Linux](https://learn.microsoft.com/azure/virtual-machines/extensions/key-vault-linux)
     * or the [Azure Key Vault virtual machine extension for
     * Windows](https://learn.microsoft.com/azure/virtual-machines/extensions/key-vault-windows).
     */
    secrets?: pulumi.Input<pulumi.Input<VaultSecretGroupArgs>[]>;
    /**
     * Specifies Windows operating system settings on the virtual machine.
     */
    windowsConfiguration?: pulumi.Input<WindowsConfigurationArgs>;
}

/**
 * Describes a virtual machines scale set IP Configuration's PublicIPAddress
 * configuration
 */
export interface VirtualMachineScaleSetPublicIPAddressConfigurationArgs {
    /**
     * The publicIP address configuration name.
     */
    name: pulumi.Input<string>;
    /**
     * Describes a virtual machines scale set IP Configuration's PublicIPAddress
     * configuration
     */
    properties?: pulumi.Input<VirtualMachineScaleSetPublicIPAddressConfigurationPropertiesArgs>;
    /**
     * Describes the public IP Sku. It can only be set with OrchestrationMode as
     * Flexible.
     */
    sku?: pulumi.Input<PublicIPAddressSkuArgs>;
}

/**
 * Describes a virtual machines scale sets network configuration's DNS settings.
 */
export interface VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettingsArgs {
    /**
     * The Domain name label.The concatenation of the domain name label and vm index
     * will be the domain name labels of the PublicIPAddress resources that will be
     * created
     */
    domainNameLabel: pulumi.Input<string>;
    /**
     * The Domain name label scope.The concatenation of the hashed domain name label
     * that generated according to the policy from domain name label scope and vm
     * index will be the domain name labels of the PublicIPAddress resources that will
     * be created
     */
    domainNameLabelScope?: pulumi.Input<string | enums.DomainNameLabelScopeTypes>;
}

/**
 * Describes a virtual machines scale set IP Configuration's PublicIPAddress
 * configuration
 */
export interface VirtualMachineScaleSetPublicIPAddressConfigurationPropertiesArgs {
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
     * Available from Api-Version 2019-07-01 onwards, it represents whether the
     * specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4. Possible
     * values are: 'IPv4' and 'IPv6'.
     */
    publicIPAddressVersion?: pulumi.Input<string | enums.IPVersion>;
    /**
     * The PublicIPPrefix from which to allocate publicIP addresses.
     */
    publicIPPrefix?: pulumi.Input<SubResourceArgs>;
}

/**
 * Describes a virtual machine scale set storage profile.
 */
export interface VirtualMachineScaleSetStorageProfileArgs {
    /**
     * Specifies the parameters that are used to add data disks to the virtual
     * machines in the scale set. For more information about disks, see [About disks
     * and VHDs for Azure virtual
     * machines](https://learn.microsoft.com/azure/virtual-machines/managed-disks-overview).
     */
    dataDisks?: pulumi.Input<pulumi.Input<VirtualMachineScaleSetDataDiskArgs>[]>;
    /**
     * Specifies the disk controller type configured for the virtual machines in the scale set. Minimum api-version: 2022-08-01
     */
    diskControllerType?: pulumi.Input<string | enums.DiskControllerTypes>;
    /**
     * Specifies information about the image to use. You can specify information about
     * platform images, marketplace images, or virtual machine images. This element is
     * required when you want to use a platform image, marketplace image, or virtual
     * machine image, but is not used in other creation operations.
     */
    imageReference?: pulumi.Input<ImageReferenceArgs>;
    /**
     * Specifies information about the operating system disk used by the virtual
     * machines in the scale set. For more information about disks, see [About disks
     * and VHDs for Azure virtual
     * machines](https://learn.microsoft.com/azure/virtual-machines/managed-disks-overview).
     */
    osDisk?: pulumi.Input<VirtualMachineScaleSetOSDiskArgs>;
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
     * The rank of the VM size. This is used with 'RegularPriorityAllocationStrategy.Prioritized'
     * The lower the number, the higher the priority. Starting with 0.
     */
    rank?: pulumi.Input<number>;
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
    certificateUrl?: pulumi.Input<string>;
    /**
     * Specifies the protocol of WinRM listener. Possible values are: **http,**
     * **https.**
     */
    protocol?: pulumi.Input<string | enums.ProtocolTypes>;
}

/**
 * Specifies Windows operating system settings on the virtual machine.
 */
export interface WindowsConfigurationArgs {
    /**
     * Specifies additional base-64 encoded XML formatted information that can be
     * included in the Unattend.xml file, which is used by Windows Setup.
     */
    additionalUnattendContent?: pulumi.Input<pulumi.Input<AdditionalUnattendContentArgs>[]>;
    /**
     * Indicates whether Automatic Updates is enabled for the Windows virtual machine.
     * Default value is true. For virtual machine scale sets, this property can be
     * updated and updates will take effect on OS reprovisioning.
     */
    enableAutomaticUpdates?: pulumi.Input<boolean>;
    /**
     * Indicates whether VMAgent Platform Updates is enabled for the Windows virtual
     * machine. Default value is false.
     */
    enableVMAgentPlatformUpdates?: pulumi.Input<boolean>;
    /**
     * [Preview Feature] Specifies settings related to VM Guest Patching on Windows.
     */
    patchSettings?: pulumi.Input<PatchSettingsArgs>;
    /**
     * Indicates whether virtual machine agent should be provisioned on the virtual
     * machine. When this property is not specified in the request body, it is set to
     * true by default. This will ensure that VM Agent is installed on the VM so that
     * extensions can be added to the VM later.
     */
    provisionVMAgent?: pulumi.Input<boolean>;
    /**
     * Specifies the time zone of the virtual machine. e.g. "Pacific Standard Time".
     * Possible values can be
     * [TimeZoneInfo.Id](https://learn.microsoft.com/dotnet/api/system.timezoneinfo.id?#System_TimeZoneInfo_Id)
     * value from time zones returned by
     * [TimeZoneInfo.GetSystemTimeZones](https://learn.microsoft.com/dotnet/api/system.timezoneinfo.getsystemtimezones).
     */
    timeZone?: pulumi.Input<string>;
    /**
     * Specifies the Windows Remote Management listeners. This enables remote Windows
     * PowerShell.
     */
    winRM?: pulumi.Input<WinRMConfigurationArgs>;
}

/**
 * Specifies additional settings to be applied when patch mode AutomaticByPlatform
 * is selected in Windows patch settings.
 */
export interface WindowsVMGuestPatchAutomaticByPlatformSettingsArgs {
    /**
     * Enables customer to schedule patching without accidental upgrades
     */
    bypassPlatformSafetyChecksOnUserSchedule?: pulumi.Input<boolean>;
    /**
     * Specifies the reboot setting for all AutomaticByPlatform patch installation
     * operations.
     */
    rebootSetting?: pulumi.Input<string | enums.WindowsVMGuestPatchAutomaticByPlatformRebootSetting>;
}
