export const AlwaysLog = {
    /**
     * Always log all erroneous request regardless of sampling settings.
     */
    AllErrors: "allErrors",
} as const;

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

export type IdentityProviderType = (typeof IdentityProviderType)[keyof typeof IdentityProviderType];

export const SamplingType = {
    /**
     * Fixed-rate sampling.
     */
    Fixed: "fixed",
} as const;

export type SamplingType = (typeof SamplingType)[keyof typeof SamplingType];

export const SubscriptionState = {
    Suspended: "suspended",
    Active: "active",
    Expired: "expired",
    Submitted: "submitted",
    Rejected: "rejected",
    Cancelled: "cancelled",
} as const;

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

export type Verbosity = (typeof Verbosity)[keyof typeof Verbosity];
