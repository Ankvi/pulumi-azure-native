import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Defines the endpoint properties
     */
    export interface ExperimentEndpointResponse {
        /**
         * The endpoint URL
         */
        endpoint?: string;
        /**
         * The name of the endpoint
         */
        name?: string;
    }
