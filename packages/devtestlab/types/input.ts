import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Properties of an Azure Resource Manager template parameter.
 */
export interface ArmTemplateParameterPropertiesArgs {
    /**
     * The name of the template parameter.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * The value of the template parameter.
     */
    value?: pulumi.Input<string | undefined>;
}

/**
 * Properties of an artifact.
 */
export interface ArtifactInstallPropertiesArgs {
    /**
     * The artifact's identifier.
     */
    artifactId?: pulumi.Input<string | undefined>;
    /**
     * The artifact's title.
     */
    artifactTitle?: pulumi.Input<string | undefined>;
    /**
     * The status message from the deployment.
     */
    deploymentStatusMessage?: pulumi.Input<string | undefined>;
    /**
     * The time that the artifact starts to install on the virtual machine.
     */
    installTime?: pulumi.Input<string | undefined>;
    /**
     * The parameters of the artifact.
     */
    parameters?: pulumi.Input<pulumi.Input<ArtifactParameterPropertiesArgs>[] | undefined>;
    /**
     * The status of the artifact.
     */
    status?: pulumi.Input<string | undefined>;
    /**
     * The status message from the virtual machine extension.
     */
    vmExtensionStatusMessage?: pulumi.Input<string | undefined>;
}

/**
 * Properties of an artifact parameter.
 */
export interface ArtifactParameterPropertiesArgs {
    /**
     * The name of the artifact parameter.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * The value of the artifact parameter.
     */
    value?: pulumi.Input<string | undefined>;
}

/**
 * Properties to attach new disk to the Virtual Machine.
 */
export interface AttachNewDataDiskOptionsArgs {
    /**
     * The name of the disk to be attached.
     */
    diskName?: pulumi.Input<string | undefined>;
    /**
     * Size of the disk to be attached in Gibibytes.
     */
    diskSizeGiB?: pulumi.Input<number | undefined>;
    /**
     * The storage type for the disk (i.e. Standard, Premium).
     */
    diskType?: pulumi.Input<string | enums.StorageType | undefined>;
}

/**
 * Parameters for creating multiple virtual machines as a single action.
 */
export interface BulkCreationParametersArgs {
    /**
     * The number of virtual machine instances to create.
     */
    instanceCount?: pulumi.Input<number | undefined>;
}

/**
 * Properties for creating a custom image from a VHD.
 */
export interface CustomImagePropertiesCustomArgs {
    /**
     * The image name.
     */
    imageName?: pulumi.Input<string | undefined>;
    /**
     * The OS type of the custom image (i.e. Windows, Linux)
     */
    osType: pulumi.Input<string | enums.CustomImageOsType>;
    /**
     * Indicates whether sysprep has been run on the VHD.
     */
    sysPrep?: pulumi.Input<boolean | undefined>;
}

/**
 * Properties for plan on a custom image.
 */
export interface CustomImagePropertiesFromPlanArgs {
    /**
     * The id of the plan, equivalent to name of the plan
     */
    id?: pulumi.Input<string | undefined>;
    /**
     * The offer for the plan from the marketplace image the custom image is derived from
     */
    offer?: pulumi.Input<string | undefined>;
    /**
     * The publisher for the plan from the marketplace image the custom image is derived from
     */
    publisher?: pulumi.Input<string | undefined>;
}

/**
 * Properties for creating a custom image from a virtual machine.
 */
export interface CustomImagePropertiesFromVmArgs {
    /**
     * The Linux OS information of the VM.
     */
    linuxOsInfo?: pulumi.Input<LinuxOsInfoArgs | undefined>;
    /**
     * The source vm identifier.
     */
    sourceVmId?: pulumi.Input<string | undefined>;
    /**
     * The Windows OS information of the VM.
     */
    windowsOsInfo?: pulumi.Input<WindowsOsInfoArgs | undefined>;
}

/**
 * Request body for adding a new or existing data disk to a virtual machine.
 */
export interface DataDiskPropertiesArgs {
    /**
     * Specifies options to attach a new disk to the virtual machine.
     */
    attachNewDataDiskOptions?: pulumi.Input<AttachNewDataDiskOptionsArgs | undefined>;
    /**
     * Specifies the existing lab disk id to attach to virtual machine.
     */
    existingLabDiskId?: pulumi.Input<string | undefined>;
    /**
     * Caching option for a data disk (i.e. None, ReadOnly, ReadWrite).
     */
    hostCaching?: pulumi.Input<string | enums.HostCachingOptions | undefined>;
}

/**
 * Storage information about the data disks present in the custom image
 */
