import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Response of a list operation.
 * Azure REST API version: 2022-06-01.
 *
 * Other available API versions: 2022-08-01, 2023-01-01.
 */
export function listMonitorMonitoredResources(args: ListMonitorMonitoredResourcesArgs, opts?: pulumi.InvokeOptions): Promise<ListMonitorMonitoredResourcesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datadog:listMonitorMonitoredResources", {
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListMonitorMonitoredResourcesArgs {
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
export interface ListMonitorMonitoredResourcesResult {
    /**
     * Link to the next set of results, if any.
     */
    readonly nextLink?: string;
    /**
     * Results of a list operation.
     */
    readonly value?: types.outputs.MonitoredResourceResponse[];
}
/**
 * Response of a list operation.
 * Azure REST API version: 2022-06-01.
 *
 * Other available API versions: 2022-08-01, 2023-01-01.
 */
export function listMonitorMonitoredResourcesOutput(args: ListMonitorMonitoredResourcesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListMonitorMonitoredResourcesResult> {
    return pulumi.output(args).apply((a: any) => listMonitorMonitoredResources(a, opts))
}

export interface ListMonitorMonitoredResourcesOutputArgs {
    /**
     * Monitor resource name
     */
    monitorName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
