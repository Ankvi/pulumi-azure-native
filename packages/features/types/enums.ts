export const SubscriptionFeatureRegistrationState = {
    NotSpecified: "NotSpecified",
    NotRegistered: "NotRegistered",
    Pending: "Pending",
    Registering: "Registering",
    Registered: "Registered",
    Unregistering: "Unregistering",
    Unregistered: "Unregistered",
} as const;

export type SubscriptionFeatureRegistrationState = (typeof SubscriptionFeatureRegistrationState)[keyof typeof SubscriptionFeatureRegistrationState];
