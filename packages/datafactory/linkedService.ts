import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Linked service resource type.
 * Azure REST API version: 2018-06-01. Prior API version in Azure Native 1.x: 2018-06-01
 */
export class LinkedService extends pulumi.CustomResource {
    /**
     * Get an existing LinkedService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): LinkedService {
        return new LinkedService(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:datafactory:LinkedService';

    /**
     * Returns true if the given object is an instance of LinkedService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LinkedService {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LinkedService.__pulumiType;
    }

    /**
     * Etag identifies change in the resource.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Properties of linked service.
     */
    public readonly properties!: pulumi.Output<types.outputs.datafactory.AmazonMWSLinkedServiceResponse | types.outputs.datafactory.AmazonRdsForOracleLinkedServiceResponse | types.outputs.datafactory.AmazonRdsForSqlServerLinkedServiceResponse | types.outputs.datafactory.AmazonRedshiftLinkedServiceResponse | types.outputs.datafactory.AmazonS3CompatibleLinkedServiceResponse | types.outputs.datafactory.AmazonS3LinkedServiceResponse | types.outputs.datafactory.AppFiguresLinkedServiceResponse | types.outputs.datafactory.AsanaLinkedServiceResponse | types.outputs.datafactory.AzureBatchLinkedServiceResponse | types.outputs.datafactory.AzureBlobFSLinkedServiceResponse | types.outputs.datafactory.AzureBlobStorageLinkedServiceResponse | types.outputs.datafactory.AzureDataExplorerLinkedServiceResponse | types.outputs.datafactory.AzureDataLakeAnalyticsLinkedServiceResponse | types.outputs.datafactory.AzureDataLakeStoreLinkedServiceResponse | types.outputs.datafactory.AzureDatabricksDeltaLakeLinkedServiceResponse | types.outputs.datafactory.AzureDatabricksLinkedServiceResponse | types.outputs.datafactory.AzureFileStorageLinkedServiceResponse | types.outputs.datafactory.AzureFunctionLinkedServiceResponse | types.outputs.datafactory.AzureKeyVaultLinkedServiceResponse | types.outputs.datafactory.AzureMLLinkedServiceResponse | types.outputs.datafactory.AzureMLServiceLinkedServiceResponse | types.outputs.datafactory.AzureMariaDBLinkedServiceResponse | types.outputs.datafactory.AzureMySqlLinkedServiceResponse | types.outputs.datafactory.AzurePostgreSqlLinkedServiceResponse | types.outputs.datafactory.AzureSearchLinkedServiceResponse | types.outputs.datafactory.AzureSqlDWLinkedServiceResponse | types.outputs.datafactory.AzureSqlDatabaseLinkedServiceResponse | types.outputs.datafactory.AzureSqlMILinkedServiceResponse | types.outputs.datafactory.AzureStorageLinkedServiceResponse | types.outputs.datafactory.AzureSynapseArtifactsLinkedServiceResponse | types.outputs.datafactory.AzureTableStorageLinkedServiceResponse | types.outputs.datafactory.CassandraLinkedServiceResponse | types.outputs.datafactory.CommonDataServiceForAppsLinkedServiceResponse | types.outputs.datafactory.ConcurLinkedServiceResponse | types.outputs.datafactory.CosmosDbLinkedServiceResponse | types.outputs.datafactory.CosmosDbMongoDbApiLinkedServiceResponse | types.outputs.datafactory.CouchbaseLinkedServiceResponse | types.outputs.datafactory.CustomDataSourceLinkedServiceResponse | types.outputs.datafactory.DataworldLinkedServiceResponse | types.outputs.datafactory.Db2LinkedServiceResponse | types.outputs.datafactory.DrillLinkedServiceResponse | types.outputs.datafactory.DynamicsAXLinkedServiceResponse | types.outputs.datafactory.DynamicsCrmLinkedServiceResponse | types.outputs.datafactory.DynamicsLinkedServiceResponse | types.outputs.datafactory.EloquaLinkedServiceResponse | types.outputs.datafactory.FileServerLinkedServiceResponse | types.outputs.datafactory.FtpServerLinkedServiceResponse | types.outputs.datafactory.GoogleAdWordsLinkedServiceResponse | types.outputs.datafactory.GoogleBigQueryLinkedServiceResponse | types.outputs.datafactory.GoogleCloudStorageLinkedServiceResponse | types.outputs.datafactory.GoogleSheetsLinkedServiceResponse | types.outputs.datafactory.GreenplumLinkedServiceResponse | types.outputs.datafactory.HBaseLinkedServiceResponse | types.outputs.datafactory.HDInsightLinkedServiceResponse | types.outputs.datafactory.HDInsightOnDemandLinkedServiceResponse | types.outputs.datafactory.HdfsLinkedServiceResponse | types.outputs.datafactory.HiveLinkedServiceResponse | types.outputs.datafactory.HttpLinkedServiceResponse | types.outputs.datafactory.HubspotLinkedServiceResponse | types.outputs.datafactory.ImpalaLinkedServiceResponse | types.outputs.datafactory.InformixLinkedServiceResponse | types.outputs.datafactory.JiraLinkedServiceResponse | types.outputs.datafactory.MagentoLinkedServiceResponse | types.outputs.datafactory.MariaDBLinkedServiceResponse | types.outputs.datafactory.MarketoLinkedServiceResponse | types.outputs.datafactory.MicrosoftAccessLinkedServiceResponse | types.outputs.datafactory.MongoDbAtlasLinkedServiceResponse | types.outputs.datafactory.MongoDbLinkedServiceResponse | types.outputs.datafactory.MongoDbV2LinkedServiceResponse | types.outputs.datafactory.MySqlLinkedServiceResponse | types.outputs.datafactory.NetezzaLinkedServiceResponse | types.outputs.datafactory.ODataLinkedServiceResponse | types.outputs.datafactory.OdbcLinkedServiceResponse | types.outputs.datafactory.Office365LinkedServiceResponse | types.outputs.datafactory.OracleCloudStorageLinkedServiceResponse | types.outputs.datafactory.OracleLinkedServiceResponse | types.outputs.datafactory.OracleServiceCloudLinkedServiceResponse | types.outputs.datafactory.PaypalLinkedServiceResponse | types.outputs.datafactory.PhoenixLinkedServiceResponse | types.outputs.datafactory.PostgreSqlLinkedServiceResponse | types.outputs.datafactory.PrestoLinkedServiceResponse | types.outputs.datafactory.QuickBooksLinkedServiceResponse | types.outputs.datafactory.QuickbaseLinkedServiceResponse | types.outputs.datafactory.ResponsysLinkedServiceResponse | types.outputs.datafactory.RestServiceLinkedServiceResponse | types.outputs.datafactory.SalesforceLinkedServiceResponse | types.outputs.datafactory.SalesforceMarketingCloudLinkedServiceResponse | types.outputs.datafactory.SalesforceServiceCloudLinkedServiceResponse | types.outputs.datafactory.SapBWLinkedServiceResponse | types.outputs.datafactory.SapCloudForCustomerLinkedServiceResponse | types.outputs.datafactory.SapEccLinkedServiceResponse | types.outputs.datafactory.SapHanaLinkedServiceResponse | types.outputs.datafactory.SapOdpLinkedServiceResponse | types.outputs.datafactory.SapOpenHubLinkedServiceResponse | types.outputs.datafactory.SapTableLinkedServiceResponse | types.outputs.datafactory.ServiceNowLinkedServiceResponse | types.outputs.datafactory.SftpServerLinkedServiceResponse | types.outputs.datafactory.SharePointOnlineListLinkedServiceResponse | types.outputs.datafactory.ShopifyLinkedServiceResponse | types.outputs.datafactory.SmartsheetLinkedServiceResponse | types.outputs.datafactory.SnowflakeLinkedServiceResponse | types.outputs.datafactory.SparkLinkedServiceResponse | types.outputs.datafactory.SqlServerLinkedServiceResponse | types.outputs.datafactory.SquareLinkedServiceResponse | types.outputs.datafactory.SybaseLinkedServiceResponse | types.outputs.datafactory.TeamDeskLinkedServiceResponse | types.outputs.datafactory.TeradataLinkedServiceResponse | types.outputs.datafactory.TwilioLinkedServiceResponse | types.outputs.datafactory.VerticaLinkedServiceResponse | types.outputs.datafactory.WebLinkedServiceResponse | types.outputs.datafactory.XeroLinkedServiceResponse | types.outputs.datafactory.ZendeskLinkedServiceResponse | types.outputs.datafactory.ZohoLinkedServiceResponse>;
    /**
     * The resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a LinkedService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LinkedServiceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.factoryName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'factoryName'");
            }
            if ((!args || args.properties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'properties'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["factoryName"] = args ? args.factoryName : undefined;
            resourceInputs["linkedServiceName"] = args ? args.linkedServiceName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:datafactory/v20170901preview:LinkedService" }, { type: "azure-native:datafactory/v20180601:LinkedService" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(LinkedService.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a LinkedService resource.
 */
export interface LinkedServiceArgs {
    /**
     * The factory name.
     */
    factoryName: pulumi.Input<string>;
    /**
     * The linked service name.
     */
    linkedServiceName?: pulumi.Input<string>;
    /**
     * Properties of linked service.
     */
    properties: pulumi.Input<types.inputs.datafactory.AmazonMWSLinkedServiceArgs | types.inputs.datafactory.AmazonRdsForOracleLinkedServiceArgs | types.inputs.datafactory.AmazonRdsForSqlServerLinkedServiceArgs | types.inputs.datafactory.AmazonRedshiftLinkedServiceArgs | types.inputs.datafactory.AmazonS3CompatibleLinkedServiceArgs | types.inputs.datafactory.AmazonS3LinkedServiceArgs | types.inputs.datafactory.AppFiguresLinkedServiceArgs | types.inputs.datafactory.AsanaLinkedServiceArgs | types.inputs.datafactory.AzureBatchLinkedServiceArgs | types.inputs.datafactory.AzureBlobFSLinkedServiceArgs | types.inputs.datafactory.AzureBlobStorageLinkedServiceArgs | types.inputs.datafactory.AzureDataExplorerLinkedServiceArgs | types.inputs.datafactory.AzureDataLakeAnalyticsLinkedServiceArgs | types.inputs.datafactory.AzureDataLakeStoreLinkedServiceArgs | types.inputs.datafactory.AzureDatabricksDeltaLakeLinkedServiceArgs | types.inputs.datafactory.AzureDatabricksLinkedServiceArgs | types.inputs.datafactory.AzureFileStorageLinkedServiceArgs | types.inputs.datafactory.AzureFunctionLinkedServiceArgs | types.inputs.datafactory.AzureKeyVaultLinkedServiceArgs | types.inputs.datafactory.AzureMLLinkedServiceArgs | types.inputs.datafactory.AzureMLServiceLinkedServiceArgs | types.inputs.datafactory.AzureMariaDBLinkedServiceArgs | types.inputs.datafactory.AzureMySqlLinkedServiceArgs | types.inputs.datafactory.AzurePostgreSqlLinkedServiceArgs | types.inputs.datafactory.AzureSearchLinkedServiceArgs | types.inputs.datafactory.AzureSqlDWLinkedServiceArgs | types.inputs.datafactory.AzureSqlDatabaseLinkedServiceArgs | types.inputs.datafactory.AzureSqlMILinkedServiceArgs | types.inputs.datafactory.AzureStorageLinkedServiceArgs | types.inputs.datafactory.AzureSynapseArtifactsLinkedServiceArgs | types.inputs.datafactory.AzureTableStorageLinkedServiceArgs | types.inputs.datafactory.CassandraLinkedServiceArgs | types.inputs.datafactory.CommonDataServiceForAppsLinkedServiceArgs | types.inputs.datafactory.ConcurLinkedServiceArgs | types.inputs.datafactory.CosmosDbLinkedServiceArgs | types.inputs.datafactory.CosmosDbMongoDbApiLinkedServiceArgs | types.inputs.datafactory.CouchbaseLinkedServiceArgs | types.inputs.datafactory.CustomDataSourceLinkedServiceArgs | types.inputs.datafactory.DataworldLinkedServiceArgs | types.inputs.datafactory.Db2LinkedServiceArgs | types.inputs.datafactory.DrillLinkedServiceArgs | types.inputs.datafactory.DynamicsAXLinkedServiceArgs | types.inputs.datafactory.DynamicsCrmLinkedServiceArgs | types.inputs.datafactory.DynamicsLinkedServiceArgs | types.inputs.datafactory.EloquaLinkedServiceArgs | types.inputs.datafactory.FileServerLinkedServiceArgs | types.inputs.datafactory.FtpServerLinkedServiceArgs | types.inputs.datafactory.GoogleAdWordsLinkedServiceArgs | types.inputs.datafactory.GoogleBigQueryLinkedServiceArgs | types.inputs.datafactory.GoogleCloudStorageLinkedServiceArgs | types.inputs.datafactory.GoogleSheetsLinkedServiceArgs | types.inputs.datafactory.GreenplumLinkedServiceArgs | types.inputs.datafactory.HBaseLinkedServiceArgs | types.inputs.datafactory.HDInsightLinkedServiceArgs | types.inputs.datafactory.HDInsightOnDemandLinkedServiceArgs | types.inputs.datafactory.HdfsLinkedServiceArgs | types.inputs.datafactory.HiveLinkedServiceArgs | types.inputs.datafactory.HttpLinkedServiceArgs | types.inputs.datafactory.HubspotLinkedServiceArgs | types.inputs.datafactory.ImpalaLinkedServiceArgs | types.inputs.datafactory.InformixLinkedServiceArgs | types.inputs.datafactory.JiraLinkedServiceArgs | types.inputs.datafactory.MagentoLinkedServiceArgs | types.inputs.datafactory.MariaDBLinkedServiceArgs | types.inputs.datafactory.MarketoLinkedServiceArgs | types.inputs.datafactory.MicrosoftAccessLinkedServiceArgs | types.inputs.datafactory.MongoDbAtlasLinkedServiceArgs | types.inputs.datafactory.MongoDbLinkedServiceArgs | types.inputs.datafactory.MongoDbV2LinkedServiceArgs | types.inputs.datafactory.MySqlLinkedServiceArgs | types.inputs.datafactory.NetezzaLinkedServiceArgs | types.inputs.datafactory.ODataLinkedServiceArgs | types.inputs.datafactory.OdbcLinkedServiceArgs | types.inputs.datafactory.Office365LinkedServiceArgs | types.inputs.datafactory.OracleCloudStorageLinkedServiceArgs | types.inputs.datafactory.OracleLinkedServiceArgs | types.inputs.datafactory.OracleServiceCloudLinkedServiceArgs | types.inputs.datafactory.PaypalLinkedServiceArgs | types.inputs.datafactory.PhoenixLinkedServiceArgs | types.inputs.datafactory.PostgreSqlLinkedServiceArgs | types.inputs.datafactory.PrestoLinkedServiceArgs | types.inputs.datafactory.QuickBooksLinkedServiceArgs | types.inputs.datafactory.QuickbaseLinkedServiceArgs | types.inputs.datafactory.ResponsysLinkedServiceArgs | types.inputs.datafactory.RestServiceLinkedServiceArgs | types.inputs.datafactory.SalesforceLinkedServiceArgs | types.inputs.datafactory.SalesforceMarketingCloudLinkedServiceArgs | types.inputs.datafactory.SalesforceServiceCloudLinkedServiceArgs | types.inputs.datafactory.SapBWLinkedServiceArgs | types.inputs.datafactory.SapCloudForCustomerLinkedServiceArgs | types.inputs.datafactory.SapEccLinkedServiceArgs | types.inputs.datafactory.SapHanaLinkedServiceArgs | types.inputs.datafactory.SapOdpLinkedServiceArgs | types.inputs.datafactory.SapOpenHubLinkedServiceArgs | types.inputs.datafactory.SapTableLinkedServiceArgs | types.inputs.datafactory.ServiceNowLinkedServiceArgs | types.inputs.datafactory.SftpServerLinkedServiceArgs | types.inputs.datafactory.SharePointOnlineListLinkedServiceArgs | types.inputs.datafactory.ShopifyLinkedServiceArgs | types.inputs.datafactory.SmartsheetLinkedServiceArgs | types.inputs.datafactory.SnowflakeLinkedServiceArgs | types.inputs.datafactory.SparkLinkedServiceArgs | types.inputs.datafactory.SqlServerLinkedServiceArgs | types.inputs.datafactory.SquareLinkedServiceArgs | types.inputs.datafactory.SybaseLinkedServiceArgs | types.inputs.datafactory.TeamDeskLinkedServiceArgs | types.inputs.datafactory.TeradataLinkedServiceArgs | types.inputs.datafactory.TwilioLinkedServiceArgs | types.inputs.datafactory.VerticaLinkedServiceArgs | types.inputs.datafactory.WebLinkedServiceArgs | types.inputs.datafactory.XeroLinkedServiceArgs | types.inputs.datafactory.ZendeskLinkedServiceArgs | types.inputs.datafactory.ZohoLinkedServiceArgs>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}
