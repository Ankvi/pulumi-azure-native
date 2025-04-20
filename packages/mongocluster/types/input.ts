import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The local administrator login properties.
 */
export interface AdministratorPropertiesArgs {
    /**
     * The administrator password.
     */
    password?: pulumi.Input<string>;
    /**
     * The administrator user name.
     */
    userName?: pulumi.Input<string>;
}

/**
 * The compute properties of the cluster. This includes the virtual-cores/memory and scaling options applied to servers in the cluster.
 */
export interface ComputePropertiesArgs {
    /**
     * The compute tier to assign to the cluster, where each tier maps to a virtual-core and memory size. Example values: 'M30', 'M40'.
     */
    tier?: pulumi.Input<string>;
}

/**
 * The properties of a mongo cluster firewall rule.
 */
export interface FirewallRulePropertiesArgs {
    /**
     * The end IP address of the mongo cluster firewall rule. Must be IPv4 format.
     */
    endIpAddress: pulumi.Input<string>;
    /**
     * The start IP address of the mongo cluster firewall rule. Must be IPv4 format.
     */
    startIpAddress: pulumi.Input<string>;
}

/**
 * The high availability properties of the cluster.
 */
export interface HighAvailabilityPropertiesArgs {
    /**
     * The target high availability mode requested for the cluster.
     */
    targetMode?: pulumi.Input<string | enums.HighAvailabilityMode>;
}

/**
 * The properties of a mongo cluster.
 */
export interface MongoClusterPropertiesArgs {
    /**
     * The local administrator properties for the mongo cluster.
     */
    administrator?: pulumi.Input<AdministratorPropertiesArgs>;
    /**
     * The compute properties of the mongo cluster.
     */
    compute?: pulumi.Input<ComputePropertiesArgs>;
    /**
     * The mode to create a mongo cluster.
     */
    createMode?: pulumi.Input<string | enums.CreateMode>;
    /**
     * The high availability properties of the mongo cluster.
     */
    highAvailability?: pulumi.Input<HighAvailabilityPropertiesArgs>;
    /**
     * List of private endpoint connections.
     */
    previewFeatures?: pulumi.Input<pulumi.Input<string | enums.PreviewFeature>[]>;
    /**
     * Whether or not public endpoint access is allowed for this mongo cluster.
     */
    publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccess>;
    /**
     * The parameters to create a replica mongo cluster.
     */
    replicaParameters?: pulumi.Input<MongoClusterReplicaParametersArgs>;
    /**
     * The parameters to create a point-in-time restore mongo cluster.
     */
    restoreParameters?: pulumi.Input<MongoClusterRestoreParametersArgs>;
    /**
     * The Mongo DB server version. Defaults to the latest available version if not specified.
     */
    serverVersion?: pulumi.Input<string>;
    /**
     * The sharding properties of the mongo cluster.
     */
    sharding?: pulumi.Input<ShardingPropertiesArgs>;
    /**
     * The storage properties of the mongo cluster.
     */
    storage?: pulumi.Input<StoragePropertiesArgs>;
}

/**
 * Parameters used for replica operations.
 */
export interface MongoClusterReplicaParametersArgs {
    /**
     * The location of the source cluster
     */
    sourceLocation: pulumi.Input<string>;
    /**
     * The id of the replication source cluster.
     */
    sourceResourceId: pulumi.Input<string>;
}

/**
 * Parameters used for restore operations
 */
export interface MongoClusterRestoreParametersArgs {
    /**
     * UTC point in time to restore a mongo cluster
     */
    pointInTimeUTC?: pulumi.Input<string>;
    /**
     * Resource ID to locate the source cluster to restore
     */
    sourceResourceId?: pulumi.Input<string>;
}

/**
 * Properties of the private endpoint connection.
 */
export interface PrivateEndpointConnectionPropertiesArgs {
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    privateLinkServiceConnectionState: pulumi.Input<PrivateLinkServiceConnectionStateArgs>;
}

/**
 * A collection of information about the state of the connection between service consumer and provider.
 */
export interface PrivateLinkServiceConnectionStateArgs {
    /**
     * A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionsRequired?: pulumi.Input<string>;
    /**
     * The reason for approval/rejection of the connection.
     */
    description?: pulumi.Input<string>;
    /**
     * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
     */
    status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus>;
}

/**
 * The sharding properties of the cluster. This includes the shard count and scaling options for the cluster.
 */
export interface ShardingPropertiesArgs {
    /**
     * Number of shards to provision on the cluster.
     */
    shardCount?: pulumi.Input<number>;
}

/**
 * The storage properties of the cluster. This includes the data storage size and scaling applied to servers in the cluster.
 */
export interface StoragePropertiesArgs {
    /**
     * The size of the data disk assigned to each server.
     */
    sizeGb?: pulumi.Input<number>;
}
