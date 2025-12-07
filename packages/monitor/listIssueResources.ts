import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List all resources in the issue - this method uses pagination to return all resources
 *
 * Uses Azure REST API version 2025-05-03-preview.
 */
export function listIssueResources(args: ListIssueResourcesArgs, opts?: pulumi.InvokeOptions): Promise<ListIssueResourcesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:monitor:listIssueResources", {
        "azureMonitorWorkspaceName": args.azureMonitorWorkspaceName,
        "filter": args.filter,
        "issueName": args.issueName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListIssueResourcesArgs {
    /**
     * The name of the Azure Monitor Workspace. The name is case insensitive
     */
    azureMonitorWorkspaceName: string;
    /**
     * The filter to apply on the operation. For example, to filter by relevance, use "$filter=relevance eq 'Relevant'". Note: this property is currently a placeholder and is not in use.
     */
    filter?: string;
    /**
     * The name of the IssueResource
     */
    issueName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
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
 * Uses Azure REST API version 2025-05-03-preview.
 */
export function listIssueResourcesOutput(args: ListIssueResourcesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListIssueResourcesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:monitor:listIssueResources", {
        "azureMonitorWorkspaceName": args.azureMonitorWorkspaceName,
        "filter": args.filter,
        "issueName": args.issueName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListIssueResourcesOutputArgs {
    /**
     * The name of the Azure Monitor Workspace. The name is case insensitive
     */
    azureMonitorWorkspaceName: pulumi.Input<string>;
    /**
     * The filter to apply on the operation. For example, to filter by relevance, use "$filter=relevance eq 'Relevant'". Note: this property is currently a placeholder and is not in use.
     */
    filter?: pulumi.Input<string>;
    /**
     * The name of the IssueResource
     */
    issueName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}