import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * This operation retrieves a single policy assignment, given its name and the scope it was created at.
 */
export function getPolicyAssignment(args: GetPolicyAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetPolicyAssignmentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization/v20200301:getPolicyAssignment", {
        "policyAssignmentName": args.policyAssignmentName,
        "scope": args.scope,
    }, opts);
}

export interface GetPolicyAssignmentArgs {
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
     * This message will be part of response in case of policy violation.
     */
    readonly description?: string;
    /**
     * The display name of the policy assignment.
     */
    readonly displayName?: string;
    /**
     * The policy assignment enforcement mode. Possible values are Default and DoNotEnforce.
     */
    readonly enforcementMode?: string;
    /**
     * The ID of the policy assignment.
     */
    readonly id: string;
    /**
     * The managed identity associated with the policy assignment.
     */
    readonly identity?: types.outputs.authorization.v20200301.IdentityResponse;
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
     * The policy's excluded scopes.
     */
    readonly notScopes?: string[];
    /**
     * The parameter values for the assigned policy rule. The keys are the parameter names.
     */
    readonly parameters?: {[key: string]: types.outputs.authorization.v20200301.ParameterValuesValueResponse};
    /**
     * The ID of the policy definition or policy set definition being assigned.
     */
    readonly policyDefinitionId?: string;
    /**
     * The scope for the policy assignment.
     */
    readonly scope?: string;
    /**
     * The policy sku. This property is optional, obsolete, and will be ignored.
     */
    readonly sku?: types.outputs.authorization.v20200301.PolicySkuResponse;
    /**
     * The type of the policy assignment.
     */
    readonly type: string;
}
/**
 * This operation retrieves a single policy assignment, given its name and the scope it was created at.
 */
export function getPolicyAssignmentOutput(args: GetPolicyAssignmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPolicyAssignmentResult> {
    return pulumi.output(args).apply((a: any) => getPolicyAssignment(a, opts))
}

export interface GetPolicyAssignmentOutputArgs {
    /**
     * The name of the policy assignment to get.
     */
    policyAssignmentName: pulumi.Input<string>;
    /**
     * The scope of the policy assignment. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
     */
    scope: pulumi.Input<string>;
}
