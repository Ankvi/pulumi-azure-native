import * as pulumi from "@pulumi/pulumi";
    export interface PrivateEndpointPropertyResponse {
        /**
         * Resource id of the private endpoint.
         */
        id?: string;
    }

    export interface PrivateLinkServiceConnectionStatePropertyResponse {
        /**
         * The actions required for private link service connection.
         */
        actionsRequired: string;
        /**
         * The private link service connection description.
         */
        description: string;
        /**
         * The private link service connection status.
         */
        status: string;
    }
