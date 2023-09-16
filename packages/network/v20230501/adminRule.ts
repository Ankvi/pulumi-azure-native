import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Network admin rule.
 */
export class AdminRule extends pulumi.CustomResource {
    /**
     * Get an existing AdminRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AdminRule {
        return new AdminRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20230501:AdminRule';

    /**
     * Returns true if the given object is an instance of AdminRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AdminRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AdminRule.__pulumiType;
    }

    /**
     * Indicates the access allowed for this particular rule
     */
    public readonly access!: pulumi.Output<string>;
    /**
     * A description for this rule. Restricted to 140 chars.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The destination port ranges.
     */
    public readonly destinationPortRanges!: pulumi.Output<string[] | undefined>;
    /**
     * The destination address prefixes. CIDR or destination IP ranges.
     */
    public readonly destinations!: pulumi.Output<types.outputs.network.v20230501.AddressPrefixItemResponse[] | undefined>;
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
     * The priority of the rule. The value can be between 1 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
     */
    public readonly priority!: pulumi.Output<number>;
    /**
     * Network protocol this rule applies to.
     */
    public readonly protocol!: pulumi.Output<string>;
    /**
     * The provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Unique identifier for this resource.
     */
    public /*out*/ readonly resourceGuid!: pulumi.Output<string>;
    /**
     * The source port ranges.
     */
    public readonly sourcePortRanges!: pulumi.Output<string[] | undefined>;
    /**
     * The CIDR or source IP ranges.
     */
    public readonly sources!: pulumi.Output<types.outputs.network.v20230501.AddressPrefixItemResponse[] | undefined>;
    /**
     * The system metadata related to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.network.v20230501.SystemDataResponse>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a AdminRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AdminRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.access === undefined) && !opts.urn) {
                throw new Error("Missing required property 'access'");
            }
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
            if ((!args || args.priority === undefined) && !opts.urn) {
                throw new Error("Missing required property 'priority'");
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
            resourceInputs["access"] = args ? args.access : undefined;
            resourceInputs["configurationName"] = args ? args.configurationName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["destinationPortRanges"] = args ? args.destinationPortRanges : undefined;
            resourceInputs["destinations"] = args ? args.destinations : undefined;
            resourceInputs["direction"] = args ? args.direction : undefined;
            resourceInputs["kind"] = "Custom";
            resourceInputs["networkManagerName"] = args ? args.networkManagerName : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["ruleCollectionName"] = args ? args.ruleCollectionName : undefined;
            resourceInputs["ruleName"] = args ? args.ruleName : undefined;
            resourceInputs["sourcePortRanges"] = args ? args.sourcePortRanges : undefined;
            resourceInputs["sources"] = args ? args.sources : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["access"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["destinationPortRanges"] = undefined /*out*/;
            resourceInputs["destinations"] = undefined /*out*/;
            resourceInputs["direction"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["priority"] = undefined /*out*/;
            resourceInputs["protocol"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["sourcePortRanges"] = undefined /*out*/;
            resourceInputs["sources"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:AdminRule" }, { type: "azure-native:network/v20210201preview:AdminRule" }, { type: "azure-native:network/v20210501preview:AdminRule" }, { type: "azure-native:network/v20220101:AdminRule" }, { type: "azure-native:network/v20220201preview:AdminRule" }, { type: "azure-native:network/v20220401preview:AdminRule" }, { type: "azure-native:network/v20220501:AdminRule" }, { type: "azure-native:network/v20220701:AdminRule" }, { type: "azure-native:network/v20220901:AdminRule" }, { type: "azure-native:network/v20221101:AdminRule" }, { type: "azure-native:network/v20230201:AdminRule" }, { type: "azure-native:network/v20230401:AdminRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AdminRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AdminRule resource.
 */
export interface AdminRuleArgs {
    /**
     * Indicates the access allowed for this particular rule
     */
    access: pulumi.Input<string | types.enums.v20230501.SecurityConfigurationRuleAccess>;
    /**
     * The name of the network manager Security Configuration.
     */
    configurationName: pulumi.Input<string>;
    /**
     * A description for this rule. Restricted to 140 chars.
     */
    description?: pulumi.Input<string>;
    /**
     * The destination port ranges.
     */
    destinationPortRanges?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The destination address prefixes. CIDR or destination IP ranges.
     */
    destinations?: pulumi.Input<pulumi.Input<types.inputs.network.v20230501.AddressPrefixItemArgs>[]>;
    /**
     * Indicates if the traffic matched against the rule in inbound or outbound.
     */
    direction: pulumi.Input<string | types.enums.v20230501.SecurityConfigurationRuleDirection>;
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
     * The priority of the rule. The value can be between 1 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
     */
    priority: pulumi.Input<number>;
    /**
     * Network protocol this rule applies to.
     */
    protocol: pulumi.Input<string | types.enums.v20230501.SecurityConfigurationRuleProtocol>;
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
    sources?: pulumi.Input<pulumi.Input<types.inputs.network.v20230501.AddressPrefixItemArgs>[]>;
}
