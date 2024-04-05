import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a specific addon by name.
 */
export function getIoTAddon(args: GetIoTAddonArgs, opts?: pulumi.InvokeOptions): Promise<GetIoTAddonResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:databoxedge/v20231201:getIoTAddon", {
        "addonName": args.addonName,
        "deviceName": args.deviceName,
        "resourceGroupName": args.resourceGroupName,
        "roleName": args.roleName,
    }, opts);
}

export interface GetIoTAddonArgs {
    /**
     * The addon name.
     */
    addonName: string;
    /**
     * The device name.
     */
    deviceName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
    /**
     * The role name.
     */
    roleName: string;
}

/**
 * IoT Addon.
 */
export interface GetIoTAddonResult {
    /**
     * Host OS supported by the IoT addon.
     */
    readonly hostPlatform: string;
    /**
     * Platform where the runtime is hosted.
     */
    readonly hostPlatformType: string;
    /**
     * The path ID that uniquely identifies the object.
     */
    readonly id: string;
    /**
     * IoT device metadata to which appliance needs to be connected.
     */
    readonly ioTDeviceDetails: types.outputs.IoTDeviceInfoResponse;
    /**
     * IoT edge device to which the IoT Addon needs to be configured.
     */
    readonly ioTEdgeDeviceDetails: types.outputs.IoTDeviceInfoResponse;
    /**
     * Addon type.
     * Expected value is 'IotEdge'.
     */
    readonly kind: "IotEdge";
    /**
     * The object name.
     */
    readonly name: string;
    /**
     * Addon Provisioning State
     */
    readonly provisioningState: string;
    /**
     * Metadata pertaining to creation and last modification of Addon
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
    /**
     * Version of IoT running on the appliance.
     */
    readonly version: string;
}
/**
 * Gets a specific addon by name.
 */
export function getIoTAddonOutput(args: GetIoTAddonOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIoTAddonResult> {
    return pulumi.output(args).apply((a: any) => getIoTAddon(a, opts))
}

export interface GetIoTAddonOutputArgs {
    /**
     * The addon name.
     */
    addonName: pulumi.Input<string>;
    /**
     * The device name.
     */
    deviceName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The role name.
     */
    roleName: pulumi.Input<string>;
}