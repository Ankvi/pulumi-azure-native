import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * An Azure SQL DB Server Outbound Firewall Rule.
 * Azure REST API version: 2021-11-01. Prior API version in Azure Native 1.x: 2021-02-01-preview.
 *
 * Other available API versions: 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01-preview, 2024-05-01-preview.
 */
export class OutboundFirewallRule extends pulumi.CustomResource {
    /**
     * Get an existing OutboundFirewallRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): OutboundFirewallRule {
        return new OutboundFirewallRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql:OutboundFirewallRule';

    /**
     * Returns true if the given object is an instance of OutboundFirewallRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OutboundFirewallRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OutboundFirewallRule.__pulumiType;
    }

    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The state of the outbound rule.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a OutboundFirewallRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OutboundFirewallRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverName'");
            }
            resourceInputs["outboundRuleFqdn"] = args ? args.outboundRuleFqdn : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql/v20210201preview:OutboundFirewallRule" }, { type: "azure-native:sql/v20210501preview:OutboundFirewallRule" }, { type: "azure-native:sql/v20210801preview:OutboundFirewallRule" }, { type: "azure-native:sql/v20211101:OutboundFirewallRule" }, { type: "azure-native:sql/v20211101preview:OutboundFirewallRule" }, { type: "azure-native:sql/v20220201preview:OutboundFirewallRule" }, { type: "azure-native:sql/v20220501preview:OutboundFirewallRule" }, { type: "azure-native:sql/v20220801preview:OutboundFirewallRule" }, { type: "azure-native:sql/v20221101preview:OutboundFirewallRule" }, { type: "azure-native:sql/v20230201preview:OutboundFirewallRule" }, { type: "azure-native:sql/v20230501preview:OutboundFirewallRule" }, { type: "azure-native:sql/v20230801preview:OutboundFirewallRule" }, { type: "azure-native:sql/v20240501preview:OutboundFirewallRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(OutboundFirewallRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a OutboundFirewallRule resource.
 */
export interface OutboundFirewallRuleArgs {
    outboundRuleFqdn?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}