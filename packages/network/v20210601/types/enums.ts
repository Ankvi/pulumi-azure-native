export const ActionType = {
    Allow: "Allow",
    Block: "Block",
    Log: "Log",
    Redirect: "Redirect",
} as const;

export type ActionType = (typeof ActionType)[keyof typeof ActionType];

export const BackendEnabledState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type BackendEnabledState = (typeof BackendEnabledState)[keyof typeof BackendEnabledState];

export const CustomRuleEnabledState = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type CustomRuleEnabledState = (typeof CustomRuleEnabledState)[keyof typeof CustomRuleEnabledState];

export const DynamicCompressionEnabled = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type DynamicCompressionEnabled = (typeof DynamicCompressionEnabled)[keyof typeof DynamicCompressionEnabled];

export const EnforceCertificateNameCheckEnabledState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type EnforceCertificateNameCheckEnabledState = (typeof EnforceCertificateNameCheckEnabledState)[keyof typeof EnforceCertificateNameCheckEnabledState];

export const FrontDoorEnabledState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type FrontDoorEnabledState = (typeof FrontDoorEnabledState)[keyof typeof FrontDoorEnabledState];

export const FrontDoorForwardingProtocol = {
    HttpOnly: "HttpOnly",
    HttpsOnly: "HttpsOnly",
    MatchRequest: "MatchRequest",
} as const;

export type FrontDoorForwardingProtocol = (typeof FrontDoorForwardingProtocol)[keyof typeof FrontDoorForwardingProtocol];

export const FrontDoorHealthProbeMethod = {
    GET: "GET",
    HEAD: "HEAD",
} as const;

export type FrontDoorHealthProbeMethod = (typeof FrontDoorHealthProbeMethod)[keyof typeof FrontDoorHealthProbeMethod];

export const FrontDoorMatchVariable = {
    RemoteAddr: "RemoteAddr",
    RequestMethod: "RequestMethod",
    QueryString: "QueryString",
    PostArgs: "PostArgs",
    RequestUri: "RequestUri",
    RequestHeader: "RequestHeader",
    RequestBody: "RequestBody",
    Cookies: "Cookies",
    SocketAddr: "SocketAddr",
} as const;

export type FrontDoorMatchVariable = (typeof FrontDoorMatchVariable)[keyof typeof FrontDoorMatchVariable];

export const FrontDoorProtocol = {
    Http: "Http",
    Https: "Https",
} as const;

export type FrontDoorProtocol = (typeof FrontDoorProtocol)[keyof typeof FrontDoorProtocol];

export const FrontDoorQuery = {
    StripNone: "StripNone",
    StripAll: "StripAll",
    StripOnly: "StripOnly",
    StripAllExcept: "StripAllExcept",
} as const;

export type FrontDoorQuery = (typeof FrontDoorQuery)[keyof typeof FrontDoorQuery];

export const FrontDoorRedirectProtocol = {
    HttpOnly: "HttpOnly",
    HttpsOnly: "HttpsOnly",
    MatchRequest: "MatchRequest",
} as const;

export type FrontDoorRedirectProtocol = (typeof FrontDoorRedirectProtocol)[keyof typeof FrontDoorRedirectProtocol];

export const FrontDoorRedirectType = {
    Moved: "Moved",
    Found: "Found",
    TemporaryRedirect: "TemporaryRedirect",
    PermanentRedirect: "PermanentRedirect",
} as const;

export type FrontDoorRedirectType = (typeof FrontDoorRedirectType)[keyof typeof FrontDoorRedirectType];

export const HeaderActionType = {
    Append: "Append",
    Delete: "Delete",
    Overwrite: "Overwrite",
} as const;

export type HeaderActionType = (typeof HeaderActionType)[keyof typeof HeaderActionType];

export const HealthProbeEnabled = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type HealthProbeEnabled = (typeof HealthProbeEnabled)[keyof typeof HealthProbeEnabled];

export const ManagedRuleEnabledState = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type ManagedRuleEnabledState = (typeof ManagedRuleEnabledState)[keyof typeof ManagedRuleEnabledState];

export const ManagedRuleExclusionMatchVariable = {
    RequestHeaderNames: "RequestHeaderNames",
    RequestCookieNames: "RequestCookieNames",
    QueryStringArgNames: "QueryStringArgNames",
    RequestBodyPostArgNames: "RequestBodyPostArgNames",
    RequestBodyJsonArgNames: "RequestBodyJsonArgNames",
} as const;

export type ManagedRuleExclusionMatchVariable = (typeof ManagedRuleExclusionMatchVariable)[keyof typeof ManagedRuleExclusionMatchVariable];

