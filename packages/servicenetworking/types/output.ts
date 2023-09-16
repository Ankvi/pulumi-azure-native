import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace servicenetworking {
    /**
     * Association Subnet.
     */
    export interface AssociationSubnetResponse {
        /**
         * Association ID.
         */
        id: string;
    }

    /**
     * Resource ID definition used by parent to reference child resources.
     */
    export interface ResourceIdResponse {
        /**
         * Resource ID of child resource.
         */
        id: string;
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

    export namespace v20221001preview {
        /**
         * Association Subnet.
         */
        export interface AssociationSubnetResponse {
            /**
             * Association ID.
             */
            id: string;
        }

        /**
         * Frontend IP Address.
         */
        export interface FrontendPropertiesIPAddressResponse {
            /**
             * IP Address.
             */
            id: string;
        }

        /**
         * Resource ID definition used by parent to reference child resources.
         */
        export interface ResourceIDResponse {
            /**
             * Resource ID of child resource.
             */
            id: string;
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

    }

    export namespace v20230501preview {
        /**
         * Association Subnet.
         */
        export interface AssociationSubnetResponse {
            /**
             * Association ID.
             */
            id: string;
        }

        /**
         * Resource ID definition used by parent to reference child resources.
         */
        export interface ResourceIdResponse {
            /**
             * Resource ID of child resource.
             */
            id: string;
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

    }
}
