import * as pulumi from "@pulumi/pulumi";
    /**
     * Part of MultiTenantDiagnosticSettings. Specifies the settings for a particular log.
     */
    export interface LogSettingsArgs {
        /**
         * Name of a Diagnostic Log category for a resource type this setting is applied to. To obtain the list of Diagnostic Log categories for a resource, first perform a GET diagnostic settings operation.
         */
        category?: pulumi.Input<string>;
        /**
         * Name of a Diagnostic Log category group for a resource type this setting is applied to. To obtain the list of Diagnostic Log categories for a resource, first perform a GET diagnostic settings operation.
         */
        categoryGroup?: pulumi.Input<string>;
        /**
         * a value indicating whether this log is enabled.
         */
        enabled: pulumi.Input<boolean>;
        /**
         * the retention policy for this log.
         */
        retentionPolicy?: pulumi.Input<RetentionPolicyArgs>;
    }

    /**
     * Part of Management Group diagnostic setting. Specifies the settings for a particular log.
     */
    export interface ManagementGroupLogSettingsArgs {
        /**
         * Name of a Management Group Diagnostic Log category for a resource type this setting is applied to.
         */
        category?: pulumi.Input<string>;
        /**
         * Name of a Management Group Diagnostic Log category group for a resource type this setting is applied to.
         */
        categoryGroup?: pulumi.Input<string>;
        /**
         * a value indicating whether this log is enabled.
         */
        enabled: pulumi.Input<boolean>;
    }

    /**
     * Part of MultiTenantDiagnosticSettings. Specifies the settings for a particular metric.
     */
    export interface MetricSettingsArgs {
        /**
         * Name of a Diagnostic Metric category for a resource type this setting is applied to. To obtain the list of Diagnostic metric categories for a resource, first perform a GET diagnostic settings operation.
         */
        category?: pulumi.Input<string>;
        /**
         * a value indicating whether this category is enabled.
         */
        enabled: pulumi.Input<boolean>;
        /**
         * the retention policy for this category.
         */
        retentionPolicy?: pulumi.Input<RetentionPolicyArgs>;
        /**
         * the timegrain of the metric in ISO8601 format.
         */
        timeGrain?: pulumi.Input<string>;
    }

    /**
     * Specifies the retention policy for the log.
     */
    export interface RetentionPolicyArgs {
        /**
         * the number of days for the retention in days. A value of 0 will retain the events indefinitely.
         */
        days: pulumi.Input<number>;
        /**
         * a value indicating whether the retention policy is enabled.
         */
        enabled: pulumi.Input<boolean>;
    }

    /**
     * Part of Subscription diagnostic setting. Specifies the settings for a particular log.
     */
    export interface SubscriptionLogSettingsArgs {
        /**
         * Name of a Subscription Diagnostic Log category for a resource type this setting is applied to.
         */
        category?: pulumi.Input<string>;
        /**
         * Name of a Subscription Diagnostic Log category group for a resource type this setting is applied to.
         */
        categoryGroup?: pulumi.Input<string>;
        /**
         * a value indicating whether this log is enabled.
         */
        enabled: pulumi.Input<boolean>;
    }
