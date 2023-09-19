import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Name value pair.
     */
    export interface NameValuePairArgs {
        /**
         * Pair name.
         */
        name?: pulumi.Input<string>;
        /**
         * Pair value.
         */
        value?: pulumi.Input<string>;
    }

    /**
     * Specification for using a Virtual Network.
     */
    export interface VirtualNetworkProfileArgs {
        /**
         * Resource id of the Virtual Network.
         */
        id: pulumi.Input<string>;
        /**
         * Subnet within the Virtual Network.
         */
        subnet?: pulumi.Input<string>;
    }
