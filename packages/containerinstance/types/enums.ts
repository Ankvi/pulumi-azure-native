export const ContainerGroupIpAddressType = {
    Public: "Public",
    Private: "Private",
} as const;

/**
 * Specifies if the IP is exposed to the public internet or private VNET.
 */
export type ContainerGroupIpAddressType = (typeof ContainerGroupIpAddressType)[keyof typeof ContainerGroupIpAddressType];

export const ContainerGroupNetworkProtocol = {
    TCP: "TCP",
    UDP: "UDP",
} as const;

/**
 * The protocol associated with the port.
 */
export type ContainerGroupNetworkProtocol = (typeof ContainerGroupNetworkProtocol)[keyof typeof ContainerGroupNetworkProtocol];

export const ContainerGroupPriority = {
    Regular: "Regular",
    Spot: "Spot",
} as const;

/**
 * The priority of the container group.
 */
export type ContainerGroupPriority = (typeof ContainerGroupPriority)[keyof typeof ContainerGroupPriority];

export const ContainerGroupRestartPolicy = {
    Always: "Always",
    OnFailure: "OnFailure",
    Never: "Never",
} as const;

/**
 * Restart policy for all containers within the container group. 
 * - `Always` Always restart
 * - `OnFailure` Restart on failure
 * - `Never` Never restart
 */
export type ContainerGroupRestartPolicy = (typeof ContainerGroupRestartPolicy)[keyof typeof ContainerGroupRestartPolicy];

export const ContainerGroupSku = {
    Standard: "Standard",
    Dedicated: "Dedicated",
    Confidential: "Confidential",
} as const;

/**
 * The SKU for a container group.
 */
export type ContainerGroupSku = (typeof ContainerGroupSku)[keyof typeof ContainerGroupSku];

export const ContainerNetworkProtocol = {
    TCP: "TCP",
    UDP: "UDP",
} as const;

/**
 * The protocol associated with the port.
 */
export type ContainerNetworkProtocol = (typeof ContainerNetworkProtocol)[keyof typeof ContainerNetworkProtocol];

export const DnsNameLabelReusePolicy = {
    Unsecure: "Unsecure",
    TenantReuse: "TenantReuse",
    SubscriptionReuse: "SubscriptionReuse",
    ResourceGroupReuse: "ResourceGroupReuse",
    Noreuse: "Noreuse",
} as const;

/**
 * The value representing the security enum. The 'Unsecure' value is the default value if not selected and means the object's domain name label is not secured against subdomain takeover. The 'TenantReuse' value is the default value if selected and means the object's domain name label can be reused within the same tenant. The 'SubscriptionReuse' value means the object's domain name label can be reused within the same subscription. The 'ResourceGroupReuse' value means the object's domain name label can be reused within the same resource group. The 'NoReuse' value means the object's domain name label cannot be reused within the same resource group, subscription, or tenant.
 */
export type DnsNameLabelReusePolicy = (typeof DnsNameLabelReusePolicy)[keyof typeof DnsNameLabelReusePolicy];

export const GpuSku = {
    K80: "K80",
    P100: "P100",
    V100: "V100",
} as const;

/**
 * The SKU of the GPU resource.
 */
export type GpuSku = (typeof GpuSku)[keyof typeof GpuSku];

export const LogAnalyticsLogType = {
    ContainerInsights: "ContainerInsights",
    ContainerInstanceLogs: "ContainerInstanceLogs",
} as const;

/**
 * The log type to be used.
 */
export type LogAnalyticsLogType = (typeof LogAnalyticsLogType)[keyof typeof LogAnalyticsLogType];

export const OperatingSystemTypes = {
    Windows: "Windows",
    Linux: "Linux",
} as const;

/**
 * The operating system type required by the containers in the container group.
 */
export type OperatingSystemTypes = (typeof OperatingSystemTypes)[keyof typeof OperatingSystemTypes];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
    None: "None",
} as const;

/**
 * The type of identity used for the container group. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the container group.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const Scheme = {
    Http: "http",
    Https: "https",
} as const;

/**
 * The scheme.
 */
export type Scheme = (typeof Scheme)[keyof typeof Scheme];
