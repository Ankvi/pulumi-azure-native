import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The tasks resource is a nested, proxy-only resource representing work performed by a DMS instance. The GET method retrieves information about a task.
 * Azure REST API version: 2021-06-30.
 */
export function getTask(args: GetTaskArgs, opts?: pulumi.InvokeOptions): Promise<GetTaskResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datamigration:getTask", {
        "expand": args.expand,
        "groupName": args.groupName,
        "projectName": args.projectName,
        "serviceName": args.serviceName,
        "taskName": args.taskName,
    }, opts);
}

export interface GetTaskArgs {
    /**
     * Expand the response
     */
    expand?: string;
    /**
     * Name of the resource group
     */
    groupName: string;
    /**
     * Name of the project
     */
    projectName: string;
    /**
     * Name of the service
     */
    serviceName: string;
    /**
     * Name of the Task
     */
    taskName: string;
}

/**
 * A task resource
 */
export interface GetTaskResult {
    /**
     * HTTP strong entity tag value. This is ignored if submitted.
     */
    readonly etag?: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Custom task properties
     */
    readonly properties: types.outputs.datamigration.ConnectToMongoDbTaskPropertiesResponse | types.outputs.datamigration.ConnectToSourceMySqlTaskPropertiesResponse | types.outputs.datamigration.ConnectToSourceOracleSyncTaskPropertiesResponse | types.outputs.datamigration.ConnectToSourcePostgreSqlSyncTaskPropertiesResponse | types.outputs.datamigration.ConnectToSourceSqlServerSyncTaskPropertiesResponse | types.outputs.datamigration.ConnectToSourceSqlServerTaskPropertiesResponse | types.outputs.datamigration.ConnectToTargetAzureDbForMySqlTaskPropertiesResponse | types.outputs.datamigration.ConnectToTargetAzureDbForPostgreSqlSyncTaskPropertiesResponse | types.outputs.datamigration.ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskPropertiesResponse | types.outputs.datamigration.ConnectToTargetSqlDbTaskPropertiesResponse | types.outputs.datamigration.ConnectToTargetSqlMISyncTaskPropertiesResponse | types.outputs.datamigration.ConnectToTargetSqlMITaskPropertiesResponse | types.outputs.datamigration.ConnectToTargetSqlSqlDbSyncTaskPropertiesResponse | types.outputs.datamigration.GetTdeCertificatesSqlTaskPropertiesResponse | types.outputs.datamigration.GetUserTablesMySqlTaskPropertiesResponse | types.outputs.datamigration.GetUserTablesOracleTaskPropertiesResponse | types.outputs.datamigration.GetUserTablesPostgreSqlTaskPropertiesResponse | types.outputs.datamigration.GetUserTablesSqlSyncTaskPropertiesResponse | types.outputs.datamigration.GetUserTablesSqlTaskPropertiesResponse | types.outputs.datamigration.MigrateMongoDbTaskPropertiesResponse | types.outputs.datamigration.MigrateMySqlAzureDbForMySqlOfflineTaskPropertiesResponse | types.outputs.datamigration.MigrateMySqlAzureDbForMySqlSyncTaskPropertiesResponse | types.outputs.datamigration.MigrateOracleAzureDbForPostgreSqlSyncTaskPropertiesResponse | types.outputs.datamigration.MigratePostgreSqlAzureDbForPostgreSqlSyncTaskPropertiesResponse | types.outputs.datamigration.MigrateSqlServerSqlDbSyncTaskPropertiesResponse | types.outputs.datamigration.MigrateSqlServerSqlDbTaskPropertiesResponse | types.outputs.datamigration.MigrateSqlServerSqlMISyncTaskPropertiesResponse | types.outputs.datamigration.MigrateSqlServerSqlMITaskPropertiesResponse | types.outputs.datamigration.MigrateSsisTaskPropertiesResponse | types.outputs.datamigration.ValidateMigrationInputSqlServerSqlDbSyncTaskPropertiesResponse | types.outputs.datamigration.ValidateMigrationInputSqlServerSqlMISyncTaskPropertiesResponse | types.outputs.datamigration.ValidateMigrationInputSqlServerSqlMITaskPropertiesResponse | types.outputs.datamigration.ValidateMongoDbTaskPropertiesResponse | types.outputs.datamigration.ValidateOracleAzureDbForPostgreSqlSyncTaskPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.datamigration.SystemDataResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * The tasks resource is a nested, proxy-only resource representing work performed by a DMS instance. The GET method retrieves information about a task.
 * Azure REST API version: 2021-06-30.
 */
export function getTaskOutput(args: GetTaskOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTaskResult> {
    return pulumi.output(args).apply((a: any) => getTask(a, opts))
}

export interface GetTaskOutputArgs {
    /**
     * Expand the response
     */
    expand?: pulumi.Input<string>;
    /**
     * Name of the resource group
     */
    groupName: pulumi.Input<string>;
    /**
     * Name of the project
     */
    projectName: pulumi.Input<string>;
    /**
     * Name of the service
     */
    serviceName: pulumi.Input<string>;
    /**
     * Name of the Task
     */
    taskName: pulumi.Input<string>;
}
