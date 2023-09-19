import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Schedule settings for regular cluster updates.
     */
    export interface MaintenanceWindowArgs {
        /**
         * Indicates whether custom maintenance window is enabled or not.
         */
        customWindow?: pulumi.Input<string>;
        /**
         * Preferred day of the week for maintenance window.
         */
        dayOfWeek?: pulumi.Input<number>;
        /**
         * Start hour within preferred day of the week for maintenance window.
         */
        startHour?: pulumi.Input<number>;
        /**
         * Start minute within the start hour for maintenance window.
         */
        startMinute?: pulumi.Input<number>;
    }

    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    export interface PrivateLinkServiceConnectionStateArgs {
        /**
         * A message indicating if changes on the service provider require any updates on the consumer.
         */
        actionsRequired?: pulumi.Input<string>;
        /**
         * The reason for approval/rejection of the connection.
         */
        description?: pulumi.Input<string>;
        /**
         * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
         */
        status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus>;
    }
