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

    export interface ConnectivityGroupItemArgs {
        /**
         * Group connectivity type.
         */
        groupConnectivity?: pulumi.Input<string | enums.GroupConnectivity>;
        /**
         * Flag if global is supported.
         */
        isGlobal?: pulumi.Input<string | enums.IsGlobal>;
        /**
         * Network group Id.
         */
        networkGroupId?: pulumi.Input<string>;
        /**
         * Flag if need to use hub gateway.
         */
        useHubGateway?: pulumi.Input<string | enums.UseHubGateway>;
    }

    /**
     * GroupMembers Item.
     */
    export interface GroupMembersItemArgs {
        /**
         * Resource Id.
         */
        resourceId?: pulumi.Input<string>;
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
        networkGroupId?: pulumi.Input<string>;
    }

    /**
     * Reference to another subresource.
     */
    export interface SubResourceArgs {
        /**
         * Sub-resource ID. Both absolute resource ID and a relative resource ID are accepted.
         * An absolute ID starts with /subscriptions/ and contains the entire ID of the parent resource and the ID of the sub-resource in the end.
         * A relative ID replaces the ID of the parent resource with a token '$self', followed by the sub-resource ID itself.
         * Example of a relative ID: $self/frontEndConfigurations/my-frontend.
         */
        id?: pulumi.Input<string>;
    }

    export interface SubscriptionIdArgs {
        /**
         * Subscription id in the ARM id format.
         */
        id?: pulumi.Input<string>;
    }
