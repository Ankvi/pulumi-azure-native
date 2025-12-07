import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get dependencies for all machines
 *
 * Uses Azure REST API version 2025-07-01-preview.
 */
export function getMapDependencyViewForAllMachines(args: GetMapDependencyViewForAllMachinesArgs, opts?: pulumi.InvokeOptions): Promise<GetMapDependencyViewForAllMachinesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dependencymap:getMapDependencyViewForAllMachines", {
        "filters": args.filters,
        "mapName": args.mapName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMapDependencyViewForAllMachinesArgs {
    /**
     * Filters for GetDependencyViewForAllMachines
     */
    filters?: types.inputs.DependencyProcessFilter;
    /**
     * Maps resource name
     */
    mapName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Model representing the result of the export dependencies asynchronous operation.
 */
export interface GetMapDependencyViewForAllMachinesResult {
    /**
     * The end time of the operation.
     */
    readonly endTime?: string;
    /**
     * Contains error details if status is Failed/Canceled.
     */
    readonly error?: types.outputs.ErrorDetailResponse;
    /**
     * The status URL of the asynchronous operation.
     */
    readonly id?: string;
    /**
     * The resource name of the operation status. It must match the last segment of 'id' field.
     */
    readonly name?: string;
    /**
     * Properties for export dependencies. These should only be set if the status is Succeeded.
     */
    readonly properties: types.outputs.GetDependencyViewForAllMachinesResultPropertiesResponse;
    /**
     * The start time of the operation.
     */
    readonly startTime?: string;
    /**
     * The overall arm status of the operation. It has one of the terminal states - Succeeded/Failed/Canceled.
     */
    readonly status: string;
}
/**
 * Get dependencies for all machines
 *
 * Uses Azure REST API version 2025-07-01-preview.
 */
export function getMapDependencyViewForAllMachinesOutput(args: GetMapDependencyViewForAllMachinesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetMapDependencyViewForAllMachinesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:dependencymap:getMapDependencyViewForAllMachines", {
        "filters": args.filters,
        "mapName": args.mapName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMapDependencyViewForAllMachinesOutputArgs {
    /**
     * Filters for GetDependencyViewForAllMachines
     */
    filters?: pulumi.Input<types.inputs.DependencyProcessFilterArgs>;
    /**
     * Maps resource name
     */
    mapName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}