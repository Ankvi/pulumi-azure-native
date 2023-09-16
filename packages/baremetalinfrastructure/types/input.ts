import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace baremetalinfrastructure {
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
     * described the storage properties of the azure baremetalstorage instance
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

    export namespace v20230406 {
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
         * described the storage properties of the azure baremetalstorage instance
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
            provisioningState?: pulumi.Input<string | enums.v20230406.ProvisioningState>;
            /**
             * the billing related information for the resource
             */
            storageBillingProperties?: pulumi.Input<v20230406.StorageBillingPropertiesArgs>;
            /**
             * the storage protocol for which the resource is getting provisioned
             */
            storageType?: pulumi.Input<string>;
            /**
             * the workload for which the resource is getting provisioned
             */
            workloadType?: pulumi.Input<string>;
        }

    }
}
