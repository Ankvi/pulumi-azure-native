import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * describe the properties of a security assessment object reference (by key)
     */
    export interface AssignedComponentItemResponse {
        /**
         * unique key to a security assessment object
         */
        key?: string;
    }

    /**
     * describe the properties of a of a security standard object reference
     */
    export interface AssignedStandardItemResponse {
        /**
         * full resourceId of the Microsoft.Security/standard object
         */
        id?: string;
    }

    /**
     * Additional data about the assignment
     */
    export interface AssignmentPropertiesResponseAdditionalData {
        /**
         * Exemption category of this assignment
         */
        exemptionCategory?: string;
    }

    /**
     * Describes properties of an component as related to the standard
     */
    export interface StandardComponentPropertiesResponse {
        /**
         * Component Key matching componentMetadata
         */
        key?: string;
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
