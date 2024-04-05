import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve the schedule identified by schedule name.
 */
export function getSchedule(args: GetScheduleArgs, opts?: pulumi.InvokeOptions): Promise<GetScheduleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:automation/v20220808:getSchedule", {
        "automationAccountName": args.automationAccountName,
        "resourceGroupName": args.resourceGroupName,
        "scheduleName": args.scheduleName,
    }, opts);
}

export interface GetScheduleArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: string;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: string;
    /**
     * The schedule name.
     */
    scheduleName: string;
}

/**
 * Definition of the schedule.
 */
export interface GetScheduleResult {
    /**
     * Gets or sets the advanced schedule.
     */
    readonly advancedSchedule?: types.outputs.AdvancedScheduleResponse;
    /**
     * Gets or sets the creation time.
     */
    readonly creationTime?: string;
    /**
     * Gets or sets the description.
     */
    readonly description?: string;
    /**
     * Gets or sets the end time of the schedule.
     */
    readonly expiryTime?: string;
    /**
     * Gets or sets the expiry time's offset in minutes.
     */
    readonly expiryTimeOffsetMinutes?: number;
    /**
     * Gets or sets the frequency of the schedule.
     */
    readonly frequency?: string;
    /**
     * Fully qualified resource Id for the resource
     */
    readonly id: string;
    /**
     * Gets or sets the interval of the schedule.
     */
    readonly interval?: any;
    /**
     * Gets or sets a value indicating whether this schedule is enabled.
     */
    readonly isEnabled?: boolean;
    /**
     * Gets or sets the last modified time.
     */
    readonly lastModifiedTime?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Gets or sets the next run time of the schedule.
     */
    readonly nextRun?: string;
    /**
     * Gets or sets the next run time's offset in minutes.
     */
    readonly nextRunOffsetMinutes?: number;
    /**
     * Gets or sets the start time of the schedule.
     */
    readonly startTime?: string;
    /**
     * Gets the start time's offset in minutes.
     */
    readonly startTimeOffsetMinutes: number;
    /**
     * Gets or sets the time zone of the schedule.
     */
    readonly timeZone?: string;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Retrieve the schedule identified by schedule name.
 */
export function getScheduleOutput(args: GetScheduleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetScheduleResult> {
    return pulumi.output(args).apply((a: any) => getSchedule(a, opts))
}

export interface GetScheduleOutputArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The schedule name.
     */
    scheduleName: pulumi.Input<string>;
}