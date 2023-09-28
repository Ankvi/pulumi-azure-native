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

export const ConfigurationType = {
    SecurityAdmin: "SecurityAdmin",
    SecurityUser: "SecurityUser",
    Connectivity: "Connectivity",
} as const;

/**
 * Configuration Deployment Type.
 */
export type ConfigurationType = (typeof ConfigurationType)[keyof typeof ConfigurationType];

export const ConnectivityTopology = {
    HubAndSpoke: "HubAndSpoke",
    Mesh: "Mesh",
} as const;

/**
 * Connectivity topology type.
 */
export type ConnectivityTopology = (typeof ConnectivityTopology)[keyof typeof ConnectivityTopology];

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

export const GroupConnectivity = {
    None: "None",
    DirectlyConnected: "DirectlyConnected",
} as const;

/**
 * Group connectivity type.
 */
export type GroupConnectivity = (typeof GroupConnectivity)[keyof typeof GroupConnectivity];

export const IsGlobal = {
    False: "False",
    True: "True",
} as const;

/**
 * Flag if global mesh is supported.
 */
export type IsGlobal = (typeof IsGlobal)[keyof typeof IsGlobal];

export const NetworkIntentPolicyBasedService = {
    None: "None",
    All: "All",
} as const;

/**
 * Network intent policy based services.
 */
export type NetworkIntentPolicyBasedService = (typeof NetworkIntentPolicyBasedService)[keyof typeof NetworkIntentPolicyBasedService];

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

export const SecurityType = {
    AdminPolicy: "AdminPolicy",
    UserPolicy: "UserPolicy",
} as const;

/**
 * Security Type.
 */
export type SecurityType = (typeof SecurityType)[keyof typeof SecurityType];

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