export interface DataDiskStorageTypeInfoArgs {
    /**
     * Disk Lun
     */
    lun?: pulumi.Input<string | undefined>;
    /**
     * Disk Storage Type
     */
    storageType?: pulumi.Input<string | enums.StorageType | undefined>;
}

/**
 * Properties of a daily schedule.
 */
export interface DayDetailsArgs {
    /**
     * The time of day the schedule will occur.
     */
    time?: pulumi.Input<string | undefined>;
}

/**
 * Properties of an environment deployment.
 */
export interface EnvironmentDeploymentPropertiesArgs {
    /**
     * The Azure Resource Manager template's identifier.
     */
    armTemplateId?: pulumi.Input<string | undefined>;
    /**
     * The parameters of the Azure Resource Manager template.
     */
    parameters?: pulumi.Input<pulumi.Input<ArmTemplateParameterPropertiesArgs>[] | undefined>;
}

/**
 * An event to be notified for.
 */
export interface EventArgs {
    /**
     * The event type for which this notification is enabled (i.e. AutoShutdown, Cost)
     */
    eventName?: pulumi.Input<string | enums.NotificationChannelEventType | undefined>;
}

/**
 * Information about a VM from which a formula is to be created.
 */
export interface FormulaPropertiesFromVmArgs {
    /**
     * The identifier of the VM from which a formula is to be created.
     */
    labVmId?: pulumi.Input<string | undefined>;
}

/**
 * The reference information for an Azure Marketplace image.
 */
export interface GalleryImageReferenceArgs {
    /**
     * The offer of the gallery image.
     */
    offer?: pulumi.Input<string | undefined>;
    /**
     * The OS type of the gallery image.
     */
    osType?: pulumi.Input<string | undefined>;
    /**
     * The publisher of the gallery image.
     */
    publisher?: pulumi.Input<string | undefined>;
    /**
     * The SKU of the gallery image.
     */
    sku?: pulumi.Input<string | undefined>;
    /**
     * The version of the gallery image.
     */
    version?: pulumi.Input<string | undefined>;
}

/**
 * Properties of an hourly schedule.
 */
export interface HourDetailsArgs {
    /**
     * Minutes of the hour the schedule will run.
     */
    minute?: pulumi.Input<number | undefined>;
}

/**
 * Properties of a managed identity
 */
export interface IdentityPropertiesArgs {
    /**
     * The client secret URL of the identity.
     */
    clientSecretUrl?: pulumi.Input<string | undefined>;
    /**
     * The principal id of resource identity.
     */
    principalId?: pulumi.Input<string | undefined>;
    /**
     * The tenant identifier of resource.
     */
    tenantId?: pulumi.Input<string | undefined>;
    /**
     * Managed identity.
     */
    type?: pulumi.Input<string | enums.ManagedIdentityType | undefined>;
}

/**
 * A rule for NAT - exposing a VM's port (backendPort) on the public IP address using a load balancer.
 */
export interface InboundNatRuleArgs {
    /**
     * The port to which the external traffic will be redirected.
     */
    backendPort?: pulumi.Input<number | undefined>;
    /**
     * The external endpoint port of the inbound connection. Possible values range between 1 and 65535, inclusive. If unspecified, a value will be allocated automatically.
     */
    frontendPort?: pulumi.Input<number | undefined>;
    /**
     * The transport protocol for the endpoint.
     */
    transportProtocol?: pulumi.Input<string | enums.TransportProtocol | undefined>;
}

/**
 * Properties of a lab's announcement banner
 */
export interface LabAnnouncementPropertiesArgs {
    /**
     * Is the lab announcement active/enabled at this time?
     */
    enabled?: pulumi.Input<string | enums.EnableStatus | undefined>;
    /**
     * The time at which the announcement expires (null for never)
     */
    expirationDate?: pulumi.Input<string | undefined>;
    /**
     * Has this announcement expired?
     */
    expired?: pulumi.Input<boolean | undefined>;
    /**
     * The markdown text (if any) that this lab displays in the UI. If left empty/null, nothing will be shown.
     */
    markdown?: pulumi.Input<string | undefined>;
    /**
     * The plain text title for the lab announcement
     */
    title?: pulumi.Input<string | undefined>;
}

/**
 * Properties of a lab's support banner
 */
export interface LabSupportPropertiesArgs {
    /**
     * Is the lab support banner active/enabled at this time?
     */
    enabled?: pulumi.Input<string | enums.EnableStatus | undefined>;
    /**
     * The markdown text (if any) that this lab displays in the UI. If left empty/null, nothing will be shown.
     */
    markdown?: pulumi.Input<string | undefined>;
}

