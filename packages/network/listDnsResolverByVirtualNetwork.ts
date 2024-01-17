import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists DNS resolver resource IDs linked to a virtual network.
 * Azure REST API version: 2022-07-01.
 *
 * Other available API versions: 2020-04-01-preview.
 */
export function listDnsResolverByVirtualNetwork(args: ListDnsResolverByVirtualNetworkArgs, opts?: pulumi.InvokeOptions): Promise<ListDnsResolverByVirtualNetworkResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:listDnsResolverByVirtualNetwork", {
        "resourceGroupName": args.resourceGroupName,
        "top": args.top,
        "virtualNetworkName": args.virtualNetworkName,
    }, opts);
}

export interface ListDnsResolverByVirtualNetworkArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The maximum number of results to return. If not specified, returns up to 100 results.
     */
    top?: number;
    /**
     * The name of the virtual network.
     */
    virtualNetworkName: string;
}

/**
 * The response to an enumeration operation on sub-resources.
 */
export interface ListDnsResolverByVirtualNetworkResult {
    /**
     * The continuation token for the next page of results.
     */
    readonly nextLink: string;
    /**
     * Enumeration of the sub-resources.
     */
    readonly value?: types.outputs.SubResourceResponse[];
}
/**
 * Lists DNS resolver resource IDs linked to a virtual network.
 * Azure REST API version: 2022-07-01.
 *
 * Other available API versions: 2020-04-01-preview.
 */
export function listDnsResolverByVirtualNetworkOutput(args: ListDnsResolverByVirtualNetworkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListDnsResolverByVirtualNetworkResult> {
    return pulumi.output(args).apply((a: any) => listDnsResolverByVirtualNetwork(a, opts))
}

export interface ListDnsResolverByVirtualNetworkOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The maximum number of results to return. If not specified, returns up to 100 results.
     */
    top?: pulumi.Input<number>;
    /**
     * The name of the virtual network.
     */
    virtualNetworkName: pulumi.Input<string>;
}