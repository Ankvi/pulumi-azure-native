export const ApplicationGatewayCookieBasedAffinity = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Cookie based affinity.
 */
export type ApplicationGatewayCookieBasedAffinity = (typeof ApplicationGatewayCookieBasedAffinity)[keyof typeof ApplicationGatewayCookieBasedAffinity];

export const ApplicationGatewayCustomErrorStatusCode = {
    HttpStatus403: "HttpStatus403",
    HttpStatus502: "HttpStatus502",
} as const;

/**
 * Status code of the application gateway customer error.
 */
export type ApplicationGatewayCustomErrorStatusCode = (typeof ApplicationGatewayCustomErrorStatusCode)[keyof typeof ApplicationGatewayCustomErrorStatusCode];

export const ApplicationGatewayFirewallMode = {
    Detection: "Detection",
    Prevention: "Prevention",
} as const;

/**
 * Web application firewall mode.
 */
export type ApplicationGatewayFirewallMode = (typeof ApplicationGatewayFirewallMode)[keyof typeof ApplicationGatewayFirewallMode];

export const ApplicationGatewayProtocol = {
    Http: "Http",
    Https: "Https",
} as const;

/**
 * The protocol used for the probe.
 */
export type ApplicationGatewayProtocol = (typeof ApplicationGatewayProtocol)[keyof typeof ApplicationGatewayProtocol];

export const ApplicationGatewayRedirectType = {
    Permanent: "Permanent",
    Found: "Found",
    SeeOther: "SeeOther",
    Temporary: "Temporary",
} as const;

/**
 * HTTP redirection type.
 */
export type ApplicationGatewayRedirectType = (typeof ApplicationGatewayRedirectType)[keyof typeof ApplicationGatewayRedirectType];

export const ApplicationGatewayRequestRoutingRuleType = {
    Basic: "Basic",
    PathBasedRouting: "PathBasedRouting",
} as const;

/**
 * Rule type.
 */
export type ApplicationGatewayRequestRoutingRuleType = (typeof ApplicationGatewayRequestRoutingRuleType)[keyof typeof ApplicationGatewayRequestRoutingRuleType];

export const ApplicationGatewaySkuName = {
    Standard_Small: "Standard_Small",
    Standard_Medium: "Standard_Medium",
    Standard_Large: "Standard_Large",
    WAF_Medium: "WAF_Medium",
    WAF_Large: "WAF_Large",
    Standard_v2: "Standard_v2",
    WAF_v2: "WAF_v2",
} as const;

/**
 * Name of an application gateway SKU.
 */
export type ApplicationGatewaySkuName = (typeof ApplicationGatewaySkuName)[keyof typeof ApplicationGatewaySkuName];

export const ApplicationGatewaySslCipherSuite = {
    TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384: "TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384",
    TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256: "TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256",
    TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA: "TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA",
    TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA: "TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA",
    TLS_DHE_RSA_WITH_AES_256_GCM_SHA384: "TLS_DHE_RSA_WITH_AES_256_GCM_SHA384",
    TLS_DHE_RSA_WITH_AES_128_GCM_SHA256: "TLS_DHE_RSA_WITH_AES_128_GCM_SHA256",
    TLS_DHE_RSA_WITH_AES_256_CBC_SHA: "TLS_DHE_RSA_WITH_AES_256_CBC_SHA",
    TLS_DHE_RSA_WITH_AES_128_CBC_SHA: "TLS_DHE_RSA_WITH_AES_128_CBC_SHA",
    TLS_RSA_WITH_AES_256_GCM_SHA384: "TLS_RSA_WITH_AES_256_GCM_SHA384",
    TLS_RSA_WITH_AES_128_GCM_SHA256: "TLS_RSA_WITH_AES_128_GCM_SHA256",
    TLS_RSA_WITH_AES_256_CBC_SHA256: "TLS_RSA_WITH_AES_256_CBC_SHA256",
    TLS_RSA_WITH_AES_128_CBC_SHA256: "TLS_RSA_WITH_AES_128_CBC_SHA256",
    TLS_RSA_WITH_AES_256_CBC_SHA: "TLS_RSA_WITH_AES_256_CBC_SHA",
    TLS_RSA_WITH_AES_128_CBC_SHA: "TLS_RSA_WITH_AES_128_CBC_SHA",
    TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384: "TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384",
    TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256: "TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256",
    TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384: "TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384",
    TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256: "TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256",
    TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA: "TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA",
    TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA: "TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA",
    TLS_DHE_DSS_WITH_AES_256_CBC_SHA256: "TLS_DHE_DSS_WITH_AES_256_CBC_SHA256",
    TLS_DHE_DSS_WITH_AES_128_CBC_SHA256: "TLS_DHE_DSS_WITH_AES_128_CBC_SHA256",
    TLS_DHE_DSS_WITH_AES_256_CBC_SHA: "TLS_DHE_DSS_WITH_AES_256_CBC_SHA",
    TLS_DHE_DSS_WITH_AES_128_CBC_SHA: "TLS_DHE_DSS_WITH_AES_128_CBC_SHA",
    TLS_RSA_WITH_3DES_EDE_CBC_SHA: "TLS_RSA_WITH_3DES_EDE_CBC_SHA",
    TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA: "TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA",
    TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256: "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256",
    TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384: "TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384",
} as const;

