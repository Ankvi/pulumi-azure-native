import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Profile for how to handle shutting down virtual machines.
 */
export interface AutoShutdownProfileResponse {
    /**
     * The amount of time a VM will stay running after a user disconnects if this behavior is enabled.
     */
    disconnectDelay?: string;
    /**
     * The amount of time a VM will idle before it is shutdown if this behavior is enabled.
     */
    idleDelay?: string;
    /**
     * The amount of time a VM will stay running before it is shutdown if no connection is made and this behavior is enabled.
     */
    noConnectDelay?: string;
    /**
     * Whether shutdown on disconnect is enabled
     */
    shutdownOnDisconnect?: string;
    /**
     * Whether a VM will get shutdown when it has idled for a period of time.
     */
    shutdownOnIdle?: string;
    /**
     * Whether a VM will get shutdown when it hasn't been connected to after a period of time.
     */
    shutdownWhenNotConnected?: string;
}
/**
 * autoShutdownProfileResponseProvideDefaults sets the appropriate defaults for AutoShutdownProfileResponse
 */
export function autoShutdownProfileResponseProvideDefaults(val: AutoShutdownProfileResponse): AutoShutdownProfileResponse {
    return {
        ...val,
        shutdownOnDisconnect: (val.shutdownOnDisconnect) ?? "Disabled",
        shutdownOnIdle: (val.shutdownOnIdle) ?? "None",
        shutdownWhenNotConnected: (val.shutdownWhenNotConnected) ?? "Disabled",
    };
}

/**
 * Connection profile for how users connect to lab virtual machines.
 */
export interface ConnectionProfileResponse {
    /**
     * The enabled access level for Client Access over RDP.
     */
    clientRdpAccess?: string;
    /**
     * The enabled access level for Client Access over SSH.
     */
    clientSshAccess?: string;
    /**
     * The enabled access level for Web Access over RDP.
     */
    webRdpAccess?: string;
    /**
     * The enabled access level for Web Access over SSH.
     */
    webSshAccess?: string;
}
/**
 * connectionProfileResponseProvideDefaults sets the appropriate defaults for ConnectionProfileResponse
 */
export function connectionProfileResponseProvideDefaults(val: ConnectionProfileResponse): ConnectionProfileResponse {
    return {
        ...val,
        clientRdpAccess: (val.clientRdpAccess) ?? "None",
        clientSshAccess: (val.clientSshAccess) ?? "None",
        webRdpAccess: (val.webRdpAccess) ?? "None",
        webSshAccess: (val.webSshAccess) ?? "None",
    };
}

/**
 * Credentials for a user on a lab VM.
 */
export interface CredentialsResponse {
    /**
     * The username to use when signing in to lab VMs.
     */
    username: string;
}

/**
 * This represents the details about a User's environment and its state.
 */
export interface EnvironmentDetailsResponse {
    /**
     * Description of the Environment
     */
    description: string;
    /**
     * Publishing state of the environment setting Possible values are Creating, Created, Failed
     */
    environmentState: string;
    /**
     * Resource Id of the environment
     */
    id: string;
    /**
     * The details of the latest operation. ex: status, error
     */
    latestOperationResult: LatestOperationResultResponse;
    /**
     * Name of the Environment
     */
    name: string;
    /**
     * When the password was last reset on the environment.
     */
    passwordLastReset: string;
    /**
     * The provisioning state of the environment. This also includes LabIsFull and NotYetProvisioned status.
     */
    provisioningState: string;
    /**
     * How long the environment has been used by a lab user
     */
    totalUsage: string;
    /**
     * Details of backing DTL virtual machine with compute and network details.
     */
    virtualMachineDetails: VirtualMachineDetailsResponse;
}

/**
 * Represents a size category supported by this Lab Account (small, medium or large)
 */
