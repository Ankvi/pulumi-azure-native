import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The resource selector to filter policies by resource properties.
     */
    export interface ResourceSelectorResponse {
        /**
         * The name of the resource selector.
         */
        name?: string;
        /**
         * The list of the selector expressions.
         */
        selectors?: SelectorResponse[];
    }

    /**
     * The selector expression.
     */
    export interface SelectorResponse {
        /**
         * The list of values to filter in.
         */
        in?: string[];
        /**
         * The selector kind.
         */
        kind?: string;
        /**
         * The list of values to filter out.
         */
        notIn?: string[];
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
