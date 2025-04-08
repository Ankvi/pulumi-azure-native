import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a ScalingPlanPersonalSchedule.
 *
 * Uses Azure REST API version 2024-04-03.
 *
 * Other available API versions: 2023-09-05, 2023-10-04-preview, 2023-11-01-preview, 2024-01-16-preview, 2024-03-06-preview, 2024-04-08-preview, 2024-08-08-preview, 2024-11-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native desktopvirtualization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getScalingPlanPersonalSchedule(args: GetScalingPlanPersonalScheduleArgs, opts?: pulumi.InvokeOptions): Promise<GetScalingPlanPersonalScheduleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:desktopvirtualization:getScalingPlanPersonalSchedule", {
        "resourceGroupName": args.resourceGroupName,
        "scalingPlanName": args.scalingPlanName,
        "scalingPlanScheduleName": args.scalingPlanScheduleName,
    }, opts);
}

export interface GetScalingPlanPersonalScheduleArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the scaling plan.
     */
    scalingPlanName: string;
    /**
     * The name of the ScalingPlanSchedule
     */
    scalingPlanScheduleName: string;
}

/**
 * Represents a ScalingPlanPersonalSchedule definition.
 */
export interface GetScalingPlanPersonalScheduleResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Set of days of the week on which this schedule is active.
     */
    readonly daysOfWeek?: string[];
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Action to be taken after a user disconnect during the off-peak period.
     */
    readonly offPeakActionOnDisconnect?: string;
    /**
     * Action to be taken after a logoff during the off-peak period.
     */
    readonly offPeakActionOnLogoff?: string;
    /**
     * The time in minutes to wait before performing the desired session handling action when a user disconnects during the off-peak period.
     */
    readonly offPeakMinutesToWaitOnDisconnect?: number;
    /**
     * The time in minutes to wait before performing the desired session handling action when a user logs off during the off-peak period.
     */
    readonly offPeakMinutesToWaitOnLogoff?: number;
    /**
     * Starting time for off-peak period.
     */
    readonly offPeakStartTime?: types.outputs.TimeResponse;
    /**
     * The desired configuration of Start VM On Connect for the hostpool during the off-peak phase.
     */
    readonly offPeakStartVMOnConnect?: string;
    /**
     * Action to be taken after a user disconnect during the peak period.
     */
    readonly peakActionOnDisconnect?: string;
    /**
     * Action to be taken after a logoff during the peak period.
     */
    readonly peakActionOnLogoff?: string;
    /**
     * The time in minutes to wait before performing the desired session handling action when a user disconnects during the peak period.
     */
    readonly peakMinutesToWaitOnDisconnect?: number;
    /**
     * The time in minutes to wait before performing the desired session handling action when a user logs off during the peak period.
     */
    readonly peakMinutesToWaitOnLogoff?: number;
    /**
     * Starting time for peak period.
     */
    readonly peakStartTime?: types.outputs.TimeResponse;
    /**
     * The desired configuration of Start VM On Connect for the hostpool during the peak phase.
     */
    readonly peakStartVMOnConnect?: string;
    /**
     * Action to be taken after a user disconnect during the ramp down period.
     */
    readonly rampDownActionOnDisconnect?: string;
    /**
     * Action to be taken after a logoff during the ramp down period.
     */
    readonly rampDownActionOnLogoff?: string;
    /**
     * The time in minutes to wait before performing the desired session handling action when a user disconnects during the ramp down period.
     */
    readonly rampDownMinutesToWaitOnDisconnect?: number;
    /**
     * The time in minutes to wait before performing the desired session handling action when a user logs off during the ramp down period.
     */
    readonly rampDownMinutesToWaitOnLogoff?: number;
    /**
     * Starting time for ramp down period.
     */
    readonly rampDownStartTime?: types.outputs.TimeResponse;
    /**
     * The desired configuration of Start VM On Connect for the hostpool during the ramp down phase.
     */
    readonly rampDownStartVMOnConnect?: string;
    /**
     * Action to be taken after a user disconnect during the ramp up period.
     */
    readonly rampUpActionOnDisconnect?: string;
    /**
     * Action to be taken after a logoff during the ramp up period.
     */
    readonly rampUpActionOnLogoff?: string;
    /**
     * The desired startup behavior during the ramp up period for personal vms in the hostpool.
     */
    readonly rampUpAutoStartHosts?: string;
    /**
     * The time in minutes to wait before performing the desired session handling action when a user disconnects during the ramp up period.
     */
    readonly rampUpMinutesToWaitOnDisconnect?: number;
    /**
     * The time in minutes to wait before performing the desired session handling action when a user logs off during the ramp up period.
     */
    readonly rampUpMinutesToWaitOnLogoff?: number;
    /**
     * Starting time for ramp up period.
     */
    readonly rampUpStartTime?: types.outputs.TimeResponse;
    /**
     * The desired configuration of Start VM On Connect for the hostpool during the ramp up phase. If this is disabled, session hosts must be turned on using rampUpAutoStartHosts or by turning them on manually.
     */
    readonly rampUpStartVMOnConnect?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a ScalingPlanPersonalSchedule.
 *
 * Uses Azure REST API version 2024-04-03.
 *
 * Other available API versions: 2023-09-05, 2023-10-04-preview, 2023-11-01-preview, 2024-01-16-preview, 2024-03-06-preview, 2024-04-08-preview, 2024-08-08-preview, 2024-11-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native desktopvirtualization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getScalingPlanPersonalScheduleOutput(args: GetScalingPlanPersonalScheduleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetScalingPlanPersonalScheduleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:desktopvirtualization:getScalingPlanPersonalSchedule", {
        "resourceGroupName": args.resourceGroupName,
        "scalingPlanName": args.scalingPlanName,
        "scalingPlanScheduleName": args.scalingPlanScheduleName,
    }, opts);
}

export interface GetScalingPlanPersonalScheduleOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the scaling plan.
     */
    scalingPlanName: pulumi.Input<string>;
    /**
     * The name of the ScalingPlanSchedule
     */
    scalingPlanScheduleName: pulumi.Input<string>;
}