export const ManagedRuleExclusionSelectorMatchOperator = {
    Equals: "Equals",
    Contains: "Contains",
    StartsWith: "StartsWith",
    EndsWith: "EndsWith",
    EqualsAny: "EqualsAny",
} as const;

export type ManagedRuleExclusionSelectorMatchOperator = (typeof ManagedRuleExclusionSelectorMatchOperator)[keyof typeof ManagedRuleExclusionSelectorMatchOperator];

export const ManagedRuleSetActionType = {
    Block: "Block",
    Log: "Log",
    Redirect: "Redirect",
} as const;

export type ManagedRuleSetActionType = (typeof ManagedRuleSetActionType)[keyof typeof ManagedRuleSetActionType];

export const MatchProcessingBehavior = {
    Continue: "Continue",
    Stop: "Stop",
} as const;

export type MatchProcessingBehavior = (typeof MatchProcessingBehavior)[keyof typeof MatchProcessingBehavior];

export const Operator = {
    Any: "Any",
    IPMatch: "IPMatch",
    GeoMatch: "GeoMatch",
    Equal: "Equal",
    Contains: "Contains",
    LessThan: "LessThan",
    GreaterThan: "GreaterThan",
    LessThanOrEqual: "LessThanOrEqual",
    GreaterThanOrEqual: "GreaterThanOrEqual",
    BeginsWith: "BeginsWith",
    EndsWith: "EndsWith",
    RegEx: "RegEx",
} as const;

export type Operator = (typeof Operator)[keyof typeof Operator];

export const PolicyEnabledState = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type PolicyEnabledState = (typeof PolicyEnabledState)[keyof typeof PolicyEnabledState];

export const PolicyMode = {
    Prevention: "Prevention",
    Detection: "Detection",
} as const;

export type PolicyMode = (typeof PolicyMode)[keyof typeof PolicyMode];

export const PolicyRequestBodyCheck = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type PolicyRequestBodyCheck = (typeof PolicyRequestBodyCheck)[keyof typeof PolicyRequestBodyCheck];

export const RoutingRuleEnabledState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type RoutingRuleEnabledState = (typeof RoutingRuleEnabledState)[keyof typeof RoutingRuleEnabledState];

export const RuleType = {
    MatchRule: "MatchRule",
    RateLimitRule: "RateLimitRule",
} as const;

export type RuleType = (typeof RuleType)[keyof typeof RuleType];

export const RulesEngineMatchVariable = {
    IsMobile: "IsMobile",
    RemoteAddr: "RemoteAddr",
    RequestMethod: "RequestMethod",
    QueryString: "QueryString",
    PostArgs: "PostArgs",
    RequestUri: "RequestUri",
    RequestPath: "RequestPath",
    RequestFilename: "RequestFilename",
    RequestFilenameExtension: "RequestFilenameExtension",
    RequestHeader: "RequestHeader",
    RequestBody: "RequestBody",
    RequestScheme: "RequestScheme",
} as const;

export type RulesEngineMatchVariable = (typeof RulesEngineMatchVariable)[keyof typeof RulesEngineMatchVariable];

export const RulesEngineOperator = {
    Any: "Any",
    IPMatch: "IPMatch",
    GeoMatch: "GeoMatch",
    Equal: "Equal",
    Contains: "Contains",
    LessThan: "LessThan",
    GreaterThan: "GreaterThan",
    LessThanOrEqual: "LessThanOrEqual",
    GreaterThanOrEqual: "GreaterThanOrEqual",
    BeginsWith: "BeginsWith",
    EndsWith: "EndsWith",
} as const;

export type RulesEngineOperator = (typeof RulesEngineOperator)[keyof typeof RulesEngineOperator];

export const SessionAffinityEnabledState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type SessionAffinityEnabledState = (typeof SessionAffinityEnabledState)[keyof typeof SessionAffinityEnabledState];

export const SkuName = {
    Classic_AzureFrontDoor: "Classic_AzureFrontDoor",
    Standard_AzureFrontDoor: "Standard_AzureFrontDoor",
    Premium_AzureFrontDoor: "Premium_AzureFrontDoor",
} as const;

export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const Transform = {
    Lowercase: "Lowercase",
    Uppercase: "Uppercase",
    Trim: "Trim",
    UrlDecode: "UrlDecode",
    UrlEncode: "UrlEncode",
    RemoveNulls: "RemoveNulls",
} as const;

export type Transform = (typeof Transform)[keyof typeof Transform];

export const TransformType = {
    Lowercase: "Lowercase",
    Uppercase: "Uppercase",
    Trim: "Trim",
    UrlDecode: "UrlDecode",
    UrlEncode: "UrlEncode",
    RemoveNulls: "RemoveNulls",
} as const;

export type TransformType = (typeof TransformType)[keyof typeof TransformType];