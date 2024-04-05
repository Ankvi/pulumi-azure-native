import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a Test Base CustomerEvent.
 */
export function getCustomerEvent(args: GetCustomerEventArgs, opts?: pulumi.InvokeOptions): Promise<GetCustomerEventResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:testbase/v20231101preview:getCustomerEvent", {
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
     * The name of the resource group. The name is case insensitive.
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
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The notification event receivers.
     */
    readonly receivers: types.outputs.NotificationEventReceiverResponse[];
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
 * Gets a Test Base CustomerEvent.
 */
export function getCustomerEventOutput(args: GetCustomerEventOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCustomerEventResult> {
    return pulumi.output(args).apply((a: any) => getCustomerEvent(a, opts))
}

export interface GetCustomerEventOutputArgs {
    /**
     * The resource name of the Test Base Customer event.
     */
    customerEventName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource name of the Test Base Account.
     */
    testBaseAccountName: pulumi.Input<string>;
}