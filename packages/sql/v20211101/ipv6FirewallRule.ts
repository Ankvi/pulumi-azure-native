import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * An IPv6 server firewall rule.
 */
export class IPv6FirewallRule extends pulumi.CustomResource {
    /**
     * Get an existing IPv6FirewallRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IPv6FirewallRule {
        return new IPv6FirewallRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql/v20211101:IPv6FirewallRule';

    /**
     * Returns true if the given object is an instance of IPv6FirewallRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IPv6FirewallRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IPv6FirewallRule.__pulumiType;
    }

    /**
     * The end IP address of the firewall rule. Must be IPv6 format. Must be greater than or equal to startIpAddress.
     */
    public readonly endIPv6Address!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * The start IP address of the firewall rule. Must be IPv6 format.
     */
    public readonly startIPv6Address!: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a IPv6FirewallRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IPv6FirewallRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverName'");
            }
            resourceInputs["endIPv6Address"] = args ? args.endIPv6Address : undefined;
            resourceInputs["firewallRuleName"] = args ? args.firewallRuleName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["startIPv6Address"] = args ? args.startIPv6Address : undefined;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["endIPv6Address"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["startIPv6Address"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql:IPv6FirewallRule" }, { type: "azure-native:sql/v20210801preview:IPv6FirewallRule" }, { type: "azure-native:sql/v20211101preview:IPv6FirewallRule" }, { type: "azure-native:sql/v20220201preview:IPv6FirewallRule" }, { type: "azure-native:sql/v20220501preview:IPv6FirewallRule" }, { type: "azure-native:sql/v20220801preview:IPv6FirewallRule" }, { type: "azure-native:sql/v20221101preview:IPv6FirewallRule" }, { type: "azure-native:sql/v20230201preview:IPv6FirewallRule" }, { type: "azure-native:sql/v20230501preview:IPv6FirewallRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(IPv6FirewallRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a IPv6FirewallRule resource.
 */
export interface IPv6FirewallRuleArgs {
    /**
     * The end IP address of the firewall rule. Must be IPv6 format. Must be greater than or equal to startIpAddress.
     */
    endIPv6Address?: pulumi.Input<string>;
    /**
     * The name of the firewall rule.
     */
    firewallRuleName?: pulumi.Input<string>;
    /**
     * Resource name.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
    /**
     * The start IP address of the firewall rule. Must be IPv6 format.
     */
    startIPv6Address?: pulumi.Input<string>;
}
