import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List all effective connectivity configurations applied on a virtual network.
 * Azure REST API version: 2021-02-01-preview.
 */
export function listEffectiveConnectivityConfiguration(args: ListEffectiveConnectivityConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<ListEffectiveConnectivityConfigurationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:listEffectiveConnectivityConfiguration", {
        "resourceGroupName": args.resourceGroupName,
        "skipToken": args.skipToken,
        "virtualNetworkName": args.virtualNetworkName,
    }, opts);
}

export interface ListEffectiveConnectivityConfigurationArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
     */
    skipToken?: string;
    /**
     * The name of the virtual network.
     */
    virtualNetworkName: string;
}

/**
 * Result of the request to list networkManagerEffectiveConnectivityConfiguration. It contains a list of groups and a skiptoken to get the next set of results.
 */
export interface ListEffectiveConnectivityConfigurationResult {
    /**
     * When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
     */
    readonly skipToken?: string;
    /**
     * Gets a page of NetworkManagerEffectiveConnectivityConfiguration
     */
    readonly value?: types.outputs.EffectiveConnectivityConfigurationResponse[];
}
/**
 * List all effective connectivity configurations applied on a virtual network.
 * Azure REST API version: 2021-02-01-preview.
 */
export function listEffectiveConnectivityConfigurationOutput(args: ListEffectiveConnectivityConfigurationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListEffectiveConnectivityConfigurationResult> {
    return pulumi.output(args).apply((a: any) => listEffectiveConnectivityConfiguration(a, opts))
}

export interface ListEffectiveConnectivityConfigurationOutputArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
     */
    skipToken?: pulumi.Input<string>;
    /**
     * The name of the virtual network.
     */
    virtualNetworkName: pulumi.Input<string>;
}