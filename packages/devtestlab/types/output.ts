import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Schedules applicable to a virtual machine. The schedules may have been defined on a VM or on lab level.
 */
export interface ApplicableScheduleResponse {
    /**
     * The identifier of the resource.
     */
    id: string;
    /**
     * The auto-shutdown schedule, if one has been set at the lab or lab resource level.
     */
    labVmsShutdown?: ScheduleResponse;
    /**
     * The auto-startup schedule, if one has been set at the lab or lab resource level.
     */
    labVmsStartup?: ScheduleResponse;
    /**
     * The location of the resource.
     */
    location?: string;
    /**
     * The name of the resource.
     */
    name: string;
    /**
     * The tags of the resource.
     */
    tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    type: string;
}
/**
 * applicableScheduleResponseProvideDefaults sets the appropriate defaults for ApplicableScheduleResponse
 */
export function applicableScheduleResponseProvideDefaults(val: ApplicableScheduleResponse): ApplicableScheduleResponse {
    return {
        ...val,
        labVmsShutdown: (val.labVmsShutdown ? scheduleResponseProvideDefaults(val.labVmsShutdown) : undefined),
        labVmsStartup: (val.labVmsStartup ? scheduleResponseProvideDefaults(val.labVmsStartup) : undefined),
    };
}

/**
 * Properties of an Azure Resource Manager template parameter.
 */
export interface ArmTemplateParameterPropertiesResponse {
    /**
     * The name of the template parameter.
     */
    name?: string;
    /**
     * The value of the template parameter.
     */
    value?: string;
}

/**
 * Properties of an artifact deployment.
 */
export interface ArtifactDeploymentStatusPropertiesResponse {
    /**
     * The total count of the artifacts that were successfully applied.
     */
    artifactsApplied?: number;
    /**
     * The deployment status of the artifact.
     */
    deploymentStatus?: string;
    /**
     * The total count of the artifacts that were tentatively applied.
     */
    totalArtifacts?: number;
}

/**
 * Properties of an artifact.
 */
export interface ArtifactInstallPropertiesResponse {
    /**
     * The artifact's identifier.
     */
    artifactId?: string;
    /**
     * The artifact's title.
     */
    artifactTitle?: string;
    /**
     * The status message from the deployment.
     */
    deploymentStatusMessage?: string;
    /**
     * The time that the artifact starts to install on the virtual machine.
     */
    installTime?: string;
    /**
     * The parameters of the artifact.
     */
    parameters?: ArtifactParameterPropertiesResponse[];
    /**
     * The status of the artifact.
     */
    status?: string;
    /**
     * The status message from the virtual machine extension.
     */
    vmExtensionStatusMessage?: string;
}

/**
 * Properties of an artifact parameter.
 */
export interface ArtifactParameterPropertiesResponse {
    /**
     * The name of the artifact parameter.
     */
    name?: string;
    /**
     * The value of the artifact parameter.
     */
    value?: string;
}

/**
 * Properties to attach new disk to the Virtual Machine.
 */
export interface AttachNewDataDiskOptionsResponse {
    /**
     * The name of the disk to be attached.
     */
    diskName?: string;
    /**
     * Size of the disk to be attached in Gibibytes.
     */
    diskSizeGiB?: number;
    /**
     * The storage type for the disk (i.e. Standard, Premium).
     */
    diskType?: string;
}

/**
 * Parameters for creating multiple virtual machines as a single action.
 */
export interface BulkCreationParametersResponse {
    /**
     * The number of virtual machine instances to create.
     */
    instanceCount?: number;
}

/**
 * A data disks attached to a virtual machine.
 */
export interface ComputeDataDiskResponse {
    /**
     * Gets data disk size in GiB.
     */
    diskSizeGiB?: number;
    /**
     * When backed by a blob, the URI of underlying blob.
     */
    diskUri?: string;
    /**
     * When backed by managed disk, this is the ID of the compute disk resource.
     */
    managedDiskId?: string;
    /**
     * Gets data disk name.
     */
    name?: string;
}

/**
 * Status information about a virtual machine.
 */
