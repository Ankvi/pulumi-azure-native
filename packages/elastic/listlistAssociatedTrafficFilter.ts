import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List of elastic traffic filters in the account
 * Azure REST API version: 2023-06-01.
 *
 * Other available API versions: 2023-06-15-preview, 2023-07-01-preview, 2023-10-01-preview, 2023-11-01-preview, 2024-01-01-preview, 2024-03-01, 2024-05-01-preview, 2024-06-15-preview, 2024-10-01-preview.
 */
export function listlistAssociatedTrafficFilter(args: ListlistAssociatedTrafficFilterArgs, opts?: pulumi.InvokeOptions): Promise<ListlistAssociatedTrafficFilterResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:elastic:listlistAssociatedTrafficFilter", {
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListlistAssociatedTrafficFilterArgs {
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
 * List of elastic traffic filters in the account
 */
export interface ListlistAssociatedTrafficFilterResult {
    /**
     * List of elastic traffic filters in the account
     */
    readonly rulesets?: types.outputs.ElasticTrafficFilterResponse[];
}
/**
 * List of elastic traffic filters in the account
 * Azure REST API version: 2023-06-01.
 *
 * Other available API versions: 2023-06-15-preview, 2023-07-01-preview, 2023-10-01-preview, 2023-11-01-preview, 2024-01-01-preview, 2024-03-01, 2024-05-01-preview, 2024-06-15-preview, 2024-10-01-preview.
 */
export function listlistAssociatedTrafficFilterOutput(args: ListlistAssociatedTrafficFilterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListlistAssociatedTrafficFilterResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:elastic:listlistAssociatedTrafficFilter", {
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListlistAssociatedTrafficFilterOutputArgs {
    /**
     * Monitor resource name
     */
    monitorName: pulumi.Input<string>;
    /**
     * The name of the resource group to which the Elastic resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}