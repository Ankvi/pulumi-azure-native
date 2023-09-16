import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets a dataset.
 */
export function getDataset(args: GetDatasetArgs, opts?: pulumi.InvokeOptions): Promise<GetDatasetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datafactory/v20180601:getDataset", {
        "datasetName": args.datasetName,
        "factoryName": args.factoryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDatasetArgs {
    /**
     * The dataset name.
     */
    datasetName: string;
    /**
     * The factory name.
     */
    factoryName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * Dataset resource type.
 */
export interface GetDatasetResult {
    /**
     * Etag identifies change in the resource.
     */
    readonly etag: string;
    /**
     * The resource identifier.
     */
    readonly id: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * Dataset properties.
     */
    readonly properties: types.outputs.datafactory.v20180601.AmazonMWSObjectDatasetResponse | types.outputs.datafactory.v20180601.AmazonRdsForOracleTableDatasetResponse | types.outputs.datafactory.v20180601.AmazonRdsForSqlServerTableDatasetResponse | types.outputs.datafactory.v20180601.AmazonRedshiftTableDatasetResponse | types.outputs.datafactory.v20180601.AmazonS3DatasetResponse | types.outputs.datafactory.v20180601.AvroDatasetResponse | types.outputs.datafactory.v20180601.AzureBlobDatasetResponse | types.outputs.datafactory.v20180601.AzureBlobFSDatasetResponse | types.outputs.datafactory.v20180601.AzureDataExplorerTableDatasetResponse | types.outputs.datafactory.v20180601.AzureDataLakeStoreDatasetResponse | types.outputs.datafactory.v20180601.AzureDatabricksDeltaLakeDatasetResponse | types.outputs.datafactory.v20180601.AzureMariaDBTableDatasetResponse | types.outputs.datafactory.v20180601.AzureMySqlTableDatasetResponse | types.outputs.datafactory.v20180601.AzurePostgreSqlTableDatasetResponse | types.outputs.datafactory.v20180601.AzureSearchIndexDatasetResponse | types.outputs.datafactory.v20180601.AzureSqlDWTableDatasetResponse | types.outputs.datafactory.v20180601.AzureSqlMITableDatasetResponse | types.outputs.datafactory.v20180601.AzureSqlTableDatasetResponse | types.outputs.datafactory.v20180601.AzureTableDatasetResponse | types.outputs.datafactory.v20180601.BinaryDatasetResponse | types.outputs.datafactory.v20180601.CassandraTableDatasetResponse | types.outputs.datafactory.v20180601.CommonDataServiceForAppsEntityDatasetResponse | types.outputs.datafactory.v20180601.ConcurObjectDatasetResponse | types.outputs.datafactory.v20180601.CosmosDbMongoDbApiCollectionDatasetResponse | types.outputs.datafactory.v20180601.CosmosDbSqlApiCollectionDatasetResponse | types.outputs.datafactory.v20180601.CouchbaseTableDatasetResponse | types.outputs.datafactory.v20180601.CustomDatasetResponse | types.outputs.datafactory.v20180601.Db2TableDatasetResponse | types.outputs.datafactory.v20180601.DelimitedTextDatasetResponse | types.outputs.datafactory.v20180601.DocumentDbCollectionDatasetResponse | types.outputs.datafactory.v20180601.DrillTableDatasetResponse | types.outputs.datafactory.v20180601.DynamicsAXResourceDatasetResponse | types.outputs.datafactory.v20180601.DynamicsCrmEntityDatasetResponse | types.outputs.datafactory.v20180601.DynamicsEntityDatasetResponse | types.outputs.datafactory.v20180601.EloquaObjectDatasetResponse | types.outputs.datafactory.v20180601.ExcelDatasetResponse | types.outputs.datafactory.v20180601.FileShareDatasetResponse | types.outputs.datafactory.v20180601.GoogleAdWordsObjectDatasetResponse | types.outputs.datafactory.v20180601.GoogleBigQueryObjectDatasetResponse | types.outputs.datafactory.v20180601.GreenplumTableDatasetResponse | types.outputs.datafactory.v20180601.HBaseObjectDatasetResponse | types.outputs.datafactory.v20180601.HiveObjectDatasetResponse | types.outputs.datafactory.v20180601.HttpDatasetResponse | types.outputs.datafactory.v20180601.HubspotObjectDatasetResponse | types.outputs.datafactory.v20180601.ImpalaObjectDatasetResponse | types.outputs.datafactory.v20180601.InformixTableDatasetResponse | types.outputs.datafactory.v20180601.JiraObjectDatasetResponse | types.outputs.datafactory.v20180601.JsonDatasetResponse | types.outputs.datafactory.v20180601.MagentoObjectDatasetResponse | types.outputs.datafactory.v20180601.MariaDBTableDatasetResponse | types.outputs.datafactory.v20180601.MarketoObjectDatasetResponse | types.outputs.datafactory.v20180601.MicrosoftAccessTableDatasetResponse | types.outputs.datafactory.v20180601.MongoDbAtlasCollectionDatasetResponse | types.outputs.datafactory.v20180601.MongoDbCollectionDatasetResponse | types.outputs.datafactory.v20180601.MongoDbV2CollectionDatasetResponse | types.outputs.datafactory.v20180601.MySqlTableDatasetResponse | types.outputs.datafactory.v20180601.NetezzaTableDatasetResponse | types.outputs.datafactory.v20180601.ODataResourceDatasetResponse | types.outputs.datafactory.v20180601.OdbcTableDatasetResponse | types.outputs.datafactory.v20180601.Office365DatasetResponse | types.outputs.datafactory.v20180601.OracleServiceCloudObjectDatasetResponse | types.outputs.datafactory.v20180601.OracleTableDatasetResponse | types.outputs.datafactory.v20180601.OrcDatasetResponse | types.outputs.datafactory.v20180601.ParquetDatasetResponse | types.outputs.datafactory.v20180601.PaypalObjectDatasetResponse | types.outputs.datafactory.v20180601.PhoenixObjectDatasetResponse | types.outputs.datafactory.v20180601.PostgreSqlTableDatasetResponse | types.outputs.datafactory.v20180601.PrestoObjectDatasetResponse | types.outputs.datafactory.v20180601.QuickBooksObjectDatasetResponse | types.outputs.datafactory.v20180601.RelationalTableDatasetResponse | types.outputs.datafactory.v20180601.ResponsysObjectDatasetResponse | types.outputs.datafactory.v20180601.RestResourceDatasetResponse | types.outputs.datafactory.v20180601.SalesforceMarketingCloudObjectDatasetResponse | types.outputs.datafactory.v20180601.SalesforceObjectDatasetResponse | types.outputs.datafactory.v20180601.SalesforceServiceCloudObjectDatasetResponse | types.outputs.datafactory.v20180601.SapBwCubeDatasetResponse | types.outputs.datafactory.v20180601.SapCloudForCustomerResourceDatasetResponse | types.outputs.datafactory.v20180601.SapEccResourceDatasetResponse | types.outputs.datafactory.v20180601.SapHanaTableDatasetResponse | types.outputs.datafactory.v20180601.SapOdpResourceDatasetResponse | types.outputs.datafactory.v20180601.SapOpenHubTableDatasetResponse | types.outputs.datafactory.v20180601.SapTableResourceDatasetResponse | types.outputs.datafactory.v20180601.ServiceNowObjectDatasetResponse | types.outputs.datafactory.v20180601.SharePointOnlineListResourceDatasetResponse | types.outputs.datafactory.v20180601.ShopifyObjectDatasetResponse | types.outputs.datafactory.v20180601.SnowflakeDatasetResponse | types.outputs.datafactory.v20180601.SparkObjectDatasetResponse | types.outputs.datafactory.v20180601.SqlServerTableDatasetResponse | types.outputs.datafactory.v20180601.SquareObjectDatasetResponse | types.outputs.datafactory.v20180601.SybaseTableDatasetResponse | types.outputs.datafactory.v20180601.TeradataTableDatasetResponse | types.outputs.datafactory.v20180601.VerticaTableDatasetResponse | types.outputs.datafactory.v20180601.WebTableDatasetResponse | types.outputs.datafactory.v20180601.XeroObjectDatasetResponse | types.outputs.datafactory.v20180601.XmlDatasetResponse | types.outputs.datafactory.v20180601.ZohoObjectDatasetResponse;
    /**
     * The resource type.
     */
    readonly type: string;
}
/**
 * Gets a dataset.
 */
export function getDatasetOutput(args: GetDatasetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatasetResult> {
    return pulumi.output(args).apply((a: any) => getDataset(a, opts))
}

export interface GetDatasetOutputArgs {
    /**
     * The dataset name.
     */
    datasetName: pulumi.Input<string>;
    /**
     * The factory name.
     */
    factoryName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}
