import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The JSON object that contains the properties to secure a domain.
 */
export interface AFDDomainHttpsParametersArgs {
    /**
     * Defines the source of the SSL certificate.
     */
    certificateType: pulumi.Input<string | enums.AfdCertificateType>;
    /**
     * TLS protocol version that will be used for Https
     */
    minimumTlsVersion?: pulumi.Input<enums.AfdMinimumTlsVersion>;
    /**
     * Resource reference to the secret. ie. subs/rg/profile/secret
     */
    secret?: pulumi.Input<ResourceReferenceArgs>;
}

/**
 * Reference to another resource along with its state.
 */
export interface ActivatedResourceReferenceArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
}

/**
 * Caching settings for a caching-type route. To disable caching, do not provide a cacheConfiguration object.
 */
export interface AfdRouteCacheConfigurationArgs {
    /**
     * compression settings.
     */
    compressionSettings?: pulumi.Input<CompressionSettingsArgs>;
    /**
     * query parameters to include or exclude (comma separated).
     */
    queryParameters?: pulumi.Input<string>;
    /**
     * Defines how Frontdoor caches requests that include query strings. You can ignore any query strings when caching, ignore specific query strings, cache every request with a unique URL, or cache specific query strings.
     */
    queryStringCachingBehavior?: pulumi.Input<string | enums.AfdQueryStringCachingBehavior>;
}

/**
 * Azure FirstParty Managed Certificate provided by other first party resource providers to enable HTTPS.
 */
export interface AzureFirstPartyManagedCertificateParametersArgs {
    /**
     * The list of SANs.
     */
    subjectAlternativeNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The type of the secret resource.
     * Expected value is 'AzureFirstPartyManagedCertificate'.
     */
    type: pulumi.Input<"AzureFirstPartyManagedCertificate">;
}

/**
 * Caching settings for a caching-type route. To disable caching, do not provide a cacheConfiguration object.
 */
export interface CacheConfigurationArgs {
    /**
     * Caching behavior for the requests
     */
    cacheBehavior?: pulumi.Input<string | enums.RuleCacheBehavior>;
    /**
     * The duration for which the content needs to be cached. Allowed format is [d.]hh:mm:ss
     */
    cacheDuration?: pulumi.Input<string>;
    /**
     * Indicates whether content compression is enabled. If compression is enabled, content will be served as compressed if user requests for a compressed version. Content won't be compressed on AzureFrontDoor when requested content is smaller than 1 byte or larger than 1 MB.
     */
    isCompressionEnabled?: pulumi.Input<string | enums.RuleIsCompressionEnabled>;
    /**
     * query parameters to include or exclude (comma separated).
     */
    queryParameters?: pulumi.Input<string>;
    /**
     * Defines how Frontdoor caches requests that include query strings. You can ignore any query strings when caching, ignore specific query strings, cache every request with a unique URL, or cache specific query strings.
     */
    queryStringCachingBehavior?: pulumi.Input<string | enums.RuleQueryStringCachingBehavior>;
}

/**
 * Defines the parameters for the cache expiration action.
 */
export interface CacheExpirationActionParametersArgs {
    /**
     * Caching behavior for the requests
     */
    cacheBehavior: pulumi.Input<string | enums.CacheBehavior>;
    /**
     * The duration for which the content needs to be cached. Allowed format is [d.]hh:mm:ss
     */
    cacheDuration?: pulumi.Input<string>;
    /**
     * The level at which the content needs to be cached.
     */
    cacheType: pulumi.Input<string | enums.CacheType>;
    typeName: pulumi.Input<string>;
}

/**
 * Defines the parameters for the cache-key query string action.
 */
export interface CacheKeyQueryStringActionParametersArgs {
    /**
     * query parameters to include or exclude (comma separated).
     */
    queryParameters?: pulumi.Input<string>;
    /**
     * Caching behavior for the requests
     */
    queryStringBehavior: pulumi.Input<string | enums.QueryStringBehavior>;
    typeName: pulumi.Input<string>;
}

/**
 * Defines the parameters for ClientPort match conditions
 */
export interface ClientPortMatchConditionParametersArgs {
    /**
     * The match value for the condition of the delivery rule
     */
    matchValues?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Describes if this is negate condition or not
     */
    negateCondition?: pulumi.Input<boolean>;
    /**
     * Describes operator to be matched
     */
    operator: pulumi.Input<string | enums.ClientPortOperator>;
    /**
     * List of transforms
     */
    transforms?: pulumi.Input<pulumi.Input<string | enums.Transform>[]>;
    typeName: pulumi.Input<string>;
}
/**
 * clientPortMatchConditionParametersArgsProvideDefaults sets the appropriate defaults for ClientPortMatchConditionParametersArgs
 */
export function clientPortMatchConditionParametersArgsProvideDefaults(val: ClientPortMatchConditionParametersArgs): ClientPortMatchConditionParametersArgs {
    return {
        ...val,
        negateCondition: (val.negateCondition) ?? false,
    };
}

/**
 * settings for compression.
 */
export interface CompressionSettingsArgs {
    /**
     * List of content types on which compression applies. The value should be a valid MIME type.
     */
    contentTypesToCompress?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Indicates whether content compression is enabled on AzureFrontDoor. Default value is false. If compression is enabled, content will be served as compressed if user requests for a compressed version. Content won't be compressed on AzureFrontDoor when requested content is smaller than 1 byte or larger than 1 MB.
     */
    isCompressionEnabled?: pulumi.Input<boolean>;
}

/**
 * Defines the parameters for Cookies match conditions
 */
export interface CookiesMatchConditionParametersArgs {
    /**
     * The match value for the condition of the delivery rule
     */
    matchValues?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Describes if this is negate condition or not
     */
    negateCondition?: pulumi.Input<boolean>;
    /**
     * Describes operator to be matched
     */
    operator: pulumi.Input<string | enums.CookiesOperator>;
    /**
     * Name of Cookies to be matched
     */
    selector?: pulumi.Input<string>;
    /**
     * List of transforms
     */
    transforms?: pulumi.Input<pulumi.Input<string | enums.Transform>[]>;
    typeName: pulumi.Input<string>;
}
/**
 * cookiesMatchConditionParametersArgsProvideDefaults sets the appropriate defaults for CookiesMatchConditionParametersArgs
 */
export function cookiesMatchConditionParametersArgsProvideDefaults(val: CookiesMatchConditionParametersArgs): CookiesMatchConditionParametersArgs {
    return {
        ...val,
        negateCondition: (val.negateCondition) ?? false,
    };
}

/**
 * Defines the common attributes for a custom rule that can be included in a waf policy
 */