/**
 * Ssl cipher suites enums.
 */
export type ApplicationGatewaySslCipherSuite = (typeof ApplicationGatewaySslCipherSuite)[keyof typeof ApplicationGatewaySslCipherSuite];

export const ApplicationGatewaySslPolicyName = {
    AppGwSslPolicy20150501: "AppGwSslPolicy20150501",
    AppGwSslPolicy20170401: "AppGwSslPolicy20170401",
    AppGwSslPolicy20170401S: "AppGwSslPolicy20170401S",
} as const;

/**
 * Name of Ssl predefined policy.
 */
export type ApplicationGatewaySslPolicyName = (typeof ApplicationGatewaySslPolicyName)[keyof typeof ApplicationGatewaySslPolicyName];

export const ApplicationGatewaySslPolicyType = {
    Predefined: "Predefined",
    Custom: "Custom",
} as const;

/**
 * Type of Ssl Policy.
 */
export type ApplicationGatewaySslPolicyType = (typeof ApplicationGatewaySslPolicyType)[keyof typeof ApplicationGatewaySslPolicyType];

export const ApplicationGatewaySslProtocol = {
    TLSv1_0: "TLSv1_0",
    TLSv1_1: "TLSv1_1",
    TLSv1_2: "TLSv1_2",
} as const;

/**
 * Minimum version of Ssl protocol to be supported on application gateway.
 */
export type ApplicationGatewaySslProtocol = (typeof ApplicationGatewaySslProtocol)[keyof typeof ApplicationGatewaySslProtocol];

export const ApplicationGatewayTier = {
    Standard: "Standard",
    WAF: "WAF",
    Standard_v2: "Standard_v2",
    WAF_v2: "WAF_v2",
} as const;

/**
 * Tier of an application gateway.
 */
export type ApplicationGatewayTier = (typeof ApplicationGatewayTier)[keyof typeof ApplicationGatewayTier];

export const AuthorizationUseStatus = {
    Available: "Available",
    InUse: "InUse",
} as const;

/**
 * The authorization use status.
 */
export type AuthorizationUseStatus = (typeof AuthorizationUseStatus)[keyof typeof AuthorizationUseStatus];

export const DdosSettingsProtectionCoverage = {
    Basic: "Basic",
    Standard: "Standard",
} as const;

/**
 * The DDoS protection policy customizability of the public IP. Only standard coverage will have the ability to be customized.
 */
export type DdosSettingsProtectionCoverage = (typeof DdosSettingsProtectionCoverage)[keyof typeof DdosSettingsProtectionCoverage];

export const ExpressRouteCircuitPeeringAdvertisedPublicPrefixState = {
    NotConfigured: "NotConfigured",
    Configuring: "Configuring",
    Configured: "Configured",
    ValidationNeeded: "ValidationNeeded",
} as const;

/**
 * The advertised public prefix state of the Peering resource.
 */
export type ExpressRouteCircuitPeeringAdvertisedPublicPrefixState = (typeof ExpressRouteCircuitPeeringAdvertisedPublicPrefixState)[keyof typeof ExpressRouteCircuitPeeringAdvertisedPublicPrefixState];

export const ExpressRouteCircuitPeeringState = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * The state of peering.
 */
export type ExpressRouteCircuitPeeringState = (typeof ExpressRouteCircuitPeeringState)[keyof typeof ExpressRouteCircuitPeeringState];

export const ExpressRouteCircuitSkuFamily = {
    UnlimitedData: "UnlimitedData",
    MeteredData: "MeteredData",
} as const;

/**
 * The family of the SKU.
 */
export type ExpressRouteCircuitSkuFamily = (typeof ExpressRouteCircuitSkuFamily)[keyof typeof ExpressRouteCircuitSkuFamily];

export const ExpressRouteCircuitSkuTier = {
    Standard: "Standard",
    Premium: "Premium",
    Basic: "Basic",
    Local: "Local",
} as const;

/**
 * The tier of the SKU.
 */
export type ExpressRouteCircuitSkuTier = (typeof ExpressRouteCircuitSkuTier)[keyof typeof ExpressRouteCircuitSkuTier];

export const ExpressRoutePeeringState = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * The peering state.
 */
export type ExpressRoutePeeringState = (typeof ExpressRoutePeeringState)[keyof typeof ExpressRoutePeeringState];

export const ExpressRoutePeeringType = {
    AzurePublicPeering: "AzurePublicPeering",
    AzurePrivatePeering: "AzurePrivatePeering",
    MicrosoftPeering: "MicrosoftPeering",
} as const;

/**
 * The peering type.
 */
export type ExpressRoutePeeringType = (typeof ExpressRoutePeeringType)[keyof typeof ExpressRoutePeeringType];

export const IPAllocationMethod = {
    Static: "Static",
    Dynamic: "Dynamic",
} as const;

