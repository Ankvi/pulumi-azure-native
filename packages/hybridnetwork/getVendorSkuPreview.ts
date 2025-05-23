import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the preview information of a vendor sku.
 *
 * Uses Azure REST API version 2022-01-01-preview.
 */
export function getVendorSkuPreview(args: GetVendorSkuPreviewArgs, opts?: pulumi.InvokeOptions): Promise<GetVendorSkuPreviewResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridnetwork:getVendorSkuPreview", {
        "previewSubscription": args.previewSubscription,
        "skuName": args.skuName,
        "vendorName": args.vendorName,
    }, opts);
}

export interface GetVendorSkuPreviewArgs {
    /**
     * Preview subscription ID.
     */
    previewSubscription: string;
    /**
     * The name of the vendor sku.
     */
    skuName: string;
    /**
     * The name of the vendor.
     */
    vendorName: string;
}

/**
 * Customer subscription which can use a sku.
 */
export interface GetVendorSkuPreviewResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The ARM ID of the resource.
     */
    readonly id: string;
    /**
     * The preview subscription ID.
     */
    readonly name: string;
    /**
     * The provisioning state of the PreviewSubscription resource.
     */
    readonly provisioningState: string;
    /**
     * The system meta data relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Gets the preview information of a vendor sku.
 *
 * Uses Azure REST API version 2022-01-01-preview.
 */
export function getVendorSkuPreviewOutput(args: GetVendorSkuPreviewOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVendorSkuPreviewResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:hybridnetwork:getVendorSkuPreview", {
        "previewSubscription": args.previewSubscription,
        "skuName": args.skuName,
        "vendorName": args.vendorName,
    }, opts);
}

export interface GetVendorSkuPreviewOutputArgs {
    /**
     * Preview subscription ID.
     */
    previewSubscription: pulumi.Input<string>;
    /**
     * The name of the vendor sku.
     */
    skuName: pulumi.Input<string>;
    /**
     * The name of the vendor.
     */
    vendorName: pulumi.Input<string>;
}