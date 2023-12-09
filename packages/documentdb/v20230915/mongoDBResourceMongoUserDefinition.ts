import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An Azure Cosmos DB User Definition
 */
export class MongoDBResourceMongoUserDefinition extends pulumi.CustomResource {
    /**
     * Get an existing MongoDBResourceMongoUserDefinition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MongoDBResourceMongoUserDefinition {
        return new MongoDBResourceMongoUserDefinition(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:documentdb/v20230915:MongoDBResourceMongoUserDefinition';

    /**
     * Returns true if the given object is an instance of MongoDBResourceMongoUserDefinition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MongoDBResourceMongoUserDefinition {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MongoDBResourceMongoUserDefinition.__pulumiType;
    }

    /**
     * A custom definition for the USer Definition.
     */
    public readonly customData!: pulumi.Output<string | undefined>;
    /**
     * The database name for which access is being granted for this User Definition.
     */
    public readonly databaseName!: pulumi.Output<string | undefined>;
    /**
     * The Mongo Auth mechanism. For now, we only support auth mechanism SCRAM-SHA-256.
     */
    public readonly mechanisms!: pulumi.Output<string | undefined>;
    /**
     * The name of the database account.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The password for User Definition. Response does not contain user password.
     */
    public readonly password!: pulumi.Output<string | undefined>;
    /**
     * The set of roles inherited by the User Definition.
     */
    public readonly roles!: pulumi.Output<types.outputs.RoleResponse[] | undefined>;
    /**
     * The type of Azure resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The user name for User Definition.
     */
    public readonly userName!: pulumi.Output<string | undefined>;

    /**
     * Create a MongoDBResourceMongoUserDefinition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MongoDBResourceMongoUserDefinitionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["customData"] = args ? args.customData : undefined;
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["mechanisms"] = args ? args.mechanisms : undefined;
            resourceInputs["mongoUserDefinitionId"] = args ? args.mongoUserDefinitionId : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["roles"] = args ? args.roles : undefined;
            resourceInputs["userName"] = args ? args.userName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["customData"] = undefined /*out*/;
            resourceInputs["databaseName"] = undefined /*out*/;
            resourceInputs["mechanisms"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["password"] = undefined /*out*/;
            resourceInputs["roles"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:documentdb:MongoDBResourceMongoUserDefinition" }, { type: "azure-native:documentdb/v20211015preview:MongoDBResourceMongoUserDefinition" }, { type: "azure-native:documentdb/v20211115preview:MongoDBResourceMongoUserDefinition" }, { type: "azure-native:documentdb/v20220215preview:MongoDBResourceMongoUserDefinition" }, { type: "azure-native:documentdb/v20220515preview:MongoDBResourceMongoUserDefinition" }, { type: "azure-native:documentdb/v20220815:MongoDBResourceMongoUserDefinition" }, { type: "azure-native:documentdb/v20220815preview:MongoDBResourceMongoUserDefinition" }, { type: "azure-native:documentdb/v20221115:MongoDBResourceMongoUserDefinition" }, { type: "azure-native:documentdb/v20221115preview:MongoDBResourceMongoUserDefinition" }, { type: "azure-native:documentdb/v20230301preview:MongoDBResourceMongoUserDefinition" }, { type: "azure-native:documentdb/v20230315:MongoDBResourceMongoUserDefinition" }, { type: "azure-native:documentdb/v20230315preview:MongoDBResourceMongoUserDefinition" }, { type: "azure-native:documentdb/v20230415:MongoDBResourceMongoUserDefinition" }, { type: "azure-native:documentdb/v20230915preview:MongoDBResourceMongoUserDefinition" }, { type: "azure-native:documentdb/v20231115:MongoDBResourceMongoUserDefinition" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(MongoDBResourceMongoUserDefinition.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a MongoDBResourceMongoUserDefinition resource.
 */
export interface MongoDBResourceMongoUserDefinitionArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * A custom definition for the USer Definition.
     */
    customData?: pulumi.Input<string>;
    /**
     * The database name for which access is being granted for this User Definition.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * The Mongo Auth mechanism. For now, we only support auth mechanism SCRAM-SHA-256.
     */
    mechanisms?: pulumi.Input<string>;
    /**
     * The ID for the User Definition {dbName.userName}.
     */
    mongoUserDefinitionId?: pulumi.Input<string>;
    /**
     * The password for User Definition. Response does not contain user password.
     */
    password?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The set of roles inherited by the User Definition.
     */
    roles?: pulumi.Input<pulumi.Input<types.inputs.RoleArgs>[]>;
    /**
     * The user name for User Definition.
     */
    userName?: pulumi.Input<string>;
}
