import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * A backend pool is a collection of backends that can be routed to.
 */
export interface BackendPoolResponse {
    /**
     * The set of backends for this pool
     */
    backends?: BackendResponse[];
    /**
     * L7 health probe settings for a backend pool
     */
    healthProbeSettings?: SubResourceResponse;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Load balancing settings for a backend pool
     */
    loadBalancingSettings?: SubResourceResponse;
    /**
     * Resource name.
     */
    name?: string;
    /**
     * Resource status.
     */
    resourceState: string;
    /**
     * Resource type.
     */
    type: string;
}

/**
 * Settings that apply to all backend pools.
 */
export interface BackendPoolsSettingsResponse {
    /**
     * Whether to enforce certificate name check on HTTPS requests to all backend pools. No effect on non-HTTPS requests.
     */
    enforceCertificateNameCheck?: string;
    /**
     * Send and receive timeout on forwarding request to the backend. When timeout is reached, the request fails and returns.
     */
    sendRecvTimeoutSeconds?: number;
}
/**
 * backendPoolsSettingsResponseProvideDefaults sets the appropriate defaults for BackendPoolsSettingsResponse
 */
export function backendPoolsSettingsResponseProvideDefaults(val: BackendPoolsSettingsResponse): BackendPoolsSettingsResponse {
    return {
        ...val,
        enforceCertificateNameCheck: (val.enforceCertificateNameCheck) ?? "Enabled",
    };
}

/**
 * Backend address of a frontDoor load balancer.
 */
export interface BackendResponse {
    /**
     * Location of the backend (IP address or FQDN)
     */
    address?: string;
    /**
     * The value to use as the host header sent to the backend. If blank or unspecified, this defaults to the incoming host.
     */
    backendHostHeader?: string;
    /**
     * Whether to enable use of this backend. Permitted values are 'Enabled' or 'Disabled'
     */
    enabledState?: string;
    /**
     * The HTTP TCP port number. Must be between 1 and 65535.
     */
    httpPort?: number;
    /**
     * The HTTPS TCP port number. Must be between 1 and 65535.
     */
    httpsPort?: number;
    /**
     * Priority to use for load balancing. Higher priorities will not be used for load balancing if any lower priority backend is healthy.
     */
    priority?: number;
    /**
     * The Approval status for the connection to the Private Link
     */
    privateEndpointStatus: string;
    /**
     * The Alias of the Private Link resource. Populating this optional field indicates that this backend is 'Private'
     */
    privateLinkAlias?: string;
    /**
     * A custom message to be included in the approval request to connect to the Private Link
     */
    privateLinkApprovalMessage?: string;
    /**
     * The location of the Private Link resource. Required only if 'privateLinkResourceId' is populated
     */
    privateLinkLocation?: string;
    /**
     * The Resource Id of the Private Link resource. Populating this optional field indicates that this backend is 'Private'
     */
    privateLinkResourceId?: string;
    /**
     * Weight of this endpoint for load balancing purposes.
     */
    weight?: number;
}

/**
 * Caching settings for a caching-type route. To disable caching, do not provide a cacheConfiguration object.
 */
export interface CacheConfigurationResponse {
    /**
     * The duration for which the content needs to be cached. Allowed format is in ISO 8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations). HTTP requires the value to be no more than a year
     */
    cacheDuration?: string;
    /**
     * Whether to use dynamic compression for cached content
     */
    dynamicCompression?: string;
    /**
     * Treatment of URL query terms when forming the cache key.
     */
    queryParameterStripDirective?: string;
    /**
     * query parameters to include or exclude (comma separated).
     */
    queryParameters?: string;
}

/**
 * Https settings for a domain
 */
export interface CustomHttpsConfigurationResponse {
    /**
     * Defines the source of the SSL certificate
     */
    certificateSource: string;
    /**
     * Defines the type of the certificate used for secure connections to a frontendEndpoint
     */
    certificateType?: string;
    /**
     * The minimum TLS version required from the clients to establish an SSL handshake with Front Door.
     */
    minimumTlsVersion: string;
    /**
     * Defines the TLS extension protocol that is used for secure delivery
     */
    protocolType: string;
    /**
     * The name of the Key Vault secret representing the full certificate PFX
     */
    secretName?: string;
    /**
     * The version of the Key Vault secret representing the full certificate PFX
     */
    secretVersion?: string;
    /**
     * The Key Vault containing the SSL certificate
     */
    vault?: KeyVaultCertificateSourceParametersResponseVault;
}

