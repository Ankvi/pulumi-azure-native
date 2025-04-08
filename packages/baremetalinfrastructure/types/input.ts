import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Identity for Azure Bare Metal Storage Instance.
 */
export interface AzureBareMetalStorageInstanceIdentityArgs {
    /**
     * The type of identity used for the Azure Bare Metal Storage Instance. The type 'SystemAssigned' refers to an implicitly created identity. The type 'None' will remove any identities from the Azure Bare Metal Storage Instance.
     */
    type?: pulumi.Input<string | enums.ResourceIdentityType>;
}

/**
 * Specifies the disk information fo the Azure Bare Metal Instance
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
 * Specifies the hardware settings for the Azure Bare Metal Instance.
 */
export interface HardwareProfileArgs {
    /**
     * Specifies the Azure Bare Metal Instance SKU.
     */
    azureBareMetalInstanceSize?: pulumi.Input<string | enums.AzureBareMetalInstanceSizeNamesEnum>;
    /**
     * Name of the hardware type (vendor and/or their product name)
     */
    hardwareType?: pulumi.Input<string | enums.AzureBareMetalHardwareTypeNamesEnum>;
}

/**
 * Specifies the network interfaces of a bare metal resource.
 */
export interface NetworkInterfaceArgs {
    /**
     * Specifies the IP address of the network interface.
     */
    ipAddress?: pulumi.Input<string>;
}

/**
 * Specifies the network settings for the Azure Bare Metal Instance disks.
 */
export interface NetworkProfileArgs {
    /**
     * Specifies the circuit id for connecting to express route.
     */
    circuitId?: pulumi.Input<string>;
    /**
     * Specifies the network interfaces for the Azure Bare Metal Instance.
     */
    networkInterfaces?: pulumi.Input<pulumi.Input<NetworkInterfaceArgs>[]>;
}

/**
 * Specifies the operating system settings for the Azure Bare Metal instance.
 */
export interface OSProfileArgs {
    /**
     * Specifies the host OS name of the Azure Bare Metal instance.
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
 * Describes the billing related details of the AzureBareMetalStorageInstance.
 */
export interface StorageBillingPropertiesArgs {
    /**
     * the SKU type that is provisioned
     */
    azureBareMetalStorageInstanceSize?: pulumi.Input<string>;
    /**
     * the billing mode for the storage instance
     */
    billingMode?: pulumi.Input<string>;
}

/**
 * Specifies the storage settings for the Azure Bare Metal instance disks.
 */
export interface StorageProfileArgs {
    /**
     * IP Address to connect to storage.
     */
    nfsIpAddress?: pulumi.Input<string>;
    /**
     * Specifies information about the operating system disk used by bare metal instance.
     */
    osDisks?: pulumi.Input<pulumi.Input<DiskArgs>[]>;
}

/**
 * described the storage properties of the azure bare metal storage instance
 */
export interface StoragePropertiesArgs {
    /**
     * the kind of storage instance
     */
    generation?: pulumi.Input<string>;
    /**
     * the hardware type of the storage instance
     */
    hardwareType?: pulumi.Input<string>;
    /**
     * the offering type for which the resource is getting provisioned
     */
    offeringType?: pulumi.Input<string>;
    /**
     * State of provisioning of the AzureBareMetalStorageInstance
     */
    provisioningState?: pulumi.Input<string | enums.ProvisioningState>;
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
