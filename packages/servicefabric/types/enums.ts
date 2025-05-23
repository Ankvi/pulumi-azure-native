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

export const DiskType = {
    /**
     * Standard HDD locally redundant storage. Best for backup, non-critical, and infrequent access.
     */
    Standard_LRS: "Standard_LRS",
    /**
     * Standard SSD locally redundant storage. Best for web servers, lightly used enterprise applications and dev/test.
     */
    StandardSSD_LRS: "StandardSSD_LRS",
    /**
     * Premium SSD locally redundant storage. Best for production and performance sensitive workloads.
     */
    Premium_LRS: "Premium_LRS",
} as const;

/**
 * Managed data disk type. Specifies the storage account type for the managed disk
 */
export type DiskType = (typeof DiskType)[keyof typeof DiskType];

export const EvictionPolicyType = {
    /**
     * Eviction policy will be Delete for SPOT vms.
     */
    Delete: "Delete",
    /**
     * Eviction policy will be Deallocate for SPOT vms.
     */
    Deallocate: "Deallocate",
} as const;

/**
 * Specifies the eviction policy for virtual machines in a SPOT node type. Default is Delete.
 */
export type EvictionPolicyType = (typeof EvictionPolicyType)[keyof typeof EvictionPolicyType];

export const FailureAction = {
    /**
     * Indicates that a rollback of the upgrade will be performed by Service Fabric if the upgrade fails.
     */
    Rollback: "Rollback",
    /**
     * Indicates that a manual repair will need to be performed by the administrator if the upgrade fails. Service Fabric will not proceed to the next upgrade domain automatically.
     */
    Manual: "Manual",
} as const;

/**
 * The compensating action to perform when a Monitored upgrade encounters monitoring policy or health policy violations. Invalid indicates the failure action is invalid. Rollback specifies that the upgrade will start rolling back automatically. Manual indicates that the upgrade will switch to UnmonitoredManual upgrade mode.
 */
export type FailureAction = (typeof FailureAction)[keyof typeof FailureAction];

export const IPAddressType = {
    /**
     * IPv4 address type.
     */
    IPv4: "IPv4",
    /**
     * IPv6 address type.
     */
    IPv6: "IPv6",
} as const;

/**
 * The IP address type of this frontend configuration. If omitted the default value is IPv4.
 */
export type IPAddressType = (typeof IPAddressType)[keyof typeof IPAddressType];

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

export const ManagedIdentityType = {
    /**
     * Indicates that no identity is associated with the resource.
     */
    None: "None",
    /**
     * Indicates that system assigned identity is associated with the resource.
     */
    SystemAssigned: "SystemAssigned",
    /**
     * Indicates that user assigned identity is associated with the resource.
     */
    UserAssigned: "UserAssigned",
    /**
     * Indicates that both system assigned and user assigned identity are associated with the resource.
     */
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
} as const;

/**
 * The type of managed identity for the resource.
 */
export type ManagedIdentityType = (typeof ManagedIdentityType)[keyof typeof ManagedIdentityType];

export const MoveCost = {
    /**
     * Zero move cost. This value is zero.
     */
    Zero: "Zero",
    /**
     * Specifies the move cost of the service as Low. The value is 1.
     */
    Low: "Low",
    /**
     * Specifies the move cost of the service as Medium. The value is 2.
     */
    Medium: "Medium",
    /**
     * Specifies the move cost of the service as High. The value is 3.
     */
    High: "High",
} as const;

/**
 * Specifies the move cost for the service.
 */
export type MoveCost = (typeof MoveCost)[keyof typeof MoveCost];

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

export const PartitionScheme = {
    /**
     * Indicates that the partition is based on string names, and is a SingletonPartitionScheme object, The value is 0.
     */
    Singleton: "Singleton",
    /**
     * Indicates that the partition is based on Int64 key ranges, and is a UniformInt64RangePartitionScheme object. The value is 1.
     */
    UniformInt64Range: "UniformInt64Range",
    /**
     * Indicates that the partition is based on string names, and is a NamedPartitionScheme object. The value is 2.
     */
    Named: "Named",
} as const;

/**
 * Enumerates the ways that a service can be partitioned.
 */
export type PartitionScheme = (typeof PartitionScheme)[keyof typeof PartitionScheme];