export interface CustomRuleArgs {
    /**
     * Describes what action to be applied when rule matches
     */
    action: pulumi.Input<string | enums.ActionType>;
    /**
     * Describes if the custom rule is in enabled or disabled state. Defaults to Enabled if not specified.
     */
    enabledState?: pulumi.Input<string | enums.CustomRuleEnabledState>;
    /**
     * List of match conditions.
     */
    matchConditions: pulumi.Input<pulumi.Input<MatchConditionArgs>[]>;
    /**
     * Defines the name of the custom rule
     */
    name: pulumi.Input<string>;
    /**
     * Defines in what order this rule be evaluated in the overall list of custom rules
     */
    priority: pulumi.Input<number>;
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
 * Customer Certificate used for https
 */
export interface CustomerCertificateParametersArgs {
    /**
     * Resource reference to the Azure Key Vault certificate. Expected to be in format of /subscriptions/{​​​​​​​​​subscriptionId}​​​​​​​​​/resourceGroups/{​​​​​​​​​resourceGroupName}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​/providers/Microsoft.KeyVault/vaults/{vaultName}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​/secrets/{certificateName}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
     */
    secretSource: pulumi.Input<ResourceReferenceArgs>;
    /**
     * Version of the secret to be used
     */
    secretVersion?: pulumi.Input<string>;
    /**
     * The list of SANs.
     */
    subjectAlternativeNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The type of the secret resource.
     * Expected value is 'CustomerCertificate'.
     */
    type: pulumi.Input<"CustomerCertificate">;
    /**
     * Whether to use the latest version for the certificate
     */
    useLatestVersion?: pulumi.Input<boolean>;
}

/**
 * The main origin of CDN content which is added when creating a CDN endpoint.
 */
export interface DeepCreatedOriginArgs {
    /**
     * Origin is enabled for load balancing or not. By default, origin is always enabled.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The address of the origin. It can be a domain name, IPv4 address, or IPv6 address. This should be unique across all origins in an endpoint.
     */
    hostName: pulumi.Input<string>;
    /**
     * The value of the HTTP port. Must be between 1 and 65535.
     */
    httpPort?: pulumi.Input<number>;
    /**
     * The value of the HTTPS port. Must be between 1 and 65535.
     */
    httpsPort?: pulumi.Input<number>;
    /**
     * Origin name which must be unique within the endpoint. 
     */
    name: pulumi.Input<string>;
    /**
     * The host header value sent to the origin with each request. If you leave this blank, the request hostname determines this value. Azure CDN origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default.
     */
    originHostHeader?: pulumi.Input<string>;
    /**
     * Priority of origin in given origin group for load balancing. Higher priorities will not be used for load balancing if any lower priority origin is healthy.Must be between 1 and 5.
     */
    priority?: pulumi.Input<number>;
    /**
     * The Alias of the Private Link resource. Populating this optional field indicates that this origin is 'Private'
     */
    privateLinkAlias?: pulumi.Input<string>;
    /**
     * A custom message to be included in the approval request to connect to the Private Link.
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
     * Weight of the origin in given origin group for load balancing. Must be between 1 and 1000
     */
    weight?: pulumi.Input<number>;
}

/**
 * The origin group for CDN content which is added when creating a CDN endpoint. Traffic is sent to the origins within the origin group based on origin health.
 */
export interface DeepCreatedOriginGroupArgs {
    /**
     * Health probe settings to the origin that is used to determine the health of the origin.
     */
    healthProbeSettings?: pulumi.Input<HealthProbeParametersArgs>;
    /**
     * Origin group name which must be unique within the endpoint.
     */
    name: pulumi.Input<string>;
    /**
     * The source of the content being delivered via CDN within given origin group.
     */
    origins: pulumi.Input<pulumi.Input<ResourceReferenceArgs>[]>;
    /**
     * The JSON object that contains the properties to determine origin health using real requests/responses.This property is currently not supported.
     */
    responseBasedOriginErrorDetectionSettings?: pulumi.Input<ResponseBasedOriginErrorDetectionParametersArgs>;
    /**
     * Time in minutes to shift the traffic to the endpoint gradually when an unhealthy endpoint comes healthy or a new endpoint is added. Default is 10 mins. This property is currently not supported.
     */
    trafficRestorationTimeToHealedOrNewEndpointsInMinutes?: pulumi.Input<number>;
}

/**
 * A rule that specifies a set of actions and conditions
 */
export interface DeliveryRuleArgs {
    /**
     * A list of actions that are executed when all the conditions of a rule are satisfied.
     */
    actions: pulumi.Input<pulumi.Input<DeliveryRuleCacheExpirationActionArgs | DeliveryRuleCacheKeyQueryStringActionArgs | DeliveryRuleRequestHeaderActionArgs | DeliveryRuleResponseHeaderActionArgs | DeliveryRuleRouteConfigurationOverrideActionArgs | OriginGroupOverrideActionArgs | UrlRedirectActionArgs | UrlRewriteActionArgs | UrlSigningActionArgs>[]>;
    /**
     * A list of conditions that must be matched for the actions to be executed
     */
    conditions?: pulumi.Input<pulumi.Input<DeliveryRuleClientPortConditionArgs | DeliveryRuleCookiesConditionArgs | DeliveryRuleHostNameConditionArgs | DeliveryRuleHttpVersionConditionArgs | DeliveryRuleIsDeviceConditionArgs | DeliveryRulePostArgsConditionArgs | DeliveryRuleQueryStringConditionArgs | DeliveryRuleRemoteAddressConditionArgs | DeliveryRuleRequestBodyConditionArgs | DeliveryRuleRequestHeaderConditionArgs | DeliveryRuleRequestMethodConditionArgs | DeliveryRuleRequestSchemeConditionArgs | DeliveryRuleRequestUriConditionArgs | DeliveryRuleServerPortConditionArgs | DeliveryRuleSocketAddrConditionArgs | DeliveryRuleSslProtocolConditionArgs | DeliveryRuleUrlFileExtensionConditionArgs | DeliveryRuleUrlFileNameConditionArgs | DeliveryRuleUrlPathConditionArgs>[]>;
    /**
     * Name of the rule
     */
    name?: pulumi.Input<string>;
    /**
     * The order in which the rules are applied for the endpoint. Possible values {0,1,2,3,………}. A rule with a lesser order will be applied before a rule with a greater order. Rule with order 0 is a special rule. It does not require any condition and actions listed in it will always be applied.
     */
    order: pulumi.Input<number>;
}

/**
 * Defines the cache expiration action for the delivery rule.
 */
export interface DeliveryRuleCacheExpirationActionArgs {
    /**
     * The name of the action for the delivery rule.
     * Expected value is 'CacheExpiration'.
     */
    name: pulumi.Input<"CacheExpiration">;
    /**
     * Defines the parameters for the action.
     */
    parameters: pulumi.Input<CacheExpirationActionParametersArgs>;
}

/**
 * Defines the cache-key query string action for the delivery rule.
 */
export interface DeliveryRuleCacheKeyQueryStringActionArgs {
    /**
     * The name of the action for the delivery rule.
     * Expected value is 'CacheKeyQueryString'.
     */
    name: pulumi.Input<"CacheKeyQueryString">;
    /**
     * Defines the parameters for the action.
     */
    parameters: pulumi.Input<CacheKeyQueryStringActionParametersArgs>;
}

/**
 * Defines the ClientPort condition for the delivery rule.
 */
export interface DeliveryRuleClientPortConditionArgs {
    /**
     * The name of the condition for the delivery rule.
     * Expected value is 'ClientPort'.
     */
    name: pulumi.Input<"ClientPort">;
    /**
     * Defines the parameters for the condition.
     */
    parameters: pulumi.Input<ClientPortMatchConditionParametersArgs>;
}
/**
 * deliveryRuleClientPortConditionArgsProvideDefaults sets the appropriate defaults for DeliveryRuleClientPortConditionArgs
 */
export function deliveryRuleClientPortConditionArgsProvideDefaults(val: DeliveryRuleClientPortConditionArgs): DeliveryRuleClientPortConditionArgs {
    return {
        ...val,
        parameters: pulumi.output(val.parameters).apply(clientPortMatchConditionParametersArgsProvideDefaults),
    };
}

/**
 * Defines the Cookies condition for the delivery rule.
 */
export interface DeliveryRuleCookiesConditionArgs {
    /**
     * The name of the condition for the delivery rule.
     * Expected value is 'Cookies'.
     */
    name: pulumi.Input<"Cookies">;
    /**
     * Defines the parameters for the condition.
     */
    parameters: pulumi.Input<CookiesMatchConditionParametersArgs>;
}
/**
 * deliveryRuleCookiesConditionArgsProvideDefaults sets the appropriate defaults for DeliveryRuleCookiesConditionArgs
 */
export function deliveryRuleCookiesConditionArgsProvideDefaults(val: DeliveryRuleCookiesConditionArgs): DeliveryRuleCookiesConditionArgs {
    return {
        ...val,
        parameters: pulumi.output(val.parameters).apply(cookiesMatchConditionParametersArgsProvideDefaults),
    };
}

/**
 * Defines the HostName condition for the delivery rule.
 */
export interface DeliveryRuleHostNameConditionArgs {
    /**
     * The name of the condition for the delivery rule.
     * Expected value is 'HostName'.
     */
    name: pulumi.Input<"HostName">;
    /**
     * Defines the parameters for the condition.
     */
    parameters: pulumi.Input<HostNameMatchConditionParametersArgs>;
}
/**
 * deliveryRuleHostNameConditionArgsProvideDefaults sets the appropriate defaults for DeliveryRuleHostNameConditionArgs
 */
export function deliveryRuleHostNameConditionArgsProvideDefaults(val: DeliveryRuleHostNameConditionArgs): DeliveryRuleHostNameConditionArgs {
    return {
        ...val,
        parameters: pulumi.output(val.parameters).apply(hostNameMatchConditionParametersArgsProvideDefaults),
    };
}

/**
 * Defines the HttpVersion condition for the delivery rule.
 */
export interface DeliveryRuleHttpVersionConditionArgs {
    /**
     * The name of the condition for the delivery rule.
     * Expected value is 'HttpVersion'.
     */
    name: pulumi.Input<"HttpVersion">;
    /**
     * Defines the parameters for the condition.
     */
    parameters: pulumi.Input<HttpVersionMatchConditionParametersArgs>;
}
/**
 * deliveryRuleHttpVersionConditionArgsProvideDefaults sets the appropriate defaults for DeliveryRuleHttpVersionConditionArgs
 */
export function deliveryRuleHttpVersionConditionArgsProvideDefaults(val: DeliveryRuleHttpVersionConditionArgs): DeliveryRuleHttpVersionConditionArgs {
    return {
        ...val,
        parameters: pulumi.output(val.parameters).apply(httpVersionMatchConditionParametersArgsProvideDefaults),
    };
}

/**
 * Defines the IsDevice condition for the delivery rule.
 */
export interface DeliveryRuleIsDeviceConditionArgs {
    /**
     * The name of the condition for the delivery rule.
     * Expected value is 'IsDevice'.
     */
    name: pulumi.Input<"IsDevice">;
    /**
     * Defines the parameters for the condition.
     */
    parameters: pulumi.Input<IsDeviceMatchConditionParametersArgs>;
}
/**
 * deliveryRuleIsDeviceConditionArgsProvideDefaults sets the appropriate defaults for DeliveryRuleIsDeviceConditionArgs
 */
export function deliveryRuleIsDeviceConditionArgsProvideDefaults(val: DeliveryRuleIsDeviceConditionArgs): DeliveryRuleIsDeviceConditionArgs {
    return {
        ...val,
        parameters: pulumi.output(val.parameters).apply(isDeviceMatchConditionParametersArgsProvideDefaults),
    };
}

/**
 * Defines the PostArgs condition for the delivery rule.
 */
export interface DeliveryRulePostArgsConditionArgs {
    /**
     * The name of the condition for the delivery rule.
     * Expected value is 'PostArgs'.
     */
    name: pulumi.Input<"PostArgs">;
    /**
     * Defines the parameters for the condition.
     */
    parameters: pulumi.Input<PostArgsMatchConditionParametersArgs>;
}
/**
 * deliveryRulePostArgsConditionArgsProvideDefaults sets the appropriate defaults for DeliveryRulePostArgsConditionArgs
 */
export function deliveryRulePostArgsConditionArgsProvideDefaults(val: DeliveryRulePostArgsConditionArgs): DeliveryRulePostArgsConditionArgs {
    return {
        ...val,
        parameters: pulumi.output(val.parameters).apply(postArgsMatchConditionParametersArgsProvideDefaults),
    };
}

/**
 * Defines the QueryString condition for the delivery rule.
 */
export interface DeliveryRuleQueryStringConditionArgs {
    /**
     * The name of the condition for the delivery rule.
     * Expected value is 'QueryString'.
     */
    name: pulumi.Input<"QueryString">;
    /**
     * Defines the parameters for the condition.
     */
    parameters: pulumi.Input<QueryStringMatchConditionParametersArgs>;
}
/**
 * deliveryRuleQueryStringConditionArgsProvideDefaults sets the appropriate defaults for DeliveryRuleQueryStringConditionArgs
 */
export function deliveryRuleQueryStringConditionArgsProvideDefaults(val: DeliveryRuleQueryStringConditionArgs): DeliveryRuleQueryStringConditionArgs {
    return {
        ...val,
        parameters: pulumi.output(val.parameters).apply(queryStringMatchConditionParametersArgsProvideDefaults),
    };
}

/**
 * Defines the RemoteAddress condition for the delivery rule.
 */
export interface DeliveryRuleRemoteAddressConditionArgs {
    /**
     * The name of the condition for the delivery rule.
     * Expected value is 'RemoteAddress'.
     */
    name: pulumi.Input<"RemoteAddress">;
    /**
     * Defines the parameters for the condition.
     */
    parameters: pulumi.Input<RemoteAddressMatchConditionParametersArgs>;
}
/**
 * deliveryRuleRemoteAddressConditionArgsProvideDefaults sets the appropriate defaults for DeliveryRuleRemoteAddressConditionArgs
 */
export function deliveryRuleRemoteAddressConditionArgsProvideDefaults(val: DeliveryRuleRemoteAddressConditionArgs): DeliveryRuleRemoteAddressConditionArgs {
    return {
        ...val,
        parameters: pulumi.output(val.parameters).apply(remoteAddressMatchConditionParametersArgsProvideDefaults),
    };
}

/**
 * Defines the RequestBody condition for the delivery rule.
 */
export interface DeliveryRuleRequestBodyConditionArgs {
    /**
     * The name of the condition for the delivery rule.
     * Expected value is 'RequestBody'.
     */
    name: pulumi.Input<"RequestBody">;
    /**
     * Defines the parameters for the condition.
     */
    parameters: pulumi.Input<RequestBodyMatchConditionParametersArgs>;
}
/**
 * deliveryRuleRequestBodyConditionArgsProvideDefaults sets the appropriate defaults for DeliveryRuleRequestBodyConditionArgs
 */
export function deliveryRuleRequestBodyConditionArgsProvideDefaults(val: DeliveryRuleRequestBodyConditionArgs): DeliveryRuleRequestBodyConditionArgs {
    return {
        ...val,
        parameters: pulumi.output(val.parameters).apply(requestBodyMatchConditionParametersArgsProvideDefaults),
    };
}

/**
 * Defines the request header action for the delivery rule.
 */
export interface DeliveryRuleRequestHeaderActionArgs {
    /**
     * The name of the action for the delivery rule.
     * Expected value is 'ModifyRequestHeader'.
     */
    name: pulumi.Input<"ModifyRequestHeader">;
    /**
     * Defines the parameters for the action.
     */
    parameters: pulumi.Input<HeaderActionParametersArgs>;
}

/**
 * Defines the RequestHeader condition for the delivery rule.
 */
export interface DeliveryRuleRequestHeaderConditionArgs {
    /**
     * The name of the condition for the delivery rule.
     * Expected value is 'RequestHeader'.
     */
    name: pulumi.Input<"RequestHeader">;
    /**
     * Defines the parameters for the condition.
     */
    parameters: pulumi.Input<RequestHeaderMatchConditionParametersArgs>;
}
/**
 * deliveryRuleRequestHeaderConditionArgsProvideDefaults sets the appropriate defaults for DeliveryRuleRequestHeaderConditionArgs
 */
export function deliveryRuleRequestHeaderConditionArgsProvideDefaults(val: DeliveryRuleRequestHeaderConditionArgs): DeliveryRuleRequestHeaderConditionArgs {
    return {
        ...val,
        parameters: pulumi.output(val.parameters).apply(requestHeaderMatchConditionParametersArgsProvideDefaults),
    };
}

/**
 * Defines the RequestMethod condition for the delivery rule.
 */
export interface DeliveryRuleRequestMethodConditionArgs {
    /**
     * The name of the condition for the delivery rule.
     * Expected value is 'RequestMethod'.
     */
    name: pulumi.Input<"RequestMethod">;
    /**
     * Defines the parameters for the condition.
     */
    parameters: pulumi.Input<RequestMethodMatchConditionParametersArgs>;
}
/**
 * deliveryRuleRequestMethodConditionArgsProvideDefaults sets the appropriate defaults for DeliveryRuleRequestMethodConditionArgs
 */
export function deliveryRuleRequestMethodConditionArgsProvideDefaults(val: DeliveryRuleRequestMethodConditionArgs): DeliveryRuleRequestMethodConditionArgs {
    return {
        ...val,
        parameters: pulumi.output(val.parameters).apply(requestMethodMatchConditionParametersArgsProvideDefaults),
    };
}

/**
 * Defines the RequestScheme condition for the delivery rule.
 */
export interface DeliveryRuleRequestSchemeConditionArgs {
    /**
     * The name of the condition for the delivery rule.
     * Expected value is 'RequestScheme'.
     */
    name: pulumi.Input<"RequestScheme">;
    /**
     * Defines the parameters for the condition.
     */
    parameters: pulumi.Input<RequestSchemeMatchConditionParametersArgs>;
}
/**
 * deliveryRuleRequestSchemeConditionArgsProvideDefaults sets the appropriate defaults for DeliveryRuleRequestSchemeConditionArgs
 */
export function deliveryRuleRequestSchemeConditionArgsProvideDefaults(val: DeliveryRuleRequestSchemeConditionArgs): DeliveryRuleRequestSchemeConditionArgs {
    return {
        ...val,
        parameters: pulumi.output(val.parameters).apply(requestSchemeMatchConditionParametersArgsProvideDefaults),
    };
}

/**
 * Defines the RequestUri condition for the delivery rule.
 */
export interface DeliveryRuleRequestUriConditionArgs {
    /**
     * The name of the condition for the delivery rule.
     * Expected value is 'RequestUri'.
     */
    name: pulumi.Input<"RequestUri">;
    /**
     * Defines the parameters for the condition.
     */
    parameters: pulumi.Input<RequestUriMatchConditionParametersArgs>;
}
/**
 * deliveryRuleRequestUriConditionArgsProvideDefaults sets the appropriate defaults for DeliveryRuleRequestUriConditionArgs
 */
export function deliveryRuleRequestUriConditionArgsProvideDefaults(val: DeliveryRuleRequestUriConditionArgs): DeliveryRuleRequestUriConditionArgs {
    return {
        ...val,
        parameters: pulumi.output(val.parameters).apply(requestUriMatchConditionParametersArgsProvideDefaults),
    };
}

/**
 * Defines the response header action for the delivery rule.
 */
export interface DeliveryRuleResponseHeaderActionArgs {
    /**
     * The name of the action for the delivery rule.
     * Expected value is 'ModifyResponseHeader'.
     */
    name: pulumi.Input<"ModifyResponseHeader">;
    /**
     * Defines the parameters for the action.
     */
    parameters: pulumi.Input<HeaderActionParametersArgs>;
}

/**
 * Defines the route configuration override action for the delivery rule. Only applicable to Frontdoor Standard/Premium Profiles.
 */
export interface DeliveryRuleRouteConfigurationOverrideActionArgs {
    /**
     * The name of the action for the delivery rule.
     * Expected value is 'RouteConfigurationOverride'.
     */
    name: pulumi.Input<"RouteConfigurationOverride">;
    /**
     * Defines the parameters for the action.
     */
    parameters: pulumi.Input<RouteConfigurationOverrideActionParametersArgs>;
}

/**
 * Defines the ServerPort condition for the delivery rule.
 */
export interface DeliveryRuleServerPortConditionArgs {
    /**
     * The name of the condition for the delivery rule.
     * Expected value is 'ServerPort'.
     */
    name: pulumi.Input<"ServerPort">;
    /**
     * Defines the parameters for the condition.
     */
    parameters: pulumi.Input<ServerPortMatchConditionParametersArgs>;
}
/**
 * deliveryRuleServerPortConditionArgsProvideDefaults sets the appropriate defaults for DeliveryRuleServerPortConditionArgs
 */
export function deliveryRuleServerPortConditionArgsProvideDefaults(val: DeliveryRuleServerPortConditionArgs): DeliveryRuleServerPortConditionArgs {
    return {
        ...val,
        parameters: pulumi.output(val.parameters).apply(serverPortMatchConditionParametersArgsProvideDefaults),
    };
}

/**
 * Defines the SocketAddress condition for the delivery rule.
 */
export interface DeliveryRuleSocketAddrConditionArgs {
    /**
     * The name of the condition for the delivery rule.
     * Expected value is 'SocketAddr'.
     */
    name: pulumi.Input<"SocketAddr">;
    /**
     * Defines the parameters for the condition.
     */
    parameters: pulumi.Input<SocketAddrMatchConditionParametersArgs>;
}
/**
 * deliveryRuleSocketAddrConditionArgsProvideDefaults sets the appropriate defaults for DeliveryRuleSocketAddrConditionArgs
 */
export function deliveryRuleSocketAddrConditionArgsProvideDefaults(val: DeliveryRuleSocketAddrConditionArgs): DeliveryRuleSocketAddrConditionArgs {
    return {
        ...val,
        parameters: pulumi.output(val.parameters).apply(socketAddrMatchConditionParametersArgsProvideDefaults),
    };
}

/**
 * Defines the SslProtocol condition for the delivery rule.
 */
export interface DeliveryRuleSslProtocolConditionArgs {
    /**
     * The name of the condition for the delivery rule.
     * Expected value is 'SslProtocol'.
     */
    name: pulumi.Input<"SslProtocol">;
    /**
     * Defines the parameters for the condition.
     */
    parameters: pulumi.Input<SslProtocolMatchConditionParametersArgs>;
}
/**
 * deliveryRuleSslProtocolConditionArgsProvideDefaults sets the appropriate defaults for DeliveryRuleSslProtocolConditionArgs
 */
export function deliveryRuleSslProtocolConditionArgsProvideDefaults(val: DeliveryRuleSslProtocolConditionArgs): DeliveryRuleSslProtocolConditionArgs {
    return {
        ...val,
        parameters: pulumi.output(val.parameters).apply(sslProtocolMatchConditionParametersArgsProvideDefaults),
    };
}

/**
 * Defines the UrlFileExtension condition for the delivery rule.
 */
export interface DeliveryRuleUrlFileExtensionConditionArgs {
    /**
     * The name of the condition for the delivery rule.
     * Expected value is 'UrlFileExtension'.
     */
    name: pulumi.Input<"UrlFileExtension">;
    /**
     * Defines the parameters for the condition.
     */
    parameters: pulumi.Input<UrlFileExtensionMatchConditionParametersArgs>;
}
/**
 * deliveryRuleUrlFileExtensionConditionArgsProvideDefaults sets the appropriate defaults for DeliveryRuleUrlFileExtensionConditionArgs
 */
export function deliveryRuleUrlFileExtensionConditionArgsProvideDefaults(val: DeliveryRuleUrlFileExtensionConditionArgs): DeliveryRuleUrlFileExtensionConditionArgs {
    return {
        ...val,
        parameters: pulumi.output(val.parameters).apply(urlFileExtensionMatchConditionParametersArgsProvideDefaults),
    };
}

/**
 * Defines the UrlFileName condition for the delivery rule.
 */
export interface DeliveryRuleUrlFileNameConditionArgs {
    /**
     * The name of the condition for the delivery rule.
     * Expected value is 'UrlFileName'.
     */
    name: pulumi.Input<"UrlFileName">;
    /**
     * Defines the parameters for the condition.
     */
    parameters: pulumi.Input<UrlFileNameMatchConditionParametersArgs>;
}
/**
 * deliveryRuleUrlFileNameConditionArgsProvideDefaults sets the appropriate defaults for DeliveryRuleUrlFileNameConditionArgs
 */
export function deliveryRuleUrlFileNameConditionArgsProvideDefaults(val: DeliveryRuleUrlFileNameConditionArgs): DeliveryRuleUrlFileNameConditionArgs {
    return {
        ...val,
        parameters: pulumi.output(val.parameters).apply(urlFileNameMatchConditionParametersArgsProvideDefaults),
    };
}

/**
 * Defines the UrlPath condition for the delivery rule.
 */
export interface DeliveryRuleUrlPathConditionArgs {
    /**
     * The name of the condition for the delivery rule.
     * Expected value is 'UrlPath'.
     */
    name: pulumi.Input<"UrlPath">;
    /**
     * Defines the parameters for the condition.
     */
    parameters: pulumi.Input<UrlPathMatchConditionParametersArgs>;
}
/**
 * deliveryRuleUrlPathConditionArgsProvideDefaults sets the appropriate defaults for DeliveryRuleUrlPathConditionArgs
 */
export function deliveryRuleUrlPathConditionArgsProvideDefaults(val: DeliveryRuleUrlPathConditionArgs): DeliveryRuleUrlPathConditionArgs {
    return {
        ...val,
        parameters: pulumi.output(val.parameters).apply(urlPathMatchConditionParametersArgsProvideDefaults),
    };
}

/**
 * A policy that specifies the delivery rules to be used for an endpoint.
 */
export interface EndpointPropertiesUpdateParametersDeliveryPolicyArgs {
    /**
     * User-friendly description of the policy.
     */
    description?: pulumi.Input<string>;
    /**
     * A list of the delivery rules.
     */
    rules: pulumi.Input<pulumi.Input<DeliveryRuleArgs>[]>;
}

/**
 * Defines the Web Application Firewall policy for the endpoint (if applicable)
 */
export interface EndpointPropertiesUpdateParametersWebApplicationFirewallPolicyLinkArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
}

