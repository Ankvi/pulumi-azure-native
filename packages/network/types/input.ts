import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * AAD Vpn authentication type related parameters.
 */
export interface AadAuthenticationParametersArgs {
    /**
     * AAD Vpn authentication parameter AAD audience.
     */
    aadAudience?: pulumi.Input<string>;
    /**
     * AAD Vpn authentication parameter AAD issuer.
     */
    aadIssuer?: pulumi.Input<string>;
    /**
     * AAD Vpn authentication parameter AAD tenant.
     */
    aadTenant?: pulumi.Input<string>;
}

/**
 * Action to be taken on a route matching a RouteMap criterion.
 */
export interface ActionArgs {
    /**
     * List of parameters relevant to the action.For instance if type is drop then parameters has list of prefixes to be dropped.If type is add, parameters would have list of ASN numbers to be added
     */
    parameters?: pulumi.Input<pulumi.Input<ParameterArgs>[]>;
    /**
     * Type of action to be taken. Supported types are 'Remove', 'Add', 'Replace', and 'Drop.'
     */
    type?: pulumi.Input<string | enums.RouteMapActionType>;
}

/**
 * Address prefix item.
 */
export interface AddressPrefixItemArgs {
    /**
     * Address prefix.
     */
    addressPrefix?: pulumi.Input<string>;
    /**
     * Address prefix type.
     */
    addressPrefixType?: pulumi.Input<string | enums.AddressPrefixType>;
}

/**
 * AddressSpace contains an array of IP address ranges that can be used by subnets of the virtual network.
 */
export interface AddressSpaceArgs {
    /**
     * A list of address blocks reserved for this virtual network in CIDR notation.
     */
    addressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of IPAM Pools allocating IP address prefixes.
     */
    ipamPoolPrefixAllocations?: pulumi.Input<pulumi.Input<IpamPoolPrefixAllocationArgs>[]>;
}

/**
 * Authentication certificates of an application gateway.
 */
export interface ApplicationGatewayAuthenticationCertificateArgs {
    /**
     * Certificate public data.
     */
    data?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Name of the authentication certificate that is unique within an Application Gateway.
     */
    name?: pulumi.Input<string>;
}

/**
 * Application Gateway autoscale configuration.
 */
export interface ApplicationGatewayAutoscaleConfigurationArgs {
    /**
     * Upper bound on number of Application Gateway capacity.
     */
    maxCapacity?: pulumi.Input<number>;
    /**
     * Lower bound on number of Application Gateway capacity.
     */
    minCapacity: pulumi.Input<number>;
}

/**
 * Backend address of an application gateway.
 */
export interface ApplicationGatewayBackendAddressArgs {
    /**
     * Fully qualified domain name (FQDN).
     */
    fqdn?: pulumi.Input<string>;
    /**
     * IP address.
     */
    ipAddress?: pulumi.Input<string>;
}

/**
 * Backend Address Pool of an application gateway.
 */
export interface ApplicationGatewayBackendAddressPoolArgs {
    /**
     * Backend addresses.
     */
    backendAddresses?: pulumi.Input<pulumi.Input<ApplicationGatewayBackendAddressArgs>[]>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Name of the backend address pool that is unique within an Application Gateway.
     */
    name?: pulumi.Input<string>;
}

/**
 * Backend address pool settings of an application gateway.
 */
export interface ApplicationGatewayBackendHttpSettingsArgs {
    /**
     * Cookie name to use for the affinity cookie.
     */
    affinityCookieName?: pulumi.Input<string>;
    /**
     * Array of references to application gateway authentication certificates.
     */
    authenticationCertificates?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
    /**
     * Connection draining of the backend http settings resource.
     */
    connectionDraining?: pulumi.Input<ApplicationGatewayConnectionDrainingArgs>;
    /**
     * Cookie based affinity.
     */
    cookieBasedAffinity?: pulumi.Input<string | enums.ApplicationGatewayCookieBasedAffinity>;
    /**
     * Host header to be sent to the backend servers.
     */
    hostName?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Name of the backend http settings that is unique within an Application Gateway.
     */
    name?: pulumi.Input<string>;
    /**
     * Path which should be used as a prefix for all HTTP requests. Null means no path will be prefixed. Default value is null.
     */
    path?: pulumi.Input<string>;
    /**
     * Whether to pick host header should be picked from the host name of the backend server. Default value is false.
     */
    pickHostNameFromBackendAddress?: pulumi.Input<boolean>;
    /**
     * The destination port on the backend.
     */
    port?: pulumi.Input<number>;
    /**
     * Probe resource of an application gateway.
     */
    probe?: pulumi.Input<SubResourceArgs>;
    /**
     * Whether the probe is enabled. Default value is false.
     */
    probeEnabled?: pulumi.Input<boolean>;
    /**
     * The protocol used to communicate with the backend.
     */
    protocol?: pulumi.Input<string | enums.ApplicationGatewayProtocol>;
    /**
     * Request timeout in seconds. Application Gateway will fail the request if response is not received within RequestTimeout. Acceptable values are from 1 second to 86400 seconds.
     */
    requestTimeout?: pulumi.Input<number>;
    /**
     * Array of references to application gateway trusted root certificates.
     */
    trustedRootCertificates?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
}

/**
 * Backend address pool settings of an application gateway.
 */
export interface ApplicationGatewayBackendSettingsArgs {
    /**
     * Server name indication to be sent to the backend servers for Tls protocol.
     */
    hostName?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Name of the backend settings that is unique within an Application Gateway.
     */
    name?: pulumi.Input<string>;
    /**
     * Whether to pick server name indication from the host name of the backend server for Tls protocol. Default value is false.
     */
    pickHostNameFromBackendAddress?: pulumi.Input<boolean>;
    /**
     * The destination port on the backend.
     */
    port?: pulumi.Input<number>;
    /**
     * Probe resource of an application gateway.
     */
    probe?: pulumi.Input<SubResourceArgs>;
    /**
     * The protocol used to communicate with the backend.
     */
    protocol?: pulumi.Input<string | enums.ApplicationGatewayProtocol>;
    /**
     * Connection timeout in seconds. Application Gateway will fail the request if response is not received within ConnectionTimeout. Acceptable values are from 1 second to 86400 seconds.
     */
    timeout?: pulumi.Input<number>;
    /**
     * Array of references to application gateway trusted root certificates.
     */
    trustedRootCertificates?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
}

/**
 * Application gateway client authentication configuration.
 */
export interface ApplicationGatewayClientAuthConfigurationArgs {
    /**
     * Verify client certificate issuer name on the application gateway.
     */
    verifyClientCertIssuerDN?: pulumi.Input<boolean>;
    /**
     * Verify client certificate revocation status.
     */
    verifyClientRevocation?: pulumi.Input<string | enums.ApplicationGatewayClientRevocationOptions>;
}

/**
 * Connection draining allows open connections to a backend server to be active for a specified time after the backend server got removed from the configuration.
 */
export interface ApplicationGatewayConnectionDrainingArgs {
    /**
     * The number of seconds connection draining is active. Acceptable values are from 1 second to 3600 seconds.
     */
    drainTimeoutInSec: pulumi.Input<number>;
    /**
     * Whether connection draining is enabled or not.
     */
    enabled: pulumi.Input<boolean>;
}

/**
 * Custom error of an application gateway.
 */
export interface ApplicationGatewayCustomErrorArgs {
    /**
     * Error page URL of the application gateway custom error.
     */
    customErrorPageUrl?: pulumi.Input<string>;
    /**
     * Status code of the application gateway custom error.
     */
    statusCode?: pulumi.Input<string | enums.ApplicationGatewayCustomErrorStatusCode>;
}

/**
 * Allows to disable rules within a rule group or an entire rule group.
 */
export interface ApplicationGatewayFirewallDisabledRuleGroupArgs {
    /**
     * The name of the rule group that will be disabled.
     */
    ruleGroupName: pulumi.Input<string>;
    /**
     * The list of rules that will be disabled. If null, all rules of the rule group will be disabled.
     */
    rules?: pulumi.Input<pulumi.Input<number>[]>;
}

/**
 * Allow to exclude some variable satisfy the condition for the WAF check.
 */
export interface ApplicationGatewayFirewallExclusionArgs {
    /**
     * The variable to be excluded.
     */
    matchVariable: pulumi.Input<string>;
    /**
     * When matchVariable is a collection, operator used to specify which elements in the collection this exclusion applies to.
     */
    selector: pulumi.Input<string>;
    /**
     * When matchVariable is a collection, operate on the selector to specify which elements in the collection this exclusion applies to.
     */
    selectorMatchOperator: pulumi.Input<string>;
}

/**
 * Frontend IP configuration of an application gateway.
 */
export interface ApplicationGatewayFrontendIPConfigurationArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Name of the frontend IP configuration that is unique within an Application Gateway.
     */
    name?: pulumi.Input<string>;
    /**
     * PrivateIPAddress of the network interface IP Configuration.
     */
    privateIPAddress?: pulumi.Input<string>;
    /**
     * The private IP address allocation method.
     */
    privateIPAllocationMethod?: pulumi.Input<string | enums.IPAllocationMethod>;
    /**
     * Reference to the application gateway private link configuration.
     */
    privateLinkConfiguration?: pulumi.Input<SubResourceArgs>;
    /**
     * Reference to the PublicIP resource.
     */
    publicIPAddress?: pulumi.Input<SubResourceArgs>;
    /**
     * Reference to the subnet resource.
     */
    subnet?: pulumi.Input<SubResourceArgs>;
}

/**
 * Frontend port of an application gateway.
 */
export interface ApplicationGatewayFrontendPortArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Name of the frontend port that is unique within an Application Gateway.
     */
    name?: pulumi.Input<string>;
    /**
     * Frontend port.
     */
    port?: pulumi.Input<number>;
}

/**
 * Application Gateway global configuration.
 */
export interface ApplicationGatewayGlobalConfigurationArgs {
    /**
     * Enable request buffering.
     */
    enableRequestBuffering?: pulumi.Input<boolean>;
    /**
     * Enable response buffering.
     */
    enableResponseBuffering?: pulumi.Input<boolean>;
}

/**
 * Header configuration of the Actions set in Application Gateway.
 */
export interface ApplicationGatewayHeaderConfigurationArgs {
    /**
     * Header name of the header configuration.
     */
    headerName?: pulumi.Input<string>;
    /**
     * Header value of the header configuration.
     */
    headerValue?: pulumi.Input<string>;
    /**
     * An optional field under "Rewrite Action". It lets you capture and modify the value(s) of a specific header when multiple headers with the same name exist. Currently supported for Set-Cookie Response header only. For more details, visit https://aka.ms/appgwheadercrud
     */
    headerValueMatcher?: pulumi.Input<HeaderValueMatcherArgs>;
}

/**
 * Http listener of an application gateway.
 */
export interface ApplicationGatewayHttpListenerArgs {
    /**
     * Custom error configurations of the HTTP listener.
     */
    customErrorConfigurations?: pulumi.Input<pulumi.Input<ApplicationGatewayCustomErrorArgs>[]>;
    /**
     * Reference to the FirewallPolicy resource.
     */
    firewallPolicy?: pulumi.Input<SubResourceArgs>;
    /**
     * Frontend IP configuration resource of an application gateway.
     */
    frontendIPConfiguration?: pulumi.Input<SubResourceArgs>;
    /**
     * Frontend port resource of an application gateway.
     */
    frontendPort?: pulumi.Input<SubResourceArgs>;
    /**
     * Host name of HTTP listener.
     */
    hostName?: pulumi.Input<string>;
    /**
     * List of Host names for HTTP Listener that allows special wildcard characters as well.
     */
    hostNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Name of the HTTP listener that is unique within an Application Gateway.
     */
    name?: pulumi.Input<string>;
    /**
     * Protocol of the HTTP listener.
     */
    protocol?: pulumi.Input<string | enums.ApplicationGatewayProtocol>;
    /**
     * Applicable only if protocol is https. Enables SNI for multi-hosting.
     */
    requireServerNameIndication?: pulumi.Input<boolean>;
    /**
     * SSL certificate resource of an application gateway.
     */
    sslCertificate?: pulumi.Input<SubResourceArgs>;
    /**
     * SSL profile resource of the application gateway.
     */
    sslProfile?: pulumi.Input<SubResourceArgs>;
}

/**
 * IP configuration of an application gateway. Currently 1 public and 1 private IP configuration is allowed.
 */
export interface ApplicationGatewayIPConfigurationArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Name of the IP configuration that is unique within an Application Gateway.
     */
    name?: pulumi.Input<string>;
    /**
     * Reference to the subnet resource. A subnet from where application gateway gets its private address.
     */
    subnet?: pulumi.Input<SubResourceArgs>;
}

/**
 * Listener of an application gateway.
 */
export interface ApplicationGatewayListenerArgs {
    /**
     * Frontend IP configuration resource of an application gateway.
     */
    frontendIPConfiguration?: pulumi.Input<SubResourceArgs>;
    /**
     * Frontend port resource of an application gateway.
     */
    frontendPort?: pulumi.Input<SubResourceArgs>;
    /**
     * List of Server Name Indications(SNI) for TLS Multi-site Listener that allows special wildcard characters as well.
     */
    hostNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Name of the listener that is unique within an Application Gateway.
     */
    name?: pulumi.Input<string>;
    /**
     * Protocol of the listener.
     */
    protocol?: pulumi.Input<string | enums.ApplicationGatewayProtocol>;
    /**
     * SSL certificate resource of an application gateway.
     */
    sslCertificate?: pulumi.Input<SubResourceArgs>;
    /**
     * SSL profile resource of the application gateway.
     */
    sslProfile?: pulumi.Input<SubResourceArgs>;
}

/**
 * Load Distribution Policy of an application gateway.
 */
export interface ApplicationGatewayLoadDistributionPolicyArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Load Distribution Targets resource of an application gateway.
     */
    loadDistributionAlgorithm?: pulumi.Input<string | enums.ApplicationGatewayLoadDistributionAlgorithm>;
    /**
     * Load Distribution Targets resource of an application gateway.
     */
    loadDistributionTargets?: pulumi.Input<pulumi.Input<ApplicationGatewayLoadDistributionTargetArgs>[]>;
    /**
     * Name of the load distribution policy that is unique within an Application Gateway.
     */
    name?: pulumi.Input<string>;
}

/**
 * Load Distribution Target of an application gateway.
 */
export interface ApplicationGatewayLoadDistributionTargetArgs {
    /**
     * Backend address pool resource of the application gateway.
     */
    backendAddressPool?: pulumi.Input<SubResourceArgs>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Name of the load distribution policy that is unique within an Application Gateway.
     */
    name?: pulumi.Input<string>;
    /**
     * Weight per server. Range between 1 and 100.
     */
    weightPerServer?: pulumi.Input<number>;
}

/**
 * Path rule of URL path map of an application gateway.
 */
export interface ApplicationGatewayPathRuleArgs {
    /**
     * Backend address pool resource of URL path map path rule.
     */
    backendAddressPool?: pulumi.Input<SubResourceArgs>;
    /**
     * Backend http settings resource of URL path map path rule.
     */
    backendHttpSettings?: pulumi.Input<SubResourceArgs>;
    /**
     * Reference to the FirewallPolicy resource.
     */
    firewallPolicy?: pulumi.Input<SubResourceArgs>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Load Distribution Policy resource of URL path map path rule.
     */
    loadDistributionPolicy?: pulumi.Input<SubResourceArgs>;
    /**
     * Name of the path rule that is unique within an Application Gateway.
     */
    name?: pulumi.Input<string>;
    /**
     * Path rules of URL path map.
     */
    paths?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Redirect configuration resource of URL path map path rule.
     */
    redirectConfiguration?: pulumi.Input<SubResourceArgs>;
    /**
     * Rewrite rule set resource of URL path map path rule.
     */
    rewriteRuleSet?: pulumi.Input<SubResourceArgs>;
}

/**
 * Private Link Configuration on an application gateway.
 */
export interface ApplicationGatewayPrivateLinkConfigurationArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * An array of application gateway private link ip configurations.
     */
    ipConfigurations?: pulumi.Input<pulumi.Input<ApplicationGatewayPrivateLinkIpConfigurationArgs>[]>;
    /**
     * Name of the private link configuration that is unique within an Application Gateway.
     */
    name?: pulumi.Input<string>;
}

/**
 * The application gateway private link ip configuration.
 */
export interface ApplicationGatewayPrivateLinkIpConfigurationArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of application gateway private link ip configuration.
     */
    name?: pulumi.Input<string>;
    /**
     * Whether the ip configuration is primary or not.
     */
    primary?: pulumi.Input<boolean>;
    /**
     * The private IP address of the IP configuration.
     */
    privateIPAddress?: pulumi.Input<string>;
    /**
     * The private IP address allocation method.
     */
    privateIPAllocationMethod?: pulumi.Input<string | enums.IPAllocationMethod>;
    /**
     * Reference to the subnet resource.
     */
    subnet?: pulumi.Input<SubResourceArgs>;
}

/**
 * Probe of the application gateway.
 */
export interface ApplicationGatewayProbeArgs {
    /**
     * Host name to send the probe to.
     */
    host?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The probing interval in seconds. This is the time interval between two consecutive probes. Acceptable values are from 1 second to 86400 seconds.
     */
    interval?: pulumi.Input<number>;
    /**
     * Criterion for classifying a healthy probe response.
     */
    match?: pulumi.Input<ApplicationGatewayProbeHealthResponseMatchArgs>;
    /**
     * Minimum number of servers that are always marked healthy. Default value is 0.
     */
    minServers?: pulumi.Input<number>;
    /**
     * Name of the probe that is unique within an Application Gateway.
     */
    name?: pulumi.Input<string>;
    /**
     * Relative path of probe. Valid path starts from '/'. Probe is sent to <Protocol>://<host>:<port><path>.
     */
    path?: pulumi.Input<string>;
    /**
     * Whether the host header should be picked from the backend http settings. Default value is false.
     */
    pickHostNameFromBackendHttpSettings?: pulumi.Input<boolean>;
    /**
     * Whether the server name indication should be picked from the backend settings for Tls protocol. Default value is false.
     */
    pickHostNameFromBackendSettings?: pulumi.Input<boolean>;
    /**
     * Custom port which will be used for probing the backend servers. The valid value ranges from 1 to 65535. In case not set, port from http settings will be used. This property is valid for Basic, Standard_v2 and WAF_v2 only.
     */
    port?: pulumi.Input<number>;
    /**
     * The protocol used for the probe.
     */
    protocol?: pulumi.Input<string | enums.ApplicationGatewayProtocol>;
    /**
     * The probe timeout in seconds. Probe marked as failed if valid response is not received with this timeout period. Acceptable values are from 1 second to 86400 seconds.
     */
    timeout?: pulumi.Input<number>;
    /**
     * The probe retry count. Backend server is marked down after consecutive probe failure count reaches UnhealthyThreshold. Acceptable values are from 1 second to 20.
     */
    unhealthyThreshold?: pulumi.Input<number>;
}

/**
 * Application gateway probe health response match.
 */
export interface ApplicationGatewayProbeHealthResponseMatch {
    /**
     * Body that must be contained in the health response. Default value is empty.
     */
    body?: string;
    /**
     * Allowed ranges of healthy status codes. Default range of healthy status codes is 200-399.
     */
    statusCodes?: string[];
}

/**
 * Application gateway probe health response match.
 */
export interface ApplicationGatewayProbeHealthResponseMatchArgs {
    /**
     * Body that must be contained in the health response. Default value is empty.
     */
    body?: pulumi.Input<string>;
    /**
     * Allowed ranges of healthy status codes. Default range of healthy status codes is 200-399.
     */
    statusCodes?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Redirect configuration of an application gateway.
 */
export interface ApplicationGatewayRedirectConfigurationArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Include path in the redirected url.
     */
    includePath?: pulumi.Input<boolean>;
    /**
     * Include query string in the redirected url.
     */
    includeQueryString?: pulumi.Input<boolean>;
    /**
     * Name of the redirect configuration that is unique within an Application Gateway.
     */
    name?: pulumi.Input<string>;
    /**
     * Path rules specifying redirect configuration.
     */
    pathRules?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
    /**
     * HTTP redirection type.
     */
    redirectType?: pulumi.Input<string | enums.ApplicationGatewayRedirectType>;
    /**
     * Request routing specifying redirect configuration.
     */
    requestRoutingRules?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
    /**
     * Reference to a listener to redirect the request to.
     */
    targetListener?: pulumi.Input<SubResourceArgs>;
    /**
     * Url to redirect the request to.
     */
    targetUrl?: pulumi.Input<string>;
    /**
     * Url path maps specifying default redirect configuration.
     */
    urlPathMaps?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
}

/**
 * Request routing rule of an application gateway.
 */
export interface ApplicationGatewayRequestRoutingRuleArgs {
    /**
     * Backend address pool resource of the application gateway.
     */
    backendAddressPool?: pulumi.Input<SubResourceArgs>;
    /**
     * Backend http settings resource of the application gateway.
     */
    backendHttpSettings?: pulumi.Input<SubResourceArgs>;
    /**
     * Http listener resource of the application gateway.
     */
    httpListener?: pulumi.Input<SubResourceArgs>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Load Distribution Policy resource of the application gateway.
     */
    loadDistributionPolicy?: pulumi.Input<SubResourceArgs>;
    /**
     * Name of the request routing rule that is unique within an Application Gateway.
     */
    name?: pulumi.Input<string>;
    /**
     * Priority of the request routing rule.
     */
    priority?: pulumi.Input<number>;
    /**
     * Redirect configuration resource of the application gateway.
     */
    redirectConfiguration?: pulumi.Input<SubResourceArgs>;
    /**
     * Rewrite Rule Set resource in Basic rule of the application gateway.
     */
    rewriteRuleSet?: pulumi.Input<SubResourceArgs>;
    /**
     * Rule type.
     */
    ruleType?: pulumi.Input<string | enums.ApplicationGatewayRequestRoutingRuleType>;
    /**
     * URL path map resource of the application gateway.
     */
    urlPathMap?: pulumi.Input<SubResourceArgs>;
}

/**
 * Rewrite rule of an application gateway.
 */
export interface ApplicationGatewayRewriteRuleArgs {
    /**
     * Set of actions to be done as part of the rewrite Rule.
     */
    actionSet?: pulumi.Input<ApplicationGatewayRewriteRuleActionSetArgs>;
    /**
     * Conditions based on which the action set execution will be evaluated.
     */
    conditions?: pulumi.Input<pulumi.Input<ApplicationGatewayRewriteRuleConditionArgs>[]>;
    /**
     * Name of the rewrite rule that is unique within an Application Gateway.
     */
    name?: pulumi.Input<string>;
    /**
     * Rule Sequence of the rewrite rule that determines the order of execution of a particular rule in a RewriteRuleSet.
     */
    ruleSequence?: pulumi.Input<number>;
}

/**
 * Set of actions in the Rewrite Rule in Application Gateway.
 */
export interface ApplicationGatewayRewriteRuleActionSetArgs {
    /**
     * Request Header Actions in the Action Set.
     */
    requestHeaderConfigurations?: pulumi.Input<pulumi.Input<ApplicationGatewayHeaderConfigurationArgs>[]>;
    /**
     * Response Header Actions in the Action Set.
     */
    responseHeaderConfigurations?: pulumi.Input<pulumi.Input<ApplicationGatewayHeaderConfigurationArgs>[]>;
    /**
     * Url Configuration Action in the Action Set.
     */
    urlConfiguration?: pulumi.Input<ApplicationGatewayUrlConfigurationArgs>;
}

/**
 * Set of conditions in the Rewrite Rule in Application Gateway.
 */
