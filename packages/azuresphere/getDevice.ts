import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Device. Use '.unassigned' or '.default' for the device group and product names when a device does not belong to a device group and product.
 *
 * Uses Azure REST API version 2022-09-01-preview.
 *
 * Other available API versions: 2024-04-01.
 */
export function getDevice(args: GetDeviceArgs, opts?: pulumi.InvokeOptions): Promise<GetDeviceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azuresphere:getDevice", {
        "catalogName": args.catalogName,
        "deviceGroupName": args.deviceGroupName,
        "deviceName": args.deviceName,
        "productName": args.productName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDeviceArgs {
    /**
     * Name of catalog
     */
    catalogName: string;
    /**
     * Name of device group.
     */
    deviceGroupName: string;
    /**
     * Device name
     */
    deviceName: string;
    /**
     * Name of product.
     */
    productName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An device resource belonging to a device group resource.
 */
export interface GetDeviceResult {
    /**
     * SKU of the chip
     */
    readonly chipSku: string;
    /**
     * Device ID
     */
    readonly deviceId?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * OS version available for installation when update requested
     */
    readonly lastAvailableOsVersion: string;
    /**
     * OS version running on device when update requested
     */
    readonly lastInstalledOsVersion: string;
    /**
     * Time when update requested and new OS version available
     */
    readonly lastOsUpdateUtc: string;
    /**
     * Time when update was last requested
     */
    readonly lastUpdateRequestUtc: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The status of the last operation.
     */
    readonly provisioningState: string;
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
 * Get a Device. Use '.unassigned' or '.default' for the device group and product names when a device does not belong to a device group and product.
 *
 * Uses Azure REST API version 2022-09-01-preview.
 *
 * Other available API versions: 2024-04-01.
 */
export function getDeviceOutput(args: GetDeviceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDeviceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azuresphere:getDevice", {
        "catalogName": args.catalogName,
        "deviceGroupName": args.deviceGroupName,
        "deviceName": args.deviceName,
        "productName": args.productName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDeviceOutputArgs {
    /**
     * Name of catalog
     */
    catalogName: pulumi.Input<string>;
    /**
     * Name of device group.
     */
    deviceGroupName: pulumi.Input<string>;
    /**
     * Device name
     */
    deviceName: pulumi.Input<string>;
    /**
     * Name of product.
     */
    productName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}