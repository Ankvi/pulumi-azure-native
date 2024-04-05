import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Method to get site health summary.
 */
export function listSitesControllerHealthSummary(args: ListSitesControllerHealthSummaryArgs, opts?: pulumi.InvokeOptions): Promise<ListSitesControllerHealthSummaryResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:offazure/v20230606:listSitesControllerHealthSummary", {
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
 */
export function listSitesControllerHealthSummaryOutput(args: ListSitesControllerHealthSummaryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListSitesControllerHealthSummaryResult> {
    return pulumi.output(args).apply((a: any) => listSitesControllerHealthSummary(a, opts))
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