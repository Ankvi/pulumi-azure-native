import * as pulumi from "@pulumi/pulumi";
    /**
     * The related metadata items for the function.
     */
    export interface LogAnalyticsQueryPackQueryPropertiesResponseRelated {
        /**
         * The related categories for the function.
         */
        categories?: string[];
        /**
         * The related resource types for the function.
         */
        resourceTypes?: string[];
        /**
         * The related Log Analytics solutions for the function.
         */
        solutions?: string[];
    }

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
