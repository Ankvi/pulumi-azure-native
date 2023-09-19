export const Access = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

export type Access = (typeof Access)[keyof typeof Access];

export const ActionType = {
    AnomalyScoring: "AnomalyScoring",
    Allow: "Allow",
    Block: "Block",
    Log: "Log",
} as const;

export type ActionType = (typeof ActionType)[keyof typeof ActionType];

export const AddressPrefixType = {
    IPPrefix: "IPPrefix",
    ServiceTag: "ServiceTag",
} as const;

export type AddressPrefixType = (typeof AddressPrefixType)[keyof typeof AddressPrefixType];

export const AdminRuleKind = {
    Custom: "Custom",
    Default: "Default",
} as const;

export type AdminRuleKind = (typeof AdminRuleKind)[keyof typeof AdminRuleKind];

export const AdminState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type AdminState = (typeof AdminState)[keyof typeof AdminState];

export const ApplicationGatewayClientRevocationOptions = {
    None: "None",
    OCSP: "OCSP",
} as const;

export type ApplicationGatewayClientRevocationOptions = (typeof ApplicationGatewayClientRevocationOptions)[keyof typeof ApplicationGatewayClientRevocationOptions];

export const ApplicationGatewayCookieBasedAffinity = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type ApplicationGatewayCookieBasedAffinity = (typeof ApplicationGatewayCookieBasedAffinity)[keyof typeof ApplicationGatewayCookieBasedAffinity];

export const ApplicationGatewayCustomErrorStatusCode = {
    HttpStatus400: "HttpStatus400",
    HttpStatus403: "HttpStatus403",
    HttpStatus404: "HttpStatus404",
    HttpStatus405: "HttpStatus405",
    HttpStatus408: "HttpStatus408",
    HttpStatus500: "HttpStatus500",
    HttpStatus502: "HttpStatus502",
    HttpStatus503: "HttpStatus503",
    HttpStatus504: "HttpStatus504",
} as const;

export type ApplicationGatewayCustomErrorStatusCode = (typeof ApplicationGatewayCustomErrorStatusCode)[keyof typeof ApplicationGatewayCustomErrorStatusCode];

export const ApplicationGatewayFirewallMode = {
    Detection: "Detection",
    Prevention: "Prevention",
} as const;

export type ApplicationGatewayFirewallMode = (typeof ApplicationGatewayFirewallMode)[keyof typeof ApplicationGatewayFirewallMode];

export const ApplicationGatewayFirewallRateLimitDuration = {
    OneMin: "OneMin",
    FiveMins: "FiveMins",
} as const;

export type ApplicationGatewayFirewallRateLimitDuration = (typeof ApplicationGatewayFirewallRateLimitDuration)[keyof typeof ApplicationGatewayFirewallRateLimitDuration];

export const ApplicationGatewayFirewallUserSessionVariable = {
    ClientAddr: "ClientAddr",
    GeoLocation: "GeoLocation",
    None: "None",
} as const;

export type ApplicationGatewayFirewallUserSessionVariable = (typeof ApplicationGatewayFirewallUserSessionVariable)[keyof typeof ApplicationGatewayFirewallUserSessionVariable];

export const ApplicationGatewayLoadDistributionAlgorithm = {
    RoundRobin: "RoundRobin",
    LeastConnections: "LeastConnections",
    IpHash: "IpHash",
} as const;

export type ApplicationGatewayLoadDistributionAlgorithm = (typeof ApplicationGatewayLoadDistributionAlgorithm)[keyof typeof ApplicationGatewayLoadDistributionAlgorithm];

export const ApplicationGatewayProtocol = {
    Http: "Http",
    Https: "Https",
    Tcp: "Tcp",
    Tls: "Tls",
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
    AppGwSslPolicy20220101: "AppGwSslPolicy20220101",
    AppGwSslPolicy20220101S: "AppGwSslPolicy20220101S",
} as const;

export type ApplicationGatewaySslPolicyName = (typeof ApplicationGatewaySslPolicyName)[keyof typeof ApplicationGatewaySslPolicyName];

export const ApplicationGatewaySslPolicyType = {
    Predefined: "Predefined",
    Custom: "Custom",
    CustomV2: "CustomV2",
} as const;

export type ApplicationGatewaySslPolicyType = (typeof ApplicationGatewaySslPolicyType)[keyof typeof ApplicationGatewaySslPolicyType];

export const ApplicationGatewaySslProtocol = {
    TLSv1_0: "TLSv1_0",
    TLSv1_1: "TLSv1_1",
    TLSv1_2: "TLSv1_2",
    TLSv1_3: "TLSv1_3",
} as const;

export type ApplicationGatewaySslProtocol = (typeof ApplicationGatewaySslProtocol)[keyof typeof ApplicationGatewaySslProtocol];

export const ApplicationGatewayTier = {
    Standard: "Standard",
    WAF: "WAF",
    Standard_v2: "Standard_v2",
    WAF_v2: "WAF_v2",
} as const;

