import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Network security user rule.
 *
 * Uses Azure REST API version 2024-05-01. In version 2.x of the Azure Native provider, it used API version 2024-03-01.
 *
 * Other available API versions: 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class SecurityUserRule extends pulumi.CustomResource {
    /**
     * Get an existing SecurityUserRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SecurityUserRule {
        return new SecurityUserRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:SecurityUserRule';

    /**
     * Returns true if the given object is an instance of SecurityUserRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SecurityUserRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SecurityUserRule.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
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
    public readonly destinations!: pulumi.Output<types.outputs.AddressPrefixItemResponse[] | undefined>;
    /**
     * Indicates if the traffic matched against the rule in inbound or outbound.
     */
    public readonly direction!: pulumi.Output<string>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
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
    public readonly sources!: pulumi.Output<types.outputs.AddressPrefixItemResponse[] | undefined>;
    /**
     * The system metadata related to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SecurityUserRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecurityUserRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.configurationName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'configurationName'");
            }
            if ((!args || args.direction === undefined) && !opts.urn) {
                throw new Error("Missing required property 'direction'");
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
            resourceInputs["networkManagerName"] = args ? args.networkManagerName : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["ruleCollectionName"] = args ? args.ruleCollectionName : undefined;
            resourceInputs["ruleName"] = args ? args.ruleName : undefined;
            resourceInputs["sourcePortRanges"] = args ? args.sourcePortRanges : undefined;
            resourceInputs["sources"] = args ? args.sources : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["destinationPortRanges"] = undefined /*out*/;
            resourceInputs["destinations"] = undefined /*out*/;
            resourceInputs["direction"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["protocol"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["sourcePortRanges"] = undefined /*out*/;
            resourceInputs["sources"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20210201preview:SecurityUserRule" }, { type: "azure-native:network/v20210501preview:DefaultUserRule" }, { type: "azure-native:network/v20210501preview:SecurityUserRule" }, { type: "azure-native:network/v20210501preview:UserRule" }, { type: "azure-native:network/v20220201preview:SecurityUserRule" }, { type: "azure-native:network/v20220401preview:DefaultUserRule" }, { type: "azure-native:network/v20220401preview:SecurityUserRule" }, { type: "azure-native:network/v20220401preview:UserRule" }, { type: "azure-native:network/v20240301:SecurityUserRule" }, { type: "azure-native:network/v20240501:SecurityUserRule" }, { type: "azure-native:network:DefaultUserRule" }, { type: "azure-native:network:UserRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SecurityUserRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SecurityUserRule resource.
 */
export interface SecurityUserRuleArgs {
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
    destinations?: pulumi.Input<pulumi.Input<types.inputs.AddressPrefixItemArgs>[]>;
    /**
     * Indicates if the traffic matched against the rule in inbound or outbound.
     */
    direction: pulumi.Input<string | types.enums.SecurityConfigurationRuleDirection>;
    /**
     * The name of the network manager.
     */
    networkManagerName: pulumi.Input<string>;
    /**
     * Network protocol this rule applies to.
     */
    protocol: pulumi.Input<string | types.enums.SecurityConfigurationRuleProtocol>;
    /**
     * The name of the resource group. The name is case insensitive.
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
    sources?: pulumi.Input<pulumi.Input<types.inputs.AddressPrefixItemArgs>[]>;
}