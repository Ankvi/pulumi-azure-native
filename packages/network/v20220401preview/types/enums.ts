export const AddressPrefixType = {
    IPPrefix: "IPPrefix",
    ServiceTag: "ServiceTag",
} as const;

export type AddressPrefixType = (typeof AddressPrefixType)[keyof typeof AddressPrefixType];

export const AllowedEndpointRecordType = {
    DomainName: "DomainName",
    IPv4Address: "IPv4Address",
    IPv6Address: "IPv6Address",
    Any: "Any",
} as const;

export type AllowedEndpointRecordType = (typeof AllowedEndpointRecordType)[keyof typeof AllowedEndpointRecordType];

export const AlwaysServe = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type AlwaysServe = (typeof AlwaysServe)[keyof typeof AlwaysServe];

export const DeleteExistingNSGs = {
    False: "False",
    True: "True",
} as const;

export type DeleteExistingNSGs = (typeof DeleteExistingNSGs)[keyof typeof DeleteExistingNSGs];

export const EndpointMonitorStatus = {
    CheckingEndpoint: "CheckingEndpoint",
    Online: "Online",
    Degraded: "Degraded",
    Disabled: "Disabled",
    Inactive: "Inactive",
    Stopped: "Stopped",
} as const;

export type EndpointMonitorStatus = (typeof EndpointMonitorStatus)[keyof typeof EndpointMonitorStatus];

export const EndpointStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type EndpointStatus = (typeof EndpointStatus)[keyof typeof EndpointStatus];

export const MonitorProtocol = {
    HTTP: "HTTP",
    HTTPS: "HTTPS",
    TCP: "TCP",
} as const;

export type MonitorProtocol = (typeof MonitorProtocol)[keyof typeof MonitorProtocol];

export const ProfileMonitorStatus = {
    CheckingEndpoints: "CheckingEndpoints",
    Online: "Online",
    Degraded: "Degraded",
    Disabled: "Disabled",
    Inactive: "Inactive",
} as const;

export type ProfileMonitorStatus = (typeof ProfileMonitorStatus)[keyof typeof ProfileMonitorStatus];

export const ProfileStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type ProfileStatus = (typeof ProfileStatus)[keyof typeof ProfileStatus];

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

export const TrafficRoutingMethod = {
    Performance: "Performance",
    Priority: "Priority",
    Weighted: "Weighted",
    Geographic: "Geographic",
    MultiValue: "MultiValue",
    Subnet: "Subnet",
} as const;

export type TrafficRoutingMethod = (typeof TrafficRoutingMethod)[keyof typeof TrafficRoutingMethod];

export const TrafficViewEnrollmentStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type TrafficViewEnrollmentStatus = (typeof TrafficViewEnrollmentStatus)[keyof typeof TrafficViewEnrollmentStatus];

export const UserRuleKind = {
    Custom: "Custom",
    Default: "Default",
} as const;

export type UserRuleKind = (typeof UserRuleKind)[keyof typeof UserRuleKind];