import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a ScalingPlanPooledSchedule.
 */
export function getScalingPlanPooledSchedule(args: GetScalingPlanPooledScheduleArgs, opts?: pulumi.InvokeOptions): Promise<GetScalingPlanPooledScheduleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:desktopvirtualization/v20221014preview:getScalingPlanPooledSchedule", {
        "resourceGroupName": args.resourceGroupName,
        "scalingPlanName": args.scalingPlanName,
        "scalingPlanScheduleName": args.scalingPlanScheduleName,
    }, opts);
}

export interface GetScalingPlanPooledScheduleArgs {
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
 * Represents a ScalingPlanPooledSchedule definition.
 */
export interface GetScalingPlanPooledScheduleResult {
    /**
     * Set of days of the week on which this schedule is active.
     */
    readonly daysOfWeek?: string[];
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Load balancing algorithm for off-peak period.
     */
    readonly offPeakLoadBalancingAlgorithm?: string;
    /**
     * Starting time for off-peak period.
     */
    readonly offPeakStartTime?: types.outputs.TimeResponse;
    /**
     * Load balancing algorithm for peak period.
     */
    readonly peakLoadBalancingAlgorithm?: string;
    /**
     * Starting time for peak period.
     */
    readonly peakStartTime?: types.outputs.TimeResponse;
    /**
     * Capacity threshold for ramp down period.
     */
    readonly rampDownCapacityThresholdPct?: number;
    /**
     * Should users be logged off forcefully from hosts.
     */
    readonly rampDownForceLogoffUsers?: boolean;
    /**
     * Load balancing algorithm for ramp down period.
     */
    readonly rampDownLoadBalancingAlgorithm?: string;
    /**
     * Minimum host percentage for ramp down period.
     */
    readonly rampDownMinimumHostsPct?: number;
    /**
     * Notification message for users during ramp down period.
     */
    readonly rampDownNotificationMessage?: string;
    /**
     * Starting time for ramp down period.
     */
    readonly rampDownStartTime?: types.outputs.TimeResponse;
    /**
     * Specifies when to stop hosts during ramp down period.
     */
    readonly rampDownStopHostsWhen?: string;
    /**
     * Number of minutes to wait to stop hosts during ramp down period.
     */
    readonly rampDownWaitTimeMinutes?: number;
    /**
     * Capacity threshold for ramp up period.
     */
    readonly rampUpCapacityThresholdPct?: number;
    /**
     * Load balancing algorithm for ramp up period.
     */
    readonly rampUpLoadBalancingAlgorithm?: string;
    /**
     * Minimum host percentage for ramp up period.
     */
    readonly rampUpMinimumHostsPct?: number;
    /**
     * Starting time for ramp up period.
     */
    readonly rampUpStartTime?: types.outputs.TimeResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a ScalingPlanPooledSchedule.
 */
export function getScalingPlanPooledScheduleOutput(args: GetScalingPlanPooledScheduleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetScalingPlanPooledScheduleResult> {
    return pulumi.output(args).apply((a: any) => getScalingPlanPooledSchedule(a, opts))
}

export interface GetScalingPlanPooledScheduleOutputArgs {
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
