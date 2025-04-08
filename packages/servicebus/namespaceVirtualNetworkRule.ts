import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Single item in a List or Get VirtualNetworkRules operation
 *
 * Uses Azure REST API version 2018-01-01-preview. In version 1.x of the Azure Native provider, it used API version 2018-01-01-preview.
 */
export class NamespaceVirtualNetworkRule extends pulumi.CustomResource {
    /**
     * Get an existing NamespaceVirtualNetworkRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NamespaceVirtualNetworkRule {
        return new NamespaceVirtualNetworkRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:servicebus:NamespaceVirtualNetworkRule';

    /**
     * Returns true if the given object is an instance of NamespaceVirtualNetworkRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NamespaceVirtualNetworkRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NamespaceVirtualNetworkRule.__pulumiType;
    }

    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Resource ID of Virtual Network Subnet
     */
    public readonly virtualNetworkSubnetId!: pulumi.Output<string | undefined>;

    /**
     * Create a NamespaceVirtualNetworkRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NamespaceVirtualNetworkRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.namespaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["namespaceName"] = args ? args.namespaceName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["virtualNetworkRuleName"] = args ? args.virtualNetworkRuleName : undefined;
            resourceInputs["virtualNetworkSubnetId"] = args ? args.virtualNetworkSubnetId : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualNetworkSubnetId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:servicebus/v20180101preview:NamespaceVirtualNetworkRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NamespaceVirtualNetworkRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NamespaceVirtualNetworkRule resource.
 */
export interface NamespaceVirtualNetworkRuleArgs {
    /**
     * The namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Virtual Network Rule name.
     */
    virtualNetworkRuleName?: pulumi.Input<string>;
    /**
     * Resource ID of Virtual Network Subnet
     */
    virtualNetworkSubnetId?: pulumi.Input<string>;
}