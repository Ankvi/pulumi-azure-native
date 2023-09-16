import * as pulumi from "@pulumi/pulumi";
export namespace azuredata {
    /**
     * Read only system data
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

    export namespace v20190724preview {
        /**
         * Read only system data
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
