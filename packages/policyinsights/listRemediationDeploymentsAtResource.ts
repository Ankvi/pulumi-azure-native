import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets all deployments for a remediation at resource scope.
 * Azure REST API version: 2021-10-01.
 *
 * Other available API versions: 2018-07-01-preview.
 */
export function listRemediationDeploymentsAtResource(args: ListRemediationDeploymentsAtResourceArgs, opts?: pulumi.InvokeOptions): Promise<ListRemediationDeploymentsAtResourceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:policyinsights:listRemediationDeploymentsAtResource", {
        "remediationName": args.remediationName,
        "resourceId": args.resourceId,
        "top": args.top,
    }, opts);
}

export interface ListRemediationDeploymentsAtResourceArgs {
    /**
     * The name of the remediation.
     */
    remediationName: string;
    /**
     * Resource ID.
     */
    resourceId: string;
    /**
     * Maximum number of records to return.
     */
    top?: number;
}

/**
 * List of deployments for a remediation.
 */
export interface ListRemediationDeploymentsAtResourceResult {
    /**
     * The URL to get the next set of results.
     */
    readonly nextLink: string;
    /**
     * Array of deployments for the remediation.
     */
    readonly value: types.outputs.RemediationDeploymentResponse[];
}
/**
 * Gets all deployments for a remediation at resource scope.
 * Azure REST API version: 2021-10-01.
 *
 * Other available API versions: 2018-07-01-preview.
 */
export function listRemediationDeploymentsAtResourceOutput(args: ListRemediationDeploymentsAtResourceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListRemediationDeploymentsAtResourceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:policyinsights:listRemediationDeploymentsAtResource", {
        "remediationName": args.remediationName,
        "resourceId": args.resourceId,
        "top": args.top,
    }, opts);
}

export interface ListRemediationDeploymentsAtResourceOutputArgs {
    /**
     * The name of the remediation.
     */
    remediationName: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    resourceId: pulumi.Input<string>;
    /**
     * Maximum number of records to return.
     */
    top?: pulumi.Input<number>;
}