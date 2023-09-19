import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * An error response from the Batch service.
     */
    export interface DeleteCertificateErrorResponse {
        /**
         * An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
         */
        code: string;
        /**
         * A list of additional details about the error.
         */
        details?: DeleteCertificateErrorResponse[];
        /**
         * A message describing the error, intended to be suitable for display in a user interface.
         */
        message: string;
        /**
         * The target of the particular error. For example, the name of the property in error.
         */
        target?: string;
    }
