export const ActionType = {
    Allow: "Allow",
    Block: "Block",
    Log: "Log",
    Redirect: "Redirect",
    AnomalyScoring: "AnomalyScoring",
} as const;

export type ActionType = (typeof ActionType)[keyof typeof ActionType];

export const CustomRuleEnabledState = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type CustomRuleEnabledState = (typeof CustomRuleEnabledState)[keyof typeof CustomRuleEnabledState];

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

export const RuleType = {
    MatchRule: "MatchRule",
    RateLimitRule: "RateLimitRule",
} as const;

export type RuleType = (typeof RuleType)[keyof typeof RuleType];

export const SkuName = {
    Classic_AzureFrontDoor: "Classic_AzureFrontDoor",
    Standard_AzureFrontDoor: "Standard_AzureFrontDoor",
    Premium_AzureFrontDoor: "Premium_AzureFrontDoor",
} as const;

export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const TransformType = {
    Lowercase: "Lowercase",
    Uppercase: "Uppercase",
    Trim: "Trim",
    UrlDecode: "UrlDecode",
    UrlEncode: "UrlEncode",
    RemoveNulls: "RemoveNulls",
} as const;

export type TransformType = (typeof TransformType)[keyof typeof TransformType];
