import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Linked service resource type.
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
    public static readonly __pulumiType = 'azure-native:datafactory/v20180601:LinkedService';

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
    public readonly properties!: pulumi.Output<types.outputs.datafactory.v20180601.AmazonMWSLinkedServiceResponse | types.outputs.datafactory.v20180601.AmazonRdsForOracleLinkedServiceResponse | types.outputs.datafactory.v20180601.AmazonRdsForSqlServerLinkedServiceResponse | types.outputs.datafactory.v20180601.AmazonRedshiftLinkedServiceResponse | types.outputs.datafactory.v20180601.AmazonS3CompatibleLinkedServiceResponse | types.outputs.datafactory.v20180601.AmazonS3LinkedServiceResponse | types.outputs.datafactory.v20180601.AppFiguresLinkedServiceResponse | types.outputs.datafactory.v20180601.AsanaLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureBatchLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureBlobFSLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureBlobStorageLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureDataExplorerLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureDataLakeAnalyticsLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureDataLakeStoreLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureDatabricksDeltaLakeLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureDatabricksLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureFileStorageLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureFunctionLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureKeyVaultLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureMLLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureMLServiceLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureMariaDBLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureMySqlLinkedServiceResponse | types.outputs.datafactory.v20180601.AzurePostgreSqlLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureSearchLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureSqlDWLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureSqlDatabaseLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureSqlMILinkedServiceResponse | types.outputs.datafactory.v20180601.AzureStorageLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureSynapseArtifactsLinkedServiceResponse | types.outputs.datafactory.v20180601.AzureTableStorageLinkedServiceResponse | types.outputs.datafactory.v20180601.CassandraLinkedServiceResponse | types.outputs.datafactory.v20180601.CommonDataServiceForAppsLinkedServiceResponse | types.outputs.datafactory.v20180601.ConcurLinkedServiceResponse | types.outputs.datafactory.v20180601.CosmosDbLinkedServiceResponse | types.outputs.datafactory.v20180601.CosmosDbMongoDbApiLinkedServiceResponse | types.outputs.datafactory.v20180601.CouchbaseLinkedServiceResponse | types.outputs.datafactory.v20180601.CustomDataSourceLinkedServiceResponse | types.outputs.datafactory.v20180601.DataworldLinkedServiceResponse | types.outputs.datafactory.v20180601.Db2LinkedServiceResponse | types.outputs.datafactory.v20180601.DrillLinkedServiceResponse | types.outputs.datafactory.v20180601.DynamicsAXLinkedServiceResponse | types.outputs.datafactory.v20180601.DynamicsCrmLinkedServiceResponse | types.outputs.datafactory.v20180601.DynamicsLinkedServiceResponse | types.outputs.datafactory.v20180601.EloquaLinkedServiceResponse | types.outputs.datafactory.v20180601.FileServerLinkedServiceResponse | types.outputs.datafactory.v20180601.FtpServerLinkedServiceResponse | types.outputs.datafactory.v20180601.GoogleAdWordsLinkedServiceResponse | types.outputs.datafactory.v20180601.GoogleBigQueryLinkedServiceResponse | types.outputs.datafactory.v20180601.GoogleCloudStorageLinkedServiceResponse | types.outputs.datafactory.v20180601.GoogleSheetsLinkedServiceResponse | types.outputs.datafactory.v20180601.GreenplumLinkedServiceResponse | types.outputs.datafactory.v20180601.HBaseLinkedServiceResponse | types.outputs.datafactory.v20180601.HDInsightLinkedServiceResponse | types.outputs.datafactory.v20180601.HDInsightOnDemandLinkedServiceResponse | types.outputs.datafactory.v20180601.HdfsLinkedServiceResponse | types.outputs.datafactory.v20180601.HiveLinkedServiceResponse | types.outputs.datafactory.v20180601.HttpLinkedServiceResponse | types.outputs.datafactory.v20180601.HubspotLinkedServiceResponse | types.outputs.datafactory.v20180601.ImpalaLinkedServiceResponse | types.outputs.datafactory.v20180601.InformixLinkedServiceResponse | types.outputs.datafactory.v20180601.JiraLinkedServiceResponse | types.outputs.datafactory.v20180601.MagentoLinkedServiceResponse | types.outputs.datafactory.v20180601.MariaDBLinkedServiceResponse | types.outputs.datafactory.v20180601.MarketoLinkedServiceResponse | types.outputs.datafactory.v20180601.MicrosoftAccessLinkedServiceResponse | types.outputs.datafactory.v20180601.MongoDbAtlasLinkedServiceResponse | types.outputs.datafactory.v20180601.MongoDbLinkedServiceResponse | types.outputs.datafactory.v20180601.MongoDbV2LinkedServiceResponse | types.outputs.datafactory.v20180601.MySqlLinkedServiceResponse | types.outputs.datafactory.v20180601.NetezzaLinkedServiceResponse | types.outputs.datafactory.v20180601.ODataLinkedServiceResponse | types.outputs.datafactory.v20180601.OdbcLinkedServiceResponse | types.outputs.datafactory.v20180601.Office365LinkedServiceResponse | types.outputs.datafactory.v20180601.OracleCloudStorageLinkedServiceResponse | types.outputs.datafactory.v20180601.OracleLinkedServiceResponse | types.outputs.datafactory.v20180601.OracleServiceCloudLinkedServiceResponse | types.outputs.datafactory.v20180601.PaypalLinkedServiceResponse | types.outputs.datafactory.v20180601.PhoenixLinkedServiceResponse | types.outputs.datafactory.v20180601.PostgreSqlLinkedServiceResponse | types.outputs.datafactory.v20180601.PrestoLinkedServiceResponse | types.outputs.datafactory.v20180601.QuickBooksLinkedServiceResponse | types.outputs.datafactory.v20180601.QuickbaseLinkedServiceResponse | types.outputs.datafactory.v20180601.ResponsysLinkedServiceResponse | types.outputs.datafactory.v20180601.RestServiceLinkedServiceResponse | types.outputs.datafactory.v20180601.SalesforceLinkedServiceResponse | types.outputs.datafactory.v20180601.SalesforceMarketingCloudLinkedServiceResponse | types.outputs.datafactory.v20180601.SalesforceServiceCloudLinkedServiceResponse | types.outputs.datafactory.v20180601.SapBWLinkedServiceResponse | types.outputs.datafactory.v20180601.SapCloudForCustomerLinkedServiceResponse | types.outputs.datafactory.v20180601.SapEccLinkedServiceResponse | types.outputs.datafactory.v20180601.SapHanaLinkedServiceResponse | types.outputs.datafactory.v20180601.SapOdpLinkedServiceResponse | types.outputs.datafactory.v20180601.SapOpenHubLinkedServiceResponse | types.outputs.datafactory.v20180601.SapTableLinkedServiceResponse | types.outputs.datafactory.v20180601.ServiceNowLinkedServiceResponse | types.outputs.datafactory.v20180601.SftpServerLinkedServiceResponse | types.outputs.datafactory.v20180601.SharePointOnlineListLinkedServiceResponse | types.outputs.datafactory.v20180601.ShopifyLinkedServiceResponse | types.outputs.datafactory.v20180601.SmartsheetLinkedServiceResponse | types.outputs.datafactory.v20180601.SnowflakeLinkedServiceResponse | types.outputs.datafactory.v20180601.SparkLinkedServiceResponse | types.outputs.datafactory.v20180601.SqlServerLinkedServiceResponse | types.outputs.datafactory.v20180601.SquareLinkedServiceResponse | types.outputs.datafactory.v20180601.SybaseLinkedServiceResponse | types.outputs.datafactory.v20180601.TeamDeskLinkedServiceResponse | types.outputs.datafactory.v20180601.TeradataLinkedServiceResponse | types.outputs.datafactory.v20180601.TwilioLinkedServiceResponse | types.outputs.datafactory.v20180601.VerticaLinkedServiceResponse | types.outputs.datafactory.v20180601.WebLinkedServiceResponse | types.outputs.datafactory.v20180601.XeroLinkedServiceResponse | types.outputs.datafactory.v20180601.ZendeskLinkedServiceResponse | types.outputs.datafactory.v20180601.ZohoLinkedServiceResponse>;
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
        const aliasOpts = { aliases: [{ type: "azure-native:datafactory:LinkedService" }, { type: "azure-native:datafactory/v20170901preview:LinkedService" }] };
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
    properties: pulumi.Input<types.inputs.datafactory.v20180601.AmazonMWSLinkedServiceArgs | types.inputs.datafactory.v20180601.AmazonRdsForOracleLinkedServiceArgs | types.inputs.datafactory.v20180601.AmazonRdsForSqlServerLinkedServiceArgs | types.inputs.datafactory.v20180601.AmazonRedshiftLinkedServiceArgs | types.inputs.datafactory.v20180601.AmazonS3CompatibleLinkedServiceArgs | types.inputs.datafactory.v20180601.AmazonS3LinkedServiceArgs | types.inputs.datafactory.v20180601.AppFiguresLinkedServiceArgs | types.inputs.datafactory.v20180601.AsanaLinkedServiceArgs | types.inputs.datafactory.v20180601.AzureBatchLinkedServiceArgs | types.inputs.datafactory.v20180601.AzureBlobFSLinkedServiceArgs | types.inputs.datafactory.v20180601.AzureBlobStorageLinkedServiceArgs | types.inputs.datafactory.v20180601.AzureDataExplorerLinkedServiceArgs | types.inputs.datafactory.v20180601.AzureDataLakeAnalyticsLinkedServiceArgs | types.inputs.datafactory.v20180601.AzureDataLakeStoreLinkedServiceArgs | types.inputs.datafactory.v20180601.AzureDatabricksDeltaLakeLinkedServiceArgs | types.inputs.datafactory.v20180601.AzureDatabricksLinkedServiceArgs | types.inputs.datafactory.v20180601.AzureFileStorageLinkedServiceArgs | types.inputs.datafactory.v20180601.AzureFunctionLinkedServiceArgs | types.inputs.datafactory.v20180601.AzureKeyVaultLinkedServiceArgs | types.inputs.datafactory.v20180601.AzureMLLinkedServiceArgs | types.inputs.datafactory.v20180601.AzureMLServiceLinkedServiceArgs | types.inputs.datafactory.v20180601.AzureMariaDBLinkedServiceArgs | types.inputs.datafactory.v20180601.AzureMySqlLinkedServiceArgs | types.inputs.datafactory.v20180601.AzurePostgreSqlLinkedServiceArgs | types.inputs.datafactory.v20180601.AzureSearchLinkedServiceArgs | types.inputs.datafactory.v20180601.AzureSqlDWLinkedServiceArgs | types.inputs.datafactory.v20180601.AzureSqlDatabaseLinkedServiceArgs | types.inputs.datafactory.v20180601.AzureSqlMILinkedServiceArgs | types.inputs.datafactory.v20180601.AzureStorageLinkedServiceArgs | types.inputs.datafactory.v20180601.AzureSynapseArtifactsLinkedServiceArgs | types.inputs.datafactory.v20180601.AzureTableStorageLinkedServiceArgs | types.inputs.datafactory.v20180601.CassandraLinkedServiceArgs | types.inputs.datafactory.v20180601.CommonDataServiceForAppsLinkedServiceArgs | types.inputs.datafactory.v20180601.ConcurLinkedServiceArgs | types.inputs.datafactory.v20180601.CosmosDbLinkedServiceArgs | types.inputs.datafactory.v20180601.CosmosDbMongoDbApiLinkedServiceArgs | types.inputs.datafactory.v20180601.CouchbaseLinkedServiceArgs | types.inputs.datafactory.v20180601.CustomDataSourceLinkedServiceArgs | types.inputs.datafactory.v20180601.DataworldLinkedServiceArgs | types.inputs.datafactory.v20180601.Db2LinkedServiceArgs | types.inputs.datafactory.v20180601.DrillLinkedServiceArgs | types.inputs.datafactory.v20180601.DynamicsAXLinkedServiceArgs | types.inputs.datafactory.v20180601.DynamicsCrmLinkedServiceArgs | types.inputs.datafactory.v20180601.DynamicsLinkedServiceArgs | types.inputs.datafactory.v20180601.EloquaLinkedServiceArgs | types.inputs.datafactory.v20180601.FileServerLinkedServiceArgs | types.inputs.datafactory.v20180601.FtpServerLinkedServiceArgs | types.inputs.datafactory.v20180601.GoogleAdWordsLinkedServiceArgs | types.inputs.datafactory.v20180601.GoogleBigQueryLinkedServiceArgs | types.inputs.datafactory.v20180601.GoogleCloudStorageLinkedServiceArgs | types.inputs.datafactory.v20180601.GoogleSheetsLinkedServiceArgs | types.inputs.datafactory.v20180601.GreenplumLinkedServiceArgs | types.inputs.datafactory.v20180601.HBaseLinkedServiceArgs | types.inputs.datafactory.v20180601.HDInsightLinkedServiceArgs | types.inputs.datafactory.v20180601.HDInsightOnDemandLinkedServiceArgs | types.inputs.datafactory.v20180601.HdfsLinkedServiceArgs | types.inputs.datafactory.v20180601.HiveLinkedServiceArgs | types.inputs.datafactory.v20180601.HttpLinkedServiceArgs | types.inputs.datafactory.v20180601.HubspotLinkedServiceArgs | types.inputs.datafactory.v20180601.ImpalaLinkedServiceArgs | types.inputs.datafactory.v20180601.InformixLinkedServiceArgs | types.inputs.datafactory.v20180601.JiraLinkedServiceArgs | types.inputs.datafactory.v20180601.MagentoLinkedServiceArgs | types.inputs.datafactory.v20180601.MariaDBLinkedServiceArgs | types.inputs.datafactory.v20180601.MarketoLinkedServiceArgs | types.inputs.datafactory.v20180601.MicrosoftAccessLinkedServiceArgs | types.inputs.datafactory.v20180601.MongoDbAtlasLinkedServiceArgs | types.inputs.datafactory.v20180601.MongoDbLinkedServiceArgs | types.inputs.datafactory.v20180601.MongoDbV2LinkedServiceArgs | types.inputs.datafactory.v20180601.MySqlLinkedServiceArgs | types.inputs.datafactory.v20180601.NetezzaLinkedServiceArgs | types.inputs.datafactory.v20180601.ODataLinkedServiceArgs | types.inputs.datafactory.v20180601.OdbcLinkedServiceArgs | types.inputs.datafactory.v20180601.Office365LinkedServiceArgs | types.inputs.datafactory.v20180601.OracleCloudStorageLinkedServiceArgs | types.inputs.datafactory.v20180601.OracleLinkedServiceArgs | types.inputs.datafactory.v20180601.OracleServiceCloudLinkedServiceArgs | types.inputs.datafactory.v20180601.PaypalLinkedServiceArgs | types.inputs.datafactory.v20180601.PhoenixLinkedServiceArgs | types.inputs.datafactory.v20180601.PostgreSqlLinkedServiceArgs | types.inputs.datafactory.v20180601.PrestoLinkedServiceArgs | types.inputs.datafactory.v20180601.QuickBooksLinkedServiceArgs | types.inputs.datafactory.v20180601.QuickbaseLinkedServiceArgs | types.inputs.datafactory.v20180601.ResponsysLinkedServiceArgs | types.inputs.datafactory.v20180601.RestServiceLinkedServiceArgs | types.inputs.datafactory.v20180601.SalesforceLinkedServiceArgs | types.inputs.datafactory.v20180601.SalesforceMarketingCloudLinkedServiceArgs | types.inputs.datafactory.v20180601.SalesforceServiceCloudLinkedServiceArgs | types.inputs.datafactory.v20180601.SapBWLinkedServiceArgs | types.inputs.datafactory.v20180601.SapCloudForCustomerLinkedServiceArgs | types.inputs.datafactory.v20180601.SapEccLinkedServiceArgs | types.inputs.datafactory.v20180601.SapHanaLinkedServiceArgs | types.inputs.datafactory.v20180601.SapOdpLinkedServiceArgs | types.inputs.datafactory.v20180601.SapOpenHubLinkedServiceArgs | types.inputs.datafactory.v20180601.SapTableLinkedServiceArgs | types.inputs.datafactory.v20180601.ServiceNowLinkedServiceArgs | types.inputs.datafactory.v20180601.SftpServerLinkedServiceArgs | types.inputs.datafactory.v20180601.SharePointOnlineListLinkedServiceArgs | types.inputs.datafactory.v20180601.ShopifyLinkedServiceArgs | types.inputs.datafactory.v20180601.SmartsheetLinkedServiceArgs | types.inputs.datafactory.v20180601.SnowflakeLinkedServiceArgs | types.inputs.datafactory.v20180601.SparkLinkedServiceArgs | types.inputs.datafactory.v20180601.SqlServerLinkedServiceArgs | types.inputs.datafactory.v20180601.SquareLinkedServiceArgs | types.inputs.datafactory.v20180601.SybaseLinkedServiceArgs | types.inputs.datafactory.v20180601.TeamDeskLinkedServiceArgs | types.inputs.datafactory.v20180601.TeradataLinkedServiceArgs | types.inputs.datafactory.v20180601.TwilioLinkedServiceArgs | types.inputs.datafactory.v20180601.VerticaLinkedServiceArgs | types.inputs.datafactory.v20180601.WebLinkedServiceArgs | types.inputs.datafactory.v20180601.XeroLinkedServiceArgs | types.inputs.datafactory.v20180601.ZendeskLinkedServiceArgs | types.inputs.datafactory.v20180601.ZohoLinkedServiceArgs>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}
