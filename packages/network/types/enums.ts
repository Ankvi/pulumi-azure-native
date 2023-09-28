export const Access = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

/**
 * The access type of the rule.
 */
export type Access = (typeof Access)[keyof typeof Access];

export const AccessRuleDirection = {
    Inbound: "Inbound",
    Outbound: "Outbound",
} as const;

/**
 * Direction that specifies whether the access rules is inbound/outbound.
 */
export type AccessRuleDirection = (typeof AccessRuleDirection)[keyof typeof AccessRuleDirection];

export const ActionType = {
    AnomalyScoring: "AnomalyScoring",
    Allow: "Allow",
    Block: "Block",
    Log: "Log",
} as const;

/**
 * Describes the override action to be applied when rule matches.
 */
export type ActionType = (typeof ActionType)[keyof typeof ActionType];

export const AddressPrefixType = {
    IPPrefix: "IPPrefix",
    ServiceTag: "ServiceTag",
} as const;

/**
 * Address prefix type.
 */
export type AddressPrefixType = (typeof AddressPrefixType)[keyof typeof AddressPrefixType];

export const AdminRuleKind = {
    Custom: "Custom",
    Default: "Default",
} as const;

/**
 * Whether the rule is custom or default.
 */
export type AdminRuleKind = (typeof AdminRuleKind)[keyof typeof AdminRuleKind];

export const AdminState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Property to indicate if the Express Route Gateway serves traffic when there are multiple Express Route Gateways in the vnet
 */
export type AdminState = (typeof AdminState)[keyof typeof AdminState];

export const AllowedEndpointRecordType = {
    DomainName: "DomainName",
    IPv4Address: "IPv4Address",
    IPv6Address: "IPv6Address",
    Any: "Any",
} as const;

/**
 * The allowed type DNS record types for this profile.
 */
export type AllowedEndpointRecordType = (typeof AllowedEndpointRecordType)[keyof typeof AllowedEndpointRecordType];

export const AlwaysServe = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * If Always Serve is enabled, probing for endpoint health will be disabled and endpoints will be included in the traffic routing method.
 */
export type AlwaysServe = (typeof AlwaysServe)[keyof typeof AlwaysServe];

export const ApplicationGatewayClientRevocationOptions = {
    None: "None",
    OCSP: "OCSP",
} as const;

/**
 * Verify client certificate revocation status.
 */
export type ApplicationGatewayClientRevocationOptions = (typeof ApplicationGatewayClientRevocationOptions)[keyof typeof ApplicationGatewayClientRevocationOptions];

export const ApplicationGatewayCookieBasedAffinity = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Cookie based affinity.
 */
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

/**
 * Status code of the application gateway custom error.
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

export const ApplicationGatewayFirewallRateLimitDuration = {
    OneMin: "OneMin",
    FiveMins: "FiveMins",
} as const;

/**
 * Duration over which Rate Limit policy will be applied. Applies only when ruleType is RateLimitRule.
 */
export type ApplicationGatewayFirewallRateLimitDuration = (typeof ApplicationGatewayFirewallRateLimitDuration)[keyof typeof ApplicationGatewayFirewallRateLimitDuration];

export const ApplicationGatewayFirewallUserSessionVariable = {
    ClientAddr: "ClientAddr",
    GeoLocation: "GeoLocation",
    None: "None",
} as const;

/**
 * User Session clause variable.
 */
export type ApplicationGatewayFirewallUserSessionVariable = (typeof ApplicationGatewayFirewallUserSessionVariable)[keyof typeof ApplicationGatewayFirewallUserSessionVariable];

export const ApplicationGatewayLoadDistributionAlgorithm = {
    RoundRobin: "RoundRobin",
    LeastConnections: "LeastConnections",
    IpHash: "IpHash",
} as const;

/**
 * Load Distribution Targets resource of an application gateway.
 */
export type ApplicationGatewayLoadDistributionAlgorithm = (typeof ApplicationGatewayLoadDistributionAlgorithm)[keyof typeof ApplicationGatewayLoadDistributionAlgorithm];

export const ApplicationGatewayProtocol = {
    Http: "Http",
    Https: "Https",
    Tcp: "Tcp",
    Tls: "Tls",
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
    AppGwSslPolicy20220101: "AppGwSslPolicy20220101",
    AppGwSslPolicy20220101S: "AppGwSslPolicy20220101S",
} as const;

/**
 * Name of Ssl predefined policy.
 */
export type ApplicationGatewaySslPolicyName = (typeof ApplicationGatewaySslPolicyName)[keyof typeof ApplicationGatewaySslPolicyName];

export const ApplicationGatewaySslPolicyType = {
    Predefined: "Predefined",
    Custom: "Custom",
    CustomV2: "CustomV2",
} as const;

/**
 * Type of Ssl Policy.
 */
export type ApplicationGatewaySslPolicyType = (typeof ApplicationGatewaySslPolicyType)[keyof typeof ApplicationGatewaySslPolicyType];

