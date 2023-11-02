export const SaaSOfferStatus = {
    Started: "Started",
    PendingFulfillmentStart: "PendingFulfillmentStart",
    InProgress: "InProgress",
    Subscribed: "Subscribed",
    Suspended: "Suspended",
    Reinstated: "Reinstated",
    Succeeded: "Succeeded",
    Failed: "Failed",
    Unsubscribed: "Unsubscribed",
    Updating: "Updating",
} as const;

/**
 * SaaS Offer Status
 */
export type SaaSOfferStatus = (typeof SaaSOfferStatus)[keyof typeof SaaSOfferStatus];
