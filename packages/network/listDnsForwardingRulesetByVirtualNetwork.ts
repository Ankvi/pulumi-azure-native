import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists DNS forwarding ruleset resource IDs attached to a virtual network.
 * Azure REST API version: 2022-07-01.
 */
export function listDnsForwardingRulesetByVirtualNetwork(args: ListDnsForwardingRulesetByVirtualNetworkArgs, opts?: pulumi.InvokeOptions): Promise<ListDnsForwardingRulesetByVirtualNetworkResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:listDnsForwardingRulesetByVirtualNetwork", {
        "resourceGroupName": args.resourceGroupName,
        "top": args.top,
        "virtualNetworkName": args.virtualNetworkName,
    }, opts);
}

export interface ListDnsForwardingRulesetByVirtualNetworkArgs {
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
 * The response to an enumeration operation on Virtual Network DNS Forwarding Ruleset.
 */
export interface ListDnsForwardingRulesetByVirtualNetworkResult {
    /**
     * The continuation token for the next page of results.
     */
    readonly nextLink: string;
    /**
     * Enumeration of the Virtual Network DNS Forwarding Ruleset.
     */
    readonly value?: types.outputs.VirtualNetworkDnsForwardingRulesetResponse[];
}
/**
 * Lists DNS forwarding ruleset resource IDs attached to a virtual network.
 * Azure REST API version: 2022-07-01.
 */
export function listDnsForwardingRulesetByVirtualNetworkOutput(args: ListDnsForwardingRulesetByVirtualNetworkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListDnsForwardingRulesetByVirtualNetworkResult> {
    return pulumi.output(args).apply((a: any) => listDnsForwardingRulesetByVirtualNetwork(a, opts))
}

export interface ListDnsForwardingRulesetByVirtualNetworkOutputArgs {
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