export const ApplicationGatewaySslProtocol = {
    TLSv1_0: "TLSv1_0",
    TLSv1_1: "TLSv1_1",
    TLSv1_2: "TLSv1_2",
    TLSv1_3: "TLSv1_3",
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

export const AssociationAccessMode = {
    Learning: "Learning",
    Enforced: "Enforced",
    Audit: "Audit",
} as const;

/**
 * Access mode on the association.
 */
export type AssociationAccessMode = (typeof AssociationAccessMode)[keyof typeof AssociationAccessMode];

export const AuthorizationUseStatus = {
    Available: "Available",
    InUse: "InUse",
} as const;

/**
 * The authorization use status.
 */
export type AuthorizationUseStatus = (typeof AuthorizationUseStatus)[keyof typeof AuthorizationUseStatus];

export const AutoLearnPrivateRangesMode = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * The operation mode for automatically learning private ranges to not be SNAT
 */
export type AutoLearnPrivateRangesMode = (typeof AutoLearnPrivateRangesMode)[keyof typeof AutoLearnPrivateRangesMode];

export const AzureFirewallApplicationRuleProtocolType = {
    Http: "Http",
    Https: "Https",
    Mssql: "Mssql",
} as const;

/**
 * Protocol type.
 */
export type AzureFirewallApplicationRuleProtocolType = (typeof AzureFirewallApplicationRuleProtocolType)[keyof typeof AzureFirewallApplicationRuleProtocolType];

export const AzureFirewallNatRCActionType = {
    Snat: "Snat",
    Dnat: "Dnat",
} as const;

/**
 * The type of action.
 */
export type AzureFirewallNatRCActionType = (typeof AzureFirewallNatRCActionType)[keyof typeof AzureFirewallNatRCActionType];

export const AzureFirewallNetworkRuleProtocol = {
    TCP: "TCP",
    UDP: "UDP",
    Any: "Any",
    ICMP: "ICMP",
} as const;

/**
 * The protocol of a Network Rule resource.
 */
export type AzureFirewallNetworkRuleProtocol = (typeof AzureFirewallNetworkRuleProtocol)[keyof typeof AzureFirewallNetworkRuleProtocol];

export const AzureFirewallRCActionType = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

/**
 * The type of action.
 */
export type AzureFirewallRCActionType = (typeof AzureFirewallRCActionType)[keyof typeof AzureFirewallRCActionType];

export const AzureFirewallSkuName = {
    AZFW_VNet: "AZFW_VNet",
    AZFW_Hub: "AZFW_Hub",
} as const;

/**
 * Name of an Azure Firewall SKU.
 */
export type AzureFirewallSkuName = (typeof AzureFirewallSkuName)[keyof typeof AzureFirewallSkuName];

export const AzureFirewallSkuTier = {
    Standard: "Standard",
    Premium: "Premium",
    Basic: "Basic",
} as const;

/**
 * Tier of an Azure Firewall.
 */
export type AzureFirewallSkuTier = (typeof AzureFirewallSkuTier)[keyof typeof AzureFirewallSkuTier];

export const AzureFirewallThreatIntelMode = {
    Alert: "Alert",
    Deny: "Deny",
    Off: "Off",
} as const;

/**
 * The operation mode for Threat Intelligence.
 */
export type AzureFirewallThreatIntelMode = (typeof AzureFirewallThreatIntelMode)[keyof typeof AzureFirewallThreatIntelMode];

export const BackendEnabledState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Whether to enable use of this backend. Permitted values are 'Enabled' or 'Disabled'
 */
export type BackendEnabledState = (typeof BackendEnabledState)[keyof typeof BackendEnabledState];

export const BastionHostSkuName = {
    Basic: "Basic",
    Standard: "Standard",
} as const;

/**
 * The name of this Bastion Host.
 */
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

/**
 * The commissioned state of the Custom IP Prefix.
 */
export type CommissionedState = (typeof CommissionedState)[keyof typeof CommissionedState];

export const ConfigurationType = {
    SecurityAdmin: "SecurityAdmin",
    Connectivity: "Connectivity",
} as const;

/**
 * Configuration Deployment Type.
 */
export type ConfigurationType = (typeof ConfigurationType)[keyof typeof ConfigurationType];

export const ConnectionMonitorEndpointFilterItemType = {
    AgentAddress: "AgentAddress",
} as const;

/**
 * The type of item included in the filter. Currently only 'AgentAddress' is supported.
 */
export type ConnectionMonitorEndpointFilterItemType = (typeof ConnectionMonitorEndpointFilterItemType)[keyof typeof ConnectionMonitorEndpointFilterItemType];

export const ConnectionMonitorEndpointFilterType = {
    Include: "Include",
} as const;

/**
 * The behavior of the endpoint filter. Currently only 'Include' is supported.
 */
export type ConnectionMonitorEndpointFilterType = (typeof ConnectionMonitorEndpointFilterType)[keyof typeof ConnectionMonitorEndpointFilterType];

export const ConnectionMonitorTestConfigurationProtocol = {
    Tcp: "Tcp",
    Http: "Http",
    Icmp: "Icmp",
} as const;

/**
 * The protocol to use in test evaluation.
 */
export type ConnectionMonitorTestConfigurationProtocol = (typeof ConnectionMonitorTestConfigurationProtocol)[keyof typeof ConnectionMonitorTestConfigurationProtocol];

export const ConnectivityTopology = {
    HubAndSpoke: "HubAndSpoke",
    Mesh: "Mesh",
} as const;

/**
 * Connectivity topology type.
 */
export type ConnectivityTopology = (typeof ConnectivityTopology)[keyof typeof ConnectivityTopology];

export const CoverageLevel = {
    Default: "Default",
    Low: "Low",
    BelowAverage: "BelowAverage",
    Average: "Average",
    AboveAverage: "AboveAverage",
    Full: "Full",
} as const;

/**
 * Test coverage for the endpoint.
 */
export type CoverageLevel = (typeof CoverageLevel)[keyof typeof CoverageLevel];

export const CustomIpPrefixType = {
    Singular: "Singular",
    Parent: "Parent",
    Child: "Child",
} as const;

/**
 * Type of custom IP prefix. Should be Singular, Parent, or Child.
 */
export type CustomIpPrefixType = (typeof CustomIpPrefixType)[keyof typeof CustomIpPrefixType];

export const CustomRuleEnabledState = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * Describes if the custom rule is in enabled or disabled state. Defaults to Enabled if not specified.
 */
export type CustomRuleEnabledState = (typeof CustomRuleEnabledState)[keyof typeof CustomRuleEnabledState];

export const DdosSettingsProtectionMode = {
    VirtualNetworkInherited: "VirtualNetworkInherited",
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * The DDoS protection mode of the public IP
 */
export type DdosSettingsProtectionMode = (typeof DdosSettingsProtectionMode)[keyof typeof DdosSettingsProtectionMode];

export const DeleteExistingNSGs = {
    False: "False",
    True: "True",
} as const;

/**
 * Flag if need to delete existing network security groups.
 */
export type DeleteExistingNSGs = (typeof DeleteExistingNSGs)[keyof typeof DeleteExistingNSGs];

export const DeleteExistingPeering = {
    False: "False",
    True: "True",
} as const;

/**
 * Flag if need to remove current existing peerings.
 */
export type DeleteExistingPeering = (typeof DeleteExistingPeering)[keyof typeof DeleteExistingPeering];

export const DeleteOptions = {
    Delete: "Delete",
    Detach: "Detach",
} as const;

/**
 * Specify what happens to the public IP address when the VM using it is deleted
 */
export type DeleteOptions = (typeof DeleteOptions)[keyof typeof DeleteOptions];

export const DestinationPortBehavior = {
    None: "None",
    ListenIfAvailable: "ListenIfAvailable",
} as const;

/**
 * Destination port behavior.
 */
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

/**
 * The DH Group used in IKE Phase 1 for initial SA.
 */
export type DhGroup = (typeof DhGroup)[keyof typeof DhGroup];

export const DynamicCompressionEnabled = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Whether to use dynamic compression for cached content
 */
export type DynamicCompressionEnabled = (typeof DynamicCompressionEnabled)[keyof typeof DynamicCompressionEnabled];

export const EndpointMonitorStatus = {
    CheckingEndpoint: "CheckingEndpoint",
    Online: "Online",
    Degraded: "Degraded",
    Disabled: "Disabled",
    Inactive: "Inactive",
    Stopped: "Stopped",
    Unmonitored: "Unmonitored",
} as const;

/**
 * The monitoring status of the endpoint.
 */
export type EndpointMonitorStatus = (typeof EndpointMonitorStatus)[keyof typeof EndpointMonitorStatus];

export const EndpointStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * The status of the endpoint. If the endpoint is Enabled, it is probed for endpoint health and is included in the traffic routing method.
 */
export type EndpointStatus = (typeof EndpointStatus)[keyof typeof EndpointStatus];

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

/**
 * The endpoint type.
 */
export type EndpointType = (typeof EndpointType)[keyof typeof EndpointType];

export const EnforceCertificateNameCheckEnabledState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Whether to enforce certificate name check on HTTPS requests to all backend pools. No effect on non-HTTPS requests.
 */
export type EnforceCertificateNameCheckEnabledState = (typeof EnforceCertificateNameCheckEnabledState)[keyof typeof EnforceCertificateNameCheckEnabledState];

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

export const ExpressRouteLinkAdminState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Administrative state of the physical port.
 */
export type ExpressRouteLinkAdminState = (typeof ExpressRouteLinkAdminState)[keyof typeof ExpressRouteLinkAdminState];

export const ExpressRouteLinkMacSecCipher = {
    GcmAes256: "GcmAes256",
    GcmAes128: "GcmAes128",
    GcmAesXpn128: "GcmAesXpn128",
    GcmAesXpn256: "GcmAesXpn256",
} as const;

/**
 * Mac security cipher.
 */
export type ExpressRouteLinkMacSecCipher = (typeof ExpressRouteLinkMacSecCipher)[keyof typeof ExpressRouteLinkMacSecCipher];

export const ExpressRouteLinkMacSecSciState = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * Sci mode enabled/disabled.
 */
export type ExpressRouteLinkMacSecSciState = (typeof ExpressRouteLinkMacSecSciState)[keyof typeof ExpressRouteLinkMacSecSciState];

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

export const ExpressRoutePortsBillingType = {
    MeteredData: "MeteredData",
    UnlimitedData: "UnlimitedData",
} as const;

/**
 * The billing type of the ExpressRoutePort resource.
 */
export type ExpressRoutePortsBillingType = (typeof ExpressRoutePortsBillingType)[keyof typeof ExpressRoutePortsBillingType];

export const ExpressRoutePortsEncapsulation = {
    Dot1Q: "Dot1Q",
    QinQ: "QinQ",
} as const;

/**
 * Encapsulation method on physical ports.
 */
export type ExpressRoutePortsEncapsulation = (typeof ExpressRoutePortsEncapsulation)[keyof typeof ExpressRoutePortsEncapsulation];

export const ExtendedLocationTypes = {
    EdgeZone: "EdgeZone",
} as const;

/**
 * The type of the extended location.
 */
export type ExtendedLocationTypes = (typeof ExtendedLocationTypes)[keyof typeof ExtendedLocationTypes];

export const FirewallPolicyFilterRuleActionType = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

/**
 * The type of action.
 */
export type FirewallPolicyFilterRuleActionType = (typeof FirewallPolicyFilterRuleActionType)[keyof typeof FirewallPolicyFilterRuleActionType];

export const FirewallPolicyFilterRuleCollectionActionType = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

/**
 * The type of action.
 */
export type FirewallPolicyFilterRuleCollectionActionType = (typeof FirewallPolicyFilterRuleCollectionActionType)[keyof typeof FirewallPolicyFilterRuleCollectionActionType];

export const FirewallPolicyIDPSQuerySortOrder = {
    Ascending: "Ascending",
    Descending: "Descending",
} as const;

/**
 * Describes if results should be in ascending/descending order
 */
export type FirewallPolicyIDPSQuerySortOrder = (typeof FirewallPolicyIDPSQuerySortOrder)[keyof typeof FirewallPolicyIDPSQuerySortOrder];

export const FirewallPolicyIntrusionDetectionProtocol = {
    TCP: "TCP",
    UDP: "UDP",
    ICMP: "ICMP",
    ANY: "ANY",
} as const;

/**
 * The rule bypass protocol.
 */
export type FirewallPolicyIntrusionDetectionProtocol = (typeof FirewallPolicyIntrusionDetectionProtocol)[keyof typeof FirewallPolicyIntrusionDetectionProtocol];

export const FirewallPolicyIntrusionDetectionStateType = {
    Off: "Off",
    Alert: "Alert",
    Deny: "Deny",
} as const;

/**
 * Intrusion detection general state.
 */
export type FirewallPolicyIntrusionDetectionStateType = (typeof FirewallPolicyIntrusionDetectionStateType)[keyof typeof FirewallPolicyIntrusionDetectionStateType];

export const FirewallPolicyNatRuleActionType = {
    DNAT: "DNAT",
} as const;

/**
 * The type of action.
 */
export type FirewallPolicyNatRuleActionType = (typeof FirewallPolicyNatRuleActionType)[keyof typeof FirewallPolicyNatRuleActionType];

export const FirewallPolicyNatRuleCollectionActionType = {
    DNAT: "DNAT",
} as const;

/**
 * The type of action.
 */
export type FirewallPolicyNatRuleCollectionActionType = (typeof FirewallPolicyNatRuleCollectionActionType)[keyof typeof FirewallPolicyNatRuleCollectionActionType];

export const FirewallPolicyRuleApplicationProtocolType = {
    Http: "Http",
    Https: "Https",
} as const;

/**
 * Protocol type.
 */
export type FirewallPolicyRuleApplicationProtocolType = (typeof FirewallPolicyRuleApplicationProtocolType)[keyof typeof FirewallPolicyRuleApplicationProtocolType];

export const FirewallPolicyRuleCollectionType = {
    FirewallPolicyNatRuleCollection: "FirewallPolicyNatRuleCollection",
    FirewallPolicyFilterRuleCollection: "FirewallPolicyFilterRuleCollection",
} as const;

/**
 * The type of the rule collection.
 */
export type FirewallPolicyRuleCollectionType = (typeof FirewallPolicyRuleCollectionType)[keyof typeof FirewallPolicyRuleCollectionType];

export const FirewallPolicyRuleConditionApplicationProtocolType = {
    Http: "Http",
    Https: "Https",
} as const;

/**
 * Protocol type.
 */
export type FirewallPolicyRuleConditionApplicationProtocolType = (typeof FirewallPolicyRuleConditionApplicationProtocolType)[keyof typeof FirewallPolicyRuleConditionApplicationProtocolType];

export const FirewallPolicyRuleConditionNetworkProtocol = {
    TCP: "TCP",
    UDP: "UDP",
    Any: "Any",
    ICMP: "ICMP",
} as const;

/**
 * The Network protocol of a Rule condition.
 */
export type FirewallPolicyRuleConditionNetworkProtocol = (typeof FirewallPolicyRuleConditionNetworkProtocol)[keyof typeof FirewallPolicyRuleConditionNetworkProtocol];

export const FirewallPolicyRuleConditionType = {
    ApplicationRuleCondition: "ApplicationRuleCondition",
    NetworkRuleCondition: "NetworkRuleCondition",
    NatRuleCondition: "NatRuleCondition",
} as const;

/**
 * Rule Condition Type.
 */
export type FirewallPolicyRuleConditionType = (typeof FirewallPolicyRuleConditionType)[keyof typeof FirewallPolicyRuleConditionType];

export const FirewallPolicyRuleNetworkProtocol = {
    TCP: "TCP",
    UDP: "UDP",
    Any: "Any",
    ICMP: "ICMP",
} as const;

/**
 * The Network protocol of a Rule.
 */
export type FirewallPolicyRuleNetworkProtocol = (typeof FirewallPolicyRuleNetworkProtocol)[keyof typeof FirewallPolicyRuleNetworkProtocol];

export const FirewallPolicyRuleType = {
    FirewallPolicyNatRule: "FirewallPolicyNatRule",
    FirewallPolicyFilterRule: "FirewallPolicyFilterRule",
} as const;

/**
 * The type of the rule.
 */
export type FirewallPolicyRuleType = (typeof FirewallPolicyRuleType)[keyof typeof FirewallPolicyRuleType];

export const FirewallPolicySkuTier = {
    Standard: "Standard",
    Premium: "Premium",
    Basic: "Basic",
} as const;

/**
 * Tier of Firewall Policy.
 */
export type FirewallPolicySkuTier = (typeof FirewallPolicySkuTier)[keyof typeof FirewallPolicySkuTier];

export const FlowLogFormatType = {
    JSON: "JSON",
} as const;

/**
 * The file type of flow log.
 */
export type FlowLogFormatType = (typeof FlowLogFormatType)[keyof typeof FlowLogFormatType];

export const ForwardingRuleState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * The state of forwarding rule.
 */
export type ForwardingRuleState = (typeof ForwardingRuleState)[keyof typeof ForwardingRuleState];

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

export const FrontDoorMatchVariable = {
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
export type FrontDoorMatchVariable = (typeof FrontDoorMatchVariable)[keyof typeof FrontDoorMatchVariable];

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

export const GatewayLoadBalancerTunnelInterfaceType = {
    None: "None",
    Internal: "Internal",
    External: "External",
} as const;

/**
 * Traffic type of gateway load balancer tunnel interface.
 */
export type GatewayLoadBalancerTunnelInterfaceType = (typeof GatewayLoadBalancerTunnelInterfaceType)[keyof typeof GatewayLoadBalancerTunnelInterfaceType];

export const GatewayLoadBalancerTunnelProtocol = {
    None: "None",
    Native: "Native",
    VXLAN: "VXLAN",
} as const;

/**
 * Protocol of gateway load balancer tunnel interface.
 */
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

/**
 * The Geo for CIDR advertising. Should be an Geo code.
 */
export type Geo = (typeof Geo)[keyof typeof Geo];

export const GroupConnectivity = {
    None: "None",
    DirectlyConnected: "DirectlyConnected",
} as const;

/**
 * Group connectivity type.
 */
export type GroupConnectivity = (typeof GroupConnectivity)[keyof typeof GroupConnectivity];

export const HTTPConfigurationMethod = {
    Get: "Get",
    Post: "Post",
} as const;

/**
 * The HTTP method to use.
 */
export type HTTPConfigurationMethod = (typeof HTTPConfigurationMethod)[keyof typeof HTTPConfigurationMethod];

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

export const HubRoutingPreference = {
    ExpressRoute: "ExpressRoute",
    VpnGateway: "VpnGateway",
    ASPath: "ASPath",
} as const;

/**
 * The hubRoutingPreference of this VirtualHub.
 */
export type HubRoutingPreference = (typeof HubRoutingPreference)[keyof typeof HubRoutingPreference];

export const IPAllocationMethod = {
    Static: "Static",
    Dynamic: "Dynamic",
} as const;

/**
 * The private IP address allocation method.
 */
export type IPAllocationMethod = (typeof IPAllocationMethod)[keyof typeof IPAllocationMethod];

export const IPVersion = {
    IPv4: "IPv4",
    IPv6: "IPv6",
} as const;

/**
 * Whether the specific IP configuration is IPv4 or IPv6. Default is IPv4.
 */
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

/**
 * The IKE encryption algorithm (IKE phase 2).
 */
export type IkeEncryption = (typeof IkeEncryption)[keyof typeof IkeEncryption];

export const IkeIntegrity = {
    MD5: "MD5",
    SHA1: "SHA1",
    SHA256: "SHA256",
    SHA384: "SHA384",
    GCMAES256: "GCMAES256",
    GCMAES128: "GCMAES128",
} as const;

/**
 * The IKE integrity algorithm (IKE phase 2).
 */
export type IkeIntegrity = (typeof IkeIntegrity)[keyof typeof IkeIntegrity];

export const IpAllocationMethod = {
    Static: "Static",
    Dynamic: "Dynamic",
} as const;

/**
 * Private IP address allocation method.
 */
export type IpAllocationMethod = (typeof IpAllocationMethod)[keyof typeof IpAllocationMethod];

export const IpAllocationType = {
    Undefined: "Undefined",
    Hypernet: "Hypernet",
} as const;

/**
 * The type for the IpAllocation.
 */
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

/**
 * The IPSec encryption algorithm (IKE phase 1).
 */
export type IpsecEncryption = (typeof IpsecEncryption)[keyof typeof IpsecEncryption];

export const IpsecIntegrity = {
    MD5: "MD5",
    SHA1: "SHA1",
    SHA256: "SHA256",
    GCMAES128: "GCMAES128",
    GCMAES192: "GCMAES192",
    GCMAES256: "GCMAES256",
} as const;

/**
 * The IPSec integrity algorithm (IKE phase 1).
 */
export type IpsecIntegrity = (typeof IpsecIntegrity)[keyof typeof IpsecIntegrity];

export const IsGlobal = {
    False: "False",
    True: "True",
} as const;

/**
 * Flag if global mesh is supported.
 */
export type IsGlobal = (typeof IsGlobal)[keyof typeof IsGlobal];

export const LoadBalancerBackendAddressAdminState = {
    None: "None",
    Up: "Up",
    Down: "Down",
} as const;

/**
 * A list of administrative states which once set can override health probe so that Load Balancer will always forward new connections to backend, or deny new connections and reset existing connections.
 */
export type LoadBalancerBackendAddressAdminState = (typeof LoadBalancerBackendAddressAdminState)[keyof typeof LoadBalancerBackendAddressAdminState];

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
    Gateway: "Gateway",
} as const;

/**
 * Name of a load balancer SKU.
 */
export type LoadBalancerSkuName = (typeof LoadBalancerSkuName)[keyof typeof LoadBalancerSkuName];

export const LoadBalancerSkuTier = {
    Regional: "Regional",
    Global: "Global",
} as const;

/**
 * Tier of a load balancer SKU.
 */
export type LoadBalancerSkuTier = (typeof LoadBalancerSkuTier)[keyof typeof LoadBalancerSkuTier];

export const LoadDistribution = {
    Default: "Default",
    SourceIP: "SourceIP",
    SourceIPProtocol: "SourceIPProtocol",
} as const;

/**
 * The load distribution policy for this rule.
 */
export type LoadDistribution = (typeof LoadDistribution)[keyof typeof LoadDistribution];

export const ManagedRuleEnabledState = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * The state of the managed rule. Defaults to Disabled if not specified.
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

export const MonitorProtocol = {
    HTTP: "HTTP",
    HTTPS: "HTTPS",
    TCP: "TCP",
} as const;

/**
 * The protocol (HTTP, HTTPS or TCP) used to probe for endpoint health.
 */
export type MonitorProtocol = (typeof MonitorProtocol)[keyof typeof MonitorProtocol];

export const NatGatewaySkuName = {
    Standard: "Standard",
} as const;

/**
 * Name of Nat Gateway SKU.
 */
export type NatGatewaySkuName = (typeof NatGatewaySkuName)[keyof typeof NatGatewaySkuName];

export const NetworkIntentPolicyBasedService = {
    None: "None",
    All: "All",
    AllowRulesOnly: "AllowRulesOnly",
} as const;

/**
 * Network intent policy based services.
 */
export type NetworkIntentPolicyBasedService = (typeof NetworkIntentPolicyBasedService)[keyof typeof NetworkIntentPolicyBasedService];

export const NetworkInterfaceAuxiliaryMode = {
    None: "None",
    MaxConnections: "MaxConnections",
    Floating: "Floating",
    AcceleratedConnections: "AcceleratedConnections",
} as const;

/**
 * Auxiliary mode of Network Interface resource.
 */
export type NetworkInterfaceAuxiliaryMode = (typeof NetworkInterfaceAuxiliaryMode)[keyof typeof NetworkInterfaceAuxiliaryMode];

export const NetworkInterfaceAuxiliarySku = {
    None: "None",
    A1: "A1",
    A2: "A2",
    A4: "A4",
    A8: "A8",
} as const;

/**
 * Auxiliary sku of Network Interface resource.
 */
export type NetworkInterfaceAuxiliarySku = (typeof NetworkInterfaceAuxiliarySku)[keyof typeof NetworkInterfaceAuxiliarySku];

export const NetworkInterfaceMigrationPhase = {
    None: "None",
    Prepare: "Prepare",
    Commit: "Commit",
    Abort: "Abort",
    Committed: "Committed",
} as const;

/**
 * Migration phase of Network Interface resource.
 */
export type NetworkInterfaceMigrationPhase = (typeof NetworkInterfaceMigrationPhase)[keyof typeof NetworkInterfaceMigrationPhase];

export const NetworkInterfaceNicType = {
    Standard: "Standard",
    Elastic: "Elastic",
} as const;

/**
 * Type of Network Interface resource.
 */
export type NetworkInterfaceNicType = (typeof NetworkInterfaceNicType)[keyof typeof NetworkInterfaceNicType];

export const NextStep = {
    Unknown: "Unknown",
    Continue: "Continue",
    Terminate: "Terminate",
} as const;

/**
 * Next step after rule is evaluated. Current supported behaviors are 'Continue'(to next rule) and 'Terminate'.
 */
export type NextStep = (typeof NextStep)[keyof typeof NextStep];

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

export const OutputType = {
    Workspace: "Workspace",
} as const;

/**
 * Connection monitor output destination type. Currently, only "Workspace" is supported.
 */
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

/**
 * The variable to be excluded.
 */
export type OwaspCrsExclusionEntryMatchVariable = (typeof OwaspCrsExclusionEntryMatchVariable)[keyof typeof OwaspCrsExclusionEntryMatchVariable];

export const OwaspCrsExclusionEntrySelectorMatchOperator = {
    Equals: "Equals",
    Contains: "Contains",
    StartsWith: "StartsWith",
    EndsWith: "EndsWith",
    EqualsAny: "EqualsAny",
} as const;

/**
 * When matchVariable is a collection, operate on the selector to specify which elements in the collection this exclusion applies to.
 */
export type OwaspCrsExclusionEntrySelectorMatchOperator = (typeof OwaspCrsExclusionEntrySelectorMatchOperator)[keyof typeof OwaspCrsExclusionEntrySelectorMatchOperator];

export const PacketCaptureTargetType = {
    AzureVM: "AzureVM",
    AzureVMSS: "AzureVMSS",
} as const;

/**
 * Target type of the resource provided.
 */
export type PacketCaptureTargetType = (typeof PacketCaptureTargetType)[keyof typeof PacketCaptureTargetType];

export const PcProtocol = {
    TCP: "TCP",
    UDP: "UDP",
    Any: "Any",
} as const;

/**
 * Protocol to be filtered on.
 */
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

/**
 * The Pfs Group used in IKE Phase 2 for new child SA.
 */
export type PfsGroup = (typeof PfsGroup)[keyof typeof PfsGroup];

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

export const PreferredIPVersion = {
    IPv4: "IPv4",
    IPv6: "IPv6",
} as const;

/**
 * The preferred IP version to use in test evaluation. The connection monitor may choose to use a different version depending on other parameters.
 */
export type PreferredIPVersion = (typeof PreferredIPVersion)[keyof typeof PreferredIPVersion];

export const PreferredRoutingGateway = {
    ExpressRoute: "ExpressRoute",
    VpnGateway: "VpnGateway",
    None: "None",
} as const;

/**
 * The preferred gateway to route on-prem traffic
 */
export type PreferredRoutingGateway = (typeof PreferredRoutingGateway)[keyof typeof PreferredRoutingGateway];

export const ProbeProtocol = {
    Http: "Http",
    Tcp: "Tcp",
    Https: "Https",
} as const;

/**
 * The protocol of the end point. If 'Tcp' is specified, a received ACK is required for the probe to be successful. If 'Http' or 'Https' is specified, a 200 OK response from the specifies URI is required for the probe to be successful.
 */
export type ProbeProtocol = (typeof ProbeProtocol)[keyof typeof ProbeProtocol];

export const ProfileMonitorStatus = {
    CheckingEndpoints: "CheckingEndpoints",
    Online: "Online",
    Degraded: "Degraded",
    Disabled: "Disabled",
    Inactive: "Inactive",
} as const;

/**
 * The profile-level monitoring status of the Traffic Manager profile.
 */
export type ProfileMonitorStatus = (typeof ProfileMonitorStatus)[keyof typeof ProfileMonitorStatus];

export const ProfileStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * The status of the Traffic Manager profile.
 */
export type ProfileStatus = (typeof ProfileStatus)[keyof typeof ProfileStatus];

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

/**
 * RNM supported protocol types.
 */
export type ProtocolType = (typeof ProtocolType)[keyof typeof ProtocolType];

export const PublicIPAddressMigrationPhase = {
    None: "None",
    Prepare: "Prepare",
    Commit: "Commit",
    Abort: "Abort",
    Committed: "Committed",
} as const;

/**
 * Migration phase of Public IP Address.
 */
export type PublicIPAddressMigrationPhase = (typeof PublicIPAddressMigrationPhase)[keyof typeof PublicIPAddressMigrationPhase];

export const PublicIPAddressSkuName = {
    Basic: "Basic",
    Standard: "Standard",
} as const;

/**
 * Name of a public IP address SKU.
 */
export type PublicIPAddressSkuName = (typeof PublicIPAddressSkuName)[keyof typeof PublicIPAddressSkuName];

export const PublicIPAddressSkuTier = {
    Regional: "Regional",
    Global: "Global",
} as const;

/**
 * Tier of a public IP address SKU.
 */
export type PublicIPAddressSkuTier = (typeof PublicIPAddressSkuTier)[keyof typeof PublicIPAddressSkuTier];

export const PublicIPPrefixSkuName = {
    Standard: "Standard",
} as const;

/**
 * Name of a public IP prefix SKU.
 */
export type PublicIPPrefixSkuName = (typeof PublicIPPrefixSkuName)[keyof typeof PublicIPPrefixSkuName];

export const PublicIPPrefixSkuTier = {
    Regional: "Regional",
    Global: "Global",
} as const;

/**
 * Tier of a public IP prefix SKU.
 */
export type PublicIPPrefixSkuTier = (typeof PublicIPPrefixSkuTier)[keyof typeof PublicIPPrefixSkuTier];

export const PublicIpAddressDnsSettingsDomainNameLabelScope = {
    TenantReuse: "TenantReuse",
    SubscriptionReuse: "SubscriptionReuse",
    ResourceGroupReuse: "ResourceGroupReuse",
    NoReuse: "NoReuse",
} as const;

/**
 * The domain name label scope. If a domain name label and a domain name label scope are specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system with a hashed value includes in FQDN.
 */
export type PublicIpAddressDnsSettingsDomainNameLabelScope = (typeof PublicIpAddressDnsSettingsDomainNameLabelScope)[keyof typeof PublicIpAddressDnsSettingsDomainNameLabelScope];

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

export const RouteFilterRuleType = {
    Community: "Community",
} as const;

/**
 * The rule type of the rule.
 */
export type RouteFilterRuleType = (typeof RouteFilterRuleType)[keyof typeof RouteFilterRuleType];

export const RouteMapActionType = {
    Unknown: "Unknown",
    Remove: "Remove",
    Add: "Add",
    Replace: "Replace",
    Drop: "Drop",
} as const;

/**
 * Type of action to be taken. Supported types are 'Remove', 'Add', 'Replace', and 'Drop.'
 */
export type RouteMapActionType = (typeof RouteMapActionType)[keyof typeof RouteMapActionType];

export const RouteMapMatchCondition = {
    Unknown: "Unknown",
    Contains: "Contains",
    Equals: "Equals",
    NotContains: "NotContains",
    NotEquals: "NotEquals",
} as const;

/**
 * Match condition to apply RouteMap rules.
 */
export type RouteMapMatchCondition = (typeof RouteMapMatchCondition)[keyof typeof RouteMapMatchCondition];

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
    Equals: "Equals",
    EqualsAny: "EqualsAny",
} as const;

/**
 * When matchVariable is a collection, operate on the selector to specify which elements in the collection this rule applies to.
 */
export type ScrubbingRuleEntryMatchOperator = (typeof ScrubbingRuleEntryMatchOperator)[keyof typeof ScrubbingRuleEntryMatchOperator];

export const ScrubbingRuleEntryMatchVariable = {
    RequestHeaderNames: "RequestHeaderNames",
    RequestCookieNames: "RequestCookieNames",
    RequestArgNames: "RequestArgNames",
    RequestPostArgNames: "RequestPostArgNames",
    RequestJSONArgNames: "RequestJSONArgNames",
    RequestIPAddress: "RequestIPAddress",
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
 * Defines the state of log scrubbing rule. Default value is Enabled.
 */
export type ScrubbingRuleEntryState = (typeof ScrubbingRuleEntryState)[keyof typeof ScrubbingRuleEntryState];

export const SecurityConfigurationRuleAccess = {
    Allow: "Allow",
    Deny: "Deny",
    AlwaysAllow: "AlwaysAllow",
} as const;

/**
 * Indicates the access allowed for this particular rule
 */
export type SecurityConfigurationRuleAccess = (typeof SecurityConfigurationRuleAccess)[keyof typeof SecurityConfigurationRuleAccess];

export const SecurityConfigurationRuleDirection = {
    Inbound: "Inbound",
    Outbound: "Outbound",
} as const;

/**
 * Indicates if the traffic matched against the rule in inbound or outbound.
 */
export type SecurityConfigurationRuleDirection = (typeof SecurityConfigurationRuleDirection)[keyof typeof SecurityConfigurationRuleDirection];

export const SecurityConfigurationRuleProtocol = {
    Tcp: "Tcp",
    Udp: "Udp",
    Icmp: "Icmp",
    Esp: "Esp",
    Any: "Any",
    Ah: "Ah",
} as const;

/**
 * Network protocol this rule applies to.
 */
export type SecurityConfigurationRuleProtocol = (typeof SecurityConfigurationRuleProtocol)[keyof typeof SecurityConfigurationRuleProtocol];

export const SecurityProviderName = {
    ZScaler: "ZScaler",
    IBoss: "IBoss",
    Checkpoint: "Checkpoint",
} as const;

/**
 * The security provider name.
 */
export type SecurityProviderName = (typeof SecurityProviderName)[keyof typeof SecurityProviderName];

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
    Ah: "Ah",
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

export const TrafficRoutingMethod = {
    Performance: "Performance",
    Priority: "Priority",
    Weighted: "Weighted",
    Geographic: "Geographic",
    MultiValue: "MultiValue",
    Subnet: "Subnet",
} as const;

/**
 * The traffic routing method of the Traffic Manager profile.
 */
export type TrafficRoutingMethod = (typeof TrafficRoutingMethod)[keyof typeof TrafficRoutingMethod];

export const TrafficViewEnrollmentStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Indicates whether Traffic View is 'Enabled' or 'Disabled' for the Traffic Manager profile. Null, indicates 'Disabled'. Enabling this feature will increase the cost of the Traffic Manage profile.
 */
export type TrafficViewEnrollmentStatus = (typeof TrafficViewEnrollmentStatus)[keyof typeof TrafficViewEnrollmentStatus];

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

export const TransportProtocol = {
    Udp: "Udp",
    Tcp: "Tcp",
    All: "All",
} as const;

/**
 * The reference to the transport protocol used by the load balancing rule.
 */
export type TransportProtocol = (typeof TransportProtocol)[keyof typeof TransportProtocol];

export const UseHubGateway = {
    False: "False",
    True: "True",
} as const;

/**
 * Flag if need to use hub gateway.
 */
export type UseHubGateway = (typeof UseHubGateway)[keyof typeof UseHubGateway];

export const UserRuleKind = {
    Custom: "Custom",
    Default: "Default",
} as const;

/**
 * Whether the rule is custom or default.
 */
export type UserRuleKind = (typeof UserRuleKind)[keyof typeof UserRuleKind];

export const VirtualNetworkEncryptionEnforcement = {
    DropUnencrypted: "DropUnencrypted",
    AllowUnencrypted: "AllowUnencrypted",
} as const;

/**
 * If the encrypted VNet allows VM that does not support encryption
 */
export type VirtualNetworkEncryptionEnforcement = (typeof VirtualNetworkEncryptionEnforcement)[keyof typeof VirtualNetworkEncryptionEnforcement];

export const VirtualNetworkGatewayConnectionMode = {
    Default: "Default",
    ResponderOnly: "ResponderOnly",
    InitiatorOnly: "InitiatorOnly",
} as const;

/**
 * The connection mode for this connection.
 */
export type VirtualNetworkGatewayConnectionMode = (typeof VirtualNetworkGatewayConnectionMode)[keyof typeof VirtualNetworkGatewayConnectionMode];

export const VirtualNetworkGatewayConnectionProtocol = {
    IKEv2: "IKEv2",
    IKEv1: "IKEv1",
} as const;

/**
 * Connection protocol used for this connection.
 */
export type VirtualNetworkGatewayConnectionProtocol = (typeof VirtualNetworkGatewayConnectionProtocol)[keyof typeof VirtualNetworkGatewayConnectionProtocol];

export const VirtualNetworkGatewayConnectionType = {
    IPsec: "IPsec",
    Vnet2Vnet: "Vnet2Vnet",
    ExpressRoute: "ExpressRoute",
    VPNClient: "VPNClient",
} as const;

/**
 * Gateway connection type.
 */
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

/**
 * Gateway SKU name.
 */
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

/**
 * Gateway SKU tier.
 */
export type VirtualNetworkGatewaySkuTier = (typeof VirtualNetworkGatewaySkuTier)[keyof typeof VirtualNetworkGatewaySkuTier];

export const VirtualNetworkGatewayType = {
    Vpn: "Vpn",
    ExpressRoute: "ExpressRoute",
    LocalGateway: "LocalGateway",
} as const;

/**
 * The type of this virtual network gateway.
 */
export type VirtualNetworkGatewayType = (typeof VirtualNetworkGatewayType)[keyof typeof VirtualNetworkGatewayType];

export const VirtualNetworkPeeringLevel = {
    FullyInSync: "FullyInSync",
    RemoteNotInSync: "RemoteNotInSync",
    LocalNotInSync: "LocalNotInSync",
    LocalAndRemoteNotInSync: "LocalAndRemoteNotInSync",
} as const;

/**
 * The peering sync status of the virtual network peering.
 */
export type VirtualNetworkPeeringLevel = (typeof VirtualNetworkPeeringLevel)[keyof typeof VirtualNetworkPeeringLevel];

export const VirtualNetworkPeeringState = {
    Initiated: "Initiated",
    Connected: "Connected",
    Disconnected: "Disconnected",
} as const;

/**
 * The status of the virtual network peering.
 */
export type VirtualNetworkPeeringState = (typeof VirtualNetworkPeeringState)[keyof typeof VirtualNetworkPeeringState];

export const VirtualNetworkPrivateEndpointNetworkPolicies = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Enable or Disable apply network policies on private end point in the subnet.
 */
export type VirtualNetworkPrivateEndpointNetworkPolicies = (typeof VirtualNetworkPrivateEndpointNetworkPolicies)[keyof typeof VirtualNetworkPrivateEndpointNetworkPolicies];

export const VirtualNetworkPrivateLinkServiceNetworkPolicies = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Enable or Disable apply network policies on private link service in the subnet.
 */
export type VirtualNetworkPrivateLinkServiceNetworkPolicies = (typeof VirtualNetworkPrivateLinkServiceNetworkPolicies)[keyof typeof VirtualNetworkPrivateLinkServiceNetworkPolicies];

export const VnetLocalRouteOverrideCriteria = {
    Contains: "Contains",
    Equal: "Equal",
} as const;

/**
 * Parameter determining whether NVA in spoke vnet is bypassed for traffic with destination in spoke.
 */
export type VnetLocalRouteOverrideCriteria = (typeof VnetLocalRouteOverrideCriteria)[keyof typeof VnetLocalRouteOverrideCriteria];

export const VpnAuthenticationType = {
    Certificate: "Certificate",
    Radius: "Radius",
    AAD: "AAD",
} as const;

/**
 * VPN authentication types enabled for the VpnServerConfiguration.
 */
export type VpnAuthenticationType = (typeof VpnAuthenticationType)[keyof typeof VpnAuthenticationType];

export const VpnClientProtocol = {
    IkeV2: "IkeV2",
    SSTP: "SSTP",
    OpenVPN: "OpenVPN",
} as const;

/**
 * VPN client protocol enabled for the virtual network gateway.
 */
export type VpnClientProtocol = (typeof VpnClientProtocol)[keyof typeof VpnClientProtocol];

export const VpnGatewayGeneration = {
    None: "None",
    Generation1: "Generation1",
    Generation2: "Generation2",
} as const;

/**
 * The generation for this VirtualNetworkGateway. Must be None if gatewayType is not VPN.
 */
export type VpnGatewayGeneration = (typeof VpnGatewayGeneration)[keyof typeof VpnGatewayGeneration];

export const VpnGatewayTunnelingProtocol = {
    IkeV2: "IkeV2",
    OpenVPN: "OpenVPN",
} as const;

/**
 * VPN protocol enabled for the VpnServerConfiguration.
 */
export type VpnGatewayTunnelingProtocol = (typeof VpnGatewayTunnelingProtocol)[keyof typeof VpnGatewayTunnelingProtocol];

export const VpnLinkConnectionMode = {
    Default: "Default",
    ResponderOnly: "ResponderOnly",
    InitiatorOnly: "InitiatorOnly",
} as const;

/**
 * Vpn link connection mode.
 */
export type VpnLinkConnectionMode = (typeof VpnLinkConnectionMode)[keyof typeof VpnLinkConnectionMode];

export const VpnNatRuleMode = {
    EgressSnat: "EgressSnat",
    IngressSnat: "IngressSnat",
} as const;

/**
 * The Source NAT direction of a VPN NAT.
 */
export type VpnNatRuleMode = (typeof VpnNatRuleMode)[keyof typeof VpnNatRuleMode];

export const VpnNatRuleType = {
    Static: "Static",
    Dynamic: "Dynamic",
} as const;

/**
 * The type of NAT rule for VPN NAT.
 */
export type VpnNatRuleType = (typeof VpnNatRuleType)[keyof typeof VpnNatRuleType];

export const VpnPolicyMemberAttributeType = {
    CertificateGroupId: "CertificateGroupId",
    AADGroupId: "AADGroupId",
    RadiusAzureGroupId: "RadiusAzureGroupId",
} as const;

/**
 * The Vpn Policy member attribute type.
 */
export type VpnPolicyMemberAttributeType = (typeof VpnPolicyMemberAttributeType)[keyof typeof VpnPolicyMemberAttributeType];

export const VpnType = {
    PolicyBased: "PolicyBased",
    RouteBased: "RouteBased",
} as const;

/**
 * The type of this virtual network gateway.
 */
export type VpnType = (typeof VpnType)[keyof typeof VpnType];

export const WebApplicationFirewallAction = {
    Allow: "Allow",
    Block: "Block",
    Log: "Log",
} as const;

/**
 * Type of Actions.
 */
export type WebApplicationFirewallAction = (typeof WebApplicationFirewallAction)[keyof typeof WebApplicationFirewallAction];

export const WebApplicationFirewallEnabledState = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * The state of the policy.
 */
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

/**
 * Match Variable.
 */
export type WebApplicationFirewallMatchVariable = (typeof WebApplicationFirewallMatchVariable)[keyof typeof WebApplicationFirewallMatchVariable];

export const WebApplicationFirewallMode = {
    Prevention: "Prevention",
    Detection: "Detection",
} as const;

/**
 * The mode of the policy.
 */
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

/**
 * The operator to be matched.
 */
export type WebApplicationFirewallOperator = (typeof WebApplicationFirewallOperator)[keyof typeof WebApplicationFirewallOperator];

export const WebApplicationFirewallRuleType = {
    MatchRule: "MatchRule",
    RateLimitRule: "RateLimitRule",
    Invalid: "Invalid",
} as const;

/**
 * The rule type.
 */
export type WebApplicationFirewallRuleType = (typeof WebApplicationFirewallRuleType)[keyof typeof WebApplicationFirewallRuleType];

export const WebApplicationFirewallScrubbingState = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * State of the log scrubbing config. Default value is Enabled.
 */
export type WebApplicationFirewallScrubbingState = (typeof WebApplicationFirewallScrubbingState)[keyof typeof WebApplicationFirewallScrubbingState];

export const WebApplicationFirewallState = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * Describes if the custom rule is in enabled or disabled state. Defaults to Enabled if not specified.
 */
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

/**
 * Transforms applied before matching.
 */
export type WebApplicationFirewallTransform = (typeof WebApplicationFirewallTransform)[keyof typeof WebApplicationFirewallTransform];

export const ZoneType = {
    Public: "Public",
    Private: "Private",
} as const;

/**
 * The type of this DNS zone (Public or Private).
 */
export type ZoneType = (typeof ZoneType)[keyof typeof ZoneType];
