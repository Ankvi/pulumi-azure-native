import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The pair of customer secret.
     */
    export interface CustomerSecretArgs {
        /**
         * The encryption algorithm used to encrypt data.
         */
        algorithm: pulumi.Input<enums.SupportedAlgorithm>;
        /**
         * The identifier to the data service input object which this secret corresponds to.
         */
        keyIdentifier: pulumi.Input<string>;
        /**
         * It contains the encrypted customer secret.
         */
        keyValue: pulumi.Input<string>;
    }

    /**
     * Schedule for the job run.
     */
    export interface ScheduleArgs {
        /**
         * Name of the schedule.
         */
        name?: pulumi.Input<string>;
        /**
         * A list of repetition intervals in ISO 8601 format.
         */
        policyList?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The sku type.
     */
    export interface SkuArgs {
        /**
         * The sku name. Required for data manager creation, optional for update.
         */
        name?: pulumi.Input<string>;
        /**
         * The sku tier. This is based on the SKU name.
         */
        tier?: pulumi.Input<string>;
    }
