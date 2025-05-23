import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A SQL DB Table data set mapping.
 *
 * Uses Azure REST API version 2021-08-01. In version 2.x of the Azure Native provider, it used API version 2021-08-01.
 */
export class SqlDBTableDataSetMapping extends pulumi.CustomResource {
    /**
     * Get an existing SqlDBTableDataSetMapping resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SqlDBTableDataSetMapping {
        return new SqlDBTableDataSetMapping(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:datashare:SqlDBTableDataSetMapping';

    /**
     * Returns true if the given object is an instance of SqlDBTableDataSetMapping.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SqlDBTableDataSetMapping {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SqlDBTableDataSetMapping.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The id of the source data set.
     */
    public readonly dataSetId!: pulumi.Output<string>;
    /**
     * Gets the status of the data set mapping.
     */
    public /*out*/ readonly dataSetMappingStatus!: pulumi.Output<string>;
    /**
     * DatabaseName name of the sink data set
     */
    public readonly databaseName!: pulumi.Output<string>;
    /**
     * Kind of data set mapping.
     * Expected value is 'SqlDBTable'.
     */
    public readonly kind!: pulumi.Output<"SqlDBTable">;
    /**
     * Name of the azure resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the data set mapping.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
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
     * Create a SqlDBTableDataSetMapping resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SqlDBTableDataSetMappingArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.dataSetId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataSetId'");
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
            if ((!args || args.shareSubscriptionName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'shareSubscriptionName'");
            }
            if ((!args || args.sqlServerResourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sqlServerResourceId'");
            }
            if ((!args || args.tableName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tableName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["dataSetId"] = args ? args.dataSetId : undefined;
            resourceInputs["dataSetMappingName"] = args ? args.dataSetMappingName : undefined;
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["kind"] = "SqlDBTable";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["schemaName"] = args ? args.schemaName : undefined;
            resourceInputs["shareSubscriptionName"] = args ? args.shareSubscriptionName : undefined;
            resourceInputs["sqlServerResourceId"] = args ? args.sqlServerResourceId : undefined;
            resourceInputs["tableName"] = args ? args.tableName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["dataSetMappingStatus"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["dataSetId"] = undefined /*out*/;
            resourceInputs["dataSetMappingStatus"] = undefined /*out*/;
            resourceInputs["databaseName"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["schemaName"] = undefined /*out*/;
            resourceInputs["sqlServerResourceId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tableName"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:datashare/v20181101preview:SqlDBTableDataSetMapping" }, { type: "azure-native:datashare/v20191101:SqlDBTableDataSetMapping" }, { type: "azure-native:datashare/v20200901:SqlDBTableDataSetMapping" }, { type: "azure-native:datashare/v20201001preview:ADLSGen2StorageAccountDataSetMapping" }, { type: "azure-native:datashare/v20201001preview:BlobStorageAccountDataSetMapping" }, { type: "azure-native:datashare/v20201001preview:SqlDBTableDataSetMapping" }, { type: "azure-native:datashare/v20210801:ADLSGen2FileDataSetMapping" }, { type: "azure-native:datashare/v20210801:ADLSGen2FileSystemDataSetMapping" }, { type: "azure-native:datashare/v20210801:ADLSGen2FolderDataSetMapping" }, { type: "azure-native:datashare/v20210801:BlobContainerDataSetMapping" }, { type: "azure-native:datashare/v20210801:BlobDataSetMapping" }, { type: "azure-native:datashare/v20210801:BlobFolderDataSetMapping" }, { type: "azure-native:datashare/v20210801:KustoClusterDataSetMapping" }, { type: "azure-native:datashare/v20210801:KustoDatabaseDataSetMapping" }, { type: "azure-native:datashare/v20210801:KustoTableDataSetMapping" }, { type: "azure-native:datashare/v20210801:SqlDBTableDataSetMapping" }, { type: "azure-native:datashare/v20210801:SqlDWTableDataSetMapping" }, { type: "azure-native:datashare/v20210801:SynapseWorkspaceSqlPoolTableDataSetMapping" }, { type: "azure-native:datashare:ADLSGen2FileDataSetMapping" }, { type: "azure-native:datashare:ADLSGen2FileSystemDataSetMapping" }, { type: "azure-native:datashare:ADLSGen2FolderDataSetMapping" }, { type: "azure-native:datashare:BlobContainerDataSetMapping" }, { type: "azure-native:datashare:BlobDataSetMapping" }, { type: "azure-native:datashare:BlobFolderDataSetMapping" }, { type: "azure-native:datashare:KustoClusterDataSetMapping" }, { type: "azure-native:datashare:KustoDatabaseDataSetMapping" }, { type: "azure-native:datashare:KustoTableDataSetMapping" }, { type: "azure-native:datashare:SqlDWTableDataSetMapping" }, { type: "azure-native:datashare:SynapseWorkspaceSqlPoolTableDataSetMapping" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SqlDBTableDataSetMapping.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SqlDBTableDataSetMapping resource.
 */
export interface SqlDBTableDataSetMappingArgs {
    /**
     * The name of the share account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The id of the source data set.
     */
    dataSetId: pulumi.Input<string>;
    /**
     * The name of the data set mapping to be created.
     */
    dataSetMappingName?: pulumi.Input<string>;
    /**
     * DatabaseName name of the sink data set
     */
    databaseName: pulumi.Input<string>;
    /**
     * Kind of data set mapping.
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
     * The name of the share subscription which will hold the data set sink.
     */
    shareSubscriptionName: pulumi.Input<string>;
    /**
     * Resource id of SQL server
     */
    sqlServerResourceId: pulumi.Input<string>;
    /**
     * SQL DB table name.
     */
    tableName: pulumi.Input<string>;
}