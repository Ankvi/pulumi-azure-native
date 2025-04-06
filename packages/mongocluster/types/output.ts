import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The local administrator login properties.
 */
export interface AdministratorPropertiesResponse {
    /**
     * The administrator user name.
     */
    userName?: string;
}

/**
 * The backup properties of the cluster. This includes the earliest restore time and retention settings.
 */
export interface BackupPropertiesResponse {
    /**
     * Earliest restore timestamp in UTC ISO8601 format.
     */
    earliestRestoreTime: string;
}

/**
 * The compute properties of the cluster. This includes the virtual-cores/memory and scaling options applied to servers in the cluster.
 */
export interface ComputePropertiesResponse {
    /**
     * The compute tier to assign to the cluster, where each tier maps to a virtual-core and memory size. Example values: 'M30', 'M40'.
     */
    tier?: string;
}

/**
 * Connection string for the mongo cluster
 */
export interface ConnectionStringResponse {
    /**
     * Value of the connection string
     */
    connectionString: string;
    /**
     * Description of the connection string
     */
    description: string;
    /**
     * Name of the connection string.
     */
    name: string;
}

/**
 * The properties of a mongo cluster firewall rule.
 */
export interface FirewallRulePropertiesResponse {
    /**
     * The end IP address of the mongo cluster firewall rule. Must be IPv4 format.
     */
    endIpAddress: string;
    /**
     * The provisioning state of the firewall rule.
     */
    provisioningState: string;
    /**
     * The start IP address of the mongo cluster firewall rule. Must be IPv4 format.
     */
    startIpAddress: string;
}

/**
 * The high availability properties of the cluster.
 */
export interface HighAvailabilityPropertiesResponse {
    /**
     * The target high availability mode requested for the cluster.
     */
    targetMode?: string;
}

/**
 * The properties of a mongo cluster.
 */
export interface MongoClusterPropertiesResponse {
    /**
     * The local administrator properties for the mongo cluster.
     */
    administrator?: AdministratorPropertiesResponse;
    /**
     * The backup properties of the mongo cluster.
     */
    backup?: BackupPropertiesResponse;
    /**
     * The status of the mongo cluster.
     */
    clusterStatus: string;
    /**
     * The compute properties of the mongo cluster.
     */
    compute?: ComputePropertiesResponse;
    /**
     * The default mongo connection string for the cluster.
     */
    connectionString: string;
    /**
     * The high availability properties of the mongo cluster.
     */
    highAvailability?: HighAvailabilityPropertiesResponse;
    /**
     * The infrastructure version the cluster is provisioned on.
     */
    infrastructureVersion: string;
    /**
     * List of private endpoint connections.
     */
    previewFeatures?: string[];
    /**
     * List of private endpoint connections.
     */
    privateEndpointConnections: PrivateEndpointConnectionResponse[];
    /**
     * The provisioning state of the mongo cluster.
     */
    provisioningState: string;
    /**
     * Whether or not public endpoint access is allowed for this mongo cluster.
     */
    publicNetworkAccess?: string;
    /**
     * The replication properties for the mongo cluster
     */
    replica: ReplicationPropertiesResponse;
    /**
     * The Mongo DB server version. Defaults to the latest available version if not specified.
     */
    serverVersion?: string;
    /**
     * The sharding properties of the mongo cluster.
     */
    sharding?: ShardingPropertiesResponse;
    /**
     * The storage properties of the mongo cluster.
     */
    storage?: StoragePropertiesResponse;
}

/**
 * Properties of the private endpoint connection.
 */
export interface PrivateEndpointConnectionPropertiesResponse {
    /**
     * The group ids for the private endpoint resource.
     */
    groupIds: string[];
    /**
     * The private endpoint resource.
     */
    privateEndpoint?: PrivateEndpointResponse;
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    privateLinkServiceConnectionState: PrivateLinkServiceConnectionStateResponse;
    /**
     * The provisioning state of the private endpoint connection resource.
     */
    provisioningState: string;
}

/**
 * The private endpoint connection resource.
 */
export interface PrivateEndpointConnectionResponse {
    /**
     * The group ids for the private endpoint resource.
     */
    groupIds: string[];
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    id: string;
    /**
     * The name of the resource
     */
    name: string;
    /**
     * The private endpoint resource.
     */
    privateEndpoint?: PrivateEndpointResponse;
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    privateLinkServiceConnectionState: PrivateLinkServiceConnectionStateResponse;
    /**
     * The provisioning state of the private endpoint connection resource.
     */
    provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    systemData: SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    type: string;
}

/**
 * The private endpoint resource.
 */
export interface PrivateEndpointResponse {
    /**
     * The ARM identifier for private endpoint.
     */
    id: string;
}

/**
 * A collection of information about the state of the connection between service consumer and provider.
 */
export interface PrivateLinkServiceConnectionStateResponse {
    /**
     * A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionsRequired?: string;
    /**
     * The reason for approval/rejection of the connection.
     */
    description?: string;
    /**
     * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
     */
    status?: string;
}

/**
 * Replica properties of the mongo cluster.
 */
export interface ReplicationPropertiesResponse {
    /**
     * The replication link state of the replica cluster.
     */
    replicationState: string;
    /**
     * The replication role of the cluster
     */
    role: string;
    /**
     * The resource id the source cluster for the replica cluster.
     */
    sourceResourceId: string;
}

/**
 * The sharding properties of the cluster. This includes the shard count and scaling options for the cluster.
 */
export interface ShardingPropertiesResponse {
    /**
     * Number of shards to provision on the cluster.
     */
    shardCount?: number;
}

/**
 * The storage properties of the cluster. This includes the data storage size and scaling applied to servers in the cluster.
 */
export interface StoragePropertiesResponse {
    /**
     * The size of the data disk assigned to each server.
     */
    sizeGb?: number;
}

/**
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface SystemDataResponse {
    /**
     * The timestamp of resource creation (UTC).
     */
    createdAt?: string;
    /**
     * The identity that created the resource.
     */
    createdBy?: string;
    /**
     * The type of identity that created the resource.
     */
    createdByType?: string;
    /**
     * The timestamp of resource last modification (UTC)
     */
    lastModifiedAt?: string;
    /**
     * The identity that last modified the resource.
     */
    lastModifiedBy?: string;
    /**
     * The type of identity that last modified the resource.
     */
    lastModifiedByType?: string;
}
