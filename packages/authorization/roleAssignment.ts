import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Role Assignments
 *
 * Uses Azure REST API version 2022-04-01. In version 2.x of the Azure Native provider, it used API version 2022-04-01.
 *
 * Other available API versions: 2020-08-01-preview, 2020-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native authorization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class RoleAssignment extends pulumi.CustomResource {
    /**
     * Get an existing RoleAssignment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RoleAssignment {
        return new RoleAssignment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:authorization:RoleAssignment';

    /**
     * Returns true if the given object is an instance of RoleAssignment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RoleAssignment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RoleAssignment.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The conditions on the role assignment. This limits the resources it can be assigned to. e.g.: @Resource[Microsoft.Storage/storageAccounts/blobServices/containers:ContainerName] StringEqualsIgnoreCase 'foo_storage_container'
     */
    public readonly condition!: pulumi.Output<string | undefined>;
    /**
     * Version of the condition. Currently the only accepted value is '2.0'
     */
    public readonly conditionVersion!: pulumi.Output<string | undefined>;
    /**
     * Id of the user who created the assignment
     */
    public /*out*/ readonly createdBy!: pulumi.Output<string>;
    /**
     * Time it was created
     */
    public /*out*/ readonly createdOn!: pulumi.Output<string>;
    /**
     * Id of the delegated managed identity resource
     */
    public readonly delegatedManagedIdentityResourceId!: pulumi.Output<string | undefined>;
    /**
     * Description of role assignment
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The role assignment name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The principal ID.
     */
    public readonly principalId!: pulumi.Output<string>;
    /**
     * The principal type of the assigned principal ID.
     */
    public readonly principalType!: pulumi.Output<string | undefined>;
    /**
     * The role definition ID.
     */
    public readonly roleDefinitionId!: pulumi.Output<string>;
    /**
     * The role assignment scope.
     */
    public readonly scope!: pulumi.Output<string>;
    /**
     * The role assignment type.
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
     * Create a RoleAssignment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RoleAssignmentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.principalId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'principalId'");
            }
            if ((!args || args.roleDefinitionId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'roleDefinitionId'");
            }
            if ((!args || args.scope === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scope'");
            }
            resourceInputs["condition"] = args ? args.condition : undefined;
            resourceInputs["conditionVersion"] = args ? args.conditionVersion : undefined;
            resourceInputs["delegatedManagedIdentityResourceId"] = args ? args.delegatedManagedIdentityResourceId : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["principalId"] = args ? args.principalId : undefined;
            resourceInputs["principalType"] = (args ? args.principalType : undefined) ?? "User";
            resourceInputs["roleAssignmentName"] = args ? args.roleAssignmentName : undefined;
            resourceInputs["roleDefinitionId"] = args ? args.roleDefinitionId : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createdBy"] = undefined /*out*/;
            resourceInputs["createdOn"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedBy"] = undefined /*out*/;
            resourceInputs["updatedOn"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["condition"] = undefined /*out*/;
            resourceInputs["conditionVersion"] = undefined /*out*/;
            resourceInputs["createdBy"] = undefined /*out*/;
            resourceInputs["createdOn"] = undefined /*out*/;
            resourceInputs["delegatedManagedIdentityResourceId"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["principalId"] = undefined /*out*/;
            resourceInputs["principalType"] = undefined /*out*/;
            resourceInputs["roleDefinitionId"] = undefined /*out*/;
            resourceInputs["scope"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedBy"] = undefined /*out*/;
            resourceInputs["updatedOn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:authorization/v20150701:RoleAssignment" }, { type: "azure-native:authorization/v20171001preview:RoleAssignment" }, { type: "azure-native:authorization/v20180101preview:RoleAssignment" }, { type: "azure-native:authorization/v20180901preview:RoleAssignment" }, { type: "azure-native:authorization/v20200301preview:RoleAssignment" }, { type: "azure-native:authorization/v20200401preview:RoleAssignment" }, { type: "azure-native:authorization/v20200801preview:RoleAssignment" }, { type: "azure-native:authorization/v20201001preview:RoleAssignment" }, { type: "azure-native:authorization/v20220401:RoleAssignment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(RoleAssignment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a RoleAssignment resource.
 */
export interface RoleAssignmentArgs {
    /**
     * The conditions on the role assignment. This limits the resources it can be assigned to. e.g.: @Resource[Microsoft.Storage/storageAccounts/blobServices/containers:ContainerName] StringEqualsIgnoreCase 'foo_storage_container'
     */
    condition?: pulumi.Input<string>;
    /**
     * Version of the condition. Currently the only accepted value is '2.0'
     */
    conditionVersion?: pulumi.Input<string>;
    /**
     * Id of the delegated managed identity resource
     */
    delegatedManagedIdentityResourceId?: pulumi.Input<string>;
    /**
     * Description of role assignment
     */
    description?: pulumi.Input<string>;
    /**
     * The principal ID.
     */
    principalId: pulumi.Input<string>;
    /**
     * The principal type of the assigned principal ID.
     */
    principalType?: pulumi.Input<string | types.enums.PrincipalType>;
    /**
     * The name of the role assignment. It can be any valid GUID.
     */
    roleAssignmentName?: pulumi.Input<string>;
    /**
     * The role definition ID.
     */
    roleDefinitionId: pulumi.Input<string>;
    /**
     * The scope of the operation or resource. Valid scopes are: subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
     */
    scope: pulumi.Input<string>;
}