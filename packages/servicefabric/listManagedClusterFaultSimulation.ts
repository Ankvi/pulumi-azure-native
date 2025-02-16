import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the list of recent fault simulations for the cluster.
 * Azure REST API version: 2024-11-01-preview.
 */
export function listManagedClusterFaultSimulation(args: ListManagedClusterFaultSimulationArgs, opts?: pulumi.InvokeOptions): Promise<ListManagedClusterFaultSimulationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicefabric:listManagedClusterFaultSimulation", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListManagedClusterFaultSimulationArgs {
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
 * Fault simulation list results
 */
export interface ListManagedClusterFaultSimulationResult {
    /**
     * The URL to use for getting the next set of results.
     */
    readonly nextLink?: string;
    /**
     * The list of fault simulations.
     */
    readonly value?: types.outputs.FaultSimulationResponse[];
}
/**
 * Gets the list of recent fault simulations for the cluster.
 * Azure REST API version: 2024-11-01-preview.
 */
export function listManagedClusterFaultSimulationOutput(args: ListManagedClusterFaultSimulationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListManagedClusterFaultSimulationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:servicefabric:listManagedClusterFaultSimulation", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListManagedClusterFaultSimulationOutputArgs {
    /**
     * The name of the cluster resource.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}