/**
 * The public IP address allocation method.
 */
export type IPAllocationMethod = (typeof IPAllocationMethod)[keyof typeof IPAllocationMethod];

export const IPVersion = {
    IPv4: "IPv4",
    IPv6: "IPv6",
} as const;

/**
 * The public IP address version.
 */
export type IPVersion = (typeof IPVersion)[keyof typeof IPVersion];

export const LoadBalancerOutboundRuleProtocol = {
    Tcp: "Tcp",
    Udp: "Udp",
    All: "All",
} as const;

/**
 * The protocol for the outbound rule in load balancer.
 */
export type LoadBalancerOutboundRuleProtocol = (typeof LoadBalancerOutboundRuleProtocol)[keyof typeof LoadBalancerOutboundRuleProtocol];

export const LoadBalancerSkuName = {
    Basic: "Basic",
    Standard: "Standard",
} as const;

/**
 * Name of a load balancer SKU.
 */
export type LoadBalancerSkuName = (typeof LoadBalancerSkuName)[keyof typeof LoadBalancerSkuName];

export const LoadDistribution = {
    Default: "Default",
    SourceIP: "SourceIP",
    SourceIPProtocol: "SourceIPProtocol",
} as const;

/**
 * The load distribution policy for this rule.
 */
export type LoadDistribution = (typeof LoadDistribution)[keyof typeof LoadDistribution];

export const NatGatewaySkuName = {
    Standard: "Standard",
} as const;

/**
 * Name of Nat Gateway SKU.
 */
export type NatGatewaySkuName = (typeof NatGatewaySkuName)[keyof typeof NatGatewaySkuName];

export const ProbeProtocol = {
    Http: "Http",
    Tcp: "Tcp",
    Https: "Https",
} as const;

/**
 * The protocol of the end point. If 'Tcp' is specified, a received ACK is required for the probe to be successful. If 'Http' or 'Https' is specified, a 200 OK response from the specifies URI is required for the probe to be successful.
 */
export type ProbeProtocol = (typeof ProbeProtocol)[keyof typeof ProbeProtocol];

export const PublicIPAddressSkuName = {
    Basic: "Basic",
    Standard: "Standard",
} as const;

/**
 * Name of a public IP address SKU.
 */
export type PublicIPAddressSkuName = (typeof PublicIPAddressSkuName)[keyof typeof PublicIPAddressSkuName];

export const PublicIPPrefixSkuName = {
    Standard: "Standard",
} as const;

/**
 * Name of a public IP prefix SKU.
 */
export type PublicIPPrefixSkuName = (typeof PublicIPPrefixSkuName)[keyof typeof PublicIPPrefixSkuName];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
    None: "None",
} as const;

/**
 * The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const RouteNextHopType = {
    VirtualNetworkGateway: "VirtualNetworkGateway",
    VnetLocal: "VnetLocal",
    Internet: "Internet",
    VirtualAppliance: "VirtualAppliance",
    None: "None",
} as const;

/**
 * The type of Azure hop the packet should be sent to.
 */
export type RouteNextHopType = (typeof RouteNextHopType)[keyof typeof RouteNextHopType];

export const SecurityRuleAccess = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

/**
 * The network traffic is allowed or denied.
 */
export type SecurityRuleAccess = (typeof SecurityRuleAccess)[keyof typeof SecurityRuleAccess];

export const SecurityRuleDirection = {
    Inbound: "Inbound",
    Outbound: "Outbound",
} as const;

/**
 * The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic.
 */
export type SecurityRuleDirection = (typeof SecurityRuleDirection)[keyof typeof SecurityRuleDirection];

export const SecurityRuleProtocol = {
    Tcp: "Tcp",
    Udp: "Udp",
    Icmp: "Icmp",
    Esp: "Esp",
    Asterisk: "*",
} as const;

/**
 * Network protocol this rule applies to.
 */
export type SecurityRuleProtocol = (typeof SecurityRuleProtocol)[keyof typeof SecurityRuleProtocol];

export const ServiceProviderProvisioningState = {
    NotProvisioned: "NotProvisioned",
    Provisioning: "Provisioning",
    Provisioned: "Provisioned",
    Deprovisioning: "Deprovisioning",
} as const;

/**
 * The ServiceProviderProvisioningState state of the resource.
 */
export type ServiceProviderProvisioningState = (typeof ServiceProviderProvisioningState)[keyof typeof ServiceProviderProvisioningState];

export const TransportProtocol = {
    Udp: "Udp",
    Tcp: "Tcp",
    All: "All",
} as const;

/**
 * The reference to the transport protocol used by the load balancing rule.
 */
export type TransportProtocol = (typeof TransportProtocol)[keyof typeof TransportProtocol];

export const VirtualNetworkPeeringState = {
    Initiated: "Initiated",
    Connected: "Connected",
    Disconnected: "Disconnected",
} as const;

/**
 * The status of the virtual network peering.
 */
export type VirtualNetworkPeeringState = (typeof VirtualNetworkPeeringState)[keyof typeof VirtualNetworkPeeringState];
