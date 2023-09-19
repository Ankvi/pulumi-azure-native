export const DdosSettingsProtectionCoverage = {
    Basic: "Basic",
    Standard: "Standard",
} as const;

export type DdosSettingsProtectionCoverage = (typeof DdosSettingsProtectionCoverage)[keyof typeof DdosSettingsProtectionCoverage];

export const DeleteOptions = {
    Delete: "Delete",
    Detach: "Detach",
} as const;

export type DeleteOptions = (typeof DeleteOptions)[keyof typeof DeleteOptions];

export const ExtendedLocationTypes = {
    EdgeZone: "EdgeZone",
} as const;

export type ExtendedLocationTypes = (typeof ExtendedLocationTypes)[keyof typeof ExtendedLocationTypes];

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

export const NatGatewaySkuName = {
    Standard: "Standard",
} as const;

export type NatGatewaySkuName = (typeof NatGatewaySkuName)[keyof typeof NatGatewaySkuName];

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
