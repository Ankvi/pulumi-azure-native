import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists active connectivity configurations in a network manager.
 * Azure REST API version: 2021-02-01-preview.
 */
export function listActiveConnectivityConfiguration(args: ListActiveConnectivityConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<ListActiveConnectivityConfigurationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:listActiveConnectivityConfiguration", {
        "networkManagerName": args.networkManagerName,
        "regions": args.regions,
        "resourceGroupName": args.resourceGroupName,
        "skipToken": args.skipToken,
    }, opts);
}

export interface ListActiveConnectivityConfigurationArgs {
    /**
     * The name of the network manager.
     */
    networkManagerName: string;
    /**
     * List of regions.
     */
    regions?: string[];
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
     */
    skipToken?: string;
}

/**
 * Result of the request to list active connectivity configurations. It contains a list of active connectivity configurations and a skiptoken to get the next set of results.
 */
export interface ListActiveConnectivityConfigurationResult {
    /**
     * When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
     */
    readonly skipToken?: string;
    /**
     * Gets a page of active connectivity configurations.
     */
    readonly value?: types.outputs.ActiveConnectivityConfigurationResponse[];
}
/**
 * Lists active connectivity configurations in a network manager.
 * Azure REST API version: 2021-02-01-preview.
 */
export function listActiveConnectivityConfigurationOutput(args: ListActiveConnectivityConfigurationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListActiveConnectivityConfigurationResult> {
    return pulumi.output(args).apply((a: any) => listActiveConnectivityConfiguration(a, opts))
}

export interface ListActiveConnectivityConfigurationOutputArgs {
    /**
     * The name of the network manager.
     */
    networkManagerName: pulumi.Input<string>;
    /**
     * List of regions.
     */
    regions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
     */
    skipToken?: pulumi.Input<string>;
}