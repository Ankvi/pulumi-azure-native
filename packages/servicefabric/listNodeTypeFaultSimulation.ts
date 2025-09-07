import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the list of recent fault simulations for the node type.
 *
 * Uses Azure REST API version 2024-11-01-preview.
 *
 * Other available API versions: 2025-03-01-preview, 2025-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native servicefabric [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Fault simulation list results
 */
export interface ListNodeTypeFaultSimulationResult {
    /**
     * The link to the next page of items
     */
    readonly nextLink?: string;
    /**
     * The FaultSimulation items on this page
     */
    readonly value: types.outputs.FaultSimulationResponse[];
}
/**
 * Gets the list of recent fault simulations for the node type.
 *
 * Uses Azure REST API version 2024-11-01-preview.
 *
 * Other available API versions: 2025-03-01-preview, 2025-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native servicefabric [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}