import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List of elastic traffic filters in the account
 */
export function listAllTrafficFilter(args: ListAllTrafficFilterArgs, opts?: pulumi.InvokeOptions): Promise<ListAllTrafficFilterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:elastic/v20231101preview:listAllTrafficFilter", {
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListAllTrafficFilterArgs {
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
 * List of elastic traffic filters in the account
 */
export interface ListAllTrafficFilterResult {
    /**
     * List of elastic traffic filters in the account
     */
    readonly rulesets?: types.outputs.ElasticTrafficFilterResponse[];
}
/**
 * List of elastic traffic filters in the account
 */
export function listAllTrafficFilterOutput(args: ListAllTrafficFilterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListAllTrafficFilterResult> {
    return pulumi.output(args).apply((a: any) => listAllTrafficFilter(a, opts))
}

export interface ListAllTrafficFilterOutputArgs {
    /**
     * Monitor resource name
     */
    monitorName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
