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
 * Error details of the latest operation failure on this resource
 */
export interface ResourceOperationErrorResponse {
    /**
     * The operation action that failed
     */
    action?: string;
    /**
     * The code that corresponds to the type of operation failure
     */
    code?: string;
    /**
     * The operation failure message
     */
    message?: string;
    /**
     * The datetime of when the error occured
     */
    timestamp?: string;
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
