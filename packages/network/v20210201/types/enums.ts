export const DdosSettingsProtectionCoverage = {
    Basic: "Basic",
    Standard: "Standard",
} as const;

/**
 * The DDoS protection policy customizability of the public IP. Only standard coverage will have the ability to be customized.
 */
export type DdosSettingsProtectionCoverage = (typeof DdosSettingsProtectionCoverage)[keyof typeof DdosSettingsProtectionCoverage];

export const DeleteOptions = {
    Delete: "Delete",
    Detach: "Detach",
} as const;

/**
 * Specify what happens to the public IP address when the VM using it is deleted
 */
export type DeleteOptions = (typeof DeleteOptions)[keyof typeof DeleteOptions];

export const ExtendedLocationTypes = {
    EdgeZone: "EdgeZone",
} as const;

/**
 * The type of the extended location.
 */
export type ExtendedLocationTypes = (typeof ExtendedLocationTypes)[keyof typeof ExtendedLocationTypes];

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

export const NatGatewaySkuName = {
    Standard: "Standard",
} as const;

/**
 * Name of Nat Gateway SKU.
 */
export type NatGatewaySkuName = (typeof NatGatewaySkuName)[keyof typeof NatGatewaySkuName];

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
    Ah: "Ah",
} as const;

/**
 * Network protocol this rule applies to.
 */
export type SecurityRuleProtocol = (typeof SecurityRuleProtocol)[keyof typeof SecurityRuleProtocol];

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
