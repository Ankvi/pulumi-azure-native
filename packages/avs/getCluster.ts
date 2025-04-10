import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A cluster resource
 *
 * Uses Azure REST API version 2022-05-01.
 *
 * Other available API versions: 2020-03-20, 2021-06-01, 2023-03-01, 2023-09-01.
 */
export function getCluster(args: GetClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:avs:getCluster", {
        "clusterName": args.clusterName,
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetClusterArgs {
    /**
     * Name of the cluster in the private cloud
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
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The state of the cluster provisioning
     */
    readonly provisioningState: string;
    /**
     * The cluster SKU
     */
    readonly sku: types.outputs.SkuResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * A cluster resource
 *
 * Uses Azure REST API version 2022-05-01.
 *
 * Other available API versions: 2020-03-20, 2021-06-01, 2023-03-01, 2023-09-01.
 */
export function getClusterOutput(args: GetClusterOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetClusterResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:avs:getCluster", {
        "clusterName": args.clusterName,
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetClusterOutputArgs {
    /**
     * Name of the cluster in the private cloud
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