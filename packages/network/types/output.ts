import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * AAD Vpn authentication type related parameters.
 */
export interface AadAuthenticationParametersResponse {
    /**
     * AAD Vpn authentication parameter AAD audience.
     */
    aadAudience?: string;
    /**
     * AAD Vpn authentication parameter AAD issuer.
     */
    aadIssuer?: string;
    /**
     * AAD Vpn authentication parameter AAD tenant.
     */
    aadTenant?: string;
}

/**
 * Action to be taken on a route matching a RouteMap criterion.
 */
export interface ActionResponse {
    /**
     * List of parameters relevant to the action.For instance if type is drop then parameters has list of prefixes to be dropped.If type is add, parameters would have list of ASN numbers to be added
     */
    parameters?: ParameterResponse[];
    /**
     * Type of action to be taken. Supported types are 'Remove', 'Add', 'Replace', and 'Drop.'
     */
    type?: string;
}

/**
 * Active connectivity configuration.
 */
export interface ActiveConnectivityConfigurationResponse {
    /**
     * Groups for configuration
     */
    appliesToGroups: ConnectivityGroupItemResponse[];
    /**
     * Deployment time string.
     */
    commitTime?: string;
    /**
     * Effective configuration groups.
     */
    configurationGroups?: ConfigurationGroupResponse[];
    /**
     * Connectivity topology type.
     */
    connectivityTopology: string;
    /**
     * Flag if need to remove current existing peerings.
     */
    deleteExistingPeering?: string;
    /**
     * A description of the connectivity configuration.
     */
    description?: string;
    /**
     * A friendly name for the resource.
     */
    displayName?: string;
    /**
     * List of hubItems
     */
    hubs?: HubResponse[];
    /**
     * Connectivity configuration ID.
     */
    id?: string;
    /**
     * Flag if global mesh is supported.
     */
    isGlobal?: string;
    /**
     * The provisioning state of the connectivity configuration resource.
     */
    provisioningState: string;
    /**
     * Deployment region.
     */
    region?: string;
    /**
     * Unique identifier for this resource.
     */
    resourceGuid: string;
}

/**
 * Network default admin rule.
 */
export interface ActiveDefaultSecurityAdminRuleResponse {
    /**
     * Indicates the access allowed for this particular rule
     */
    access: string;
    /**
     * Deployment time string.
     */
    commitTime?: string;
    /**
     * A description of the security admin configuration.
     */
    configurationDescription?: string;
    /**
     * A display name of the security admin configuration.
     */
    configurationDisplayName?: string;
    /**
     * A description for this rule. Restricted to 140 chars.
     */
    description: string;
    /**
     * The destination port ranges.
     */
    destinationPortRanges: string[];
    /**
     * The destination address prefixes. CIDR or destination IP ranges.
     */
    destinations: AddressPrefixItemResponse[];
    /**
     * Indicates if the traffic matched against the rule in inbound or outbound.
     */
    direction: string;
    /**
     * A friendly name for the rule.
     */
    displayName?: string;
    /**
     * Default rule flag.
     */
    flag?: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Whether the rule is custom or default.
     * Expected value is 'Default'.
     */
    kind: "Default";
    /**
     * The priority of the rule. The value can be between 1 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
     */
    priority: number;
    /**
     * Network protocol this rule applies to.
     */
    protocol: string;
    /**
     * The provisioning state of the resource.
     */
    provisioningState: string;
    /**
     * Deployment region.
     */
    region?: string;
    /**
     * Unique identifier for this resource.
     */
    resourceGuid: string;
    /**
     * Groups for rule collection
     */
    ruleCollectionAppliesToGroups?: NetworkManagerSecurityGroupItemResponse[];
    /**
     * A description of the rule collection.
     */
    ruleCollectionDescription?: string;
    /**
     * A display name of the rule collection.
     */
    ruleCollectionDisplayName?: string;
    /**
     * Effective configuration groups.
     */
    ruleGroups?: ConfigurationGroupResponse[];
    /**
     * The source port ranges.
     */
    sourcePortRanges: string[];
    /**
     * The CIDR or source IP ranges.
     */
    sources: AddressPrefixItemResponse[];
}

/**
 * Network security default user rule.
 */
export interface ActiveDefaultSecurityUserRuleResponse {
    /**
     * Deployment time string.
     */
    commitTime?: string;
    /**
     * A description of the security user configuration.
     */
    configurationDescription?: string;
    /**
     * A display name of the security user configuration.
     */
    configurationDisplayName?: string;
    /**
     * A description for this rule. Restricted to 140 chars.
     */
    description: string;
    /**
     * The destination port ranges.
     */
    destinationPortRanges: string[];
    /**
     * The destination address prefixes. CIDR or destination IP ranges.
     */
    destinations: AddressPrefixItemResponse[];
    /**
     * Indicates if the traffic matched against the rule in inbound or outbound.
     */
    direction: string;
    /**
     * A friendly name for the rule.
     */
    displayName?: string;
    /**
     * Default rule flag.
     */
    flag?: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Whether the rule is custom or default.
     * Expected value is 'Default'.
     */
    kind: "Default";
    /**
     * Network protocol this rule applies to.
     */
    protocol: string;
    /**
     * The provisioning state of the security configuration user rule resource.
     */
    provisioningState: string;
    /**
     * Deployment region.
     */
    region?: string;
    /**
     * Groups for rule collection
     */
    ruleCollectionAppliesToGroups?: NetworkManagerSecurityGroupItemResponse[];
    /**
     * A description of the rule collection.
     */
    ruleCollectionDescription?: string;
    /**
     * A display name of the rule collection.
     */
    ruleCollectionDisplayName?: string;
    /**
     * Effective configuration groups.
     */
    ruleGroups?: ConfigurationGroupResponse[];
    /**
     * The source port ranges.
     */
    sourcePortRanges: string[];
    /**
     * The CIDR or source IP ranges.
     */
    sources: AddressPrefixItemResponse[];
}

/**
 * Network admin rule.
 */
export interface ActiveSecurityAdminRuleResponse {
    /**
     * Indicates the access allowed for this particular rule
     */
    access: string;
    /**
     * Deployment time string.
     */
    commitTime?: string;
    /**
     * A description of the security admin configuration.
     */
    configurationDescription?: string;
    /**
     * A display name of the security admin configuration.
     */
    configurationDisplayName?: string;
    /**
     * A description for this rule. Restricted to 140 chars.
     */
    description?: string;
    /**
     * The destination port ranges.
     */
    destinationPortRanges?: string[];
    /**
     * The destination address prefixes. CIDR or destination IP ranges.
     */
    destinations?: AddressPrefixItemResponse[];
    /**
     * Indicates if the traffic matched against the rule in inbound or outbound.
     */
    direction: string;
    /**
     * A friendly name for the rule.
     */
    displayName?: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Whether the rule is custom or default.
     * Expected value is 'Custom'.
     */
    kind: "Custom";
    /**
     * The priority of the rule. The value can be between 1 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
     */
    priority: number;
    /**
     * Network protocol this rule applies to.
     */
    protocol: string;
    /**
     * The provisioning state of the resource.
     */
    provisioningState: string;
    /**
     * Deployment region.
     */
    region?: string;
    /**
     * Unique identifier for this resource.
     */
    resourceGuid: string;
    /**
     * Groups for rule collection
     */
    ruleCollectionAppliesToGroups?: NetworkManagerSecurityGroupItemResponse[];
    /**
     * A description of the rule collection.
     */
    ruleCollectionDescription?: string;
    /**
     * A display name of the rule collection.
     */
    ruleCollectionDisplayName?: string;
    /**
     * Effective configuration groups.
     */
    ruleGroups?: ConfigurationGroupResponse[];
    /**
     * The source port ranges.
     */
    sourcePortRanges?: string[];
    /**
     * The CIDR or source IP ranges.
     */
    sources?: AddressPrefixItemResponse[];
}

/**
 * Network security user rule.
 */
export interface ActiveSecurityUserRuleResponse {
    /**
     * Deployment time string.
     */
    commitTime?: string;
    /**
     * A description of the security user configuration.
     */
    configurationDescription?: string;
    /**
     * A display name of the security user configuration.
     */
    configurationDisplayName?: string;
    /**
     * A description for this rule.
     */
    description?: string;
    /**
     * The destination port ranges.
     */
    destinationPortRanges?: string[];
    /**
     * The destination address prefixes. CIDR or destination IP ranges.
     */
    destinations?: AddressPrefixItemResponse[];
    /**
     * Indicates if the traffic matched against the rule in inbound or outbound.
     */
    direction: string;
    /**
     * A friendly name for the rule.
     */
    displayName?: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Whether the rule is custom or default.
     * Expected value is 'Custom'.
     */
    kind: "Custom";
    /**
     * Network protocol this rule applies to.
     */
    protocol: string;
    /**
     * The provisioning state of the security configuration user rule resource.
     */
    provisioningState: string;
    /**
     * Deployment region.
     */
    region?: string;
    /**
     * Groups for rule collection
     */
    ruleCollectionAppliesToGroups?: NetworkManagerSecurityGroupItemResponse[];
    /**
     * A description of the rule collection.
     */
    ruleCollectionDescription?: string;
    /**
     * A display name of the rule collection.
     */
    ruleCollectionDisplayName?: string;
    /**
     * Effective configuration groups.
     */
    ruleGroups?: ConfigurationGroupResponse[];
    /**
     * The source port ranges.
     */
    sourcePortRanges?: string[];
    /**
     * The CIDR or source IP ranges.
     */
    sources?: AddressPrefixItemResponse[];
}

/**
 * Address prefix item.
 */
export interface AddressPrefixItemResponse {
    /**
     * Address prefix.
     */
    addressPrefix?: string;
    /**
     * Address prefix type.
     */
    addressPrefixType?: string;
}

/**
 * AddressSpace contains an array of IP address ranges that can be used by subnets of the virtual network.
 */
export interface AddressSpaceResponse {
    /**
     * A list of address blocks reserved for this virtual network in CIDR notation.
     */
    addressPrefixes?: string[];
    /**
     * A list of IPAM Pools allocating IP address prefixes.
     */
    ipamPoolPrefixAllocations?: IpamPoolPrefixAllocationResponse[];
}

/**
 * Authentication certificates of an application gateway.
 */
export interface ApplicationGatewayAuthenticationCertificateResponse {
    /**
     * Certificate public data.
     */
    data?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Name of the authentication certificate that is unique within an Application Gateway.
     */
    name?: string;
    /**
     * The provisioning state of the authentication certificate resource.
     */
    provisioningState: string;
    /**
     * Type of the resource.
     */
    type: string;
}

/**
 * Application Gateway autoscale configuration.
 */
export interface ApplicationGatewayAutoscaleConfigurationResponse {
    /**
     * Upper bound on number of Application Gateway capacity.
     */
    maxCapacity?: number;
    /**
     * Lower bound on number of Application Gateway capacity.
     */
    minCapacity: number;
}

/**
 * Backend Address Pool of an application gateway.
 */
