import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Response of a list operation.
 * Azure REST API version: 2022-06-01.
 *
 * Other available API versions: 2022-08-01, 2023-01-01, 2023-07-07, 2023-10-20.
 */
export function listMonitorApiKeys(args: ListMonitorApiKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListMonitorApiKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datadog:listMonitorApiKeys", {
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListMonitorApiKeysArgs {
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
export interface ListMonitorApiKeysResult {
    /**
     * Link to the next set of results, if any.
     */
    readonly nextLink?: string;
    /**
     * Results of a list operation.
     */
    readonly value?: types.outputs.DatadogApiKeyResponse[];
}
/**
 * Response of a list operation.
 * Azure REST API version: 2022-06-01.
 *
 * Other available API versions: 2022-08-01, 2023-01-01, 2023-07-07, 2023-10-20.
 */
export function listMonitorApiKeysOutput(args: ListMonitorApiKeysOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListMonitorApiKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datadog:listMonitorApiKeys", {
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListMonitorApiKeysOutputArgs {
    /**
     * Monitor resource name
     */
    monitorName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}