export const PrivateEndpointNetworkPolicies = {
    Enabled: "enabled",
    Disabled: "disabled",
} as const;

/**
 * Enable or Disable apply network policies on private end point in the subnet.
 */
export type PrivateEndpointNetworkPolicies = (typeof PrivateEndpointNetworkPolicies)[keyof typeof PrivateEndpointNetworkPolicies];

export const PrivateIPAddressVersion = {
    IPv4: "IPv4",
    IPv6: "IPv6",
} as const;

/**
 * Specifies whether the IP configuration's private IP is IPv4 or IPv6. Default is IPv4.
 */
export type PrivateIPAddressVersion = (typeof PrivateIPAddressVersion)[keyof typeof PrivateIPAddressVersion];

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

export const PublicIPAddressVersion = {
    IPv4: "IPv4",
    IPv6: "IPv6",
} as const;

/**
 * Specifies whether the IP configuration's public IP is IPv4 or IPv6. Default is IPv4.
 */
export type PublicIPAddressVersion = (typeof PublicIPAddressVersion)[keyof typeof PublicIPAddressVersion];

export const RollingUpgradeMode = {
    /**
     * The upgrade will stop after completing each upgrade domain and automatically monitor health before proceeding. The value is 0.
     */
    Monitored: "Monitored",
    /**
     * The upgrade will proceed automatically without performing any health monitoring. The value is 1.
     */
    UnmonitoredAuto: "UnmonitoredAuto",
} as const;

/**
 * The mode used to monitor health during a rolling upgrade. The values are Monitored, and UnmonitoredAuto.
 */
export type RollingUpgradeMode = (typeof RollingUpgradeMode)[keyof typeof RollingUpgradeMode];

export const SecurityType = {
    /**
     * Trusted Launch is a security type that secures generation 2 virtual machines.
     */
    TrustedLaunch: "TrustedLaunch",
    /**
     * Standard is the default security type for all machines.
     */
    Standard: "Standard",
} as const;

/**
 * Specifies the security type of the nodeType. Only Standard and TrustedLaunch are currently supported
 */
export type SecurityType = (typeof SecurityType)[keyof typeof SecurityType];

export const ServiceCorrelationScheme = {
    /**
     * Aligned affinity ensures that the primaries of the partitions of the affinitized services are collocated on the same nodes. This is the default and is the same as selecting the Affinity scheme. The value is 0.
     */
    AlignedAffinity: "AlignedAffinity",
    /**
     * Non-Aligned affinity guarantees that all replicas of each service will be placed on the same nodes. Unlike Aligned Affinity, this does not guarantee that replicas of particular role will be collocated. The value is 1.
     */
    NonAlignedAffinity: "NonAlignedAffinity",
} as const;

/**
 * The ServiceCorrelationScheme which describes the relationship between this service and the service specified via ServiceName.
 */
export type ServiceCorrelationScheme = (typeof ServiceCorrelationScheme)[keyof typeof ServiceCorrelationScheme];

export const ServiceKind = {
    /**
     * Does not use Service Fabric to make its state highly available or reliable. The value is 0.
     */
    Stateless: "Stateless",
    /**
     * Uses Service Fabric to make its state or part of its state highly available and reliable. The value is 1.
     */
    Stateful: "Stateful",
} as const;

/**
 * The kind of service (Stateless or Stateful).
 */
export type ServiceKind = (typeof ServiceKind)[keyof typeof ServiceKind];

export const ServiceLoadMetricWeight = {
    /**
     * Disables resource balancing for this metric. This value is zero.
     */
    Zero: "Zero",
    /**
     * Specifies the metric weight of the service load as Low. The value is 1.
     */
    Low: "Low",
    /**
     * Specifies the metric weight of the service load as Medium. The value is 2.
     */
    Medium: "Medium",
    /**
     * Specifies the metric weight of the service load as High. The value is 3.
     */
    High: "High",
} as const;

/**
 * The service load metric relative weight, compared to other metrics configured for this service, as a number.
 */
export type ServiceLoadMetricWeight = (typeof ServiceLoadMetricWeight)[keyof typeof ServiceLoadMetricWeight];

