export const AFDEndpointProtocols = {
    Http: "Http",
    Https: "Https",
} as const;

export type AFDEndpointProtocols = (typeof AFDEndpointProtocols)[keyof typeof AFDEndpointProtocols];

export const AfdQueryStringCachingBehavior = {
    IgnoreQueryString: "IgnoreQueryString",
    UseQueryString: "UseQueryString",
    NotSet: "NotSet",
} as const;

export type AfdQueryStringCachingBehavior = (typeof AfdQueryStringCachingBehavior)[keyof typeof AfdQueryStringCachingBehavior];

export const EnabledState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type EnabledState = (typeof EnabledState)[keyof typeof EnabledState];

export const ForwardingProtocol = {
    HttpOnly: "HttpOnly",
    HttpsOnly: "HttpsOnly",
    MatchRequest: "MatchRequest",
} as const;

export type ForwardingProtocol = (typeof ForwardingProtocol)[keyof typeof ForwardingProtocol];

export const HealthProbeRequestType = {
    NotSet: "NotSet",
    GET: "GET",
    HEAD: "HEAD",
} as const;

export type HealthProbeRequestType = (typeof HealthProbeRequestType)[keyof typeof HealthProbeRequestType];

export const HttpsRedirect = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type HttpsRedirect = (typeof HttpsRedirect)[keyof typeof HttpsRedirect];

export const LinkToDefaultDomain = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type LinkToDefaultDomain = (typeof LinkToDefaultDomain)[keyof typeof LinkToDefaultDomain];

export const ProbeProtocol = {
    NotSet: "NotSet",
    Http: "Http",
    Https: "Https",
} as const;

export type ProbeProtocol = (typeof ProbeProtocol)[keyof typeof ProbeProtocol];

export const ResponseBasedDetectedErrorTypes = {
    None: "None",
    TcpErrorsOnly: "TcpErrorsOnly",
    TcpAndHttpErrors: "TcpAndHttpErrors",
} as const;

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

export type SkuName = (typeof SkuName)[keyof typeof SkuName];
