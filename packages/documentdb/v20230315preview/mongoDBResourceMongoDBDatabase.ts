import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An Azure Cosmos DB MongoDB database.
 */
export class MongoDBResourceMongoDBDatabase extends pulumi.CustomResource {
    /**
     * Get an existing MongoDBResourceMongoDBDatabase resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MongoDBResourceMongoDBDatabase {
        return new MongoDBResourceMongoDBDatabase(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:documentdb/v20230315preview:MongoDBResourceMongoDBDatabase';

    /**
     * Returns true if the given object is an instance of MongoDBResourceMongoDBDatabase.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MongoDBResourceMongoDBDatabase {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MongoDBResourceMongoDBDatabase.__pulumiType;
    }

    /**
     * Identity for the resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedServiceIdentityResponse | undefined>;
    /**
     * The location of the resource group to which the resource belongs.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the ARM resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly options!: pulumi.Output<types.outputs.MongoDBDatabaseGetPropertiesResponseOptions | undefined>;
    public readonly resource!: pulumi.Output<types.outputs.MongoDBDatabaseGetPropertiesResponseResource | undefined>;
    /**
     * Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of Azure resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a MongoDBResourceMongoDBDatabase resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MongoDBResourceMongoDBDatabaseArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.resource === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resource'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["options"] = args ? args.options : undefined;
            resourceInputs["resource"] = args ? args.resource : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["options"] = undefined /*out*/;
            resourceInputs["resource"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:documentdb:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20150401:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20150408:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20151106:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20160319:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20160331:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20190801:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20191212:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20200301:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20200401:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20200601preview:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20200901:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20210115:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20210301preview:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20210315:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20210401preview:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20210415:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20210515:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20210615:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20210701preview:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20211015:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20211015preview:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20211115preview:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20220215preview:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20220515:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20220515preview:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20220815:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20220815preview:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20221115:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20221115preview:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20230301preview:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20230315:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20230415:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20230915:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20230915preview:MongoDBResourceMongoDBDatabase" }, { type: "azure-native:documentdb/v20231115:MongoDBResourceMongoDBDatabase" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(MongoDBResourceMongoDBDatabase.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a MongoDBResourceMongoDBDatabase resource.
 */
export interface MongoDBResourceMongoDBDatabaseArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * Cosmos DB database name.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * Identity for the resource.
     */
    identity?: pulumi.Input<types.inputs.ManagedServiceIdentityArgs>;
    /**
     * The location of the resource group to which the resource belongs.
     */
    location?: pulumi.Input<string>;
    /**
     * A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
     */
    options?: pulumi.Input<types.inputs.CreateUpdateOptionsArgs>;
    /**
     * The standard JSON format of a MongoDB database
     */
    resource: pulumi.Input<types.inputs.MongoDBDatabaseResourceArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
