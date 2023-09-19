export const Access = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

export type Access = (typeof Access)[keyof typeof Access];

export const ApplicationGatewayCookieBasedAffinity = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type ApplicationGatewayCookieBasedAffinity = (typeof ApplicationGatewayCookieBasedAffinity)[keyof typeof ApplicationGatewayCookieBasedAffinity];

export const ApplicationGatewayCustomErrorStatusCode = {
    HttpStatus403: "HttpStatus403",
    HttpStatus502: "HttpStatus502",
} as const;

export type ApplicationGatewayCustomErrorStatusCode = (typeof ApplicationGatewayCustomErrorStatusCode)[keyof typeof ApplicationGatewayCustomErrorStatusCode];

export const ApplicationGatewayFirewallMode = {
    Detection: "Detection",
    Prevention: "Prevention",
} as const;

export type ApplicationGatewayFirewallMode = (typeof ApplicationGatewayFirewallMode)[keyof typeof ApplicationGatewayFirewallMode];

export const ApplicationGatewayProtocol = {
    Http: "Http",
    Https: "Https",
} as const;

export type ApplicationGatewayProtocol = (typeof ApplicationGatewayProtocol)[keyof typeof ApplicationGatewayProtocol];

export const ApplicationGatewayRedirectType = {
    Permanent: "Permanent",
    Found: "Found",
    SeeOther: "SeeOther",
    Temporary: "Temporary",
} as const;

export type ApplicationGatewayRedirectType = (typeof ApplicationGatewayRedirectType)[keyof typeof ApplicationGatewayRedirectType];

export const ApplicationGatewayRequestRoutingRuleType = {
    Basic: "Basic",
    PathBasedRouting: "PathBasedRouting",
} as const;

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

export type ApplicationGatewaySslCipherSuite = (typeof ApplicationGatewaySslCipherSuite)[keyof typeof ApplicationGatewaySslCipherSuite];

export const ApplicationGatewaySslPolicyName = {
    AppGwSslPolicy20150501: "AppGwSslPolicy20150501",
    AppGwSslPolicy20170401: "AppGwSslPolicy20170401",
    AppGwSslPolicy20170401S: "AppGwSslPolicy20170401S",
} as const;

export type ApplicationGatewaySslPolicyName = (typeof ApplicationGatewaySslPolicyName)[keyof typeof ApplicationGatewaySslPolicyName];

export const ApplicationGatewaySslPolicyType = {
    Predefined: "Predefined",
    Custom: "Custom",
} as const;

export type ApplicationGatewaySslPolicyType = (typeof ApplicationGatewaySslPolicyType)[keyof typeof ApplicationGatewaySslPolicyType];

export const ApplicationGatewaySslProtocol = {
    TLSv1_0: "TLSv1_0",
    TLSv1_1: "TLSv1_1",
    TLSv1_2: "TLSv1_2",
} as const;

export type ApplicationGatewaySslProtocol = (typeof ApplicationGatewaySslProtocol)[keyof typeof ApplicationGatewaySslProtocol];

export const ApplicationGatewayTier = {
    Standard: "Standard",
    WAF: "WAF",
    Standard_v2: "Standard_v2",
    WAF_v2: "WAF_v2",
} as const;

export type ApplicationGatewayTier = (typeof ApplicationGatewayTier)[keyof typeof ApplicationGatewayTier];

export const DdosSettingsProtectionCoverage = {
    Basic: "Basic",
    Standard: "Standard",
} as const;

export type DdosSettingsProtectionCoverage = (typeof DdosSettingsProtectionCoverage)[keyof typeof DdosSettingsProtectionCoverage];

export const DhGroup = {
    None: "None",
    DHGroup1: "DHGroup1",
    DHGroup2: "DHGroup2",
    DHGroup14: "DHGroup14",
    DHGroup2048: "DHGroup2048",
    ECP256: "ECP256",
    ECP384: "ECP384",
    DHGroup24: "DHGroup24",
} as const;

