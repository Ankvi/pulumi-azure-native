import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Linked service resource type.
 * Azure REST API version: 2018-06-01. Prior API version in Azure Native 1.x: 2018-06-01.
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
    public readonly properties!: pulumi.Output<types.outputs.AmazonMWSLinkedServiceResponse | types.outputs.AmazonRdsForOracleLinkedServiceResponse | types.outputs.AmazonRdsForSqlServerLinkedServiceResponse | types.outputs.AmazonRedshiftLinkedServiceResponse | types.outputs.AmazonS3CompatibleLinkedServiceResponse | types.outputs.AmazonS3LinkedServiceResponse | types.outputs.AppFiguresLinkedServiceResponse | types.outputs.AsanaLinkedServiceResponse | types.outputs.AzureBatchLinkedServiceResponse | types.outputs.AzureBlobFSLinkedServiceResponse | types.outputs.AzureBlobStorageLinkedServiceResponse | types.outputs.AzureDataExplorerLinkedServiceResponse | types.outputs.AzureDataLakeAnalyticsLinkedServiceResponse | types.outputs.AzureDataLakeStoreLinkedServiceResponse | types.outputs.AzureDatabricksDeltaLakeLinkedServiceResponse | types.outputs.AzureDatabricksLinkedServiceResponse | types.outputs.AzureFileStorageLinkedServiceResponse | types.outputs.AzureFunctionLinkedServiceResponse | types.outputs.AzureKeyVaultLinkedServiceResponse | types.outputs.AzureMLLinkedServiceResponse | types.outputs.AzureMLServiceLinkedServiceResponse | types.outputs.AzureMariaDBLinkedServiceResponse | types.outputs.AzureMySqlLinkedServiceResponse | types.outputs.AzurePostgreSqlLinkedServiceResponse | types.outputs.AzureSearchLinkedServiceResponse | types.outputs.AzureSqlDWLinkedServiceResponse | types.outputs.AzureSqlDatabaseLinkedServiceResponse | types.outputs.AzureSqlMILinkedServiceResponse | types.outputs.AzureStorageLinkedServiceResponse | types.outputs.AzureSynapseArtifactsLinkedServiceResponse | types.outputs.AzureTableStorageLinkedServiceResponse | types.outputs.CassandraLinkedServiceResponse | types.outputs.CommonDataServiceForAppsLinkedServiceResponse | types.outputs.ConcurLinkedServiceResponse | types.outputs.CosmosDbLinkedServiceResponse | types.outputs.CosmosDbMongoDbApiLinkedServiceResponse | types.outputs.CouchbaseLinkedServiceResponse | types.outputs.CustomDataSourceLinkedServiceResponse | types.outputs.DataworldLinkedServiceResponse | types.outputs.Db2LinkedServiceResponse | types.outputs.DrillLinkedServiceResponse | types.outputs.DynamicsAXLinkedServiceResponse | types.outputs.DynamicsCrmLinkedServiceResponse | types.outputs.DynamicsLinkedServiceResponse | types.outputs.EloquaLinkedServiceResponse | types.outputs.FileServerLinkedServiceResponse | types.outputs.FtpServerLinkedServiceResponse | types.outputs.GoogleAdWordsLinkedServiceResponse | types.outputs.GoogleBigQueryLinkedServiceResponse | types.outputs.GoogleCloudStorageLinkedServiceResponse | types.outputs.GoogleSheetsLinkedServiceResponse | types.outputs.GreenplumLinkedServiceResponse | types.outputs.HBaseLinkedServiceResponse | types.outputs.HDInsightLinkedServiceResponse | types.outputs.HDInsightOnDemandLinkedServiceResponse | types.outputs.HdfsLinkedServiceResponse | types.outputs.HiveLinkedServiceResponse | types.outputs.HttpLinkedServiceResponse | types.outputs.HubspotLinkedServiceResponse | types.outputs.ImpalaLinkedServiceResponse | types.outputs.InformixLinkedServiceResponse | types.outputs.JiraLinkedServiceResponse | types.outputs.LakeHouseLinkedServiceResponse | types.outputs.MagentoLinkedServiceResponse | types.outputs.MariaDBLinkedServiceResponse | types.outputs.MarketoLinkedServiceResponse | types.outputs.MicrosoftAccessLinkedServiceResponse | types.outputs.MongoDbAtlasLinkedServiceResponse | types.outputs.MongoDbLinkedServiceResponse | types.outputs.MongoDbV2LinkedServiceResponse | types.outputs.MySqlLinkedServiceResponse | types.outputs.NetezzaLinkedServiceResponse | types.outputs.ODataLinkedServiceResponse | types.outputs.OdbcLinkedServiceResponse | types.outputs.Office365LinkedServiceResponse | types.outputs.OracleCloudStorageLinkedServiceResponse | types.outputs.OracleLinkedServiceResponse | types.outputs.OracleServiceCloudLinkedServiceResponse | types.outputs.PaypalLinkedServiceResponse | types.outputs.PhoenixLinkedServiceResponse | types.outputs.PostgreSqlLinkedServiceResponse | types.outputs.PrestoLinkedServiceResponse | types.outputs.QuickBooksLinkedServiceResponse | types.outputs.QuickbaseLinkedServiceResponse | types.outputs.ResponsysLinkedServiceResponse | types.outputs.RestServiceLinkedServiceResponse | types.outputs.SalesforceLinkedServiceResponse | types.outputs.SalesforceMarketingCloudLinkedServiceResponse | types.outputs.SalesforceServiceCloudLinkedServiceResponse | types.outputs.SalesforceServiceCloudV2LinkedServiceResponse | types.outputs.SalesforceV2LinkedServiceResponse | types.outputs.SapBWLinkedServiceResponse | types.outputs.SapCloudForCustomerLinkedServiceResponse | types.outputs.SapEccLinkedServiceResponse | types.outputs.SapHanaLinkedServiceResponse | types.outputs.SapOdpLinkedServiceResponse | types.outputs.SapOpenHubLinkedServiceResponse | types.outputs.SapTableLinkedServiceResponse | types.outputs.ServiceNowLinkedServiceResponse | types.outputs.SftpServerLinkedServiceResponse | types.outputs.SharePointOnlineListLinkedServiceResponse | types.outputs.ShopifyLinkedServiceResponse | types.outputs.SmartsheetLinkedServiceResponse | types.outputs.SnowflakeLinkedServiceResponse | types.outputs.SparkLinkedServiceResponse | types.outputs.SqlServerLinkedServiceResponse | types.outputs.SquareLinkedServiceResponse | types.outputs.SybaseLinkedServiceResponse | types.outputs.TeamDeskLinkedServiceResponse | types.outputs.TeradataLinkedServiceResponse | types.outputs.TwilioLinkedServiceResponse | types.outputs.VerticaLinkedServiceResponse | types.outputs.WarehouseLinkedServiceResponse | types.outputs.WebLinkedServiceResponse | types.outputs.XeroLinkedServiceResponse | types.outputs.ZendeskLinkedServiceResponse | types.outputs.ZohoLinkedServiceResponse>;
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
    properties: pulumi.Input<types.inputs.AmazonMWSLinkedServiceArgs | types.inputs.AmazonRdsForOracleLinkedServiceArgs | types.inputs.AmazonRdsForSqlServerLinkedServiceArgs | types.inputs.AmazonRedshiftLinkedServiceArgs | types.inputs.AmazonS3CompatibleLinkedServiceArgs | types.inputs.AmazonS3LinkedServiceArgs | types.inputs.AppFiguresLinkedServiceArgs | types.inputs.AsanaLinkedServiceArgs | types.inputs.AzureBatchLinkedServiceArgs | types.inputs.AzureBlobFSLinkedServiceArgs | types.inputs.AzureBlobStorageLinkedServiceArgs | types.inputs.AzureDataExplorerLinkedServiceArgs | types.inputs.AzureDataLakeAnalyticsLinkedServiceArgs | types.inputs.AzureDataLakeStoreLinkedServiceArgs | types.inputs.AzureDatabricksDeltaLakeLinkedServiceArgs | types.inputs.AzureDatabricksLinkedServiceArgs | types.inputs.AzureFileStorageLinkedServiceArgs | types.inputs.AzureFunctionLinkedServiceArgs | types.inputs.AzureKeyVaultLinkedServiceArgs | types.inputs.AzureMLLinkedServiceArgs | types.inputs.AzureMLServiceLinkedServiceArgs | types.inputs.AzureMariaDBLinkedServiceArgs | types.inputs.AzureMySqlLinkedServiceArgs | types.inputs.AzurePostgreSqlLinkedServiceArgs | types.inputs.AzureSearchLinkedServiceArgs | types.inputs.AzureSqlDWLinkedServiceArgs | types.inputs.AzureSqlDatabaseLinkedServiceArgs | types.inputs.AzureSqlMILinkedServiceArgs | types.inputs.AzureStorageLinkedServiceArgs | types.inputs.AzureSynapseArtifactsLinkedServiceArgs | types.inputs.AzureTableStorageLinkedServiceArgs | types.inputs.CassandraLinkedServiceArgs | types.inputs.CommonDataServiceForAppsLinkedServiceArgs | types.inputs.ConcurLinkedServiceArgs | types.inputs.CosmosDbLinkedServiceArgs | types.inputs.CosmosDbMongoDbApiLinkedServiceArgs | types.inputs.CouchbaseLinkedServiceArgs | types.inputs.CustomDataSourceLinkedServiceArgs | types.inputs.DataworldLinkedServiceArgs | types.inputs.Db2LinkedServiceArgs | types.inputs.DrillLinkedServiceArgs | types.inputs.DynamicsAXLinkedServiceArgs | types.inputs.DynamicsCrmLinkedServiceArgs | types.inputs.DynamicsLinkedServiceArgs | types.inputs.EloquaLinkedServiceArgs | types.inputs.FileServerLinkedServiceArgs | types.inputs.FtpServerLinkedServiceArgs | types.inputs.GoogleAdWordsLinkedServiceArgs | types.inputs.GoogleBigQueryLinkedServiceArgs | types.inputs.GoogleCloudStorageLinkedServiceArgs | types.inputs.GoogleSheetsLinkedServiceArgs | types.inputs.GreenplumLinkedServiceArgs | types.inputs.HBaseLinkedServiceArgs | types.inputs.HDInsightLinkedServiceArgs | types.inputs.HDInsightOnDemandLinkedServiceArgs | types.inputs.HdfsLinkedServiceArgs | types.inputs.HiveLinkedServiceArgs | types.inputs.HttpLinkedServiceArgs | types.inputs.HubspotLinkedServiceArgs | types.inputs.ImpalaLinkedServiceArgs | types.inputs.InformixLinkedServiceArgs | types.inputs.JiraLinkedServiceArgs | types.inputs.LakeHouseLinkedServiceArgs | types.inputs.MagentoLinkedServiceArgs | types.inputs.MariaDBLinkedServiceArgs | types.inputs.MarketoLinkedServiceArgs | types.inputs.MicrosoftAccessLinkedServiceArgs | types.inputs.MongoDbAtlasLinkedServiceArgs | types.inputs.MongoDbLinkedServiceArgs | types.inputs.MongoDbV2LinkedServiceArgs | types.inputs.MySqlLinkedServiceArgs | types.inputs.NetezzaLinkedServiceArgs | types.inputs.ODataLinkedServiceArgs | types.inputs.OdbcLinkedServiceArgs | types.inputs.Office365LinkedServiceArgs | types.inputs.OracleCloudStorageLinkedServiceArgs | types.inputs.OracleLinkedServiceArgs | types.inputs.OracleServiceCloudLinkedServiceArgs | types.inputs.PaypalLinkedServiceArgs | types.inputs.PhoenixLinkedServiceArgs | types.inputs.PostgreSqlLinkedServiceArgs | types.inputs.PrestoLinkedServiceArgs | types.inputs.QuickBooksLinkedServiceArgs | types.inputs.QuickbaseLinkedServiceArgs | types.inputs.ResponsysLinkedServiceArgs | types.inputs.RestServiceLinkedServiceArgs | types.inputs.SalesforceLinkedServiceArgs | types.inputs.SalesforceMarketingCloudLinkedServiceArgs | types.inputs.SalesforceServiceCloudLinkedServiceArgs | types.inputs.SalesforceServiceCloudV2LinkedServiceArgs | types.inputs.SalesforceV2LinkedServiceArgs | types.inputs.SapBWLinkedServiceArgs | types.inputs.SapCloudForCustomerLinkedServiceArgs | types.inputs.SapEccLinkedServiceArgs | types.inputs.SapHanaLinkedServiceArgs | types.inputs.SapOdpLinkedServiceArgs | types.inputs.SapOpenHubLinkedServiceArgs | types.inputs.SapTableLinkedServiceArgs | types.inputs.ServiceNowLinkedServiceArgs | types.inputs.SftpServerLinkedServiceArgs | types.inputs.SharePointOnlineListLinkedServiceArgs | types.inputs.ShopifyLinkedServiceArgs | types.inputs.SmartsheetLinkedServiceArgs | types.inputs.SnowflakeLinkedServiceArgs | types.inputs.SparkLinkedServiceArgs | types.inputs.SqlServerLinkedServiceArgs | types.inputs.SquareLinkedServiceArgs | types.inputs.SybaseLinkedServiceArgs | types.inputs.TeamDeskLinkedServiceArgs | types.inputs.TeradataLinkedServiceArgs | types.inputs.TwilioLinkedServiceArgs | types.inputs.VerticaLinkedServiceArgs | types.inputs.WarehouseLinkedServiceArgs | types.inputs.WebLinkedServiceArgs | types.inputs.XeroLinkedServiceArgs | types.inputs.ZendeskLinkedServiceArgs | types.inputs.ZohoLinkedServiceArgs>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}
