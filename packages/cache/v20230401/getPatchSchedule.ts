import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets the patching schedule of a redis cache.
 */
export function getPatchSchedule(args: GetPatchScheduleArgs, opts?: pulumi.InvokeOptions): Promise<GetPatchScheduleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cache/v20230401:getPatchSchedule", {
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
    readonly scheduleEntries: types.outputs.cache.v20230401.ScheduleEntryResponse[];
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the patching schedule of a redis cache.
 */
export function getPatchScheduleOutput(args: GetPatchScheduleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPatchScheduleResult> {
    return pulumi.output(args).apply((a: any) => getPatchSchedule(a, opts))
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
