import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Given a list of volume containers to be failed over from a source device, this method returns the eligibility result, as a failover target, for all devices under that resource.
 */
export function listDeviceFailoverTars(args: ListDeviceFailoverTarsArgs, opts?: pulumi.InvokeOptions): Promise<ListDeviceFailoverTarsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storsimple/v20170601:listDeviceFailoverTars", {
        "managerName": args.managerName,
        "resourceGroupName": args.resourceGroupName,
        "sourceDeviceName": args.sourceDeviceName,
        "volumeContainers": args.volumeContainers,
    }, opts);
}

export interface ListDeviceFailoverTarsArgs {
    /**
     * The manager name
     */
    managerName: string;
    /**
     * The resource group name
     */
    resourceGroupName: string;
    /**
     * The source device name on which failover is performed.
     */
    sourceDeviceName: string;
    /**
     * The list of path IDs of the volume containers that needs to be failed-over, for which we want to fetch the eligible targets.
     */
    volumeContainers?: string[];
}

/**
 * The list of all devices in a resource and their eligibility status as a failover target device.
 */
export interface ListDeviceFailoverTarsResult {
    /**
     * The list of all the failover targets.
     */
    readonly value?: types.outputs.FailoverTargetResponse[];
}
/**
 * Given a list of volume containers to be failed over from a source device, this method returns the eligibility result, as a failover target, for all devices under that resource.
 */
export function listDeviceFailoverTarsOutput(args: ListDeviceFailoverTarsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListDeviceFailoverTarsResult> {
    return pulumi.output(args).apply((a: any) => listDeviceFailoverTars(a, opts))
}

export interface ListDeviceFailoverTarsOutputArgs {
    /**
     * The manager name
     */
    managerName: pulumi.Input<string>;
    /**
     * The resource group name
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The source device name on which failover is performed.
     */
    sourceDeviceName: pulumi.Input<string>;
    /**
     * The list of path IDs of the volume containers that needs to be failed-over, for which we want to fetch the eligible targets.
     */
    volumeContainers?: pulumi.Input<pulumi.Input<string>[]>;
}