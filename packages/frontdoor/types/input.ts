import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Backend address of a frontDoor load balancer.
 */
export interface BackendArgs {
    /**
     * Location of the backend (IP address or FQDN)
     */
    address?: pulumi.Input<string>;
    /**
     * The value to use as the host header sent to the backend. If blank or unspecified, this defaults to the incoming host.
     */
    backendHostHeader?: pulumi.Input<string>;
    /**
     * Whether to enable use of this backend. Permitted values are 'Enabled' or 'Disabled'
     */
    enabledState?: pulumi.Input<string | enums.BackendEnabledState>;
    /**
     * The HTTP TCP port number. Must be between 1 and 65535.
     */
    httpPort?: pulumi.Input<number>;
    /**
     * The HTTPS TCP port number. Must be between 1 and 65535.
     */
    httpsPort?: pulumi.Input<number>;
    /**
     * Priority to use for load balancing. Higher priorities will not be used for load balancing if any lower priority backend is healthy.
     */
    priority?: pulumi.Input<number>;
    /**
     * The Alias of the Private Link resource. Populating this optional field indicates that this backend is 'Private'
     */
    privateLinkAlias?: pulumi.Input<string>;
    /**
     * A custom message to be included in the approval request to connect to the Private Link
     */
    privateLinkApprovalMessage?: pulumi.Input<string>;
    /**
     * The location of the Private Link resource. Required only if 'privateLinkResourceId' is populated
     */
    privateLinkLocation?: pulumi.Input<string>;
    /**
     * The Resource Id of the Private Link resource. Populating this optional field indicates that this backend is 'Private'
     */
    privateLinkResourceId?: pulumi.Input<string>;
    /**
     * Weight of this endpoint for load balancing purposes.
     */
    weight?: pulumi.Input<number>;
}

/**
 * A backend pool is a collection of backends that can be routed to.
 */
export interface BackendPoolArgs {
    /**
     * The set of backends for this pool
     */
    backends?: pulumi.Input<pulumi.Input<BackendArgs>[]>;
    /**
     * L7 health probe settings for a backend pool
     */
    healthProbeSettings?: pulumi.Input<SubResourceArgs>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Load balancing settings for a backend pool
     */
    loadBalancingSettings?: pulumi.Input<SubResourceArgs>;
    /**
     * Resource name.
     */
    name?: pulumi.Input<string>;
}

/**
 * Settings that apply to all backend pools.
 */
export interface BackendPoolsSettingsArgs {
    /**
     * Whether to enforce certificate name check on HTTPS requests to all backend pools. No effect on non-HTTPS requests.
     */
    enforceCertificateNameCheck?: pulumi.Input<string | enums.EnforceCertificateNameCheckEnabledState>;
    /**
     * Send and receive timeout on forwarding request to the backend. When timeout is reached, the request fails and returns.
     */
    sendRecvTimeoutSeconds?: pulumi.Input<number>;
}
/**
 * backendPoolsSettingsArgsProvideDefaults sets the appropriate defaults for BackendPoolsSettingsArgs
 */
export function backendPoolsSettingsArgsProvideDefaults(val: BackendPoolsSettingsArgs): BackendPoolsSettingsArgs {
    return {
        ...val,
        enforceCertificateNameCheck: (val.enforceCertificateNameCheck) ?? "Enabled",
    };
}

/**
 * Caching settings for a caching-type route. To disable caching, do not provide a cacheConfiguration object.
 */
export interface CacheConfigurationArgs {
    /**
     * The duration for which the content needs to be cached. Allowed format is in ISO 8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations). HTTP requires the value to be no more than a year
     */
    cacheDuration?: pulumi.Input<string>;
    /**
     * Whether to use dynamic compression for cached content
     */
    dynamicCompression?: pulumi.Input<string | enums.DynamicCompressionEnabled>;
    /**
     * Treatment of URL query terms when forming the cache key.
     */
    queryParameterStripDirective?: pulumi.Input<string | enums.FrontDoorQuery>;
    /**
     * query parameters to include or exclude (comma separated).
     */
    queryParameters?: pulumi.Input<string>;
}

