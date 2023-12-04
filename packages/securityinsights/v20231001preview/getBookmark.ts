import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a bookmark.
 */
export function getBookmark(args: GetBookmarkArgs, opts?: pulumi.InvokeOptions): Promise<GetBookmarkResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights/v20231001preview:getBookmark", {
        "bookmarkId": args.bookmarkId,
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
     * The name of the resource group. The name is case insensitive.
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
    readonly createdBy?: types.outputs.UserInfoResponse;
    /**
     * The display name of the bookmark
     */
    readonly displayName: string;
    /**
     * Describes the entity mappings of the bookmark
     */
    readonly entityMappings?: types.outputs.BookmarkEntityMappingsResponse[];
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * The bookmark event time
     */
    readonly eventTime?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Describes an incident that relates to bookmark
     */
    readonly incidentInfo?: types.outputs.IncidentInfoResponse;
    /**
     * List of labels relevant to this bookmark
     */
    readonly labels?: string[];
    /**
     * The name of the resource
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
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * A list of relevant mitre attacks
     */
    readonly tactics?: string[];
    /**
     * A list of relevant mitre techniques
     */
    readonly techniques?: string[];
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The last time the bookmark was updated
     */
    readonly updated?: string;
    /**
     * Describes a user that updated the bookmark
     */
    readonly updatedBy?: types.outputs.UserInfoResponse;
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
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}