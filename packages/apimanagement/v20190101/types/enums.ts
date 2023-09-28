export const AlwaysLog = {
    /**
     * Always log all erroneous request regardless of sampling settings.
     */
    AllErrors: "allErrors",
} as const;

/**
 * Specifies for what type of messages sampling settings should not apply.
 */
export type AlwaysLog = (typeof AlwaysLog)[keyof typeof AlwaysLog];

export const HttpCorrelationProtocol = {
    /**
     * Do not read and inject correlation headers.
     */
    None: "None",
    /**
     * Inject Request-Id and Request-Context headers with request correlation data. See https://github.com/dotnet/corefx/blob/master/src/System.Diagnostics.DiagnosticSource/src/HttpCorrelationProtocol.md.
     */
    Legacy: "Legacy",
    /**
     * Inject Trace Context headers. See https://w3c.github.io/trace-context.
     */
    W3C: "W3C",
} as const;

/**
 * Sets correlation protocol to use for Application Insights diagnostics.
 */
export type HttpCorrelationProtocol = (typeof HttpCorrelationProtocol)[keyof typeof HttpCorrelationProtocol];

export const IdentityProviderType = {
    /**
     * Facebook as Identity provider.
     */
    Facebook: "facebook",
    /**
     * Google as Identity provider.
     */
    Google: "google",
    /**
     * Microsoft Live as Identity provider.
     */
    Microsoft: "microsoft",
    /**
     * Twitter as Identity provider.
     */
    Twitter: "twitter",
    /**
     * Azure Active Directory as Identity provider.
     */
    Aad: "aad",
    /**
     * Azure Active Directory B2C as Identity provider.
     */
    AadB2C: "aadB2C",
} as const;

/**
 * Identity Provider Type identifier.
 */
export type IdentityProviderType = (typeof IdentityProviderType)[keyof typeof IdentityProviderType];

export const SamplingType = {
    /**
     * Fixed-rate sampling.
     */
    Fixed: "fixed",
} as const;

/**
 * Sampling type.
 */
export type SamplingType = (typeof SamplingType)[keyof typeof SamplingType];

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

export const Verbosity = {
    /**
     * All the traces emitted by trace policies will be sent to the logger attached to this diagnostic instance.
     */
    Verbose: "verbose",
    /**
     * Traces with 'severity' set to 'information' and 'error' will be sent to the logger attached to this diagnostic instance.
     */
    Information: "information",
    /**
     * Only traces with 'severity' set to 'error' will be sent to the logger attached to this diagnostic instance.
     */
    Error: "error",
} as const;

/**
 * The verbosity level applied to traces emitted by trace policies.
 */
export type Verbosity = (typeof Verbosity)[keyof typeof Verbosity];
