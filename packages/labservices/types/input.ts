import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Profile for how to handle shutting down virtual machines.
 */
export interface AutoShutdownProfileArgs {
    /**
     * The amount of time a VM will stay running after a user disconnects if this behavior is enabled.
     */
    disconnectDelay?: pulumi.Input<string>;
    /**
     * The amount of time a VM will idle before it is shutdown if this behavior is enabled.
     */
    idleDelay?: pulumi.Input<string>;
    /**
     * The amount of time a VM will stay running before it is shutdown if no connection is made and this behavior is enabled.
     */
    noConnectDelay?: pulumi.Input<string>;
    /**
     * Whether shutdown on disconnect is enabled
     */
    shutdownOnDisconnect?: pulumi.Input<enums.EnableState>;
    /**
     * Whether a VM will get shutdown when it has idled for a period of time.
     */
    shutdownOnIdle?: pulumi.Input<enums.ShutdownOnIdleMode>;
    /**
     * Whether a VM will get shutdown when it hasn't been connected to after a period of time.
     */
    shutdownWhenNotConnected?: pulumi.Input<enums.EnableState>;
}
/**
 * autoShutdownProfileArgsProvideDefaults sets the appropriate defaults for AutoShutdownProfileArgs
 */
export function autoShutdownProfileArgsProvideDefaults(val: AutoShutdownProfileArgs): AutoShutdownProfileArgs {
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
export interface ConnectionProfileArgs {
    /**
     * The enabled access level for Client Access over RDP.
     */
    clientRdpAccess?: pulumi.Input<enums.ConnectionType>;
    /**
     * The enabled access level for Client Access over SSH.
     */
    clientSshAccess?: pulumi.Input<enums.ConnectionType>;
    /**
     * The enabled access level for Web Access over RDP.
     */
    webRdpAccess?: pulumi.Input<enums.ConnectionType>;
    /**
     * The enabled access level for Web Access over SSH.
     */
    webSshAccess?: pulumi.Input<enums.ConnectionType>;
}
/**
 * connectionProfileArgsProvideDefaults sets the appropriate defaults for ConnectionProfileArgs
 */
export function connectionProfileArgsProvideDefaults(val: ConnectionProfileArgs): ConnectionProfileArgs {
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
export interface CredentialsArgs {
    /**
     * The password for the user. This is required for the TemplateVM createOption.
     */
    password?: pulumi.Input<string>;
    /**
     * The username to use when signing in to lab VMs.
     */
    username: pulumi.Input<string>;
}

/**
 * Identity for the resource.
 */
export interface IdentityArgs {
    /**
     * The identity type.
     */
    type?: pulumi.Input<enums.ResourceIdentityType>;
}

/**
 * Image reference information. Used in the virtual machine profile.
 */
export interface ImageReferenceArgs {
    /**
     * Image resource ID
     */
    id?: pulumi.Input<string>;
    /**
     * The image offer if applicable.
     */
    offer?: pulumi.Input<string>;
    /**
     * The image publisher
     */
    publisher?: pulumi.Input<string>;
    /**
     * The image SKU
     */
    sku?: pulumi.Input<string>;
    /**
     * The image version specified on creation.
     */
    version?: pulumi.Input<string>;
}

/**
 * Profile for how to handle networking for Labs.
 */
export interface LabNetworkProfileArgs {
    /**
     * The external load balancer resource id
     */
    loadBalancerId?: pulumi.Input<string>;
    /**
     * The external public IP resource id
     */
    publicIpId?: pulumi.Input<string>;
    /**
     * The external subnet resource id
     */
    subnetId?: pulumi.Input<string>;
}

/**
 * Profile for how to handle networking for Lab Plans.
 */
export interface LabPlanNetworkProfileArgs {
    /**
     * The external subnet resource id
     */
    subnetId?: pulumi.Input<string>;
}

/**
 * Recurrence pattern of a lab schedule.
 */
export interface RecurrencePatternArgs {
    /**
     * When the recurrence will expire. This date is inclusive.
     */
    expirationDate: pulumi.Input<string>;
    /**
     * The frequency of the recurrence.
     */
    frequency: pulumi.Input<enums.RecurrenceFrequency>;
    /**
     * The interval to invoke the schedule on. For example, interval = 2 and RecurrenceFrequency.Daily will run every 2 days. When no interval is supplied, an interval of 1 is used.
     */
    interval?: pulumi.Input<number>;
    /**
     * The week days the schedule runs. Used for when the Frequency is set to Weekly.
     */
    weekDays?: pulumi.Input<pulumi.Input<enums.WeekDay>[]>;
}

/**
 * The lab user list management profile.
 */
export interface RosterProfileArgs {
    /**
     * The AAD group ID which this lab roster is populated from. Having this set enables AAD sync mode.
     */
    activeDirectoryGroupId?: pulumi.Input<string>;
    /**
     * The base URI identifying the lms instance.
     */
    lmsInstance?: pulumi.Input<string>;
    /**
     * The unique id of the azure lab services tool in the lms.
     */
    ltiClientId?: pulumi.Input<string>;
    /**
     * The unique context identifier for the lab in the lms.
     */
    ltiContextId?: pulumi.Input<string>;
    /**
     * The uri of the names and roles service endpoint on the lms for the class attached to this lab.
     */
    ltiRosterEndpoint?: pulumi.Input<string>;
}

/**
 * The lab security profile.
 */
export interface SecurityProfileArgs {
    /**
     * Whether any user or only specified users can register to a lab.
     */
    openAccess?: pulumi.Input<enums.EnableState>;
}

/**
 * The resource model definition representing SKU
 */
export interface SkuArgs {
    /**
     * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
     */
    capacity?: pulumi.Input<number>;
    /**
     * If the service has different generations of hardware, for the same SKU, then that can be captured here.
     */
    family?: pulumi.Input<string>;
    /**
     * The name of the SKU. Ex - P3. It is typically a letter+number code
     */
    name: pulumi.Input<string>;
    /**
     * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. 
     */
    size?: pulumi.Input<string>;
    /**
     * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
     */
    tier?: pulumi.Input<enums.SkuTier>;
}

/**
 * Support contact information and instructions.
 */
export interface SupportInfoArgs {
    /**
     * Support contact email address.
     */
    email?: pulumi.Input<string>;
    /**
     * Support instructions.
     */
    instructions?: pulumi.Input<string>;
    /**
     * Support contact phone number.
     */
    phone?: pulumi.Input<string>;
    /**
     * Support web address.
     */
    url?: pulumi.Input<string>;
}

/**
 * The additional capabilities for a lab VM.
 */
export interface VirtualMachineAdditionalCapabilitiesArgs {
    /**
     * Flag to pre-install dedicated GPU drivers.
     */
    installGpuDrivers?: pulumi.Input<enums.EnableState>;
}
/**
 * virtualMachineAdditionalCapabilitiesArgsProvideDefaults sets the appropriate defaults for VirtualMachineAdditionalCapabilitiesArgs
 */
export function virtualMachineAdditionalCapabilitiesArgsProvideDefaults(val: VirtualMachineAdditionalCapabilitiesArgs): VirtualMachineAdditionalCapabilitiesArgs {
    return {
        ...val,
        installGpuDrivers: (val.installGpuDrivers) ?? "Disabled",
    };
}

/**
 * The base virtual machine configuration for a lab.
 */
export interface VirtualMachineProfileArgs {
    /**
     * Additional VM capabilities.
     */
    additionalCapabilities?: pulumi.Input<VirtualMachineAdditionalCapabilitiesArgs>;
    /**
     * Credentials for the admin user on the VM.
     */
    adminUser: pulumi.Input<CredentialsArgs>;
    /**
     * Indicates what lab virtual machines are created from.
     */
    createOption: pulumi.Input<enums.CreateOption>;
    /**
     * The image configuration for lab virtual machines.
     */
    imageReference: pulumi.Input<ImageReferenceArgs>;
    /**
     * Credentials for the non-admin user on the VM, if one exists.
     */
    nonAdminUser?: pulumi.Input<CredentialsArgs>;
    /**
     * The SKU for the lab. Defines the type of virtual machines used in the lab.
     */
    sku: pulumi.Input<SkuArgs>;
    /**
     * The initial quota alloted to each lab user. Must be a time span between 0 and 9999 hours.
     */
    usageQuota: pulumi.Input<string>;
    /**
     * Enabling this option will use the same password for all user VMs.
     */
    useSharedPassword?: pulumi.Input<enums.EnableState>;
}
/**
 * virtualMachineProfileArgsProvideDefaults sets the appropriate defaults for VirtualMachineProfileArgs
 */
export function virtualMachineProfileArgsProvideDefaults(val: VirtualMachineProfileArgs): VirtualMachineProfileArgs {
    return {
        ...val,
        additionalCapabilities: (val.additionalCapabilities ? pulumi.output(val.additionalCapabilities).apply(virtualMachineAdditionalCapabilitiesArgsProvideDefaults) : undefined),
        useSharedPassword: (val.useSharedPassword) ?? "Disabled",
    };
}