export type ApplicationGatewayTier = (typeof ApplicationGatewayTier)[keyof typeof ApplicationGatewayTier];

export const AuthorizationUseStatus = {
    Available: "Available",
    InUse: "InUse",
} as const;

export type AuthorizationUseStatus = (typeof AuthorizationUseStatus)[keyof typeof AuthorizationUseStatus];

export const AutoLearnPrivateRangesMode = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type AutoLearnPrivateRangesMode = (typeof AutoLearnPrivateRangesMode)[keyof typeof AutoLearnPrivateRangesMode];

export const AzureFirewallApplicationRuleProtocolType = {
    Http: "Http",
    Https: "Https",
    Mssql: "Mssql",
} as const;

export type AzureFirewallApplicationRuleProtocolType = (typeof AzureFirewallApplicationRuleProtocolType)[keyof typeof AzureFirewallApplicationRuleProtocolType];

export const AzureFirewallNatRCActionType = {
    Snat: "Snat",
    Dnat: "Dnat",
} as const;

export type AzureFirewallNatRCActionType = (typeof AzureFirewallNatRCActionType)[keyof typeof AzureFirewallNatRCActionType];

export const AzureFirewallNetworkRuleProtocol = {
    TCP: "TCP",
    UDP: "UDP",
    Any: "Any",
    ICMP: "ICMP",
} as const;

export type AzureFirewallNetworkRuleProtocol = (typeof AzureFirewallNetworkRuleProtocol)[keyof typeof AzureFirewallNetworkRuleProtocol];

export const AzureFirewallRCActionType = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

export type AzureFirewallRCActionType = (typeof AzureFirewallRCActionType)[keyof typeof AzureFirewallRCActionType];

export const AzureFirewallSkuName = {
    AZFW_VNet: "AZFW_VNet",
    AZFW_Hub: "AZFW_Hub",
} as const;

export type AzureFirewallSkuName = (typeof AzureFirewallSkuName)[keyof typeof AzureFirewallSkuName];

export const AzureFirewallSkuTier = {
    Standard: "Standard",
    Premium: "Premium",
    Basic: "Basic",
} as const;

export type AzureFirewallSkuTier = (typeof AzureFirewallSkuTier)[keyof typeof AzureFirewallSkuTier];

export const AzureFirewallThreatIntelMode = {
    Alert: "Alert",
    Deny: "Deny",
    Off: "Off",
} as const;

export type AzureFirewallThreatIntelMode = (typeof AzureFirewallThreatIntelMode)[keyof typeof AzureFirewallThreatIntelMode];

export const BastionHostSkuName = {
    Basic: "Basic",
    Standard: "Standard",
} as const;

export type BastionHostSkuName = (typeof BastionHostSkuName)[keyof typeof BastionHostSkuName];

export const CommissionedState = {
    Provisioning: "Provisioning",
    Provisioned: "Provisioned",
    Commissioning: "Commissioning",
    CommissionedNoInternetAdvertise: "CommissionedNoInternetAdvertise",
    Commissioned: "Commissioned",
    Decommissioning: "Decommissioning",
    Deprovisioning: "Deprovisioning",
    Deprovisioned: "Deprovisioned",
} as const;

export type CommissionedState = (typeof CommissionedState)[keyof typeof CommissionedState];

export const ConfigurationType = {
    SecurityAdmin: "SecurityAdmin",
    Connectivity: "Connectivity",
} as const;

export type ConfigurationType = (typeof ConfigurationType)[keyof typeof ConfigurationType];

export const ConnectionMonitorEndpointFilterItemType = {
    AgentAddress: "AgentAddress",
} as const;

export type ConnectionMonitorEndpointFilterItemType = (typeof ConnectionMonitorEndpointFilterItemType)[keyof typeof ConnectionMonitorEndpointFilterItemType];

export const ConnectionMonitorEndpointFilterType = {
    Include: "Include",
} as const;

export type ConnectionMonitorEndpointFilterType = (typeof ConnectionMonitorEndpointFilterType)[keyof typeof ConnectionMonitorEndpointFilterType];

export const ConnectionMonitorTestConfigurationProtocol = {
    Tcp: "Tcp",
    Http: "Http",
    Icmp: "Icmp",
} as const;

export type ConnectionMonitorTestConfigurationProtocol = (typeof ConnectionMonitorTestConfigurationProtocol)[keyof typeof ConnectionMonitorTestConfigurationProtocol];

export const ConnectivityTopology = {
    HubAndSpoke: "HubAndSpoke",
    Mesh: "Mesh",
} as const;

export type ConnectivityTopology = (typeof ConnectivityTopology)[keyof typeof ConnectivityTopology];

export const CoverageLevel = {
    Default: "Default",
    Low: "Low",
    BelowAverage: "BelowAverage",
    Average: "Average",
    AboveAverage: "AboveAverage",
    Full: "Full",
} as const;

export type CoverageLevel = (typeof CoverageLevel)[keyof typeof CoverageLevel];

export const CustomIpPrefixType = {
    Singular: "Singular",
    Parent: "Parent",
    Child: "Child",
} as const;

