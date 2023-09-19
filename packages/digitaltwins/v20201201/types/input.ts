import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    export interface ConnectionPropertiesPrivateLinkServiceConnectionStateArgs {
        /**
         * Actions required for a private endpoint connection.
         */
        actionsRequired?: pulumi.Input<string>;
        /**
         * The description for the current state of a private endpoint connection.
         */
        description: pulumi.Input<string>;
        /**
         * The status of a private endpoint connection.
         */
        status: pulumi.Input<string | enums.PrivateLinkServiceConnectionStatus>;
    }

    export interface PrivateEndpointConnectionPropertiesArgs {
        /**
         * The list of group ids for the private endpoint connection.
         */
        groupIds?: pulumi.Input<pulumi.Input<string>[]>;
        privateLinkServiceConnectionState?: pulumi.Input<ConnectionPropertiesPrivateLinkServiceConnectionStateArgs>;
    }
