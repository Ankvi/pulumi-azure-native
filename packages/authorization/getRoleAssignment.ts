import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get a role assignment by scope and name.
 *
 * Uses Azure REST API version 2022-04-01.
 *
 * Other available API versions: 2020-08-01-preview, 2020-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native authorization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getRoleAssignment(args: GetRoleAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetRoleAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization:getRoleAssignment", {
        "roleAssignmentName": args.roleAssignmentName,
        "scope": args.scope,
        "tenantId": args.tenantId,
    }, opts);
}

export interface GetRoleAssignmentArgs {
    /**
     * The name of the role assignment. It can be any valid GUID.
     */
    roleAssignmentName: string;
    /**
     * The scope of the operation or resource. Valid scopes are: subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
     */
    scope: string;
    /**
     * Tenant ID for cross-tenant request
     */
    tenantId?: string;
}

/**
 * Role Assignments
 */
export interface GetRoleAssignmentResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The conditions on the role assignment. This limits the resources it can be assigned to. e.g.: @Resource[Microsoft.Storage/storageAccounts/blobServices/containers:ContainerName] StringEqualsIgnoreCase 'foo_storage_container'
     */
    readonly condition?: string;
    /**
     * Version of the condition. Currently the only accepted value is '2.0'
     */
    readonly conditionVersion?: string;
    /**
     * Id of the user who created the assignment
     */
    readonly createdBy: string;
    /**
     * Time it was created
     */
    readonly createdOn: string;
    /**
     * Id of the delegated managed identity resource
     */
    readonly delegatedManagedIdentityResourceId?: string;
    /**
     * Description of role assignment
     */
    readonly description?: string;
    /**
     * The role assignment ID.
     */
    readonly id: string;
    /**
     * The role assignment name.
     */
    readonly name: string;
    /**
     * The principal ID.
     */
    readonly principalId: string;
    /**
     * The principal type of the assigned principal ID.
     */
    readonly principalType?: string;
    /**
     * The role definition ID.
     */
    readonly roleDefinitionId: string;
    /**
     * The role assignment scope.
     */
    readonly scope: string;
    /**
     * The role assignment type.
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
 * Get a role assignment by scope and name.
 *
 * Uses Azure REST API version 2022-04-01.
 *
 * Other available API versions: 2020-08-01-preview, 2020-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native authorization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getRoleAssignmentOutput(args: GetRoleAssignmentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRoleAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:authorization:getRoleAssignment", {
        "roleAssignmentName": args.roleAssignmentName,
        "scope": args.scope,
        "tenantId": args.tenantId,
    }, opts);
}

export interface GetRoleAssignmentOutputArgs {
    /**
     * The name of the role assignment. It can be any valid GUID.
     */
    roleAssignmentName: pulumi.Input<string>;
    /**
     * The scope of the operation or resource. Valid scopes are: subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
     */
    scope: pulumi.Input<string>;
    /**
     * Tenant ID for cross-tenant request
     */
    tenantId?: pulumi.Input<string>;
}