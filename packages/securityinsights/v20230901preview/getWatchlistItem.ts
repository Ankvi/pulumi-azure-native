import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a watchlist, without its watchlist items.
 */
export function getWatchlistItem(args: GetWatchlistItemArgs, opts?: pulumi.InvokeOptions): Promise<GetWatchlistItemResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights/v20230901preview:getWatchlistItem", {
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
     * Watchlist Alias
     */
    watchlistAlias: string;
    /**
     * Watchlist Item Id (GUID)
     */
    watchlistItemId: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * Represents a Watchlist item in Azure Security Insights.
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
 * Gets a watchlist, without its watchlist items.
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
     * Watchlist Alias
     */
    watchlistAlias: pulumi.Input<string>;
    /**
     * Watchlist Item Id (GUID)
     */
    watchlistItemId: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}