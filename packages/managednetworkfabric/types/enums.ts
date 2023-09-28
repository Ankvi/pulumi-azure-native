export const Action = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

/**
 * Specify action.
 */
export type Action = (typeof Action)[keyof typeof Action];

export const AddressFamily = {
    Ipv4: "ipv4",
    Ipv6: "ipv6",
} as const;

/**
 * IP address family. Example: ipv4 | ipv6.
 */
export type AddressFamily = (typeof AddressFamily)[keyof typeof AddressFamily];

export const AllowASOverride = {
    Enable: "Enable",
    Disable: "Disable",
} as const;

/**
 * Enable Or Disable state.
 */
export type AllowASOverride = (typeof AllowASOverride)[keyof typeof AllowASOverride];

export const BooleanEnumProperty = {
    True: "True",
    False: "False",
} as const;

/**
 * Based on this parameter the layer2/layer3 is made as mandatory. Example: True/False
 */
export type BooleanEnumProperty = (typeof BooleanEnumProperty)[keyof typeof BooleanEnumProperty];

export const CommunityActionTypes = {
    Permit: "Permit",
    Deny: "Deny",
} as const;

/**
 * action. Example: Permit | Deny.
 */
export type CommunityActionTypes = (typeof CommunityActionTypes)[keyof typeof CommunityActionTypes];

export const Condition = {
    EqualTo: "EqualTo",
    GreaterThanOrEqualTo: "GreaterThanOrEqualTo",
    LesserThanOrEqualTo: "LesserThanOrEqualTo",
} as const;

/**
 * Specify prefix-list bounds.
 */
export type Condition = (typeof Condition)[keyof typeof Condition];

export const ConditionActionType = {
    Allow: "allow",
    Deny: "deny",
} as const;

/**
 * action. Example: allow | deny.
 */
export type ConditionActionType = (typeof ConditionActionType)[keyof typeof ConditionActionType];

export const ConfigurationType = {
    File: "File",
    Inline: "Inline",
} as const;

/**
 * Input method to configure Network Tap Rule.
 */
export type ConfigurationType = (typeof ConfigurationType)[keyof typeof ConfigurationType];

export const DestinationType = {
    IsolationDomain: "IsolationDomain",
    Direct: "Direct",
} as const;

/**
 * Type of destination. Input can be IsolationDomain or Direct.
 */
export type DestinationType = (typeof DestinationType)[keyof typeof DestinationType];

export const Encapsulation = {
    None: "None",
    GRE: "GRE",
} as const;

/**
 * Type of encapsulation.
 */
export type Encapsulation = (typeof Encapsulation)[keyof typeof Encapsulation];

export const EncapsulationType = {
    None: "None",
    GTPv1: "GTPv1",
} as const;

/**
 * Encapsulation Type that needs to be matched.
 */
export type EncapsulationType = (typeof EncapsulationType)[keyof typeof EncapsulationType];

export const GatewayType = {
    Infrastructure: "Infrastructure",
    Workload: "Workload",
} as const;

/**
 * Gateway Type of the resource.
 */
export type GatewayType = (typeof GatewayType)[keyof typeof GatewayType];

export const IPAddressType = {
    IPv4: "IPv4",
    IPv6: "IPv6",
} as const;

/**
 * Type of IP Address. IPv4 or IPv6
 */
export type IPAddressType = (typeof IPAddressType)[keyof typeof IPAddressType];

export const Layer4Protocol = {
    TCP: "TCP",
    UDP: "UDP",
} as const;

/**
 * Layer4 protocol type that needs to be matched.
 */
export type Layer4Protocol = (typeof Layer4Protocol)[keyof typeof Layer4Protocol];

export const NetworkDeviceRoleTypes = {
    CE: "CE",
    ToR: "ToR",
    NPB: "NPB",
    TS: "TS",
    Management: "Management",
} as const;

/**
 * networkDeviceRole is the device role: Example: CE | ToR.
 */
export type NetworkDeviceRoleTypes = (typeof NetworkDeviceRoleTypes)[keyof typeof NetworkDeviceRoleTypes];

export const NniType = {
    CE: "CE",
    NPB: "NPB",
} as const;

/**
 * Type of NNI used. Example: CE | NPB
 */
export type NniType = (typeof NniType)[keyof typeof NniType];

export const PeeringOption = {
    OptionA: "OptionA",
    OptionB: "OptionB",
} as const;

/**
 * Peering option list.
 */
export type PeeringOption = (typeof PeeringOption)[keyof typeof PeeringOption];

export const PollingType = {
    Pull: "Pull",
    Push: "Push",
} as const;

/**
 * Polling type.
 */
export type PollingType = (typeof PollingType)[keyof typeof PollingType];

export const PortType = {
    SourcePort: "SourcePort",
    DestinationPort: "DestinationPort",
} as const;

/**
 * Port type that needs to be matched.
 */
export type PortType = (typeof PortType)[keyof typeof PortType];

export const PrefixType = {
    Prefix: "Prefix",
    LongestPrefix: "LongestPrefix",
} as const;

/**
 * IP Prefix Type that needs to be matched.
 */
export type PrefixType = (typeof PrefixType)[keyof typeof PrefixType];

export const RedistributeConnectedSubnets = {
    True: "True",
    False: "False",
} as const;

/**
 * Advertise Connected Subnets. Ex: "True" | "False".
 */
export type RedistributeConnectedSubnets = (typeof RedistributeConnectedSubnets)[keyof typeof RedistributeConnectedSubnets];

export const RedistributeStaticRoutes = {
    True: "True",
    False: "False",
} as const;

/**
 * Advertise Static Routes. Ex: "True" | "False".
 */
export type RedistributeStaticRoutes = (typeof RedistributeStaticRoutes)[keyof typeof RedistributeStaticRoutes];

export const SourceDestinationType = {
    SourceIP: "SourceIP",
    DestinationIP: "DestinationIP",
} as const;

/**
 * IP Address type that needs to be matched.
 */
export type SourceDestinationType = (typeof SourceDestinationType)[keyof typeof SourceDestinationType];

export const TapRuleActionType = {
    Drop: "Drop",
    Count: "Count",
    Log: "Log",
    Replicate: "Replicate",
    Goto: "Goto",
    Redirect: "Redirect",
    Mirror: "Mirror",
} as const;

/**
 * Type of actions that can be performed.
 */
export type TapRuleActionType = (typeof TapRuleActionType)[keyof typeof TapRuleActionType];

export const WellKnownCommunities = {
    Internet: "Internet",
    LocalAS: "LocalAS",
    NoAdvertise: "NoAdvertise",
    NoExport: "NoExport",
    GShut: "GShut",
} as const;

/**
 *
 * `Internet` - Advertise routes to internet community.
 *  `LocalAS` - Advertise routes to only localAS peers.
 *  `NoAdvertise` - Don't advertise routes to any peer.
 * `NoExport` - Don't export to next AS.
 * `GShut` - Graceful Shutdown (GSHUT) withdraw routes before terminating BGP connection.
 */
export type WellKnownCommunities = (typeof WellKnownCommunities)[keyof typeof WellKnownCommunities];
