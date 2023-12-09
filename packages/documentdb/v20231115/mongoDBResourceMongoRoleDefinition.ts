import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An Azure Cosmos DB Mongo Role Definition.
 */
export class MongoDBResourceMongoRoleDefinition extends pulumi.CustomResource {
    /**
     * Get an existing MongoDBResourceMongoRoleDefinition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MongoDBResourceMongoRoleDefinition {
        return new MongoDBResourceMongoRoleDefinition(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:documentdb/v20231115:MongoDBResourceMongoRoleDefinition';

    /**
     * Returns true if the given object is an instance of MongoDBResourceMongoRoleDefinition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MongoDBResourceMongoRoleDefinition {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MongoDBResourceMongoRoleDefinition.__pulumiType;
    }

    /**
     * The database name for which access is being granted for this Role Definition.
     */
    public readonly databaseName!: pulumi.Output<string | undefined>;
    /**
     * The name of the database account.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * A set of privileges contained by the Role Definition. This will allow application of this Role Definition on the entire database account or any underlying Database / Collection. Scopes higher than Database are not enforceable as privilege.
     */
    public readonly privileges!: pulumi.Output<types.outputs.PrivilegeResponse[] | undefined>;
    /**
     * A user-friendly name for the Role Definition. Must be unique for the database account.
     */
    public readonly roleName!: pulumi.Output<string | undefined>;
    /**
     * The set of roles inherited by this Role Definition.
     */
    public readonly roles!: pulumi.Output<types.outputs.RoleResponse[] | undefined>;
    /**
     * The type of Azure resource.
     */
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a MongoDBResourceMongoRoleDefinition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MongoDBResourceMongoRoleDefinitionArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["mongoRoleDefinitionId"] = args ? args.mongoRoleDefinitionId : undefined;
            resourceInputs["privileges"] = args ? args.privileges : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["roleName"] = args ? args.roleName : undefined;
            resourceInputs["roles"] = args ? args.roles : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["name"] = undefined /*out*/;
        } else {
            resourceInputs["databaseName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privileges"] = undefined /*out*/;
            resourceInputs["roleName"] = undefined /*out*/;
            resourceInputs["roles"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:documentdb:MongoDBResourceMongoRoleDefinition" }, { type: "azure-native:documentdb/v20211015preview:MongoDBResourceMongoRoleDefinition" }, { type: "azure-native:documentdb/v20211115preview:MongoDBResourceMongoRoleDefinition" }, { type: "azure-native:documentdb/v20220215preview:MongoDBResourceMongoRoleDefinition" }, { type: "azure-native:documentdb/v20220515preview:MongoDBResourceMongoRoleDefinition" }, { type: "azure-native:documentdb/v20220815:MongoDBResourceMongoRoleDefinition" }, { type: "azure-native:documentdb/v20220815preview:MongoDBResourceMongoRoleDefinition" }, { type: "azure-native:documentdb/v20221115:MongoDBResourceMongoRoleDefinition" }, { type: "azure-native:documentdb/v20221115preview:MongoDBResourceMongoRoleDefinition" }, { type: "azure-native:documentdb/v20230301preview:MongoDBResourceMongoRoleDefinition" }, { type: "azure-native:documentdb/v20230315:MongoDBResourceMongoRoleDefinition" }, { type: "azure-native:documentdb/v20230315preview:MongoDBResourceMongoRoleDefinition" }, { type: "azure-native:documentdb/v20230415:MongoDBResourceMongoRoleDefinition" }, { type: "azure-native:documentdb/v20230915:MongoDBResourceMongoRoleDefinition" }, { type: "azure-native:documentdb/v20230915preview:MongoDBResourceMongoRoleDefinition" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(MongoDBResourceMongoRoleDefinition.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a MongoDBResourceMongoRoleDefinition resource.
 */
export interface MongoDBResourceMongoRoleDefinitionArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The database name for which access is being granted for this Role Definition.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * The ID for the Role Definition {dbName.roleName}.
     */
    mongoRoleDefinitionId?: pulumi.Input<string>;
    /**
     * A set of privileges contained by the Role Definition. This will allow application of this Role Definition on the entire database account or any underlying Database / Collection. Scopes higher than Database are not enforceable as privilege.
     */
    privileges?: pulumi.Input<pulumi.Input<types.inputs.PrivilegeArgs>[]>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A user-friendly name for the Role Definition. Must be unique for the database account.
     */
    roleName?: pulumi.Input<string>;
    /**
     * The set of roles inherited by this Role Definition.
     */
    roles?: pulumi.Input<pulumi.Input<types.inputs.RoleArgs>[]>;
    /**
     * Indicates whether the Role Definition was built-in or user created.
     */
    type?: pulumi.Input<types.enums.MongoRoleDefinitionType>;
}
