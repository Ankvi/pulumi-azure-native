import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A SQL DB table data set.
 *
 * Uses Azure REST API version 2021-08-01. In version 2.x of the Azure Native provider, it used API version 2021-08-01.
 */
export class SqlDBTableDataSet extends pulumi.CustomResource {
    /**
     * Get an existing SqlDBTableDataSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SqlDBTableDataSet {
        return new SqlDBTableDataSet(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:datashare:SqlDBTableDataSet';

    /**
     * Returns true if the given object is an instance of SqlDBTableDataSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SqlDBTableDataSet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SqlDBTableDataSet.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Unique id for identifying a data set resource
     */
    public /*out*/ readonly dataSetId!: pulumi.Output<string>;
    /**
     * Database name of the source data set
     */
    public readonly databaseName!: pulumi.Output<string>;
    /**
     * Kind of data set.
     * Expected value is 'SqlDBTable'.
     */
    public readonly kind!: pulumi.Output<"SqlDBTable">;
    /**
     * Name of the azure resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Schema of the table. Default value is dbo.
     */
    public readonly schemaName!: pulumi.Output<string>;
    /**
     * Resource id of SQL server
     */
    public readonly sqlServerResourceId!: pulumi.Output<string>;
    /**
     * System Data of the Azure resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * SQL DB table name.
     */
    public readonly tableName!: pulumi.Output<string>;
    /**
     * Type of the azure resource
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SqlDBTableDataSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SqlDBTableDataSetArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.databaseName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'databaseName'");
            }
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.schemaName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'schemaName'");
            }
            if ((!args || args.shareName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'shareName'");
            }
            if ((!args || args.sqlServerResourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sqlServerResourceId'");
            }
            if ((!args || args.tableName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tableName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["dataSetName"] = args ? args.dataSetName : undefined;
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["kind"] = "SqlDBTable";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["schemaName"] = args ? args.schemaName : undefined;
            resourceInputs["shareName"] = args ? args.shareName : undefined;
            resourceInputs["sqlServerResourceId"] = args ? args.sqlServerResourceId : undefined;
            resourceInputs["tableName"] = args ? args.tableName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["dataSetId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["dataSetId"] = undefined /*out*/;
            resourceInputs["databaseName"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["schemaName"] = undefined /*out*/;
            resourceInputs["sqlServerResourceId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tableName"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:datashare/v20181101preview:SqlDBTableDataSet" }, { type: "azure-native:datashare/v20191101:SqlDBTableDataSet" }, { type: "azure-native:datashare/v20200901:SqlDBTableDataSet" }, { type: "azure-native:datashare/v20201001preview:ADLSGen2StorageAccountDataSet" }, { type: "azure-native:datashare/v20201001preview:BlobStorageAccountDataSet" }, { type: "azure-native:datashare/v20201001preview:SqlDBTableDataSet" }, { type: "azure-native:datashare/v20210801:ADLSGen1FileDataSet" }, { type: "azure-native:datashare/v20210801:ADLSGen1FolderDataSet" }, { type: "azure-native:datashare/v20210801:ADLSGen2FileDataSet" }, { type: "azure-native:datashare/v20210801:ADLSGen2FileSystemDataSet" }, { type: "azure-native:datashare/v20210801:ADLSGen2FolderDataSet" }, { type: "azure-native:datashare/v20210801:BlobContainerDataSet" }, { type: "azure-native:datashare/v20210801:BlobDataSet" }, { type: "azure-native:datashare/v20210801:BlobFolderDataSet" }, { type: "azure-native:datashare/v20210801:KustoClusterDataSet" }, { type: "azure-native:datashare/v20210801:KustoDatabaseDataSet" }, { type: "azure-native:datashare/v20210801:KustoTableDataSet" }, { type: "azure-native:datashare/v20210801:SqlDBTableDataSet" }, { type: "azure-native:datashare/v20210801:SqlDWTableDataSet" }, { type: "azure-native:datashare/v20210801:SynapseWorkspaceSqlPoolTableDataSet" }, { type: "azure-native:datashare:ADLSGen1FileDataSet" }, { type: "azure-native:datashare:ADLSGen1FolderDataSet" }, { type: "azure-native:datashare:ADLSGen2FileDataSet" }, { type: "azure-native:datashare:ADLSGen2FileSystemDataSet" }, { type: "azure-native:datashare:ADLSGen2FolderDataSet" }, { type: "azure-native:datashare:BlobContainerDataSet" }, { type: "azure-native:datashare:BlobDataSet" }, { type: "azure-native:datashare:BlobFolderDataSet" }, { type: "azure-native:datashare:KustoClusterDataSet" }, { type: "azure-native:datashare:KustoDatabaseDataSet" }, { type: "azure-native:datashare:KustoTableDataSet" }, { type: "azure-native:datashare:SqlDWTableDataSet" }, { type: "azure-native:datashare:SynapseWorkspaceSqlPoolTableDataSet" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SqlDBTableDataSet.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SqlDBTableDataSet resource.
 */
export interface SqlDBTableDataSetArgs {
    /**
     * The name of the share account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the dataSet.
     */
    dataSetName?: pulumi.Input<string>;
    /**
     * Database name of the source data set
     */
    databaseName: pulumi.Input<string>;
    /**
     * Kind of data set.
     * Expected value is 'SqlDBTable'.
     */
    kind: pulumi.Input<"SqlDBTable">;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Schema of the table. Default value is dbo.
     */
    schemaName: pulumi.Input<string>;
    /**
     * The name of the share to add the data set to.
     */
    shareName: pulumi.Input<string>;
    /**
     * Resource id of SQL server
     */
    sqlServerResourceId: pulumi.Input<string>;
    /**
     * SQL DB table name.
     */
    tableName: pulumi.Input<string>;
}