export type CustomIpPrefixType = (typeof CustomIpPrefixType)[keyof typeof CustomIpPrefixType];

export const DdosSettingsProtectionMode = {
    VirtualNetworkInherited: "VirtualNetworkInherited",
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type DdosSettingsProtectionMode = (typeof DdosSettingsProtectionMode)[keyof typeof DdosSettingsProtectionMode];

export const DeleteExistingPeering = {
    False: "False",
    True: "True",
} as const;

export type DeleteExistingPeering = (typeof DeleteExistingPeering)[keyof typeof DeleteExistingPeering];

export const DeleteOptions = {
    Delete: "Delete",
    Detach: "Detach",
} as const;

export type DeleteOptions = (typeof DeleteOptions)[keyof typeof DeleteOptions];

export const DestinationPortBehavior = {
    None: "None",
    ListenIfAvailable: "ListenIfAvailable",
} as const;

export type DestinationPortBehavior = (typeof DestinationPortBehavior)[keyof typeof DestinationPortBehavior];

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

export const EndpointType = {
    AzureVM: "AzureVM",
    AzureVNet: "AzureVNet",
    AzureSubnet: "AzureSubnet",
    ExternalAddress: "ExternalAddress",
    MMAWorkspaceMachine: "MMAWorkspaceMachine",
    MMAWorkspaceNetwork: "MMAWorkspaceNetwork",
    AzureArcVM: "AzureArcVM",
    AzureVMSS: "AzureVMSS",
} as const;

export type EndpointType = (typeof EndpointType)[keyof typeof EndpointType];

export const ExpressRouteCircuitPeeringState = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type ExpressRouteCircuitPeeringState = (typeof ExpressRouteCircuitPeeringState)[keyof typeof ExpressRouteCircuitPeeringState];

export const ExpressRouteCircuitSkuFamily = {
    UnlimitedData: "UnlimitedData",
    MeteredData: "MeteredData",
} as const;

export type ExpressRouteCircuitSkuFamily = (typeof ExpressRouteCircuitSkuFamily)[keyof typeof ExpressRouteCircuitSkuFamily];

export const ExpressRouteCircuitSkuTier = {
    Standard: "Standard",
    Premium: "Premium",
    Basic: "Basic",
    Local: "Local",
} as const;

export type ExpressRouteCircuitSkuTier = (typeof ExpressRouteCircuitSkuTier)[keyof typeof ExpressRouteCircuitSkuTier];

export const ExpressRouteLinkAdminState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type ExpressRouteLinkAdminState = (typeof ExpressRouteLinkAdminState)[keyof typeof ExpressRouteLinkAdminState];

export const ExpressRouteLinkMacSecCipher = {
    GcmAes256: "GcmAes256",
    GcmAes128: "GcmAes128",
    GcmAesXpn128: "GcmAesXpn128",
    GcmAesXpn256: "GcmAesXpn256",
} as const;

export type ExpressRouteLinkMacSecCipher = (typeof ExpressRouteLinkMacSecCipher)[keyof typeof ExpressRouteLinkMacSecCipher];

export const ExpressRouteLinkMacSecSciState = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type ExpressRouteLinkMacSecSciState = (typeof ExpressRouteLinkMacSecSciState)[keyof typeof ExpressRouteLinkMacSecSciState];

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

export const ExpressRoutePortsBillingType = {
    MeteredData: "MeteredData",
    UnlimitedData: "UnlimitedData",
} as const;

export type ExpressRoutePortsBillingType = (typeof ExpressRoutePortsBillingType)[keyof typeof ExpressRoutePortsBillingType];

export const ExpressRoutePortsEncapsulation = {
    Dot1Q: "Dot1Q",
    QinQ: "QinQ",
} as const;

export type ExpressRoutePortsEncapsulation = (typeof ExpressRoutePortsEncapsulation)[keyof typeof ExpressRoutePortsEncapsulation];

export const ExtendedLocationTypes = {
    EdgeZone: "EdgeZone",
} as const;

export type ExtendedLocationTypes = (typeof ExtendedLocationTypes)[keyof typeof ExtendedLocationTypes];

export const FirewallPolicyFilterRuleCollectionActionType = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

export type FirewallPolicyFilterRuleCollectionActionType = (typeof FirewallPolicyFilterRuleCollectionActionType)[keyof typeof FirewallPolicyFilterRuleCollectionActionType];

export const FirewallPolicyIDPSQuerySortOrder = {
    Ascending: "Ascending",
    Descending: "Descending",
} as const;

export type FirewallPolicyIDPSQuerySortOrder = (typeof FirewallPolicyIDPSQuerySortOrder)[keyof typeof FirewallPolicyIDPSQuerySortOrder];

export const FirewallPolicyIntrusionDetectionProtocol = {
    TCP: "TCP",
    UDP: "UDP",
    ICMP: "ICMP",
    ANY: "ANY",
} as const;

export type FirewallPolicyIntrusionDetectionProtocol = (typeof FirewallPolicyIntrusionDetectionProtocol)[keyof typeof FirewallPolicyIntrusionDetectionProtocol];

export const FirewallPolicyIntrusionDetectionStateType = {
    Off: "Off",
    Alert: "Alert",
    Deny: "Deny",
} as const;

export type FirewallPolicyIntrusionDetectionStateType = (typeof FirewallPolicyIntrusionDetectionStateType)[keyof typeof FirewallPolicyIntrusionDetectionStateType];

export const FirewallPolicyNatRuleCollectionActionType = {
    DNAT: "DNAT",
} as const;

export type FirewallPolicyNatRuleCollectionActionType = (typeof FirewallPolicyNatRuleCollectionActionType)[keyof typeof FirewallPolicyNatRuleCollectionActionType];

export const FirewallPolicyRuleApplicationProtocolType = {
    Http: "Http",
    Https: "Https",
} as const;

export type FirewallPolicyRuleApplicationProtocolType = (typeof FirewallPolicyRuleApplicationProtocolType)[keyof typeof FirewallPolicyRuleApplicationProtocolType];

export const FirewallPolicyRuleCollectionType = {
    FirewallPolicyNatRuleCollection: "FirewallPolicyNatRuleCollection",
    FirewallPolicyFilterRuleCollection: "FirewallPolicyFilterRuleCollection",
} as const;

export type FirewallPolicyRuleCollectionType = (typeof FirewallPolicyRuleCollectionType)[keyof typeof FirewallPolicyRuleCollectionType];

export const FirewallPolicyRuleNetworkProtocol = {
    TCP: "TCP",
    UDP: "UDP",
    Any: "Any",
    ICMP: "ICMP",
} as const;

export type FirewallPolicyRuleNetworkProtocol = (typeof FirewallPolicyRuleNetworkProtocol)[keyof typeof FirewallPolicyRuleNetworkProtocol];

export const FirewallPolicyRuleType = {
    ApplicationRule: "ApplicationRule",
    NetworkRule: "NetworkRule",
    NatRule: "NatRule",
} as const;

export type FirewallPolicyRuleType = (typeof FirewallPolicyRuleType)[keyof typeof FirewallPolicyRuleType];

export const FirewallPolicySkuTier = {
    Standard: "Standard",
    Premium: "Premium",
    Basic: "Basic",
} as const;

export type FirewallPolicySkuTier = (typeof FirewallPolicySkuTier)[keyof typeof FirewallPolicySkuTier];

export const FlowLogFormatType = {
    JSON: "JSON",
} as const;

export type FlowLogFormatType = (typeof FlowLogFormatType)[keyof typeof FlowLogFormatType];

export const GatewayLoadBalancerTunnelInterfaceType = {
    None: "None",
    Internal: "Internal",
    External: "External",
} as const;

export type GatewayLoadBalancerTunnelInterfaceType = (typeof GatewayLoadBalancerTunnelInterfaceType)[keyof typeof GatewayLoadBalancerTunnelInterfaceType];

export const GatewayLoadBalancerTunnelProtocol = {
    None: "None",
    Native: "Native",
    VXLAN: "VXLAN",
} as const;

export type GatewayLoadBalancerTunnelProtocol = (typeof GatewayLoadBalancerTunnelProtocol)[keyof typeof GatewayLoadBalancerTunnelProtocol];

export const Geo = {
    GLOBAL: "GLOBAL",
    AFRI: "AFRI",
    APAC: "APAC",
    EURO: "EURO",
    LATAM: "LATAM",
    NAM: "NAM",
    ME: "ME",
    OCEANIA: "OCEANIA",
    AQ: "AQ",
} as const;

export type Geo = (typeof Geo)[keyof typeof Geo];

export const GroupConnectivity = {
    None: "None",
    DirectlyConnected: "DirectlyConnected",
} as const;

export type GroupConnectivity = (typeof GroupConnectivity)[keyof typeof GroupConnectivity];

export const HTTPConfigurationMethod = {
    Get: "Get",
    Post: "Post",
} as const;

export type HTTPConfigurationMethod = (typeof HTTPConfigurationMethod)[keyof typeof HTTPConfigurationMethod];

export const HubRoutingPreference = {
    ExpressRoute: "ExpressRoute",
    VpnGateway: "VpnGateway",
    ASPath: "ASPath",
} as const;

export type HubRoutingPreference = (typeof HubRoutingPreference)[keyof typeof HubRoutingPreference];

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

export const IpAllocationType = {
    Undefined: "Undefined",
    Hypernet: "Hypernet",
} as const;

export type IpAllocationType = (typeof IpAllocationType)[keyof typeof IpAllocationType];

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

export const IsGlobal = {
    False: "False",
    True: "True",
} as const;

export type IsGlobal = (typeof IsGlobal)[keyof typeof IsGlobal];

export const LoadBalancerBackendAddressAdminState = {
    None: "None",
    Up: "Up",
    Down: "Down",
} as const;

export type LoadBalancerBackendAddressAdminState = (typeof LoadBalancerBackendAddressAdminState)[keyof typeof LoadBalancerBackendAddressAdminState];

export const LoadBalancerOutboundRuleProtocol = {
    Tcp: "Tcp",
    Udp: "Udp",
    All: "All",
} as const;

export type LoadBalancerOutboundRuleProtocol = (typeof LoadBalancerOutboundRuleProtocol)[keyof typeof LoadBalancerOutboundRuleProtocol];

export const LoadBalancerSkuName = {
    Basic: "Basic",
    Standard: "Standard",
    Gateway: "Gateway",
} as const;

export type LoadBalancerSkuName = (typeof LoadBalancerSkuName)[keyof typeof LoadBalancerSkuName];

export const LoadBalancerSkuTier = {
    Regional: "Regional",
    Global: "Global",
} as const;

export type LoadBalancerSkuTier = (typeof LoadBalancerSkuTier)[keyof typeof LoadBalancerSkuTier];

export const LoadDistribution = {
    Default: "Default",
    SourceIP: "SourceIP",
    SourceIPProtocol: "SourceIPProtocol",
} as const;

export type LoadDistribution = (typeof LoadDistribution)[keyof typeof LoadDistribution];

export const ManagedRuleEnabledState = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type ManagedRuleEnabledState = (typeof ManagedRuleEnabledState)[keyof typeof ManagedRuleEnabledState];

export const NatGatewaySkuName = {
    Standard: "Standard",
} as const;

export type NatGatewaySkuName = (typeof NatGatewaySkuName)[keyof typeof NatGatewaySkuName];

export const NetworkIntentPolicyBasedService = {
    None: "None",
    All: "All",
    AllowRulesOnly: "AllowRulesOnly",
} as const;

export type NetworkIntentPolicyBasedService = (typeof NetworkIntentPolicyBasedService)[keyof typeof NetworkIntentPolicyBasedService];

export const NetworkInterfaceAuxiliaryMode = {
    None: "None",
    MaxConnections: "MaxConnections",
    Floating: "Floating",
    AcceleratedConnections: "AcceleratedConnections",
} as const;

export type NetworkInterfaceAuxiliaryMode = (typeof NetworkInterfaceAuxiliaryMode)[keyof typeof NetworkInterfaceAuxiliaryMode];

export const NetworkInterfaceAuxiliarySku = {
    None: "None",
    A1: "A1",
    A2: "A2",
    A4: "A4",
    A8: "A8",
} as const;

export type NetworkInterfaceAuxiliarySku = (typeof NetworkInterfaceAuxiliarySku)[keyof typeof NetworkInterfaceAuxiliarySku];

export const NetworkInterfaceMigrationPhase = {
    None: "None",
    Prepare: "Prepare",
    Commit: "Commit",
    Abort: "Abort",
    Committed: "Committed",
} as const;

export type NetworkInterfaceMigrationPhase = (typeof NetworkInterfaceMigrationPhase)[keyof typeof NetworkInterfaceMigrationPhase];

export const NetworkInterfaceNicType = {
    Standard: "Standard",
    Elastic: "Elastic",
} as const;

export type NetworkInterfaceNicType = (typeof NetworkInterfaceNicType)[keyof typeof NetworkInterfaceNicType];

export const NextStep = {
    Unknown: "Unknown",
    Continue: "Continue",
    Terminate: "Terminate",
} as const;

export type NextStep = (typeof NextStep)[keyof typeof NextStep];

export const OutputType = {
    Workspace: "Workspace",
} as const;

export type OutputType = (typeof OutputType)[keyof typeof OutputType];

export const OwaspCrsExclusionEntryMatchVariable = {
    RequestHeaderNames: "RequestHeaderNames",
    RequestCookieNames: "RequestCookieNames",
    RequestArgNames: "RequestArgNames",
    RequestHeaderKeys: "RequestHeaderKeys",
    RequestHeaderValues: "RequestHeaderValues",
    RequestCookieKeys: "RequestCookieKeys",
    RequestCookieValues: "RequestCookieValues",
    RequestArgKeys: "RequestArgKeys",
    RequestArgValues: "RequestArgValues",
} as const;

export type OwaspCrsExclusionEntryMatchVariable = (typeof OwaspCrsExclusionEntryMatchVariable)[keyof typeof OwaspCrsExclusionEntryMatchVariable];

export const OwaspCrsExclusionEntrySelectorMatchOperator = {
    Equals: "Equals",
    Contains: "Contains",
    StartsWith: "StartsWith",
    EndsWith: "EndsWith",
    EqualsAny: "EqualsAny",
} as const;

export type OwaspCrsExclusionEntrySelectorMatchOperator = (typeof OwaspCrsExclusionEntrySelectorMatchOperator)[keyof typeof OwaspCrsExclusionEntrySelectorMatchOperator];

export const PacketCaptureTargetType = {
    AzureVM: "AzureVM",
    AzureVMSS: "AzureVMSS",
} as const;

export type PacketCaptureTargetType = (typeof PacketCaptureTargetType)[keyof typeof PacketCaptureTargetType];

export const PcProtocol = {
    TCP: "TCP",
    UDP: "UDP",
    Any: "Any",
} as const;

export type PcProtocol = (typeof PcProtocol)[keyof typeof PcProtocol];

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

export const PreferredIPVersion = {
    IPv4: "IPv4",
    IPv6: "IPv6",
} as const;

export type PreferredIPVersion = (typeof PreferredIPVersion)[keyof typeof PreferredIPVersion];

export const PreferredRoutingGateway = {
    ExpressRoute: "ExpressRoute",
    VpnGateway: "VpnGateway",
    None: "None",
} as const;

export type PreferredRoutingGateway = (typeof PreferredRoutingGateway)[keyof typeof PreferredRoutingGateway];

export const ProbeProtocol = {
    Http: "Http",
    Tcp: "Tcp",
    Https: "Https",
} as const;

export type ProbeProtocol = (typeof ProbeProtocol)[keyof typeof ProbeProtocol];

export const ProtocolType = {
    DoNotUse: "DoNotUse",
    Icmp: "Icmp",
    Tcp: "Tcp",
    Udp: "Udp",
    Gre: "Gre",
    Esp: "Esp",
    Ah: "Ah",
    Vxlan: "Vxlan",
    All: "All",
} as const;

export type ProtocolType = (typeof ProtocolType)[keyof typeof ProtocolType];

export const PublicIPAddressMigrationPhase = {
    None: "None",
    Prepare: "Prepare",
    Commit: "Commit",
    Abort: "Abort",
    Committed: "Committed",
} as const;

export type PublicIPAddressMigrationPhase = (typeof PublicIPAddressMigrationPhase)[keyof typeof PublicIPAddressMigrationPhase];

export const PublicIPAddressSkuName = {
    Basic: "Basic",
    Standard: "Standard",
} as const;

export type PublicIPAddressSkuName = (typeof PublicIPAddressSkuName)[keyof typeof PublicIPAddressSkuName];

export const PublicIPAddressSkuTier = {
    Regional: "Regional",
    Global: "Global",
} as const;

export type PublicIPAddressSkuTier = (typeof PublicIPAddressSkuTier)[keyof typeof PublicIPAddressSkuTier];

export const PublicIPPrefixSkuName = {
    Standard: "Standard",
} as const;

export type PublicIPPrefixSkuName = (typeof PublicIPPrefixSkuName)[keyof typeof PublicIPPrefixSkuName];

export const PublicIPPrefixSkuTier = {
    Regional: "Regional",
    Global: "Global",
} as const;

export type PublicIPPrefixSkuTier = (typeof PublicIPPrefixSkuTier)[keyof typeof PublicIPPrefixSkuTier];

export const PublicIpAddressDnsSettingsDomainNameLabelScope = {
    TenantReuse: "TenantReuse",
    SubscriptionReuse: "SubscriptionReuse",
    ResourceGroupReuse: "ResourceGroupReuse",
    NoReuse: "NoReuse",
} as const;

export type PublicIpAddressDnsSettingsDomainNameLabelScope = (typeof PublicIpAddressDnsSettingsDomainNameLabelScope)[keyof typeof PublicIpAddressDnsSettingsDomainNameLabelScope];

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

export const RouteMapActionType = {
    Unknown: "Unknown",
    Remove: "Remove",
    Add: "Add",
    Replace: "Replace",
    Drop: "Drop",
} as const;

export type RouteMapActionType = (typeof RouteMapActionType)[keyof typeof RouteMapActionType];

export const RouteMapMatchCondition = {
    Unknown: "Unknown",
    Contains: "Contains",
    Equals: "Equals",
    NotContains: "NotContains",
    NotEquals: "NotEquals",
} as const;

export type RouteMapMatchCondition = (typeof RouteMapMatchCondition)[keyof typeof RouteMapMatchCondition];

export const RouteNextHopType = {
    VirtualNetworkGateway: "VirtualNetworkGateway",
    VnetLocal: "VnetLocal",
    Internet: "Internet",
    VirtualAppliance: "VirtualAppliance",
    None: "None",
} as const;

export type RouteNextHopType = (typeof RouteNextHopType)[keyof typeof RouteNextHopType];

export const ScrubbingRuleEntryMatchOperator = {
    Equals: "Equals",
    EqualsAny: "EqualsAny",
} as const;

export type ScrubbingRuleEntryMatchOperator = (typeof ScrubbingRuleEntryMatchOperator)[keyof typeof ScrubbingRuleEntryMatchOperator];

export const ScrubbingRuleEntryMatchVariable = {
    RequestHeaderNames: "RequestHeaderNames",
    RequestCookieNames: "RequestCookieNames",
    RequestArgNames: "RequestArgNames",
    RequestPostArgNames: "RequestPostArgNames",
    RequestJSONArgNames: "RequestJSONArgNames",
    RequestIPAddress: "RequestIPAddress",
} as const;

export type ScrubbingRuleEntryMatchVariable = (typeof ScrubbingRuleEntryMatchVariable)[keyof typeof ScrubbingRuleEntryMatchVariable];

export const ScrubbingRuleEntryState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type ScrubbingRuleEntryState = (typeof ScrubbingRuleEntryState)[keyof typeof ScrubbingRuleEntryState];

export const SecurityConfigurationRuleAccess = {
    Allow: "Allow",
    Deny: "Deny",
    AlwaysAllow: "AlwaysAllow",
} as const;

export type SecurityConfigurationRuleAccess = (typeof SecurityConfigurationRuleAccess)[keyof typeof SecurityConfigurationRuleAccess];

export const SecurityConfigurationRuleDirection = {
    Inbound: "Inbound",
    Outbound: "Outbound",
} as const;

export type SecurityConfigurationRuleDirection = (typeof SecurityConfigurationRuleDirection)[keyof typeof SecurityConfigurationRuleDirection];

export const SecurityConfigurationRuleProtocol = {
    Tcp: "Tcp",
    Udp: "Udp",
    Icmp: "Icmp",
    Esp: "Esp",
    Any: "Any",
    Ah: "Ah",
} as const;

export type SecurityConfigurationRuleProtocol = (typeof SecurityConfigurationRuleProtocol)[keyof typeof SecurityConfigurationRuleProtocol];

export const SecurityProviderName = {
    ZScaler: "ZScaler",
    IBoss: "IBoss",
    Checkpoint: "Checkpoint",
} as const;

export type SecurityProviderName = (typeof SecurityProviderName)[keyof typeof SecurityProviderName];

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

export const ServiceProviderProvisioningState = {
    NotProvisioned: "NotProvisioned",
    Provisioning: "Provisioning",
    Provisioned: "Provisioned",
    Deprovisioning: "Deprovisioning",
} as const;

export type ServiceProviderProvisioningState = (typeof ServiceProviderProvisioningState)[keyof typeof ServiceProviderProvisioningState];

export const TransportProtocol = {
    Udp: "Udp",
    Tcp: "Tcp",
    All: "All",
} as const;

export type TransportProtocol = (typeof TransportProtocol)[keyof typeof TransportProtocol];

export const UseHubGateway = {
    False: "False",
    True: "True",
} as const;

export type UseHubGateway = (typeof UseHubGateway)[keyof typeof UseHubGateway];

export const VirtualNetworkEncryptionEnforcement = {
    DropUnencrypted: "DropUnencrypted",
    AllowUnencrypted: "AllowUnencrypted",
} as const;

export type VirtualNetworkEncryptionEnforcement = (typeof VirtualNetworkEncryptionEnforcement)[keyof typeof VirtualNetworkEncryptionEnforcement];

export const VirtualNetworkGatewayConnectionMode = {
    Default: "Default",
    ResponderOnly: "ResponderOnly",
    InitiatorOnly: "InitiatorOnly",
} as const;

export type VirtualNetworkGatewayConnectionMode = (typeof VirtualNetworkGatewayConnectionMode)[keyof typeof VirtualNetworkGatewayConnectionMode];

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
    LocalGateway: "LocalGateway",
} as const;

