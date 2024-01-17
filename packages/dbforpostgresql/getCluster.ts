import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about a cluster such as compute and storage configuration and cluster lifecycle metadata such as cluster creation date and time.
 * Azure REST API version: 2022-11-08.
 */
export function getCluster(args: GetClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dbforpostgresql:getCluster", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetClusterArgs {
    /**
     * The name of the cluster.
     */
    clusterName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Represents a cluster.
 */
export interface GetClusterResult {
    /**
     * The administrator's login name of the servers in the cluster.
     */
    readonly administratorLogin: string;
    /**
     * The Citus extension version on all cluster servers.
     */
    readonly citusVersion?: string;
    /**
     * If public access is enabled on coordinator.
     */
    readonly coordinatorEnablePublicIpAccess?: boolean;
    /**
     * The edition of a coordinator server (default: GeneralPurpose). Required for creation.
     */
    readonly coordinatorServerEdition?: string;
    /**
     * The storage of a server in MB. Required for creation. See https://learn.microsoft.com/azure/cosmos-db/postgresql/resources-compute for more information.
     */
    readonly coordinatorStorageQuotaInMb?: number;
    /**
     * The vCores count of a server (max: 96). Required for creation. See https://learn.microsoft.com/azure/cosmos-db/postgresql/resources-compute for more information.
     */
    readonly coordinatorVCores?: number;
    /**
     * The earliest restore point time (ISO8601 format) for the cluster.
     */
    readonly earliestRestoreTime: string;
    /**
     * If high availability (HA) is enabled or not for the cluster.
     */
    readonly enableHa?: boolean;
    /**
     * If distributed tables are placed on coordinator or not. Should be set to 'true' on single node clusters. Requires shard rebalancing after value is changed.
     */
    readonly enableShardsOnCoordinator?: boolean;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Maintenance window of a cluster.
     */
    readonly maintenanceWindow?: types.outputs.MaintenanceWindowResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Worker node count of the cluster. When node count is 0, it represents a single node configuration with the ability to create distributed tables on that node. 2 or more worker nodes represent multi-node configuration. Node count value cannot be 1. Required for creation.
     */
    readonly nodeCount?: number;
    /**
     * If public access is enabled on worker nodes.
     */
    readonly nodeEnablePublicIpAccess?: boolean;
    /**
     * The edition of a node server (default: MemoryOptimized).
     */
    readonly nodeServerEdition?: string;
    /**
     * The storage in MB on each worker node. See https://learn.microsoft.com/azure/cosmos-db/postgresql/resources-compute for more information.
     */
    readonly nodeStorageQuotaInMb?: number;
    /**
     * The compute in vCores on each worker node (max: 104). See https://learn.microsoft.com/azure/cosmos-db/postgresql/resources-compute for more information.
     */
    readonly nodeVCores?: number;
    /**
     * Date and time in UTC (ISO8601 format) for cluster restore.
     */
    readonly pointInTimeUTC?: string;
    /**
     * The major PostgreSQL version on all cluster servers.
     */
    readonly postgresqlVersion?: string;
    /**
     * Preferred primary availability zone (AZ) for all cluster servers.
     */
    readonly preferredPrimaryZone?: string;
    /**
     * The private endpoint connections for a cluster.
     */
    readonly privateEndpointConnections: types.outputs.SimplePrivateEndpointConnectionResponse[];
    /**
     * Provisioning state of the cluster
     */
    readonly provisioningState: string;
    /**
     * The array of read replica clusters.
     */
    readonly readReplicas: string[];
    /**
     * The list of server names in the cluster
     */
    readonly serverNames: types.outputs.ServerNameItemResponse[];
    /**
     * The Azure region of source cluster for read replica clusters.
     */
    readonly sourceLocation?: string;
    /**
     * The resource id of source cluster for read replica clusters.
     */
    readonly sourceResourceId?: string;
    /**
     * A state of a cluster/server that is visible to user.
     */
    readonly state: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets information about a cluster such as compute and storage configuration and cluster lifecycle metadata such as cluster creation date and time.
 * Azure REST API version: 2022-11-08.
 */
export function getClusterOutput(args: GetClusterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetClusterResult> {
    return pulumi.output(args).apply((a: any) => getCluster(a, opts))
}

export interface GetClusterOutputArgs {
    /**
     * The name of the cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}