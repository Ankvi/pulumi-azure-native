import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Network default admin rule.
 */
export class DefaultAdminRule extends pulumi.CustomResource {
    /**
     * Get an existing DefaultAdminRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DefaultAdminRule {
        return new DefaultAdminRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20230501:DefaultAdminRule';

    /**
     * Returns true if the given object is an instance of DefaultAdminRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DefaultAdminRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DefaultAdminRule.__pulumiType;
    }

    /**
     * Indicates the access allowed for this particular rule
     */
    public /*out*/ readonly access!: pulumi.Output<string>;
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
    public /*out*/ readonly destinations!: pulumi.Output<types.outputs.AddressPrefixItemResponse[]>;
    /**
     * Indicates if the traffic matched against the rule in inbound or outbound.
     */
    public /*out*/ readonly direction!: pulumi.Output<string>;
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
     * The priority of the rule. The value can be between 1 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
     */
    public /*out*/ readonly priority!: pulumi.Output<number>;
    /**
     * Network protocol this rule applies to.
     */
    public /*out*/ readonly protocol!: pulumi.Output<string>;
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
    public /*out*/ readonly sourcePortRanges!: pulumi.Output<string[]>;
    /**
     * The CIDR or source IP ranges.
     */
    public /*out*/ readonly sources!: pulumi.Output<types.outputs.AddressPrefixItemResponse[]>;
    /**
     * The system metadata related to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DefaultAdminRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DefaultAdminRuleArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["access"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["destinationPortRanges"] = undefined /*out*/;
            resourceInputs["destinations"] = undefined /*out*/;
            resourceInputs["direction"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["priority"] = undefined /*out*/;
            resourceInputs["protocol"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["sourcePortRanges"] = undefined /*out*/;
            resourceInputs["sources"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["access"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["destinationPortRanges"] = undefined /*out*/;
            resourceInputs["destinations"] = undefined /*out*/;
            resourceInputs["direction"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["flag"] = undefined /*out*/;
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
        const aliasOpts = { aliases: [{ type: "azure-native:network:DefaultAdminRule" }, { type: "azure-native:network/v20210201preview:DefaultAdminRule" }, { type: "azure-native:network/v20210501preview:DefaultAdminRule" }, { type: "azure-native:network/v20220101:DefaultAdminRule" }, { type: "azure-native:network/v20220201preview:DefaultAdminRule" }, { type: "azure-native:network/v20220401preview:DefaultAdminRule" }, { type: "azure-native:network/v20220501:DefaultAdminRule" }, { type: "azure-native:network/v20220701:DefaultAdminRule" }, { type: "azure-native:network/v20220901:DefaultAdminRule" }, { type: "azure-native:network/v20221101:DefaultAdminRule" }, { type: "azure-native:network/v20230201:DefaultAdminRule" }, { type: "azure-native:network/v20230401:DefaultAdminRule" }, { type: "azure-native:network/v20230601:DefaultAdminRule" }, { type: "azure-native:network/v20230901:DefaultAdminRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DefaultAdminRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DefaultAdminRule resource.
 */
export interface DefaultAdminRuleArgs {
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