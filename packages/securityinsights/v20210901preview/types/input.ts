import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Describes external reference
     */
    export interface ThreatIntelligenceExternalReferenceArgs {
        /**
         * External reference description
         */
        description?: pulumi.Input<string>;
        /**
         * External reference ID
         */
        externalId?: pulumi.Input<string>;
        /**
         * External reference hashes
         */
        hashes?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * External reference source name
         */
        sourceName?: pulumi.Input<string>;
        /**
         * External reference URL
         */
        url?: pulumi.Input<string>;
    }

    /**
     * Describes threat granular marking model entity
     */
    export interface ThreatIntelligenceGranularMarkingModelArgs {
        /**
         * Language granular marking model
         */
        language?: pulumi.Input<string>;
        /**
         * marking reference granular marking model
         */
        markingRef?: pulumi.Input<number>;
        /**
         * granular marking model selectors
         */
        selectors?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Describes threat kill chain phase entity
     */
    export interface ThreatIntelligenceKillChainPhaseArgs {
        /**
         * Kill chainName name
         */
        killChainName?: pulumi.Input<string>;
        /**
         * Phase name
         */
        phaseName?: pulumi.Input<string>;
    }

    /**
     * Describes parsed pattern entity
     */
    export interface ThreatIntelligenceParsedPatternArgs {
        /**
         * Pattern type key
         */
        patternTypeKey?: pulumi.Input<string>;
        /**
         * Pattern type keys
         */
        patternTypeValues?: pulumi.Input<pulumi.Input<ThreatIntelligenceParsedPatternTypeValueArgs>[]>;
    }

    /**
     * Describes threat kill chain phase entity
     */
    export interface ThreatIntelligenceParsedPatternTypeValueArgs {
        /**
         * Value of parsed pattern
         */
        value?: pulumi.Input<string>;
        /**
         * Type of the value
         */
        valueType?: pulumi.Input<string>;
    }
