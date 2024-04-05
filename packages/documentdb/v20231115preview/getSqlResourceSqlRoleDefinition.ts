import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the properties of an existing Azure Cosmos DB SQL Role Definition with the given Id.
 */
export function getSqlResourceSqlRoleDefinition(args: GetSqlResourceSqlRoleDefinitionArgs, opts?: pulumi.InvokeOptions): Promise<GetSqlResourceSqlRoleDefinitionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:documentdb/v20231115preview:getSqlResourceSqlRoleDefinition", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "roleDefinitionId": args.roleDefinitionId,
    }, opts);
}

export interface GetSqlResourceSqlRoleDefinitionArgs {
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
 * An Azure Cosmos DB SQL Role Definition.
 */
export interface GetSqlResourceSqlRoleDefinitionResult {
    /**
     * A set of fully qualified Scopes at or below which Role Assignments may be created using this Role Definition. This will allow application of this Role Definition on the entire database account or any underlying Database / Collection. Must have at least one element. Scopes higher than Database account are not enforceable as assignable Scopes. Note that resources referenced in assignable Scopes need not exist.
     */
    readonly assignableScopes?: string[];
    /**
     * The unique resource identifier of the database account.
     */
    readonly id: string;
    /**
     * The name of the database account.
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
     * The type of Azure resource.
     */
    readonly type: string;
}
/**
 * Retrieves the properties of an existing Azure Cosmos DB SQL Role Definition with the given Id.
 */
export function getSqlResourceSqlRoleDefinitionOutput(args: GetSqlResourceSqlRoleDefinitionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSqlResourceSqlRoleDefinitionResult> {
    return pulumi.output(args).apply((a: any) => getSqlResourceSqlRoleDefinition(a, opts))
}

export interface GetSqlResourceSqlRoleDefinitionOutputArgs {
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