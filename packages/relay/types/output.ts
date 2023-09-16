import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace relay {
    /**
     * ConnectionState information.
     */
    export interface ConnectionStateResponse {
        /**
         * Description of the connection state.
         */
        description?: string;
        /**
         * Status of the connection.
         */
        status?: string;
    }

    /**
     * Properties of the PrivateEndpointConnection.
     */
    export interface PrivateEndpointConnectionResponse {
        /**
         * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
         */
        id: string;
        /**
         * The geo-location where the resource lives
         */
        location: string;
        /**
         * The name of the resource
         */
        name: string;
        /**
         * The Private Endpoint resource for this Connection.
         */
        privateEndpoint?: PrivateEndpointResponse;
        /**
         * Details about the state of the connection.
         */
        privateLinkServiceConnectionState?: ConnectionStateResponse;
        /**
         * Provisioning state of the Private Endpoint Connection.
         */
        provisioningState?: string;
        /**
         * The system meta data relating to this resource.
         */
        systemData: SystemDataResponse;
        /**
         * The type of the resource. E.g. "Microsoft.EventHub/Namespaces" or "Microsoft.EventHub/Namespaces/EventHubs"
         */
        type: string;
    }

    /**
     * PrivateEndpoint information.
     */
    export interface PrivateEndpointResponse {
        /**
         * The ARM identifier for Private Endpoint.
         */
        id?: string;
    }

    /**
     * SKU of the namespace.
     */
    export interface SkuResponse {
        /**
         * Name of this SKU.
         */
        name: string;
        /**
         * The tier of this SKU.
         */
        tier?: string;
    }

    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    export interface SystemDataResponse {
        /**
         * The timestamp of resource creation (UTC).
         */
        createdAt?: string;
        /**
         * The identity that created the resource.
         */
        createdBy?: string;
        /**
         * The type of identity that created the resource.
         */
        createdByType?: string;
        /**
         * The timestamp of resource last modification (UTC)
         */
        lastModifiedAt?: string;
        /**
         * The identity that last modified the resource.
         */
        lastModifiedBy?: string;
        /**
         * The type of identity that last modified the resource.
         */
        lastModifiedByType?: string;
    }

    export namespace v20180101preview {
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

    }

    export namespace v20211101 {
        /**
         * ConnectionState information.
         */
        export interface ConnectionStateResponse {
            /**
             * Description of the connection state.
             */
            description?: string;
            /**
             * Status of the connection.
             */
            status?: string;
        }

        /**
         * Properties of the PrivateEndpointConnection.
         */
        export interface PrivateEndpointConnectionResponse {
            /**
             * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
             */
            id: string;
            /**
             * The geo-location where the resource lives
             */
            location: string;
            /**
             * The name of the resource
             */
            name: string;
            /**
             * The Private Endpoint resource for this Connection.
             */
            privateEndpoint?: v20211101.PrivateEndpointResponse;
            /**
             * Details about the state of the connection.
             */
            privateLinkServiceConnectionState?: v20211101.ConnectionStateResponse;
            /**
             * Provisioning state of the Private Endpoint Connection.
             */
            provisioningState?: string;
            /**
             * The system meta data relating to this resource.
             */
            systemData: v20211101.SystemDataResponse;
            /**
             * The type of the resource. E.g. "Microsoft.EventHub/Namespaces" or "Microsoft.EventHub/Namespaces/EventHubs"
             */
            type: string;
        }

        /**
         * PrivateEndpoint information.
         */
        export interface PrivateEndpointResponse {
            /**
             * The ARM identifier for Private Endpoint.
             */
            id?: string;
        }

        /**
         * SKU of the namespace.
         */
        export interface SkuResponse {
            /**
             * Name of this SKU.
             */
            name: string;
            /**
             * The tier of this SKU.
             */
            tier?: string;
        }

        /**
         * Metadata pertaining to creation and last modification of the resource.
         */
        export interface SystemDataResponse {
            /**
             * The timestamp of resource creation (UTC).
             */
            createdAt?: string;
            /**
             * The identity that created the resource.
             */
            createdBy?: string;
            /**
             * The type of identity that created the resource.
             */
            createdByType?: string;
            /**
             * The timestamp of resource last modification (UTC)
             */
            lastModifiedAt?: string;
            /**
             * The identity that last modified the resource.
             */
            lastModifiedBy?: string;
            /**
             * The type of identity that last modified the resource.
             */
            lastModifiedByType?: string;
        }

    }
}
