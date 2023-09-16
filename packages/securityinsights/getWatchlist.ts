import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a watchlist, without its watchlist items.
 * Azure REST API version: 2023-02-01.
 */
export function getWatchlist(args: GetWatchlistArgs, opts?: pulumi.InvokeOptions): Promise<GetWatchlistResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights:getWatchlist", {
        "resourceGroupName": args.resourceGroupName,
        "watchlistAlias": args.watchlistAlias,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetWatchlistArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The watchlist alias
     */
    watchlistAlias: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * Represents a Watchlist in Azure Security Insights.
 */
export interface GetWatchlistResult {
    /**
     * The content type of the raw content. For now, only text/csv is valid
     */
    readonly contentType?: string;
    /**
     * The time the watchlist was created
     */
    readonly created?: string;
    /**
     * Describes a user that created the watchlist
     */
    readonly createdBy?: types.outputs.securityinsights.WatchlistUserInfoResponse;
    /**
     * The default duration of a watchlist (in ISO 8601 duration format)
     */
    readonly defaultDuration?: string;
    /**
     * A description of the watchlist
     */
    readonly description?: string;
    /**
     * The display name of the watchlist
     */
    readonly displayName: string;
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * A flag that indicates if the watchlist is deleted or not
     */
    readonly isDeleted?: boolean;
    /**
     * The search key is used to optimize query performance when using watchlists for joins with other data. For example, enable a column with IP addresses to be the designated SearchKey field, then use this field as the key field when joining to other event data by IP address.
     */
    readonly itemsSearchKey: string;
    /**
     * List of labels relevant to this watchlist
     */
    readonly labels?: string[];
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The number of lines in a csv content to skip before the header
     */
    readonly numberOfLinesToSkip?: number;
    /**
     * The provider of the watchlist
     */
    readonly provider: string;
    /**
     * The raw content that represents to watchlist items to create. Example : This line will be skipped
     * header1,header2
     * value1,value2
     */
    readonly rawContent?: string;
    /**
     * The source of the watchlist
     */
    readonly source: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.securityinsights.SystemDataResponse;
    /**
     * The tenantId where the watchlist belongs to
     */
    readonly tenantId?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The last time the watchlist was updated
     */
    readonly updated?: string;
    /**
     * Describes a user that updated the watchlist
     */
    readonly updatedBy?: types.outputs.securityinsights.WatchlistUserInfoResponse;
    /**
     * The status of the Watchlist upload : New, InProgress or Complete. **Note** : When a Watchlist upload status is InProgress, the Watchlist cannot be deleted
     */
    readonly uploadStatus?: string;
    /**
     * The alias of the watchlist
     */
    readonly watchlistAlias?: string;
    /**
     * The id (a Guid) of the watchlist
     */
    readonly watchlistId?: string;
    /**
     * The type of the watchlist
     */
    readonly watchlistType?: string;
}
/**
 * Get a watchlist, without its watchlist items.
 * Azure REST API version: 2023-02-01.
 */
export function getWatchlistOutput(args: GetWatchlistOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWatchlistResult> {
    return pulumi.output(args).apply((a: any) => getWatchlist(a, opts))
}

export interface GetWatchlistOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The watchlist alias
     */
    watchlistAlias: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
