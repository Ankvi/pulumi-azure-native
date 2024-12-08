import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns the allowed callout policies for the specified service.
 * Azure REST API version: 2024-04-13.
 */
export function listClusterCalloutPolicies(args: ListClusterCalloutPoliciesArgs, opts?: pulumi.InvokeOptions): Promise<ListClusterCalloutPoliciesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:kusto:listClusterCalloutPolicies", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListClusterCalloutPoliciesArgs {
    /**
     * The name of the Kusto cluster.
     */
    clusterName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A list of the service's callout policy objects.
 */
export interface ListClusterCalloutPoliciesResult {
    readonly nextLink?: string;
    /**
     * A list of the service's callout policies.
     */
    readonly value?: types.outputs.CalloutPolicyResponse[];
}
/**
 * Returns the allowed callout policies for the specified service.
 * Azure REST API version: 2024-04-13.
 */
export function listClusterCalloutPoliciesOutput(args: ListClusterCalloutPoliciesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListClusterCalloutPoliciesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:kusto:listClusterCalloutPolicies", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListClusterCalloutPoliciesOutputArgs {
    /**
     * The name of the Kusto cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}