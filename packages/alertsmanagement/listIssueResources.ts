import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List all resources in the issue - this method uses pagination to return all resources
 *
 * Uses Azure REST API version 2025-03-01-preview.
 */
export function listIssueResources(args: ListIssueResourcesArgs, opts?: pulumi.InvokeOptions): Promise<ListIssueResourcesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:alertsmanagement:listIssueResources", {
        "filter": args.filter,
        "issueName": args.issueName,
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface ListIssueResourcesArgs {
    /**
     * The filter to apply on the operation. For example, to filter by relevance, use "$filter=relevance eq 'Relevant'"
     */
    filter?: string;
    /**
     * The name of the IssueResource
     */
    issueName: string;
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: string;
}

/**
 * Paged collection of RelatedResource items
 */
export interface ListIssueResourcesResult {
    /**
     * The link to the next page of items
     */
    readonly nextLink?: string;
    /**
     * The RelatedResource items on this page
     */
    readonly value: types.outputs.RelatedResourceResponse[];
}
/**
 * List all resources in the issue - this method uses pagination to return all resources
 *
 * Uses Azure REST API version 2025-03-01-preview.
 */
export function listIssueResourcesOutput(args: ListIssueResourcesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListIssueResourcesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:alertsmanagement:listIssueResources", {
        "filter": args.filter,
        "issueName": args.issueName,
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface ListIssueResourcesOutputArgs {
    /**
     * The filter to apply on the operation. For example, to filter by relevance, use "$filter=relevance eq 'Relevant'"
     */
    filter?: pulumi.Input<string>;
    /**
     * The name of the IssueResource
     */
    issueName: pulumi.Input<string>;
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: pulumi.Input<string>;
}