export interface ComputeVmInstanceViewStatusResponse {
    /**
     * Gets the status Code.
     */
    code?: string;
    /**
     * Gets the short localizable label for the status.
     */
    displayStatus?: string;
    /**
     * Gets the message associated with the status.
     */
    message?: string;
}

/**
 * Properties of a virtual machine returned by the Microsoft.Compute API.
 */
export interface ComputeVmPropertiesResponse {
    /**
     * Gets data disks blob uri for the virtual machine.
     */
    dataDiskIds?: string[];
    /**
     * Gets all data disks attached to the virtual machine.
     */
    dataDisks?: ComputeDataDiskResponse[];
    /**
     * Gets the network interface ID of the virtual machine.
     */
    networkInterfaceId?: string;
    /**
     * Gets OS disk blob uri for the virtual machine.
     */
    osDiskId?: string;
    /**
     * Gets the OS type of the virtual machine.
     */
    osType?: string;
    /**
     * Gets the statuses of the virtual machine.
     */
    statuses?: ComputeVmInstanceViewStatusResponse[];
    /**
     * Gets the size of the virtual machine.
     */
    vmSize?: string;
}

/**
 * Properties for creating a custom image from a VHD.
 */
export interface CustomImagePropertiesCustomResponse {
    /**
     * The image name.
     */
    imageName?: string;
    /**
     * The OS type of the custom image (i.e. Windows, Linux)
     */
    osType: string;
    /**
     * Indicates whether sysprep has been run on the VHD.
     */
    sysPrep?: boolean;
}

/**
 * Properties for plan on a custom image.
 */
export interface CustomImagePropertiesFromPlanResponse {
    /**
     * The id of the plan, equivalent to name of the plan
     */
    id?: string;
    /**
     * The offer for the plan from the marketplace image the custom image is derived from
     */
    offer?: string;
    /**
     * The publisher for the plan from the marketplace image the custom image is derived from
     */
    publisher?: string;
}

/**
 * Properties for creating a custom image from a virtual machine.
 */
export interface CustomImagePropertiesFromVmResponse {
    /**
     * The Linux OS information of the VM.
     */
    linuxOsInfo?: LinuxOsInfoResponse;
    /**
     * The source vm identifier.
     */
    sourceVmId?: string;
    /**
     * The Windows OS information of the VM.
     */
    windowsOsInfo?: WindowsOsInfoResponse;
}

/**
 * Request body for adding a new or existing data disk to a virtual machine.
 */
export interface DataDiskPropertiesResponse {
    /**
     * Specifies options to attach a new disk to the virtual machine.
     */
    attachNewDataDiskOptions?: AttachNewDataDiskOptionsResponse;
    /**
     * Specifies the existing lab disk id to attach to virtual machine.
     */
    existingLabDiskId?: string;
    /**
     * Caching option for a data disk (i.e. None, ReadOnly, ReadWrite).
     */
    hostCaching?: string;
}

/**
 * Storage information about the data disks present in the custom image
 */
export interface DataDiskStorageTypeInfoResponse {
    /**
     * Disk Lun
     */
    lun?: string;
    /**
     * Disk Storage Type
     */
    storageType?: string;
}

/**
 * Properties of a daily schedule.
 */
export interface DayDetailsResponse {
    /**
     * The time of day the schedule will occur.
     */
    time?: string;
}

/**
 * Properties of an environment deployment.
 */
export interface EnvironmentDeploymentPropertiesResponse {
    /**
     * The Azure Resource Manager template's identifier.
     */
    armTemplateId?: string;
    /**
     * The parameters of the Azure Resource Manager template.
     */
    parameters?: ArmTemplateParameterPropertiesResponse[];
}

/**
 * An event to be notified for.
 */
export interface EventResponse {
    /**
     * The event type for which this notification is enabled (i.e. AutoShutdown, Cost)
     */
    eventName?: string;
}

/**
 * Subnet information as returned by the Microsoft.Network API.
 */
export interface ExternalSubnetResponse {
    /**
     * Gets or sets the identifier.
     */
    id?: string;
    /**
     * Gets or sets the name.
     */
    name?: string;
}

