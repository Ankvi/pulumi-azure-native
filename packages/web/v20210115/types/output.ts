import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * A domain specific resource identifier.
     */
    export interface IdentifierResponse {
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Kind of resource.
         */
        kind?: string;
        /**
         * Resource Name.
         */
        name: string;
        /**
         * Resource type.
         */
        type: string;
        /**
         * String representation of the identity.
         */
        value?: string;
    }

    /**
     * Name value pair.
     */
    export interface NameValuePairResponse {
        /**
         * Pair name.
         */
        name?: string;
        /**
         * Pair value.
         */
        value?: string;
    }

    /**
     * Specification for using a Virtual Network.
     */
    export interface VirtualNetworkProfileResponse {
        /**
         * Resource id of the Virtual Network.
         */
        id: string;
        /**
         * Name of the Virtual Network (read-only).
         */
        name: string;
        /**
         * Subnet within the Virtual Network.
         */
        subnet?: string;
        /**
         * Resource type of the Virtual Network (read-only).
         */
        type: string;
    }
