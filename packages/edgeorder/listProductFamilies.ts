import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * This method provides the list of product families for the given subscription.
 * Azure REST API version: 2021-12-01.
 *
 * Other available API versions: 2020-12-01-preview.
 */
export function listProductFamilies(args: ListProductFamiliesArgs, opts?: pulumi.InvokeOptions): Promise<ListProductFamiliesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:edgeorder:listProductFamilies", {
        "customerSubscriptionDetails": args.customerSubscriptionDetails,
        "expand": args.expand,
        "filterableProperties": args.filterableProperties,
        "skipToken": args.skipToken,
    }, opts);
}

export interface ListProductFamiliesArgs {
    /**
     * Customer subscription properties. Clients can display available products to unregistered customers by explicitly passing subscription details
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
export interface ListProductFamiliesResult {
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
 * This method provides the list of product families for the given subscription.
 * Azure REST API version: 2021-12-01.
 *
 * Other available API versions: 2020-12-01-preview.
 */
export function listProductFamiliesOutput(args: ListProductFamiliesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListProductFamiliesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:edgeorder:listProductFamilies", {
        "customerSubscriptionDetails": args.customerSubscriptionDetails,
        "expand": args.expand,
        "filterableProperties": args.filterableProperties,
        "skipToken": args.skipToken,
    }, opts);
}

export interface ListProductFamiliesOutputArgs {
    /**
     * Customer subscription properties. Clients can display available products to unregistered customers by explicitly passing subscription details
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