/**
 * Information about a VM from which a formula is to be created.
 */
export interface FormulaPropertiesFromVmResponse {
    /**
     * The identifier of the VM from which a formula is to be created.
     */
    labVmId?: string;
}

/**
 * The reference information for an Azure Marketplace image.
 */
export interface GalleryImageReferenceResponse {
    /**
     * The offer of the gallery image.
     */
    offer?: string;
    /**
     * The OS type of the gallery image.
     */
    osType?: string;
    /**
     * The publisher of the gallery image.
     */
    publisher?: string;
    /**
     * The SKU of the gallery image.
     */
    sku?: string;
    /**
     * The version of the gallery image.
     */
    version?: string;
}

/**
 * Properties of an hourly schedule.
 */
export interface HourDetailsResponse {
    /**
     * Minutes of the hour the schedule will run.
     */
    minute?: number;
}

/**
 * Properties of a managed identity
 */
export interface IdentityPropertiesResponse {
    /**
     * The client secret URL of the identity.
     */
    clientSecretUrl?: string;
    /**
     * The principal id of resource identity.
     */
    principalId?: string;
    /**
     * The tenant identifier of resource.
     */
    tenantId?: string;
    /**
     * Managed identity.
     */
    type?: string;
}

/**
 * A rule for NAT - exposing a VM's port (backendPort) on the public IP address using a load balancer.
 */
export interface InboundNatRuleResponse {
    /**
     * The port to which the external traffic will be redirected.
     */
    backendPort?: number;
    /**
     * The external endpoint port of the inbound connection. Possible values range between 1 and 65535, inclusive. If unspecified, a value will be allocated automatically.
     */
    frontendPort?: number;
    /**
     * The transport protocol for the endpoint.
     */
    transportProtocol?: string;
}

/**
 * Properties of a lab's announcement banner
 */
export interface LabAnnouncementPropertiesResponse {
    /**
     * Is the lab announcement active/enabled at this time?
     */
    enabled?: string;
    /**
     * The time at which the announcement expires (null for never)
     */
    expirationDate?: string;
    /**
     * Has this announcement expired?
     */
    expired?: boolean;
    /**
     * The markdown text (if any) that this lab displays in the UI. If left empty/null, nothing will be shown.
     */
    markdown?: string;
    /**
     * The provisioning status of the resource.
     */
    provisioningState: string;
    /**
     * The plain text title for the lab announcement
     */
    title?: string;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    uniqueIdentifier: string;
}

/**
 * Properties of a lab's support banner
 */
export interface LabSupportPropertiesResponse {
    /**
     * Is the lab support banner active/enabled at this time?
     */
    enabled?: string;
    /**
     * The markdown text (if any) that this lab displays in the UI. If left empty/null, nothing will be shown.
     */
    markdown?: string;
}

/**
 * Properties of a VHD in the lab.
 */
export interface LabVhdResponse {
    /**
     * The URI to the VHD.
     */
    id?: string;
}

/**
 * Properties for creating a virtual machine.
 */
