export const ActionType = {
    Allow: "Allow",
    Block: "Block",
    Log: "Log",
    Redirect: "Redirect",
    AnomalyScoring: "AnomalyScoring",
    JSChallenge: "JSChallenge",
} as const;

/**
 * Describes the override action to be applied when rule matches.
 */
export type ActionType = (typeof ActionType)[keyof typeof ActionType];

export const BackendEnabledState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Whether to enable use of this backend. Permitted values are 'Enabled' or 'Disabled'
 */
export type BackendEnabledState = (typeof BackendEnabledState)[keyof typeof BackendEnabledState];

export const CustomRuleEnabledState = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * Describes if the custom rule is in enabled or disabled state. Defaults to Enabled if not specified.
 */
export type CustomRuleEnabledState = (typeof CustomRuleEnabledState)[keyof typeof CustomRuleEnabledState];

export const DynamicCompressionEnabled = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Whether to use dynamic compression for cached content
 */
export type DynamicCompressionEnabled = (typeof DynamicCompressionEnabled)[keyof typeof DynamicCompressionEnabled];

export const EnforceCertificateNameCheckEnabledState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Whether to enforce certificate name check on HTTPS requests to all backend pools. No effect on non-HTTPS requests.
 */
export type EnforceCertificateNameCheckEnabledState = (typeof EnforceCertificateNameCheckEnabledState)[keyof typeof EnforceCertificateNameCheckEnabledState];

export const FrontDoorEnabledState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Operational status of the Front Door load balancer. Permitted values are 'Enabled' or 'Disabled'
 */
export type FrontDoorEnabledState = (typeof FrontDoorEnabledState)[keyof typeof FrontDoorEnabledState];

export const FrontDoorForwardingProtocol = {
    HttpOnly: "HttpOnly",
    HttpsOnly: "HttpsOnly",
    MatchRequest: "MatchRequest",
} as const;

/**
 * Protocol this rule will use when forwarding traffic to backends.
 */
export type FrontDoorForwardingProtocol = (typeof FrontDoorForwardingProtocol)[keyof typeof FrontDoorForwardingProtocol];

export const FrontDoorHealthProbeMethod = {
    GET: "GET",
    HEAD: "HEAD",
} as const;

/**
 * Configures which HTTP method to use to probe the backends defined under backendPools.
 */
export type FrontDoorHealthProbeMethod = (typeof FrontDoorHealthProbeMethod)[keyof typeof FrontDoorHealthProbeMethod];

export const FrontDoorProtocol = {
    Http: "Http",
    Https: "Https",
} as const;

/**
 * Accepted protocol schemes.
 */
export type FrontDoorProtocol = (typeof FrontDoorProtocol)[keyof typeof FrontDoorProtocol];

export const FrontDoorQuery = {
    StripNone: "StripNone",
    StripAll: "StripAll",
    StripOnly: "StripOnly",
    StripAllExcept: "StripAllExcept",
} as const;

/**
 * Treatment of URL query terms when forming the cache key.
 */
export type FrontDoorQuery = (typeof FrontDoorQuery)[keyof typeof FrontDoorQuery];

export const FrontDoorRedirectProtocol = {
    HttpOnly: "HttpOnly",
    HttpsOnly: "HttpsOnly",
    MatchRequest: "MatchRequest",
} as const;

/**
 * The protocol of the destination to where the traffic is redirected
 */
export type FrontDoorRedirectProtocol = (typeof FrontDoorRedirectProtocol)[keyof typeof FrontDoorRedirectProtocol];

export const FrontDoorRedirectType = {
    Moved: "Moved",
    Found: "Found",
    TemporaryRedirect: "TemporaryRedirect",
    PermanentRedirect: "PermanentRedirect",
} as const;

/**
 * The redirect type the rule will use when redirecting traffic.
 */
export type FrontDoorRedirectType = (typeof FrontDoorRedirectType)[keyof typeof FrontDoorRedirectType];

export const HeaderActionType = {
    Append: "Append",
    Delete: "Delete",
    Overwrite: "Overwrite",
} as const;

/**
 * Which type of manipulation to apply to the header.
 */
export type HeaderActionType = (typeof HeaderActionType)[keyof typeof HeaderActionType];

export const HealthProbeEnabled = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Whether to enable health probes to be made against backends defined under backendPools. Health probes can only be disabled if there is a single enabled backend in single enabled backend pool.
 */
