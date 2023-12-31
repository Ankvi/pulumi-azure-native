import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The Action Groups information, used by the alert rule.
     */
    export interface ActionGroupsInformationArgs {
        /**
         * An optional custom email subject to use in email notifications.
         */
        customEmailSubject?: pulumi.Input<string>;
        /**
         * An optional custom web-hook payload to use in web-hook notifications.
         */
        customWebhookPayload?: pulumi.Input<string>;
        /**
         * The Action Group resource IDs.
         */
        groupIds: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The detector information. By default this is not populated, unless it's specified in expandDetector
     */
    export interface DetectorArgs {
        /**
         * The detector id.
         */
        id: pulumi.Input<string>;
        /**
         * The detector's parameters.'
         */
        parameters?: pulumi.Input<{[key: string]: any}>;
    }

    /**
     * Optional throttling information for the alert rule.
     */
    export interface ThrottlingInformationArgs {
        /**
         * The required duration (in ISO8601 format) to wait before notifying on the alert rule again. The time granularity must be in minutes and minimum value is 0 minutes
         */
        duration?: pulumi.Input<string>;
    }
