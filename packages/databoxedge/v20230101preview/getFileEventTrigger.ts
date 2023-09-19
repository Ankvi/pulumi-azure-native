import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a specific trigger by name.
 */
export function getFileEventTrigger(args: GetFileEventTriggerArgs, opts?: pulumi.InvokeOptions): Promise<GetFileEventTriggerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:databoxedge/v20230101preview:getFileEventTrigger", {
        "deviceName": args.deviceName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFileEventTriggerArgs {
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
export interface GetFileEventTriggerResult {
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
     * Expected value is 'FileEvent'.
     */
    readonly kind: "FileEvent";
    /**
     * The object name.
     */
    readonly name: string;
    /**
     * Role sink info.
     */
    readonly sinkInfo: types.outputs.RoleSinkInfoResponse;
    /**
     * File event source details.
     */
    readonly sourceInfo: types.outputs.FileSourceInfoResponse;
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
 */
export function getFileEventTriggerOutput(args: GetFileEventTriggerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFileEventTriggerResult> {
    return pulumi.output(args).apply((a: any) => getFileEventTrigger(a, opts))
}

export interface GetFileEventTriggerOutputArgs {
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
