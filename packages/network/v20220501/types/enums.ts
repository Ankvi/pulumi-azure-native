export const ActionType = {
    Allow: "Allow",
    Block: "Block",
    Log: "Log",
    Redirect: "Redirect",
    AnomalyScoring: "AnomalyScoring",
} as const;

/**
 * Describes the override action to be applied when rule matches.
 */
export type ActionType = (typeof ActionType)[keyof typeof ActionType];

export const CustomRuleEnabledState = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * Describes if the custom rule is in enabled or disabled state. Defaults to Enabled if not specified.
 */
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

/**
 * Request variable to compare with.
 */
export type FrontDoorMatchVariable = (typeof FrontDoorMatchVariable)[keyof typeof FrontDoorMatchVariable];

export const ManagedRuleEnabledState = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * Describes if the managed rule is in enabled or disabled state. Defaults to Disabled if not specified.
 */
export type ManagedRuleEnabledState = (typeof ManagedRuleEnabledState)[keyof typeof ManagedRuleEnabledState];

export const ManagedRuleExclusionMatchVariable = {
    RequestHeaderNames: "RequestHeaderNames",
    RequestCookieNames: "RequestCookieNames",
    QueryStringArgNames: "QueryStringArgNames",
    RequestBodyPostArgNames: "RequestBodyPostArgNames",
    RequestBodyJsonArgNames: "RequestBodyJsonArgNames",
} as const;

/**
 * The variable type to be excluded.
 */
export type ManagedRuleExclusionMatchVariable = (typeof ManagedRuleExclusionMatchVariable)[keyof typeof ManagedRuleExclusionMatchVariable];

export const ManagedRuleExclusionSelectorMatchOperator = {
    Equals: "Equals",
    Contains: "Contains",
    StartsWith: "StartsWith",
    EndsWith: "EndsWith",
    EqualsAny: "EqualsAny",
} as const;

/**
 * Comparison operator to apply to the selector when specifying which elements in the collection this exclusion applies to.
 */
export type ManagedRuleExclusionSelectorMatchOperator = (typeof ManagedRuleExclusionSelectorMatchOperator)[keyof typeof ManagedRuleExclusionSelectorMatchOperator];

export const ManagedRuleSetActionType = {
    Block: "Block",
    Log: "Log",
    Redirect: "Redirect",
} as const;

/**
 * Defines the rule set action.
 */
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

/**
 * Comparison type to use for matching with the variable value.
 */
export type Operator = (typeof Operator)[keyof typeof Operator];

export const PolicyEnabledState = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * Describes if the policy is in enabled or disabled state. Defaults to Enabled if not specified.
 */
export type PolicyEnabledState = (typeof PolicyEnabledState)[keyof typeof PolicyEnabledState];

export const PolicyMode = {
    Prevention: "Prevention",
    Detection: "Detection",
} as const;

/**
 * Describes if it is in detection mode or prevention mode at policy level.
 */
export type PolicyMode = (typeof PolicyMode)[keyof typeof PolicyMode];

export const PolicyRequestBodyCheck = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * Describes if policy managed rules will inspect the request body content.
 */
export type PolicyRequestBodyCheck = (typeof PolicyRequestBodyCheck)[keyof typeof PolicyRequestBodyCheck];

export const RuleType = {
    MatchRule: "MatchRule",
    RateLimitRule: "RateLimitRule",
} as const;

/**
 * Describes type of rule.
 */
export type RuleType = (typeof RuleType)[keyof typeof RuleType];

export const SkuName = {
    Classic_AzureFrontDoor: "Classic_AzureFrontDoor",
    Standard_AzureFrontDoor: "Standard_AzureFrontDoor",
    Premium_AzureFrontDoor: "Premium_AzureFrontDoor",
} as const;

/**
 * Name of the pricing tier.
 */
export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const TransformType = {
    Lowercase: "Lowercase",
    Uppercase: "Uppercase",
    Trim: "Trim",
    UrlDecode: "UrlDecode",
    UrlEncode: "UrlEncode",
    RemoveNulls: "RemoveNulls",
} as const;

/**
 * Describes what transforms applied before matching.
 */
export type TransformType = (typeof TransformType)[keyof typeof TransformType];
