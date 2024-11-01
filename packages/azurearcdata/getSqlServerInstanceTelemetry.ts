import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves SQL Server instance telemetry
 * Azure REST API version: 2024-01-01.
 *
 * Other available API versions: 2024-05-01-preview.
 */
export function getSqlServerInstanceTelemetry(args: GetSqlServerInstanceTelemetryArgs, opts?: pulumi.InvokeOptions): Promise<GetSqlServerInstanceTelemetryResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurearcdata:getSqlServerInstanceTelemetry", {
        "aggregationType": args.aggregationType,
        "databaseNames": args.databaseNames,
        "datasetName": args.datasetName,
        "endTime": args.endTime,
        "interval": args.interval,
        "resourceGroupName": args.resourceGroupName,
        "sqlServerInstanceName": args.sqlServerInstanceName,
        "startTime": args.startTime,
    }, opts);
}

export interface GetSqlServerInstanceTelemetryArgs {
    /**
     * The aggregation type to use for the numerical columns in the dataset.
     */
    aggregationType?: string | types.enums.AggregationType;
    /**
     * The list of database names to return telemetry for. If not specified, telemetry for all databases will be aggregated and returned.
     */
    databaseNames?: string[];
    /**
     * The name of the telemetry dataset to retrieve.
     */
    datasetName: string;
    /**
     * The end time for the time range to fetch telemetry for. If not specified, the current time is used.
     */
    endTime?: string;
    /**
     * The time granularity to fetch telemetry for. This is an ISO8601 duration. Examples: PT15M, PT1H, P1D
     */
    interval?: string;
    /**
     * The name of the Azure resource group
     */
    resourceGroupName: string;
    /**
     * Name of SQL Server Instance
     */
    sqlServerInstanceName: string;
    /**
     * The start time for the time range to fetch telemetry for. If not specified, the current time minus 1 hour is used.
     */
    startTime?: string;
}

/**
 * A section of the telemetry response for the SQL Server instance.
 */
export interface GetSqlServerInstanceTelemetryResult {
    /**
     * The columns of the result telemetry table for the SQL Server instance.
     */
    readonly columns: types.outputs.SqlServerInstanceTelemetryColumnResponse[];
    /**
     * The link to the next section of rows of the telemetry response for the SQL Server instance. Null if no more sections are available.
     */
    readonly nextLink: string;
    /**
     * A list of rows from the result telemetry table for the SQL Server instance.
     */
    readonly rows: string[][];
}
/**
 * Retrieves SQL Server instance telemetry
 * Azure REST API version: 2024-01-01.
 *
 * Other available API versions: 2024-05-01-preview.
 */
export function getSqlServerInstanceTelemetryOutput(args: GetSqlServerInstanceTelemetryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSqlServerInstanceTelemetryResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azurearcdata:getSqlServerInstanceTelemetry", {
        "aggregationType": args.aggregationType,
        "databaseNames": args.databaseNames,
        "datasetName": args.datasetName,
        "endTime": args.endTime,
        "interval": args.interval,
        "resourceGroupName": args.resourceGroupName,
        "sqlServerInstanceName": args.sqlServerInstanceName,
        "startTime": args.startTime,
    }, opts);
}

export interface GetSqlServerInstanceTelemetryOutputArgs {
    /**
     * The aggregation type to use for the numerical columns in the dataset.
     */
    aggregationType?: pulumi.Input<string | types.enums.AggregationType>;
    /**
     * The list of database names to return telemetry for. If not specified, telemetry for all databases will be aggregated and returned.
     */
    databaseNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the telemetry dataset to retrieve.
     */
    datasetName: pulumi.Input<string>;
    /**
     * The end time for the time range to fetch telemetry for. If not specified, the current time is used.
     */
    endTime?: pulumi.Input<string>;
    /**
     * The time granularity to fetch telemetry for. This is an ISO8601 duration. Examples: PT15M, PT1H, P1D
     */
    interval?: pulumi.Input<string>;
    /**
     * The name of the Azure resource group
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of SQL Server Instance
     */
    sqlServerInstanceName: pulumi.Input<string>;
    /**
     * The start time for the time range to fetch telemetry for. If not specified, the current time minus 1 hour is used.
     */
    startTime?: pulumi.Input<string>;
}