export type VirtualNetworkGatewayType = (typeof VirtualNetworkGatewayType)[keyof typeof VirtualNetworkGatewayType];

export const VirtualNetworkPeeringLevel = {
    FullyInSync: "FullyInSync",
    RemoteNotInSync: "RemoteNotInSync",
    LocalNotInSync: "LocalNotInSync",
    LocalAndRemoteNotInSync: "LocalAndRemoteNotInSync",
} as const;

export type VirtualNetworkPeeringLevel = (typeof VirtualNetworkPeeringLevel)[keyof typeof VirtualNetworkPeeringLevel];

export const VirtualNetworkPeeringState = {
    Initiated: "Initiated",
    Connected: "Connected",
    Disconnected: "Disconnected",
} as const;

export type VirtualNetworkPeeringState = (typeof VirtualNetworkPeeringState)[keyof typeof VirtualNetworkPeeringState];

export const VirtualNetworkPrivateEndpointNetworkPolicies = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type VirtualNetworkPrivateEndpointNetworkPolicies = (typeof VirtualNetworkPrivateEndpointNetworkPolicies)[keyof typeof VirtualNetworkPrivateEndpointNetworkPolicies];

export const VirtualNetworkPrivateLinkServiceNetworkPolicies = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type VirtualNetworkPrivateLinkServiceNetworkPolicies = (typeof VirtualNetworkPrivateLinkServiceNetworkPolicies)[keyof typeof VirtualNetworkPrivateLinkServiceNetworkPolicies];

