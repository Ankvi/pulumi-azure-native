import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * List the registration key for the device.
 * Azure REST API version: 2022-01-01-preview.
 */
export function listDeviceRegistrationKey(args: ListDeviceRegistrationKeyArgs, opts?: pulumi.InvokeOptions): Promise<ListDeviceRegistrationKeyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridnetwork:listDeviceRegistrationKey", {
        "deviceName": args.deviceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListDeviceRegistrationKeyArgs {
    /**
     * The name of the device resource.
     */
    deviceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The device registration key.
 */
export interface ListDeviceRegistrationKeyResult {
    /**
     * The registration key for the device.
     */
    readonly registrationKey: string;
}
/**
 * List the registration key for the device.
 * Azure REST API version: 2022-01-01-preview.
 */
export function listDeviceRegistrationKeyOutput(args: ListDeviceRegistrationKeyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListDeviceRegistrationKeyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:hybridnetwork:listDeviceRegistrationKey", {
        "deviceName": args.deviceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListDeviceRegistrationKeyOutputArgs {
    /**
     * The name of the device resource.
     */
    deviceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}