import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * FirewallPolicy Resource.
 *
 * Uses Azure REST API version 2024-05-01. In version 2.x of the Azure Native provider, it used API version 2023-11-01.
 *
 * Other available API versions: 2023-11-01, 2024-01-01, 2024-03-01, 2024-07-01, 2024-10-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class FirewallPolicyDraft extends pulumi.CustomResource {
    /**
     * Get an existing FirewallPolicyDraft resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): FirewallPolicyDraft {
        return new FirewallPolicyDraft(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:FirewallPolicyDraft';

    /**
     * Returns true if the given object is an instance of FirewallPolicyDraft.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FirewallPolicyDraft {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FirewallPolicyDraft.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The parent firewall policy from which rules are inherited.
     */
    public readonly basePolicy!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * DNS Proxy Settings definition.
     */
    public readonly dnsSettings!: pulumi.Output<types.outputs.DnsSettingsResponse | undefined>;
    /**
     * Explicit Proxy Settings definition.
     */
    public readonly explicitProxy!: pulumi.Output<types.outputs.ExplicitProxyResponse | undefined>;
    /**
     * Insights on Firewall Policy.
     */
    public readonly insights!: pulumi.Output<types.outputs.FirewallPolicyInsightsResponse | undefined>;
    /**
     * The configuration for Intrusion detection.
     */
    public readonly intrusionDetection!: pulumi.Output<types.outputs.FirewallPolicyIntrusionDetectionResponse | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The private IP addresses/IP ranges to which traffic will not be SNAT.
     */
    public readonly snat!: pulumi.Output<types.outputs.FirewallPolicySNATResponse | undefined>;
    /**
     * SQL Settings definition.
     */
    public readonly sql!: pulumi.Output<types.outputs.FirewallPolicySQLResponse | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The operation mode for Threat Intelligence.
     */
    public readonly threatIntelMode!: pulumi.Output<string | undefined>;
    /**
     * ThreatIntel Whitelist for Firewall Policy.
     */
    public readonly threatIntelWhitelist!: pulumi.Output<types.outputs.FirewallPolicyThreatIntelWhitelistResponse | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a FirewallPolicyDraft resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FirewallPolicyDraftArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.firewallPolicyName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'firewallPolicyName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["basePolicy"] = args ? args.basePolicy : undefined;
            resourceInputs["dnsSettings"] = args ? args.dnsSettings : undefined;
            resourceInputs["explicitProxy"] = args ? args.explicitProxy : undefined;
            resourceInputs["firewallPolicyName"] = args ? args.firewallPolicyName : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["insights"] = args ? args.insights : undefined;
            resourceInputs["intrusionDetection"] = args ? args.intrusionDetection : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["snat"] = args ? args.snat : undefined;
            resourceInputs["sql"] = args ? args.sql : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["threatIntelMode"] = args ? args.threatIntelMode : undefined;
            resourceInputs["threatIntelWhitelist"] = args ? args.threatIntelWhitelist : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["basePolicy"] = undefined /*out*/;
            resourceInputs["dnsSettings"] = undefined /*out*/;
            resourceInputs["explicitProxy"] = undefined /*out*/;
            resourceInputs["insights"] = undefined /*out*/;
            resourceInputs["intrusionDetection"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["snat"] = undefined /*out*/;
            resourceInputs["sql"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["threatIntelMode"] = undefined /*out*/;
            resourceInputs["threatIntelWhitelist"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20231101:FirewallPolicyDraft" }, { type: "azure-native:network/v20240101:FirewallPolicyDraft" }, { type: "azure-native:network/v20240301:FirewallPolicyDraft" }, { type: "azure-native:network/v20240501:FirewallPolicyDraft" }, { type: "azure-native:network/v20240701:FirewallPolicyDraft" }, { type: "azure-native:network/v20241001:FirewallPolicyDraft" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(FirewallPolicyDraft.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a FirewallPolicyDraft resource.
 */
export interface FirewallPolicyDraftArgs {
    /**
     * The parent firewall policy from which rules are inherited.
     */
    basePolicy?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * DNS Proxy Settings definition.
     */
    dnsSettings?: pulumi.Input<types.inputs.DnsSettingsArgs>;
    /**
     * Explicit Proxy Settings definition.
     */
    explicitProxy?: pulumi.Input<types.inputs.ExplicitProxyArgs>;
    /**
     * The name of the Firewall Policy.
     */
    firewallPolicyName: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Insights on Firewall Policy.
     */
    insights?: pulumi.Input<types.inputs.FirewallPolicyInsightsArgs>;
    /**
     * The configuration for Intrusion detection.
     */
    intrusionDetection?: pulumi.Input<types.inputs.FirewallPolicyIntrusionDetectionArgs>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The private IP addresses/IP ranges to which traffic will not be SNAT.
     */
    snat?: pulumi.Input<types.inputs.FirewallPolicySNATArgs>;
    /**
     * SQL Settings definition.
     */
    sql?: pulumi.Input<types.inputs.FirewallPolicySQLArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The operation mode for Threat Intelligence.
     */
    threatIntelMode?: pulumi.Input<string | types.enums.AzureFirewallThreatIntelMode>;
    /**
     * ThreatIntel Whitelist for Firewall Policy.
     */
    threatIntelWhitelist?: pulumi.Input<types.inputs.FirewallPolicyThreatIntelWhitelistArgs>;
}