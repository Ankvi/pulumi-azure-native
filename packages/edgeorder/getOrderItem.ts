import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get an order item.
 *
 * Uses Azure REST API version 2022-05-01-preview.
 *
 * Other available API versions: 2024-02-01.
 */
export function getOrderItem(args: GetOrderItemArgs, opts?: pulumi.InvokeOptions): Promise<GetOrderItemResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:edgeorder:getOrderItem", {
        "expand": args.expand,
        "orderItemName": args.orderItemName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetOrderItemArgs {
    /**
     * $expand is supported on parent device details, device details, forward shipping details and reverse shipping details parameters. Each of these can be provided as a comma separated list. Parent Device Details for order item provides details on the devices of the product, Device Details for order item provides details on the devices of the child configurations of the product, Forward and Reverse Shipping details provide forward and reverse shipping details respectively.
     */
    expand?: string;
    /**
     * The name of the order item.
     */
    orderItemName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Represents order item resource.
 */
export interface GetOrderItemResult {
    /**
     * Represents shipping and return address for order item.
     */
    readonly addressDetails: types.outputs.AddressDetailsResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Id of the order to which order item belongs to.
     */
    readonly orderId: string;
    /**
     * Represents order item details.
     */
    readonly orderItemDetails: types.outputs.OrderItemDetailsResponse;
    /**
     * Start time of order item.
     */
    readonly startTime: string;
    /**
     * Represents resource creation and update time.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get an order item.
 *
 * Uses Azure REST API version 2022-05-01-preview.
 *
 * Other available API versions: 2024-02-01.
 */
export function getOrderItemOutput(args: GetOrderItemOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetOrderItemResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:edgeorder:getOrderItem", {
        "expand": args.expand,
        "orderItemName": args.orderItemName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetOrderItemOutputArgs {
    /**
     * $expand is supported on parent device details, device details, forward shipping details and reverse shipping details parameters. Each of these can be provided as a comma separated list. Parent Device Details for order item provides details on the devices of the product, Device Details for order item provides details on the devices of the child configurations of the product, Forward and Reverse Shipping details provide forward and reverse shipping details respectively.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the order item.
     */
    orderItemName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}