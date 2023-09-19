import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    export interface ConnectionPropertiesResponsePrivateEndpoint {
        /**
         * The resource identifier.
         */
        id: string;
    }

    export interface ConnectionPropertiesResponsePrivateLinkServiceConnectionState {
        /**
         * Actions required for a private endpoint connection.
         */
        actionsRequired?: string;
        /**
         * The description for the current state of a private endpoint connection.
         */
        description: string;
        /**
         * The status of a private endpoint connection.
         */
        status: string;
    }

    export interface PrivateEndpointConnectionResponseProperties {
        /**
         * The list of group ids for the private endpoint connection.
         */
        groupIds?: string[];
        privateEndpoint?: ConnectionPropertiesResponsePrivateEndpoint;
        privateLinkServiceConnectionState?: ConnectionPropertiesResponsePrivateLinkServiceConnectionState;
        /**
         * The provisioning state.
         */
        provisioningState: string;
    }
