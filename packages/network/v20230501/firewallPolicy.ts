import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * FirewallPolicy Resource.
 */
export class FirewallPolicy extends pulumi.CustomResource {
    /**
     * Get an existing FirewallPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): FirewallPolicy {
        return new FirewallPolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20230501:FirewallPolicy';

    /**
     * Returns true if the given object is an instance of FirewallPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FirewallPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FirewallPolicy.__pulumiType;
    }

    /**
     * The parent firewall policy from which rules are inherited.
     */
    public readonly basePolicy!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * List of references to Child Firewall Policies.
     */
    public /*out*/ readonly childPolicies!: pulumi.Output<types.outputs.SubResourceResponse[]>;
    /**
     * DNS Proxy Settings definition.
     */
    public readonly dnsSettings!: pulumi.Output<types.outputs.DnsSettingsResponse | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Explicit Proxy Settings definition.
     */
    public readonly explicitProxy!: pulumi.Output<types.outputs.ExplicitProxyResponse | undefined>;
    /**
     * List of references to Azure Firewalls that this Firewall Policy is associated with.
     */
    public /*out*/ readonly firewalls!: pulumi.Output<types.outputs.SubResourceResponse[]>;
    /**
     * The identity of the firewall policy.
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedServiceIdentityResponse | undefined>;
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
     * The provisioning state of the firewall policy resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * List of references to FirewallPolicyRuleCollectionGroups.
     */
    public /*out*/ readonly ruleCollectionGroups!: pulumi.Output<types.outputs.SubResourceResponse[]>;
    /**
     * A read-only string that represents the size of the FirewallPolicyPropertiesFormat in MB. (ex 0.5MB)
     */
    public /*out*/ readonly size!: pulumi.Output<string>;
    /**
     * The Firewall Policy SKU.
     */
    public readonly sku!: pulumi.Output<types.outputs.FirewallPolicySkuResponse | undefined>;
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
     * TLS Configuration definition.
     */
    public readonly transportSecurity!: pulumi.Output<types.outputs.FirewallPolicyTransportSecurityResponse | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a FirewallPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FirewallPolicyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["basePolicy"] = args ? args.basePolicy : undefined;
            resourceInputs["dnsSettings"] = args ? args.dnsSettings : undefined;
            resourceInputs["explicitProxy"] = args ? args.explicitProxy : undefined;
            resourceInputs["firewallPolicyName"] = args ? args.firewallPolicyName : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["insights"] = args ? args.insights : undefined;
            resourceInputs["intrusionDetection"] = args ? args.intrusionDetection : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["snat"] = args ? args.snat : undefined;
            resourceInputs["sql"] = args ? args.sql : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["threatIntelMode"] = args ? args.threatIntelMode : undefined;
            resourceInputs["threatIntelWhitelist"] = args ? args.threatIntelWhitelist : undefined;
            resourceInputs["transportSecurity"] = args ? args.transportSecurity : undefined;
            resourceInputs["childPolicies"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["firewalls"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["ruleCollectionGroups"] = undefined /*out*/;
            resourceInputs["size"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["basePolicy"] = undefined /*out*/;
            resourceInputs["childPolicies"] = undefined /*out*/;
            resourceInputs["dnsSettings"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["explicitProxy"] = undefined /*out*/;
            resourceInputs["firewalls"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["insights"] = undefined /*out*/;
            resourceInputs["intrusionDetection"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["ruleCollectionGroups"] = undefined /*out*/;
            resourceInputs["size"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["snat"] = undefined /*out*/;
            resourceInputs["sql"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["threatIntelMode"] = undefined /*out*/;
            resourceInputs["threatIntelWhitelist"] = undefined /*out*/;
            resourceInputs["transportSecurity"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:FirewallPolicy" }, { type: "azure-native:network/v20190601:FirewallPolicy" }, { type: "azure-native:network/v20190701:FirewallPolicy" }, { type: "azure-native:network/v20190801:FirewallPolicy" }, { type: "azure-native:network/v20190901:FirewallPolicy" }, { type: "azure-native:network/v20191101:FirewallPolicy" }, { type: "azure-native:network/v20191201:FirewallPolicy" }, { type: "azure-native:network/v20200301:FirewallPolicy" }, { type: "azure-native:network/v20200401:FirewallPolicy" }, { type: "azure-native:network/v20200501:FirewallPolicy" }, { type: "azure-native:network/v20200601:FirewallPolicy" }, { type: "azure-native:network/v20200701:FirewallPolicy" }, { type: "azure-native:network/v20200801:FirewallPolicy" }, { type: "azure-native:network/v20201101:FirewallPolicy" }, { type: "azure-native:network/v20210201:FirewallPolicy" }, { type: "azure-native:network/v20210301:FirewallPolicy" }, { type: "azure-native:network/v20210501:FirewallPolicy" }, { type: "azure-native:network/v20210801:FirewallPolicy" }, { type: "azure-native:network/v20220101:FirewallPolicy" }, { type: "azure-native:network/v20220501:FirewallPolicy" }, { type: "azure-native:network/v20220701:FirewallPolicy" }, { type: "azure-native:network/v20220901:FirewallPolicy" }, { type: "azure-native:network/v20221101:FirewallPolicy" }, { type: "azure-native:network/v20230201:FirewallPolicy" }, { type: "azure-native:network/v20230401:FirewallPolicy" }, { type: "azure-native:network/v20230601:FirewallPolicy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(FirewallPolicy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a FirewallPolicy resource.
 */
export interface FirewallPolicyArgs {
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
    firewallPolicyName?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The identity of the firewall policy.
     */
    identity?: pulumi.Input<types.inputs.ManagedServiceIdentityArgs>;
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
     * The Firewall Policy SKU.
     */
    sku?: pulumi.Input<types.inputs.FirewallPolicySkuArgs>;
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
    /**
     * TLS Configuration definition.
     */
    transportSecurity?: pulumi.Input<types.inputs.FirewallPolicyTransportSecurityArgs>;
}
