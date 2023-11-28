import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Action to get Az Resiliency Status of all the Base resources constituting Service Fabric Managed Clusters.
 * Azure REST API version: 2023-03-01-preview.
 *
 * Other available API versions: 2022-10-01-preview, 2023-07-01-preview, 2023-09-01-preview, 2023-11-01-preview.
 */
export function getmanagedAzResiliencyStatus(args: GetmanagedAzResiliencyStatusArgs, opts?: pulumi.InvokeOptions): Promise<GetmanagedAzResiliencyStatusResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicefabric:getmanagedAzResiliencyStatus", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetmanagedAzResiliencyStatusArgs {
    /**
     * The name of the cluster resource.
     */
    clusterName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Describes the result of the request to list Managed VM Sizes for Service Fabric Managed Clusters.
 */
export interface GetmanagedAzResiliencyStatusResult {
    /**
     * List of Managed VM Sizes for Service Fabric Managed Clusters.
     */
    readonly baseResourceStatus?: types.outputs.ResourceAzStatusResponse[];
    /**
     * URL to get the next set of Managed VM Sizes if there are any.
     */
    readonly isClusterZoneResilient: boolean;
}
/**
 * Action to get Az Resiliency Status of all the Base resources constituting Service Fabric Managed Clusters.
 * Azure REST API version: 2023-03-01-preview.
 *
 * Other available API versions: 2022-10-01-preview, 2023-07-01-preview, 2023-09-01-preview, 2023-11-01-preview.
 */
export function getmanagedAzResiliencyStatusOutput(args: GetmanagedAzResiliencyStatusOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetmanagedAzResiliencyStatusResult> {
    return pulumi.output(args).apply((a: any) => getmanagedAzResiliencyStatus(a, opts))
}

export interface GetmanagedAzResiliencyStatusOutputArgs {
    /**
     * The name of the cluster resource.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
