import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists the available Service Providers for creating Connection Settings
 * Azure REST API version: 2022-09-15.
 *
 * Other available API versions: 2018-07-12, 2020-06-02, 2021-03-01, 2021-05-01-preview, 2022-06-15-preview, 2023-09-15-preview.
 */
export function listBotConnectionServiceProviders(args?: ListBotConnectionServiceProvidersArgs, opts?: pulumi.InvokeOptions): Promise<ListBotConnectionServiceProvidersResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:botservice:listBotConnectionServiceProviders", {
    }, opts);
}

export interface ListBotConnectionServiceProvidersArgs {
}

/**
 * The list of bot service providers response.
 */
export interface ListBotConnectionServiceProvidersResult {
    /**
     * The link used to get the next page of bot service providers.
     */
    readonly nextLink?: string;
    /**
     * Gets the list of bot service providers and their properties.
     */
    readonly value: types.outputs.ServiceProviderResponse[];
}
/**
 * Lists the available Service Providers for creating Connection Settings
 * Azure REST API version: 2022-09-15.
 *
 * Other available API versions: 2018-07-12, 2020-06-02, 2021-03-01, 2021-05-01-preview, 2022-06-15-preview, 2023-09-15-preview.
 */
export function listBotConnectionServiceProvidersOutput(opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListBotConnectionServiceProvidersResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:botservice:listBotConnectionServiceProviders", {
    }, opts);
}