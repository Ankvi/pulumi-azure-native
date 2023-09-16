import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a dataset.
 * Azure REST API version: 2018-06-01.
 */
export function getDataset(args: GetDatasetArgs, opts?: pulumi.InvokeOptions): Promise<GetDatasetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datafactory:getDataset", {
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
    readonly properties: types.outputs.datafactory.AmazonMWSObjectDatasetResponse | types.outputs.datafactory.AmazonRdsForOracleTableDatasetResponse | types.outputs.datafactory.AmazonRdsForSqlServerTableDatasetResponse | types.outputs.datafactory.AmazonRedshiftTableDatasetResponse | types.outputs.datafactory.AmazonS3DatasetResponse | types.outputs.datafactory.AvroDatasetResponse | types.outputs.datafactory.AzureBlobDatasetResponse | types.outputs.datafactory.AzureBlobFSDatasetResponse | types.outputs.datafactory.AzureDataExplorerTableDatasetResponse | types.outputs.datafactory.AzureDataLakeStoreDatasetResponse | types.outputs.datafactory.AzureDatabricksDeltaLakeDatasetResponse | types.outputs.datafactory.AzureMariaDBTableDatasetResponse | types.outputs.datafactory.AzureMySqlTableDatasetResponse | types.outputs.datafactory.AzurePostgreSqlTableDatasetResponse | types.outputs.datafactory.AzureSearchIndexDatasetResponse | types.outputs.datafactory.AzureSqlDWTableDatasetResponse | types.outputs.datafactory.AzureSqlMITableDatasetResponse | types.outputs.datafactory.AzureSqlTableDatasetResponse | types.outputs.datafactory.AzureTableDatasetResponse | types.outputs.datafactory.BinaryDatasetResponse | types.outputs.datafactory.CassandraTableDatasetResponse | types.outputs.datafactory.CommonDataServiceForAppsEntityDatasetResponse | types.outputs.datafactory.ConcurObjectDatasetResponse | types.outputs.datafactory.CosmosDbMongoDbApiCollectionDatasetResponse | types.outputs.datafactory.CosmosDbSqlApiCollectionDatasetResponse | types.outputs.datafactory.CouchbaseTableDatasetResponse | types.outputs.datafactory.CustomDatasetResponse | types.outputs.datafactory.Db2TableDatasetResponse | types.outputs.datafactory.DelimitedTextDatasetResponse | types.outputs.datafactory.DocumentDbCollectionDatasetResponse | types.outputs.datafactory.DrillTableDatasetResponse | types.outputs.datafactory.DynamicsAXResourceDatasetResponse | types.outputs.datafactory.DynamicsCrmEntityDatasetResponse | types.outputs.datafactory.DynamicsEntityDatasetResponse | types.outputs.datafactory.EloquaObjectDatasetResponse | types.outputs.datafactory.ExcelDatasetResponse | types.outputs.datafactory.FileShareDatasetResponse | types.outputs.datafactory.GoogleAdWordsObjectDatasetResponse | types.outputs.datafactory.GoogleBigQueryObjectDatasetResponse | types.outputs.datafactory.GreenplumTableDatasetResponse | types.outputs.datafactory.HBaseObjectDatasetResponse | types.outputs.datafactory.HiveObjectDatasetResponse | types.outputs.datafactory.HttpDatasetResponse | types.outputs.datafactory.HubspotObjectDatasetResponse | types.outputs.datafactory.ImpalaObjectDatasetResponse | types.outputs.datafactory.InformixTableDatasetResponse | types.outputs.datafactory.JiraObjectDatasetResponse | types.outputs.datafactory.JsonDatasetResponse | types.outputs.datafactory.MagentoObjectDatasetResponse | types.outputs.datafactory.MariaDBTableDatasetResponse | types.outputs.datafactory.MarketoObjectDatasetResponse | types.outputs.datafactory.MicrosoftAccessTableDatasetResponse | types.outputs.datafactory.MongoDbAtlasCollectionDatasetResponse | types.outputs.datafactory.MongoDbCollectionDatasetResponse | types.outputs.datafactory.MongoDbV2CollectionDatasetResponse | types.outputs.datafactory.MySqlTableDatasetResponse | types.outputs.datafactory.NetezzaTableDatasetResponse | types.outputs.datafactory.ODataResourceDatasetResponse | types.outputs.datafactory.OdbcTableDatasetResponse | types.outputs.datafactory.Office365DatasetResponse | types.outputs.datafactory.OracleServiceCloudObjectDatasetResponse | types.outputs.datafactory.OracleTableDatasetResponse | types.outputs.datafactory.OrcDatasetResponse | types.outputs.datafactory.ParquetDatasetResponse | types.outputs.datafactory.PaypalObjectDatasetResponse | types.outputs.datafactory.PhoenixObjectDatasetResponse | types.outputs.datafactory.PostgreSqlTableDatasetResponse | types.outputs.datafactory.PrestoObjectDatasetResponse | types.outputs.datafactory.QuickBooksObjectDatasetResponse | types.outputs.datafactory.RelationalTableDatasetResponse | types.outputs.datafactory.ResponsysObjectDatasetResponse | types.outputs.datafactory.RestResourceDatasetResponse | types.outputs.datafactory.SalesforceMarketingCloudObjectDatasetResponse | types.outputs.datafactory.SalesforceObjectDatasetResponse | types.outputs.datafactory.SalesforceServiceCloudObjectDatasetResponse | types.outputs.datafactory.SapBwCubeDatasetResponse | types.outputs.datafactory.SapCloudForCustomerResourceDatasetResponse | types.outputs.datafactory.SapEccResourceDatasetResponse | types.outputs.datafactory.SapHanaTableDatasetResponse | types.outputs.datafactory.SapOdpResourceDatasetResponse | types.outputs.datafactory.SapOpenHubTableDatasetResponse | types.outputs.datafactory.SapTableResourceDatasetResponse | types.outputs.datafactory.ServiceNowObjectDatasetResponse | types.outputs.datafactory.SharePointOnlineListResourceDatasetResponse | types.outputs.datafactory.ShopifyObjectDatasetResponse | types.outputs.datafactory.SnowflakeDatasetResponse | types.outputs.datafactory.SparkObjectDatasetResponse | types.outputs.datafactory.SqlServerTableDatasetResponse | types.outputs.datafactory.SquareObjectDatasetResponse | types.outputs.datafactory.SybaseTableDatasetResponse | types.outputs.datafactory.TeradataTableDatasetResponse | types.outputs.datafactory.VerticaTableDatasetResponse | types.outputs.datafactory.WebTableDatasetResponse | types.outputs.datafactory.XeroObjectDatasetResponse | types.outputs.datafactory.XmlDatasetResponse | types.outputs.datafactory.ZohoObjectDatasetResponse;
    /**
     * The resource type.
     */
    readonly type: string;
}
/**
 * Gets a dataset.
 * Azure REST API version: 2018-06-01.
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
