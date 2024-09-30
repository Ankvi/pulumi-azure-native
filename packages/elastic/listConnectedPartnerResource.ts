import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 *  List of all active elastic deployments.
 * Azure REST API version: 2023-07-01-preview.
 *
 * Other available API versions: 2023-10-01-preview, 2023-11-01-preview, 2024-01-01-preview, 2024-03-01, 2024-05-01-preview, 2024-06-15-preview.
 */
export function listConnectedPartnerResource(args: ListConnectedPartnerResourceArgs, opts?: pulumi.InvokeOptions): Promise<ListConnectedPartnerResourceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:elastic:listConnectedPartnerResource", {
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListConnectedPartnerResourceArgs {
    /**
     * Monitor resource name
     */
    monitorName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 *  List of all active elastic deployments.
 */
export interface ListConnectedPartnerResourceResult {
    /**
     * Link to the next set of results, if any.
     */
    readonly nextLink?: string;
    /**
     * Results of a list operation.
     */
    readonly value?: types.outputs.ConnectedPartnerResourcesListFormatResponse[];
}
/**
 *  List of all active elastic deployments.
 * Azure REST API version: 2023-07-01-preview.
 *
 * Other available API versions: 2023-10-01-preview, 2023-11-01-preview, 2024-01-01-preview, 2024-03-01, 2024-05-01-preview, 2024-06-15-preview.
 */
export function listConnectedPartnerResourceOutput(args: ListConnectedPartnerResourceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListConnectedPartnerResourceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:elastic:listConnectedPartnerResource", {
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListConnectedPartnerResourceOutputArgs {
    /**
     * Monitor resource name
     */
    monitorName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}