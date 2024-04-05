import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * PaloAltoNetworks Firewall
 */
export class Firewall extends pulumi.CustomResource {
    /**
     * Get an existing Firewall resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Firewall {
        return new Firewall(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:cloudngfw/v20230901preview:Firewall';

    /**
     * Returns true if the given object is an instance of Firewall.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Firewall {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Firewall.__pulumiType;
    }

    /**
     * Associated Rulestack
     */
    public readonly associatedRulestack!: pulumi.Output<types.outputs.RulestackDetailsResponse | undefined>;
    /**
     * DNS settings for Firewall
     */
    public readonly dnsSettings!: pulumi.Output<types.outputs.DNSSettingsResponse>;
    /**
     * Frontend settings for Firewall
     */
    public readonly frontEndSettings!: pulumi.Output<types.outputs.FrontendSettingResponse[] | undefined>;
    /**
     * The managed service identities assigned to this resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.AzureResourceManagerManagedIdentityPropertiesResponse | undefined>;
    /**
     * Panorama Managed: Default is False. Default will be CloudSec managed
     */
    public readonly isPanoramaManaged!: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Marketplace details
     */
    public readonly marketplaceDetails!: pulumi.Output<types.outputs.MarketplaceDetailsResponse>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Network settings
     */
    public readonly networkProfile!: pulumi.Output<types.outputs.NetworkProfileResponse>;
    /**
     * panEtag info
     */
    public readonly panEtag!: pulumi.Output<string | undefined>;
    /**
     * Panorama Configuration
     */
    public readonly panoramaConfig!: pulumi.Output<types.outputs.PanoramaConfigResponse | undefined>;
    /**
     * Billing plan information.
     */
    public readonly planData!: pulumi.Output<types.outputs.PlanDataResponse>;
    /**
     * Provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Firewall resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FirewallArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.dnsSettings === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dnsSettings'");
            }
            if ((!args || args.marketplaceDetails === undefined) && !opts.urn) {
                throw new Error("Missing required property 'marketplaceDetails'");
            }
            if ((!args || args.networkProfile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkProfile'");
            }
            if ((!args || args.planData === undefined) && !opts.urn) {
                throw new Error("Missing required property 'planData'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["associatedRulestack"] = args ? args.associatedRulestack : undefined;
            resourceInputs["dnsSettings"] = args ? args.dnsSettings : undefined;
            resourceInputs["firewallName"] = args ? args.firewallName : undefined;
            resourceInputs["frontEndSettings"] = args ? args.frontEndSettings : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["isPanoramaManaged"] = args ? args.isPanoramaManaged : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["marketplaceDetails"] = args ? args.marketplaceDetails : undefined;
            resourceInputs["networkProfile"] = args ? args.networkProfile : undefined;
            resourceInputs["panEtag"] = args ? args.panEtag : undefined;
            resourceInputs["panoramaConfig"] = args ? args.panoramaConfig : undefined;
            resourceInputs["planData"] = args ? args.planData : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["associatedRulestack"] = undefined /*out*/;
            resourceInputs["dnsSettings"] = undefined /*out*/;
            resourceInputs["frontEndSettings"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["isPanoramaManaged"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["marketplaceDetails"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkProfile"] = undefined /*out*/;
            resourceInputs["panEtag"] = undefined /*out*/;
            resourceInputs["panoramaConfig"] = undefined /*out*/;
            resourceInputs["planData"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cloudngfw:Firewall" }, { type: "azure-native:cloudngfw/v20220829:Firewall" }, { type: "azure-native:cloudngfw/v20220829preview:Firewall" }, { type: "azure-native:cloudngfw/v20230901:Firewall" }, { type: "azure-native:cloudngfw/v20231010preview:Firewall" }, { type: "azure-native:cloudngfw/v20240119preview:Firewall" }, { type: "azure-native:cloudngfw/v20240207preview:Firewall" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Firewall.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Firewall resource.
 */
export interface FirewallArgs {
    /**
     * Associated Rulestack
     */
    associatedRulestack?: pulumi.Input<types.inputs.RulestackDetailsArgs>;
    /**
     * DNS settings for Firewall
     */
    dnsSettings: pulumi.Input<types.inputs.DNSSettingsArgs>;
    /**
     * Firewall resource name
     */
    firewallName?: pulumi.Input<string>;
    /**
     * Frontend settings for Firewall
     */
    frontEndSettings?: pulumi.Input<pulumi.Input<types.inputs.FrontendSettingArgs>[]>;
    /**
     * The managed service identities assigned to this resource.
     */
    identity?: pulumi.Input<types.inputs.AzureResourceManagerManagedIdentityPropertiesArgs>;
    /**
     * Panorama Managed: Default is False. Default will be CloudSec managed
     */
    isPanoramaManaged?: pulumi.Input<string | types.enums.BooleanEnum>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Marketplace details
     */
    marketplaceDetails: pulumi.Input<types.inputs.MarketplaceDetailsArgs>;
    /**
     * Network settings
     */
    networkProfile: pulumi.Input<types.inputs.NetworkProfileArgs>;
    /**
     * panEtag info
     */
    panEtag?: pulumi.Input<string>;
    /**
     * Panorama Configuration
     */
    panoramaConfig?: pulumi.Input<types.inputs.PanoramaConfigArgs>;
    /**
     * Billing plan information.
     */
    planData: pulumi.Input<types.inputs.PlanDataArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}