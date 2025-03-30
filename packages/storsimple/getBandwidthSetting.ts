import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns the properties of the specified bandwidth setting name.
 *
 * Uses Azure REST API version 2017-06-01.
 */
export function getBandwidthSetting(args: GetBandwidthSettingArgs, opts?: pulumi.InvokeOptions): Promise<GetBandwidthSettingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storsimple:getBandwidthSetting", {
        "bandwidthSettingName": args.bandwidthSettingName,
        "managerName": args.managerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBandwidthSettingArgs {
    /**
     * The name of bandwidth setting to be fetched.
     */
    bandwidthSettingName: string;
    /**
     * The manager name
     */
    managerName: string;
    /**
     * The resource group name
     */
    resourceGroupName: string;
}

/**
 * The bandwidth setting.
 */
export interface GetBandwidthSettingResult {
    /**
     * The path ID that uniquely identifies the object.
     */
    readonly id: string;
    /**
     * The Kind of the object. Currently only Series8000 is supported
     */
    readonly kind?: string;
    /**
     * The name of the object.
     */
    readonly name: string;
    /**
     * The schedules.
     */
    readonly schedules: types.outputs.BandwidthScheduleResponse[];
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
    /**
     * The number of volumes that uses the bandwidth setting.
     */
    readonly volumeCount: number;
}
/**
 * Returns the properties of the specified bandwidth setting name.
 *
 * Uses Azure REST API version 2017-06-01.
 */
export function getBandwidthSettingOutput(args: GetBandwidthSettingOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetBandwidthSettingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:storsimple:getBandwidthSetting", {
        "bandwidthSettingName": args.bandwidthSettingName,
        "managerName": args.managerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBandwidthSettingOutputArgs {
    /**
     * The name of bandwidth setting to be fetched.
     */
    bandwidthSettingName: pulumi.Input<string>;
    /**
     * The manager name
     */
    managerName: pulumi.Input<string>;
    /**
     * The resource group name
     */
    resourceGroupName: pulumi.Input<string>;
}