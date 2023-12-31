import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Describe the additional data of governance assignment - optional
     */
    export interface GovernanceAssignmentAdditionalDataArgs {
        /**
         * Ticket link associated with this governance assignment - for example: https://snow.com
         */
        ticketLink?: pulumi.Input<string>;
        /**
         * Ticket number associated with this governance assignment
         */
        ticketNumber?: pulumi.Input<number>;
        /**
         * The ticket status associated with this governance assignment - for example: Active
         */
        ticketStatus?: pulumi.Input<string>;
    }

    /**
     * The governance email weekly notification configuration.
     */
    export interface GovernanceEmailNotificationArgs {
        /**
         * Exclude manager from weekly email notification.
         */
        disableManagerEmailNotification?: pulumi.Input<boolean>;
        /**
         * Exclude  owner from weekly email notification.
         */
        disableOwnerEmailNotification?: pulumi.Input<boolean>;
    }

    /**
     * The governance email weekly notification configuration
     */
    export interface GovernanceRuleEmailNotificationArgs {
        /**
         * Defines whether manager email notifications are disabled
         */
        disableManagerEmailNotification?: pulumi.Input<boolean>;
        /**
         * Defines whether owner email notifications are disabled
         */
        disableOwnerEmailNotification?: pulumi.Input<boolean>;
    }

    /**
     * Describe the owner source of governance rule
     */
    export interface GovernanceRuleOwnerSourceArgs {
        /**
         * The owner type for the governance rule owner source
         */
        type?: pulumi.Input<string | enums.GovernanceRuleOwnerSourceType>;
        /**
         * The source value e.g. tag key like owner name or email address
         */
        value?: pulumi.Input<string>;
    }

    /**
     * The ETA (estimated time of arrival) for remediation
     */
    export interface RemediationEtaArgs {
        /**
         * ETA for remediation.
         */
        eta: pulumi.Input<string>;
        /**
         * Justification for change of Eta.
         */
        justification: pulumi.Input<string>;
    }
