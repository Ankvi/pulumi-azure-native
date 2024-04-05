import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Cluster
 */
export function getCluster(args: GetClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:avs/v20230901:getCluster", {
        "clusterName": args.clusterName,
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetClusterArgs {
    /**
     * Name of the cluster
     */
    clusterName: string;
    /**
     * Name of the private cloud
     */
    privateCloudName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A cluster resource
 */
export interface GetClusterResult {
    /**
     * The identity
     */
    readonly clusterId: number;
    /**
     * The cluster size
     */
    readonly clusterSize?: number;
    /**
     * The hosts
     */
    readonly hosts?: string[];
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The state of the cluster provisioning
     */
    readonly provisioningState: string;
    /**
     * The SKU (Stock Keeping Unit) assigned to this resource.
     */
    readonly sku: types.outputs.SkuResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Name of the vsan datastore associated with the cluster
     */
    readonly vsanDatastoreName?: string;
}
/**
 * Get a Cluster
 */
export function getClusterOutput(args: GetClusterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetClusterResult> {
    return pulumi.output(args).apply((a: any) => getCluster(a, opts))
}

export interface GetClusterOutputArgs {
    /**
     * Name of the cluster
     */
    clusterName: pulumi.Input<string>;
    /**
     * Name of the private cloud
     */
    privateCloudName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}