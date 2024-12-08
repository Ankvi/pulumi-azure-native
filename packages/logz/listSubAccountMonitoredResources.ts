import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Response of a list operation.
 * Azure REST API version: 2022-01-01-preview.
 */
export function listSubAccountMonitoredResources(args: ListSubAccountMonitoredResourcesArgs, opts?: pulumi.InvokeOptions): Promise<ListSubAccountMonitoredResourcesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logz:listSubAccountMonitoredResources", {
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
        "subAccountName": args.subAccountName,
    }, opts);
}

export interface ListSubAccountMonitoredResourcesArgs {
    /**
     * Monitor resource name
     */
    monitorName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Sub Account resource name
     */
    subAccountName: string;
}

/**
 * Response of a list operation.
 */
export interface ListSubAccountMonitoredResourcesResult {
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
 * Azure REST API version: 2022-01-01-preview.
 */
export function listSubAccountMonitoredResourcesOutput(args: ListSubAccountMonitoredResourcesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListSubAccountMonitoredResourcesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:logz:listSubAccountMonitoredResources", {
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
        "subAccountName": args.subAccountName,
    }, opts);
}

export interface ListSubAccountMonitoredResourcesOutputArgs {
    /**
     * Monitor resource name
     */
    monitorName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Sub Account resource name
     */
    subAccountName: pulumi.Input<string>;
}