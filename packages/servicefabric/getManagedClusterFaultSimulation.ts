import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a fault simulation by the simulationId.
 * Azure REST API version: 2024-11-01-preview.
 */
export function getManagedClusterFaultSimulation(args: GetManagedClusterFaultSimulationArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedClusterFaultSimulationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicefabric:getManagedClusterFaultSimulation", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
        "simulationId": args.simulationId,
    }, opts);
}

export interface GetManagedClusterFaultSimulationArgs {
    /**
     * The name of the cluster resource.
     */
    clusterName: string;
    /**
     * The name of the resource group.
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
export interface GetManagedClusterFaultSimulationResult {
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
 * Azure REST API version: 2024-11-01-preview.
 */
export function getManagedClusterFaultSimulationOutput(args: GetManagedClusterFaultSimulationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetManagedClusterFaultSimulationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:servicefabric:getManagedClusterFaultSimulation", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
        "simulationId": args.simulationId,
    }, opts);
}

export interface GetManagedClusterFaultSimulationOutputArgs {
    /**
     * The name of the cluster resource.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * unique identifier for the fault simulation.
     */
    simulationId: pulumi.Input<string>;
}