import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Body logging settings.
     */
    export interface BodyDiagnosticSettingsArgs {
        /**
         * Number of request body bytes to log.
         */
        bytes?: pulumi.Input<number>;
    }

    /**
     * Http message diagnostic settings.
     */
    export interface HttpMessageDiagnosticArgs {
        /**
         * Body logging settings.
         */
        body?: pulumi.Input<BodyDiagnosticSettingsArgs>;
        /**
         * Array of HTTP Headers to log.
         */
        headers?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
     */
    export interface PipelineDiagnosticSettingsArgs {
        /**
         * Diagnostic settings for request.
         */
        request?: pulumi.Input<HttpMessageDiagnosticArgs>;
        /**
         * Diagnostic settings for response.
         */
        response?: pulumi.Input<HttpMessageDiagnosticArgs>;
    }

    /**
     * Sampling settings for Diagnostic.
     */
    export interface SamplingSettingsArgs {
        /**
         * Rate of sampling for fixed-rate sampling.
         */
        percentage?: pulumi.Input<number>;
        /**
         * Sampling type.
         */
        samplingType?: pulumi.Input<string | enums.SamplingType>;
    }
