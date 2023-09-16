import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets a watchlist, without its watchlist items.
 */
export function getWatchlist(args: GetWatchlistArgs, opts?: pulumi.InvokeOptions): Promise<GetWatchlistResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights/v20190101preview:getWatchlist", {
        "operationalInsightsResourceProvider": args.operationalInsightsResourceProvider,
        "resourceGroupName": args.resourceGroupName,
        "watchlistAlias": args.watchlistAlias,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetWatchlistArgs {
    /**
     * The namespace of workspaces resource provider- Microsoft.OperationalInsights.
     */
    operationalInsightsResourceProvider: string;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
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
    readonly createdBy?: types.outputs.securityinsights.v20190101preview.WatchlistUserInfoResponse;
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
     * Azure resource Id
     */
    readonly id: string;
    /**
     * A flag that indicates if the watchlist is deleted or not
     */
    readonly isDeleted?: boolean;
    /**
     * List of labels relevant to this watchlist
     */
    readonly labels?: string[];
    /**
     * Azure resource name
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
     * The source of the watchlist
     */
    readonly source: string;
    /**
     * The tenantId where the watchlist belongs to
     */
    readonly tenantId?: string;
    /**
     * Azure resource type
     */
    readonly type: string;
    /**
     * The last time the watchlist was updated
     */
    readonly updated?: string;
    /**
     * Describes a user that updated the watchlist
     */
    readonly updatedBy?: types.outputs.securityinsights.v20190101preview.WatchlistUserInfoResponse;
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
     * The number of Watchlist Items in the Watchlist
     */
    readonly watchlistItemsCount?: number;
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
     * The namespace of workspaces resource provider- Microsoft.OperationalInsights.
     */
    operationalInsightsResourceProvider: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
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
