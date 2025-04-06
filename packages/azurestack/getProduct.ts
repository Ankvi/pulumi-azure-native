import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns the specified product.
 *
 * Uses Azure REST API version 2022-06-01.
 *
 * Other available API versions: 2020-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native azurestack [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getProduct(args: GetProductArgs, opts?: pulumi.InvokeOptions): Promise<GetProductResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestack:getProduct", {
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
 *
 * Uses Azure REST API version 2022-06-01.
 *
 * Other available API versions: 2020-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native azurestack [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getProductOutput(args: GetProductOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetProductResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azurestack:getProduct", {
        "productName": args.productName,
        "registrationName": args.registrationName,
        "resourceGroup": args.resourceGroup,
    }, opts);
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