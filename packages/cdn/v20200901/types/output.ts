import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * settings for compression.
     */
    export interface CompressionSettingsResponse {
        /**
         * List of content types on which compression applies. The value should be a valid MIME type.
         */
        contentTypesToCompress?: string[];
        /**
         * Indicates whether content compression is enabled on AzureFrontDoor. Default value is false. If compression is enabled, content will be served as compressed if user requests for a compressed version. Content won't be compressed on AzureFrontDoor when requested content is smaller than 1 byte or larger than 1 MB.
         */
        isCompressionEnabled?: boolean;
    }

    /**
     * The JSON object that contains the properties to send health probes to origin.
     */
    export interface HealthProbeParametersResponse {
        /**
         * The number of seconds between health probes.Default is 240sec.
         */
        probeIntervalInSeconds?: number;
        /**
         * The path relative to the origin that is used to determine the health of the origin.
         */
        probePath?: string;
        /**
         * Protocol to use for health probe.
         */
        probeProtocol?: string;
        /**
         * The type of health probe request that is made.
         */
        probeRequestType?: string;
    }

    /**
     * The JSON object that represents the range for http status codes
     */
    export interface HttpErrorRangeParametersResponse {
        /**
         * The inclusive start of the http status code range.
         */
        begin?: number;
        /**
         * The inclusive end of the http status code range.
         */
        end?: number;
    }

    /**
     * Round-Robin load balancing settings for a backend pool
     */
    export interface LoadBalancingSettingsParametersResponse {
        /**
         * The additional latency in milliseconds for probes to fall into the lowest latency bucket
         */
        additionalLatencyInMilliseconds?: number;
        /**
         * The number of samples to consider for load balancing decisions
         */
        sampleSize?: number;
        /**
         * The number of samples within the sample period that must succeed
         */
        successfulSamplesRequired?: number;
    }

    /**
     * Reference to another resource.
     */
    export interface ResourceReferenceResponse {
        /**
         * Resource ID.
         */
        id?: string;
    }

    /**
     * The JSON object that contains the properties to determine origin health using real requests/responses.
     */
    export interface ResponseBasedOriginErrorDetectionParametersResponse {
        /**
         * The list of Http status code ranges that are considered as server errors for origin and it is marked as unhealthy.
         */
        httpErrorRanges?: HttpErrorRangeParametersResponse[];
        /**
         * Type of response errors for real user requests for which origin will be deemed unhealthy
         */
        responseBasedDetectedErrorTypes?: string;
        /**
         * The percentage of failed requests in the sample where failover should trigger.
         */
        responseBasedFailoverThresholdPercentage?: number;
    }

    /**
     * The pricing tier (defines a CDN provider, feature list and rate) of the CDN profile.
     */
    export interface SkuResponse {
        /**
         * Name of the pricing tier.
         */
        name?: string;
    }

    /**
     * Read only system data
     */
    export interface SystemDataResponse {
        /**
         * The timestamp of resource creation (UTC)
         */
        createdAt?: string;
        /**
         * An identifier for the identity that created the resource
         */
        createdBy?: string;
        /**
         * The type of identity that created the resource
         */
        createdByType?: string;
        /**
         * The timestamp of resource last modification (UTC)
         */
        lastModifiedAt?: string;
        /**
         * An identifier for the identity that last modified the resource
         */
        lastModifiedBy?: string;
        /**
         * The type of identity that last modified the resource
         */
        lastModifiedByType?: string;
    }