export const VnetLocalRouteOverrideCriteria = {
    Contains: "Contains",
    Equal: "Equal",
} as const;

export type VnetLocalRouteOverrideCriteria = (typeof VnetLocalRouteOverrideCriteria)[keyof typeof VnetLocalRouteOverrideCriteria];

export const VpnAuthenticationType = {
    Certificate: "Certificate",
    Radius: "Radius",
    AAD: "AAD",
} as const;

export type VpnAuthenticationType = (typeof VpnAuthenticationType)[keyof typeof VpnAuthenticationType];

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

export const VpnGatewayTunnelingProtocol = {
    IkeV2: "IkeV2",
    OpenVPN: "OpenVPN",
} as const;

export type VpnGatewayTunnelingProtocol = (typeof VpnGatewayTunnelingProtocol)[keyof typeof VpnGatewayTunnelingProtocol];

export const VpnLinkConnectionMode = {
    Default: "Default",
    ResponderOnly: "ResponderOnly",
    InitiatorOnly: "InitiatorOnly",
} as const;

export type VpnLinkConnectionMode = (typeof VpnLinkConnectionMode)[keyof typeof VpnLinkConnectionMode];

export const VpnNatRuleMode = {
    EgressSnat: "EgressSnat",
    IngressSnat: "IngressSnat",
} as const;

