export const Action = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

export type Action = (typeof Action)[keyof typeof Action];

export const AddressFamily = {
    Ipv4: "ipv4",
    Ipv6: "ipv6",
} as const;

export type AddressFamily = (typeof AddressFamily)[keyof typeof AddressFamily];

export const AllowASOverride = {
    Enable: "Enable",
    Disable: "Disable",
} as const;

export type AllowASOverride = (typeof AllowASOverride)[keyof typeof AllowASOverride];

export const BooleanEnumProperty = {
    True: "True",
    False: "False",
} as const;

export type BooleanEnumProperty = (typeof BooleanEnumProperty)[keyof typeof BooleanEnumProperty];

export const CommunityActionTypes = {
    Permit: "Permit",
    Deny: "Deny",
} as const;

export type CommunityActionTypes = (typeof CommunityActionTypes)[keyof typeof CommunityActionTypes];

export const Condition = {
    EqualTo: "EqualTo",
    GreaterThanOrEqualTo: "GreaterThanOrEqualTo",
    LesserThanOrEqualTo: "LesserThanOrEqualTo",
} as const;

export type Condition = (typeof Condition)[keyof typeof Condition];

export const ConditionActionType = {
    Allow: "allow",
    Deny: "deny",
} as const;

export type ConditionActionType = (typeof ConditionActionType)[keyof typeof ConditionActionType];

export const ConfigurationType = {
    File: "File",
    Inline: "Inline",
} as const;

export type ConfigurationType = (typeof ConfigurationType)[keyof typeof ConfigurationType];

export const DestinationType = {
    IsolationDomain: "IsolationDomain",
    Direct: "Direct",
} as const;

export type DestinationType = (typeof DestinationType)[keyof typeof DestinationType];

export const Encapsulation = {
    None: "None",
    GRE: "GRE",
} as const;

export type Encapsulation = (typeof Encapsulation)[keyof typeof Encapsulation];

export const EncapsulationType = {
    None: "None",
    GTPv1: "GTPv1",
} as const;

export type EncapsulationType = (typeof EncapsulationType)[keyof typeof EncapsulationType];

export const GatewayType = {
    Infrastructure: "Infrastructure",
    Workload: "Workload",
} as const;

export type GatewayType = (typeof GatewayType)[keyof typeof GatewayType];

export const IPAddressType = {
    IPv4: "IPv4",
    IPv6: "IPv6",
} as const;

export type IPAddressType = (typeof IPAddressType)[keyof typeof IPAddressType];

export const Layer4Protocol = {
    TCP: "TCP",
    UDP: "UDP",
} as const;

export type Layer4Protocol = (typeof Layer4Protocol)[keyof typeof Layer4Protocol];

export const NetworkDeviceRoleTypes = {
    CE: "CE",
    ToR: "ToR",
    NPB: "NPB",
    TS: "TS",
    Management: "Management",
} as const;

export type NetworkDeviceRoleTypes = (typeof NetworkDeviceRoleTypes)[keyof typeof NetworkDeviceRoleTypes];

export const NniType = {
    CE: "CE",
    NPB: "NPB",
} as const;

export type NniType = (typeof NniType)[keyof typeof NniType];

export const PeeringOption = {
    OptionA: "OptionA",
    OptionB: "OptionB",
} as const;

export type PeeringOption = (typeof PeeringOption)[keyof typeof PeeringOption];

export const PollingType = {
    Pull: "Pull",
    Push: "Push",
} as const;

export type PollingType = (typeof PollingType)[keyof typeof PollingType];

export const PortType = {
    SourcePort: "SourcePort",
    DestinationPort: "DestinationPort",
} as const;

export type PortType = (typeof PortType)[keyof typeof PortType];

export const PrefixType = {
    Prefix: "Prefix",
    LongestPrefix: "LongestPrefix",
} as const;

export type PrefixType = (typeof PrefixType)[keyof typeof PrefixType];

export const RedistributeConnectedSubnets = {
    True: "True",
    False: "False",
} as const;

export type RedistributeConnectedSubnets = (typeof RedistributeConnectedSubnets)[keyof typeof RedistributeConnectedSubnets];

export const RedistributeStaticRoutes = {
    True: "True",
    False: "False",
} as const;

export type RedistributeStaticRoutes = (typeof RedistributeStaticRoutes)[keyof typeof RedistributeStaticRoutes];

export const SourceDestinationType = {
    SourceIP: "SourceIP",
    DestinationIP: "DestinationIP",
} as const;

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

export type TapRuleActionType = (typeof TapRuleActionType)[keyof typeof TapRuleActionType];

export const WellKnownCommunities = {
    Internet: "Internet",
    LocalAS: "LocalAS",
    NoAdvertise: "NoAdvertise",
    NoExport: "NoExport",
    GShut: "GShut",
} as const;

export type WellKnownCommunities = (typeof WellKnownCommunities)[keyof typeof WellKnownCommunities];