/**
 * Defines contents of a web application rule
 */
export interface CustomRuleArgs {
    /**
     * Describes what action to be applied when rule matches.
     */
    action: pulumi.Input<string | enums.ActionType>;
    /**
     * Describes if the custom rule is in enabled or disabled state. Defaults to Enabled if not specified.
     */
    enabledState?: pulumi.Input<string | enums.CustomRuleEnabledState>;
    /**
     * Describes the list of variables to group the rate limit requests
     */
    groupBy?: pulumi.Input<pulumi.Input<GroupByVariableArgs>[]>;
    /**
     * List of match conditions.
     */
    matchConditions: pulumi.Input<pulumi.Input<MatchConditionArgs>[]>;
    /**
     * Describes the name of the rule.
     */
    name?: pulumi.Input<string>;
    /**
     * Describes priority of the rule. Rules with a lower value will be evaluated before rules with a higher value.
     */
    priority: pulumi.Input<number>;
    /**
     * Time window for resetting the rate limit count. Default is 1 minute.
     */
    rateLimitDurationInMinutes?: pulumi.Input<number>;
    /**
     * Number of allowed requests per client within the time window.
     */
    rateLimitThreshold?: pulumi.Input<number>;
    /**
     * Describes type of rule.
     */
    ruleType: pulumi.Input<string | enums.RuleType>;
}

/**
 * Defines contents of custom rules
 */
export interface CustomRuleListArgs {
    /**
     * List of rules
     */
    rules?: pulumi.Input<pulumi.Input<CustomRuleArgs>[]>;
}

/**
 * Defines the endpoint properties
 */
export interface EndpointArgs {
    /**
     * The endpoint URL
     */
    endpoint?: pulumi.Input<string>;
    /**
     * The name of the endpoint
     */
    name?: pulumi.Input<string>;
}

/**
 * Describes Forwarding Route.
 */
export interface ForwardingConfigurationArgs {
    /**
     * A reference to the BackendPool which this rule routes to.
     */
    backendPool?: pulumi.Input<SubResourceArgs>;
    /**
     * The caching configuration associated with this rule.
     */
    cacheConfiguration?: pulumi.Input<CacheConfigurationArgs>;
    /**
     * A custom path used to rewrite resource paths matched by this rule. Leave empty to use incoming path.
     */
    customForwardingPath?: pulumi.Input<string>;
    /**
     * Protocol this rule will use when forwarding traffic to backends.
     */
    forwardingProtocol?: pulumi.Input<string | enums.FrontDoorForwardingProtocol>;
    /**
     *
     * Expected value is '#Microsoft.Azure.FrontDoor.Models.FrontdoorForwardingConfiguration'.
     */
    odataType: pulumi.Input<"#Microsoft.Azure.FrontDoor.Models.FrontdoorForwardingConfiguration">;
}

/**
 * A frontend endpoint used for routing.
 */
export interface FrontendEndpointArgs {
    /**
     * The host name of the frontendEndpoint. Must be a domain name.
     */
    hostName?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Resource name.
     */
    name?: pulumi.Input<string>;
    /**
     * Whether to allow session affinity on this host. Valid options are 'Enabled' or 'Disabled'
     */
    sessionAffinityEnabledState?: pulumi.Input<string | enums.SessionAffinityEnabledState>;
    /**
     * UNUSED. This field will be ignored. The TTL to use in seconds for session affinity, if applicable.
     */
    sessionAffinityTtlSeconds?: pulumi.Input<number>;
    /**
     * Defines the Web Application Firewall policy for each host (if applicable)
     */
    webApplicationFirewallPolicyLink?: pulumi.Input<FrontendEndpointUpdateParametersWebApplicationFirewallPolicyLinkArgs>;
}

