import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Returns a list of products.
 */
export function getProducts(args: GetProductsArgs, opts?: pulumi.InvokeOptions): Promise<GetProductsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestack/v20220601:getProducts", {
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
    readonly value?: types.outputs.azurestack.v20220601.ProductResponse[];
}
/**
 * Returns a list of products.
 */
export function getProductsOutput(args: GetProductsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProductsResult> {
    return pulumi.output(args).apply((a: any) => getProducts(a, opts))
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
