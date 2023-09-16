import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets a linked service.
 */
export function getLinkedService(args: GetLinkedServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetLinkedServiceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datafactory/v20180601:getLinkedService", {
        "factoryName": args.factoryName,
        "linkedServiceName": args.linkedServiceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLinkedServiceArgs {
    /**
     * The factory name.
     */
    factoryName: string;
    /**
     * The linked service name.
     */
    linkedServiceName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * Linked service resource type.
 */
export interface GetLinkedServiceResult {
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
     * Properties of linked service.
     */
    readonly properties: types.outputs.datafactory.v20180601.AmazonMWSLinkedServiceResponse | types.outputs.datafactory.v20180601.AmazonRdsForOracleLinkedServiceResponse | types.outputs.datafactory.v20180601.AmazonRdsForSqlServerLinkedServiceResponse | types.outputs.datafactory.v20180601.AmazonRedshiftLinkedServiceResponse | types.outputs.datafactory.v20180601.AmazonS3CompatibleLinkedServiceResponse | types.outputs.datafactory.v20180601.AmazonS3LinkedServiceResponse | types.outputs.datafactory.v20180601.AppFiguresLinkedServiceResponse | types.outputs.datafactory.v20180601.AsanaLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureBatchLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureBlobFSLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureBlobStorageLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureDataExplorerLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureDataLakeAnalyticsLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureDataLakeStoreLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureDatabricksDeltaLakeLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureDatabricksLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureFileStorageLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureFunctionLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureKeyVaultLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureMLLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureMLServiceLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureMariaDBLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureMySqlLinkedServiceResponse | types.outputs.datafactory.v20180601.AzurePostgreSqlLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureSearchLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureSqlDWLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureSqlDatabaseLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureSqlMILinkedServiceResponse | types.outputs.datafactory.v20180601.AzureStorageLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureSynapseArtifactsLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureTableStorageLinkedServiceResponse | types.outputs.datafactory.v20180601.CassandraLinkedServiceResponse | types.outputs.datafactory.v20180601.CommonDataServiceForAppsLinkedServiceResponse | types.outputs.datafactory.v20180601.ConcurLinkedServiceResponse | types.outputs.datafactory.v20180601.CosmosDbLinkedServiceResponse | types.outputs.datafactory.v20180601.CosmosDbMongoDbApiLinkedServiceResponse | types.outputs.datafactory.v20180601.CouchbaseLinkedServiceResponse | types.outputs.datafactory.v20180601.CustomDataSourceLinkedServiceResponse | types.outputs.datafactory.v20180601.DataworldLinkedServiceResponse | types.outputs.datafactory.v20180601.Db2LinkedServiceResponse | types.outputs.datafactory.v20180601.DrillLinkedServiceResponse | types.outputs.datafactory.v20180601.DynamicsAXLinkedServiceResponse | types.outputs.datafactory.v20180601.DynamicsCrmLinkedServiceResponse | types.outputs.datafactory.v20180601.DynamicsLinkedServiceResponse | types.outputs.datafactory.v20180601.EloquaLinkedServiceResponse | types.outputs.datafactory.v20180601.FileServerLinkedServiceResponse | types.outputs.datafactory.v20180601.FtpServerLinkedServiceResponse | types.outputs.datafactory.v20180601.GoogleAdWordsLinkedServiceResponse | types.outputs.datafactory.v20180601.GoogleBigQueryLinkedServiceResponse | types.outputs.datafactory.v20180601.GoogleCloudStorageLinkedServiceResponse | types.outputs.datafactory.v20180601.GoogleSheetsLinkedServiceResponse | types.outputs.datafactory.v20180601.GreenplumLinkedServiceResponse | types.outputs.datafactory.v20180601.HBaseLinkedServiceResponse | types.outputs.datafactory.v20180601.HDInsightLinkedServiceResponse | types.outputs.datafactory.v20180601.HDInsightOnDemandLinkedServiceResponse | types.outputs.datafactory.v20180601.HdfsLinkedServiceResponse | types.outputs.datafactory.v20180601.HiveLinkedServiceResponse | types.outputs.datafactory.v20180601.HttpLinkedServiceResponse | types.outputs.datafactory.v20180601.HubspotLinkedServiceResponse | types.outputs.datafactory.v20180601.ImpalaLinkedServiceResponse | types.outputs.datafactory.v20180601.InformixLinkedServiceResponse | types.outputs.datafactory.v20180601.JiraLinkedServiceResponse | types.outputs.datafactory.v20180601.MagentoLinkedServiceResponse | types.outputs.datafactory.v20180601.MariaDBLinkedServiceResponse | types.outputs.datafactory.v20180601.MarketoLinkedServiceResponse | types.outputs.datafactory.v20180601.MicrosoftAccessLinkedServiceResponse | types.outputs.datafactory.v20180601.MongoDbAtlasLinkedServiceResponse | types.outputs.datafactory.v20180601.MongoDbLinkedServiceResponse | types.outputs.datafactory.v20180601.MongoDbV2LinkedServiceResponse | types.outputs.datafactory.v20180601.MySqlLinkedServiceResponse | types.outputs.datafactory.v20180601.NetezzaLinkedServiceResponse | types.outputs.datafactory.v20180601.ODataLinkedServiceResponse | types.outputs.datafactory.v20180601.OdbcLinkedServiceResponse | types.outputs.datafactory.v20180601.Office365LinkedServiceResponse | types.outputs.datafactory.v20180601.OracleCloudStorageLinkedServiceResponse | types.outputs.datafactory.v20180601.OracleLinkedServiceResponse | types.outputs.datafactory.v20180601.OracleServiceCloudLinkedServiceResponse | types.outputs.datafactory.v20180601.PaypalLinkedServiceResponse | types.outputs.datafactory.v20180601.PhoenixLinkedServiceResponse | types.outputs.datafactory.v20180601.PostgreSqlLinkedServiceResponse | types.outputs.datafactory.v20180601.PrestoLinkedServiceResponse | types.outputs.datafactory.v20180601.QuickBooksLinkedServiceResponse | types.outputs.datafactory.v20180601.QuickbaseLinkedServiceResponse | types.outputs.datafactory.v20180601.ResponsysLinkedServiceResponse | types.outputs.datafactory.v20180601.RestServiceLinkedServiceResponse | types.outputs.datafactory.v20180601.SalesforceLinkedServiceResponse | types.outputs.datafactory.v20180601.SalesforceMarketingCloudLinkedServiceResponse | types.outputs.datafactory.v20180601.SalesforceServiceCloudLinkedServiceResponse | types.outputs.datafactory.v20180601.SapBWLinkedServiceResponse | types.outputs.datafactory.v20180601.SapCloudForCustomerLinkedServiceResponse | types.outputs.datafactory.v20180601.SapEccLinkedServiceResponse | types.outputs.datafactory.v20180601.SapHanaLinkedServiceResponse | types.outputs.datafactory.v20180601.SapOdpLinkedServiceResponse | types.outputs.datafactory.v20180601.SapOpenHubLinkedServiceResponse | types.outputs.datafactory.v20180601.SapTableLinkedServiceResponse | types.outputs.datafactory.v20180601.ServiceNowLinkedServiceResponse | types.outputs.datafactory.v20180601.SftpServerLinkedServiceResponse | types.outputs.datafactory.v20180601.SharePointOnlineListLinkedServiceResponse | types.outputs.datafactory.v20180601.ShopifyLinkedServiceResponse | types.outputs.datafactory.v20180601.SmartsheetLinkedServiceResponse | types.outputs.datafactory.v20180601.SnowflakeLinkedServiceResponse | types.outputs.datafactory.v20180601.SparkLinkedServiceResponse | types.outputs.datafactory.v20180601.SqlServerLinkedServiceResponse | types.outputs.datafactory.v20180601.SquareLinkedServiceResponse | types.outputs.datafactory.v20180601.SybaseLinkedServiceResponse | types.outputs.datafactory.v20180601.TeamDeskLinkedServiceResponse | types.outputs.datafactory.v20180601.TeradataLinkedServiceResponse | types.outputs.datafactory.v20180601.TwilioLinkedServiceResponse | types.outputs.datafactory.v20180601.VerticaLinkedServiceResponse | types.outputs.datafactory.v20180601.WebLinkedServiceResponse | types.outputs.datafactory.v20180601.XeroLinkedServiceResponse | types.outputs.datafactory.v20180601.ZendeskLinkedServiceResponse | types.outputs.datafactory.v20180601.ZohoLinkedServiceResponse;
    /**
     * The resource type.
     */
    readonly type: string;
}
/**
 * Gets a linked service.
 */
export function getLinkedServiceOutput(args: GetLinkedServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLinkedServiceResult> {
    return pulumi.output(args).apply((a: any) => getLinkedService(a, opts))
}

export interface GetLinkedServiceOutputArgs {
    /**
     * The factory name.
     */
    factoryName: pulumi.Input<string>;
    /**
     * The linked service name.
     */
    linkedServiceName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}
