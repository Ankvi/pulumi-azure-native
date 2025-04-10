import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Generate credentials for publishing SKU images.
 *
 * Uses Azure REST API version 2022-01-01-preview.
 */
export function listVendorSkusCredential(args: ListVendorSkusCredentialArgs, opts?: pulumi.InvokeOptions): Promise<ListVendorSkusCredentialResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridnetwork:listVendorSkusCredential", {
        "skuName": args.skuName,
        "vendorName": args.vendorName,
    }, opts);
}

export interface ListVendorSkusCredentialArgs {
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
 * The Sku credential definition.
 */
export interface ListVendorSkusCredentialResult {
    /**
     * The Acr server url
     */
    readonly acrServerUrl?: string;
    /**
     * The credential value.
     */
    readonly acrToken?: string;
    /**
     * The UTC time when credential will expire.
     */
    readonly expiry?: string;
    /**
     * The repositories that could be accessed using the current credential.
     */
    readonly repositories?: string[];
    /**
     * The username of the sku credential.
     */
    readonly username?: string;
}
/**
 * Generate credentials for publishing SKU images.
 *
 * Uses Azure REST API version 2022-01-01-preview.
 */
export function listVendorSkusCredentialOutput(args: ListVendorSkusCredentialOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListVendorSkusCredentialResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:hybridnetwork:listVendorSkusCredential", {
        "skuName": args.skuName,
        "vendorName": args.vendorName,
    }, opts);
}

export interface ListVendorSkusCredentialOutputArgs {
    /**
     * The name of the sku.
     */
    skuName: pulumi.Input<string>;
    /**
     * The name of the vendor.
     */
    vendorName: pulumi.Input<string>;
}