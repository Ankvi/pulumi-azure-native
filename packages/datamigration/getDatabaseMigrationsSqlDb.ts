import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve the Database Migration resource.
 * Azure REST API version: 2022-03-30-preview.
 *
 * Other available API versions: 2023-07-15-preview.
 */
export function getDatabaseMigrationsSqlDb(args: GetDatabaseMigrationsSqlDbArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseMigrationsSqlDbResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datamigration:getDatabaseMigrationsSqlDb", {
        "expand": args.expand,
        "migrationOperationId": args.migrationOperationId,
        "resourceGroupName": args.resourceGroupName,
        "sqlDbInstanceName": args.sqlDbInstanceName,
        "targetDbName": args.targetDbName,
    }, opts);
}

export interface GetDatabaseMigrationsSqlDbArgs {
    /**
     * Complete migration details be included in the response.
     */
    expand?: string;
    /**
     * Optional migration operation ID. If this is provided, then details of migration operation for that ID are retrieved. If not provided (default), then details related to most recent or current operation are retrieved.
     */
    migrationOperationId?: string;
    /**
     * Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    sqlDbInstanceName: string;
    /**
     * The name of the target database.
     */
    targetDbName: string;
}

/**
 * Database Migration Resource for SQL Database.
 */
export interface GetDatabaseMigrationsSqlDbResult {
    readonly id: string;
    readonly name: string;
    /**
     * Database Migration Resource properties for SQL database.
     */
    readonly properties: types.outputs.DatabaseMigrationPropertiesSqlDbResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    readonly type: string;
}
/**
 * Retrieve the Database Migration resource.
 * Azure REST API version: 2022-03-30-preview.
 *
 * Other available API versions: 2023-07-15-preview.
 */
export function getDatabaseMigrationsSqlDbOutput(args: GetDatabaseMigrationsSqlDbOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDatabaseMigrationsSqlDbResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datamigration:getDatabaseMigrationsSqlDb", {
        "expand": args.expand,
        "migrationOperationId": args.migrationOperationId,
        "resourceGroupName": args.resourceGroupName,
        "sqlDbInstanceName": args.sqlDbInstanceName,
        "targetDbName": args.targetDbName,
    }, opts);
}

export interface GetDatabaseMigrationsSqlDbOutputArgs {
    /**
     * Complete migration details be included in the response.
     */
    expand?: pulumi.Input<string>;
    /**
     * Optional migration operation ID. If this is provided, then details of migration operation for that ID are retrieved. If not provided (default), then details related to most recent or current operation are retrieved.
     */
    migrationOperationId?: pulumi.Input<string>;
    /**
     * Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    sqlDbInstanceName: pulumi.Input<string>;
    /**
     * The name of the target database.
     */
    targetDbName: pulumi.Input<string>;
}