import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets all deployments for a remediation at subscription scope.
 *
 * Uses Azure REST API version 2021-10-01.
 *
 * Other available API versions: 2024-10-01.
 */
export function listRemediationDeploymentsAtSubscription(args: ListRemediationDeploymentsAtSubscriptionArgs, opts?: pulumi.InvokeOptions): Promise<ListRemediationDeploymentsAtSubscriptionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:policyinsights:listRemediationDeploymentsAtSubscription", {
        "remediationName": args.remediationName,
        "top": args.top,
    }, opts);
}

export interface ListRemediationDeploymentsAtSubscriptionArgs {
    /**
     * The name of the remediation.
     */
    remediationName: string;
    /**
     * Maximum number of records to return.
     */
    top?: number;
}

/**
 * List of deployments for a remediation.
 */
export interface ListRemediationDeploymentsAtSubscriptionResult {
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
 * Gets all deployments for a remediation at subscription scope.
 *
 * Uses Azure REST API version 2021-10-01.
 *
 * Other available API versions: 2024-10-01.
 */
export function listRemediationDeploymentsAtSubscriptionOutput(args: ListRemediationDeploymentsAtSubscriptionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListRemediationDeploymentsAtSubscriptionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:policyinsights:listRemediationDeploymentsAtSubscription", {
        "remediationName": args.remediationName,
        "top": args.top,
    }, opts);
}

export interface ListRemediationDeploymentsAtSubscriptionOutputArgs {
    /**
     * The name of the remediation.
     */
    remediationName: pulumi.Input<string>;
    /**
     * Maximum number of records to return.
     */
    top?: pulumi.Input<number>;
}