import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure Firewall resource.
 *
 * Uses Azure REST API version 2024-05-01. In version 2.x of the Azure Native provider, it used API version 2023-02-01.
 *
 * Other available API versions: 2018-06-01, 2018-07-01, 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class AzureFirewall extends pulumi.CustomResource {
    /**
     * Get an existing AzureFirewall resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AzureFirewall {
        return new AzureFirewall(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:AzureFirewall';

    /**
     * Returns true if the given object is an instance of AzureFirewall.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AzureFirewall {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AzureFirewall.__pulumiType;
    }

    /**
     * The additional properties used to further config this azure firewall.
     */
    public readonly additionalProperties!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Collection of application rule collections used by Azure Firewall.
     */
    public readonly applicationRuleCollections!: pulumi.Output<types.outputs.AzureFirewallApplicationRuleCollectionResponse[] | undefined>;
    /**
     * Properties to provide a custom autoscale configuration to this azure firewall.
     */
    public readonly autoscaleConfiguration!: pulumi.Output<types.outputs.AzureFirewallAutoscaleConfigurationResponse | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The firewallPolicy associated with this azure firewall.
     */
    public readonly firewallPolicy!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * IP addresses associated with AzureFirewall.
     */
    public readonly hubIPAddresses!: pulumi.Output<types.outputs.HubIPAddressesResponse | undefined>;
    /**
     * IP configuration of the Azure Firewall resource.
     */
    public readonly ipConfigurations!: pulumi.Output<types.outputs.AzureFirewallIPConfigurationResponse[] | undefined>;
    /**
     * IpGroups associated with AzureFirewall.
     */
    public /*out*/ readonly ipGroups!: pulumi.Output<types.outputs.AzureFirewallIpGroupsResponse[]>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * IP configuration of the Azure Firewall used for management traffic.
     */
    public readonly managementIpConfiguration!: pulumi.Output<types.outputs.AzureFirewallIPConfigurationResponse | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Collection of NAT rule collections used by Azure Firewall.
     */
    public readonly natRuleCollections!: pulumi.Output<types.outputs.AzureFirewallNatRuleCollectionResponse[] | undefined>;
    /**
     * Collection of network rule collections used by Azure Firewall.
     */
    public readonly networkRuleCollections!: pulumi.Output<types.outputs.AzureFirewallNetworkRuleCollectionResponse[] | undefined>;
    /**
     * The provisioning state of the Azure firewall resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The Azure Firewall Resource SKU.
     */
    public readonly sku!: pulumi.Output<types.outputs.AzureFirewallSkuResponse | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The operation mode for Threat Intelligence.
     */
    public readonly threatIntelMode!: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The virtualHub to which the firewall belongs.
     */
    public readonly virtualHub!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * A list of availability zones denoting where the resource needs to come from.
     */
    public readonly zones!: pulumi.Output<string[] | undefined>;

    /**
     * Create a AzureFirewall resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AzureFirewallArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["additionalProperties"] = args ? args.additionalProperties : undefined;
            resourceInputs["applicationRuleCollections"] = args ? args.applicationRuleCollections : undefined;
            resourceInputs["autoscaleConfiguration"] = args ? args.autoscaleConfiguration : undefined;
            resourceInputs["azureFirewallName"] = args ? args.azureFirewallName : undefined;
            resourceInputs["firewallPolicy"] = args ? args.firewallPolicy : undefined;
            resourceInputs["hubIPAddresses"] = args ? args.hubIPAddresses : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["ipConfigurations"] = args ? args.ipConfigurations : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managementIpConfiguration"] = args ? args.managementIpConfiguration : undefined;
            resourceInputs["natRuleCollections"] = args ? args.natRuleCollections : undefined;
            resourceInputs["networkRuleCollections"] = args ? args.networkRuleCollections : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["threatIntelMode"] = args ? args.threatIntelMode : undefined;
            resourceInputs["virtualHub"] = args ? args.virtualHub : undefined;
            resourceInputs["zones"] = args ? args.zones : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["ipGroups"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["additionalProperties"] = undefined /*out*/;
            resourceInputs["applicationRuleCollections"] = undefined /*out*/;
            resourceInputs["autoscaleConfiguration"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["firewallPolicy"] = undefined /*out*/;
            resourceInputs["hubIPAddresses"] = undefined /*out*/;
            resourceInputs["ipConfigurations"] = undefined /*out*/;
            resourceInputs["ipGroups"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managementIpConfiguration"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["natRuleCollections"] = undefined /*out*/;
            resourceInputs["networkRuleCollections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["threatIntelMode"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualHub"] = undefined /*out*/;
            resourceInputs["zones"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20180401:AzureFirewall" }, { type: "azure-native:network/v20180601:AzureFirewall" }, { type: "azure-native:network/v20180701:AzureFirewall" }, { type: "azure-native:network/v20180801:AzureFirewall" }, { type: "azure-native:network/v20181001:AzureFirewall" }, { type: "azure-native:network/v20181101:AzureFirewall" }, { type: "azure-native:network/v20181201:AzureFirewall" }, { type: "azure-native:network/v20190201:AzureFirewall" }, { type: "azure-native:network/v20190401:AzureFirewall" }, { type: "azure-native:network/v20190601:AzureFirewall" }, { type: "azure-native:network/v20190701:AzureFirewall" }, { type: "azure-native:network/v20190801:AzureFirewall" }, { type: "azure-native:network/v20190901:AzureFirewall" }, { type: "azure-native:network/v20191101:AzureFirewall" }, { type: "azure-native:network/v20191201:AzureFirewall" }, { type: "azure-native:network/v20200301:AzureFirewall" }, { type: "azure-native:network/v20200401:AzureFirewall" }, { type: "azure-native:network/v20200501:AzureFirewall" }, { type: "azure-native:network/v20200601:AzureFirewall" }, { type: "azure-native:network/v20200701:AzureFirewall" }, { type: "azure-native:network/v20200801:AzureFirewall" }, { type: "azure-native:network/v20201101:AzureFirewall" }, { type: "azure-native:network/v20210201:AzureFirewall" }, { type: "azure-native:network/v20210301:AzureFirewall" }, { type: "azure-native:network/v20210501:AzureFirewall" }, { type: "azure-native:network/v20210801:AzureFirewall" }, { type: "azure-native:network/v20220101:AzureFirewall" }, { type: "azure-native:network/v20220501:AzureFirewall" }, { type: "azure-native:network/v20220701:AzureFirewall" }, { type: "azure-native:network/v20220901:AzureFirewall" }, { type: "azure-native:network/v20221101:AzureFirewall" }, { type: "azure-native:network/v20230201:AzureFirewall" }, { type: "azure-native:network/v20230401:AzureFirewall" }, { type: "azure-native:network/v20230501:AzureFirewall" }, { type: "azure-native:network/v20230601:AzureFirewall" }, { type: "azure-native:network/v20230901:AzureFirewall" }, { type: "azure-native:network/v20231101:AzureFirewall" }, { type: "azure-native:network/v20240101:AzureFirewall" }, { type: "azure-native:network/v20240301:AzureFirewall" }, { type: "azure-native:network/v20240501:AzureFirewall" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AzureFirewall.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AzureFirewall resource.
 */
export interface AzureFirewallArgs {
    /**
     * The additional properties used to further config this azure firewall.
     */
    additionalProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Collection of application rule collections used by Azure Firewall.
     */
    applicationRuleCollections?: pulumi.Input<pulumi.Input<types.inputs.AzureFirewallApplicationRuleCollectionArgs>[]>;
    /**
     * Properties to provide a custom autoscale configuration to this azure firewall.
     */
    autoscaleConfiguration?: pulumi.Input<types.inputs.AzureFirewallAutoscaleConfigurationArgs>;
    /**
     * The name of the Azure Firewall.
     */
    azureFirewallName?: pulumi.Input<string>;
    /**
     * The firewallPolicy associated with this azure firewall.
     */
    firewallPolicy?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * IP addresses associated with AzureFirewall.
     */
    hubIPAddresses?: pulumi.Input<types.inputs.HubIPAddressesArgs>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * IP configuration of the Azure Firewall resource.
     */
    ipConfigurations?: pulumi.Input<pulumi.Input<types.inputs.AzureFirewallIPConfigurationArgs>[]>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * IP configuration of the Azure Firewall used for management traffic.
     */
    managementIpConfiguration?: pulumi.Input<types.inputs.AzureFirewallIPConfigurationArgs>;
    /**
     * Collection of NAT rule collections used by Azure Firewall.
     */
    natRuleCollections?: pulumi.Input<pulumi.Input<types.inputs.AzureFirewallNatRuleCollectionArgs>[]>;
    /**
     * Collection of network rule collections used by Azure Firewall.
     */
    networkRuleCollections?: pulumi.Input<pulumi.Input<types.inputs.AzureFirewallNetworkRuleCollectionArgs>[]>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Azure Firewall Resource SKU.
     */
    sku?: pulumi.Input<types.inputs.AzureFirewallSkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The operation mode for Threat Intelligence.
     */
    threatIntelMode?: pulumi.Input<string | types.enums.AzureFirewallThreatIntelMode>;
    /**
     * The virtualHub to which the firewall belongs.
     */
    virtualHub?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * A list of availability zones denoting where the resource needs to come from.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}