import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Collector policy resource.
     */
    export interface CollectorPolicyResponse {
        /**
         * Emission policies.
         */
        emissionPolicies?: EmissionPoliciesPropertiesFormatResponse[];
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * Resource ID.
         */
        id: string;
        /**
         * Ingestion policies.
         */
        ingestionPolicy?: IngestionPolicyPropertiesFormatResponse;
        /**
         * Resource location.
         */
        location?: string;
        /**
         * Resource name.
         */
        name: string;
        /**
         * The provisioning state.
         */
        provisioningState: string;
        /**
         * Metadata pertaining to creation and last modification of the resource.
         */
        systemData: TrackedResourceResponseSystemData;
        /**
         * Resource tags.
         */
        tags?: {[key: string]: string};
        /**
         * Resource type.
         */
        type: string;
    }

    /**
     * Emission policy properties.
     */
    export interface EmissionPoliciesPropertiesFormatResponse {
        /**
         * Emission policy destinations.
         */
        emissionDestinations?: EmissionPolicyDestinationResponse[];
        /**
         * Emission format type.
         */
        emissionType?: string;
    }

    /**
     * Emission policy destination properties.
     */
    export interface EmissionPolicyDestinationResponse {
        /**
         * Emission destination type.
         */
        destinationType?: string;
    }

    /**
     * Ingestion Policy properties.
     */
    export interface IngestionPolicyPropertiesFormatResponse {
        /**
         * Ingestion Sources.
         */
        ingestionSources?: IngestionSourcesPropertiesFormatResponse[];
        /**
         * The ingestion type.
         */
        ingestionType?: string;
    }

    /**
     * Ingestion policy properties.
     */
    export interface IngestionSourcesPropertiesFormatResponse {
        /**
         * Resource ID.
         */
        resourceId?: string;
        /**
         * Ingestion source type.
         */
        sourceType?: string;
    }

    /**
     * Resource reference properties.
     */
    export interface ResourceReferenceResponse {
        /**
         * Resource ID.
         */
        id: string;
    }

    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    export interface TrackedResourceResponseSystemData {
        /**
         * The timestamp of resource creation (UTC).
         */
        createdAt?: string;
        /**
         * The identity that created the resource.
         */
        createdBy?: string;
        /**
         * The type of identity that created the resource.
         */
        createdByType?: string;
        /**
         * The identity that last modified the resource.
         */
        lastModifiedBy?: string;
        /**
         * The type of identity that last modified the resource.
         */
        lastModifiedByType?: string;
    }
