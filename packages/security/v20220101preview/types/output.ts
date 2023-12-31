import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Describe the additional data of governance assignment - optional
     */
    export interface GovernanceAssignmentAdditionalDataResponse {
        /**
         * Ticket link associated with this governance assignment - for example: https://snow.com
         */
        ticketLink?: string;
        /**
         * Ticket number associated with this governance assignment
         */
        ticketNumber?: number;
        /**
         * The ticket status associated with this governance assignment - for example: Active
         */
        ticketStatus?: string;
    }

    /**
     * The governance email weekly notification configuration.
     */
    export interface GovernanceEmailNotificationResponse {
        /**
         * Exclude manager from weekly email notification.
         */
        disableManagerEmailNotification?: boolean;
        /**
         * Exclude  owner from weekly email notification.
         */
        disableOwnerEmailNotification?: boolean;
    }

    /**
     * The governance email weekly notification configuration
     */
    export interface GovernanceRuleEmailNotificationResponse {
        /**
         * Defines whether manager email notifications are disabled
         */
        disableManagerEmailNotification?: boolean;
        /**
         * Defines whether owner email notifications are disabled
         */
        disableOwnerEmailNotification?: boolean;
    }

    /**
     * The governance rule metadata
     */
    export interface GovernanceRuleMetadataResponse {
        /**
         * Governance rule Created by object id (GUID)
         */
        createdBy: string;
        /**
         * Governance rule creation date
         */
        createdOn: string;
        /**
         * Governance rule last updated by object id (GUID)
         */
        updatedBy: string;
        /**
         * Governance rule last update date
         */
        updatedOn: string;
    }

    /**
     * Describe the owner source of governance rule
     */
    export interface GovernanceRuleOwnerSourceResponse {
        /**
         * The owner type for the governance rule owner source
         */
        type?: string;
        /**
         * The source value e.g. tag key like owner name or email address
         */
        value?: string;
    }

    /**
     * The ETA (estimated time of arrival) for remediation
     */
    export interface RemediationEtaResponse {
        /**
         * ETA for remediation.
         */
        eta: string;
        /**
         * Justification for change of Eta.
         */
        justification: string;
    }
