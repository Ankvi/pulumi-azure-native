import * as pulumi from "@pulumi/pulumi";
    /**
     * Private endpoint which the connection belongs to.
     */
    export interface PrivateEndpointPropertyArgs {
        /**
         * Resource id of the private endpoint.
         */
        id?: pulumi.Input<string>;
    }

    /**
     * State of the private endpoint connection.
     */
    export interface PrivateLinkServiceConnectionStatePropertyArgs {
        /**
         * The private link service connection description.
         */
        description: pulumi.Input<string>;
        /**
         * The private link service connection status.
         */
        status: pulumi.Input<string>;
    }
