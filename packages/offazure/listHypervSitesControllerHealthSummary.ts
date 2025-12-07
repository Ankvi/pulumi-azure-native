import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Method to get site health summary.
 *
 * Uses Azure REST API version 2023-10-01-preview.
 *
 * Other available API versions: 2023-06-06, 2024-05-01-preview, 2024-07-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native offazure [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listHypervSitesControllerHealthSummary(args: ListHypervSitesControllerHealthSummaryArgs, opts?: pulumi.InvokeOptions): Promise<ListHypervSitesControllerHealthSummaryResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:offazure:listHypervSitesControllerHealthSummary", {
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
 *
 * Uses Azure REST API version 2023-10-01-preview.
 *
 * Other available API versions: 2023-06-06, 2024-05-01-preview, 2024-07-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native offazure [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listHypervSitesControllerHealthSummaryOutput(args: ListHypervSitesControllerHealthSummaryOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListHypervSitesControllerHealthSummaryResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:offazure:listHypervSitesControllerHealthSummary", {
        "resourceGroupName": args.resourceGroupName,
        "siteName": args.siteName,
    }, opts);
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