import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Role management policy
 *
 * Uses Azure REST API version 2024-09-01-preview. In version 2.x of the Azure Native provider, it used API version 2024-09-01-preview.
 *
 * Other available API versions: 2020-10-01, 2020-10-01-preview, 2024-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native authorization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class RoleManagementPolicy extends pulumi.CustomResource {
    /**
     * Get an existing RoleManagementPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RoleManagementPolicy {
        return new RoleManagementPolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:authorization:RoleManagementPolicy';

    /**
     * Returns true if the given object is an instance of RoleManagementPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RoleManagementPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RoleManagementPolicy.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The role management policy description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The role management policy display name.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * The readonly computed rule applied to the policy.
     */
    public /*out*/ readonly effectiveRules!: pulumi.Output<(types.outputs.RoleManagementPolicyApprovalRuleResponse | types.outputs.RoleManagementPolicyAuthenticationContextRuleResponse | types.outputs.RoleManagementPolicyEnablementRuleResponse | types.outputs.RoleManagementPolicyExpirationRuleResponse | types.outputs.RoleManagementPolicyNotificationRuleResponse | types.outputs.RoleManagementPolicyPimOnlyModeRuleResponse)[]>;
    /**
     * The role management policy is default policy.
     */
    public readonly isOrganizationDefault!: pulumi.Output<boolean | undefined>;
    /**
     * The name of the entity last modified it
     */
    public /*out*/ readonly lastModifiedBy!: pulumi.Output<types.outputs.PrincipalResponse>;
    /**
     * The last modified date time.
     */
    public /*out*/ readonly lastModifiedDateTime!: pulumi.Output<string>;
    /**
     * The role management policy name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Additional properties of scope
     */
    public /*out*/ readonly policyProperties!: pulumi.Output<types.outputs.PolicyPropertiesResponse>;
    /**
     * The rule applied to the policy.
     */
    public readonly rules!: pulumi.Output<(types.outputs.RoleManagementPolicyApprovalRuleResponse | types.outputs.RoleManagementPolicyAuthenticationContextRuleResponse | types.outputs.RoleManagementPolicyEnablementRuleResponse | types.outputs.RoleManagementPolicyExpirationRuleResponse | types.outputs.RoleManagementPolicyNotificationRuleResponse | types.outputs.RoleManagementPolicyPimOnlyModeRuleResponse)[] | undefined>;
    /**
     * The role management policy scope.
     */
    public readonly scope!: pulumi.Output<string | undefined>;
    /**
     * The role management policy type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a RoleManagementPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RoleManagementPolicyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.scope === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scope'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["isOrganizationDefault"] = args ? args.isOrganizationDefault : undefined;
            resourceInputs["roleManagementPolicyName"] = args ? args.roleManagementPolicyName : undefined;
            resourceInputs["rules"] = args ? args.rules : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["effectiveRules"] = undefined /*out*/;
            resourceInputs["lastModifiedBy"] = undefined /*out*/;
            resourceInputs["lastModifiedDateTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["policyProperties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["effectiveRules"] = undefined /*out*/;
            resourceInputs["isOrganizationDefault"] = undefined /*out*/;
            resourceInputs["lastModifiedBy"] = undefined /*out*/;
            resourceInputs["lastModifiedDateTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["policyProperties"] = undefined /*out*/;
            resourceInputs["rules"] = undefined /*out*/;
            resourceInputs["scope"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:authorization/v20201001:RoleManagementPolicy" }, { type: "azure-native:authorization/v20201001preview:RoleManagementPolicy" }, { type: "azure-native:authorization/v20240201preview:RoleManagementPolicy" }, { type: "azure-native:authorization/v20240901preview:RoleManagementPolicy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(RoleManagementPolicy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a RoleManagementPolicy resource.
 */
export interface RoleManagementPolicyArgs {
    /**
     * The role management policy description.
     */
    description?: pulumi.Input<string>;
    /**
     * The role management policy display name.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The role management policy is default policy.
     */
    isOrganizationDefault?: pulumi.Input<boolean>;
    /**
     * The name (guid) of the role management policy to upsert.
     */
    roleManagementPolicyName?: pulumi.Input<string>;
    /**
     * The rule applied to the policy.
     */
    rules?: pulumi.Input<pulumi.Input<types.inputs.RoleManagementPolicyApprovalRuleArgs | types.inputs.RoleManagementPolicyAuthenticationContextRuleArgs | types.inputs.RoleManagementPolicyEnablementRuleArgs | types.inputs.RoleManagementPolicyExpirationRuleArgs | types.inputs.RoleManagementPolicyNotificationRuleArgs | types.inputs.RoleManagementPolicyPimOnlyModeRuleArgs>[]>;
    /**
     * The role management policy scope.
     */
    scope: pulumi.Input<string>;
}