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
        actionsRequired?: pulumi.Input<string>;
        /**
         * The reason for approval or rejection.
         */
        description?: pulumi.Input<string>;
        /**
         * Indicates whether the connection has been approved, rejected or removed by the given policy owner.
         */
        status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus>;
    }

    /**
     * A container holding only the Tags for a resource, allowing the user to update the tags on a PrivateLinkConnection instance.
     */
    export interface TagsResourceArgs {
        /**
         * Resource tags
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }