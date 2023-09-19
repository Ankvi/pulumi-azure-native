import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get device group
 * Azure REST API version: 2021-02-01-preview.
 */
export function getDeviceGroup(args: GetDeviceGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetDeviceGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:iotsecurity:getDeviceGroup", {
        "deviceGroupName": args.deviceGroupName,
        "iotDefenderLocation": args.iotDefenderLocation,
    }, opts);
}

export interface GetDeviceGroupArgs {
    /**
     * Device group name
     */
    deviceGroupName: string;
    /**
     * Defender for IoT location
     */
    iotDefenderLocation: string;
}

/**
 * Device group
 */
export interface GetDeviceGroupResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
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
 * Get device group
 * Azure REST API version: 2021-02-01-preview.
 */
export function getDeviceGroupOutput(args: GetDeviceGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDeviceGroupResult> {
    return pulumi.output(args).apply((a: any) => getDeviceGroup(a, opts))
}

export interface GetDeviceGroupOutputArgs {
    /**
     * Device group name
     */
    deviceGroupName: pulumi.Input<string>;
    /**
     * Defender for IoT location
     */
    iotDefenderLocation: pulumi.Input<string>;
}
