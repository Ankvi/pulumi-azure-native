import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An Azure Cosmos DB SQL Role Definition.
 */
export class SqlResourceSqlRoleDefinition extends pulumi.CustomResource {
    /**
     * Get an existing SqlResourceSqlRoleDefinition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SqlResourceSqlRoleDefinition {
        return new SqlResourceSqlRoleDefinition(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:documentdb/v20230915preview:SqlResourceSqlRoleDefinition';

    /**
     * Returns true if the given object is an instance of SqlResourceSqlRoleDefinition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SqlResourceSqlRoleDefinition {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SqlResourceSqlRoleDefinition.__pulumiType;
    }

    /**
     * A set of fully qualified Scopes at or below which Role Assignments may be created using this Role Definition. This will allow application of this Role Definition on the entire database account or any underlying Database / Collection. Must have at least one element. Scopes higher than Database account are not enforceable as assignable Scopes. Note that resources referenced in assignable Scopes need not exist.
     */
    public readonly assignableScopes!: pulumi.Output<string[] | undefined>;
    /**
     * The name of the database account.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The set of operations allowed through this Role Definition.
     */
    public readonly permissions!: pulumi.Output<types.outputs.PermissionResponse[] | undefined>;
    /**
     * A user-friendly name for the Role Definition. Must be unique for the database account.
     */
    public readonly roleName!: pulumi.Output<string | undefined>;
    /**
     * The type of Azure resource.
     */
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a SqlResourceSqlRoleDefinition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SqlResourceSqlRoleDefinitionArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["assignableScopes"] = args ? args.assignableScopes : undefined;
            resourceInputs["permissions"] = args ? args.permissions : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["roleDefinitionId"] = args ? args.roleDefinitionId : undefined;
            resourceInputs["roleName"] = args ? args.roleName : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["name"] = undefined /*out*/;
        } else {
            resourceInputs["assignableScopes"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["permissions"] = undefined /*out*/;
            resourceInputs["roleName"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:documentdb:SqlResourceSqlRoleDefinition" }, { type: "azure-native:documentdb/v20200601preview:SqlResourceSqlRoleDefinition" }, { type: "azure-native:documentdb/v20210301preview:SqlResourceSqlRoleDefinition" }, { type: "azure-native:documentdb/v20210401preview:SqlResourceSqlRoleDefinition" }, { type: "azure-native:documentdb/v20210415:SqlResourceSqlRoleDefinition" }, { type: "azure-native:documentdb/v20210515:SqlResourceSqlRoleDefinition" }, { type: "azure-native:documentdb/v20210615:SqlResourceSqlRoleDefinition" }, { type: "azure-native:documentdb/v20210701preview:SqlResourceSqlRoleDefinition" }, { type: "azure-native:documentdb/v20211015:SqlResourceSqlRoleDefinition" }, { type: "azure-native:documentdb/v20211015preview:SqlResourceSqlRoleDefinition" }, { type: "azure-native:documentdb/v20211115preview:SqlResourceSqlRoleDefinition" }, { type: "azure-native:documentdb/v20220215preview:SqlResourceSqlRoleDefinition" }, { type: "azure-native:documentdb/v20220515:SqlResourceSqlRoleDefinition" }, { type: "azure-native:documentdb/v20220515preview:SqlResourceSqlRoleDefinition" }, { type: "azure-native:documentdb/v20220815:SqlResourceSqlRoleDefinition" }, { type: "azure-native:documentdb/v20220815preview:SqlResourceSqlRoleDefinition" }, { type: "azure-native:documentdb/v20221115:SqlResourceSqlRoleDefinition" }, { type: "azure-native:documentdb/v20221115preview:SqlResourceSqlRoleDefinition" }, { type: "azure-native:documentdb/v20230301preview:SqlResourceSqlRoleDefinition" }, { type: "azure-native:documentdb/v20230315:SqlResourceSqlRoleDefinition" }, { type: "azure-native:documentdb/v20230315preview:SqlResourceSqlRoleDefinition" }, { type: "azure-native:documentdb/v20230415:SqlResourceSqlRoleDefinition" }, { type: "azure-native:documentdb/v20230915:SqlResourceSqlRoleDefinition" }, { type: "azure-native:documentdb/v20231115:SqlResourceSqlRoleDefinition" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SqlResourceSqlRoleDefinition.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SqlResourceSqlRoleDefinition resource.
 */
export interface SqlResourceSqlRoleDefinitionArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * A set of fully qualified Scopes at or below which Role Assignments may be created using this Role Definition. This will allow application of this Role Definition on the entire database account or any underlying Database / Collection. Must have at least one element. Scopes higher than Database account are not enforceable as assignable Scopes. Note that resources referenced in assignable Scopes need not exist.
     */
    assignableScopes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The set of operations allowed through this Role Definition.
     */
    permissions?: pulumi.Input<pulumi.Input<types.inputs.PermissionArgs>[]>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The GUID for the Role Definition.
     */
    roleDefinitionId?: pulumi.Input<string>;
    /**
     * A user-friendly name for the Role Definition. Must be unique for the database account.
     */
    roleName?: pulumi.Input<string>;
    /**
     * Indicates whether the Role Definition was built-in or user created.
     */
    type?: pulumi.Input<types.enums.RoleDefinitionType>;
}
