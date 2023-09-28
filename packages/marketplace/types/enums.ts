export const Accessibility = {
    Unknown: "Unknown",
    Public: "Public",
    PrivateTenantOnLevel: "PrivateTenantOnLevel",
    PrivateSubscriptionOnLevel: "PrivateSubscriptionOnLevel",
} as const;

/**
 * Plan accessibility
 */
export type Accessibility = (typeof Accessibility)[keyof typeof Accessibility];
