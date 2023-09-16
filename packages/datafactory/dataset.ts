import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Dataset resource type.
 * Azure REST API version: 2018-06-01. Prior API version in Azure Native 1.x: 2018-06-01
 */
export class Dataset extends pulumi.CustomResource {
    /**
     * Get an existing Dataset resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Dataset {
        return new Dataset(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:datafactory:Dataset';

    /**
     * Returns true if the given object is an instance of Dataset.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Dataset {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Dataset.__pulumiType;
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
     * Dataset properties.
     */
    public readonly properties!: pulumi.Output<types.outputs.datafactory.AmazonMWSObjectDatasetResponse | types.outputs.datafactory.AmazonRdsForOracleTableDatasetResponse | types.outputs.datafactory.AmazonRdsForSqlServerTableDatasetResponse | types.outputs.datafactory.AmazonRedshiftTableDatasetResponse | types.outputs.datafactory.AmazonS3DatasetResponse | types.outputs.datafactory.AvroDatasetResponse | types.outputs.datafactory.AzureBlobDatasetResponse | types.outputs.datafactory.AzureBlobFSDatasetResponse | types.outputs.datafactory.AzureDataExplorerTableDatasetResponse | types.outputs.datafactory.AzureDataLakeStoreDatasetResponse | types.outputs.datafactory.AzureDatabricksDeltaLakeDatasetResponse | types.outputs.datafactory.AzureMariaDBTableDatasetResponse | types.outputs.datafactory.AzureMySqlTableDatasetResponse | types.outputs.datafactory.AzurePostgreSqlTableDatasetResponse | types.outputs.datafactory.AzureSearchIndexDatasetResponse | types.outputs.datafactory.AzureSqlDWTableDatasetResponse | types.outputs.datafactory.AzureSqlMITableDatasetResponse | types.outputs.datafactory.AzureSqlTableDatasetResponse | types.outputs.datafactory.AzureTableDatasetResponse | types.outputs.datafactory.BinaryDatasetResponse | types.outputs.datafactory.CassandraTableDatasetResponse | types.outputs.datafactory.CommonDataServiceForAppsEntityDatasetResponse | types.outputs.datafactory.ConcurObjectDatasetResponse | types.outputs.datafactory.CosmosDbMongoDbApiCollectionDatasetResponse | types.outputs.datafactory.CosmosDbSqlApiCollectionDatasetResponse | types.outputs.datafactory.CouchbaseTableDatasetResponse | types.outputs.datafactory.CustomDatasetResponse | types.outputs.datafactory.Db2TableDatasetResponse | types.outputs.datafactory.DelimitedTextDatasetResponse | types.outputs.datafactory.DocumentDbCollectionDatasetResponse | types.outputs.datafactory.DrillTableDatasetResponse | types.outputs.datafactory.DynamicsAXResourceDatasetResponse | types.outputs.datafactory.DynamicsCrmEntityDatasetResponse | types.outputs.datafactory.DynamicsEntityDatasetResponse | types.outputs.datafactory.EloquaObjectDatasetResponse | types.outputs.datafactory.ExcelDatasetResponse | types.outputs.datafactory.FileShareDatasetResponse | types.outputs.datafactory.GoogleAdWordsObjectDatasetResponse | types.outputs.datafactory.GoogleBigQueryObjectDatasetResponse | types.outputs.datafactory.GreenplumTableDatasetResponse | types.outputs.datafactory.HBaseObjectDatasetResponse | types.outputs.datafactory.HiveObjectDatasetResponse | types.outputs.datafactory.HttpDatasetResponse | types.outputs.datafactory.HubspotObjectDatasetResponse | types.outputs.datafactory.ImpalaObjectDatasetResponse | types.outputs.datafactory.InformixTableDatasetResponse | types.outputs.datafactory.JiraObjectDatasetResponse | types.outputs.datafactory.JsonDatasetResponse | types.outputs.datafactory.MagentoObjectDatasetResponse | types.outputs.datafactory.MariaDBTableDatasetResponse | types.outputs.datafactory.MarketoObjectDatasetResponse | types.outputs.datafactory.MicrosoftAccessTableDatasetResponse | types.outputs.datafactory.MongoDbAtlasCollectionDatasetResponse | types.outputs.datafactory.MongoDbCollectionDatasetResponse | types.outputs.datafactory.MongoDbV2CollectionDatasetResponse | types.outputs.datafactory.MySqlTableDatasetResponse | types.outputs.datafactory.NetezzaTableDatasetResponse | types.outputs.datafactory.ODataResourceDatasetResponse | types.outputs.datafactory.OdbcTableDatasetResponse | types.outputs.datafactory.Office365DatasetResponse | types.outputs.datafactory.OracleServiceCloudObjectDatasetResponse | types.outputs.datafactory.OracleTableDatasetResponse | types.outputs.datafactory.OrcDatasetResponse | types.outputs.datafactory.ParquetDatasetResponse | types.outputs.datafactory.PaypalObjectDatasetResponse | types.outputs.datafactory.PhoenixObjectDatasetResponse | types.outputs.datafactory.PostgreSqlTableDatasetResponse | types.outputs.datafactory.PrestoObjectDatasetResponse | types.outputs.datafactory.QuickBooksObjectDatasetResponse | types.outputs.datafactory.RelationalTableDatasetResponse | types.outputs.datafactory.ResponsysObjectDatasetResponse | types.outputs.datafactory.RestResourceDatasetResponse | types.outputs.datafactory.SalesforceMarketingCloudObjectDatasetResponse | types.outputs.datafactory.SalesforceObjectDatasetResponse | types.outputs.datafactory.SalesforceServiceCloudObjectDatasetResponse | types.outputs.datafactory.SapBwCubeDatasetResponse | types.outputs.datafactory.SapCloudForCustomerResourceDatasetResponse | types.outputs.datafactory.SapEccResourceDatasetResponse | types.outputs.datafactory.SapHanaTableDatasetResponse | types.outputs.datafactory.SapOdpResourceDatasetResponse | types.outputs.datafactory.SapOpenHubTableDatasetResponse | types.outputs.datafactory.SapTableResourceDatasetResponse | types.outputs.datafactory.ServiceNowObjectDatasetResponse | types.outputs.datafactory.SharePointOnlineListResourceDatasetResponse | types.outputs.datafactory.ShopifyObjectDatasetResponse | types.outputs.datafactory.SnowflakeDatasetResponse | types.outputs.datafactory.SparkObjectDatasetResponse | types.outputs.datafactory.SqlServerTableDatasetResponse | types.outputs.datafactory.SquareObjectDatasetResponse | types.outputs.datafactory.SybaseTableDatasetResponse | types.outputs.datafactory.TeradataTableDatasetResponse | types.outputs.datafactory.VerticaTableDatasetResponse | types.outputs.datafactory.WebTableDatasetResponse | types.outputs.datafactory.XeroObjectDatasetResponse | types.outputs.datafactory.XmlDatasetResponse | types.outputs.datafactory.ZohoObjectDatasetResponse>;
    /**
     * The resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Dataset resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatasetArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["datasetName"] = args ? args.datasetName : undefined;
            resourceInputs["factoryName"] = args ? args.factoryName : undefined;
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
        const aliasOpts = { aliases: [{ type: "azure-native:datafactory/v20170901preview:Dataset" }, { type: "azure-native:datafactory/v20180601:Dataset" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Dataset.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Dataset resource.
 */
export interface DatasetArgs {
    /**
     * The dataset name.
     */
    datasetName?: pulumi.Input<string>;
    /**
     * The factory name.
     */
    factoryName: pulumi.Input<string>;
    /**
     * Dataset properties.
     */
    properties: pulumi.Input<types.inputs.datafactory.AmazonMWSObjectDatasetArgs | types.inputs.datafactory.AmazonRdsForOracleTableDatasetArgs | types.inputs.datafactory.AmazonRdsForSqlServerTableDatasetArgs | types.inputs.datafactory.AmazonRedshiftTableDatasetArgs | types.inputs.datafactory.AmazonS3DatasetArgs | types.inputs.datafactory.AvroDatasetArgs | types.inputs.datafactory.AzureBlobDatasetArgs | types.inputs.datafactory.AzureBlobFSDatasetArgs | types.inputs.datafactory.AzureDataExplorerTableDatasetArgs | types.inputs.datafactory.AzureDataLakeStoreDatasetArgs | types.inputs.datafactory.AzureDatabricksDeltaLakeDatasetArgs | types.inputs.datafactory.AzureMariaDBTableDatasetArgs | types.inputs.datafactory.AzureMySqlTableDatasetArgs | types.inputs.datafactory.AzurePostgreSqlTableDatasetArgs | types.inputs.datafactory.AzureSearchIndexDatasetArgs | types.inputs.datafactory.AzureSqlDWTableDatasetArgs | types.inputs.datafactory.AzureSqlMITableDatasetArgs | types.inputs.datafactory.AzureSqlTableDatasetArgs | types.inputs.datafactory.AzureTableDatasetArgs | types.inputs.datafactory.BinaryDatasetArgs | types.inputs.datafactory.CassandraTableDatasetArgs | types.inputs.datafactory.CommonDataServiceForAppsEntityDatasetArgs | types.inputs.datafactory.ConcurObjectDatasetArgs | types.inputs.datafactory.CosmosDbMongoDbApiCollectionDatasetArgs | types.inputs.datafactory.CosmosDbSqlApiCollectionDatasetArgs | types.inputs.datafactory.CouchbaseTableDatasetArgs | types.inputs.datafactory.CustomDatasetArgs | types.inputs.datafactory.Db2TableDatasetArgs | types.inputs.datafactory.DelimitedTextDatasetArgs | types.inputs.datafactory.DocumentDbCollectionDatasetArgs | types.inputs.datafactory.DrillTableDatasetArgs | types.inputs.datafactory.DynamicsAXResourceDatasetArgs | types.inputs.datafactory.DynamicsCrmEntityDatasetArgs | types.inputs.datafactory.DynamicsEntityDatasetArgs | types.inputs.datafactory.EloquaObjectDatasetArgs | types.inputs.datafactory.ExcelDatasetArgs | types.inputs.datafactory.FileShareDatasetArgs | types.inputs.datafactory.GoogleAdWordsObjectDatasetArgs | types.inputs.datafactory.GoogleBigQueryObjectDatasetArgs | types.inputs.datafactory.GreenplumTableDatasetArgs | types.inputs.datafactory.HBaseObjectDatasetArgs | types.inputs.datafactory.HiveObjectDatasetArgs | types.inputs.datafactory.HttpDatasetArgs | types.inputs.datafactory.HubspotObjectDatasetArgs | types.inputs.datafactory.ImpalaObjectDatasetArgs | types.inputs.datafactory.InformixTableDatasetArgs | types.inputs.datafactory.JiraObjectDatasetArgs | types.inputs.datafactory.JsonDatasetArgs | types.inputs.datafactory.MagentoObjectDatasetArgs | types.inputs.datafactory.MariaDBTableDatasetArgs | types.inputs.datafactory.MarketoObjectDatasetArgs | types.inputs.datafactory.MicrosoftAccessTableDatasetArgs | types.inputs.datafactory.MongoDbAtlasCollectionDatasetArgs | types.inputs.datafactory.MongoDbCollectionDatasetArgs | types.inputs.datafactory.MongoDbV2CollectionDatasetArgs | types.inputs.datafactory.MySqlTableDatasetArgs | types.inputs.datafactory.NetezzaTableDatasetArgs | types.inputs.datafactory.ODataResourceDatasetArgs | types.inputs.datafactory.OdbcTableDatasetArgs | types.inputs.datafactory.Office365DatasetArgs | types.inputs.datafactory.OracleServiceCloudObjectDatasetArgs | types.inputs.datafactory.OracleTableDatasetArgs | types.inputs.datafactory.OrcDatasetArgs | types.inputs.datafactory.ParquetDatasetArgs | types.inputs.datafactory.PaypalObjectDatasetArgs | types.inputs.datafactory.PhoenixObjectDatasetArgs | types.inputs.datafactory.PostgreSqlTableDatasetArgs | types.inputs.datafactory.PrestoObjectDatasetArgs | types.inputs.datafactory.QuickBooksObjectDatasetArgs | types.inputs.datafactory.RelationalTableDatasetArgs | types.inputs.datafactory.ResponsysObjectDatasetArgs | types.inputs.datafactory.RestResourceDatasetArgs | types.inputs.datafactory.SalesforceMarketingCloudObjectDatasetArgs | types.inputs.datafactory.SalesforceObjectDatasetArgs | types.inputs.datafactory.SalesforceServiceCloudObjectDatasetArgs | types.inputs.datafactory.SapBwCubeDatasetArgs | types.inputs.datafactory.SapCloudForCustomerResourceDatasetArgs | types.inputs.datafactory.SapEccResourceDatasetArgs | types.inputs.datafactory.SapHanaTableDatasetArgs | types.inputs.datafactory.SapOdpResourceDatasetArgs | types.inputs.datafactory.SapOpenHubTableDatasetArgs | types.inputs.datafactory.SapTableResourceDatasetArgs | types.inputs.datafactory.ServiceNowObjectDatasetArgs | types.inputs.datafactory.SharePointOnlineListResourceDatasetArgs | types.inputs.datafactory.ShopifyObjectDatasetArgs | types.inputs.datafactory.SnowflakeDatasetArgs | types.inputs.datafactory.SparkObjectDatasetArgs | types.inputs.datafactory.SqlServerTableDatasetArgs | types.inputs.datafactory.SquareObjectDatasetArgs | types.inputs.datafactory.SybaseTableDatasetArgs | types.inputs.datafactory.TeradataTableDatasetArgs | types.inputs.datafactory.VerticaTableDatasetArgs | types.inputs.datafactory.WebTableDatasetArgs | types.inputs.datafactory.XeroObjectDatasetArgs | types.inputs.datafactory.XmlDatasetArgs | types.inputs.datafactory.ZohoObjectDatasetArgs>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}
