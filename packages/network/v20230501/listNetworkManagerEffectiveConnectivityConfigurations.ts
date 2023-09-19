import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List all effective connectivity configurations applied on a virtual network.
 */
export function listNetworkManagerEffectiveConnectivityConfigurations(args: ListNetworkManagerEffectiveConnectivityConfigurationsArgs, opts?: pulumi.InvokeOptions): Promise<ListNetworkManagerEffectiveConnectivityConfigurationsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230501:listNetworkManagerEffectiveConnectivityConfigurations", {
        "resourceGroupName": args.resourceGroupName,
        "skipToken": args.skipToken,
        "top": args.top,
        "virtualNetworkName": args.virtualNetworkName,
    }, opts);
}

export interface ListNetworkManagerEffectiveConnectivityConfigurationsArgs {
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
    /**
     * The name of the virtual network.
     */
    virtualNetworkName: string;
}

/**
 * Result of the request to list networkManagerEffectiveConnectivityConfiguration. It contains a list of groups and a skiptoken to get the next set of results.
 */
export interface ListNetworkManagerEffectiveConnectivityConfigurationsResult {
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
 */
export function listNetworkManagerEffectiveConnectivityConfigurationsOutput(args: ListNetworkManagerEffectiveConnectivityConfigurationsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListNetworkManagerEffectiveConnectivityConfigurationsResult> {
    return pulumi.output(args).apply((a: any) => listNetworkManagerEffectiveConnectivityConfigurations(a, opts))
}

export interface ListNetworkManagerEffectiveConnectivityConfigurationsOutputArgs {
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
    /**
     * The name of the virtual network.
     */
    virtualNetworkName: pulumi.Input<string>;
}
