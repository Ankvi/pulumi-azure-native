import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves an Arc Sql Server database.
 * Azure REST API version: 2023-01-15-preview.
 *
 * Other available API versions: 2024-01-01, 2024-05-01-preview.
 */
export function getSqlServerDatabase(args: GetSqlServerDatabaseArgs, opts?: pulumi.InvokeOptions): Promise<GetSqlServerDatabaseResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurearcdata:getSqlServerDatabase", {
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
        "sqlServerInstanceName": args.sqlServerInstanceName,
    }, opts);
}

export interface GetSqlServerDatabaseArgs {
    /**
     * Name of the database
     */
    databaseName: string;
    /**
     * The name of the Azure resource group
     */
    resourceGroupName: string;
    /**
     * Name of SQL Server Instance
     */
    sqlServerInstanceName: string;
}

/**
 * Arc Sql Server database
 */
export interface GetSqlServerDatabaseResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Properties of Arc Sql Server database
     */
    readonly properties: types.outputs.SqlServerDatabaseResourcePropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Retrieves an Arc Sql Server database.
 * Azure REST API version: 2023-01-15-preview.
 *
 * Other available API versions: 2024-01-01, 2024-05-01-preview.
 */
export function getSqlServerDatabaseOutput(args: GetSqlServerDatabaseOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSqlServerDatabaseResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azurearcdata:getSqlServerDatabase", {
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
        "sqlServerInstanceName": args.sqlServerInstanceName,
    }, opts);
}

export interface GetSqlServerDatabaseOutputArgs {
    /**
     * Name of the database
     */
    databaseName: pulumi.Input<string>;
    /**
     * The name of the Azure resource group
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of SQL Server Instance
     */
    sqlServerInstanceName: pulumi.Input<string>;
}