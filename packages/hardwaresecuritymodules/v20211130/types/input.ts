import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The API entity reference.
     */
    export interface ApiEntityReferenceArgs {
        /**
         * The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...
         */
        id?: pulumi.Input<string>;
    }

    /**
     * The network interface definition.
     */
    export interface NetworkInterfaceArgs {
        /**
         * Private Ip address of the interface
         */
        privateIpAddress?: pulumi.Input<string>;
    }

    /**
     * The network profile definition.
     */
    export interface NetworkProfileArgs {
        /**
         * Specifies the list of resource Ids for the network interfaces associated with the dedicated HSM.
         */
        networkInterfaces?: pulumi.Input<pulumi.Input<NetworkInterfaceArgs>[]>;
        /**
         * Specifies the identifier of the subnet.
         */
        subnet?: pulumi.Input<ApiEntityReferenceArgs>;
    }

    /**
     * SKU of the dedicated HSM
     */
    export interface SkuArgs {
        /**
         * SKU of the dedicated HSM
         */
        name?: pulumi.Input<string | enums.SkuName>;
    }
