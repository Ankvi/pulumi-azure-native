import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * A piece of evidence supporting the compliance state set in the attestation.
     */
    export interface AttestationEvidenceResponse {
        /**
         * The description for this piece of evidence.
         */
        description?: string;
        /**
         * The URI location of the evidence.
         */
        sourceUri?: string;
    }

    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    export interface SystemDataResponse {
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
         * The timestamp of resource last modification (UTC)
         */
        lastModifiedAt?: string;
        /**
         * The identity that last modified the resource.
         */
        lastModifiedBy?: string;
        /**
         * The type of identity that last modified the resource.
         */
        lastModifiedByType?: string;
    }
