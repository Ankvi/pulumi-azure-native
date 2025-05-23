import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Returns the public encryption key of the device.
 *
 * Uses Azure REST API version 2017-06-01.
 */
export function getManagerDevicePublicEncryptionKey(args: GetManagerDevicePublicEncryptionKeyArgs, opts?: pulumi.InvokeOptions): Promise<GetManagerDevicePublicEncryptionKeyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storsimple:getManagerDevicePublicEncryptionKey", {
        "deviceName": args.deviceName,
        "managerName": args.managerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagerDevicePublicEncryptionKeyArgs {
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
 * The public key.
 */
export interface GetManagerDevicePublicEncryptionKeyResult {
    /**
     * The key.
     */
    readonly key: string;
}
/**
 * Returns the public encryption key of the device.
 *
 * Uses Azure REST API version 2017-06-01.
 */
export function getManagerDevicePublicEncryptionKeyOutput(args: GetManagerDevicePublicEncryptionKeyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetManagerDevicePublicEncryptionKeyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:storsimple:getManagerDevicePublicEncryptionKey", {
        "deviceName": args.deviceName,
        "managerName": args.managerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagerDevicePublicEncryptionKeyOutputArgs {
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