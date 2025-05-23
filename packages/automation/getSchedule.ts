import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve the schedule identified by schedule name.
 *
 * Uses Azure REST API version 2023-11-01.
 *
 * Other available API versions: 2015-10-31, 2019-06-01, 2020-01-13-preview, 2022-08-08, 2023-05-15-preview, 2024-10-23. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native automation [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSchedule(args: GetScheduleArgs, opts?: pulumi.InvokeOptions): Promise<GetScheduleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:automation:getSchedule", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 *
 * Uses Azure REST API version 2023-11-01.
 *
 * Other available API versions: 2015-10-31, 2019-06-01, 2020-01-13-preview, 2022-08-08, 2023-05-15-preview, 2024-10-23. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native automation [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getScheduleOutput(args: GetScheduleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetScheduleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:automation:getSchedule", {
        "automationAccountName": args.automationAccountName,
        "resourceGroupName": args.resourceGroupName,
        "scheduleName": args.scheduleName,
    }, opts);
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