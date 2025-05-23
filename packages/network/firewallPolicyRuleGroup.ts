import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Rule Group resource.
 *
 * Uses Azure REST API version 2020-04-01. In version 2.x of the Azure Native provider, it used API version 2020-04-01.
 *
 * Other available API versions: 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class FirewallPolicyRuleGroup extends pulumi.CustomResource {
    /**
     * Get an existing FirewallPolicyRuleGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): FirewallPolicyRuleGroup {
        return new FirewallPolicyRuleGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:FirewallPolicyRuleGroup';

    /**
     * Returns true if the given object is an instance of FirewallPolicyRuleGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FirewallPolicyRuleGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FirewallPolicyRuleGroup.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * Priority of the Firewall Policy Rule Group resource.
     */
    public readonly priority!: pulumi.Output<number | undefined>;
    /**
     * The provisioning state of the firewall policy rule group resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Group of Firewall Policy rules.
     */
    public readonly rules!: pulumi.Output<(types.outputs.FirewallPolicyFilterRuleResponse | types.outputs.FirewallPolicyNatRuleResponse)[] | undefined>;
    /**
     * Rule Group type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a FirewallPolicyRuleGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FirewallPolicyRuleGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.firewallPolicyName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'firewallPolicyName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["firewallPolicyName"] = args ? args.firewallPolicyName : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["ruleGroupName"] = args ? args.ruleGroupName : undefined;
            resourceInputs["rules"] = args ? args.rules : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["priority"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["rules"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20190601:FirewallPolicyRuleGroup" }, { type: "azure-native:network/v20190701:FirewallPolicyRuleGroup" }, { type: "azure-native:network/v20190801:FirewallPolicyRuleGroup" }, { type: "azure-native:network/v20190901:FirewallPolicyRuleGroup" }, { type: "azure-native:network/v20191101:FirewallPolicyRuleGroup" }, { type: "azure-native:network/v20191201:FirewallPolicyRuleGroup" }, { type: "azure-native:network/v20200301:FirewallPolicyRuleGroup" }, { type: "azure-native:network/v20200401:FirewallPolicyRuleGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(FirewallPolicyRuleGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a FirewallPolicyRuleGroup resource.
 */
export interface FirewallPolicyRuleGroupArgs {
    /**
     * The name of the Firewall Policy.
     */
    firewallPolicyName: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Priority of the Firewall Policy Rule Group resource.
     */
    priority?: pulumi.Input<number>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the FirewallPolicyRuleGroup.
     */
    ruleGroupName?: pulumi.Input<string>;
    /**
     * Group of Firewall Policy rules.
     */
    rules?: pulumi.Input<pulumi.Input<types.inputs.FirewallPolicyFilterRuleArgs | types.inputs.FirewallPolicyNatRuleArgs>[]>;
}