/**
 * Defines the Web Application Firewall policy for each host (if applicable)
 */
export interface FrontendEndpointUpdateParametersWebApplicationFirewallPolicyLinkArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
}

/**
 * Describes the variables available to group the rate limit requests
 */
export interface GroupByVariableArgs {
    /**
     * Describes the supported variable for group by
     */
    variableName: pulumi.Input<string | enums.VariableName>;
}

/**
 * An action that can manipulate an http header.
 */
export interface HeaderActionArgs {
    /**
     * Which type of manipulation to apply to the header.
     */
    headerActionType: pulumi.Input<string | enums.HeaderActionType>;
    /**
     * The name of the header this action will apply to.
     */
    headerName: pulumi.Input<string>;
    /**
     * The value to update the given header name with. This value is not used if the actionType is Delete.
     */
    value?: pulumi.Input<string>;
}

/**
 * Load balancing settings for a backend pool
 */
export interface HealthProbeSettingsModelArgs {
    /**
     * Whether to enable health probes to be made against backends defined under backendPools. Health probes can only be disabled if there is a single enabled backend in single enabled backend pool.
     */
    enabledState?: pulumi.Input<string | enums.HealthProbeEnabled>;
    /**
     * Configures which HTTP method to use to probe the backends defined under backendPools.
     */
    healthProbeMethod?: pulumi.Input<string | enums.FrontDoorHealthProbeMethod>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The number of seconds between health probes.
     */
    intervalInSeconds?: pulumi.Input<number>;
    /**
     * Resource name.
     */
    name?: pulumi.Input<string>;
    /**
     * The path to use for the health probe. Default is /
     */
    path?: pulumi.Input<string>;
    /**
     * Protocol scheme to use for this probe
     */
    protocol?: pulumi.Input<string | enums.FrontDoorProtocol>;
}
/**
 * healthProbeSettingsModelArgsProvideDefaults sets the appropriate defaults for HealthProbeSettingsModelArgs
 */
export function healthProbeSettingsModelArgsProvideDefaults(val: HealthProbeSettingsModelArgs): HealthProbeSettingsModelArgs {
    return {
        ...val,
        healthProbeMethod: (val.healthProbeMethod) ?? "HEAD",
    };
}

/**
 * Load balancing settings for a backend pool
 */
export interface LoadBalancingSettingsModelArgs {
    /**
     * The additional latency in milliseconds for probes to fall into the lowest latency bucket
     */
    additionalLatencyMilliseconds?: pulumi.Input<number>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Resource name.
     */
    name?: pulumi.Input<string>;
    /**
     * The number of samples to consider for load balancing decisions
     */
    sampleSize?: pulumi.Input<number>;
    /**
     * The number of samples within the sample period that must succeed
     */
    successfulSamplesRequired?: pulumi.Input<number>;
}

/**
 * Exclude variables from managed rule evaluation.
 */
export interface ManagedRuleExclusionArgs {
    /**
     * The variable type to be excluded.
     */
    matchVariable: pulumi.Input<string | enums.ManagedRuleExclusionMatchVariable>;
    /**
     * Selector value for which elements in the collection this exclusion applies to.
     */
    selector: pulumi.Input<string>;
    /**
     * Comparison operator to apply to the selector when specifying which elements in the collection this exclusion applies to.
     */
    selectorMatchOperator: pulumi.Input<string | enums.ManagedRuleExclusionSelectorMatchOperator>;
}

/**
 * Defines a managed rule group override setting.
 */
export interface ManagedRuleGroupOverrideArgs {
    /**
     * Describes the exclusions that are applied to all rules in the group.
     */
    exclusions?: pulumi.Input<pulumi.Input<ManagedRuleExclusionArgs>[]>;
    /**
     * Describes the managed rule group to override.
     */
    ruleGroupName: pulumi.Input<string>;
    /**
     * List of rules that will be disabled. If none specified, all rules in the group will be disabled.
     */
    rules?: pulumi.Input<pulumi.Input<ManagedRuleOverrideArgs>[]>;
}

