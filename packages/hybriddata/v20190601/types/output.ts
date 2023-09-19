import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The pair of customer secret.
     */
    export interface CustomerSecretResponse {
        /**
         * The encryption algorithm used to encrypt data.
         */
        algorithm: string;
        /**
         * The identifier to the data service input object which this secret corresponds to.
         */
        keyIdentifier: string;
        /**
         * It contains the encrypted customer secret.
         */
        keyValue: string;
    }

    /**
     * Schedule for the job run.
     */
    export interface ScheduleResponse {
        /**
         * Name of the schedule.
         */
        name?: string;
        /**
         * A list of repetition intervals in ISO 8601 format.
         */
        policyList?: string[];
    }

    /**
     * The sku type.
     */
    export interface SkuResponse {
        /**
         * The sku name. Required for data manager creation, optional for update.
         */
        name?: string;
        /**
         * The sku tier. This is based on the SKU name.
         */
        tier?: string;
    }
