import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Defines the endpoint properties
     */
    export interface ExperimentEndpointArgs {
        /**
         * The endpoint URL
         */
        endpoint?: pulumi.Input<string>;
        /**
         * The name of the endpoint
         */
        name?: pulumi.Input<string>;
    }