/**
 * Properties for creating a virtual machine.
 */
export interface LabVirtualMachineCreationParameterArgs {
    /**
     * Indicates whether another user can take ownership of the virtual machine
     */
    allowClaim?: pulumi.Input<boolean | undefined>;
    /**
     * The artifacts to be installed on the virtual machine.
     */
    artifacts?: pulumi.Input<pulumi.Input<ArtifactInstallPropertiesArgs>[] | undefined>;
    /**
     * The number of virtual machine instances to create.
     */
    bulkCreationParameters?: pulumi.Input<BulkCreationParametersArgs | undefined>;
    /**
     * The creation date of the virtual machine.
     */
    createdDate?: pulumi.Input<string | undefined>;
    /**
     * The custom image identifier of the virtual machine.
     */
    customImageId?: pulumi.Input<string | undefined>;
    /**
     * New or existing data disks to attach to the virtual machine after creation
     */
    dataDiskParameters?: pulumi.Input<pulumi.Input<DataDiskPropertiesArgs>[] | undefined>;
    /**
     * Indicates whether the virtual machine is to be created without a public IP address.
     */
    disallowPublicIpAddress?: pulumi.Input<boolean | undefined>;
    /**
     * The resource ID of the environment that contains this virtual machine, if any.
     */
    environmentId?: pulumi.Input<string | undefined>;
    /**
     * The expiration date for VM.
     */
    expirationDate?: pulumi.Input<string | undefined>;
    /**
     * The Microsoft Azure Marketplace image reference of the virtual machine.
     */
    galleryImageReference?: pulumi.Input<GalleryImageReferenceArgs | undefined>;
    /**
     * Indicates whether this virtual machine uses an SSH key for authentication.
     */
    isAuthenticationWithSshKey?: pulumi.Input<boolean | undefined>;
    /**
     * The lab subnet name of the virtual machine.
     */
    labSubnetName?: pulumi.Input<string | undefined>;
    /**
     * The lab virtual network identifier of the virtual machine.
     */
    labVirtualNetworkId?: pulumi.Input<string | undefined>;
    /**
     * The location of the new virtual machine or environment
     */
    location?: pulumi.Input<string | undefined>;
    /**
     * The name of the virtual machine or environment
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * The network interface properties.
     */
    networkInterface?: pulumi.Input<NetworkInterfacePropertiesArgs | undefined>;
    /**
     * The notes of the virtual machine.
     */
    notes?: pulumi.Input<string | undefined>;
    /**
     * The object identifier of the owner of the virtual machine.
     */
    ownerObjectId?: pulumi.Input<string | undefined>;
    /**
     * The user principal name of the virtual machine owner.
     */
    ownerUserPrincipalName?: pulumi.Input<string | undefined>;
    /**
     * The password of the virtual machine administrator.
     */
    password?: pulumi.Input<string | undefined>;
    /**
     * The id of the plan associated with the virtual machine image
     */
    planId?: pulumi.Input<string | undefined>;
    /**
     * Virtual Machine schedules to be created
     */
    scheduleParameters?: pulumi.Input<pulumi.Input<ScheduleCreationParameterArgs>[] | undefined>;
    /**
     * The size of the virtual machine.
     */
    size?: pulumi.Input<string | undefined>;
    /**
     * The SSH key of the virtual machine administrator.
     */
    sshKey?: pulumi.Input<string | undefined>;
    /**
     * Storage type to use for virtual machine (i.e. Standard, Premium).
     */
    storageType?: pulumi.Input<string | undefined>;
    /**
     * The tags of the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * The user name of the virtual machine.
     */
    userName?: pulumi.Input<string | undefined>;
}
/**
 * labVirtualMachineCreationParameterArgsProvideDefaults sets the appropriate defaults for LabVirtualMachineCreationParameterArgs
 */
export function labVirtualMachineCreationParameterArgsProvideDefaults(val: LabVirtualMachineCreationParameterArgs): LabVirtualMachineCreationParameterArgs {
    return {
        ...val,
        allowClaim: (val.allowClaim) ?? false,
        disallowPublicIpAddress: (val.disallowPublicIpAddress) ?? false,
        ownerObjectId: (val.ownerObjectId) ?? "dynamicValue",
        storageType: (val.storageType) ?? "labStorageType",
    };
}

/**
 * Information about a Linux OS.
 */
export interface LinuxOsInfoArgs {
    /**
     * The state of the Linux OS (i.e. NonDeprovisioned, DeprovisionRequested, DeprovisionApplied).
     */
    linuxOsState?: pulumi.Input<string | enums.LinuxOsState | undefined>;
}

