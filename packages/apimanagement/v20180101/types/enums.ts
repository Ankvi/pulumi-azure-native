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

export type LoggerType = (typeof LoggerType)[keyof typeof LoggerType];

export const SubscriptionState = {
    Suspended: "suspended",
    Active: "active",
    Expired: "expired",
    Submitted: "submitted",
    Rejected: "rejected",
    Cancelled: "cancelled",
} as const;

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

export type UserState = (typeof UserState)[keyof typeof UserState];