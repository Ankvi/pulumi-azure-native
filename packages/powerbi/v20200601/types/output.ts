import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * ConnectionState information.
     */
    export interface ConnectionStateResponse {
        /**
         * Actions required (if any).
         */
        actionsRequired?: string;
        /**
         * Description of the connection state.
         */
        description?: string;
        /**
         * Status of the connection.
         */
        status?: string;
    }

    export interface PrivateEndpointConnectionResponse {
        /**
         * Specifies the id of the resource.
         */
        id: string;
        /**
         * Specifies the name of the resource.
         */
        name: string;
        /**
         * Specifies the private endpoint.
         */
        privateEndpoint?: PrivateEndpointResponse;
        /**
         * Specifies the connection state.
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
         * Specifies the type of the resource.
         */
        type: string;
    }

    export interface PrivateEndpointResponse {
        /**
         * Specifies the id of private endpoint.
         */
        id?: string;
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
