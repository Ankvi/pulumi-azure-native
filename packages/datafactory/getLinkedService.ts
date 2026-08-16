import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a linked service.
 *
 * Uses Azure REST API version 2018-06-01.
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
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Linked service resource type.
 */
export interface GetLinkedServiceResult {
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
     * Properties of linked service.
     */
    readonly properties: types.outputs.AmazonMWSLinkedServiceResponse | types.outputs.AmazonRdsForOracleLinkedServiceResponse | types.outputs.AmazonRdsForSqlServerLinkedServiceResponse | types.outputs.AmazonRedshiftLinkedServiceResponse | types.outputs.AmazonS3CompatibleLinkedServiceResponse | types.outputs.AmazonS3LinkedServiceResponse | types.outputs.AppFiguresLinkedServiceResponse | types.outputs.AsanaLinkedServiceResponse | types.outputs.AzureBatchLinkedServiceResponse | types.outputs.AzureBlobFSLinkedServiceResponse | types.outputs.AzureBlobStorageLinkedServiceResponse | types.outputs.AzureDataExplorerLinkedServiceResponse | types.outputs.AzureDataLakeAnalyticsLinkedServiceResponse | types.outputs.AzureDataLakeStoreLinkedServiceResponse | types.outputs.AzureDatabricksDeltaLakeLinkedServiceResponse | types.outputs.AzureDatabricksLinkedServiceResponse | types.outputs.AzureFileStorageLinkedServiceResponse | types.outputs.AzureFunctionLinkedServiceResponse | types.outputs.AzureKeyVaultLinkedServiceResponse | types.outputs.AzureMLLinkedServiceResponse | types.outputs.AzureMLServiceLinkedServiceResponse | types.outputs.AzureMariaDBLinkedServiceResponse | types.outputs.AzureMySqlLinkedServiceResponse | types.outputs.AzurePostgreSqlLinkedServiceResponse | types.outputs.AzureSearchLinkedServiceResponse | types.outputs.AzureSqlDWLinkedServiceResponse | types.outputs.AzureSqlDatabaseLinkedServiceResponse | types.outputs.AzureSqlMILinkedServiceResponse | types.outputs.AzureStorageLinkedServiceResponse | types.outputs.AzureSynapseArtifactsLinkedServiceResponse | types.outputs.AzureTableStorageLinkedServiceResponse | types.outputs.CassandraLinkedServiceResponse | types.outputs.CommonDataServiceForAppsLinkedServiceResponse | types.outputs.ConcurLinkedServiceResponse | types.outputs.CosmosDbLinkedServiceResponse | types.outputs.CosmosDbMongoDbApiLinkedServiceResponse | types.outputs.CouchbaseLinkedServiceResponse | types.outputs.CustomDataSourceLinkedServiceResponse | types.outputs.DataworldLinkedServiceResponse | types.outputs.Db2LinkedServiceResponse | types.outputs.DrillLinkedServiceResponse | types.outputs.DynamicsAXLinkedServiceResponse | types.outputs.DynamicsCrmLinkedServiceResponse | types.outputs.DynamicsLinkedServiceResponse | types.outputs.EloquaLinkedServiceResponse | types.outputs.FileServerLinkedServiceResponse | types.outputs.FtpServerLinkedServiceResponse | types.outputs.GoogleAdWordsLinkedServiceResponse | types.outputs.GoogleBigQueryLinkedServiceResponse | types.outputs.GoogleBigQueryV2LinkedServiceResponse | types.outputs.GoogleCloudStorageLinkedServiceResponse | types.outputs.GoogleSheetsLinkedServiceResponse | types.outputs.GreenplumLinkedServiceResponse | types.outputs.HBaseLinkedServiceResponse | types.outputs.HDInsightLinkedServiceResponse | types.outputs.HDInsightOnDemandLinkedServiceResponse | types.outputs.HdfsLinkedServiceResponse | types.outputs.HiveLinkedServiceResponse | types.outputs.HttpLinkedServiceResponse | types.outputs.HubspotLinkedServiceResponse | types.outputs.ImpalaLinkedServiceResponse | types.outputs.InformixLinkedServiceResponse | types.outputs.JiraLinkedServiceResponse | types.outputs.LakeHouseLinkedServiceResponse | types.outputs.MagentoLinkedServiceResponse | types.outputs.MariaDBLinkedServiceResponse | types.outputs.MarketoLinkedServiceResponse | types.outputs.MicrosoftAccessLinkedServiceResponse | types.outputs.MongoDbAtlasLinkedServiceResponse | types.outputs.MongoDbLinkedServiceResponse | types.outputs.MongoDbV2LinkedServiceResponse | types.outputs.MySqlLinkedServiceResponse | types.outputs.NetezzaLinkedServiceResponse | types.outputs.ODataLinkedServiceResponse | types.outputs.OdbcLinkedServiceResponse | types.outputs.Office365LinkedServiceResponse | types.outputs.OracleCloudStorageLinkedServiceResponse | types.outputs.OracleLinkedServiceResponse | types.outputs.OracleServiceCloudLinkedServiceResponse | types.outputs.PaypalLinkedServiceResponse | types.outputs.PhoenixLinkedServiceResponse | types.outputs.PostgreSqlLinkedServiceResponse | types.outputs.PostgreSqlV2LinkedServiceResponse | types.outputs.PrestoLinkedServiceResponse | types.outputs.QuickBooksLinkedServiceResponse | types.outputs.QuickbaseLinkedServiceResponse | types.outputs.ResponsysLinkedServiceResponse | types.outputs.RestServiceLinkedServiceResponse | types.outputs.SalesforceLinkedServiceResponse | types.outputs.SalesforceMarketingCloudLinkedServiceResponse | types.outputs.SalesforceServiceCloudLinkedServiceResponse | types.outputs.SalesforceServiceCloudV2LinkedServiceResponse | types.outputs.SalesforceV2LinkedServiceResponse | types.outputs.SapBWLinkedServiceResponse | types.outputs.SapCloudForCustomerLinkedServiceResponse | types.outputs.SapEccLinkedServiceResponse | types.outputs.SapHanaLinkedServiceResponse | types.outputs.SapOdpLinkedServiceResponse | types.outputs.SapOpenHubLinkedServiceResponse | types.outputs.SapTableLinkedServiceResponse | types.outputs.ServiceNowLinkedServiceResponse | types.outputs.ServiceNowV2LinkedServiceResponse | types.outputs.SftpServerLinkedServiceResponse | types.outputs.SharePointOnlineListLinkedServiceResponse | types.outputs.ShopifyLinkedServiceResponse | types.outputs.SmartsheetLinkedServiceResponse | types.outputs.SnowflakeLinkedServiceResponse | types.outputs.SnowflakeV2LinkedServiceResponse | types.outputs.SparkLinkedServiceResponse | types.outputs.SqlServerLinkedServiceResponse | types.outputs.SquareLinkedServiceResponse | types.outputs.SybaseLinkedServiceResponse | types.outputs.TeamDeskLinkedServiceResponse | types.outputs.TeradataLinkedServiceResponse | types.outputs.TwilioLinkedServiceResponse | types.outputs.VerticaLinkedServiceResponse | types.outputs.WarehouseLinkedServiceResponse | types.outputs.WebLinkedServiceResponse | types.outputs.XeroLinkedServiceResponse | types.outputs.ZendeskLinkedServiceResponse | types.outputs.ZohoLinkedServiceResponse;
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
 * Gets a linked service.
 *
 * Uses Azure REST API version 2018-06-01.
 */
export function getLinkedServiceOutput(args: GetLinkedServiceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetLinkedServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datafactory:getLinkedService", {
        "factoryName": args.factoryName,
        "linkedServiceName": args.linkedServiceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}