export const ServicePackageActivationMode = {
    /**
     * Indicates the application package activation mode will use shared process.
     */
    SharedProcess: "SharedProcess",
    /**
     * Indicates the application package activation mode will use exclusive process.
     */
    ExclusiveProcess: "ExclusiveProcess",
} as const;

/**
 * The activation Mode of the service package
 */
export type ServicePackageActivationMode = (typeof ServicePackageActivationMode)[keyof typeof ServicePackageActivationMode];

export const ServicePlacementPolicyType = {
    /**
     * Indicates that the ServicePlacementPolicyDescription is of type ServicePlacementInvalidDomainPolicyDescription, which indicates that a particular fault or upgrade domain cannot be used for placement of this service. The value is 0.
     */
    InvalidDomain: "InvalidDomain",
    /**
     * Indicates that the ServicePlacementPolicyDescription is of type ServicePlacementRequireDomainDistributionPolicyDescription indicating that the replicas of the service must be placed in a specific domain. The value is 1.
     */
    RequiredDomain: "RequiredDomain",
    /**
     * Indicates that the ServicePlacementPolicyDescription is of type ServicePlacementPreferPrimaryDomainPolicyDescription, which indicates that if possible the Primary replica for the partitions of the service should be located in a particular domain as an optimization. The value is 2.
     */
    PreferredPrimaryDomain: "PreferredPrimaryDomain",
    /**
     * Indicates that the ServicePlacementPolicyDescription is of type ServicePlacementRequireDomainDistributionPolicyDescription, indicating that the system will disallow placement of any two replicas from the same partition in the same domain at any time. The value is 3.
     */
    RequiredDomainDistribution: "RequiredDomainDistribution",
    /**
     * Indicates that the ServicePlacementPolicyDescription is of type ServicePlacementNonPartiallyPlaceServicePolicyDescription, which indicates that if possible all replicas of a particular partition of the service should be placed atomically. The value is 4.
     */
    NonPartiallyPlaceService: "NonPartiallyPlaceService",
} as const;

/**
 * The type of placement policy for a service fabric service. Following are the possible values.
 */
export type ServicePlacementPolicyType = (typeof ServicePlacementPolicyType)[keyof typeof ServicePlacementPolicyType];

export const ServiceScalingMechanismKind = {
    /**
     * Represents a scaling mechanism for adding or removing instances of stateless service partition. The value is 0.
     */
    ScalePartitionInstanceCount: "ScalePartitionInstanceCount",
    /**
     * Represents a scaling mechanism for adding or removing named partitions of a stateless service. The value is 1.
     */
    AddRemoveIncrementalNamedPartition: "AddRemoveIncrementalNamedPartition",
} as const;

/**
 * Enumerates the ways that a service can be partitioned.
 */
export type ServiceScalingMechanismKind = (typeof ServiceScalingMechanismKind)[keyof typeof ServiceScalingMechanismKind];

export const ServiceScalingTriggerKind = {
    /**
     * Represents a scaling trigger related to an average load of a metric/resource of a partition. The value is 0.
     */
    AveragePartitionLoadTrigger: "AveragePartitionLoadTrigger",
    /**
     * Represents a scaling policy related to an average load of a metric/resource of a service. The value is 1.
     */
    AverageServiceLoadTrigger: "AverageServiceLoadTrigger",
} as const;

/**
 * Enumerates the ways that a service can be partitioned.
 */
export type ServiceScalingTriggerKind = (typeof ServiceScalingTriggerKind)[keyof typeof ServiceScalingTriggerKind];

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

export const VmSetupAction = {
    /**
     * Enable windows containers feature.
     */
    EnableContainers: "EnableContainers",
    /**
     * Enables windows HyperV feature.
     */
    EnableHyperV: "EnableHyperV",
} as const;

/**
 * action to be performed on the vms before bootstrapping the service fabric runtime.
 */
export type VmSetupAction = (typeof VmSetupAction)[keyof typeof VmSetupAction];

export const VmssExtensionSetupOrder = {
    /**
     * Indicates that the vm extension should run before the service fabric runtime starts.
     */
    BeforeSFRuntime: "BeforeSFRuntime",
} as const;

/**
 * Vm extension setup order.
 */
export type VmssExtensionSetupOrder = (typeof VmssExtensionSetupOrder)[keyof typeof VmssExtensionSetupOrder];

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
