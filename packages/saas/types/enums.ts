export const PaymentChannelType = {
    SubscriptionDelegated: "SubscriptionDelegated",
    CustomerDelegated: "CustomerDelegated",
} as const;

export type PaymentChannelType = (typeof PaymentChannelType)[keyof typeof PaymentChannelType];
