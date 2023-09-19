import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List of elastic traffic filters in the account
 */
export function listlistAssociatedTrafficFilter(args: ListlistAssociatedTrafficFilterArgs, opts?: pulumi.InvokeOptions): Promise<ListlistAssociatedTrafficFilterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:elastic/v20230615preview:listlistAssociatedTrafficFilter", {
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
 */
export function listlistAssociatedTrafficFilterOutput(args: ListlistAssociatedTrafficFilterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListlistAssociatedTrafficFilterResult> {
    return pulumi.output(args).apply((a: any) => listlistAssociatedTrafficFilter(a, opts))
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
