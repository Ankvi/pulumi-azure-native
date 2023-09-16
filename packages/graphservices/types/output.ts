import * as pulumi from "@pulumi/pulumi";
export namespace graphservices {
    /**
     * Property bag from billing account
     */
    export interface AccountResourceResponseProperties {
        /**
         * Customer owned application ID
         */
        appId: string;
        /**
         * Billing Plan Id
         */
        billingPlanId: string;
        /**
         * Provisioning state.
         */
        provisioningState: string;
    }

    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    export interface AccountResourceResponseSystemData {
        /**
         * The timestamp of resource creation (UTC).
         */
        createdAt?: string;
        /**
         * The type of identity that created the resource.
         */
        createdByType?: string;
        /**
         * The timestamp of resource last modification (UTC)
         */
        lastModifiedAt?: string;
        /**
         * The type of identity that last modified the resource.
         */
        lastModifiedByType?: string;
    }

    export namespace v20230413 {
        /**
         * Property bag from billing account
         */
        export interface AccountResourceResponseProperties {
            /**
             * Customer owned application ID
             */
            appId: string;
            /**
             * Billing Plan Id
             */
            billingPlanId: string;
            /**
             * Provisioning state.
             */
            provisioningState: string;
        }

        /**
         * Metadata pertaining to creation and last modification of the resource.
         */
        export interface AccountResourceResponseSystemData {
            /**
             * The timestamp of resource creation (UTC).
             */
            createdAt?: string;
            /**
             * The type of identity that created the resource.
             */
            createdByType?: string;
            /**
             * The timestamp of resource last modification (UTC)
             */
            lastModifiedAt?: string;
            /**
             * The type of identity that last modified the resource.
             */
            lastModifiedByType?: string;
        }

    }
}
