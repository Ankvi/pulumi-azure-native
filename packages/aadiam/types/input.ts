import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace aadiam {
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
     * Private endpoint object properties.
     */
    export interface PrivateEndpointArgs {
        /**
         * Full identifier of the private endpoint resource.
         */
        id?: pulumi.Input<string>;
    }

    /**
     * An object that represents the approval state of the private link connection.
     */
    export interface PrivateLinkServiceConnectionStateArgs {
        /**
         * A message indicating if changes on the service provider require any updates on the consumer.
         */
        actionsRequired?: pulumi.Input<string>;
        /**
         * The reason for approval or rejection.
         */
        description?: pulumi.Input<string>;
        /**
         * Indicates whether the connection has been approved, rejected or removed by the given policy owner.
         */
        status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus>;
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

    /**
     * A container holding only the Tags for a resource, allowing the user to update the tags on a PrivateLinkConnection instance.
     */
    export interface TagsResourceArgs {
        /**
         * Resource tags
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    export namespace v20170401 {
        /**
         * Part of MultiTenantDiagnosticSettings. Specifies the settings for a particular log.
         */
        export interface LogSettingsArgs {
            /**
             * Name of a Diagnostic Log category for a resource type this setting is applied to. To obtain the list of Diagnostic Log categories for a resource, first perform a GET diagnostic settings operation.
             */
            category?: pulumi.Input<string | enums.v20170401.Category>;
            /**
             * A value indicating whether this log is enabled.
             */
            enabled: pulumi.Input<boolean>;
            /**
             * The retention policy for this log.
             */
            retentionPolicy?: pulumi.Input<v20170401.RetentionPolicyArgs>;
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

    }

    export namespace v20170401preview {
        /**
         * Part of MultiTenantDiagnosticSettings. Specifies the settings for a particular log.
         */
        export interface LogSettingsArgs {
            /**
             * Name of a Diagnostic Log category for a resource type this setting is applied to. To obtain the list of Diagnostic Log categories for a resource, first perform a GET diagnostic settings operation.
             */
            category?: pulumi.Input<string | enums.v20170401preview.Category>;
            /**
             * A value indicating whether this log is enabled.
             */
            enabled: pulumi.Input<boolean>;
            /**
             * The retention policy for this log.
             */
            retentionPolicy?: pulumi.Input<v20170401preview.RetentionPolicyArgs>;
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

    }

    export namespace v20200301 {
        /**
         * Private endpoint object properties.
         */
        export interface PrivateEndpointArgs {
            /**
             * Full identifier of the private endpoint resource.
             */
            id?: pulumi.Input<string>;
        }

        /**
         * An object that represents the approval state of the private link connection.
         */
        export interface PrivateLinkServiceConnectionStateArgs {
            /**
             * A message indicating if changes on the service provider require any updates on the consumer.
             */
            actionsRequired?: pulumi.Input<string>;
            /**
             * The reason for approval or rejection.
             */
            description?: pulumi.Input<string>;
            /**
             * Indicates whether the connection has been approved, rejected or removed by the given policy owner.
             */
            status?: pulumi.Input<string | enums.v20200301.PrivateEndpointServiceConnectionStatus>;
        }

        /**
         * A container holding only the Tags for a resource, allowing the user to update the tags on a PrivateLinkConnection instance.
         */
        export interface TagsResourceArgs {
            /**
             * Resource tags
             */
            tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        }
    }

    export namespace v20200701preview {
    }
}
