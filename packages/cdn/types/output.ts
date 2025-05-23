import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The JSON object that contains the properties to secure a domain.
 */
export interface AFDDomainHttpsParametersResponse {
    /**
     * Defines the source of the SSL certificate.
     */
    certificateType: string;
    /**
     * TLS protocol version that will be used for Https
     */
    minimumTlsVersion?: string;
    /**
     * Resource reference to the secret. ie. subs/rg/profile/secret
     */
    secret?: ResourceReferenceResponse;
}

/**
 * Reference to another resource along with its state.
 */
export interface ActivatedResourceReferenceResponse {
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Whether the resource is active or inactive
     */
    isActive: boolean;
}

/**
 * Caching settings for a caching-type route. To disable caching, do not provide a cacheConfiguration object.
 */
export interface AfdRouteCacheConfigurationResponse {
    /**
     * compression settings.
     */
    compressionSettings?: CompressionSettingsResponse;
    /**
     * query parameters to include or exclude (comma separated).
     */
    queryParameters?: string;
    /**
     * Defines how Frontdoor caches requests that include query strings. You can ignore any query strings when caching, ignore specific query strings, cache every request with a unique URL, or cache specific query strings.
     */
    queryStringCachingBehavior?: string;
}

/**
 * Azure FirstParty Managed Certificate provided by other first party resource providers to enable HTTPS.
 */
export interface AzureFirstPartyManagedCertificateParametersResponse {
    /**
     * Certificate issuing authority.
     */
    certificateAuthority: string;
    /**
     * Certificate expiration date.
     */
    expirationDate: string;
    /**
     * Resource reference to the Azure Key Vault certificate. Expected to be in format of /subscriptions/{​​​​​​​​​subscriptionId}​​​​​​​​​/resourceGroups/{​​​​​​​​​resourceGroupName}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​/providers/Microsoft.KeyVault/vaults/{vaultName}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​/secrets/{certificateName}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
     */
    secretSource: ResourceReferenceResponse;
    /**
     * Subject name in the certificate.
     */
    subject: string;
    /**
     * The list of SANs.
     */
    subjectAlternativeNames?: string[];
    /**
     * Certificate thumbprint.
     */
    thumbprint: string;
    /**
     * The type of the secret resource.
     * Expected value is 'AzureFirstPartyManagedCertificate'.
     */
    type: "AzureFirstPartyManagedCertificate";
}

/**
 * Caching settings for a caching-type route. To disable caching, do not provide a cacheConfiguration object.
 */
export interface CacheConfigurationResponse {
    /**
     * Caching behavior for the requests
     */
    cacheBehavior?: string;
    /**
     * The duration for which the content needs to be cached. Allowed format is [d.]hh:mm:ss
     */
    cacheDuration?: string;
    /**
     * Indicates whether content compression is enabled. If compression is enabled, content will be served as compressed if user requests for a compressed version. Content won't be compressed on AzureFrontDoor when requested content is smaller than 1 byte or larger than 1 MB.
     */
    isCompressionEnabled?: string;
    /**
     * query parameters to include or exclude (comma separated).
     */
    queryParameters?: string;
    /**
     * Defines how Frontdoor caches requests that include query strings. You can ignore any query strings when caching, ignore specific query strings, cache every request with a unique URL, or cache specific query strings.
     */
    queryStringCachingBehavior?: string;
}

/**
 * Defines the parameters for the cache expiration action.
 */
export interface CacheExpirationActionParametersResponse {
    /**
     * Caching behavior for the requests
     */
    cacheBehavior: string;
    /**
     * The duration for which the content needs to be cached. Allowed format is [d.]hh:mm:ss
     */
    cacheDuration?: string;
    /**
     * The level at which the content needs to be cached.
     */
    cacheType: string;
    /**
     *
     * Expected value is 'DeliveryRuleCacheExpirationActionParameters'.
     */
    typeName: "DeliveryRuleCacheExpirationActionParameters";
}

/**
 * Defines the parameters for the cache-key query string action.
 */
export interface CacheKeyQueryStringActionParametersResponse {
    /**
     * query parameters to include or exclude (comma separated).
     */
    queryParameters?: string;
    /**
     * Caching behavior for the requests
     */
    queryStringBehavior: string;
    /**
     *
     * Expected value is 'DeliveryRuleCacheKeyQueryStringBehaviorActionParameters'.
     */
    typeName: "DeliveryRuleCacheKeyQueryStringBehaviorActionParameters";
}

/**
 * Defines the parameters for using CDN managed certificate for securing custom domain.
 */
export interface CdnCertificateSourceParametersResponse {
    /**
     * Type of certificate used
     */
    certificateType: string;
    /**
     *
     * Expected value is 'CdnCertificateSourceParameters'.
     */
    typeName: "CdnCertificateSourceParameters";
}

/**
 * Defines the ARM Resource ID for the linked endpoints
 */
export interface CdnEndpointResponse {
    /**
     * ARM Resource ID string.
     */
    id?: string;
}

/**
 * Defines the certificate source parameters using CDN managed certificate for enabling SSL.
 */
export interface CdnManagedHttpsParametersResponse {
    /**
     * Defines the source of the SSL certificate.
     * Expected value is 'Cdn'.
     */
    certificateSource: "Cdn";
    /**
     * Defines the certificate source parameters using CDN managed certificate for enabling SSL.
     */
    certificateSourceParameters: CdnCertificateSourceParametersResponse;
    /**
     * TLS protocol version that will be used for Https
     */
    minimumTlsVersion?: string;
    /**
     * Defines the TLS extension protocol that is used for secure delivery.
     */
    protocolType: string;
}

/**
 * Defines the parameters for ClientPort match conditions
 */
export interface ClientPortMatchConditionParametersResponse {
    /**
     * The match value for the condition of the delivery rule
     */
    matchValues?: string[];
    /**
     * Describes if this is negate condition or not
     */
    negateCondition?: boolean;
    /**
     * Describes operator to be matched
     */
    operator: string;
    /**
     * List of transforms
     */
    transforms?: string[];
    /**
     *
     * Expected value is 'DeliveryRuleClientPortConditionParameters'.
     */
    typeName: "DeliveryRuleClientPortConditionParameters";
}
/**
 * clientPortMatchConditionParametersResponseProvideDefaults sets the appropriate defaults for ClientPortMatchConditionParametersResponse
 */
export function clientPortMatchConditionParametersResponseProvideDefaults(val: ClientPortMatchConditionParametersResponse): ClientPortMatchConditionParametersResponse {
    return {
        ...val,
        negateCondition: (val.negateCondition) ?? false,
    };
}

/**
 * settings for compression.
 */
export interface CompressionSettingsResponse {
    /**
     * List of content types on which compression applies. The value should be a valid MIME type.
     */
    contentTypesToCompress?: string[];
    /**
     * Indicates whether content compression is enabled on AzureFrontDoor. Default value is false. If compression is enabled, content will be served as compressed if user requests for a compressed version. Content won't be compressed on AzureFrontDoor when requested content is smaller than 1 byte or larger than 1 MB.
     */
    isCompressionEnabled?: boolean;
}

/**
 * Defines the parameters for Cookies match conditions
 */
export interface CookiesMatchConditionParametersResponse {
    /**
     * The match value for the condition of the delivery rule
     */
    matchValues?: string[];
    /**
     * Describes if this is negate condition or not
     */
    negateCondition?: boolean;
    /**
     * Describes operator to be matched
     */
    operator: string;
    /**
     * Name of Cookies to be matched
     */
    selector?: string;
    /**
     * List of transforms
     */
    transforms?: string[];
    /**
     *
     * Expected value is 'DeliveryRuleCookiesConditionParameters'.
     */
    typeName: "DeliveryRuleCookiesConditionParameters";
}
/**
 * cookiesMatchConditionParametersResponseProvideDefaults sets the appropriate defaults for CookiesMatchConditionParametersResponse
 */
