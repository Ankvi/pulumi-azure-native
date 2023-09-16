import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Network security user rule.
 * Azure REST API version: 2022-04-01-preview. Prior API version in Azure Native 1.x: 2021-02-01-preview
 */
export class UserRule extends pulumi.CustomResource {
    /**
     * Get an existing UserRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): UserRule {
        return new UserRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:UserRule';

    /**
     * Returns true if the given object is an instance of UserRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is UserRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === UserRule.__pulumiType;
    }

    /**
     * A description for this rule.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The destination port ranges.
     */
    public readonly destinationPortRanges!: pulumi.Output<string[] | undefined>;
    /**
     * The destination address prefixes. CIDR or destination IP ranges.
     */
    public readonly destinations!: pulumi.Output<types.outputs.network.AddressPrefixItemResponse[] | undefined>;
    /**
     * Indicates if the traffic matched against the rule in inbound or outbound.
     */
    public readonly direction!: pulumi.Output<string>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Whether the rule is custom or default.
     * Expected value is 'Custom'.
     */
    public readonly kind!: pulumi.Output<"Custom">;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Network protocol this rule applies to.
     */
    public readonly protocol!: pulumi.Output<string>;
    /**
     * The provisioning state of the security configuration user rule resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The source port ranges.
     */
    public readonly sourcePortRanges!: pulumi.Output<string[] | undefined>;
    /**
     * The CIDR or source IP ranges.
     */
    public readonly sources!: pulumi.Output<types.outputs.network.AddressPrefixItemResponse[] | undefined>;
    /**
     * The system metadata related to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.network.SystemDataResponse>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a UserRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UserRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.configurationName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'configurationName'");
            }
            if ((!args || args.direction === undefined) && !opts.urn) {
                throw new Error("Missing required property 'direction'");
            }
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.networkManagerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkManagerName'");
            }
            if ((!args || args.protocol === undefined) && !opts.urn) {
                throw new Error("Missing required property 'protocol'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.ruleCollectionName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ruleCollectionName'");
            }
            resourceInputs["configurationName"] = args ? args.configurationName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["destinationPortRanges"] = args ? args.destinationPortRanges : undefined;
            resourceInputs["destinations"] = args ? args.destinations : undefined;
            resourceInputs["direction"] = args ? args.direction : undefined;
            resourceInputs["kind"] = "Custom";
            resourceInputs["networkManagerName"] = args ? args.networkManagerName : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["ruleCollectionName"] = args ? args.ruleCollectionName : undefined;
            resourceInputs["ruleName"] = args ? args.ruleName : undefined;
            resourceInputs["sourcePortRanges"] = args ? args.sourcePortRanges : undefined;
            resourceInputs["sources"] = args ? args.sources : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["destinationPortRanges"] = undefined /*out*/;
            resourceInputs["destinations"] = undefined /*out*/;
            resourceInputs["direction"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
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
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20210201preview:UserRule" }, { type: "azure-native:network/v20210501preview:UserRule" }, { type: "azure-native:network/v20220201preview:UserRule" }, { type: "azure-native:network/v20220401preview:UserRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(UserRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a UserRule resource.
 */
export interface UserRuleArgs {
    /**
     * The name of the network manager Security Configuration.
     */
    configurationName: pulumi.Input<string>;
    /**
     * A description for this rule.
     */
    description?: pulumi.Input<string>;
    /**
     * The destination port ranges.
     */
    destinationPortRanges?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The destination address prefixes. CIDR or destination IP ranges.
     */
    destinations?: pulumi.Input<pulumi.Input<types.inputs.network.AddressPrefixItemArgs>[]>;
    /**
     * Indicates if the traffic matched against the rule in inbound or outbound.
     */
    direction: pulumi.Input<string | types.enums.SecurityConfigurationRuleDirection>;
    /**
     * Whether the rule is custom or default.
     * Expected value is 'Custom'.
     */
    kind: pulumi.Input<"Custom">;
    /**
     * The name of the network manager.
     */
    networkManagerName: pulumi.Input<string>;
    /**
     * Network protocol this rule applies to.
     */
    protocol: pulumi.Input<string | types.enums.SecurityConfigurationRuleProtocol>;
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
    /**
     * The source port ranges.
     */
    sourcePortRanges?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The CIDR or source IP ranges.
     */
    sources?: pulumi.Input<pulumi.Input<types.inputs.network.AddressPrefixItemArgs>[]>;
}
