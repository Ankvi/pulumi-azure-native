import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Response of a list operation.
 */
export function listMonitorLinkedResources(args: ListMonitorLinkedResourcesArgs, opts?: pulumi.InvokeOptions): Promise<ListMonitorLinkedResourcesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datadog/v20220801:listMonitorLinkedResources", {
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
 */
export function listMonitorLinkedResourcesOutput(args: ListMonitorLinkedResourcesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListMonitorLinkedResourcesResult> {
    return pulumi.output(args).apply((a: any) => listMonitorLinkedResources(a, opts))
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