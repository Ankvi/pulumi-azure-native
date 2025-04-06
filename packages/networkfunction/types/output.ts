import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