/**
 * Defines contents of custom rules
 */
export interface CustomRuleListResponse {
    /**
     * List of rules
     */
    rules?: CustomRuleResponse[];
}

/**
 * Defines contents of a web application rule
 */
export interface CustomRuleResponse {
    /**
     * Describes what action to be applied when rule matches.
     */
    action: string;
    /**
     * Describes if the custom rule is in enabled or disabled state. Defaults to Enabled if not specified.
     */
    enabledState?: string;
    /**
     * Describes the list of variables to group the rate limit requests
     */
    groupBy?: GroupByVariableResponse[];
    /**
     * List of match conditions.
     */
    matchConditions: MatchConditionResponse[];
    /**
     * Describes the name of the rule.
     */
    name?: string;
    /**
     * Describes priority of the rule. Rules with a lower value will be evaluated before rules with a higher value.
     */
    priority: number;
    /**
     * Time window for resetting the rate limit count. Default is 1 minute.
     */
    rateLimitDurationInMinutes?: number;
    /**
     * Number of allowed requests per client within the time window.
     */
    rateLimitThreshold?: number;
    /**
     * Describes type of rule.
     */
    ruleType: string;
}

/**
 * Defines the endpoint properties
 */
export interface EndpointResponse {
    /**
     * The endpoint URL
     */
    endpoint?: string;
    /**
     * The name of the endpoint
     */
    name?: string;
}

/**
 * Describes Forwarding Route.
 */
export interface ForwardingConfigurationResponse {
    /**
     * A reference to the BackendPool which this rule routes to.
     */
    backendPool?: SubResourceResponse;
    /**
     * The caching configuration associated with this rule.
     */
    cacheConfiguration?: CacheConfigurationResponse;
    /**
     * A custom path used to rewrite resource paths matched by this rule. Leave empty to use incoming path.
     */
    customForwardingPath?: string;
    /**
     * Protocol this rule will use when forwarding traffic to backends.
     */
    forwardingProtocol?: string;
    /**
     *
     * Expected value is '#Microsoft.Azure.FrontDoor.Models.FrontdoorForwardingConfiguration'.
     */
    odataType: "#Microsoft.Azure.FrontDoor.Models.FrontdoorForwardingConfiguration";
}

/**
 * Defines the Resource ID for a Frontend Endpoint.
 */
export interface FrontendEndpointLinkResponse {
    /**
     * Resource ID.
     */
    id?: string;
}

/**
 * A frontend endpoint used for routing.
 */
export interface FrontendEndpointResponse {
    /**
     * The configuration specifying how to enable HTTPS
     */
    customHttpsConfiguration: CustomHttpsConfigurationResponse;
    /**
     * Provisioning status of Custom Https of the frontendEndpoint.
     */
    customHttpsProvisioningState: string;
    /**
     * Provisioning substate shows the progress of custom HTTPS enabling/disabling process step by step.
     */
    customHttpsProvisioningSubstate: string;
    /**
     * The host name of the frontendEndpoint. Must be a domain name.
     */
    hostName?: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Resource name.
     */
    name?: string;
    /**
     * Resource status.
     */
    resourceState: string;
    /**
     * Whether to allow session affinity on this host. Valid options are 'Enabled' or 'Disabled'
     */
    sessionAffinityEnabledState?: string;
    /**
     * UNUSED. This field will be ignored. The TTL to use in seconds for session affinity, if applicable.
     */
    sessionAffinityTtlSeconds?: number;
    /**
     * Resource type.
     */
    type: string;
    /**
     * Defines the Web Application Firewall policy for each host (if applicable)
     */
    webApplicationFirewallPolicyLink?: FrontendEndpointUpdateParametersResponseWebApplicationFirewallPolicyLink;
}

/**
 * Defines the Web Application Firewall policy for each host (if applicable)
 */
export interface FrontendEndpointUpdateParametersResponseWebApplicationFirewallPolicyLink {
    /**
     * Resource ID.
     */
    id?: string;
}

/**
 * Describes the variables available to group the rate limit requests
 */
export interface GroupByVariableResponse {
    /**
     * Describes the supported variable for group by
     */
    variableName: string;
}

/**
 * An action that can manipulate an http header.
 */
