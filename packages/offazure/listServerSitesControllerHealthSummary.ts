import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Method to get site health summary.
 * Azure REST API version: 2023-06-06.
 */
export function listServerSitesControllerHealthSummary(args: ListServerSitesControllerHealthSummaryArgs, opts?: pulumi.InvokeOptions): Promise<ListServerSitesControllerHealthSummaryResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:offazure:listServerSitesControllerHealthSummary", {
        "resourceGroupName": args.resourceGroupName,
        "siteName": args.siteName,
    }, opts);
}

export interface ListServerSitesControllerHealthSummaryArgs {
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
export interface ListServerSitesControllerHealthSummaryResult {
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
 */
export function listServerSitesControllerHealthSummaryOutput(args: ListServerSitesControllerHealthSummaryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListServerSitesControllerHealthSummaryResult> {
    return pulumi.output(args).apply((a: any) => listServerSitesControllerHealthSummary(a, opts))
}

export interface ListServerSitesControllerHealthSummaryOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Site name
     */
    siteName: pulumi.Input<string>;
}
