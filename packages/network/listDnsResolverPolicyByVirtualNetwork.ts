import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists DNS resolver policy resource IDs linked to a virtual network.
 * Azure REST API version: 2023-07-01-preview.
 */
export function listDnsResolverPolicyByVirtualNetwork(args: ListDnsResolverPolicyByVirtualNetworkArgs, opts?: pulumi.InvokeOptions): Promise<ListDnsResolverPolicyByVirtualNetworkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:listDnsResolverPolicyByVirtualNetwork", {
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworkName": args.virtualNetworkName,
    }, opts);
}

export interface ListDnsResolverPolicyByVirtualNetworkArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the virtual network.
     */
    virtualNetworkName: string;
}

/**
 * The response to an enumeration operation on sub-resources.
 */
export interface ListDnsResolverPolicyByVirtualNetworkResult {
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
 * Lists DNS resolver policy resource IDs linked to a virtual network.
 * Azure REST API version: 2023-07-01-preview.
 */
export function listDnsResolverPolicyByVirtualNetworkOutput(args: ListDnsResolverPolicyByVirtualNetworkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListDnsResolverPolicyByVirtualNetworkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:listDnsResolverPolicyByVirtualNetwork", {
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworkName": args.virtualNetworkName,
    }, opts);
}

export interface ListDnsResolverPolicyByVirtualNetworkOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the virtual network.
     */
    virtualNetworkName: pulumi.Input<string>;
}