/**
 * Defines a managed rule group override setting.
 */
export interface ManagedRuleOverrideArgs {
    /**
     * Describes the override action to be applied when rule matches.
     */
    action?: pulumi.Input<string | enums.ActionType>;
    /**
     * Describes if the managed rule is in enabled or disabled state. Defaults to Disabled if not specified.
     */
    enabledState?: pulumi.Input<string | enums.ManagedRuleEnabledState>;
    /**
     * Describes the exclusions that are applied to this specific rule.
     */
    exclusions?: pulumi.Input<pulumi.Input<ManagedRuleExclusionArgs>[]>;
    /**
     * Identifier for the managed rule.
     */
    ruleId: pulumi.Input<string>;
}

/**
 * Defines a managed rule set.
 */
export interface ManagedRuleSetArgs {
    /**
     * Describes the exclusions that are applied to all rules in the set.
     */
    exclusions?: pulumi.Input<pulumi.Input<ManagedRuleExclusionArgs>[]>;
    /**
     * Defines the rule group overrides to apply to the rule set.
     */
    ruleGroupOverrides?: pulumi.Input<pulumi.Input<ManagedRuleGroupOverrideArgs>[]>;
    /**
     * Defines the rule set action.
     */
    ruleSetAction?: pulumi.Input<string | enums.ManagedRuleSetActionType>;
    /**
     * Defines the rule set type to use.
     */
    ruleSetType: pulumi.Input<string>;
    /**
     * Defines the version of the rule set to use.
     */
    ruleSetVersion: pulumi.Input<string>;
}

/**
 * Defines the list of managed rule sets for the policy.
 */
export interface ManagedRuleSetListArgs {
    /**
     * List of rule sets.
     */
    managedRuleSets?: pulumi.Input<pulumi.Input<ManagedRuleSetArgs>[]>;
}

/**
 * Define a match condition.
 */
export interface MatchConditionArgs {
    /**
     * List of possible match values.
     */
    matchValue: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Request variable to compare with.
     */
    matchVariable: pulumi.Input<string | enums.MatchVariable>;
    /**
     * Describes if the result of this condition should be negated.
     */
    negateCondition?: pulumi.Input<boolean>;
    /**
     * Comparison type to use for matching with the variable value.
     */
    operator: pulumi.Input<string | enums.Operator>;
    /**
     * Match against a specific key from the QueryString, PostArgs, RequestHeader or Cookies variables. Default is null.
     */
    selector?: pulumi.Input<string>;
    /**
     * List of transforms.
     */
    transforms?: pulumi.Input<pulumi.Input<string | enums.TransformType>[]>;
}

/**
 * Defines top-level WebApplicationFirewallPolicy configuration settings.
 */
export interface PolicySettingsArgs {
    /**
     * If the action type is block, customer can override the response body. The body must be specified in base64 encoding.
     */
    customBlockResponseBody?: pulumi.Input<string>;
    /**
     * If the action type is block, customer can override the response status code.
     */
    customBlockResponseStatusCode?: pulumi.Input<number>;
    /**
     * Describes if the policy is in enabled or disabled state. Defaults to Enabled if not specified.
     */
    enabledState?: pulumi.Input<string | enums.PolicyEnabledState>;
    /**
     * Defines the JavaScript challenge cookie validity lifetime in minutes. This setting is only applicable to Premium_AzureFrontDoor. Value must be an integer between 5 and 1440 with the default value being 30.
     */
    javascriptChallengeExpirationInMinutes?: pulumi.Input<number>;
    /**
     * Describes if it is in detection mode or prevention mode at policy level.
     */
    mode?: pulumi.Input<string | enums.PolicyMode>;
    /**
     * If action type is redirect, this field represents redirect URL for the client.
     */
    redirectUrl?: pulumi.Input<string>;
    /**
     * Describes if policy managed rules will inspect the request body content.
     */
    requestBodyCheck?: pulumi.Input<string | enums.PolicyRequestBodyCheck>;
    /**
     * List of log scrubbing rules applied to the Web Application Firewall logs.
     */
    scrubbingRules?: pulumi.Input<pulumi.Input<WebApplicationFirewallScrubbingRulesArgs>[]>;
    /**
     * State of the log scrubbing config. Default value is Enabled.
     */
    state?: pulumi.Input<string | enums.WebApplicationFirewallScrubbingState>;
}

