import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace powerbidedicated {
    /**
     * Represents the SKU name and Azure pricing tier for auto scale v-core resource.
     */
    export interface AutoScaleVCoreSkuResponse {
        /**
         * The capacity of an auto scale v-core resource.
         */
        capacity?: number;
        /**
         * Name of the SKU level.
         */
        name: string;
        /**
         * The name of the Azure pricing tier to which the SKU applies.
         */
        tier?: string;
    }

    /**
     * Represents the SKU name and Azure pricing tier for PowerBI Dedicated capacity resource.
     */
    export interface CapacitySkuResponse {
        /**
         * The capacity of the SKU.
         */
        capacity?: number;
        /**
         * Name of the SKU level.
         */
        name: string;
        /**
         * The name of the Azure pricing tier to which the SKU applies.
         */
        tier?: string;
    }

    /**
     * An array of administrator user identities
     */
    export interface DedicatedCapacityAdministratorsResponse {
        /**
         * An array of administrator user identities.
         */
        members?: string[];
    }

    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    export interface SystemDataResponse {
        /**
         * The timestamp of resource creation (UTC)
         */
        createdAt?: string;
        /**
         * An identifier for the identity that created the resource
         */
        createdBy?: string;
        /**
         * The type of identity that created the resource
         */
        createdByType?: string;
        /**
         * The timestamp of resource last modification (UTC)
         */
        lastModifiedAt?: string;
        /**
         * An identifier for the identity that last modified the resource
         */
        lastModifiedBy?: string;
        /**
         * The type of identity that last modified the resource
         */
        lastModifiedByType?: string;
    }

    export namespace v20210101 {
        /**
         * Represents the SKU name and Azure pricing tier for auto scale v-core resource.
         */
        export interface AutoScaleVCoreSkuResponse {
            /**
             * The capacity of an auto scale v-core resource.
             */
            capacity?: number;
            /**
             * Name of the SKU level.
             */
            name: string;
            /**
             * The name of the Azure pricing tier to which the SKU applies.
             */
            tier?: string;
        }

        /**
         * Represents the SKU name and Azure pricing tier for PowerBI Dedicated capacity resource.
         */
        export interface CapacitySkuResponse {
            /**
             * The capacity of the SKU.
             */
            capacity?: number;
            /**
             * Name of the SKU level.
             */
            name: string;
            /**
             * The name of the Azure pricing tier to which the SKU applies.
             */
            tier?: string;
        }

        /**
         * An array of administrator user identities
         */
        export interface DedicatedCapacityAdministratorsResponse {
            /**
             * An array of administrator user identities.
             */
            members?: string[];
        }

        /**
         * Metadata pertaining to creation and last modification of the resource.
         */
        export interface SystemDataResponse {
            /**
             * The timestamp of resource creation (UTC)
             */
            createdAt?: string;
            /**
             * An identifier for the identity that created the resource
             */
            createdBy?: string;
            /**
             * The type of identity that created the resource
             */
            createdByType?: string;
            /**
             * The timestamp of resource last modification (UTC)
             */
            lastModifiedAt?: string;
            /**
             * An identifier for the identity that last modified the resource
             */
            lastModifiedBy?: string;
            /**
             * The type of identity that last modified the resource
             */
            lastModifiedByType?: string;
        }

    }
}