export interface ApplicationGatewayBackendAddressPoolResponse {
    /**
     * Backend addresses.
     */
    backendAddresses?: ApplicationGatewayBackendAddressResponse[];
    /**
     * Collection of references to IPs defined in network interfaces.
     */
    backendIPConfigurations: NetworkInterfaceIPConfigurationResponse[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Name of the backend address pool that is unique within an Application Gateway.
     */
    name?: string;
    /**
     * The provisioning state of the backend address pool resource.
     */
    provisioningState: string;
    /**
     * Type of the resource.
     */
    type: string;
}

/**
 * Backend address of an application gateway.
 */
export interface ApplicationGatewayBackendAddressResponse {
    /**
     * Fully qualified domain name (FQDN).
     */
    fqdn?: string;
    /**
     * IP address.
     */
    ipAddress?: string;
}

/**
 * Application gateway BackendHealthHttp settings.
 */
export interface ApplicationGatewayBackendHealthHttpSettingsResponse {
    /**
     * Reference to an ApplicationGatewayBackendHttpSettings resource.
     */
    backendHttpSettings?: ApplicationGatewayBackendHttpSettingsResponse;
    /**
     * List of ApplicationGatewayBackendHealthServer resources.
     */
    servers?: ApplicationGatewayBackendHealthServerResponse[];
}

/**
 * Application gateway backendhealth http settings.
 */
export interface ApplicationGatewayBackendHealthServerResponse {
    /**
     * IP address or FQDN of backend server.
     */
    address?: string;
    /**
     * Health of backend server.
     */
    health?: string;
    /**
     * Health Probe Log.
     */
    healthProbeLog?: string;
    /**
     * Reference to IP configuration of backend server.
     */
    ipConfiguration?: NetworkInterfaceIPConfigurationResponse;
}
/**
 * applicationGatewayBackendHealthServerResponseProvideDefaults sets the appropriate defaults for ApplicationGatewayBackendHealthServerResponse
 */
export function applicationGatewayBackendHealthServerResponseProvideDefaults(val: ApplicationGatewayBackendHealthServerResponse): ApplicationGatewayBackendHealthServerResponse {
    return {
        ...val,
        ipConfiguration: (val.ipConfiguration ? networkInterfaceIPConfigurationResponseProvideDefaults(val.ipConfiguration) : undefined),
    };
}

/**
 * Backend address pool settings of an application gateway.
 */
export interface ApplicationGatewayBackendHttpSettingsResponse {
    /**
     * Cookie name to use for the affinity cookie.
     */
    affinityCookieName?: string;
    /**
     * Array of references to application gateway authentication certificates.
     */
    authenticationCertificates?: SubResourceResponse[];
    /**
     * Connection draining of the backend http settings resource.
     */
    connectionDraining?: ApplicationGatewayConnectionDrainingResponse;
    /**
     * Cookie based affinity.
     */
    cookieBasedAffinity?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Host header to be sent to the backend servers.
     */
    hostName?: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Name of the backend http settings that is unique within an Application Gateway.
     */
    name?: string;
    /**
     * Path which should be used as a prefix for all HTTP requests. Null means no path will be prefixed. Default value is null.
     */
    path?: string;
    /**
     * Whether to pick host header should be picked from the host name of the backend server. Default value is false.
     */
    pickHostNameFromBackendAddress?: boolean;
    /**
     * The destination port on the backend.
     */
    port?: number;
    /**
     * Probe resource of an application gateway.
     */
    probe?: SubResourceResponse;
    /**
     * Whether the probe is enabled. Default value is false.
     */
    probeEnabled?: boolean;
    /**
     * The protocol used to communicate with the backend.
     */
    protocol?: string;
    /**
     * The provisioning state of the backend HTTP settings resource.
     */
    provisioningState: string;
    /**
     * Request timeout in seconds. Application Gateway will fail the request if response is not received within RequestTimeout. Acceptable values are from 1 second to 86400 seconds.
     */
    requestTimeout?: number;
    /**
     * Array of references to application gateway trusted root certificates.
     */
    trustedRootCertificates?: SubResourceResponse[];
    /**
     * Type of the resource.
     */
    type: string;
}

/**
 * Backend address pool settings of an application gateway.
 */
export interface ApplicationGatewayBackendSettingsResponse {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Server name indication to be sent to the backend servers for Tls protocol.
     */
    hostName?: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Name of the backend settings that is unique within an Application Gateway.
     */
    name?: string;
    /**
     * Whether to pick server name indication from the host name of the backend server for Tls protocol. Default value is false.
     */
    pickHostNameFromBackendAddress?: boolean;
    /**
     * The destination port on the backend.
     */
    port?: number;
    /**
     * Probe resource of an application gateway.
     */
    probe?: SubResourceResponse;
    /**
     * The protocol used to communicate with the backend.
     */
    protocol?: string;
    /**
     * The provisioning state of the backend HTTP settings resource.
     */
    provisioningState: string;
    /**
     * Connection timeout in seconds. Application Gateway will fail the request if response is not received within ConnectionTimeout. Acceptable values are from 1 second to 86400 seconds.
     */
    timeout?: number;
    /**
     * Array of references to application gateway trusted root certificates.
     */
    trustedRootCertificates?: SubResourceResponse[];
    /**
     * Type of the resource.
     */
    type: string;
}

/**
 * Application gateway client authentication configuration.
 */
export interface ApplicationGatewayClientAuthConfigurationResponse {
    /**
     * Verify client certificate issuer name on the application gateway.
     */
    verifyClientCertIssuerDN?: boolean;
    /**
     * Verify client certificate revocation status.
     */
    verifyClientRevocation?: string;
}

/**
 * Connection draining allows open connections to a backend server to be active for a specified time after the backend server got removed from the configuration.
 */
export interface ApplicationGatewayConnectionDrainingResponse {
    /**
     * The number of seconds connection draining is active. Acceptable values are from 1 second to 3600 seconds.
     */
    drainTimeoutInSec: number;
    /**
     * Whether connection draining is enabled or not.
     */
    enabled: boolean;
}

/**
 * Custom error of an application gateway.
 */
export interface ApplicationGatewayCustomErrorResponse {
    /**
     * Error page URL of the application gateway custom error.
     */
    customErrorPageUrl?: string;
    /**
     * Status code of the application gateway custom error.
     */
    statusCode?: string;
}

/**
 * Allows to disable rules within a rule group or an entire rule group.
 */
export interface ApplicationGatewayFirewallDisabledRuleGroupResponse {
    /**
     * The name of the rule group that will be disabled.
     */
    ruleGroupName: string;
    /**
     * The list of rules that will be disabled. If null, all rules of the rule group will be disabled.
     */
    rules?: number[];
}

/**
 * Allow to exclude some variable satisfy the condition for the WAF check.
 */
export interface ApplicationGatewayFirewallExclusionResponse {
    /**
     * The variable to be excluded.
     */
    matchVariable: string;
    /**
     * When matchVariable is a collection, operator used to specify which elements in the collection this exclusion applies to.
     */
    selector: string;
    /**
     * When matchVariable is a collection, operate on the selector to specify which elements in the collection this exclusion applies to.
     */
    selectorMatchOperator: string;
}

/**
 * Defines an application gateway for containers reference.
 */
export interface ApplicationGatewayForContainersReferenceDefinitionResponse {
    /**
     * Resource Id of the application gateway for containers.
     */
    id: string;
}

/**
 * Frontend IP configuration of an application gateway.
 */
export interface ApplicationGatewayFrontendIPConfigurationResponse {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Name of the frontend IP configuration that is unique within an Application Gateway.
     */
    name?: string;
    /**
     * PrivateIPAddress of the network interface IP Configuration.
     */
    privateIPAddress?: string;
    /**
     * The private IP address allocation method.
     */
    privateIPAllocationMethod?: string;
    /**
     * Reference to the application gateway private link configuration.
     */
    privateLinkConfiguration?: SubResourceResponse;
    /**
     * The provisioning state of the frontend IP configuration resource.
     */
    provisioningState: string;
    /**
     * Reference to the PublicIP resource.
     */
    publicIPAddress?: SubResourceResponse;
    /**
     * Reference to the subnet resource.
     */
    subnet?: SubResourceResponse;
    /**
     * Type of the resource.
     */
    type: string;
}

/**
 * Frontend port of an application gateway.
 */
export interface ApplicationGatewayFrontendPortResponse {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Name of the frontend port that is unique within an Application Gateway.
     */
    name?: string;
    /**
     * Frontend port.
     */
    port?: number;
    /**
     * The provisioning state of the frontend port resource.
     */
    provisioningState: string;
    /**
     * Type of the resource.
     */
    type: string;
}

/**
 * Application Gateway global configuration.
 */
export interface ApplicationGatewayGlobalConfigurationResponse {
    /**
     * Enable request buffering.
     */
    enableRequestBuffering?: boolean;
    /**
     * Enable response buffering.
     */
    enableResponseBuffering?: boolean;
}

/**
 * Header configuration of the Actions set in Application Gateway.
 */
export interface ApplicationGatewayHeaderConfigurationResponse {
    /**
     * Header name of the header configuration.
     */
    headerName?: string;
    /**
     * Header value of the header configuration.
     */
    headerValue?: string;
    /**
     * An optional field under "Rewrite Action". It lets you capture and modify the value(s) of a specific header when multiple headers with the same name exist. Currently supported for Set-Cookie Response header only. For more details, visit https://aka.ms/appgwheadercrud
     */
    headerValueMatcher?: HeaderValueMatcherResponse;
}

/**
 * Http listener of an application gateway.
 */
export interface ApplicationGatewayHttpListenerResponse {
    /**
     * Custom error configurations of the HTTP listener.
     */
    customErrorConfigurations?: ApplicationGatewayCustomErrorResponse[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Reference to the FirewallPolicy resource.
     */
    firewallPolicy?: SubResourceResponse;
    /**
     * Frontend IP configuration resource of an application gateway.
     */
    frontendIPConfiguration?: SubResourceResponse;
    /**
     * Frontend port resource of an application gateway.
     */
    frontendPort?: SubResourceResponse;
    /**
     * Host name of HTTP listener.
     */
    hostName?: string;
    /**
     * List of Host names for HTTP Listener that allows special wildcard characters as well.
     */
    hostNames?: string[];
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Name of the HTTP listener that is unique within an Application Gateway.
     */
    name?: string;
    /**
     * Protocol of the HTTP listener.
     */
    protocol?: string;
    /**
     * The provisioning state of the HTTP listener resource.
     */
    provisioningState: string;
    /**
     * Applicable only if protocol is https. Enables SNI for multi-hosting.
     */
    requireServerNameIndication?: boolean;
    /**
     * SSL certificate resource of an application gateway.
     */
    sslCertificate?: SubResourceResponse;
    /**
     * SSL profile resource of the application gateway.
     */
    sslProfile?: SubResourceResponse;
    /**
     * Type of the resource.
     */
    type: string;
}

/**
 * IP configuration of an application gateway. Currently 1 public and 1 private IP configuration is allowed.
 */
export interface ApplicationGatewayIPConfigurationResponse {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Name of the IP configuration that is unique within an Application Gateway.
     */
    name?: string;
    /**
     * The provisioning state of the application gateway IP configuration resource.
     */
    provisioningState: string;
    /**
     * Reference to the subnet resource. A subnet from where application gateway gets its private address.
     */
    subnet?: SubResourceResponse;
    /**
     * Type of the resource.
     */
    type: string;
}

/**
 * Listener of an application gateway.
 */
export interface ApplicationGatewayListenerResponse {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Frontend IP configuration resource of an application gateway.
     */
    frontendIPConfiguration?: SubResourceResponse;
    /**
     * Frontend port resource of an application gateway.
     */
    frontendPort?: SubResourceResponse;
    /**
     * List of Server Name Indications(SNI) for TLS Multi-site Listener that allows special wildcard characters as well.
     */
    hostNames?: string[];
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Name of the listener that is unique within an Application Gateway.
     */
    name?: string;
    /**
     * Protocol of the listener.
     */
    protocol?: string;
    /**
     * The provisioning state of the listener resource.
     */
    provisioningState: string;
    /**
     * SSL certificate resource of an application gateway.
     */
    sslCertificate?: SubResourceResponse;
    /**
     * SSL profile resource of the application gateway.
     */
    sslProfile?: SubResourceResponse;
    /**
     * Type of the resource.
     */
    type: string;
}

/**
 * Load Distribution Policy of an application gateway.
 */
export interface ApplicationGatewayLoadDistributionPolicyResponse {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Load Distribution Targets resource of an application gateway.
     */
    loadDistributionAlgorithm?: string;
    /**
     * Load Distribution Targets resource of an application gateway.
     */
    loadDistributionTargets?: ApplicationGatewayLoadDistributionTargetResponse[];
    /**
     * Name of the load distribution policy that is unique within an Application Gateway.
     */
    name?: string;
    /**
     * The provisioning state of the Load Distribution Policy resource.
     */
    provisioningState: string;
    /**
     * Type of the resource.
     */
    type: string;
}

/**
 * Load Distribution Target of an application gateway.
 */
export interface ApplicationGatewayLoadDistributionTargetResponse {
    /**
     * Backend address pool resource of the application gateway.
     */
    backendAddressPool?: SubResourceResponse;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Name of the load distribution policy that is unique within an Application Gateway.
     */
    name?: string;
    /**
     * Type of the resource.
     */
    type: string;
    /**
     * Weight per server. Range between 1 and 100.
     */
    weightPerServer?: number;
}

/**
 * Path rule of URL path map of an application gateway.
 */
export interface ApplicationGatewayPathRuleResponse {
    /**
     * Backend address pool resource of URL path map path rule.
     */
    backendAddressPool?: SubResourceResponse;
    /**
     * Backend http settings resource of URL path map path rule.
     */
    backendHttpSettings?: SubResourceResponse;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Reference to the FirewallPolicy resource.
     */
    firewallPolicy?: SubResourceResponse;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Load Distribution Policy resource of URL path map path rule.
     */
    loadDistributionPolicy?: SubResourceResponse;
    /**
     * Name of the path rule that is unique within an Application Gateway.
     */
    name?: string;
    /**
     * Path rules of URL path map.
     */
    paths?: string[];
    /**
     * The provisioning state of the path rule resource.
     */
    provisioningState: string;
    /**
     * Redirect configuration resource of URL path map path rule.
     */
    redirectConfiguration?: SubResourceResponse;
    /**
     * Rewrite rule set resource of URL path map path rule.
     */
    rewriteRuleSet?: SubResourceResponse;
    /**
     * Type of the resource.
     */
    type: string;
}

/**
 * Private Endpoint connection on an application gateway.
 */
export interface ApplicationGatewayPrivateEndpointConnectionResponse {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The consumer link id.
     */
    linkIdentifier: string;
    /**
     * Name of the private endpoint connection on an application gateway.
     */
    name?: string;
    /**
     * The resource of private end point.
     */
    privateEndpoint: PrivateEndpointResponse;
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateResponse;
    /**
     * The provisioning state of the application gateway private endpoint connection resource.
     */
    provisioningState: string;
    /**
     * Type of the resource.
     */
    type: string;
}
/**
 * applicationGatewayPrivateEndpointConnectionResponseProvideDefaults sets the appropriate defaults for ApplicationGatewayPrivateEndpointConnectionResponse
 */
export function applicationGatewayPrivateEndpointConnectionResponseProvideDefaults(val: ApplicationGatewayPrivateEndpointConnectionResponse): ApplicationGatewayPrivateEndpointConnectionResponse {
    return {
        ...val,
        privateEndpoint: privateEndpointResponseProvideDefaults(val.privateEndpoint),
    };
}

/**
 * Private Link Configuration on an application gateway.
 */
export interface ApplicationGatewayPrivateLinkConfigurationResponse {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * An array of application gateway private link ip configurations.
     */
    ipConfigurations?: ApplicationGatewayPrivateLinkIpConfigurationResponse[];
    /**
     * Name of the private link configuration that is unique within an Application Gateway.
     */
    name?: string;
    /**
     * The provisioning state of the application gateway private link configuration.
     */
    provisioningState: string;
    /**
     * Type of the resource.
     */
    type: string;
}

/**
 * The application gateway private link ip configuration.
 */
export interface ApplicationGatewayPrivateLinkIpConfigurationResponse {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The name of application gateway private link ip configuration.
     */
    name?: string;
    /**
     * Whether the ip configuration is primary or not.
     */
    primary?: boolean;
    /**
     * The private IP address of the IP configuration.
     */
    privateIPAddress?: string;
    /**
     * The private IP address allocation method.
     */
    privateIPAllocationMethod?: string;
    /**
     * The provisioning state of the application gateway private link IP configuration.
     */
    provisioningState: string;
    /**
     * Reference to the subnet resource.
     */
    subnet?: SubResourceResponse;
    /**
     * The resource type.
     */
    type: string;
}

/**
 * Application gateway probe health response match.
 */
export interface ApplicationGatewayProbeHealthResponseMatchResponse {
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
 * Probe of the application gateway.
 */
export interface ApplicationGatewayProbeResponse {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Host name to send the probe to.
     */
    host?: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The probing interval in seconds. This is the time interval between two consecutive probes. Acceptable values are from 1 second to 86400 seconds.
     */
    interval?: number;
    /**
     * Criterion for classifying a healthy probe response.
     */
    match?: ApplicationGatewayProbeHealthResponseMatchResponse;
    /**
     * Minimum number of servers that are always marked healthy. Default value is 0.
     */
    minServers?: number;
    /**
     * Name of the probe that is unique within an Application Gateway.
     */
    name?: string;
    /**
     * Relative path of probe. Valid path starts from '/'. Probe is sent to <Protocol>://<host>:<port><path>.
     */
    path?: string;
    /**
     * Whether the host header should be picked from the backend http settings. Default value is false.
     */
    pickHostNameFromBackendHttpSettings?: boolean;
    /**
     * Whether the server name indication should be picked from the backend settings for Tls protocol. Default value is false.
     */
    pickHostNameFromBackendSettings?: boolean;
    /**
     * Custom port which will be used for probing the backend servers. The valid value ranges from 1 to 65535. In case not set, port from http settings will be used. This property is valid for Basic, Standard_v2 and WAF_v2 only.
     */
    port?: number;
    /**
     * The protocol used for the probe.
     */
    protocol?: string;
    /**
     * The provisioning state of the probe resource.
     */
    provisioningState: string;
    /**
     * The probe timeout in seconds. Probe marked as failed if valid response is not received with this timeout period. Acceptable values are from 1 second to 86400 seconds.
     */
    timeout?: number;
    /**
     * Type of the resource.
     */
    type: string;
    /**
     * The probe retry count. Backend server is marked down after consecutive probe failure count reaches UnhealthyThreshold. Acceptable values are from 1 second to 20.
     */
    unhealthyThreshold?: number;
}

/**
 * Redirect configuration of an application gateway.
 */
export interface ApplicationGatewayRedirectConfigurationResponse {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Include path in the redirected url.
     */
    includePath?: boolean;
    /**
     * Include query string in the redirected url.
     */
    includeQueryString?: boolean;
    /**
     * Name of the redirect configuration that is unique within an Application Gateway.
     */
    name?: string;
    /**
     * Path rules specifying redirect configuration.
     */
    pathRules?: SubResourceResponse[];
    /**
     * HTTP redirection type.
     */
    redirectType?: string;
    /**
     * Request routing specifying redirect configuration.
     */
    requestRoutingRules?: SubResourceResponse[];
    /**
     * Reference to a listener to redirect the request to.
     */
    targetListener?: SubResourceResponse;
    /**
     * Url to redirect the request to.
     */
    targetUrl?: string;
    /**
     * Type of the resource.
     */
    type: string;
    /**
     * Url path maps specifying default redirect configuration.
     */
    urlPathMaps?: SubResourceResponse[];
}

/**
 * Request routing rule of an application gateway.
 */
export interface ApplicationGatewayRequestRoutingRuleResponse {
    /**
     * Backend address pool resource of the application gateway.
     */
    backendAddressPool?: SubResourceResponse;
    /**
     * Backend http settings resource of the application gateway.
     */
    backendHttpSettings?: SubResourceResponse;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Http listener resource of the application gateway.
     */
    httpListener?: SubResourceResponse;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Load Distribution Policy resource of the application gateway.
     */
    loadDistributionPolicy?: SubResourceResponse;
    /**
     * Name of the request routing rule that is unique within an Application Gateway.
     */
    name?: string;
    /**
     * Priority of the request routing rule.
     */
    priority?: number;
    /**
     * The provisioning state of the request routing rule resource.
     */
    provisioningState: string;
    /**
     * Redirect configuration resource of the application gateway.
     */
    redirectConfiguration?: SubResourceResponse;
    /**
     * Rewrite Rule Set resource in Basic rule of the application gateway.
     */
    rewriteRuleSet?: SubResourceResponse;
    /**
     * Rule type.
     */
    ruleType?: string;
    /**
     * Type of the resource.
     */
    type: string;
    /**
     * URL path map resource of the application gateway.
     */
    urlPathMap?: SubResourceResponse;
}

/**
 * Application gateway resource.
 */
export interface ApplicationGatewayResponse {
    /**
     * Authentication certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    authenticationCertificates?: ApplicationGatewayAuthenticationCertificateResponse[];
    /**
     * Autoscale Configuration.
     */
    autoscaleConfiguration?: ApplicationGatewayAutoscaleConfigurationResponse;
    /**
     * Backend address pool of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    backendAddressPools?: ApplicationGatewayBackendAddressPoolResponse[];
    /**
     * Backend http settings of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    backendHttpSettingsCollection?: ApplicationGatewayBackendHttpSettingsResponse[];
    /**
     * Backend settings of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    backendSettingsCollection?: ApplicationGatewayBackendSettingsResponse[];
    /**
     * Custom error configurations of the application gateway resource.
     */
    customErrorConfigurations?: ApplicationGatewayCustomErrorResponse[];
    /**
     * The default predefined SSL Policy applied on the application gateway resource.
     */
    defaultPredefinedSslPolicy: string;
    /**
     * Whether FIPS is enabled on the application gateway resource.
     */
    enableFips?: boolean;
    /**
     * Whether HTTP2 is enabled on the application gateway resource.
     */
    enableHttp2?: boolean;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Reference to the FirewallPolicy resource.
     */
    firewallPolicy?: SubResourceResponse;
    /**
     * If true, associates a firewall policy with an application gateway regardless whether the policy differs from the WAF Config.
     */
    forceFirewallPolicyAssociation?: boolean;
    /**
     * Frontend IP addresses of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    frontendIPConfigurations?: ApplicationGatewayFrontendIPConfigurationResponse[];
    /**
     * Frontend ports of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    frontendPorts?: ApplicationGatewayFrontendPortResponse[];
    /**
     * Subnets of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    gatewayIPConfigurations?: ApplicationGatewayIPConfigurationResponse[];
    /**
     * Global Configuration.
     */
    globalConfiguration?: ApplicationGatewayGlobalConfigurationResponse;
    /**
     * Http listeners of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    httpListeners?: ApplicationGatewayHttpListenerResponse[];
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The identity of the application gateway, if configured.
     */
    identity?: ManagedServiceIdentityResponse;
    /**
     * Listeners of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    listeners?: ApplicationGatewayListenerResponse[];
    /**
     * Load distribution policies of the application gateway resource.
     */
    loadDistributionPolicies?: ApplicationGatewayLoadDistributionPolicyResponse[];
    /**
     * Resource location.
     */
    location?: string;
    /**
     * Resource name.
     */
    name: string;
    /**
     * Operational state of the application gateway resource.
     */
    operationalState: string;
    /**
     * Private Endpoint connections on application gateway.
     */
    privateEndpointConnections: ApplicationGatewayPrivateEndpointConnectionResponse[];
    /**
     * PrivateLink configurations on application gateway.
     */
    privateLinkConfigurations?: ApplicationGatewayPrivateLinkConfigurationResponse[];
    /**
     * Probes of the application gateway resource.
     */
    probes?: ApplicationGatewayProbeResponse[];
    /**
     * The provisioning state of the application gateway resource.
     */
    provisioningState: string;
    /**
     * Redirect configurations of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    redirectConfigurations?: ApplicationGatewayRedirectConfigurationResponse[];
    /**
     * Request routing rules of the application gateway resource.
     */
    requestRoutingRules?: ApplicationGatewayRequestRoutingRuleResponse[];
    /**
     * The resource GUID property of the application gateway resource.
     */
    resourceGuid: string;
    /**
     * Rewrite rules for the application gateway resource.
     */
    rewriteRuleSets?: ApplicationGatewayRewriteRuleSetResponse[];
    /**
     * Routing rules of the application gateway resource.
     */
    routingRules?: ApplicationGatewayRoutingRuleResponse[];
    /**
     * SKU of the application gateway resource.
     */
    sku?: ApplicationGatewaySkuResponse;
    /**
     * SSL certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    sslCertificates?: ApplicationGatewaySslCertificateResponse[];
    /**
     * SSL policy of the application gateway resource.
     */
    sslPolicy?: ApplicationGatewaySslPolicyResponse;
    /**
     * SSL profiles of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    sslProfiles?: ApplicationGatewaySslProfileResponse[];
    /**
     * Resource tags.
     */
    tags?: {[key: string]: string};
    /**
     * Trusted client certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    trustedClientCertificates?: ApplicationGatewayTrustedClientCertificateResponse[];
    /**
     * Trusted Root certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    trustedRootCertificates?: ApplicationGatewayTrustedRootCertificateResponse[];
    /**
     * Resource type.
     */
    type: string;
    /**
     * URL path map of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    urlPathMaps?: ApplicationGatewayUrlPathMapResponse[];
    /**
     * Web application firewall configuration.
     */
    webApplicationFirewallConfiguration?: ApplicationGatewayWebApplicationFirewallConfigurationResponse;
    /**
     * A list of availability zones denoting where the resource needs to come from.
     */
    zones?: string[];
}

/**
 * Set of actions in the Rewrite Rule in Application Gateway.
 */
export interface ApplicationGatewayRewriteRuleActionSetResponse {
    /**
     * Request Header Actions in the Action Set.
     */
    requestHeaderConfigurations?: ApplicationGatewayHeaderConfigurationResponse[];
    /**
     * Response Header Actions in the Action Set.
     */
    responseHeaderConfigurations?: ApplicationGatewayHeaderConfigurationResponse[];
    /**
     * Url Configuration Action in the Action Set.
     */
    urlConfiguration?: ApplicationGatewayUrlConfigurationResponse;
}

/**
 * Set of conditions in the Rewrite Rule in Application Gateway.
 */
export interface ApplicationGatewayRewriteRuleConditionResponse {
    /**
     * Setting this parameter to truth value with force the pattern to do a case in-sensitive comparison.
     */
    ignoreCase?: boolean;
    /**
     * Setting this value as truth will force to check the negation of the condition given by the user.
     */
    negate?: boolean;
    /**
     * The pattern, either fixed string or regular expression, that evaluates the truthfulness of the condition.
     */
    pattern?: string;
    /**
     * The condition parameter of the RewriteRuleCondition.
     */
    variable?: string;
}

/**
 * Rewrite rule of an application gateway.
 */
export interface ApplicationGatewayRewriteRuleResponse {
    /**
     * Set of actions to be done as part of the rewrite Rule.
     */
    actionSet?: ApplicationGatewayRewriteRuleActionSetResponse;
    /**
     * Conditions based on which the action set execution will be evaluated.
     */
    conditions?: ApplicationGatewayRewriteRuleConditionResponse[];
    /**
     * Name of the rewrite rule that is unique within an Application Gateway.
     */
    name?: string;
    /**
     * Rule Sequence of the rewrite rule that determines the order of execution of a particular rule in a RewriteRuleSet.
     */
    ruleSequence?: number;
}

/**
 * Rewrite rule set of an application gateway.
 */
export interface ApplicationGatewayRewriteRuleSetResponse {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Name of the rewrite rule set that is unique within an Application Gateway.
     */
    name?: string;
    /**
     * The provisioning state of the rewrite rule set resource.
     */
    provisioningState: string;
    /**
     * Rewrite rules in the rewrite rule set.
     */
    rewriteRules?: ApplicationGatewayRewriteRuleResponse[];
}

/**
 * Routing rule of an application gateway.
 */
export interface ApplicationGatewayRoutingRuleResponse {
    /**
     * Backend address pool resource of the application gateway.
     */
    backendAddressPool?: SubResourceResponse;
    /**
     * Backend settings resource of the application gateway.
     */
    backendSettings?: SubResourceResponse;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Listener resource of the application gateway.
     */
    listener?: SubResourceResponse;
    /**
     * Name of the routing rule that is unique within an Application Gateway.
     */
    name?: string;
    /**
     * Priority of the routing rule.
     */
    priority: number;
    /**
     * The provisioning state of the request routing rule resource.
     */
    provisioningState: string;
    /**
     * Rule type.
     */
    ruleType?: string;
    /**
     * Type of the resource.
     */
    type: string;
}

/**
 * SKU of an application gateway.
 */
export interface ApplicationGatewaySkuResponse {
    /**
     * Capacity (instance count) of an application gateway.
     */
    capacity?: number;
    /**
     * Family of an application gateway SKU.
     */
    family?: string;
    /**
     * Name of an application gateway SKU.
     */
    name?: string;
    /**
     * Tier of an application gateway.
     */
    tier?: string;
}

/**
 * SSL certificates of an application gateway.
 */
export interface ApplicationGatewaySslCertificateResponse {
    /**
     * Base-64 encoded pfx certificate. Only applicable in PUT Request.
     */
    data?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Secret Id of (base-64 encoded unencrypted pfx) 'Secret' or 'Certificate' object stored in KeyVault.
     */
    keyVaultSecretId?: string;
    /**
     * Name of the SSL certificate that is unique within an Application Gateway.
     */
    name?: string;
    /**
     * Password for the pfx file specified in data. Only applicable in PUT request.
     */
    password?: string;
    /**
     * The provisioning state of the SSL certificate resource.
     */
    provisioningState: string;
    /**
     * Base-64 encoded Public cert data corresponding to pfx specified in data. Only applicable in GET request.
     */
    publicCertData: string;
    /**
     * Type of the resource.
     */
    type: string;
}

/**
 * Application Gateway Ssl policy.
 */
export interface ApplicationGatewaySslPolicyResponse {
    /**
     * Ssl cipher suites to be enabled in the specified order to application gateway.
     */
    cipherSuites?: string[];
    /**
     * Ssl protocols to be disabled on application gateway.
     */
    disabledSslProtocols?: string[];
    /**
     * Minimum version of Ssl protocol to be supported on application gateway.
     */
    minProtocolVersion?: string;
    /**
     * Name of Ssl predefined policy.
     */
    policyName?: string;
    /**
     * Type of Ssl Policy.
     */
    policyType?: string;
}

/**
 * SSL profile of an application gateway.
 */
export interface ApplicationGatewaySslProfileResponse {
    /**
     * Client authentication configuration of the application gateway resource.
     */
    clientAuthConfiguration?: ApplicationGatewayClientAuthConfigurationResponse;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Name of the SSL profile that is unique within an Application Gateway.
     */
    name?: string;
    /**
     * The provisioning state of the HTTP listener resource.
     */
    provisioningState: string;
    /**
     * SSL policy of the application gateway resource.
     */
    sslPolicy?: ApplicationGatewaySslPolicyResponse;
    /**
     * Array of references to application gateway trusted client certificates.
     */
    trustedClientCertificates?: SubResourceResponse[];
    /**
     * Type of the resource.
     */
    type: string;
}

/**
 * Trusted client certificates of an application gateway.
 */
export interface ApplicationGatewayTrustedClientCertificateResponse {
    /**
     * Distinguished name of client certificate issuer.
     */
    clientCertIssuerDN: string;
    /**
     * Certificate public data.
     */
    data?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Name of the trusted client certificate that is unique within an Application Gateway.
     */
    name?: string;
    /**
     * The provisioning state of the trusted client certificate resource.
     */
    provisioningState: string;
    /**
     * Type of the resource.
     */
    type: string;
    /**
     * Validated certificate data.
     */
    validatedCertData: string;
}

/**
 * Trusted Root certificates of an application gateway.
 */
export interface ApplicationGatewayTrustedRootCertificateResponse {
    /**
     * Certificate public data.
     */
    data?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Secret Id of (base-64 encoded unencrypted pfx) 'Secret' or 'Certificate' object stored in KeyVault.
     */
    keyVaultSecretId?: string;
    /**
     * Name of the trusted root certificate that is unique within an Application Gateway.
     */
    name?: string;
    /**
     * The provisioning state of the trusted root certificate resource.
     */
    provisioningState: string;
    /**
     * Type of the resource.
     */
    type: string;
}

/**
 * Url configuration of the Actions set in Application Gateway.
 */
export interface ApplicationGatewayUrlConfigurationResponse {
    /**
     * Url path which user has provided for url rewrite. Null means no path will be updated. Default value is null.
     */
    modifiedPath?: string;
    /**
     * Query string which user has provided for url rewrite. Null means no query string will be updated. Default value is null.
     */
    modifiedQueryString?: string;
    /**
     * If set as true, it will re-evaluate the url path map provided in path based request routing rules using modified path. Default value is false.
     */
    reroute?: boolean;
}

/**
 * UrlPathMaps give a url path to the backend mapping information for PathBasedRouting.
 */
export interface ApplicationGatewayUrlPathMapResponse {
    /**
     * Default backend address pool resource of URL path map.
     */
    defaultBackendAddressPool?: SubResourceResponse;
    /**
     * Default backend http settings resource of URL path map.
     */
    defaultBackendHttpSettings?: SubResourceResponse;
    /**
     * Default Load Distribution Policy resource of URL path map.
     */
    defaultLoadDistributionPolicy?: SubResourceResponse;
    /**
     * Default redirect configuration resource of URL path map.
     */
    defaultRedirectConfiguration?: SubResourceResponse;
    /**
     * Default Rewrite rule set resource of URL path map.
     */
    defaultRewriteRuleSet?: SubResourceResponse;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Name of the URL path map that is unique within an Application Gateway.
     */
    name?: string;
    /**
     * Path rule of URL path map resource.
     */
    pathRules?: ApplicationGatewayPathRuleResponse[];
    /**
     * The provisioning state of the URL path map resource.
     */
    provisioningState: string;
    /**
     * Type of the resource.
     */
    type: string;
}

/**
 * Application gateway web application firewall configuration.
 */
export interface ApplicationGatewayWebApplicationFirewallConfigurationResponse {
    /**
     * The disabled rule groups.
     */
    disabledRuleGroups?: ApplicationGatewayFirewallDisabledRuleGroupResponse[];
    /**
     * Whether the web application firewall is enabled or not.
     */
    enabled: boolean;
    /**
     * The exclusion list.
     */
    exclusions?: ApplicationGatewayFirewallExclusionResponse[];
    /**
     * Maximum file upload size in Mb for WAF.
     */
    fileUploadLimitInMb?: number;
    /**
     * Web application firewall mode.
     */
    firewallMode: string;
    /**
     * Maximum request body size for WAF.
     */
    maxRequestBodySize?: number;
    /**
     * Maximum request body size in Kb for WAF.
     */
    maxRequestBodySizeInKb?: number;
    /**
     * Whether allow WAF to check request Body.
     */
    requestBodyCheck?: boolean;
    /**
     * The type of the web application firewall rule set. Possible values are: 'OWASP'.
     */
    ruleSetType: string;
    /**
     * The version of the rule set type.
     */
    ruleSetVersion: string;
}

/**
 * Rule condition of type application.
 */
export interface ApplicationRuleConditionResponse {
    /**
     * Description of the rule condition.
     */
    description?: string;
    /**
     * List of destination IP addresses or Service Tags.
     */
    destinationAddresses?: string[];
    /**
     * List of FQDN Tags for this rule condition.
     */
    fqdnTags?: string[];
    /**
     * Name of the rule condition.
     */
    name?: string;
    /**
     * Array of Application Protocols.
     */
    protocols?: FirewallPolicyRuleConditionApplicationProtocolResponse[];
    /**
     * Rule Condition Type.
     * Expected value is 'ApplicationRuleCondition'.
     */
    ruleConditionType: "ApplicationRuleCondition";
    /**
     * List of source IP addresses for this rule.
     */
    sourceAddresses?: string[];
    /**
     * List of source IpGroups for this rule.
     */
    sourceIpGroups?: string[];
    /**
     * List of FQDNs for this rule condition.
     */
    targetFqdns?: string[];
}

/**
 * Rule of type application.
 */
export interface ApplicationRuleResponse {
    /**
     * Description of the rule.
     */
    description?: string;
    /**
     * List of destination IP addresses or Service Tags.
     */
    destinationAddresses?: string[];
    /**
     * List of FQDN Tags for this rule.
     */
    fqdnTags?: string[];
    /**
     * List of HTTP/S headers to insert.
     */
    httpHeadersToInsert?: FirewallPolicyHttpHeaderToInsertResponse[];
    /**
     * Name of the rule.
     */
    name?: string;
    /**
     * Array of Application Protocols.
     */
    protocols?: FirewallPolicyRuleApplicationProtocolResponse[];
    /**
     * Rule Type.
     * Expected value is 'ApplicationRule'.
     */
    ruleType: "ApplicationRule";
    /**
     * List of source IP addresses for this rule.
     */
    sourceAddresses?: string[];
    /**
     * List of source IpGroups for this rule.
     */
    sourceIpGroups?: string[];
    /**
     * List of FQDNs for this rule.
     */
    targetFqdns?: string[];
    /**
     * List of Urls for this rule condition.
     */
    targetUrls?: string[];
    /**
     * Terminate TLS connections for this rule.
     */
    terminateTLS?: boolean;
    /**
     * List of destination azure web categories.
     */
    webCategories?: string[];
}

/**
 * An application security group in a resource group.
 */
export interface ApplicationSecurityGroupResponse {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Resource location.
     */
    location?: string;
    /**
     * Resource name.
     */
    name: string;
    /**
     * The provisioning state of the application security group resource.
     */
    provisioningState: string;
    /**
     * The resource GUID property of the application security group resource. It uniquely identifies a resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
     */
    resourceGuid: string;
    /**
     * Resource tags.
     */
    tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    type: string;
}

/**
 * Application rule collection resource.
 */
export interface AzureFirewallApplicationRuleCollectionResponse {
    /**
     * The action type of a rule collection.
     */
    action?: AzureFirewallRCActionResponse;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The name of the resource that is unique within the Azure firewall. This name can be used to access the resource.
     */
    name?: string;
    /**
     * Priority of the application rule collection resource.
     */
    priority?: number;
    /**
     * The provisioning state of the application rule collection resource.
     */
    provisioningState: string;
    /**
     * Collection of rules used by a application rule collection.
     */
    rules?: AzureFirewallApplicationRuleResponse[];
}

/**
 * Properties of the application rule protocol.
 */
export interface AzureFirewallApplicationRuleProtocolResponse {
    /**
     * Port number for the protocol, cannot be greater than 64000. This field is optional.
     */
    port?: number;
    /**
     * Protocol type.
     */
    protocolType?: string;
}

/**
 * Properties of an application rule.
 */
export interface AzureFirewallApplicationRuleResponse {
    /**
     * Description of the rule.
     */
    description?: string;
    /**
     * List of FQDN Tags for this rule.
     */
    fqdnTags?: string[];
    /**
     * Name of the application rule.
     */
    name?: string;
    /**
     * Array of ApplicationRuleProtocols.
     */
    protocols?: AzureFirewallApplicationRuleProtocolResponse[];
    /**
     * List of source IP addresses for this rule.
     */
    sourceAddresses?: string[];
    /**
     * List of source IpGroups for this rule.
     */
    sourceIpGroups?: string[];
    /**
     * List of FQDNs for this rule.
     */
    targetFqdns?: string[];
}

/**
 * Azure Firewall Autoscale Configuration parameters.
 */
export interface AzureFirewallAutoscaleConfigurationResponse {
    /**
     * The maximum number of capacity units for this azure firewall. Use null to reset the value to the service default.
     */
    maxCapacity?: number;
    /**
     * The minimum number of capacity units for this azure firewall. Use null to reset the value to the service default.
     */
    minCapacity?: number;
}

/**
 * IP configuration of an Azure Firewall.
 */
export interface AzureFirewallIPConfigurationResponse {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * The Firewall Internal Load Balancer IP to be used as the next hop in User Defined Routes.
     */
    privateIPAddress: string;
    /**
     * The provisioning state of the Azure firewall IP configuration resource.
     */
    provisioningState: string;
    /**
     * Reference to the PublicIP resource. This field is a mandatory input if subnet is not null.
     */
    publicIPAddress?: SubResourceResponse;
    /**
     * Reference to the subnet resource. This resource must be named 'AzureFirewallSubnet' or 'AzureFirewallManagementSubnet'.
     */
    subnet?: SubResourceResponse;
    /**
     * Type of the resource.
     */
    type: string;
}

/**
 * IpGroups associated with azure firewall.
 */
export interface AzureFirewallIpGroupsResponse {
    /**
     * The iteration number.
     */
    changeNumber: string;
    /**
     * Resource ID.
     */
    id: string;
}

/**
 * AzureFirewall NAT Rule Collection Action.
 */
export interface AzureFirewallNatRCActionResponse {
    /**
     * The type of action.
     */
    type?: string;
}

/**
 * NAT rule collection resource.
 */
export interface AzureFirewallNatRuleCollectionResponse {
    /**
     * The action type of a NAT rule collection.
     */
    action?: AzureFirewallNatRCActionResponse;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The name of the resource that is unique within the Azure firewall. This name can be used to access the resource.
     */
    name?: string;
    /**
     * Priority of the NAT rule collection resource.
     */
    priority?: number;
    /**
     * The provisioning state of the NAT rule collection resource.
     */
    provisioningState: string;
    /**
     * Collection of rules used by a NAT rule collection.
     */
    rules?: AzureFirewallNatRuleResponse[];
}

/**
 * Properties of a NAT rule.
 */
export interface AzureFirewallNatRuleResponse {
    /**
     * Description of the rule.
     */
    description?: string;
    /**
     * List of destination IP addresses for this rule. Supports IP ranges, prefixes, and service tags.
     */
    destinationAddresses?: string[];
    /**
     * List of destination ports.
     */
    destinationPorts?: string[];
    /**
     * Name of the NAT rule.
     */
    name?: string;
    /**
     * Array of AzureFirewallNetworkRuleProtocols applicable to this NAT rule.
     */
    protocols?: string[];
    /**
     * List of source IP addresses for this rule.
     */
    sourceAddresses?: string[];
    /**
     * List of source IpGroups for this rule.
     */
    sourceIpGroups?: string[];
    /**
     * The translated address for this NAT rule.
     */
    translatedAddress?: string;
    /**
     * The translated FQDN for this NAT rule.
     */
    translatedFqdn?: string;
    /**
     * The translated port for this NAT rule.
     */
    translatedPort?: string;
}

/**
 * Network rule collection resource.
 */
export interface AzureFirewallNetworkRuleCollectionResponse {
    /**
     * The action type of a rule collection.
     */
    action?: AzureFirewallRCActionResponse;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The name of the resource that is unique within the Azure firewall. This name can be used to access the resource.
     */
    name?: string;
    /**
     * Priority of the network rule collection resource.
     */
    priority?: number;
    /**
     * The provisioning state of the network rule collection resource.
     */
    provisioningState: string;
    /**
     * Collection of rules used by a network rule collection.
     */
    rules?: AzureFirewallNetworkRuleResponse[];
}

/**
 * Properties of the network rule.
 */
export interface AzureFirewallNetworkRuleResponse {
    /**
     * Description of the rule.
     */
    description?: string;
    /**
     * List of destination IP addresses.
     */
    destinationAddresses?: string[];
    /**
     * List of destination FQDNs.
     */
    destinationFqdns?: string[];
    /**
     * List of destination IpGroups for this rule.
     */
    destinationIpGroups?: string[];
    /**
     * List of destination ports.
     */
    destinationPorts?: string[];
    /**
     * Name of the network rule.
     */
    name?: string;
    /**
     * Array of AzureFirewallNetworkRuleProtocols.
     */
    protocols?: string[];
    /**
     * List of source IP addresses for this rule.
     */
    sourceAddresses?: string[];
    /**
     * List of source IpGroups for this rule.
     */
    sourceIpGroups?: string[];
}

/**
 * Public IP Address associated with azure firewall.
 */
export interface AzureFirewallPublicIPAddressResponse {
    /**
     * Public IP Address value.
     */
    address?: string;
}

/**
 * Properties of the AzureFirewallRCAction.
 */
export interface AzureFirewallRCActionResponse {
    /**
     * The type of action.
     */
    type?: string;
}

/**
 * SKU of an Azure Firewall.
 */
export interface AzureFirewallSkuResponse {
    /**
     * Name of an Azure Firewall SKU.
     */
    name?: string;
    /**
     * Tier of an Azure Firewall.
     */
    tier?: string;
}

/**
 * Pool of backend IP addresses.
 */
export interface BackendAddressPoolResponse {
    /**
     * An array of references to IP addresses defined in network interfaces.
     */
    backendIPConfigurations: NetworkInterfaceIPConfigurationResponse[];
    /**
     * Amount of seconds Load Balancer waits for before sending RESET to client and backend address.
     */
    drainPeriodInSeconds?: number;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * An array of references to inbound NAT rules that use this backend address pool.
     */
    inboundNatRules: SubResourceResponse[];
    /**
     * An array of backend addresses.
     */
    loadBalancerBackendAddresses?: LoadBalancerBackendAddressResponse[];
    /**
     * An array of references to load balancing rules that use this backend address pool.
     */
    loadBalancingRules: SubResourceResponse[];
    /**
     * The location of the backend address pool.
     */
    location?: string;
    /**
     * The name of the resource that is unique within the set of backend address pools used by the load balancer. This name can be used to access the resource.
     */
    name?: string;
    /**
     * A reference to an outbound rule that uses this backend address pool.
     */
    outboundRule: SubResourceResponse;
    /**
     * An array of references to outbound rules that use this backend address pool.
     */
    outboundRules: SubResourceResponse[];
    /**
     * The provisioning state of the backend address pool resource.
     */
    provisioningState: string;
    /**
     * Backend address synchronous mode for the backend pool
     */
    syncMode?: string;
    /**
     * An array of gateway load balancer tunnel interfaces.
     */
    tunnelInterfaces?: GatewayLoadBalancerTunnelInterfaceResponse[];
    /**
     * Type of the resource.
     */
    type: string;
    /**
     * A reference to a virtual network.
     */
    virtualNetwork?: SubResourceResponse;
}

/**
 * The session detail for a target.
 */
export interface BastionActiveSessionResponse {
    /**
     * The protocol used to connect to the target.
     */
    protocol: string;
    /**
     * The type of the resource.
     */
    resourceType: string;
    /**
     * Duration in mins the session has been active.
     */
    sessionDurationInMins: number;
    /**
     * A unique id for the session.
     */
    sessionId: string;
    /**
     * The time when the session started.
     */
    startTime: any;
    /**
     * The host name of the target.
     */
    targetHostName: string;
    /**
     * The IP Address of the target.
     */
    targetIpAddress: string;
    /**
     * The resource group of the target.
     */
    targetResourceGroup: string;
    /**
     * The resource id of the target.
     */
    targetResourceId: string;
    /**
     * The subscription id for the target virtual machine.
     */
    targetSubscriptionId: string;
    /**
     * The user name who is active on this session.
     */
    userName: string;
}

/**
 * IP configuration of an Bastion Host.
 */
export interface BastionHostIPConfigurationResponse {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * Private IP allocation method.
     */
    privateIPAllocationMethod?: string;
    /**
     * The provisioning state of the bastion host IP configuration resource.
     */
    provisioningState: string;
    /**
     * Reference of the PublicIP resource. Null for private only bastion
     */
    publicIPAddress?: SubResourceResponse;
    /**
     * Reference of the subnet resource.
     */
    subnet: SubResourceResponse;
    /**
     * Ip configuration type.
     */
    type: string;
}

export interface BastionHostPropertiesFormatResponseNetworkAcls {
    /**
     * Sets the IP ACL rules for Developer Bastion Host.
     */
    ipRules?: IPRuleResponse[];
}

/**
 * Bastion Shareable Link.
 */
export interface BastionShareableLinkResponse {
    /**
     * The unique Bastion Shareable Link to the virtual machine.
     */
    bsl: string;
    /**
     * The time when the link was created.
     */
    createdAt: string;
    /**
     * Optional field indicating the warning or error message related to the vm in case of partial failure.
     */
    message: string;
    /**
     * Reference of the virtual machine resource.
     */
    vm: VMResponse;
}

/**
 * BGP peer status details.
 */
export interface BgpPeerStatusResponse {
    /**
     * The autonomous system number of the remote BGP peer.
     */
    asn: number;
    /**
     * For how long the peering has been up.
     */
    connectedDuration: string;
    /**
     * The virtual network gateway's local address.
     */
    localAddress: string;
    /**
     * The number of BGP messages received.
     */
    messagesReceived: number;
    /**
     * The number of BGP messages sent.
     */
    messagesSent: number;
    /**
     * The remote BGP peer.
     */
    neighbor: string;
    /**
     * The number of routes learned from this peer.
     */
    routesReceived: number;
    /**
     * The BGP peer state.
     */
    state: string;
}

/**
 * BGP settings details.
 */
export interface BgpSettingsResponse {
    /**
     * The BGP speaker's ASN.
     */
    asn?: number;
    /**
     * The BGP peering address and BGP identifier of this BGP speaker.
     */
    bgpPeeringAddress?: string;
    /**
     * BGP peering address with IP configuration ID for virtual network gateway.
     */
    bgpPeeringAddresses?: IPConfigurationBgpPeeringAddressResponse[];
    /**
     * The weight added to routes learned from this BGP speaker.
     */
    peerWeight?: number;
}

/**
 * Network Virtual Appliance Sku Properties.
 */
export interface BreakOutCategoryPoliciesResponse {
    /**
     * Flag to control breakout of o365 allow category.
     */
    allow?: boolean;
    /**
     * Flag to control breakout of o365 default category.
     */
    default?: boolean;
    /**
     * Flag to control breakout of o365 optimize category.
     */
    optimize?: boolean;
}

/**
 * The network configuration group resource
 */
export interface ConfigurationGroupResponse {
    /**
     * Network group conditional filter.
     */
    conditionalMembership?: string;
    /**
     * A description of the network group.
     */
    description?: string;
    /**
     * A friendly name for the network group.
     */
    displayName?: string;
    /**
     * Group members of network group.
     */
    groupMembers?: GroupMembersItemResponse[];
    /**
     * Network group ID.
     */
    id?: string;
    /**
     * The type of the group member.
     */
    memberType?: string;
    /**
     * The provisioning state of the scope assignment resource.
     */
    provisioningState: string;
    /**
     * Unique identifier for this resource.
     */
    resourceGuid: string;
}

/**
 * Describes the destination of connection monitor.
 */
export interface ConnectionMonitorDestinationResponse {
    /**
     * Address of the connection monitor destination (IP or domain name).
     */
    address?: string;
    /**
     * The destination port used by connection monitor.
     */
    port?: number;
    /**
     * The ID of the resource used as the destination by connection monitor.
     */
    resourceId?: string;
}

/**
 * Describes the connection monitor endpoint filter item.
 */
export interface ConnectionMonitorEndpointFilterItemResponse {
    /**
     * The address of the filter item.
     */
    address?: string;
    /**
     * The type of item included in the filter. Currently only 'AgentAddress' is supported.
     */
    type?: string;
}

/**
 * Describes the connection monitor endpoint filter.
 */
export interface ConnectionMonitorEndpointFilterResponse {
    /**
     * List of items in the filter.
     */
    items?: ConnectionMonitorEndpointFilterItemResponse[];
    /**
     * The behavior of the endpoint filter. Currently only 'Include' is supported.
     */
    type?: string;
}

/**
 * Connection monitor endpoint location details only being used for 'AzureArcNetwork' type endpoints, which contains the region details.
 */
export interface ConnectionMonitorEndpointLocationDetailsResponse {
    /**
     * Region for connection monitor endpoint.
     */
    region?: string;
}

/**
 * Describes the connection monitor endpoint.
 */
export interface ConnectionMonitorEndpointResponse {
    /**
     * Address of the connection monitor endpoint. Supported for AzureVM, ExternalAddress, ArcMachine, MMAWorkspaceMachine endpoint type.
     */
    address?: string;
    /**
     * Test coverage for the endpoint.
     */
    coverageLevel?: string;
    /**
     * Filter field is getting deprecated and should not be used. Instead use Include/Exclude scope fields for it.
     */
    filter?: ConnectionMonitorEndpointFilterResponse;
    /**
     * Location details is optional and only being used for 'AzureArcNetwork' type endpoints, which contains region details.
     */
    locationDetails?: ConnectionMonitorEndpointLocationDetailsResponse;
    /**
     * The name of the connection monitor endpoint.
     */
    name: string;
    /**
     * Resource ID of the connection monitor endpoint are supported for AzureVM, AzureVMSS, AzureVNet, AzureSubnet, MMAWorkspaceMachine, MMAWorkspaceNetwork, AzureArcVM endpoint type.
     */
    resourceId?: string;
    /**
     * Endpoint scope defines which target resource to monitor in case of compound resource endpoints like VMSS, AzureSubnet, AzureVNet, MMAWorkspaceNetwork, AzureArcNetwork.
     */
    scope?: ConnectionMonitorEndpointScopeResponse;
    /**
     * Subscription ID for connection monitor endpoint. It's an optional parameter which is being used for 'AzureArcNetwork' type endpoint.
     */
    subscriptionId?: string;
    /**
     * The endpoint type.
     */
    type?: string;
}

/**
 * Describes the connection monitor endpoint scope item.
 */
export interface ConnectionMonitorEndpointScopeItemResponse {
    /**
     * The address of the endpoint item. Supported types are IPv4/IPv6 subnet mask or IPv4/IPv6 IP address.
     */
    address?: string;
}

/**
 * Describes the connection monitor endpoint scope.
 */
export interface ConnectionMonitorEndpointScopeResponse {
    /**
     * List of items which needs to be excluded from the endpoint scope.
     */
    exclude?: ConnectionMonitorEndpointScopeItemResponse[];
    /**
     * List of items which needs to be included to the endpoint scope.
     */
    include?: ConnectionMonitorEndpointScopeItemResponse[];
}

/**
 * Describes the HTTP configuration.
 */
export interface ConnectionMonitorHttpConfigurationResponse {
    /**
     * The HTTP method to use.
     */
    method?: string;
    /**
     * The path component of the URI. For instance, "/dir1/dir2".
     */
    path?: string;
    /**
     * The port to connect to.
     */
    port?: number;
    /**
     * Value indicating whether HTTPS is preferred over HTTP in cases where the choice is not explicit.
     */
    preferHTTPS?: boolean;
    /**
     * The HTTP headers to transmit with the request.
     */
    requestHeaders?: HTTPHeaderResponse[];
    /**
     * HTTP status codes to consider successful. For instance, "2xx,301-304,418".
     */
    validStatusCodeRanges?: string[];
}

/**
 * Describes the ICMP configuration.
 */
export interface ConnectionMonitorIcmpConfigurationResponse {
    /**
     * Value indicating whether path evaluation with trace route should be disabled.
     */
    disableTraceRoute?: boolean;
}

/**
 * Describes a connection monitor output destination.
 */
export interface ConnectionMonitorOutputResponse {
    /**
     * Connection monitor output destination type. Currently, only "Workspace" is supported.
     */
    type?: string;
    /**
     * Describes the settings for producing output into a log analytics workspace.
     */
    workspaceSettings?: ConnectionMonitorWorkspaceSettingsResponse;
}

/**
 * Describes the source of connection monitor.
 */
export interface ConnectionMonitorSourceResponse {
    /**
     * The source port used by connection monitor.
     */
    port?: number;
    /**
     * The ID of the resource used as the source by connection monitor.
     */
    resourceId: string;
}

/**
 * Describes the threshold for declaring a test successful.
 */
export interface ConnectionMonitorSuccessThresholdResponse {
    /**
     * The maximum percentage of failed checks permitted for a test to evaluate as successful.
     */
    checksFailedPercent?: number;
    /**
     * The maximum round-trip time in milliseconds permitted for a test to evaluate as successful.
     */
    roundTripTimeMs?: number;
}

/**
 * Describes the TCP configuration.
 */
export interface ConnectionMonitorTcpConfigurationResponse {
    /**
     * Destination port behavior.
     */
    destinationPortBehavior?: string;
    /**
     * Value indicating whether path evaluation with trace route should be disabled.
     */
    disableTraceRoute?: boolean;
    /**
     * The port to connect to.
     */
    port?: number;
}

/**
 * Describes a connection monitor test configuration.
 */
export interface ConnectionMonitorTestConfigurationResponse {
    /**
     * The parameters used to perform test evaluation over HTTP.
     */
    httpConfiguration?: ConnectionMonitorHttpConfigurationResponse;
    /**
     * The parameters used to perform test evaluation over ICMP.
     */
    icmpConfiguration?: ConnectionMonitorIcmpConfigurationResponse;
    /**
     * The name of the connection monitor test configuration.
     */
    name: string;
    /**
     * The preferred IP version to use in test evaluation. The connection monitor may choose to use a different version depending on other parameters.
     */
    preferredIPVersion?: string;
    /**
     * The protocol to use in test evaluation.
     */
    protocol: string;
    /**
     * The threshold for declaring a test successful.
     */
    successThreshold?: ConnectionMonitorSuccessThresholdResponse;
    /**
     * The parameters used to perform test evaluation over TCP.
     */
    tcpConfiguration?: ConnectionMonitorTcpConfigurationResponse;
    /**
     * The frequency of test evaluation, in seconds.
     */
    testFrequencySec?: number;
}

/**
 * Describes the connection monitor test group.
 */
export interface ConnectionMonitorTestGroupResponse {
    /**
     * List of destination endpoint names.
     */
    destinations: string[];
    /**
     * Value indicating whether test group is disabled.
     */
    disable?: boolean;
    /**
     * The name of the connection monitor test group.
     */
    name: string;
    /**
     * List of source endpoint names.
     */
    sources: string[];
    /**
     * List of test configuration names.
     */
    testConfigurations: string[];
}

/**
 * Describes the settings for producing output into a log analytics workspace.
 */
export interface ConnectionMonitorWorkspaceSettingsResponse {
    /**
     * Log analytics workspace resource ID.
     */
    workspaceResourceId?: string;
}

/**
 * Connectivity group item.
 */
export interface ConnectivityGroupItemResponse {
    /**
     * Group connectivity type.
     */
    groupConnectivity: string;
    /**
     * Flag if global is supported.
     */
    isGlobal?: string;
    /**
     * Network group Id.
     */
    networkGroupId: string;
    /**
     * Flag if need to use hub gateway.
     */
    useHubGateway?: string;
}

/**
 * Container network interface configuration child resource.
 */
export interface ContainerNetworkInterfaceConfigurationResponse {
    /**
     * A list of container network interfaces created from this container network interface configuration.
     */
    containerNetworkInterfaces?: SubResourceResponse[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * A list of ip configurations of the container network interface configuration.
     */
    ipConfigurations?: IPConfigurationProfileResponse[];
    /**
     * The name of the resource. This name can be used to access the resource.
     */
    name?: string;
    /**
     * The provisioning state of the container network interface configuration resource.
     */
    provisioningState: string;
    /**
     * Sub Resource type.
     */
    type: string;
}

/**
 * The ip configuration for a container network interface.
 */
export interface ContainerNetworkInterfaceIpConfigurationResponse {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * The name of the resource. This name can be used to access the resource.
     */
    name?: string;
    /**
     * The provisioning state of the container network interface IP configuration resource.
     */
    provisioningState: string;
    /**
     * Sub Resource type.
     */
    type: string;
}

/**
 * Container network interface child resource.
 */
export interface ContainerNetworkInterfaceResponse {
    /**
     * Reference to the container to which this container network interface is attached.
     */
    container?: ContainerResponse;
    /**
     * Container network interface configuration from which this container network interface is created.
     */
    containerNetworkInterfaceConfiguration: ContainerNetworkInterfaceConfigurationResponse;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Reference to the ip configuration on this container nic.
     */
    ipConfigurations: ContainerNetworkInterfaceIpConfigurationResponse[];
    /**
     * The name of the resource. This name can be used to access the resource.
     */
    name?: string;
    /**
     * The provisioning state of the container network interface resource.
     */
    provisioningState: string;
    /**
     * Sub Resource type.
     */
    type: string;
}

/**
 * Reference to container resource in remote resource provider.
 */
export interface ContainerResponse {
    /**
     * Resource ID.
     */
    id?: string;
}

/**
 * A matching criteria which matches routes based on route prefix, community, and AS path.
 */
export interface CriterionResponse {
    /**
     * List of AS paths which this criteria matches.
     */
    asPath?: string[];
    /**
     * List of BGP communities which this criteria matches.
     */
    community?: string[];
    /**
     * Match condition to apply RouteMap rules.
     */
    matchCondition?: string;
    /**
     * List of route prefixes which this criteria matches.
     */
    routePrefix?: string[];
}

/**
 * Cross tenant scopes.
 */
export interface CrossTenantScopesResponse {
    /**
     * List of management groups.
     */
    managementGroups: string[];
    /**
     * List of subscriptions.
     */
    subscriptions: string[];
    /**
     * Tenant ID.
     */
    tenantId: string;
}

/**
 * Contains custom Dns resolution configuration from customer.
 */
export interface CustomDnsConfigPropertiesFormatResponse {
    /**
     * Fqdn that resolves to private endpoint ip address.
     */
    fqdn?: string;
    /**
     * A list of private ip addresses of the private endpoint.
     */
    ipAddresses?: string[];
}

/**
 * Contains the DDoS protection settings of the public IP.
 */
export interface DdosSettingsResponse {
    /**
     * The DDoS custom policy associated with the public IP.
     */
    ddosCustomPolicy?: SubResourceResponse;
    /**
     * The DDoS protection plan associated with the public IP. Can only be set if ProtectionMode is Enabled
     */
    ddosProtectionPlan?: SubResourceResponse;
    /**
     * The DDoS protection policy customizability of the public IP. Only standard coverage will have the ability to be customized.
     */
    protectionCoverage?: string;
    /**
     * The DDoS protection mode of the public IP
     */
    protectionMode?: string;
}

/**
 * Properties of the delegation.
 */
export interface DelegationPropertiesResponse {
    /**
     * The current provisioning state.
     */
    provisioningState: string;
    /**
     * The service name to which the NVA is delegated.
     */
    serviceName?: string;
}

/**
 * Details the service to which the subnet is delegated.
 */
export interface DelegationResponse {
    /**
     * The actions permitted to the service upon delegation.
     */
    actions: string[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The name of the resource that is unique within a subnet. This name can be used to access the resource.
     */
    name?: string;
    /**
     * The provisioning state of the service delegation resource.
     */
    provisioningState: string;
    /**
     * The name of the service to whom the subnet should be delegated (e.g. Microsoft.Sql/servers).
     */
    serviceName?: string;
    /**
     * Resource type.
     */
    type?: string;
}

/**
 * List of properties of the device.
 */
export interface DevicePropertiesResponse {
    /**
     * Model of the device.
     */
    deviceModel?: string;
    /**
     * Name of the device Vendor.
     */
    deviceVendor?: string;
    /**
     * Link speed.
     */
    linkSpeedInMbps?: number;
}

/**
 * DhcpOptions contains an array of DNS servers available to VMs deployed in the virtual network. Standard DHCP option for a subnet overrides VNET DHCP options.
 */
export interface DhcpOptionsResponse {
    /**
     * The list of DNS servers IP addresses.
     */
    dnsServers?: string[];
}

/**
 * DNS Proxy Settings in Firewall Policy.
 */
export interface DnsSettingsResponse {
    /**
     * Enable DNS Proxy on Firewalls attached to the Firewall Policy.
     */
    enableProxy?: boolean;
    /**
     * FQDNs in Network Rules are supported when set to true.
     */
    requireProxyForNetworkRules?: boolean;
    /**
     * List of Custom DNS Servers.
     */
    servers?: string[];
}

/**
 * The network manager effective connectivity configuration
 */
export interface EffectiveConnectivityConfigurationResponse {
    /**
     * Groups for configuration
     */
    appliesToGroups: ConnectivityGroupItemResponse[];
    /**
     * Effective configuration groups.
     */
    configurationGroups?: ConfigurationGroupResponse[];
    /**
     * Connectivity topology type.
     */
    connectivityTopology: string;
    /**
     * Flag if need to remove current existing peerings.
     */
    deleteExistingPeering?: string;
    /**
     * A description of the connectivity configuration.
     */
    description?: string;
    /**
     * A friendly name for the resource.
     */
    displayName?: string;
    /**
     * List of hubItems
     */
    hubs?: HubResponse[];
    /**
     * Connectivity configuration ID.
     */
    id?: string;
    /**
     * Flag if global mesh is supported.
     */
    isGlobal?: string;
    /**
     * The provisioning state of the connectivity configuration resource.
     */
    provisioningState: string;
    /**
     * Unique identifier for this resource.
     */
    resourceGuid: string;
}

/**
 * Network default admin rule.
 */
export interface EffectiveDefaultSecurityAdminRuleResponse {
    /**
     * Indicates the access allowed for this particular rule
     */
    access: string;
    /**
     * A description of the security admin configuration.
     */
    configurationDescription?: string;
    /**
     * A display name of the security admin configuration.
     */
    configurationDisplayName?: string;
    /**
     * A description for this rule. Restricted to 140 chars.
     */
    description: string;
    /**
     * The destination port ranges.
     */
    destinationPortRanges: string[];
    /**
     * The destination address prefixes. CIDR or destination IP ranges.
     */
    destinations: AddressPrefixItemResponse[];
    /**
     * Indicates if the traffic matched against the rule in inbound or outbound.
     */
    direction: string;
    /**
     * A friendly name for the rule.
     */
    displayName?: string;
    /**
     * Default rule flag.
     */
    flag?: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Whether the rule is custom or default.
     * Expected value is 'Default'.
     */
    kind: "Default";
    /**
     * The priority of the rule. The value can be between 1 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
     */
    priority: number;
    /**
     * Network protocol this rule applies to.
     */
    protocol: string;
    /**
     * The provisioning state of the resource.
     */
    provisioningState: string;
    /**
     * Unique identifier for this resource.
     */
    resourceGuid: string;
    /**
     * Groups for rule collection
     */
    ruleCollectionAppliesToGroups?: NetworkManagerSecurityGroupItemResponse[];
    /**
     * A description of the rule collection.
     */
    ruleCollectionDescription?: string;
    /**
     * A display name of the rule collection.
     */
    ruleCollectionDisplayName?: string;
    /**
     * Effective configuration groups.
     */
    ruleGroups?: ConfigurationGroupResponse[];
    /**
     * The source port ranges.
     */
    sourcePortRanges: string[];
    /**
     * The CIDR or source IP ranges.
     */
    sources: AddressPrefixItemResponse[];
}

/**
 * Network admin rule.
 */
export interface EffectiveSecurityAdminRuleResponse {
    /**
     * Indicates the access allowed for this particular rule
     */
    access: string;
    /**
     * A description of the security admin configuration.
     */
    configurationDescription?: string;
    /**
     * A display name of the security admin configuration.
     */
    configurationDisplayName?: string;
    /**
     * A description for this rule. Restricted to 140 chars.
     */
    description?: string;
    /**
     * The destination port ranges.
     */
    destinationPortRanges?: string[];
    /**
     * The destination address prefixes. CIDR or destination IP ranges.
     */
    destinations?: AddressPrefixItemResponse[];
    /**
     * Indicates if the traffic matched against the rule in inbound or outbound.
     */
    direction: string;
    /**
     * A friendly name for the rule.
     */
    displayName?: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Whether the rule is custom or default.
     * Expected value is 'Custom'.
     */
    kind: "Custom";
    /**
     * The priority of the rule. The value can be between 1 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
     */
    priority: number;
    /**
     * Network protocol this rule applies to.
     */
    protocol: string;
    /**
     * The provisioning state of the resource.
     */
    provisioningState: string;
    /**
     * Unique identifier for this resource.
     */
    resourceGuid: string;
    /**
     * Groups for rule collection
     */
    ruleCollectionAppliesToGroups?: NetworkManagerSecurityGroupItemResponse[];
    /**
     * A description of the rule collection.
     */
    ruleCollectionDescription?: string;
    /**
     * A display name of the rule collection.
     */
    ruleCollectionDisplayName?: string;
    /**
     * Effective configuration groups.
     */
    ruleGroups?: ConfigurationGroupResponse[];
    /**
     * The source port ranges.
     */
    sourcePortRanges?: string[];
    /**
     * The CIDR or source IP ranges.
     */
    sources?: AddressPrefixItemResponse[];
}

/**
 * Effective Virtual Network
 */
export interface EffectiveVirtualNetworkResponse {
    /**
     * Effective vnet Id.
     */
    id?: string;
    /**
     * Location of vnet.
     */
    location?: string;
    /**
     * Membership Type.
     */
    membershipType?: string;
}

/**
 * Identifies the service being brought into the virtual network.
 */
export interface EndpointServiceResponse {
    /**
     * A unique identifier of the service being referenced by the interface endpoint.
     */
    id?: string;
}

/**
 * Adds exception to allow a request when the condition is satisfied.
 */
export interface ExceptionEntryResponse {
    /**
     * The managed rule sets that are associated with the exception.
     */
    exceptionManagedRuleSets?: ExclusionManagedRuleSetResponse[];
    /**
     * The variable on which we evaluate the exception condition
     */
    matchVariable: string;
    /**
     * When the matchVariable points to a key-value pair (e.g, RequestHeader), this identifies the key.
     */
    selector?: string;
    /**
     * When the matchVariable points to a key-value pair (e.g, RequestHeader), this operates on the selector
     */
    selectorMatchOperator?: string;
    /**
     * Operates on the allowed values for the matchVariable
     */
    valueMatchOperator: string;
    /**
     * Allowed values for the matchVariable
     */
    values?: string[];
}

/**
 * Defines a managed rule group to use for exclusion.
 */
export interface ExclusionManagedRuleGroupResponse {
    /**
     * The managed rule group for exclusion.
     */
    ruleGroupName: string;
    /**
     * List of rules that will be excluded. If none specified, all rules in the group will be excluded.
     */
    rules?: ExclusionManagedRuleResponse[];
}

/**
 * Defines a managed rule to use for exclusion.
 */
export interface ExclusionManagedRuleResponse {
    /**
     * Identifier for the managed rule.
     */
    ruleId: string;
}

/**
 * Defines a managed rule set for Exclusions.
 */
export interface ExclusionManagedRuleSetResponse {
    /**
     * Defines the rule groups to apply to the rule set.
     */
    ruleGroups?: ExclusionManagedRuleGroupResponse[];
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
 * Explicit Proxy Settings in Firewall Policy.
 */
export interface ExplicitProxyResponse {
    /**
     * When set to true, explicit proxy mode is enabled.
     */
    enableExplicitProxy?: boolean;
    /**
     * When set to true, pac file port and url needs to be provided.
     */
    enablePacFile?: boolean;
    /**
     * Port number for explicit proxy http protocol, cannot be greater than 64000.
     */
    httpPort?: number;
    /**
     * Port number for explicit proxy https protocol, cannot be greater than 64000.
     */
    httpsPort?: number;
    /**
     * SAS URL for PAC file.
     */
    pacFile?: string;
    /**
     * Port number for firewall to serve PAC file.
     */
    pacFilePort?: number;
}

/**
 * Authorization in an ExpressRouteCircuit resource.
 */
export interface ExpressRouteCircuitAuthorizationResponse {
    /**
     * The authorization key.
     */
    authorizationKey?: string;
    /**
     * The authorization use status.
     */
    authorizationUseStatus?: string;
    /**
     * The reference to the ExpressRoute connection resource using the authorization.
     */
    connectionResourceUri: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * The provisioning state of the authorization resource.
     */
    provisioningState: string;
    /**
     * Type of the resource.
     */
    type: string;
}

/**
 * Express Route Circuit Connection in an ExpressRouteCircuitPeering resource.
 */
export interface ExpressRouteCircuitConnectionResponse {
    /**
     * /29 IP address space to carve out Customer addresses for tunnels.
     */
    addressPrefix?: string;
    /**
     * The authorization key.
     */
    authorizationKey?: string;
    /**
     * Express Route Circuit connection state.
     */
    circuitConnectionStatus: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Reference to Express Route Circuit Private Peering Resource of the circuit initiating connection.
     */
    expressRouteCircuitPeering?: SubResourceResponse;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * IPv6 Address PrefixProperties of the express route circuit connection.
     */
    ipv6CircuitConnectionConfig?: Ipv6CircuitConnectionConfigResponse;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * Reference to Express Route Circuit Private Peering Resource of the peered circuit.
     */
    peerExpressRouteCircuitPeering?: SubResourceResponse;
    /**
     * The provisioning state of the express route circuit connection resource.
     */
    provisioningState: string;
    /**
     * Type of the resource.
     */
    type: string;
}

/**
 * Specifies the peering configuration.
 */
export interface ExpressRouteCircuitPeeringConfigResponse {
    /**
     * The communities of bgp peering. Specified for microsoft peering.
     */
    advertisedCommunities?: string[];
    /**
     * The reference to AdvertisedPublicPrefixes.
     */
    advertisedPublicPrefixes?: string[];
    /**
     * The advertised public prefix state of the Peering resource.
     */
    advertisedPublicPrefixesState: string;
    /**
     * The CustomerASN of the peering.
     */
    customerASN?: number;
    /**
     * The legacy mode of the peering.
     */
    legacyMode?: number;
    /**
     * The RoutingRegistryName of the configuration.
     */
    routingRegistryName?: string;
}

/**
 * ExpressRoute circuit peering identifier.
 */
export interface ExpressRouteCircuitPeeringIdResponse {
    /**
     * The ID of the ExpressRoute circuit peering.
     */
    id?: string;
}

/**
 * Peering in an ExpressRouteCircuit resource.
 */
export interface ExpressRouteCircuitPeeringResponse {
    /**
     * The Azure ASN.
     */
    azureASN?: number;
    /**
     * The list of circuit connections associated with Azure Private Peering for this circuit.
     */
    connections?: ExpressRouteCircuitConnectionResponse[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * The ExpressRoute connection.
     */
    expressRouteConnection?: ExpressRouteConnectionIdResponse;
    /**
     * The GatewayManager Etag.
     */
    gatewayManagerEtag?: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The IPv6 peering configuration.
     */
    ipv6PeeringConfig?: Ipv6ExpressRouteCircuitPeeringConfigResponse;
    /**
     * Who was the last to modify the peering.
     */
    lastModifiedBy: string;
    /**
     * The Microsoft peering configuration.
     */
    microsoftPeeringConfig?: ExpressRouteCircuitPeeringConfigResponse;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * The peer ASN.
     */
    peerASN?: number;
    /**
     * The list of peered circuit connections associated with Azure Private Peering for this circuit.
     */
    peeredConnections: PeerExpressRouteCircuitConnectionResponse[];
    /**
     * The peering type.
     */
    peeringType?: string;
    /**
     * The primary port.
     */
    primaryAzurePort?: string;
    /**
     * The primary address prefix.
     */
    primaryPeerAddressPrefix?: string;
    /**
     * The provisioning state of the express route circuit peering resource.
     */
    provisioningState: string;
    /**
     * The reference to the RouteFilter resource.
     */
    routeFilter?: SubResourceResponse;
    /**
     * The secondary port.
     */
    secondaryAzurePort?: string;
    /**
     * The secondary address prefix.
     */
    secondaryPeerAddressPrefix?: string;
    /**
     * The shared key.
     */
    sharedKey?: string;
    /**
     * The peering state.
     */
    state?: string;
    /**
     * The peering stats of express route circuit.
     */
    stats?: ExpressRouteCircuitStatsResponse;
    /**
     * Type of the resource.
     */
    type: string;
    /**
     * The VLAN ID.
     */
    vlanId?: number;
}

/**
 * Contains ServiceProviderProperties in an ExpressRouteCircuit.
 */
export interface ExpressRouteCircuitServiceProviderPropertiesResponse {
    /**
     * The BandwidthInMbps.
     */
    bandwidthInMbps?: number;
    /**
     * The peering location.
     */
    peeringLocation?: string;
    /**
     * The serviceProviderName.
     */
    serviceProviderName?: string;
}

/**
 * Contains SKU in an ExpressRouteCircuit.
 */
export interface ExpressRouteCircuitSkuResponse {
    /**
     * The family of the SKU.
     */
    family?: string;
    /**
     * The name of the SKU.
     */
    name?: string;
    /**
     * The tier of the SKU.
     */
    tier?: string;
}

/**
 * Contains stats associated with the peering.
 */
export interface ExpressRouteCircuitStatsResponse {
    /**
     * The Primary BytesIn of the peering.
     */
    primarybytesIn?: number;
    /**
     * The primary BytesOut of the peering.
     */
    primarybytesOut?: number;
    /**
     * The secondary BytesIn of the peering.
     */
    secondarybytesIn?: number;
    /**
     * The secondary BytesOut of the peering.
     */
    secondarybytesOut?: number;
}

/**
 * The ID of the ExpressRouteConnection.
 */
export interface ExpressRouteConnectionIdResponse {
    /**
     * The ID of the ExpressRouteConnection.
     */
    id: string;
}

/**
 * ExpressRouteConnection resource.
 */
export interface ExpressRouteConnectionResponse {
    /**
     * Authorization key to establish the connection.
     */
    authorizationKey?: string;
    /**
     * Enable internet security.
     */
    enableInternetSecurity?: boolean;
    /**
     * Bypass the ExpressRoute gateway when accessing private-links. ExpressRoute FastPath (expressRouteGatewayBypass) must be enabled.
     */
    enablePrivateLinkFastPath?: boolean;
    /**
     * The ExpressRoute circuit peering.
     */
    expressRouteCircuitPeering: ExpressRouteCircuitPeeringIdResponse;
    /**
     * Enable FastPath to vWan Firewall hub.
     */
    expressRouteGatewayBypass?: boolean;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The name of the resource.
     */
    name: string;
    /**
     * The provisioning state of the express route connection resource.
     */
    provisioningState: string;
    /**
     * The Routing Configuration indicating the associated and propagated route tables on this connection.
     */
    routingConfiguration?: RoutingConfigurationResponse;
    /**
     * The routing weight associated to the connection.
     */
    routingWeight?: number;
}

/**
 * Configuration for auto scaling.
 */
export interface ExpressRouteGatewayPropertiesResponseAutoScaleConfiguration {
    /**
     * Minimum and maximum number of scale units to deploy.
     */
    bounds?: ExpressRouteGatewayPropertiesResponseBounds;
}

/**
 * Minimum and maximum number of scale units to deploy.
 */
export interface ExpressRouteGatewayPropertiesResponseBounds {
    /**
     * Maximum number of scale units deployed for ExpressRoute gateway.
     */
    max?: number;
    /**
     * Minimum number of scale units deployed for ExpressRoute gateway.
     */
    min?: number;
}

/**
 * ExpressRouteLink Mac Security Configuration.
 */
export interface ExpressRouteLinkMacSecConfigResponse {
    /**
     * Keyvault Secret Identifier URL containing Mac security CAK key.
     */
    cakSecretIdentifier?: string;
    /**
     * Mac security cipher.
     */
    cipher?: string;
    /**
     * Keyvault Secret Identifier URL containing Mac security CKN key.
     */
    cknSecretIdentifier?: string;
    /**
     * Sci mode enabled/disabled.
     */
    sciState?: string;
}

/**
 * ExpressRouteLink child resource definition.
 */
export interface ExpressRouteLinkResponse {
    /**
     * Administrative state of the physical port.
     */
    adminState?: string;
    /**
     * Cololocation for ExpressRoute Hybrid Direct.
     */
    coloLocation: string;
    /**
     * Physical fiber port type.
     */
    connectorType: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Name of Azure router interface.
     */
    interfaceName: string;
    /**
     * MacSec configuration.
     */
    macSecConfig?: ExpressRouteLinkMacSecConfigResponse;
    /**
     * Name of child port resource that is unique among child port resources of the parent.
     */
    name?: string;
    /**
     * Mapping between physical port to patch panel port.
     */
    patchPanelId: string;
    /**
     * The provisioning state of the express route link resource.
     */
    provisioningState: string;
    /**
     * Mapping of physical patch panel to rack.
     */
    rackId: string;
    /**
     * Name of Azure router associated with physical port.
     */
    routerName: string;
}

/**
 * ExtendedLocation complex type.
 */
export interface ExtendedLocationResponse {
    /**
     * The name of the extended location.
     */
    name?: string;
    /**
     * The type of the extended location.
     */
    type?: string;
}

/**
 * Trusted Root certificates properties for tls.
 */
export interface FirewallPolicyCertificateAuthorityResponse {
    /**
     * Secret Id of (base-64 encoded unencrypted pfx) 'Secret' or 'Certificate' object stored in KeyVault.
     */
    keyVaultSecretId?: string;
    /**
     * Name of the CA certificate.
     */
    name?: string;
}

/**
 * Properties of the FirewallPolicyFilterRuleAction.
 */
export interface FirewallPolicyFilterRuleActionResponse {
    /**
     * The type of action.
     */
    type?: string;
}

/**
 * Properties of the FirewallPolicyFilterRuleCollectionAction.
 */
export interface FirewallPolicyFilterRuleCollectionActionResponse {
    /**
     * The type of action.
     */
    type?: string;
}

/**
 * Firewall Policy Filter Rule Collection.
 */
export interface FirewallPolicyFilterRuleCollectionResponse {
    /**
     * The action type of a Filter rule collection.
     */
    action?: FirewallPolicyFilterRuleCollectionActionResponse;
    /**
     * The name of the rule collection.
     */
    name?: string;
    /**
     * Priority of the Firewall Policy Rule Collection resource.
     */
    priority?: number;
    /**
     * The type of the rule collection.
     * Expected value is 'FirewallPolicyFilterRuleCollection'.
     */
    ruleCollectionType: "FirewallPolicyFilterRuleCollection";
    /**
     * List of rules included in a rule collection.
     */
    rules?: (ApplicationRuleResponse | NatRuleResponse | NetworkRuleResponse)[];
}

/**
 * Firewall Policy Filter Rule.
 */
export interface FirewallPolicyFilterRuleResponse {
    /**
     * The action type of a Filter rule.
     */
    action?: FirewallPolicyFilterRuleActionResponse;
    /**
     * The name of the rule.
     */
    name?: string;
    /**
     * Priority of the Firewall Policy Rule resource.
     */
    priority?: number;
    /**
     * Collection of rule conditions used by a rule.
     */
    ruleConditions?: (ApplicationRuleConditionResponse | NatRuleConditionResponse | NetworkRuleConditionResponse)[];
    /**
     * The type of the rule.
     * Expected value is 'FirewallPolicyFilterRule'.
     */
    ruleType: "FirewallPolicyFilterRule";
}

/**
 * name and value of HTTP/S header to insert
 */
export interface FirewallPolicyHttpHeaderToInsertResponse {
    /**
     * Contains the name of the header
     */
    headerName?: string;
    /**
     * Contains the value of the header
     */
    headerValue?: string;
}

/**
 * Firewall Policy Insights.
 */
export interface FirewallPolicyInsightsResponse {
    /**
     * A flag to indicate if the insights are enabled on the policy.
     */
    isEnabled?: boolean;
    /**
     * Workspaces needed to configure the Firewall Policy Insights.
     */
    logAnalyticsResources?: FirewallPolicyLogAnalyticsResourcesResponse;
    /**
     * Number of days the insights should be enabled on the policy.
     */
    retentionDays?: number;
}

/**
 * Intrusion detection bypass traffic specification.
 */
export interface FirewallPolicyIntrusionDetectionBypassTrafficSpecificationsResponse {
    /**
     * Description of the bypass traffic rule.
     */
    description?: string;
    /**
     * List of destination IP addresses or ranges for this rule.
     */
    destinationAddresses?: string[];
    /**
     * List of destination IpGroups for this rule.
     */
    destinationIpGroups?: string[];
    /**
     * List of destination ports or ranges.
     */
    destinationPorts?: string[];
    /**
     * Name of the bypass traffic rule.
     */
    name?: string;
    /**
     * The rule bypass protocol.
     */
    protocol?: string;
    /**
     * List of source IP addresses or ranges for this rule.
     */
    sourceAddresses?: string[];
    /**
     * List of source IpGroups for this rule.
     */
    sourceIpGroups?: string[];
}

/**
 * The operation for configuring intrusion detection.
 */
export interface FirewallPolicyIntrusionDetectionConfigurationResponse {
    /**
     * List of rules for traffic to bypass.
     */
    bypassTrafficSettings?: FirewallPolicyIntrusionDetectionBypassTrafficSpecificationsResponse[];
    /**
     * IDPS Private IP address ranges are used to identify traffic direction (i.e. inbound, outbound, etc.). By default, only ranges defined by IANA RFC 1918 are considered private IP addresses. To modify default ranges, specify your Private IP address ranges with this property
     */
    privateRanges?: string[];
    /**
     * List of specific signatures states.
     */
    signatureOverrides?: FirewallPolicyIntrusionDetectionSignatureSpecificationResponse[];
}

/**
 * Configuration for intrusion detection mode and rules.
 */
export interface FirewallPolicyIntrusionDetectionResponse {
    /**
     * Intrusion detection configuration properties.
     */
    configuration?: FirewallPolicyIntrusionDetectionConfigurationResponse;
    /**
     * Intrusion detection general state. When attached to a parent policy, the firewall's effective IDPS mode is the stricter mode of the two.
     */
    mode?: string;
    /**
     * IDPS profile name. When attached to a parent policy, the firewall's effective profile is the profile name of the parent policy.
     */
    profile?: string;
}

/**
 * Intrusion detection signatures specification states.
 */
export interface FirewallPolicyIntrusionDetectionSignatureSpecificationResponse {
    /**
     * Signature id.
     */
    id?: string;
    /**
     * The signature state.
     */
    mode?: string;
}

/**
 * Log Analytics Resources for Firewall Policy Insights.
 */
export interface FirewallPolicyLogAnalyticsResourcesResponse {
    /**
     * The default workspace Id for Firewall Policy Insights.
     */
    defaultWorkspaceId?: SubResourceResponse;
    /**
     * List of workspaces for Firewall Policy Insights.
     */
    workspaces?: FirewallPolicyLogAnalyticsWorkspaceResponse[];
}

/**
 * Log Analytics Workspace for Firewall Policy Insights.
 */
export interface FirewallPolicyLogAnalyticsWorkspaceResponse {
    /**
     * Region to configure the Workspace.
     */
    region?: string;
    /**
     * The workspace Id for Firewall Policy Insights.
     */
    workspaceId?: SubResourceResponse;
}

/**
 * Properties of the FirewallPolicyNatRuleAction.
 */
export interface FirewallPolicyNatRuleActionResponse {
    /**
     * The type of action.
     */
    type?: string;
}

/**
 * Properties of the FirewallPolicyNatRuleCollectionAction.
 */
export interface FirewallPolicyNatRuleCollectionActionResponse {
    /**
     * The type of action.
     */
    type?: string;
}

/**
 * Firewall Policy NAT Rule Collection.
 */
export interface FirewallPolicyNatRuleCollectionResponse {
    /**
     * The action type of a Nat rule collection.
     */
    action?: FirewallPolicyNatRuleCollectionActionResponse;
    /**
     * The name of the rule collection.
     */
    name?: string;
    /**
     * Priority of the Firewall Policy Rule Collection resource.
     */
    priority?: number;
    /**
     * The type of the rule collection.
     * Expected value is 'FirewallPolicyNatRuleCollection'.
     */
    ruleCollectionType: "FirewallPolicyNatRuleCollection";
    /**
     * List of rules included in a rule collection.
     */
    rules?: (ApplicationRuleResponse | NatRuleResponse | NetworkRuleResponse)[];
}

/**
 * Firewall Policy NAT Rule.
 */
export interface FirewallPolicyNatRuleResponse {
    /**
     * The action type of a Nat rule.
     */
    action?: FirewallPolicyNatRuleActionResponse;
    /**
     * The name of the rule.
     */
    name?: string;
    /**
     * Priority of the Firewall Policy Rule resource.
     */
    priority?: number;
    /**
     * The match conditions for incoming traffic.
     */
    ruleCondition?: ApplicationRuleConditionResponse | NatRuleConditionResponse | NetworkRuleConditionResponse;
    /**
     * The type of the rule.
     * Expected value is 'FirewallPolicyNatRule'.
     */
    ruleType: "FirewallPolicyNatRule";
    /**
     * The translated address for this NAT rule.
     */
    translatedAddress?: string;
    /**
     * The translated port for this NAT rule.
     */
    translatedPort?: string;
}

/**
 * Properties of the application rule protocol.
 */
export interface FirewallPolicyRuleApplicationProtocolResponse {
    /**
     * Port number for the protocol, cannot be greater than 64000.
     */
    port?: number;
    /**
     * Protocol type.
     */
    protocolType?: string;
}

/**
 * Properties of the application rule protocol.
 */
export interface FirewallPolicyRuleConditionApplicationProtocolResponse {
    /**
     * Port number for the protocol, cannot be greater than 64000.
     */
    port?: number;
    /**
     * Protocol type.
     */
    protocolType?: string;
}

/**
 * The private IP addresses/IP ranges to which traffic will not be SNAT.
 */
export interface FirewallPolicySNATResponse {
    /**
     * The operation mode for automatically learning private ranges to not be SNAT
     */
    autoLearnPrivateRanges?: string;
    /**
     * List of private IP addresses/IP address ranges to not be SNAT.
     */
    privateRanges?: string[];
}

/**
 * SQL Settings in Firewall Policy.
 */
export interface FirewallPolicySQLResponse {
    /**
     * A flag to indicate if SQL Redirect traffic filtering is enabled. Turning on the flag requires no rule using port 11000-11999.
     */
    allowSqlRedirect?: boolean;
}

/**
 * SKU of Firewall policy.
 */
export interface FirewallPolicySkuResponse {
    /**
     * Tier of Firewall Policy.
     */
    tier?: string;
}

/**
 * ThreatIntel Whitelist for Firewall Policy.
 */
export interface FirewallPolicyThreatIntelWhitelistResponse {
    /**
     * List of FQDNs for the ThreatIntel Whitelist.
     */
    fqdns?: string[];
    /**
     * List of IP addresses for the ThreatIntel Whitelist.
     */
    ipAddresses?: string[];
}

/**
 * Configuration needed to perform TLS termination & initiation.
 */
export interface FirewallPolicyTransportSecurityResponse {
    /**
     * The CA used for intermediate CA generation.
     */
    certificateAuthority?: FirewallPolicyCertificateAuthorityResponse;
}

/**
 * Parameters that define the flow log format.
 */
export interface FlowLogFormatParametersResponse {
    /**
     * The file type of flow log.
     */
    type?: string;
    /**
     * The version (revision) of the flow log.
     */
    version?: number;
}
/**
 * flowLogFormatParametersResponseProvideDefaults sets the appropriate defaults for FlowLogFormatParametersResponse
 */
export function flowLogFormatParametersResponseProvideDefaults(val: FlowLogFormatParametersResponse): FlowLogFormatParametersResponse {
    return {
        ...val,
        version: (val.version) ?? 0,
    };
}

/**
 * A flow log resource.
 */
export interface FlowLogResponse {
    /**
     * Flag to enable/disable flow logging.
     */
    enabled?: boolean;
    /**
     * Optional field to filter network traffic logs based on SrcIP, SrcPort, DstIP, DstPort, Protocol, Encryption, Direction and Action. If not specified, all network traffic will be logged.
     */
    enabledFilteringCriteria?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Parameters that define the configuration of traffic analytics.
     */
    flowAnalyticsConfiguration?: TrafficAnalyticsPropertiesResponse;
    /**
     * Parameters that define the flow log format.
     */
    format?: FlowLogFormatParametersResponse;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * FlowLog resource Managed Identity
     */
    identity?: ManagedServiceIdentityResponse;
    /**
     * Resource location.
     */
    location?: string;
    /**
     * Resource name.
     */
    name: string;
    /**
     * The provisioning state of the flow log.
     */
    provisioningState: string;
    /**
     * Parameters that define the retention policy for flow log.
     */
    retentionPolicy?: RetentionPolicyParametersResponse;
    /**
     * ID of the storage account which is used to store the flow log.
     */
    storageId: string;
    /**
     * Resource tags.
     */
    tags?: {[key: string]: string};
    /**
     * Guid of network security group to which flow log will be applied.
     */
    targetResourceGuid: string;
    /**
     * ID of network security group to which flow log will be applied.
     */
    targetResourceId: string;
    /**
     * Resource type.
     */
    type: string;
}
/**
 * flowLogResponseProvideDefaults sets the appropriate defaults for FlowLogResponse
 */
export function flowLogResponseProvideDefaults(val: FlowLogResponse): FlowLogResponse {
    return {
        ...val,
        format: (val.format ? flowLogFormatParametersResponseProvideDefaults(val.format) : undefined),
        retentionPolicy: (val.retentionPolicy ? retentionPolicyParametersResponseProvideDefaults(val.retentionPolicy) : undefined),
    };
}

/**
 * Frontend IP address of the load balancer.
 */
export interface FrontendIPConfigurationResponse {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * The reference to gateway load balancer frontend IP.
     */
    gatewayLoadBalancer?: SubResourceResponse;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * An array of references to inbound pools that use this frontend IP.
     */
    inboundNatPools: SubResourceResponse[];
    /**
     * An array of references to inbound rules that use this frontend IP.
     */
    inboundNatRules: SubResourceResponse[];
    /**
     * An array of references to load balancing rules that use this frontend IP.
     */
    loadBalancingRules: SubResourceResponse[];
    /**
     * The name of the resource that is unique within the set of frontend IP configurations used by the load balancer. This name can be used to access the resource.
     */
    name?: string;
    /**
     * An array of references to outbound rules that use this frontend IP.
     */
    outboundRules: SubResourceResponse[];
    /**
     * The private IP address of the IP configuration.
     */
    privateIPAddress?: string;
    /**
     * Whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.
     */
    privateIPAddressVersion?: string;
    /**
     * The Private IP allocation method.
     */
    privateIPAllocationMethod?: string;
    /**
     * The provisioning state of the frontend IP configuration resource.
     */
    provisioningState: string;
    /**
     * The reference to the Public IP resource.
     */
    publicIPAddress?: PublicIPAddressResponse;
    /**
     * The reference to the Public IP Prefix resource.
     */
    publicIPPrefix?: SubResourceResponse;
    /**
     * The reference to the subnet resource.
     */
    subnet?: SubnetResponse;
    /**
     * Type of the resource.
     */
    type: string;
    /**
     * A list of availability zones denoting the IP allocated for the resource needs to come from.
     */
    zones?: string[];
}
/**
 * frontendIPConfigurationResponseProvideDefaults sets the appropriate defaults for FrontendIPConfigurationResponse
 */
export function frontendIPConfigurationResponseProvideDefaults(val: FrontendIPConfigurationResponse): FrontendIPConfigurationResponse {
    return {
        ...val,
        publicIPAddress: (val.publicIPAddress ? publicIPAddressResponseProvideDefaults(val.publicIPAddress) : undefined),
        subnet: (val.subnet ? subnetResponseProvideDefaults(val.subnet) : undefined),
    };
}

/**
 * GatewayCustomBgpIpAddressIpConfiguration for a virtual network gateway connection.
 */
export interface GatewayCustomBgpIpAddressIpConfigurationResponse {
    /**
     * The custom BgpPeeringAddress which belongs to IpconfigurationId.
     */
    customBgpIpAddress: string;
    /**
     * The IpconfigurationId of ipconfiguration which belongs to gateway.
     */
    ipConfigurationId: string;
}

/**
 * Gateway load balancer tunnel interface of a load balancer backend address pool.
 */
export interface GatewayLoadBalancerTunnelInterfaceResponse {
    /**
     * Identifier of gateway load balancer tunnel interface.
     */
    identifier?: number;
    /**
     * Port of gateway load balancer tunnel interface.
     */
    port?: number;
    /**
     * Protocol of gateway load balancer tunnel interface.
     */
    protocol?: string;
    /**
     * Traffic type of gateway load balancer tunnel interface.
     */
    type?: string;
}

/**
 * Gateway routing details.
 */
export interface GatewayRouteResponse {
    /**
     * The route's AS path sequence.
     */
    asPath: string;
    /**
     * The gateway's local address.
     */
    localAddress: string;
    /**
     * The route's network prefix.
     */
    network: string;
    /**
     * The route's next hop.
     */
    nextHop: string;
    /**
     * The source this route was learned from.
     */
    origin: string;
    /**
     * The peer this route was learned from.
     */
    sourcePeer: string;
    /**
     * The route's weight.
     */
    weight: number;
}

/**
 * Define user session identifier group by clauses.
 */
export interface GroupByUserSessionResponse {
    /**
     * List of group by clause variables.
     */
    groupByVariables: GroupByVariableResponse[];
}

/**
 * Define user session group by clause variables.
 */
export interface GroupByVariableResponse {
    /**
     * User Session clause variable.
     */
    variableName: string;
}

/**
 * GroupMembers Item.
 */
export interface GroupMembersItemResponse {
    /**
     * Resource Id.
     */
    resourceId?: string;
}

/**
 * The HTTP header.
 */
export interface HTTPHeaderResponse {
    /**
     * The name in HTTP header.
     */
    name?: string;
    /**
     * The value in HTTP header.
     */
    value?: string;
}

/**
 * An optional field under "Rewrite Action". It lets you capture and modify the value(s) of a specific header when multiple headers with the same name exist. Currently supported for Set-Cookie Response header only. For more details, visit https://aka.ms/appgwheadercrud
 */
export interface HeaderValueMatcherResponse {
    /**
     * Setting this parameter to truth value with force the pattern to do a case in-sensitive comparison.
     */
    ignoreCase?: boolean;
    /**
     * Setting this value as truth will force to check the negation of the condition given by the user in the pattern field.
     */
    negate?: boolean;
    /**
     * The pattern, either fixed string or regular expression, that evaluates if a header value should be selected for rewrite.
     */
    pattern?: string;
}

/**
 * IP addresses associated with azure firewall.
 */
export interface HubIPAddressesResponse {
    /**
     * Private IP Address associated with azure firewall.
     */
    privateIPAddress?: string;
    /**
     * Public IP addresses associated with azure firewall.
     */
    publicIPs?: HubPublicIPAddressesResponse;
}

/**
 * Public IP addresses associated with azure firewall.
 */
export interface HubPublicIPAddressesResponse {
    /**
     * The list of Public IP addresses associated with azure firewall or IP addresses to be retained.
     */
    addresses?: AzureFirewallPublicIPAddressResponse[];
    /**
     * The number of Public IP addresses associated with azure firewall.
     */
    count?: number;
}

/**
 * Hub Item.
 */
export interface HubResponse {
    /**
     * Resource Id.
     */
    resourceId?: string;
    /**
     * Resource Type.
     */
    resourceType?: string;
}

/**
 * RouteTable route.
 */
export interface HubRouteResponse {
    /**
     * The type of destinations (eg: CIDR, ResourceId, Service).
     */
    destinationType: string;
    /**
     * List of all destinations.
     */
    destinations: string[];
    /**
     * The name of the Route that is unique within a RouteTable. This name can be used to access this route.
     */
    name: string;
    /**
     * NextHop resource ID.
     */
    nextHop: string;
    /**
     * The type of next hop (eg: ResourceId).
     */
    nextHopType: string;
}

/**
 * Properties of IPConfigurationBgpPeeringAddress.
 */
export interface IPConfigurationBgpPeeringAddressResponse {
    /**
     * The list of custom BGP peering addresses which belong to IP configuration.
     */
    customBgpIpAddresses?: string[];
    /**
     * The list of default BGP peering addresses which belong to IP configuration.
     */
    defaultBgpIpAddresses: string[];
    /**
     * The ID of IP configuration which belongs to gateway.
     */
    ipconfigurationId?: string;
    /**
     * The list of tunnel public IP addresses which belong to IP configuration.
     */
    tunnelIpAddresses: string[];
}

/**
 * IP configuration profile child resource.
 */
export interface IPConfigurationProfileResponse {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The name of the resource. This name can be used to access the resource.
     */
    name?: string;
    /**
     * The provisioning state of the IP configuration profile resource.
     */
    provisioningState: string;
    /**
     * The reference to the subnet resource to create a container network interface ip configuration.
     */
    subnet?: SubnetResponse;
    /**
     * Sub Resource type.
     */
    type: string;
}
/**
 * ipconfigurationProfileResponseProvideDefaults sets the appropriate defaults for IPConfigurationProfileResponse
 */
export function ipconfigurationProfileResponseProvideDefaults(val: IPConfigurationProfileResponse): IPConfigurationProfileResponse {
    return {
        ...val,
        subnet: (val.subnet ? subnetResponseProvideDefaults(val.subnet) : undefined),
    };
}

/**
 * IP configuration.
 */
export interface IPConfigurationResponse {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * The private IP address of the IP configuration.
     */
    privateIPAddress?: string;
    /**
     * The private IP address allocation method.
     */
    privateIPAllocationMethod?: string;
    /**
     * The provisioning state of the IP configuration resource.
     */
    provisioningState: string;
    /**
     * The reference to the public IP resource.
     */
    publicIPAddress?: PublicIPAddressResponse;
    /**
     * The reference to the subnet resource.
     */
    subnet?: SubnetResponse;
}
/**
 * ipconfigurationResponseProvideDefaults sets the appropriate defaults for IPConfigurationResponse
 */
export function ipconfigurationResponseProvideDefaults(val: IPConfigurationResponse): IPConfigurationResponse {
    return {
        ...val,
        privateIPAllocationMethod: (val.privateIPAllocationMethod) ?? "Dynamic",
        publicIPAddress: (val.publicIPAddress ? publicIPAddressResponseProvideDefaults(val.publicIPAddress) : undefined),
        subnet: (val.subnet ? subnetResponseProvideDefaults(val.subnet) : undefined),
    };
}

export interface IPRuleResponse {
    /**
     * Specifies the IP or IP range in CIDR format. Only IPV4 address is allowed.
     */
    addressPrefix?: string;
}

/**
 * IP traffic information.
 */
export interface IPTrafficResponse {
    /**
     * List of destination IP addresses of the traffic..
     */
    destinationIps: string[];
    /**
     * The destination ports of the traffic.
     */
    destinationPorts: string[];
    protocols: string[];
    /**
     * List of source IP addresses of the traffic..
     */
    sourceIps: string[];
    /**
     * The source ports of the traffic.
     */
    sourcePorts: string[];
}

/**
 * Inbound NAT pool of the load balancer.
 */
export interface InboundNatPoolResponse {
    /**
     * The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535.
     */
    backendPort: number;
    /**
     * Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
     */
    enableFloatingIP?: boolean;
    /**
     * Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
     */
    enableTcpReset?: boolean;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * A reference to frontend IP addresses.
     */
    frontendIPConfiguration?: SubResourceResponse;
    /**
     * The last port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with a load balancer. Acceptable values range between 1 and 65535.
     */
    frontendPortRangeEnd: number;
    /**
     * The first port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with a load balancer. Acceptable values range between 1 and 65534.
     */
    frontendPortRangeStart: number;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
     */
    idleTimeoutInMinutes?: number;
    /**
     * The name of the resource that is unique within the set of inbound NAT pools used by the load balancer. This name can be used to access the resource.
     */
    name?: string;
    /**
     * The reference to the transport protocol used by the inbound NAT pool.
     */
    protocol: string;
    /**
     * The provisioning state of the inbound NAT pool resource.
     */
    provisioningState: string;
    /**
     * Type of the resource.
     */
    type: string;
}

/**
 * Inbound NAT rule of the load balancer.
 */
export interface InboundNatRuleResponse {
    /**
     * A reference to backendAddressPool resource.
     */
    backendAddressPool?: SubResourceResponse;
    /**
     * A reference to a private IP address defined on a network interface of a VM. Traffic sent to the frontend port of each of the frontend IP configurations is forwarded to the backend IP.
     */
    backendIPConfiguration: NetworkInterfaceIPConfigurationResponse;
    /**
     * The port used for the internal endpoint. Acceptable values range from 1 to 65535.
     */
    backendPort?: number;
    /**
     * Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
     */
    enableFloatingIP?: boolean;
    /**
     * Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
     */
    enableTcpReset?: boolean;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * A reference to frontend IP addresses.
     */
    frontendIPConfiguration?: SubResourceResponse;
    /**
     * The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values range from 1 to 65534.
     */
    frontendPort?: number;
    /**
     * The port range end for the external endpoint. This property is used together with BackendAddressPool and FrontendPortRangeStart. Individual inbound NAT rule port mappings will be created for each backend address from BackendAddressPool. Acceptable values range from 1 to 65534.
     */
    frontendPortRangeEnd?: number;
    /**
     * The port range start for the external endpoint. This property is used together with BackendAddressPool and FrontendPortRangeEnd. Individual inbound NAT rule port mappings will be created for each backend address from BackendAddressPool. Acceptable values range from 1 to 65534.
     */
    frontendPortRangeStart?: number;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
     */
    idleTimeoutInMinutes?: number;
    /**
     * The name of the resource that is unique within the set of inbound NAT rules used by the load balancer. This name can be used to access the resource.
     */
    name?: string;
    /**
     * The reference to the transport protocol used by the load balancing rule.
     */
    protocol?: string;
    /**
     * The provisioning state of the inbound NAT rule resource.
     */
    provisioningState: string;
    /**
     * Type of the resource.
     */
    type: string;
}
/**
 * inboundNatRuleResponseProvideDefaults sets the appropriate defaults for InboundNatRuleResponse
 */
export function inboundNatRuleResponseProvideDefaults(val: InboundNatRuleResponse): InboundNatRuleResponse {
    return {
        ...val,
        backendIPConfiguration: networkInterfaceIPConfigurationResponseProvideDefaults(val.backendIPConfiguration),
    };
}

/**
 * Intent information.
 */
export interface IntentContentResponse {
    description?: string;
    /**
     * Destination resource id of the intent.
     */
    destinationResourceId: string;
    /**
     * IP traffic information.
     */
    ipTraffic: IPTrafficResponse;
    /**
     * Source resource id of the intent.
     */
    sourceResourceId: string;
}

/**
 * Interface endpoint resource.
 */
export interface InterfaceEndpointResponse {
    /**
     * A reference to the service being brought into the virtual network.
     */
    endpointService?: EndpointServiceResponse;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    etag?: string;
    /**
     * A first-party service's FQDN that is mapped to the private IP allocated via this interface endpoint.
     */
    fqdn?: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Resource location.
     */
    location?: string;
    /**
     * Resource name.
     */
    name: string;
    /**
     * Gets an array of references to the network interfaces created for this interface endpoint.
     */
    networkInterfaces: NetworkInterfaceResponse[];
    /**
     * A read-only property that identifies who created this interface endpoint.
     */
    owner: string;
    /**
     * The provisioning state of the interface endpoint. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    provisioningState: string;
    /**
     * The ID of the subnet from which the private IP will be allocated.
     */
    subnet?: SubnetResponse;
    /**
     * Resource tags.
     */
    tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    type: string;
}
/**
 * interfaceEndpointResponseProvideDefaults sets the appropriate defaults for InterfaceEndpointResponse
 */
export function interfaceEndpointResponseProvideDefaults(val: InterfaceEndpointResponse): InterfaceEndpointResponse {
    return {
        ...val,
        subnet: (val.subnet ? subnetResponseProvideDefaults(val.subnet) : undefined),
    };
}

/**
 * Resource Uri of Public Ip for Standard Load Balancer Frontend End.
 */
export interface InternetIngressPublicIpsPropertiesResponse {
    /**
     * Resource Uri of Public Ip
     */
    id?: string;
}

/**
 * Contains the IpTag associated with the object.
 */
export interface IpTagResponse {
    /**
     * The IP tag type. Example: FirstPartyUsage.
     */
    ipTagType?: string;
    /**
     * The value of the IP tag associated with the public IP. Example: SQL.
     */
    tag?: string;
}

/**
 * IpamPool prefix allocation reference.
 */
export interface IpamPoolPrefixAllocationResponse {
    /**
     * List of assigned IP address prefixes in the IpamPool of the associated resource.
     */
    allocatedAddressPrefixes: string[];
    /**
     * Resource id of the associated Azure IpamPool resource.
     */
    id?: string;
    /**
     * Number of IP addresses to allocate.
     */
    numberOfIpAddresses?: string;
}

/**
 * Properties of IpamPool resource properties which are specific to the Pool resource.
 */
export interface IpamPoolPropertiesResponse {
    /**
     * List of IP address prefixes of the resource.
     */
    addressPrefixes: string[];
    description?: string;
    /**
     * String representing a friendly name for the resource.
     */
    displayName?: string;
    /**
     * List of IP address type for the IpamPool.
     */
    ipAddressType: string[];
    /**
     * String representing parent IpamPool resource name. If empty the IpamPool will be a root pool.
     */
    parentPoolName?: string;
    /**
     * Provisioning states of a resource.
     */
    provisioningState: string;
}

/**
 * An IPSec Policy configuration for a virtual network gateway connection.
 */
export interface IpsecPolicyResponse {
    /**
     * The DH Group used in IKE Phase 1 for initial SA.
     */
    dhGroup: string;
    /**
     * The IKE encryption algorithm (IKE phase 2).
     */
    ikeEncryption: string;
    /**
     * The IKE integrity algorithm (IKE phase 2).
     */
    ikeIntegrity: string;
    /**
     * The IPSec encryption algorithm (IKE phase 1).
     */
    ipsecEncryption: string;
    /**
     * The IPSec integrity algorithm (IKE phase 1).
     */
    ipsecIntegrity: string;
    /**
     * The Pfs Group used in IKE Phase 2 for new child SA.
     */
    pfsGroup: string;
    /**
     * The IPSec Security Association (also called Quick Mode or Phase 2 SA) payload size in KB for a site to site VPN tunnel.
     */
    saDataSizeKilobytes: number;
    /**
     * The IPSec Security Association (also called Quick Mode or Phase 2 SA) lifetime in seconds for a site to site VPN tunnel.
     */
    saLifeTimeSeconds: number;
}

/**
 * IPv6 Circuit Connection properties for global reach.
 */
export interface Ipv6CircuitConnectionConfigResponse {
    /**
     * /125 IP address space to carve out customer addresses for global reach.
     */
    addressPrefix?: string;
    /**
     * Express Route Circuit connection state.
     */
    circuitConnectionStatus: string;
}

/**
 * Contains IPv6 peering config.
 */
export interface Ipv6ExpressRouteCircuitPeeringConfigResponse {
    /**
     * The Microsoft peering configuration.
     */
    microsoftPeeringConfig?: ExpressRouteCircuitPeeringConfigResponse;
    /**
     * The primary address prefix.
     */
    primaryPeerAddressPrefix?: string;
    /**
     * The reference to the RouteFilter resource.
     */
    routeFilter?: SubResourceResponse;
    /**
     * The secondary address prefix.
     */
    secondaryPeerAddressPrefix?: string;
    /**
     * The state of peering.
     */
    state?: string;
}

/**
 * Load balancer backend addresses.
 */
export interface LoadBalancerBackendAddressResponse {
    /**
     * A list of administrative states which once set can override health probe so that Load Balancer will always forward new connections to backend, or deny new connections and reset existing connections.
     */
    adminState?: string;
    /**
     * Collection of inbound NAT rule port mappings.
     */
    inboundNatRulesPortMapping: NatRulePortMappingResponse[];
    /**
     * IP Address belonging to the referenced virtual network.
     */
    ipAddress?: string;
    /**
     * Reference to the frontend ip address configuration defined in regional loadbalancer.
     */
    loadBalancerFrontendIPConfiguration?: SubResourceResponse;
    /**
     * Name of the backend address.
     */
    name?: string;
    /**
     * Reference to IP address defined in network interfaces.
     */
    networkInterfaceIPConfiguration: SubResourceResponse;
    /**
     * Reference to an existing subnet.
     */
    subnet?: SubResourceResponse;
    /**
     * Reference to an existing virtual network.
     */
    virtualNetwork?: SubResourceResponse;
}

/**
 * SKU of a load balancer.
 */
export interface LoadBalancerSkuResponse {
    /**
     * Name of a load balancer SKU.
     */
    name?: string;
    /**
     * Tier of a load balancer SKU.
     */
    tier?: string;
}

/**
 * A load balancing rule for a load balancer.
 */
export interface LoadBalancingRuleResponse {
    /**
     * A reference to a pool of DIPs. Inbound traffic is randomly load balanced across IPs in the backend IPs.
     */
    backendAddressPool?: SubResourceResponse;
    /**
     * An array of references to pool of DIPs.
     */
    backendAddressPools?: SubResourceResponse[];
    /**
     * The port used for internal connections on the endpoint. Acceptable values are between 0 and 65535. Note that value 0 enables "Any Port".
     */
    backendPort?: number;
    /**
     * Configures SNAT for the VMs in the backend pool to use the publicIP address specified in the frontend of the load balancing rule.
     */
    disableOutboundSnat?: boolean;
    /**
     * Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
     */
    enableFloatingIP?: boolean;
    /**
     * Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
     */
    enableTcpReset?: boolean;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * A reference to frontend IP addresses.
     */
    frontendIPConfiguration?: SubResourceResponse;
    /**
     * The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values are between 0 and 65534. Note that value 0 enables "Any Port".
     */
    frontendPort: number;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
     */
    idleTimeoutInMinutes?: number;
    /**
     * The load distribution policy for this rule.
     */
    loadDistribution?: string;
    /**
     * The name of the resource that is unique within the set of load balancing rules used by the load balancer. This name can be used to access the resource.
     */
    name?: string;
    /**
     * The reference to the load balancer probe used by the load balancing rule.
     */
    probe?: SubResourceResponse;
    /**
     * The reference to the transport protocol used by the load balancing rule.
     */
    protocol: string;
    /**
     * The provisioning state of the load balancing rule resource.
     */
    provisioningState: string;
    /**
     * Type of the resource.
     */
    type: string;
}

/**
 * A common class for general resource information.
 */
export interface LocalNetworkGatewayResponse {
    /**
     * Local network gateway's BGP speaker settings.
     */
    bgpSettings?: BgpSettingsResponse;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * FQDN of local network gateway.
     */
    fqdn?: string;
    /**
     * IP address of local network gateway.
     */
    gatewayIpAddress?: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Local network site address space.
     */
    localNetworkAddressSpace?: AddressSpaceResponse;
    /**
     * Resource location.
     */
    location?: string;
    /**
     * Resource name.
     */
    name: string;
    /**
     * The provisioning state of the local network gateway resource.
     */
    provisioningState: string;
    /**
     * The resource GUID property of the local network gateway resource.
     */
    resourceGuid: string;
    /**
     * Resource tags.
     */
    tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    type: string;
}

/**
 * Defines a managed rule group override setting.
 */
export interface ManagedRuleGroupOverrideResponse {
    /**
     * The managed rule group to override.
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
     * Identifier for the managed rule.
     */
    ruleId: string;
    /**
     * Describes the override sensitivity to be applied when rule matches.
     */
    sensitivity?: string;
    /**
     * The state of the managed rule. Defaults to Disabled if not specified.
     */
    state?: string;
}

/**
 * Defines a managed rule set.
 */
export interface ManagedRuleSetResponse {
    /**
     * Defines the rule group overrides to apply to the rule set.
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
 * Allow to exclude some variable satisfy the condition for the WAF check.
 */
export interface ManagedRulesDefinitionResponse {
    /**
     * The exceptions that are applied on the policy.
     */
    exceptions?: ExceptionEntryResponse[];
    /**
     * The Exclusions that are applied on the policy.
     */
    exclusions?: OwaspCrsExclusionEntryResponse[];
    /**
     * The managed rule sets that are associated with the policy.
     */
    managedRuleSets: ManagedRuleSetResponse[];
}

/**
 * Identity for the resource.
 */
export interface ManagedServiceIdentityResponse {
    /**
     * The principal id of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    principalId: string;
    /**
     * The tenant id of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    tenantId: string;
    /**
     * The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine.
     */
    type?: string;
    /**
     * The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
     */
    userAssignedIdentities?: {[key: string]: ManagedServiceIdentityResponseUserAssignedIdentities};
}

export interface ManagedServiceIdentityResponseUserAssignedIdentities {
    /**
     * The client id of user assigned identity.
     */
    clientId: string;
    /**
     * The principal id of user assigned identity.
     */
    principalId: string;
}

/**
 * Define match conditions.
 */
export interface MatchConditionResponse {
    /**
     * Match value.
     */
    matchValues: string[];
    /**
     * List of match variables.
     */
    matchVariables: MatchVariableResponse[];
    /**
     * Whether this is negate condition or not.
     */
    negationConditon?: boolean;
    /**
     * The operator to be matched.
     */
    operator: string;
    /**
     * List of transforms.
     */
    transforms?: string[];
}

/**
 * Define match variables.
 */
export interface MatchVariableResponse {
    /**
     * The selector of match variable.
     */
    selector?: string;
    /**
     * Match Variable.
     */
    variableName: string;
}

/**
 * Nat Gateway resource.
 */
export interface NatGatewayResponse {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The idle timeout of the nat gateway.
     */
    idleTimeoutInMinutes?: number;
    /**
     * Resource location.
     */
    location?: string;
    /**
     * Resource name.
     */
    name: string;
    /**
     * The provisioning state of the NAT gateway resource.
     */
    provisioningState: string;
    /**
     * An array of public ip addresses associated with the nat gateway resource.
     */
    publicIpAddresses?: SubResourceResponse[];
    /**
     * An array of public ip prefixes associated with the nat gateway resource.
     */
    publicIpPrefixes?: SubResourceResponse[];
    /**
     * The resource GUID property of the NAT gateway resource.
     */
    resourceGuid: string;
    /**
     * The nat gateway SKU.
     */
    sku?: NatGatewaySkuResponse;
    /**
     * An array of references to the subnets using this nat gateway resource.
     */
    subnets: SubResourceResponse[];
    /**
     * Resource tags.
     */
    tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    type: string;
    /**
     * A list of availability zones denoting the zone in which Nat Gateway should be deployed.
     */
    zones?: string[];
}

/**
 * SKU of nat gateway.
 */
export interface NatGatewaySkuResponse {
    /**
     * Name of Nat Gateway SKU.
     */
    name?: string;
}

/**
 * Rule condition of type nat.
 */
export interface NatRuleConditionResponse {
    /**
     * Description of the rule condition.
     */
    description?: string;
    /**
     * List of destination IP addresses or Service Tags.
     */
    destinationAddresses?: string[];
    /**
     * List of destination ports.
     */
    destinationPorts?: string[];
    /**
     * Array of FirewallPolicyRuleConditionNetworkProtocols.
     */
    ipProtocols?: string[];
    /**
     * Name of the rule condition.
     */
    name?: string;
    /**
     * Rule Condition Type.
     * Expected value is 'NatRuleCondition'.
     */
    ruleConditionType: "NatRuleCondition";
    /**
     * List of source IP addresses for this rule.
     */
    sourceAddresses?: string[];
    /**
     * List of source IpGroups for this rule.
     */
    sourceIpGroups?: string[];
}

/**
 * Individual port mappings for inbound NAT rule created for backend pool.
 */
export interface NatRulePortMappingResponse {
    /**
     * Backend port.
     */
    backendPort?: number;
    /**
     * Frontend port.
     */
    frontendPort?: number;
    /**
     * Name of inbound NAT rule.
     */
    inboundNatRuleName?: string;
}

/**
 * Rule of type nat.
 */
export interface NatRuleResponse {
    /**
     * Description of the rule.
     */
    description?: string;
    /**
     * List of destination IP addresses or Service Tags.
     */
    destinationAddresses?: string[];
    /**
     * List of destination ports.
     */
    destinationPorts?: string[];
    /**
     * Array of FirewallPolicyRuleNetworkProtocols.
     */
    ipProtocols?: string[];
    /**
     * Name of the rule.
     */
    name?: string;
    /**
     * Rule Type.
     * Expected value is 'NatRule'.
     */
    ruleType: "NatRule";
    /**
     * List of source IP addresses for this rule.
     */
    sourceAddresses?: string[];
    /**
     * List of source IpGroups for this rule.
     */
    sourceIpGroups?: string[];
    /**
     * The translated address for this NAT rule.
     */
    translatedAddress?: string;
    /**
     * The translated FQDN for this NAT rule.
     */
    translatedFqdn?: string;
    /**
     * The translated port for this NAT rule.
     */
    translatedPort?: string;
}

/**
 * DNS settings of a network interface.
 */
export interface NetworkInterfaceDnsSettingsResponse {
    /**
     * If the VM that uses this NIC is part of an Availability Set, then this list will have the union of all DNS servers from all NICs that are part of the Availability Set. This property is what is configured on each of those VMs.
     */
    appliedDnsServers: string[];
    /**
     * List of DNS servers IP addresses. Use 'AzureProvidedDNS' to switch to azure provided DNS resolution. 'AzureProvidedDNS' value cannot be combined with other IPs, it must be the only value in dnsServers collection.
     */
    dnsServers?: string[];
    /**
     * Relative DNS name for this NIC used for internal communications between VMs in the same virtual network.
     */
    internalDnsNameLabel?: string;
    /**
     * Even if internalDnsNameLabel is not specified, a DNS entry is created for the primary NIC of the VM. This DNS name can be constructed by concatenating the VM name with the value of internalDomainNameSuffix.
     */
    internalDomainNameSuffix: string;
    /**
     * Fully qualified DNS name supporting internal communications between VMs in the same virtual network.
     */
    internalFqdn: string;
}

/**
 * PrivateLinkConnection properties for the network interface.
 */
export interface NetworkInterfaceIPConfigurationPrivateLinkConnectionPropertiesResponse {
    /**
     * List of FQDNs for current private link connection.
     */
    fqdns: string[];
    /**
     * The group ID for current private link connection.
     */
    groupId: string;
    /**
     * The required member name for current private link connection.
     */
    requiredMemberName: string;
}

/**
 * IPConfiguration in a network interface.
 */
export interface NetworkInterfaceIPConfigurationResponse {
    /**
     * The reference to ApplicationGatewayBackendAddressPool resource.
     */
    applicationGatewayBackendAddressPools?: ApplicationGatewayBackendAddressPoolResponse[];
    /**
     * Application security groups in which the IP configuration is included.
     */
    applicationSecurityGroups?: ApplicationSecurityGroupResponse[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * The reference to gateway load balancer frontend IP.
     */
    gatewayLoadBalancer?: SubResourceResponse;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The reference to LoadBalancerBackendAddressPool resource.
     */
    loadBalancerBackendAddressPools?: BackendAddressPoolResponse[];
    /**
     * A list of references of LoadBalancerInboundNatRules.
     */
    loadBalancerInboundNatRules?: InboundNatRuleResponse[];
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * Whether this is a primary customer address on the network interface.
     */
    primary?: boolean;
    /**
     * Private IP address of the IP configuration. It can be a single IP address or a CIDR block in the format <address>/<prefix-length>.
     */
    privateIPAddress?: string;
    /**
     * The private IP address prefix length. If specified and the allocation method is dynamic, the service will allocate a CIDR block instead of a single IP address.
     */
    privateIPAddressPrefixLength?: number;
    /**
     * Whether the specific IP configuration is IPv4 or IPv6. Default is IPv4.
     */
    privateIPAddressVersion?: string;
    /**
     * The private IP address allocation method.
     */
    privateIPAllocationMethod?: string;
    /**
     * PrivateLinkConnection properties for the network interface.
     */
    privateLinkConnectionProperties: NetworkInterfaceIPConfigurationPrivateLinkConnectionPropertiesResponse;
    /**
     * The provisioning state of the network interface IP configuration.
     */
    provisioningState: string;
    /**
     * Public IP address bound to the IP configuration.
     */
    publicIPAddress?: PublicIPAddressResponse;
    /**
     * Subnet bound to the IP configuration.
     */
    subnet?: SubnetResponse;
    /**
     * Resource type.
     */
    type?: string;
    /**
     * The reference to Virtual Network Taps.
     */
    virtualNetworkTaps?: VirtualNetworkTapResponse[];
}
/**
 * networkInterfaceIPConfigurationResponseProvideDefaults sets the appropriate defaults for NetworkInterfaceIPConfigurationResponse
 */
export function networkInterfaceIPConfigurationResponseProvideDefaults(val: NetworkInterfaceIPConfigurationResponse): NetworkInterfaceIPConfigurationResponse {
    return {
        ...val,
        publicIPAddress: (val.publicIPAddress ? publicIPAddressResponseProvideDefaults(val.publicIPAddress) : undefined),
        subnet: (val.subnet ? subnetResponseProvideDefaults(val.subnet) : undefined),
    };
}

/**
 * A network interface in a resource group.
 */
export interface NetworkInterfaceResponse {
    /**
     * Auxiliary mode of Network Interface resource.
     */
    auxiliaryMode?: string;
    /**
     * Auxiliary sku of Network Interface resource.
     */
    auxiliarySku?: string;
    /**
     * Whether default outbound connectivity for nic was configured or not.
     */
    defaultOutboundConnectivityEnabled: boolean;
    /**
     * Indicates whether to disable tcp state tracking.
     */
    disableTcpStateTracking?: boolean;
    /**
     * The DNS settings in network interface.
     */
    dnsSettings?: NetworkInterfaceDnsSettingsResponse;
    /**
     * A reference to the dscp configuration to which the network interface is linked.
     */
    dscpConfiguration: SubResourceResponse;
    /**
     * If the network interface is configured for accelerated networking. Not applicable to VM sizes which require accelerated networking.
     */
    enableAcceleratedNetworking?: boolean;
    /**
     * Indicates whether IP forwarding is enabled on this network interface.
     */
    enableIPForwarding?: boolean;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * The extended location of the network interface.
     */
    extendedLocation?: ExtendedLocationResponse;
    /**
     * A list of references to linked BareMetal resources.
     */
    hostedWorkloads: string[];
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * A reference to the interface endpoint to which the network interface is linked.
     */
    interfaceEndpoint?: InterfaceEndpointResponse;
    /**
     * A list of IPConfigurations of the network interface.
     */
    ipConfigurations?: NetworkInterfaceIPConfigurationResponse[];
    /**
     * Resource location.
     */
    location?: string;
    /**
     * The MAC address of the network interface.
     */
    macAddress: string;
    /**
     * Migration phase of Network Interface resource.
     */
    migrationPhase?: string;
    /**
     * Resource name.
     */
    name: string;
    /**
     * The reference to the NetworkSecurityGroup resource.
     */
    networkSecurityGroup?: NetworkSecurityGroupResponse;
    /**
     * Type of Network Interface resource.
     */
    nicType?: string;
    /**
     * Whether this is a primary network interface on a virtual machine.
     */
    primary: boolean;
    /**
     * A reference to the private endpoint to which the network interface is linked.
     */
    privateEndpoint: PrivateEndpointResponse;
    /**
     * Privatelinkservice of the network interface resource.
     */
    privateLinkService?: PrivateLinkServiceResponse;
    /**
     * The provisioning state of the network interface resource.
     */
    provisioningState: string;
    /**
     * The resource GUID property of the network interface resource.
     */
    resourceGuid: string;
    /**
     * Resource tags.
     */
    tags?: {[key: string]: string};
    /**
     * A list of TapConfigurations of the network interface.
     */
    tapConfigurations: NetworkInterfaceTapConfigurationResponse[];
    /**
     * Resource type.
     */
    type: string;
    /**
     * The reference to a virtual machine.
     */
    virtualMachine: SubResourceResponse;
    /**
     * Whether the virtual machine this nic is attached to supports encryption.
     */
    vnetEncryptionSupported: boolean;
    /**
     * WorkloadType of the NetworkInterface for BareMetal resources
     */
    workloadType?: string;
}
/**
 * networkInterfaceResponseProvideDefaults sets the appropriate defaults for NetworkInterfaceResponse
 */
export function networkInterfaceResponseProvideDefaults(val: NetworkInterfaceResponse): NetworkInterfaceResponse {
    return {
        ...val,
        interfaceEndpoint: (val.interfaceEndpoint ? interfaceEndpointResponseProvideDefaults(val.interfaceEndpoint) : undefined),
        privateEndpoint: privateEndpointResponseProvideDefaults(val.privateEndpoint),
    };
}

/**
 * Tap configuration in a Network Interface.
 */
export interface NetworkInterfaceTapConfigurationResponse {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * The provisioning state of the network interface tap configuration resource.
     */
    provisioningState: string;
    /**
     * Sub Resource type.
     */
    type: string;
    /**
     * The reference to the Virtual Network Tap resource.
     */
    virtualNetworkTap?: VirtualNetworkTapResponse;
}
/**
 * networkInterfaceTapConfigurationResponseProvideDefaults sets the appropriate defaults for NetworkInterfaceTapConfigurationResponse
 */
export function networkInterfaceTapConfigurationResponseProvideDefaults(val: NetworkInterfaceTapConfigurationResponse): NetworkInterfaceTapConfigurationResponse {
    return {
        ...val,
        virtualNetworkTap: (val.virtualNetworkTap ? virtualNetworkTapResponseProvideDefaults(val.virtualNetworkTap) : undefined),
    };
}

/**
 * Network Manager Deployment Status.
 */
export interface NetworkManagerDeploymentStatusResponse {
    /**
     * Commit Time.
     */
    commitTime?: string;
    /**
     * List of configuration ids.
     */
    configurationIds?: string[];
    /**
     * Deployment Status.
     */
    deploymentStatus?: string;
    /**
     * Configuration Deployment Type.
     */
    deploymentType?: string;
    /**
     * Error Message.
     */
    errorMessage?: string;
    /**
     * Region Name.
     */
    region?: string;
}

/**
 * Scope of Network Manager.
 */
export interface NetworkManagerPropertiesResponseNetworkManagerScopes {
    /**
     * List of cross tenant scopes.
     */
    crossTenantScopes: CrossTenantScopesResponse[];
    /**
     * List of management groups.
     */
    managementGroups?: string[];
    /**
     * List of subscriptions.
     */
    subscriptions?: string[];
}

/**
 * Network manager routing group item.
 */
export interface NetworkManagerRoutingGroupItemResponse {
    /**
     * Network manager group Id.
     */
    networkGroupId: string;
}

/**
 * Network manager security group item.
 */
export interface NetworkManagerSecurityGroupItemResponse {
    /**
     * Network manager group Id.
     */
    networkGroupId: string;
}

/**
 * Rule condition of type network.
 */
export interface NetworkRuleConditionResponse {
    /**
     * Description of the rule condition.
     */
    description?: string;
    /**
     * List of destination IP addresses or Service Tags.
     */
    destinationAddresses?: string[];
    /**
     * List of destination IpGroups for this rule.
     */
    destinationIpGroups?: string[];
    /**
     * List of destination ports.
     */
    destinationPorts?: string[];
    /**
     * Array of FirewallPolicyRuleConditionNetworkProtocols.
     */
    ipProtocols?: string[];
    /**
     * Name of the rule condition.
     */
    name?: string;
    /**
     * Rule Condition Type.
     * Expected value is 'NetworkRuleCondition'.
     */
    ruleConditionType: "NetworkRuleCondition";
    /**
     * List of source IP addresses for this rule.
     */
    sourceAddresses?: string[];
    /**
     * List of source IpGroups for this rule.
     */
    sourceIpGroups?: string[];
}

/**
 * Rule of type network.
 */
export interface NetworkRuleResponse {
    /**
     * Description of the rule.
     */
    description?: string;
    /**
     * List of destination IP addresses or Service Tags.
     */
    destinationAddresses?: string[];
    /**
     * List of destination FQDNs.
     */
    destinationFqdns?: string[];
    /**
     * List of destination IpGroups for this rule.
     */
    destinationIpGroups?: string[];
    /**
     * List of destination ports.
     */
    destinationPorts?: string[];
    /**
     * Array of FirewallPolicyRuleNetworkProtocols.
     */
    ipProtocols?: string[];
    /**
     * Name of the rule.
     */
    name?: string;
    /**
     * Rule Type.
     * Expected value is 'NetworkRule'.
     */
    ruleType: "NetworkRule";
    /**
     * List of source IP addresses for this rule.
     */
    sourceAddresses?: string[];
    /**
     * List of source IpGroups for this rule.
     */
    sourceIpGroups?: string[];
}

/**
 * NetworkSecurityGroup resource.
 */
export interface NetworkSecurityGroupResponse {
    /**
     * The default security rules of network security group.
     */
    defaultSecurityRules: SecurityRuleResponse[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * A collection of references to flow log resources.
     */
    flowLogs: FlowLogResponse[];
    /**
     * When enabled, flows created from Network Security Group connections will be re-evaluated when rules are updates. Initial enablement will trigger re-evaluation.
     */
    flushConnection?: boolean;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Resource location.
     */
    location?: string;
    /**
     * Resource name.
     */
    name: string;
    /**
     * A collection of references to network interfaces.
     */
    networkInterfaces: NetworkInterfaceResponse[];
    /**
     * The provisioning state of the network security group resource.
     */
    provisioningState: string;
    /**
     * The resource GUID property of the network security group resource.
     */
    resourceGuid: string;
    /**
     * A collection of security rules of the network security group.
     */
    securityRules?: SecurityRuleResponse[];
    /**
     * A collection of references to subnets.
     */
    subnets: SubnetResponse[];
    /**
     * Resource tags.
     */
    tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    type: string;
}

/**
 * Properties of the NetworkVirtualApplianceConnection subresource.
 */
export interface NetworkVirtualApplianceConnectionPropertiesResponse {
    /**
     * Network Virtual Appliance ASN.
     */
    asn?: number;
    /**
     * List of bgpPeerAddresses for the NVA instances
     */
    bgpPeerAddress?: string[];
    /**
     * Enable internet security.
     */
    enableInternetSecurity?: boolean;
    /**
     * The name of the resource.
     */
    name?: string;
    /**
     * The provisioning state of the NetworkVirtualApplianceConnection resource.
     */
    provisioningState: string;
    /**
     * The Routing Configuration indicating the associated and propagated route tables on this connection.
     */
    routingConfiguration?: RoutingConfigurationResponse;
    /**
     * Unique identifier for the connection.
     */
    tunnelIdentifier?: number;
}

/**
 * Network Profile containing configurations for Public and Private NIC.
 */
export interface NetworkVirtualAppliancePropertiesFormatResponseNetworkProfile {
    networkInterfaceConfigurations?: VirtualApplianceNetworkInterfaceConfigurationResponse[];
}

/**
 * The NSP logging configuration properties.
 */
export interface NspLoggingConfigurationPropertiesResponse {
    /**
     * The log categories to enable in the NSP logging configuration.
     */
    enabledLogCategories?: string[];
    /**
     * The version of the NSP logging configuration.
     */
    version?: string;
}

/**
 * Office365 breakout categories.
 */
export interface O365BreakOutCategoryPoliciesResponse {
    /**
     * Flag to control allow category.
     */
    allow?: boolean;
    /**
     * Flag to control default category.
     */
    default?: boolean;
    /**
     * Flag to control optimize category.
     */
    optimize?: boolean;
}

/**
 * The Office365 breakout policy.
 */
export interface O365PolicyPropertiesResponse {
    /**
     * Office365 breakout categories.
     */
    breakOutCategories?: O365BreakOutCategoryPoliciesResponse;
}

/**
 * Network Virtual Appliance Sku Properties.
 */
export interface Office365PolicyPropertiesResponse {
    /**
     * Office 365 breakout categories.
     */
    breakOutCategories?: BreakOutCategoryPoliciesResponse;
}

/**
 * Outbound rule of the load balancer.
 */
export interface OutboundRuleResponse {
    /**
     * The number of outbound ports to be used for NAT.
     */
    allocatedOutboundPorts?: number;
    /**
     * A reference to a pool of DIPs. Outbound traffic is randomly load balanced across IPs in the backend IPs.
     */
    backendAddressPool: SubResourceResponse;
    /**
     * Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
     */
    enableTcpReset?: boolean;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * The Frontend IP addresses of the load balancer.
     */
    frontendIPConfigurations: SubResourceResponse[];
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The timeout for the TCP idle connection.
     */
    idleTimeoutInMinutes?: number;
    /**
     * The name of the resource that is unique within the set of outbound rules used by the load balancer. This name can be used to access the resource.
     */
    name?: string;
    /**
     * The protocol for the outbound rule in load balancer.
     */
    protocol: string;
    /**
     * The provisioning state of the outbound rule resource.
     */
    provisioningState: string;
    /**
     * Type of the resource.
     */
    type: string;
}

/**
 * Allow to exclude some variable satisfy the condition for the WAF check.
 */
export interface OwaspCrsExclusionEntryResponse {
    /**
     * The managed rule sets that are associated with the exclusion.
     */
    exclusionManagedRuleSets?: ExclusionManagedRuleSetResponse[];
    /**
     * The variable to be excluded.
     */
    matchVariable: string;
    /**
     * When matchVariable is a collection, operator used to specify which elements in the collection this exclusion applies to.
     */
    selector: string;
    /**
     * When matchVariable is a collection, operate on the selector to specify which elements in the collection this exclusion applies to.
     */
    selectorMatchOperator: string;
}

/**
 * P2SConnectionConfiguration Resource.
 */
export interface P2SConnectionConfigurationResponse {
    /**
     * List of Configuration Policy Groups that this P2SConnectionConfiguration is attached to.
     */
    configurationPolicyGroupAssociations: SubResourceResponse[];
    /**
     * Flag indicating whether the enable internet security flag is turned on for the P2S Connections or not.
     */
    enableInternetSecurity?: boolean;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * List of previous Configuration Policy Groups that this P2SConnectionConfiguration was attached to.
     */
    previousConfigurationPolicyGroupAssociations: VpnServerConfigurationPolicyGroupResponse[];
    /**
     * The provisioning state of the P2SConnectionConfiguration resource.
     */
    provisioningState: string;
    /**
     * The Routing Configuration indicating the associated and propagated route tables on this connection.
     */
    routingConfiguration?: RoutingConfigurationResponse;
    /**
     * The reference to the address space resource which represents Address space for P2S VpnClient.
     */
    vpnClientAddressPool?: AddressSpaceResponse;
}

/**
 * P2SVpnGateway Resource.
 */
export interface P2SVpnGatewayResponse {
    /**
     * List of all customer specified DNS servers IP addresses.
     */
    customDnsServers?: string[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Enable Routing Preference property for the Public IP Interface of the P2SVpnGateway.
     */
    isRoutingPreferenceInternet?: boolean;
    /**
     * Resource location.
     */
    location: string;
    /**
     * Resource name.
     */
    name: string;
    /**
     * List of all p2s connection configurations of the gateway.
     */
    p2SConnectionConfigurations?: P2SConnectionConfigurationResponse[];
    /**
     * The provisioning state of the P2S VPN gateway resource.
     */
    provisioningState: string;
    /**
     * Resource tags.
     */
    tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    type: string;
    /**
     * The VirtualHub to which the gateway belongs.
     */
    virtualHub?: SubResourceResponse;
    /**
     * All P2S VPN clients' connection health status.
     */
    vpnClientConnectionHealth: VpnClientConnectionHealthResponse;
    /**
     * The scale unit for this p2s vpn gateway.
     */
    vpnGatewayScaleUnit?: number;
    /**
     * The VpnServerConfiguration to which the p2sVpnGateway is attached to.
     */
    vpnServerConfiguration?: SubResourceResponse;
}

/**
 * Radius client root certificate of P2SVpnServerConfiguration.
 */
export interface P2SVpnServerConfigRadiusClientRootCertificateResponse {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag?: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * The provisioning state of the radius client root certificate resource.
     */
    provisioningState: string;
    /**
     * The Radius client root certificate thumbprint.
     */
    thumbprint?: string;
}

/**
 * Radius Server root certificate of P2SVpnServerConfiguration.
 */
export interface P2SVpnServerConfigRadiusServerRootCertificateResponse {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag?: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * The provisioning state of the radius server root certificate resource.
     */
    provisioningState: string;
    /**
     * The certificate public data.
     */
    publicCertData: string;
}

/**
 * VPN client revoked certificate of P2SVpnServerConfiguration.
 */
export interface P2SVpnServerConfigVpnClientRevokedCertificateResponse {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag?: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * The provisioning state of the VPN client revoked certificate resource.
     */
    provisioningState: string;
    /**
     * The revoked VPN client certificate thumbprint.
     */
    thumbprint?: string;
}

/**
 * VPN client root certificate of P2SVpnServerConfiguration.
 */
export interface P2SVpnServerConfigVpnClientRootCertificateResponse {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag?: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * The provisioning state of the VPN client root certificate resource.
     */
    provisioningState: string;
    /**
     * The certificate public data.
     */
    publicCertData: string;
}

/**
 * Parameters for P2SVpnServerConfiguration.
 */
export interface P2SVpnServerConfigurationPropertiesResponse {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag?: string;
    /**
     * The name of the P2SVpnServerConfiguration that is unique within a VirtualWan in a resource group. This name can be used to access the resource along with Paren VirtualWan resource name.
     */
    name?: string;
    /**
     * List of references to P2SVpnGateways.
     */
    p2SVpnGateways: SubResourceResponse[];
    /**
     * Radius client root certificate of P2SVpnServerConfiguration.
     */
    p2SVpnServerConfigRadiusClientRootCertificates?: P2SVpnServerConfigRadiusClientRootCertificateResponse[];
    /**
     * Radius Server root certificate of P2SVpnServerConfiguration.
     */
    p2SVpnServerConfigRadiusServerRootCertificates?: P2SVpnServerConfigRadiusServerRootCertificateResponse[];
    /**
     * VPN client revoked certificate of P2SVpnServerConfiguration.
     */
    p2SVpnServerConfigVpnClientRevokedCertificates?: P2SVpnServerConfigVpnClientRevokedCertificateResponse[];
    /**
     * VPN client root certificate of P2SVpnServerConfiguration.
     */
    p2SVpnServerConfigVpnClientRootCertificates?: P2SVpnServerConfigVpnClientRootCertificateResponse[];
    /**
     * The provisioning state of the P2S VPN server configuration resource.
     */
    provisioningState: string;
    /**
     * The radius server address property of the P2SVpnServerConfiguration resource for point to site client connection.
     */
    radiusServerAddress?: string;
    /**
     * The radius secret property of the P2SVpnServerConfiguration resource for point to site client connection.
     */
    radiusServerSecret?: string;
    /**
     * VpnClientIpsecPolicies for P2SVpnServerConfiguration.
     */
    vpnClientIpsecPolicies?: IpsecPolicyResponse[];
    /**
     * VPN protocols for the P2SVpnServerConfiguration.
     */
    vpnProtocols?: string[];
}

/**
 * Filter that is applied to packet capture request. Multiple filters can be applied.
 */
export interface PacketCaptureFilterResponse {
    /**
     * Local IP Address to be filtered on. Notation: "127.0.0.1" for single address entry. "127.0.0.1-127.0.0.255" for range. "127.0.0.1;127.0.0.5"? for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.
     */
    localIPAddress?: string;
    /**
     * Local port to be filtered on. Notation: "80" for single port entry."80-85" for range. "80;443;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.
     */
    localPort?: string;
    /**
     * Protocol to be filtered on.
     */
    protocol?: string;
    /**
     * Local IP Address to be filtered on. Notation: "127.0.0.1" for single address entry. "127.0.0.1-127.0.0.255" for range. "127.0.0.1;127.0.0.5;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.
     */
    remoteIPAddress?: string;
    /**
     * Remote port to be filtered on. Notation: "80" for single port entry."80-85" for range. "80;443;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.
     */
    remotePort?: string;
}
/**
 * packetCaptureFilterResponseProvideDefaults sets the appropriate defaults for PacketCaptureFilterResponse
 */
export function packetCaptureFilterResponseProvideDefaults(val: PacketCaptureFilterResponse): PacketCaptureFilterResponse {
    return {
        ...val,
        protocol: (val.protocol) ?? "Any",
    };
}

/**
 * A list of AzureVMSS instances which can be included or excluded to run packet capture. If both included and excluded are empty, then the packet capture will run on all instances of AzureVMSS.
 */
export interface PacketCaptureMachineScopeResponse {
    /**
     * List of AzureVMSS instances which has to be excluded from the AzureVMSS from running packet capture.
     */
    exclude?: string[];
    /**
     * List of AzureVMSS instances to run packet capture on.
     */
    include?: string[];
}

/**
 * The storage location for a packet capture session.
 */
export interface PacketCaptureSettingsResponse {
    /**
     * Number of file count. Default value of count is 10 and maximum number is 10000.
     */
    fileCount?: number;
    /**
     * Number of bytes captured per packet. Default value in bytes 104857600 (100MB) and maximum in bytes 4294967295 (4GB).
     */
    fileSizeInBytes?: number;
    /**
     * Maximum duration of the capture session in seconds is 604800s (7 days) for a file. Default value in second 86400s (1 day).
     */
    sessionTimeLimitInSeconds?: number;
}
/**
 * packetCaptureSettingsResponseProvideDefaults sets the appropriate defaults for PacketCaptureSettingsResponse
 */
export function packetCaptureSettingsResponseProvideDefaults(val: PacketCaptureSettingsResponse): PacketCaptureSettingsResponse {
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
export interface PacketCaptureStorageLocationResponse {
    /**
     * This path is invalid if 'Continuous Capture' is provided with 'true' or 'false'. A valid local path on the targeting VM. Must include the name of the capture file (*.cap). For linux virtual machine it must start with /var/captures. Required if no storage ID is provided, otherwise optional.
     */
    filePath?: string;
    /**
     * This path is valid if 'Continuous Capture' is provided with 'true' or 'false' and required if no storage ID is provided, otherwise optional. Must include the name of the capture file (*.cap). For linux virtual machine it must start with /var/captures.
     */
    localPath?: string;
    /**
     * The ID of the storage account to save the packet capture session. Required if no localPath or filePath is provided.
     */
    storageId?: string;
    /**
     * The URI of the storage path to save the packet capture. Must be a well-formed URI describing the location to save the packet capture.
     */
    storagePath?: string;
}

/**
 * Parameters for an Action.
 */
export interface ParameterResponse {
    /**
     * List of AS paths.
     */
    asPath?: string[];
    /**
     * List of BGP communities.
     */
    community?: string[];
    /**
     * List of route prefixes.
     */
    routePrefix?: string[];
}

/**
 * Properties of the partner managed resource.
 */
export interface PartnerManagedResourcePropertiesResponse {
    /**
     * The partner managed resource id.
     */
    id: string;
    /**
     * The partner managed ILB resource id
     */
    internalLoadBalancerId: string;
    /**
     * The partner managed SLB resource id
     */
    standardLoadBalancerId: string;
}

/**
 * Peer Express Route Circuit Connection in an ExpressRouteCircuitPeering resource.
 */
export interface PeerExpressRouteCircuitConnectionResponse {
    /**
     * /29 IP address space to carve out Customer addresses for tunnels.
     */
    addressPrefix?: string;
    /**
     * The resource guid of the authorization used for the express route circuit connection.
     */
    authResourceGuid?: string;
    /**
     * Express Route Circuit connection state.
     */
    circuitConnectionStatus: string;
    /**
     * The name of the express route circuit connection resource.
     */
    connectionName?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Reference to Express Route Circuit Private Peering Resource of the circuit.
     */
    expressRouteCircuitPeering?: SubResourceResponse;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * Reference to Express Route Circuit Private Peering Resource of the peered circuit.
     */
    peerExpressRouteCircuitPeering?: SubResourceResponse;
    /**
     * The provisioning state of the peer express route circuit connection resource.
     */
    provisioningState: string;
    /**
     * Type of the resource.
     */
    type: string;
}

export interface PerimeterBasedAccessRuleResponse {
    /**
     * NSP id in the ARM id format.
     */
    id: string;
    /**
     * Location of the NSP supplied.
     */
    location: string;
    /**
     * Resource guid of the NSP supplied.
     */
    perimeterGuid: string;
}

/**
 * Defines contents of a web application firewall global configuration.
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
     * Whether allow WAF to enforce file upload limits.
     */
    fileUploadEnforcement?: boolean;
    /**
     * Maximum file upload size in Mb for WAF.
     */
    fileUploadLimitInMb?: number;
    /**
     * Web Application Firewall JavaScript Challenge Cookie Expiration time in minutes.
     */
    jsChallengeCookieExpirationInMins?: number;
    /**
     * To scrub sensitive log fields
     */
    logScrubbing?: PolicySettingsResponseLogScrubbing;
    /**
     * Maximum request body size in Kb for WAF.
     */
    maxRequestBodySizeInKb?: number;
    /**
     * The mode of the policy.
     */
    mode?: string;
    /**
     * Whether to allow WAF to check request Body.
     */
    requestBodyCheck?: boolean;
    /**
     * Whether allow WAF to enforce request body limits.
     */
    requestBodyEnforcement?: boolean;
    /**
     * Max inspection limit in KB for request body inspection for WAF.
     */
    requestBodyInspectLimitInKB?: number;
    /**
     * The state of the policy.
     */
    state?: string;
}
/**
 * policySettingsResponseProvideDefaults sets the appropriate defaults for PolicySettingsResponse
 */
export function policySettingsResponseProvideDefaults(val: PolicySettingsResponse): PolicySettingsResponse {
    return {
        ...val,
        fileUploadEnforcement: (val.fileUploadEnforcement) ?? true,
        requestBodyEnforcement: (val.requestBodyEnforcement) ?? true,
    };
}

/**
 * To scrub sensitive log fields
 */
export interface PolicySettingsResponseLogScrubbing {
    /**
     * The rules that are applied to the logs for scrubbing.
     */
    scrubbingRules?: WebApplicationFirewallScrubbingRulesResponse[];
    /**
     * State of the log scrubbing config. Default value is Enabled.
     */
    state?: string;
}

/**
 * IpamPool association information.
 */
export interface PoolAssociationResponse {
    /**
     * List of assigned IP address prefixes in the IpamPool of the associated resource.
     */
    addressPrefixes: string[];
    /**
     * Creation time of the association.
     */
    createdAt: string;
    description?: string;
    /**
     * Total number of reserved IP addresses of the association.
     */
    numberOfReservedIPAddresses: string;
    /**
     * IpamPool id for which the resource is associated to.
     */
    poolId?: string;
    /**
     * Expire time for IP addresses reserved.
     */
    reservationExpiresAt: string;
    /**
     * List of reserved IP address prefixes in the IpamPool of the associated resource.
     */
    reservedPrefixes: string[];
    /**
     * Resource id of the associated Azure resource.
     */
    resourceId: string;
    /**
     * Total number of assigned IP addresses of the association.
     */
    totalNumberOfIPAddresses: string;
}

/**
 * PrivateDnsZoneConfig resource.
 */
export interface PrivateDnsZoneConfigResponse {
    /**
     * Name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * The resource id of the private dns zone.
     */
    privateDnsZoneId?: string;
    /**
     * A collection of information regarding a recordSet, holding information to identify private resources.
     */
    recordSets: RecordSetResponse[];
}

/**
 * PrivateEndpointConnection resource.
 */
export interface PrivateEndpointConnectionResponse {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The consumer link id.
     */
    linkIdentifier: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * The resource of private end point.
     */
    privateEndpoint: PrivateEndpointResponse;
    /**
     * The location of the private endpoint.
     */
    privateEndpointLocation: string;
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateResponse;
    /**
     * The provisioning state of the private endpoint connection resource.
     */
    provisioningState: string;
    /**
     * The resource type.
     */
    type: string;
}
/**
 * privateEndpointConnectionResponseProvideDefaults sets the appropriate defaults for PrivateEndpointConnectionResponse
 */
export function privateEndpointConnectionResponseProvideDefaults(val: PrivateEndpointConnectionResponse): PrivateEndpointConnectionResponse {
    return {
        ...val,
        privateEndpoint: privateEndpointResponseProvideDefaults(val.privateEndpoint),
    };
}

/**
 * An IP Configuration of the private endpoint.
 */
export interface PrivateEndpointIPConfigurationResponse {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * The ID of a group obtained from the remote resource that this private endpoint should connect to.
     */
    groupId?: string;
    /**
     * The member name of a group obtained from the remote resource that this private endpoint should connect to.
     */
    memberName?: string;
    /**
     * The name of the resource that is unique within a resource group.
     */
    name?: string;
    /**
     * A private ip address obtained from the private endpoint's subnet.
     */
    privateIPAddress?: string;
    /**
     * The resource type.
     */
    type: string;
}

/**
 * Private endpoint resource.
 */
export interface PrivateEndpointResponse {
    /**
     * Application security groups in which the private endpoint IP configuration is included.
     */
    applicationSecurityGroups?: ApplicationSecurityGroupResponse[];
    /**
     * An array of custom dns configurations.
     */
    customDnsConfigs?: CustomDnsConfigPropertiesFormatResponse[];
    /**
     * The custom name of the network interface attached to the private endpoint.
     */
    customNetworkInterfaceName?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * The extended location of the load balancer.
     */
    extendedLocation?: ExtendedLocationResponse;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * A list of IP configurations of the private endpoint. This will be used to map to the First Party Service's endpoints.
     */
    ipConfigurations?: PrivateEndpointIPConfigurationResponse[];
    /**
     * Resource location.
     */
    location?: string;
    /**
     * A grouping of information about the connection to the remote resource. Used when the network admin does not have access to approve connections to the remote resource.
     */
    manualPrivateLinkServiceConnections?: PrivateLinkServiceConnectionResponse[];
    /**
     * Resource name.
     */
    name: string;
    /**
     * An array of references to the network interfaces created for this private endpoint.
     */
    networkInterfaces: NetworkInterfaceResponse[];
    /**
     * A grouping of information about the connection to the remote resource.
     */
    privateLinkServiceConnections?: PrivateLinkServiceConnectionResponse[];
    /**
     * The provisioning state of the private endpoint resource.
     */
    provisioningState: string;
    /**
     * The ID of the subnet from which the private IP will be allocated.
     */
    subnet?: SubnetResponse;
    /**
     * Resource tags.
     */
    tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    type: string;
}
/**
 * privateEndpointResponseProvideDefaults sets the appropriate defaults for PrivateEndpointResponse
 */
export function privateEndpointResponseProvideDefaults(val: PrivateEndpointResponse): PrivateEndpointResponse {
    return {
        ...val,
        subnet: (val.subnet ? subnetResponseProvideDefaults(val.subnet) : undefined),
    };
}

/**
 * PrivateLinkServiceConnection resource.
 */
export interface PrivateLinkServiceConnectionResponse {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * The ID(s) of the group(s) obtained from the remote resource that this private endpoint should connect to.
     */
    groupIds?: string[];
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * A collection of read-only information about the state of the connection to the remote resource.
     */
    privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateResponse;
    /**
     * The resource id of private link service.
     */
    privateLinkServiceId?: string;
    /**
     * The provisioning state of the private link service connection resource.
     */
    provisioningState: string;
    /**
     * A message passed to the owner of the remote resource with this connection request. Restricted to 140 chars.
     */
    requestMessage?: string;
    /**
     * The resource type.
     */
    type: string;
}

/**
 * A collection of information about the state of the connection between service consumer and provider.
 */
export interface PrivateLinkServiceConnectionStateResponse {
    /**
     * A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionsRequired?: string;
    /**
     * The reason for approval/rejection of the connection.
     */
    description?: string;
    /**
     * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
     */
    status?: string;
}

/**
 * The private link service ip configuration.
 */
export interface PrivateLinkServiceIpConfigurationResponse {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The name of private link service ip configuration.
     */
    name?: string;
    /**
     * Whether the ip configuration is primary or not.
     */
    primary?: boolean;
    /**
     * The private IP address of the IP configuration.
     */
    privateIPAddress?: string;
    /**
     * Whether the specific IP configuration is IPv4 or IPv6. Default is IPv4.
     */
    privateIPAddressVersion?: string;
    /**
     * The private IP address allocation method.
     */
    privateIPAllocationMethod?: string;
    /**
     * The provisioning state of the private link service IP configuration resource.
     */
    provisioningState: string;
    /**
     * The reference to the subnet resource.
     */
    subnet?: SubnetResponse;
    /**
     * The resource type.
     */
    type: string;
}
/**
 * privateLinkServiceIpConfigurationResponseProvideDefaults sets the appropriate defaults for PrivateLinkServiceIpConfigurationResponse
 */
export function privateLinkServiceIpConfigurationResponseProvideDefaults(val: PrivateLinkServiceIpConfigurationResponse): PrivateLinkServiceIpConfigurationResponse {
    return {
        ...val,
        subnet: (val.subnet ? subnetResponseProvideDefaults(val.subnet) : undefined),
    };
}

/**
 * The auto-approval list of the private link service.
 */
export interface PrivateLinkServicePropertiesResponseAutoApproval {
    /**
     * The list of subscriptions.
     */
    subscriptions?: string[];
}

/**
 * The visibility list of the private link service.
 */
export interface PrivateLinkServicePropertiesResponseVisibility {
    /**
     * The list of subscriptions.
     */
    subscriptions?: string[];
}

/**
 * Private link service resource.
 */
export interface PrivateLinkServiceResponse {
    /**
     * The alias of the private link service.
     */
    alias: string;
    /**
     * The auto-approval list of the private link service.
     */
    autoApproval?: PrivateLinkServicePropertiesResponseAutoApproval;
    /**
     * The destination IP address of the private link service.
     */
    destinationIPAddress?: string;
    /**
     * Whether the private link service is enabled for proxy protocol or not.
     */
    enableProxyProtocol?: boolean;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * The extended location of the load balancer.
     */
    extendedLocation?: ExtendedLocationResponse;
    /**
     * The list of Fqdn.
     */
    fqdns?: string[];
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * An array of private link service IP configurations.
     */
    ipConfigurations?: PrivateLinkServiceIpConfigurationResponse[];
    /**
     * An array of references to the load balancer IP configurations.
     */
    loadBalancerFrontendIpConfigurations?: FrontendIPConfigurationResponse[];
    /**
     * Resource location.
     */
    location?: string;
    /**
     * Resource name.
     */
    name: string;
    /**
     * An array of references to the network interfaces created for this private link service.
     */
    networkInterfaces: NetworkInterfaceResponse[];
    /**
     * An array of list about connections to the private endpoint.
     */
    privateEndpointConnections: PrivateEndpointConnectionResponse[];
    /**
     * The provisioning state of the private link service resource.
     */
    provisioningState: string;
    /**
     * Resource tags.
     */
    tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    type: string;
    /**
     * The visibility list of the private link service.
     */
    visibility?: PrivateLinkServicePropertiesResponseVisibility;
}

/**
 * A load balancer probe.
 */
export interface ProbeResponse {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The interval, in seconds, for how frequently to probe the endpoint for health status. Typically, the interval is slightly less than half the allocated timeout period (in seconds) which allows two full probes before taking the instance out of rotation. The default value is 15, the minimum value is 5.
     */
    intervalInSeconds?: number;
    /**
     * The load balancer rules that use this probe.
     */
    loadBalancingRules: SubResourceResponse[];
    /**
     * The name of the resource that is unique within the set of probes used by the load balancer. This name can be used to access the resource.
     */
    name?: string;
    /**
     * Determines how new connections are handled by the load balancer when all backend instances are probed down.
     */
    noHealthyBackendsBehavior?: string;
    /**
     * The number of probes where if no response, will result in stopping further traffic from being delivered to the endpoint. This values allows endpoints to be taken out of rotation faster or slower than the typical times used in Azure.
     */
    numberOfProbes?: number;
    /**
     * The port for communicating the probe. Possible values range from 1 to 65535, inclusive.
     */
    port: number;
    /**
     * The number of consecutive successful or failed probes in order to allow or deny traffic from being delivered to this endpoint. After failing the number of consecutive probes equal to this value, the endpoint will be taken out of rotation and require the same number of successful consecutive probes to be placed back in rotation.
     */
    probeThreshold?: number;
    /**
     * The protocol of the end point. If 'Tcp' is specified, a received ACK is required for the probe to be successful. If 'Http' or 'Https' is specified, a 200 OK response from the specifies URI is required for the probe to be successful.
     */
    protocol: string;
    /**
     * The provisioning state of the probe resource.
     */
    provisioningState: string;
    /**
     * The URI used for requesting health status from the VM. Path is required if a protocol is set to http. Otherwise, it is not allowed. There is no default value.
     */
    requestPath?: string;
    /**
     * Type of the resource.
     */
    type: string;
}

/**
 * The list of RouteTables to advertise the routes to.
 */
export interface PropagatedRouteTableResponse {
    /**
     * The list of resource ids of all the RouteTables.
     */
    ids?: SubResourceResponse[];
    /**
     * The list of labels.
     */
    labels?: string[];
}

/**
 * Contains FQDN of the DNS record associated with the public IP address.
 */
export interface PublicIPAddressDnsSettingsResponse {
    /**
     * The domain name label. The concatenation of the domain name label and the regionalized DNS zone make up the fully qualified domain name associated with the public IP address. If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system.
     */
    domainNameLabel?: string;
    /**
     * The domain name label scope. If a domain name label and a domain name label scope are specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system with a hashed value includes in FQDN.
     */
    domainNameLabelScope?: string;
    /**
     * The Fully Qualified Domain Name of the A DNS record associated with the public IP. This is the concatenation of the domainNameLabel and the regionalized DNS zone.
     */
    fqdn?: string;
    /**
     * The reverse FQDN. A user-visible, fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN.
     */
    reverseFqdn?: string;
}

/**
 * Public IP address resource.
 */
export interface PublicIPAddressResponse {
    /**
     * The DDoS protection custom policy associated with the public IP address.
     */
    ddosSettings?: DdosSettingsResponse;
    /**
     * Specify what happens to the public IP address when the VM using it is deleted
     */
    deleteOption?: string;
    /**
     * The FQDN of the DNS record associated with the public IP address.
     */
    dnsSettings?: PublicIPAddressDnsSettingsResponse;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * The extended location of the public ip address.
     */
    extendedLocation?: ExtendedLocationResponse;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The idle timeout of the public IP address.
     */
    idleTimeoutInMinutes?: number;
    /**
     * The IP address associated with the public IP address resource.
     */
    ipAddress?: string;
    /**
     * The IP configuration associated with the public IP address.
     */
    ipConfiguration: IPConfigurationResponse;
    /**
     * The list of tags associated with the public IP address.
     */
    ipTags?: IpTagResponse[];
    /**
     * The linked public IP address of the public IP address resource.
     */
    linkedPublicIPAddress?: PublicIPAddressResponse;
    /**
     * Resource location.
     */
    location?: string;
    /**
     * Migration phase of Public IP Address.
     */
    migrationPhase?: string;
    /**
     * Resource name.
     */
    name: string;
    /**
     * The NatGateway for the Public IP address.
     */
    natGateway?: NatGatewayResponse;
    /**
     * The provisioning state of the public IP address resource.
     */
    provisioningState: string;
    /**
     * The public IP address version.
     */
    publicIPAddressVersion?: string;
    /**
     * The public IP address allocation method.
     */
    publicIPAllocationMethod?: string;
    /**
     * The Public IP Prefix this Public IP Address should be allocated from.
     */
    publicIPPrefix?: SubResourceResponse;
    /**
     * The resource GUID property of the public IP address resource.
     */
    resourceGuid: string;
    /**
     * The service public IP address of the public IP address resource.
     */
    servicePublicIPAddress?: PublicIPAddressResponse;
    /**
     * The public IP address SKU.
     */
    sku?: PublicIPAddressSkuResponse;
    /**
     * Resource tags.
     */
    tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    type: string;
    /**
     * A list of availability zones denoting the IP allocated for the resource needs to come from.
     */
    zones?: string[];
}
/**
 * publicIPAddressResponseProvideDefaults sets the appropriate defaults for PublicIPAddressResponse
 */
export function publicIPAddressResponseProvideDefaults(val: PublicIPAddressResponse): PublicIPAddressResponse {
    return {
        ...val,
        ipConfiguration: ipconfigurationResponseProvideDefaults(val.ipConfiguration),
        linkedPublicIPAddress: (val.linkedPublicIPAddress ? publicIPAddressResponseProvideDefaults(val.linkedPublicIPAddress) : undefined),
        servicePublicIPAddress: (val.servicePublicIPAddress ? publicIPAddressResponseProvideDefaults(val.servicePublicIPAddress) : undefined),
    };
}

/**
 * SKU of a public IP address.
 */
export interface PublicIPAddressSkuResponse {
    /**
     * Name of a public IP address SKU.
     */
    name?: string;
    /**
     * Tier of a public IP address SKU.
     */
    tier?: string;
}

/**
 * SKU of a public IP prefix.
 */
export interface PublicIPPrefixSkuResponse {
    /**
     * Name of a public IP prefix SKU.
     */
    name?: string;
    /**
     * Tier of a public IP prefix SKU.
     */
    tier?: string;
}

/**
 * Quality of Service defines the traffic configuration between endpoints. Mandatory to have one marking.
 */
export interface QosDefinitionResponse {
    /**
     * Destination IP ranges.
     */
    destinationIpRanges?: QosIpRangeResponse[];
    /**
     * Destination port ranges.
     */
    destinationPortRanges?: QosPortRangeResponse[];
    /**
     * List of markings to be used in the configuration.
     */
    markings?: number[];
    /**
     * RNM supported protocol types.
     */
    protocol?: string;
    /**
     * Source IP ranges.
     */
    sourceIpRanges?: QosIpRangeResponse[];
    /**
     * Sources port ranges.
     */
    sourcePortRanges?: QosPortRangeResponse[];
}

/**
 * Qos Traffic Profiler IP Range properties.
 */
export interface QosIpRangeResponse {
    /**
     * End IP Address.
     */
    endIP?: string;
    /**
     * Start IP Address.
     */
    startIP?: string;
}

/**
 * Qos Traffic Profiler Port range properties.
 */
export interface QosPortRangeResponse {
    /**
     * Qos Port Range end.
     */
    end?: number;
    /**
     * Qos Port Range start.
     */
    start?: number;
}

/**
 * Radius Server Settings.
 */
export interface RadiusServerResponse {
    /**
     * The address of this radius server.
     */
    radiusServerAddress: string;
    /**
     * The initial score assigned to this radius server.
     */
    radiusServerScore?: number;
    /**
     * The secret used for this radius server.
     */
    radiusServerSecret?: string;
}

/**
 * Represents the Reachability Analysis Intent properties.
 */
export interface ReachabilityAnalysisIntentPropertiesResponse {
    description?: string;
    /**
     * Destination resource id to verify the reachability path of.
     */
    destinationResourceId: string;
    /**
     * IP traffic information.
     */
    ipTraffic: IPTrafficResponse;
    /**
     * Provisioning states of a resource.
     */
    provisioningState: string;
    /**
     * Source resource id to verify the reachability path of.
     */
    sourceResourceId: string;
}

/**
 * Represents the Reachability Analysis Run properties.
 */
export interface ReachabilityAnalysisRunPropertiesResponse {
    analysisResult: string;
    description?: string;
    errorMessage: string;
    /**
     * Intent information.
     */
    intentContent: IntentContentResponse;
    /**
     * Id of the intent resource to run analysis on.
     */
    intentId: string;
    /**
     * Provisioning states of a resource.
     */
    provisioningState: string;
}

/**
 * A collective group of information about the record set information.
 */
export interface RecordSetResponse {
    /**
     * Fqdn that resolves to private endpoint ip address.
     */
    fqdn?: string;
    /**
     * The private ip address of the private endpoint.
     */
    ipAddresses?: string[];
    /**
     * The provisioning state of the recordset.
     */
    provisioningState: string;
    /**
     * Recordset name.
     */
    recordSetName?: string;
    /**
     * Resource record type.
     */
    recordType?: string;
    /**
     * Recordset time to live.
     */
    ttl?: number;
}

/**
 * Reference to a public IP address.
 */
export interface ReferencedPublicIpAddressResponse {
    /**
     * The PublicIPAddress Reference.
     */
    id?: string;
}

/**
 * Representation of basic resource information.
 */
export interface ResourceBasicsResponse {
    /**
     * List of IP address prefixes of the resource.
     */
    addressPrefixes?: string[];
    /**
     * ResourceId of the Azure resource.
     */
    resourceId?: string;
}

/**
 * ResourceNavigationLink resource.
 */
export interface ResourceNavigationLinkResponse {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id: string;
    /**
     * Link to the external resource.
     */
    link?: string;
    /**
     * Resource type of the linked resource.
     */
    linkedResourceType?: string;
    /**
     * Name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * The provisioning state of the resource navigation link resource.
     */
    provisioningState: string;
    /**
     * Resource type.
     */
    type: string;
}

/**
 * Parameters that define the retention policy for flow log.
 */
export interface RetentionPolicyParametersResponse {
    /**
     * Number of days to retain flow log records.
     */
    days?: number;
    /**
     * Flag to enable/disable retention.
     */
    enabled?: boolean;
}
/**
 * retentionPolicyParametersResponseProvideDefaults sets the appropriate defaults for RetentionPolicyParametersResponse
 */
export function retentionPolicyParametersResponseProvideDefaults(val: RetentionPolicyParametersResponse): RetentionPolicyParametersResponse {
    return {
        ...val,
        days: (val.days) ?? 0,
        enabled: (val.enabled) ?? false,
    };
}

/**
 * Route Filter Rule Resource.
 */
export interface RouteFilterRuleResponse {
    /**
     * The access type of the rule.
     */
    access: string;
    /**
     * The collection for bgp community values to filter on. e.g. ['12076:5010','12076:5020'].
     */
    communities: string[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Resource location.
     */
    location?: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * The provisioning state of the route filter rule resource.
     */
    provisioningState: string;
    /**
     * The rule type of the rule.
     */
    routeFilterRuleType: string;
}

/**
 * A RouteMap Rule.
 */
export interface RouteMapRuleResponse {
    /**
     * List of actions which will be applied on a match.
     */
    actions?: ActionResponse[];
    /**
     * List of matching criterion which will be applied to traffic.
     */
    matchCriteria?: CriterionResponse[];
    /**
     * The unique name for the rule.
     */
    name?: string;
    /**
     * Next step after rule is evaluated. Current supported behaviors are 'Continue'(to next rule) and 'Terminate'.
     */
    nextStepIfMatched?: string;
}

/**
 * Route resource.
 */
export interface RouteResponse {
    /**
     * The destination CIDR to which the route applies.
     */
    addressPrefix?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * A value indicating whether this route overrides overlapping BGP routes regardless of LPM.
     */
    hasBgpOverride: boolean;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance.
     */
    nextHopIpAddress?: string;
    /**
     * The type of Azure hop the packet should be sent to.
     */
    nextHopType: string;
    /**
     * The provisioning state of the route resource.
     */
    provisioningState: string;
    /**
     * The type of the resource.
     */
    type?: string;
}

/**
 * Route table resource.
 */
export interface RouteTableResponse {
    /**
     * Whether to disable the routes learned by BGP on that route table. True means disable.
     */
    disableBgpRoutePropagation?: boolean;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Resource location.
     */
    location?: string;
    /**
     * Resource name.
     */
    name: string;
    /**
     * The provisioning state of the route table resource.
     */
    provisioningState: string;
    /**
     * The resource GUID property of the route table.
     */
    resourceGuid: string;
    /**
     * Collection of routes contained within a route table.
     */
    routes?: RouteResponse[];
    /**
     * A collection of references to subnets.
     */
    subnets: SubnetResponse[];
    /**
     * Resource tags.
     */
    tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    type: string;
}

/**
 * Routing Configuration indicating the associated and propagated route tables for this connection.
 */
export interface RoutingConfigurationResponse {
    /**
     * The resource id RouteTable associated with this RoutingConfiguration.
     */
    associatedRouteTable?: SubResourceResponse;
    /**
     * The resource id of the RouteMap associated with this RoutingConfiguration for inbound learned routes.
     */
    inboundRouteMap?: SubResourceResponse;
    /**
     * The resource id of theRouteMap associated with this RoutingConfiguration for outbound advertised routes.
     */
    outboundRouteMap?: SubResourceResponse;
    /**
     * The list of RouteTables to advertise the routes to.
     */
    propagatedRouteTables?: PropagatedRouteTableResponse;
    /**
     * List of routes that control routing from VirtualHub into a virtual network connection.
     */
    vnetRoutes?: VnetRouteResponse;
}

/**
 * The routing policy object used in a RoutingIntent resource.
 */
export interface RoutingPolicyResponse {
    /**
     * List of all destinations which this routing policy is applicable to (for example: Internet, PrivateTraffic).
     */
    destinations: string[];
    /**
     * The unique name for the routing policy.
     */
    name: string;
    /**
     * The next hop resource id on which this routing policy is applicable to.
     */
    nextHop: string;
}

/**
 * Next hop.
 */
export interface RoutingRuleNextHopResponse {
    /**
     * Next hop address. Only required if the next hop type is VirtualAppliance.
     */
    nextHopAddress?: string;
    /**
     * Next hop type.
     */
    nextHopType: string;
}

/**
 * Route destination.
 */
export interface RoutingRuleRouteDestinationResponse {
    /**
     * Destination address.
     */
    destinationAddress: string;
    /**
     * Destination type.
     */
    type: string;
}

/**
 * Network security rule.
 */
export interface SecurityRuleResponse {
    /**
     * The network traffic is allowed or denied.
     */
    access: string;
    /**
     * A description for this rule. Restricted to 140 chars.
     */
    description?: string;
    /**
     * The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
     */
    destinationAddressPrefix?: string;
    /**
     * The destination address prefixes. CIDR or destination IP ranges.
     */
    destinationAddressPrefixes?: string[];
    /**
     * The application security group specified as destination.
     */
    destinationApplicationSecurityGroups?: ApplicationSecurityGroupResponse[];
    /**
     * The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
     */
    destinationPortRange?: string;
    /**
     * The destination port ranges.
     */
    destinationPortRanges?: string[];
    /**
     * The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic.
     */
    direction: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
     */
    priority: number;
    /**
     * Network protocol this rule applies to.
     */
    protocol: string;
    /**
     * The provisioning state of the security rule resource.
     */
    provisioningState: string;
    /**
     * The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
     */
    sourceAddressPrefix?: string;
    /**
     * The CIDR or source IP ranges.
     */
    sourceAddressPrefixes?: string[];
    /**
     * The application security group specified as source.
     */
    sourceApplicationSecurityGroups?: ApplicationSecurityGroupResponse[];
    /**
     * The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
     */
    sourcePortRange?: string;
    /**
     * The source port ranges.
     */
    sourcePortRanges?: string[];
    /**
     * The type of the resource.
     */
    type?: string;
}

/**
 * Network manager security user group item.
 */
export interface SecurityUserGroupItemResponse {
    /**
     * Network manager group Id.
     */
    networkGroupId: string;
}

/**
 * ServiceAssociationLink resource.
 */
export interface ServiceAssociationLinkResponse {
    /**
     * If true, the resource can be deleted.
     */
    allowDelete?: boolean;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Link to the external resource.
     */
    link?: string;
    /**
     * Resource type of the linked resource.
     */
    linkedResourceType?: string;
    /**
     * A list of locations.
     */
    locations?: string[];
    /**
     * Name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * The provisioning state of the service association link resource.
     */
    provisioningState: string;
    /**
     * Resource type.
     */
    type: string;
}

/**
 * Service Endpoint policy definitions.
 */
export interface ServiceEndpointPolicyDefinitionResponse {
    /**
     * A description for this rule. Restricted to 140 chars.
     */
    description?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * The provisioning state of the service endpoint policy definition resource.
     */
    provisioningState: string;
    /**
     * Service endpoint name.
     */
    service?: string;
    /**
     * A list of service resources.
     */
    serviceResources?: string[];
    /**
     * The type of the resource.
     */
    type?: string;
}

/**
 * Service End point policy resource.
 */
export interface ServiceEndpointPolicyResponse {
    /**
     * A collection of contextual service endpoint policy.
     */
    contextualServiceEndpointPolicies?: string[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Kind of service endpoint policy. This is metadata used for the Azure portal experience.
     */
    kind: string;
    /**
     * Resource location.
     */
    location?: string;
    /**
     * Resource name.
     */
    name: string;
    /**
     * The provisioning state of the service endpoint policy resource.
     */
    provisioningState: string;
    /**
     * The resource GUID property of the service endpoint policy resource.
     */
    resourceGuid: string;
    /**
     * The alias indicating if the policy belongs to a service
     */
    serviceAlias?: string;
    /**
     * A collection of service endpoint policy definitions of the service endpoint policy.
     */
    serviceEndpointPolicyDefinitions?: ServiceEndpointPolicyDefinitionResponse[];
    /**
     * A collection of references to subnets.
     */
    subnets: SubnetResponse[];
    /**
     * Resource tags.
     */
    tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    type: string;
}

/**
 * The service endpoint properties.
 */
export interface ServiceEndpointPropertiesFormatResponse {
    /**
     * A list of locations.
     */
    locations?: string[];
    /**
     * SubResource as network identifier.
     */
    networkIdentifier?: SubResourceResponse;
    /**
     * The provisioning state of the service endpoint resource.
     */
    provisioningState: string;
    /**
     * The type of the endpoint service.
     */
    service?: string;
}

/**
 * Parameters for SharedKey.
 */
export interface SharedKeyPropertiesResponse {
    /**
     * The provisioning state of the SharedKey resource.
     */
    provisioningState: string;
    /**
     * The value of the shared key for the vpn link connection.
     */
    sharedKey?: string;
    /**
     * The length of the shared key for the vpn link connection.
     */
    sharedKeyLength?: number;
}

export interface SingleQueryResultResponse {
    /**
     * Describes what is the signature enforces
     */
    description?: string;
    /**
     * Describes the list of destination ports related to this signature
     */
    destinationPorts?: string[];
    /**
     * Describes in which direction signature is being enforced: 0 - OutBound, 1 - InBound, 2 - Any, 3 - Internal, 4 - InternalOutbound, 5 - InternalInbound
     */
    direction?: number;
    /**
     * Describes the groups the signature belongs to
     */
    group?: string;
    /**
     * Describes if this override is inherited from base policy or not
     */
    inheritedFromParentPolicy?: boolean;
    /**
     * Describes the last updated time of the signature (provided from 3rd party vendor)
     */
    lastUpdated?: string;
    /**
     * The current mode enforced, 0 - Disabled, 1 - Alert, 2 -Deny
     */
    mode?: number;
    /**
     * Describes the protocol the signatures is being enforced in
     */
    protocol?: string;
    /**
     * Describes the severity of signature: 1 - High, 2 - Medium, 3 - Low
     */
    severity?: number;
    /**
     * The ID of the signature
     */
    signatureId?: number;
    /**
     * Describes the list of source ports related to this signature
     */
    sourcePorts?: string[];
}

/**
 * The sku of this Bastion Host.
 */
export interface SkuResponse {
    /**
     * The name of the sku of this Bastion Host.
     */
    name?: string;
}
/**
 * skuResponseProvideDefaults sets the appropriate defaults for SkuResponse
 */
export function skuResponseProvideDefaults(val: SkuResponse): SkuResponse {
    return {
        ...val,
        name: (val.name) ?? "Standard",
    };
}

/**
 * Properties of static CIDR resource.
 */
export interface StaticCidrPropertiesResponse {
    /**
     * List of IP address prefixes of the resource.
     */
    addressPrefixes?: string[];
    description?: string;
    /**
     * Number of IP addresses to allocate for a static CIDR resource. The IP addresses will be assigned based on IpamPools available space.
     */
    numberOfIPAddressesToAllocate?: string;
    /**
     * Provisioning states of a resource.
     */
    provisioningState: string;
    /**
     * Total number of IP addresses allocated for the static CIDR resource.
     */
    totalNumberOfIPAddresses: string;
}

/**
 * List of all Static Routes.
 */
export interface StaticRouteResponse {
    /**
     * List of all address prefixes.
     */
    addressPrefixes?: string[];
    /**
     * The name of the StaticRoute that is unique within a VnetRoute.
     */
    name?: string;
    /**
     * The ip address of the next hop.
     */
    nextHopIpAddress?: string;
}

/**
 * Configuration for static routes on this HubVnetConnectionConfiguration for static routes on this HubVnetConnection.
 */
export interface StaticRoutesConfigResponse {
    /**
     * Boolean indicating whether static routes on this connection are automatically propagate to route tables which this connection propagates to.
     */
    propagateStaticRoutes: boolean;
    /**
     * Parameter determining whether NVA in spoke vnet is bypassed for traffic with destination in spoke.
     */
    vnetLocalRouteOverrideCriteria?: string;
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
 * Subnet in a virtual network resource.
 */
export interface SubnetResponse {
    /**
     * The address prefix for the subnet.
     */
    addressPrefix?: string;
    /**
     * List of address prefixes for the subnet.
     */
    addressPrefixes?: string[];
    /**
     * Application gateway IP configurations of virtual network resource.
     */
    applicationGatewayIPConfigurations?: ApplicationGatewayIPConfigurationResponse[];
    /**
     * Set this property to false to disable default outbound connectivity for all VMs in the subnet. This property can only be set at the time of subnet creation and cannot be updated for an existing subnet.
     */
    defaultOutboundAccess?: boolean;
    /**
     * An array of references to the delegations on the subnet.
     */
    delegations?: DelegationResponse[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * An array of references to interface endpoints 
     */
    interfaceEndpoints?: InterfaceEndpointResponse[];
    /**
     * Array of IpAllocation which reference this subnet.
     */
    ipAllocations?: SubResourceResponse[];
    /**
     * Array of IP configuration profiles which reference this subnet.
     */
    ipConfigurationProfiles: IPConfigurationProfileResponse[];
    /**
     * An array of references to the network interface IP configurations using subnet.
     */
    ipConfigurations: IPConfigurationResponse[];
    /**
     * A list of IPAM Pools for allocating IP address prefixes.
     */
    ipamPoolPrefixAllocations?: IpamPoolPrefixAllocationResponse[];
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * Nat gateway associated with this subnet.
     */
    natGateway?: SubResourceResponse;
    /**
     * The reference to the NetworkSecurityGroup resource.
     */
    networkSecurityGroup?: NetworkSecurityGroupResponse;
    /**
     * Enable or Disable apply network policies on private end point in the subnet.
     */
    privateEndpointNetworkPolicies?: string;
    /**
     * An array of references to private endpoints.
     */
    privateEndpoints: PrivateEndpointResponse[];
    /**
     * Enable or Disable apply network policies on private link service in the subnet.
     */
    privateLinkServiceNetworkPolicies?: string;
    /**
     * The provisioning state of the subnet resource.
     */
    provisioningState: string;
    /**
     * A read-only string identifying the intention of use for this subnet based on delegations and other user-defined properties.
     */
    purpose: string;
    /**
     * An array of references to the external resources using subnet.
     */
    resourceNavigationLinks: ResourceNavigationLinkResponse[];
    /**
     * The reference to the RouteTable resource.
     */
    routeTable?: RouteTableResponse;
    /**
     * An array of references to services injecting into this subnet.
     */
    serviceAssociationLinks: ServiceAssociationLinkResponse[];
    /**
     * An array of service endpoint policies.
     */
    serviceEndpointPolicies?: ServiceEndpointPolicyResponse[];
    /**
     * An array of service endpoints.
     */
    serviceEndpoints?: ServiceEndpointPropertiesFormatResponse[];
    /**
     * Set this property to Tenant to allow sharing subnet with other subscriptions in your AAD tenant. This property can only be set if defaultOutboundAccess is set to false, both properties can only be set if subnet is empty.
     */
    sharingScope?: string;
    /**
     * Resource type.
     */
    type?: string;
}
/**
 * subnetResponseProvideDefaults sets the appropriate defaults for SubnetResponse
 */
export function subnetResponseProvideDefaults(val: SubnetResponse): SubnetResponse {
    return {
        ...val,
        privateEndpointNetworkPolicies: (val.privateEndpointNetworkPolicies) ?? "Disabled",
        privateLinkServiceNetworkPolicies: (val.privateLinkServiceNetworkPolicies) ?? "Enabled",
    };
}

export interface SubscriptionIdResponse {
    /**
     * Subscription id in the ARM id format.
     */
    id?: string;
}

/**
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface SystemDataResponse {
    /**
     * The timestamp of resource creation (UTC).
     */
    createdAt?: string;
    /**
     * The identity that created the resource.
     */
    createdBy?: string;
    /**
     * The type of identity that created the resource.
     */
    createdByType?: string;
    /**
     * The type of identity that last modified the resource.
     */
    lastModifiedAt?: string;
    /**
     * The identity that last modified the resource.
     */
    lastModifiedBy?: string;
    /**
     * The type of identity that last modified the resource.
     */
    lastModifiedByType?: string;
}

/**
 * Parameters that define the configuration of traffic analytics.
 */
export interface TrafficAnalyticsConfigurationPropertiesResponse {
    /**
     * Flag to enable/disable traffic analytics.
     */
    enabled?: boolean;
    /**
     * The interval in minutes which would decide how frequently TA service should do flow analytics.
     */
    trafficAnalyticsInterval?: number;
    /**
     * The resource guid of the attached workspace.
     */
    workspaceId?: string;
    /**
     * The location of the attached workspace.
     */
    workspaceRegion?: string;
    /**
     * Resource Id of the attached workspace.
     */
    workspaceResourceId?: string;
}

/**
 * Parameters that define the configuration of traffic analytics.
 */
export interface TrafficAnalyticsPropertiesResponse {
    /**
     * Parameters that define the configuration of traffic analytics.
     */
    networkWatcherFlowAnalyticsConfiguration?: TrafficAnalyticsConfigurationPropertiesResponse;
}

/**
 * An traffic selector policy for a virtual network gateway connection.
 */
export interface TrafficSelectorPolicyResponse {
    /**
     * A collection of local address spaces in CIDR format.
     */
    localAddressRanges: string[];
    /**
     * A collection of remote address spaces in CIDR format.
     */
    remoteAddressRanges: string[];
}

/**
 * VirtualNetworkGatewayConnection properties.
 */
export interface TunnelConnectionHealthResponse {
    /**
     * Virtual Network Gateway connection status.
     */
    connectionStatus: string;
    /**
     * The Egress Bytes Transferred in this connection.
     */
    egressBytesTransferred: number;
    /**
     * The Ingress Bytes Transferred in this connection.
     */
    ingressBytesTransferred: number;
    /**
     * The time at which connection was established in Utc format.
     */
    lastConnectionEstablishedUtcTime: string;
    /**
     * Tunnel name.
     */
    tunnel: string;
}

/**
 * Describes a Virtual Machine.
 */
export interface VMResponse {
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Resource location.
     */
    location?: string;
    /**
     * Resource name.
     */
    name: string;
    /**
     * Resource tags.
     */
    tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    type: string;
}

/**
 * Properties of Verifier Workspace resource.
 */
export interface VerifierWorkspacePropertiesResponse {
    description?: string;
    /**
     * Provisioning states of a resource.
     */
    provisioningState: string;
}

/**
 * Network Virtual Appliance Additional NIC properties.
 */
export interface VirtualApplianceAdditionalNicPropertiesResponse {
    /**
     * Flag (true or false) for Intent for Public Ip on additional nic
     */
    hasPublicIp?: boolean;
    /**
     * Name of additional nic
     */
    name?: string;
}

/**
 * Represents a single IP configuration properties.
 */
export interface VirtualApplianceIPConfigurationPropertiesResponse {
    /**
     * Whether or not this is primary IP configuration of the NIC.
     */
    primary?: boolean;
}

/**
 * Represents a single IP configuration.
 */
export interface VirtualApplianceIPConfigurationResponse {
    /**
     * Name of the IP configuration.
     */
    name?: string;
    /**
     * Represents a single IP configuration properties.
     */
    properties?: VirtualApplianceIPConfigurationPropertiesResponse;
}

/**
 * Represents a single NIC configuration properties.
 */
export interface VirtualApplianceNetworkInterfaceConfigurationPropertiesResponse {
    ipConfigurations?: VirtualApplianceIPConfigurationResponse[];
}

/**
 * Represents a single NIC configuration.
 */
export interface VirtualApplianceNetworkInterfaceConfigurationResponse {
    /**
     * NIC type. This should be either PublicNic or PrivateNic.
     */
    nicType?: string;
    /**
     * Represents a single NIC configuration properties.
     */
    properties?: VirtualApplianceNetworkInterfaceConfigurationPropertiesResponse;
}

/**
 * Network Virtual Appliance NIC properties.
 */
export interface VirtualApplianceNicPropertiesResponse {
    /**
     * Instance on which nic is attached.
     */
    instanceName: string;
    /**
     * NIC name.
     */
    name: string;
    /**
     * NIC type - PublicNic, PrivateNic, or AdditionalNic.
     */
    nicType: string;
    /**
     * Private IP address.
     */
    privateIpAddress: string;
    /**
     * Public IP address.
     */
    publicIpAddress: string;
}

/**
 * Network Virtual Appliance Sku Properties.
 */
export interface VirtualApplianceSkuPropertiesResponse {
    /**
     * Virtual Appliance Scale Unit.
     */
    bundledScaleUnit?: string;
    /**
     * Virtual Appliance Version.
     */
    marketPlaceVersion?: string;
    /**
     * Virtual Appliance Vendor.
     */
    vendor?: string;
}

/**
 * Virtual Hub identifier.
 */
export interface VirtualHubIdResponse {
    /**
     * The resource URI for the Virtual Hub where the ExpressRoute gateway is or will be deployed. The Virtual Hub resource and the ExpressRoute gateway resource reside in the same subscription.
     */
    id?: string;
}

/**
 * VirtualHub route.
 */
export interface VirtualHubRouteResponse {
    /**
     * List of all addressPrefixes.
     */
    addressPrefixes?: string[];
    /**
     * NextHop ip address.
     */
    nextHopIpAddress?: string;
}

/**
 * VirtualHub route table.
 */
export interface VirtualHubRouteTableResponse {
    /**
     * List of all routes.
     */
    routes?: VirtualHubRouteResponse[];
}

/**
 * VirtualHubRouteTableV2 Resource.
 */
export interface VirtualHubRouteTableV2Response {
    /**
     * List of all connections attached to this route table v2.
     */
    attachedConnections?: string[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * The provisioning state of the virtual hub route table v2 resource.
     */
    provisioningState: string;
    /**
     * List of all routes.
     */
    routes?: VirtualHubRouteV2Response[];
}

/**
 * VirtualHubRouteTableV2 route.
 */
export interface VirtualHubRouteV2Response {
    /**
     * The type of destinations.
     */
    destinationType?: string;
    /**
     * List of all destinations.
     */
    destinations?: string[];
    /**
     * The type of next hops.
     */
    nextHopType?: string;
    /**
     * NextHops ip address.
     */
    nextHops?: string[];
}

/**
 * Bgp Communities sent over ExpressRoute with each route corresponding to a prefix in this VNET.
 */
export interface VirtualNetworkBgpCommunitiesResponse {
    /**
     * The BGP community associated with the region of the virtual network.
     */
    regionalCommunity: string;
    /**
     * The BGP community associated with the virtual network.
     */
    virtualNetworkCommunity: string;
}

/**
 * Indicates if encryption is enabled on virtual network and if VM without encryption is allowed in encrypted VNet.
 */
export interface VirtualNetworkEncryptionResponse {
    /**
     * Indicates if encryption is enabled on the virtual network.
     */
    enabled: boolean;
    /**
     * If the encrypted VNet allows VM that does not support encryption. This field is for future support, AllowUnencrypted is the only supported value at general availability.
     */
    enforcement?: string;
}

export interface VirtualNetworkGatewayAutoScaleBoundsResponse {
    /**
     * Maximum Scale Units for Autoscale configuration
     */
    max?: number;
    /**
     * Minimum scale Units for Autoscale configuration
     */
    min?: number;
}

/**
 * Virtual Network Gateway Autoscale Configuration details
 */
export interface VirtualNetworkGatewayAutoScaleConfigurationResponse {
    /**
     * The bounds of the autoscale configuration
     */
    bounds?: VirtualNetworkGatewayAutoScaleBoundsResponse;
}

/**
 * IP configuration for virtual network gateway.
 */
export interface VirtualNetworkGatewayIPConfigurationResponse {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * Private IP Address for this gateway.
     */
    privateIPAddress: string;
    /**
     * The private IP address allocation method.
     */
    privateIPAllocationMethod?: string;
    /**
     * The provisioning state of the virtual network gateway IP configuration resource.
     */
    provisioningState: string;
    /**
     * The reference to the public IP resource.
     */
    publicIPAddress?: SubResourceResponse;
    /**
     * The reference to the subnet resource.
     */
    subnet?: SubResourceResponse;
}

/**
 * VirtualNetworkGatewayNatRule Resource.
 */
export interface VirtualNetworkGatewayNatRuleResponse {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * The private IP address external mapping for NAT.
     */
    externalMappings?: VpnNatRuleMappingResponse[];
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The private IP address internal mapping for NAT.
     */
    internalMappings?: VpnNatRuleMappingResponse[];
    /**
     * The IP Configuration ID this NAT rule applies to.
     */
    ipConfigurationId?: string;
    /**
     * The Source NAT direction of a VPN NAT.
     */
    mode?: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * The provisioning state of the NAT Rule resource.
     */
    provisioningState: string;
    /**
     * Resource type.
     */
    type: string;
}

/**
 * Vpn Client Connection configuration PolicyGroup member
 */
export interface VirtualNetworkGatewayPolicyGroupMemberResponse {
    /**
     * The Vpn Policy member attribute type.
     */
    attributeType?: string;
    /**
     * The value of Attribute used for this VirtualNetworkGatewayPolicyGroupMember.
     */
    attributeValue?: string;
    /**
     * Name of the VirtualNetworkGatewayPolicyGroupMember.
     */
    name?: string;
}

/**
 * Parameters for VirtualNetworkGatewayPolicyGroup.
 */
export interface VirtualNetworkGatewayPolicyGroupResponse {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Shows if this is a Default VirtualNetworkGatewayPolicyGroup or not.
     */
    isDefault: boolean;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * Multiple PolicyMembers for VirtualNetworkGatewayPolicyGroup.
     */
    policyMembers: VirtualNetworkGatewayPolicyGroupMemberResponse[];
    /**
     * Priority for VirtualNetworkGatewayPolicyGroup.
     */
    priority: number;
    /**
     * The provisioning state of the VirtualNetworkGatewayPolicyGroup resource.
     */
    provisioningState: string;
    /**
     * List of references to vngClientConnectionConfigurations.
     */
    vngClientConnectionConfigurations: SubResourceResponse[];
}

/**
 * A common class for general resource information.
 */
export interface VirtualNetworkGatewayResponse {
    /**
     * ActiveActive flag.
     */
    activeActive?: boolean;
    /**
     * Property to indicate if the Express Route Gateway serves traffic when there are multiple Express Route Gateways in the vnet
     */
    adminState?: string;
    /**
     * Configure this gateway to accept traffic from other Azure Virtual Networks. This configuration does not support connectivity to Azure Virtual WAN.
     */
    allowRemoteVnetTraffic?: boolean;
    /**
     * Configures this gateway to accept traffic from remote Virtual WAN networks.
     */
    allowVirtualWanTraffic?: boolean;
    /**
     * Autoscale configuration for virutal network gateway
     */
    autoScaleConfiguration?: VirtualNetworkGatewayAutoScaleConfigurationResponse;
    /**
     * Virtual network gateway's BGP speaker settings.
     */
    bgpSettings?: BgpSettingsResponse;
    /**
     * The reference to the address space resource which represents the custom routes address space specified by the customer for virtual network gateway and VpnClient.
     */
    customRoutes?: AddressSpaceResponse;
    /**
     * disableIPSecReplayProtection flag.
     */
    disableIPSecReplayProtection?: boolean;
    /**
     * Whether BGP is enabled for this virtual network gateway or not.
     */
    enableBgp?: boolean;
    /**
     * EnableBgpRouteTranslationForNat flag.
     */
    enableBgpRouteTranslationForNat?: boolean;
    /**
     * Whether dns forwarding is enabled or not.
     */
    enableDnsForwarding?: boolean;
    /**
     * Whether private IP needs to be enabled on this gateway for connections or not.
     */
    enablePrivateIpAddress?: boolean;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * The extended location of type local virtual network gateway.
     */
    extendedLocation?: ExtendedLocationResponse;
    /**
     * The reference to the LocalNetworkGateway resource which represents local network site having default routes. Assign Null value in case of removing existing default site setting.
     */
    gatewayDefaultSite?: SubResourceResponse;
    /**
     * The type of this virtual network gateway.
     */
    gatewayType?: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The identity of the virtual network gateway, if configured.
     */
    identity?: ManagedServiceIdentityResponse;
    /**
     * The IP address allocated by the gateway to which dns requests can be sent.
     */
    inboundDnsForwardingEndpoint: string;
    /**
     * IP configurations for virtual network gateway.
     */
    ipConfigurations?: VirtualNetworkGatewayIPConfigurationResponse[];
    /**
     * Resource location.
     */
    location?: string;
    /**
     * Resource name.
     */
    name: string;
    /**
     * NatRules for virtual network gateway.
     */
    natRules?: VirtualNetworkGatewayNatRuleResponse[];
    /**
     * The provisioning state of the virtual network gateway resource.
     */
    provisioningState: string;
    /**
     * Property to indicate if the Express Route Gateway has resiliency model of MultiHomed or SingleHomed
     */
    resiliencyModel?: string;
    /**
     * The resource GUID property of the virtual network gateway resource.
     */
    resourceGuid: string;
    /**
     * The reference to the VirtualNetworkGatewaySku resource which represents the SKU selected for Virtual network gateway.
     */
    sku?: VirtualNetworkGatewaySkuResponse;
    /**
     * Resource tags.
     */
    tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    type: string;
    /**
     * Customer vnet resource id. VirtualNetworkGateway of type local gateway is associated with the customer vnet.
     */
    vNetExtendedLocationResourceId?: string;
    /**
     * The reference to the VirtualNetworkGatewayPolicyGroup resource which represents the available VirtualNetworkGatewayPolicyGroup for the gateway.
     */
    virtualNetworkGatewayPolicyGroups?: VirtualNetworkGatewayPolicyGroupResponse[];
    /**
     * The reference to the VpnClientConfiguration resource which represents the P2S VpnClient configurations.
     */
    vpnClientConfiguration?: VpnClientConfigurationResponse;
    /**
     * The generation for this VirtualNetworkGateway. Must be None if gatewayType is not VPN.
     */
    vpnGatewayGeneration?: string;
    /**
     * The type of this virtual network gateway.
     */
    vpnType?: string;
}

/**
 * VirtualNetworkGatewaySku details.
 */
export interface VirtualNetworkGatewaySkuResponse {
    /**
     * The capacity.
     */
    capacity: number;
    /**
     * Gateway SKU name.
     */
    name?: string;
    /**
     * Gateway SKU tier.
     */
    tier?: string;
}

/**
 * Peerings in a virtual network resource.
 */
export interface VirtualNetworkPeeringResponse {
    /**
     * Whether the forwarded traffic from the VMs in the local virtual network will be allowed/disallowed in remote virtual network.
     */
    allowForwardedTraffic?: boolean;
    /**
     * If gateway links can be used in remote virtual networking to link to this virtual network.
     */
    allowGatewayTransit?: boolean;
    /**
     * Whether the VMs in the local virtual network space would be able to access the VMs in remote virtual network space.
     */
    allowVirtualNetworkAccess?: boolean;
    /**
     * If we need to verify the provisioning state of the remote gateway.
     */
    doNotVerifyRemoteGateways?: boolean;
    /**
     * Whether only Ipv6 address space is peered for subnet peering.
     */
    enableOnlyIPv6Peering?: boolean;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The local address space of the local virtual network that is peered.
     */
    localAddressSpace?: AddressSpaceResponse;
    /**
     * List of local subnet names that are subnet peered with remote virtual network.
     */
    localSubnetNames?: string[];
    /**
     * The current local address space of the local virtual network that is peered.
     */
    localVirtualNetworkAddressSpace?: AddressSpaceResponse;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * Whether complete virtual network address space is peered.
     */
    peerCompleteVnets?: boolean;
    /**
     * The status of the virtual network peering.
     */
    peeringState?: string;
    /**
     * The peering sync status of the virtual network peering.
     */
    peeringSyncLevel?: string;
    /**
     * The provisioning state of the virtual network peering resource.
     */
    provisioningState: string;
    /**
     * The reference to the address space peered with the remote virtual network.
     */
    remoteAddressSpace?: AddressSpaceResponse;
    /**
     * The reference to the remote virtual network's Bgp Communities.
     */
    remoteBgpCommunities?: VirtualNetworkBgpCommunitiesResponse;
    /**
     * List of remote subnet names from remote virtual network that are subnet peered.
     */
    remoteSubnetNames?: string[];
    /**
     * The reference to the remote virtual network. The remote virtual network can be in the same or different region (preview). See here to register for the preview and learn more (https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-create-peering).
     */
    remoteVirtualNetwork?: SubResourceResponse;
    /**
     * The reference to the current address space of the remote virtual network.
     */
    remoteVirtualNetworkAddressSpace?: AddressSpaceResponse;
    /**
     * The reference to the remote virtual network's encryption
     */
    remoteVirtualNetworkEncryption: VirtualNetworkEncryptionResponse;
    /**
     * The resourceGuid property of the Virtual Network peering resource.
     */
    resourceGuid: string;
    /**
     * Resource type.
     */
    type?: string;
    /**
     * If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway.
     */
    useRemoteGateways?: boolean;
}

/**
 * Virtual Network Tap resource.
 */
export interface VirtualNetworkTapResponse {
    /**
     * The reference to the private IP address on the internal Load Balancer that will receive the tap.
     */
    destinationLoadBalancerFrontEndIPConfiguration?: FrontendIPConfigurationResponse;
    /**
     * The reference to the private IP Address of the collector nic that will receive the tap.
     */
    destinationNetworkInterfaceIPConfiguration?: NetworkInterfaceIPConfigurationResponse;
    /**
     * The VXLAN destination port that will receive the tapped traffic.
     */
    destinationPort?: number;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Resource location.
     */
    location?: string;
    /**
     * Resource name.
     */
    name: string;
    /**
     * Specifies the list of resource IDs for the network interface IP configuration that needs to be tapped.
     */
    networkInterfaceTapConfigurations: NetworkInterfaceTapConfigurationResponse[];
    /**
     * The provisioning state of the virtual network tap resource.
     */
    provisioningState: string;
    /**
     * The resource GUID property of the virtual network tap resource.
     */
    resourceGuid: string;
    /**
     * Resource tags.
     */
    tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    type: string;
}
/**
 * virtualNetworkTapResponseProvideDefaults sets the appropriate defaults for VirtualNetworkTapResponse
 */
export function virtualNetworkTapResponseProvideDefaults(val: VirtualNetworkTapResponse): VirtualNetworkTapResponse {
    return {
        ...val,
        destinationLoadBalancerFrontEndIPConfiguration: (val.destinationLoadBalancerFrontEndIPConfiguration ? frontendIPConfigurationResponseProvideDefaults(val.destinationLoadBalancerFrontEndIPConfiguration) : undefined),
        destinationNetworkInterfaceIPConfiguration: (val.destinationNetworkInterfaceIPConfiguration ? networkInterfaceIPConfigurationResponseProvideDefaults(val.destinationNetworkInterfaceIPConfiguration) : undefined),
    };
}

/**
 * The VirtualHub Router autoscale configuration.
 */
export interface VirtualRouterAutoScaleConfigurationResponse {
    /**
     * The minimum number of scale units for VirtualHub Router.
     */
    minCapacity?: number;
}

/**
 * List of routes that control routing from VirtualHub into a virtual network connection.
 */
export interface VnetRouteResponse {
    /**
     * The list of references to HubBgpConnection objects.
     */
    bgpConnections: SubResourceResponse[];
    /**
     * List of all Static Routes.
     */
    staticRoutes?: StaticRouteResponse[];
    /**
     * Configuration for static routes on this HubVnetConnection.
     */
    staticRoutesConfig?: StaticRoutesConfigResponse;
}

/**
 * A vpn client connection configuration for client connection configuration.
 */
export interface VngClientConnectionConfigurationResponse {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * The provisioning state of the VngClientConnectionConfiguration resource.
     */
    provisioningState: string;
    /**
     * List of references to virtualNetworkGatewayPolicyGroups
     */
    virtualNetworkGatewayPolicyGroups: SubResourceResponse[];
    /**
     * The reference to the address space resource which represents Address space for P2S VpnClient.
     */
    vpnClientAddressPool: AddressSpaceResponse;
}

/**
 * VpnClientConfiguration for P2S client.
 */
export interface VpnClientConfigurationResponse {
    /**
     * The AADAudience property of the VirtualNetworkGateway resource for vpn client connection used for AAD authentication.
     */
    aadAudience?: string;
    /**
     * The AADIssuer property of the VirtualNetworkGateway resource for vpn client connection used for AAD authentication.
     */
    aadIssuer?: string;
    /**
     * The AADTenant property of the VirtualNetworkGateway resource for vpn client connection used for AAD authentication.
     */
    aadTenant?: string;
    /**
     * The radius server address property of the VirtualNetworkGateway resource for vpn client connection.
     */
    radiusServerAddress?: string;
    /**
     * The radius secret property of the VirtualNetworkGateway resource for vpn client connection.
     */
    radiusServerSecret?: string;
    /**
     * The radiusServers property for multiple radius server configuration.
     */
    radiusServers?: RadiusServerResponse[];
    /**
     * per ip address pool connection policy for virtual network gateway P2S client.
     */
    vngClientConnectionConfigurations?: VngClientConnectionConfigurationResponse[];
    /**
     * VPN authentication types for the virtual network gateway..
     */
    vpnAuthenticationTypes?: string[];
    /**
     * The reference to the address space resource which represents Address space for P2S VpnClient.
     */
    vpnClientAddressPool?: AddressSpaceResponse;
    /**
     * VpnClientIpsecPolicies for virtual network gateway P2S client.
     */
    vpnClientIpsecPolicies?: IpsecPolicyResponse[];
    /**
     * VpnClientProtocols for Virtual network gateway.
     */
    vpnClientProtocols?: string[];
    /**
     * VpnClientRevokedCertificate for Virtual network gateway.
     */
    vpnClientRevokedCertificates?: VpnClientRevokedCertificateResponse[];
    /**
     * VpnClientRootCertificate for virtual network gateway.
     */
    vpnClientRootCertificates?: VpnClientRootCertificateResponse[];
}

/**
 * VPN client connection health detail.
 */
export interface VpnClientConnectionHealthDetailResponse {
    /**
     * The egress bytes per second.
     */
    egressBytesTransferred: number;
    /**
     * The egress packets per second.
     */
    egressPacketsTransferred: number;
    /**
     * The ingress bytes per second.
     */
    ingressBytesTransferred: number;
    /**
     * The ingress packets per second.
     */
    ingressPacketsTransferred: number;
    /**
     * The max band width.
     */
    maxBandwidth: number;
    /**
     * The max packets transferred per second.
     */
    maxPacketsPerSecond: number;
    /**
     * The assigned private Ip of a connected vpn client.
     */
    privateIpAddress: string;
    /**
     * The public Ip of a connected vpn client.
     */
    publicIpAddress: string;
    /**
     * The duration time of a connected vpn client.
     */
    vpnConnectionDuration: number;
    /**
     * The vpn client Id.
     */
    vpnConnectionId: string;
    /**
     * The start time of a connected vpn client.
     */
    vpnConnectionTime: string;
    /**
     * The user name of a connected vpn client.
     */
    vpnUserName: string;
}

/**
 * VpnClientConnectionHealth properties.
 */
export interface VpnClientConnectionHealthResponse {
    /**
     * List of allocated ip addresses to the connected p2s vpn clients.
     */
    allocatedIpAddresses?: string[];
    /**
     * Total of the Egress Bytes Transferred in this connection.
     */
    totalEgressBytesTransferred: number;
    /**
     * Total of the Ingress Bytes Transferred in this P2S Vpn connection.
     */
    totalIngressBytesTransferred: number;
    /**
     * The total of p2s vpn clients connected at this time to this P2SVpnGateway.
     */
    vpnClientConnectionsCount?: number;
}

/**
 * VPN client revoked certificate of virtual network gateway.
 */
export interface VpnClientRevokedCertificateResponse {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * The provisioning state of the VPN client revoked certificate resource.
     */
    provisioningState: string;
    /**
     * The revoked VPN client certificate thumbprint.
     */
    thumbprint?: string;
}

/**
 * VPN client root certificate of virtual network gateway.
 */
export interface VpnClientRootCertificateResponse {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * The provisioning state of the VPN client root certificate resource.
     */
    provisioningState: string;
    /**
     * The certificate public data.
     */
    publicCertData: string;
}

/**
 * VpnConnection Resource.
 */
export interface VpnConnectionResponse {
    /**
     * Expected bandwidth in MBPS.
     */
    connectionBandwidth?: number;
    /**
     * The connection status.
     */
    connectionStatus: string;
    /**
     * DPD timeout in seconds for vpn connection.
     */
    dpdTimeoutSeconds?: number;
    /**
     * Egress bytes transferred.
     */
    egressBytesTransferred: number;
    /**
     * EnableBgp flag.
     */
    enableBgp?: boolean;
    /**
     * Enable internet security.
     */
    enableInternetSecurity?: boolean;
    /**
     * EnableBgp flag.
     */
    enableRateLimiting?: boolean;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Ingress bytes transferred.
     */
    ingressBytesTransferred: number;
    /**
     * The IPSec Policies to be considered by this connection.
     */
    ipsecPolicies?: IpsecPolicyResponse[];
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * The provisioning state of the VPN connection resource.
     */
    provisioningState: string;
    /**
     * Id of the connected vpn site.
     */
    remoteVpnSite?: SubResourceResponse;
    /**
     * The Routing Configuration indicating the associated and propagated route tables on this connection.
     */
    routingConfiguration?: RoutingConfigurationResponse;
    /**
     * Routing weight for vpn connection.
     */
    routingWeight?: number;
    /**
     * SharedKey for the vpn connection.
     */
    sharedKey?: string;
    /**
     * The Traffic Selector Policies to be considered by this connection.
     */
    trafficSelectorPolicies?: TrafficSelectorPolicyResponse[];
    /**
     * Use local azure ip to initiate connection.
     */
    useLocalAzureIpAddress?: boolean;
    /**
     * Enable policy-based traffic selectors.
     */
    usePolicyBasedTrafficSelectors?: boolean;
    /**
     * Connection protocol used for this connection.
     */
    vpnConnectionProtocolType?: string;
    /**
     * List of all vpn site link connections to the gateway.
     */
    vpnLinkConnections?: VpnSiteLinkConnectionResponse[];
}

/**
 * IP Configuration of a VPN Gateway Resource.
 */
export interface VpnGatewayIpConfigurationResponse {
    /**
     * The identifier of the IP configuration for a VPN Gateway.
     */
    id?: string;
    /**
     * The private IP address of this IP configuration.
     */
    privateIpAddress?: string;
    /**
     * The public IP address of this IP configuration.
     */
    publicIpAddress?: string;
}

/**
 * VpnGatewayNatRule Resource.
 */
export interface VpnGatewayNatRuleResponse {
    /**
     * List of egress VpnSiteLinkConnections.
     */
    egressVpnSiteLinkConnections: SubResourceResponse[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * The private IP address external mapping for NAT.
     */
    externalMappings?: VpnNatRuleMappingResponse[];
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * List of ingress VpnSiteLinkConnections.
     */
    ingressVpnSiteLinkConnections: SubResourceResponse[];
    /**
     * The private IP address internal mapping for NAT.
     */
    internalMappings?: VpnNatRuleMappingResponse[];
    /**
     * The IP Configuration ID this NAT rule applies to.
     */
    ipConfigurationId?: string;
    /**
     * The Source NAT direction of a VPN NAT.
     */
    mode?: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * The provisioning state of the NAT Rule resource.
     */
    provisioningState: string;
    /**
     * Resource type.
     */
    type: string;
}

/**
 * BGP settings details for a link.
 */
export interface VpnLinkBgpSettingsResponse {
    /**
     * The BGP speaker's ASN.
     */
    asn?: number;
    /**
     * The BGP peering address and BGP identifier of this BGP speaker.
     */
    bgpPeeringAddress?: string;
}

/**
 * List of properties of a link provider.
 */
export interface VpnLinkProviderPropertiesResponse {
    /**
     * Name of the link provider.
     */
    linkProviderName?: string;
    /**
     * Link speed.
     */
    linkSpeedInMbps?: number;
}

/**
 * Vpn NatRule mapping.
 */
export interface VpnNatRuleMappingResponse {
    /**
     * Address space for Vpn NatRule mapping.
     */
    addressSpace?: string;
    /**
     * Port range for Vpn NatRule mapping.
     */
    portRange?: string;
}

/**
 * Properties of the Radius client root certificate of VpnServerConfiguration.
 */
export interface VpnServerConfigRadiusClientRootCertificateResponse {
    /**
     * The certificate name.
     */
    name?: string;
    /**
     * The Radius client root certificate thumbprint.
     */
    thumbprint?: string;
}

/**
 * Properties of Radius Server root certificate of VpnServerConfiguration.
 */
export interface VpnServerConfigRadiusServerRootCertificateResponse {
    /**
     * The certificate name.
     */
    name?: string;
    /**
     * The certificate public data.
     */
    publicCertData?: string;
}

/**
 * Properties of the revoked VPN client certificate of VpnServerConfiguration.
 */
export interface VpnServerConfigVpnClientRevokedCertificateResponse {
    /**
     * The certificate name.
     */
    name?: string;
    /**
     * The revoked VPN client certificate thumbprint.
     */
    thumbprint?: string;
}

/**
 * Properties of VPN client root certificate of VpnServerConfiguration.
 */
export interface VpnServerConfigVpnClientRootCertificateResponse {
    /**
     * The certificate name.
     */
    name?: string;
    /**
     * The certificate public data.
     */
    publicCertData?: string;
}

/**
 * VpnServerConfiguration PolicyGroup member
 */
export interface VpnServerConfigurationPolicyGroupMemberResponse {
    /**
     * The Vpn Policy member attribute type.
     */
    attributeType?: string;
    /**
     * The value of Attribute used for this VpnServerConfigurationPolicyGroupMember.
     */
    attributeValue?: string;
    /**
     * Name of the VpnServerConfigurationPolicyGroupMember.
     */
    name?: string;
}

/**
 * VpnServerConfigurationPolicyGroup Resource.
 */
export interface VpnServerConfigurationPolicyGroupResponse {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Shows if this is a Default VpnServerConfigurationPolicyGroup or not.
     */
    isDefault?: boolean;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * List of references to P2SConnectionConfigurations.
     */
    p2SConnectionConfigurations: SubResourceResponse[];
    /**
     * Multiple PolicyMembers for VpnServerConfigurationPolicyGroup.
     */
    policyMembers?: VpnServerConfigurationPolicyGroupMemberResponse[];
    /**
     * Priority for VpnServerConfigurationPolicyGroup.
     */
    priority?: number;
    /**
     * The provisioning state of the VpnServerConfigurationPolicyGroup resource.
     */
    provisioningState: string;
    /**
     * Resource type.
     */
    type: string;
}

/**
 * Parameters for VpnServerConfiguration.
 */
export interface VpnServerConfigurationPropertiesResponse {
    /**
     * The set of aad vpn authentication parameters.
     */
    aadAuthenticationParameters?: AadAuthenticationParametersResponse;
    /**
     * List of all VpnServerConfigurationPolicyGroups.
     */
    configurationPolicyGroups?: VpnServerConfigurationPolicyGroupResponse[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * The name of the VpnServerConfiguration that is unique within a resource group.
     */
    name?: string;
    /**
     * List of references to P2SVpnGateways.
     */
    p2SVpnGateways: P2SVpnGatewayResponse[];
    /**
     * The provisioning state of the VpnServerConfiguration resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    provisioningState: string;
    /**
     * Radius client root certificate of VpnServerConfiguration.
     */
    radiusClientRootCertificates?: VpnServerConfigRadiusClientRootCertificateResponse[];
    /**
     * The radius server address property of the VpnServerConfiguration resource for point to site client connection.
     */
    radiusServerAddress?: string;
    /**
     * Radius Server root certificate of VpnServerConfiguration.
     */
    radiusServerRootCertificates?: VpnServerConfigRadiusServerRootCertificateResponse[];
    /**
     * The radius secret property of the VpnServerConfiguration resource for point to site client connection.
     */
    radiusServerSecret?: string;
    /**
     * Multiple Radius Server configuration for VpnServerConfiguration.
     */
    radiusServers?: RadiusServerResponse[];
    /**
     * VPN authentication types for the VpnServerConfiguration.
     */
    vpnAuthenticationTypes?: string[];
    /**
     * VpnClientIpsecPolicies for VpnServerConfiguration.
     */
    vpnClientIpsecPolicies?: IpsecPolicyResponse[];
    /**
     * VPN client revoked certificate of VpnServerConfiguration.
     */
    vpnClientRevokedCertificates?: VpnServerConfigVpnClientRevokedCertificateResponse[];
    /**
     * VPN client root certificate of VpnServerConfiguration.
     */
    vpnClientRootCertificates?: VpnServerConfigVpnClientRootCertificateResponse[];
    /**
     * VPN protocols for the VpnServerConfiguration.
     */
    vpnProtocols?: string[];
}

/**
 * VpnSiteLinkConnection Resource.
 */
export interface VpnSiteLinkConnectionResponse {
    /**
     * Expected bandwidth in MBPS.
     */
    connectionBandwidth?: number;
    /**
     * The connection status.
     */
    connectionStatus: string;
    /**
     * Dead Peer Detection timeout in seconds for VpnLink connection.
     */
    dpdTimeoutSeconds?: number;
    /**
     * Egress bytes transferred.
     */
    egressBytesTransferred: number;
    /**
     * List of egress NatRules.
     */
    egressNatRules?: SubResourceResponse[];
    /**
     * EnableBgp flag.
     */
    enableBgp?: boolean;
    /**
     * EnableBgp flag.
     */
    enableRateLimiting?: boolean;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * Ingress bytes transferred.
     */
    ingressBytesTransferred: number;
    /**
     * List of ingress NatRules.
     */
    ingressNatRules?: SubResourceResponse[];
    /**
     * The IPSec Policies to be considered by this connection.
     */
    ipsecPolicies?: IpsecPolicyResponse[];
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * The provisioning state of the VPN site link connection resource.
     */
    provisioningState: string;
    /**
     * Routing weight for vpn connection.
     */
    routingWeight?: number;
    /**
     * SharedKey for the vpn connection.
     */
    sharedKey?: string;
    /**
     * Resource type.
     */
    type: string;
    /**
     * Use local azure ip to initiate connection.
     */
    useLocalAzureIpAddress?: boolean;
    /**
     * Enable policy-based traffic selectors.
     */
    usePolicyBasedTrafficSelectors?: boolean;
    /**
     * Connection protocol used for this connection.
     */
    vpnConnectionProtocolType?: string;
    /**
     * vpnGatewayCustomBgpAddresses used by this connection.
     */
    vpnGatewayCustomBgpAddresses?: GatewayCustomBgpIpAddressIpConfigurationResponse[];
    /**
     * Vpn link connection mode.
     */
    vpnLinkConnectionMode?: string;
    /**
     * Id of the connected vpn site link.
     */
    vpnSiteLink?: SubResourceResponse;
}

/**
 * VpnSiteLink Resource.
 */
export interface VpnSiteLinkResponse {
    /**
     * The set of bgp properties.
     */
    bgpProperties?: VpnLinkBgpSettingsResponse;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * FQDN of vpn-site-link.
     */
    fqdn?: string;
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The ip-address for the vpn-site-link.
     */
    ipAddress?: string;
    /**
     * The link provider properties.
     */
    linkProperties?: VpnLinkProviderPropertiesResponse;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * The provisioning state of the VPN site link resource.
     */
    provisioningState: string;
    /**
     * Resource type.
     */
    type: string;
}

/**
 * Defines contents of a web application rule.
 */
export interface WebApplicationFirewallCustomRuleResponse {
    /**
     * Type of Actions.
     */
    action: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * List of user session identifier group by clauses.
     */
    groupByUserSession?: GroupByUserSessionResponse[];
    /**
     * List of match conditions.
     */
    matchConditions: MatchConditionResponse[];
    /**
     * The name of the resource that is unique within a policy. This name can be used to access the resource.
     */
    name?: string;
    /**
     * Priority of the rule. Rules with a lower value will be evaluated before rules with a higher value.
     */
    priority: number;
    /**
     * Duration over which Rate Limit policy will be applied. Applies only when ruleType is RateLimitRule.
     */
    rateLimitDuration?: string;
    /**
     * Rate Limit threshold to apply in case ruleType is RateLimitRule. Must be greater than or equal to 1
     */
    rateLimitThreshold?: number;
    /**
     * The rule type.
     */
    ruleType: string;
    /**
     * Describes if the custom rule is in enabled or disabled state. Defaults to Enabled if not specified.
     */
    state?: string;
}

/**
 * Allow certain variables to be scrubbed on WAF logs
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
     * Defines the state of log scrubbing rule. Default value is Enabled.
     */
    state?: string;
}
