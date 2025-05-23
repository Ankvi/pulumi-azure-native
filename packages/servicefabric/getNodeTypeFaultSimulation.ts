import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a fault simulation by the simulationId.
 *
 * Uses Azure REST API version 2024-11-01-preview.
 *
 * Other available API versions: 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native servicefabric [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getNodeTypeFaultSimulation(args: GetNodeTypeFaultSimulationArgs, opts?: pulumi.InvokeOptions): Promise<GetNodeTypeFaultSimulationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicefabric:getNodeTypeFaultSimulation", {
        "clusterName": args.clusterName,
        "nodeTypeName": args.nodeTypeName,
        "resourceGroupName": args.resourceGroupName,
        "simulationId": args.simulationId,
    }, opts);
}

export interface GetNodeTypeFaultSimulationArgs {
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
    /**
     * unique identifier for the fault simulation.
     */
    simulationId: string;
}

/**
 * Fault simulation object with status.
 */
export interface GetNodeTypeFaultSimulationResult {
    /**
     * Fault simulation details
     */
    readonly details?: types.outputs.FaultSimulationDetailsResponse;
    /**
     * The end time of the fault simulation.
     */
    readonly endTime?: string;
    /**
     * unique identifier for the fault simulation.
     */
    readonly simulationId?: string;
    /**
     * The start time of the fault simulation.
     */
    readonly startTime?: string;
    /**
     * Fault simulation status
     */
    readonly status?: string;
}
/**
 * Gets a fault simulation by the simulationId.
 *
 * Uses Azure REST API version 2024-11-01-preview.
 *
 * Other available API versions: 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native servicefabric [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getNodeTypeFaultSimulationOutput(args: GetNodeTypeFaultSimulationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNodeTypeFaultSimulationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:servicefabric:getNodeTypeFaultSimulation", {
        "clusterName": args.clusterName,
        "nodeTypeName": args.nodeTypeName,
        "resourceGroupName": args.resourceGroupName,
        "simulationId": args.simulationId,
    }, opts);
}

export interface GetNodeTypeFaultSimulationOutputArgs {
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
    /**
     * unique identifier for the fault simulation.
     */
    simulationId: pulumi.Input<string>;
}