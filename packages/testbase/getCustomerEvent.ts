import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a Test Base CustomerEvent.
 *
 * Uses Azure REST API version 2022-04-01-preview.
 *
 * Other available API versions: 2023-11-01-preview.
 */
export function getCustomerEvent(args: GetCustomerEventArgs, opts?: pulumi.InvokeOptions): Promise<GetCustomerEventResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:testbase:getCustomerEvent", {
        "customerEventName": args.customerEventName,
        "resourceGroupName": args.resourceGroupName,
        "testBaseAccountName": args.testBaseAccountName,
    }, opts);
}

export interface GetCustomerEventArgs {
    /**
     * The resource name of the Test Base Customer event.
     */
    customerEventName: string;
    /**
     * The name of the resource group that contains the resource.
     */
    resourceGroupName: string;
    /**
     * The resource name of the Test Base Account.
     */
    testBaseAccountName: string;
}

/**
 * The Customer Notification Event resource.
 */
export interface GetCustomerEventResult {
    /**
     * The name of the event subscribed to.
     */
    readonly eventName: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The notification event receivers.
     */
    readonly receivers: types.outputs.NotificationEventReceiverResponse[];
    /**
     * The system metadata relating to this resource
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a Test Base CustomerEvent.
 *
 * Uses Azure REST API version 2022-04-01-preview.
 *
 * Other available API versions: 2023-11-01-preview.
 */
export function getCustomerEventOutput(args: GetCustomerEventOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCustomerEventResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:testbase:getCustomerEvent", {
        "customerEventName": args.customerEventName,
        "resourceGroupName": args.resourceGroupName,
        "testBaseAccountName": args.testBaseAccountName,
    }, opts);
}

export interface GetCustomerEventOutputArgs {
    /**
     * The resource name of the Test Base Customer event.
     */
    customerEventName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource name of the Test Base Account.
     */
    testBaseAccountName: pulumi.Input<string>;
}