/**
 * Rules defining user's geo access within a CDN endpoint.
 */
export interface GeoFilterArgs {
    /**
     * Action of the geo filter, i.e. allow or block access.
     */
    action: pulumi.Input<enums.GeoFilterActions>;
    /**
     * Two letter country or region codes defining user country or region access in a geo filter, e.g. AU, MX, US.
     */
    countryCodes: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Relative path applicable to geo filter. (e.g. '/mypictures', '/mypicture/kitty.jpg', and etc.)
     */
    relativePath: pulumi.Input<string>;
}

/**
 * Defines the parameters for the request header action.
 */
export interface HeaderActionParametersArgs {
    /**
     * Action to perform
     */
    headerAction: pulumi.Input<string | enums.HeaderAction>;
    /**
     * Name of the header to modify
     */
    headerName: pulumi.Input<string>;
    typeName: pulumi.Input<string>;
    /**
     * Value for the specified action
     */
    value?: pulumi.Input<string>;
}

/**
 * The JSON object that contains the properties to send health probes to origin.
 */
export interface HealthProbeParametersArgs {
    /**
     * The number of seconds between health probes.Default is 240sec.
     */
    probeIntervalInSeconds?: pulumi.Input<number>;
    /**
     * The path relative to the origin that is used to determine the health of the origin.
     */
    probePath?: pulumi.Input<string>;
    /**
     * Protocol to use for health probe.
     */
    probeProtocol?: pulumi.Input<enums.ProbeProtocol>;
    /**
     * The type of health probe request that is made.
     */
    probeRequestType?: pulumi.Input<enums.HealthProbeRequestType>;
}

