import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace networkfunction {
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

    export namespace v20220501 {
        /**
         * Emission policy properties.
         */
        export interface EmissionPoliciesPropertiesFormatArgs {
            /**
             * Emission policy destinations.
             */
            emissionDestinations?: pulumi.Input<pulumi.Input<v20220501.EmissionPolicyDestinationArgs>[]>;
            /**
             * Emission format type.
             */
            emissionType?: pulumi.Input<string | enums.v20220501.EmissionType>;
        }

        /**
         * Emission policy destination properties.
         */
        export interface EmissionPolicyDestinationArgs {
            /**
             * Emission destination type.
             */
            destinationType?: pulumi.Input<string | enums.v20220501.DestinationType>;
        }

        /**
         * Ingestion Policy properties.
         */
        export interface IngestionPolicyPropertiesFormatArgs {
            /**
             * Ingestion Sources.
             */
            ingestionSources?: pulumi.Input<pulumi.Input<v20220501.IngestionSourcesPropertiesFormatArgs>[]>;
            /**
             * The ingestion type.
             */
            ingestionType?: pulumi.Input<string | enums.v20220501.IngestionType>;
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
            sourceType?: pulumi.Input<string | enums.v20220501.SourceType>;
        }

    }

    export namespace v20220801 {
        /**
         * Collector policy resource.
         */
        export interface CollectorPolicyArgs {
            /**
             * Emission policies.
             */
            emissionPolicies?: pulumi.Input<pulumi.Input<v20220801.EmissionPoliciesPropertiesFormatArgs>[]>;
            /**
             * Ingestion policies.
             */
            ingestionPolicy?: pulumi.Input<v20220801.IngestionPolicyPropertiesFormatArgs>;
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
            emissionDestinations?: pulumi.Input<pulumi.Input<v20220801.EmissionPolicyDestinationArgs>[]>;
            /**
             * Emission format type.
             */
            emissionType?: pulumi.Input<string | enums.v20220801.EmissionType>;
        }

        /**
         * Emission policy destination properties.
         */
        export interface EmissionPolicyDestinationArgs {
            /**
             * Emission destination type.
             */
            destinationType?: pulumi.Input<string | enums.v20220801.DestinationType>;
        }

        /**
         * Ingestion Policy properties.
         */
        export interface IngestionPolicyPropertiesFormatArgs {
            /**
             * Ingestion Sources.
             */
            ingestionSources?: pulumi.Input<pulumi.Input<v20220801.IngestionSourcesPropertiesFormatArgs>[]>;
            /**
             * The ingestion type.
             */
            ingestionType?: pulumi.Input<string | enums.v20220801.IngestionType>;
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
            sourceType?: pulumi.Input<string | enums.v20220801.SourceType>;
        }

    }

    export namespace v20221101 {
        /**
         * Emission policy properties.
         */
        export interface EmissionPoliciesPropertiesFormatArgs {
            /**
             * Emission policy destinations.
             */
            emissionDestinations?: pulumi.Input<pulumi.Input<v20221101.EmissionPolicyDestinationArgs>[]>;
            /**
             * Emission format type.
             */
            emissionType?: pulumi.Input<string | enums.v20221101.EmissionType>;
        }

        /**
         * Emission policy destination properties.
         */
        export interface EmissionPolicyDestinationArgs {
            /**
             * Emission destination type.
             */
            destinationType?: pulumi.Input<string | enums.v20221101.DestinationType>;
        }

        /**
         * Ingestion Policy properties.
         */
        export interface IngestionPolicyPropertiesFormatArgs {
            /**
             * Ingestion Sources.
             */
            ingestionSources?: pulumi.Input<pulumi.Input<v20221101.IngestionSourcesPropertiesFormatArgs>[]>;
            /**
             * The ingestion type.
             */
            ingestionType?: pulumi.Input<string | enums.v20221101.IngestionType>;
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
            sourceType?: pulumi.Input<string | enums.v20221101.SourceType>;
        }

    }
}
