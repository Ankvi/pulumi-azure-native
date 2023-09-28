export const AclActionType = {
    Drop: "Drop",
    Count: "Count",
    Log: "Log",
} as const;

/**
 * Type of actions that can be performed.
 */
export type AclActionType = (typeof AclActionType)[keyof typeof AclActionType];

export const Action = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

/**
 * Specify action.
 */
export type Action = (typeof Action)[keyof typeof Action];

export const AddressFamilyType = {
    IPv4: "IPv4",
    IPv6: "IPv6",
} as const;

/**
 * AddressFamilyType. This parameter decides whether the given ipv4 or ipv6 route policy.
 */
export type AddressFamilyType = (typeof AddressFamilyType)[keyof typeof AddressFamilyType];

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
 * Based on this option layer3 parameters are mandatory. Example: True/False
 */
export type BooleanEnumProperty = (typeof BooleanEnumProperty)[keyof typeof BooleanEnumProperty];

export const CommunityActionTypes = {
    Permit: "Permit",
    Deny: "Deny",
} as const;

/**
 * Default action that needs to be applied when no condition is matched. Example: Permit | Deny.
 */
export type CommunityActionTypes = (typeof CommunityActionTypes)[keyof typeof CommunityActionTypes];

export const Condition = {
    EqualTo: "EqualTo",
    GreaterThanOrEqualTo: "GreaterThanOrEqualTo",
    LesserThanOrEqualTo: "LesserThanOrEqualTo",
    Range: "Range",
} as const;

/**
 * Specify prefix-list bounds.
 */
export type Condition = (typeof Condition)[keyof typeof Condition];

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

export const Extension = {
    NoExtension: "NoExtension",
    NPB: "NPB",
} as const;

/**
 * Extension. Example: NoExtension | NPB.
 */
export type Extension = (typeof Extension)[keyof typeof Extension];

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

export const IsManagementType = {
    True: "True",
    False: "False",
} as const;

/**
 * Configuration to use NNI for Infrastructure Management. Example: True/False.
 */
export type IsManagementType = (typeof IsManagementType)[keyof typeof IsManagementType];

export const IsMonitoringEnabled = {
    True: "True",
    False: "False",
} as const;

/**
 * To check whether monitoring of internal network is enabled or not.
 */
export type IsMonitoringEnabled = (typeof IsMonitoringEnabled)[keyof typeof IsMonitoringEnabled];

export const IsWorkloadManagementNetworkEnabled = {
    True: "True",
    False: "False",
} as const;

/**
 * A workload management network is required for all the tenant (workload) traffic. This traffic is only dedicated for Tenant workloads which are required to access internet or any other MSFT/Public endpoints.
 */
export type IsWorkloadManagementNetworkEnabled = (typeof IsWorkloadManagementNetworkEnabled)[keyof typeof IsWorkloadManagementNetworkEnabled];

export const Layer4Protocol = {
    TCP: "TCP",
    UDP: "UDP",
} as const;

/**
 * Layer4 protocol type that needs to be matched.
 */
export type Layer4Protocol = (typeof Layer4Protocol)[keyof typeof Layer4Protocol];

export const NetworkRackType = {
    Aggregate: "Aggregate",
    Compute: "Compute",
    Combined: "Combined",
} as const;

/**
 * Network Rack SKU name.
 */
export type NetworkRackType = (typeof NetworkRackType)[keyof typeof NetworkRackType];

export const NfcSku = {
    Basic: "Basic",
    Standard: "Standard",
    HighPerformance: "HighPerformance",
} as const;

/**
 * Network Fabric Controller SKU.
 */
export type NfcSku = (typeof NfcSku)[keyof typeof NfcSku];

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

export const RoutePolicyActionType = {
    Permit: "Permit",
    Deny: "Deny",
    Continue: "Continue",
} as const;

/**
 * Action type. Example: Permit | Deny | Continue.
 */
export type RoutePolicyActionType = (typeof RoutePolicyActionType)[keyof typeof RoutePolicyActionType];

export const RoutePolicyConditionType = {
    Or: "Or",
    And: "And",
} as const;

/**
 * Type of the condition used.
 */
export type RoutePolicyConditionType = (typeof RoutePolicyConditionType)[keyof typeof RoutePolicyConditionType];

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
