import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a linked service.
 * Azure REST API version: 2018-06-01.
 */
export function getLinkedService(args: GetLinkedServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetLinkedServiceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datafactory:getLinkedService", {
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
    readonly properties: types.outputs.AmazonMWSLinkedServiceResponse | types.outputs.AmazonRdsForOracleLinkedServiceResponse | types.outputs.AmazonRdsForSqlServerLinkedServiceResponse | types.outputs.AmazonRedshiftLinkedServiceResponse | types.outputs.AmazonS3CompatibleLinkedServiceResponse | types.outputs.AmazonS3LinkedServiceResponse | types.outputs.AppFiguresLinkedServiceResponse | types.outputs.AsanaLinkedServiceResponse | types.outputs.AzureBatchLinkedServiceResponse | types.outputs.AzureBlobFSLinkedServiceResponse | types.outputs.AzureBlobStorageLinkedServiceResponse | types.outputs.AzureDataExplorerLinkedServiceResponse | types.outputs.AzureDataLakeAnalyticsLinkedServiceResponse | types.outputs.AzureDataLakeStoreLinkedServiceResponse | types.outputs.AzureDatabricksDeltaLakeLinkedServiceResponse | types.outputs.AzureDatabricksLinkedServiceResponse | types.outputs.AzureFileStorageLinkedServiceResponse | types.outputs.AzureFunctionLinkedServiceResponse | types.outputs.AzureKeyVaultLinkedServiceResponse | types.outputs.AzureMLLinkedServiceResponse | types.outputs.AzureMLServiceLinkedServiceResponse | types.outputs.AzureMariaDBLinkedServiceResponse | types.outputs.AzureMySqlLinkedServiceResponse | types.outputs.AzurePostgreSqlLinkedServiceResponse | types.outputs.AzureSearchLinkedServiceResponse | types.outputs.AzureSqlDWLinkedServiceResponse | types.outputs.AzureSqlDatabaseLinkedServiceResponse | types.outputs.AzureSqlMILinkedServiceResponse | types.outputs.AzureStorageLinkedServiceResponse | types.outputs.AzureSynapseArtifactsLinkedServiceResponse | types.outputs.AzureTableStorageLinkedServiceResponse | types.outputs.CassandraLinkedServiceResponse | types.outputs.CommonDataServiceForAppsLinkedServiceResponse | types.outputs.ConcurLinkedServiceResponse | types.outputs.CosmosDbLinkedServiceResponse | types.outputs.CosmosDbMongoDbApiLinkedServiceResponse | types.outputs.CouchbaseLinkedServiceResponse | types.outputs.CustomDataSourceLinkedServiceResponse | types.outputs.DataworldLinkedServiceResponse | types.outputs.Db2LinkedServiceResponse | types.outputs.DrillLinkedServiceResponse | types.outputs.DynamicsAXLinkedServiceResponse | types.outputs.DynamicsCrmLinkedServiceResponse | types.outputs.DynamicsLinkedServiceResponse | types.outputs.EloquaLinkedServiceResponse | types.outputs.FileServerLinkedServiceResponse | types.outputs.FtpServerLinkedServiceResponse | types.outputs.GoogleAdWordsLinkedServiceResponse | types.outputs.GoogleBigQueryLinkedServiceResponse | types.outputs.GoogleCloudStorageLinkedServiceResponse | types.outputs.GoogleSheetsLinkedServiceResponse | types.outputs.GreenplumLinkedServiceResponse | types.outputs.HBaseLinkedServiceResponse | types.outputs.HDInsightLinkedServiceResponse | types.outputs.HDInsightOnDemandLinkedServiceResponse | types.outputs.HdfsLinkedServiceResponse | types.outputs.HiveLinkedServiceResponse | types.outputs.HttpLinkedServiceResponse | types.outputs.HubspotLinkedServiceResponse | types.outputs.ImpalaLinkedServiceResponse | types.outputs.InformixLinkedServiceResponse | types.outputs.JiraLinkedServiceResponse | types.outputs.MagentoLinkedServiceResponse | types.outputs.MariaDBLinkedServiceResponse | types.outputs.MarketoLinkedServiceResponse | types.outputs.MicrosoftAccessLinkedServiceResponse | types.outputs.MongoDbAtlasLinkedServiceResponse | types.outputs.MongoDbLinkedServiceResponse | types.outputs.MongoDbV2LinkedServiceResponse | types.outputs.MySqlLinkedServiceResponse | types.outputs.NetezzaLinkedServiceResponse | types.outputs.ODataLinkedServiceResponse | types.outputs.OdbcLinkedServiceResponse | types.outputs.Office365LinkedServiceResponse | types.outputs.OracleCloudStorageLinkedServiceResponse | types.outputs.OracleLinkedServiceResponse | types.outputs.OracleServiceCloudLinkedServiceResponse | types.outputs.PaypalLinkedServiceResponse | types.outputs.PhoenixLinkedServiceResponse | types.outputs.PostgreSqlLinkedServiceResponse | types.outputs.PrestoLinkedServiceResponse | types.outputs.QuickBooksLinkedServiceResponse | types.outputs.QuickbaseLinkedServiceResponse | types.outputs.ResponsysLinkedServiceResponse | types.outputs.RestServiceLinkedServiceResponse | types.outputs.SalesforceLinkedServiceResponse | types.outputs.SalesforceMarketingCloudLinkedServiceResponse | types.outputs.SalesforceServiceCloudLinkedServiceResponse | types.outputs.SapBWLinkedServiceResponse | types.outputs.SapCloudForCustomerLinkedServiceResponse | types.outputs.SapEccLinkedServiceResponse | types.outputs.SapHanaLinkedServiceResponse | types.outputs.SapOdpLinkedServiceResponse | types.outputs.SapOpenHubLinkedServiceResponse | types.outputs.SapTableLinkedServiceResponse | types.outputs.ServiceNowLinkedServiceResponse | types.outputs.SftpServerLinkedServiceResponse | types.outputs.SharePointOnlineListLinkedServiceResponse | types.outputs.ShopifyLinkedServiceResponse | types.outputs.SmartsheetLinkedServiceResponse | types.outputs.SnowflakeLinkedServiceResponse | types.outputs.SparkLinkedServiceResponse | types.outputs.SqlServerLinkedServiceResponse | types.outputs.SquareLinkedServiceResponse | types.outputs.SybaseLinkedServiceResponse | types.outputs.TeamDeskLinkedServiceResponse | types.outputs.TeradataLinkedServiceResponse | types.outputs.TwilioLinkedServiceResponse | types.outputs.VerticaLinkedServiceResponse | types.outputs.WebLinkedServiceResponse | types.outputs.XeroLinkedServiceResponse | types.outputs.ZendeskLinkedServiceResponse | types.outputs.ZohoLinkedServiceResponse;
    /**
     * The resource type.
     */
    readonly type: string;
}
/**
 * Gets a linked service.
 * Azure REST API version: 2018-06-01.
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
