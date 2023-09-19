import * as pulumi from "@pulumi/pulumi";
    /**
     * New plans notification details
     */
    export interface NewNotificationsResponse {
        /**
         * Gets offer display name
         */
        displayName?: string;
        /**
         * Gets or sets the icon url
         */
        icon?: string;
        /**
         * Gets a value indicating whether future plans is enabled.
         */
        isFuturePlansEnabled?: boolean;
        /**
         * Gets or sets the notification message id
         */
        messageCode?: number;
        /**
         * Gets offer id
         */
        offerId?: string;
        /**
         * Gets or sets removed plans notifications
         */
        plans?: PlanNotificationDetailsResponse[];
    }

    /**
     * Plan notification details
     */
    export interface PlanNotificationDetailsResponse {
        /**
         * Gets or sets the plan display name
         */
        planDisplayName?: string;
        /**
         * Gets or sets the plan id
         */
        planId?: string;
    }

    /**
     * List of stop sell offers and plans notifications.
     */
    export interface StopSellOffersPlansNotificationsListPropertiesResponse {
        /**
         * The offer display name
         */
        displayName: string;
        /**
         * The icon url
         */
        icon: string;
        /**
         * A value indicating whether entire offer is in stop sell or only few of its plans
         */
        isEntire: boolean;
        /**
         * The notification message code
         */
        messageCode: number;
        /**
         * The offer id
         */
        offerId: string;
        /**
         * The list of removed plans notifications
         */
        plans: PlanNotificationDetailsResponse[];
        /**
         * True if the offer has public plans
         */
        publicContext: boolean;
        /**
         * The subscriptions related to private plans
         */
        subscriptionsIds: string[];
    }
