export const AFDEndpointProtocols = {
    Http: "Http",
    Https: "Https",
} as const;

/**
 * Supported protocols for the customer's endpoint.
 */
export type AFDEndpointProtocols = (typeof AFDEndpointProtocols)[keyof typeof AFDEndpointProtocols];

export const AfdQueryStringCachingBehavior = {
    IgnoreQueryString: "IgnoreQueryString",
    UseQueryString: "UseQueryString",
    NotSet: "NotSet",
} as const;

/**
 * Defines how CDN caches requests that include query strings. You can ignore any query strings when caching, bypass caching to prevent requests that contain query strings from being cached, or cache every request with a unique URL.
 */
export type AfdQueryStringCachingBehavior = (typeof AfdQueryStringCachingBehavior)[keyof typeof AfdQueryStringCachingBehavior];

export const EnabledState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Whether to enable use of this rule. Permitted values are 'Enabled' or 'Disabled'
 */
export type EnabledState = (typeof EnabledState)[keyof typeof EnabledState];

export const ForwardingProtocol = {
    HttpOnly: "HttpOnly",
    HttpsOnly: "HttpsOnly",
    MatchRequest: "MatchRequest",
} as const;

/**
 * Protocol this rule will use when forwarding traffic to backends.
 */
export type ForwardingProtocol = (typeof ForwardingProtocol)[keyof typeof ForwardingProtocol];

export const HealthProbeRequestType = {
    NotSet: "NotSet",
    GET: "GET",
    HEAD: "HEAD",
} as const;

/**
 * The type of health probe request that is made.
 */
export type HealthProbeRequestType = (typeof HealthProbeRequestType)[keyof typeof HealthProbeRequestType];

export const HttpsRedirect = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Whether to automatically redirect HTTP traffic to HTTPS traffic. Note that this is a easy way to set up this rule and it will be the first rule that gets executed.
 */
export type HttpsRedirect = (typeof HttpsRedirect)[keyof typeof HttpsRedirect];

export const LinkToDefaultDomain = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * whether this route will be linked to the default endpoint domain.
 */
export type LinkToDefaultDomain = (typeof LinkToDefaultDomain)[keyof typeof LinkToDefaultDomain];

export const ProbeProtocol = {
    NotSet: "NotSet",
    Http: "Http",
    Https: "Https",
} as const;

/**
 * Protocol to use for health probe.
 */
export type ProbeProtocol = (typeof ProbeProtocol)[keyof typeof ProbeProtocol];

export const ResponseBasedDetectedErrorTypes = {
    None: "None",
    TcpErrorsOnly: "TcpErrorsOnly",
    TcpAndHttpErrors: "TcpAndHttpErrors",
} as const;

/**
 * Type of response errors for real user requests for which origin will be deemed unhealthy
 */
export type ResponseBasedDetectedErrorTypes = (typeof ResponseBasedDetectedErrorTypes)[keyof typeof ResponseBasedDetectedErrorTypes];

export const SkuName = {
    Standard_Verizon: "Standard_Verizon",
    Premium_Verizon: "Premium_Verizon",
    Custom_Verizon: "Custom_Verizon",
    Standard_Akamai: "Standard_Akamai",
    Standard_ChinaCdn: "Standard_ChinaCdn",
    Standard_Microsoft: "Standard_Microsoft",
    Premium_ChinaCdn: "Premium_ChinaCdn",
    Standard_AzureFrontDoor: "Standard_AzureFrontDoor",
    Premium_AzureFrontDoor: "Premium_AzureFrontDoor",
    Standard_955BandWidth_ChinaCdn: "Standard_955BandWidth_ChinaCdn",
    Standard_AvgBandWidth_ChinaCdn: "Standard_AvgBandWidth_ChinaCdn",
    StandardPlus_ChinaCdn: "StandardPlus_ChinaCdn",
    StandardPlus_955BandWidth_ChinaCdn: "StandardPlus_955BandWidth_ChinaCdn",
    StandardPlus_AvgBandWidth_ChinaCdn: "StandardPlus_AvgBandWidth_ChinaCdn",
} as const;

/**
 * Name of the pricing tier.
 */
export type SkuName = (typeof SkuName)[keyof typeof SkuName];
