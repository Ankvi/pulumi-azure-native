import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the properties of an existing Azure Cosmos DB Table Role Definition with the given Id.
 * Azure REST API version: 2024-12-01-preview.
 */
export function getTableResourceTableRoleDefinition(args: GetTableResourceTableRoleDefinitionArgs, opts?: pulumi.InvokeOptions): Promise<GetTableResourceTableRoleDefinitionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:documentdb:getTableResourceTableRoleDefinition", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "roleDefinitionId": args.roleDefinitionId,
    }, opts);
}

export interface GetTableResourceTableRoleDefinitionArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The GUID for the Role Definition.
     */
    roleDefinitionId: string;
}

/**
 * Parameters to create and update an Azure Cosmos DB Table Role Definition.
 */
export interface GetTableResourceTableRoleDefinitionResult {
    /**
     * A set of fully qualified Scopes at or below which Table Role Assignments may be created using this Role Definition. This will allow application of this Role Definition on the entire database account or any underlying Database / Collection. Must have at least one element. Scopes higher than Database account are not enforceable as assignable Scopes. Note that resources referenced in assignable Scopes need not exist.
     */
    readonly assignableScopes?: string[];
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The set of operations allowed through this Role Definition.
     */
    readonly permissions?: types.outputs.PermissionResponse[];
    /**
     * A user-friendly name for the Role Definition. Must be unique for the database account.
     */
    readonly roleName?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Retrieves the properties of an existing Azure Cosmos DB Table Role Definition with the given Id.
 * Azure REST API version: 2024-12-01-preview.
 */
export function getTableResourceTableRoleDefinitionOutput(args: GetTableResourceTableRoleDefinitionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetTableResourceTableRoleDefinitionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:documentdb:getTableResourceTableRoleDefinition", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "roleDefinitionId": args.roleDefinitionId,
    }, opts);
}

export interface GetTableResourceTableRoleDefinitionOutputArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The GUID for the Role Definition.
     */
    roleDefinitionId: pulumi.Input<string>;
}