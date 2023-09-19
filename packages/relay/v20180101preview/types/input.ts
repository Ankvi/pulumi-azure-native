import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Private endpoint object properties.
     */
    export interface PrivateEndpointArgs {
        /**
         * Full identifier of the private endpoint resource.
         */
        id?: pulumi.Input<string>;
    }

    /**
     * An object that represents the approval state of the private link connection.
     */
    export interface PrivateLinkServiceConnectionStateArgs {
        /**
         * A message indicating if changes on the service provider require any updates on the consumer.
         */
        actionRequired?: pulumi.Input<string>;
        /**
         * The reason for approval or rejection.
         */
        description?: pulumi.Input<string>;
        /**
         * Indicates whether the connection has been approved, rejected or removed by the Relay Namespace owner.
         */
        status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus>;
    }
