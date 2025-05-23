import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the properties of an existing Azure Cosmos DB Mongo User Definition with the given Id.
 *
 * Uses Azure REST API version 2024-11-15.
 *
 * Other available API versions: 2021-10-15-preview, 2021-11-15-preview, 2022-02-15-preview, 2022-05-15-preview, 2022-08-15, 2022-08-15-preview, 2022-11-15, 2022-11-15-preview, 2023-03-01-preview, 2023-03-15, 2023-03-15-preview, 2023-04-15, 2023-09-15, 2023-09-15-preview, 2023-11-15, 2023-11-15-preview, 2024-02-15-preview, 2024-05-15, 2024-05-15-preview, 2024-08-15, 2024-09-01-preview, 2024-12-01-preview, 2025-04-15, 2025-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cosmosdb [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getMongoDBResourceMongoUserDefinition(args: GetMongoDBResourceMongoUserDefinitionArgs, opts?: pulumi.InvokeOptions): Promise<GetMongoDBResourceMongoUserDefinitionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cosmosdb:getMongoDBResourceMongoUserDefinition", {
        "accountName": args.accountName,
        "mongoUserDefinitionId": args.mongoUserDefinitionId,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMongoDBResourceMongoUserDefinitionArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: string;
    /**
     * The ID for the User Definition {dbName.userName}.
     */
    mongoUserDefinitionId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An Azure Cosmos DB User Definition
 */
export interface GetMongoDBResourceMongoUserDefinitionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * A custom definition for the USer Definition.
     */
    readonly customData?: string;
    /**
     * The database name for which access is being granted for this User Definition.
     */
    readonly databaseName?: string;
    /**
     * The unique resource identifier of the database account.
     */
    readonly id: string;
    /**
     * The Mongo Auth mechanism. For now, we only support auth mechanism SCRAM-SHA-256.
     */
    readonly mechanisms?: string;
    /**
     * The name of the database account.
     */
    readonly name: string;
    /**
     * The password for User Definition. Response does not contain user password.
     */
    readonly password?: string;
    /**
     * The set of roles inherited by the User Definition.
     */
    readonly roles?: types.outputs.RoleResponse[];
    /**
     * The type of Azure resource.
     */
    readonly type: string;
    /**
     * The user name for User Definition.
     */
    readonly userName?: string;
}
/**
 * Retrieves the properties of an existing Azure Cosmos DB Mongo User Definition with the given Id.
 *
 * Uses Azure REST API version 2024-11-15.
 *
 * Other available API versions: 2021-10-15-preview, 2021-11-15-preview, 2022-02-15-preview, 2022-05-15-preview, 2022-08-15, 2022-08-15-preview, 2022-11-15, 2022-11-15-preview, 2023-03-01-preview, 2023-03-15, 2023-03-15-preview, 2023-04-15, 2023-09-15, 2023-09-15-preview, 2023-11-15, 2023-11-15-preview, 2024-02-15-preview, 2024-05-15, 2024-05-15-preview, 2024-08-15, 2024-09-01-preview, 2024-12-01-preview, 2025-04-15, 2025-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cosmosdb [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getMongoDBResourceMongoUserDefinitionOutput(args: GetMongoDBResourceMongoUserDefinitionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetMongoDBResourceMongoUserDefinitionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cosmosdb:getMongoDBResourceMongoUserDefinition", {
        "accountName": args.accountName,
        "mongoUserDefinitionId": args.mongoUserDefinitionId,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMongoDBResourceMongoUserDefinitionOutputArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The ID for the User Definition {dbName.userName}.
     */
    mongoUserDefinitionId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}