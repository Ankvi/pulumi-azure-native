import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A SQL DW table data set.
 * Azure REST API version: 2021-08-01. Prior API version in Azure Native 1.x: 2020-09-01
 */
export class SqlDWTableDataSet extends pulumi.CustomResource {
    /**
     * Get an existing SqlDWTableDataSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SqlDWTableDataSet {
        return new SqlDWTableDataSet(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:datashare:SqlDWTableDataSet';

    /**
     * Returns true if the given object is an instance of SqlDWTableDataSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SqlDWTableDataSet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SqlDWTableDataSet.__pulumiType;
    }

    /**
     * Unique id for identifying a data set resource
     */
    public /*out*/ readonly dataSetId!: pulumi.Output<string>;
    /**
     * DataWarehouse name of the source data set
     */
    public readonly dataWarehouseName!: pulumi.Output<string>;
    /**
     * Kind of data set.
     * Expected value is 'SqlDWTable'.
     */
    public readonly kind!: pulumi.Output<"SqlDWTable">;
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
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.datashare.SystemDataResponse>;
    /**
     * SQL DW table name.
     */
    public readonly tableName!: pulumi.Output<string>;
    /**
     * Type of the azure resource
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SqlDWTableDataSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SqlDWTableDataSetArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.dataWarehouseName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataWarehouseName'");
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
            resourceInputs["dataWarehouseName"] = args ? args.dataWarehouseName : undefined;
            resourceInputs["kind"] = "SqlDWTable";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["schemaName"] = args ? args.schemaName : undefined;
            resourceInputs["shareName"] = args ? args.shareName : undefined;
            resourceInputs["sqlServerResourceId"] = args ? args.sqlServerResourceId : undefined;
            resourceInputs["tableName"] = args ? args.tableName : undefined;
            resourceInputs["dataSetId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["dataSetId"] = undefined /*out*/;
            resourceInputs["dataWarehouseName"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["schemaName"] = undefined /*out*/;
            resourceInputs["sqlServerResourceId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tableName"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:datashare/v20181101preview:SqlDWTableDataSet" }, { type: "azure-native:datashare/v20191101:SqlDWTableDataSet" }, { type: "azure-native:datashare/v20200901:SqlDWTableDataSet" }, { type: "azure-native:datashare/v20201001preview:SqlDWTableDataSet" }, { type: "azure-native:datashare/v20210801:SqlDWTableDataSet" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SqlDWTableDataSet.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SqlDWTableDataSet resource.
 */
export interface SqlDWTableDataSetArgs {
    /**
     * The name of the share account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the dataSet.
     */
    dataSetName?: pulumi.Input<string>;
    /**
     * DataWarehouse name of the source data set
     */
    dataWarehouseName: pulumi.Input<string>;
    /**
     * Kind of data set.
     * Expected value is 'SqlDWTable'.
     */
    kind: pulumi.Input<"SqlDWTable">;
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
     * SQL DW table name.
     */
    tableName: pulumi.Input<string>;
}
