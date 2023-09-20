export const AccessRuleDirection = {
    Inbound: "Inbound",
    Outbound: "Outbound",
} as const;

export type AccessRuleDirection = (typeof AccessRuleDirection)[keyof typeof AccessRuleDirection];

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

export const AssociationAccessMode = {
    Learning: "Learning",
    Enforced: "Enforced",
    Audit: "Audit",
} as const;

export type AssociationAccessMode = (typeof AssociationAccessMode)[keyof typeof AssociationAccessMode];

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

export const UseHubGateway = {
    False: "False",
    True: "True",
} as const;

export type UseHubGateway = (typeof UseHubGateway)[keyof typeof UseHubGateway];