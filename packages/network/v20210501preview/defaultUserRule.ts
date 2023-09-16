import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Network security default user rule.
 */
export class DefaultUserRule extends pulumi.CustomResource {
    /**
     * Get an existing DefaultUserRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DefaultUserRule {
        return new DefaultUserRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20210501preview:DefaultUserRule';

    /**
     * Returns true if the given object is an instance of DefaultUserRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DefaultUserRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DefaultUserRule.__pulumiType;
    }

    /**
     * A description for this rule. Restricted to 140 chars.
     */
    public /*out*/ readonly description!: pulumi.Output<string>;
    /**
     * The destination port ranges.
     */
    public /*out*/ readonly destinationPortRanges!: pulumi.Output<string[]>;
    /**
     * The destination address prefixes. CIDR or destination IP ranges.
     */
    public /*out*/ readonly destinations!: pulumi.Output<types.outputs.network.v20210501preview.AddressPrefixItemResponse[]>;
    /**
     * Indicates if the traffic matched against the rule in inbound or outbound.
     */
    public /*out*/ readonly direction!: pulumi.Output<string>;
    /**
     * A friendly name for the rule.
     */
    public /*out*/ readonly displayName!: pulumi.Output<string>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Default rule flag.
     */
    public readonly flag!: pulumi.Output<string | undefined>;
    /**
     * Whether the rule is custom or default.
     * Expected value is 'Default'.
     */
    public readonly kind!: pulumi.Output<"Default">;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Network protocol this rule applies to.
     */
    public /*out*/ readonly protocol!: pulumi.Output<string>;
    /**
     * The provisioning state of the security configuration user rule resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The source port ranges.
     */
    public /*out*/ readonly sourcePortRanges!: pulumi.Output<string[]>;
    /**
     * The CIDR or source IP ranges.
     */
    public /*out*/ readonly sources!: pulumi.Output<types.outputs.network.v20210501preview.AddressPrefixItemResponse[]>;
    /**
     * The system metadata related to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.network.v20210501preview.SystemDataResponse>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DefaultUserRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DefaultUserRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.configurationName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'configurationName'");
            }
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.networkManagerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkManagerName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.ruleCollectionName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ruleCollectionName'");
            }
            resourceInputs["configurationName"] = args ? args.configurationName : undefined;
            resourceInputs["flag"] = args ? args.flag : undefined;
            resourceInputs["kind"] = "Default";
            resourceInputs["networkManagerName"] = args ? args.networkManagerName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["ruleCollectionName"] = args ? args.ruleCollectionName : undefined;
            resourceInputs["ruleName"] = args ? args.ruleName : undefined;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["destinationPortRanges"] = undefined /*out*/;
            resourceInputs["destinations"] = undefined /*out*/;
            resourceInputs["direction"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["protocol"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sourcePortRanges"] = undefined /*out*/;
            resourceInputs["sources"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["destinationPortRanges"] = undefined /*out*/;
            resourceInputs["destinations"] = undefined /*out*/;
            resourceInputs["direction"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["flag"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["protocol"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sourcePortRanges"] = undefined /*out*/;
            resourceInputs["sources"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:DefaultUserRule" }, { type: "azure-native:network/v20210201preview:DefaultUserRule" }, { type: "azure-native:network/v20220201preview:DefaultUserRule" }, { type: "azure-native:network/v20220401preview:DefaultUserRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DefaultUserRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DefaultUserRule resource.
 */
export interface DefaultUserRuleArgs {
    /**
     * The name of the network manager Security Configuration.
     */
    configurationName: pulumi.Input<string>;
    /**
     * Default rule flag.
     */
    flag?: pulumi.Input<string>;
    /**
     * Whether the rule is custom or default.
     * Expected value is 'Default'.
     */
    kind: pulumi.Input<"Default">;
    /**
     * The name of the network manager.
     */
    networkManagerName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the network manager security Configuration rule collection.
     */
    ruleCollectionName: pulumi.Input<string>;
    /**
     * The name of the rule.
     */
    ruleName?: pulumi.Input<string>;
}
