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
    readonly properties: types.outputs.datafactory.AmazonMWSLinkedServiceResponse | types.outputs.datafactory.AmazonRdsForOracleLinkedServiceResponse | types.outputs.datafactory.AmazonRdsForSqlServerLinkedServiceResponse | types.outputs.datafactory.AmazonRedshiftLinkedServiceResponse | types.outputs.datafactory.AmazonS3CompatibleLinkedServiceResponse | types.outputs.datafactory.AmazonS3LinkedServiceResponse | types.outputs.datafactory.AppFiguresLinkedServiceResponse | types.outputs.datafactory.AsanaLinkedServiceResponse | types.outputs.datafactory.AzureBatchLinkedServiceResponse | types.outputs.datafactory.AzureBlobFSLinkedServiceResponse | types.outputs.datafactory.AzureBlobStorageLinkedServiceResponse | types.outputs.datafactory.AzureDataExplorerLinkedServiceResponse | types.outputs.datafactory.AzureDataLakeAnalyticsLinkedServiceResponse | types.outputs.datafactory.AzureDataLakeStoreLinkedServiceResponse | types.outputs.datafactory.AzureDatabricksDeltaLakeLinkedServiceResponse | types.outputs.datafactory.AzureDatabricksLinkedServiceResponse | types.outputs.datafactory.AzureFileStorageLinkedServiceResponse | types.outputs.datafactory.AzureFunctionLinkedServiceResponse | types.outputs.datafactory.AzureKeyVaultLinkedServiceResponse | types.outputs.datafactory.AzureMLLinkedServiceResponse | types.outputs.datafactory.AzureMLServiceLinkedServiceResponse | types.outputs.datafactory.AzureMariaDBLinkedServiceResponse | types.outputs.datafactory.AzureMySqlLinkedServiceResponse | types.outputs.datafactory.AzurePostgreSqlLinkedServiceResponse | types.outputs.datafactory.AzureSearchLinkedServiceResponse | types.outputs.datafactory.AzureSqlDWLinkedServiceResponse | types.outputs.datafactory.AzureSqlDatabaseLinkedServiceResponse | types.outputs.datafactory.AzureSqlMILinkedServiceResponse | types.outputs.datafactory.AzureStorageLinkedServiceResponse | types.outputs.datafactory.AzureSynapseArtifactsLinkedServiceResponse | types.outputs.datafactory.AzureTableStorageLinkedServiceResponse | types.outputs.datafactory.CassandraLinkedServiceResponse | types.outputs.datafactory.CommonDataServiceForAppsLinkedServiceResponse | types.outputs.datafactory.ConcurLinkedServiceResponse | types.outputs.datafactory.CosmosDbLinkedServiceResponse | types.outputs.datafactory.CosmosDbMongoDbApiLinkedServiceResponse | types.outputs.datafactory.CouchbaseLinkedServiceResponse | types.outputs.datafactory.CustomDataSourceLinkedServiceResponse | types.outputs.datafactory.DataworldLinkedServiceResponse | types.outputs.datafactory.Db2LinkedServiceResponse | types.outputs.datafactory.DrillLinkedServiceResponse | types.outputs.datafactory.DynamicsAXLinkedServiceResponse | types.outputs.datafactory.DynamicsCrmLinkedServiceResponse | types.outputs.datafactory.DynamicsLinkedServiceResponse | types.outputs.datafactory.EloquaLinkedServiceResponse | types.outputs.datafactory.FileServerLinkedServiceResponse | types.outputs.datafactory.FtpServerLinkedServiceResponse | types.outputs.datafactory.GoogleAdWordsLinkedServiceResponse | types.outputs.datafactory.GoogleBigQueryLinkedServiceResponse | types.outputs.datafactory.GoogleCloudStorageLinkedServiceResponse | types.outputs.datafactory.GoogleSheetsLinkedServiceResponse | types.outputs.datafactory.GreenplumLinkedServiceResponse | types.outputs.datafactory.HBaseLinkedServiceResponse | types.outputs.datafactory.HDInsightLinkedServiceResponse | types.outputs.datafactory.HDInsightOnDemandLinkedServiceResponse | types.outputs.datafactory.HdfsLinkedServiceResponse | types.outputs.datafactory.HiveLinkedServiceResponse | types.outputs.datafactory.HttpLinkedServiceResponse | types.outputs.datafactory.HubspotLinkedServiceResponse | types.outputs.datafactory.ImpalaLinkedServiceResponse | types.outputs.datafactory.InformixLinkedServiceResponse | types.outputs.datafactory.JiraLinkedServiceResponse | types.outputs.datafactory.MagentoLinkedServiceResponse | types.outputs.datafactory.MariaDBLinkedServiceResponse | types.outputs.datafactory.MarketoLinkedServiceResponse | types.outputs.datafactory.MicrosoftAccessLinkedServiceResponse | types.outputs.datafactory.MongoDbAtlasLinkedServiceResponse | types.outputs.datafactory.MongoDbLinkedServiceResponse | types.outputs.datafactory.MongoDbV2LinkedServiceResponse | types.outputs.datafactory.MySqlLinkedServiceResponse | types.outputs.datafactory.NetezzaLinkedServiceResponse | types.outputs.datafactory.ODataLinkedServiceResponse | types.outputs.datafactory.OdbcLinkedServiceResponse | types.outputs.datafactory.Office365LinkedServiceResponse | types.outputs.datafactory.OracleCloudStorageLinkedServiceResponse | types.outputs.datafactory.OracleLinkedServiceResponse | types.outputs.datafactory.OracleServiceCloudLinkedServiceResponse | types.outputs.datafactory.PaypalLinkedServiceResponse | types.outputs.datafactory.PhoenixLinkedServiceResponse | types.outputs.datafactory.PostgreSqlLinkedServiceResponse | types.outputs.datafactory.PrestoLinkedServiceResponse | types.outputs.datafactory.QuickBooksLinkedServiceResponse | types.outputs.datafactory.QuickbaseLinkedServiceResponse | types.outputs.datafactory.ResponsysLinkedServiceResponse | types.outputs.datafactory.RestServiceLinkedServiceResponse | types.outputs.datafactory.SalesforceLinkedServiceResponse | types.outputs.datafactory.SalesforceMarketingCloudLinkedServiceResponse | types.outputs.datafactory.SalesforceServiceCloudLinkedServiceResponse | types.outputs.datafactory.SapBWLinkedServiceResponse | types.outputs.datafactory.SapCloudForCustomerLinkedServiceResponse | types.outputs.datafactory.SapEccLinkedServiceResponse | types.outputs.datafactory.SapHanaLinkedServiceResponse | types.outputs.datafactory.SapOdpLinkedServiceResponse | types.outputs.datafactory.SapOpenHubLinkedServiceResponse | types.outputs.datafactory.SapTableLinkedServiceResponse | types.outputs.datafactory.ServiceNowLinkedServiceResponse | types.outputs.datafactory.SftpServerLinkedServiceResponse | types.outputs.datafactory.SharePointOnlineListLinkedServiceResponse | types.outputs.datafactory.ShopifyLinkedServiceResponse | types.outputs.datafactory.SmartsheetLinkedServiceResponse | types.outputs.datafactory.SnowflakeLinkedServiceResponse | types.outputs.datafactory.SparkLinkedServiceResponse | types.outputs.datafactory.SqlServerLinkedServiceResponse | types.outputs.datafactory.SquareLinkedServiceResponse | types.outputs.datafactory.SybaseLinkedServiceResponse | types.outputs.datafactory.TeamDeskLinkedServiceResponse | types.outputs.datafactory.TeradataLinkedServiceResponse | types.outputs.datafactory.TwilioLinkedServiceResponse | types.outputs.datafactory.VerticaLinkedServiceResponse | types.outputs.datafactory.WebLinkedServiceResponse | types.outputs.datafactory.XeroLinkedServiceResponse | types.outputs.datafactory.ZendeskLinkedServiceResponse | types.outputs.datafactory.ZohoLinkedServiceResponse;
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
