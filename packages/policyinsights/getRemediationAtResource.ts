import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an existing remediation at resource scope.
 * Azure REST API version: 2021-10-01.
 *
 * Other available API versions: 2018-07-01-preview, 2024-10-01.
 */
export function getRemediationAtResource(args: GetRemediationAtResourceArgs, opts?: pulumi.InvokeOptions): Promise<GetRemediationAtResourceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:policyinsights:getRemediationAtResource", {
        "remediationName": args.remediationName,
        "resourceId": args.resourceId,
    }, opts);
}

export interface GetRemediationAtResourceArgs {
    /**
     * The name of the remediation.
     */
    remediationName: string;
    /**
     * Resource ID.
     */
    resourceId: string;
}

/**
 * The remediation definition.
 */
export interface GetRemediationAtResourceResult {
    /**
     * The remediation correlation Id. Can be used to find events related to the remediation in the activity log.
     */
    readonly correlationId: string;
    /**
     * The time at which the remediation was created.
     */
    readonly createdOn: string;
    /**
     * The deployment status summary for all deployments created by the remediation.
     */
    readonly deploymentStatus: types.outputs.RemediationDeploymentSummaryResponse;
    /**
     * The remediation failure threshold settings
     */
    readonly failureThreshold?: types.outputs.RemediationPropertiesResponseFailureThreshold;
    /**
     * The filters that will be applied to determine which resources to remediate.
     */
    readonly filters?: types.outputs.RemediationFiltersResponse;
    /**
     * The ID of the remediation.
     */
    readonly id: string;
    /**
     * The time at which the remediation was last updated.
     */
    readonly lastUpdatedOn: string;
    /**
     * The name of the remediation.
     */
    readonly name: string;
    /**
     * Determines how many resources to remediate at any given time. Can be used to increase or reduce the pace of the remediation. If not provided, the default parallel deployments value is used.
     */
    readonly parallelDeployments?: number;
    /**
     * The resource ID of the policy assignment that should be remediated.
     */
    readonly policyAssignmentId?: string;
    /**
     * The policy definition reference ID of the individual definition that should be remediated. Required when the policy assignment being remediated assigns a policy set definition.
     */
    readonly policyDefinitionReferenceId?: string;
    /**
     * The status of the remediation. This refers to the entire remediation task, not individual deployments. Allowed values are Evaluating, Canceled, Cancelling, Failed, Complete, or Succeeded.
     */
    readonly provisioningState: string;
    /**
     * Determines the max number of resources that can be remediated by the remediation job. If not provided, the default resource count is used.
     */
    readonly resourceCount?: number;
    /**
     * The way resources to remediate are discovered. Defaults to ExistingNonCompliant if not specified.
     */
    readonly resourceDiscoveryMode?: string;
    /**
     * The remediation status message. Provides additional details regarding the state of the remediation.
     */
    readonly statusMessage: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the remediation.
     */
    readonly type: string;
}
/**
 * Gets an existing remediation at resource scope.
 * Azure REST API version: 2021-10-01.
 *
 * Other available API versions: 2018-07-01-preview, 2024-10-01.
 */
export function getRemediationAtResourceOutput(args: GetRemediationAtResourceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRemediationAtResourceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:policyinsights:getRemediationAtResource", {
        "remediationName": args.remediationName,
        "resourceId": args.resourceId,
    }, opts);
}

export interface GetRemediationAtResourceOutputArgs {
    /**
     * The name of the remediation.
     */
    remediationName: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    resourceId: pulumi.Input<string>;
}