/**
 * Defines the parameters for HostName match conditions
 */
export interface HostNameMatchConditionParametersArgs {
    /**
     * The match value for the condition of the delivery rule
     */
    matchValues?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Describes if this is negate condition or not
     */
    negateCondition?: pulumi.Input<boolean>;
    /**
     * Describes operator to be matched
     */
    operator: pulumi.Input<string | enums.HostNameOperator>;
    /**
     * List of transforms
     */
    transforms?: pulumi.Input<pulumi.Input<string | enums.Transform>[]>;
    typeName: pulumi.Input<string>;
}
/**
 * hostNameMatchConditionParametersArgsProvideDefaults sets the appropriate defaults for HostNameMatchConditionParametersArgs
 */
export function hostNameMatchConditionParametersArgsProvideDefaults(val: HostNameMatchConditionParametersArgs): HostNameMatchConditionParametersArgs {
    return {
        ...val,
        negateCondition: (val.negateCondition) ?? false,
    };
}

/**
 * The JSON object that represents the range for http status codes
 */
export interface HttpErrorRangeParametersArgs {
    /**
     * The inclusive start of the http status code range.
     */
    begin?: pulumi.Input<number>;
    /**
     * The inclusive end of the http status code range.
     */
    end?: pulumi.Input<number>;
}

