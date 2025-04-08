export const CreateMode = {
    /**
     * Create a new mongo cluster.
     */
    Default: "Default",
    /**
     * Create a mongo cluster from a restore point-in-time.
     */
    PointInTimeRestore: "PointInTimeRestore",
    /**
     * Create a replica cluster in distinct geographic region from the source cluster.
     */
    GeoReplica: "GeoReplica",
    /**
     * Create a replica cluster in the same geographic region as the source cluster.
     */
    Replica: "Replica",
} as const;

/**
 * The mode to create a mongo cluster.
 */
export type CreateMode = (typeof CreateMode)[keyof typeof CreateMode];

export const HighAvailabilityMode = {
    /**
     * High availability mode is disabled. This mode is can see availability impact during faults or maintenance and is not recommended for production.
     */
    Disabled: "Disabled",
    /**
     * High availability mode is enabled, where each server in a shard is placed in the same availability zone.
     */
    SameZone: "SameZone",
    /**
     * High availability mode is enabled and preferences ZoneRedundant if availability zones capacity is available in the region, otherwise falls-back to provisioning with SameZone.
     */
    ZoneRedundantPreferred: "ZoneRedundantPreferred",
} as const;

/**
 * The target high availability mode requested for the cluster.
 */
export type HighAvailabilityMode = (typeof HighAvailabilityMode)[keyof typeof HighAvailabilityMode];

export const PreviewFeature = {
    /**
     * Enables geo replicas preview feature. The feature must be set at create-time on new cluster to enable linking a geo-replica cluster to it.
     */
    GeoReplicas: "GeoReplicas",
} as const;

/**
 * Preview features that can be enabled on a mongo cluster.
 */
export type PreviewFeature = (typeof PreviewFeature)[keyof typeof PreviewFeature];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

/**
 * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
 */
export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const PublicNetworkAccess = {
    /**
     * If set, mongo cluster can be accessed through private and public methods.
     */
    Enabled: "Enabled",
    /**
     * If set, the private endpoints are the exclusive access method.
     */
    Disabled: "Disabled",
} as const;

/**
 * Whether or not public endpoint access is allowed for this mongo cluster.
 */
export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];
