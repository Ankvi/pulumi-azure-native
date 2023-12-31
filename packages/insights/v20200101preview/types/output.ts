import * as pulumi from "@pulumi/pulumi";
    /**
     * Part of Management Group diagnostic setting. Specifies the settings for a particular log.
     */
    export interface ManagementGroupLogSettingsResponse {
        /**
         * Name of a Management Group Diagnostic Log category for a resource type this setting is applied to.
         */
        category: string;
        /**
         * a value indicating whether this log is enabled.
         */
        enabled: boolean;
    }
