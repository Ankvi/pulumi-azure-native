import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns a list of products.
 *
 * Uses Azure REST API version 2022-06-01.
 *
 * Other available API versions: 2020-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native azurestack [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getProducts(args: GetProductsArgs, opts?: pulumi.InvokeOptions): Promise<GetProductsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestack:getProducts", {
        "productName": args.productName,
        "registrationName": args.registrationName,
        "resourceGroup": args.resourceGroup,
    }, opts);
}

export interface GetProductsArgs {
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
 * Pageable list of products.
 */
export interface GetProductsResult {
    /**
     * URI to the next page.
     */
    readonly nextLink?: string;
    /**
     * List of products.
     */
    readonly value?: types.outputs.ProductResponse[];
}
/**
 * Returns a list of products.
 *
 * Uses Azure REST API version 2022-06-01.
 *
 * Other available API versions: 2020-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native azurestack [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getProductsOutput(args: GetProductsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetProductsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azurestack:getProducts", {
        "productName": args.productName,
        "registrationName": args.registrationName,
        "resourceGroup": args.resourceGroup,
    }, opts);
}

export interface GetProductsOutputArgs {
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