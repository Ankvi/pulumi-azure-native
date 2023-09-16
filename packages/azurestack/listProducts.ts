import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns a list of products.
 * Azure REST API version: 2022-06-01.
 */
export function listProducts(args: ListProductsArgs, opts?: pulumi.InvokeOptions): Promise<ListProductsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestack:listProducts", {
        "productName": args.productName,
        "registrationName": args.registrationName,
        "resourceGroup": args.resourceGroup,
    }, opts);
}

export interface ListProductsArgs {
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
export interface ListProductsResult {
    /**
     * URI to the next page.
     */
    readonly nextLink?: string;
    /**
     * List of products.
     */
    readonly value?: types.outputs.azurestack.ProductResponse[];
}
/**
 * Returns a list of products.
 * Azure REST API version: 2022-06-01.
 */
export function listProductsOutput(args: ListProductsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListProductsResult> {
    return pulumi.output(args).apply((a: any) => listProducts(a, opts))
}

export interface ListProductsOutputArgs {
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
