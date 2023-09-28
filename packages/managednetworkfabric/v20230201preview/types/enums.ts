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
