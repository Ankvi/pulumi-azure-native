export const ArmServicePackageActivationMode = {
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
export type ArmServicePackageActivationMode = (typeof ArmServicePackageActivationMode)[keyof typeof ArmServicePackageActivationMode];

export const ArmUpgradeFailureAction = {
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
 * The activation Mode of the service package
 */
export type ArmUpgradeFailureAction = (typeof ArmUpgradeFailureAction)[keyof typeof ArmUpgradeFailureAction];

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
 * Indicates when new cluster runtime version upgrades will be applied after they are released. By default is Wave0. Only applies when **upgradeMode** is set to 'Automatic'.
 */
export type ClusterUpgradeCadence = (typeof ClusterUpgradeCadence)[keyof typeof ClusterUpgradeCadence];

export const ManagedIdentityType = {
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
    /**
     * Indicates that no identity is associated with the resource.
     */
    None: "None",
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

export const NotificationCategory = {
    /**
     * Notification will be regarding wave progress.
     */
    WaveProgress: "WaveProgress",
} as const;

/**
 * The category of notification.
 */
export type NotificationCategory = (typeof NotificationCategory)[keyof typeof NotificationCategory];

export const NotificationChannel = {
    /**
     * For email user receivers. In this case, the parameter receivers should be a list of email addresses that will receive the notifications.
     */
    EmailUser: "EmailUser",
    /**
     * For subscription receivers. In this case, the parameter receivers should be a list of roles of the subscription for the cluster (eg. Owner, AccountAdmin, etc) that will receive the notifications.
     */
    EmailSubscription: "EmailSubscription",
} as const;

/**
 * The notification channel indicates the type of receivers subscribed to the notification, either user or subscription.
 */
export type NotificationChannel = (typeof NotificationChannel)[keyof typeof NotificationChannel];

export const NotificationLevel = {
    /**
     * Receive only critical notifications.
     */
    Critical: "Critical",
    /**
     * Receive all notifications.
     */
    All: "All",
} as const;

/**
 * The level of notification.
 */
export type NotificationLevel = (typeof NotificationLevel)[keyof typeof NotificationLevel];

export const PartitionScheme = {
    /**
     * Indicates the partition kind is invalid. All Service Fabric enumerations have the invalid type. The value is zero.
     */
    Invalid: "Invalid",
    /**
     * Indicates that the partition is based on string names, and is a SingletonPartitionSchemeDescription object, The value is 1.
     */
    Singleton: "Singleton",
    /**
     * Indicates that the partition is based on Int64 key ranges, and is a UniformInt64RangePartitionSchemeDescription object. The value is 2.
     */
    UniformInt64Range: "UniformInt64Range",
    /**
     * Indicates that the partition is based on string names, and is a NamedPartitionSchemeDescription object. The value is 3
     */
    Named: "Named",
} as const;

/**
 * Specifies how the service is partitioned.
 */
export type PartitionScheme = (typeof PartitionScheme)[keyof typeof PartitionScheme];

export const RollingUpgradeMode = {
    /**
     * Indicates the upgrade mode is invalid. All Service Fabric enumerations have the invalid type. The value is zero.
     */
    Invalid: "Invalid",
    /**
     * The upgrade will proceed automatically without performing any health monitoring. The value is 1
     */
    UnmonitoredAuto: "UnmonitoredAuto",
    /**
     * The upgrade will stop after completing each upgrade domain, giving the opportunity to manually monitor health before proceeding. The value is 2
     */
    UnmonitoredManual: "UnmonitoredManual",
    /**
     * The upgrade will stop after completing each upgrade domain and automatically monitor health before proceeding. The value is 3
     */
    Monitored: "Monitored",
} as const;

/**
 * The mode used to monitor health during a rolling upgrade. The values are UnmonitoredAuto, UnmonitoredManual, and Monitored.
 */
export type RollingUpgradeMode = (typeof RollingUpgradeMode)[keyof typeof RollingUpgradeMode];

export const ServiceCorrelationScheme = {
    /**
     * An invalid correlation scheme. Cannot be used. The value is zero.
     */
    Invalid: "Invalid",
    /**
     * Indicates that this service has an affinity relationship with another service. Provided for backwards compatibility, consider preferring the Aligned or NonAlignedAffinity options. The value is 1.
     */
    Affinity: "Affinity",
    /**
     * Aligned affinity ensures that the primaries of the partitions of the affinitized services are collocated on the same nodes. This is the default and is the same as selecting the Affinity scheme. The value is 2.
     */
    AlignedAffinity: "AlignedAffinity",
    /**
     * Non-Aligned affinity guarantees that all replicas of each service will be placed on the same nodes. Unlike Aligned Affinity, this does not guarantee that replicas of particular role will be collocated. The value is 3.
     */
    NonAlignedAffinity: "NonAlignedAffinity",
} as const;

/**
 * The ServiceCorrelationScheme which describes the relationship between this service and the service specified via ServiceName.
 */
export type ServiceCorrelationScheme = (typeof ServiceCorrelationScheme)[keyof typeof ServiceCorrelationScheme];

export const ServiceKind = {
    /**
     * Indicates the service kind is invalid. All Service Fabric enumerations have the invalid type. The value is zero.
     */
    Invalid: "Invalid",
    /**
     * Does not use Service Fabric to make its state highly available or reliable. The value is 1.
     */
    Stateless: "Stateless",
    /**
     * Uses Service Fabric to make its state or part of its state highly available and reliable. The value is 2.
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

export const ServicePlacementPolicyType = {
    /**
     * Indicates the type of the placement policy is invalid. All Service Fabric enumerations have the invalid type. The value is zero.
     */
    Invalid: "Invalid",
    /**
     * Indicates that the ServicePlacementPolicyDescription is of type ServicePlacementInvalidDomainPolicyDescription, which indicates that a particular fault or upgrade domain cannot be used for placement of this service. The value is 1.
     */
    InvalidDomain: "InvalidDomain",
    /**
     * Indicates that the ServicePlacementPolicyDescription is of type ServicePlacementRequireDomainDistributionPolicyDescription indicating that the replicas of the service must be placed in a specific domain. The value is 2.
     */
    RequiredDomain: "RequiredDomain",
    /**
     * Indicates that the ServicePlacementPolicyDescription is of type ServicePlacementPreferPrimaryDomainPolicyDescription, which indicates that if possible the Primary replica for the partitions of the service should be located in a particular domain as an optimization. The value is 3.
     */
    PreferredPrimaryDomain: "PreferredPrimaryDomain",
    /**
     * Indicates that the ServicePlacementPolicyDescription is of type ServicePlacementRequireDomainDistributionPolicyDescription, indicating that the system will disallow placement of any two replicas from the same partition in the same domain at any time. The value is 4.
     */
    RequiredDomainDistribution: "RequiredDomainDistribution",
    /**
     * Indicates that the ServicePlacementPolicyDescription is of type ServicePlacementNonPartiallyPlaceServicePolicyDescription, which indicates that if possible all replicas of a particular partition of the service should be placed atomically. The value is 5.
     */
    NonPartiallyPlaceService: "NonPartiallyPlaceService",
} as const;

/**
 * The type of placement policy for a service fabric service. Following are the possible values.
 */
export type ServicePlacementPolicyType = (typeof ServicePlacementPolicyType)[keyof typeof ServicePlacementPolicyType];

export const SfZonalUpgradeMode = {
    /**
     * VMs under the node type are grouped into UDs and ignore the zone info in five UDs. This setting causes UDs across all zones to be upgraded at the same time. This deployment mode is faster for upgrades, we don't recommend it because it goes against the SDP guidelines, which state that the updates should be applied to one zone at a time.
     */
    Parallel: "Parallel",
    /**
     * If this value is omitted or set to Hierarchical, VMs are grouped to reflect the zonal distribution in up to 15 UDs. Each of the three zones has five UDs. This ensures that the zones are updated one at a time, moving to next zone only after completing five UDs within the first zone. This update process is safer for the cluster and the user application.
     */
    Hierarchical: "Hierarchical",
} as const;

/**
 * This property controls the logical grouping of VMs in upgrade domains (UDs). This property can't be modified if a node type with multiple Availability Zones is already present in the cluster.
 */
export type SfZonalUpgradeMode = (typeof SfZonalUpgradeMode)[keyof typeof SfZonalUpgradeMode];

export const UpgradeMode = {
    /**
     * The cluster will be automatically upgraded to the latest Service Fabric runtime version, **upgradeWave** will determine when the upgrade starts after the new version becomes available.
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
export type UpgradeMode = (typeof UpgradeMode)[keyof typeof UpgradeMode];

export const VmssZonalUpgradeMode = {
    /**
     * Updates will happen in all Availability Zones at once for the virtual machine scale sets.
     */
    Parallel: "Parallel",
    /**
     * VMs are grouped to reflect the zonal distribution in up to 15 UDs. Each of the three zones has five UDs. This ensures that the zones are updated one at a time, moving to next zone only after completing five UDs within the first zone.
     */
    Hierarchical: "Hierarchical",
} as const;

/**
 * This property defines the upgrade mode for the virtual machine scale set, it is mandatory if a node type with multiple Availability Zones is added.
 */
export type VmssZonalUpgradeMode = (typeof VmssZonalUpgradeMode)[keyof typeof VmssZonalUpgradeMode];
