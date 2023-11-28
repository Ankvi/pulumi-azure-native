import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Action to get Az Resiliency Status of all the Base resources constituting Service Fabric Managed Clusters.
 */
export function getmanagedAzResiliencyStatus(args: GetmanagedAzResiliencyStatusArgs, opts?: pulumi.InvokeOptions): Promise<GetmanagedAzResiliencyStatusResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicefabric/v20231101preview:getmanagedAzResiliencyStatus", {
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
