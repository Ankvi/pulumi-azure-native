import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified sku.
 *
 * Uses Azure REST API version 2022-01-01-preview.
 */
export function getVendorSkus(args: GetVendorSkusArgs, opts?: pulumi.InvokeOptions): Promise<GetVendorSkusResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridnetwork:getVendorSkus", {
        "skuName": args.skuName,
        "vendorName": args.vendorName,
    }, opts);
}

export interface GetVendorSkusArgs {
    /**
     * The name of the sku.
     */
    skuName: string;
    /**
     * The name of the vendor.
     */
    vendorName: string;
}

/**
 * Sku sub resource.
 */
export interface GetVendorSkusResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The sku deployment mode.
     */
    readonly deploymentMode?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The parameters for the managed application to be supplied by the vendor.
     */
    readonly managedApplicationParameters?: any;
    /**
     * The template for the managed application deployment.
     */
    readonly managedApplicationTemplate?: any;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The template definition of the network function.
     */
    readonly networkFunctionTemplate?: types.outputs.NetworkFunctionTemplateResponse;
    /**
     * The network function type.
     */
    readonly networkFunctionType?: string;
    /**
     * Indicates if the vendor sku is in preview mode.
     */
    readonly preview?: boolean;
    /**
     * The provisioning state of the vendor sku sub resource.
     */
    readonly provisioningState: string;
    /**
     * The sku type.
     */
    readonly skuType?: string;
    /**
     * The system meta data relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets information about the specified sku.
 *
 * Uses Azure REST API version 2022-01-01-preview.
 */
export function getVendorSkusOutput(args: GetVendorSkusOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVendorSkusResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:hybridnetwork:getVendorSkus", {
        "skuName": args.skuName,
        "vendorName": args.vendorName,
    }, opts);
}

export interface GetVendorSkusOutputArgs {
    /**
     * The name of the sku.
     */
    skuName: pulumi.Input<string>;
    /**
     * The name of the vendor.
     */
    vendorName: pulumi.Input<string>;
}