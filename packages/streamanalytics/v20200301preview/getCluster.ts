import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified cluster.
 */
export function getCluster(args: GetClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:streamanalytics/v20200301preview:getCluster", {
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
 * A Stream Analytics Cluster object
 */
export interface GetClusterResult {
    /**
     * The current entity tag for the cluster. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
     */
    readonly etag: string;
    /**
     * Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The properties associated with a Stream Analytics cluster.
     */
    readonly properties: types.outputs.ClusterPropertiesResponse;
    /**
     * The SKU of the cluster. This determines the size/capacity of the cluster. Required on PUT (CreateOrUpdate) requests.
     */
    readonly sku?: types.outputs.ClusterSkuResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
}
/**
 * Gets information about the specified cluster.
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
