import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Single item in a List or Get IpFilterRules operation
 */
export class NamespaceIpFilterRule extends pulumi.CustomResource {
    /**
     * Get an existing NamespaceIpFilterRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NamespaceIpFilterRule {
        return new NamespaceIpFilterRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:servicebus/v20180101preview:NamespaceIpFilterRule';

    /**
     * Returns true if the given object is an instance of NamespaceIpFilterRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NamespaceIpFilterRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NamespaceIpFilterRule.__pulumiType;
    }

    /**
     * The IP Filter Action
     */
    public readonly action!: pulumi.Output<string | undefined>;
    /**
     * IP Filter name
     */
    public readonly filterName!: pulumi.Output<string | undefined>;
    /**
     * IP Mask
     */
    public readonly ipMask!: pulumi.Output<string | undefined>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a NamespaceIpFilterRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NamespaceIpFilterRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.namespaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["filterName"] = args ? args.filterName : undefined;
            resourceInputs["ipFilterRuleName"] = args ? args.ipFilterRuleName : undefined;
            resourceInputs["ipMask"] = args ? args.ipMask : undefined;
            resourceInputs["namespaceName"] = args ? args.namespaceName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["action"] = undefined /*out*/;
            resourceInputs["filterName"] = undefined /*out*/;
            resourceInputs["ipMask"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:servicebus:NamespaceIpFilterRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NamespaceIpFilterRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NamespaceIpFilterRule resource.
 */
export interface NamespaceIpFilterRuleArgs {
    /**
     * The IP Filter Action
     */
    action?: pulumi.Input<string | types.enums.v20180101preview.IPAction>;
    /**
     * IP Filter name
     */
    filterName?: pulumi.Input<string>;
    /**
     * The IP Filter Rule name.
     */
    ipFilterRuleName?: pulumi.Input<string>;
    /**
     * IP Mask
     */
    ipMask?: pulumi.Input<string>;
    /**
     * The namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}
