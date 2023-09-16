import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists all applicable schedules
 * Azure REST API version: 2018-09-15.
 */
export function listScheduleApplicable(args: ListScheduleApplicableArgs, opts?: pulumi.InvokeOptions): Promise<ListScheduleApplicableResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devtestlab:listScheduleApplicable", {
        "labName": args.labName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListScheduleApplicableArgs {
    /**
     * The name of the lab.
     */
    labName: string;
    /**
     * The name of the schedule.
     */
    name: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The response of a list operation.
 */
export interface ListScheduleApplicableResult {
    /**
     * Link for next set of results.
     */
    readonly nextLink?: string;
    /**
     * Results of the list operation.
     */
    readonly value?: types.outputs.devtestlab.ScheduleResponse[];
}
/**
 * Lists all applicable schedules
 * Azure REST API version: 2018-09-15.
 */
export function listScheduleApplicableOutput(args: ListScheduleApplicableOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListScheduleApplicableResult> {
    return pulumi.output(args).apply((a: any) => listScheduleApplicable(a, opts))
}

export interface ListScheduleApplicableOutputArgs {
    /**
     * The name of the lab.
     */
    labName: pulumi.Input<string>;
    /**
     * The name of the schedule.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
