import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get role definition by ID (GUID).
 *
 * Uses Azure REST API version 2022-05-01-preview.
 *
 * Other available API versions: 2022-04-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native authorization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * The fully qualified Azure Resource manager identifier of the resource.
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
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
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
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
 *
 * Other available API versions: 2022-04-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native authorization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    scope: pulumi.Input<string>;
}