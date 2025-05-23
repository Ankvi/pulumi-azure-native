import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * This operation retrieves a single policy assignment, given its name and the scope it was created at.
 *
 * Uses Azure REST API version 2025-01-01.
 *
 * Other available API versions: 2020-09-01, 2021-06-01, 2022-06-01, 2023-04-01, 2024-04-01, 2024-05-01, 2025-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native authorization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPolicyAssignment(args: GetPolicyAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetPolicyAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization:getPolicyAssignment", {
        "expand": args.expand,
        "policyAssignmentName": args.policyAssignmentName,
        "scope": args.scope,
    }, opts);
}

export interface GetPolicyAssignmentArgs {
    /**
     * Comma-separated list of additional properties to be included in the response. Supported values are 'LatestDefinitionVersion, EffectiveDefinitionVersion'.
     */
    expand?: string;
    /**
     * The name of the policy assignment to get.
     */
    policyAssignmentName: string;
    /**
     * The scope of the policy assignment. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
     */
    scope: string;
}

/**
 * The policy assignment.
 */
export interface GetPolicyAssignmentResult {
    /**
     * The type of policy assignment. Possible values are NotSpecified, System, SystemHidden, and Custom. Immutable.
     */
    readonly assignmentType?: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The version of the policy definition to use.
     */
    readonly definitionVersion?: string;
    /**
     * This message will be part of response in case of policy violation.
     */
    readonly description?: string;
    /**
     * The display name of the policy assignment.
     */
    readonly displayName?: string;
    /**
     * The effective version of the policy definition in use. This is only present if requested via the $expand query parameter.
     */
    readonly effectiveDefinitionVersion: string;
    /**
     * The policy assignment enforcement mode. Possible values are Default, DoNotEnforce, and Enroll
     */
    readonly enforcementMode?: string;
    /**
     * The ID of the policy assignment.
     */
    readonly id: string;
    /**
     * The managed identity associated with the policy assignment.
     */
    readonly identity?: types.outputs.IdentityResponse;
    /**
     * The instance ID of the policy assignment. This ID only and always changes when the assignment is deleted and recreated.
     */
    readonly instanceId: string;
    /**
     * The latest version of the policy definition available. This is only present if requested via the $expand query parameter.
     */
    readonly latestDefinitionVersion: string;
    /**
     * The location of the policy assignment. Only required when utilizing managed identity.
     */
    readonly location?: string;
    /**
     * The policy assignment metadata. Metadata is an open ended object and is typically a collection of key value pairs.
     */
    readonly metadata?: any;
    /**
     * The name of the policy assignment.
     */
    readonly name: string;
    /**
     * The messages that describe why a resource is non-compliant with the policy.
     */
    readonly nonComplianceMessages?: types.outputs.NonComplianceMessageResponse[];
    /**
     * The policy's excluded scopes.
     */
    readonly notScopes?: string[];
    /**
     * The policy property value override.
     */
    readonly overrides?: types.outputs.OverrideResponse[];
    /**
     * The parameter values for the assigned policy rule. The keys are the parameter names.
     */
    readonly parameters?: {[key: string]: types.outputs.ParameterValuesValueResponse};
    /**
     * The ID of the policy definition or policy set definition being assigned.
     */
    readonly policyDefinitionId?: string;
    /**
     * The resource selector list to filter policies by resource properties.
     */
    readonly resourceSelectors?: types.outputs.ResourceSelectorResponse[];
    /**
     * The scope for the policy assignment.
     */
    readonly scope: string;
    /**
     * The system metadata relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the policy assignment.
     */
    readonly type: string;
}
/**
 * This operation retrieves a single policy assignment, given its name and the scope it was created at.
 *
 * Uses Azure REST API version 2025-01-01.
 *
 * Other available API versions: 2020-09-01, 2021-06-01, 2022-06-01, 2023-04-01, 2024-04-01, 2024-05-01, 2025-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native authorization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPolicyAssignmentOutput(args: GetPolicyAssignmentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPolicyAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:authorization:getPolicyAssignment", {
        "expand": args.expand,
        "policyAssignmentName": args.policyAssignmentName,
        "scope": args.scope,
    }, opts);
}

export interface GetPolicyAssignmentOutputArgs {
    /**
     * Comma-separated list of additional properties to be included in the response. Supported values are 'LatestDefinitionVersion, EffectiveDefinitionVersion'.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the policy assignment to get.
     */
    policyAssignmentName: pulumi.Input<string>;
    /**
     * The scope of the policy assignment. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
     */
    scope: pulumi.Input<string>;
}