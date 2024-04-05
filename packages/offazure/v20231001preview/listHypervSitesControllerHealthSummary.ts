import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Method to get site health summary.
 */
export function listHypervSitesControllerHealthSummary(args: ListHypervSitesControllerHealthSummaryArgs, opts?: pulumi.InvokeOptions): Promise<ListHypervSitesControllerHealthSummaryResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:offazure/v20231001preview:listHypervSitesControllerHealthSummary", {
        "resourceGroupName": args.resourceGroupName,
        "siteName": args.siteName,
    }, opts);
}

export interface ListHypervSitesControllerHealthSummaryArgs {
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
export interface ListHypervSitesControllerHealthSummaryResult {
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
 */
export function listHypervSitesControllerHealthSummaryOutput(args: ListHypervSitesControllerHealthSummaryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListHypervSitesControllerHealthSummaryResult> {
    return pulumi.output(args).apply((a: any) => listHypervSitesControllerHealthSummary(a, opts))
}

export interface ListHypervSitesControllerHealthSummaryOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Site name
     */
    siteName: pulumi.Input<string>;
}