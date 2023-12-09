import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Identity for Azure Bare Metal Storage Instance.
     */
    export interface AzureBareMetalStorageInstanceIdentityResponse {
        /**
         * The principal ID of Azure Bare Metal Storage Instance identity. This property will only be provided for a system assigned identity.
         */
        principalId: string;
        /**
         * The tenant ID associated with the Azure Bare Metal Storage Instance. This property will only be provided for a system assigned identity.
         */
        tenantId: string;
        /**
         * The type of identity used for the Azure Bare Metal Storage Instance. The type 'SystemAssigned' refers to an implicitly created identity. The type 'None' will remove any identities from the Azure Bare Metal Storage Instance.
         */
        type?: string;
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
     * described the storage properties of the azure bare metal storage instance
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