export interface ApplicationGatewayRewriteRuleConditionArgs {
    /**
     * Setting this parameter to truth value with force the pattern to do a case in-sensitive comparison.
     */
    ignoreCase?: pulumi.Input<boolean>;
    /**
     * Setting this value as truth will force to check the negation of the condition given by the user.
     */
    negate?: pulumi.Input<boolean>;
    /**
     * The pattern, either fixed string or regular expression, that evaluates the truthfulness of the condition.
     */
    pattern?: pulumi.Input<string>;
    /**
     * The condition parameter of the RewriteRuleCondition.
     */
    variable?: pulumi.Input<string>;
}

/**
 * Rewrite rule set of an application gateway.
 */
export interface ApplicationGatewayRewriteRuleSetArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Name of the rewrite rule set that is unique within an Application Gateway.
     */
    name?: pulumi.Input<string>;
    /**
     * Rewrite rules in the rewrite rule set.
     */
    rewriteRules?: pulumi.Input<pulumi.Input<ApplicationGatewayRewriteRuleArgs>[]>;
}

/**
 * Routing rule of an application gateway.
 */
export interface ApplicationGatewayRoutingRuleArgs {
    /**
     * Backend address pool resource of the application gateway.
     */
    backendAddressPool?: pulumi.Input<SubResourceArgs>;
    /**
     * Backend settings resource of the application gateway.
     */
    backendSettings?: pulumi.Input<SubResourceArgs>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Listener resource of the application gateway.
     */
    listener?: pulumi.Input<SubResourceArgs>;
    /**
     * Name of the routing rule that is unique within an Application Gateway.
     */
    name?: pulumi.Input<string>;
    /**
     * Priority of the routing rule.
     */
    priority: pulumi.Input<number>;
    /**
     * Rule type.
     */
    ruleType?: pulumi.Input<string | enums.ApplicationGatewayRequestRoutingRuleType>;
}

/**
 * SKU of an application gateway.
 */
export interface ApplicationGatewaySkuArgs {
    /**
     * Capacity (instance count) of an application gateway.
     */
    capacity?: pulumi.Input<number>;
    /**
     * Family of an application gateway SKU.
     */
    family?: pulumi.Input<string | enums.ApplicationGatewaySkuFamily>;
    /**
     * Name of an application gateway SKU.
     */
    name?: pulumi.Input<string | enums.ApplicationGatewaySkuName>;
    /**
     * Tier of an application gateway.
     */
    tier?: pulumi.Input<string | enums.ApplicationGatewayTier>;
}

/**
 * SSL certificates of an application gateway.
 */
export interface ApplicationGatewaySslCertificateArgs {
    /**
     * Base-64 encoded pfx certificate. Only applicable in PUT Request.
     */
    data?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Secret Id of (base-64 encoded unencrypted pfx) 'Secret' or 'Certificate' object stored in KeyVault.
     */
    keyVaultSecretId?: pulumi.Input<string>;
    /**
     * Name of the SSL certificate that is unique within an Application Gateway.
     */
    name?: pulumi.Input<string>;
    /**
     * Password for the pfx file specified in data. Only applicable in PUT request.
     */
    password?: pulumi.Input<string>;
}

/**
 * Application Gateway Ssl policy.
 */
export interface ApplicationGatewaySslPolicyArgs {
    /**
     * Ssl cipher suites to be enabled in the specified order to application gateway.
     */
    cipherSuites?: pulumi.Input<pulumi.Input<string | enums.ApplicationGatewaySslCipherSuite>[]>;
    /**
     * Ssl protocols to be disabled on application gateway.
     */
    disabledSslProtocols?: pulumi.Input<pulumi.Input<string | enums.ApplicationGatewaySslProtocol>[]>;
    /**
     * Minimum version of Ssl protocol to be supported on application gateway.
     */
    minProtocolVersion?: pulumi.Input<string | enums.ApplicationGatewaySslProtocol>;
    /**
     * Name of Ssl predefined policy.
     */
    policyName?: pulumi.Input<string | enums.ApplicationGatewaySslPolicyName>;
    /**
     * Type of Ssl Policy.
     */
    policyType?: pulumi.Input<string | enums.ApplicationGatewaySslPolicyType>;
}

/**
 * SSL profile of an application gateway.
 */
export interface ApplicationGatewaySslProfileArgs {
    /**
     * Client authentication configuration of the application gateway resource.
     */
    clientAuthConfiguration?: pulumi.Input<ApplicationGatewayClientAuthConfigurationArgs>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Name of the SSL profile that is unique within an Application Gateway.
     */
    name?: pulumi.Input<string>;
    /**
     * SSL policy of the application gateway resource.
     */
    sslPolicy?: pulumi.Input<ApplicationGatewaySslPolicyArgs>;
    /**
     * Array of references to application gateway trusted client certificates.
     */
    trustedClientCertificates?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
}

/**
 * Trusted client certificates of an application gateway.
 */
export interface ApplicationGatewayTrustedClientCertificateArgs {
    /**
     * Certificate public data.
     */
    data?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Name of the trusted client certificate that is unique within an Application Gateway.
     */
    name?: pulumi.Input<string>;
}

/**
 * Trusted Root certificates of an application gateway.
 */
export interface ApplicationGatewayTrustedRootCertificateArgs {
    /**
     * Certificate public data.
     */
    data?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Secret Id of (base-64 encoded unencrypted pfx) 'Secret' or 'Certificate' object stored in KeyVault.
     */
    keyVaultSecretId?: pulumi.Input<string>;
    /**
     * Name of the trusted root certificate that is unique within an Application Gateway.
     */
    name?: pulumi.Input<string>;
}

/**
 * Url configuration of the Actions set in Application Gateway.
 */
export interface ApplicationGatewayUrlConfigurationArgs {
    /**
     * Url path which user has provided for url rewrite. Null means no path will be updated. Default value is null.
     */
    modifiedPath?: pulumi.Input<string>;
    /**
     * Query string which user has provided for url rewrite. Null means no query string will be updated. Default value is null.
     */
    modifiedQueryString?: pulumi.Input<string>;
    /**
     * If set as true, it will re-evaluate the url path map provided in path based request routing rules using modified path. Default value is false.
     */
    reroute?: pulumi.Input<boolean>;
}

/**
 * UrlPathMaps give a url path to the backend mapping information for PathBasedRouting.
 */
export interface ApplicationGatewayUrlPathMapArgs {
    /**
     * Default backend address pool resource of URL path map.
     */
    defaultBackendAddressPool?: pulumi.Input<SubResourceArgs>;
    /**
     * Default backend http settings resource of URL path map.
     */
    defaultBackendHttpSettings?: pulumi.Input<SubResourceArgs>;
    /**
     * Default Load Distribution Policy resource of URL path map.
     */
    defaultLoadDistributionPolicy?: pulumi.Input<SubResourceArgs>;
    /**
     * Default redirect configuration resource of URL path map.
     */
    defaultRedirectConfiguration?: pulumi.Input<SubResourceArgs>;
    /**
     * Default Rewrite rule set resource of URL path map.
     */
    defaultRewriteRuleSet?: pulumi.Input<SubResourceArgs>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Name of the URL path map that is unique within an Application Gateway.
     */
    name?: pulumi.Input<string>;
    /**
     * Path rule of URL path map resource.
     */
    pathRules?: pulumi.Input<pulumi.Input<ApplicationGatewayPathRuleArgs>[]>;
}

/**
 * Application gateway web application firewall configuration.
 */
export interface ApplicationGatewayWebApplicationFirewallConfigurationArgs {
    /**
     * The disabled rule groups.
     */
    disabledRuleGroups?: pulumi.Input<pulumi.Input<ApplicationGatewayFirewallDisabledRuleGroupArgs>[]>;
    /**
     * Whether the web application firewall is enabled or not.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * The exclusion list.
     */
    exclusions?: pulumi.Input<pulumi.Input<ApplicationGatewayFirewallExclusionArgs>[]>;
    /**
     * Maximum file upload size in Mb for WAF.
     */
    fileUploadLimitInMb?: pulumi.Input<number>;
    /**
     * Web application firewall mode.
     */
    firewallMode: pulumi.Input<string | enums.ApplicationGatewayFirewallMode>;
    /**
     * Maximum request body size for WAF.
     */
    maxRequestBodySize?: pulumi.Input<number>;
    /**
     * Maximum request body size in Kb for WAF.
     */
    maxRequestBodySizeInKb?: pulumi.Input<number>;
    /**
     * Whether allow WAF to check request Body.
     */
    requestBodyCheck?: pulumi.Input<boolean>;
    /**
     * The type of the web application firewall rule set. Possible values are: 'OWASP'.
     */
    ruleSetType: pulumi.Input<string>;
    /**
     * The version of the rule set type.
     */
    ruleSetVersion: pulumi.Input<string>;
}

/**
 * Rule of type application.
 */
