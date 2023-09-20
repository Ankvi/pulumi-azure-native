export const AddressPrefixType = {
    IPPrefix: "IPPrefix",
    ServiceTag: "ServiceTag",
} as const;

export type AddressPrefixType = (typeof AddressPrefixType)[keyof typeof AddressPrefixType];

export const AdminRuleKind = {
    Custom: "Custom",
    Default: "Default",
} as const;

export type AdminRuleKind = (typeof AdminRuleKind)[keyof typeof AdminRuleKind];

export const ConfigurationType = {
    SecurityAdmin: "SecurityAdmin",
    SecurityUser: "SecurityUser",
    Connectivity: "Connectivity",
} as const;

export type ConfigurationType = (typeof ConfigurationType)[keyof typeof ConfigurationType];

export const ConnectivityTopology = {
    HubAndSpoke: "HubAndSpoke",
    Mesh: "Mesh",
} as const;

export type ConnectivityTopology = (typeof ConnectivityTopology)[keyof typeof ConnectivityTopology];

export const DeleteExistingNSGs = {
    False: "False",
    True: "True",
} as const;

export type DeleteExistingNSGs = (typeof DeleteExistingNSGs)[keyof typeof DeleteExistingNSGs];

export const DeleteExistingPeering = {
    False: "False",
    True: "True",
} as const;

export type DeleteExistingPeering = (typeof DeleteExistingPeering)[keyof typeof DeleteExistingPeering];

export const GroupConnectivity = {
    None: "None",
    DirectlyConnected: "DirectlyConnected",
} as const;

export type GroupConnectivity = (typeof GroupConnectivity)[keyof typeof GroupConnectivity];

export const IsGlobal = {
    False: "False",
    True: "True",
} as const;

export type IsGlobal = (typeof IsGlobal)[keyof typeof IsGlobal];

export const NetworkIntentPolicyBasedService = {
    None: "None",
    All: "All",
} as const;

export type NetworkIntentPolicyBasedService = (typeof NetworkIntentPolicyBasedService)[keyof typeof NetworkIntentPolicyBasedService];

export const SecurityConfigurationRuleAccess = {
    Allow: "Allow",
    Deny: "Deny",
    AlwaysAllow: "AlwaysAllow",
} as const;

export type SecurityConfigurationRuleAccess = (typeof SecurityConfigurationRuleAccess)[keyof typeof SecurityConfigurationRuleAccess];

export const SecurityConfigurationRuleDirection = {
    Inbound: "Inbound",
    Outbound: "Outbound",
} as const;

export type SecurityConfigurationRuleDirection = (typeof SecurityConfigurationRuleDirection)[keyof typeof SecurityConfigurationRuleDirection];

export const SecurityConfigurationRuleProtocol = {
    Tcp: "Tcp",
    Udp: "Udp",
    Icmp: "Icmp",
    Esp: "Esp",
    Any: "Any",
    Ah: "Ah",
} as const;

export type SecurityConfigurationRuleProtocol = (typeof SecurityConfigurationRuleProtocol)[keyof typeof SecurityConfigurationRuleProtocol];

export const SecurityType = {
    AdminPolicy: "AdminPolicy",
    UserPolicy: "UserPolicy",
} as const;

export type SecurityType = (typeof SecurityType)[keyof typeof SecurityType];

export const UseHubGateway = {
    False: "False",
    True: "True",
} as const;

export type UseHubGateway = (typeof UseHubGateway)[keyof typeof UseHubGateway];

export const UserRuleKind = {
    Custom: "Custom",
    Default: "Default",
} as const;

export type UserRuleKind = (typeof UserRuleKind)[keyof typeof UserRuleKind];