export interface HeaderActionResponse {
    /**
     * Which type of manipulation to apply to the header.
     */
    headerActionType: string;
    /**
     * The name of the header this action will apply to.
     */
    headerName: string;
    /**
     * The value to update the given header name with. This value is not used if the actionType is Delete.
     */
    value?: string;
}

/**
 * Load balancing settings for a backend pool
 */
export interface HealthProbeSettingsModelResponse {
    /**
     * Whether to enable health probes to be made against backends defined under backendPools. Health probes can only be disabled if there is a single enabled backend in single enabled backend pool.
     */
    enabledState?: string;
    /**
     * Configures which HTTP method to use to probe the backends defined under backendPools.
     */
    healthProbeMethod?: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The number of seconds between health probes.
     */
    intervalInSeconds?: number;
    /**
     * Resource name.
     */
    name?: string;
    /**
     * The path to use for the health probe. Default is /
     */
    path?: string;
    /**
     * Protocol scheme to use for this probe
     */
    protocol?: string;
    /**
     * Resource status.
     */
    resourceState: string;
    /**
     * Resource type.
     */
    type: string;
}
/**
 * healthProbeSettingsModelResponseProvideDefaults sets the appropriate defaults for HealthProbeSettingsModelResponse
 */
export function healthProbeSettingsModelResponseProvideDefaults(val: HealthProbeSettingsModelResponse): HealthProbeSettingsModelResponse {
    return {
        ...val,
        healthProbeMethod: (val.healthProbeMethod) ?? "HEAD",
    };
}

/**
 * The Key Vault containing the SSL certificate
 */
export interface KeyVaultCertificateSourceParametersResponseVault {
    /**
     * Resource ID.
     */
    id?: string;
}

/**
 * Load balancing settings for a backend pool
 */
export interface LoadBalancingSettingsModelResponse {
    /**
     * The additional latency in milliseconds for probes to fall into the lowest latency bucket
     */
    additionalLatencyMilliseconds?: number;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Resource name.
     */
    name?: string;
    /**
     * Resource status.
     */
    resourceState: string;
    /**
     * The number of samples to consider for load balancing decisions
     */
    sampleSize?: number;
    /**
     * The number of samples within the sample period that must succeed
     */
    successfulSamplesRequired?: number;
    /**
     * Resource type.
     */
    type: string;
}

/**
 * Exclude variables from managed rule evaluation.
 */
export interface ManagedRuleExclusionResponse {
    /**
     * The variable type to be excluded.
     */
    matchVariable: string;
    /**
     * Selector value for which elements in the collection this exclusion applies to.
     */
    selector: string;
    /**
     * Comparison operator to apply to the selector when specifying which elements in the collection this exclusion applies to.
     */
    selectorMatchOperator: string;
}

/**
 * Defines a managed rule group override setting.
 */
export interface ManagedRuleGroupOverrideResponse {
    /**
     * Describes the exclusions that are applied to all rules in the group.
     */
    exclusions?: ManagedRuleExclusionResponse[];
    /**
     * Describes the managed rule group to override.
     */
    ruleGroupName: string;
    /**
     * List of rules that will be disabled. If none specified, all rules in the group will be disabled.
     */
    rules?: ManagedRuleOverrideResponse[];
}

/**
 * Defines a managed rule group override setting.
 */
export interface ManagedRuleOverrideResponse {
    /**
     * Describes the override action to be applied when rule matches.
     */
    action?: string;
    /**
     * Describes if the managed rule is in enabled or disabled state. Defaults to Disabled if not specified.
     */
    enabledState?: string;
    /**
     * Describes the exclusions that are applied to this specific rule.
     */
    exclusions?: ManagedRuleExclusionResponse[];
    /**
     * Identifier for the managed rule.
     */
    ruleId: string;
}

/**
 * Defines the list of managed rule sets for the policy.
 */
export interface ManagedRuleSetListResponse {
    /**
     * List of rule sets.
     */
    managedRuleSets?: ManagedRuleSetResponse[];
}

/**
 * Defines a managed rule set.
 */
export interface ManagedRuleSetResponse {
    /**
     * Describes the exclusions that are applied to all rules in the set.
     */
    exclusions?: ManagedRuleExclusionResponse[];
    /**
     * Defines the rule group overrides to apply to the rule set.
     */
    ruleGroupOverrides?: ManagedRuleGroupOverrideResponse[];
    /**
     * Defines the rule set action.
     */
    ruleSetAction?: string;
    /**
     * Defines the rule set type to use.
     */
    ruleSetType: string;
    /**
     * Defines the version of the rule set to use.
     */
    ruleSetVersion: string;
}