export type DhGroup = (typeof DhGroup)[keyof typeof DhGroup];

export const ExpressRouteCircuitPeeringAdvertisedPublicPrefixState = {
    NotConfigured: "NotConfigured",
    Configuring: "Configuring",
    Configured: "Configured",
    ValidationNeeded: "ValidationNeeded",
} as const;

export type ExpressRouteCircuitPeeringAdvertisedPublicPrefixState = (typeof ExpressRouteCircuitPeeringAdvertisedPublicPrefixState)[keyof typeof ExpressRouteCircuitPeeringAdvertisedPublicPrefixState];

export const ExpressRouteCircuitPeeringState = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type ExpressRouteCircuitPeeringState = (typeof ExpressRouteCircuitPeeringState)[keyof typeof ExpressRouteCircuitPeeringState];

export const ExpressRouteLinkAdminState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type ExpressRouteLinkAdminState = (typeof ExpressRouteLinkAdminState)[keyof typeof ExpressRouteLinkAdminState];

export const ExpressRouteLinkMacSecCipher = {
    Gcm_aes_128: "gcm-aes-128",
    Gcm_aes_256: "gcm-aes-256",
} as const;

export type ExpressRouteLinkMacSecCipher = (typeof ExpressRouteLinkMacSecCipher)[keyof typeof ExpressRouteLinkMacSecCipher];

export const ExpressRoutePeeringState = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type ExpressRoutePeeringState = (typeof ExpressRoutePeeringState)[keyof typeof ExpressRoutePeeringState];

export const ExpressRoutePeeringType = {
    AzurePublicPeering: "AzurePublicPeering",
    AzurePrivatePeering: "AzurePrivatePeering",
    MicrosoftPeering: "MicrosoftPeering",
} as const;

export type ExpressRoutePeeringType = (typeof ExpressRoutePeeringType)[keyof typeof ExpressRoutePeeringType];

export const ExpressRoutePortsEncapsulation = {
    Dot1Q: "Dot1Q",
    QinQ: "QinQ",
} as const;

export type ExpressRoutePortsEncapsulation = (typeof ExpressRoutePortsEncapsulation)[keyof typeof ExpressRoutePortsEncapsulation];

export const IPAllocationMethod = {
    Static: "Static",
    Dynamic: "Dynamic",
} as const;

export type IPAllocationMethod = (typeof IPAllocationMethod)[keyof typeof IPAllocationMethod];

export const IPVersion = {
    IPv4: "IPv4",
    IPv6: "IPv6",
} as const;

export type IPVersion = (typeof IPVersion)[keyof typeof IPVersion];

export const IkeEncryption = {
    DES: "DES",
    DES3: "DES3",
    AES128: "AES128",
    AES192: "AES192",
    AES256: "AES256",
    GCMAES256: "GCMAES256",
    GCMAES128: "GCMAES128",
} as const;

export type IkeEncryption = (typeof IkeEncryption)[keyof typeof IkeEncryption];

export const IkeIntegrity = {
    MD5: "MD5",
    SHA1: "SHA1",
    SHA256: "SHA256",
    SHA384: "SHA384",
    GCMAES256: "GCMAES256",
    GCMAES128: "GCMAES128",
} as const;

export type IkeIntegrity = (typeof IkeIntegrity)[keyof typeof IkeIntegrity];

export const IpsecEncryption = {
    None: "None",
    DES: "DES",
    DES3: "DES3",
    AES128: "AES128",
    AES192: "AES192",
    AES256: "AES256",
    GCMAES128: "GCMAES128",
    GCMAES192: "GCMAES192",
    GCMAES256: "GCMAES256",
} as const;

export type IpsecEncryption = (typeof IpsecEncryption)[keyof typeof IpsecEncryption];

export const IpsecIntegrity = {
    MD5: "MD5",
    SHA1: "SHA1",
    SHA256: "SHA256",
    GCMAES128: "GCMAES128",
    GCMAES192: "GCMAES192",
    GCMAES256: "GCMAES256",
} as const;

