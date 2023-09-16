import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Response of a list operation.
 */
export function listMonitoredResource(args: ListMonitoredResourceArgs, opts?: pulumi.InvokeOptions): Promise<ListMonitoredResourceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:elastic/v20230615preview:listMonitoredResource", {
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListMonitoredResourceArgs {
    /**
     * Monitor resource name
     */
    monitorName: string;
    /**
     * The name of the resource group to which the Elastic resource belongs.
     */
    resourceGroupName: string;
}

/**
 * Response of a list operation.
 */
export interface ListMonitoredResourceResult {
    /**
     * Link to the next set of results, if any.
     */
    readonly nextLink?: string;
    /**
     * Results of a list operation.
     */
    readonly value?: types.outputs.elastic.v20230615preview.MonitoredResourceResponse[];
}
/**
 * Response of a list operation.
 */
export function listMonitoredResourceOutput(args: ListMonitoredResourceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListMonitoredResourceResult> {
    return pulumi.output(args).apply((a: any) => listMonitoredResource(a, opts))
}

export interface ListMonitoredResourceOutputArgs {
    /**
     * Monitor resource name
     */
    monitorName: pulumi.Input<string>;
    /**
     * The name of the resource group to which the Elastic resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}
