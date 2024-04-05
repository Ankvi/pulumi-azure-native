import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * A firewall rule on a redis cache has a name, and describes a contiguous range of IP addresses permitted to connect
 */
export class FirewallRule extends pulumi.CustomResource {
    /**
     * Get an existing FirewallRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): FirewallRule {
        return new FirewallRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:cache/v20230801:FirewallRule';

    /**
     * Returns true if the given object is an instance of FirewallRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FirewallRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FirewallRule.__pulumiType;
    }

    /**
     * highest IP address included in the range
     */
    public readonly endIP!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * lowest IP address included in the range
     */
    public readonly startIP!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a FirewallRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FirewallRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.cacheName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cacheName'");
            }
            if ((!args || args.endIP === undefined) && !opts.urn) {
                throw new Error("Missing required property 'endIP'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.startIP === undefined) && !opts.urn) {
                throw new Error("Missing required property 'startIP'");
            }
            resourceInputs["cacheName"] = args ? args.cacheName : undefined;
            resourceInputs["endIP"] = args ? args.endIP : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["ruleName"] = args ? args.ruleName : undefined;
            resourceInputs["startIP"] = args ? args.startIP : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["endIP"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["startIP"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cache:FirewallRule" }, { type: "azure-native:cache/v20160401:FirewallRule" }, { type: "azure-native:cache/v20170201:FirewallRule" }, { type: "azure-native:cache/v20171001:FirewallRule" }, { type: "azure-native:cache/v20180301:FirewallRule" }, { type: "azure-native:cache/v20190701:FirewallRule" }, { type: "azure-native:cache/v20200601:FirewallRule" }, { type: "azure-native:cache/v20201201:FirewallRule" }, { type: "azure-native:cache/v20210601:FirewallRule" }, { type: "azure-native:cache/v20220501:FirewallRule" }, { type: "azure-native:cache/v20220601:FirewallRule" }, { type: "azure-native:cache/v20230401:FirewallRule" }, { type: "azure-native:cache/v20230501preview:FirewallRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(FirewallRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a FirewallRule resource.
 */
export interface FirewallRuleArgs {
    /**
     * The name of the Redis cache.
     */
    cacheName: pulumi.Input<string>;
    /**
     * highest IP address included in the range
     */
    endIP: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the firewall rule.
     */
    ruleName?: pulumi.Input<string>;
    /**
     * lowest IP address included in the range
     */
    startIP: pulumi.Input<string>;
}