export type IpsecIntegrity = (typeof IpsecIntegrity)[keyof typeof IpsecIntegrity];

export const LoadBalancerOutboundRuleProtocol = {
    Tcp: "Tcp",
    Udp: "Udp",
    All: "All",
} as const;

export type LoadBalancerOutboundRuleProtocol = (typeof LoadBalancerOutboundRuleProtocol)[keyof typeof LoadBalancerOutboundRuleProtocol];

export const LoadBalancerSkuName = {
    Basic: "Basic",
    Standard: "Standard",
} as const;

export type LoadBalancerSkuName = (typeof LoadBalancerSkuName)[keyof typeof LoadBalancerSkuName];

export const LoadDistribution = {
    Default: "Default",
    SourceIP: "SourceIP",
    SourceIPProtocol: "SourceIPProtocol",
} as const;

export type LoadDistribution = (typeof LoadDistribution)[keyof typeof LoadDistribution];

export const NatGatewaySkuName = {
    Standard: "Standard",
} as const;

export type NatGatewaySkuName = (typeof NatGatewaySkuName)[keyof typeof NatGatewaySkuName];

export const PfsGroup = {
    None: "None",
    PFS1: "PFS1",
    PFS2: "PFS2",
    PFS2048: "PFS2048",
    ECP256: "ECP256",
    ECP384: "ECP384",
    PFS24: "PFS24",
    PFS14: "PFS14",
    PFSMM: "PFSMM",
} as const;

export type PfsGroup = (typeof PfsGroup)[keyof typeof PfsGroup];

export const ProbeProtocol = {
    Http: "Http",
    Tcp: "Tcp",
    Https: "Https",
} as const;

export type ProbeProtocol = (typeof ProbeProtocol)[keyof typeof ProbeProtocol];

export const PublicIPAddressSkuName = {
    Basic: "Basic",
    Standard: "Standard",
} as const;

export type PublicIPAddressSkuName = (typeof PublicIPAddressSkuName)[keyof typeof PublicIPAddressSkuName];

export const PublicIPPrefixSkuName = {
    Standard: "Standard",
} as const;

export type PublicIPPrefixSkuName = (typeof PublicIPPrefixSkuName)[keyof typeof PublicIPPrefixSkuName];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
    None: "None",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const RouteFilterRuleType = {
    Community: "Community",
} as const;

export type RouteFilterRuleType = (typeof RouteFilterRuleType)[keyof typeof RouteFilterRuleType];

export const RouteNextHopType = {
    VirtualNetworkGateway: "VirtualNetworkGateway",
    VnetLocal: "VnetLocal",
    Internet: "Internet",
    VirtualAppliance: "VirtualAppliance",
    None: "None",
} as const;

export type RouteNextHopType = (typeof RouteNextHopType)[keyof typeof RouteNextHopType];

export const SecurityRuleAccess = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

export type SecurityRuleAccess = (typeof SecurityRuleAccess)[keyof typeof SecurityRuleAccess];

export const SecurityRuleDirection = {
    Inbound: "Inbound",
    Outbound: "Outbound",
} as const;

export type SecurityRuleDirection = (typeof SecurityRuleDirection)[keyof typeof SecurityRuleDirection];

export const SecurityRuleProtocol = {
    Tcp: "Tcp",
    Udp: "Udp",
    Icmp: "Icmp",
    Esp: "Esp",
    Asterisk: "*",
    Ah: "Ah",
} as const;

export type SecurityRuleProtocol = (typeof SecurityRuleProtocol)[keyof typeof SecurityRuleProtocol];

export const TransportProtocol = {
    Udp: "Udp",
    Tcp: "Tcp",
    All: "All",
} as const;

export type TransportProtocol = (typeof TransportProtocol)[keyof typeof TransportProtocol];

export const VirtualNetworkGatewayConnectionProtocol = {
    IKEv2: "IKEv2",
    IKEv1: "IKEv1",
} as const;

