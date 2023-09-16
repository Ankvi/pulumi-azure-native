import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * The service tasks resource is a nested, proxy-only resource representing work performed by a DMS instance. The GET method retrieves information about a service task.
 */
export function getServiceTask(args: GetServiceTaskArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceTaskResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datamigration/v20210630:getServiceTask", {
        "expand": args.expand,
        "groupName": args.groupName,
        "serviceName": args.serviceName,
        "taskName": args.taskName,
    }, opts);
}

export interface GetServiceTaskArgs {
    /**
     * Expand the response
     */
    expand?: string;
    /**
     * Name of the resource group
     */
    groupName: string;
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
export interface GetServiceTaskResult {
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
    readonly properties: types.outputs.datamigration.v20210630.ConnectToMongoDbTaskPropertiesResponse | types.outputs.datamigration.v20210630.ConnectToSourceMySqlTaskPropertiesResponse | types.outputs.datamigration.v20210630.ConnectToSourceOracleSyncTaskPropertiesResponse | types.outputs.datamigration.v20210630.ConnectToSourcePostgreSqlSyncTaskPropertiesResponse | types.outputs.datamigration.v20210630.ConnectToSourceSqlServerSyncTaskPropertiesResponse | types.outputs.datamigration.v20210630.ConnectToSourceSqlServerTaskPropertiesResponse | types.outputs.datamigration.v20210630.ConnectToTargetAzureDbForMySqlTaskPropertiesResponse | types.outputs.datamigration.v20210630.ConnectToTargetAzureDbForPostgreSqlSyncTaskPropertiesResponse | types.outputs.datamigration.v20210630.ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskPropertiesResponse | types.outputs.datamigration.v20210630.ConnectToTargetSqlDbTaskPropertiesResponse | types.outputs.datamigration.v20210630.ConnectToTargetSqlMISyncTaskPropertiesResponse | types.outputs.datamigration.v20210630.ConnectToTargetSqlMITaskPropertiesResponse | types.outputs.datamigration.v20210630.ConnectToTargetSqlSqlDbSyncTaskPropertiesResponse | types.outputs.datamigration.v20210630.GetTdeCertificatesSqlTaskPropertiesResponse | types.outputs.datamigration.v20210630.GetUserTablesMySqlTaskPropertiesResponse | types.outputs.datamigration.v20210630.GetUserTablesOracleTaskPropertiesResponse | types.outputs.datamigration.v20210630.GetUserTablesPostgreSqlTaskPropertiesResponse | types.outputs.datamigration.v20210630.GetUserTablesSqlSyncTaskPropertiesResponse | types.outputs.datamigration.v20210630.GetUserTablesSqlTaskPropertiesResponse | types.outputs.datamigration.v20210630.MigrateMongoDbTaskPropertiesResponse | types.outputs.datamigration.v20210630.MigrateMySqlAzureDbForMySqlOfflineTaskPropertiesResponse | types.outputs.datamigration.v20210630.MigrateMySqlAzureDbForMySqlSyncTaskPropertiesResponse | types.outputs.datamigration.v20210630.MigrateOracleAzureDbForPostgreSqlSyncTaskPropertiesResponse | types.outputs.datamigration.v20210630.MigratePostgreSqlAzureDbForPostgreSqlSyncTaskPropertiesResponse | types.outputs.datamigration.v20210630.MigrateSqlServerSqlDbSyncTaskPropertiesResponse | types.outputs.datamigration.v20210630.MigrateSqlServerSqlDbTaskPropertiesResponse | types.outputs.datamigration.v20210630.MigrateSqlServerSqlMISyncTaskPropertiesResponse | types.outputs.datamigration.v20210630.MigrateSqlServerSqlMITaskPropertiesResponse | types.outputs.datamigration.v20210630.MigrateSsisTaskPropertiesResponse | types.outputs.datamigration.v20210630.ValidateMigrationInputSqlServerSqlDbSyncTaskPropertiesResponse | types.outputs.datamigration.v20210630.ValidateMigrationInputSqlServerSqlMISyncTaskPropertiesResponse | types.outputs.datamigration.v20210630.ValidateMigrationInputSqlServerSqlMITaskPropertiesResponse | types.outputs.datamigration.v20210630.ValidateMongoDbTaskPropertiesResponse | types.outputs.datamigration.v20210630.ValidateOracleAzureDbForPostgreSqlSyncTaskPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.datamigration.v20210630.SystemDataResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * The service tasks resource is a nested, proxy-only resource representing work performed by a DMS instance. The GET method retrieves information about a service task.
 */
export function getServiceTaskOutput(args: GetServiceTaskOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServiceTaskResult> {
    return pulumi.output(args).apply((a: any) => getServiceTask(a, opts))
}

export interface GetServiceTaskOutputArgs {
    /**
     * Expand the response
     */
    expand?: pulumi.Input<string>;
    /**
     * Name of the resource group
     */
    groupName: pulumi.Input<string>;
    /**
     * Name of the service
     */
    serviceName: pulumi.Input<string>;
    /**
     * Name of the Task
     */
    taskName: pulumi.Input<string>;
}
