import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Method to get site health summary.
 * Azure REST API version: 2023-06-06.
 *
 * Other available API versions: 2023-10-01-preview.
 */
export function listSitesControllerHealthSummary(args: ListSitesControllerHealthSummaryArgs, opts?: pulumi.InvokeOptions): Promise<ListSitesControllerHealthSummaryResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:offazure:listSitesControllerHealthSummary", {
        "resourceGroupName": args.resourceGroupName,
        "siteName": args.siteName,
    }, opts);
}

export interface ListSitesControllerHealthSummaryArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Site name
     */
    siteName: string;
}

/**
 * Collection of SiteHealthSummary.
 */
export interface ListSitesControllerHealthSummaryResult {
    /**
     * Gets the value of next link.
     */
    readonly nextLink: string;
    /**
     * Gets the list of SiteHealthSummary.
     */
    readonly value: types.outputs.SiteHealthSummaryResponse[];
}
/**
 * Method to get site health summary.
 * Azure REST API version: 2023-06-06.
 *
 * Other available API versions: 2023-10-01-preview.
 */
export function listSitesControllerHealthSummaryOutput(args: ListSitesControllerHealthSummaryOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListSitesControllerHealthSummaryResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:offazure:listSitesControllerHealthSummary", {
        "resourceGroupName": args.resourceGroupName,
        "siteName": args.siteName,
    }, opts);
}

export interface ListSitesControllerHealthSummaryOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Site name
     */
    siteName: pulumi.Input<string>;
}