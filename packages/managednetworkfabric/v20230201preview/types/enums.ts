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

export const WellKnownCommunities = {
    Internet: "Internet",
    LocalAS: "LocalAS",
    NoAdvertise: "NoAdvertise",
    NoExport: "NoExport",
    GShut: "GShut",
} as const;

export type WellKnownCommunities = (typeof WellKnownCommunities)[keyof typeof WellKnownCommunities];
