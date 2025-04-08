import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the patching schedule of a redis cache.
 *
 * Uses Azure REST API version 2023-04-01.
 *
 * Other available API versions: 2023-05-01-preview, 2023-08-01, 2024-03-01, 2024-04-01-preview, 2024-11-01.
 */
export function getPatchSchedule(args: GetPatchScheduleArgs, opts?: pulumi.InvokeOptions): Promise<GetPatchScheduleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cache:getPatchSchedule", {
        "default": args.default,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPatchScheduleArgs {
    /**
     * Default string modeled as parameter for auto generation to work correctly.
     */
    default: string;
    /**
     * The name of the redis cache.
     */
    name: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Response to put/get patch schedules for Redis cache.
 */
export interface GetPatchScheduleResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
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
     * List of patch schedules for a Redis cache.
     */
    readonly scheduleEntries: types.outputs.ScheduleEntryResponse[];
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the patching schedule of a redis cache.
 *
 * Uses Azure REST API version 2023-04-01.
 *
 * Other available API versions: 2023-05-01-preview, 2023-08-01, 2024-03-01, 2024-04-01-preview, 2024-11-01.
 */
export function getPatchScheduleOutput(args: GetPatchScheduleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPatchScheduleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cache:getPatchSchedule", {
        "default": args.default,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPatchScheduleOutputArgs {
    /**
     * Default string modeled as parameter for auto generation to work correctly.
     */
    default: pulumi.Input<string>;
    /**
     * The name of the redis cache.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}