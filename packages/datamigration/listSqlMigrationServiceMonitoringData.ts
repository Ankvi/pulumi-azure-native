import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve the registered Integration Runtime nodes and their monitoring data for a given Database Migration Service.
 * Azure REST API version: 2022-03-30-preview.
 *
 * Other available API versions: 2023-07-15-preview.
 */
export function listSqlMigrationServiceMonitoringData(args: ListSqlMigrationServiceMonitoringDataArgs, opts?: pulumi.InvokeOptions): Promise<ListSqlMigrationServiceMonitoringDataResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datamigration:listSqlMigrationServiceMonitoringData", {
        "resourceGroupName": args.resourceGroupName,
        "sqlMigrationServiceName": args.sqlMigrationServiceName,
    }, opts);
}

export interface ListSqlMigrationServiceMonitoringDataArgs {
    /**
     * Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * Name of the SQL Migration Service.
     */
    sqlMigrationServiceName: string;
}

/**
 * Integration Runtime Monitoring Data.
 */
export interface ListSqlMigrationServiceMonitoringDataResult {
    /**
     * The name of Integration Runtime.
     */
    readonly name: string;
    /**
     * Integration Runtime node monitoring data.
     */
    readonly nodes: types.outputs.NodeMonitoringDataResponse[];
}
/**
 * Retrieve the registered Integration Runtime nodes and their monitoring data for a given Database Migration Service.
 * Azure REST API version: 2022-03-30-preview.
 *
 * Other available API versions: 2023-07-15-preview.
 */
export function listSqlMigrationServiceMonitoringDataOutput(args: ListSqlMigrationServiceMonitoringDataOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListSqlMigrationServiceMonitoringDataResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datamigration:listSqlMigrationServiceMonitoringData", {
        "resourceGroupName": args.resourceGroupName,
        "sqlMigrationServiceName": args.sqlMigrationServiceName,
    }, opts);
}

export interface ListSqlMigrationServiceMonitoringDataOutputArgs {
    /**
     * Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the SQL Migration Service.
     */
    sqlMigrationServiceName: pulumi.Input<string>;
}