/**
 * Define a match condition.
 */
export interface MatchConditionResponse {
    /**
     * List of possible match values.
     */
    matchValue: string[];
    /**
     * Request variable to compare with.
     */
    matchVariable: string;
    /**
     * Describes if the result of this condition should be negated.
     */
    negateCondition?: boolean;
    /**
     * Comparison type to use for matching with the variable value.
     */
    operator: string;
    /**
     * Match against a specific key from the QueryString, PostArgs, RequestHeader or Cookies variables. Default is null.
     */
    selector?: string;
    /**
     * List of transforms.
     */
    transforms?: string[];
}

/**
 * Defines top-level WebApplicationFirewallPolicy configuration settings.
 */
export interface PolicySettingsResponse {
    /**
     * If the action type is block, customer can override the response body. The body must be specified in base64 encoding.
     */
    customBlockResponseBody?: string;
    /**
     * If the action type is block, customer can override the response status code.
     */
    customBlockResponseStatusCode?: number;
    /**
     * Describes if the policy is in enabled or disabled state. Defaults to Enabled if not specified.
     */
    enabledState?: string;
    /**
     * Defines the JavaScript challenge cookie validity lifetime in minutes. This setting is only applicable to Premium_AzureFrontDoor. Value must be an integer between 5 and 1440 with the default value being 30.
     */
    javascriptChallengeExpirationInMinutes?: number;
    /**
     * Describes if it is in detection mode or prevention mode at policy level.
     */
    mode?: string;
    /**
     * If action type is redirect, this field represents redirect URL for the client.
     */
    redirectUrl?: string;
    /**
     * Describes if policy managed rules will inspect the request body content.
     */
    requestBodyCheck?: string;
    /**
     * List of log scrubbing rules applied to the Web Application Firewall logs.
     */
    scrubbingRules?: WebApplicationFirewallScrubbingRulesResponse[];
    /**
     * State of the log scrubbing config. Default value is Enabled.
     */
    state?: string;
}

/**
 * Describes Redirect Route.
 */
export interface RedirectConfigurationResponse {
    /**
     * Fragment to add to the redirect URL. Fragment is the part of the URL that comes after #. Do not include the #.
     */
    customFragment?: string;
    /**
     * Host to redirect. Leave empty to use the incoming host as the destination host.
     */
    customHost?: string;
    /**
     * The full path to redirect. Path cannot be empty and must start with /. Leave empty to use the incoming path as destination path.
     */
    customPath?: string;
    /**
     * The set of query strings to be placed in the redirect URL. Setting this value would replace any existing query string; leave empty to preserve the incoming query string. Query string must be in <key>=<value> format. The first ? and & will be added automatically so do not include them in the front, but do separate multiple query strings with &.
     */
    customQueryString?: string;
    /**
     *
     * Expected value is '#Microsoft.Azure.FrontDoor.Models.FrontdoorRedirectConfiguration'.
     */
    odataType: "#Microsoft.Azure.FrontDoor.Models.FrontdoorRedirectConfiguration";
    /**
     * The protocol of the destination to where the traffic is redirected
     */
    redirectProtocol?: string;
    /**
     * The redirect type the rule will use when redirecting traffic.
     */
    redirectType?: string;
}

/**
 * Defines the Resource ID for a Routing Rule.
 */
export interface RoutingRuleLinkResponse {
    /**
     * Resource ID.
     */
    id?: string;
}

/**
 * A routing rule represents a specification for traffic to treat and where to send it, along with health probe information.
 */
export interface RoutingRuleResponse {
    /**
     * Protocol schemes to match for this rule
     */
    acceptedProtocols?: string[];
    /**
     * Whether to enable use of this rule. Permitted values are 'Enabled' or 'Disabled'
     */
    enabledState?: string;
    /**
     * Frontend endpoints associated with this rule
     */
    frontendEndpoints?: SubResourceResponse[];
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Resource name.
     */
    name?: string;
    /**
     * The route patterns of the rule.
     */
    patternsToMatch?: string[];
    /**
     * Resource status.
     */
    resourceState: string;
    /**
     * A reference to the routing configuration.
     */
    routeConfiguration?: ForwardingConfigurationResponse | RedirectConfigurationResponse;
    /**
     * A reference to a specific Rules Engine Configuration to apply to this route.
     */
    rulesEngine?: SubResourceResponse;
    /**
     * Resource type.
     */
    type: string;
    /**
     * Defines the Web Application Firewall policy for each routing rule (if applicable)
     */
    webApplicationFirewallPolicyLink?: RoutingRuleUpdateParametersResponseWebApplicationFirewallPolicyLink;
}

