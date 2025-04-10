import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The order details.
 *
 * Uses Azure REST API version 2022-03-01.
 *
 * Other available API versions: 2022-04-01-preview, 2023-01-01-preview, 2023-07-01, 2023-12-01.
 */
export function getOrder(args: GetOrderArgs, opts?: pulumi.InvokeOptions): Promise<GetOrderResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:databoxedge:getOrder", {
        "deviceName": args.deviceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetOrderArgs {
    /**
     * The device name.
     */
    deviceName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * The order details.
 */
export interface GetOrderResult {
    /**
     * The contact details.
     */
    readonly contactInformation: types.outputs.ContactDetailsResponse;
    /**
     * Current status of the order.
     */
    readonly currentStatus: types.outputs.OrderStatusResponse;
    /**
     * Tracking information for the package delivered to the customer whether it has an original or a replacement device.
     */
    readonly deliveryTrackingInfo: types.outputs.TrackingInfoResponse[];
    /**
     * The path ID that uniquely identifies the object.
     */
    readonly id: string;
    /**
     * It specify the order api version.
     */
    readonly kind: string;
    /**
     * The object name.
     */
    readonly name: string;
    /**
     * List of status changes in the order.
     */
    readonly orderHistory: types.outputs.OrderStatusResponse[];
    /**
     * It specify the order resource id.
     */
    readonly orderId: string;
    /**
     * Tracking information for the package returned from the customer whether it has an original or a replacement device.
     */
    readonly returnTrackingInfo: types.outputs.TrackingInfoResponse[];
    /**
     * Serial number of the device.
     */
    readonly serialNumber: string;
    /**
     * ShipmentType of the order
     */
    readonly shipmentType?: string;
    /**
     * The shipping address.
     */
    readonly shippingAddress?: types.outputs.AddressResponse;
    /**
     * Metadata pertaining to creation and last modification of Order
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
}
/**
 * The order details.
 *
 * Uses Azure REST API version 2022-03-01.
 *
 * Other available API versions: 2022-04-01-preview, 2023-01-01-preview, 2023-07-01, 2023-12-01.
 */
export function getOrderOutput(args: GetOrderOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetOrderResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:databoxedge:getOrder", {
        "deviceName": args.deviceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetOrderOutputArgs {
    /**
     * The device name.
     */
    deviceName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}