import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * settings for compression.
     */
    export interface CompressionSettingsArgs {
        /**
         * List of content types on which compression applies. The value should be a valid MIME type.
         */
        contentTypesToCompress?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Indicates whether content compression is enabled on AzureFrontDoor. Default value is false. If compression is enabled, content will be served as compressed if user requests for a compressed version. Content won't be compressed on AzureFrontDoor when requested content is smaller than 1 byte or larger than 1 MB.
         */
        isCompressionEnabled?: pulumi.Input<boolean>;
    }

    /**
     * The JSON object that contains the properties to send health probes to origin.
     */
    export interface HealthProbeParametersArgs {
        /**
         * The number of seconds between health probes.Default is 240sec.
         */
        probeIntervalInSeconds?: pulumi.Input<number>;
        /**
         * The path relative to the origin that is used to determine the health of the origin.
         */
        probePath?: pulumi.Input<string>;
        /**
         * Protocol to use for health probe.
         */
        probeProtocol?: pulumi.Input<enums.ProbeProtocol>;
        /**
         * The type of health probe request that is made.
         */
        probeRequestType?: pulumi.Input<enums.HealthProbeRequestType>;
    }

    /**
     * The JSON object that represents the range for http status codes
     */
    export interface HttpErrorRangeParametersArgs {
        /**
         * The inclusive start of the http status code range.
         */
        begin?: pulumi.Input<number>;
        /**
         * The inclusive end of the http status code range.
         */
        end?: pulumi.Input<number>;
    }

    /**
     * Round-Robin load balancing settings for a backend pool
     */
    export interface LoadBalancingSettingsParametersArgs {
        /**
         * The additional latency in milliseconds for probes to fall into the lowest latency bucket
         */
        additionalLatencyInMilliseconds?: pulumi.Input<number>;
        /**
         * The number of samples to consider for load balancing decisions
         */
        sampleSize?: pulumi.Input<number>;
        /**
         * The number of samples within the sample period that must succeed
         */
        successfulSamplesRequired?: pulumi.Input<number>;
    }

    /**
     * Reference to another resource.
     */
    export interface ResourceReferenceArgs {
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
    }

    /**
     * The JSON object that contains the properties to determine origin health using real requests/responses.
     */
    export interface ResponseBasedOriginErrorDetectionParametersArgs {
        /**
         * The list of Http status code ranges that are considered as server errors for origin and it is marked as unhealthy.
         */
        httpErrorRanges?: pulumi.Input<pulumi.Input<HttpErrorRangeParametersArgs>[]>;
        /**
         * Type of response errors for real user requests for which origin will be deemed unhealthy
         */
        responseBasedDetectedErrorTypes?: pulumi.Input<enums.ResponseBasedDetectedErrorTypes>;
        /**
         * The percentage of failed requests in the sample where failover should trigger.
         */
        responseBasedFailoverThresholdPercentage?: pulumi.Input<number>;
    }

    /**
     * The pricing tier (defines a CDN provider, feature list and rate) of the CDN profile.
     */
    export interface SkuArgs {
        /**
         * Name of the pricing tier.
         */
        name?: pulumi.Input<string | enums.SkuName>;
    }
