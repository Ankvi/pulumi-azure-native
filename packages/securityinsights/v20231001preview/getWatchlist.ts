import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a watchlist, without its watchlist items.
 */
export function getWatchlist(args: GetWatchlistArgs, opts?: pulumi.InvokeOptions): Promise<GetWatchlistResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights/v20231001preview:getWatchlist", {
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
     * Watchlist Alias
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
     * The content type of the raw content. Example : text/csv or text/tsv 
     */
    readonly contentType?: string;
    /**
     * The time the watchlist was created
     */
    readonly created?: string;
    /**
     * Describes a user that created the watchlist
     */
    readonly createdBy?: types.outputs.WatchlistUserInfoResponse;
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
     * The number of lines in a csv/tsv content to skip before the header
     */
    readonly numberOfLinesToSkip?: number;
    /**
     * The provider of the watchlist
     */
    readonly provider: string;
    /**
     * The raw content that represents to watchlist items to create. In case of csv/tsv content type, it's the content of the file that will parsed by the endpoint
     */
    readonly rawContent?: string;
    /**
     * The filename of the watchlist, called 'source'
     */
    readonly source?: string;
    /**
     * The sourceType of the watchlist
     */
    readonly sourceType?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
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
    readonly updatedBy?: types.outputs.WatchlistUserInfoResponse;
    /**
     * The status of the Watchlist upload : New, InProgress or Complete. Pls note : When a Watchlist upload status is equal to InProgress, the Watchlist cannot be deleted
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
 * Gets a watchlist, without its watchlist items.
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
     * Watchlist Alias
     */
    watchlistAlias: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}