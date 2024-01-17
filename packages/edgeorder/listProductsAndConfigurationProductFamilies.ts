import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List product families for the given subscription.
 * Azure REST API version: 2022-05-01-preview.
 */
export function listProductsAndConfigurationProductFamilies(args: ListProductsAndConfigurationProductFamiliesArgs, opts?: pulumi.InvokeOptions): Promise<ListProductsAndConfigurationProductFamiliesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:edgeorder:listProductsAndConfigurationProductFamilies", {
        "customerSubscriptionDetails": args.customerSubscriptionDetails,
        "expand": args.expand,
        "filterableProperties": args.filterableProperties,
        "skipToken": args.skipToken,
    }, opts);
}

export interface ListProductsAndConfigurationProductFamiliesArgs {
    /**
     * Customer subscription properties. Clients can display available products to unregistered customers by explicitly passing subscription details.
     */
    customerSubscriptionDetails?: types.inputs.CustomerSubscriptionDetails;
    /**
     * $expand is supported on configurations parameter for product, which provides details on the configurations for the product.
     */
    expand?: string;
    /**
     * Dictionary of filterable properties on product family.
     */
    filterableProperties: {[key: string]: types.inputs.FilterableProperty[]};
    /**
     * $skipToken is supported on list of product families, which provides the next page in the list of product families.
     */
    skipToken?: string;
}

/**
 * The list of product families.
 */
export interface ListProductsAndConfigurationProductFamiliesResult {
    /**
     * Link for the next set of product families.
     */
    readonly nextLink?: string;
    /**
     * List of product families.
     */
    readonly value: types.outputs.ProductFamilyResponse[];
}
/**
 * List product families for the given subscription.
 * Azure REST API version: 2022-05-01-preview.
 */
export function listProductsAndConfigurationProductFamiliesOutput(args: ListProductsAndConfigurationProductFamiliesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListProductsAndConfigurationProductFamiliesResult> {
    return pulumi.output(args).apply((a: any) => listProductsAndConfigurationProductFamilies(a, opts))
}

export interface ListProductsAndConfigurationProductFamiliesOutputArgs {
    /**
     * Customer subscription properties. Clients can display available products to unregistered customers by explicitly passing subscription details.
     */
    customerSubscriptionDetails?: pulumi.Input<types.inputs.CustomerSubscriptionDetailsArgs>;
    /**
     * $expand is supported on configurations parameter for product, which provides details on the configurations for the product.
     */
    expand?: pulumi.Input<string>;
    /**
     * Dictionary of filterable properties on product family.
     */
    filterableProperties: pulumi.Input<{[key: string]: pulumi.Input<pulumi.Input<types.inputs.FilterablePropertyArgs>[]>}>;
    /**
     * $skipToken is supported on list of product families, which provides the next page in the list of product families.
     */
    skipToken?: pulumi.Input<string>;
}