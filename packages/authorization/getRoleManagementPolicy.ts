import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the specified role management policy for a resource scope
 *
 * Uses Azure REST API version 2024-09-01-preview.
 *
 * Other available API versions: 2020-10-01, 2020-10-01-preview, 2024-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native authorization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getRoleManagementPolicy(args: GetRoleManagementPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetRoleManagementPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization:getRoleManagementPolicy", {
        "roleManagementPolicyName": args.roleManagementPolicyName,
        "scope": args.scope,
    }, opts);
}

export interface GetRoleManagementPolicyArgs {
    /**
     * The name (guid) of the role management policy to get.
     */
    roleManagementPolicyName: string;
    /**
     * The scope of the role management policy.
     */
    scope: string;
}

/**
 * Role management policy
 */
export interface GetRoleManagementPolicyResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The role management policy description.
     */
    readonly description?: string;
    /**
     * The role management policy display name.
     */
    readonly displayName?: string;
    /**
     * The readonly computed rule applied to the policy.
     */
    readonly effectiveRules: (types.outputs.RoleManagementPolicyApprovalRuleResponse | types.outputs.RoleManagementPolicyAuthenticationContextRuleResponse | types.outputs.RoleManagementPolicyEnablementRuleResponse | types.outputs.RoleManagementPolicyExpirationRuleResponse | types.outputs.RoleManagementPolicyNotificationRuleResponse | types.outputs.RoleManagementPolicyPimOnlyModeRuleResponse)[];
    /**
     * The role management policy Id.
     */
    readonly id: string;
    /**
     * The role management policy is default policy.
     */
    readonly isOrganizationDefault?: boolean;
    /**
     * The name of the entity last modified it
     */
    readonly lastModifiedBy: types.outputs.PrincipalResponse;
    /**
     * The last modified date time.
     */
    readonly lastModifiedDateTime: string;
    /**
     * The role management policy name.
     */
    readonly name: string;
    /**
     * Additional properties of scope
     */
    readonly policyProperties: types.outputs.PolicyPropertiesResponse;
    /**
     * The rule applied to the policy.
     */
    readonly rules?: (types.outputs.RoleManagementPolicyApprovalRuleResponse | types.outputs.RoleManagementPolicyAuthenticationContextRuleResponse | types.outputs.RoleManagementPolicyEnablementRuleResponse | types.outputs.RoleManagementPolicyExpirationRuleResponse | types.outputs.RoleManagementPolicyNotificationRuleResponse | types.outputs.RoleManagementPolicyPimOnlyModeRuleResponse)[];
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
 * Get the specified role management policy for a resource scope
 *
 * Uses Azure REST API version 2024-09-01-preview.
 *
 * Other available API versions: 2020-10-01, 2020-10-01-preview, 2024-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native authorization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getRoleManagementPolicyOutput(args: GetRoleManagementPolicyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRoleManagementPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:authorization:getRoleManagementPolicy", {
        "roleManagementPolicyName": args.roleManagementPolicyName,
        "scope": args.scope,
    }, opts);
}

export interface GetRoleManagementPolicyOutputArgs {
    /**
     * The name (guid) of the role management policy to get.
     */
    roleManagementPolicyName: pulumi.Input<string>;
    /**
     * The scope of the role management policy.
     */
    scope: pulumi.Input<string>;
}