import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the SQL trigger under an existing Azure Cosmos DB database account.
 *
 * Uses Azure REST API version 2023-04-15.
 *
 * Other available API versions: 2023-03-15-preview, 2023-09-15, 2023-09-15-preview, 2023-11-15, 2023-11-15-preview, 2024-02-15-preview, 2024-05-15, 2024-05-15-preview, 2024-08-15, 2024-09-01-preview, 2024-11-15, 2024-12-01-preview.
 */
export function getSqlResourceSqlTrigger(args: GetSqlResourceSqlTriggerArgs, opts?: pulumi.InvokeOptions): Promise<GetSqlResourceSqlTriggerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:documentdb:getSqlResourceSqlTrigger", {
        "accountName": args.accountName,
        "containerName": args.containerName,
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
        "triggerName": args.triggerName,
    }, opts);
}

export interface GetSqlResourceSqlTriggerArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: string;
    /**
     * Cosmos DB container name.
     */
    containerName: string;
    /**
     * Cosmos DB database name.
     */
    databaseName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Cosmos DB trigger name.
     */
    triggerName: string;
}

/**
 * An Azure Cosmos DB trigger.
 */
export interface GetSqlResourceSqlTriggerResult {
    /**
     * The unique resource identifier of the ARM resource.
     */
    readonly id: string;
    /**
     * The location of the resource group to which the resource belongs.
     */
    readonly location?: string;
    /**
     * The name of the ARM resource.
     */
    readonly name: string;
    readonly resource?: types.outputs.SqlTriggerGetPropertiesResponseResource;
    /**
     * Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of Azure resource.
     */
    readonly type: string;
}
/**
 * Gets the SQL trigger under an existing Azure Cosmos DB database account.
 *
 * Uses Azure REST API version 2023-04-15.
 *
 * Other available API versions: 2023-03-15-preview, 2023-09-15, 2023-09-15-preview, 2023-11-15, 2023-11-15-preview, 2024-02-15-preview, 2024-05-15, 2024-05-15-preview, 2024-08-15, 2024-09-01-preview, 2024-11-15, 2024-12-01-preview.
 */
export function getSqlResourceSqlTriggerOutput(args: GetSqlResourceSqlTriggerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSqlResourceSqlTriggerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:documentdb:getSqlResourceSqlTrigger", {
        "accountName": args.accountName,
        "containerName": args.containerName,
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
        "triggerName": args.triggerName,
    }, opts);
}

export interface GetSqlResourceSqlTriggerOutputArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * Cosmos DB container name.
     */
    containerName: pulumi.Input<string>;
    /**
     * Cosmos DB database name.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Cosmos DB trigger name.
     */
    triggerName: pulumi.Input<string>;
}