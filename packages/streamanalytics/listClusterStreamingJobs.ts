import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists all of the streaming jobs in the given cluster.
 * Azure REST API version: 2020-03-01.
 *
 * Other available API versions: 2020-03-01-preview.
 */
export function listClusterStreamingJobs(args: ListClusterStreamingJobsArgs, opts?: pulumi.InvokeOptions): Promise<ListClusterStreamingJobsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:streamanalytics:listClusterStreamingJobs", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListClusterStreamingJobsArgs {
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
 * A list of streaming jobs. Populated by a List operation.
 */
export interface ListClusterStreamingJobsResult {
    /**
     * The URL to fetch the next set of streaming jobs.
     */
    readonly nextLink: string;
    /**
     * A list of streaming jobs.
     */
    readonly value: types.outputs.ClusterJobResponse[];
}
/**
 * Lists all of the streaming jobs in the given cluster.
 * Azure REST API version: 2020-03-01.
 *
 * Other available API versions: 2020-03-01-preview.
 */
export function listClusterStreamingJobsOutput(args: ListClusterStreamingJobsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListClusterStreamingJobsResult> {
    return pulumi.output(args).apply((a: any) => listClusterStreamingJobs(a, opts))
}

export interface ListClusterStreamingJobsOutputArgs {
    /**
     * The name of the cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}