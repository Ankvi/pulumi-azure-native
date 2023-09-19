import * as pulumi from "@pulumi/pulumi";
    /**
     * The related metadata items for the function.
     */
    export interface LogAnalyticsQueryPackQueryPropertiesRelatedArgs {
        /**
         * The related categories for the function.
         */
        categories?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The related resource types for the function.
         */
        resourceTypes?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The related Log Analytics solutions for the function.
         */
        solutions?: pulumi.Input<pulumi.Input<string>[]>;
    }
