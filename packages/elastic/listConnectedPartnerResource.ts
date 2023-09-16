import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 *  List of all active elastic deployments.
 * Azure REST API version: 2023-07-01-preview.
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
    readonly value?: types.outputs.elastic.ConnectedPartnerResourcesListFormatResponse[];
}
/**
 *  List of all active elastic deployments.
 * Azure REST API version: 2023-07-01-preview.
 */
export function listConnectedPartnerResourceOutput(args: ListConnectedPartnerResourceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListConnectedPartnerResourceResult> {
    return pulumi.output(args).apply((a: any) => listConnectedPartnerResource(a, opts))
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
