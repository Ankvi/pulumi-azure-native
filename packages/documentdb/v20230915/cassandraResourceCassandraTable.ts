import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An Azure Cosmos DB Cassandra table.
 */
export class CassandraResourceCassandraTable extends pulumi.CustomResource {
    /**
     * Get an existing CassandraResourceCassandraTable resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CassandraResourceCassandraTable {
        return new CassandraResourceCassandraTable(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:documentdb/v20230915:CassandraResourceCassandraTable';

    /**
     * Returns true if the given object is an instance of CassandraResourceCassandraTable.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CassandraResourceCassandraTable {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CassandraResourceCassandraTable.__pulumiType;
    }

    /**
     * The location of the resource group to which the resource belongs.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the ARM resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly options!: pulumi.Output<types.outputs.CassandraTableGetPropertiesResponseOptions | undefined>;
    public readonly resource!: pulumi.Output<types.outputs.CassandraTableGetPropertiesResponseResource | undefined>;
    /**
     * Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of Azure resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a CassandraResourceCassandraTable resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CassandraResourceCassandraTableArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.keyspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'keyspaceName'");
            }
            if ((!args || args.resource === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resource'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["keyspaceName"] = args ? args.keyspaceName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["options"] = args ? args.options : undefined;
            resourceInputs["resource"] = args ? args.resource : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tableName"] = args ? args.tableName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["options"] = undefined /*out*/;
            resourceInputs["resource"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:documentdb:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20150401:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20150408:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20151106:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20160319:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20160331:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20190801:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20191212:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20200301:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20200401:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20200601preview:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20200901:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20210115:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20210301preview:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20210315:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20210401preview:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20210415:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20210515:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20210615:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20210701preview:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20211015:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20211015preview:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20211115preview:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20220215preview:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20220515:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20220515preview:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20220815:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20220815preview:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20221115:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20221115preview:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20230301preview:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20230315:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20230315preview:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20230415:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20230915preview:CassandraResourceCassandraTable" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CassandraResourceCassandraTable.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CassandraResourceCassandraTable resource.
 */
export interface CassandraResourceCassandraTableArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * Cosmos DB keyspace name.
     */
    keyspaceName: pulumi.Input<string>;
    /**
     * The location of the resource group to which the resource belongs.
     */
    location?: pulumi.Input<string>;
    /**
     * A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
     */
    options?: pulumi.Input<types.inputs.CreateUpdateOptionsArgs>;
    /**
     * The standard JSON format of a Cassandra table
     */
    resource: pulumi.Input<types.inputs.CassandraTableResourceArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Cosmos DB table name.
     */
    tableName?: pulumi.Input<string>;
    /**
     * Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}