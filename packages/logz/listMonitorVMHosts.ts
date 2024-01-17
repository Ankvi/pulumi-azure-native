import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Response of a list VM Host Update Operation.
 * Azure REST API version: 2022-01-01-preview.
 */
export function listMonitorVMHosts(args: ListMonitorVMHostsArgs, opts?: pulumi.InvokeOptions): Promise<ListMonitorVMHostsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logz:listMonitorVMHosts", {
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListMonitorVMHostsArgs {
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
 * Response of a list VM Host Update Operation.
 */
export interface ListMonitorVMHostsResult {
    /**
     * Link to the next set of results, if any.
     */
    readonly nextLink?: string;
    /**
     * Response of a list vm host update operation.
     */
    readonly value?: types.outputs.VMResourcesResponse[];
}
/**
 * Response of a list VM Host Update Operation.
 * Azure REST API version: 2022-01-01-preview.
 */
export function listMonitorVMHostsOutput(args: ListMonitorVMHostsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListMonitorVMHostsResult> {
    return pulumi.output(args).apply((a: any) => listMonitorVMHosts(a, opts))
}

export interface ListMonitorVMHostsOutputArgs {
    /**
     * Monitor resource name
     */
    monitorName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}