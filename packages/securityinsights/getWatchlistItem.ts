import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a watchlist item.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2021-04-01, 2023-06-01-preview, 2023-07-01-preview, 2023-08-01-preview, 2023-09-01-preview.
 */
export function getWatchlistItem(args: GetWatchlistItemArgs, opts?: pulumi.InvokeOptions): Promise<GetWatchlistItemResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights:getWatchlistItem", {
        "resourceGroupName": args.resourceGroupName,
        "watchlistAlias": args.watchlistAlias,
        "watchlistItemId": args.watchlistItemId,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetWatchlistItemArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The watchlist alias
     */
    watchlistAlias: string;
    /**
     * The watchlist item id (GUID)
     */
    watchlistItemId: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * Represents a Watchlist Item in Azure Security Insights.
 */
export interface GetWatchlistItemResult {
    /**
     * The time the watchlist item was created
     */
    readonly created?: string;
    /**
     * Describes a user that created the watchlist item
     */
    readonly createdBy?: types.outputs.WatchlistUserInfoResponse;
    /**
     * key-value pairs for a watchlist item entity mapping
     */
    readonly entityMapping?: any;
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * A flag that indicates if the watchlist item is deleted or not
     */
    readonly isDeleted?: boolean;
    /**
     * key-value pairs for a watchlist item
     */
    readonly itemsKeyValue: any;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The tenantId to which the watchlist item belongs to
     */
    readonly tenantId?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The last time the watchlist item was updated
     */
    readonly updated?: string;
    /**
     * Describes a user that updated the watchlist item
     */
    readonly updatedBy?: types.outputs.WatchlistUserInfoResponse;
    /**
     * The id (a Guid) of the watchlist item
     */
    readonly watchlistItemId?: string;
    /**
     * The type of the watchlist item
     */
    readonly watchlistItemType?: string;
}
/**
 * Get a watchlist item.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2021-04-01, 2023-06-01-preview, 2023-07-01-preview, 2023-08-01-preview, 2023-09-01-preview.
 */
export function getWatchlistItemOutput(args: GetWatchlistItemOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWatchlistItemResult> {
    return pulumi.output(args).apply((a: any) => getWatchlistItem(a, opts))
}

export interface GetWatchlistItemOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The watchlist alias
     */
    watchlistAlias: pulumi.Input<string>;
    /**
     * The watchlist item id (GUID)
     */
    watchlistItemId: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
