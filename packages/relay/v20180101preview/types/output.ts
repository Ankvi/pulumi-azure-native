import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Private endpoint object properties.
     */
    export interface PrivateEndpointResponse {
        /**
         * Full identifier of the private endpoint resource.
         */
        id?: string;
    }

    /**
     * An object that represents the approval state of the private link connection.
     */
    export interface PrivateLinkServiceConnectionStateResponse {
        /**
         * A message indicating if changes on the service provider require any updates on the consumer.
         */
        actionRequired?: string;
        /**
         * The reason for approval or rejection.
         */
        description?: string;
        /**
         * Indicates whether the connection has been approved, rejected or removed by the Relay Namespace owner.
         */
        status?: string;
    }