/**
 * Describes Redirect Route.
 */
export interface RedirectConfigurationArgs {
    /**
     * Fragment to add to the redirect URL. Fragment is the part of the URL that comes after #. Do not include the #.
     */
    customFragment?: pulumi.Input<string>;
    /**
     * Host to redirect. Leave empty to use the incoming host as the destination host.
     */
    customHost?: pulumi.Input<string>;
    /**
     * The full path to redirect. Path cannot be empty and must start with /. Leave empty to use the incoming path as destination path.
     */
    customPath?: pulumi.Input<string>;
    /**
     * The set of query strings to be placed in the redirect URL. Setting this value would replace any existing query string; leave empty to preserve the incoming query string. Query string must be in <key>=<value> format. The first ? and & will be added automatically so do not include them in the front, but do separate multiple query strings with &.
     */
    customQueryString?: pulumi.Input<string>;
    /**
     *
     * Expected value is '#Microsoft.Azure.FrontDoor.Models.FrontdoorRedirectConfiguration'.
     */
    odataType: pulumi.Input<"#Microsoft.Azure.FrontDoor.Models.FrontdoorRedirectConfiguration">;
    /**
     * The protocol of the destination to where the traffic is redirected
     */
    redirectProtocol?: pulumi.Input<string | enums.FrontDoorRedirectProtocol>;
    /**
     * The redirect type the rule will use when redirecting traffic.
     */
    redirectType?: pulumi.Input<string | enums.FrontDoorRedirectType>;
}

/**
 * A routing rule represents a specification for traffic to treat and where to send it, along with health probe information.
 */
export interface RoutingRuleArgs {
    /**
     * Protocol schemes to match for this rule
     */
    acceptedProtocols?: pulumi.Input<pulumi.Input<string | enums.FrontDoorProtocol>[]>;
    /**
     * Whether to enable use of this rule. Permitted values are 'Enabled' or 'Disabled'
     */
    enabledState?: pulumi.Input<string | enums.RoutingRuleEnabledState>;
    /**
     * Frontend endpoints associated with this rule
     */
    frontendEndpoints?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Resource name.
     */
    name?: pulumi.Input<string>;
    /**
     * The route patterns of the rule.
     */
    patternsToMatch?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A reference to the routing configuration.
     */
    routeConfiguration?: pulumi.Input<ForwardingConfigurationArgs | RedirectConfigurationArgs>;
    /**
     * A reference to a specific Rules Engine Configuration to apply to this route.
     */
    rulesEngine?: pulumi.Input<SubResourceArgs>;
    /**
     * Defines the Web Application Firewall policy for each routing rule (if applicable)
     */
    webApplicationFirewallPolicyLink?: pulumi.Input<RoutingRuleUpdateParametersWebApplicationFirewallPolicyLinkArgs>;
}

/**
 * Defines the Web Application Firewall policy for each routing rule (if applicable)
 */
export interface RoutingRuleUpdateParametersWebApplicationFirewallPolicyLinkArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
}

/**
 * One or more actions that will execute, modifying the request and/or response.
 */
