export const PaymentChannelType = {
    SubscriptionDelegated: "SubscriptionDelegated",
    CustomerDelegated: "CustomerDelegated",
} as const;

/**
 * The Payment channel for the SaasSubscription.
 */
export type PaymentChannelType = (typeof PaymentChannelType)[keyof typeof PaymentChannelType];