/**
 * Defines the parameters for HttpVersion match conditions
 */
export interface HttpVersionMatchConditionParametersArgs {
    /**
     * The match value for the condition of the delivery rule
     */
    matchValues?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Describes if this is negate condition or not
     */
    negateCondition?: pulumi.Input<boolean>;
    /**
     * Describes operator to be matched
     */
    operator: pulumi.Input<string | enums.HttpVersionOperator>;
    /**
     * List of transforms
     */
    transforms?: pulumi.Input<pulumi.Input<string | enums.Transform>[]>;
    typeName: pulumi.Input<string>;
}
/**
 * httpVersionMatchConditionParametersArgsProvideDefaults sets the appropriate defaults for HttpVersionMatchConditionParametersArgs
 */
export function httpVersionMatchConditionParametersArgsProvideDefaults(val: HttpVersionMatchConditionParametersArgs): HttpVersionMatchConditionParametersArgs {
    return {
        ...val,
        negateCondition: (val.negateCondition) ?? false,
    };
}

/**
 * Defines the parameters for IsDevice match conditions
 */
export interface IsDeviceMatchConditionParametersArgs {
    /**
     * The match value for the condition of the delivery rule
     */
    matchValues?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Describes if this is negate condition or not
     */
    negateCondition?: pulumi.Input<boolean>;
    /**
     * Describes operator to be matched
     */
    operator: pulumi.Input<string | enums.IsDeviceOperator>;
    /**
     * List of transforms
     */
    transforms?: pulumi.Input<pulumi.Input<string | enums.Transform>[]>;
    typeName: pulumi.Input<string>;
}
/**
 * isDeviceMatchConditionParametersArgsProvideDefaults sets the appropriate defaults for IsDeviceMatchConditionParametersArgs
 */
export function isDeviceMatchConditionParametersArgsProvideDefaults(val: IsDeviceMatchConditionParametersArgs): IsDeviceMatchConditionParametersArgs {
    return {
        ...val,
        negateCondition: (val.negateCondition) ?? false,
    };
}

/**
 * Describes the parameters for using a user's KeyVault for URL Signing Key.
 */
export interface KeyVaultSigningKeyParametersArgs {
    /**
     * Resource group of the user's Key Vault containing the secret
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of secret in Key Vault.
     */
    secretName: pulumi.Input<string>;
    /**
     * The version(GUID) of secret in Key Vault.
     */
    secretVersion: pulumi.Input<string>;
    /**
     * Subscription Id of the user's Key Vault containing the secret
     */
    subscriptionId: pulumi.Input<string>;
    typeName: pulumi.Input<string>;
    /**
     * The name of the user's Key Vault containing the secret
     */
    vaultName: pulumi.Input<string>;
}

/**
 * Round-Robin load balancing settings for a backend pool
 */
