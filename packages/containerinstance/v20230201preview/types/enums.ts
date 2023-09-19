export const ContainerGroupIpAddressType = {
    Public: "Public",
    Private: "Private",
} as const;

export type ContainerGroupIpAddressType = (typeof ContainerGroupIpAddressType)[keyof typeof ContainerGroupIpAddressType];

export const ContainerGroupNetworkProtocol = {
    TCP: "TCP",
    UDP: "UDP",
} as const;

export type ContainerGroupNetworkProtocol = (typeof ContainerGroupNetworkProtocol)[keyof typeof ContainerGroupNetworkProtocol];

export const ContainerGroupRestartPolicy = {
    Always: "Always",
    OnFailure: "OnFailure",
    Never: "Never",
} as const;

export type ContainerGroupRestartPolicy = (typeof ContainerGroupRestartPolicy)[keyof typeof ContainerGroupRestartPolicy];

export const ContainerGroupSku = {
    Standard: "Standard",
    Dedicated: "Dedicated",
} as const;

export type ContainerGroupSku = (typeof ContainerGroupSku)[keyof typeof ContainerGroupSku];

export const ContainerNetworkProtocol = {
    TCP: "TCP",
    UDP: "UDP",
} as const;

export type ContainerNetworkProtocol = (typeof ContainerNetworkProtocol)[keyof typeof ContainerNetworkProtocol];

export const DnsNameLabelReusePolicy = {
    Unsecure: "Unsecure",
    TenantReuse: "TenantReuse",
    SubscriptionReuse: "SubscriptionReuse",
    ResourceGroupReuse: "ResourceGroupReuse",
    Noreuse: "Noreuse",
} as const;

export type DnsNameLabelReusePolicy = (typeof DnsNameLabelReusePolicy)[keyof typeof DnsNameLabelReusePolicy];

export const GpuSku = {
    K80: "K80",
    P100: "P100",
    V100: "V100",
} as const;

export type GpuSku = (typeof GpuSku)[keyof typeof GpuSku];

export const LogAnalyticsLogType = {
    ContainerInsights: "ContainerInsights",
    ContainerInstanceLogs: "ContainerInstanceLogs",
} as const;

export type LogAnalyticsLogType = (typeof LogAnalyticsLogType)[keyof typeof LogAnalyticsLogType];

export const OperatingSystemTypes = {
    Windows: "Windows",
    Linux: "Linux",
} as const;

export type OperatingSystemTypes = (typeof OperatingSystemTypes)[keyof typeof OperatingSystemTypes];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
    None: "None",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const Scheme = {
    Http: "http",
    Https: "https",
} as const;

export type Scheme = (typeof Scheme)[keyof typeof Scheme];