export type VpnNatRuleMode = (typeof VpnNatRuleMode)[keyof typeof VpnNatRuleMode];

export const VpnNatRuleType = {
    Static: "Static",
    Dynamic: "Dynamic",
} as const;

export type VpnNatRuleType = (typeof VpnNatRuleType)[keyof typeof VpnNatRuleType];

export const VpnPolicyMemberAttributeType = {
    CertificateGroupId: "CertificateGroupId",
    AADGroupId: "AADGroupId",
    RadiusAzureGroupId: "RadiusAzureGroupId",
} as const;

export type VpnPolicyMemberAttributeType = (typeof VpnPolicyMemberAttributeType)[keyof typeof VpnPolicyMemberAttributeType];

export const VpnType = {
    PolicyBased: "PolicyBased",
    RouteBased: "RouteBased",
} as const;

export type VpnType = (typeof VpnType)[keyof typeof VpnType];

export const WebApplicationFirewallAction = {
    Allow: "Allow",
    Block: "Block",
    Log: "Log",
} as const;

export type WebApplicationFirewallAction = (typeof WebApplicationFirewallAction)[keyof typeof WebApplicationFirewallAction];

export const WebApplicationFirewallEnabledState = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type WebApplicationFirewallEnabledState = (typeof WebApplicationFirewallEnabledState)[keyof typeof WebApplicationFirewallEnabledState];

