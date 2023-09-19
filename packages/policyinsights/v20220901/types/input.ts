import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