/**
 * Properties of a network interface.
 */
export interface NetworkInterfacePropertiesArgs {
    /**
     * The DNS name.
     */
    dnsName?: pulumi.Input<string | undefined>;
    /**
     * The private IP address.
     */
    privateIpAddress?: pulumi.Input<string | undefined>;
    /**
     * The public IP address.
     */
    publicIpAddress?: pulumi.Input<string | undefined>;
    /**
     * The resource ID of the public IP address.
     */
    publicIpAddressId?: pulumi.Input<string | undefined>;
    /**
     * The RdpAuthority property is a server DNS host name or IP address followed by the service port number for RDP (Remote Desktop Protocol).
     */
    rdpAuthority?: pulumi.Input<string | undefined>;
    /**
     * The configuration for sharing a public IP address across multiple virtual machines.
     */
    sharedPublicIpAddressConfiguration?: pulumi.Input<SharedPublicIpAddressConfigurationArgs | undefined>;
    /**
     * The SshAuthority property is a server DNS host name or IP address followed by the service port number for SSH.
     */
    sshAuthority?: pulumi.Input<string | undefined>;
    /**
     * The resource ID of the sub net.
     */
    subnetId?: pulumi.Input<string | undefined>;
    /**
     * The resource ID of the virtual network.
     */
    virtualNetworkId?: pulumi.Input<string | undefined>;
}

/**
 * Notification settings for a schedule.
 */
export interface NotificationSettingsArgs {
    /**
     * The email recipient to send notifications to (can be a list of semi-colon separated email addresses).
     */
    emailRecipient?: pulumi.Input<string | undefined>;
    /**
     * The locale to use when sending a notification (fallback for unsupported languages is EN).
     */
    notificationLocale?: pulumi.Input<string | undefined>;
    /**
     * If notifications are enabled for this schedule (i.e. Enabled, Disabled).
     */
    status?: pulumi.Input<string | enums.EnableStatus | undefined>;
    /**
     * Time in minutes before event at which notification will be sent.
     */
    timeInMinutes?: pulumi.Input<number | undefined>;
    /**
     * The webhook URL to which the notification will be sent.
     */
    webhookUrl?: pulumi.Input<string | undefined>;
}
/**
 * notificationSettingsArgsProvideDefaults sets the appropriate defaults for NotificationSettingsArgs
 */
export function notificationSettingsArgsProvideDefaults(val: NotificationSettingsArgs): NotificationSettingsArgs {
    return {
        ...val,
        status: (val.status) ?? "Disabled",
    };
}

/**
 * Properties of a network port.
 */
export interface PortArgs {
    /**
     * Backend port of the target virtual machine.
     */
    backendPort?: pulumi.Input<number | undefined>;
    /**
     * Protocol type of the port.
     */
    transportProtocol?: pulumi.Input<string | enums.TransportProtocol | undefined>;
}

/**
 * Properties for creating a schedule.
 */
export interface ScheduleCreationParameterArgs {
    /**
     * If the schedule will occur once each day of the week, specify the daily recurrence.
     */
    dailyRecurrence?: pulumi.Input<DayDetailsArgs | undefined>;
    /**
     * If the schedule will occur multiple times a day, specify the hourly recurrence.
     */
    hourlyRecurrence?: pulumi.Input<HourDetailsArgs | undefined>;
    /**
     * The name of the virtual machine or environment
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Notification settings.
     */
    notificationSettings?: pulumi.Input<NotificationSettingsArgs | undefined>;
    /**
     * The status of the schedule (i.e. Enabled, Disabled)
     */
    status?: pulumi.Input<string | enums.EnableStatus | undefined>;
    /**
     * The tags of the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * The resource ID to which the schedule belongs
     */
    targetResourceId?: pulumi.Input<string | undefined>;
    /**
     * The task type of the schedule (e.g. LabVmsShutdownTask, LabVmAutoStart).
     */
    taskType?: pulumi.Input<string | undefined>;
    /**
     * The time zone ID (e.g. China Standard Time, Greenland Standard Time, Pacific Standard time, etc.). The possible values for this property can be found in `IReadOnlyCollection<string> TimeZoneConverter.TZConvert.KnownWindowsTimeZoneIds` (https://github.com/mattjohnsonpint/TimeZoneConverter/blob/main/README.md)
     */
    timeZoneId?: pulumi.Input<string | undefined>;
    /**
     * If the schedule will occur only some days of the week, specify the weekly recurrence.
     */
    weeklyRecurrence?: pulumi.Input<WeekDetailsArgs | undefined>;
}
/**
 * scheduleCreationParameterArgsProvideDefaults sets the appropriate defaults for ScheduleCreationParameterArgs
 */