export interface EnvironmentSizeResponse {
    /**
     * The pay-as-you-go dollar price per hour this size will cost. It does not include discounts and may not reflect the actual price the size will cost. This is the maximum price of all prices within this tier.
     */
    maxPrice: number;
    /**
     * The amount of memory available (in GB). This is the minimum amount of memory within this tier.
     */
    minMemory: number;
    /**
     * The number of cores a VM of this size has. This is the minimum number of cores within this tier.
     */
    minNumberOfCores: number;
    /**
     * The size category
     */
    name?: string;
    /**
     * Represents a set of compute sizes that can serve this given size type
     */
    vmSizes?: SizeInfoResponse[];
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
 * Identity for the resource.
 */
export interface IdentityResponse {
    /**
     * The principal ID of resource identity.
     */
    principalId: string;
    /**
     * The tenant ID of resource.
     */
    tenantId: string;
    /**
     * The identity type.
     */
    type?: string;
}

/**
 * Image reference information. Used in the virtual machine profile.
 */
export interface ImageReferenceResponse {
    /**
     * The actual version of the image after use.
     */
    exactVersion: string;
    /**
     * Image resource ID
     */
    id?: string;
    /**
     * The image offer if applicable.
     */
    offer?: string;
    /**
     * The image publisher
     */
    publisher?: string;
    /**
     * The image SKU
     */
    sku?: string;
    /**
     * The image version specified on creation.
     */
    version?: string;
}

/**
 * This represents the details about a lab that the User is in, and its state.
 */
export interface LabDetailsResponse {
    /**
     * The Id of the lab.
     */
    id?: string;
    /**
     * Name of the lab
     */
    name?: string;
    /**
     * The provisioning state of the lab.
     */
    provisioningState?: string;
    /**
     * The maximum duration a user can use a VM in this lab.
     */
    usageQuota: string;
}

/**
 * Profile for how to handle networking for Labs.
 */
export interface LabNetworkProfileResponse {
    /**
     * The external load balancer resource id
     */
    loadBalancerId?: string;
    /**
     * The external public IP resource id
     */
    publicIpId?: string;
    /**
     * The external subnet resource id
     */
    subnetId?: string;
}

/**
 * Profile for how to handle networking for Lab Plans.
 */
export interface LabPlanNetworkProfileResponse {
    /**
     * The external subnet resource id
     */
    subnetId?: string;
}

/**
 * Details of the status of an operation.
 */
export interface LatestOperationResultResponse {
    /**
     * Error code on failure.
     */
    errorCode: string;
    /**
     * The error message.
     */
    errorMessage: string;
    /**
     * The HttpMethod - PUT/POST/DELETE for the operation.
     */
    httpMethod: string;
    /**
     * The URL to use to check long-running operation status
     */
    operationUrl: string;
    /**
     * Request URI of the operation.
     */
    requestUri: string;
    /**
     * The current status of the operation.
     */
    status: string;
}

/**
 * Network details of the environment
 */
export interface NetworkInterfaceResponse {
    /**
     * PrivateIp address of the Compute VM
     */
    privateIpAddress: string;
    /**
     * Connection information for Windows
     */
    rdpAuthority: string;
    /**
     * Connection information for Linux
     */
    sshAuthority: string;
    /**
     * Username of the VM
     */
    username: string;
}

/**
 * Represents the status of an operation that used the batch API.
 */
export interface OperationBatchStatusResponseItemResponse {
    /**
     * status of the long running operation for an environment
     */
    operationUrl: string;
    /**
     * status of the long running operation for an environment
     */
    status: string;
}

/**
 * Recurrence pattern of a lab schedule.
 */
export interface RecurrencePatternResponse {
    /**
     * When the recurrence will expire. This date is inclusive.
     */
    expirationDate: string;
    /**
     * The frequency of the recurrence.
     */
    frequency: string;
    /**
     * The interval to invoke the schedule on. For example, interval = 2 and RecurrenceFrequency.Daily will run every 2 days. When no interval is supplied, an interval of 1 is used.
     */
    interval?: number;
    /**
     * The week days the schedule runs. Used for when the Frequency is set to Weekly.
     */
    weekDays?: string[];
}

/**
 * Details of a Reference Vm
 */
export interface ReferenceVmResponse {
    /**
     * The password of the virtual machine. This will be set to null in GET resource API
     */
    password?: string;
    /**
     * The username of the virtual machine
     */
    userName: string;
    /**
     * VM resource Id for the environment
     */
    vmResourceId: string;
    /**
     * The state details for the reference virtual machine.
     */
    vmStateDetails: VmStateDetailsResponse;
}

/**
 * The availability information of sizes across regions
 */
export interface RegionalAvailabilityResponse {
    /**
     * Corresponding region
     */
    region?: string;
    /**
     * List of all the size information for the region
     */
    sizeAvailabilities?: SizeAvailabilityResponse[];
}

/**
 * Represents a VM and the setting Id it was created for.
 */
export interface ResourceSetResponse {
    /**
     * resourceSettingId for the environment
     */
    resourceSettingId?: string;
    /**
     * VM resource Id for the environment
     */
    vmResourceId?: string;
}

/**
 * Represents resource specific settings
 */
export interface ResourceSettingsResponse {
    /**
     * The translated compute cores of the virtual machine
     */
    cores: number;
    /**
     * The resource id of the gallery image used for creating the virtual machine
     */
    galleryImageResourceId?: string;
    /**
     * The unique id of the resource setting
     */
    id: string;
    /**
     * The name of the image used to created the environment setting
     */
    imageName: string;
    /**
     * Details specific to Reference Vm
     */
    referenceVm: ReferenceVmResponse;
    /**
     * The size of the virtual machine
     */
    size?: string;
}

/**
 * The lab user list management profile.
 */
export interface RosterProfileResponse {
    /**
     * The AAD group ID which this lab roster is populated from. Having this set enables AAD sync mode.
     */
    activeDirectoryGroupId?: string;
    /**
     * The base URI identifying the lms instance.
     */
    lmsInstance?: string;
    /**
     * The unique id of the azure lab services tool in the lms.
     */
    ltiClientId?: string;
    /**
     * The unique context identifier for the lab in the lms.
     */
    ltiContextId?: string;
    /**
     * The uri of the names and roles service endpoint on the lms for the class attached to this lab.
     */
    ltiRosterEndpoint?: string;
}

/**
 * The lab security profile.
 */
export interface SecurityProfileResponse {
    /**
     * Whether any user or only specified users can register to a lab.
     */
    openAccess?: string;
    /**
     * The registration code for the lab.
     */
    registrationCode: string;
}

/**
 * Represents the size information
 */
export interface SizeAvailabilityResponse {
    /**
     * Whether or not this size category is available
     */
    isAvailable?: boolean;
    /**
     * The category of the size (Basic, Standard, Performance).
     */
    sizeCategory?: string;
}

/**
 * Represents the size configuration under the lab account
 */
export interface SizeConfigurationPropertiesResponse {
    /**
     * Represents a list of size categories supported by this Lab Account (Small, Medium, Large)
     */
    environmentSizes?: EnvironmentSizeResponse[];
}

/**
 * Contains detailed information about a size
 */
export interface SizeInfoResponse {
    /**
     * Represents the actual compute size, e.g. Standard_A2_v2.
     */
    computeSize?: string;
    /**
     * The amount of memory available (in GB).
     */
    memory?: number;
    /**
     * The number of cores a VM of this size has.
     */
    numberOfCores?: number;
    /**
     * The pay-as-you-go price per hour this size will cost. It does not include discounts and may not reflect the actual price the size will cost.
     */
    price?: number;
}

/**
 * The resource model definition representing SKU
 */
export interface SkuResponse {
    /**
     * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
     */
    capacity?: number;
    /**
     * If the service has different generations of hardware, for the same SKU, then that can be captured here.
     */
    family?: string;
    /**
     * The name of the SKU. Ex - P3. It is typically a letter+number code
     */
    name: string;
    /**
     * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. 
     */
    size?: string;
    /**
     * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
     */
    tier?: string;
}

/**
 * Support contact information and instructions.
 */
export interface SupportInfoResponse {
    /**
     * Support contact email address.
     */
    email?: string;
    /**
     * Support instructions.
     */
    instructions?: string;
    /**
     * Support contact phone number.
     */
    phone?: string;
    /**
     * Support web address.
     */
    url?: string;
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
 * The additional capabilities for a lab VM.
 */
export interface VirtualMachineAdditionalCapabilitiesResponse {
    /**
     * Flag to pre-install dedicated GPU drivers.
     */
    installGpuDrivers?: string;
}
/**
 * virtualMachineAdditionalCapabilitiesResponseProvideDefaults sets the appropriate defaults for VirtualMachineAdditionalCapabilitiesResponse
 */
export function virtualMachineAdditionalCapabilitiesResponseProvideDefaults(val: VirtualMachineAdditionalCapabilitiesResponse): VirtualMachineAdditionalCapabilitiesResponse {
    return {
        ...val,
        installGpuDrivers: (val.installGpuDrivers) ?? "Disabled",
    };
}

/**
 * Details of the backing virtual machine.
 */
export interface VirtualMachineDetailsResponse {
    /**
     * Last known compute power state captured in DTL
     */
    lastKnownPowerState: string;
    /**
     * PrivateIp address of the compute VM
     */
    privateIpAddress: string;
    /**
     * Provisioning state of the Dtl VM
     */
    provisioningState: string;
    /**
     * Connection information for Windows
     */
    rdpAuthority: string;
    /**
     * Connection information for Linux
     */
    sshAuthority: string;
    /**
     * Compute VM login user name
     */
    userName: string;
}

/**
 * The base virtual machine configuration for a lab.
 */
export interface VirtualMachineProfileResponse {
    /**
     * Additional VM capabilities.
     */
    additionalCapabilities?: VirtualMachineAdditionalCapabilitiesResponse;
    /**
     * Credentials for the admin user on the VM.
     */
    adminUser: CredentialsResponse;
    /**
     * Indicates what lab virtual machines are created from.
     */
    createOption: string;
    /**
     * The image configuration for lab virtual machines.
     */
    imageReference: ImageReferenceResponse;
    /**
     * Credentials for the non-admin user on the VM, if one exists.
     */
    nonAdminUser?: CredentialsResponse;
    /**
     * The OS type of the image
     */
    osType: string;
    /**
     * The SKU for the lab. Defines the type of virtual machines used in the lab.
     */
    sku: SkuResponse;
    /**
     * The initial quota alloted to each lab user. Must be a time span between 0 and 9999 hours.
     */
    usageQuota: string;
    /**
     * Enabling this option will use the same password for all user VMs.
     */
    useSharedPassword?: string;
}
/**
 * virtualMachineProfileResponseProvideDefaults sets the appropriate defaults for VirtualMachineProfileResponse
 */
export function virtualMachineProfileResponseProvideDefaults(val: VirtualMachineProfileResponse): VirtualMachineProfileResponse {
    return {
        ...val,
        additionalCapabilities: (val.additionalCapabilities ? virtualMachineAdditionalCapabilitiesResponseProvideDefaults(val.additionalCapabilities) : undefined),
        useSharedPassword: (val.useSharedPassword) ?? "Disabled",
    };
}

/**
 * Details about the state of the reference virtual machine.
 */
export interface VmStateDetailsResponse {
    /**
     * Last known compute power state captured in DTL
     */
    lastKnownPowerState: string;
    /**
     * The power state of the reference virtual machine.
     */
    powerState: string;
    /**
     * The RdpAuthority property is a server DNS host name or IP address followed by the service port number for RDP (Remote Desktop Protocol).
     */
    rdpAuthority: string;
    /**
     * The SshAuthority property is a server DNS host name or IP address followed by the service port number for SSH.
     */
    sshAuthority: string;
}


