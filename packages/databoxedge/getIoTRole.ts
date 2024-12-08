import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a specific role by name.
 * Azure REST API version: 2022-03-01.
 */
export function getIoTRole(args: GetIoTRoleArgs, opts?: pulumi.InvokeOptions): Promise<GetIoTRoleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:databoxedge:getIoTRole", {
        "deviceName": args.deviceName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIoTRoleArgs {
    /**
     * The device name.
     */
    deviceName: string;
    /**
     * The role name.
     */
    name: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * Compute role.
 */
export interface GetIoTRoleResult {
    /**
     * Resource allocation
     */
    readonly computeResource?: types.outputs.ComputeResourceResponse;
    /**
     * Host OS supported by the IoT role.
     */
    readonly hostPlatform: string;
    /**
     * Platform where the Iot runtime is hosted.
     */
    readonly hostPlatformType: string;
    /**
     * The path ID that uniquely identifies the object.
     */
    readonly id: string;
    /**
     * IoT device metadata to which data box edge device needs to be connected.
     */
    readonly ioTDeviceDetails: types.outputs.IoTDeviceInfoResponse;
    /**
     * Iot edge agent details to download the agent and bootstrap iot runtime.
     */
    readonly ioTEdgeAgentInfo?: types.outputs.IoTEdgeAgentInfoResponse;
    /**
     * IoT edge device to which the IoT role needs to be configured.
     */
    readonly ioTEdgeDeviceDetails: types.outputs.IoTDeviceInfoResponse;
    /**
     * Role type.
     * Expected value is 'IOT'.
     */
    readonly kind: "IOT";
    /**
     * The object name.
     */
    readonly name: string;
    /**
     * Role status.
     */
    readonly roleStatus: string;
    /**
     * Mount points of shares in role(s).
     */
    readonly shareMappings?: types.outputs.MountPointMapResponse[];
    /**
     * Metadata pertaining to creation and last modification of Role
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
}
/**
 * Gets a specific role by name.
 * Azure REST API version: 2022-03-01.
 */
export function getIoTRoleOutput(args: GetIoTRoleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetIoTRoleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:databoxedge:getIoTRole", {
        "deviceName": args.deviceName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIoTRoleOutputArgs {
    /**
     * The device name.
     */
    deviceName: pulumi.Input<string>;
    /**
     * The role name.
     */
    name: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}