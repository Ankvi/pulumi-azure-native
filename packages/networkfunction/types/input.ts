import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Emission policy properties.
 */
export interface EmissionPoliciesPropertiesFormatArgs {
    /**
     * Emission policy destinations.
     */
    emissionDestinations?: pulumi.Input<pulumi.Input<EmissionPolicyDestinationArgs>[] | undefined>;
    /**
     * Emission format type.
     */
    emissionType?: pulumi.Input<string | enums.EmissionType | undefined>;
}

/**
 * Emission policy destination properties.
 */
export interface EmissionPolicyDestinationArgs {
    /**
     * Emission destination type.
     */
    destinationType?: pulumi.Input<string | enums.DestinationType | undefined>;
}

/**
 * Ingestion Policy properties.
 */
export interface IngestionPolicyPropertiesFormatArgs {
    /**
     * Ingestion Sources.
     */
    ingestionSources?: pulumi.Input<pulumi.Input<IngestionSourcesPropertiesFormatArgs>[] | undefined>;
    /**
     * The ingestion type.
     */
    ingestionType?: pulumi.Input<string | enums.IngestionType | undefined>;
}

/**
 * Ingestion policy properties.
 */
export interface IngestionSourcesPropertiesFormatArgs {
    /**
     * Resource ID.
     */
    resourceId?: pulumi.Input<string | undefined>;
    /**
     * Ingestion source type.
     */
    sourceType?: pulumi.Input<string | enums.SourceType | undefined>;
}
