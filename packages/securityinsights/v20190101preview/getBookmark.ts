import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets a bookmark.
 */
export function getBookmark(args: GetBookmarkArgs, opts?: pulumi.InvokeOptions): Promise<GetBookmarkResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights/v20190101preview:getBookmark", {
        "bookmarkId": args.bookmarkId,
        "operationalInsightsResourceProvider": args.operationalInsightsResourceProvider,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetBookmarkArgs {
    /**
     * Bookmark ID
     */
    bookmarkId: string;
    /**
     * The namespace of workspaces resource provider- Microsoft.OperationalInsights.
     */
    operationalInsightsResourceProvider: string;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * Represents a bookmark in Azure Security Insights.
 */
export interface GetBookmarkResult {
    /**
     * The time the bookmark was created
     */
    readonly created?: string;
    /**
     * Describes a user that created the bookmark
     */
    readonly createdBy?: types.outputs.securityinsights.v20190101preview.UserInfoResponse;
    /**
     * The display name of the bookmark
     */
    readonly displayName: string;
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * The bookmark event time
     */
    readonly eventTime?: string;
    /**
     * Azure resource Id
     */
    readonly id: string;
    /**
     * Describes an incident that relates to bookmark
     */
    readonly incidentInfo?: types.outputs.securityinsights.v20190101preview.IncidentInfoResponse;
    /**
     * List of labels relevant to this bookmark
     */
    readonly labels?: string[];
    /**
     * Azure resource name
     */
    readonly name: string;
    /**
     * The notes of the bookmark
     */
    readonly notes?: string;
    /**
     * The query of the bookmark.
     */
    readonly query: string;
    /**
     * The end time for the query
     */
    readonly queryEndTime?: string;
    /**
     * The query result of the bookmark.
     */
    readonly queryResult?: string;
    /**
     * The start time for the query
     */
    readonly queryStartTime?: string;
    /**
     * Azure resource type
     */
    readonly type: string;
    /**
     * The last time the bookmark was updated
     */
    readonly updated?: string;
    /**
     * Describes a user that updated the bookmark
     */
    readonly updatedBy?: types.outputs.securityinsights.v20190101preview.UserInfoResponse;
}
/**
 * Gets a bookmark.
 */
export function getBookmarkOutput(args: GetBookmarkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBookmarkResult> {
    return pulumi.output(args).apply((a: any) => getBookmark(a, opts))
}

export interface GetBookmarkOutputArgs {
    /**
     * Bookmark ID
     */
    bookmarkId: pulumi.Input<string>;
    /**
     * The namespace of workspaces resource provider- Microsoft.OperationalInsights.
     */
    operationalInsightsResourceProvider: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
