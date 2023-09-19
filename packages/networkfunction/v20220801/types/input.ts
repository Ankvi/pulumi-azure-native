import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Collector policy resource.
     */
    export interface CollectorPolicyArgs {
        /**
         * Emission policies.
         */
        emissionPolicies?: pulumi.Input<pulumi.Input<EmissionPoliciesPropertiesFormatArgs>[]>;
        /**
         * Ingestion policies.
         */
        ingestionPolicy?: pulumi.Input<IngestionPolicyPropertiesFormatArgs>;
        /**
         * Resource location.
         */
        location?: pulumi.Input<string>;
        /**
         * Resource tags.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * Emission policy properties.
     */
    export interface EmissionPoliciesPropertiesFormatArgs {
        /**
         * Emission policy destinations.
         */
        emissionDestinations?: pulumi.Input<pulumi.Input<EmissionPolicyDestinationArgs>[]>;
        /**
         * Emission format type.
         */
        emissionType?: pulumi.Input<string | enums.EmissionType>;
    }

    /**
     * Emission policy destination properties.
     */
    export interface EmissionPolicyDestinationArgs {
        /**
         * Emission destination type.
         */
        destinationType?: pulumi.Input<string | enums.DestinationType>;
    }

    /**
     * Ingestion Policy properties.
     */
    export interface IngestionPolicyPropertiesFormatArgs {
        /**
         * Ingestion Sources.
         */
        ingestionSources?: pulumi.Input<pulumi.Input<IngestionSourcesPropertiesFormatArgs>[]>;
        /**
         * The ingestion type.
         */
        ingestionType?: pulumi.Input<string | enums.IngestionType>;
    }

    /**
     * Ingestion policy properties.
     */
    export interface IngestionSourcesPropertiesFormatArgs {
        /**
         * Resource ID.
         */
        resourceId?: pulumi.Input<string>;
        /**
         * Ingestion source type.
         */
        sourceType?: pulumi.Input<string | enums.SourceType>;
    }
