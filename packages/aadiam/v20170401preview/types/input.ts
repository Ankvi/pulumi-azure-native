import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Part of MultiTenantDiagnosticSettings. Specifies the settings for a particular log.
     */
    export interface LogSettingsArgs {
        /**
         * Name of a Diagnostic Log category for a resource type this setting is applied to. To obtain the list of Diagnostic Log categories for a resource, first perform a GET diagnostic settings operation.
         */
        category?: pulumi.Input<string | enums.Category>;
        /**
         * A value indicating whether this log is enabled.
         */
        enabled: pulumi.Input<boolean>;
        /**
         * The retention policy for this log.
         */
        retentionPolicy?: pulumi.Input<RetentionPolicyArgs>;
    }

    /**
     * Specifies the retention policy for the log.
     */
    export interface RetentionPolicyArgs {
        /**
         * The number of days for the retention in days. A value of 0 will retain the events indefinitely.
         */
        days: pulumi.Input<number>;
        /**
         * A value indicating whether the retention policy is enabled.
         */
        enabled: pulumi.Input<boolean>;
    }
