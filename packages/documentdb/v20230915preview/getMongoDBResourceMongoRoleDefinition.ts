import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the properties of an existing Azure Cosmos DB Mongo Role Definition with the given Id.
 */
export function getMongoDBResourceMongoRoleDefinition(args: GetMongoDBResourceMongoRoleDefinitionArgs, opts?: pulumi.InvokeOptions): Promise<GetMongoDBResourceMongoRoleDefinitionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:documentdb/v20230915preview:getMongoDBResourceMongoRoleDefinition", {
        "accountName": args.accountName,
        "mongoRoleDefinitionId": args.mongoRoleDefinitionId,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMongoDBResourceMongoRoleDefinitionArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: string;
    /**
     * The ID for the Role Definition {dbName.roleName}.
     */
    mongoRoleDefinitionId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An Azure Cosmos DB Mongo Role Definition.
 */
export interface GetMongoDBResourceMongoRoleDefinitionResult {
    /**
     * The database name for which access is being granted for this Role Definition.
     */
    readonly databaseName?: string;
    /**
     * The unique resource identifier of the database account.
     */
    readonly id: string;
    /**
     * The name of the database account.
     */
    readonly name: string;
    /**
     * A set of privileges contained by the Role Definition. This will allow application of this Role Definition on the entire database account or any underlying Database / Collection. Scopes higher than Database are not enforceable as privilege.
     */
    readonly privileges?: types.outputs.PrivilegeResponse[];
    /**
     * A user-friendly name for the Role Definition. Must be unique for the database account.
     */
    readonly roleName?: string;
    /**
     * The set of roles inherited by this Role Definition.
     */
    readonly roles?: types.outputs.RoleResponse[];
    /**
     * The type of Azure resource.
     */
    readonly type: string;
}
/**
 * Retrieves the properties of an existing Azure Cosmos DB Mongo Role Definition with the given Id.
 */
export function getMongoDBResourceMongoRoleDefinitionOutput(args: GetMongoDBResourceMongoRoleDefinitionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMongoDBResourceMongoRoleDefinitionResult> {
    return pulumi.output(args).apply((a: any) => getMongoDBResourceMongoRoleDefinition(a, opts))
}

export interface GetMongoDBResourceMongoRoleDefinitionOutputArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The ID for the Role Definition {dbName.roleName}.
     */
    mongoRoleDefinitionId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}