import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Rule Collection Group resource.
 * Azure REST API version: 2023-11-01.
 */
export class FirewallPolicyRuleCollectionGroupDraft extends pulumi.CustomResource {
    /**
     * Get an existing FirewallPolicyRuleCollectionGroupDraft resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): FirewallPolicyRuleCollectionGroupDraft {
        return new FirewallPolicyRuleCollectionGroupDraft(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:FirewallPolicyRuleCollectionGroupDraft';

    /**
     * Returns true if the given object is an instance of FirewallPolicyRuleCollectionGroupDraft.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FirewallPolicyRuleCollectionGroupDraft {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FirewallPolicyRuleCollectionGroupDraft.__pulumiType;
    }

    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * Priority of the Firewall Policy Rule Collection Group resource.
     */
    public readonly priority!: pulumi.Output<number | undefined>;
    /**
     * Group of Firewall Policy rule collections.
     */
    public readonly ruleCollections!: pulumi.Output<(types.outputs.FirewallPolicyFilterRuleCollectionResponse | types.outputs.FirewallPolicyNatRuleCollectionResponse)[] | undefined>;
    /**
     * A read-only string that represents the size of the FirewallPolicyRuleCollectionGroupProperties in MB. (ex 1.2MB)
     */
    public /*out*/ readonly size!: pulumi.Output<string>;
    /**
     * Rule Group type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a FirewallPolicyRuleCollectionGroupDraft resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FirewallPolicyRuleCollectionGroupDraftArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.firewallPolicyName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'firewallPolicyName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.ruleCollectionGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ruleCollectionGroupName'");
            }
            resourceInputs["firewallPolicyName"] = args ? args.firewallPolicyName : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["ruleCollectionGroupName"] = args ? args.ruleCollectionGroupName : undefined;
            resourceInputs["ruleCollections"] = args ? args.ruleCollections : undefined;
            resourceInputs["size"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["priority"] = undefined /*out*/;
            resourceInputs["ruleCollections"] = undefined /*out*/;
            resourceInputs["size"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20231101:FirewallPolicyRuleCollectionGroupDraft" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(FirewallPolicyRuleCollectionGroupDraft.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a FirewallPolicyRuleCollectionGroupDraft resource.
 */
export interface FirewallPolicyRuleCollectionGroupDraftArgs {
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
     * Priority of the Firewall Policy Rule Collection Group resource.
     */
    priority?: pulumi.Input<number>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the FirewallPolicyRuleCollectionGroup.
     */
    ruleCollectionGroupName: pulumi.Input<string>;
    /**
     * Group of Firewall Policy rule collections.
     */
    ruleCollections?: pulumi.Input<pulumi.Input<types.inputs.FirewallPolicyFilterRuleCollectionArgs | types.inputs.FirewallPolicyNatRuleCollectionArgs>[]>;
}