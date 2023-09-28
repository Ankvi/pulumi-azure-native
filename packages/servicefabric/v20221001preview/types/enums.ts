export const Access = {
    Allow: "allow",
    Deny: "deny",
} as const;

/**
 * The network traffic is allowed or denied.
 */
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

/**
 * Indicates when new cluster runtime version upgrades will be applied after they are released. By default is Wave0. Only applies when **clusterUpgradeMode** is set to 'Automatic'.
 */
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

/**
 * The upgrade mode of the cluster when new Service Fabric runtime version is available.
 */
export type ClusterUpgradeMode = (typeof ClusterUpgradeMode)[keyof typeof ClusterUpgradeMode];

export const Direction = {
    Inbound: "inbound",
    Outbound: "outbound",
} as const;

/**
 * Network security rule direction.
 */
export type Direction = (typeof Direction)[keyof typeof Direction];

export const ManagedClusterAddOnFeature = {
    /**
     * Dns service
     */
    DnsService: "DnsService",
    /**
     * Backup and restore service
     */
    BackupRestoreService: "BackupRestoreService",
    /**
     * Resource monitor service
     */
    ResourceMonitorService: "ResourceMonitorService",
} as const;

/**
 * Available cluster add-on features
 */
export type ManagedClusterAddOnFeature = (typeof ManagedClusterAddOnFeature)[keyof typeof ManagedClusterAddOnFeature];

export const NsgProtocol = {
    Http: "http",
    Https: "https",
    Tcp: "tcp",
    Udp: "udp",
    Icmp: "icmp",
    Ah: "ah",
    Esp: "esp",
} as const;

/**
 * Network protocol this rule applies to.
 */
export type NsgProtocol = (typeof NsgProtocol)[keyof typeof NsgProtocol];

export const PrivateEndpointNetworkPolicies = {
    Enabled: "enabled",
    Disabled: "disabled",
} as const;

/**
 * Enable or Disable apply network policies on private end point in the subnet.
 */
export type PrivateEndpointNetworkPolicies = (typeof PrivateEndpointNetworkPolicies)[keyof typeof PrivateEndpointNetworkPolicies];

export const PrivateLinkServiceNetworkPolicies = {
    Enabled: "enabled",
    Disabled: "disabled",
} as const;

/**
 * Enable or Disable apply network policies on private link service in the subnet.
 */
export type PrivateLinkServiceNetworkPolicies = (typeof PrivateLinkServiceNetworkPolicies)[keyof typeof PrivateLinkServiceNetworkPolicies];

export const ProbeProtocol = {
    Tcp: "tcp",
    Http: "http",
    Https: "https",
} as const;

/**
 * the reference to the load balancer probe used by the load balancing rule.
 */
export type ProbeProtocol = (typeof ProbeProtocol)[keyof typeof ProbeProtocol];

export const Protocol = {
    Tcp: "tcp",
    Udp: "udp",
} as const;

/**
 * The reference to the transport protocol used by the load balancing rule.
 */
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

/**
 * Sku Name.
 */
export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const ZonalUpdateMode = {
    /**
     * The cluster will use 5 upgrade domains for Cross Az Node types.
     */
    Standard: "Standard",
    /**
     * The cluster will use a maximum of 3 upgrade domains per zone instead of 5 for Cross Az Node types for faster deployments.
     */
    Fast: "Fast",
} as const;

/**
 * Indicates the update mode for Cross Az clusters.
 */
export type ZonalUpdateMode = (typeof ZonalUpdateMode)[keyof typeof ZonalUpdateMode];
