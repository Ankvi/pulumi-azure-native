import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * DC Access code in the case of Self Managed Shipping.
 *
 * Uses Azure REST API version 2022-03-01.
 *
 * Other available API versions: 2022-04-01-preview, 2023-01-01-preview, 2023-07-01, 2023-12-01.
 */
export function listOrderDCAccessCode(args: ListOrderDCAccessCodeArgs, opts?: pulumi.InvokeOptions): Promise<ListOrderDCAccessCodeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:databoxedge:listOrderDCAccessCode", {
        "deviceName": args.deviceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListOrderDCAccessCodeArgs {
    /**
     * The device name
     */
    deviceName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * DC Access code in the case of Self Managed Shipping.
 */
export interface ListOrderDCAccessCodeResult {
    /**
     * DCAccess Code for the Self Managed shipment.
     */
    readonly authCode?: string;
}
/**
 * DC Access code in the case of Self Managed Shipping.
 *
 * Uses Azure REST API version 2022-03-01.
 *
 * Other available API versions: 2022-04-01-preview, 2023-01-01-preview, 2023-07-01, 2023-12-01.
 */
export function listOrderDCAccessCodeOutput(args: ListOrderDCAccessCodeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListOrderDCAccessCodeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:databoxedge:listOrderDCAccessCode", {
        "deviceName": args.deviceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListOrderDCAccessCodeOutputArgs {
    /**
     * The device name
     */
    deviceName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}