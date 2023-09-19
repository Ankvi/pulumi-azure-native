import * as pulumi from "@pulumi/pulumi";
    /**
     * Identifies an object.
     */
    export interface NameIdentifierResponse {
        /**
         * Name of the object.
         */
        name?: string;
    }

    /**
     * Legal agreement for a top level domain.
     */
    export interface TldLegalAgreementResponse {
        /**
         * Unique identifier for the agreement.
         */
        agreementKey: string;
        /**
         * Agreement details.
         */
        content: string;
        /**
         * Agreement title.
         */
        title: string;
        /**
         * URL where a copy of the agreement details is hosted.
         */
        url?: string;
    }
