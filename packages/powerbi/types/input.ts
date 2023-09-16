import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace powerbi {
    export interface AzureSkuArgs {
        /**
         * SKU name
         */
        name: pulumi.Input<string | enums.AzureSkuName>;
        /**
         * SKU tier
         */
        tier: pulumi.Input<string | enums.AzureSkuTier>;
    }

    /**
     * ConnectionState information.
     */
    export interface ConnectionStateArgs {
        /**
         * Actions required (if any).
         */
        actionsRequired?: pulumi.Input<string>;
        /**
         * Description of the connection state.
         */
        description?: pulumi.Input<string>;
        /**
         * Status of the connection.
         */
        status?: pulumi.Input<string | enums.PersistedConnectionStatus>;
    }

    export interface PrivateEndpointArgs {
        /**
         * Specifies the id of private endpoint.
         */
        id?: pulumi.Input<string>;
    }

    export interface PrivateEndpointConnectionArgs {
        /**
         * Specifies the private endpoint.
         */
        privateEndpoint?: pulumi.Input<PrivateEndpointArgs>;
        /**
         * Specifies the connection state.
         */
        privateLinkServiceConnectionState?: pulumi.Input<ConnectionStateArgs>;
        /**
         * Provisioning state of the Private Endpoint Connection.
         */
        provisioningState?: pulumi.Input<string | enums.ResourceProvisioningState>;
    }

    export namespace v20160129 {
        export interface AzureSkuArgs {
            /**
             * SKU name
             */
            name: pulumi.Input<string | enums.v20160129.AzureSkuName>;
            /**
             * SKU tier
             */
            tier: pulumi.Input<string | enums.v20160129.AzureSkuTier>;
        }

    }

    export namespace v20200601 {
        /**
         * ConnectionState information.
         */
        export interface ConnectionStateArgs {
            /**
             * Actions required (if any).
             */
            actionsRequired?: pulumi.Input<string>;
            /**
             * Description of the connection state.
             */
            description?: pulumi.Input<string>;
            /**
             * Status of the connection.
             */
            status?: pulumi.Input<string | enums.v20200601.PersistedConnectionStatus>;
        }

        export interface PrivateEndpointArgs {
            /**
             * Specifies the id of private endpoint.
             */
            id?: pulumi.Input<string>;
        }

        export interface PrivateEndpointConnectionArgs {
            /**
             * Specifies the private endpoint.
             */
            privateEndpoint?: pulumi.Input<v20200601.PrivateEndpointArgs>;
            /**
             * Specifies the connection state.
             */
            privateLinkServiceConnectionState?: pulumi.Input<v20200601.ConnectionStateArgs>;
            /**
             * Provisioning state of the Private Endpoint Connection.
             */
            provisioningState?: pulumi.Input<string | enums.v20200601.ResourceProvisioningState>;
        }

    }
}
