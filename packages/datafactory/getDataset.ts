import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a dataset.
 *
 * Uses Azure REST API version 2018-06-01.
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
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Dataset resource type.
 */
export interface GetDatasetResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * "If etag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.")
     */
    readonly etag: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Dataset properties.
     */
    readonly properties: types.outputs.AmazonMWSObjectDatasetResponse | types.outputs.AmazonRdsForOracleTableDatasetResponse | types.outputs.AmazonRdsForSqlServerTableDatasetResponse | types.outputs.AmazonRedshiftTableDatasetResponse | types.outputs.AmazonS3DatasetResponse | types.outputs.AvroDatasetResponse | types.outputs.AzureBlobDatasetResponse | types.outputs.AzureBlobFSDatasetResponse | types.outputs.AzureDataExplorerTableDatasetResponse | types.outputs.AzureDataLakeStoreDatasetResponse | types.outputs.AzureDatabricksDeltaLakeDatasetResponse | types.outputs.AzureMariaDBTableDatasetResponse | types.outputs.AzureMySqlTableDatasetResponse | types.outputs.AzurePostgreSqlTableDatasetResponse | types.outputs.AzureSearchIndexDatasetResponse | types.outputs.AzureSqlDWTableDatasetResponse | types.outputs.AzureSqlMITableDatasetResponse | types.outputs.AzureSqlTableDatasetResponse | types.outputs.AzureTableDatasetResponse | types.outputs.BinaryDatasetResponse | types.outputs.CassandraTableDatasetResponse | types.outputs.CommonDataServiceForAppsEntityDatasetResponse | types.outputs.ConcurObjectDatasetResponse | types.outputs.CosmosDbMongoDbApiCollectionDatasetResponse | types.outputs.CosmosDbSqlApiCollectionDatasetResponse | types.outputs.CouchbaseTableDatasetResponse | types.outputs.CustomDatasetResponse | types.outputs.Db2TableDatasetResponse | types.outputs.DelimitedTextDatasetResponse | types.outputs.DocumentDbCollectionDatasetResponse | types.outputs.DrillTableDatasetResponse | types.outputs.DynamicsAXResourceDatasetResponse | types.outputs.DynamicsCrmEntityDatasetResponse | types.outputs.DynamicsEntityDatasetResponse | types.outputs.EloquaObjectDatasetResponse | types.outputs.ExcelDatasetResponse | types.outputs.FileShareDatasetResponse | types.outputs.GoogleAdWordsObjectDatasetResponse | types.outputs.GoogleBigQueryObjectDatasetResponse | types.outputs.GoogleBigQueryV2ObjectDatasetResponse | types.outputs.GreenplumTableDatasetResponse | types.outputs.HBaseObjectDatasetResponse | types.outputs.HiveObjectDatasetResponse | types.outputs.HttpDatasetResponse | types.outputs.HubspotObjectDatasetResponse | types.outputs.IcebergDatasetResponse | types.outputs.ImpalaObjectDatasetResponse | types.outputs.InformixTableDatasetResponse | types.outputs.JiraObjectDatasetResponse | types.outputs.JsonDatasetResponse | types.outputs.LakeHouseTableDatasetResponse | types.outputs.MagentoObjectDatasetResponse | types.outputs.MariaDBTableDatasetResponse | types.outputs.MarketoObjectDatasetResponse | types.outputs.MicrosoftAccessTableDatasetResponse | types.outputs.MongoDbAtlasCollectionDatasetResponse | types.outputs.MongoDbCollectionDatasetResponse | types.outputs.MongoDbV2CollectionDatasetResponse | types.outputs.MySqlTableDatasetResponse | types.outputs.NetezzaTableDatasetResponse | types.outputs.ODataResourceDatasetResponse | types.outputs.OdbcTableDatasetResponse | types.outputs.Office365DatasetResponse | types.outputs.OracleServiceCloudObjectDatasetResponse | types.outputs.OracleTableDatasetResponse | types.outputs.OrcDatasetResponse | types.outputs.ParquetDatasetResponse | types.outputs.PaypalObjectDatasetResponse | types.outputs.PhoenixObjectDatasetResponse | types.outputs.PostgreSqlTableDatasetResponse | types.outputs.PostgreSqlV2TableDatasetResponse | types.outputs.PrestoObjectDatasetResponse | types.outputs.QuickBooksObjectDatasetResponse | types.outputs.RelationalTableDatasetResponse | types.outputs.ResponsysObjectDatasetResponse | types.outputs.RestResourceDatasetResponse | types.outputs.SalesforceMarketingCloudObjectDatasetResponse | types.outputs.SalesforceObjectDatasetResponse | types.outputs.SalesforceServiceCloudObjectDatasetResponse | types.outputs.SalesforceServiceCloudV2ObjectDatasetResponse | types.outputs.SalesforceV2ObjectDatasetResponse | types.outputs.SapBwCubeDatasetResponse | types.outputs.SapCloudForCustomerResourceDatasetResponse | types.outputs.SapEccResourceDatasetResponse | types.outputs.SapHanaTableDatasetResponse | types.outputs.SapOdpResourceDatasetResponse | types.outputs.SapOpenHubTableDatasetResponse | types.outputs.SapTableResourceDatasetResponse | types.outputs.ServiceNowObjectDatasetResponse | types.outputs.ServiceNowV2ObjectDatasetResponse | types.outputs.SharePointOnlineListResourceDatasetResponse | types.outputs.ShopifyObjectDatasetResponse | types.outputs.SnowflakeDatasetResponse | types.outputs.SnowflakeV2DatasetResponse | types.outputs.SparkObjectDatasetResponse | types.outputs.SqlServerTableDatasetResponse | types.outputs.SquareObjectDatasetResponse | types.outputs.SybaseTableDatasetResponse | types.outputs.TeradataTableDatasetResponse | types.outputs.VerticaTableDatasetResponse | types.outputs.WarehouseTableDatasetResponse | types.outputs.WebTableDatasetResponse | types.outputs.XeroObjectDatasetResponse | types.outputs.XmlDatasetResponse | types.outputs.ZohoObjectDatasetResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets a dataset.
 *
 * Uses Azure REST API version 2018-06-01.
 */
export function getDatasetOutput(args: GetDatasetOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDatasetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datafactory:getDataset", {
        "datasetName": args.datasetName,
        "factoryName": args.factoryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}