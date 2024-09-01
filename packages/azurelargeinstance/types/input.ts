import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Specifies the disk information fo the Azure Large Instance
 */
export interface DiskArgs {
    /**
     * Specifies the size of an empty data disk in gigabytes.
     */
    diskSizeGB?: pulumi.Input<number>;
    /**
     * The disk name.
     */
    name?: pulumi.Input<string>;
}

/**
 * Specifies the hardware settings for the Azure Large Instance.
 */
export interface HardwareProfileArgs {
    /**
     * Specifies the Azure Large Instance SKU.
     */
    azureLargeInstanceSize?: pulumi.Input<string | enums.AzureLargeInstanceSizeNamesEnum>;
    /**
     * Name of the hardware type (vendor and/or their product name)
     */
    hardwareType?: pulumi.Input<string | enums.AzureLargeInstanceHardwareTypeNamesEnum>;
}

/**
 * Specifies the IP address of the network interface.
 */
export interface IpAddressArgs {
    /**
     * Specifies the IP address of the network interface.
     */
    ipAddress?: pulumi.Input<string>;
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
 * Specifies the network settings for the Azure Large Instance disks.
 */
export interface NetworkProfileArgs {
    /**
     * Specifies the circuit id for connecting to express route.
     */
    circuitId?: pulumi.Input<string>;
    /**
     * Specifies the network interfaces for the Azure Large Instance.
     */
    networkInterfaces?: pulumi.Input<pulumi.Input<IpAddressArgs>[]>;
}

/**
 * Specifies the operating system settings for the Azure Large Instance.
 */
export interface OsProfileArgs {
    /**
     * Specifies the host OS name of the Azure Large Instance.
     */
    computerName?: pulumi.Input<string>;
    /**
     * This property allows you to specify the type of the OS.
     */
    osType?: pulumi.Input<string>;
    /**
     * Specifies the SSH public key used to access the operating system.
     */
    sshPublicKey?: pulumi.Input<string>;
    /**
     * Specifies version of operating system.
     */
    version?: pulumi.Input<string>;
}

/**
 * Describes the billing related details of the AzureLargeStorageInstance.
 */
export interface StorageBillingPropertiesArgs {
    /**
     * the billing mode for the storage instance
     */
    billingMode?: pulumi.Input<string>;
    /**
     * the SKU type that is provisioned
     */
    sku?: pulumi.Input<string>;
}

/**
 * Specifies the storage settings for the Azure Large Instance disks.
 */
export interface StorageProfileArgs {
    /**
     * IP Address to connect to storage.
     */
    nfsIpAddress?: pulumi.Input<string>;
    /**
     * Specifies information about the operating system disk used by Azure Large
     * Instance.
     */
    osDisks?: pulumi.Input<pulumi.Input<DiskArgs>[]>;
}

/**
 * described the storage properties of the azure large storage instance
 */
export interface StoragePropertiesArgs {
    /**
     * the kind of storage instance
     */
    generation?: pulumi.Input<string>;
    /**
     * the hardware type of the storage instance
     */
    hardwareType?: pulumi.Input<string | enums.AzureLargeInstanceHardwareTypeNamesEnum>;
    /**
     * the offering type for which the resource is getting provisioned
     */
    offeringType?: pulumi.Input<string>;
    /**
     * the billing related information for the resource
     */
    storageBillingProperties?: pulumi.Input<StorageBillingPropertiesArgs>;
    /**
     * the storage protocol for which the resource is getting provisioned
     */
    storageType?: pulumi.Input<string>;
    /**
     * the workload for which the resource is getting provisioned
     */
    workloadType?: pulumi.Input<string>;
}
