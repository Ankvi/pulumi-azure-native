export const AclActionType = {
    Drop: "Drop",
    Count: "Count",
    Log: "Log",
} as const;

export type AclActionType = (typeof AclActionType)[keyof typeof AclActionType];

export const Action = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

export type Action = (typeof Action)[keyof typeof Action];

export const AddressFamilyType = {
    IPv4: "IPv4",
    IPv6: "IPv6",
} as const;

export type AddressFamilyType = (typeof AddressFamilyType)[keyof typeof AddressFamilyType];

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
    Range: "Range",
} as const;

export type Condition = (typeof Condition)[keyof typeof Condition];

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

export const Extension = {
    NoExtension: "NoExtension",
    NPB: "NPB",
} as const;

export type Extension = (typeof Extension)[keyof typeof Extension];

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

export const IsManagementType = {
    True: "True",
    False: "False",
} as const;

export type IsManagementType = (typeof IsManagementType)[keyof typeof IsManagementType];

export const IsMonitoringEnabled = {
    True: "True",
    False: "False",
} as const;

export type IsMonitoringEnabled = (typeof IsMonitoringEnabled)[keyof typeof IsMonitoringEnabled];

export const IsWorkloadManagementNetworkEnabled = {
    True: "True",
    False: "False",
} as const;

export type IsWorkloadManagementNetworkEnabled = (typeof IsWorkloadManagementNetworkEnabled)[keyof typeof IsWorkloadManagementNetworkEnabled];

export const Layer4Protocol = {
    TCP: "TCP",
    UDP: "UDP",
} as const;

export type Layer4Protocol = (typeof Layer4Protocol)[keyof typeof Layer4Protocol];

export const NetworkRackType = {
    Aggregate: "Aggregate",
    Compute: "Compute",
    Combined: "Combined",
} as const;

export type NetworkRackType = (typeof NetworkRackType)[keyof typeof NetworkRackType];

export const NfcSku = {
    Basic: "Basic",
    Standard: "Standard",
    HighPerformance: "HighPerformance",
} as const;

export type NfcSku = (typeof NfcSku)[keyof typeof NfcSku];

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

export const RoutePolicyActionType = {
    Permit: "Permit",
    Deny: "Deny",
    Continue: "Continue",
} as const;

export type RoutePolicyActionType = (typeof RoutePolicyActionType)[keyof typeof RoutePolicyActionType];

export const RoutePolicyConditionType = {
    Or: "Or",
    And: "And",
} as const;

export type RoutePolicyConditionType = (typeof RoutePolicyConditionType)[keyof typeof RoutePolicyConditionType];

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
