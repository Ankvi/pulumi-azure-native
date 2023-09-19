import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List effective virtual networks in a network manager.
 */
export function listEffectiveVirtualNetworkByNetworkManager(args: ListEffectiveVirtualNetworkByNetworkManagerArgs, opts?: pulumi.InvokeOptions): Promise<ListEffectiveVirtualNetworkByNetworkManagerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20220401preview:listEffectiveVirtualNetworkByNetworkManager", {
        "conditionalMembers": args.conditionalMembers,
        "networkManagerName": args.networkManagerName,
        "resourceGroupName": args.resourceGroupName,
        "skipToken": args.skipToken,
        "top": args.top,
    }, opts);
}

export interface ListEffectiveVirtualNetworkByNetworkManagerArgs {
    /**
     * Conditional Members.
     */
    conditionalMembers?: string;
    /**
     * The name of the network manager.
     */
    networkManagerName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * Continuation token for pagination, capturing the next page size and offset, as well as the context of the query.
     */
    skipToken?: string;
    /**
     * An optional query parameter which specifies the maximum number of records to be returned by the server.
     */
    top?: number;
}

/**
 * Result of the request to list Effective Virtual Network. It contains a list of groups and a URL link to get the next set of results.
 */
export interface ListEffectiveVirtualNetworkByNetworkManagerResult {
    /**
     * When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
     */
    readonly skipToken?: string;
    /**
     * Gets a page of EffectiveVirtualNetwork
     */
    readonly value?: types.outputs.EffectiveVirtualNetworkResponse[];
}
/**
 * List effective virtual networks in a network manager.
 */
export function listEffectiveVirtualNetworkByNetworkManagerOutput(args: ListEffectiveVirtualNetworkByNetworkManagerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListEffectiveVirtualNetworkByNetworkManagerResult> {
    return pulumi.output(args).apply((a: any) => listEffectiveVirtualNetworkByNetworkManager(a, opts))
}

export interface ListEffectiveVirtualNetworkByNetworkManagerOutputArgs {
    /**
     * Conditional Members.
     */
    conditionalMembers?: pulumi.Input<string>;
    /**
     * The name of the network manager.
     */
    networkManagerName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Continuation token for pagination, capturing the next page size and offset, as well as the context of the query.
     */
    skipToken?: pulumi.Input<string>;
    /**
     * An optional query parameter which specifies the maximum number of records to be returned by the server.
     */
    top?: pulumi.Input<number>;
}
