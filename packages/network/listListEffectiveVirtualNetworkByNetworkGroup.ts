import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists all effective virtual networks by specified network group.
 *
 * Uses Azure REST API version 2022-04-01-preview.
 *
 * Other available API versions: 2021-05-01-preview.
 */
export function listListEffectiveVirtualNetworkByNetworkGroup(args: ListListEffectiveVirtualNetworkByNetworkGroupArgs, opts?: pulumi.InvokeOptions): Promise<ListListEffectiveVirtualNetworkByNetworkGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:listListEffectiveVirtualNetworkByNetworkGroup", {
        "networkGroupName": args.networkGroupName,
        "networkManagerName": args.networkManagerName,
        "resourceGroupName": args.resourceGroupName,
        "skipToken": args.skipToken,
    }, opts);
}

export interface ListListEffectiveVirtualNetworkByNetworkGroupArgs {
    /**
     * The name of the network group.
     */
    networkGroupName: string;
    /**
     * The name of the network manager.
     */
    networkManagerName: string;
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
 * Result of the request to list Effective Virtual Network. It contains a list of groups and a URL link to get the next set of results.
 */
export interface ListListEffectiveVirtualNetworkByNetworkGroupResult {
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
 * Lists all effective virtual networks by specified network group.
 *
 * Uses Azure REST API version 2022-04-01-preview.
 *
 * Other available API versions: 2021-05-01-preview.
 */
export function listListEffectiveVirtualNetworkByNetworkGroupOutput(args: ListListEffectiveVirtualNetworkByNetworkGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListListEffectiveVirtualNetworkByNetworkGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:listListEffectiveVirtualNetworkByNetworkGroup", {
        "networkGroupName": args.networkGroupName,
        "networkManagerName": args.networkManagerName,
        "resourceGroupName": args.resourceGroupName,
        "skipToken": args.skipToken,
    }, opts);
}

export interface ListListEffectiveVirtualNetworkByNetworkGroupOutputArgs {
    /**
     * The name of the network group.
     */
    networkGroupName: pulumi.Input<string>;
    /**
     * The name of the network manager.
     */
    networkManagerName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
     */
    skipToken?: pulumi.Input<string>;
}