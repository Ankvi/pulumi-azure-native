import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Role management policy
 *
 * Uses Azure REST API version 2024-09-01-preview. In version 2.x of the Azure Native provider, it used API version 2020-10-01.
 *
 * Other available API versions: 2020-10-01, 2020-10-01-preview, 2024-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native authorization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class RoleManagementPolicyAssignment extends pulumi.CustomResource {
    /**
     * Get an existing RoleManagementPolicyAssignment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RoleManagementPolicyAssignment {
        return new RoleManagementPolicyAssignment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:authorization:RoleManagementPolicyAssignment';

    /**
     * Returns true if the given object is an instance of RoleManagementPolicyAssignment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RoleManagementPolicyAssignment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RoleManagementPolicyAssignment.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The readonly computed rule applied to the policy.
     */
    public /*out*/ readonly effectiveRules!: pulumi.Output<(types.outputs.RoleManagementPolicyApprovalRuleResponse | types.outputs.RoleManagementPolicyAuthenticationContextRuleResponse | types.outputs.RoleManagementPolicyEnablementRuleResponse | types.outputs.RoleManagementPolicyExpirationRuleResponse | types.outputs.RoleManagementPolicyNotificationRuleResponse | types.outputs.RoleManagementPolicyPimOnlyModeRuleResponse)[]>;
    /**
     * The role management policy name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Additional properties of scope, role definition and policy
     */
    public /*out*/ readonly policyAssignmentProperties!: pulumi.Output<types.outputs.PolicyAssignmentPropertiesResponse>;
    /**
     * The policy id role management policy assignment.
     */
    public readonly policyId!: pulumi.Output<string | undefined>;
    /**
     * The role definition of management policy assignment.
     */
    public readonly roleDefinitionId!: pulumi.Output<string | undefined>;
    /**
     * The role management policy scope.
     */
    public readonly scope!: pulumi.Output<string | undefined>;
    /**
     * The role management policy type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a RoleManagementPolicyAssignment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RoleManagementPolicyAssignmentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.scope === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scope'");
            }
            resourceInputs["policyId"] = args ? args.policyId : undefined;
            resourceInputs["roleDefinitionId"] = args ? args.roleDefinitionId : undefined;
            resourceInputs["roleManagementPolicyAssignmentName"] = args ? args.roleManagementPolicyAssignmentName : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["effectiveRules"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["policyAssignmentProperties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["effectiveRules"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["policyAssignmentProperties"] = undefined /*out*/;
            resourceInputs["policyId"] = undefined /*out*/;
            resourceInputs["roleDefinitionId"] = undefined /*out*/;
            resourceInputs["scope"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:authorization/v20201001:RoleManagementPolicyAssignment" }, { type: "azure-native:authorization/v20201001preview:RoleManagementPolicyAssignment" }, { type: "azure-native:authorization/v20240201preview:RoleManagementPolicyAssignment" }, { type: "azure-native:authorization/v20240901preview:RoleManagementPolicyAssignment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(RoleManagementPolicyAssignment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a RoleManagementPolicyAssignment resource.
 */
export interface RoleManagementPolicyAssignmentArgs {
    /**
     * The policy id role management policy assignment.
     */
    policyId?: pulumi.Input<string>;
    /**
     * The role definition of management policy assignment.
     */
    roleDefinitionId?: pulumi.Input<string>;
    /**
     * The name of format {guid_guid} the role management policy assignment to upsert.
     */
    roleManagementPolicyAssignmentName?: pulumi.Input<string>;
    /**
     * The role management policy scope.
     */
    scope: pulumi.Input<string>;
}