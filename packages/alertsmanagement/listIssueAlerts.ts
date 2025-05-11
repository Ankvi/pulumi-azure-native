import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List all alerts in the issue - this method uses pagination to return all alerts
 *
 * Uses Azure REST API version 2025-03-01-preview.
 */
export function listIssueAlerts(args: ListIssueAlertsArgs, opts?: pulumi.InvokeOptions): Promise<ListIssueAlertsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:alertsmanagement:listIssueAlerts", {
        "filter": args.filter,
        "issueName": args.issueName,
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface ListIssueAlertsArgs {
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
 * Paged collection of RelatedAlert items
 */
export interface ListIssueAlertsResult {
    /**
     * The link to the next page of items
     */
    readonly nextLink?: string;
    /**
     * The RelatedAlert items on this page
     */
    readonly value: types.outputs.RelatedAlertResponse[];
}
/**
 * List all alerts in the issue - this method uses pagination to return all alerts
 *
 * Uses Azure REST API version 2025-03-01-preview.
 */
export function listIssueAlertsOutput(args: ListIssueAlertsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListIssueAlertsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:alertsmanagement:listIssueAlerts", {
        "filter": args.filter,
        "issueName": args.issueName,
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface ListIssueAlertsOutputArgs {
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