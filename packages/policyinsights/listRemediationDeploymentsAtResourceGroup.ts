import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets all deployments for a remediation at resource group scope.
 * Azure REST API version: 2021-10-01.
 */
export function listRemediationDeploymentsAtResourceGroup(args: ListRemediationDeploymentsAtResourceGroupArgs, opts?: pulumi.InvokeOptions): Promise<ListRemediationDeploymentsAtResourceGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:policyinsights:listRemediationDeploymentsAtResourceGroup", {
        "remediationName": args.remediationName,
        "resourceGroupName": args.resourceGroupName,
        "top": args.top,
    }, opts);
}

export interface ListRemediationDeploymentsAtResourceGroupArgs {
    /**
     * The name of the remediation.
     */
    remediationName: string;
    /**
     * Resource group name.
     */
    resourceGroupName: string;
    /**
     * Maximum number of records to return.
     */
    top?: number;
}

/**
 * List of deployments for a remediation.
 */
export interface ListRemediationDeploymentsAtResourceGroupResult {
    /**
     * The URL to get the next set of results.
     */
    readonly nextLink: string;
    /**
     * Array of deployments for the remediation.
     */
    readonly value: types.outputs.policyinsights.RemediationDeploymentResponse[];
}
/**
 * Gets all deployments for a remediation at resource group scope.
 * Azure REST API version: 2021-10-01.
 */
export function listRemediationDeploymentsAtResourceGroupOutput(args: ListRemediationDeploymentsAtResourceGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListRemediationDeploymentsAtResourceGroupResult> {
    return pulumi.output(args).apply((a: any) => listRemediationDeploymentsAtResourceGroup(a, opts))
}

export interface ListRemediationDeploymentsAtResourceGroupOutputArgs {
    /**
     * The name of the remediation.
     */
    remediationName: pulumi.Input<string>;
    /**
     * Resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Maximum number of records to return.
     */
    top?: pulumi.Input<number>;
}