export type VirtualNetworkGatewayConnectionProtocol = (typeof VirtualNetworkGatewayConnectionProtocol)[keyof typeof VirtualNetworkGatewayConnectionProtocol];

export const VirtualNetworkGatewayConnectionType = {
    IPsec: "IPsec",
    Vnet2Vnet: "Vnet2Vnet",
    ExpressRoute: "ExpressRoute",
    VPNClient: "VPNClient",
} as const;

export type VirtualNetworkGatewayConnectionType = (typeof VirtualNetworkGatewayConnectionType)[keyof typeof VirtualNetworkGatewayConnectionType];

export const VirtualNetworkGatewaySkuName = {
    Basic: "Basic",
    HighPerformance: "HighPerformance",
    Standard: "Standard",
    UltraPerformance: "UltraPerformance",
    VpnGw1: "VpnGw1",
    VpnGw2: "VpnGw2",
    VpnGw3: "VpnGw3",
    VpnGw4: "VpnGw4",
    VpnGw5: "VpnGw5",
    VpnGw1AZ: "VpnGw1AZ",
    VpnGw2AZ: "VpnGw2AZ",
    VpnGw3AZ: "VpnGw3AZ",
    VpnGw4AZ: "VpnGw4AZ",
    VpnGw5AZ: "VpnGw5AZ",
    ErGw1AZ: "ErGw1AZ",
    ErGw2AZ: "ErGw2AZ",
    ErGw3AZ: "ErGw3AZ",
} as const;

export type VirtualNetworkGatewaySkuName = (typeof VirtualNetworkGatewaySkuName)[keyof typeof VirtualNetworkGatewaySkuName];

export const VirtualNetworkGatewaySkuTier = {
    Basic: "Basic",
    HighPerformance: "HighPerformance",
    Standard: "Standard",
    UltraPerformance: "UltraPerformance",
    VpnGw1: "VpnGw1",
    VpnGw2: "VpnGw2",
    VpnGw3: "VpnGw3",
    VpnGw4: "VpnGw4",
    VpnGw5: "VpnGw5",
    VpnGw1AZ: "VpnGw1AZ",
    VpnGw2AZ: "VpnGw2AZ",
    VpnGw3AZ: "VpnGw3AZ",
    VpnGw4AZ: "VpnGw4AZ",
    VpnGw5AZ: "VpnGw5AZ",
    ErGw1AZ: "ErGw1AZ",
    ErGw2AZ: "ErGw2AZ",
    ErGw3AZ: "ErGw3AZ",
} as const;

export type VirtualNetworkGatewaySkuTier = (typeof VirtualNetworkGatewaySkuTier)[keyof typeof VirtualNetworkGatewaySkuTier];

export const VirtualNetworkGatewayType = {
    Vpn: "Vpn",
    ExpressRoute: "ExpressRoute",
} as const;

export type VirtualNetworkGatewayType = (typeof VirtualNetworkGatewayType)[keyof typeof VirtualNetworkGatewayType];

export const VirtualNetworkPeeringState = {
    Initiated: "Initiated",
    Connected: "Connected",
    Disconnected: "Disconnected",
} as const;

export type VirtualNetworkPeeringState = (typeof VirtualNetworkPeeringState)[keyof typeof VirtualNetworkPeeringState];

export const VpnClientProtocol = {
    IkeV2: "IkeV2",
    SSTP: "SSTP",
    OpenVPN: "OpenVPN",
} as const;

export type VpnClientProtocol = (typeof VpnClientProtocol)[keyof typeof VpnClientProtocol];

export const VpnGatewayGeneration = {
    None: "None",
    Generation1: "Generation1",
    Generation2: "Generation2",
} as const;

export type VpnGatewayGeneration = (typeof VpnGatewayGeneration)[keyof typeof VpnGatewayGeneration];

export const VpnType = {
    PolicyBased: "PolicyBased",
    RouteBased: "RouteBased",
} as const;

export type VpnType = (typeof VpnType)[keyof typeof VpnType];
