import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Lists the available Service Providers for creating Connection Settings
 */
export function listBotConnectionServiceProviders(args?: ListBotConnectionServiceProvidersArgs, opts?: pulumi.InvokeOptions): Promise<ListBotConnectionServiceProvidersResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:botservice/v20210501preview:listBotConnectionServiceProviders", {
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
    readonly value: types.outputs.botservice.v20210501preview.ServiceProviderResponse[];
}
/**
 * Lists the available Service Providers for creating Connection Settings
 */
export function listBotConnectionServiceProvidersOutput(opts?: pulumi.InvokeOptions): pulumi.Output<ListBotConnectionServiceProvidersResult> {
    return pulumi.output(listBotConnectionServiceProviders(opts))
}
