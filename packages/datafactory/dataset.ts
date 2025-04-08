import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Dataset resource type.
 *
 * Uses Azure REST API version 2018-06-01. In version 2.x of the Azure Native provider, it used API version 2018-06-01.
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
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
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
    public readonly properties!: pulumi.Output<types.outputs.AmazonMWSObjectDatasetResponse | types.outputs.AmazonRdsForOracleTableDatasetResponse | types.outputs.AmazonRdsForSqlServerTableDatasetResponse | types.outputs.AmazonRedshiftTableDatasetResponse | types.outputs.AmazonS3DatasetResponse | types.outputs.AvroDatasetResponse | types.outputs.AzureBlobDatasetResponse | types.outputs.AzureBlobFSDatasetResponse | types.outputs.AzureDataExplorerTableDatasetResponse | types.outputs.AzureDataLakeStoreDatasetResponse | types.outputs.AzureDatabricksDeltaLakeDatasetResponse | types.outputs.AzureMariaDBTableDatasetResponse | types.outputs.AzureMySqlTableDatasetResponse | types.outputs.AzurePostgreSqlTableDatasetResponse | types.outputs.AzureSearchIndexDatasetResponse | types.outputs.AzureSqlDWTableDatasetResponse | types.outputs.AzureSqlMITableDatasetResponse | types.outputs.AzureSqlTableDatasetResponse | types.outputs.AzureTableDatasetResponse | types.outputs.BinaryDatasetResponse | types.outputs.CassandraTableDatasetResponse | types.outputs.CommonDataServiceForAppsEntityDatasetResponse | types.outputs.ConcurObjectDatasetResponse | types.outputs.CosmosDbMongoDbApiCollectionDatasetResponse | types.outputs.CosmosDbSqlApiCollectionDatasetResponse | types.outputs.CouchbaseTableDatasetResponse | types.outputs.CustomDatasetResponse | types.outputs.Db2TableDatasetResponse | types.outputs.DelimitedTextDatasetResponse | types.outputs.DocumentDbCollectionDatasetResponse | types.outputs.DrillTableDatasetResponse | types.outputs.DynamicsAXResourceDatasetResponse | types.outputs.DynamicsCrmEntityDatasetResponse | types.outputs.DynamicsEntityDatasetResponse | types.outputs.EloquaObjectDatasetResponse | types.outputs.ExcelDatasetResponse | types.outputs.FileShareDatasetResponse | types.outputs.GoogleAdWordsObjectDatasetResponse | types.outputs.GoogleBigQueryObjectDatasetResponse | types.outputs.GoogleBigQueryV2ObjectDatasetResponse | types.outputs.GreenplumTableDatasetResponse | types.outputs.HBaseObjectDatasetResponse | types.outputs.HiveObjectDatasetResponse | types.outputs.HttpDatasetResponse | types.outputs.HubspotObjectDatasetResponse | types.outputs.IcebergDatasetResponse | types.outputs.ImpalaObjectDatasetResponse | types.outputs.InformixTableDatasetResponse | types.outputs.JiraObjectDatasetResponse | types.outputs.JsonDatasetResponse | types.outputs.LakeHouseTableDatasetResponse | types.outputs.MagentoObjectDatasetResponse | types.outputs.MariaDBTableDatasetResponse | types.outputs.MarketoObjectDatasetResponse | types.outputs.MicrosoftAccessTableDatasetResponse | types.outputs.MongoDbAtlasCollectionDatasetResponse | types.outputs.MongoDbCollectionDatasetResponse | types.outputs.MongoDbV2CollectionDatasetResponse | types.outputs.MySqlTableDatasetResponse | types.outputs.NetezzaTableDatasetResponse | types.outputs.ODataResourceDatasetResponse | types.outputs.OdbcTableDatasetResponse | types.outputs.Office365DatasetResponse | types.outputs.OracleServiceCloudObjectDatasetResponse | types.outputs.OracleTableDatasetResponse | types.outputs.OrcDatasetResponse | types.outputs.ParquetDatasetResponse | types.outputs.PaypalObjectDatasetResponse | types.outputs.PhoenixObjectDatasetResponse | types.outputs.PostgreSqlTableDatasetResponse | types.outputs.PostgreSqlV2TableDatasetResponse | types.outputs.PrestoObjectDatasetResponse | types.outputs.QuickBooksObjectDatasetResponse | types.outputs.RelationalTableDatasetResponse | types.outputs.ResponsysObjectDatasetResponse | types.outputs.RestResourceDatasetResponse | types.outputs.SalesforceMarketingCloudObjectDatasetResponse | types.outputs.SalesforceObjectDatasetResponse | types.outputs.SalesforceServiceCloudObjectDatasetResponse | types.outputs.SalesforceServiceCloudV2ObjectDatasetResponse | types.outputs.SalesforceV2ObjectDatasetResponse | types.outputs.SapBwCubeDatasetResponse | types.outputs.SapCloudForCustomerResourceDatasetResponse | types.outputs.SapEccResourceDatasetResponse | types.outputs.SapHanaTableDatasetResponse | types.outputs.SapOdpResourceDatasetResponse | types.outputs.SapOpenHubTableDatasetResponse | types.outputs.SapTableResourceDatasetResponse | types.outputs.ServiceNowObjectDatasetResponse | types.outputs.ServiceNowV2ObjectDatasetResponse | types.outputs.SharePointOnlineListResourceDatasetResponse | types.outputs.ShopifyObjectDatasetResponse | types.outputs.SnowflakeDatasetResponse | types.outputs.SnowflakeV2DatasetResponse | types.outputs.SparkObjectDatasetResponse | types.outputs.SqlServerTableDatasetResponse | types.outputs.SquareObjectDatasetResponse | types.outputs.SybaseTableDatasetResponse | types.outputs.TeradataTableDatasetResponse | types.outputs.VerticaTableDatasetResponse | types.outputs.WarehouseTableDatasetResponse | types.outputs.WebTableDatasetResponse | types.outputs.XeroObjectDatasetResponse | types.outputs.XmlDatasetResponse | types.outputs.ZohoObjectDatasetResponse>;
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
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
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
    properties: pulumi.Input<types.inputs.AmazonMWSObjectDatasetArgs | types.inputs.AmazonRdsForOracleTableDatasetArgs | types.inputs.AmazonRdsForSqlServerTableDatasetArgs | types.inputs.AmazonRedshiftTableDatasetArgs | types.inputs.AmazonS3DatasetArgs | types.inputs.AvroDatasetArgs | types.inputs.AzureBlobDatasetArgs | types.inputs.AzureBlobFSDatasetArgs | types.inputs.AzureDataExplorerTableDatasetArgs | types.inputs.AzureDataLakeStoreDatasetArgs | types.inputs.AzureDatabricksDeltaLakeDatasetArgs | types.inputs.AzureMariaDBTableDatasetArgs | types.inputs.AzureMySqlTableDatasetArgs | types.inputs.AzurePostgreSqlTableDatasetArgs | types.inputs.AzureSearchIndexDatasetArgs | types.inputs.AzureSqlDWTableDatasetArgs | types.inputs.AzureSqlMITableDatasetArgs | types.inputs.AzureSqlTableDatasetArgs | types.inputs.AzureTableDatasetArgs | types.inputs.BinaryDatasetArgs | types.inputs.CassandraTableDatasetArgs | types.inputs.CommonDataServiceForAppsEntityDatasetArgs | types.inputs.ConcurObjectDatasetArgs | types.inputs.CosmosDbMongoDbApiCollectionDatasetArgs | types.inputs.CosmosDbSqlApiCollectionDatasetArgs | types.inputs.CouchbaseTableDatasetArgs | types.inputs.CustomDatasetArgs | types.inputs.Db2TableDatasetArgs | types.inputs.DelimitedTextDatasetArgs | types.inputs.DocumentDbCollectionDatasetArgs | types.inputs.DrillTableDatasetArgs | types.inputs.DynamicsAXResourceDatasetArgs | types.inputs.DynamicsCrmEntityDatasetArgs | types.inputs.DynamicsEntityDatasetArgs | types.inputs.EloquaObjectDatasetArgs | types.inputs.ExcelDatasetArgs | types.inputs.FileShareDatasetArgs | types.inputs.GoogleAdWordsObjectDatasetArgs | types.inputs.GoogleBigQueryObjectDatasetArgs | types.inputs.GoogleBigQueryV2ObjectDatasetArgs | types.inputs.GreenplumTableDatasetArgs | types.inputs.HBaseObjectDatasetArgs | types.inputs.HiveObjectDatasetArgs | types.inputs.HttpDatasetArgs | types.inputs.HubspotObjectDatasetArgs | types.inputs.IcebergDatasetArgs | types.inputs.ImpalaObjectDatasetArgs | types.inputs.InformixTableDatasetArgs | types.inputs.JiraObjectDatasetArgs | types.inputs.JsonDatasetArgs | types.inputs.LakeHouseTableDatasetArgs | types.inputs.MagentoObjectDatasetArgs | types.inputs.MariaDBTableDatasetArgs | types.inputs.MarketoObjectDatasetArgs | types.inputs.MicrosoftAccessTableDatasetArgs | types.inputs.MongoDbAtlasCollectionDatasetArgs | types.inputs.MongoDbCollectionDatasetArgs | types.inputs.MongoDbV2CollectionDatasetArgs | types.inputs.MySqlTableDatasetArgs | types.inputs.NetezzaTableDatasetArgs | types.inputs.ODataResourceDatasetArgs | types.inputs.OdbcTableDatasetArgs | types.inputs.Office365DatasetArgs | types.inputs.OracleServiceCloudObjectDatasetArgs | types.inputs.OracleTableDatasetArgs | types.inputs.OrcDatasetArgs | types.inputs.ParquetDatasetArgs | types.inputs.PaypalObjectDatasetArgs | types.inputs.PhoenixObjectDatasetArgs | types.inputs.PostgreSqlTableDatasetArgs | types.inputs.PostgreSqlV2TableDatasetArgs | types.inputs.PrestoObjectDatasetArgs | types.inputs.QuickBooksObjectDatasetArgs | types.inputs.RelationalTableDatasetArgs | types.inputs.ResponsysObjectDatasetArgs | types.inputs.RestResourceDatasetArgs | types.inputs.SalesforceMarketingCloudObjectDatasetArgs | types.inputs.SalesforceObjectDatasetArgs | types.inputs.SalesforceServiceCloudObjectDatasetArgs | types.inputs.SalesforceServiceCloudV2ObjectDatasetArgs | types.inputs.SalesforceV2ObjectDatasetArgs | types.inputs.SapBwCubeDatasetArgs | types.inputs.SapCloudForCustomerResourceDatasetArgs | types.inputs.SapEccResourceDatasetArgs | types.inputs.SapHanaTableDatasetArgs | types.inputs.SapOdpResourceDatasetArgs | types.inputs.SapOpenHubTableDatasetArgs | types.inputs.SapTableResourceDatasetArgs | types.inputs.ServiceNowObjectDatasetArgs | types.inputs.ServiceNowV2ObjectDatasetArgs | types.inputs.SharePointOnlineListResourceDatasetArgs | types.inputs.ShopifyObjectDatasetArgs | types.inputs.SnowflakeDatasetArgs | types.inputs.SnowflakeV2DatasetArgs | types.inputs.SparkObjectDatasetArgs | types.inputs.SqlServerTableDatasetArgs | types.inputs.SquareObjectDatasetArgs | types.inputs.SybaseTableDatasetArgs | types.inputs.TeradataTableDatasetArgs | types.inputs.VerticaTableDatasetArgs | types.inputs.WarehouseTableDatasetArgs | types.inputs.WebTableDatasetArgs | types.inputs.XeroObjectDatasetArgs | types.inputs.XmlDatasetArgs | types.inputs.ZohoObjectDatasetArgs>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}