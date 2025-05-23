import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a DataSet in a share
 *
 * Uses Azure REST API version 2021-08-01.
 */
export function getSqlDWTableDataSet(args: GetSqlDWTableDataSetArgs, opts?: pulumi.InvokeOptions): Promise<GetSqlDWTableDataSetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datashare:getSqlDWTableDataSet", {
        "accountName": args.accountName,
        "dataSetName": args.dataSetName,
        "resourceGroupName": args.resourceGroupName,
        "shareName": args.shareName,
    }, opts);
}

export interface GetSqlDWTableDataSetArgs {
    /**
     * The name of the share account.
     */
    accountName: string;
    /**
     * The name of the dataSet.
     */
    dataSetName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
    /**
     * The name of the share.
     */
    shareName: string;
}

/**
 * A SQL DW table data set.
 */
export interface GetSqlDWTableDataSetResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Unique id for identifying a data set resource
     */
    readonly dataSetId: string;
    /**
     * DataWarehouse name of the source data set
     */
    readonly dataWarehouseName: string;
    /**
     * The resource id of the azure resource
     */
    readonly id: string;
    /**
     * Kind of data set.
     * Expected value is 'SqlDWTable'.
     */
    readonly kind: "SqlDWTable";
    /**
     * Name of the azure resource
     */
    readonly name: string;
    /**
     * Schema of the table. Default value is dbo.
     */
    readonly schemaName: string;
    /**
     * Resource id of SQL server
     */
    readonly sqlServerResourceId: string;
    /**
     * System Data of the Azure resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * SQL DW table name.
     */
    readonly tableName: string;
    /**
     * Type of the azure resource
     */
    readonly type: string;
}
/**
 * Get a DataSet in a share
 *
 * Uses Azure REST API version 2021-08-01.
 */
export function getSqlDWTableDataSetOutput(args: GetSqlDWTableDataSetOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSqlDWTableDataSetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datashare:getSqlDWTableDataSet", {
        "accountName": args.accountName,
        "dataSetName": args.dataSetName,
        "resourceGroupName": args.resourceGroupName,
        "shareName": args.shareName,
    }, opts);
}

export interface GetSqlDWTableDataSetOutputArgs {
    /**
     * The name of the share account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the dataSet.
     */
    dataSetName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the share.
     */
    shareName: pulumi.Input<string>;
}