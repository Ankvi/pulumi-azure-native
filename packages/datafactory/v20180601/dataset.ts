import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Dataset resource type.
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
    public static readonly __pulumiType = 'azure-native:datafactory/v20180601:Dataset';

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
    public readonly properties!: pulumi.Output<types.outputs.datafactory.v20180601.AmazonMWSObjectDatasetResponse | types.outputs.datafactory.v20180601.AmazonRdsForOracleTableDatasetResponse | types.outputs.datafactory.v20180601.AmazonRdsForSqlServerTableDatasetResponse | types.outputs.datafactory.v20180601.AmazonRedshiftTableDatasetResponse | types.outputs.datafactory.v20180601.AmazonS3DatasetResponse | types.outputs.datafactory.v20180601.AvroDatasetResponse | types.outputs.datafactory.v20180601.AzureBlobDatasetResponse | types.outputs.datafactory.v20180601.AzureBlobFSDatasetResponse | types.outputs.datafactory.v20180601.AzureDataExplorerTableDatasetResponse | types.outputs.datafactory.v20180601.AzureDataLakeStoreDatasetResponse | types.outputs.datafactory.v20180601.AzureDatabricksDeltaLakeDatasetResponse | types.outputs.datafactory.v20180601.AzureMariaDBTableDatasetResponse | types.outputs.datafactory.v20180601.AzureMySqlTableDatasetResponse | types.outputs.datafactory.v20180601.AzurePostgreSqlTableDatasetResponse | types.outputs.datafactory.v20180601.AzureSearchIndexDatasetResponse | types.outputs.datafactory.v20180601.AzureSqlDWTableDatasetResponse | types.outputs.datafactory.v20180601.AzureSqlMITableDatasetResponse | types.outputs.datafactory.v20180601.AzureSqlTableDatasetResponse | types.outputs.datafactory.v20180601.AzureTableDatasetResponse | types.outputs.datafactory.v20180601.BinaryDatasetResponse | types.outputs.datafactory.v20180601.CassandraTableDatasetResponse | types.outputs.datafactory.v20180601.CommonDataServiceForAppsEntityDatasetResponse | types.outputs.datafactory.v20180601.ConcurObjectDatasetResponse | types.outputs.datafactory.v20180601.CosmosDbMongoDbApiCollectionDatasetResponse | types.outputs.datafactory.v20180601.CosmosDbSqlApiCollectionDatasetResponse | types.outputs.datafactory.v20180601.CouchbaseTableDatasetResponse | types.outputs.datafactory.v20180601.CustomDatasetResponse | types.outputs.datafactory.v20180601.Db2TableDatasetResponse | types.outputs.datafactory.v20180601.DelimitedTextDatasetResponse | types.outputs.datafactory.v20180601.DocumentDbCollectionDatasetResponse | types.outputs.datafactory.v20180601.DrillTableDatasetResponse | types.outputs.datafactory.v20180601.DynamicsAXResourceDatasetResponse | types.outputs.datafactory.v20180601.DynamicsCrmEntityDatasetResponse | types.outputs.datafactory.v20180601.DynamicsEntityDatasetResponse | types.outputs.datafactory.v20180601.EloquaObjectDatasetResponse | types.outputs.datafactory.v20180601.ExcelDatasetResponse | types.outputs.datafactory.v20180601.FileShareDatasetResponse | types.outputs.datafactory.v20180601.GoogleAdWordsObjectDatasetResponse | types.outputs.datafactory.v20180601.GoogleBigQueryObjectDatasetResponse | types.outputs.datafactory.v20180601.GreenplumTableDatasetResponse | types.outputs.datafactory.v20180601.HBaseObjectDatasetResponse | types.outputs.datafactory.v20180601.HiveObjectDatasetResponse | types.outputs.datafactory.v20180601.HttpDatasetResponse | types.outputs.datafactory.v20180601.HubspotObjectDatasetResponse | types.outputs.datafactory.v20180601.ImpalaObjectDatasetResponse | types.outputs.datafactory.v20180601.InformixTableDatasetResponse | types.outputs.datafactory.v20180601.JiraObjectDatasetResponse | types.outputs.datafactory.v20180601.JsonDatasetResponse | types.outputs.datafactory.v20180601.MagentoObjectDatasetResponse | types.outputs.datafactory.v20180601.MariaDBTableDatasetResponse | types.outputs.datafactory.v20180601.MarketoObjectDatasetResponse | types.outputs.datafactory.v20180601.MicrosoftAccessTableDatasetResponse | types.outputs.datafactory.v20180601.MongoDbAtlasCollectionDatasetResponse | types.outputs.datafactory.v20180601.MongoDbCollectionDatasetResponse | types.outputs.datafactory.v20180601.MongoDbV2CollectionDatasetResponse | types.outputs.datafactory.v20180601.MySqlTableDatasetResponse | types.outputs.datafactory.v20180601.NetezzaTableDatasetResponse | types.outputs.datafactory.v20180601.ODataResourceDatasetResponse | types.outputs.datafactory.v20180601.OdbcTableDatasetResponse | types.outputs.datafactory.v20180601.Office365DatasetResponse | types.outputs.datafactory.v20180601.OracleServiceCloudObjectDatasetResponse | types.outputs.datafactory.v20180601.OracleTableDatasetResponse | types.outputs.datafactory.v20180601.OrcDatasetResponse | types.outputs.datafactory.v20180601.ParquetDatasetResponse | types.outputs.datafactory.v20180601.PaypalObjectDatasetResponse | types.outputs.datafactory.v20180601.PhoenixObjectDatasetResponse | types.outputs.datafactory.v20180601.PostgreSqlTableDatasetResponse | types.outputs.datafactory.v20180601.PrestoObjectDatasetResponse | types.outputs.datafactory.v20180601.QuickBooksObjectDatasetResponse | types.outputs.datafactory.v20180601.RelationalTableDatasetResponse | types.outputs.datafactory.v20180601.ResponsysObjectDatasetResponse | types.outputs.datafactory.v20180601.RestResourceDatasetResponse | types.outputs.datafactory.v20180601.SalesforceMarketingCloudObjectDatasetResponse | types.outputs.datafactory.v20180601.SalesforceObjectDatasetResponse | types.outputs.datafactory.v20180601.SalesforceServiceCloudObjectDatasetResponse | types.outputs.datafactory.v20180601.SapBwCubeDatasetResponse | types.outputs.datafactory.v20180601.SapCloudForCustomerResourceDatasetResponse | types.outputs.datafactory.v20180601.SapEccResourceDatasetResponse | types.outputs.datafactory.v20180601.SapHanaTableDatasetResponse | types.outputs.datafactory.v20180601.SapOdpResourceDatasetResponse | types.outputs.datafactory.v20180601.SapOpenHubTableDatasetResponse | types.outputs.datafactory.v20180601.SapTableResourceDatasetResponse | types.outputs.datafactory.v20180601.ServiceNowObjectDatasetResponse | types.outputs.datafactory.v20180601.SharePointOnlineListResourceDatasetResponse | types.outputs.datafactory.v20180601.ShopifyObjectDatasetResponse | types.outputs.datafactory.v20180601.SnowflakeDatasetResponse | types.outputs.datafactory.v20180601.SparkObjectDatasetResponse | types.outputs.datafactory.v20180601.SqlServerTableDatasetResponse | types.outputs.datafactory.v20180601.SquareObjectDatasetResponse | types.outputs.datafactory.v20180601.SybaseTableDatasetResponse | types.outputs.datafactory.v20180601.TeradataTableDatasetResponse | types.outputs.datafactory.v20180601.VerticaTableDatasetResponse | types.outputs.datafactory.v20180601.WebTableDatasetResponse | types.outputs.datafactory.v20180601.XeroObjectDatasetResponse | types.outputs.datafactory.v20180601.XmlDatasetResponse | types.outputs.datafactory.v20180601.ZohoObjectDatasetResponse>;
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
        const aliasOpts = { aliases: [{ type: "azure-native:datafactory:Dataset" }, { type: "azure-native:datafactory/v20170901preview:Dataset" }] };
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
    properties: pulumi.Input<types.inputs.datafactory.v20180601.AmazonMWSObjectDatasetArgs | types.inputs.datafactory.v20180601.AmazonRdsForOracleTableDatasetArgs | types.inputs.datafactory.v20180601.AmazonRdsForSqlServerTableDatasetArgs | types.inputs.datafactory.v20180601.AmazonRedshiftTableDatasetArgs | types.inputs.datafactory.v20180601.AmazonS3DatasetArgs | types.inputs.datafactory.v20180601.AvroDatasetArgs | types.inputs.datafactory.v20180601.AzureBlobDatasetArgs | types.inputs.datafactory.v20180601.AzureBlobFSDatasetArgs | types.inputs.datafactory.v20180601.AzureDataExplorerTableDatasetArgs | types.inputs.datafactory.v20180601.AzureDataLakeStoreDatasetArgs | types.inputs.datafactory.v20180601.AzureDatabricksDeltaLakeDatasetArgs | types.inputs.datafactory.v20180601.AzureMariaDBTableDatasetArgs | types.inputs.datafactory.v20180601.AzureMySqlTableDatasetArgs | types.inputs.datafactory.v20180601.AzurePostgreSqlTableDatasetArgs | types.inputs.datafactory.v20180601.AzureSearchIndexDatasetArgs | types.inputs.datafactory.v20180601.AzureSqlDWTableDatasetArgs | types.inputs.datafactory.v20180601.AzureSqlMITableDatasetArgs | types.inputs.datafactory.v20180601.AzureSqlTableDatasetArgs | types.inputs.datafactory.v20180601.AzureTableDatasetArgs | types.inputs.datafactory.v20180601.BinaryDatasetArgs | types.inputs.datafactory.v20180601.CassandraTableDatasetArgs | types.inputs.datafactory.v20180601.CommonDataServiceForAppsEntityDatasetArgs | types.inputs.datafactory.v20180601.ConcurObjectDatasetArgs | types.inputs.datafactory.v20180601.CosmosDbMongoDbApiCollectionDatasetArgs | types.inputs.datafactory.v20180601.CosmosDbSqlApiCollectionDatasetArgs | types.inputs.datafactory.v20180601.CouchbaseTableDatasetArgs | types.inputs.datafactory.v20180601.CustomDatasetArgs | types.inputs.datafactory.v20180601.Db2TableDatasetArgs | types.inputs.datafactory.v20180601.DelimitedTextDatasetArgs | types.inputs.datafactory.v20180601.DocumentDbCollectionDatasetArgs | types.inputs.datafactory.v20180601.DrillTableDatasetArgs | types.inputs.datafactory.v20180601.DynamicsAXResourceDatasetArgs | types.inputs.datafactory.v20180601.DynamicsCrmEntityDatasetArgs | types.inputs.datafactory.v20180601.DynamicsEntityDatasetArgs | types.inputs.datafactory.v20180601.EloquaObjectDatasetArgs | types.inputs.datafactory.v20180601.ExcelDatasetArgs | types.inputs.datafactory.v20180601.FileShareDatasetArgs | types.inputs.datafactory.v20180601.GoogleAdWordsObjectDatasetArgs | types.inputs.datafactory.v20180601.GoogleBigQueryObjectDatasetArgs | types.inputs.datafactory.v20180601.GreenplumTableDatasetArgs | types.inputs.datafactory.v20180601.HBaseObjectDatasetArgs | types.inputs.datafactory.v20180601.HiveObjectDatasetArgs | types.inputs.datafactory.v20180601.HttpDatasetArgs | types.inputs.datafactory.v20180601.HubspotObjectDatasetArgs | types.inputs.datafactory.v20180601.ImpalaObjectDatasetArgs | types.inputs.datafactory.v20180601.InformixTableDatasetArgs | types.inputs.datafactory.v20180601.JiraObjectDatasetArgs | types.inputs.datafactory.v20180601.JsonDatasetArgs | types.inputs.datafactory.v20180601.MagentoObjectDatasetArgs | types.inputs.datafactory.v20180601.MariaDBTableDatasetArgs | types.inputs.datafactory.v20180601.MarketoObjectDatasetArgs | types.inputs.datafactory.v20180601.MicrosoftAccessTableDatasetArgs | types.inputs.datafactory.v20180601.MongoDbAtlasCollectionDatasetArgs | types.inputs.datafactory.v20180601.MongoDbCollectionDatasetArgs | types.inputs.datafactory.v20180601.MongoDbV2CollectionDatasetArgs | types.inputs.datafactory.v20180601.MySqlTableDatasetArgs | types.inputs.datafactory.v20180601.NetezzaTableDatasetArgs | types.inputs.datafactory.v20180601.ODataResourceDatasetArgs | types.inputs.datafactory.v20180601.OdbcTableDatasetArgs | types.inputs.datafactory.v20180601.Office365DatasetArgs | types.inputs.datafactory.v20180601.OracleServiceCloudObjectDatasetArgs | types.inputs.datafactory.v20180601.OracleTableDatasetArgs | types.inputs.datafactory.v20180601.OrcDatasetArgs | types.inputs.datafactory.v20180601.ParquetDatasetArgs | types.inputs.datafactory.v20180601.PaypalObjectDatasetArgs | types.inputs.datafactory.v20180601.PhoenixObjectDatasetArgs | types.inputs.datafactory.v20180601.PostgreSqlTableDatasetArgs | types.inputs.datafactory.v20180601.PrestoObjectDatasetArgs | types.inputs.datafactory.v20180601.QuickBooksObjectDatasetArgs | types.inputs.datafactory.v20180601.RelationalTableDatasetArgs | types.inputs.datafactory.v20180601.ResponsysObjectDatasetArgs | types.inputs.datafactory.v20180601.RestResourceDatasetArgs | types.inputs.datafactory.v20180601.SalesforceMarketingCloudObjectDatasetArgs | types.inputs.datafactory.v20180601.SalesforceObjectDatasetArgs | types.inputs.datafactory.v20180601.SalesforceServiceCloudObjectDatasetArgs | types.inputs.datafactory.v20180601.SapBwCubeDatasetArgs | types.inputs.datafactory.v20180601.SapCloudForCustomerResourceDatasetArgs | types.inputs.datafactory.v20180601.SapEccResourceDatasetArgs | types.inputs.datafactory.v20180601.SapHanaTableDatasetArgs | types.inputs.datafactory.v20180601.SapOdpResourceDatasetArgs | types.inputs.datafactory.v20180601.SapOpenHubTableDatasetArgs | types.inputs.datafactory.v20180601.SapTableResourceDatasetArgs | types.inputs.datafactory.v20180601.ServiceNowObjectDatasetArgs | types.inputs.datafactory.v20180601.SharePointOnlineListResourceDatasetArgs | types.inputs.datafactory.v20180601.ShopifyObjectDatasetArgs | types.inputs.datafactory.v20180601.SnowflakeDatasetArgs | types.inputs.datafactory.v20180601.SparkObjectDatasetArgs | types.inputs.datafactory.v20180601.SqlServerTableDatasetArgs | types.inputs.datafactory.v20180601.SquareObjectDatasetArgs | types.inputs.datafactory.v20180601.SybaseTableDatasetArgs | types.inputs.datafactory.v20180601.TeradataTableDatasetArgs | types.inputs.datafactory.v20180601.VerticaTableDatasetArgs | types.inputs.datafactory.v20180601.WebTableDatasetArgs | types.inputs.datafactory.v20180601.XeroObjectDatasetArgs | types.inputs.datafactory.v20180601.XmlDatasetArgs | types.inputs.datafactory.v20180601.ZohoObjectDatasetArgs>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}
