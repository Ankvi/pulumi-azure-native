import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Body logging settings.
     */
    export interface BodyDiagnosticSettingsResponse {
        /**
         * Number of request body bytes to log.
         */
        bytes?: number;
    }

    /**
     * Http message diagnostic settings.
     */
    export interface HttpMessageDiagnosticResponse {
        /**
         * Body logging settings.
         */
        body?: BodyDiagnosticSettingsResponse;
        /**
         * Array of HTTP Headers to log.
         */
        headers?: string[];
    }

    /**
     * Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
     */
    export interface PipelineDiagnosticSettingsResponse {
        /**
         * Diagnostic settings for request.
         */
        request?: HttpMessageDiagnosticResponse;
        /**
         * Diagnostic settings for response.
         */
        response?: HttpMessageDiagnosticResponse;
    }

    /**
     * Sampling settings for Diagnostic.
     */
    export interface SamplingSettingsResponse {
        /**
         * Rate of sampling for fixed-rate sampling.
         */
        percentage?: number;
        /**
         * Sampling type.
         */
        samplingType?: string;
    }
