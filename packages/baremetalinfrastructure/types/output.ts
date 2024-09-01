import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Specifies the disk information fo the Azure Bare Metal Instance
 */
export interface DiskResponse {
    /**
     * Specifies the size of an empty data disk in gigabytes.
     */
    diskSizeGB?: number;
    /**
     * Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
     */
    lun: number;
    /**
     * The disk name.
     */
    name?: string;
}

/**
 * Specifies the hardware settings for the Azure Bare Metal Instance.
 */
export interface HardwareProfileResponse {
    /**
     * Specifies the Azure Bare Metal Instance SKU.
     */
    azureBareMetalInstanceSize?: string;
    /**
     * Name of the hardware type (vendor and/or their product name)
     */
    hardwareType?: string;
}

/**
 * Specifies the network interfaces of a bare metal resource.
 */
export interface NetworkInterfaceResponse {
    /**
     * Specifies the IP address of the network interface.
     */
    ipAddress?: string;
}

/**
 * Specifies the network settings for the Azure Bare Metal Instance disks.
 */
export interface NetworkProfileResponse {
    /**
     * Specifies the circuit id for connecting to express route.
     */
    circuitId?: string;
    /**
     * Specifies the network interfaces for the Azure Bare Metal Instance.
     */
    networkInterfaces?: NetworkInterfaceResponse[];
}

/**
 * Specifies the operating system settings for the Azure Bare Metal instance.
 */
export interface OSProfileResponse {
    /**
     * Specifies the host OS name of the Azure Bare Metal instance.
     */
    computerName?: string;
    /**
     * This property allows you to specify the type of the OS.
     */
    osType?: string;
    /**
     * Specifies the SSH public key used to access the operating system.
     */
    sshPublicKey?: string;
    /**
     * Specifies version of operating system.
     */
    version?: string;
}

/**
 * Describes the billing related details of the AzureBareMetalStorageInstance.
 */
export interface StorageBillingPropertiesResponse {
    /**
     * the SKU type that is provisioned
     */
    azureBareMetalStorageInstanceSize?: string;
    /**
     * the billing mode for the storage instance
     */
    billingMode?: string;
}

/**
 * Specifies the storage settings for the Azure Bare Metal instance disks.
 */
export interface StorageProfileResponse {
    /**
     * IP Address to connect to storage.
     */
    nfsIpAddress?: string;
    /**
     * Specifies information about the operating system disk used by bare metal instance.
     */
    osDisks?: DiskResponse[];
}

/**
 * described the storage properties of the azure baremetalstorage instance
 */
export interface StoragePropertiesResponse {
    /**
     * the kind of storage instance
     */
    generation?: string;
    /**
     * the hardware type of the storage instance
     */
    hardwareType?: string;
    /**
     * the offering type for which the resource is getting provisioned
     */
    offeringType?: string;
    /**
     * State of provisioning of the AzureBareMetalStorageInstance
     */
    provisioningState?: string;
    /**
     * the billing related information for the resource
     */
    storageBillingProperties?: StorageBillingPropertiesResponse;
    /**
     * the storage protocol for which the resource is getting provisioned
     */
    storageType?: string;
    /**
     * the workload for which the resource is getting provisioned
     */
    workloadType?: string;
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



