import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * This method provides the list of configurations for the given product family, product line and product under subscription.
 *
 * Uses Azure REST API version 2021-12-01.
 */
export function listConfigurations(args: ListConfigurationsArgs, opts?: pulumi.InvokeOptions): Promise<ListConfigurationsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:edgeorder:listConfigurations", {
        "configurationFilters": args.configurationFilters,
        "customerSubscriptionDetails": args.customerSubscriptionDetails,
        "skipToken": args.skipToken,
    }, opts);
}

export interface ListConfigurationsArgs {
    /**
     * Holds details about product hierarchy information and filterable property.
     */
    configurationFilters: types.inputs.ConfigurationFilters[];
    /**
     * Customer subscription properties. Clients can display available products to unregistered customers by explicitly passing subscription details
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
export interface ListConfigurationsResult {
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
 * This method provides the list of configurations for the given product family, product line and product under subscription.
 *
 * Uses Azure REST API version 2021-12-01.
 */
export function listConfigurationsOutput(args: ListConfigurationsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListConfigurationsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:edgeorder:listConfigurations", {
        "configurationFilters": args.configurationFilters,
        "customerSubscriptionDetails": args.customerSubscriptionDetails,
        "skipToken": args.skipToken,
    }, opts);
}

export interface ListConfigurationsOutputArgs {
    /**
     * Holds details about product hierarchy information and filterable property.
     */
    configurationFilters: pulumi.Input<pulumi.Input<types.inputs.ConfigurationFiltersArgs>[]>;
    /**
     * Customer subscription properties. Clients can display available products to unregistered customers by explicitly passing subscription details
     */
    customerSubscriptionDetails?: pulumi.Input<types.inputs.CustomerSubscriptionDetailsArgs>;
    /**
     * $skipToken is supported on list of configurations, which provides the next page in the list of configurations.
     */
    skipToken?: pulumi.Input<string>;
}