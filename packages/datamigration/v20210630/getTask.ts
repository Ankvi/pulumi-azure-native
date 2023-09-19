import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The tasks resource is a nested, proxy-only resource representing work performed by a DMS instance. The GET method retrieves information about a task.
 */
export function getTask(args: GetTaskArgs, opts?: pulumi.InvokeOptions): Promise<GetTaskResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datamigration/v20210630:getTask", {
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
    readonly properties: types.outputs.ConnectToMongoDbTaskPropertiesResponse | types.outputs.ConnectToSourceMySqlTaskPropertiesResponse | types.outputs.ConnectToSourceOracleSyncTaskPropertiesResponse | types.outputs.ConnectToSourcePostgreSqlSyncTaskPropertiesResponse | types.outputs.ConnectToSourceSqlServerSyncTaskPropertiesResponse | types.outputs.ConnectToSourceSqlServerTaskPropertiesResponse | types.outputs.ConnectToTargetAzureDbForMySqlTaskPropertiesResponse | types.outputs.ConnectToTargetAzureDbForPostgreSqlSyncTaskPropertiesResponse | types.outputs.ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskPropertiesResponse | types.outputs.ConnectToTargetSqlDbTaskPropertiesResponse | types.outputs.ConnectToTargetSqlMISyncTaskPropertiesResponse | types.outputs.ConnectToTargetSqlMITaskPropertiesResponse | types.outputs.ConnectToTargetSqlSqlDbSyncTaskPropertiesResponse | types.outputs.GetTdeCertificatesSqlTaskPropertiesResponse | types.outputs.GetUserTablesMySqlTaskPropertiesResponse | types.outputs.GetUserTablesOracleTaskPropertiesResponse | types.outputs.GetUserTablesPostgreSqlTaskPropertiesResponse | types.outputs.GetUserTablesSqlSyncTaskPropertiesResponse | types.outputs.GetUserTablesSqlTaskPropertiesResponse | types.outputs.MigrateMongoDbTaskPropertiesResponse | types.outputs.MigrateMySqlAzureDbForMySqlOfflineTaskPropertiesResponse | types.outputs.MigrateMySqlAzureDbForMySqlSyncTaskPropertiesResponse | types.outputs.MigrateOracleAzureDbForPostgreSqlSyncTaskPropertiesResponse | types.outputs.MigratePostgreSqlAzureDbForPostgreSqlSyncTaskPropertiesResponse | types.outputs.MigrateSqlServerSqlDbSyncTaskPropertiesResponse | types.outputs.MigrateSqlServerSqlDbTaskPropertiesResponse | types.outputs.MigrateSqlServerSqlMISyncTaskPropertiesResponse | types.outputs.MigrateSqlServerSqlMITaskPropertiesResponse | types.outputs.MigrateSsisTaskPropertiesResponse | types.outputs.ValidateMigrationInputSqlServerSqlDbSyncTaskPropertiesResponse | types.outputs.ValidateMigrationInputSqlServerSqlMISyncTaskPropertiesResponse | types.outputs.ValidateMigrationInputSqlServerSqlMITaskPropertiesResponse | types.outputs.ValidateMongoDbTaskPropertiesResponse | types.outputs.ValidateOracleAzureDbForPostgreSqlSyncTaskPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * The tasks resource is a nested, proxy-only resource representing work performed by a DMS instance. The GET method retrieves information about a task.
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
