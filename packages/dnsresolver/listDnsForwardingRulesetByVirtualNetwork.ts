import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists DNS forwarding ruleset resource IDs attached to a virtual network.
 *
 * Uses Azure REST API version 2023-07-01-preview.
 *
 * Other available API versions: 2020-04-01-preview, 2022-07-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native dnsresolver [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listDnsForwardingRulesetByVirtualNetwork(args: ListDnsForwardingRulesetByVirtualNetworkArgs, opts?: pulumi.InvokeOptions): Promise<ListDnsForwardingRulesetByVirtualNetworkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dnsresolver:listDnsForwardingRulesetByVirtualNetwork", {
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
 *
 * Uses Azure REST API version 2023-07-01-preview.
 *
 * Other available API versions: 2020-04-01-preview, 2022-07-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native dnsresolver [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listDnsForwardingRulesetByVirtualNetworkOutput(args: ListDnsForwardingRulesetByVirtualNetworkOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListDnsForwardingRulesetByVirtualNetworkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:dnsresolver:listDnsForwardingRulesetByVirtualNetwork", {
        "resourceGroupName": args.resourceGroupName,
        "top": args.top,
        "virtualNetworkName": args.virtualNetworkName,
    }, opts);
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