export type HealthProbeEnabled = (typeof HealthProbeEnabled)[keyof typeof HealthProbeEnabled];

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

export const MatchProcessingBehavior = {
    Continue: "Continue",
    Stop: "Stop",
} as const;

/**
 * If this rule is a match should the rules engine continue running the remaining rules or stop. If not present, defaults to Continue.
 */
export type MatchProcessingBehavior = (typeof MatchProcessingBehavior)[keyof typeof MatchProcessingBehavior];

export const MatchVariable = {
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
export type MatchVariable = (typeof MatchVariable)[keyof typeof MatchVariable];

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

export const RoutingRuleEnabledState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Whether to enable use of this rule. Permitted values are 'Enabled' or 'Disabled'
 */
export type RoutingRuleEnabledState = (typeof RoutingRuleEnabledState)[keyof typeof RoutingRuleEnabledState];

export const RuleType = {
    MatchRule: "MatchRule",
    RateLimitRule: "RateLimitRule",
} as const;

/**
 * Describes type of rule.
 */
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

/**
 * Match Variable
 */
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

/**
 * Describes operator to apply to the match condition.
 */
export type RulesEngineOperator = (typeof RulesEngineOperator)[keyof typeof RulesEngineOperator];

export const ScrubbingRuleEntryMatchOperator = {
    EqualsAny: "EqualsAny",
    Equals: "Equals",
} as const;

/**
 * When matchVariable is a collection, operate on the selector to specify which elements in the collection this rule applies to.
 */
export type ScrubbingRuleEntryMatchOperator = (typeof ScrubbingRuleEntryMatchOperator)[keyof typeof ScrubbingRuleEntryMatchOperator];

export const ScrubbingRuleEntryMatchVariable = {
    RequestIPAddress: "RequestIPAddress",
    RequestUri: "RequestUri",
    QueryStringArgNames: "QueryStringArgNames",
    RequestHeaderNames: "RequestHeaderNames",
    RequestCookieNames: "RequestCookieNames",
    RequestBodyPostArgNames: "RequestBodyPostArgNames",
    RequestBodyJsonArgNames: "RequestBodyJsonArgNames",
} as const;

/**
 * The variable to be scrubbed from the logs.
 */
export type ScrubbingRuleEntryMatchVariable = (typeof ScrubbingRuleEntryMatchVariable)[keyof typeof ScrubbingRuleEntryMatchVariable];

export const ScrubbingRuleEntryState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Defines the state of a log scrubbing rule. Default value is enabled.
 */
export type ScrubbingRuleEntryState = (typeof ScrubbingRuleEntryState)[keyof typeof ScrubbingRuleEntryState];

export const SessionAffinityEnabledState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Whether to allow session affinity on this host. Valid options are 'Enabled' or 'Disabled'
 */
export type SessionAffinityEnabledState = (typeof SessionAffinityEnabledState)[keyof typeof SessionAffinityEnabledState];

export const SkuName = {
    Classic_AzureFrontDoor: "Classic_AzureFrontDoor",
    Standard_AzureFrontDoor: "Standard_AzureFrontDoor",
    Premium_AzureFrontDoor: "Premium_AzureFrontDoor",
} as const;

/**
 * Name of the pricing tier.
 */
export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const State = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * The state of the Experiment
 */
export type State = (typeof State)[keyof typeof State];

export const Transform = {
    Lowercase: "Lowercase",
    Uppercase: "Uppercase",
    Trim: "Trim",
    UrlDecode: "UrlDecode",
    UrlEncode: "UrlEncode",
    RemoveNulls: "RemoveNulls",
} as const;

/**
 * Describes what transforms are applied before matching
 */
export type Transform = (typeof Transform)[keyof typeof Transform];

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

export const VariableName = {
    SocketAddr: "SocketAddr",
    GeoLocation: "GeoLocation",
    None: "None",
} as const;

/**
 * Describes the supported variable for group by
 */
export type VariableName = (typeof VariableName)[keyof typeof VariableName];

export const WebApplicationFirewallScrubbingState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * State of the log scrubbing config. Default value is Enabled.
 */
export type WebApplicationFirewallScrubbingState = (typeof WebApplicationFirewallScrubbingState)[keyof typeof WebApplicationFirewallScrubbingState];
