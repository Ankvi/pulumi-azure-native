import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Association Subnet.
     */
    export interface AssociationSubnetArgs {
        /**
         * Association ID.
         */
        id: pulumi.Input<string>;
    }

    /**
     * Frontend IP Address.
     */
    export interface FrontendPropertiesIPAddressArgs {
        /**
         * IP Address.
         */
        id: pulumi.Input<string>;
    }
