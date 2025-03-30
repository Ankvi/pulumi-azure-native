import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get role definition by ID (GUID).
 *
 * Uses Azure REST API version 2022-05-01-preview.
 */
export function getRoleDefinition(args: GetRoleDefinitionArgs, opts?: pulumi.InvokeOptions): Promise<GetRoleDefinitionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization:getRoleDefinition", {
        "roleDefinitionId": args.roleDefinitionId,
        "scope": args.scope,
    }, opts);
}

export interface GetRoleDefinitionArgs {
    /**
     * The ID of the role definition.
     */
    roleDefinitionId: string;
    /**
     * The scope of the operation or resource. Valid scopes are: subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
     */
    scope: string;
}

/**
 * Role definition.
 */
export interface GetRoleDefinitionResult {
    /**
     * Role definition assignable scopes.
     */
    readonly assignableScopes?: string[];
    /**
     * Id of the user who created the assignment
     */
    readonly createdBy: string;
    /**
     * Time it was created
     */
    readonly createdOn: string;
    /**
     * The role definition description.
     */
    readonly description?: string;
    /**
     * The role definition ID.
     */
    readonly id: string;
    /**
     * The role definition name.
     */
    readonly name: string;
    /**
     * Role definition permissions.
     */
    readonly permissions?: types.outputs.PermissionResponse[];
    /**
     * The role name.
     */
    readonly roleName?: string;
    /**
     * The role type.
     */
    readonly roleType?: string;
    /**
     * The role definition type.
     */
    readonly type: string;
    /**
     * Id of the user who updated the assignment
     */
    readonly updatedBy: string;
    /**
     * Time it was updated
     */
    readonly updatedOn: string;
}
/**
 * Get role definition by ID (GUID).
 *
 * Uses Azure REST API version 2022-05-01-preview.
 */
export function getRoleDefinitionOutput(args: GetRoleDefinitionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRoleDefinitionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:authorization:getRoleDefinition", {
        "roleDefinitionId": args.roleDefinitionId,
        "scope": args.scope,
    }, opts);
}

export interface GetRoleDefinitionOutputArgs {
    /**
     * The ID of the role definition.
     */
    roleDefinitionId: pulumi.Input<string>;
    /**
     * The scope of the operation or resource. Valid scopes are: subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
     */
    scope: pulumi.Input<string>;
}