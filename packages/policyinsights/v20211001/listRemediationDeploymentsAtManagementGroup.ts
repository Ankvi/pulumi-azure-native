import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets all deployments for a remediation at management group scope.
 */
export function listRemediationDeploymentsAtManagementGroup(args: ListRemediationDeploymentsAtManagementGroupArgs, opts?: pulumi.InvokeOptions): Promise<ListRemediationDeploymentsAtManagementGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:policyinsights/v20211001:listRemediationDeploymentsAtManagementGroup", {
        "managementGroupId": args.managementGroupId,
        "managementGroupsNamespace": args.managementGroupsNamespace,
        "remediationName": args.remediationName,
        "top": args.top,
    }, opts);
}

export interface ListRemediationDeploymentsAtManagementGroupArgs {
    /**
     * Management group ID.
     */
    managementGroupId: string;
    /**
     * The namespace for Microsoft Management RP; only "Microsoft.Management" is allowed.
     */
    managementGroupsNamespace: string;
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
export interface ListRemediationDeploymentsAtManagementGroupResult {
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
 * Gets all deployments for a remediation at management group scope.
 */
export function listRemediationDeploymentsAtManagementGroupOutput(args: ListRemediationDeploymentsAtManagementGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListRemediationDeploymentsAtManagementGroupResult> {
    return pulumi.output(args).apply((a: any) => listRemediationDeploymentsAtManagementGroup(a, opts))
}

export interface ListRemediationDeploymentsAtManagementGroupOutputArgs {
    /**
     * Management group ID.
     */
    managementGroupId: pulumi.Input<string>;
    /**
     * The namespace for Microsoft Management RP; only "Microsoft.Management" is allowed.
     */
    managementGroupsNamespace: pulumi.Input<string>;
    /**
     * The name of the remediation.
     */
    remediationName: pulumi.Input<string>;
    /**
     * Maximum number of records to return.
     */
    top?: pulumi.Input<number>;
}