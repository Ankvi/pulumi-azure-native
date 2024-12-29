import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Response of a list operation.
 * Azure REST API version: 2022-06-01.
 *
 * Other available API versions: 2022-08-01, 2023-01-01, 2023-07-07, 2023-10-20.
 */
export function listMonitorLinkedResources(args: ListMonitorLinkedResourcesArgs, opts?: pulumi.InvokeOptions): Promise<ListMonitorLinkedResourcesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datadog:listMonitorLinkedResources", {
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListMonitorLinkedResourcesArgs {
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
 * Response of a list operation.
 */
export interface ListMonitorLinkedResourcesResult {
    /**
     * Link to the next set of results, if any.
     */
    readonly nextLink?: string;
    /**
     * Results of a list operation.
     */
    readonly value?: types.outputs.LinkedResourceResponse[];
}
/**
 * Response of a list operation.
 * Azure REST API version: 2022-06-01.
 *
 * Other available API versions: 2022-08-01, 2023-01-01, 2023-07-07, 2023-10-20.
 */
export function listMonitorLinkedResourcesOutput(args: ListMonitorLinkedResourcesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListMonitorLinkedResourcesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datadog:listMonitorLinkedResources", {
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListMonitorLinkedResourcesOutputArgs {
    /**
     * Monitor resource name
     */
    monitorName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}