export function scheduleCreationParameterArgsProvideDefaults(val: ScheduleCreationParameterArgs): ScheduleCreationParameterArgs {
    return {
        ...val,
        notificationSettings: pulumi.output(val.notificationSettings).apply(v => v === undefined ? undefined : notificationSettingsArgsProvideDefaults(v)),
        status: (val.status) ?? "Disabled",
    };
}

/**
 * Properties of a virtual machine that determine how it is connected to a load balancer.
 */
export interface SharedPublicIpAddressConfigurationArgs {
    /**
     * The incoming NAT rules
     */
    inboundNatRules?: pulumi.Input<pulumi.Input<InboundNatRuleArgs>[] | undefined>;
}

/**
 * Subnet information.
 */
export interface SubnetArgs {
    /**
     * The permission policy of the subnet for allowing public IP addresses (i.e. Allow, Deny)).
     */
    allowPublicIp?: pulumi.Input<string | enums.UsagePermissionType | undefined>;
    /**
     * The name of the subnet as seen in the lab.
     */
    labSubnetName?: pulumi.Input<string | undefined>;
    /**
     * The resource ID of the subnet.
     */
    resourceId?: pulumi.Input<string | undefined>;
}

/**
 * Property overrides on a subnet of a virtual network.
 */
export interface SubnetOverrideArgs {
    /**
     * The name given to the subnet within the lab.
     */
    labSubnetName?: pulumi.Input<string | undefined>;
    /**
     * The resource ID of the subnet.
     */
    resourceId?: pulumi.Input<string | undefined>;
    /**
     * Properties that virtual machines on this subnet will share.
     */
    sharedPublicIpAddressConfiguration?: pulumi.Input<SubnetSharedPublicIpAddressConfigurationArgs | undefined>;
    /**
     * Indicates whether this subnet can be used during virtual machine creation (i.e. Allow, Deny).
     */
    useInVmCreationPermission?: pulumi.Input<string | enums.UsagePermissionType | undefined>;
    /**
     * Indicates whether public IP addresses can be assigned to virtual machines on this subnet (i.e. Allow, Deny).
     */
    usePublicIpAddressPermission?: pulumi.Input<string | enums.UsagePermissionType | undefined>;
    /**
     * The virtual network pool associated with this subnet.
     */
    virtualNetworkPoolName?: pulumi.Input<string | undefined>;
}

/**
 * Configuration for public IP address sharing.
 */
export interface SubnetSharedPublicIpAddressConfigurationArgs {
    /**
     * Backend ports that virtual machines on this subnet are allowed to expose
     */
    allowedPorts?: pulumi.Input<pulumi.Input<PortArgs>[] | undefined>;
}

/**
 * Identity attributes of a lab user.
 */
export interface UserIdentityArgs {
    /**
     * Set to the app Id of the client JWT making the request.
     */
    appId?: pulumi.Input<string | undefined>;
    /**
     * Set to the object Id of the client JWT making the request. Not all users have object Id. For CSP (reseller) scenarios for example, object Id is not available.
     */
    objectId?: pulumi.Input<string | undefined>;
    /**
     * Set to the principal Id of the client JWT making the request. Service principal will not have the principal Id.
     */
    principalId?: pulumi.Input<string | undefined>;
    /**
     * Set to the principal name / UPN of the client JWT making the request.
     */
    principalName?: pulumi.Input<string | undefined>;
    /**
     * Set to the tenant ID of the client JWT making the request.
     */
    tenantId?: pulumi.Input<string | undefined>;
}

/**
 * Properties of a user's secret store.
 */
export interface UserSecretStoreArgs {
    /**
     * The ID of the user's Key vault.
     */
    keyVaultId?: pulumi.Input<string | undefined>;
    /**
     * The URI of the user's Key vault.
     */
    keyVaultUri?: pulumi.Input<string | undefined>;
}

/**
 * Properties of a weekly schedule.
 */
export interface WeekDetailsArgs {
    /**
     * The time of the day the schedule will occur.
     */
    time?: pulumi.Input<string | undefined>;
    /**
     * The days of the week for which the schedule is set (e.g. Sunday, Monday, Tuesday, etc.).
     */
    weekdays?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Information about a Windows OS.
 */
export interface WindowsOsInfoArgs {
    /**
     * The state of the Windows OS (i.e. NonSysprepped, SysprepRequested, SysprepApplied).
     */
    windowsOsState?: pulumi.Input<string | enums.WindowsOsState | undefined>;
}
