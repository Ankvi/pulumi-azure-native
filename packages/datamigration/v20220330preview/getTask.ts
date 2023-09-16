import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * The tasks resource is a nested, proxy-only resource representing work performed by a DMS (classic) instance. The GET method retrieves information about a task.
 */
export function getTask(args: GetTaskArgs, opts?: pulumi.InvokeOptions): Promise<GetTaskResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datamigration/v20220330preview:getTask", {
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
    readonly properties: types.outputs.datamigration.v20220330preview.ConnectToMongoDbTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.ConnectToSourceMySqlTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.ConnectToSourceOracleSyncTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.ConnectToSourcePostgreSqlSyncTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.ConnectToSourceSqlServerSyncTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.ConnectToSourceSqlServerTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.ConnectToTargetAzureDbForMySqlTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.ConnectToTargetAzureDbForPostgreSqlSyncTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.ConnectToTargetSqlDbTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.ConnectToTargetSqlMISyncTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.ConnectToTargetSqlMITaskPropertiesResponse | types.outputs.datamigration.v20220330preview.ConnectToTargetSqlSqlDbSyncTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.GetTdeCertificatesSqlTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.GetUserTablesMySqlTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.GetUserTablesOracleTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.GetUserTablesPostgreSqlTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.GetUserTablesSqlSyncTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.GetUserTablesSqlTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.MigrateMongoDbTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.MigrateMySqlAzureDbForMySqlOfflineTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.MigrateMySqlAzureDbForMySqlSyncTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.MigrateOracleAzureDbForPostgreSqlSyncTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.MigratePostgreSqlAzureDbForPostgreSqlSyncTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.MigrateSqlServerSqlDbSyncTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.MigrateSqlServerSqlDbTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.MigrateSqlServerSqlMISyncTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.MigrateSqlServerSqlMITaskPropertiesResponse | types.outputs.datamigration.v20220330preview.MigrateSsisTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.ValidateMigrationInputSqlServerSqlDbSyncTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.ValidateMigrationInputSqlServerSqlMISyncTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.ValidateMigrationInputSqlServerSqlMITaskPropertiesResponse | types.outputs.datamigration.v20220330preview.ValidateMongoDbTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.ValidateOracleAzureDbForPostgreSqlSyncTaskPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.datamigration.v20220330preview.SystemDataResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * The tasks resource is a nested, proxy-only resource representing work performed by a DMS (classic) instance. The GET method retrieves information about a task.
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
