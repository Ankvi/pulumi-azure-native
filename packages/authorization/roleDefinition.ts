import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Role definition.
 *
 * Uses Azure REST API version 2022-05-01-preview. In version 2.x of the Azure Native provider, it used API version 2022-05-01-preview.
 *
 * Other available API versions: 2022-04-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native authorization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class RoleDefinition extends pulumi.CustomResource {
    /**
     * Get an existing RoleDefinition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RoleDefinition {
        return new RoleDefinition(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:authorization:RoleDefinition';

    /**
     * Returns true if the given object is an instance of RoleDefinition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RoleDefinition {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RoleDefinition.__pulumiType;
    }

    /**
     * Role definition assignable scopes.
     */
    public readonly assignableScopes!: pulumi.Output<string[] | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Id of the user who created the assignment
     */
    public /*out*/ readonly createdBy!: pulumi.Output<string>;
    /**
     * Time it was created
     */
    public /*out*/ readonly createdOn!: pulumi.Output<string>;
    /**
     * The role definition description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The role definition name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Role definition permissions.
     */
    public readonly permissions!: pulumi.Output<types.outputs.PermissionResponse[] | undefined>;
    /**
     * The role name.
     */
    public readonly roleName!: pulumi.Output<string | undefined>;
    /**
     * The role type.
     */
    public readonly roleType!: pulumi.Output<string | undefined>;
    /**
     * The role definition type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Id of the user who updated the assignment
     */
    public /*out*/ readonly updatedBy!: pulumi.Output<string>;
    /**
     * Time it was updated
     */
    public /*out*/ readonly updatedOn!: pulumi.Output<string>;

    /**
     * Create a RoleDefinition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RoleDefinitionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.scope === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scope'");
            }
            resourceInputs["assignableScopes"] = args ? args.assignableScopes : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["permissions"] = args ? args.permissions : undefined;
            resourceInputs["roleDefinitionId"] = args ? args.roleDefinitionId : undefined;
            resourceInputs["roleName"] = args ? args.roleName : undefined;
            resourceInputs["roleType"] = args ? args.roleType : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createdBy"] = undefined /*out*/;
            resourceInputs["createdOn"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedBy"] = undefined /*out*/;
            resourceInputs["updatedOn"] = undefined /*out*/;
        } else {
            resourceInputs["assignableScopes"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createdBy"] = undefined /*out*/;
            resourceInputs["createdOn"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["permissions"] = undefined /*out*/;
            resourceInputs["roleName"] = undefined /*out*/;
            resourceInputs["roleType"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedBy"] = undefined /*out*/;
            resourceInputs["updatedOn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:authorization/v20150701:RoleDefinition" }, { type: "azure-native:authorization/v20180101preview:RoleDefinition" }, { type: "azure-native:authorization/v20220401:RoleDefinition" }, { type: "azure-native:authorization/v20220501preview:RoleDefinition" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(RoleDefinition.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a RoleDefinition resource.
 */
export interface RoleDefinitionArgs {
    /**
     * Role definition assignable scopes.
     */
    assignableScopes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The role definition description.
     */
    description?: pulumi.Input<string>;
    /**
     * Role definition permissions.
     */
    permissions?: pulumi.Input<pulumi.Input<types.inputs.PermissionArgs>[]>;
    /**
     * The ID of the role definition.
     */
    roleDefinitionId?: pulumi.Input<string>;
    /**
     * The role name.
     */
    roleName?: pulumi.Input<string>;
    /**
     * The role type.
     */
    roleType?: pulumi.Input<string>;
    /**
     * The scope of the operation or resource. Valid scopes are: subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
     */
    scope: pulumi.Input<string>;
}