export interface LabVirtualMachineCreationParameterResponse {
    /**
     * Indicates whether another user can take ownership of the virtual machine
     */
    allowClaim?: boolean;
    /**
     * The artifacts to be installed on the virtual machine.
     */
    artifacts?: ArtifactInstallPropertiesResponse[];
    /**
     * The number of virtual machine instances to create.
     */
    bulkCreationParameters?: BulkCreationParametersResponse;
    /**
     * The creation date of the virtual machine.
     */
    createdDate?: string;
    /**
     * The custom image identifier of the virtual machine.
     */
    customImageId?: string;
    /**
     * New or existing data disks to attach to the virtual machine after creation
     */
    dataDiskParameters?: DataDiskPropertiesResponse[];
    /**
     * Indicates whether the virtual machine is to be created without a public IP address.
     */
    disallowPublicIpAddress?: boolean;
    /**
     * The resource ID of the environment that contains this virtual machine, if any.
     */
    environmentId?: string;
    /**
     * The expiration date for VM.
     */
    expirationDate?: string;
    /**
     * The Microsoft Azure Marketplace image reference of the virtual machine.
     */
    galleryImageReference?: GalleryImageReferenceResponse;
    /**
     * Indicates whether this virtual machine uses an SSH key for authentication.
     */
    isAuthenticationWithSshKey?: boolean;
    /**
     * The lab subnet name of the virtual machine.
     */
    labSubnetName?: string;
    /**
     * The lab virtual network identifier of the virtual machine.
     */
    labVirtualNetworkId?: string;
    /**
     * The location of the new virtual machine or environment
     */
    location?: string;
    /**
     * The name of the virtual machine or environment
     */
    name?: string;
    /**
     * The network interface properties.
     */
    networkInterface?: NetworkInterfacePropertiesResponse;
    /**
     * The notes of the virtual machine.
     */
    notes?: string;
    /**
     * The object identifier of the owner of the virtual machine.
     */
    ownerObjectId?: string;
    /**
     * The user principal name of the virtual machine owner.
     */
    ownerUserPrincipalName?: string;
    /**
     * The password of the virtual machine administrator.
     */
    password?: string;
    /**
     * The id of the plan associated with the virtual machine image
     */
    planId?: string;
    /**
     * Virtual Machine schedules to be created
     */
    scheduleParameters?: ScheduleCreationParameterResponse[];
    /**
     * The size of the virtual machine.
     */
    size?: string;
    /**
     * The SSH key of the virtual machine administrator.
     */
    sshKey?: string;
    /**
     * Storage type to use for virtual machine (i.e. Standard, Premium).
     */
    storageType?: string;
    /**
     * The tags of the resource.
     */
    tags?: {[key: string]: string};
    /**
     * The user name of the virtual machine.
     */
    userName?: string;
}
/**
 * labVirtualMachineCreationParameterResponseProvideDefaults sets the appropriate defaults for LabVirtualMachineCreationParameterResponse
 */
