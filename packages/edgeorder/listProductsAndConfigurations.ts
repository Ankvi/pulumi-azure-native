import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List configurations for the given product family, product line and product for the given subscription.
 * Azure REST API version: 2022-05-01-preview.
 *
 * Other available API versions: 2024-02-01.
 */
export function listProductsAndConfigurations(args?: ListProductsAndConfigurationsArgs, opts?: pulumi.InvokeOptions): Promise<ListProductsAndConfigurationsResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:edgeorder:listProductsAndConfigurations", {
        "configurationFilter": args.configurationFilter,
        "customerSubscriptionDetails": args.customerSubscriptionDetails,
        "skipToken": args.skipToken,
    }, opts);
}

export interface ListProductsAndConfigurationsArgs {
    /**
     * Holds details about product hierarchy information and filterable property.
     */
    configurationFilter?: types.inputs.ConfigurationFilter;
    /**
     * Customer subscription properties. Clients can display available products to unregistered customers by explicitly passing subscription details.
     */
    customerSubscriptionDetails?: types.inputs.CustomerSubscriptionDetails;
    /**
     * $skipToken is supported on list of configurations, which provides the next page in the list of configurations.
     */
    skipToken?: string;
}

/**
 * The list of configurations.
 */
export interface ListProductsAndConfigurationsResult {
    /**
     * Link for the next set of configurations.
     */
    readonly nextLink?: string;
    /**
     * List of configurations.
     */
    readonly value: types.outputs.ConfigurationResponse[];
}
/**
 * List configurations for the given product family, product line and product for the given subscription.
 * Azure REST API version: 2022-05-01-preview.
 *
 * Other available API versions: 2024-02-01.
 */
export function listProductsAndConfigurationsOutput(args?: ListProductsAndConfigurationsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListProductsAndConfigurationsResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:edgeorder:listProductsAndConfigurations", {
        "configurationFilter": args.configurationFilter,
        "customerSubscriptionDetails": args.customerSubscriptionDetails,
        "skipToken": args.skipToken,
    }, opts);
}

export interface ListProductsAndConfigurationsOutputArgs {
    /**
     * Holds details about product hierarchy information and filterable property.
     */
    configurationFilter?: pulumi.Input<types.inputs.ConfigurationFilterArgs>;
    /**
     * Customer subscription properties. Clients can display available products to unregistered customers by explicitly passing subscription details.
     */
    customerSubscriptionDetails?: pulumi.Input<types.inputs.CustomerSubscriptionDetailsArgs>;
    /**
     * $skipToken is supported on list of configurations, which provides the next page in the list of configurations.
     */
    skipToken?: pulumi.Input<string>;
}