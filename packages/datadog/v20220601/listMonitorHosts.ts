import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Response of a list operation.
 */
export function listMonitorHosts(args: ListMonitorHostsArgs, opts?: pulumi.InvokeOptions): Promise<ListMonitorHostsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datadog/v20220601:listMonitorHosts", {
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListMonitorHostsArgs {
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
export interface ListMonitorHostsResult {
    /**
     * Link to the next set of results, if any.
     */
    readonly nextLink?: string;
    /**
     * Results of a list operation.
     */
    readonly value?: types.outputs.datadog.v20220601.DatadogHostResponse[];
}
/**
 * Response of a list operation.
 */
export function listMonitorHostsOutput(args: ListMonitorHostsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListMonitorHostsResult> {
    return pulumi.output(args).apply((a: any) => listMonitorHosts(a, opts))
}

export interface ListMonitorHostsOutputArgs {
    /**
     * Monitor resource name
     */
    monitorName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
