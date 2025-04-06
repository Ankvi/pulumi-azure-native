import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An Azure Cosmos DB MongoDB collection.
 *
 * Uses Azure REST API version 2016-03-31.
 *
 * Other available API versions: 2015-04-01, 2015-04-08, 2015-11-06, 2016-03-19. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cosmosdb [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class DatabaseAccountMongoDBCollection extends pulumi.CustomResource {
    /**
     * Get an existing DatabaseAccountMongoDBCollection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DatabaseAccountMongoDBCollection {
        return new DatabaseAccountMongoDBCollection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:cosmosdb:DatabaseAccountMongoDBCollection';

    /**
     * Returns true if the given object is an instance of DatabaseAccountMongoDBCollection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatabaseAccountMongoDBCollection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatabaseAccountMongoDBCollection.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * List of index keys
     */
    public /*out*/ readonly indexes!: pulumi.Output<types.outputs.MongoIndexResponse[] | undefined>;
    /**
     * The location of the resource group to which the resource belongs.
     */
    public /*out*/ readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the database account.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * A key-value pair of shard keys to be applied for the request.
     */
    public /*out*/ readonly shardKey!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
     */
    public /*out*/ readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of Azure resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DatabaseAccountMongoDBCollection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabaseAccountMongoDBCollectionArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["collectionName"] = args ? args.collectionName : undefined;
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["options"] = args ? args.options : undefined;
            resourceInputs["resource"] = args ? args.resource : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["indexes"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["shardKey"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["indexes"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["shardKey"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cosmosdb/v20150401:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20150408:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20151106:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20160319:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20160331:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20190801:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20191212:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20200301:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20200401:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20200601preview:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20200901:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20210115:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20210301preview:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20210315:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20210401preview:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20210415:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20210515:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20210615:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20210701preview:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20211015:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20211015preview:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20211115preview:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20220215preview:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20220515:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20220515preview:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20220815:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20220815preview:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20221115:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20221115preview:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20230301preview:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20230315:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20230315preview:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20230415:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20230915:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20230915preview:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20231115:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20231115preview:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20240215preview:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20240515:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20240515preview:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20240815:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20240901preview:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20241115:DatabaseAccountMongoDBCollection" }, { type: "azure-native:cosmosdb/v20241201preview:DatabaseAccountMongoDBCollection" }, { type: "azure-native:documentdb/v20230315preview:MongoDBResourceMongoDBCollection" }, { type: "azure-native:documentdb/v20230415:MongoDBResourceMongoDBCollection" }, { type: "azure-native:documentdb/v20230915:MongoDBResourceMongoDBCollection" }, { type: "azure-native:documentdb/v20230915preview:MongoDBResourceMongoDBCollection" }, { type: "azure-native:documentdb/v20231115:MongoDBResourceMongoDBCollection" }, { type: "azure-native:documentdb/v20231115preview:MongoDBResourceMongoDBCollection" }, { type: "azure-native:documentdb/v20240215preview:MongoDBResourceMongoDBCollection" }, { type: "azure-native:documentdb/v20240515:MongoDBResourceMongoDBCollection" }, { type: "azure-native:documentdb/v20240515preview:MongoDBResourceMongoDBCollection" }, { type: "azure-native:documentdb/v20240815:MongoDBResourceMongoDBCollection" }, { type: "azure-native:documentdb/v20240901preview:MongoDBResourceMongoDBCollection" }, { type: "azure-native:documentdb/v20241115:MongoDBResourceMongoDBCollection" }, { type: "azure-native:documentdb/v20241201preview:MongoDBResourceMongoDBCollection" }, { type: "azure-native:documentdb:MongoDBResourceMongoDBCollection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DatabaseAccountMongoDBCollection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DatabaseAccountMongoDBCollection resource.
 */
export interface DatabaseAccountMongoDBCollectionArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * Cosmos DB collection name.
     */
    collectionName?: pulumi.Input<string>;
    /**
     * Cosmos DB database name.
     */
    databaseName: pulumi.Input<string>;
    /**
     * A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
     */
    options: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The standard JSON format of a MongoDB collection
     */
    resource: pulumi.Input<types.inputs.MongoDBCollectionResourceArgs>;
    /**
     * Name of an Azure resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}