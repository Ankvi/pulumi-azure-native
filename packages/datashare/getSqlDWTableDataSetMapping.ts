import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a DataSetMapping in a shareSubscription
 * Azure REST API version: 2021-08-01.
 */
export function getSqlDWTableDataSetMapping(args: GetSqlDWTableDataSetMappingArgs, opts?: pulumi.InvokeOptions): Promise<GetSqlDWTableDataSetMappingResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datashare:getSqlDWTableDataSetMapping", {
        "accountName": args.accountName,
        "dataSetMappingName": args.dataSetMappingName,
        "resourceGroupName": args.resourceGroupName,
        "shareSubscriptionName": args.shareSubscriptionName,
    }, opts);
}

export interface GetSqlDWTableDataSetMappingArgs {
    /**
     * The name of the share account.
     */
    accountName: string;
    /**
     * The name of the dataSetMapping.
     */
    dataSetMappingName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
    /**
     * The name of the shareSubscription.
     */
    shareSubscriptionName: string;
}

/**
 * A SQL DW Table data set mapping.
 */
export interface GetSqlDWTableDataSetMappingResult {
    /**
     * The id of the source data set.
     */
    readonly dataSetId: string;
    /**
     * Gets the status of the data set mapping.
     */
    readonly dataSetMappingStatus: string;
    /**
     * DataWarehouse name of the source data set
     */
    readonly dataWarehouseName: string;
    /**
     * The resource id of the azure resource
     */
    readonly id: string;
    /**
     * Kind of data set mapping.
     * Expected value is 'SqlDWTable'.
     */
    readonly kind: "SqlDWTable";
    /**
     * Name of the azure resource
     */
    readonly name: string;
    /**
     * Provisioning state of the data set mapping.
     */
    readonly provisioningState: string;
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
    readonly systemData: types.outputs.datashare.SystemDataResponse;
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
 * Get a DataSetMapping in a shareSubscription
 * Azure REST API version: 2021-08-01.
 */
export function getSqlDWTableDataSetMappingOutput(args: GetSqlDWTableDataSetMappingOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSqlDWTableDataSetMappingResult> {
    return pulumi.output(args).apply((a: any) => getSqlDWTableDataSetMapping(a, opts))
}

export interface GetSqlDWTableDataSetMappingOutputArgs {
    /**
     * The name of the share account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the dataSetMapping.
     */
    dataSetMappingName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the shareSubscription.
     */
    shareSubscriptionName: pulumi.Input<string>;
}
