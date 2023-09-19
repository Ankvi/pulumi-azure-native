import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists active connectivity configurations in a network manager.
 */
export function listActiveConnectivityConfigurations(args: ListActiveConnectivityConfigurationsArgs, opts?: pulumi.InvokeOptions): Promise<ListActiveConnectivityConfigurationsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230401:listActiveConnectivityConfigurations", {
        "networkManagerName": args.networkManagerName,
        "regions": args.regions,
        "resourceGroupName": args.resourceGroupName,
        "skipToken": args.skipToken,
        "top": args.top,
    }, opts);
}

export interface ListActiveConnectivityConfigurationsArgs {
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
    /**
     * An optional query parameter which specifies the maximum number of records to be returned by the server.
     */
    top?: number;
}

/**
 * Result of the request to list active connectivity configurations. It contains a list of active connectivity configurations and a skiptoken to get the next set of results.
 */
export interface ListActiveConnectivityConfigurationsResult {
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
 */
export function listActiveConnectivityConfigurationsOutput(args: ListActiveConnectivityConfigurationsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListActiveConnectivityConfigurationsResult> {
    return pulumi.output(args).apply((a: any) => listActiveConnectivityConfigurations(a, opts))
}

export interface ListActiveConnectivityConfigurationsOutputArgs {
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
    /**
     * An optional query parameter which specifies the maximum number of records to be returned by the server.
     */
    top?: pulumi.Input<number>;
}
