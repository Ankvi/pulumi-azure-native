import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a specific trigger by name.
 * Azure REST API version: 2022-03-01.
 */
export function getPeriodicTimerEventTrigger(args: GetPeriodicTimerEventTriggerArgs, opts?: pulumi.InvokeOptions): Promise<GetPeriodicTimerEventTriggerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:databoxedge:getPeriodicTimerEventTrigger", {
        "deviceName": args.deviceName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPeriodicTimerEventTriggerArgs {
    /**
     * The device name.
     */
    deviceName: string;
    /**
     * The trigger name.
     */
    name: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * Trigger details.
 */
export interface GetPeriodicTimerEventTriggerResult {
    /**
     * A custom context tag typically used to correlate the trigger against its usage. For example, if a periodic timer trigger is intended for certain specific IoT modules in the device, the tag can be the name or the image URL of the module.
     */
    readonly customContextTag?: string;
    /**
     * The path ID that uniquely identifies the object.
     */
    readonly id: string;
    /**
     * Trigger Kind.
     * Expected value is 'PeriodicTimerEvent'.
     */
    readonly kind: "PeriodicTimerEvent";
    /**
     * The object name.
     */
    readonly name: string;
    /**
     * Role Sink information.
     */
    readonly sinkInfo: types.outputs.RoleSinkInfoResponse;
    /**
     * Periodic timer details.
     */
    readonly sourceInfo: types.outputs.PeriodicTimerSourceInfoResponse;
    /**
     * Metadata pertaining to creation and last modification of Trigger
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
}
/**
 * Get a specific trigger by name.
 * Azure REST API version: 2022-03-01.
 */
export function getPeriodicTimerEventTriggerOutput(args: GetPeriodicTimerEventTriggerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPeriodicTimerEventTriggerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:databoxedge:getPeriodicTimerEventTrigger", {
        "deviceName": args.deviceName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPeriodicTimerEventTriggerOutputArgs {
    /**
     * The device name.
     */
    deviceName: pulumi.Input<string>;
    /**
     * The trigger name.
     */
    name: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}