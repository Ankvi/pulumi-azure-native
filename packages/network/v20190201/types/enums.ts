export const Access = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

export type Access = (typeof Access)[keyof typeof Access];

export const DdosSettingsProtectionCoverage = {
    Basic: "Basic",
    Standard: "Standard",
} as const;

export type DdosSettingsProtectionCoverage = (typeof DdosSettingsProtectionCoverage)[keyof typeof DdosSettingsProtectionCoverage];

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

export const PublicIPAddressSkuName = {
    Basic: "Basic",
    Standard: "Standard",
} as const;

export type PublicIPAddressSkuName = (typeof PublicIPAddressSkuName)[keyof typeof PublicIPAddressSkuName];

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
} as const;

export type SecurityRuleProtocol = (typeof SecurityRuleProtocol)[keyof typeof SecurityRuleProtocol];

export const TransportProtocol = {
    Udp: "Udp",
    Tcp: "Tcp",
    All: "All",
} as const;

export type TransportProtocol = (typeof TransportProtocol)[keyof typeof TransportProtocol];
