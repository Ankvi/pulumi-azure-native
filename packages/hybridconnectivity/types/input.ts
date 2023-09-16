import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace hybridconnectivity {
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

    export namespace v20230315 {
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
            type: pulumi.Input<string | enums.v20230315.Type>;
        }

    }
}
