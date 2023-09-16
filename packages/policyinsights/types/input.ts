import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace policyinsights {
    /**
     * A piece of evidence supporting the compliance state set in the attestation.
     */
    export interface AttestationEvidenceArgs {
        /**
         * The description for this piece of evidence.
         */
        description?: pulumi.Input<string>;
        /**
         * The URI location of the evidence.
         */
        sourceUri?: pulumi.Input<string>;
    }

    /**
     * The filters that will be applied to determine which resources to remediate.
     */
    export interface RemediationFiltersArgs {
        /**
         * The resource locations that will be remediated.
         */
        locations?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The remediation failure threshold settings
     */
    export interface RemediationPropertiesFailureThresholdArgs {
        /**
         * A number between 0.0 to 1.0 representing the percentage failure threshold. The remediation will fail if the percentage of failed remediation operations (i.e. failed deployments) exceeds this threshold.
         */
        percentage?: pulumi.Input<number>;
    }

    export namespace v20211001 {
        /**
         * The filters that will be applied to determine which resources to remediate.
         */
        export interface RemediationFiltersArgs {
            /**
             * The resource locations that will be remediated.
             */
            locations?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * The remediation failure threshold settings
         */
        export interface RemediationPropertiesFailureThresholdArgs {
            /**
             * A number between 0.0 to 1.0 representing the percentage failure threshold. The remediation will fail if the percentage of failed remediation operations (i.e. failed deployments) exceeds this threshold.
             */
            percentage?: pulumi.Input<number>;
        }

    }

    export namespace v20220901 {
        /**
         * A piece of evidence supporting the compliance state set in the attestation.
         */
        export interface AttestationEvidenceArgs {
            /**
             * The description for this piece of evidence.
             */
            description?: pulumi.Input<string>;
            /**
             * The URI location of the evidence.
             */
            sourceUri?: pulumi.Input<string>;
        }

    }
}
