import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace relay {
    /**
     * ConnectionState information.
     */
    export interface ConnectionStateArgs {
        /**
         * Description of the connection state.
         */
        description?: pulumi.Input<string>;
        /**
         * Status of the connection.
         */
        status?: pulumi.Input<string | enums.PrivateLinkConnectionStatus>;
    }

    /**
     * PrivateEndpoint information.
     */
    export interface PrivateEndpointArgs {
        /**
         * The ARM identifier for Private Endpoint.
         */
        id?: pulumi.Input<string>;
    }

    /**
     * Properties of the PrivateEndpointConnection.
     */
    export interface PrivateEndpointConnectionArgs {
        /**
         * The Private Endpoint resource for this Connection.
         */
        privateEndpoint?: pulumi.Input<PrivateEndpointArgs>;
        /**
         * Details about the state of the connection.
         */
        privateLinkServiceConnectionState?: pulumi.Input<ConnectionStateArgs>;
        /**
         * Provisioning state of the Private Endpoint Connection.
         */
        provisioningState?: pulumi.Input<string | enums.EndPointProvisioningState>;
    }

    /**
     * SKU of the namespace.
     */
    export interface SkuArgs {
        /**
         * Name of this SKU.
         */
        name: pulumi.Input<string | enums.SkuName>;
        /**
         * The tier of this SKU.
         */
        tier?: pulumi.Input<string | enums.SkuTier>;
    }

    export namespace v20180101preview {
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
            status?: pulumi.Input<string | enums.v20180101preview.PrivateEndpointServiceConnectionStatus>;
        }

    }

    export namespace v20211101 {
        /**
         * ConnectionState information.
         */
        export interface ConnectionStateArgs {
            /**
             * Description of the connection state.
             */
            description?: pulumi.Input<string>;
            /**
             * Status of the connection.
             */
            status?: pulumi.Input<string | enums.v20211101.PrivateLinkConnectionStatus>;
        }

        /**
         * PrivateEndpoint information.
         */
        export interface PrivateEndpointArgs {
            /**
             * The ARM identifier for Private Endpoint.
             */
            id?: pulumi.Input<string>;
        }

        /**
         * Properties of the PrivateEndpointConnection.
         */
        export interface PrivateEndpointConnectionArgs {
            /**
             * The Private Endpoint resource for this Connection.
             */
            privateEndpoint?: pulumi.Input<v20211101.PrivateEndpointArgs>;
            /**
             * Details about the state of the connection.
             */
            privateLinkServiceConnectionState?: pulumi.Input<v20211101.ConnectionStateArgs>;
            /**
             * Provisioning state of the Private Endpoint Connection.
             */
            provisioningState?: pulumi.Input<string | enums.v20211101.EndPointProvisioningState>;
        }

        /**
         * SKU of the namespace.
         */
        export interface SkuArgs {
            /**
             * Name of this SKU.
             */
            name: pulumi.Input<string | enums.v20211101.SkuName>;
            /**
             * The tier of this SKU.
             */
            tier?: pulumi.Input<string | enums.v20211101.SkuTier>;
        }

    }
}
