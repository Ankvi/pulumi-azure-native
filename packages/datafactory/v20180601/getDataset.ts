import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
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
    readonly properties: types.outputs.AmazonMWSObjectDatasetResponse | types.outputs.AmazonRdsForOracleTableDatasetResponse | types.outputs.AmazonRdsForSqlServerTableDatasetResponse | types.outputs.AmazonRedshiftTableDatasetResponse | types.outputs.AmazonS3DatasetResponse | types.outputs.AvroDatasetResponse | types.outputs.AzureBlobDatasetResponse | types.outputs.AzureBlobFSDatasetResponse | types.outputs.AzureDataExplorerTableDatasetResponse | types.outputs.AzureDataLakeStoreDatasetResponse | types.outputs.AzureDatabricksDeltaLakeDatasetResponse | types.outputs.AzureMariaDBTableDatasetResponse | types.outputs.AzureMySqlTableDatasetResponse | types.outputs.AzurePostgreSqlTableDatasetResponse | types.outputs.AzureSearchIndexDatasetResponse | types.outputs.AzureSqlDWTableDatasetResponse | types.outputs.AzureSqlMITableDatasetResponse | types.outputs.AzureSqlTableDatasetResponse | types.outputs.AzureTableDatasetResponse | types.outputs.BinaryDatasetResponse | types.outputs.CassandraTableDatasetResponse | types.outputs.CommonDataServiceForAppsEntityDatasetResponse | types.outputs.ConcurObjectDatasetResponse | types.outputs.CosmosDbMongoDbApiCollectionDatasetResponse | types.outputs.CosmosDbSqlApiCollectionDatasetResponse | types.outputs.CouchbaseTableDatasetResponse | types.outputs.CustomDatasetResponse | types.outputs.Db2TableDatasetResponse | types.outputs.DelimitedTextDatasetResponse | types.outputs.DocumentDbCollectionDatasetResponse | types.outputs.DrillTableDatasetResponse | types.outputs.DynamicsAXResourceDatasetResponse | types.outputs.DynamicsCrmEntityDatasetResponse | types.outputs.DynamicsEntityDatasetResponse | types.outputs.EloquaObjectDatasetResponse | types.outputs.ExcelDatasetResponse | types.outputs.FileShareDatasetResponse | types.outputs.GoogleAdWordsObjectDatasetResponse | types.outputs.GoogleBigQueryObjectDatasetResponse | types.outputs.GoogleBigQueryV2ObjectDatasetResponse | types.outputs.GreenplumTableDatasetResponse | types.outputs.HBaseObjectDatasetResponse | types.outputs.HiveObjectDatasetResponse | types.outputs.HttpDatasetResponse | types.outputs.HubspotObjectDatasetResponse | types.outputs.ImpalaObjectDatasetResponse | types.outputs.InformixTableDatasetResponse | types.outputs.JiraObjectDatasetResponse | types.outputs.JsonDatasetResponse | types.outputs.LakeHouseTableDatasetResponse | types.outputs.MagentoObjectDatasetResponse | types.outputs.MariaDBTableDatasetResponse | types.outputs.MarketoObjectDatasetResponse | types.outputs.MicrosoftAccessTableDatasetResponse | types.outputs.MongoDbAtlasCollectionDatasetResponse | types.outputs.MongoDbCollectionDatasetResponse | types.outputs.MongoDbV2CollectionDatasetResponse | types.outputs.MySqlTableDatasetResponse | types.outputs.NetezzaTableDatasetResponse | types.outputs.ODataResourceDatasetResponse | types.outputs.OdbcTableDatasetResponse | types.outputs.Office365DatasetResponse | types.outputs.OracleServiceCloudObjectDatasetResponse | types.outputs.OracleTableDatasetResponse | types.outputs.OrcDatasetResponse | types.outputs.ParquetDatasetResponse | types.outputs.PaypalObjectDatasetResponse | types.outputs.PhoenixObjectDatasetResponse | types.outputs.PostgreSqlTableDatasetResponse | types.outputs.PostgreSqlV2TableDatasetResponse | types.outputs.PrestoObjectDatasetResponse | types.outputs.QuickBooksObjectDatasetResponse | types.outputs.RelationalTableDatasetResponse | types.outputs.ResponsysObjectDatasetResponse | types.outputs.RestResourceDatasetResponse | types.outputs.SalesforceMarketingCloudObjectDatasetResponse | types.outputs.SalesforceObjectDatasetResponse | types.outputs.SalesforceServiceCloudObjectDatasetResponse | types.outputs.SalesforceServiceCloudV2ObjectDatasetResponse | types.outputs.SalesforceV2ObjectDatasetResponse | types.outputs.SapBwCubeDatasetResponse | types.outputs.SapCloudForCustomerResourceDatasetResponse | types.outputs.SapEccResourceDatasetResponse | types.outputs.SapHanaTableDatasetResponse | types.outputs.SapOdpResourceDatasetResponse | types.outputs.SapOpenHubTableDatasetResponse | types.outputs.SapTableResourceDatasetResponse | types.outputs.ServiceNowObjectDatasetResponse | types.outputs.ServiceNowV2ObjectDatasetResponse | types.outputs.SharePointOnlineListResourceDatasetResponse | types.outputs.ShopifyObjectDatasetResponse | types.outputs.SnowflakeDatasetResponse | types.outputs.SnowflakeV2DatasetResponse | types.outputs.SparkObjectDatasetResponse | types.outputs.SqlServerTableDatasetResponse | types.outputs.SquareObjectDatasetResponse | types.outputs.SybaseTableDatasetResponse | types.outputs.TeradataTableDatasetResponse | types.outputs.VerticaTableDatasetResponse | types.outputs.WarehouseTableDatasetResponse | types.outputs.WebTableDatasetResponse | types.outputs.XeroObjectDatasetResponse | types.outputs.XmlDatasetResponse | types.outputs.ZohoObjectDatasetResponse;
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