export function labVirtualMachineCreationParameterResponseProvideDefaults(val: LabVirtualMachineCreationParameterResponse): LabVirtualMachineCreationParameterResponse {
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
export interface LinuxOsInfoResponse {
    /**
     * The state of the Linux OS (i.e. NonDeprovisioned, DeprovisionRequested, DeprovisionApplied).
     */
    linuxOsState?: string;
}

/**
 * Properties of a network interface.
 */
export interface NetworkInterfacePropertiesResponse {
    /**
     * The DNS name.
     */
    dnsName?: string;
    /**
     * The private IP address.
     */
    privateIpAddress?: string;
    /**
     * The public IP address.
     */
    publicIpAddress?: string;
    /**
     * The resource ID of the public IP address.
     */
    publicIpAddressId?: string;
    /**
     * The RdpAuthority property is a server DNS host name or IP address followed by the service port number for RDP (Remote Desktop Protocol).
     */
    rdpAuthority?: string;
    /**
     * The configuration for sharing a public IP address across multiple virtual machines.
     */
    sharedPublicIpAddressConfiguration?: SharedPublicIpAddressConfigurationResponse;
    /**
     * The SshAuthority property is a server DNS host name or IP address followed by the service port number for SSH.
     */
    sshAuthority?: string;
    /**
     * The resource ID of the sub net.
     */
    subnetId?: string;
    /**
     * The resource ID of the virtual network.
     */
    virtualNetworkId?: string;
}

/**
 * Notification settings for a schedule.
 */
export interface NotificationSettingsResponse {
    /**
     * The email recipient to send notifications to (can be a list of semi-colon separated email addresses).
     */
    emailRecipient?: string;
    /**
     * The locale to use when sending a notification (fallback for unsupported languages is EN).
     */
    notificationLocale?: string;
    /**
     * If notifications are enabled for this schedule (i.e. Enabled, Disabled).
     */
    status?: string;
    /**
     * Time in minutes before event at which notification will be sent.
     */
    timeInMinutes?: number;
    /**
     * The webhook URL to which the notification will be sent.
     */
    webhookUrl?: string;
}
/**
 * notificationSettingsResponseProvideDefaults sets the appropriate defaults for NotificationSettingsResponse
 */
export function notificationSettingsResponseProvideDefaults(val: NotificationSettingsResponse): NotificationSettingsResponse {
    return {
        ...val,
        status: (val.status) ?? "Disabled",
    };
}

/**
 * Properties of a network port.
 */
export interface PortResponse {
    /**
     * Backend port of the target virtual machine.
     */
    backendPort?: number;
    /**
     * Protocol type of the port.
     */
    transportProtocol?: string;
}

/**
 * Properties for creating a schedule.
 */
export interface ScheduleCreationParameterResponse {
    /**
     * If the schedule will occur once each day of the week, specify the daily recurrence.
     */
    dailyRecurrence?: DayDetailsResponse;
    /**
     * If the schedule will occur multiple times a day, specify the hourly recurrence.
     */
    hourlyRecurrence?: HourDetailsResponse;
    /**
     * The location of the new virtual machine or environment
     */
    location: string;
    /**
     * The name of the virtual machine or environment
     */
    name?: string;
    /**
     * Notification settings.
     */
    notificationSettings?: NotificationSettingsResponse;
    /**
     * The status of the schedule (i.e. Enabled, Disabled)
     */
    status?: string;
    /**
     * The tags of the resource.
     */
    tags?: {[key: string]: string};
    /**
     * The resource ID to which the schedule belongs
     */
    targetResourceId?: string;
    /**
     * The task type of the schedule (e.g. LabVmsShutdownTask, LabVmAutoStart).
     */
    taskType?: string;
    /**
     * The time zone ID (e.g. China Standard Time, Greenland Standard Time, Pacific Standard time, etc.). The possible values for this property can be found in `IReadOnlyCollection<string> TimeZoneConverter.TZConvert.KnownWindowsTimeZoneIds` (https://github.com/mattjohnsonpint/TimeZoneConverter/blob/main/README.md)
     */
    timeZoneId?: string;
    /**
     * If the schedule will occur only some days of the week, specify the weekly recurrence.
     */
    weeklyRecurrence?: WeekDetailsResponse;
}
/**
 * scheduleCreationParameterResponseProvideDefaults sets the appropriate defaults for ScheduleCreationParameterResponse
 */
export function scheduleCreationParameterResponseProvideDefaults(val: ScheduleCreationParameterResponse): ScheduleCreationParameterResponse {
    return {
        ...val,
        notificationSettings: (val.notificationSettings ? notificationSettingsResponseProvideDefaults(val.notificationSettings) : undefined),
        status: (val.status) ?? "Disabled",
    };
}

/**
 * A schedule.
 */
export interface ScheduleResponse {
    /**
     * The creation date of the schedule.
     */
    createdDate: string;
    /**
     * If the schedule will occur once each day of the week, specify the daily recurrence.
     */
    dailyRecurrence?: DayDetailsResponse;
    /**
     * If the schedule will occur multiple times a day, specify the hourly recurrence.
     */
    hourlyRecurrence?: HourDetailsResponse;
    /**
     * The identifier of the resource.
     */
    id: string;
    /**
     * The location of the resource.
     */
    location?: string;
    /**
     * The name of the resource.
     */
    name: string;
    /**
     * Notification settings.
     */
    notificationSettings?: NotificationSettingsResponse;
    /**
     * The provisioning status of the resource.
     */
    provisioningState: string;
    /**
     * The status of the schedule (i.e. Enabled, Disabled)
     */
    status?: string;
    /**
     * The tags of the resource.
     */
    tags?: {[key: string]: string};
    /**
     * The resource ID to which the schedule belongs
     */
    targetResourceId?: string;
    /**
     * The task type of the schedule (e.g. LabVmsShutdownTask, LabVmAutoStart).
     */
    taskType?: string;
    /**
     * The time zone ID (e.g. China Standard Time, Greenland Standard Time, Pacific Standard time, etc.). The possible values for this property can be found in `IReadOnlyCollection<string> TimeZoneConverter.TZConvert.KnownWindowsTimeZoneIds` (https://github.com/mattjohnsonpint/TimeZoneConverter/blob/main/README.md)
     */
    timeZoneId?: string;
    /**
     * The type of the resource.
     */
    type: string;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    uniqueIdentifier: string;
    /**
     * If the schedule will occur only some days of the week, specify the weekly recurrence.
     */
    weeklyRecurrence?: WeekDetailsResponse;
}
/**
 * scheduleResponseProvideDefaults sets the appropriate defaults for ScheduleResponse
 */
export function scheduleResponseProvideDefaults(val: ScheduleResponse): ScheduleResponse {
    return {
        ...val,
        notificationSettings: (val.notificationSettings ? notificationSettingsResponseProvideDefaults(val.notificationSettings) : undefined),
        status: (val.status) ?? "Disabled",
    };
}

/**
 * Properties of a virtual machine that determine how it is connected to a load balancer.
 */
export interface SharedPublicIpAddressConfigurationResponse {
    /**
     * The incoming NAT rules
     */
    inboundNatRules?: InboundNatRuleResponse[];
}

/**
 * Property overrides on a subnet of a virtual network.
 */
export interface SubnetOverrideResponse {
    /**
     * The name given to the subnet within the lab.
     */
    labSubnetName?: string;
    /**
     * The resource ID of the subnet.
     */
    resourceId?: string;
    /**
     * Properties that virtual machines on this subnet will share.
     */
    sharedPublicIpAddressConfiguration?: SubnetSharedPublicIpAddressConfigurationResponse;
    /**
     * Indicates whether this subnet can be used during virtual machine creation (i.e. Allow, Deny).
     */
    useInVmCreationPermission?: string;
    /**
     * Indicates whether public IP addresses can be assigned to virtual machines on this subnet (i.e. Allow, Deny).
     */
    usePublicIpAddressPermission?: string;
    /**
     * The virtual network pool associated with this subnet.
     */
    virtualNetworkPoolName?: string;
}

/**
 * Subnet information.
 */
export interface SubnetResponse {
    /**
     * The permission policy of the subnet for allowing public IP addresses (i.e. Allow, Deny)).
     */
    allowPublicIp?: string;
    /**
     * The name of the subnet as seen in the lab.
     */
    labSubnetName?: string;
    /**
     * The resource ID of the subnet.
     */
    resourceId?: string;
}

/**
 * Configuration for public IP address sharing.
 */
export interface SubnetSharedPublicIpAddressConfigurationResponse {
    /**
     * Backend ports that virtual machines on this subnet are allowed to expose
     */
    allowedPorts?: PortResponse[];
}

/**
 * Identity attributes of a lab user.
 */
export interface UserIdentityResponse {
    /**
     * Set to the app Id of the client JWT making the request.
     */
    appId?: string;
    /**
     * Set to the object Id of the client JWT making the request. Not all users have object Id. For CSP (reseller) scenarios for example, object Id is not available.
     */
    objectId?: string;
    /**
     * Set to the principal Id of the client JWT making the request. Service principal will not have the principal Id.
     */
    principalId?: string;
    /**
     * Set to the principal name / UPN of the client JWT making the request.
     */
    principalName?: string;
    /**
     * Set to the tenant ID of the client JWT making the request.
     */
    tenantId?: string;
}

/**
 * Properties of a user's secret store.
 */
export interface UserSecretStoreResponse {
    /**
     * The ID of the user's Key vault.
     */
    keyVaultId?: string;
    /**
     * The URI of the user's Key vault.
     */
    keyVaultUri?: string;
}

/**
 * Properties of a weekly schedule.
 */
export interface WeekDetailsResponse {
    /**
     * The time of the day the schedule will occur.
     */
    time?: string;
    /**
     * The days of the week for which the schedule is set (e.g. Sunday, Monday, Tuesday, etc.).
     */
    weekdays?: string[];
}

/**
 * Information about a Windows OS.
 */
export interface WindowsOsInfoResponse {
    /**
     * The state of the Windows OS (i.e. NonSysprepped, SysprepRequested, SysprepApplied).
     */
    windowsOsState?: string;
}