/**
 * Defines the Web Application Firewall policy for each routing rule (if applicable)
 */
export interface RoutingRuleUpdateParametersResponseWebApplicationFirewallPolicyLink {
    /**
     * Resource ID.
     */
    id?: string;
}

/**
 * One or more actions that will execute, modifying the request and/or response.
 */
export interface RulesEngineActionResponse {
    /**
     * A list of header actions to apply from the request from AFD to the origin.
     */
    requestHeaderActions?: HeaderActionResponse[];
    /**
     * A list of header actions to apply from the response from AFD to the client.
     */
    responseHeaderActions?: HeaderActionResponse[];
    /**
     * Override the route configuration.
     */
    routeConfigurationOverride?: ForwardingConfigurationResponse | RedirectConfigurationResponse;
}

/**
 * Define a match condition
 */
export interface RulesEngineMatchConditionResponse {
    /**
     * Describes if this is negate condition or not
     */
    negateCondition?: boolean;
    /**
     * Match values to match against. The operator will apply to each value in here with OR semantics. If any of them match the variable with the given operator this match condition is considered a match.
     */
    rulesEngineMatchValue: string[];
    /**
     * Match Variable
     */
    rulesEngineMatchVariable: string;
    /**
     * Describes operator to apply to the match condition.
     */
    rulesEngineOperator: string;
    /**
     * Name of selector in RequestHeader or RequestBody to be matched
     */
    selector?: string;
    /**
     * List of transforms
     */
    transforms?: string[];
}

/**
 * A rules engine configuration containing a list of rules that will run to modify the runtime behavior of the request and response.
 */
export interface RulesEngineResponse {
    /**
     * Resource ID.
     */
    id: string;
    /**
     * Resource name.
     */
    name: string;
    /**
     * Resource status.
     */
    resourceState: string;
    /**
     * A list of rules that define a particular Rules Engine Configuration.
     */
    rules?: RulesEngineRuleResponse[];
    /**
     * Resource type.
     */
    type: string;
}

/**
 * Contains a list of match conditions, and an action on how to modify the request/response. If multiple rules match, the actions from one rule that conflict with a previous rule overwrite for a singular action, or append in the case of headers manipulation.
 */
export interface RulesEngineRuleResponse {
    /**
     * Actions to perform on the request and response if all of the match conditions are met.
     */
    action: RulesEngineActionResponse;
    /**
     * A list of match conditions that must meet in order for the actions of this rule to run. Having no match conditions means the actions will always run.
     */
    matchConditions?: RulesEngineMatchConditionResponse[];
    /**
     * If this rule is a match should the rules engine continue running the remaining rules or stop. If not present, defaults to Continue.
     */
    matchProcessingBehavior?: string;
    /**
     * A name to refer to this specific rule.
     */
    name: string;
    /**
     * A priority assigned to this rule. 
     */
    priority: number;
}

/**
 * Defines the Resource ID for a Security Policy.
 */
export interface SecurityPolicyLinkResponse {
    /**
     * Resource ID.
     */
    id?: string;
}

/**
 * The pricing tier of the web application firewall policy.
 */
export interface SkuResponse {
    /**
     * Name of the pricing tier.
     */
    name?: string;
}

/**
 * Reference to another subresource.
 */
export interface SubResourceResponse {
    /**
     * Resource ID.
     */
    id?: string;
}

/**
 * Defines the contents of the log scrubbing rules.
 */
export interface WebApplicationFirewallScrubbingRulesResponse {
    /**
     * The variable to be scrubbed from the logs.
     */
    matchVariable: string;
    /**
     * When matchVariable is a collection, operator used to specify which elements in the collection this rule applies to.
     */
    selector?: string;
    /**
     * When matchVariable is a collection, operate on the selector to specify which elements in the collection this rule applies to.
     */
    selectorMatchOperator: string;
    /**
     * Defines the state of a log scrubbing rule. Default value is enabled.
     */
    state?: string;
}
