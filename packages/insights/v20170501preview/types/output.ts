import * as pulumi from "@pulumi/pulumi";
    /**
     * The diagnostic settings category resource.
     */
    export interface DiagnosticSettingsCategoryResourceResponse {
        /**
         * The type of the diagnostic settings category.
         */
        categoryType?: string;
        /**
         * Azure resource Id
         */
        id: string;
        /**
         * Azure resource name
         */
        name: string;
        /**
         * Azure resource type
         */
        type: string;
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
         * a value indicating whether this log is enabled.
         */
        enabled: boolean;
    }