export function cookiesMatchConditionParametersResponseProvideDefaults(val: CookiesMatchConditionParametersResponse): CookiesMatchConditionParametersResponse {
    return {
        ...val,
        negateCondition: (val.negateCondition) ?? false,
    };
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
 * Defines the common attributes for a custom rule that can be included in a waf policy
 */
export interface CustomRuleResponse {
    /**
     * Describes what action to be applied when rule matches
     */
    action: string;
    /**
     * Describes if the custom rule is in enabled or disabled state. Defaults to Enabled if not specified.
     */
    enabledState?: string;
    /**
     * List of match conditions.
     */
    matchConditions: MatchConditionResponse[];
    /**
     * Defines the name of the custom rule
     */
    name: string;
    /**
     * Defines in what order this rule be evaluated in the overall list of custom rules
     */
    priority: number;
}

/**
 * Customer Certificate used for https
 */
export interface CustomerCertificateParametersResponse {
    /**
     * Certificate issuing authority.
     */
    certificateAuthority: string;
    /**
     * Certificate expiration date.
     */
    expirationDate: string;
    /**
     * Resource reference to the Azure Key Vault certificate. Expected to be in format of /subscriptions/{​​​​​​​​​subscriptionId}​​​​​​​​​/resourceGroups/{​​​​​​​​​resourceGroupName}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​/providers/Microsoft.KeyVault/vaults/{vaultName}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​/secrets/{certificateName}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
     */
    secretSource: ResourceReferenceResponse;
    /**
     * Version of the secret to be used
     */
    secretVersion?: string;
    /**
     * Subject name in the certificate.
     */
    subject: string;
    /**
     * The list of SANs.
     */
    subjectAlternativeNames?: string[];
    /**
     * Certificate thumbprint.
     */
    thumbprint: string;
    /**
     * The type of the secret resource.
     * Expected value is 'CustomerCertificate'.
     */
    type: "CustomerCertificate";
    /**
     * Whether to use the latest version for the certificate
     */
    useLatestVersion?: boolean;
}

/**
 * Custom domains created on the CDN endpoint.
 */
export interface DeepCreatedCustomDomainResponse {
    /**
     * The host name of the custom domain. Must be a domain name.
     */
    hostName: string;
    /**
     * Custom domain name.
     */
    name: string;
    /**
     * Special validation or data may be required when delivering CDN to some regions due to local compliance reasons. E.g. ICP license number of a custom domain is required to deliver content in China.
     */
    validationData?: string;
}

/**
 * The origin group for CDN content which is added when creating a CDN endpoint. Traffic is sent to the origins within the origin group based on origin health.
 */
export interface DeepCreatedOriginGroupResponse {
    /**
     * Health probe settings to the origin that is used to determine the health of the origin.
     */
    healthProbeSettings?: HealthProbeParametersResponse;
    /**
     * Origin group name which must be unique within the endpoint.
     */
    name: string;
    /**
     * The source of the content being delivered via CDN within given origin group.
     */
    origins: ResourceReferenceResponse[];
    /**
     * The JSON object that contains the properties to determine origin health using real requests/responses.This property is currently not supported.
     */
    responseBasedOriginErrorDetectionSettings?: ResponseBasedOriginErrorDetectionParametersResponse;
    /**
     * Time in minutes to shift the traffic to the endpoint gradually when an unhealthy endpoint comes healthy or a new endpoint is added. Default is 10 mins. This property is currently not supported.
     */
    trafficRestorationTimeToHealedOrNewEndpointsInMinutes?: number;
}

/**
 * The main origin of CDN content which is added when creating a CDN endpoint.
 */
export interface DeepCreatedOriginResponse {
    /**
     * Origin is enabled for load balancing or not. By default, origin is always enabled.
     */
    enabled?: boolean;
    /**
     * The address of the origin. It can be a domain name, IPv4 address, or IPv6 address. This should be unique across all origins in an endpoint.
     */
    hostName: string;
    /**
     * The value of the HTTP port. Must be between 1 and 65535.
     */
    httpPort?: number;
    /**
     * The value of the HTTPS port. Must be between 1 and 65535.
     */
    httpsPort?: number;
    /**
     * Origin name which must be unique within the endpoint. 
     */
    name: string;
    /**
     * The host header value sent to the origin with each request. If you leave this blank, the request hostname determines this value. Azure CDN origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default.
     */
    originHostHeader?: string;
    /**
     * Priority of origin in given origin group for load balancing. Higher priorities will not be used for load balancing if any lower priority origin is healthy.Must be between 1 and 5.
     */
    priority?: number;
    /**
     * The approval status for the connection to the Private Link
     */
    privateEndpointStatus: string;
    /**
     * The Alias of the Private Link resource. Populating this optional field indicates that this origin is 'Private'
     */
    privateLinkAlias?: string;
    /**
     * A custom message to be included in the approval request to connect to the Private Link.
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
     * Weight of the origin in given origin group for load balancing. Must be between 1 and 1000
     */
    weight?: number;
}

/**
 * Defines the cache expiration action for the delivery rule.
 */
export interface DeliveryRuleCacheExpirationActionResponse {
    /**
     * The name of the action for the delivery rule.
     * Expected value is 'CacheExpiration'.
     */
    name: "CacheExpiration";
    /**
     * Defines the parameters for the action.
     */
    parameters: CacheExpirationActionParametersResponse;
}

/**
 * Defines the cache-key query string action for the delivery rule.
 */
export interface DeliveryRuleCacheKeyQueryStringActionResponse {
    /**
     * The name of the action for the delivery rule.
     * Expected value is 'CacheKeyQueryString'.
     */
    name: "CacheKeyQueryString";
    /**
     * Defines the parameters for the action.
     */
    parameters: CacheKeyQueryStringActionParametersResponse;
}

/**
 * Defines the ClientPort condition for the delivery rule.
 */
export interface DeliveryRuleClientPortConditionResponse {
    /**
     * The name of the condition for the delivery rule.
     * Expected value is 'ClientPort'.
     */
    name: "ClientPort";
    /**
     * Defines the parameters for the condition.
     */
    parameters: ClientPortMatchConditionParametersResponse;
}
/**
 * deliveryRuleClientPortConditionResponseProvideDefaults sets the appropriate defaults for DeliveryRuleClientPortConditionResponse
 */
export function deliveryRuleClientPortConditionResponseProvideDefaults(val: DeliveryRuleClientPortConditionResponse): DeliveryRuleClientPortConditionResponse {
    return {
        ...val,
        parameters: clientPortMatchConditionParametersResponseProvideDefaults(val.parameters),
    };
}

/**
 * Defines the Cookies condition for the delivery rule.
 */
export interface DeliveryRuleCookiesConditionResponse {
    /**
     * The name of the condition for the delivery rule.
     * Expected value is 'Cookies'.
     */
    name: "Cookies";
    /**
     * Defines the parameters for the condition.
     */
    parameters: CookiesMatchConditionParametersResponse;
}
/**
 * deliveryRuleCookiesConditionResponseProvideDefaults sets the appropriate defaults for DeliveryRuleCookiesConditionResponse
 */
export function deliveryRuleCookiesConditionResponseProvideDefaults(val: DeliveryRuleCookiesConditionResponse): DeliveryRuleCookiesConditionResponse {
    return {
        ...val,
        parameters: cookiesMatchConditionParametersResponseProvideDefaults(val.parameters),
    };
}

/**
 * Defines the HostName condition for the delivery rule.
 */
export interface DeliveryRuleHostNameConditionResponse {
    /**
     * The name of the condition for the delivery rule.
     * Expected value is 'HostName'.
     */
    name: "HostName";
    /**
     * Defines the parameters for the condition.
     */
    parameters: HostNameMatchConditionParametersResponse;
}
/**
 * deliveryRuleHostNameConditionResponseProvideDefaults sets the appropriate defaults for DeliveryRuleHostNameConditionResponse
 */
export function deliveryRuleHostNameConditionResponseProvideDefaults(val: DeliveryRuleHostNameConditionResponse): DeliveryRuleHostNameConditionResponse {
    return {
        ...val,
        parameters: hostNameMatchConditionParametersResponseProvideDefaults(val.parameters),
    };
}

/**
 * Defines the HttpVersion condition for the delivery rule.
 */
export interface DeliveryRuleHttpVersionConditionResponse {
    /**
     * The name of the condition for the delivery rule.
     * Expected value is 'HttpVersion'.
     */
    name: "HttpVersion";
    /**
     * Defines the parameters for the condition.
     */
    parameters: HttpVersionMatchConditionParametersResponse;
}
/**
 * deliveryRuleHttpVersionConditionResponseProvideDefaults sets the appropriate defaults for DeliveryRuleHttpVersionConditionResponse
 */
export function deliveryRuleHttpVersionConditionResponseProvideDefaults(val: DeliveryRuleHttpVersionConditionResponse): DeliveryRuleHttpVersionConditionResponse {
    return {
        ...val,
        parameters: httpVersionMatchConditionParametersResponseProvideDefaults(val.parameters),
    };
}

/**
 * Defines the IsDevice condition for the delivery rule.
 */
export interface DeliveryRuleIsDeviceConditionResponse {
    /**
     * The name of the condition for the delivery rule.
     * Expected value is 'IsDevice'.
     */
    name: "IsDevice";
    /**
     * Defines the parameters for the condition.
     */
    parameters: IsDeviceMatchConditionParametersResponse;
}
/**
 * deliveryRuleIsDeviceConditionResponseProvideDefaults sets the appropriate defaults for DeliveryRuleIsDeviceConditionResponse
 */
export function deliveryRuleIsDeviceConditionResponseProvideDefaults(val: DeliveryRuleIsDeviceConditionResponse): DeliveryRuleIsDeviceConditionResponse {
    return {
        ...val,
        parameters: isDeviceMatchConditionParametersResponseProvideDefaults(val.parameters),
    };
}

/**
 * Defines the PostArgs condition for the delivery rule.
 */
export interface DeliveryRulePostArgsConditionResponse {
    /**
     * The name of the condition for the delivery rule.
     * Expected value is 'PostArgs'.
     */
    name: "PostArgs";
    /**
     * Defines the parameters for the condition.
     */
    parameters: PostArgsMatchConditionParametersResponse;
}
/**
 * deliveryRulePostArgsConditionResponseProvideDefaults sets the appropriate defaults for DeliveryRulePostArgsConditionResponse
 */
export function deliveryRulePostArgsConditionResponseProvideDefaults(val: DeliveryRulePostArgsConditionResponse): DeliveryRulePostArgsConditionResponse {
    return {
        ...val,
        parameters: postArgsMatchConditionParametersResponseProvideDefaults(val.parameters),
    };
}

/**
 * Defines the QueryString condition for the delivery rule.
 */
export interface DeliveryRuleQueryStringConditionResponse {
    /**
     * The name of the condition for the delivery rule.
     * Expected value is 'QueryString'.
     */
    name: "QueryString";
    /**
     * Defines the parameters for the condition.
     */
    parameters: QueryStringMatchConditionParametersResponse;
}
/**
 * deliveryRuleQueryStringConditionResponseProvideDefaults sets the appropriate defaults for DeliveryRuleQueryStringConditionResponse
 */
export function deliveryRuleQueryStringConditionResponseProvideDefaults(val: DeliveryRuleQueryStringConditionResponse): DeliveryRuleQueryStringConditionResponse {
    return {
        ...val,
        parameters: queryStringMatchConditionParametersResponseProvideDefaults(val.parameters),
    };
}

/**
 * Defines the RemoteAddress condition for the delivery rule.
 */
export interface DeliveryRuleRemoteAddressConditionResponse {
    /**
     * The name of the condition for the delivery rule.
     * Expected value is 'RemoteAddress'.
     */
    name: "RemoteAddress";
    /**
     * Defines the parameters for the condition.
     */
    parameters: RemoteAddressMatchConditionParametersResponse;
}
/**
 * deliveryRuleRemoteAddressConditionResponseProvideDefaults sets the appropriate defaults for DeliveryRuleRemoteAddressConditionResponse
 */
export function deliveryRuleRemoteAddressConditionResponseProvideDefaults(val: DeliveryRuleRemoteAddressConditionResponse): DeliveryRuleRemoteAddressConditionResponse {
    return {
        ...val,
        parameters: remoteAddressMatchConditionParametersResponseProvideDefaults(val.parameters),
    };
}

/**
 * Defines the RequestBody condition for the delivery rule.
 */
export interface DeliveryRuleRequestBodyConditionResponse {
    /**
     * The name of the condition for the delivery rule.
     * Expected value is 'RequestBody'.
     */
    name: "RequestBody";
    /**
     * Defines the parameters for the condition.
     */
    parameters: RequestBodyMatchConditionParametersResponse;
}
/**
 * deliveryRuleRequestBodyConditionResponseProvideDefaults sets the appropriate defaults for DeliveryRuleRequestBodyConditionResponse
 */
export function deliveryRuleRequestBodyConditionResponseProvideDefaults(val: DeliveryRuleRequestBodyConditionResponse): DeliveryRuleRequestBodyConditionResponse {
    return {
        ...val,
        parameters: requestBodyMatchConditionParametersResponseProvideDefaults(val.parameters),
    };
}

/**
 * Defines the request header action for the delivery rule.
 */
export interface DeliveryRuleRequestHeaderActionResponse {
    /**
     * The name of the action for the delivery rule.
     * Expected value is 'ModifyRequestHeader'.
     */
    name: "ModifyRequestHeader";
    /**
     * Defines the parameters for the action.
     */
    parameters: HeaderActionParametersResponse;
}

/**
 * Defines the RequestHeader condition for the delivery rule.
 */
export interface DeliveryRuleRequestHeaderConditionResponse {
    /**
     * The name of the condition for the delivery rule.
     * Expected value is 'RequestHeader'.
     */
    name: "RequestHeader";
    /**
     * Defines the parameters for the condition.
     */
    parameters: RequestHeaderMatchConditionParametersResponse;
}
/**
 * deliveryRuleRequestHeaderConditionResponseProvideDefaults sets the appropriate defaults for DeliveryRuleRequestHeaderConditionResponse
 */
export function deliveryRuleRequestHeaderConditionResponseProvideDefaults(val: DeliveryRuleRequestHeaderConditionResponse): DeliveryRuleRequestHeaderConditionResponse {
    return {
        ...val,
        parameters: requestHeaderMatchConditionParametersResponseProvideDefaults(val.parameters),
    };
}

/**
 * Defines the RequestMethod condition for the delivery rule.
 */
export interface DeliveryRuleRequestMethodConditionResponse {
    /**
     * The name of the condition for the delivery rule.
     * Expected value is 'RequestMethod'.
     */
    name: "RequestMethod";
    /**
     * Defines the parameters for the condition.
     */
    parameters: RequestMethodMatchConditionParametersResponse;
}
/**
 * deliveryRuleRequestMethodConditionResponseProvideDefaults sets the appropriate defaults for DeliveryRuleRequestMethodConditionResponse
 */
export function deliveryRuleRequestMethodConditionResponseProvideDefaults(val: DeliveryRuleRequestMethodConditionResponse): DeliveryRuleRequestMethodConditionResponse {
    return {
        ...val,
        parameters: requestMethodMatchConditionParametersResponseProvideDefaults(val.parameters),
    };
}

/**
 * Defines the RequestScheme condition for the delivery rule.
 */
export interface DeliveryRuleRequestSchemeConditionResponse {
    /**
     * The name of the condition for the delivery rule.
     * Expected value is 'RequestScheme'.
     */
    name: "RequestScheme";
    /**
     * Defines the parameters for the condition.
     */
    parameters: RequestSchemeMatchConditionParametersResponse;
}
/**
 * deliveryRuleRequestSchemeConditionResponseProvideDefaults sets the appropriate defaults for DeliveryRuleRequestSchemeConditionResponse
 */
export function deliveryRuleRequestSchemeConditionResponseProvideDefaults(val: DeliveryRuleRequestSchemeConditionResponse): DeliveryRuleRequestSchemeConditionResponse {
    return {
        ...val,
        parameters: requestSchemeMatchConditionParametersResponseProvideDefaults(val.parameters),
    };
}

/**
 * Defines the RequestUri condition for the delivery rule.
 */
export interface DeliveryRuleRequestUriConditionResponse {
    /**
     * The name of the condition for the delivery rule.
     * Expected value is 'RequestUri'.
     */
    name: "RequestUri";
    /**
     * Defines the parameters for the condition.
     */
    parameters: RequestUriMatchConditionParametersResponse;
}
/**
 * deliveryRuleRequestUriConditionResponseProvideDefaults sets the appropriate defaults for DeliveryRuleRequestUriConditionResponse
 */
export function deliveryRuleRequestUriConditionResponseProvideDefaults(val: DeliveryRuleRequestUriConditionResponse): DeliveryRuleRequestUriConditionResponse {
    return {
        ...val,
        parameters: requestUriMatchConditionParametersResponseProvideDefaults(val.parameters),
    };
}

/**
 * A rule that specifies a set of actions and conditions
 */
export interface DeliveryRuleResponse {
    /**
     * A list of actions that are executed when all the conditions of a rule are satisfied.
     */
    actions: (DeliveryRuleCacheExpirationActionResponse | DeliveryRuleCacheKeyQueryStringActionResponse | DeliveryRuleRequestHeaderActionResponse | DeliveryRuleResponseHeaderActionResponse | DeliveryRuleRouteConfigurationOverrideActionResponse | OriginGroupOverrideActionResponse | UrlRedirectActionResponse | UrlRewriteActionResponse | UrlSigningActionResponse)[];
    /**
     * A list of conditions that must be matched for the actions to be executed
     */
    conditions?: (DeliveryRuleClientPortConditionResponse | DeliveryRuleCookiesConditionResponse | DeliveryRuleHostNameConditionResponse | DeliveryRuleHttpVersionConditionResponse | DeliveryRuleIsDeviceConditionResponse | DeliveryRulePostArgsConditionResponse | DeliveryRuleQueryStringConditionResponse | DeliveryRuleRemoteAddressConditionResponse | DeliveryRuleRequestBodyConditionResponse | DeliveryRuleRequestHeaderConditionResponse | DeliveryRuleRequestMethodConditionResponse | DeliveryRuleRequestSchemeConditionResponse | DeliveryRuleRequestUriConditionResponse | DeliveryRuleServerPortConditionResponse | DeliveryRuleSocketAddrConditionResponse | DeliveryRuleSslProtocolConditionResponse | DeliveryRuleUrlFileExtensionConditionResponse | DeliveryRuleUrlFileNameConditionResponse | DeliveryRuleUrlPathConditionResponse)[];
    /**
     * Name of the rule
     */
    name?: string;
    /**
     * The order in which the rules are applied for the endpoint. Possible values {0,1,2,3,………}. A rule with a lesser order will be applied before a rule with a greater order. Rule with order 0 is a special rule. It does not require any condition and actions listed in it will always be applied.
     */
    order: number;
}

/**
 * Defines the response header action for the delivery rule.
 */
export interface DeliveryRuleResponseHeaderActionResponse {
    /**
     * The name of the action for the delivery rule.
     * Expected value is 'ModifyResponseHeader'.
     */
    name: "ModifyResponseHeader";
    /**
     * Defines the parameters for the action.
     */
    parameters: HeaderActionParametersResponse;
}

/**
 * Defines the route configuration override action for the delivery rule. Only applicable to Frontdoor Standard/Premium Profiles.
 */
export interface DeliveryRuleRouteConfigurationOverrideActionResponse {
    /**
     * The name of the action for the delivery rule.
     * Expected value is 'RouteConfigurationOverride'.
     */
    name: "RouteConfigurationOverride";
    /**
     * Defines the parameters for the action.
     */
    parameters: RouteConfigurationOverrideActionParametersResponse;
}

/**
 * Defines the ServerPort condition for the delivery rule.
 */
export interface DeliveryRuleServerPortConditionResponse {
    /**
     * The name of the condition for the delivery rule.
     * Expected value is 'ServerPort'.
     */
    name: "ServerPort";
    /**
     * Defines the parameters for the condition.
     */
    parameters: ServerPortMatchConditionParametersResponse;
}
/**
 * deliveryRuleServerPortConditionResponseProvideDefaults sets the appropriate defaults for DeliveryRuleServerPortConditionResponse
 */
export function deliveryRuleServerPortConditionResponseProvideDefaults(val: DeliveryRuleServerPortConditionResponse): DeliveryRuleServerPortConditionResponse {
    return {
        ...val,
        parameters: serverPortMatchConditionParametersResponseProvideDefaults(val.parameters),
    };
}

/**
 * Defines the SocketAddress condition for the delivery rule.
 */
export interface DeliveryRuleSocketAddrConditionResponse {
    /**
     * The name of the condition for the delivery rule.
     * Expected value is 'SocketAddr'.
     */
    name: "SocketAddr";
    /**
     * Defines the parameters for the condition.
     */
    parameters: SocketAddrMatchConditionParametersResponse;
}
/**
 * deliveryRuleSocketAddrConditionResponseProvideDefaults sets the appropriate defaults for DeliveryRuleSocketAddrConditionResponse
 */
export function deliveryRuleSocketAddrConditionResponseProvideDefaults(val: DeliveryRuleSocketAddrConditionResponse): DeliveryRuleSocketAddrConditionResponse {
    return {
        ...val,
        parameters: socketAddrMatchConditionParametersResponseProvideDefaults(val.parameters),
    };
}

/**
 * Defines the SslProtocol condition for the delivery rule.
 */
export interface DeliveryRuleSslProtocolConditionResponse {
    /**
     * The name of the condition for the delivery rule.
     * Expected value is 'SslProtocol'.
     */
    name: "SslProtocol";
    /**
     * Defines the parameters for the condition.
     */
    parameters: SslProtocolMatchConditionParametersResponse;
}
/**
 * deliveryRuleSslProtocolConditionResponseProvideDefaults sets the appropriate defaults for DeliveryRuleSslProtocolConditionResponse
 */
export function deliveryRuleSslProtocolConditionResponseProvideDefaults(val: DeliveryRuleSslProtocolConditionResponse): DeliveryRuleSslProtocolConditionResponse {
    return {
        ...val,
        parameters: sslProtocolMatchConditionParametersResponseProvideDefaults(val.parameters),
    };
}

/**
 * Defines the UrlFileExtension condition for the delivery rule.
 */
export interface DeliveryRuleUrlFileExtensionConditionResponse {
    /**
     * The name of the condition for the delivery rule.
     * Expected value is 'UrlFileExtension'.
     */
    name: "UrlFileExtension";
    /**
     * Defines the parameters for the condition.
     */
    parameters: UrlFileExtensionMatchConditionParametersResponse;
}
/**
 * deliveryRuleUrlFileExtensionConditionResponseProvideDefaults sets the appropriate defaults for DeliveryRuleUrlFileExtensionConditionResponse
 */
export function deliveryRuleUrlFileExtensionConditionResponseProvideDefaults(val: DeliveryRuleUrlFileExtensionConditionResponse): DeliveryRuleUrlFileExtensionConditionResponse {
    return {
        ...val,
        parameters: urlFileExtensionMatchConditionParametersResponseProvideDefaults(val.parameters),
    };
}

/**
 * Defines the UrlFileName condition for the delivery rule.
 */
export interface DeliveryRuleUrlFileNameConditionResponse {
    /**
     * The name of the condition for the delivery rule.
     * Expected value is 'UrlFileName'.
     */
    name: "UrlFileName";
    /**
     * Defines the parameters for the condition.
     */
    parameters: UrlFileNameMatchConditionParametersResponse;
}
/**
 * deliveryRuleUrlFileNameConditionResponseProvideDefaults sets the appropriate defaults for DeliveryRuleUrlFileNameConditionResponse
 */
export function deliveryRuleUrlFileNameConditionResponseProvideDefaults(val: DeliveryRuleUrlFileNameConditionResponse): DeliveryRuleUrlFileNameConditionResponse {
    return {
        ...val,
        parameters: urlFileNameMatchConditionParametersResponseProvideDefaults(val.parameters),
    };
}

/**
 * Defines the UrlPath condition for the delivery rule.
 */
export interface DeliveryRuleUrlPathConditionResponse {
    /**
     * The name of the condition for the delivery rule.
     * Expected value is 'UrlPath'.
     */
    name: "UrlPath";
    /**
     * Defines the parameters for the condition.
     */
    parameters: UrlPathMatchConditionParametersResponse;
}
/**
 * deliveryRuleUrlPathConditionResponseProvideDefaults sets the appropriate defaults for DeliveryRuleUrlPathConditionResponse
 */
export function deliveryRuleUrlPathConditionResponseProvideDefaults(val: DeliveryRuleUrlPathConditionResponse): DeliveryRuleUrlPathConditionResponse {
    return {
        ...val,
        parameters: urlPathMatchConditionParametersResponseProvideDefaults(val.parameters),
    };
}

/**
 * The JSON object that contains the properties to validate a domain.
 */
export interface DomainValidationPropertiesResponse {
    /**
     * The date time that the token expires
     */
    expirationDate: string;
    /**
     * Challenge used for DNS TXT record or file based validation
     */
    validationToken: string;
}

/**
 * A policy that specifies the delivery rules to be used for an endpoint.
 */
export interface EndpointPropertiesUpdateParametersResponseDeliveryPolicy {
    /**
     * User-friendly description of the policy.
     */
    description?: string;
    /**
     * A list of the delivery rules.
     */
    rules: DeliveryRuleResponse[];
}

/**
 * Defines the Web Application Firewall policy for the endpoint (if applicable)
 */
export interface EndpointPropertiesUpdateParametersResponseWebApplicationFirewallPolicyLink {
    /**
     * Resource ID.
     */
    id?: string;
}

/**
 * Rules defining user's geo access within a CDN endpoint.
 */
export interface GeoFilterResponse {
    /**
     * Action of the geo filter, i.e. allow or block access.
     */
    action: string;
    /**
     * Two letter country or region codes defining user country or region access in a geo filter, e.g. AU, MX, US.
     */
    countryCodes: string[];
    /**
     * Relative path applicable to geo filter. (e.g. '/mypictures', '/mypicture/kitty.jpg', and etc.)
     */
    relativePath: string;
}

/**
 * Defines the parameters for the request header action.
 */
export interface HeaderActionParametersResponse {
    /**
     * Action to perform
     */
    headerAction: string;
    /**
     * Name of the header to modify
     */
    headerName: string;
    /**
     *
     * Expected value is 'DeliveryRuleHeaderActionParameters'.
     */
    typeName: "DeliveryRuleHeaderActionParameters";
    /**
     * Value for the specified action
     */
    value?: string;
}

/**
 * The JSON object that contains the properties to send health probes to origin.
 */
export interface HealthProbeParametersResponse {
    /**
     * The number of seconds between health probes.Default is 240sec.
     */
    probeIntervalInSeconds?: number;
    /**
     * The path relative to the origin that is used to determine the health of the origin.
     */
    probePath?: string;
    /**
     * Protocol to use for health probe.
     */
    probeProtocol?: string;
    /**
     * The type of health probe request that is made.
     */
    probeRequestType?: string;
}

/**
 * Defines the parameters for HostName match conditions
 */
export interface HostNameMatchConditionParametersResponse {
    /**
     * The match value for the condition of the delivery rule
     */
    matchValues?: string[];
    /**
     * Describes if this is negate condition or not
     */
    negateCondition?: boolean;
    /**
     * Describes operator to be matched
     */
    operator: string;
    /**
     * List of transforms
     */
    transforms?: string[];
    /**
     *
     * Expected value is 'DeliveryRuleHostNameConditionParameters'.
     */
    typeName: "DeliveryRuleHostNameConditionParameters";
}
/**
 * hostNameMatchConditionParametersResponseProvideDefaults sets the appropriate defaults for HostNameMatchConditionParametersResponse
 */
export function hostNameMatchConditionParametersResponseProvideDefaults(val: HostNameMatchConditionParametersResponse): HostNameMatchConditionParametersResponse {
    return {
        ...val,
        negateCondition: (val.negateCondition) ?? false,
    };
}

/**
 * The JSON object that represents the range for http status codes
 */
export interface HttpErrorRangeParametersResponse {
    /**
     * The inclusive start of the http status code range.
     */
    begin?: number;
    /**
     * The inclusive end of the http status code range.
     */
    end?: number;
}

/**
 * Defines the parameters for HttpVersion match conditions
 */
export interface HttpVersionMatchConditionParametersResponse {
    /**
     * The match value for the condition of the delivery rule
     */
    matchValues?: string[];
    /**
     * Describes if this is negate condition or not
     */
    negateCondition?: boolean;
    /**
     * Describes operator to be matched
     */
    operator: string;
    /**
     * List of transforms
     */
    transforms?: string[];
    /**
     *
     * Expected value is 'DeliveryRuleHttpVersionConditionParameters'.
     */
    typeName: "DeliveryRuleHttpVersionConditionParameters";
}
/**
 * httpVersionMatchConditionParametersResponseProvideDefaults sets the appropriate defaults for HttpVersionMatchConditionParametersResponse
 */
export function httpVersionMatchConditionParametersResponseProvideDefaults(val: HttpVersionMatchConditionParametersResponse): HttpVersionMatchConditionParametersResponse {
    return {
        ...val,
        negateCondition: (val.negateCondition) ?? false,
    };
}

/**
 * Defines the parameters for IsDevice match conditions
 */
export interface IsDeviceMatchConditionParametersResponse {
    /**
     * The match value for the condition of the delivery rule
     */
    matchValues?: string[];
    /**
     * Describes if this is negate condition or not
     */
    negateCondition?: boolean;
    /**
     * Describes operator to be matched
     */
    operator: string;
    /**
     * List of transforms
     */
    transforms?: string[];
    /**
     *
     * Expected value is 'DeliveryRuleIsDeviceConditionParameters'.
     */
    typeName: "DeliveryRuleIsDeviceConditionParameters";
}
/**
 * isDeviceMatchConditionParametersResponseProvideDefaults sets the appropriate defaults for IsDeviceMatchConditionParametersResponse
 */
export function isDeviceMatchConditionParametersResponseProvideDefaults(val: IsDeviceMatchConditionParametersResponse): IsDeviceMatchConditionParametersResponse {
    return {
        ...val,
        negateCondition: (val.negateCondition) ?? false,
    };
}

/**
 * Describes the parameters for using a user's KeyVault certificate for securing custom domain.
 */
export interface KeyVaultCertificateSourceParametersResponse {
    /**
     * Describes the action that shall be taken when the certificate is removed from Key Vault.
     */
    deleteRule: string;
    /**
     * Resource group of the user's Key Vault containing the SSL certificate
     */
    resourceGroupName: string;
    /**
     * The name of Key Vault Secret (representing the full certificate PFX) in Key Vault.
     */
    secretName: string;
    /**
     * The version(GUID) of Key Vault Secret in Key Vault.
     */
    secretVersion?: string;
    /**
     * Subscription Id of the user's Key Vault containing the SSL certificate
     */
    subscriptionId: string;
    /**
     *
     * Expected value is 'KeyVaultCertificateSourceParameters'.
     */
    typeName: "KeyVaultCertificateSourceParameters";
    /**
     * Describes the action that shall be taken when the certificate is updated in Key Vault.
     */
    updateRule: string;
    /**
     * The name of the user's Key Vault containing the SSL certificate
     */
    vaultName: string;
}

/**
 * Describes the parameters for using a user's KeyVault for URL Signing Key.
 */
export interface KeyVaultSigningKeyParametersResponse {
    /**
     * Resource group of the user's Key Vault containing the secret
     */
    resourceGroupName: string;
    /**
     * The name of secret in Key Vault.
     */
    secretName: string;
    /**
     * The version(GUID) of secret in Key Vault.
     */
    secretVersion: string;
    /**
     * Subscription Id of the user's Key Vault containing the secret
     */
    subscriptionId: string;
    typeName: string;
    /**
     * The name of the user's Key Vault containing the secret
     */
    vaultName: string;
}

/**
 * Round-Robin load balancing settings for a backend pool
 */
export interface LoadBalancingSettingsParametersResponse {
    /**
     * The additional latency in milliseconds for probes to fall into the lowest latency bucket
     */
    additionalLatencyInMilliseconds?: number;
    /**
     * The number of samples to consider for load balancing decisions
     */
    sampleSize?: number;
    /**
     * The number of samples within the sample period that must succeed
     */
    successfulSamplesRequired?: number;
}

/**
 * Managed Certificate used for https
 */
export interface ManagedCertificateParametersResponse {
    /**
     * Certificate expiration date.
     */
    expirationDate: string;
    /**
     * Subject name in the certificate.
     */
    subject: string;
    /**
     * The type of the secret resource.
     * Expected value is 'ManagedCertificate'.
     */
    type: "ManagedCertificate";
}

/**
 * Defines a managed rule group override setting.
 */
export interface ManagedRuleGroupOverrideResponse {
    /**
     * Describes the managed rule group within the rule set to override
     */
    ruleGroupName: string;
    /**
     * List of rules that will be enabled. If none specified, all rules in the group will be disabled.
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
     * Verizon only : If the rule set supports anomaly detection mode, this describes the threshold for blocking requests.
     */
    anomalyScore?: number;
    /**
     * Defines the rule overrides to apply to the rule set.
     */
    ruleGroupOverrides?: ManagedRuleGroupOverrideResponse[];
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
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityResponse {
    /**
     * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    principalId: string;
    /**
     * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    tenantId: string;
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: string;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
}

/**
 * Define match conditions
 */
export interface MatchConditionResponse {
    /**
     * List of possible match values.
     */
    matchValue: string[];
    /**
     * Match variable to compare against.
     */
    matchVariable: string;
    /**
     * Describes if the result of this condition should be negated.
     */
    negateCondition?: boolean;
    /**
     * Describes operator to be matched
     */
    operator: string;
    /**
     * Selector can used to match a specific key for QueryString, Cookies, RequestHeader or PostArgs.
     */
    selector?: string;
    /**
     * List of transforms.
     */
    transforms?: string[];
}

/**
 * Defines the parameters for the origin group override action.
 */
export interface OriginGroupOverrideActionParametersResponse {
    /**
     * defines the OriginGroup that would override the DefaultOriginGroup.
     */
    originGroup: ResourceReferenceResponse;
    /**
     *
     * Expected value is 'DeliveryRuleOriginGroupOverrideActionParameters'.
     */
    typeName: "DeliveryRuleOriginGroupOverrideActionParameters";
}

/**
 * Defines the origin group override action for the delivery rule.
 */
export interface OriginGroupOverrideActionResponse {
    /**
     * The name of the action for the delivery rule.
     * Expected value is 'OriginGroupOverride'.
     */
    name: "OriginGroupOverride";
    /**
     * Defines the parameters for the action.
     */
    parameters: OriginGroupOverrideActionParametersResponse;
}

/**
 * Defines the parameters for the origin group override configuration.
 */
export interface OriginGroupOverrideResponse {
    /**
     * Protocol this rule will use when forwarding traffic to backends.
     */
    forwardingProtocol?: string;
    /**
     * defines the OriginGroup that would override the DefaultOriginGroup on route.
     */
    originGroup?: ResourceReferenceResponse;
}

/**
 * Defines contents of a web application firewall global configuration
 */
export interface PolicySettingsResponse {
    /**
     * If the action type is block, customer can override the response body. The body must be specified in base64 encoding.
     */
    defaultCustomBlockResponseBody?: string;
    /**
     * If the action type is block, this field defines the default customer overridable http response status code.
     */
    defaultCustomBlockResponseStatusCode?: number;
    /**
     * If action type is redirect, this field represents the default redirect URL for the client.
     */
    defaultRedirectUrl?: string;
    /**
     * describes if the policy is in enabled state or disabled state
     */
    enabledState?: string;
    /**
     * Describes if it is in detection mode or prevention mode at policy level.
     */
    mode?: string;
}

/**
 * Defines the parameters for PostArgs match conditions
 */
export interface PostArgsMatchConditionParametersResponse {
    /**
     * The match value for the condition of the delivery rule
     */
    matchValues?: string[];
    /**
     * Describes if this is negate condition or not
     */
    negateCondition?: boolean;
    /**
     * Describes operator to be matched
     */
    operator: string;
    /**
     * Name of PostArg to be matched
     */
    selector?: string;
    /**
     * List of transforms
     */
    transforms?: string[];
    /**
     *
     * Expected value is 'DeliveryRulePostArgsConditionParameters'.
     */
    typeName: "DeliveryRulePostArgsConditionParameters";
}
/**
 * postArgsMatchConditionParametersResponseProvideDefaults sets the appropriate defaults for PostArgsMatchConditionParametersResponse
 */
export function postArgsMatchConditionParametersResponseProvideDefaults(val: PostArgsMatchConditionParametersResponse): PostArgsMatchConditionParametersResponse {
    return {
        ...val,
        negateCondition: (val.negateCondition) ?? false,
    };
}

/**
 * Defines rules that scrub sensitive fields in the Azure Front Door profile logs.
 */
export interface ProfileLogScrubbingResponse {
    /**
     * List of log scrubbing rules applied to the Azure Front Door profile logs.
     */
    scrubbingRules?: ProfileScrubbingRulesResponse[];
    /**
     * State of the log scrubbing config. Default value is Enabled.
     */
    state?: string;
}

/**
 * Defines the contents of the log scrubbing rules.
 */
export interface ProfileScrubbingRulesResponse {
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

/**
 * Defines the parameters for QueryString match conditions
 */
export interface QueryStringMatchConditionParametersResponse {
    /**
     * The match value for the condition of the delivery rule
     */
    matchValues?: string[];
    /**
     * Describes if this is negate condition or not
     */
    negateCondition?: boolean;
    /**
     * Describes operator to be matched
     */
    operator: string;
    /**
     * List of transforms
     */
    transforms?: string[];
    /**
     *
     * Expected value is 'DeliveryRuleQueryStringConditionParameters'.
     */
    typeName: "DeliveryRuleQueryStringConditionParameters";
}
/**
 * queryStringMatchConditionParametersResponseProvideDefaults sets the appropriate defaults for QueryStringMatchConditionParametersResponse
 */
export function queryStringMatchConditionParametersResponseProvideDefaults(val: QueryStringMatchConditionParametersResponse): QueryStringMatchConditionParametersResponse {
    return {
        ...val,
        negateCondition: (val.negateCondition) ?? false,
    };
}

/**
 * Defines contents of rate limit rules
 */
export interface RateLimitRuleListResponse {
    /**
     * List of rules
     */
    rules?: RateLimitRuleResponse[];
}

/**
 * Defines a rate limiting rule that can be included in a waf policy
 */
export interface RateLimitRuleResponse {
    /**
     * Describes what action to be applied when rule matches
     */
    action: string;
    /**
     * Describes if the custom rule is in enabled or disabled state. Defaults to Enabled if not specified.
     */
    enabledState?: string;
    /**
     * List of match conditions.
     */
    matchConditions: MatchConditionResponse[];
    /**
     * Defines the name of the custom rule
     */
    name: string;
    /**
     * Defines in what order this rule be evaluated in the overall list of custom rules
     */
    priority: number;
    /**
     * Defines rate limit duration. Default is 1 minute.
     */
    rateLimitDurationInMinutes: number;
    /**
     * Defines rate limit threshold.
     */
    rateLimitThreshold: number;
}

/**
 * Defines the parameters for RemoteAddress match conditions
 */
export interface RemoteAddressMatchConditionParametersResponse {
    /**
     * Match values to match against. The operator will apply to each value in here with OR semantics. If any of them match the variable with the given operator this match condition is considered a match.
     */
    matchValues?: string[];
    /**
     * Describes if this is negate condition or not
     */
    negateCondition?: boolean;
    /**
     * Describes operator to be matched
     */
    operator: string;
    /**
     * List of transforms
     */
    transforms?: string[];
    /**
     *
     * Expected value is 'DeliveryRuleRemoteAddressConditionParameters'.
     */
    typeName: "DeliveryRuleRemoteAddressConditionParameters";
}
/**
 * remoteAddressMatchConditionParametersResponseProvideDefaults sets the appropriate defaults for RemoteAddressMatchConditionParametersResponse
 */
export function remoteAddressMatchConditionParametersResponseProvideDefaults(val: RemoteAddressMatchConditionParametersResponse): RemoteAddressMatchConditionParametersResponse {
    return {
        ...val,
        negateCondition: (val.negateCondition) ?? false,
    };
}

/**
 * Defines the parameters for RequestBody match conditions
 */
export interface RequestBodyMatchConditionParametersResponse {
    /**
     * The match value for the condition of the delivery rule
     */
    matchValues?: string[];
    /**
     * Describes if this is negate condition or not
     */
    negateCondition?: boolean;
    /**
     * Describes operator to be matched
     */
    operator: string;
    /**
     * List of transforms
     */
    transforms?: string[];
    /**
     *
     * Expected value is 'DeliveryRuleRequestBodyConditionParameters'.
     */
    typeName: "DeliveryRuleRequestBodyConditionParameters";
}
/**
 * requestBodyMatchConditionParametersResponseProvideDefaults sets the appropriate defaults for RequestBodyMatchConditionParametersResponse
 */
export function requestBodyMatchConditionParametersResponseProvideDefaults(val: RequestBodyMatchConditionParametersResponse): RequestBodyMatchConditionParametersResponse {
    return {
        ...val,
        negateCondition: (val.negateCondition) ?? false,
    };
}

/**
 * Defines the parameters for RequestHeader match conditions
 */
export interface RequestHeaderMatchConditionParametersResponse {
    /**
     * The match value for the condition of the delivery rule
     */
    matchValues?: string[];
    /**
     * Describes if this is negate condition or not
     */
    negateCondition?: boolean;
    /**
     * Describes operator to be matched
     */
    operator: string;
    /**
     * Name of Header to be matched
     */
    selector?: string;
    /**
     * List of transforms
     */
    transforms?: string[];
    /**
     *
     * Expected value is 'DeliveryRuleRequestHeaderConditionParameters'.
     */
    typeName: "DeliveryRuleRequestHeaderConditionParameters";
}
/**
 * requestHeaderMatchConditionParametersResponseProvideDefaults sets the appropriate defaults for RequestHeaderMatchConditionParametersResponse
 */
export function requestHeaderMatchConditionParametersResponseProvideDefaults(val: RequestHeaderMatchConditionParametersResponse): RequestHeaderMatchConditionParametersResponse {
    return {
        ...val,
        negateCondition: (val.negateCondition) ?? false,
    };
}

/**
 * Defines the parameters for RequestMethod match conditions
 */
export interface RequestMethodMatchConditionParametersResponse {
    /**
     * The match value for the condition of the delivery rule
     */
    matchValues?: string[];
    /**
     * Describes if this is negate condition or not
     */
    negateCondition?: boolean;
    /**
     * Describes operator to be matched
     */
    operator: string;
    /**
     * List of transforms
     */
    transforms?: string[];
    /**
     *
     * Expected value is 'DeliveryRuleRequestMethodConditionParameters'.
     */
    typeName: "DeliveryRuleRequestMethodConditionParameters";
}
/**
 * requestMethodMatchConditionParametersResponseProvideDefaults sets the appropriate defaults for RequestMethodMatchConditionParametersResponse
 */
export function requestMethodMatchConditionParametersResponseProvideDefaults(val: RequestMethodMatchConditionParametersResponse): RequestMethodMatchConditionParametersResponse {
    return {
        ...val,
        negateCondition: (val.negateCondition) ?? false,
    };
}

/**
 * Defines the parameters for RequestScheme match conditions 
 */
export interface RequestSchemeMatchConditionParametersResponse {
    /**
     * The match value for the condition of the delivery rule
     */
    matchValues?: string[];
    /**
     * Describes if this is negate condition or not
     */
    negateCondition?: boolean;
    /**
     * Describes operator to be matched
     */
    operator: string;
    /**
     * List of transforms
     */
    transforms?: string[];
    /**
     *
     * Expected value is 'DeliveryRuleRequestSchemeConditionParameters'.
     */
    typeName: "DeliveryRuleRequestSchemeConditionParameters";
}
/**
 * requestSchemeMatchConditionParametersResponseProvideDefaults sets the appropriate defaults for RequestSchemeMatchConditionParametersResponse
 */
export function requestSchemeMatchConditionParametersResponseProvideDefaults(val: RequestSchemeMatchConditionParametersResponse): RequestSchemeMatchConditionParametersResponse {
    return {
        ...val,
        negateCondition: (val.negateCondition) ?? false,
    };
}

/**
 * Defines the parameters for RequestUri match conditions
 */
export interface RequestUriMatchConditionParametersResponse {
    /**
     * The match value for the condition of the delivery rule
     */
    matchValues?: string[];
    /**
     * Describes if this is negate condition or not
     */
    negateCondition?: boolean;
    /**
     * Describes operator to be matched
     */
    operator: string;
    /**
     * List of transforms
     */
    transforms?: string[];
    /**
     *
     * Expected value is 'DeliveryRuleRequestUriConditionParameters'.
     */
    typeName: "DeliveryRuleRequestUriConditionParameters";
}
/**
 * requestUriMatchConditionParametersResponseProvideDefaults sets the appropriate defaults for RequestUriMatchConditionParametersResponse
 */
export function requestUriMatchConditionParametersResponseProvideDefaults(val: RequestUriMatchConditionParametersResponse): RequestUriMatchConditionParametersResponse {
    return {
        ...val,
        negateCondition: (val.negateCondition) ?? false,
    };
}

/**
 * Reference to another resource.
 */
export interface ResourceReferenceResponse {
    /**
     * Resource ID.
     */
    id?: string;
}

/**
 * The JSON object that contains the properties to determine origin health using real requests/responses.
 */
export interface ResponseBasedOriginErrorDetectionParametersResponse {
    /**
     * The list of Http status code ranges that are considered as server errors for origin and it is marked as unhealthy.
     */
    httpErrorRanges?: HttpErrorRangeParametersResponse[];
    /**
     * Type of response errors for real user requests for which origin will be deemed unhealthy
     */
    responseBasedDetectedErrorTypes?: string;
    /**
     * The percentage of failed requests in the sample where failover should trigger.
     */
    responseBasedFailoverThresholdPercentage?: number;
}

/**
 * Defines the parameters for the route configuration override action.
 */
export interface RouteConfigurationOverrideActionParametersResponse {
    /**
     * The caching configuration associated with this rule. To disable caching, do not provide a cacheConfiguration object.
     */
    cacheConfiguration?: CacheConfigurationResponse;
    /**
     * A reference to the origin group override configuration. Leave empty to use the default origin group on route.
     */
    originGroupOverride?: OriginGroupOverrideResponse;
    /**
     *
     * Expected value is 'DeliveryRuleRouteConfigurationOverrideActionParameters'.
     */
    typeName: "DeliveryRuleRouteConfigurationOverrideActionParameters";
}

/**
 * settings for security policy patterns to match
 */
export interface SecurityPolicyWebApplicationFirewallAssociationResponse {
    /**
     * List of domains.
     */
    domains?: ActivatedResourceReferenceResponse[];
    /**
     * List of paths
     */
    patternsToMatch?: string[];
}

/**
 * The json object containing security policy waf parameters
 */
export interface SecurityPolicyWebApplicationFirewallParametersResponse {
    /**
     * Waf associations
     */
    associations?: SecurityPolicyWebApplicationFirewallAssociationResponse[];
    /**
     * The type of the Security policy to create.
     * Expected value is 'WebApplicationFirewall'.
     */
    type: "WebApplicationFirewall";
    /**
     * Resource ID.
     */
    wafPolicy?: ResourceReferenceResponse;
}

/**
 * Defines the parameters for ServerPort match conditions
 */
export interface ServerPortMatchConditionParametersResponse {
    /**
     * The match value for the condition of the delivery rule
     */
    matchValues?: string[];
    /**
     * Describes if this is negate condition or not
     */
    negateCondition?: boolean;
    /**
     * Describes operator to be matched
     */
    operator: string;
    /**
     * List of transforms
     */
    transforms?: string[];
    /**
     *
     * Expected value is 'DeliveryRuleServerPortConditionParameters'.
     */
    typeName: "DeliveryRuleServerPortConditionParameters";
}
/**
 * serverPortMatchConditionParametersResponseProvideDefaults sets the appropriate defaults for ServerPortMatchConditionParametersResponse
 */
export function serverPortMatchConditionParametersResponseProvideDefaults(val: ServerPortMatchConditionParametersResponse): ServerPortMatchConditionParametersResponse {
    return {
        ...val,
        negateCondition: (val.negateCondition) ?? false,
    };
}

/**
 * Describes the properties of an existing Shared Private Link Resource to use when connecting to a private origin.
 */
export interface SharedPrivateLinkResourcePropertiesResponse {
    /**
     * The group id from the provider of resource the shared private link resource is for.
     */
    groupId?: string;
    /**
     * The resource id of the resource the shared private link resource is for.
     */
    privateLink?: ResourceReferenceResponse;
    /**
     * The location of the shared private link resource
     */
    privateLinkLocation?: string;
    /**
     * The request message for requesting approval of the shared private link resource.
     */
    requestMessage?: string;
    /**
     * Status of the shared private link resource. Can be Pending, Approved, Rejected, Disconnected, or Timeout.
     */
    status?: string;
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
export interface SkuResponse {
    /**
     * Name of the pricing tier.
     */
    name?: string;
}

/**
 * Defines the parameters for SocketAddress match conditions
 */
export interface SocketAddrMatchConditionParametersResponse {
    /**
     * The match value for the condition of the delivery rule
     */
    matchValues?: string[];
    /**
     * Describes if this is negate condition or not
     */
    negateCondition?: boolean;
    /**
     * Describes operator to be matched
     */
    operator: string;
    /**
     * List of transforms
     */
    transforms?: string[];
    /**
     *
     * Expected value is 'DeliveryRuleSocketAddrConditionParameters'.
     */
    typeName: "DeliveryRuleSocketAddrConditionParameters";
}
/**
 * socketAddrMatchConditionParametersResponseProvideDefaults sets the appropriate defaults for SocketAddrMatchConditionParametersResponse
 */
export function socketAddrMatchConditionParametersResponseProvideDefaults(val: SocketAddrMatchConditionParametersResponse): SocketAddrMatchConditionParametersResponse {
    return {
        ...val,
        negateCondition: (val.negateCondition) ?? false,
    };
}

/**
 * Defines the parameters for SslProtocol match conditions
 */
export interface SslProtocolMatchConditionParametersResponse {
    /**
     * The match value for the condition of the delivery rule
     */
    matchValues?: string[];
    /**
     * Describes if this is negate condition or not
     */
    negateCondition?: boolean;
    /**
     * Describes operator to be matched
     */
    operator: string;
    /**
     * List of transforms
     */
    transforms?: string[];
    /**
     *
     * Expected value is 'DeliveryRuleSslProtocolConditionParameters'.
     */
    typeName: "DeliveryRuleSslProtocolConditionParameters";
}
/**
 * sslProtocolMatchConditionParametersResponseProvideDefaults sets the appropriate defaults for SslProtocolMatchConditionParametersResponse
 */
export function sslProtocolMatchConditionParametersResponseProvideDefaults(val: SslProtocolMatchConditionParametersResponse): SslProtocolMatchConditionParametersResponse {
    return {
        ...val,
        negateCondition: (val.negateCondition) ?? false,
    };
}

/**
 * Read only system data
 */
export interface SystemDataResponse {
    /**
     * The timestamp of resource creation (UTC)
     */
    createdAt?: string;
    /**
     * An identifier for the identity that created the resource
     */
    createdBy?: string;
    /**
     * The type of identity that created the resource
     */
    createdByType?: string;
    /**
     * The timestamp of resource last modification (UTC)
     */
    lastModifiedAt?: string;
    /**
     * An identifier for the identity that last modified the resource
     */
    lastModifiedBy?: string;
    /**
     * The type of identity that last modified the resource
     */
    lastModifiedByType?: string;
}

/**
 * TargetEndpoint object that forms a traffic endpoint.
 */
export interface TargetEndpointResponse {
    /**
     * The Ports to be allowed for the FQDN.
     */
    ports?: number[];
    /**
     * The FQDN for traffic endpoint.
     */
    targetFqdn?: string;
}

/**
 * Defines the parameters for UrlFileExtension match conditions
 */
export interface UrlFileExtensionMatchConditionParametersResponse {
    /**
     * The match value for the condition of the delivery rule
     */
    matchValues?: string[];
    /**
     * Describes if this is negate condition or not
     */
    negateCondition?: boolean;
    /**
     * Describes operator to be matched
     */
    operator: string;
    /**
     * List of transforms
     */
    transforms?: string[];
    /**
     *
     * Expected value is 'DeliveryRuleUrlFileExtensionMatchConditionParameters'.
     */
    typeName: "DeliveryRuleUrlFileExtensionMatchConditionParameters";
}
/**
 * urlFileExtensionMatchConditionParametersResponseProvideDefaults sets the appropriate defaults for UrlFileExtensionMatchConditionParametersResponse
 */
export function urlFileExtensionMatchConditionParametersResponseProvideDefaults(val: UrlFileExtensionMatchConditionParametersResponse): UrlFileExtensionMatchConditionParametersResponse {
    return {
        ...val,
        negateCondition: (val.negateCondition) ?? false,
    };
}

/**
 * Defines the parameters for UrlFilename match conditions
 */
export interface UrlFileNameMatchConditionParametersResponse {
    /**
     * The match value for the condition of the delivery rule
     */
    matchValues?: string[];
    /**
     * Describes if this is negate condition or not
     */
    negateCondition?: boolean;
    /**
     * Describes operator to be matched
     */
    operator: string;
    /**
     * List of transforms
     */
    transforms?: string[];
    /**
     *
     * Expected value is 'DeliveryRuleUrlFilenameConditionParameters'.
     */
    typeName: "DeliveryRuleUrlFilenameConditionParameters";
}
/**
 * urlFileNameMatchConditionParametersResponseProvideDefaults sets the appropriate defaults for UrlFileNameMatchConditionParametersResponse
 */
export function urlFileNameMatchConditionParametersResponseProvideDefaults(val: UrlFileNameMatchConditionParametersResponse): UrlFileNameMatchConditionParametersResponse {
    return {
        ...val,
        negateCondition: (val.negateCondition) ?? false,
    };
}

/**
 * Defines the parameters for UrlPath match conditions
 */
export interface UrlPathMatchConditionParametersResponse {
    /**
     * The match value for the condition of the delivery rule
     */
    matchValues?: string[];
    /**
     * Describes if this is negate condition or not
     */
    negateCondition?: boolean;
    /**
     * Describes operator to be matched
     */
    operator: string;
    /**
     * List of transforms
     */
    transforms?: string[];
    /**
     *
     * Expected value is 'DeliveryRuleUrlPathMatchConditionParameters'.
     */
    typeName: "DeliveryRuleUrlPathMatchConditionParameters";
}
/**
 * urlPathMatchConditionParametersResponseProvideDefaults sets the appropriate defaults for UrlPathMatchConditionParametersResponse
 */
export function urlPathMatchConditionParametersResponseProvideDefaults(val: UrlPathMatchConditionParametersResponse): UrlPathMatchConditionParametersResponse {
    return {
        ...val,
        negateCondition: (val.negateCondition) ?? false,
    };
}

/**
 * Defines the parameters for the url redirect action.
 */
export interface UrlRedirectActionParametersResponse {
    /**
     * Fragment to add to the redirect URL. Fragment is the part of the URL that comes after #. Do not include the #.
     */
    customFragment?: string;
    /**
     * Host to redirect. Leave empty to use the incoming host as the destination host.
     */
    customHostname?: string;
    /**
     * The full path to redirect. Path cannot be empty and must start with /. Leave empty to use the incoming path as destination path.
     */
    customPath?: string;
    /**
     * The set of query strings to be placed in the redirect URL. Setting this value would replace any existing query string; leave empty to preserve the incoming query string. Query string must be in <key>=<value> format. ? and & will be added automatically so do not include them.
     */
    customQueryString?: string;
    /**
     * Protocol to use for the redirect. The default value is MatchRequest
     */
    destinationProtocol?: string;
    /**
     * The redirect type the rule will use when redirecting traffic.
     */
    redirectType: string;
    /**
     *
     * Expected value is 'DeliveryRuleUrlRedirectActionParameters'.
     */
    typeName: "DeliveryRuleUrlRedirectActionParameters";
}

/**
 * Defines the url redirect action for the delivery rule.
 */
export interface UrlRedirectActionResponse {
    /**
     * The name of the action for the delivery rule.
     * Expected value is 'UrlRedirect'.
     */
    name: "UrlRedirect";
    /**
     * Defines the parameters for the action.
     */
    parameters: UrlRedirectActionParametersResponse;
}

/**
 * Defines the parameters for the url rewrite action.
 */
export interface UrlRewriteActionParametersResponse {
    /**
     * Define the relative URL to which the above requests will be rewritten by.
     */
    destination: string;
    /**
     * Whether to preserve unmatched path. Default value is true.
     */
    preserveUnmatchedPath?: boolean;
    /**
     * define a request URI pattern that identifies the type of requests that may be rewritten. If value is blank, all strings are matched.
     */
    sourcePattern: string;
    /**
     *
     * Expected value is 'DeliveryRuleUrlRewriteActionParameters'.
     */
    typeName: "DeliveryRuleUrlRewriteActionParameters";
}

/**
 * Defines the url rewrite action for the delivery rule.
 */
export interface UrlRewriteActionResponse {
    /**
     * The name of the action for the delivery rule.
     * Expected value is 'UrlRewrite'.
     */
    name: "UrlRewrite";
    /**
     * Defines the parameters for the action.
     */
    parameters: UrlRewriteActionParametersResponse;
}

/**
 * Defines the parameters for the Url Signing action.
 */
export interface UrlSigningActionParametersResponse {
    /**
     * Algorithm to use for URL signing
     */
    algorithm?: string;
    /**
     * Defines which query string parameters in the url to be considered for expires, key id etc. 
     */
    parameterNameOverride?: UrlSigningParamIdentifierResponse[];
    /**
     *
     * Expected value is 'DeliveryRuleUrlSigningActionParameters'.
     */
    typeName: "DeliveryRuleUrlSigningActionParameters";
}

/**
 * Defines the url signing action for the delivery rule.
 */
export interface UrlSigningActionResponse {
    /**
     * The name of the action for the delivery rule.
     * Expected value is 'UrlSigning'.
     */
    name: "UrlSigning";
    /**
     * Defines the parameters for the action.
     */
    parameters: UrlSigningActionParametersResponse;
}

/**
 * Url signing key parameters
 */
export interface UrlSigningKeyParametersResponse {
    /**
     * Defines the customer defined key Id. This id will exist in the incoming request to indicate the key used to form the hash.
     */
    keyId: string;
    /**
     * Resource reference to the Azure Key Vault secret. Expected to be in format of /subscriptions/{​​​​​​​​​subscriptionId}​​​​​​​​​/resourceGroups/{​​​​​​​​​resourceGroupName}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​/providers/Microsoft.KeyVault/vaults/{vaultName}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​/secrets/{secretName}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
     */
    secretSource: ResourceReferenceResponse;
    /**
     * Version of the secret to be used
     */
    secretVersion: string;
    /**
     * The type of the secret resource.
     * Expected value is 'UrlSigningKey'.
     */
    type: "UrlSigningKey";
}

/**
 * Url signing key
 */
export interface UrlSigningKeyResponse {
    /**
     * Defines the customer defined key Id. This id will exist in the incoming request to indicate the key used to form the hash.
     */
    keyId: string;
    /**
     * Defines the parameters for using customer key vault for Url Signing Key.
     */
    keySourceParameters: KeyVaultSigningKeyParametersResponse;
}

/**
 * Defines how to identify a parameter for a specific purpose e.g. expires
 */
export interface UrlSigningParamIdentifierResponse {
    /**
     * Indicates the purpose of the parameter
     */
    paramIndicator: string;
    /**
     * Parameter name
     */
    paramName: string;
}

/**
 * User assigned identity properties
 */
export interface UserAssignedIdentityResponse {
    /**
     * The client ID of the assigned identity.
     */
    clientId: string;
    /**
     * The principal ID of the assigned identity.
     */
    principalId: string;
}

/**
 * Defines the certificate source parameters using user's keyvault certificate for enabling SSL.
 */
export interface UserManagedHttpsParametersResponse {
    /**
     * Defines the source of the SSL certificate.
     * Expected value is 'AzureKeyVault'.
     */
    certificateSource: "AzureKeyVault";
    /**
     * Defines the certificate source parameters using user's keyvault certificate for enabling SSL.
     */
    certificateSourceParameters: KeyVaultCertificateSourceParametersResponse;
    /**
     * TLS protocol version that will be used for Https
     */
    minimumTlsVersion?: string;
    /**
     * Defines the TLS extension protocol that is used for secure delivery.
     */
    protocolType: string;
}
