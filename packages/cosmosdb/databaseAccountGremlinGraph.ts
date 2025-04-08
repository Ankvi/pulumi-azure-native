import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An Azure Cosmos DB Gremlin graph.
 *
 * Uses Azure REST API version 2016-03-31.
 *
 * Other available API versions: 2015-04-01, 2015-04-08, 2015-11-06, 2016-03-19. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cosmosdb [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class DatabaseAccountGremlinGraph extends pulumi.CustomResource {
    /**
     * Get an existing DatabaseAccountGremlinGraph resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DatabaseAccountGremlinGraph {
        return new DatabaseAccountGremlinGraph(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:cosmosdb:DatabaseAccountGremlinGraph';

    /**
     * Returns true if the given object is an instance of DatabaseAccountGremlinGraph.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatabaseAccountGremlinGraph {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatabaseAccountGremlinGraph.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The conflict resolution policy for the graph.
     */
    public /*out*/ readonly conflictResolutionPolicy!: pulumi.Output<types.outputs.ConflictResolutionPolicyResponse | undefined>;
    /**
     * Default time to live
     */
    public /*out*/ readonly defaultTtl!: pulumi.Output<number | undefined>;
    /**
     * A system generated property representing the resource etag required for optimistic concurrency control.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The configuration of the indexing policy. By default, the indexing is automatic for all document paths within the graph
     */
    public /*out*/ readonly indexingPolicy!: pulumi.Output<types.outputs.IndexingPolicyResponse | undefined>;
    /**
     * The location of the resource group to which the resource belongs.
     */
    public /*out*/ readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the database account.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The configuration of the partition key to be used for partitioning data into multiple partitions
     */
    public /*out*/ readonly partitionKey!: pulumi.Output<types.outputs.ContainerPartitionKeyResponse | undefined>;
    /**
     * A system generated property. A unique identifier.
     */
    public /*out*/ readonly rid!: pulumi.Output<string | undefined>;
    /**
     * Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
     */
    public /*out*/ readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * A system generated property that denotes the last updated timestamp of the resource.
     */
    public /*out*/ readonly ts!: pulumi.Output<any | undefined>;
    /**
     * The type of Azure resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The unique key policy configuration for specifying uniqueness constraints on documents in the collection in the Azure Cosmos DB service.
     */
    public /*out*/ readonly uniqueKeyPolicy!: pulumi.Output<types.outputs.UniqueKeyPolicyResponse | undefined>;

    /**
     * Create a DatabaseAccountGremlinGraph resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabaseAccountGremlinGraphArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.databaseName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'databaseName'");
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
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["graphName"] = args ? args.graphName : undefined;
            resourceInputs["options"] = args ? args.options : undefined;
            resourceInputs["resource"] = args ? (args.resource ? pulumi.output(args.resource).apply(types.inputs.gremlinGraphResourceArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["conflictResolutionPolicy"] = undefined /*out*/;
            resourceInputs["defaultTtl"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["indexingPolicy"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["partitionKey"] = undefined /*out*/;
            resourceInputs["rid"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["ts"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uniqueKeyPolicy"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["conflictResolutionPolicy"] = undefined /*out*/;
            resourceInputs["defaultTtl"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["indexingPolicy"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["partitionKey"] = undefined /*out*/;
            resourceInputs["rid"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["ts"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uniqueKeyPolicy"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cosmosdb/v20150401:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20150408:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20151106:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20160319:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20160331:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20190801:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20191212:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20200301:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20200401:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20200601preview:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20200901:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20210115:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20210301preview:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20210315:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20210401preview:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20210415:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20210515:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20210615:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20210701preview:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20211015:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20211015preview:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20211115preview:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20220215preview:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20220515:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20220515preview:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20220815:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20220815preview:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20221115:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20221115preview:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20230301preview:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20230315:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20230315preview:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20230415:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20230915:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20230915preview:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20231115:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20231115preview:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20240215preview:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20240515:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20240515preview:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20240815:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20240901preview:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20241115:DatabaseAccountGremlinGraph" }, { type: "azure-native:cosmosdb/v20241201preview:DatabaseAccountGremlinGraph" }, { type: "azure-native:documentdb/v20230315preview:GremlinResourceGremlinGraph" }, { type: "azure-native:documentdb/v20230415:GremlinResourceGremlinGraph" }, { type: "azure-native:documentdb/v20230915:GremlinResourceGremlinGraph" }, { type: "azure-native:documentdb/v20230915preview:GremlinResourceGremlinGraph" }, { type: "azure-native:documentdb/v20231115:GremlinResourceGremlinGraph" }, { type: "azure-native:documentdb/v20231115preview:GremlinResourceGremlinGraph" }, { type: "azure-native:documentdb/v20240215preview:GremlinResourceGremlinGraph" }, { type: "azure-native:documentdb/v20240515:GremlinResourceGremlinGraph" }, { type: "azure-native:documentdb/v20240515preview:GremlinResourceGremlinGraph" }, { type: "azure-native:documentdb/v20240815:GremlinResourceGremlinGraph" }, { type: "azure-native:documentdb/v20240901preview:GremlinResourceGremlinGraph" }, { type: "azure-native:documentdb/v20241115:GremlinResourceGremlinGraph" }, { type: "azure-native:documentdb/v20241201preview:GremlinResourceGremlinGraph" }, { type: "azure-native:documentdb:GremlinResourceGremlinGraph" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DatabaseAccountGremlinGraph.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DatabaseAccountGremlinGraph resource.
 */
export interface DatabaseAccountGremlinGraphArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * Cosmos DB database name.
     */
    databaseName: pulumi.Input<string>;
    /**
     * Cosmos DB graph name.
     */
    graphName?: pulumi.Input<string>;
    /**
     * A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
     */
    options: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The standard JSON format of a Gremlin graph
     */
    resource: pulumi.Input<types.inputs.GremlinGraphResourceArgs>;
    /**
     * Name of an Azure resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}