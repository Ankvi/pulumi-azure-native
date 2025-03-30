import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns all failover sets for a given device and their eligibility for participating in a failover. A failover set refers to a set of volume containers that need to be failed-over as a single unit to maintain data integrity.
 *
 * Uses Azure REST API version 2017-06-01.
 */
export function listDeviceFailoverSets(args: ListDeviceFailoverSetsArgs, opts?: pulumi.InvokeOptions): Promise<ListDeviceFailoverSetsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storsimple:listDeviceFailoverSets", {
        "deviceName": args.deviceName,
        "managerName": args.managerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListDeviceFailoverSetsArgs {
    /**
     * The device name
     */
    deviceName: string;
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
 * The list of failover sets.
 */
export interface ListDeviceFailoverSetsResult {
    /**
     * The list of failover sets.
     */
    readonly value?: types.outputs.FailoverSetResponse[];
}
/**
 * Returns all failover sets for a given device and their eligibility for participating in a failover. A failover set refers to a set of volume containers that need to be failed-over as a single unit to maintain data integrity.
 *
 * Uses Azure REST API version 2017-06-01.
 */
export function listDeviceFailoverSetsOutput(args: ListDeviceFailoverSetsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListDeviceFailoverSetsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:storsimple:listDeviceFailoverSets", {
        "deviceName": args.deviceName,
        "managerName": args.managerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListDeviceFailoverSetsOutputArgs {
    /**
     * The device name
     */
    deviceName: pulumi.Input<string>;
    /**
     * The manager name
     */
    managerName: pulumi.Input<string>;
    /**
     * The resource group name
     */
    resourceGroupName: pulumi.Input<string>;
}