export interface LoadBalancingSettingsParametersArgs {
    /**
     * The additional latency in milliseconds for probes to fall into the lowest latency bucket
     */
    additionalLatencyInMilliseconds?: pulumi.Input<number>;
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
 * Managed Certificate used for https
 */
export interface ManagedCertificateParametersArgs {
    /**
     * The type of the secret resource.
     * Expected value is 'ManagedCertificate'.
     */
    type: pulumi.Input<"ManagedCertificate">;
}

/**
 * Defines a managed rule group override setting.
 */
export interface ManagedRuleGroupOverrideArgs {
    /**
     * Describes the managed rule group within the rule set to override
     */
    ruleGroupName: pulumi.Input<string>;
    /**
     * List of rules that will be enabled. If none specified, all rules in the group will be disabled.
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
     * Identifier for the managed rule.
     */
    ruleId: pulumi.Input<string>;
}

/**
 * Defines a managed rule set.
 */
export interface ManagedRuleSetArgs {
    /**
     * Verizon only : If the rule set supports anomaly detection mode, this describes the threshold for blocking requests.
     */
    anomalyScore?: pulumi.Input<number>;
    /**
     * Defines the rule overrides to apply to the rule set.
     */
    ruleGroupOverrides?: pulumi.Input<pulumi.Input<ManagedRuleGroupOverrideArgs>[]>;
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
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityArgs {
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Define match conditions
 */
export interface MatchConditionArgs {
    /**
     * List of possible match values.
     */
    matchValue: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Match variable to compare against.
     */
    matchVariable: pulumi.Input<string | enums.WafMatchVariable>;
    /**
     * Describes if the result of this condition should be negated.
     */
    negateCondition?: pulumi.Input<boolean>;
    /**
     * Describes operator to be matched
     */
    operator: pulumi.Input<string | enums.Operator>;
    /**
     * Selector can used to match a specific key for QueryString, Cookies, RequestHeader or PostArgs.
     */
    selector?: pulumi.Input<string>;
    /**
     * List of transforms.
     */
    transforms?: pulumi.Input<pulumi.Input<string | enums.TransformType>[]>;
}

/**
 * Defines the parameters for the origin group override configuration.
 */
export interface OriginGroupOverrideArgs {
    /**
     * Protocol this rule will use when forwarding traffic to backends.
     */
    forwardingProtocol?: pulumi.Input<string | enums.ForwardingProtocol>;
    /**
     * defines the OriginGroup that would override the DefaultOriginGroup on route.
     */
    originGroup?: pulumi.Input<ResourceReferenceArgs>;
}

/**
 * Defines the origin group override action for the delivery rule.
 */
export interface OriginGroupOverrideActionArgs {
    /**
     * The name of the action for the delivery rule.
     * Expected value is 'OriginGroupOverride'.
     */
    name: pulumi.Input<"OriginGroupOverride">;
    /**
     * Defines the parameters for the action.
     */
    parameters: pulumi.Input<OriginGroupOverrideActionParametersArgs>;
}

/**
 * Defines the parameters for the origin group override action.
 */
export interface OriginGroupOverrideActionParametersArgs {
    /**
     * defines the OriginGroup that would override the DefaultOriginGroup.
     */
    originGroup: pulumi.Input<ResourceReferenceArgs>;
    typeName: pulumi.Input<string>;
}

/**
 * Defines contents of a web application firewall global configuration
 */
export interface PolicySettingsArgs {
    /**
     * If the action type is block, customer can override the response body. The body must be specified in base64 encoding.
     */
    defaultCustomBlockResponseBody?: pulumi.Input<string>;
    /**
     * If the action type is block, this field defines the default customer overridable http response status code.
     */
    defaultCustomBlockResponseStatusCode?: pulumi.Input<number>;
    /**
     * If action type is redirect, this field represents the default redirect URL for the client.
     */
    defaultRedirectUrl?: pulumi.Input<string>;
    /**
     * describes if the policy is in enabled state or disabled state
     */
    enabledState?: pulumi.Input<string | enums.PolicyEnabledState>;
    /**
     * Describes if it is in detection mode or prevention mode at policy level.
     */
    mode?: pulumi.Input<string | enums.PolicyMode>;
}

/**
 * Defines the parameters for PostArgs match conditions
 */
export interface PostArgsMatchConditionParametersArgs {
    /**
     * The match value for the condition of the delivery rule
     */
    matchValues?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Describes if this is negate condition or not
     */
    negateCondition?: pulumi.Input<boolean>;
    /**
     * Describes operator to be matched
     */
    operator: pulumi.Input<string | enums.PostArgsOperator>;
    /**
     * Name of PostArg to be matched
     */
    selector?: pulumi.Input<string>;
    /**
     * List of transforms
     */
    transforms?: pulumi.Input<pulumi.Input<string | enums.Transform>[]>;
    typeName: pulumi.Input<string>;
}
/**
 * postArgsMatchConditionParametersArgsProvideDefaults sets the appropriate defaults for PostArgsMatchConditionParametersArgs
 */
export function postArgsMatchConditionParametersArgsProvideDefaults(val: PostArgsMatchConditionParametersArgs): PostArgsMatchConditionParametersArgs {
    return {
        ...val,
        negateCondition: (val.negateCondition) ?? false,
    };
}

/**
 * Defines the parameters for QueryString match conditions
 */
export interface QueryStringMatchConditionParametersArgs {
    /**
     * The match value for the condition of the delivery rule
     */
    matchValues?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Describes if this is negate condition or not
     */
    negateCondition?: pulumi.Input<boolean>;
    /**
     * Describes operator to be matched
     */
    operator: pulumi.Input<string | enums.QueryStringOperator>;
    /**
     * List of transforms
     */
    transforms?: pulumi.Input<pulumi.Input<string | enums.Transform>[]>;
    typeName: pulumi.Input<string>;
}
/**
 * queryStringMatchConditionParametersArgsProvideDefaults sets the appropriate defaults for QueryStringMatchConditionParametersArgs
 */
export function queryStringMatchConditionParametersArgsProvideDefaults(val: QueryStringMatchConditionParametersArgs): QueryStringMatchConditionParametersArgs {
    return {
        ...val,
        negateCondition: (val.negateCondition) ?? false,
    };
}

/**
 * Defines a rate limiting rule that can be included in a waf policy
 */
export interface RateLimitRuleArgs {
    /**
     * Describes what action to be applied when rule matches
     */
    action: pulumi.Input<string | enums.ActionType>;
    /**
     * Describes if the custom rule is in enabled or disabled state. Defaults to Enabled if not specified.
     */
    enabledState?: pulumi.Input<string | enums.CustomRuleEnabledState>;
    /**
     * List of match conditions.
     */
    matchConditions: pulumi.Input<pulumi.Input<MatchConditionArgs>[]>;
    /**
     * Defines the name of the custom rule
     */
    name: pulumi.Input<string>;
    /**
     * Defines in what order this rule be evaluated in the overall list of custom rules
     */
    priority: pulumi.Input<number>;
    /**
     * Defines rate limit duration. Default is 1 minute.
     */
    rateLimitDurationInMinutes: pulumi.Input<number>;
    /**
     * Defines rate limit threshold.
     */
    rateLimitThreshold: pulumi.Input<number>;
}

/**
 * Defines contents of rate limit rules
 */
export interface RateLimitRuleListArgs {
    /**
     * List of rules
     */
    rules?: pulumi.Input<pulumi.Input<RateLimitRuleArgs>[]>;
}

/**
 * Defines the parameters for RemoteAddress match conditions
 */
export interface RemoteAddressMatchConditionParametersArgs {
    /**
     * Match values to match against. The operator will apply to each value in here with OR semantics. If any of them match the variable with the given operator this match condition is considered a match.
     */
    matchValues?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Describes if this is negate condition or not
     */
    negateCondition?: pulumi.Input<boolean>;
    /**
     * Describes operator to be matched
     */
    operator: pulumi.Input<string | enums.RemoteAddressOperator>;
    /**
     * List of transforms
     */
    transforms?: pulumi.Input<pulumi.Input<string | enums.Transform>[]>;
    typeName: pulumi.Input<string>;
}
/**
 * remoteAddressMatchConditionParametersArgsProvideDefaults sets the appropriate defaults for RemoteAddressMatchConditionParametersArgs
 */
export function remoteAddressMatchConditionParametersArgsProvideDefaults(val: RemoteAddressMatchConditionParametersArgs): RemoteAddressMatchConditionParametersArgs {
    return {
        ...val,
        negateCondition: (val.negateCondition) ?? false,
    };
}

/**
 * Defines the parameters for RequestBody match conditions
 */
export interface RequestBodyMatchConditionParametersArgs {
    /**
     * The match value for the condition of the delivery rule
     */
    matchValues?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Describes if this is negate condition or not
     */
    negateCondition?: pulumi.Input<boolean>;
    /**
     * Describes operator to be matched
     */
    operator: pulumi.Input<string | enums.RequestBodyOperator>;
    /**
     * List of transforms
     */
    transforms?: pulumi.Input<pulumi.Input<string | enums.Transform>[]>;
    typeName: pulumi.Input<string>;
}
/**
 * requestBodyMatchConditionParametersArgsProvideDefaults sets the appropriate defaults for RequestBodyMatchConditionParametersArgs
 */
export function requestBodyMatchConditionParametersArgsProvideDefaults(val: RequestBodyMatchConditionParametersArgs): RequestBodyMatchConditionParametersArgs {
    return {
        ...val,
        negateCondition: (val.negateCondition) ?? false,
    };
}

/**
 * Defines the parameters for RequestHeader match conditions
 */
export interface RequestHeaderMatchConditionParametersArgs {
    /**
     * The match value for the condition of the delivery rule
     */
    matchValues?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Describes if this is negate condition or not
     */
    negateCondition?: pulumi.Input<boolean>;
    /**
     * Describes operator to be matched
     */
    operator: pulumi.Input<string | enums.RequestHeaderOperator>;
    /**
     * Name of Header to be matched
     */
    selector?: pulumi.Input<string>;
    /**
     * List of transforms
     */
    transforms?: pulumi.Input<pulumi.Input<string | enums.Transform>[]>;
    typeName: pulumi.Input<string>;
}
/**
 * requestHeaderMatchConditionParametersArgsProvideDefaults sets the appropriate defaults for RequestHeaderMatchConditionParametersArgs
 */
export function requestHeaderMatchConditionParametersArgsProvideDefaults(val: RequestHeaderMatchConditionParametersArgs): RequestHeaderMatchConditionParametersArgs {
    return {
        ...val,
        negateCondition: (val.negateCondition) ?? false,
    };
}

/**
 * Defines the parameters for RequestMethod match conditions
 */
export interface RequestMethodMatchConditionParametersArgs {
    /**
     * The match value for the condition of the delivery rule
     */
    matchValues?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Describes if this is negate condition or not
     */
    negateCondition?: pulumi.Input<boolean>;
    /**
     * Describes operator to be matched
     */
    operator: pulumi.Input<string | enums.RequestMethodOperator>;
    /**
     * List of transforms
     */
    transforms?: pulumi.Input<pulumi.Input<string | enums.Transform>[]>;
    typeName: pulumi.Input<string>;
}
/**
 * requestMethodMatchConditionParametersArgsProvideDefaults sets the appropriate defaults for RequestMethodMatchConditionParametersArgs
 */
export function requestMethodMatchConditionParametersArgsProvideDefaults(val: RequestMethodMatchConditionParametersArgs): RequestMethodMatchConditionParametersArgs {
    return {
        ...val,
        negateCondition: (val.negateCondition) ?? false,
    };
}

/**
 * Defines the parameters for RequestScheme match conditions 
 */
export interface RequestSchemeMatchConditionParametersArgs {
    /**
     * The match value for the condition of the delivery rule
     */
    matchValues?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Describes if this is negate condition or not
     */
    negateCondition?: pulumi.Input<boolean>;
    /**
     * Describes operator to be matched
     */
    operator: pulumi.Input<string>;
    /**
     * List of transforms
     */
    transforms?: pulumi.Input<pulumi.Input<string | enums.Transform>[]>;
    typeName: pulumi.Input<string>;
}
/**
 * requestSchemeMatchConditionParametersArgsProvideDefaults sets the appropriate defaults for RequestSchemeMatchConditionParametersArgs
 */
export function requestSchemeMatchConditionParametersArgsProvideDefaults(val: RequestSchemeMatchConditionParametersArgs): RequestSchemeMatchConditionParametersArgs {
    return {
        ...val,
        negateCondition: (val.negateCondition) ?? false,
    };
}

/**
 * Defines the parameters for RequestUri match conditions
 */
export interface RequestUriMatchConditionParametersArgs {
    /**
     * The match value for the condition of the delivery rule
     */
    matchValues?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Describes if this is negate condition or not
     */
    negateCondition?: pulumi.Input<boolean>;
    /**
     * Describes operator to be matched
     */
    operator: pulumi.Input<string | enums.RequestUriOperator>;
    /**
     * List of transforms
     */
    transforms?: pulumi.Input<pulumi.Input<string | enums.Transform>[]>;
    typeName: pulumi.Input<string>;
}
/**
 * requestUriMatchConditionParametersArgsProvideDefaults sets the appropriate defaults for RequestUriMatchConditionParametersArgs
 */
export function requestUriMatchConditionParametersArgsProvideDefaults(val: RequestUriMatchConditionParametersArgs): RequestUriMatchConditionParametersArgs {
    return {
        ...val,
        negateCondition: (val.negateCondition) ?? false,
    };
}

/**
 * Reference to another resource.
 */
export interface ResourceReferenceArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
}

/**
 * The JSON object that contains the properties to determine origin health using real requests/responses.
 */
export interface ResponseBasedOriginErrorDetectionParametersArgs {
    /**
     * The list of Http status code ranges that are considered as server errors for origin and it is marked as unhealthy.
     */
    httpErrorRanges?: pulumi.Input<pulumi.Input<HttpErrorRangeParametersArgs>[]>;
    /**
     * Type of response errors for real user requests for which origin will be deemed unhealthy
     */
    responseBasedDetectedErrorTypes?: pulumi.Input<enums.ResponseBasedDetectedErrorTypes>;
    /**
     * The percentage of failed requests in the sample where failover should trigger.
     */
    responseBasedFailoverThresholdPercentage?: pulumi.Input<number>;
}

/**
 * Defines the parameters for the route configuration override action.
 */
export interface RouteConfigurationOverrideActionParametersArgs {
    /**
     * The caching configuration associated with this rule. To disable caching, do not provide a cacheConfiguration object.
     */
    cacheConfiguration?: pulumi.Input<CacheConfigurationArgs>;
    /**
     * A reference to the origin group override configuration. Leave empty to use the default origin group on route.
     */
    originGroupOverride?: pulumi.Input<OriginGroupOverrideArgs>;
    typeName: pulumi.Input<string>;
}

/**
 * settings for security policy patterns to match
 */
export interface SecurityPolicyWebApplicationFirewallAssociationArgs {
    /**
     * List of domains.
     */
    domains?: pulumi.Input<pulumi.Input<ActivatedResourceReferenceArgs>[]>;
    /**
     * List of paths
     */
    patternsToMatch?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The json object containing security policy waf parameters
 */
export interface SecurityPolicyWebApplicationFirewallParametersArgs {
    /**
     * Waf associations
     */
    associations?: pulumi.Input<pulumi.Input<SecurityPolicyWebApplicationFirewallAssociationArgs>[]>;
    /**
     * The type of the Security policy to create.
     * Expected value is 'WebApplicationFirewall'.
     */
    type: pulumi.Input<"WebApplicationFirewall">;
    /**
     * Resource ID.
     */
    wafPolicy?: pulumi.Input<ResourceReferenceArgs>;
}

/**
 * Defines the parameters for ServerPort match conditions
 */
export interface ServerPortMatchConditionParametersArgs {
    /**
     * The match value for the condition of the delivery rule
     */
    matchValues?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Describes if this is negate condition or not
     */
    negateCondition?: pulumi.Input<boolean>;
    /**
     * Describes operator to be matched
     */
    operator: pulumi.Input<string | enums.ServerPortOperator>;
    /**
     * List of transforms
     */
    transforms?: pulumi.Input<pulumi.Input<string | enums.Transform>[]>;
    typeName: pulumi.Input<string>;
}
/**
 * serverPortMatchConditionParametersArgsProvideDefaults sets the appropriate defaults for ServerPortMatchConditionParametersArgs
 */
export function serverPortMatchConditionParametersArgsProvideDefaults(val: ServerPortMatchConditionParametersArgs): ServerPortMatchConditionParametersArgs {
    return {
        ...val,
        negateCondition: (val.negateCondition) ?? false,
    };
}

/**
 * Describes the properties of an existing Shared Private Link Resource to use when connecting to a private origin.
 */
export interface SharedPrivateLinkResourcePropertiesArgs {
    /**
     * The group id from the provider of resource the shared private link resource is for.
     */
    groupId?: pulumi.Input<string>;
    /**
     * The resource id of the resource the shared private link resource is for.
     */
    privateLink?: pulumi.Input<ResourceReferenceArgs>;
    /**
     * The location of the shared private link resource
     */
    privateLinkLocation?: pulumi.Input<string>;
    /**
     * The request message for requesting approval of the shared private link resource.
     */
    requestMessage?: pulumi.Input<string>;
    /**
     * Status of the shared private link resource. Can be Pending, Approved, Rejected, Disconnected, or Timeout.
     */
    status?: pulumi.Input<enums.SharedPrivateLinkResourceStatus>;
}

/**
 * Standard_Verizon = The SKU name for a Standard Verizon CDN profile.
 * Premium_Verizon = The SKU name for a Premium Verizon CDN profile.
 * Custom_Verizon = The SKU name for a Custom Verizon CDN profile.
 * Standard_Akamai = The SKU name for an Akamai CDN profile.
 * Standard_ChinaCdn = The SKU name for a China CDN profile for VOD, Web and download scenarios using GB based billing model.
 * Standard_Microsoft = The SKU name for a Standard Microsoft CDN profile.
 * Standard_AzureFrontDoor =  The SKU name for an Azure Front Door Standard profile.
 * Premium_AzureFrontDoor = The SKU name for an Azure Front Door Premium profile.
 * Standard_955BandWidth_ChinaCdn = The SKU name for a China CDN profile for VOD, Web and download scenarios using 95-5 peak bandwidth billing model.
 * Standard_AvgBandWidth_ChinaCdn = The SKU name for a China CDN profile for VOD, Web and download scenarios using monthly average peak bandwidth billing model.
 * StandardPlus_ChinaCdn = The SKU name for a China CDN profile for live-streaming using GB based billing model.
 * StandardPlus_955BandWidth_ChinaCdn = The SKU name for a China CDN live-streaming profile using 95-5 peak bandwidth billing model.
 * StandardPlus_AvgBandWidth_ChinaCdn = The SKU name for a China CDN live-streaming profile using monthly average peak bandwidth billing model.
 */
export interface SkuArgs {
    /**
     * Name of the pricing tier.
     */
    name?: pulumi.Input<string | enums.SkuName>;
}

/**
 * Defines the parameters for SocketAddress match conditions
 */
export interface SocketAddrMatchConditionParametersArgs {
    /**
     * The match value for the condition of the delivery rule
     */
    matchValues?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Describes if this is negate condition or not
     */
    negateCondition?: pulumi.Input<boolean>;
    /**
     * Describes operator to be matched
     */
    operator: pulumi.Input<string | enums.SocketAddrOperator>;
    /**
     * List of transforms
     */
    transforms?: pulumi.Input<pulumi.Input<string | enums.Transform>[]>;
    typeName: pulumi.Input<string>;
}
/**
 * socketAddrMatchConditionParametersArgsProvideDefaults sets the appropriate defaults for SocketAddrMatchConditionParametersArgs
 */
export function socketAddrMatchConditionParametersArgsProvideDefaults(val: SocketAddrMatchConditionParametersArgs): SocketAddrMatchConditionParametersArgs {
    return {
        ...val,
        negateCondition: (val.negateCondition) ?? false,
    };
}

/**
 * Defines the parameters for SslProtocol match conditions
 */
export interface SslProtocolMatchConditionParametersArgs {
    /**
     * The match value for the condition of the delivery rule
     */
    matchValues?: pulumi.Input<pulumi.Input<string | enums.SslProtocol>[]>;
    /**
     * Describes if this is negate condition or not
     */
    negateCondition?: pulumi.Input<boolean>;
    /**
     * Describes operator to be matched
     */
    operator: pulumi.Input<string | enums.SslProtocolOperator>;
    /**
     * List of transforms
     */
    transforms?: pulumi.Input<pulumi.Input<string | enums.Transform>[]>;
    typeName: pulumi.Input<string>;
}
/**
 * sslProtocolMatchConditionParametersArgsProvideDefaults sets the appropriate defaults for SslProtocolMatchConditionParametersArgs
 */
export function sslProtocolMatchConditionParametersArgsProvideDefaults(val: SslProtocolMatchConditionParametersArgs): SslProtocolMatchConditionParametersArgs {
    return {
        ...val,
        negateCondition: (val.negateCondition) ?? false,
    };
}

/**
 * TargetEndpoint object that forms a traffic endpoint.
 */
export interface TargetEndpointArgs {
    /**
     * The Ports to be allowed for the FQDN.
     */
    ports?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * The FQDN for traffic endpoint.
     */
    targetFqdn?: pulumi.Input<string>;
}

/**
 * Defines the parameters for UrlFileExtension match conditions
 */
export interface UrlFileExtensionMatchConditionParametersArgs {
    /**
     * The match value for the condition of the delivery rule
     */
    matchValues?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Describes if this is negate condition or not
     */
    negateCondition?: pulumi.Input<boolean>;
    /**
     * Describes operator to be matched
     */
    operator: pulumi.Input<string | enums.UrlFileExtensionOperator>;
    /**
     * List of transforms
     */
    transforms?: pulumi.Input<pulumi.Input<string | enums.Transform>[]>;
    typeName: pulumi.Input<string>;
}
/**
 * urlFileExtensionMatchConditionParametersArgsProvideDefaults sets the appropriate defaults for UrlFileExtensionMatchConditionParametersArgs
 */
export function urlFileExtensionMatchConditionParametersArgsProvideDefaults(val: UrlFileExtensionMatchConditionParametersArgs): UrlFileExtensionMatchConditionParametersArgs {
    return {
        ...val,
        negateCondition: (val.negateCondition) ?? false,
    };
}

/**
 * Defines the parameters for UrlFilename match conditions
 */
export interface UrlFileNameMatchConditionParametersArgs {
    /**
     * The match value for the condition of the delivery rule
     */
    matchValues?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Describes if this is negate condition or not
     */
    negateCondition?: pulumi.Input<boolean>;
    /**
     * Describes operator to be matched
     */
    operator: pulumi.Input<string | enums.UrlFileNameOperator>;
    /**
     * List of transforms
     */
    transforms?: pulumi.Input<pulumi.Input<string | enums.Transform>[]>;
    typeName: pulumi.Input<string>;
}
/**
 * urlFileNameMatchConditionParametersArgsProvideDefaults sets the appropriate defaults for UrlFileNameMatchConditionParametersArgs
 */
export function urlFileNameMatchConditionParametersArgsProvideDefaults(val: UrlFileNameMatchConditionParametersArgs): UrlFileNameMatchConditionParametersArgs {
    return {
        ...val,
        negateCondition: (val.negateCondition) ?? false,
    };
}

/**
 * Defines the parameters for UrlPath match conditions
 */
export interface UrlPathMatchConditionParametersArgs {
    /**
     * The match value for the condition of the delivery rule
     */
    matchValues?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Describes if this is negate condition or not
     */
    negateCondition?: pulumi.Input<boolean>;
    /**
     * Describes operator to be matched
     */
    operator: pulumi.Input<string | enums.UrlPathOperator>;
    /**
     * List of transforms
     */
    transforms?: pulumi.Input<pulumi.Input<string | enums.Transform>[]>;
    typeName: pulumi.Input<string>;
}
/**
 * urlPathMatchConditionParametersArgsProvideDefaults sets the appropriate defaults for UrlPathMatchConditionParametersArgs
 */
export function urlPathMatchConditionParametersArgsProvideDefaults(val: UrlPathMatchConditionParametersArgs): UrlPathMatchConditionParametersArgs {
    return {
        ...val,
        negateCondition: (val.negateCondition) ?? false,
    };
}

/**
 * Defines the url redirect action for the delivery rule.
 */
export interface UrlRedirectActionArgs {
    /**
     * The name of the action for the delivery rule.
     * Expected value is 'UrlRedirect'.
     */
    name: pulumi.Input<"UrlRedirect">;
    /**
     * Defines the parameters for the action.
     */
    parameters: pulumi.Input<UrlRedirectActionParametersArgs>;
}

/**
 * Defines the parameters for the url redirect action.
 */
export interface UrlRedirectActionParametersArgs {
    /**
     * Fragment to add to the redirect URL. Fragment is the part of the URL that comes after #. Do not include the #.
     */
    customFragment?: pulumi.Input<string>;
    /**
     * Host to redirect. Leave empty to use the incoming host as the destination host.
     */
    customHostname?: pulumi.Input<string>;
    /**
     * The full path to redirect. Path cannot be empty and must start with /. Leave empty to use the incoming path as destination path.
     */
    customPath?: pulumi.Input<string>;
    /**
     * The set of query strings to be placed in the redirect URL. Setting this value would replace any existing query string; leave empty to preserve the incoming query string. Query string must be in <key>=<value> format. ? and & will be added automatically so do not include them.
     */
    customQueryString?: pulumi.Input<string>;
    /**
     * Protocol to use for the redirect. The default value is MatchRequest
     */
    destinationProtocol?: pulumi.Input<string | enums.DestinationProtocol>;
    /**
     * The redirect type the rule will use when redirecting traffic.
     */
    redirectType: pulumi.Input<string | enums.RedirectType>;
    typeName: pulumi.Input<string>;
}

/**
 * Defines the url rewrite action for the delivery rule.
 */
export interface UrlRewriteActionArgs {
    /**
     * The name of the action for the delivery rule.
     * Expected value is 'UrlRewrite'.
     */
    name: pulumi.Input<"UrlRewrite">;
    /**
     * Defines the parameters for the action.
     */
    parameters: pulumi.Input<UrlRewriteActionParametersArgs>;
}

/**
 * Defines the parameters for the url rewrite action.
 */
export interface UrlRewriteActionParametersArgs {
    /**
     * Define the relative URL to which the above requests will be rewritten by.
     */
    destination: pulumi.Input<string>;
    /**
     * Whether to preserve unmatched path. Default value is true.
     */
    preserveUnmatchedPath?: pulumi.Input<boolean>;
    /**
     * define a request URI pattern that identifies the type of requests that may be rewritten. If value is blank, all strings are matched.
     */
    sourcePattern: pulumi.Input<string>;
    typeName: pulumi.Input<string>;
}

/**
 * Defines the url signing action for the delivery rule.
 */
export interface UrlSigningActionArgs {
    /**
     * The name of the action for the delivery rule.
     * Expected value is 'UrlSigning'.
     */
    name: pulumi.Input<"UrlSigning">;
    /**
     * Defines the parameters for the action.
     */
    parameters: pulumi.Input<UrlSigningActionParametersArgs>;
}

/**
 * Defines the parameters for the Url Signing action.
 */
export interface UrlSigningActionParametersArgs {
    /**
     * Algorithm to use for URL signing
     */
    algorithm?: pulumi.Input<string | enums.Algorithm>;
    /**
     * Defines which query string parameters in the url to be considered for expires, key id etc. 
     */
    parameterNameOverride?: pulumi.Input<pulumi.Input<UrlSigningParamIdentifierArgs>[]>;
    typeName: pulumi.Input<string>;
}

/**
 * Url signing key
 */
export interface UrlSigningKeyArgs {
    /**
     * Defines the customer defined key Id. This id will exist in the incoming request to indicate the key used to form the hash.
     */
    keyId: pulumi.Input<string>;
    /**
     * Defines the parameters for using customer key vault for Url Signing Key.
     */
    keySourceParameters: pulumi.Input<KeyVaultSigningKeyParametersArgs>;
}

/**
 * Url signing key parameters
 */
export interface UrlSigningKeyParametersArgs {
    /**
     * Defines the customer defined key Id. This id will exist in the incoming request to indicate the key used to form the hash.
     */
    keyId: pulumi.Input<string>;
    /**
     * Resource reference to the Azure Key Vault secret. Expected to be in format of /subscriptions/{​​​​​​​​​subscriptionId}​​​​​​​​​/resourceGroups/{​​​​​​​​​resourceGroupName}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​/providers/Microsoft.KeyVault/vaults/{vaultName}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​/secrets/{secretName}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
     */
    secretSource: pulumi.Input<ResourceReferenceArgs>;
    /**
     * Version of the secret to be used
     */
    secretVersion?: pulumi.Input<string>;
    /**
     * The type of the secret resource.
     * Expected value is 'UrlSigningKey'.
     */
    type: pulumi.Input<"UrlSigningKey">;
}

/**
 * Defines how to identify a parameter for a specific purpose e.g. expires
 */
export interface UrlSigningParamIdentifierArgs {
    /**
     * Indicates the purpose of the parameter
     */
    paramIndicator: pulumi.Input<string | enums.ParamIndicator>;
    /**
     * Parameter name
     */
    paramName: pulumi.Input<string>;
}