export interface ApplicationRuleArgs {
    /**
     * Description of the rule.
     */
    description?: pulumi.Input<string>;
    /**
     * List of destination IP addresses or Service Tags.
     */
    destinationAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of FQDN Tags for this rule.
     */
    fqdnTags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of HTTP/S headers to insert.
     */
    httpHeadersToInsert?: pulumi.Input<pulumi.Input<FirewallPolicyHttpHeaderToInsertArgs>[]>;
    /**
     * Name of the rule.
     */
    name?: pulumi.Input<string>;
    /**
     * Array of Application Protocols.
     */
    protocols?: pulumi.Input<pulumi.Input<FirewallPolicyRuleApplicationProtocolArgs>[]>;
    /**
     * Rule Type.
     * Expected value is 'ApplicationRule'.
     */
    ruleType: pulumi.Input<"ApplicationRule">;
    /**
     * List of source IP addresses for this rule.
     */
    sourceAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of source IpGroups for this rule.
     */
    sourceIpGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of FQDNs for this rule.
     */
    targetFqdns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of Urls for this rule condition.
     */
    targetUrls?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Terminate TLS connections for this rule.
     */
    terminateTLS?: pulumi.Input<boolean>;
    /**
     * List of destination azure web categories.
     */
    webCategories?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Rule condition of type application.
 */
export interface ApplicationRuleConditionArgs {
    /**
     * Description of the rule condition.
     */
    description?: pulumi.Input<string>;
    /**
     * List of destination IP addresses or Service Tags.
     */
    destinationAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of FQDN Tags for this rule condition.
     */
    fqdnTags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the rule condition.
     */
    name?: pulumi.Input<string>;
    /**
     * Array of Application Protocols.
     */
    protocols?: pulumi.Input<pulumi.Input<FirewallPolicyRuleConditionApplicationProtocolArgs>[]>;
    /**
     * Rule Condition Type.
     * Expected value is 'ApplicationRuleCondition'.
     */
    ruleConditionType: pulumi.Input<"ApplicationRuleCondition">;
    /**
     * List of source IP addresses for this rule.
     */
    sourceAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of source IpGroups for this rule.
     */
    sourceIpGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of FQDNs for this rule condition.
     */
    targetFqdns?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * An application security group in a resource group.
 */
export interface ApplicationSecurityGroupArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * Properties of an application rule.
 */
export interface AzureFirewallApplicationRuleArgs {
    /**
     * Description of the rule.
     */
    description?: pulumi.Input<string>;
    /**
     * List of FQDN Tags for this rule.
     */
    fqdnTags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the application rule.
     */
    name?: pulumi.Input<string>;
    /**
     * Array of ApplicationRuleProtocols.
     */
    protocols?: pulumi.Input<pulumi.Input<AzureFirewallApplicationRuleProtocolArgs>[]>;
    /**
     * List of source IP addresses for this rule.
     */
    sourceAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of source IpGroups for this rule.
     */
    sourceIpGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of FQDNs for this rule.
     */
    targetFqdns?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Application rule collection resource.
 */
export interface AzureFirewallApplicationRuleCollectionArgs {
    /**
     * The action type of a rule collection.
     */
    action?: pulumi.Input<AzureFirewallRCActionArgs>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within the Azure firewall. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Priority of the application rule collection resource.
     */
    priority?: pulumi.Input<number>;
    /**
     * Collection of rules used by a application rule collection.
     */
    rules?: pulumi.Input<pulumi.Input<AzureFirewallApplicationRuleArgs>[]>;
}

/**
 * Properties of the application rule protocol.
 */
export interface AzureFirewallApplicationRuleProtocolArgs {
    /**
     * Port number for the protocol, cannot be greater than 64000. This field is optional.
     */
    port?: pulumi.Input<number>;
    /**
     * Protocol type.
     */
    protocolType?: pulumi.Input<string | enums.AzureFirewallApplicationRuleProtocolType>;
}

/**
 * Azure Firewall Autoscale Configuration parameters.
 */
export interface AzureFirewallAutoscaleConfigurationArgs {
    /**
     * The maximum number of capacity units for this azure firewall. Use null to reset the value to the service default.
     */
    maxCapacity?: pulumi.Input<number>;
    /**
     * The minimum number of capacity units for this azure firewall. Use null to reset the value to the service default.
     */
    minCapacity?: pulumi.Input<number>;
}

/**
 * IP configuration of an Azure Firewall.
 */
export interface AzureFirewallIPConfigurationArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Reference to the PublicIP resource. This field is a mandatory input if subnet is not null.
     */
    publicIPAddress?: pulumi.Input<SubResourceArgs>;
    /**
     * Reference to the subnet resource. This resource must be named 'AzureFirewallSubnet' or 'AzureFirewallManagementSubnet'.
     */
    subnet?: pulumi.Input<SubResourceArgs>;
}

/**
 * AzureFirewall NAT Rule Collection Action.
 */
export interface AzureFirewallNatRCActionArgs {
    /**
     * The type of action.
     */
    type?: pulumi.Input<string | enums.AzureFirewallNatRCActionType>;
}

/**
 * Properties of a NAT rule.
 */
export interface AzureFirewallNatRuleArgs {
    /**
     * Description of the rule.
     */
    description?: pulumi.Input<string>;
    /**
     * List of destination IP addresses for this rule. Supports IP ranges, prefixes, and service tags.
     */
    destinationAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of destination ports.
     */
    destinationPorts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the NAT rule.
     */
    name?: pulumi.Input<string>;
    /**
     * Array of AzureFirewallNetworkRuleProtocols applicable to this NAT rule.
     */
    protocols?: pulumi.Input<pulumi.Input<string | enums.AzureFirewallNetworkRuleProtocol>[]>;
    /**
     * List of source IP addresses for this rule.
     */
    sourceAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of source IpGroups for this rule.
     */
    sourceIpGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The translated address for this NAT rule.
     */
    translatedAddress?: pulumi.Input<string>;
    /**
     * The translated FQDN for this NAT rule.
     */
    translatedFqdn?: pulumi.Input<string>;
    /**
     * The translated port for this NAT rule.
     */
    translatedPort?: pulumi.Input<string>;
}

/**
 * NAT rule collection resource.
 */
export interface AzureFirewallNatRuleCollectionArgs {
    /**
     * The action type of a NAT rule collection.
     */
    action?: pulumi.Input<AzureFirewallNatRCActionArgs>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within the Azure firewall. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Priority of the NAT rule collection resource.
     */
    priority?: pulumi.Input<number>;
    /**
     * Collection of rules used by a NAT rule collection.
     */
    rules?: pulumi.Input<pulumi.Input<AzureFirewallNatRuleArgs>[]>;
}

/**
 * Properties of the network rule.
 */
export interface AzureFirewallNetworkRuleArgs {
    /**
     * Description of the rule.
     */
    description?: pulumi.Input<string>;
    /**
     * List of destination IP addresses.
     */
    destinationAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of destination FQDNs.
     */
    destinationFqdns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of destination IpGroups for this rule.
     */
    destinationIpGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of destination ports.
     */
    destinationPorts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the network rule.
     */
    name?: pulumi.Input<string>;
    /**
     * Array of AzureFirewallNetworkRuleProtocols.
     */
    protocols?: pulumi.Input<pulumi.Input<string | enums.AzureFirewallNetworkRuleProtocol>[]>;
    /**
     * List of source IP addresses for this rule.
     */
    sourceAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of source IpGroups for this rule.
     */
    sourceIpGroups?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Network rule collection resource.
 */
export interface AzureFirewallNetworkRuleCollectionArgs {
    /**
     * The action type of a rule collection.
     */
    action?: pulumi.Input<AzureFirewallRCActionArgs>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within the Azure firewall. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Priority of the network rule collection resource.
     */
    priority?: pulumi.Input<number>;
    /**
     * Collection of rules used by a network rule collection.
     */
    rules?: pulumi.Input<pulumi.Input<AzureFirewallNetworkRuleArgs>[]>;
}

/**
 * Public IP Address associated with azure firewall.
 */
export interface AzureFirewallPublicIPAddressArgs {
    /**
     * Public IP Address value.
     */
    address?: pulumi.Input<string>;
}

/**
 * Properties of the AzureFirewallRCAction.
 */
export interface AzureFirewallRCActionArgs {
    /**
     * The type of action.
     */
    type?: pulumi.Input<string | enums.AzureFirewallRCActionType>;
}

/**
 * SKU of an Azure Firewall.
 */
export interface AzureFirewallSkuArgs {
    /**
     * Name of an Azure Firewall SKU.
     */
    name?: pulumi.Input<string | enums.AzureFirewallSkuName>;
    /**
     * Tier of an Azure Firewall.
     */
    tier?: pulumi.Input<string | enums.AzureFirewallSkuTier>;
}

/**
 * Pool of backend IP addresses.
 */
export interface BackendAddressPoolArgs {
    /**
     * Amount of seconds Load Balancer waits for before sending RESET to client and backend address.
     */
    drainPeriodInSeconds?: pulumi.Input<number>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * An array of backend addresses.
     */
    loadBalancerBackendAddresses?: pulumi.Input<pulumi.Input<LoadBalancerBackendAddressArgs>[]>;
    /**
     * The location of the backend address pool.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within the set of backend address pools used by the load balancer. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Backend address synchronous mode for the backend pool
     */
    syncMode?: pulumi.Input<string | enums.SyncMode>;
    /**
     * An array of gateway load balancer tunnel interfaces.
     */
    tunnelInterfaces?: pulumi.Input<pulumi.Input<GatewayLoadBalancerTunnelInterfaceArgs>[]>;
    /**
     * A reference to a virtual network.
     */
    virtualNetwork?: pulumi.Input<SubResourceArgs>;
}

/**
 * IP configuration of an Bastion Host.
 */
export interface BastionHostIPConfigurationArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Private IP allocation method.
     */
    privateIPAllocationMethod?: pulumi.Input<string | enums.IPAllocationMethod>;
    /**
     * Reference of the PublicIP resource. Null for private only bastion
     */
    publicIPAddress?: pulumi.Input<SubResourceArgs>;
    /**
     * Reference of the subnet resource.
     */
    subnet: pulumi.Input<SubResourceArgs>;
}

export interface BastionHostPropertiesFormatNetworkAclsArgs {
    /**
     * Sets the IP ACL rules for Developer Bastion Host.
     */
    ipRules?: pulumi.Input<pulumi.Input<IPRuleArgs>[]>;
}

/**
 * Bastion Shareable Link.
 */
export interface BastionShareableLink {
    /**
     * Reference of the virtual machine resource.
     */
    vm: VM;
}

/**
 * Bastion Shareable Link.
 */
export interface BastionShareableLinkArgs {
    /**
     * Reference of the virtual machine resource.
     */
    vm: pulumi.Input<VMArgs>;
}

/**
 * BGP settings details.
 */
export interface BgpSettingsArgs {
    /**
     * The BGP speaker's ASN.
     */
    asn?: pulumi.Input<number>;
    /**
     * The BGP peering address and BGP identifier of this BGP speaker.
     */
    bgpPeeringAddress?: pulumi.Input<string>;
    /**
     * BGP peering address with IP configuration ID for virtual network gateway.
     */
    bgpPeeringAddresses?: pulumi.Input<pulumi.Input<IPConfigurationBgpPeeringAddressArgs>[]>;
    /**
     * The weight added to routes learned from this BGP speaker.
     */
    peerWeight?: pulumi.Input<number>;
}

/**
 * Network Virtual Appliance Sku Properties.
 */
export interface BreakOutCategoryPoliciesArgs {
    /**
     * Flag to control breakout of o365 allow category.
     */
    allow?: pulumi.Input<boolean>;
    /**
     * Flag to control breakout of o365 default category.
     */
    default?: pulumi.Input<boolean>;
    /**
     * Flag to control breakout of o365 optimize category.
     */
    optimize?: pulumi.Input<boolean>;
}

/**
 * Describes the destination of connection monitor.
 */
export interface ConnectionMonitorDestinationArgs {
    /**
     * Address of the connection monitor destination (IP or domain name).
     */
    address?: pulumi.Input<string>;
    /**
     * The destination port used by connection monitor.
     */
    port?: pulumi.Input<number>;
    /**
     * The ID of the resource used as the destination by connection monitor.
     */
    resourceId?: pulumi.Input<string>;
}

/**
 * Describes the connection monitor endpoint.
 */
export interface ConnectionMonitorEndpointArgs {
    /**
     * Address of the connection monitor endpoint. Supported for AzureVM, ExternalAddress, ArcMachine, MMAWorkspaceMachine endpoint type.
     */
    address?: pulumi.Input<string>;
    /**
     * Test coverage for the endpoint.
     */
    coverageLevel?: pulumi.Input<string | enums.CoverageLevel>;
    /**
     * Filter field is getting deprecated and should not be used. Instead use Include/Exclude scope fields for it.
     */
    filter?: pulumi.Input<ConnectionMonitorEndpointFilterArgs>;
    /**
     * Location details is optional and only being used for 'AzureArcNetwork' type endpoints, which contains region details.
     */
    locationDetails?: pulumi.Input<ConnectionMonitorEndpointLocationDetailsArgs>;
    /**
     * The name of the connection monitor endpoint.
     */
    name: pulumi.Input<string>;
    /**
     * Resource ID of the connection monitor endpoint are supported for AzureVM, AzureVMSS, AzureVNet, AzureSubnet, MMAWorkspaceMachine, MMAWorkspaceNetwork, AzureArcVM endpoint type.
     */
    resourceId?: pulumi.Input<string>;
    /**
     * Endpoint scope defines which target resource to monitor in case of compound resource endpoints like VMSS, AzureSubnet, AzureVNet, MMAWorkspaceNetwork, AzureArcNetwork.
     */
    scope?: pulumi.Input<ConnectionMonitorEndpointScopeArgs>;
    /**
     * Subscription ID for connection monitor endpoint. It's an optional parameter which is being used for 'AzureArcNetwork' type endpoint.
     */
    subscriptionId?: pulumi.Input<string>;
    /**
     * The endpoint type.
     */
    type?: pulumi.Input<string | enums.EndpointType>;
}

/**
 * Describes the connection monitor endpoint filter.
 */
export interface ConnectionMonitorEndpointFilterArgs {
    /**
     * List of items in the filter.
     */
    items?: pulumi.Input<pulumi.Input<ConnectionMonitorEndpointFilterItemArgs>[]>;
    /**
     * The behavior of the endpoint filter. Currently only 'Include' is supported.
     */
    type?: pulumi.Input<string | enums.ConnectionMonitorEndpointFilterType>;
}

/**
 * Describes the connection monitor endpoint filter item.
 */
export interface ConnectionMonitorEndpointFilterItemArgs {
    /**
     * The address of the filter item.
     */
    address?: pulumi.Input<string>;
    /**
     * The type of item included in the filter. Currently only 'AgentAddress' is supported.
     */
    type?: pulumi.Input<string | enums.ConnectionMonitorEndpointFilterItemType>;
}

/**
 * Connection monitor endpoint location details only being used for 'AzureArcNetwork' type endpoints, which contains the region details.
 */
export interface ConnectionMonitorEndpointLocationDetailsArgs {
    /**
     * Region for connection monitor endpoint.
     */
    region?: pulumi.Input<string>;
}

/**
 * Describes the connection monitor endpoint scope.
 */
export interface ConnectionMonitorEndpointScopeArgs {
    /**
     * List of items which needs to be excluded from the endpoint scope.
     */
    exclude?: pulumi.Input<pulumi.Input<ConnectionMonitorEndpointScopeItemArgs>[]>;
    /**
     * List of items which needs to be included to the endpoint scope.
     */
    include?: pulumi.Input<pulumi.Input<ConnectionMonitorEndpointScopeItemArgs>[]>;
}

/**
 * Describes the connection monitor endpoint scope item.
 */
export interface ConnectionMonitorEndpointScopeItemArgs {
    /**
     * The address of the endpoint item. Supported types are IPv4/IPv6 subnet mask or IPv4/IPv6 IP address.
     */
    address?: pulumi.Input<string>;
}

/**
 * Describes the HTTP configuration.
 */
export interface ConnectionMonitorHttpConfigurationArgs {
    /**
     * The HTTP method to use.
     */
    method?: pulumi.Input<string | enums.HTTPConfigurationMethod>;
    /**
     * The path component of the URI. For instance, "/dir1/dir2".
     */
    path?: pulumi.Input<string>;
    /**
     * The port to connect to.
     */
    port?: pulumi.Input<number>;
    /**
     * Value indicating whether HTTPS is preferred over HTTP in cases where the choice is not explicit.
     */
    preferHTTPS?: pulumi.Input<boolean>;
    /**
     * The HTTP headers to transmit with the request.
     */
    requestHeaders?: pulumi.Input<pulumi.Input<HTTPHeaderArgs>[]>;
    /**
     * HTTP status codes to consider successful. For instance, "2xx,301-304,418".
     */
    validStatusCodeRanges?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Describes the ICMP configuration.
 */
export interface ConnectionMonitorIcmpConfigurationArgs {
    /**
     * Value indicating whether path evaluation with trace route should be disabled.
     */
    disableTraceRoute?: pulumi.Input<boolean>;
}

/**
 * Describes a connection monitor output destination.
 */
export interface ConnectionMonitorOutputArgs {
    /**
     * Connection monitor output destination type. Currently, only "Workspace" is supported.
     */
    type?: pulumi.Input<string | enums.OutputType>;
    /**
     * Describes the settings for producing output into a log analytics workspace.
     */
    workspaceSettings?: pulumi.Input<ConnectionMonitorWorkspaceSettingsArgs>;
}

/**
 * Describes the source of connection monitor.
 */
export interface ConnectionMonitorSourceArgs {
    /**
     * The source port used by connection monitor.
     */
    port?: pulumi.Input<number>;
    /**
     * The ID of the resource used as the source by connection monitor.
     */
    resourceId: pulumi.Input<string>;
}

/**
 * Describes the threshold for declaring a test successful.
 */
export interface ConnectionMonitorSuccessThresholdArgs {
    /**
     * The maximum percentage of failed checks permitted for a test to evaluate as successful.
     */
    checksFailedPercent?: pulumi.Input<number>;
    /**
     * The maximum round-trip time in milliseconds permitted for a test to evaluate as successful.
     */
    roundTripTimeMs?: pulumi.Input<number>;
}

/**
 * Describes the TCP configuration.
 */
export interface ConnectionMonitorTcpConfigurationArgs {
    /**
     * Destination port behavior.
     */
    destinationPortBehavior?: pulumi.Input<string | enums.DestinationPortBehavior>;
    /**
     * Value indicating whether path evaluation with trace route should be disabled.
     */
    disableTraceRoute?: pulumi.Input<boolean>;
    /**
     * The port to connect to.
     */
    port?: pulumi.Input<number>;
}

/**
 * Describes a connection monitor test configuration.
 */
export interface ConnectionMonitorTestConfigurationArgs {
    /**
     * The parameters used to perform test evaluation over HTTP.
     */
    httpConfiguration?: pulumi.Input<ConnectionMonitorHttpConfigurationArgs>;
    /**
     * The parameters used to perform test evaluation over ICMP.
     */
    icmpConfiguration?: pulumi.Input<ConnectionMonitorIcmpConfigurationArgs>;
    /**
     * The name of the connection monitor test configuration.
     */
    name: pulumi.Input<string>;
    /**
     * The preferred IP version to use in test evaluation. The connection monitor may choose to use a different version depending on other parameters.
     */
    preferredIPVersion?: pulumi.Input<string | enums.PreferredIPVersion>;
    /**
     * The protocol to use in test evaluation.
     */
    protocol: pulumi.Input<string | enums.ConnectionMonitorTestConfigurationProtocol>;
    /**
     * The threshold for declaring a test successful.
     */
    successThreshold?: pulumi.Input<ConnectionMonitorSuccessThresholdArgs>;
    /**
     * The parameters used to perform test evaluation over TCP.
     */
    tcpConfiguration?: pulumi.Input<ConnectionMonitorTcpConfigurationArgs>;
    /**
     * The frequency of test evaluation, in seconds.
     */
    testFrequencySec?: pulumi.Input<number>;
}

/**
 * Describes the connection monitor test group.
 */
export interface ConnectionMonitorTestGroupArgs {
    /**
     * List of destination endpoint names.
     */
    destinations: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Value indicating whether test group is disabled.
     */
    disable?: pulumi.Input<boolean>;
    /**
     * The name of the connection monitor test group.
     */
    name: pulumi.Input<string>;
    /**
     * List of source endpoint names.
     */
    sources: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of test configuration names.
     */
    testConfigurations: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Describes the settings for producing output into a log analytics workspace.
 */
export interface ConnectionMonitorWorkspaceSettingsArgs {
    /**
     * Log analytics workspace resource ID.
     */
    workspaceResourceId?: pulumi.Input<string>;
}

/**
 * Connectivity group item.
 */
export interface ConnectivityGroupItemArgs {
    /**
     * Group connectivity type.
     */
    groupConnectivity: pulumi.Input<string | enums.GroupConnectivity>;
    /**
     * Flag if global is supported.
     */
    isGlobal?: pulumi.Input<string | enums.IsGlobal>;
    /**
     * Network group Id.
     */
    networkGroupId: pulumi.Input<string>;
    /**
     * Flag if need to use hub gateway.
     */
    useHubGateway?: pulumi.Input<string | enums.UseHubGateway>;
}

/**
 * Container network interface configuration child resource.
 */
export interface ContainerNetworkInterfaceConfigurationArgs {
    /**
     * A list of container network interfaces created from this container network interface configuration.
     */
    containerNetworkInterfaces?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * A list of ip configurations of the container network interface configuration.
     */
    ipConfigurations?: pulumi.Input<pulumi.Input<IPConfigurationProfileArgs>[]>;
    /**
     * The name of the resource. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
}

/**
 * A matching criteria which matches routes based on route prefix, community, and AS path.
 */
export interface CriterionArgs {
    /**
     * List of AS paths which this criteria matches.
     */
    asPath?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of BGP communities which this criteria matches.
     */
    community?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Match condition to apply RouteMap rules.
     */
    matchCondition?: pulumi.Input<string | enums.RouteMapMatchCondition>;
    /**
     * List of route prefixes which this criteria matches.
     */
    routePrefix?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Contains custom Dns resolution configuration from customer.
 */
export interface CustomDnsConfigPropertiesFormatArgs {
    /**
     * Fqdn that resolves to private endpoint ip address.
     */
    fqdn?: pulumi.Input<string>;
    /**
     * A list of private ip addresses of the private endpoint.
     */
    ipAddresses?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Contains the DDoS protection settings of the public IP.
 */
export interface DdosSettingsArgs {
    /**
     * The DDoS protection plan associated with the public IP. Can only be set if ProtectionMode is Enabled
     */
    ddosProtectionPlan?: pulumi.Input<SubResourceArgs>;
    /**
     * The DDoS protection mode of the public IP
     */
    protectionMode?: pulumi.Input<string | enums.DdosSettingsProtectionMode>;
}

/**
 * Details the service to which the subnet is delegated.
 */
export interface DelegationArgs {
    /**
     * Describes the actions permitted to the service upon delegation
     */
    actions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a subnet. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the service to whom the subnet should be delegated (e.g. Microsoft.Sql/servers).
     */
    serviceName?: pulumi.Input<string>;
    /**
     * Resource type.
     */
    type?: pulumi.Input<string>;
}

/**
 * Properties of the delegation.
 */
export interface DelegationPropertiesArgs {
    /**
     * The service name to which the NVA is delegated.
     */
    serviceName?: pulumi.Input<string>;
}

/**
 * List of properties of the device.
 */
export interface DevicePropertiesArgs {
    /**
     * Model of the device.
     */
    deviceModel?: pulumi.Input<string>;
    /**
     * Name of the device Vendor.
     */
    deviceVendor?: pulumi.Input<string>;
    /**
     * Link speed.
     */
    linkSpeedInMbps?: pulumi.Input<number>;
}

/**
 * DhcpOptions contains an array of DNS servers available to VMs deployed in the virtual network. Standard DHCP option for a subnet overrides VNET DHCP options.
 */
export interface DhcpOptionsArgs {
    /**
     * The list of DNS servers IP addresses.
     */
    dnsServers?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * DNS Proxy Settings in Firewall Policy.
 */
export interface DnsSettingsArgs {
    /**
     * Enable DNS Proxy on Firewalls attached to the Firewall Policy.
     */
    enableProxy?: pulumi.Input<boolean>;
    /**
     * FQDNs in Network Rules are supported when set to true.
     */
    requireProxyForNetworkRules?: pulumi.Input<boolean>;
    /**
     * List of Custom DNS Servers.
     */
    servers?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Identifies the service being brought into the virtual network.
 */
export interface EndpointServiceArgs {
    /**
     * A unique identifier of the service being referenced by the interface endpoint.
     */
    id?: pulumi.Input<string>;
}

/**
 * Adds exception to allow a request when the condition is satisfied.
 */
export interface ExceptionEntryArgs {
    /**
     * The managed rule sets that are associated with the exception.
     */
    exceptionManagedRuleSets?: pulumi.Input<pulumi.Input<ExclusionManagedRuleSetArgs>[]>;
    /**
     * The variable on which we evaluate the exception condition
     */
    matchVariable: pulumi.Input<string | enums.ExceptionEntryMatchVariable>;
    /**
     * When the matchVariable points to a key-value pair (e.g, RequestHeader), this identifies the key.
     */
    selector?: pulumi.Input<string>;
    /**
     * When the matchVariable points to a key-value pair (e.g, RequestHeader), this operates on the selector
     */
    selectorMatchOperator?: pulumi.Input<string | enums.ExceptionEntrySelectorMatchOperator>;
    /**
     * Operates on the allowed values for the matchVariable
     */
    valueMatchOperator: pulumi.Input<string | enums.ExceptionEntryValueMatchOperator>;
    /**
     * Allowed values for the matchVariable
     */
    values?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Defines a managed rule to use for exclusion.
 */
export interface ExclusionManagedRuleArgs {
    /**
     * Identifier for the managed rule.
     */
    ruleId: pulumi.Input<string>;
}

/**
 * Defines a managed rule group to use for exclusion.
 */
export interface ExclusionManagedRuleGroupArgs {
    /**
     * The managed rule group for exclusion.
     */
    ruleGroupName: pulumi.Input<string>;
    /**
     * List of rules that will be excluded. If none specified, all rules in the group will be excluded.
     */
    rules?: pulumi.Input<pulumi.Input<ExclusionManagedRuleArgs>[]>;
}

/**
 * Defines a managed rule set for Exclusions.
 */
export interface ExclusionManagedRuleSetArgs {
    /**
     * Defines the rule groups to apply to the rule set.
     */
    ruleGroups?: pulumi.Input<pulumi.Input<ExclusionManagedRuleGroupArgs>[]>;
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
 * Explicit Proxy Settings in Firewall Policy.
 */
export interface ExplicitProxyArgs {
    /**
     * When set to true, explicit proxy mode is enabled.
     */
    enableExplicitProxy?: pulumi.Input<boolean>;
    /**
     * When set to true, pac file port and url needs to be provided.
     */
    enablePacFile?: pulumi.Input<boolean>;
    /**
     * Port number for explicit proxy http protocol, cannot be greater than 64000.
     */
    httpPort?: pulumi.Input<number>;
    /**
     * Port number for explicit proxy https protocol, cannot be greater than 64000.
     */
    httpsPort?: pulumi.Input<number>;
    /**
     * SAS URL for PAC file.
     */
    pacFile?: pulumi.Input<string>;
    /**
     * Port number for firewall to serve PAC file.
     */
    pacFilePort?: pulumi.Input<number>;
}

/**
 * Authorization in an ExpressRouteCircuit resource.
 */
export interface ExpressRouteCircuitAuthorizationArgs {
    /**
     * The authorization key.
     */
    authorizationKey?: pulumi.Input<string>;
    /**
     * The authorization use status.
     */
    authorizationUseStatus?: pulumi.Input<string | enums.AuthorizationUseStatus>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
}

/**
 * Express Route Circuit Connection in an ExpressRouteCircuitPeering resource.
 */
export interface ExpressRouteCircuitConnectionArgs {
    /**
     * /29 IP address space to carve out Customer addresses for tunnels.
     */
    addressPrefix?: pulumi.Input<string>;
    /**
     * The authorization key.
     */
    authorizationKey?: pulumi.Input<string>;
    /**
     * Reference to Express Route Circuit Private Peering Resource of the circuit initiating connection.
     */
    expressRouteCircuitPeering?: pulumi.Input<SubResourceArgs>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * IPv6 Address PrefixProperties of the express route circuit connection.
     */
    ipv6CircuitConnectionConfig?: pulumi.Input<Ipv6CircuitConnectionConfigArgs>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Reference to Express Route Circuit Private Peering Resource of the peered circuit.
     */
    peerExpressRouteCircuitPeering?: pulumi.Input<SubResourceArgs>;
}

/**
 * Peering in an ExpressRouteCircuit resource.
 */
export interface ExpressRouteCircuitPeeringArgs {
    /**
     * The Azure ASN.
     */
    azureASN?: pulumi.Input<number>;
    /**
     * The list of circuit connections associated with Azure Private Peering for this circuit.
     */
    connections?: pulumi.Input<pulumi.Input<ExpressRouteCircuitConnectionArgs>[]>;
    /**
     * The GatewayManager Etag.
     */
    gatewayManagerEtag?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The IPv6 peering configuration.
     */
    ipv6PeeringConfig?: pulumi.Input<Ipv6ExpressRouteCircuitPeeringConfigArgs>;
    /**
     * The Microsoft peering configuration.
     */
    microsoftPeeringConfig?: pulumi.Input<ExpressRouteCircuitPeeringConfigArgs>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The peer ASN.
     */
    peerASN?: pulumi.Input<number>;
    /**
     * The peering type.
     */
    peeringType?: pulumi.Input<string | enums.ExpressRoutePeeringType>;
    /**
     * The primary port.
     */
    primaryAzurePort?: pulumi.Input<string>;
    /**
     * The primary address prefix.
     */
    primaryPeerAddressPrefix?: pulumi.Input<string>;
    /**
     * The reference to the RouteFilter resource.
     */
    routeFilter?: pulumi.Input<SubResourceArgs>;
    /**
     * The secondary port.
     */
    secondaryAzurePort?: pulumi.Input<string>;
    /**
     * The secondary address prefix.
     */
    secondaryPeerAddressPrefix?: pulumi.Input<string>;
    /**
     * The shared key.
     */
    sharedKey?: pulumi.Input<string>;
    /**
     * The peering state.
     */
    state?: pulumi.Input<string | enums.ExpressRoutePeeringState>;
    /**
     * The peering stats of express route circuit.
     */
    stats?: pulumi.Input<ExpressRouteCircuitStatsArgs>;
    /**
     * The VLAN ID.
     */
    vlanId?: pulumi.Input<number>;
}

/**
 * Specifies the peering configuration.
 */
export interface ExpressRouteCircuitPeeringConfigArgs {
    /**
     * The communities of bgp peering. Specified for microsoft peering.
     */
    advertisedCommunities?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The reference to AdvertisedPublicPrefixes.
     */
    advertisedPublicPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The CustomerASN of the peering.
     */
    customerASN?: pulumi.Input<number>;
    /**
     * The legacy mode of the peering.
     */
    legacyMode?: pulumi.Input<number>;
    /**
     * The RoutingRegistryName of the configuration.
     */
    routingRegistryName?: pulumi.Input<string>;
}

/**
 * ExpressRoute circuit peering identifier.
 */
export interface ExpressRouteCircuitPeeringIdArgs {
    /**
     * The ID of the ExpressRoute circuit peering.
     */
    id?: pulumi.Input<string>;
}

/**
 * Contains ServiceProviderProperties in an ExpressRouteCircuit.
 */
export interface ExpressRouteCircuitServiceProviderPropertiesArgs {
    /**
     * The BandwidthInMbps.
     */
    bandwidthInMbps?: pulumi.Input<number>;
    /**
     * The peering location.
     */
    peeringLocation?: pulumi.Input<string>;
    /**
     * The serviceProviderName.
     */
    serviceProviderName?: pulumi.Input<string>;
}

/**
 * Contains SKU in an ExpressRouteCircuit.
 */
export interface ExpressRouteCircuitSkuArgs {
    /**
     * The family of the SKU.
     */
    family?: pulumi.Input<string | enums.ExpressRouteCircuitSkuFamily>;
    /**
     * The name of the SKU.
     */
    name?: pulumi.Input<string>;
    /**
     * The tier of the SKU.
     */
    tier?: pulumi.Input<string | enums.ExpressRouteCircuitSkuTier>;
}

/**
 * Contains stats associated with the peering.
 */
export interface ExpressRouteCircuitStatsArgs {
    /**
     * The Primary BytesIn of the peering.
     */
    primarybytesIn?: pulumi.Input<number>;
    /**
     * The primary BytesOut of the peering.
     */
    primarybytesOut?: pulumi.Input<number>;
    /**
     * The secondary BytesIn of the peering.
     */
    secondarybytesIn?: pulumi.Input<number>;
    /**
     * The secondary BytesOut of the peering.
     */
    secondarybytesOut?: pulumi.Input<number>;
}

/**
 * ExpressRouteConnection resource.
 */
export interface ExpressRouteConnectionArgs {
    /**
     * Authorization key to establish the connection.
     */
    authorizationKey?: pulumi.Input<string>;
    /**
     * Enable internet security.
     */
    enableInternetSecurity?: pulumi.Input<boolean>;
    /**
     * Bypass the ExpressRoute gateway when accessing private-links. ExpressRoute FastPath (expressRouteGatewayBypass) must be enabled.
     */
    enablePrivateLinkFastPath?: pulumi.Input<boolean>;
    /**
     * The ExpressRoute circuit peering.
     */
    expressRouteCircuitPeering: pulumi.Input<ExpressRouteCircuitPeeringIdArgs>;
    /**
     * Enable FastPath to vWan Firewall hub.
     */
    expressRouteGatewayBypass?: pulumi.Input<boolean>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the resource.
     */
    name: pulumi.Input<string>;
    /**
     * The Routing Configuration indicating the associated and propagated route tables on this connection.
     */
    routingConfiguration?: pulumi.Input<RoutingConfigurationArgs>;
    /**
     * The routing weight associated to the connection.
     */
    routingWeight?: pulumi.Input<number>;
}

/**
 * Configuration for auto scaling.
 */
export interface ExpressRouteGatewayPropertiesAutoScaleConfigurationArgs {
    /**
     * Minimum and maximum number of scale units to deploy.
     */
    bounds?: pulumi.Input<ExpressRouteGatewayPropertiesBoundsArgs>;
}

/**
 * Minimum and maximum number of scale units to deploy.
 */
export interface ExpressRouteGatewayPropertiesBoundsArgs {
    /**
     * Maximum number of scale units deployed for ExpressRoute gateway.
     */
    max?: pulumi.Input<number>;
    /**
     * Minimum number of scale units deployed for ExpressRoute gateway.
     */
    min?: pulumi.Input<number>;
}

/**
 * ExpressRouteLink child resource definition.
 */
export interface ExpressRouteLinkArgs {
    /**
     * Administrative state of the physical port.
     */
    adminState?: pulumi.Input<string | enums.ExpressRouteLinkAdminState>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * MacSec configuration.
     */
    macSecConfig?: pulumi.Input<ExpressRouteLinkMacSecConfigArgs>;
    /**
     * Name of child port resource that is unique among child port resources of the parent.
     */
    name?: pulumi.Input<string>;
}

/**
 * ExpressRouteLink Mac Security Configuration.
 */
export interface ExpressRouteLinkMacSecConfigArgs {
    /**
     * Keyvault Secret Identifier URL containing Mac security CAK key.
     */
    cakSecretIdentifier?: pulumi.Input<string>;
    /**
     * Mac security cipher.
     */
    cipher?: pulumi.Input<string | enums.ExpressRouteLinkMacSecCipher>;
    /**
     * Keyvault Secret Identifier URL containing Mac security CKN key.
     */
    cknSecretIdentifier?: pulumi.Input<string>;
    /**
     * Sci mode enabled/disabled.
     */
    sciState?: pulumi.Input<string | enums.ExpressRouteLinkMacSecSciState>;
}

/**
 * ExtendedLocation complex type.
 */
export interface ExtendedLocationArgs {
    /**
     * The name of the extended location.
     */
    name?: pulumi.Input<string>;
    /**
     * The type of the extended location.
     */
    type?: pulumi.Input<string | enums.ExtendedLocationTypes>;
}

/**
 * Will contain the filter name and values to operate on
 */
export interface FilterItems {
    /**
     * The name of the field we would like to filter
     */
    field?: string;
    /**
     * List of values to filter the current field by
     */
    values?: string[];
}

/**
 * Will contain the filter name and values to operate on
 */
export interface FilterItemsArgs {
    /**
     * The name of the field we would like to filter
     */
    field?: pulumi.Input<string>;
    /**
     * List of values to filter the current field by
     */
    values?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Trusted Root certificates properties for tls.
 */
export interface FirewallPolicyCertificateAuthorityArgs {
    /**
     * Secret Id of (base-64 encoded unencrypted pfx) 'Secret' or 'Certificate' object stored in KeyVault.
     */
    keyVaultSecretId?: pulumi.Input<string>;
    /**
     * Name of the CA certificate.
     */
    name?: pulumi.Input<string>;
}

/**
 * Firewall Policy Filter Rule.
 */
export interface FirewallPolicyFilterRuleArgs {
    /**
     * The action type of a Filter rule.
     */
    action?: pulumi.Input<FirewallPolicyFilterRuleActionArgs>;
    /**
     * The name of the rule.
     */
    name?: pulumi.Input<string>;
    /**
     * Priority of the Firewall Policy Rule resource.
     */
    priority?: pulumi.Input<number>;
    /**
     * Collection of rule conditions used by a rule.
     */
    ruleConditions?: pulumi.Input<pulumi.Input<ApplicationRuleConditionArgs | NatRuleConditionArgs | NetworkRuleConditionArgs>[]>;
    /**
     * The type of the rule.
     * Expected value is 'FirewallPolicyFilterRule'.
     */
    ruleType: pulumi.Input<"FirewallPolicyFilterRule">;
}

/**
 * Properties of the FirewallPolicyFilterRuleAction.
 */
export interface FirewallPolicyFilterRuleActionArgs {
    /**
     * The type of action.
     */
    type?: pulumi.Input<string | enums.FirewallPolicyFilterRuleActionType>;
}

/**
 * Firewall Policy Filter Rule Collection.
 */
export interface FirewallPolicyFilterRuleCollectionArgs {
    /**
     * The action type of a Filter rule collection.
     */
    action?: pulumi.Input<FirewallPolicyFilterRuleCollectionActionArgs>;
    /**
     * The name of the rule collection.
     */
    name?: pulumi.Input<string>;
    /**
     * Priority of the Firewall Policy Rule Collection resource.
     */
    priority?: pulumi.Input<number>;
    /**
     * The type of the rule collection.
     * Expected value is 'FirewallPolicyFilterRuleCollection'.
     */
    ruleCollectionType: pulumi.Input<"FirewallPolicyFilterRuleCollection">;
    /**
     * List of rules included in a rule collection.
     */
    rules?: pulumi.Input<pulumi.Input<ApplicationRuleArgs | NatRuleArgs | NetworkRuleArgs>[]>;
}

/**
 * Properties of the FirewallPolicyFilterRuleCollectionAction.
 */
export interface FirewallPolicyFilterRuleCollectionActionArgs {
    /**
     * The type of action.
     */
    type?: pulumi.Input<string | enums.FirewallPolicyFilterRuleCollectionActionType>;
}

/**
 * name and value of HTTP/S header to insert
 */
export interface FirewallPolicyHttpHeaderToInsertArgs {
    /**
     * Contains the name of the header
     */
    headerName?: pulumi.Input<string>;
    /**
     * Contains the value of the header
     */
    headerValue?: pulumi.Input<string>;
}

/**
 * Firewall Policy Insights.
 */
export interface FirewallPolicyInsightsArgs {
    /**
     * A flag to indicate if the insights are enabled on the policy.
     */
    isEnabled?: pulumi.Input<boolean>;
    /**
     * Workspaces needed to configure the Firewall Policy Insights.
     */
    logAnalyticsResources?: pulumi.Input<FirewallPolicyLogAnalyticsResourcesArgs>;
    /**
     * Number of days the insights should be enabled on the policy.
     */
    retentionDays?: pulumi.Input<number>;
}

/**
 * Configuration for intrusion detection mode and rules.
 */
export interface FirewallPolicyIntrusionDetectionArgs {
    /**
     * Intrusion detection configuration properties.
     */
    configuration?: pulumi.Input<FirewallPolicyIntrusionDetectionConfigurationArgs>;
    /**
     * Intrusion detection general state. When attached to a parent policy, the firewall's effective IDPS mode is the stricter mode of the two.
     */
    mode?: pulumi.Input<string | enums.FirewallPolicyIntrusionDetectionStateType>;
    /**
     * IDPS profile name. When attached to a parent policy, the firewall's effective profile is the profile name of the parent policy.
     */
    profile?: pulumi.Input<string | enums.FirewallPolicyIntrusionDetectionProfileType>;
}

/**
 * Intrusion detection bypass traffic specification.
 */
export interface FirewallPolicyIntrusionDetectionBypassTrafficSpecificationsArgs {
    /**
     * Description of the bypass traffic rule.
     */
    description?: pulumi.Input<string>;
    /**
     * List of destination IP addresses or ranges for this rule.
     */
    destinationAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of destination IpGroups for this rule.
     */
    destinationIpGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of destination ports or ranges.
     */
    destinationPorts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the bypass traffic rule.
     */
    name?: pulumi.Input<string>;
    /**
     * The rule bypass protocol.
     */
    protocol?: pulumi.Input<string | enums.FirewallPolicyIntrusionDetectionProtocol>;
    /**
     * List of source IP addresses or ranges for this rule.
     */
    sourceAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of source IpGroups for this rule.
     */
    sourceIpGroups?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The operation for configuring intrusion detection.
 */
export interface FirewallPolicyIntrusionDetectionConfigurationArgs {
    /**
     * List of rules for traffic to bypass.
     */
    bypassTrafficSettings?: pulumi.Input<pulumi.Input<FirewallPolicyIntrusionDetectionBypassTrafficSpecificationsArgs>[]>;
    /**
     * IDPS Private IP address ranges are used to identify traffic direction (i.e. inbound, outbound, etc.). By default, only ranges defined by IANA RFC 1918 are considered private IP addresses. To modify default ranges, specify your Private IP address ranges with this property
     */
    privateRanges?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of specific signatures states.
     */
    signatureOverrides?: pulumi.Input<pulumi.Input<FirewallPolicyIntrusionDetectionSignatureSpecificationArgs>[]>;
}

/**
 * Intrusion detection signatures specification states.
 */
export interface FirewallPolicyIntrusionDetectionSignatureSpecificationArgs {
    /**
     * Signature id.
     */
    id?: pulumi.Input<string>;
    /**
     * The signature state.
     */
    mode?: pulumi.Input<string | enums.FirewallPolicyIntrusionDetectionStateType>;
}

/**
 * Log Analytics Resources for Firewall Policy Insights.
 */
export interface FirewallPolicyLogAnalyticsResourcesArgs {
    /**
     * The default workspace Id for Firewall Policy Insights.
     */
    defaultWorkspaceId?: pulumi.Input<SubResourceArgs>;
    /**
     * List of workspaces for Firewall Policy Insights.
     */
    workspaces?: pulumi.Input<pulumi.Input<FirewallPolicyLogAnalyticsWorkspaceArgs>[]>;
}

/**
 * Log Analytics Workspace for Firewall Policy Insights.
 */
export interface FirewallPolicyLogAnalyticsWorkspaceArgs {
    /**
     * Region to configure the Workspace.
     */
    region?: pulumi.Input<string>;
    /**
     * The workspace Id for Firewall Policy Insights.
     */
    workspaceId?: pulumi.Input<SubResourceArgs>;
}

/**
 * Firewall Policy NAT Rule.
 */
export interface FirewallPolicyNatRuleArgs {
    /**
     * The action type of a Nat rule.
     */
    action?: pulumi.Input<FirewallPolicyNatRuleActionArgs>;
    /**
     * The name of the rule.
     */
    name?: pulumi.Input<string>;
    /**
     * Priority of the Firewall Policy Rule resource.
     */
    priority?: pulumi.Input<number>;
    /**
     * The match conditions for incoming traffic.
     */
    ruleCondition?: pulumi.Input<ApplicationRuleConditionArgs | NatRuleConditionArgs | NetworkRuleConditionArgs>;
    /**
     * The type of the rule.
     * Expected value is 'FirewallPolicyNatRule'.
     */
    ruleType: pulumi.Input<"FirewallPolicyNatRule">;
    /**
     * The translated address for this NAT rule.
     */
    translatedAddress?: pulumi.Input<string>;
    /**
     * The translated port for this NAT rule.
     */
    translatedPort?: pulumi.Input<string>;
}

/**
 * Properties of the FirewallPolicyNatRuleAction.
 */
export interface FirewallPolicyNatRuleActionArgs {
    /**
     * The type of action.
     */
    type?: pulumi.Input<string | enums.FirewallPolicyNatRuleActionType>;
}

/**
 * Firewall Policy NAT Rule Collection.
 */
export interface FirewallPolicyNatRuleCollectionArgs {
    /**
     * The action type of a Nat rule collection.
     */
    action?: pulumi.Input<FirewallPolicyNatRuleCollectionActionArgs>;
    /**
     * The name of the rule collection.
     */
    name?: pulumi.Input<string>;
    /**
     * Priority of the Firewall Policy Rule Collection resource.
     */
    priority?: pulumi.Input<number>;
    /**
     * The type of the rule collection.
     * Expected value is 'FirewallPolicyNatRuleCollection'.
     */
    ruleCollectionType: pulumi.Input<"FirewallPolicyNatRuleCollection">;
    /**
     * List of rules included in a rule collection.
     */
    rules?: pulumi.Input<pulumi.Input<ApplicationRuleArgs | NatRuleArgs | NetworkRuleArgs>[]>;
}

/**
 * Properties of the FirewallPolicyNatRuleCollectionAction.
 */
export interface FirewallPolicyNatRuleCollectionActionArgs {
    /**
     * The type of action.
     */
    type?: pulumi.Input<string | enums.FirewallPolicyNatRuleCollectionActionType>;
}

/**
 * Properties of the application rule protocol.
 */
export interface FirewallPolicyRuleApplicationProtocolArgs {
    /**
     * Port number for the protocol, cannot be greater than 64000.
     */
    port?: pulumi.Input<number>;
    /**
     * Protocol type.
     */
    protocolType?: pulumi.Input<string | enums.FirewallPolicyRuleApplicationProtocolType>;
}

/**
 * Properties of the application rule protocol.
 */
export interface FirewallPolicyRuleConditionApplicationProtocolArgs {
    /**
     * Port number for the protocol, cannot be greater than 64000.
     */
    port?: pulumi.Input<number>;
    /**
     * Protocol type.
     */
    protocolType?: pulumi.Input<string | enums.FirewallPolicyRuleConditionApplicationProtocolType>;
}

/**
 * The private IP addresses/IP ranges to which traffic will not be SNAT.
 */
export interface FirewallPolicySNATArgs {
    /**
     * The operation mode for automatically learning private ranges to not be SNAT
     */
    autoLearnPrivateRanges?: pulumi.Input<string | enums.AutoLearnPrivateRangesMode>;
    /**
     * List of private IP addresses/IP address ranges to not be SNAT.
     */
    privateRanges?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * SQL Settings in Firewall Policy.
 */
export interface FirewallPolicySQLArgs {
    /**
     * A flag to indicate if SQL Redirect traffic filtering is enabled. Turning on the flag requires no rule using port 11000-11999.
     */
    allowSqlRedirect?: pulumi.Input<boolean>;
}

/**
 * SKU of Firewall policy.
 */
export interface FirewallPolicySkuArgs {
    /**
     * Tier of Firewall Policy.
     */
    tier?: pulumi.Input<string | enums.FirewallPolicySkuTier>;
}

/**
 * ThreatIntel Whitelist for Firewall Policy.
 */
export interface FirewallPolicyThreatIntelWhitelistArgs {
    /**
     * List of FQDNs for the ThreatIntel Whitelist.
     */
    fqdns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of IP addresses for the ThreatIntel Whitelist.
     */
    ipAddresses?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Configuration needed to perform TLS termination & initiation.
 */
export interface FirewallPolicyTransportSecurityArgs {
    /**
     * The CA used for intermediate CA generation.
     */
    certificateAuthority?: pulumi.Input<FirewallPolicyCertificateAuthorityArgs>;
}

/**
 * Parameters that define the flow log format.
 */
export interface FlowLogFormatParametersArgs {
    /**
     * The file type of flow log.
     */
    type?: pulumi.Input<string | enums.FlowLogFormatType>;
    /**
     * The version (revision) of the flow log.
     */
    version?: pulumi.Input<number>;
}
/**
 * flowLogFormatParametersArgsProvideDefaults sets the appropriate defaults for FlowLogFormatParametersArgs
 */
export function flowLogFormatParametersArgsProvideDefaults(val: FlowLogFormatParametersArgs): FlowLogFormatParametersArgs {
    return {
        ...val,
        version: (val.version) ?? 0,
    };
}

/**
 * Frontend IP address of the load balancer.
 */
export interface FrontendIPConfigurationArgs {
    /**
     * The reference to gateway load balancer frontend IP.
     */
    gatewayLoadBalancer?: pulumi.Input<SubResourceArgs>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within the set of frontend IP configurations used by the load balancer. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The private IP address of the IP configuration.
     */
    privateIPAddress?: pulumi.Input<string>;
    /**
     * Whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.
     */
    privateIPAddressVersion?: pulumi.Input<string | enums.IPVersion>;
    /**
     * The Private IP allocation method.
     */
    privateIPAllocationMethod?: pulumi.Input<string | enums.IPAllocationMethod>;
    /**
     * The reference to the Public IP resource.
     */
    publicIPAddress?: pulumi.Input<PublicIPAddressArgs>;
    /**
     * The reference to the Public IP Prefix resource.
     */
    publicIPPrefix?: pulumi.Input<SubResourceArgs>;
    /**
     * The reference to the subnet resource.
     */
    subnet?: pulumi.Input<SubnetArgs>;
    /**
     * A list of availability zones denoting the IP allocated for the resource needs to come from.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * frontendIPConfigurationArgsProvideDefaults sets the appropriate defaults for FrontendIPConfigurationArgs
 */
export function frontendIPConfigurationArgsProvideDefaults(val: FrontendIPConfigurationArgs): FrontendIPConfigurationArgs {
    return {
        ...val,
        subnet: (val.subnet ? pulumi.output(val.subnet).apply(subnetArgsProvideDefaults) : undefined),
    };
}

/**
 * GatewayCustomBgpIpAddressIpConfiguration for a virtual network gateway connection.
 */
export interface GatewayCustomBgpIpAddressIpConfigurationArgs {
    /**
     * The custom BgpPeeringAddress which belongs to IpconfigurationId.
     */
    customBgpIpAddress: pulumi.Input<string>;
    /**
     * The IpconfigurationId of ipconfiguration which belongs to gateway.
     */
    ipConfigurationId: pulumi.Input<string>;
}

/**
 * Gateway load balancer tunnel interface of a load balancer backend address pool.
 */
export interface GatewayLoadBalancerTunnelInterfaceArgs {
    /**
     * Identifier of gateway load balancer tunnel interface.
     */
    identifier?: pulumi.Input<number>;
    /**
     * Port of gateway load balancer tunnel interface.
     */
    port?: pulumi.Input<number>;
    /**
     * Protocol of gateway load balancer tunnel interface.
     */
    protocol?: pulumi.Input<string | enums.GatewayLoadBalancerTunnelProtocol>;
    /**
     * Traffic type of gateway load balancer tunnel interface.
     */
    type?: pulumi.Input<string | enums.GatewayLoadBalancerTunnelInterfaceType>;
}

/**
 * Define user session identifier group by clauses.
 */
export interface GroupByUserSessionArgs {
    /**
     * List of group by clause variables.
     */
    groupByVariables: pulumi.Input<pulumi.Input<GroupByVariableArgs>[]>;
}

/**
 * Define user session group by clause variables.
 */
export interface GroupByVariableArgs {
    /**
     * User Session clause variable.
     */
    variableName: pulumi.Input<string | enums.ApplicationGatewayFirewallUserSessionVariable>;
}

/**
 * The HTTP header.
 */
export interface HTTPHeaderArgs {
    /**
     * The name in HTTP header.
     */
    name?: pulumi.Input<string>;
    /**
     * The value in HTTP header.
     */
    value?: pulumi.Input<string>;
}

/**
 * An optional field under "Rewrite Action". It lets you capture and modify the value(s) of a specific header when multiple headers with the same name exist. Currently supported for Set-Cookie Response header only. For more details, visit https://aka.ms/appgwheadercrud
 */
export interface HeaderValueMatcherArgs {
    /**
     * Setting this parameter to truth value with force the pattern to do a case in-sensitive comparison.
     */
    ignoreCase?: pulumi.Input<boolean>;
    /**
     * Setting this value as truth will force to check the negation of the condition given by the user in the pattern field.
     */
    negate?: pulumi.Input<boolean>;
    /**
     * The pattern, either fixed string or regular expression, that evaluates if a header value should be selected for rewrite.
     */
    pattern?: pulumi.Input<string>;
}

/**
 * Hub Item.
 */
export interface HubArgs {
    /**
     * Resource Id.
     */
    resourceId?: pulumi.Input<string>;
    /**
     * Resource Type.
     */
    resourceType?: pulumi.Input<string>;
}

/**
 * IP addresses associated with azure firewall.
 */
export interface HubIPAddressesArgs {
    /**
     * Private IP Address associated with azure firewall.
     */
    privateIPAddress?: pulumi.Input<string>;
    /**
     * Public IP addresses associated with azure firewall.
     */
    publicIPs?: pulumi.Input<HubPublicIPAddressesArgs>;
}

/**
 * Public IP addresses associated with azure firewall.
 */
export interface HubPublicIPAddressesArgs {
    /**
     * The list of Public IP addresses associated with azure firewall or IP addresses to be retained.
     */
    addresses?: pulumi.Input<pulumi.Input<AzureFirewallPublicIPAddressArgs>[]>;
    /**
     * The number of Public IP addresses associated with azure firewall.
     */
    count?: pulumi.Input<number>;
}

/**
 * RouteTable route.
 */
export interface HubRouteArgs {
    /**
     * The type of destinations (eg: CIDR, ResourceId, Service).
     */
    destinationType: pulumi.Input<string>;
    /**
     * List of all destinations.
     */
    destinations: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the Route that is unique within a RouteTable. This name can be used to access this route.
     */
    name: pulumi.Input<string>;
    /**
     * NextHop resource ID.
     */
    nextHop: pulumi.Input<string>;
    /**
     * The type of next hop (eg: ResourceId).
     */
    nextHopType: pulumi.Input<string>;
}

/**
 * Properties of IPConfigurationBgpPeeringAddress.
 */
export interface IPConfigurationBgpPeeringAddressArgs {
    /**
     * The list of custom BGP peering addresses which belong to IP configuration.
     */
    customBgpIpAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ID of IP configuration which belongs to gateway.
     */
    ipconfigurationId?: pulumi.Input<string>;
}

/**
 * IP configuration profile child resource.
 */
export interface IPConfigurationProfileArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the resource. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The reference to the subnet resource to create a container network interface ip configuration.
     */
    subnet?: pulumi.Input<SubnetArgs>;
}
/**
 * ipconfigurationProfileArgsProvideDefaults sets the appropriate defaults for IPConfigurationProfileArgs
 */
export function ipconfigurationProfileArgsProvideDefaults(val: IPConfigurationProfileArgs): IPConfigurationProfileArgs {
    return {
        ...val,
        subnet: (val.subnet ? pulumi.output(val.subnet).apply(subnetArgsProvideDefaults) : undefined),
    };
}

export interface IPRuleArgs {
    /**
     * Specifies the IP or IP range in CIDR format. Only IPV4 address is allowed.
     */
    addressPrefix?: pulumi.Input<string>;
}

/**
 * IP traffic information.
 */
export interface IPTrafficArgs {
    /**
     * List of destination IP addresses of the traffic..
     */
    destinationIps: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The destination ports of the traffic.
     */
    destinationPorts: pulumi.Input<pulumi.Input<string>[]>;
    protocols: pulumi.Input<pulumi.Input<string | enums.NetworkProtocol>[]>;
    /**
     * List of source IP addresses of the traffic..
     */
    sourceIps: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The source ports of the traffic.
     */
    sourcePorts: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Inbound NAT pool of the load balancer.
 */
export interface InboundNatPoolArgs {
    /**
     * The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535.
     */
    backendPort: pulumi.Input<number>;
    /**
     * Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
     */
    enableFloatingIP?: pulumi.Input<boolean>;
    /**
     * Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
     */
    enableTcpReset?: pulumi.Input<boolean>;
    /**
     * A reference to frontend IP addresses.
     */
    frontendIPConfiguration?: pulumi.Input<SubResourceArgs>;
    /**
     * The last port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with a load balancer. Acceptable values range between 1 and 65535.
     */
    frontendPortRangeEnd: pulumi.Input<number>;
    /**
     * The first port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with a load balancer. Acceptable values range between 1 and 65534.
     */
    frontendPortRangeStart: pulumi.Input<number>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
     */
    idleTimeoutInMinutes?: pulumi.Input<number>;
    /**
     * The name of the resource that is unique within the set of inbound NAT pools used by the load balancer. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The reference to the transport protocol used by the inbound NAT pool.
     */
    protocol: pulumi.Input<string | enums.TransportProtocol>;
}

/**
 * Inbound NAT rule of the load balancer.
 */
export interface InboundNatRuleArgs {
    /**
     * A reference to backendAddressPool resource.
     */
    backendAddressPool?: pulumi.Input<SubResourceArgs>;
    /**
     * The port used for the internal endpoint. Acceptable values range from 1 to 65535.
     */
    backendPort?: pulumi.Input<number>;
    /**
     * Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
     */
    enableFloatingIP?: pulumi.Input<boolean>;
    /**
     * Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
     */
    enableTcpReset?: pulumi.Input<boolean>;
    /**
     * A reference to frontend IP addresses.
     */
    frontendIPConfiguration?: pulumi.Input<SubResourceArgs>;
    /**
     * The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values range from 1 to 65534.
     */
    frontendPort?: pulumi.Input<number>;
    /**
     * The port range end for the external endpoint. This property is used together with BackendAddressPool and FrontendPortRangeStart. Individual inbound NAT rule port mappings will be created for each backend address from BackendAddressPool. Acceptable values range from 1 to 65534.
     */
    frontendPortRangeEnd?: pulumi.Input<number>;
    /**
     * The port range start for the external endpoint. This property is used together with BackendAddressPool and FrontendPortRangeEnd. Individual inbound NAT rule port mappings will be created for each backend address from BackendAddressPool. Acceptable values range from 1 to 65534.
     */
    frontendPortRangeStart?: pulumi.Input<number>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
     */
    idleTimeoutInMinutes?: pulumi.Input<number>;
    /**
     * The name of the resource that is unique within the set of inbound NAT rules used by the load balancer. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The reference to the transport protocol used by the load balancing rule.
     */
    protocol?: pulumi.Input<string | enums.TransportProtocol>;
}

/**
 * Resource Uri of Public Ip for Standard Load Balancer Frontend End.
 */
export interface InternetIngressPublicIpsPropertiesArgs {
    /**
     * Resource Uri of Public Ip
     */
    id?: pulumi.Input<string>;
}

/**
 * Contains the IpTag associated with the object.
 */
export interface IpTagArgs {
    /**
     * The IP tag type. Example: FirstPartyUsage.
     */
    ipTagType?: pulumi.Input<string>;
    /**
     * The value of the IP tag associated with the public IP. Example: SQL.
     */
    tag?: pulumi.Input<string>;
}

/**
 * IpamPool prefix allocation reference.
 */
export interface IpamPoolPrefixAllocationArgs {
    /**
     * Resource id of the associated Azure IpamPool resource.
     */
    id?: pulumi.Input<string>;
    /**
     * Number of IP addresses to allocate.
     */
    numberOfIpAddresses?: pulumi.Input<string>;
}

/**
 * Properties of IpamPool resource properties which are specific to the Pool resource.
 */
export interface IpamPoolPropertiesArgs {
    /**
     * List of IP address prefixes of the resource.
     */
    addressPrefixes: pulumi.Input<pulumi.Input<string>[]>;
    description?: pulumi.Input<string>;
    /**
     * String representing a friendly name for the resource.
     */
    displayName?: pulumi.Input<string>;
    /**
     * String representing parent IpamPool resource name. If empty the IpamPool will be a root pool.
     */
    parentPoolName?: pulumi.Input<string>;
}

/**
 * An IPSec Policy configuration for a virtual network gateway connection.
 */
export interface IpsecPolicyArgs {
    /**
     * The DH Group used in IKE Phase 1 for initial SA.
     */
    dhGroup: pulumi.Input<string | enums.DhGroup>;
    /**
     * The IKE encryption algorithm (IKE phase 2).
     */
    ikeEncryption: pulumi.Input<string | enums.IkeEncryption>;
    /**
     * The IKE integrity algorithm (IKE phase 2).
     */
    ikeIntegrity: pulumi.Input<string | enums.IkeIntegrity>;
    /**
     * The IPSec encryption algorithm (IKE phase 1).
     */
    ipsecEncryption: pulumi.Input<string | enums.IpsecEncryption>;
    /**
     * The IPSec integrity algorithm (IKE phase 1).
     */
    ipsecIntegrity: pulumi.Input<string | enums.IpsecIntegrity>;
    /**
     * The Pfs Group used in IKE Phase 2 for new child SA.
     */
    pfsGroup: pulumi.Input<string | enums.PfsGroup>;
    /**
     * The IPSec Security Association (also called Quick Mode or Phase 2 SA) payload size in KB for a site to site VPN tunnel.
     */
    saDataSizeKilobytes: pulumi.Input<number>;
    /**
     * The IPSec Security Association (also called Quick Mode or Phase 2 SA) lifetime in seconds for a site to site VPN tunnel.
     */
    saLifeTimeSeconds: pulumi.Input<number>;
}

/**
 * IPv6 Circuit Connection properties for global reach.
 */
export interface Ipv6CircuitConnectionConfigArgs {
    /**
     * /125 IP address space to carve out customer addresses for global reach.
     */
    addressPrefix?: pulumi.Input<string>;
}

/**
 * Contains IPv6 peering config.
 */
export interface Ipv6ExpressRouteCircuitPeeringConfigArgs {
    /**
     * The Microsoft peering configuration.
     */
    microsoftPeeringConfig?: pulumi.Input<ExpressRouteCircuitPeeringConfigArgs>;
    /**
     * The primary address prefix.
     */
    primaryPeerAddressPrefix?: pulumi.Input<string>;
    /**
     * The reference to the RouteFilter resource.
     */
    routeFilter?: pulumi.Input<SubResourceArgs>;
    /**
     * The secondary address prefix.
     */
    secondaryPeerAddressPrefix?: pulumi.Input<string>;
    /**
     * The state of peering.
     */
    state?: pulumi.Input<string | enums.ExpressRouteCircuitPeeringState>;
}

/**
 * Load balancer backend addresses.
 */
export interface LoadBalancerBackendAddressArgs {
    /**
     * A list of administrative states which once set can override health probe so that Load Balancer will always forward new connections to backend, or deny new connections and reset existing connections.
     */
    adminState?: pulumi.Input<string | enums.LoadBalancerBackendAddressAdminState>;
    /**
     * IP Address belonging to the referenced virtual network.
     */
    ipAddress?: pulumi.Input<string>;
    /**
     * Reference to the frontend ip address configuration defined in regional loadbalancer.
     */
    loadBalancerFrontendIPConfiguration?: pulumi.Input<SubResourceArgs>;
    /**
     * Name of the backend address.
     */
    name?: pulumi.Input<string>;
    /**
     * Reference to an existing subnet.
     */
    subnet?: pulumi.Input<SubResourceArgs>;
    /**
     * Reference to an existing virtual network.
     */
    virtualNetwork?: pulumi.Input<SubResourceArgs>;
}

/**
 * SKU of a load balancer.
 */
export interface LoadBalancerSkuArgs {
    /**
     * Name of a load balancer SKU.
     */
    name?: pulumi.Input<string | enums.LoadBalancerSkuName>;
    /**
     * Tier of a load balancer SKU.
     */
    tier?: pulumi.Input<string | enums.LoadBalancerSkuTier>;
}

/**
 * A load balancing rule for a load balancer.
 */
export interface LoadBalancingRuleArgs {
    /**
     * A reference to a pool of DIPs. Inbound traffic is randomly load balanced across IPs in the backend IPs.
     */
    backendAddressPool?: pulumi.Input<SubResourceArgs>;
    /**
     * An array of references to pool of DIPs.
     */
    backendAddressPools?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
    /**
     * The port used for internal connections on the endpoint. Acceptable values are between 0 and 65535. Note that value 0 enables "Any Port".
     */
    backendPort?: pulumi.Input<number>;
    /**
     * Configures SNAT for the VMs in the backend pool to use the publicIP address specified in the frontend of the load balancing rule.
     */
    disableOutboundSnat?: pulumi.Input<boolean>;
    /**
     * Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
     */
    enableFloatingIP?: pulumi.Input<boolean>;
    /**
     * Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
     */
    enableTcpReset?: pulumi.Input<boolean>;
    /**
     * A reference to frontend IP addresses.
     */
    frontendIPConfiguration?: pulumi.Input<SubResourceArgs>;
    /**
     * The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values are between 0 and 65534. Note that value 0 enables "Any Port".
     */
    frontendPort: pulumi.Input<number>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
     */
    idleTimeoutInMinutes?: pulumi.Input<number>;
    /**
     * The load distribution policy for this rule.
     */
    loadDistribution?: pulumi.Input<string | enums.LoadDistribution>;
    /**
     * The name of the resource that is unique within the set of load balancing rules used by the load balancer. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The reference to the load balancer probe used by the load balancing rule.
     */
    probe?: pulumi.Input<SubResourceArgs>;
    /**
     * The reference to the transport protocol used by the load balancing rule.
     */
    protocol: pulumi.Input<string | enums.TransportProtocol>;
}

/**
 * A common class for general resource information.
 */
export interface LocalNetworkGatewayArgs {
    /**
     * Local network gateway's BGP speaker settings.
     */
    bgpSettings?: pulumi.Input<BgpSettingsArgs>;
    /**
     * FQDN of local network gateway.
     */
    fqdn?: pulumi.Input<string>;
    /**
     * IP address of local network gateway.
     */
    gatewayIpAddress?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Local network site address space.
     */
    localNetworkAddressSpace?: pulumi.Input<AddressSpaceArgs>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * Defines a managed rule group override setting.
 */
export interface ManagedRuleGroupOverrideArgs {
    /**
     * The managed rule group to override.
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
     * Identifier for the managed rule.
     */
    ruleId: pulumi.Input<string>;
    /**
     * Describes the override sensitivity to be applied when rule matches.
     */
    sensitivity?: pulumi.Input<string | enums.SensitivityType>;
    /**
     * The state of the managed rule. Defaults to Disabled if not specified.
     */
    state?: pulumi.Input<string | enums.ManagedRuleEnabledState>;
}

/**
 * Defines a managed rule set.
 */
export interface ManagedRuleSetArgs {
    /**
     * Defines the rule group overrides to apply to the rule set.
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
 * Allow to exclude some variable satisfy the condition for the WAF check.
 */
export interface ManagedRulesDefinitionArgs {
    /**
     * The exceptions that are applied on the policy.
     */
    exceptions?: pulumi.Input<pulumi.Input<ExceptionEntryArgs>[]>;
    /**
     * The Exclusions that are applied on the policy.
     */
    exclusions?: pulumi.Input<pulumi.Input<OwaspCrsExclusionEntryArgs>[]>;
    /**
     * The managed rule sets that are associated with the policy.
     */
    managedRuleSets: pulumi.Input<pulumi.Input<ManagedRuleSetArgs>[]>;
}

/**
 * Identity for the resource.
 */
export interface ManagedServiceIdentityArgs {
    /**
     * The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine.
     */
    type?: pulumi.Input<enums.ResourceIdentityType>;
    /**
     * The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Define match conditions.
 */
export interface MatchConditionArgs {
    /**
     * Match value.
     */
    matchValues: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of match variables.
     */
    matchVariables: pulumi.Input<pulumi.Input<MatchVariableArgs>[]>;
    /**
     * Whether this is negate condition or not.
     */
    negationConditon?: pulumi.Input<boolean>;
    /**
     * The operator to be matched.
     */
    operator: pulumi.Input<string | enums.WebApplicationFirewallOperator>;
    /**
     * List of transforms.
     */
    transforms?: pulumi.Input<pulumi.Input<string | enums.WebApplicationFirewallTransform>[]>;
}

/**
 * Define match variables.
 */
export interface MatchVariableArgs {
    /**
     * The selector of match variable.
     */
    selector?: pulumi.Input<string>;
    /**
     * Match Variable.
     */
    variableName: pulumi.Input<string | enums.WebApplicationFirewallMatchVariable>;
}

/**
 * Nat Gateway resource.
 */
export interface NatGatewayArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The idle timeout of the nat gateway.
     */
    idleTimeoutInMinutes?: pulumi.Input<number>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * An array of public ip addresses associated with the nat gateway resource.
     */
    publicIpAddresses?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
    /**
     * An array of public ip prefixes associated with the nat gateway resource.
     */
    publicIpPrefixes?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
    /**
     * The nat gateway SKU.
     */
    sku?: pulumi.Input<NatGatewaySkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A list of availability zones denoting the zone in which Nat Gateway should be deployed.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * SKU of nat gateway.
 */
export interface NatGatewaySkuArgs {
    /**
     * Name of Nat Gateway SKU.
     */
    name?: pulumi.Input<string | enums.NatGatewaySkuName>;
}

/**
 * Rule of type nat.
 */
export interface NatRuleArgs {
    /**
     * Description of the rule.
     */
    description?: pulumi.Input<string>;
    /**
     * List of destination IP addresses or Service Tags.
     */
    destinationAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of destination ports.
     */
    destinationPorts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Array of FirewallPolicyRuleNetworkProtocols.
     */
    ipProtocols?: pulumi.Input<pulumi.Input<string | enums.FirewallPolicyRuleNetworkProtocol>[]>;
    /**
     * Name of the rule.
     */
    name?: pulumi.Input<string>;
    /**
     * Rule Type.
     * Expected value is 'NatRule'.
     */
    ruleType: pulumi.Input<"NatRule">;
    /**
     * List of source IP addresses for this rule.
     */
    sourceAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of source IpGroups for this rule.
     */
    sourceIpGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The translated address for this NAT rule.
     */
    translatedAddress?: pulumi.Input<string>;
    /**
     * The translated FQDN for this NAT rule.
     */
    translatedFqdn?: pulumi.Input<string>;
    /**
     * The translated port for this NAT rule.
     */
    translatedPort?: pulumi.Input<string>;
}

/**
 * Rule condition of type nat.
 */
export interface NatRuleConditionArgs {
    /**
     * Description of the rule condition.
     */
    description?: pulumi.Input<string>;
    /**
     * List of destination IP addresses or Service Tags.
     */
    destinationAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of destination ports.
     */
    destinationPorts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Array of FirewallPolicyRuleConditionNetworkProtocols.
     */
    ipProtocols?: pulumi.Input<pulumi.Input<string | enums.FirewallPolicyRuleConditionNetworkProtocol>[]>;
    /**
     * Name of the rule condition.
     */
    name?: pulumi.Input<string>;
    /**
     * Rule Condition Type.
     * Expected value is 'NatRuleCondition'.
     */
    ruleConditionType: pulumi.Input<"NatRuleCondition">;
    /**
     * List of source IP addresses for this rule.
     */
    sourceAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of source IpGroups for this rule.
     */
    sourceIpGroups?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * DNS settings of a network interface.
 */
export interface NetworkInterfaceDnsSettingsArgs {
    /**
     * List of DNS servers IP addresses. Use 'AzureProvidedDNS' to switch to azure provided DNS resolution. 'AzureProvidedDNS' value cannot be combined with other IPs, it must be the only value in dnsServers collection.
     */
    dnsServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Relative DNS name for this NIC used for internal communications between VMs in the same virtual network.
     */
    internalDnsNameLabel?: pulumi.Input<string>;
}

/**
 * IPConfiguration in a network interface.
 */
export interface NetworkInterfaceIPConfigurationArgs {
    /**
     * The reference to ApplicationGatewayBackendAddressPool resource.
     */
    applicationGatewayBackendAddressPools?: pulumi.Input<pulumi.Input<ApplicationGatewayBackendAddressPoolArgs>[]>;
    /**
     * Application security groups in which the IP configuration is included.
     */
    applicationSecurityGroups?: pulumi.Input<pulumi.Input<ApplicationSecurityGroupArgs>[]>;
    /**
     * The reference to gateway load balancer frontend IP.
     */
    gatewayLoadBalancer?: pulumi.Input<SubResourceArgs>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The reference to LoadBalancerBackendAddressPool resource.
     */
    loadBalancerBackendAddressPools?: pulumi.Input<pulumi.Input<BackendAddressPoolArgs>[]>;
    /**
     * A list of references of LoadBalancerInboundNatRules.
     */
    loadBalancerInboundNatRules?: pulumi.Input<pulumi.Input<InboundNatRuleArgs>[]>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Whether this is a primary customer address on the network interface.
     */
    primary?: pulumi.Input<boolean>;
    /**
     * Private IP address of the IP configuration. It can be a single IP address or a CIDR block in the format <address>/<prefix-length>.
     */
    privateIPAddress?: pulumi.Input<string>;
    /**
     * The private IP address prefix length. If specified and the allocation method is dynamic, the service will allocate a CIDR block instead of a single IP address.
     */
    privateIPAddressPrefixLength?: pulumi.Input<number>;
    /**
     * Whether the specific IP configuration is IPv4 or IPv6. Default is IPv4.
     */
    privateIPAddressVersion?: pulumi.Input<string | enums.IPVersion>;
    /**
     * The private IP address allocation method.
     */
    privateIPAllocationMethod?: pulumi.Input<string | enums.IPAllocationMethod>;
    /**
     * Public IP address bound to the IP configuration.
     */
    publicIPAddress?: pulumi.Input<PublicIPAddressArgs>;
    /**
     * Subnet bound to the IP configuration.
     */
    subnet?: pulumi.Input<SubnetArgs>;
    /**
     * Resource type.
     */
    type?: pulumi.Input<string>;
    /**
     * The reference to Virtual Network Taps.
     */
    virtualNetworkTaps?: pulumi.Input<pulumi.Input<VirtualNetworkTapArgs>[]>;
}
/**
 * networkInterfaceIPConfigurationArgsProvideDefaults sets the appropriate defaults for NetworkInterfaceIPConfigurationArgs
 */
export function networkInterfaceIPConfigurationArgsProvideDefaults(val: NetworkInterfaceIPConfigurationArgs): NetworkInterfaceIPConfigurationArgs {
    return {
        ...val,
        subnet: (val.subnet ? pulumi.output(val.subnet).apply(subnetArgsProvideDefaults) : undefined),
    };
}

/**
 * Scope of Network Manager.
 */
export interface NetworkManagerPropertiesNetworkManagerScopesArgs {
    /**
     * List of management groups.
     */
    managementGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of subscriptions.
     */
    subscriptions?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Network manager routing group item.
 */
export interface NetworkManagerRoutingGroupItemArgs {
    /**
     * Network manager group Id.
     */
    networkGroupId: pulumi.Input<string>;
}

/**
 * Network manager security group item.
 */
export interface NetworkManagerSecurityGroupItemArgs {
    /**
     * Network manager group Id.
     */
    networkGroupId: pulumi.Input<string>;
}

/**
 * Rule of type network.
 */
export interface NetworkRuleArgs {
    /**
     * Description of the rule.
     */
    description?: pulumi.Input<string>;
    /**
     * List of destination IP addresses or Service Tags.
     */
    destinationAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of destination FQDNs.
     */
    destinationFqdns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of destination IpGroups for this rule.
     */
    destinationIpGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of destination ports.
     */
    destinationPorts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Array of FirewallPolicyRuleNetworkProtocols.
     */
    ipProtocols?: pulumi.Input<pulumi.Input<string | enums.FirewallPolicyRuleNetworkProtocol>[]>;
    /**
     * Name of the rule.
     */
    name?: pulumi.Input<string>;
    /**
     * Rule Type.
     * Expected value is 'NetworkRule'.
     */
    ruleType: pulumi.Input<"NetworkRule">;
    /**
     * List of source IP addresses for this rule.
     */
    sourceAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of source IpGroups for this rule.
     */
    sourceIpGroups?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Rule condition of type network.
 */
export interface NetworkRuleConditionArgs {
    /**
     * Description of the rule condition.
     */
    description?: pulumi.Input<string>;
    /**
     * List of destination IP addresses or Service Tags.
     */
    destinationAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of destination IpGroups for this rule.
     */
    destinationIpGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of destination ports.
     */
    destinationPorts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Array of FirewallPolicyRuleConditionNetworkProtocols.
     */
    ipProtocols?: pulumi.Input<pulumi.Input<string | enums.FirewallPolicyRuleConditionNetworkProtocol>[]>;
    /**
     * Name of the rule condition.
     */
    name?: pulumi.Input<string>;
    /**
     * Rule Condition Type.
     * Expected value is 'NetworkRuleCondition'.
     */
    ruleConditionType: pulumi.Input<"NetworkRuleCondition">;
    /**
     * List of source IP addresses for this rule.
     */
    sourceAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of source IpGroups for this rule.
     */
    sourceIpGroups?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * NetworkSecurityGroup resource.
 */
export interface NetworkSecurityGroupArgs {
    /**
     * The default security rules of network security group.
     */
    defaultSecurityRules?: pulumi.Input<pulumi.Input<SecurityRuleArgs>[]>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag?: pulumi.Input<string>;
    /**
     * When enabled, flows created from Network Security Group connections will be re-evaluated when rules are updates. Initial enablement will trigger re-evaluation.
     */
    flushConnection?: pulumi.Input<boolean>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    provisioningState?: pulumi.Input<string>;
    /**
     * The resource GUID property of the network security group resource.
     */
    resourceGuid?: pulumi.Input<string>;
    /**
     * A collection of security rules of the network security group.
     */
    securityRules?: pulumi.Input<pulumi.Input<SecurityRuleArgs>[]>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * Properties of the NetworkVirtualApplianceConnection subresource.
 */
export interface NetworkVirtualApplianceConnectionPropertiesArgs {
    /**
     * Network Virtual Appliance ASN.
     */
    asn?: pulumi.Input<number>;
    /**
     * List of bgpPeerAddresses for the NVA instances
     */
    bgpPeerAddress?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Enable internet security.
     */
    enableInternetSecurity?: pulumi.Input<boolean>;
    /**
     * The name of the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The Routing Configuration indicating the associated and propagated route tables on this connection.
     */
    routingConfiguration?: pulumi.Input<RoutingConfigurationArgs>;
    /**
     * Unique identifier for the connection.
     */
    tunnelIdentifier?: pulumi.Input<number>;
}

/**
 * Network Profile containing configurations for Public and Private NIC.
 */
export interface NetworkVirtualAppliancePropertiesFormatNetworkProfileArgs {
    networkInterfaceConfigurations?: pulumi.Input<pulumi.Input<VirtualApplianceNetworkInterfaceConfigurationArgs>[]>;
}

/**
 * The NSP logging configuration properties.
 */
export interface NspLoggingConfigurationPropertiesArgs {
    /**
     * The log categories to enable in the NSP logging configuration.
     */
    enabledLogCategories?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The version of the NSP logging configuration.
     */
    version?: pulumi.Input<string>;
}

/**
 * Office365 breakout categories.
 */
export interface O365BreakOutCategoryPoliciesArgs {
    /**
     * Flag to control allow category.
     */
    allow?: pulumi.Input<boolean>;
    /**
     * Flag to control default category.
     */
    default?: pulumi.Input<boolean>;
    /**
     * Flag to control optimize category.
     */
    optimize?: pulumi.Input<boolean>;
}

/**
 * The Office365 breakout policy.
 */
export interface O365PolicyPropertiesArgs {
    /**
     * Office365 breakout categories.
     */
    breakOutCategories?: pulumi.Input<O365BreakOutCategoryPoliciesArgs>;
}

/**
 * Network Virtual Appliance Sku Properties.
 */
export interface Office365PolicyPropertiesArgs {
    /**
     * Office 365 breakout categories.
     */
    breakOutCategories?: pulumi.Input<BreakOutCategoryPoliciesArgs>;
}

/**
 * Describes a column to sort
 */
export interface OrderBy {
    /**
     * Describes the actual column name to sort by
     */
    field?: string;
    /**
     * Describes if results should be in ascending/descending order
     */
    order?: string | enums.FirewallPolicyIDPSQuerySortOrder;
}

/**
 * Describes a column to sort
 */
export interface OrderByArgs {
    /**
     * Describes the actual column name to sort by
     */
    field?: pulumi.Input<string>;
    /**
     * Describes if results should be in ascending/descending order
     */
    order?: pulumi.Input<string | enums.FirewallPolicyIDPSQuerySortOrder>;
}

/**
 * Outbound rule of the load balancer.
 */
export interface OutboundRuleArgs {
    /**
     * The number of outbound ports to be used for NAT.
     */
    allocatedOutboundPorts?: pulumi.Input<number>;
    /**
     * A reference to a pool of DIPs. Outbound traffic is randomly load balanced across IPs in the backend IPs.
     */
    backendAddressPool: pulumi.Input<SubResourceArgs>;
    /**
     * Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
     */
    enableTcpReset?: pulumi.Input<boolean>;
    /**
     * The Frontend IP addresses of the load balancer.
     */
    frontendIPConfigurations: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The timeout for the TCP idle connection.
     */
    idleTimeoutInMinutes?: pulumi.Input<number>;
    /**
     * The name of the resource that is unique within the set of outbound rules used by the load balancer. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The protocol for the outbound rule in load balancer.
     */
    protocol: pulumi.Input<string | enums.LoadBalancerOutboundRuleProtocol>;
}

/**
 * Allow to exclude some variable satisfy the condition for the WAF check.
 */
export interface OwaspCrsExclusionEntryArgs {
    /**
     * The managed rule sets that are associated with the exclusion.
     */
    exclusionManagedRuleSets?: pulumi.Input<pulumi.Input<ExclusionManagedRuleSetArgs>[]>;
    /**
     * The variable to be excluded.
     */
    matchVariable: pulumi.Input<string | enums.OwaspCrsExclusionEntryMatchVariable>;
    /**
     * When matchVariable is a collection, operator used to specify which elements in the collection this exclusion applies to.
     */
    selector: pulumi.Input<string>;
    /**
     * When matchVariable is a collection, operate on the selector to specify which elements in the collection this exclusion applies to.
     */
    selectorMatchOperator: pulumi.Input<string | enums.OwaspCrsExclusionEntrySelectorMatchOperator>;
}

/**
 * P2SConnectionConfiguration Resource.
 */
export interface P2SConnectionConfigurationArgs {
    /**
     * Flag indicating whether the enable internet security flag is turned on for the P2S Connections or not.
     */
    enableInternetSecurity?: pulumi.Input<boolean>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The Routing Configuration indicating the associated and propagated route tables on this connection.
     */
    routingConfiguration?: pulumi.Input<RoutingConfigurationArgs>;
    /**
     * The reference to the address space resource which represents Address space for P2S VpnClient.
     */
    vpnClientAddressPool?: pulumi.Input<AddressSpaceArgs>;
}

/**
 * Radius client root certificate of P2SVpnServerConfiguration.
 */
export interface P2SVpnServerConfigRadiusClientRootCertificateArgs {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The Radius client root certificate thumbprint.
     */
    thumbprint?: pulumi.Input<string>;
}

/**
 * Radius Server root certificate of P2SVpnServerConfiguration.
 */
export interface P2SVpnServerConfigRadiusServerRootCertificateArgs {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The certificate public data.
     */
    publicCertData: pulumi.Input<string>;
}

/**
 * VPN client revoked certificate of P2SVpnServerConfiguration.
 */
export interface P2SVpnServerConfigVpnClientRevokedCertificateArgs {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The revoked VPN client certificate thumbprint.
     */
    thumbprint?: pulumi.Input<string>;
}

/**
 * VPN client root certificate of P2SVpnServerConfiguration.
 */
export interface P2SVpnServerConfigVpnClientRootCertificateArgs {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The certificate public data.
     */
    publicCertData: pulumi.Input<string>;
}

/**
 * Parameters for P2SVpnServerConfiguration.
 */
export interface P2SVpnServerConfigurationPropertiesArgs {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag?: pulumi.Input<string>;
    /**
     * The name of the P2SVpnServerConfiguration that is unique within a VirtualWan in a resource group. This name can be used to access the resource along with Paren VirtualWan resource name.
     */
    name?: pulumi.Input<string>;
    /**
     * Radius client root certificate of P2SVpnServerConfiguration.
     */
    p2SVpnServerConfigRadiusClientRootCertificates?: pulumi.Input<pulumi.Input<P2SVpnServerConfigRadiusClientRootCertificateArgs>[]>;
    /**
     * Radius Server root certificate of P2SVpnServerConfiguration.
     */
    p2SVpnServerConfigRadiusServerRootCertificates?: pulumi.Input<pulumi.Input<P2SVpnServerConfigRadiusServerRootCertificateArgs>[]>;
    /**
     * VPN client revoked certificate of P2SVpnServerConfiguration.
     */
    p2SVpnServerConfigVpnClientRevokedCertificates?: pulumi.Input<pulumi.Input<P2SVpnServerConfigVpnClientRevokedCertificateArgs>[]>;
    /**
     * VPN client root certificate of P2SVpnServerConfiguration.
     */
    p2SVpnServerConfigVpnClientRootCertificates?: pulumi.Input<pulumi.Input<P2SVpnServerConfigVpnClientRootCertificateArgs>[]>;
    /**
     * The radius server address property of the P2SVpnServerConfiguration resource for point to site client connection.
     */
    radiusServerAddress?: pulumi.Input<string>;
    /**
     * The radius secret property of the P2SVpnServerConfiguration resource for point to site client connection.
     */
    radiusServerSecret?: pulumi.Input<string>;
    /**
     * VpnClientIpsecPolicies for P2SVpnServerConfiguration.
     */
    vpnClientIpsecPolicies?: pulumi.Input<pulumi.Input<IpsecPolicyArgs>[]>;
    /**
     * VPN protocols for the P2SVpnServerConfiguration.
     */
    vpnProtocols?: pulumi.Input<pulumi.Input<string | enums.VpnGatewayTunnelingProtocol>[]>;
}

/**
 * Filter that is applied to packet capture request. Multiple filters can be applied.
 */
export interface PacketCaptureFilterArgs {
    /**
     * Local IP Address to be filtered on. Notation: "127.0.0.1" for single address entry. "127.0.0.1-127.0.0.255" for range. "127.0.0.1;127.0.0.5"? for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.
     */
    localIPAddress?: pulumi.Input<string>;
    /**
     * Local port to be filtered on. Notation: "80" for single port entry."80-85" for range. "80;443;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.
     */
    localPort?: pulumi.Input<string>;
    /**
     * Protocol to be filtered on.
     */
    protocol?: pulumi.Input<string | enums.PcProtocol>;
    /**
     * Local IP Address to be filtered on. Notation: "127.0.0.1" for single address entry. "127.0.0.1-127.0.0.255" for range. "127.0.0.1;127.0.0.5;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.
     */
    remoteIPAddress?: pulumi.Input<string>;
    /**
     * Remote port to be filtered on. Notation: "80" for single port entry."80-85" for range. "80;443;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.
     */
    remotePort?: pulumi.Input<string>;
}
/**
 * packetCaptureFilterArgsProvideDefaults sets the appropriate defaults for PacketCaptureFilterArgs
 */
export function packetCaptureFilterArgsProvideDefaults(val: PacketCaptureFilterArgs): PacketCaptureFilterArgs {
    return {
        ...val,
        protocol: (val.protocol) ?? "Any",
    };
}

/**
 * A list of AzureVMSS instances which can be included or excluded to run packet capture. If both included and excluded are empty, then the packet capture will run on all instances of AzureVMSS.
 */
export interface PacketCaptureMachineScopeArgs {
    /**
     * List of AzureVMSS instances which has to be excluded from the AzureVMSS from running packet capture.
     */
    exclude?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of AzureVMSS instances to run packet capture on.
     */
    include?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The storage location for a packet capture session.
 */
export interface PacketCaptureSettingsArgs {
    /**
     * Number of file count. Default value of count is 10 and maximum number is 10000.
     */
    fileCount?: pulumi.Input<number>;
    /**
     * Number of bytes captured per packet. Default value in bytes 104857600 (100MB) and maximum in bytes 4294967295 (4GB).
     */
    fileSizeInBytes?: pulumi.Input<number>;
    /**
     * Maximum duration of the capture session in seconds is 604800s (7 days) for a file. Default value in second 86400s (1 day).
     */
    sessionTimeLimitInSeconds?: pulumi.Input<number>;
}
/**
 * packetCaptureSettingsArgsProvideDefaults sets the appropriate defaults for PacketCaptureSettingsArgs
 */
export function packetCaptureSettingsArgsProvideDefaults(val: PacketCaptureSettingsArgs): PacketCaptureSettingsArgs {
    return {
        ...val,
        fileCount: (val.fileCount) ?? 10,
        fileSizeInBytes: (val.fileSizeInBytes) ?? 104857600,
        sessionTimeLimitInSeconds: (val.sessionTimeLimitInSeconds) ?? 86400,
    };
}

/**
 * The storage location for a packet capture session.
 */
export interface PacketCaptureStorageLocationArgs {
    /**
     * This path is invalid if 'Continuous Capture' is provided with 'true' or 'false'. A valid local path on the targeting VM. Must include the name of the capture file (*.cap). For linux virtual machine it must start with /var/captures. Required if no storage ID is provided, otherwise optional.
     */
    filePath?: pulumi.Input<string>;
    /**
     * This path is valid if 'Continuous Capture' is provided with 'true' or 'false' and required if no storage ID is provided, otherwise optional. Must include the name of the capture file (*.cap). For linux virtual machine it must start with /var/captures.
     */
    localPath?: pulumi.Input<string>;
    /**
     * The ID of the storage account to save the packet capture session. Required if no localPath or filePath is provided.
     */
    storageId?: pulumi.Input<string>;
    /**
     * The URI of the storage path to save the packet capture. Must be a well-formed URI describing the location to save the packet capture.
     */
    storagePath?: pulumi.Input<string>;
}

/**
 * Parameters for an Action.
 */
export interface ParameterArgs {
    /**
     * List of AS paths.
     */
    asPath?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of BGP communities.
     */
    community?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of route prefixes.
     */
    routePrefix?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Defines contents of a web application firewall global configuration.
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
     * Whether allow WAF to enforce file upload limits.
     */
    fileUploadEnforcement?: pulumi.Input<boolean>;
    /**
     * Maximum file upload size in Mb for WAF.
     */
    fileUploadLimitInMb?: pulumi.Input<number>;
    /**
     * Web Application Firewall JavaScript Challenge Cookie Expiration time in minutes.
     */
    jsChallengeCookieExpirationInMins?: pulumi.Input<number>;
    /**
     * To scrub sensitive log fields
     */
    logScrubbing?: pulumi.Input<PolicySettingsLogScrubbingArgs>;
    /**
     * Maximum request body size in Kb for WAF.
     */
    maxRequestBodySizeInKb?: pulumi.Input<number>;
    /**
     * The mode of the policy.
     */
    mode?: pulumi.Input<string | enums.WebApplicationFirewallMode>;
    /**
     * Whether to allow WAF to check request Body.
     */
    requestBodyCheck?: pulumi.Input<boolean>;
    /**
     * Whether allow WAF to enforce request body limits.
     */
    requestBodyEnforcement?: pulumi.Input<boolean>;
    /**
     * Max inspection limit in KB for request body inspection for WAF.
     */
    requestBodyInspectLimitInKB?: pulumi.Input<number>;
    /**
     * The state of the policy.
     */
    state?: pulumi.Input<string | enums.WebApplicationFirewallEnabledState>;
}
/**
 * policySettingsArgsProvideDefaults sets the appropriate defaults for PolicySettingsArgs
 */
export function policySettingsArgsProvideDefaults(val: PolicySettingsArgs): PolicySettingsArgs {
    return {
        ...val,
        fileUploadEnforcement: (val.fileUploadEnforcement) ?? true,
        requestBodyEnforcement: (val.requestBodyEnforcement) ?? true,
    };
}

/**
 * To scrub sensitive log fields
 */
export interface PolicySettingsLogScrubbingArgs {
    /**
     * The rules that are applied to the logs for scrubbing.
     */
    scrubbingRules?: pulumi.Input<pulumi.Input<WebApplicationFirewallScrubbingRulesArgs>[]>;
    /**
     * State of the log scrubbing config. Default value is Enabled.
     */
    state?: pulumi.Input<string | enums.WebApplicationFirewallScrubbingState>;
}

/**
 * PrivateDnsZoneConfig resource.
 */
export interface PrivateDnsZoneConfigArgs {
    /**
     * Name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The resource id of the private dns zone.
     */
    privateDnsZoneId?: pulumi.Input<string>;
}

/**
 * An IP Configuration of the private endpoint.
 */
export interface PrivateEndpointIPConfigurationArgs {
    /**
     * The ID of a group obtained from the remote resource that this private endpoint should connect to.
     */
    groupId?: pulumi.Input<string>;
    /**
     * The member name of a group obtained from the remote resource that this private endpoint should connect to.
     */
    memberName?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group.
     */
    name?: pulumi.Input<string>;
    /**
     * A private ip address obtained from the private endpoint's subnet.
     */
    privateIPAddress?: pulumi.Input<string>;
}

/**
 * Private link service resource.
 */
export interface PrivateLinkServiceArgs {
    /**
     * The auto-approval list of the private link service.
     */
    autoApproval?: pulumi.Input<PrivateLinkServicePropertiesAutoApprovalArgs>;
    /**
     * The destination IP address of the private link service.
     */
    destinationIPAddress?: pulumi.Input<string>;
    /**
     * Whether the private link service is enabled for proxy protocol or not.
     */
    enableProxyProtocol?: pulumi.Input<boolean>;
    /**
     * The extended location of the load balancer.
     */
    extendedLocation?: pulumi.Input<ExtendedLocationArgs>;
    /**
     * The list of Fqdn.
     */
    fqdns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * An array of private link service IP configurations.
     */
    ipConfigurations?: pulumi.Input<pulumi.Input<PrivateLinkServiceIpConfigurationArgs>[]>;
    /**
     * An array of references to the load balancer IP configurations.
     */
    loadBalancerFrontendIpConfigurations?: pulumi.Input<pulumi.Input<FrontendIPConfigurationArgs>[]>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The visibility list of the private link service.
     */
    visibility?: pulumi.Input<PrivateLinkServicePropertiesVisibilityArgs>;
}

/**
 * PrivateLinkServiceConnection resource.
 */
export interface PrivateLinkServiceConnectionArgs {
    /**
     * The ID(s) of the group(s) obtained from the remote resource that this private endpoint should connect to.
     */
    groupIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * A collection of read-only information about the state of the connection to the remote resource.
     */
    privateLinkServiceConnectionState?: pulumi.Input<PrivateLinkServiceConnectionStateArgs>;
    /**
     * The resource id of private link service.
     */
    privateLinkServiceId?: pulumi.Input<string>;
    /**
     * A message passed to the owner of the remote resource with this connection request. Restricted to 140 chars.
     */
    requestMessage?: pulumi.Input<string>;
}

/**
 * A collection of information about the state of the connection between service consumer and provider.
 */
export interface PrivateLinkServiceConnectionStateArgs {
    /**
     * A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionsRequired?: pulumi.Input<string>;
    /**
     * The reason for approval/rejection of the connection.
     */
    description?: pulumi.Input<string>;
    /**
     * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
     */
    status?: pulumi.Input<string>;
}

/**
 * The private link service ip configuration.
 */
export interface PrivateLinkServiceIpConfigurationArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of private link service ip configuration.
     */
    name?: pulumi.Input<string>;
    /**
     * Whether the ip configuration is primary or not.
     */
    primary?: pulumi.Input<boolean>;
    /**
     * The private IP address of the IP configuration.
     */
    privateIPAddress?: pulumi.Input<string>;
    /**
     * Whether the specific IP configuration is IPv4 or IPv6. Default is IPv4.
     */
    privateIPAddressVersion?: pulumi.Input<string | enums.IPVersion>;
    /**
     * The private IP address allocation method.
     */
    privateIPAllocationMethod?: pulumi.Input<string | enums.IPAllocationMethod>;
    /**
     * The reference to the subnet resource.
     */
    subnet?: pulumi.Input<SubnetArgs>;
}
/**
 * privateLinkServiceIpConfigurationArgsProvideDefaults sets the appropriate defaults for PrivateLinkServiceIpConfigurationArgs
 */
export function privateLinkServiceIpConfigurationArgsProvideDefaults(val: PrivateLinkServiceIpConfigurationArgs): PrivateLinkServiceIpConfigurationArgs {
    return {
        ...val,
        subnet: (val.subnet ? pulumi.output(val.subnet).apply(subnetArgsProvideDefaults) : undefined),
    };
}

/**
 * The auto-approval list of the private link service.
 */
export interface PrivateLinkServicePropertiesAutoApprovalArgs {
    /**
     * The list of subscriptions.
     */
    subscriptions?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The visibility list of the private link service.
 */
export interface PrivateLinkServicePropertiesVisibilityArgs {
    /**
     * The list of subscriptions.
     */
    subscriptions?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * A load balancer probe.
 */
export interface ProbeArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The interval, in seconds, for how frequently to probe the endpoint for health status. Typically, the interval is slightly less than half the allocated timeout period (in seconds) which allows two full probes before taking the instance out of rotation. The default value is 15, the minimum value is 5.
     */
    intervalInSeconds?: pulumi.Input<number>;
    /**
     * The name of the resource that is unique within the set of probes used by the load balancer. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Determines how new connections are handled by the load balancer when all backend instances are probed down.
     */
    noHealthyBackendsBehavior?: pulumi.Input<string | enums.ProbeNoHealthyBackendsBehavior>;
    /**
     * The number of probes where if no response, will result in stopping further traffic from being delivered to the endpoint. This values allows endpoints to be taken out of rotation faster or slower than the typical times used in Azure.
     */
    numberOfProbes?: pulumi.Input<number>;
    /**
     * The port for communicating the probe. Possible values range from 1 to 65535, inclusive.
     */
    port: pulumi.Input<number>;
    /**
     * The number of consecutive successful or failed probes in order to allow or deny traffic from being delivered to this endpoint. After failing the number of consecutive probes equal to this value, the endpoint will be taken out of rotation and require the same number of successful consecutive probes to be placed back in rotation.
     */
    probeThreshold?: pulumi.Input<number>;
    /**
     * The protocol of the end point. If 'Tcp' is specified, a received ACK is required for the probe to be successful. If 'Http' or 'Https' is specified, a 200 OK response from the specifies URI is required for the probe to be successful.
     */
    protocol: pulumi.Input<string | enums.ProbeProtocol>;
    /**
     * The URI used for requesting health status from the VM. Path is required if a protocol is set to http. Otherwise, it is not allowed. There is no default value.
     */
    requestPath?: pulumi.Input<string>;
}

/**
 * The list of RouteTables to advertise the routes to.
 */
export interface PropagatedRouteTableArgs {
    /**
     * The list of resource ids of all the RouteTables.
     */
    ids?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
    /**
     * The list of labels.
     */
    labels?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Public IP address resource.
 */
export interface PublicIPAddressArgs {
    /**
     * The DDoS protection custom policy associated with the public IP address.
     */
    ddosSettings?: pulumi.Input<DdosSettingsArgs>;
    /**
     * Specify what happens to the public IP address when the VM using it is deleted
     */
    deleteOption?: pulumi.Input<string | enums.DeleteOptions>;
    /**
     * The FQDN of the DNS record associated with the public IP address.
     */
    dnsSettings?: pulumi.Input<PublicIPAddressDnsSettingsArgs>;
    /**
     * The extended location of the public ip address.
     */
    extendedLocation?: pulumi.Input<ExtendedLocationArgs>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The idle timeout of the public IP address.
     */
    idleTimeoutInMinutes?: pulumi.Input<number>;
    /**
     * The IP address associated with the public IP address resource.
     */
    ipAddress?: pulumi.Input<string>;
    /**
     * The list of tags associated with the public IP address.
     */
    ipTags?: pulumi.Input<pulumi.Input<IpTagArgs>[]>;
    /**
     * The linked public IP address of the public IP address resource.
     */
    linkedPublicIPAddress?: pulumi.Input<PublicIPAddressArgs>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * Migration phase of Public IP Address.
     */
    migrationPhase?: pulumi.Input<string | enums.PublicIPAddressMigrationPhase>;
    /**
     * The NatGateway for the Public IP address.
     */
    natGateway?: pulumi.Input<NatGatewayArgs>;
    /**
     * The public IP address version.
     */
    publicIPAddressVersion?: pulumi.Input<string | enums.IPVersion>;
    /**
     * The public IP address allocation method.
     */
    publicIPAllocationMethod?: pulumi.Input<string | enums.IPAllocationMethod>;
    /**
     * The Public IP Prefix this Public IP Address should be allocated from.
     */
    publicIPPrefix?: pulumi.Input<SubResourceArgs>;
    /**
     * The service public IP address of the public IP address resource.
     */
    servicePublicIPAddress?: pulumi.Input<PublicIPAddressArgs>;
    /**
     * The public IP address SKU.
     */
    sku?: pulumi.Input<PublicIPAddressSkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A list of availability zones denoting the IP allocated for the resource needs to come from.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Contains FQDN of the DNS record associated with the public IP address.
 */
export interface PublicIPAddressDnsSettingsArgs {
    /**
     * The domain name label. The concatenation of the domain name label and the regionalized DNS zone make up the fully qualified domain name associated with the public IP address. If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system.
     */
    domainNameLabel?: pulumi.Input<string>;
    /**
     * The domain name label scope. If a domain name label and a domain name label scope are specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system with a hashed value includes in FQDN.
     */
    domainNameLabelScope?: pulumi.Input<enums.PublicIpAddressDnsSettingsDomainNameLabelScope>;
    /**
     * The Fully Qualified Domain Name of the A DNS record associated with the public IP. This is the concatenation of the domainNameLabel and the regionalized DNS zone.
     */
    fqdn?: pulumi.Input<string>;
    /**
     * The reverse FQDN. A user-visible, fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN.
     */
    reverseFqdn?: pulumi.Input<string>;
}

/**
 * SKU of a public IP address.
 */
export interface PublicIPAddressSkuArgs {
    /**
     * Name of a public IP address SKU.
     */
    name?: pulumi.Input<string | enums.PublicIPAddressSkuName>;
    /**
     * Tier of a public IP address SKU.
     */
    tier?: pulumi.Input<string | enums.PublicIPAddressSkuTier>;
}

/**
 * SKU of a public IP prefix.
 */
export interface PublicIPPrefixSkuArgs {
    /**
     * Name of a public IP prefix SKU.
     */
    name?: pulumi.Input<string | enums.PublicIPPrefixSkuName>;
    /**
     * Tier of a public IP prefix SKU.
     */
    tier?: pulumi.Input<string | enums.PublicIPPrefixSkuTier>;
}

/**
 * Quality of Service defines the traffic configuration between endpoints. Mandatory to have one marking.
 */
export interface QosDefinitionArgs {
    /**
     * Destination IP ranges.
     */
    destinationIpRanges?: pulumi.Input<pulumi.Input<QosIpRangeArgs>[]>;
    /**
     * Destination port ranges.
     */
    destinationPortRanges?: pulumi.Input<pulumi.Input<QosPortRangeArgs>[]>;
    /**
     * List of markings to be used in the configuration.
     */
    markings?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * RNM supported protocol types.
     */
    protocol?: pulumi.Input<string | enums.ProtocolType>;
    /**
     * Source IP ranges.
     */
    sourceIpRanges?: pulumi.Input<pulumi.Input<QosIpRangeArgs>[]>;
    /**
     * Sources port ranges.
     */
    sourcePortRanges?: pulumi.Input<pulumi.Input<QosPortRangeArgs>[]>;
}

/**
 * Qos Traffic Profiler IP Range properties.
 */
export interface QosIpRangeArgs {
    /**
     * End IP Address.
     */
    endIP?: pulumi.Input<string>;
    /**
     * Start IP Address.
     */
    startIP?: pulumi.Input<string>;
}

/**
 * Qos Traffic Profiler Port range properties.
 */
export interface QosPortRangeArgs {
    /**
     * Qos Port Range end.
     */
    end?: pulumi.Input<number>;
    /**
     * Qos Port Range start.
     */
    start?: pulumi.Input<number>;
}

/**
 * Radius Server Settings.
 */
export interface RadiusServerArgs {
    /**
     * The address of this radius server.
     */
    radiusServerAddress: pulumi.Input<string>;
    /**
     * The initial score assigned to this radius server.
     */
    radiusServerScore?: pulumi.Input<number>;
    /**
     * The secret used for this radius server.
     */
    radiusServerSecret?: pulumi.Input<string>;
}

/**
 * Represents the Reachability Analysis Intent properties.
 */
export interface ReachabilityAnalysisIntentPropertiesArgs {
    description?: pulumi.Input<string>;
    /**
     * Destination resource id to verify the reachability path of.
     */
    destinationResourceId: pulumi.Input<string>;
    /**
     * IP traffic information.
     */
    ipTraffic: pulumi.Input<IPTrafficArgs>;
    /**
     * Source resource id to verify the reachability path of.
     */
    sourceResourceId: pulumi.Input<string>;
}

/**
 * Represents the Reachability Analysis Run properties.
 */
export interface ReachabilityAnalysisRunPropertiesArgs {
    description?: pulumi.Input<string>;
    /**
     * Id of the intent resource to run analysis on.
     */
    intentId: pulumi.Input<string>;
}

/**
 * ResourceNavigationLink resource.
 */
export interface ResourceNavigationLinkArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Link to the external resource
     */
    link?: pulumi.Input<string>;
    /**
     * Resource type of the linked resource.
     */
    linkedResourceType?: pulumi.Input<string>;
    /**
     * Name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
}

/**
 * Parameters that define the retention policy for flow log.
 */
export interface RetentionPolicyParametersArgs {
    /**
     * Number of days to retain flow log records.
     */
    days?: pulumi.Input<number>;
    /**
     * Flag to enable/disable retention.
     */
    enabled?: pulumi.Input<boolean>;
}
/**
 * retentionPolicyParametersArgsProvideDefaults sets the appropriate defaults for RetentionPolicyParametersArgs
 */
export function retentionPolicyParametersArgsProvideDefaults(val: RetentionPolicyParametersArgs): RetentionPolicyParametersArgs {
    return {
        ...val,
        days: (val.days) ?? 0,
        enabled: (val.enabled) ?? false,
    };
}

/**
 * Route resource.
 */
export interface RouteArgs {
    /**
     * The destination CIDR to which the route applies.
     */
    addressPrefix?: pulumi.Input<string>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance.
     */
    nextHopIpAddress?: pulumi.Input<string>;
    /**
     * The type of Azure hop the packet should be sent to.
     */
    nextHopType: pulumi.Input<string | enums.RouteNextHopType>;
    /**
     * The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    provisioningState?: pulumi.Input<string>;
    /**
     * The type of the resource.
     */
    type?: pulumi.Input<string>;
}

/**
 * Route Filter Rule Resource.
 */
export interface RouteFilterRuleArgs {
    /**
     * The access type of the rule.
     */
    access: pulumi.Input<string | enums.Access>;
    /**
     * The collection for bgp community values to filter on. e.g. ['12076:5010','12076:5020'].
     */
    communities: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The rule type of the rule.
     */
    routeFilterRuleType: pulumi.Input<string | enums.RouteFilterRuleType>;
}

/**
 * A RouteMap Rule.
 */
export interface RouteMapRuleArgs {
    /**
     * List of actions which will be applied on a match.
     */
    actions?: pulumi.Input<pulumi.Input<ActionArgs>[]>;
    /**
     * List of matching criterion which will be applied to traffic.
     */
    matchCriteria?: pulumi.Input<pulumi.Input<CriterionArgs>[]>;
    /**
     * The unique name for the rule.
     */
    name?: pulumi.Input<string>;
    /**
     * Next step after rule is evaluated. Current supported behaviors are 'Continue'(to next rule) and 'Terminate'.
     */
    nextStepIfMatched?: pulumi.Input<string | enums.NextStep>;
}

/**
 * Route table resource.
 */
export interface RouteTableArgs {
    /**
     * Whether to disable the routes learned by BGP on that route table. True means disable.
     */
    disableBgpRoutePropagation?: pulumi.Input<boolean>;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    etag?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    provisioningState?: pulumi.Input<string>;
    /**
     * Collection of routes contained within a route table.
     */
    routes?: pulumi.Input<pulumi.Input<RouteArgs>[]>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * Routing Configuration indicating the associated and propagated route tables for this connection.
 */
export interface RoutingConfigurationArgs {
    /**
     * The resource id RouteTable associated with this RoutingConfiguration.
     */
    associatedRouteTable?: pulumi.Input<SubResourceArgs>;
    /**
     * The resource id of the RouteMap associated with this RoutingConfiguration for inbound learned routes.
     */
    inboundRouteMap?: pulumi.Input<SubResourceArgs>;
    /**
     * The resource id of theRouteMap associated with this RoutingConfiguration for outbound advertised routes.
     */
    outboundRouteMap?: pulumi.Input<SubResourceArgs>;
    /**
     * The list of RouteTables to advertise the routes to.
     */
    propagatedRouteTables?: pulumi.Input<PropagatedRouteTableArgs>;
    /**
     * List of routes that control routing from VirtualHub into a virtual network connection.
     */
    vnetRoutes?: pulumi.Input<VnetRouteArgs>;
}

/**
 * The routing policy object used in a RoutingIntent resource.
 */
export interface RoutingPolicyArgs {
    /**
     * List of all destinations which this routing policy is applicable to (for example: Internet, PrivateTraffic).
     */
    destinations: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The unique name for the routing policy.
     */
    name: pulumi.Input<string>;
    /**
     * The next hop resource id on which this routing policy is applicable to.
     */
    nextHop: pulumi.Input<string>;
}

/**
 * Next hop.
 */
export interface RoutingRuleNextHopArgs {
    /**
     * Next hop address. Only required if the next hop type is VirtualAppliance.
     */
    nextHopAddress?: pulumi.Input<string>;
    /**
     * Next hop type.
     */
    nextHopType: pulumi.Input<string | enums.RoutingRuleNextHopType>;
}

/**
 * Route destination.
 */
export interface RoutingRuleRouteDestinationArgs {
    /**
     * Destination address.
     */
    destinationAddress: pulumi.Input<string>;
    /**
     * Destination type.
     */
    type: pulumi.Input<string | enums.RoutingRuleDestinationType>;
}

/**
 * Network security rule.
 */
export interface SecurityRuleArgs {
    /**
     * The network traffic is allowed or denied.
     */
    access: pulumi.Input<string | enums.SecurityRuleAccess>;
    /**
     * A description for this rule. Restricted to 140 chars.
     */
    description?: pulumi.Input<string>;
    /**
     * The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
     */
    destinationAddressPrefix?: pulumi.Input<string>;
    /**
     * The destination address prefixes. CIDR or destination IP ranges.
     */
    destinationAddressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The application security group specified as destination.
     */
    destinationApplicationSecurityGroups?: pulumi.Input<pulumi.Input<ApplicationSecurityGroupArgs>[]>;
    /**
     * The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
     */
    destinationPortRange?: pulumi.Input<string>;
    /**
     * The destination port ranges.
     */
    destinationPortRanges?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic.
     */
    direction: pulumi.Input<string | enums.SecurityRuleDirection>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
     */
    priority?: pulumi.Input<number>;
    /**
     * Network protocol this rule applies to.
     */
    protocol: pulumi.Input<string | enums.SecurityRuleProtocol>;
    /**
     * The provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    provisioningState?: pulumi.Input<string>;
    /**
     * The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
     */
    sourceAddressPrefix?: pulumi.Input<string>;
    /**
     * The CIDR or source IP ranges.
     */
    sourceAddressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The application security group specified as source.
     */
    sourceApplicationSecurityGroups?: pulumi.Input<pulumi.Input<ApplicationSecurityGroupArgs>[]>;
    /**
     * The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
     */
    sourcePortRange?: pulumi.Input<string>;
    /**
     * The source port ranges.
     */
    sourcePortRanges?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The type of the resource.
     */
    type?: pulumi.Input<string>;
}

/**
 * Network manager security user group item.
 */
export interface SecurityUserGroupItemArgs {
    /**
     * Network manager group Id.
     */
    networkGroupId: pulumi.Input<string>;
}

/**
 * ServiceAssociationLink resource.
 */
export interface ServiceAssociationLinkArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Link to the external resource.
     */
    link?: pulumi.Input<string>;
    /**
     * Resource type of the linked resource.
     */
    linkedResourceType?: pulumi.Input<string>;
    /**
     * Name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
}

/**
 * Service End point policy resource.
 */
export interface ServiceEndpointPolicyArgs {
    /**
     * A collection of contextual service endpoint policy.
     */
    contextualServiceEndpointPolicies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The alias indicating if the policy belongs to a service
     */
    serviceAlias?: pulumi.Input<string>;
    /**
     * A collection of service endpoint policy definitions of the service endpoint policy.
     */
    serviceEndpointPolicyDefinitions?: pulumi.Input<pulumi.Input<ServiceEndpointPolicyDefinitionArgs>[]>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * Service Endpoint policy definitions.
 */
export interface ServiceEndpointPolicyDefinitionArgs {
    /**
     * A description for this rule. Restricted to 140 chars.
     */
    description?: pulumi.Input<string>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Service endpoint name.
     */
    service?: pulumi.Input<string>;
    /**
     * A list of service resources.
     */
    serviceResources?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The type of the resource.
     */
    type?: pulumi.Input<string>;
}

/**
 * The service endpoint properties.
 */
export interface ServiceEndpointPropertiesFormatArgs {
    /**
     * A list of locations.
     */
    locations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * SubResource as network identifier.
     */
    networkIdentifier?: pulumi.Input<SubResourceArgs>;
    /**
     * The provisioning state of the resource.
     */
    provisioningState?: pulumi.Input<string>;
    /**
     * The type of the endpoint service.
     */
    service?: pulumi.Input<string>;
}

/**
 * The sku of this Bastion Host.
 */
export interface SkuArgs {
    /**
     * The name of the sku of this Bastion Host.
     */
    name?: pulumi.Input<string | enums.BastionHostSkuName>;
}
/**
 * skuArgsProvideDefaults sets the appropriate defaults for SkuArgs
 */
export function skuArgsProvideDefaults(val: SkuArgs): SkuArgs {
    return {
        ...val,
        name: (val.name) ?? "Standard",
    };
}

/**
 * Properties of static CIDR resource.
 */
export interface StaticCidrPropertiesArgs {
    /**
     * List of IP address prefixes of the resource.
     */
    addressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
    description?: pulumi.Input<string>;
    /**
     * Number of IP addresses to allocate for a static CIDR resource. The IP addresses will be assigned based on IpamPools available space.
     */
    numberOfIPAddressesToAllocate?: pulumi.Input<string>;
}

/**
 * List of all Static Routes.
 */
export interface StaticRouteArgs {
    /**
     * List of all address prefixes.
     */
    addressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the StaticRoute that is unique within a VnetRoute.
     */
    name?: pulumi.Input<string>;
    /**
     * The ip address of the next hop.
     */
    nextHopIpAddress?: pulumi.Input<string>;
}

/**
 * Configuration for static routes on this HubVnetConnectionConfiguration for static routes on this HubVnetConnection.
 */
export interface StaticRoutesConfigArgs {
    /**
     * Parameter determining whether NVA in spoke vnet is bypassed for traffic with destination in spoke.
     */
    vnetLocalRouteOverrideCriteria?: pulumi.Input<string | enums.VnetLocalRouteOverrideCriteria>;
}

/**
 * Reference to another subresource.
 */
export interface SubResource {
    /**
     * Sub-resource ID. Both absolute resource ID and a relative resource ID are accepted.
     * An absolute ID starts with /subscriptions/ and contains the entire ID of the parent resource and the ID of the sub-resource in the end.
     * A relative ID replaces the ID of the parent resource with a token '$self', followed by the sub-resource ID itself.
     * Example of a relative ID: $self/frontEndConfigurations/my-frontend.
     */
    id?: string;
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
 * Subnet in a virtual network resource.
 */
export interface SubnetArgs {
    /**
     * The address prefix for the subnet.
     */
    addressPrefix?: pulumi.Input<string>;
    /**
     * List of address prefixes for the subnet.
     */
    addressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Application gateway IP configurations of virtual network resource.
     */
    applicationGatewayIPConfigurations?: pulumi.Input<pulumi.Input<ApplicationGatewayIPConfigurationArgs>[]>;
    /**
     * Set this property to false to disable default outbound connectivity for all VMs in the subnet. This property can only be set at the time of subnet creation and cannot be updated for an existing subnet.
     */
    defaultOutboundAccess?: pulumi.Input<boolean>;
    /**
     * An array of references to the delegations on the subnet.
     */
    delegations?: pulumi.Input<pulumi.Input<DelegationArgs>[]>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Array of IpAllocation which reference this subnet.
     */
    ipAllocations?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
    /**
     * A list of IPAM Pools for allocating IP address prefixes.
     */
    ipamPoolPrefixAllocations?: pulumi.Input<pulumi.Input<IpamPoolPrefixAllocationArgs>[]>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Nat gateway associated with this subnet.
     */
    natGateway?: pulumi.Input<SubResourceArgs>;
    /**
     * The reference to the NetworkSecurityGroup resource.
     */
    networkSecurityGroup?: pulumi.Input<NetworkSecurityGroupArgs>;
    /**
     * Enable or Disable apply network policies on private end point in the subnet.
     */
    privateEndpointNetworkPolicies?: pulumi.Input<string | enums.VirtualNetworkPrivateEndpointNetworkPolicies>;
    /**
     * Enable or Disable apply network policies on private link service in the subnet.
     */
    privateLinkServiceNetworkPolicies?: pulumi.Input<string | enums.VirtualNetworkPrivateLinkServiceNetworkPolicies>;
    /**
     * The provisioning state of the resource.
     */
    provisioningState?: pulumi.Input<string>;
    /**
     * Gets an array of references to the external resources using subnet.
     */
    resourceNavigationLinks?: pulumi.Input<pulumi.Input<ResourceNavigationLinkArgs>[]>;
    /**
     * The reference to the RouteTable resource.
     */
    routeTable?: pulumi.Input<RouteTableArgs>;
    /**
     * Gets an array of references to services injecting into this subnet.
     */
    serviceAssociationLinks?: pulumi.Input<pulumi.Input<ServiceAssociationLinkArgs>[]>;
    /**
     * An array of service endpoint policies.
     */
    serviceEndpointPolicies?: pulumi.Input<pulumi.Input<ServiceEndpointPolicyArgs>[]>;
    /**
     * An array of service endpoints.
     */
    serviceEndpoints?: pulumi.Input<pulumi.Input<ServiceEndpointPropertiesFormatArgs>[]>;
    /**
     * Set this property to Tenant to allow sharing subnet with other subscriptions in your AAD tenant. This property can only be set if defaultOutboundAccess is set to false, both properties can only be set if subnet is empty.
     */
    sharingScope?: pulumi.Input<string | enums.SharingScope>;
    /**
     * Resource type.
     */
    type?: pulumi.Input<string>;
}
/**
 * subnetArgsProvideDefaults sets the appropriate defaults for SubnetArgs
 */
export function subnetArgsProvideDefaults(val: SubnetArgs): SubnetArgs {
    return {
        ...val,
        privateEndpointNetworkPolicies: (val.privateEndpointNetworkPolicies) ?? "Disabled",
        privateLinkServiceNetworkPolicies: (val.privateLinkServiceNetworkPolicies) ?? "Enabled",
    };
}

export interface SubscriptionIdArgs {
    /**
     * Subscription id in the ARM id format.
     */
    id?: pulumi.Input<string>;
}

/**
 * Parameters that define the configuration of traffic analytics.
 */
export interface TrafficAnalyticsConfigurationPropertiesArgs {
    /**
     * Flag to enable/disable traffic analytics.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The interval in minutes which would decide how frequently TA service should do flow analytics.
     */
    trafficAnalyticsInterval?: pulumi.Input<number>;
    /**
     * The resource guid of the attached workspace.
     */
    workspaceId?: pulumi.Input<string>;
    /**
     * The location of the attached workspace.
     */
    workspaceRegion?: pulumi.Input<string>;
    /**
     * Resource Id of the attached workspace.
     */
    workspaceResourceId?: pulumi.Input<string>;
}

/**
 * Parameters that define the configuration of traffic analytics.
 */
export interface TrafficAnalyticsPropertiesArgs {
    /**
     * Parameters that define the configuration of traffic analytics.
     */
    networkWatcherFlowAnalyticsConfiguration?: pulumi.Input<TrafficAnalyticsConfigurationPropertiesArgs>;
}

/**
 * An traffic selector policy for a virtual network gateway connection.
 */
export interface TrafficSelectorPolicyArgs {
    /**
     * A collection of local address spaces in CIDR format.
     */
    localAddressRanges: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A collection of remote address spaces in CIDR format.
     */
    remoteAddressRanges: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Describes a Virtual Machine.
 */
export interface VM {
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Resource location.
     */
    location?: string;
    /**
     * Resource tags.
     */
    tags?: {[key: string]: string};
}

/**
 * Describes a Virtual Machine.
 */
export interface VMArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * Properties of Verifier Workspace resource.
 */
export interface VerifierWorkspacePropertiesArgs {
    description?: pulumi.Input<string>;
}

/**
 * Network Virtual Appliance Additional NIC properties.
 */
export interface VirtualApplianceAdditionalNicPropertiesArgs {
    /**
     * Flag (true or false) for Intent for Public Ip on additional nic
     */
    hasPublicIp?: pulumi.Input<boolean>;
    /**
     * Name of additional nic
     */
    name?: pulumi.Input<string>;
}

/**
 * Represents a single IP configuration.
 */
export interface VirtualApplianceIPConfigurationArgs {
    /**
     * Name of the IP configuration.
     */
    name?: pulumi.Input<string>;
    /**
     * Represents a single IP configuration properties.
     */
    properties?: pulumi.Input<VirtualApplianceIPConfigurationPropertiesArgs>;
}

/**
 * Represents a single IP configuration properties.
 */
export interface VirtualApplianceIPConfigurationPropertiesArgs {
    /**
     * Whether or not this is primary IP configuration of the NIC.
     */
    primary?: pulumi.Input<boolean>;
}

/**
 * Represents a single NIC configuration.
 */
export interface VirtualApplianceNetworkInterfaceConfigurationArgs {
    /**
     * NIC type. This should be either PublicNic or PrivateNic.
     */
    nicType?: pulumi.Input<string | enums.NicTypeInRequest>;
    /**
     * Represents a single NIC configuration properties.
     */
    properties?: pulumi.Input<VirtualApplianceNetworkInterfaceConfigurationPropertiesArgs>;
}

/**
 * Represents a single NIC configuration properties.
 */
export interface VirtualApplianceNetworkInterfaceConfigurationPropertiesArgs {
    ipConfigurations?: pulumi.Input<pulumi.Input<VirtualApplianceIPConfigurationArgs>[]>;
}

/**
 * Network Virtual Appliance Sku Properties.
 */
export interface VirtualApplianceSkuPropertiesArgs {
    /**
     * Virtual Appliance Scale Unit.
     */
    bundledScaleUnit?: pulumi.Input<string>;
    /**
     * Virtual Appliance Version.
     */
    marketPlaceVersion?: pulumi.Input<string>;
    /**
     * Virtual Appliance Vendor.
     */
    vendor?: pulumi.Input<string>;
}

/**
 * Virtual Hub identifier.
 */
export interface VirtualHubIdArgs {
    /**
     * The resource URI for the Virtual Hub where the ExpressRoute gateway is or will be deployed. The Virtual Hub resource and the ExpressRoute gateway resource reside in the same subscription.
     */
    id?: pulumi.Input<string>;
}

/**
 * VirtualHub route.
 */
export interface VirtualHubRouteArgs {
    /**
     * List of all addressPrefixes.
     */
    addressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * NextHop ip address.
     */
    nextHopIpAddress?: pulumi.Input<string>;
}

/**
 * VirtualHub route table.
 */
export interface VirtualHubRouteTableArgs {
    /**
     * List of all routes.
     */
    routes?: pulumi.Input<pulumi.Input<VirtualHubRouteArgs>[]>;
}

/**
 * VirtualHubRouteTableV2 Resource.
 */
export interface VirtualHubRouteTableV2Args {
    /**
     * List of all connections attached to this route table v2.
     */
    attachedConnections?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * List of all routes.
     */
    routes?: pulumi.Input<pulumi.Input<VirtualHubRouteV2Args>[]>;
}

/**
 * VirtualHubRouteTableV2 route.
 */
export interface VirtualHubRouteV2Args {
    /**
     * The type of destinations.
     */
    destinationType?: pulumi.Input<string>;
    /**
     * List of all destinations.
     */
    destinations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The type of next hops.
     */
    nextHopType?: pulumi.Input<string>;
    /**
     * NextHops ip address.
     */
    nextHops?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Bgp Communities sent over ExpressRoute with each route corresponding to a prefix in this VNET.
 */
export interface VirtualNetworkBgpCommunitiesArgs {
    /**
     * The BGP community associated with the virtual network.
     */
    virtualNetworkCommunity: pulumi.Input<string>;
}

/**
 * Indicates if encryption is enabled on virtual network and if VM without encryption is allowed in encrypted VNet.
 */
export interface VirtualNetworkEncryptionArgs {
    /**
     * Indicates if encryption is enabled on the virtual network.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * If the encrypted VNet allows VM that does not support encryption. This field is for future support, AllowUnencrypted is the only supported value at general availability.
     */
    enforcement?: pulumi.Input<string | enums.VirtualNetworkEncryptionEnforcement>;
}

/**
 * A common class for general resource information.
 */
export interface VirtualNetworkGatewayArgs {
    /**
     * ActiveActive flag.
     */
    activeActive?: pulumi.Input<boolean>;
    /**
     * Property to indicate if the Express Route Gateway serves traffic when there are multiple Express Route Gateways in the vnet
     */
    adminState?: pulumi.Input<string | enums.AdminState>;
    /**
     * Configure this gateway to accept traffic from other Azure Virtual Networks. This configuration does not support connectivity to Azure Virtual WAN.
     */
    allowRemoteVnetTraffic?: pulumi.Input<boolean>;
    /**
     * Configures this gateway to accept traffic from remote Virtual WAN networks.
     */
    allowVirtualWanTraffic?: pulumi.Input<boolean>;
    /**
     * Autoscale configuration for virutal network gateway
     */
    autoScaleConfiguration?: pulumi.Input<VirtualNetworkGatewayAutoScaleConfigurationArgs>;
    /**
     * Virtual network gateway's BGP speaker settings.
     */
    bgpSettings?: pulumi.Input<BgpSettingsArgs>;
    /**
     * The reference to the address space resource which represents the custom routes address space specified by the customer for virtual network gateway and VpnClient.
     */
    customRoutes?: pulumi.Input<AddressSpaceArgs>;
    /**
     * disableIPSecReplayProtection flag.
     */
    disableIPSecReplayProtection?: pulumi.Input<boolean>;
    /**
     * Whether BGP is enabled for this virtual network gateway or not.
     */
    enableBgp?: pulumi.Input<boolean>;
    /**
     * EnableBgpRouteTranslationForNat flag.
     */
    enableBgpRouteTranslationForNat?: pulumi.Input<boolean>;
    /**
     * Whether dns forwarding is enabled or not.
     */
    enableDnsForwarding?: pulumi.Input<boolean>;
    /**
     * Whether private IP needs to be enabled on this gateway for connections or not.
     */
    enablePrivateIpAddress?: pulumi.Input<boolean>;
    /**
     * The extended location of type local virtual network gateway.
     */
    extendedLocation?: pulumi.Input<ExtendedLocationArgs>;
    /**
     * The reference to the LocalNetworkGateway resource which represents local network site having default routes. Assign Null value in case of removing existing default site setting.
     */
    gatewayDefaultSite?: pulumi.Input<SubResourceArgs>;
    /**
     * The type of this virtual network gateway.
     */
    gatewayType?: pulumi.Input<string | enums.VirtualNetworkGatewayType>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The identity of the virtual network gateway, if configured.
     */
    identity?: pulumi.Input<ManagedServiceIdentityArgs>;
    /**
     * IP configurations for virtual network gateway.
     */
    ipConfigurations?: pulumi.Input<pulumi.Input<VirtualNetworkGatewayIPConfigurationArgs>[]>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * NatRules for virtual network gateway.
     */
    natRules?: pulumi.Input<pulumi.Input<VirtualNetworkGatewayNatRuleArgs>[]>;
    /**
     * Property to indicate if the Express Route Gateway has resiliency model of MultiHomed or SingleHomed
     */
    resiliencyModel?: pulumi.Input<string | enums.ResiliencyModel>;
    /**
     * The reference to the VirtualNetworkGatewaySku resource which represents the SKU selected for Virtual network gateway.
     */
    sku?: pulumi.Input<VirtualNetworkGatewaySkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Customer vnet resource id. VirtualNetworkGateway of type local gateway is associated with the customer vnet.
     */
    vNetExtendedLocationResourceId?: pulumi.Input<string>;
    /**
     * The reference to the VirtualNetworkGatewayPolicyGroup resource which represents the available VirtualNetworkGatewayPolicyGroup for the gateway.
     */
    virtualNetworkGatewayPolicyGroups?: pulumi.Input<pulumi.Input<VirtualNetworkGatewayPolicyGroupArgs>[]>;
    /**
     * The reference to the VpnClientConfiguration resource which represents the P2S VpnClient configurations.
     */
    vpnClientConfiguration?: pulumi.Input<VpnClientConfigurationArgs>;
    /**
     * The generation for this VirtualNetworkGateway. Must be None if gatewayType is not VPN.
     */
    vpnGatewayGeneration?: pulumi.Input<string | enums.VpnGatewayGeneration>;
    /**
     * The type of this virtual network gateway.
     */
    vpnType?: pulumi.Input<string | enums.VpnType>;
}

export interface VirtualNetworkGatewayAutoScaleBoundsArgs {
    /**
     * Maximum Scale Units for Autoscale configuration
     */
    max?: pulumi.Input<number>;
    /**
     * Minimum scale Units for Autoscale configuration
     */
    min?: pulumi.Input<number>;
}

/**
 * Virtual Network Gateway Autoscale Configuration details
 */
export interface VirtualNetworkGatewayAutoScaleConfigurationArgs {
    /**
     * The bounds of the autoscale configuration
     */
    bounds?: pulumi.Input<VirtualNetworkGatewayAutoScaleBoundsArgs>;
}

/**
 * IP configuration for virtual network gateway.
 */
export interface VirtualNetworkGatewayIPConfigurationArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The private IP address allocation method.
     */
    privateIPAllocationMethod?: pulumi.Input<string | enums.IPAllocationMethod>;
    /**
     * The reference to the public IP resource.
     */
    publicIPAddress?: pulumi.Input<SubResourceArgs>;
    /**
     * The reference to the subnet resource.
     */
    subnet?: pulumi.Input<SubResourceArgs>;
}

/**
 * VirtualNetworkGatewayNatRule Resource.
 */
export interface VirtualNetworkGatewayNatRuleArgs {
    /**
     * The private IP address external mapping for NAT.
     */
    externalMappings?: pulumi.Input<pulumi.Input<VpnNatRuleMappingArgs>[]>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The private IP address internal mapping for NAT.
     */
    internalMappings?: pulumi.Input<pulumi.Input<VpnNatRuleMappingArgs>[]>;
    /**
     * The IP Configuration ID this NAT rule applies to.
     */
    ipConfigurationId?: pulumi.Input<string>;
    /**
     * The Source NAT direction of a VPN NAT.
     */
    mode?: pulumi.Input<string | enums.VpnNatRuleMode>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The type of NAT rule for VPN NAT.
     */
    type?: pulumi.Input<string | enums.VpnNatRuleType>;
}

/**
 * Parameters for VirtualNetworkGatewayPolicyGroup.
 */
export interface VirtualNetworkGatewayPolicyGroupArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Shows if this is a Default VirtualNetworkGatewayPolicyGroup or not.
     */
    isDefault: pulumi.Input<boolean>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Multiple PolicyMembers for VirtualNetworkGatewayPolicyGroup.
     */
    policyMembers: pulumi.Input<pulumi.Input<VirtualNetworkGatewayPolicyGroupMemberArgs>[]>;
    /**
     * Priority for VirtualNetworkGatewayPolicyGroup.
     */
    priority: pulumi.Input<number>;
}

/**
 * Vpn Client Connection configuration PolicyGroup member
 */
export interface VirtualNetworkGatewayPolicyGroupMemberArgs {
    /**
     * The Vpn Policy member attribute type.
     */
    attributeType?: pulumi.Input<string | enums.VpnPolicyMemberAttributeType>;
    /**
     * The value of Attribute used for this VirtualNetworkGatewayPolicyGroupMember.
     */
    attributeValue?: pulumi.Input<string>;
    /**
     * Name of the VirtualNetworkGatewayPolicyGroupMember.
     */
    name?: pulumi.Input<string>;
}

/**
 * VirtualNetworkGatewaySku details.
 */
export interface VirtualNetworkGatewaySkuArgs {
    /**
     * Gateway SKU name.
     */
    name?: pulumi.Input<string | enums.VirtualNetworkGatewaySkuName>;
    /**
     * Gateway SKU tier.
     */
    tier?: pulumi.Input<string | enums.VirtualNetworkGatewaySkuTier>;
}

/**
 * Peerings in a virtual network resource.
 */
export interface VirtualNetworkPeeringArgs {
    /**
     * Whether the forwarded traffic from the VMs in the local virtual network will be allowed/disallowed in remote virtual network.
     */
    allowForwardedTraffic?: pulumi.Input<boolean>;
    /**
     * If gateway links can be used in remote virtual networking to link to this virtual network.
     */
    allowGatewayTransit?: pulumi.Input<boolean>;
    /**
     * Whether the VMs in the local virtual network space would be able to access the VMs in remote virtual network space.
     */
    allowVirtualNetworkAccess?: pulumi.Input<boolean>;
    /**
     * If we need to verify the provisioning state of the remote gateway.
     */
    doNotVerifyRemoteGateways?: pulumi.Input<boolean>;
    /**
     * Whether only Ipv6 address space is peered for subnet peering.
     */
    enableOnlyIPv6Peering?: pulumi.Input<boolean>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The local address space of the local virtual network that is peered.
     */
    localAddressSpace?: pulumi.Input<AddressSpaceArgs>;
    /**
     * List of local subnet names that are subnet peered with remote virtual network.
     */
    localSubnetNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The current local address space of the local virtual network that is peered.
     */
    localVirtualNetworkAddressSpace?: pulumi.Input<AddressSpaceArgs>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Whether complete virtual network address space is peered.
     */
    peerCompleteVnets?: pulumi.Input<boolean>;
    /**
     * The status of the virtual network peering.
     */
    peeringState?: pulumi.Input<string | enums.VirtualNetworkPeeringState>;
    /**
     * The peering sync status of the virtual network peering.
     */
    peeringSyncLevel?: pulumi.Input<string | enums.VirtualNetworkPeeringLevel>;
    /**
     * The reference to the address space peered with the remote virtual network.
     */
    remoteAddressSpace?: pulumi.Input<AddressSpaceArgs>;
    /**
     * The reference to the remote virtual network's Bgp Communities.
     */
    remoteBgpCommunities?: pulumi.Input<VirtualNetworkBgpCommunitiesArgs>;
    /**
     * List of remote subnet names from remote virtual network that are subnet peered.
     */
    remoteSubnetNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The reference to the remote virtual network. The remote virtual network can be in the same or different region (preview). See here to register for the preview and learn more (https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-create-peering).
     */
    remoteVirtualNetwork?: pulumi.Input<SubResourceArgs>;
    /**
     * The reference to the current address space of the remote virtual network.
     */
    remoteVirtualNetworkAddressSpace?: pulumi.Input<AddressSpaceArgs>;
    /**
     * Resource type.
     */
    type?: pulumi.Input<string>;
    /**
     * If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway.
     */
    useRemoteGateways?: pulumi.Input<boolean>;
}

/**
 * Virtual Network Tap resource.
 */
export interface VirtualNetworkTapArgs {
    /**
     * The reference to the private IP address on the internal Load Balancer that will receive the tap.
     */
    destinationLoadBalancerFrontEndIPConfiguration?: pulumi.Input<FrontendIPConfigurationArgs>;
    /**
     * The reference to the private IP Address of the collector nic that will receive the tap.
     */
    destinationNetworkInterfaceIPConfiguration?: pulumi.Input<NetworkInterfaceIPConfigurationArgs>;
    /**
     * The VXLAN destination port that will receive the tapped traffic.
     */
    destinationPort?: pulumi.Input<number>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
/**
 * virtualNetworkTapArgsProvideDefaults sets the appropriate defaults for VirtualNetworkTapArgs
 */
export function virtualNetworkTapArgsProvideDefaults(val: VirtualNetworkTapArgs): VirtualNetworkTapArgs {
    return {
        ...val,
        destinationLoadBalancerFrontEndIPConfiguration: (val.destinationLoadBalancerFrontEndIPConfiguration ? pulumi.output(val.destinationLoadBalancerFrontEndIPConfiguration).apply(frontendIPConfigurationArgsProvideDefaults) : undefined),
        destinationNetworkInterfaceIPConfiguration: (val.destinationNetworkInterfaceIPConfiguration ? pulumi.output(val.destinationNetworkInterfaceIPConfiguration).apply(networkInterfaceIPConfigurationArgsProvideDefaults) : undefined),
    };
}

/**
 * The VirtualHub Router autoscale configuration.
 */
export interface VirtualRouterAutoScaleConfigurationArgs {
    /**
     * The minimum number of scale units for VirtualHub Router.
     */
    minCapacity?: pulumi.Input<number>;
}

/**
 * List of routes that control routing from VirtualHub into a virtual network connection.
 */
export interface VnetRouteArgs {
    /**
     * List of all Static Routes.
     */
    staticRoutes?: pulumi.Input<pulumi.Input<StaticRouteArgs>[]>;
    /**
     * Configuration for static routes on this HubVnetConnection.
     */
    staticRoutesConfig?: pulumi.Input<StaticRoutesConfigArgs>;
}

/**
 * A vpn client connection configuration for client connection configuration.
 */
export interface VngClientConnectionConfigurationArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * List of references to virtualNetworkGatewayPolicyGroups
     */
    virtualNetworkGatewayPolicyGroups: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
    /**
     * The reference to the address space resource which represents Address space for P2S VpnClient.
     */
    vpnClientAddressPool: pulumi.Input<AddressSpaceArgs>;
}

/**
 * VpnClientConfiguration for P2S client.
 */
export interface VpnClientConfigurationArgs {
    /**
     * The AADAudience property of the VirtualNetworkGateway resource for vpn client connection used for AAD authentication.
     */
    aadAudience?: pulumi.Input<string>;
    /**
     * The AADIssuer property of the VirtualNetworkGateway resource for vpn client connection used for AAD authentication.
     */
    aadIssuer?: pulumi.Input<string>;
    /**
     * The AADTenant property of the VirtualNetworkGateway resource for vpn client connection used for AAD authentication.
     */
    aadTenant?: pulumi.Input<string>;
    /**
     * The radius server address property of the VirtualNetworkGateway resource for vpn client connection.
     */
    radiusServerAddress?: pulumi.Input<string>;
    /**
     * The radius secret property of the VirtualNetworkGateway resource for vpn client connection.
     */
    radiusServerSecret?: pulumi.Input<string>;
    /**
     * The radiusServers property for multiple radius server configuration.
     */
    radiusServers?: pulumi.Input<pulumi.Input<RadiusServerArgs>[]>;
    /**
     * per ip address pool connection policy for virtual network gateway P2S client.
     */
    vngClientConnectionConfigurations?: pulumi.Input<pulumi.Input<VngClientConnectionConfigurationArgs>[]>;
    /**
     * VPN authentication types for the virtual network gateway..
     */
    vpnAuthenticationTypes?: pulumi.Input<pulumi.Input<string | enums.VpnAuthenticationType>[]>;
    /**
     * The reference to the address space resource which represents Address space for P2S VpnClient.
     */
    vpnClientAddressPool?: pulumi.Input<AddressSpaceArgs>;
    /**
     * VpnClientIpsecPolicies for virtual network gateway P2S client.
     */
    vpnClientIpsecPolicies?: pulumi.Input<pulumi.Input<IpsecPolicyArgs>[]>;
    /**
     * VpnClientProtocols for Virtual network gateway.
     */
    vpnClientProtocols?: pulumi.Input<pulumi.Input<string | enums.VpnClientProtocol>[]>;
    /**
     * VpnClientRevokedCertificate for Virtual network gateway.
     */
    vpnClientRevokedCertificates?: pulumi.Input<pulumi.Input<VpnClientRevokedCertificateArgs>[]>;
    /**
     * VpnClientRootCertificate for virtual network gateway.
     */
    vpnClientRootCertificates?: pulumi.Input<pulumi.Input<VpnClientRootCertificateArgs>[]>;
}

/**
 * VPN client revoked certificate of virtual network gateway.
 */
export interface VpnClientRevokedCertificateArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The revoked VPN client certificate thumbprint.
     */
    thumbprint?: pulumi.Input<string>;
}

/**
 * VPN client root certificate of virtual network gateway.
 */
export interface VpnClientRootCertificateArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The certificate public data.
     */
    publicCertData: pulumi.Input<string>;
}

/**
 * VpnConnection Resource.
 */
export interface VpnConnectionArgs {
    /**
     * Expected bandwidth in MBPS.
     */
    connectionBandwidth?: pulumi.Input<number>;
    /**
     * DPD timeout in seconds for vpn connection.
     */
    dpdTimeoutSeconds?: pulumi.Input<number>;
    /**
     * EnableBgp flag.
     */
    enableBgp?: pulumi.Input<boolean>;
    /**
     * Enable internet security.
     */
    enableInternetSecurity?: pulumi.Input<boolean>;
    /**
     * EnableBgp flag.
     */
    enableRateLimiting?: pulumi.Input<boolean>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The IPSec Policies to be considered by this connection.
     */
    ipsecPolicies?: pulumi.Input<pulumi.Input<IpsecPolicyArgs>[]>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Id of the connected vpn site.
     */
    remoteVpnSite?: pulumi.Input<SubResourceArgs>;
    /**
     * The Routing Configuration indicating the associated and propagated route tables on this connection.
     */
    routingConfiguration?: pulumi.Input<RoutingConfigurationArgs>;
    /**
     * Routing weight for vpn connection.
     */
    routingWeight?: pulumi.Input<number>;
    /**
     * SharedKey for the vpn connection.
     */
    sharedKey?: pulumi.Input<string>;
    /**
     * The Traffic Selector Policies to be considered by this connection.
     */
    trafficSelectorPolicies?: pulumi.Input<pulumi.Input<TrafficSelectorPolicyArgs>[]>;
    /**
     * Use local azure ip to initiate connection.
     */
    useLocalAzureIpAddress?: pulumi.Input<boolean>;
    /**
     * Enable policy-based traffic selectors.
     */
    usePolicyBasedTrafficSelectors?: pulumi.Input<boolean>;
    /**
     * Connection protocol used for this connection.
     */
    vpnConnectionProtocolType?: pulumi.Input<string | enums.VirtualNetworkGatewayConnectionProtocol>;
    /**
     * List of all vpn site link connections to the gateway.
     */
    vpnLinkConnections?: pulumi.Input<pulumi.Input<VpnSiteLinkConnectionArgs>[]>;
}

/**
 * VpnGatewayNatRule Resource.
 */
export interface VpnGatewayNatRuleArgs {
    /**
     * The private IP address external mapping for NAT.
     */
    externalMappings?: pulumi.Input<pulumi.Input<VpnNatRuleMappingArgs>[]>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The private IP address internal mapping for NAT.
     */
    internalMappings?: pulumi.Input<pulumi.Input<VpnNatRuleMappingArgs>[]>;
    /**
     * The IP Configuration ID this NAT rule applies to.
     */
    ipConfigurationId?: pulumi.Input<string>;
    /**
     * The Source NAT direction of a VPN NAT.
     */
    mode?: pulumi.Input<string | enums.VpnNatRuleMode>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The type of NAT rule for VPN NAT.
     */
    type?: pulumi.Input<string | enums.VpnNatRuleType>;
}

/**
 * BGP settings details for a link.
 */
export interface VpnLinkBgpSettingsArgs {
    /**
     * The BGP speaker's ASN.
     */
    asn?: pulumi.Input<number>;
    /**
     * The BGP peering address and BGP identifier of this BGP speaker.
     */
    bgpPeeringAddress?: pulumi.Input<string>;
}

/**
 * List of properties of a link provider.
 */
export interface VpnLinkProviderPropertiesArgs {
    /**
     * Name of the link provider.
     */
    linkProviderName?: pulumi.Input<string>;
    /**
     * Link speed.
     */
    linkSpeedInMbps?: pulumi.Input<number>;
}

/**
 * Vpn NatRule mapping.
 */
export interface VpnNatRuleMappingArgs {
    /**
     * Address space for Vpn NatRule mapping.
     */
    addressSpace?: pulumi.Input<string>;
    /**
     * Port range for Vpn NatRule mapping.
     */
    portRange?: pulumi.Input<string>;
}

/**
 * Properties of the Radius client root certificate of VpnServerConfiguration.
 */
export interface VpnServerConfigRadiusClientRootCertificateArgs {
    /**
     * The certificate name.
     */
    name?: pulumi.Input<string>;
    /**
     * The Radius client root certificate thumbprint.
     */
    thumbprint?: pulumi.Input<string>;
}

/**
 * Properties of Radius Server root certificate of VpnServerConfiguration.
 */
export interface VpnServerConfigRadiusServerRootCertificateArgs {
    /**
     * The certificate name.
     */
    name?: pulumi.Input<string>;
    /**
     * The certificate public data.
     */
    publicCertData?: pulumi.Input<string>;
}

/**
 * Properties of the revoked VPN client certificate of VpnServerConfiguration.
 */
export interface VpnServerConfigVpnClientRevokedCertificateArgs {
    /**
     * The certificate name.
     */
    name?: pulumi.Input<string>;
    /**
     * The revoked VPN client certificate thumbprint.
     */
    thumbprint?: pulumi.Input<string>;
}

/**
 * Properties of VPN client root certificate of VpnServerConfiguration.
 */
export interface VpnServerConfigVpnClientRootCertificateArgs {
    /**
     * The certificate name.
     */
    name?: pulumi.Input<string>;
    /**
     * The certificate public data.
     */
    publicCertData?: pulumi.Input<string>;
}

/**
 * VpnServerConfigurationPolicyGroup Resource.
 */
export interface VpnServerConfigurationPolicyGroupArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Shows if this is a Default VpnServerConfigurationPolicyGroup or not.
     */
    isDefault?: pulumi.Input<boolean>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Multiple PolicyMembers for VpnServerConfigurationPolicyGroup.
     */
    policyMembers?: pulumi.Input<pulumi.Input<VpnServerConfigurationPolicyGroupMemberArgs>[]>;
    /**
     * Priority for VpnServerConfigurationPolicyGroup.
     */
    priority?: pulumi.Input<number>;
}

/**
 * VpnServerConfiguration PolicyGroup member
 */
export interface VpnServerConfigurationPolicyGroupMemberArgs {
    /**
     * The Vpn Policy member attribute type.
     */
    attributeType?: pulumi.Input<string | enums.VpnPolicyMemberAttributeType>;
    /**
     * The value of Attribute used for this VpnServerConfigurationPolicyGroupMember.
     */
    attributeValue?: pulumi.Input<string>;
    /**
     * Name of the VpnServerConfigurationPolicyGroupMember.
     */
    name?: pulumi.Input<string>;
}

/**
 * Parameters for VpnServerConfiguration.
 */
export interface VpnServerConfigurationPropertiesArgs {
    /**
     * The set of aad vpn authentication parameters.
     */
    aadAuthenticationParameters?: pulumi.Input<AadAuthenticationParametersArgs>;
    /**
     * List of all VpnServerConfigurationPolicyGroups.
     */
    configurationPolicyGroups?: pulumi.Input<pulumi.Input<VpnServerConfigurationPolicyGroupArgs>[]>;
    /**
     * The name of the VpnServerConfiguration that is unique within a resource group.
     */
    name?: pulumi.Input<string>;
    /**
     * Radius client root certificate of VpnServerConfiguration.
     */
    radiusClientRootCertificates?: pulumi.Input<pulumi.Input<VpnServerConfigRadiusClientRootCertificateArgs>[]>;
    /**
     * The radius server address property of the VpnServerConfiguration resource for point to site client connection.
     */
    radiusServerAddress?: pulumi.Input<string>;
    /**
     * Radius Server root certificate of VpnServerConfiguration.
     */
    radiusServerRootCertificates?: pulumi.Input<pulumi.Input<VpnServerConfigRadiusServerRootCertificateArgs>[]>;
    /**
     * The radius secret property of the VpnServerConfiguration resource for point to site client connection.
     */
    radiusServerSecret?: pulumi.Input<string>;
    /**
     * Multiple Radius Server configuration for VpnServerConfiguration.
     */
    radiusServers?: pulumi.Input<pulumi.Input<RadiusServerArgs>[]>;
    /**
     * VPN authentication types for the VpnServerConfiguration.
     */
    vpnAuthenticationTypes?: pulumi.Input<pulumi.Input<string | enums.VpnAuthenticationType>[]>;
    /**
     * VpnClientIpsecPolicies for VpnServerConfiguration.
     */
    vpnClientIpsecPolicies?: pulumi.Input<pulumi.Input<IpsecPolicyArgs>[]>;
    /**
     * VPN client revoked certificate of VpnServerConfiguration.
     */
    vpnClientRevokedCertificates?: pulumi.Input<pulumi.Input<VpnServerConfigVpnClientRevokedCertificateArgs>[]>;
    /**
     * VPN client root certificate of VpnServerConfiguration.
     */
    vpnClientRootCertificates?: pulumi.Input<pulumi.Input<VpnServerConfigVpnClientRootCertificateArgs>[]>;
    /**
     * VPN protocols for the VpnServerConfiguration.
     */
    vpnProtocols?: pulumi.Input<pulumi.Input<string | enums.VpnGatewayTunnelingProtocol>[]>;
}

/**
 * VpnSiteLink Resource.
 */
export interface VpnSiteLinkArgs {
    /**
     * The set of bgp properties.
     */
    bgpProperties?: pulumi.Input<VpnLinkBgpSettingsArgs>;
    /**
     * FQDN of vpn-site-link.
     */
    fqdn?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The ip-address for the vpn-site-link.
     */
    ipAddress?: pulumi.Input<string>;
    /**
     * The link provider properties.
     */
    linkProperties?: pulumi.Input<VpnLinkProviderPropertiesArgs>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
}

/**
 * VpnSiteLinkConnection Resource.
 */
export interface VpnSiteLinkConnectionArgs {
    /**
     * Expected bandwidth in MBPS.
     */
    connectionBandwidth?: pulumi.Input<number>;
    /**
     * Dead Peer Detection timeout in seconds for VpnLink connection.
     */
    dpdTimeoutSeconds?: pulumi.Input<number>;
    /**
     * List of egress NatRules.
     */
    egressNatRules?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
    /**
     * EnableBgp flag.
     */
    enableBgp?: pulumi.Input<boolean>;
    /**
     * EnableBgp flag.
     */
    enableRateLimiting?: pulumi.Input<boolean>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * List of ingress NatRules.
     */
    ingressNatRules?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
    /**
     * The IPSec Policies to be considered by this connection.
     */
    ipsecPolicies?: pulumi.Input<pulumi.Input<IpsecPolicyArgs>[]>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Routing weight for vpn connection.
     */
    routingWeight?: pulumi.Input<number>;
    /**
     * SharedKey for the vpn connection.
     */
    sharedKey?: pulumi.Input<string>;
    /**
     * Use local azure ip to initiate connection.
     */
    useLocalAzureIpAddress?: pulumi.Input<boolean>;
    /**
     * Enable policy-based traffic selectors.
     */
    usePolicyBasedTrafficSelectors?: pulumi.Input<boolean>;
    /**
     * Connection protocol used for this connection.
     */
    vpnConnectionProtocolType?: pulumi.Input<string | enums.VirtualNetworkGatewayConnectionProtocol>;
    /**
     * vpnGatewayCustomBgpAddresses used by this connection.
     */
    vpnGatewayCustomBgpAddresses?: pulumi.Input<pulumi.Input<GatewayCustomBgpIpAddressIpConfigurationArgs>[]>;
    /**
     * Vpn link connection mode.
     */
    vpnLinkConnectionMode?: pulumi.Input<string | enums.VpnLinkConnectionMode>;
    /**
     * Id of the connected vpn site link.
     */
    vpnSiteLink?: pulumi.Input<SubResourceArgs>;
}

/**
 * Defines contents of a web application rule.
 */
export interface WebApplicationFirewallCustomRuleArgs {
    /**
     * Type of Actions.
     */
    action: pulumi.Input<string | enums.WebApplicationFirewallAction>;
    /**
     * List of user session identifier group by clauses.
     */
    groupByUserSession?: pulumi.Input<pulumi.Input<GroupByUserSessionArgs>[]>;
    /**
     * List of match conditions.
     */
    matchConditions: pulumi.Input<pulumi.Input<MatchConditionArgs>[]>;
    /**
     * The name of the resource that is unique within a policy. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Priority of the rule. Rules with a lower value will be evaluated before rules with a higher value.
     */
    priority: pulumi.Input<number>;
    /**
     * Duration over which Rate Limit policy will be applied. Applies only when ruleType is RateLimitRule.
     */
    rateLimitDuration?: pulumi.Input<string | enums.ApplicationGatewayFirewallRateLimitDuration>;
    /**
     * Rate Limit threshold to apply in case ruleType is RateLimitRule. Must be greater than or equal to 1
     */
    rateLimitThreshold?: pulumi.Input<number>;
    /**
     * The rule type.
     */
    ruleType: pulumi.Input<string | enums.WebApplicationFirewallRuleType>;
    /**
     * Describes if the custom rule is in enabled or disabled state. Defaults to Enabled if not specified.
     */
    state?: pulumi.Input<string | enums.WebApplicationFirewallState>;
}

/**
 * Allow certain variables to be scrubbed on WAF logs
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
     * Defines the state of log scrubbing rule. Default value is Enabled.
     */
    state?: pulumi.Input<string | enums.ScrubbingRuleEntryState>;
}
