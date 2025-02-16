import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the list of recent fault simulations for the node type.
 * Azure REST API version: 2024-11-01-preview.
 */
export function listNodeTypeFaultSimulation(args: ListNodeTypeFaultSimulationArgs, opts?: pulumi.InvokeOptions): Promise<ListNodeTypeFaultSimulationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicefabric:listNodeTypeFaultSimulation", {
        "clusterName": args.clusterName,
        "nodeTypeName": args.nodeTypeName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListNodeTypeFaultSimulationArgs {
    /**
     * The name of the cluster resource.
     */
    clusterName: string;
    /**
     * The name of the node type.
     */
    nodeTypeName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Fault simulation list results
 */
export interface ListNodeTypeFaultSimulationResult {
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
 * Gets the list of recent fault simulations for the node type.
 * Azure REST API version: 2024-11-01-preview.
 */
export function listNodeTypeFaultSimulationOutput(args: ListNodeTypeFaultSimulationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListNodeTypeFaultSimulationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:servicefabric:listNodeTypeFaultSimulation", {
        "clusterName": args.clusterName,
        "nodeTypeName": args.nodeTypeName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListNodeTypeFaultSimulationOutputArgs {
    /**
     * The name of the cluster resource.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the node type.
     */
    nodeTypeName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}