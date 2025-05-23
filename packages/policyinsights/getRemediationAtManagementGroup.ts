import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an existing remediation at management group scope.
 *
 * Uses Azure REST API version 2024-10-01.
 *
 * Other available API versions: 2021-10-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native policyinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getRemediationAtManagementGroup(args: GetRemediationAtManagementGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetRemediationAtManagementGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:policyinsights:getRemediationAtManagementGroup", {
        "managementGroupId": args.managementGroupId,
        "managementGroupsNamespace": args.managementGroupsNamespace,
        "remediationName": args.remediationName,
    }, opts);
}

export interface GetRemediationAtManagementGroupArgs {
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
}

/**
 * The remediation definition.
 */
export interface GetRemediationAtManagementGroupResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 * Gets an existing remediation at management group scope.
 *
 * Uses Azure REST API version 2024-10-01.
 *
 * Other available API versions: 2021-10-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native policyinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getRemediationAtManagementGroupOutput(args: GetRemediationAtManagementGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRemediationAtManagementGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:policyinsights:getRemediationAtManagementGroup", {
        "managementGroupId": args.managementGroupId,
        "managementGroupsNamespace": args.managementGroupsNamespace,
        "remediationName": args.remediationName,
    }, opts);
}

export interface GetRemediationAtManagementGroupOutputArgs {
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
}