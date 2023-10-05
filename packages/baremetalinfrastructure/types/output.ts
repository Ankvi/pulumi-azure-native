import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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

