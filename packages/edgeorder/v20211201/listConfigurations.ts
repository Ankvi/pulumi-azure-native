import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * This method provides the list of configurations for the given product family, product line and product under subscription.
 */
export function listConfigurations(args: ListConfigurationsArgs, opts?: pulumi.InvokeOptions): Promise<ListConfigurationsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:edgeorder/v20211201:listConfigurations", {
        "configurationFilters": args.configurationFilters,
        "customerSubscriptionDetails": args.customerSubscriptionDetails,
        "skipToken": args.skipToken,
    }, opts);
}

export interface ListConfigurationsArgs {
    /**
     * Holds details about product hierarchy information and filterable property.
     */
    configurationFilters: types.inputs.edgeorder.v20211201.ConfigurationFilters[];
    /**
     * Customer subscription properties. Clients can display available products to unregistered customers by explicitly passing subscription details
     */
    customerSubscriptionDetails?: types.inputs.edgeorder.v20211201.CustomerSubscriptionDetails;
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
    readonly value: types.outputs.edgeorder.v20211201.ConfigurationResponse[];
}
/**
 * This method provides the list of configurations for the given product family, product line and product under subscription.
 */
export function listConfigurationsOutput(args: ListConfigurationsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListConfigurationsResult> {
    return pulumi.output(args).apply((a: any) => listConfigurations(a, opts))
}

export interface ListConfigurationsOutputArgs {
    /**
     * Holds details about product hierarchy information and filterable property.
     */
    configurationFilters: pulumi.Input<pulumi.Input<types.inputs.edgeorder.v20211201.ConfigurationFiltersArgs>[]>;
    /**
     * Customer subscription properties. Clients can display available products to unregistered customers by explicitly passing subscription details
     */
    customerSubscriptionDetails?: pulumi.Input<types.inputs.edgeorder.v20211201.CustomerSubscriptionDetailsArgs>;
    /**
     * $skipToken is supported on list of configurations, which provides the next page in the list of configurations.
     */
    skipToken?: pulumi.Input<string>;
}
