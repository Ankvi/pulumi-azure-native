import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified vendor.
 * Azure REST API version: 2022-01-01-preview.
 */
export function getVendor(args: GetVendorArgs, opts?: pulumi.InvokeOptions): Promise<GetVendorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridnetwork:getVendor", {
        "vendorName": args.vendorName,
    }, opts);
}

export interface GetVendorArgs {
    /**
     * The name of the vendor.
     */
    vendorName: string;
}

/**
 * Vendor resource.
 */
export interface GetVendorResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the vendor resource.
     */
    readonly provisioningState: string;
    /**
     * A list of IDs of the vendor skus offered by the vendor.
     */
    readonly skus: types.outputs.hybridnetwork.SubResourceResponse[];
    /**
     * The system meta data relating to this resource.
     */
    readonly systemData: types.outputs.hybridnetwork.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets information about the specified vendor.
 * Azure REST API version: 2022-01-01-preview.
 */
export function getVendorOutput(args: GetVendorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVendorResult> {
    return pulumi.output(args).apply((a: any) => getVendor(a, opts))
}

export interface GetVendorOutputArgs {
    /**
     * The name of the vendor.
     */
    vendorName: pulumi.Input<string>;
}
