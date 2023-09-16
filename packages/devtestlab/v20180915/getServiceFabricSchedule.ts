import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get schedule.
 */
export function getServiceFabricSchedule(args: GetServiceFabricScheduleArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceFabricScheduleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devtestlab/v20180915:getServiceFabricSchedule", {
        "expand": args.expand,
        "labName": args.labName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "serviceFabricName": args.serviceFabricName,
        "userName": args.userName,
    }, opts);
}

export interface GetServiceFabricScheduleArgs {
    /**
     * Specify the $expand query. Example: 'properties($select=status)'
     */
    expand?: string;
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
    /**
     * The name of the service fabric.
     */
    serviceFabricName: string;
    /**
     * The name of the user profile.
     */
    userName: string;
}

/**
 * A schedule.
 */
export interface GetServiceFabricScheduleResult {
    /**
     * The creation date of the schedule.
     */
    readonly createdDate: string;
    /**
     * If the schedule will occur once each day of the week, specify the daily recurrence.
     */
    readonly dailyRecurrence?: types.outputs.devtestlab.v20180915.DayDetailsResponse;
    /**
     * If the schedule will occur multiple times a day, specify the hourly recurrence.
     */
    readonly hourlyRecurrence?: types.outputs.devtestlab.v20180915.HourDetailsResponse;
    /**
     * The identifier of the resource.
     */
    readonly id: string;
    /**
     * The location of the resource.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Notification settings.
     */
    readonly notificationSettings?: types.outputs.devtestlab.v20180915.NotificationSettingsResponse;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState: string;
    /**
     * The status of the schedule (i.e. Enabled, Disabled)
     */
    readonly status?: string;
    /**
     * The tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The resource ID to which the schedule belongs
     */
    readonly targetResourceId?: string;
    /**
     * The task type of the schedule (e.g. LabVmsShutdownTask, LabVmAutoStart).
     */
    readonly taskType?: string;
    /**
     * The time zone ID (e.g. China Standard Time, Greenland Standard Time, Pacific Standard time, etc.). The possible values for this property can be found in `IReadOnlyCollection<string> TimeZoneConverter.TZConvert.KnownWindowsTimeZoneIds` (https://github.com/mattjohnsonpint/TimeZoneConverter/blob/main/README.md)
     */
    readonly timeZoneId?: string;
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier: string;
    /**
     * If the schedule will occur only some days of the week, specify the weekly recurrence.
     */
    readonly weeklyRecurrence?: types.outputs.devtestlab.v20180915.WeekDetailsResponse;
}
/**
 * Get schedule.
 */
export function getServiceFabricScheduleOutput(args: GetServiceFabricScheduleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServiceFabricScheduleResult> {
    return pulumi.output(args).apply((a: any) => getServiceFabricSchedule(a, opts))
}

export interface GetServiceFabricScheduleOutputArgs {
    /**
     * Specify the $expand query. Example: 'properties($select=status)'
     */
    expand?: pulumi.Input<string>;
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
    /**
     * The name of the service fabric.
     */
    serviceFabricName: pulumi.Input<string>;
    /**
     * The name of the user profile.
     */
    userName: pulumi.Input<string>;
}
