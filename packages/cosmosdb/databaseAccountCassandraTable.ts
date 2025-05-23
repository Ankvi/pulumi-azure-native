import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An Azure Cosmos DB Cassandra table.
 *
 * Uses Azure REST API version 2016-03-31.
 *
 * Other available API versions: 2015-04-01, 2015-04-08, 2015-11-06, 2016-03-19. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cosmosdb [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class DatabaseAccountCassandraTable extends pulumi.CustomResource {
    /**
     * Get an existing DatabaseAccountCassandraTable resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DatabaseAccountCassandraTable {
        return new DatabaseAccountCassandraTable(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:cosmosdb:DatabaseAccountCassandraTable';

    /**
     * Returns true if the given object is an instance of DatabaseAccountCassandraTable.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatabaseAccountCassandraTable {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatabaseAccountCassandraTable.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Time to live of the Cosmos DB Cassandra table
     */
    public /*out*/ readonly defaultTtl!: pulumi.Output<number | undefined>;
    /**
     * The location of the resource group to which the resource belongs.
     */
    public /*out*/ readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the database account.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Schema of the Cosmos DB Cassandra table
     */
    public /*out*/ readonly schema!: pulumi.Output<types.outputs.CassandraSchemaResponse | undefined>;
    /**
     * Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
     */
    public /*out*/ readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of Azure resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DatabaseAccountCassandraTable resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabaseAccountCassandraTableArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.keyspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'keyspaceName'");
            }
            if ((!args || args.options === undefined) && !opts.urn) {
                throw new Error("Missing required property 'options'");
            }
            if ((!args || args.resource === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resource'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["keyspaceName"] = args ? args.keyspaceName : undefined;
            resourceInputs["options"] = args ? args.options : undefined;
            resourceInputs["resource"] = args ? args.resource : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tableName"] = args ? args.tableName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["defaultTtl"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["schema"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["defaultTtl"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["schema"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cosmosdb/v20150401:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20150408:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20151106:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20160319:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20160331:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20190801:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20191212:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20200301:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20200401:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20200601preview:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20200901:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20210115:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20210301preview:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20210315:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20210401preview:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20210415:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20210515:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20210615:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20210701preview:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20211015:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20211015preview:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20211115preview:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20220215preview:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20220515:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20220515preview:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20220815:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20220815preview:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20221115:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20221115preview:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20230301preview:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20230315:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20230315preview:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20230415:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20230915:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20230915preview:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20231115:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20231115preview:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20240215preview:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20240515:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20240515preview:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20240815:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20240901preview:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20241115:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20241201preview:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20250415:DatabaseAccountCassandraTable" }, { type: "azure-native:cosmosdb/v20250501preview:DatabaseAccountCassandraTable" }, { type: "azure-native:documentdb/v20230315preview:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20230415:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20230915:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20230915preview:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20231115:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20231115preview:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20240215preview:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20240515:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20240515preview:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20240815:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20240901preview:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20241115:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb/v20241201preview:CassandraResourceCassandraTable" }, { type: "azure-native:documentdb:CassandraResourceCassandraTable" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DatabaseAccountCassandraTable.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DatabaseAccountCassandraTable resource.
 */
export interface DatabaseAccountCassandraTableArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * Cosmos DB keyspace name.
     */
    keyspaceName: pulumi.Input<string>;
    /**
     * A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
     */
    options: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The standard JSON format of a Cassandra table
     */
    resource: pulumi.Input<types.inputs.CassandraTableResourceArgs>;
    /**
     * Name of an Azure resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Cosmos DB table name.
     */
    tableName?: pulumi.Input<string>;
}