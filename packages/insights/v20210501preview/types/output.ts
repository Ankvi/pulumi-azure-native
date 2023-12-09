import * as pulumi from "@pulumi/pulumi";
    /**
     * The diagnostic settings category resource.
     */
    export interface DiagnosticSettingsCategoryResourceResponse {
        /**
         * the collection of what category groups are supported.
         */
        categoryGroups?: string[];
        /**
         * The type of the diagnostic settings category.
         */
        categoryType?: string;
        /**
         * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
         */
        id: string;
        /**
         * The name of the resource
         */
        name: string;
        /**
         * The system metadata related to this resource.
         */
        systemData: SystemDataResponse;
        /**
         * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
         */
        type: string;
    }

    /**
     * Part of MultiTenantDiagnosticSettings. Specifies the settings for a particular log.
     */
    export interface LogSettingsResponse {
        /**
         * Name of a Diagnostic Log category for a resource type this setting is applied to. To obtain the list of Diagnostic Log categories for a resource, first perform a GET diagnostic settings operation.
         */
        category?: string;
        /**
         * Name of a Diagnostic Log category group for a resource type this setting is applied to. To obtain the list of Diagnostic Log categories for a resource, first perform a GET diagnostic settings operation.
         */
        categoryGroup?: string;
        /**
         * a value indicating whether this log is enabled.
         */
        enabled: boolean;
        /**
         * the retention policy for this log.
         */
        retentionPolicy?: RetentionPolicyResponse;
    }

    /**
     * Part of Management Group diagnostic setting. Specifies the settings for a particular log.
     */
    export interface ManagementGroupLogSettingsResponse {
        /**
         * Name of a Management Group Diagnostic Log category for a resource type this setting is applied to.
         */
        category?: string;
        /**
         * Name of a Management Group Diagnostic Log category group for a resource type this setting is applied to.
         */
        categoryGroup?: string;
        /**
         * a value indicating whether this log is enabled.
         */
        enabled: boolean;
    }

    /**
     * Part of MultiTenantDiagnosticSettings. Specifies the settings for a particular metric.
     */
    export interface MetricSettingsResponse {
        /**
         * Name of a Diagnostic Metric category for a resource type this setting is applied to. To obtain the list of Diagnostic metric categories for a resource, first perform a GET diagnostic settings operation.
         */
        category?: string;
        /**
         * a value indicating whether this category is enabled.
         */
        enabled: boolean;
        /**
         * the retention policy for this category.
         */
        retentionPolicy?: RetentionPolicyResponse;
        /**
         * the timegrain of the metric in ISO8601 format.
         */
        timeGrain?: string;
    }

    /**
     * Specifies the retention policy for the log.
     */
    export interface RetentionPolicyResponse {
        /**
         * the number of days for the retention in days. A value of 0 will retain the events indefinitely.
         */
        days: number;
        /**
         * a value indicating whether the retention policy is enabled.
         */
        enabled: boolean;
    }

    /**
     * Part of Subscription diagnostic setting. Specifies the settings for a particular log.
     */
    export interface SubscriptionLogSettingsResponse {
        /**
         * Name of a Subscription Diagnostic Log category for a resource type this setting is applied to.
         */
        category?: string;
        /**
         * Name of a Subscription Diagnostic Log category group for a resource type this setting is applied to.
         */
        categoryGroup?: string;
        /**
         * a value indicating whether this log is enabled.
         */
        enabled: boolean;
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
