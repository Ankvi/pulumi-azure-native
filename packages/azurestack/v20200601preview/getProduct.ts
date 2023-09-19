import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns the specified product.
 */
export function getProduct(args: GetProductArgs, opts?: pulumi.InvokeOptions): Promise<GetProductResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestack/v20200601preview:getProduct", {
        "productName": args.productName,
        "registrationName": args.registrationName,
        "resourceGroup": args.resourceGroup,
    }, opts);
}

export interface GetProductArgs {
    /**
     * Name of the product.
     */
    productName: string;
    /**
     * Name of the Azure Stack registration.
     */
    registrationName: string;
    /**
     * Name of the resource group.
     */
    resourceGroup: string;
}

/**
 * Product information.
 */
export interface GetProductResult {
    /**
     * The part number used for billing purposes.
     */
    readonly billingPartNumber?: string;
    /**
     * Product compatibility with current device.
     */
    readonly compatibility?: types.outputs.CompatibilityResponse;
    /**
     * The description of the product.
     */
    readonly description?: string;
    /**
     * The display name of the product.
     */
    readonly displayName?: string;
    /**
     * The entity tag used for optimistic concurrency when modifying the resource.
     */
    readonly etag?: string;
    /**
     * The identifier of the gallery item corresponding to the product.
     */
    readonly galleryItemIdentity?: string;
    /**
     * Additional links available for this product.
     */
    readonly iconUris?: types.outputs.IconUrisResponse;
    /**
     * ID of the resource.
     */
    readonly id: string;
    /**
     * The legal terms.
     */
    readonly legalTerms?: string;
    /**
     * Additional links available for this product.
     */
    readonly links?: types.outputs.ProductLinkResponse[];
    /**
     * Name of the resource.
     */
    readonly name: string;
    /**
     * The offer representing the product.
     */
    readonly offer?: string;
    /**
     * The version of the product offer.
     */
    readonly offerVersion?: string;
    /**
     * The length of product content.
     */
    readonly payloadLength?: number;
    /**
     * The privacy policy.
     */
    readonly privacyPolicy?: string;
    /**
     * The kind of the product (virtualMachine or virtualMachineExtension)
     */
    readonly productKind?: string;
    /**
     * Additional properties for the product.
     */
    readonly productProperties?: types.outputs.ProductPropertiesResponse;
    /**
     * The user-friendly name of the product publisher.
     */
    readonly publisherDisplayName?: string;
    /**
     * Publisher identifier.
     */
    readonly publisherIdentifier?: string;
    /**
     * The product SKU.
     */
    readonly sku?: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Type of Resource.
     */
    readonly type: string;
    /**
     * The type of the Virtual Machine Extension.
     */
    readonly vmExtensionType?: string;
}
/**
 * Returns the specified product.
 */
export function getProductOutput(args: GetProductOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProductResult> {
    return pulumi.output(args).apply((a: any) => getProduct(a, opts))
}

export interface GetProductOutputArgs {
    /**
     * Name of the product.
     */
    productName: pulumi.Input<string>;
    /**
     * Name of the Azure Stack registration.
     */
    registrationName: pulumi.Input<string>;
    /**
     * Name of the resource group.
     */
    resourceGroup: pulumi.Input<string>;
}
