import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Defines web application firewall policy for Azure CDN.
 * Azure REST API version: 2023-05-01. Prior API version in Azure Native 1.x: 2020-09-01.
 *
 * Other available API versions: 2023-07-01-preview.
 */
export class Policy extends pulumi.CustomResource {
    /**
     * Get an existing Policy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Policy {
        return new Policy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:cdn:Policy';

    /**
     * Returns true if the given object is an instance of Policy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Policy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Policy.__pulumiType;
    }

    /**
     * Describes custom rules inside the policy.
     */
    public readonly customRules!: pulumi.Output<types.outputs.CustomRuleListResponse | undefined>;
    /**
     * Describes Azure CDN endpoints associated with this Web Application Firewall policy.
     */
    public /*out*/ readonly endpointLinks!: pulumi.Output<types.outputs.CdnEndpointResponse[]>;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * Key-Value pair representing additional properties for Web Application Firewall policy.
     */
    public readonly extendedProperties!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Describes managed rules inside the policy.
     */
    public readonly managedRules!: pulumi.Output<types.outputs.ManagedRuleSetListResponse | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Describes  policySettings for policy
     */
    public readonly policySettings!: pulumi.Output<types.outputs.PolicySettingsResponse | undefined>;
    /**
     * Provisioning state of the WebApplicationFirewallPolicy.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Describes rate limit rules inside the policy.
     */
    public readonly rateLimitRules!: pulumi.Output<types.outputs.RateLimitRuleListResponse | undefined>;
    public /*out*/ readonly resourceState!: pulumi.Output<string>;
    /**
     * The pricing tier (defines a CDN provider, feature list and rate) of the CdnWebApplicationFirewallPolicy.
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse>;
    /**
     * Read only system data
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Policy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PolicyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            resourceInputs["customRules"] = args ? args.customRules : undefined;
            resourceInputs["extendedProperties"] = args ? args.extendedProperties : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managedRules"] = args ? args.managedRules : undefined;
            resourceInputs["policyName"] = args ? args.policyName : undefined;
            resourceInputs["policySettings"] = args ? args.policySettings : undefined;
            resourceInputs["rateLimitRules"] = args ? args.rateLimitRules : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["endpointLinks"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["customRules"] = undefined /*out*/;
            resourceInputs["endpointLinks"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["extendedProperties"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managedRules"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["policySettings"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["rateLimitRules"] = undefined /*out*/;
            resourceInputs["resourceState"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cdn/v20190615:Policy" }, { type: "azure-native:cdn/v20190615preview:Policy" }, { type: "azure-native:cdn/v20200331:Policy" }, { type: "azure-native:cdn/v20200415:Policy" }, { type: "azure-native:cdn/v20200901:Policy" }, { type: "azure-native:cdn/v20210601:Policy" }, { type: "azure-native:cdn/v20220501preview:Policy" }, { type: "azure-native:cdn/v20221101preview:Policy" }, { type: "azure-native:cdn/v20230501:Policy" }, { type: "azure-native:cdn/v20230701preview:Policy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Policy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Policy resource.
 */
export interface PolicyArgs {
    /**
     * Describes custom rules inside the policy.
     */
    customRules?: pulumi.Input<types.inputs.CustomRuleListArgs>;
    /**
     * Key-Value pair representing additional properties for Web Application Firewall policy.
     */
    extendedProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * Describes managed rules inside the policy.
     */
    managedRules?: pulumi.Input<types.inputs.ManagedRuleSetListArgs>;
    /**
     * The name of the CdnWebApplicationFirewallPolicy.
     */
    policyName?: pulumi.Input<string>;
    /**
     * Describes  policySettings for policy
     */
    policySettings?: pulumi.Input<types.inputs.PolicySettingsArgs>;
    /**
     * Describes rate limit rules inside the policy.
     */
    rateLimitRules?: pulumi.Input<types.inputs.RateLimitRuleListArgs>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The pricing tier (defines a CDN provider, feature list and rate) of the CdnWebApplicationFirewallPolicy.
     */
    sku: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}