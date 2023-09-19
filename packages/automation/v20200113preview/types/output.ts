import * as pulumi from "@pulumi/pulumi";
    /**
     * Private endpoint which the connection belongs to.
     */
    export interface PrivateEndpointPropertyResponse {
        /**
         * Resource id of the private endpoint.
         */
        id?: string;
    }

    /**
     * Connection State of the Private Endpoint Connection.
     */
    export interface PrivateLinkServiceConnectionStatePropertyResponse {
        /**
         * Any action that is required beyond basic workflow (approve/ reject/ disconnect)
         */
        actionsRequired: string;
        /**
         * The private link service connection description.
         */
        description?: string;
        /**
         * The private link service connection status.
         */
        status?: string;
    }
