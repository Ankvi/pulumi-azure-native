import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name.
 */
export function getDeviceGroup(args: GetDeviceGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetDeviceGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azuresphere/v20220901preview:getDeviceGroup", {
        "catalogName": args.catalogName,
        "deviceGroupName": args.deviceGroupName,
        "productName": args.productName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDeviceGroupArgs {
    /**
     * Name of catalog
     */
    catalogName: string;
    /**
     * Name of device group.
     */
    deviceGroupName: string;
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
 * An device group resource belonging to a product resource.
 */
export interface GetDeviceGroupResult {
    /**
     * Flag to define if the user allows for crash dump collection.
     */
    readonly allowCrashDumpsCollection?: string;
    /**
     * Description of the device group.
     */
    readonly description?: string;
    /**
     * Deployment status for the device group.
     */
    readonly hasDeployment: boolean;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Operating system feed type of the device group.
     */
    readonly osFeedType?: string;
    /**
     * The status of the last operation.
     */
    readonly provisioningState: string;
    /**
     * Regional data boundary for the device group.
     */
    readonly regionalDataBoundary?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Update policy of the device group.
     */
    readonly updatePolicy?: string;
}
/**
 * Get a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name.
 */
export function getDeviceGroupOutput(args: GetDeviceGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDeviceGroupResult> {
    return pulumi.output(args).apply((a: any) => getDeviceGroup(a, opts))
}

export interface GetDeviceGroupOutputArgs {
    /**
     * Name of catalog
     */
    catalogName: pulumi.Input<string>;
    /**
     * Name of device group.
     */
    deviceGroupName: pulumi.Input<string>;
    /**
     * Name of product.
     */
    productName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
