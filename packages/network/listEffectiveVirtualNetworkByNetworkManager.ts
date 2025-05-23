import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List effective virtual networks in a network manager.
 *
 * Uses Azure REST API version 2022-04-01-preview.
 *
 * Other available API versions: 2021-02-01-preview, 2022-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listEffectiveVirtualNetworkByNetworkManager(args: ListEffectiveVirtualNetworkByNetworkManagerArgs, opts?: pulumi.InvokeOptions): Promise<ListEffectiveVirtualNetworkByNetworkManagerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:listEffectiveVirtualNetworkByNetworkManager", {
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
 *
 * Uses Azure REST API version 2022-04-01-preview.
 *
 * Other available API versions: 2021-02-01-preview, 2022-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listEffectiveVirtualNetworkByNetworkManagerOutput(args: ListEffectiveVirtualNetworkByNetworkManagerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListEffectiveVirtualNetworkByNetworkManagerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:listEffectiveVirtualNetworkByNetworkManager", {
        "conditionalMembers": args.conditionalMembers,
        "networkManagerName": args.networkManagerName,
        "resourceGroupName": args.resourceGroupName,
        "skipToken": args.skipToken,
        "top": args.top,
    }, opts);
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