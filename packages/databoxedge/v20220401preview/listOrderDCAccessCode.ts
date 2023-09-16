import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * DC Access code in the case of Self Managed Shipping.
 */
export function listOrderDCAccessCode(args: ListOrderDCAccessCodeArgs, opts?: pulumi.InvokeOptions): Promise<ListOrderDCAccessCodeResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:databoxedge/v20220401preview:listOrderDCAccessCode", {
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
 */
export function listOrderDCAccessCodeOutput(args: ListOrderDCAccessCodeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListOrderDCAccessCodeResult> {
    return pulumi.output(args).apply((a: any) => listOrderDCAccessCode(a, opts))
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
