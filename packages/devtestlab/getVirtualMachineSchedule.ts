import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get schedule.
 *
 * Uses Azure REST API version 2018-09-15.
 */
export function getVirtualMachineSchedule(args: GetVirtualMachineScheduleArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualMachineScheduleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devtestlab:getVirtualMachineSchedule", {
        "expand": args.expand,
        "labName": args.labName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "virtualMachineName": args.virtualMachineName,
    }, opts);
}

export interface GetVirtualMachineScheduleArgs {
    /**
     * Specify the $expand query. Example: 'properties($select=status)'
     */
    expand?: string;
    /**
     * labs
     */
    labName: string;
    /**
     * The name of the Schedule
     */
    name: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * virtualmachines
     */
    virtualMachineName: string;
}

/**
 * A schedule.
 */
export interface GetVirtualMachineScheduleResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The creation date of the schedule.
     */
    readonly createdDate: string;
    /**
     * If the schedule will occur once each day of the week, specify the daily recurrence.
     */
    readonly dailyRecurrence?: types.outputs.DayDetailsResponse;
    /**
     * If the schedule will occur multiple times a day, specify the hourly recurrence.
     */
    readonly hourlyRecurrence?: types.outputs.HourDetailsResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Notification settings.
     */
    readonly notificationSettings?: types.outputs.NotificationSettingsResponse;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState: string;
    /**
     * The status of the schedule (i.e. Enabled, Disabled)
     */
    readonly status?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
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
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier: string;
    /**
     * If the schedule will occur only some days of the week, specify the weekly recurrence.
     */
    readonly weeklyRecurrence?: types.outputs.WeekDetailsResponse;
}
/**
 * Get schedule.
 *
 * Uses Azure REST API version 2018-09-15.
 */
export function getVirtualMachineScheduleOutput(args: GetVirtualMachineScheduleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVirtualMachineScheduleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:devtestlab:getVirtualMachineSchedule", {
        "expand": args.expand,
        "labName": args.labName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "virtualMachineName": args.virtualMachineName,
    }, opts);
}

export interface GetVirtualMachineScheduleOutputArgs {
    /**
     * Specify the $expand query. Example: 'properties($select=status)'
     */
    expand?: pulumi.Input<string>;
    /**
     * labs
     */
    labName: pulumi.Input<string>;
    /**
     * The name of the Schedule
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * virtualmachines
     */
    virtualMachineName: pulumi.Input<string>;
}