import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Specifies the disk information fo the Azure Large Instance
 */
export interface DiskResponse {
    /**
     * Specifies the size of an empty data disk in gigabytes.
     */
    diskSizeGB?: number;
    /**
     * Specifies the logical unit number of the data disk. This value is used to
     * identify data disks within the VM and therefore must be unique for each data
     * disk attached to a VM.
     */
    lun: number;
    /**
     * The disk name.
     */
    name?: string;
}

/**
 * Specifies the hardware settings for the Azure Large Instance.
 */
export interface HardwareProfileResponse {
    /**
     * Specifies the Azure Large Instance SKU.
     */
    azureLargeInstanceSize?: string;
    /**
     * Name of the hardware type (vendor and/or their product name)
     */
    hardwareType?: string;
}

/**
 * Specifies the IP address of the network interface.
 */
export interface IpAddressResponse {
    /**
     * Specifies the IP address of the network interface.
     */
    ipAddress?: string;
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
 * Specifies the network settings for the Azure Large Instance disks.
 */
export interface NetworkProfileResponse {
    /**
     * Specifies the circuit id for connecting to express route.
     */
    circuitId?: string;
    /**
     * Specifies the network interfaces for the Azure Large Instance.
     */
    networkInterfaces?: IpAddressResponse[];
}

/**
 * Specifies the operating system settings for the Azure Large Instance.
 */
export interface OsProfileResponse {
    /**
     * Specifies the host OS name of the Azure Large Instance.
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
 * Describes the billing related details of the AzureLargeStorageInstance.
 */
export interface StorageBillingPropertiesResponse {
    /**
     * the billing mode for the storage instance
     */
    billingMode?: string;
    /**
     * the SKU type that is provisioned
     */
    sku?: string;
}

/**
 * Specifies the storage settings for the Azure Large Instance disks.
 */
export interface StorageProfileResponse {
    /**
     * IP Address to connect to storage.
     */
    nfsIpAddress?: string;
    /**
     * Specifies information about the operating system disk used by Azure Large
     * Instance.
     */
    osDisks?: DiskResponse[];
}

/**
 * described the storage properties of the azure large storage instance
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
     * State of provisioning of the AzureLargeStorageInstance
     */
    provisioningState: string;
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
