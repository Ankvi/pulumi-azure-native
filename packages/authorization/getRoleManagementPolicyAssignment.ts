import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the specified role management policy assignment for a resource scope
 *
 * Uses Azure REST API version 2024-09-01-preview.
 *
 * Other available API versions: 2020-10-01, 2020-10-01-preview, 2024-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native authorization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getRoleManagementPolicyAssignment(args: GetRoleManagementPolicyAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetRoleManagementPolicyAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization:getRoleManagementPolicyAssignment", {
        "roleManagementPolicyAssignmentName": args.roleManagementPolicyAssignmentName,
        "scope": args.scope,
    }, opts);
}

export interface GetRoleManagementPolicyAssignmentArgs {
    /**
     * The name of format {guid_guid} the role management policy assignment to get.
     */
    roleManagementPolicyAssignmentName: string;
    /**
     * The scope of the role management policy.
     */
    scope: string;
}

/**
 * Role management policy
 */
export interface GetRoleManagementPolicyAssignmentResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The readonly computed rule applied to the policy.
     */
    readonly effectiveRules: (types.outputs.RoleManagementPolicyApprovalRuleResponse | types.outputs.RoleManagementPolicyAuthenticationContextRuleResponse | types.outputs.RoleManagementPolicyEnablementRuleResponse | types.outputs.RoleManagementPolicyExpirationRuleResponse | types.outputs.RoleManagementPolicyNotificationRuleResponse | types.outputs.RoleManagementPolicyPimOnlyModeRuleResponse)[];
    /**
     * The role management policy Id.
     */
    readonly id: string;
    /**
     * The role management policy name.
     */
    readonly name: string;
    /**
     * Additional properties of scope, role definition and policy
     */
    readonly policyAssignmentProperties: types.outputs.PolicyAssignmentPropertiesResponse;
    /**
     * The policy id role management policy assignment.
     */
    readonly policyId?: string;
    /**
     * The role definition of management policy assignment.
     */
    readonly roleDefinitionId?: string;
    /**
     * The role management policy scope.
     */
    readonly scope?: string;
    /**
     * The role management policy type.
     */
    readonly type: string;
}
/**
 * Get the specified role management policy assignment for a resource scope
 *
 * Uses Azure REST API version 2024-09-01-preview.
 *
 * Other available API versions: 2020-10-01, 2020-10-01-preview, 2024-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native authorization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getRoleManagementPolicyAssignmentOutput(args: GetRoleManagementPolicyAssignmentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRoleManagementPolicyAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:authorization:getRoleManagementPolicyAssignment", {
        "roleManagementPolicyAssignmentName": args.roleManagementPolicyAssignmentName,
        "scope": args.scope,
    }, opts);
}

export interface GetRoleManagementPolicyAssignmentOutputArgs {
    /**
     * The name of format {guid_guid} the role management policy assignment to get.
     */
    roleManagementPolicyAssignmentName: pulumi.Input<string>;
    /**
     * The scope of the role management policy.
     */
    scope: pulumi.Input<string>;
}