export const WebApplicationFirewallMatchVariable = {
    RemoteAddr: "RemoteAddr",
    RequestMethod: "RequestMethod",
    QueryString: "QueryString",
    PostArgs: "PostArgs",
    RequestUri: "RequestUri",
    RequestHeaders: "RequestHeaders",
    RequestBody: "RequestBody",
    RequestCookies: "RequestCookies",
} as const;

export type WebApplicationFirewallMatchVariable = (typeof WebApplicationFirewallMatchVariable)[keyof typeof WebApplicationFirewallMatchVariable];

export const WebApplicationFirewallMode = {
    Prevention: "Prevention",
    Detection: "Detection",
} as const;

export type WebApplicationFirewallMode = (typeof WebApplicationFirewallMode)[keyof typeof WebApplicationFirewallMode];

export const WebApplicationFirewallOperator = {
    IPMatch: "IPMatch",
    Equal: "Equal",
    Contains: "Contains",
    LessThan: "LessThan",
    GreaterThan: "GreaterThan",
    LessThanOrEqual: "LessThanOrEqual",
    GreaterThanOrEqual: "GreaterThanOrEqual",
    BeginsWith: "BeginsWith",
    EndsWith: "EndsWith",
    Regex: "Regex",
    GeoMatch: "GeoMatch",
    Any: "Any",
} as const;

