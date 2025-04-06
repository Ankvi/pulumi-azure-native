import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An Azure Cosmos DB MongoDB database.
 *
 * Uses Azure REST API version 2016-03-31.
 *
 * Other available API versions: 2015-04-01, 2015-04-08, 2015-11-06, 2016-03-19. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cosmosdb [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class DatabaseAccountMongoDBDatabase extends pulumi.CustomResource {
    /**
     * Get an existing DatabaseAccountMongoDBDatabase resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DatabaseAccountMongoDBDatabase {
        return new DatabaseAccountMongoDBDatabase(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:cosmosdb:DatabaseAccountMongoDBDatabase';

    /**
     * Returns true if the given object is an instance of DatabaseAccountMongoDBDatabase.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatabaseAccountMongoDBDatabase {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatabaseAccountMongoDBDatabase.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The location of the resource group to which the resource belongs.
     */
    public /*out*/ readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the database account.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
     */
    public /*out*/ readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of Azure resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DatabaseAccountMongoDBDatabase resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabaseAccountMongoDBDatabaseArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
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
            resourceInputs["options"] = args ? args.options : undefined;
            resourceInputs["resource"] = args ? args.resource : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cosmosdb/v20150401:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20150408:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20151106:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20160319:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20160331:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20190801:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20191212:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20200301:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20200401:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20200601preview:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20200901:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20210115:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20210301preview:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20210315:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20210401preview:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20210415:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20210515:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20210615:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20210701preview:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20211015:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20211015preview:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20211115preview:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20220215preview:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20220515:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20220515preview:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20220815:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20220815preview:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20221115:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20221115preview:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20230301preview:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20230315:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20230315preview:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20230415:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20230915:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20230915preview:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20231115:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20231115preview:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20240215preview:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20240515:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20240515preview:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20240815:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20240901preview:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20241115:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:cosmosdb/v20241201preview:DatabaseAccountMongoDBDatabase" }, { type: "azure-native:documentdb/v20230315preview:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20230415:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20230915:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20230915preview:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20231115:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20231115preview:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20240215preview:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20240515:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20240515preview:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20240815:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20240901preview:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20241115:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20241201preview:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb:MongoDBResourceMongoDBDatabase" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DatabaseAccountMongoDBDatabase.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DatabaseAccountMongoDBDatabase resource.
 */
export interface DatabaseAccountMongoDBDatabaseArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * Cosmos DB database name.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
     */
    options: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The standard JSON format of a MongoDB database
     */
    resource: pulumi.Input<types.inputs.MongoDBDatabaseResourceArgs>;
    /**
     * Name of an Azure resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}