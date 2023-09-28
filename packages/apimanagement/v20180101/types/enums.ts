export const BackendProtocol = {
    /**
     * The Backend is a RESTful service.
     */
    Http: "http",
    /**
     * The Backend is a SOAP service.
     */
    Soap: "soap",
} as const;

/**
 * Backend communication protocol.
 */
export type BackendProtocol = (typeof BackendProtocol)[keyof typeof BackendProtocol];

export const Confirmation = {
    /**
     * Send an e-mail to the user confirming they have successfully signed up.
     */
    Signup: "signup",
    /**
     * Send an e-mail inviting the user to sign-up and complete registration.
     */
    Invite: "invite",
} as const;

/**
 * Determines the type of confirmation e-mail that will be sent to the newly created user.
 */
export type Confirmation = (typeof Confirmation)[keyof typeof Confirmation];

export const LoggerType = {
    /**
     * Azure Event Hub as log destination.
     */
    AzureEventHub: "azureEventHub",
    /**
     * Azure Application Insights as log destination.
     */
    ApplicationInsights: "applicationInsights",
} as const;

/**
 * Logger type.
 */
export type LoggerType = (typeof LoggerType)[keyof typeof LoggerType];

export const SubscriptionState = {
    Suspended: "suspended",
    Active: "active",
    Expired: "expired",
    Submitted: "submitted",
    Rejected: "rejected",
    Cancelled: "cancelled",
} as const;

/**
 * Initial subscription state. If no value is specified, subscription is created with Submitted state. Possible states are * active – the subscription is active, * suspended – the subscription is blocked, and the subscriber cannot call any APIs of the product, * submitted – the subscription request has been made by the developer, but has not yet been approved or rejected, * rejected – the subscription request has been denied by an administrator, * cancelled – the subscription has been cancelled by the developer or administrator, * expired – the subscription reached its expiration date and was deactivated.
 */
export type SubscriptionState = (typeof SubscriptionState)[keyof typeof SubscriptionState];

export const UserState = {
    /**
     * User state is active.
     */
    Active: "active",
    /**
     * User is blocked. Blocked users cannot authenticate at developer portal or call API.
     */
    Blocked: "blocked",
    /**
     * User account is pending. Requires identity confirmation before it can be made active.
     */
    Pending: "pending",
    /**
     * User account is closed. All identities and related entities are removed.
     */
    Deleted: "deleted",
} as const;

/**
 * Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active.
 */
export type UserState = (typeof UserState)[keyof typeof UserState];
