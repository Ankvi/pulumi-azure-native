export const Access = {
    Allow: "allow",
    Deny: "deny",
} as const;

export type Access = (typeof Access)[keyof typeof Access];

export const ClusterUpgradeCadence = {
    /**
     * Cluster upgrade starts immediately after a new version is rolled out. Recommended for Test/Dev clusters.
     */
    Wave0: "Wave0",
    /**
     * Cluster upgrade starts 7 days after a new version is rolled out. Recommended for Pre-prod clusters.
     */
    Wave1: "Wave1",
    /**
     * Cluster upgrade starts 14 days after a new version is rolled out. Recommended for Production clusters.
     */
    Wave2: "Wave2",
} as const;

export type ClusterUpgradeCadence = (typeof ClusterUpgradeCadence)[keyof typeof ClusterUpgradeCadence];

export const ClusterUpgradeMode = {
    /**
     * The cluster will be automatically upgraded to the latest Service Fabric runtime version, **clusterUpgradeCadence** will determine when the upgrade starts after the new version becomes available.
     */
    Automatic: "Automatic",
    /**
     * The cluster will not be automatically upgraded to the latest Service Fabric runtime version. The cluster is upgraded by setting the **clusterCodeVersion** property in the cluster resource.
     */
    Manual: "Manual",
} as const;

export type ClusterUpgradeMode = (typeof ClusterUpgradeMode)[keyof typeof ClusterUpgradeMode];

export const Direction = {
    Inbound: "inbound",
    Outbound: "outbound",
} as const;

export type Direction = (typeof Direction)[keyof typeof Direction];

export const NsgProtocol = {
    Http: "http",
    Https: "https",
    Tcp: "tcp",
    Udp: "udp",
    Icmp: "icmp",
    Ah: "ah",
    Esp: "esp",
} as const;

export type NsgProtocol = (typeof NsgProtocol)[keyof typeof NsgProtocol];

export const PrivateEndpointNetworkPolicies = {
    Enabled: "enabled",
    Disabled: "disabled",
} as const;

export type PrivateEndpointNetworkPolicies = (typeof PrivateEndpointNetworkPolicies)[keyof typeof PrivateEndpointNetworkPolicies];

export const PrivateLinkServiceNetworkPolicies = {
    Enabled: "enabled",
    Disabled: "disabled",
} as const;

export type PrivateLinkServiceNetworkPolicies = (typeof PrivateLinkServiceNetworkPolicies)[keyof typeof PrivateLinkServiceNetworkPolicies];

export const ProbeProtocol = {
    Tcp: "tcp",
    Http: "http",
    Https: "https",
} as const;

export type ProbeProtocol = (typeof ProbeProtocol)[keyof typeof ProbeProtocol];

export const Protocol = {
    Tcp: "tcp",
    Udp: "udp",
} as const;

export type Protocol = (typeof Protocol)[keyof typeof Protocol];

export const SkuName = {
    /**
     * Basic requires a minimum of 3 nodes and allows only 1 node type.
     */
    Basic: "Basic",
    /**
     * Requires a minimum of 5 nodes and allows 1 or more node type.
     */
    Standard: "Standard",
} as const;

export type SkuName = (typeof SkuName)[keyof typeof SkuName];