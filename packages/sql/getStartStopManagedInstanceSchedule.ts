import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the managed instance's Start/Stop schedule.
 * Azure REST API version: 2022-11-01-preview.
 *
 * Other available API versions: 2023-02-01-preview, 2023-05-01-preview.
 */
export function getStartStopManagedInstanceSchedule(args: GetStartStopManagedInstanceScheduleArgs, opts?: pulumi.InvokeOptions): Promise<GetStartStopManagedInstanceScheduleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql:getStartStopManagedInstanceSchedule", {
        "managedInstanceName": args.managedInstanceName,
        "resourceGroupName": args.resourceGroupName,
        "startStopScheduleName": args.startStopScheduleName,
    }, opts);
}

export interface GetStartStopManagedInstanceScheduleArgs {
    /**
     * The name of the managed instance.
     */
    managedInstanceName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * Name of the managed instance Start/Stop schedule.
     */
    startStopScheduleName: string;
}

/**
 * Managed instance's Start/Stop schedule.
 */
export interface GetStartStopManagedInstanceScheduleResult {
    /**
     * The description of the schedule.
     */
    readonly description?: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Timestamp when the next action will be executed in the corresponding schedule time zone.
     */
    readonly nextExecutionTime: string;
    /**
     * Next action to be executed (Start or Stop)
     */
    readonly nextRunAction: string;
    /**
     * Schedule list.
     */
    readonly scheduleList: types.outputs.ScheduleItemResponse[];
    /**
     * System data of the scheduled resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The time zone of the schedule.
     */
    readonly timeZoneId?: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets the managed instance's Start/Stop schedule.
 * Azure REST API version: 2022-11-01-preview.
 *
 * Other available API versions: 2023-02-01-preview, 2023-05-01-preview.
 */
export function getStartStopManagedInstanceScheduleOutput(args: GetStartStopManagedInstanceScheduleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStartStopManagedInstanceScheduleResult> {
    return pulumi.output(args).apply((a: any) => getStartStopManagedInstanceSchedule(a, opts))
}

export interface GetStartStopManagedInstanceScheduleOutputArgs {
    /**
     * The name of the managed instance.
     */
    managedInstanceName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the managed instance Start/Stop schedule.
     */
    startStopScheduleName: pulumi.Input<string>;
}