export type WebApplicationFirewallOperator = (typeof WebApplicationFirewallOperator)[keyof typeof WebApplicationFirewallOperator];

export const WebApplicationFirewallRuleType = {
    MatchRule: "MatchRule",
    RateLimitRule: "RateLimitRule",
    Invalid: "Invalid",
} as const;

export type WebApplicationFirewallRuleType = (typeof WebApplicationFirewallRuleType)[keyof typeof WebApplicationFirewallRuleType];

export const WebApplicationFirewallScrubbingState = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type WebApplicationFirewallScrubbingState = (typeof WebApplicationFirewallScrubbingState)[keyof typeof WebApplicationFirewallScrubbingState];

export const WebApplicationFirewallState = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type WebApplicationFirewallState = (typeof WebApplicationFirewallState)[keyof typeof WebApplicationFirewallState];

export const WebApplicationFirewallTransform = {
    Uppercase: "Uppercase",
    Lowercase: "Lowercase",
    Trim: "Trim",
    UrlDecode: "UrlDecode",
    UrlEncode: "UrlEncode",
    RemoveNulls: "RemoveNulls",
    HtmlEntityDecode: "HtmlEntityDecode",
} as const;

export type WebApplicationFirewallTransform = (typeof WebApplicationFirewallTransform)[keyof typeof WebApplicationFirewallTransform];
