import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List operation response containing list of Datadog Hosts.
 */
export function listMonitorHosts(args: ListMonitorHostsArgs, opts?: pulumi.InvokeOptions): Promise<ListMonitorHostsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datadog/v20220801:listMonitorHosts", {
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
 * List operation response containing list of Datadog Hosts.
 */
export interface ListMonitorHostsResult {
    /**
     * Link to the next set of results, if any.
     */
    readonly nextLink?: string;
    /**
     * List operation results containing list of Datadog Hosts.
     */
    readonly value?: types.outputs.DatadogHostResponse[];
}
/**
 * List operation response containing list of Datadog Hosts.
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