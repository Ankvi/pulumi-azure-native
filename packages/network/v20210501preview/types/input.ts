import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Address prefix item.
     */
    export interface AddressPrefixItemArgs {
        /**
         * Address prefix.
         */
        addressPrefix?: pulumi.Input<string>;
        /**
         * Address prefix type.
         */
        addressPrefixType?: pulumi.Input<string | enums.AddressPrefixType>;
    }

    /**
     * Connectivity group item.
     */
    export interface ConnectivityGroupItemArgs {
        /**
         * Group connectivity type.
         */
        groupConnectivity: pulumi.Input<string | enums.GroupConnectivity>;
        /**
         * Flag if global is supported.
         */
        isGlobal?: pulumi.Input<string | enums.IsGlobal>;
        /**
         * Network group Id.
         */
        networkGroupId: pulumi.Input<string>;
        /**
         * Flag if need to use hub gateway.
         */
        useHubGateway?: pulumi.Input<string | enums.UseHubGateway>;
    }

    /**
     * Hub Item.
     */
    export interface HubArgs {
        /**
         * Resource Id.
         */
        resourceId?: pulumi.Input<string>;
        /**
         * Resource Type.
         */
        resourceType?: pulumi.Input<string>;
    }

    /**
     * Scope of Network Manager.
     */
    export interface NetworkManagerPropertiesNetworkManagerScopesArgs {
        /**
         * List of management groups.
         */
        managementGroups?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * List of subscriptions.
         */
        subscriptions?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Network manager security group item.
     */
    export interface NetworkManagerSecurityGroupItemArgs {
        /**
         * Network manager group Id.
         */
        networkGroupId: pulumi.Input<string>;
    }
