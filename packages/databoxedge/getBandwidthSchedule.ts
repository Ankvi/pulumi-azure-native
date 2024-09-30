import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties of the specified bandwidth schedule.
 * Azure REST API version: 2022-03-01.
 *
 * Other available API versions: 2023-01-01-preview, 2023-07-01, 2023-12-01.
 */
export function getBandwidthSchedule(args: GetBandwidthScheduleArgs, opts?: pulumi.InvokeOptions): Promise<GetBandwidthScheduleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:databoxedge:getBandwidthSchedule", {
        "deviceName": args.deviceName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBandwidthScheduleArgs {
    /**
     * The device name.
     */
    deviceName: string;
    /**
     * The bandwidth schedule name.
     */
    name: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * The bandwidth schedule details.
 */
export interface GetBandwidthScheduleResult {
    /**
     * The days of the week when this schedule is applicable.
     */
    readonly days: string[];
    /**
     * The path ID that uniquely identifies the object.
     */
    readonly id: string;
    /**
     * The object name.
     */
    readonly name: string;
    /**
     * The bandwidth rate in Mbps.
     */
    readonly rateInMbps: number;
    /**
     * The start time of the schedule in UTC.
     */
    readonly start: string;
    /**
     * The stop time of the schedule in UTC.
     */
    readonly stop: string;
    /**
     * Metadata pertaining to creation and last modification of BandwidthSchedule
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
}
/**
 * Gets the properties of the specified bandwidth schedule.
 * Azure REST API version: 2022-03-01.
 *
 * Other available API versions: 2023-01-01-preview, 2023-07-01, 2023-12-01.
 */
export function getBandwidthScheduleOutput(args: GetBandwidthScheduleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBandwidthScheduleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:databoxedge:getBandwidthSchedule", {
        "deviceName": args.deviceName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBandwidthScheduleOutputArgs {
    /**
     * The device name.
     */
    deviceName: pulumi.Input<string>;
    /**
     * The bandwidth schedule name.
     */
    name: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}