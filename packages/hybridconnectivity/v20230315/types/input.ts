import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Endpoint details
     */
    export interface EndpointPropertiesArgs {
        /**
         * The resource Id of the connectivity endpoint (optional).
         */
        resourceId?: pulumi.Input<string>;
        /**
         * The type of endpoint.
         */
        type: pulumi.Input<string | enums.Type>;
    }
