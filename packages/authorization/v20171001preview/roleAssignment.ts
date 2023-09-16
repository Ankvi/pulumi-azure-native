import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Role Assignments
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
    public static readonly __pulumiType = 'azure-native:authorization/v20171001preview:RoleAssignment';

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
     * The Delegation flag for the role assignment
     */
    public readonly canDelegate!: pulumi.Output<boolean | undefined>;
    /**
     * The role assignment name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The principal ID.
     */
    public readonly principalId!: pulumi.Output<string | undefined>;
    /**
     * The role definition ID.
     */
    public readonly roleDefinitionId!: pulumi.Output<string | undefined>;
    /**
     * The role assignment scope.
     */
    public readonly scope!: pulumi.Output<string | undefined>;
    /**
     * The role assignment type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

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
            if ((!args || args.scope === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scope'");
            }
            resourceInputs["canDelegate"] = args ? args.canDelegate : undefined;
            resourceInputs["principalId"] = args ? args.principalId : undefined;
            resourceInputs["roleAssignmentName"] = args ? args.roleAssignmentName : undefined;
            resourceInputs["roleDefinitionId"] = args ? args.roleDefinitionId : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["canDelegate"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["principalId"] = undefined /*out*/;
            resourceInputs["roleDefinitionId"] = undefined /*out*/;
            resourceInputs["scope"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:authorization:RoleAssignment" }, { type: "azure-native:authorization/v20150701:RoleAssignment" }, { type: "azure-native:authorization/v20180101preview:RoleAssignment" }, { type: "azure-native:authorization/v20180901preview:RoleAssignment" }, { type: "azure-native:authorization/v20200301preview:RoleAssignment" }, { type: "azure-native:authorization/v20200401preview:RoleAssignment" }, { type: "azure-native:authorization/v20200801preview:RoleAssignment" }, { type: "azure-native:authorization/v20201001preview:RoleAssignment" }, { type: "azure-native:authorization/v20220401:RoleAssignment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(RoleAssignment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a RoleAssignment resource.
 */
export interface RoleAssignmentArgs {
    /**
     * The delegation flag used for creating a role assignment
     */
    canDelegate?: pulumi.Input<boolean>;
    /**
     * The principal ID assigned to the role. This maps to the ID inside the Active Directory. It can point to a user, service principal, or security group.
     */
    principalId?: pulumi.Input<string>;
    /**
     * A GUID for the role assignment to create. The name must be unique and different for each role assignment.
     */
    roleAssignmentName?: pulumi.Input<string>;
    /**
     * The role definition ID used in the role assignment.
     */
    roleDefinitionId?: pulumi.Input<string>;
    /**
     * The scope of the role assignment to create. The scope can be any REST resource instance. For example, use '/subscriptions/{subscription-id}/' for a subscription, '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}' for a resource group, and '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/providers/{resource-provider}/{resource-type}/{resource-name}' for a resource.
     */
    scope: pulumi.Input<string>;
}