export interface RulesEngineActionArgs {
    /**
     * A list of header actions to apply from the request from AFD to the origin.
     */
    requestHeaderActions?: pulumi.Input<pulumi.Input<HeaderActionArgs>[]>;
    /**
     * A list of header actions to apply from the response from AFD to the client.
     */
    responseHeaderActions?: pulumi.Input<pulumi.Input<HeaderActionArgs>[]>;
    /**
     * Override the route configuration.
     */
    routeConfigurationOverride?: pulumi.Input<ForwardingConfigurationArgs | RedirectConfigurationArgs>;
}

/**
 * Define a match condition
 */
export interface RulesEngineMatchConditionArgs {
    /**
     * Describes if this is negate condition or not
     */
    negateCondition?: pulumi.Input<boolean>;
    /**
     * Match values to match against. The operator will apply to each value in here with OR semantics. If any of them match the variable with the given operator this match condition is considered a match.
     */
    rulesEngineMatchValue: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Match Variable
     */
    rulesEngineMatchVariable: pulumi.Input<string | enums.RulesEngineMatchVariable>;
    /**
     * Describes operator to apply to the match condition.
     */
    rulesEngineOperator: pulumi.Input<string | enums.RulesEngineOperator>;
    /**
     * Name of selector in RequestHeader or RequestBody to be matched
     */
    selector?: pulumi.Input<string>;
    /**
     * List of transforms
     */
    transforms?: pulumi.Input<pulumi.Input<string | enums.Transform>[]>;
}

/**
 * Contains a list of match conditions, and an action on how to modify the request/response. If multiple rules match, the actions from one rule that conflict with a previous rule overwrite for a singular action, or append in the case of headers manipulation.
 */
export interface RulesEngineRuleArgs {
    /**
     * Actions to perform on the request and response if all of the match conditions are met.
     */
    action: pulumi.Input<RulesEngineActionArgs>;
    /**
     * A list of match conditions that must meet in order for the actions of this rule to run. Having no match conditions means the actions will always run.
     */
    matchConditions?: pulumi.Input<pulumi.Input<RulesEngineMatchConditionArgs>[]>;
    /**
     * If this rule is a match should the rules engine continue running the remaining rules or stop. If not present, defaults to Continue.
     */
    matchProcessingBehavior?: pulumi.Input<string | enums.MatchProcessingBehavior>;
    /**
     * A name to refer to this specific rule.
     */
    name: pulumi.Input<string>;
    /**
     * A priority assigned to this rule. 
     */
    priority: pulumi.Input<number>;
}

/**
 * The pricing tier of the web application firewall policy.
 */
export interface SkuArgs {
    /**
     * Name of the pricing tier.
     */
    name?: pulumi.Input<string | enums.SkuName>;
}

/**
 * Reference to another subresource.
 */
export interface SubResourceArgs {
    /**
     * Sub-resource ID. Both absolute resource ID and a relative resource ID are accepted.
     * An absolute ID starts with /subscriptions/ and contains the entire ID of the parent resource and the ID of the sub-resource in the end.
     * A relative ID replaces the ID of the parent resource with a token '$self', followed by the sub-resource ID itself.
     * Example of a relative ID: $self/frontEndConfigurations/my-frontend.
     */
    id?: pulumi.Input<string>;
}

/**
 * Defines the contents of the log scrubbing rules.
 */
export interface WebApplicationFirewallScrubbingRulesArgs {
    /**
     * The variable to be scrubbed from the logs.
     */
    matchVariable: pulumi.Input<string | enums.ScrubbingRuleEntryMatchVariable>;
    /**
     * When matchVariable is a collection, operator used to specify which elements in the collection this rule applies to.
     */
    selector?: pulumi.Input<string>;
    /**
     * When matchVariable is a collection, operate on the selector to specify which elements in the collection this rule applies to.
     */
    selectorMatchOperator: pulumi.Input<string | enums.ScrubbingRuleEntryMatchOperator>;
    /**
     * Defines the state of a log scrubbing rule. Default value is enabled.
     */
    state?: pulumi.Input<string | enums.ScrubbingRuleEntryState>;
}
