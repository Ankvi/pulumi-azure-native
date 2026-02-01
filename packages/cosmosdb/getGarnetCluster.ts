import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the properties of a Garnet cache cluster.
 *
 * Uses Azure REST API version 2025-11-01-preview.
 */
export function getGarnetCluster(args: GetGarnetClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetGarnetClusterResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cosmosdb:getGarnetCluster", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGarnetClusterArgs {
    /**
     * Garnet cache cluster name.
     */
    clusterName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Representation of a Garnet cache cluster.
 */
export interface GetGarnetClusterResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Properties of a Garnet cache cluster.
     */
    readonly properties: types.outputs.ClusterResourceResponseProperties;
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
 * Get the properties of a Garnet cache cluster.
 *
 * Uses Azure REST API version 2025-11-01-preview.
 */
export function getGarnetClusterOutput(args: GetGarnetClusterOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetGarnetClusterResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cosmosdb:getGarnetCluster", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGarnetClusterOutputArgs {
    /**
     * Garnet cache cluster name.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}