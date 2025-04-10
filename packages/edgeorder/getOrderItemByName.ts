import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an order item.
 *
 * Uses Azure REST API version 2021-12-01.
 */
export function getOrderItemByName(args: GetOrderItemByNameArgs, opts?: pulumi.InvokeOptions): Promise<GetOrderItemByNameResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:edgeorder:getOrderItemByName", {
        "expand": args.expand,
        "orderItemName": args.orderItemName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetOrderItemByNameArgs {
    /**
     * $expand is supported on device details, forward shipping details and reverse shipping details parameters. Each of these can be provided as a comma separated list. Device Details for order item provides details on the devices of the product, Forward and Reverse Shipping details provide forward and reverse shipping details respectively.
     */
    expand?: string;
    /**
     * The name of the order item
     */
    orderItemName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Represents order item contract
 */
export interface GetOrderItemByNameResult {
    /**
     * Represents shipping and return address for order item
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
     * Id of the order to which order item belongs to
     */
    readonly orderId: string;
    /**
     * Represents order item details.
     */
    readonly orderItemDetails: types.outputs.OrderItemDetailsResponse;
    /**
     * Start time of order item
     */
    readonly startTime: string;
    /**
     * Represents resource creation and update time
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
 * Gets an order item.
 *
 * Uses Azure REST API version 2021-12-01.
 */
export function getOrderItemByNameOutput(args: GetOrderItemByNameOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetOrderItemByNameResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:edgeorder:getOrderItemByName", {
        "expand": args.expand,
        "orderItemName": args.orderItemName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetOrderItemByNameOutputArgs {
    /**
     * $expand is supported on device details, forward shipping details and reverse shipping details parameters. Each of these can be provided as a comma separated list. Device Details for order item provides details on the devices of the product, Forward and Reverse Shipping details provide forward and reverse shipping details respectively.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the order item
     */
    orderItemName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}