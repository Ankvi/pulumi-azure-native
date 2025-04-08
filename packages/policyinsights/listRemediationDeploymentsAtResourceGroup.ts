import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets all deployments for a remediation at resource group scope.
 *
 * Uses Azure REST API version 2024-10-01.
 *
 * Other available API versions: 2021-10-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native policyinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
    readonly value: types.outputs.RemediationDeploymentResponse[];
}
/**
 * Gets all deployments for a remediation at resource group scope.
 *
 * Uses Azure REST API version 2024-10-01.
 *
 * Other available API versions: 2021-10-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native policyinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listRemediationDeploymentsAtResourceGroupOutput(args: ListRemediationDeploymentsAtResourceGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListRemediationDeploymentsAtResourceGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:policyinsights:listRemediationDeploymentsAtResourceGroup", {
        "remediationName": args.remediationName,
        "resourceGroupName": args.resourceGroupName,
        "top": args.top,
    }, opts);
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