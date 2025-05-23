import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * VirtualHub Resource.
 *
 * Uses Azure REST API version 2024-05-01. In version 2.x of the Azure Native provider, it used API version 2023-02-01.
 *
 * Other available API versions: 2018-06-01, 2018-07-01, 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class VirtualHub extends pulumi.CustomResource {
    /**
     * Get an existing VirtualHub resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualHub {
        return new VirtualHub(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:VirtualHub';

    /**
     * Returns true if the given object is an instance of VirtualHub.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualHub {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualHub.__pulumiType;
    }

    /**
     * Address-prefix for this VirtualHub.
     */
    public readonly addressPrefix!: pulumi.Output<string | undefined>;
    /**
     * Flag to control transit for VirtualRouter hub.
     */
    public readonly allowBranchToBranchTraffic!: pulumi.Output<boolean | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The azureFirewall associated with this VirtualHub.
     */
    public readonly azureFirewall!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * List of references to Bgp Connections.
     */
    public /*out*/ readonly bgpConnections!: pulumi.Output<types.outputs.SubResourceResponse[]>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The expressRouteGateway associated with this VirtualHub.
     */
    public readonly expressRouteGateway!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * The hubRoutingPreference of this VirtualHub.
     */
    public readonly hubRoutingPreference!: pulumi.Output<string | undefined>;
    /**
     * List of references to IpConfigurations.
     */
    public /*out*/ readonly ipConfigurations!: pulumi.Output<types.outputs.SubResourceResponse[]>;
    /**
     * Kind of service virtual hub. This is metadata used for the Azure portal experience for Route Server.
     */
    public /*out*/ readonly kind!: pulumi.Output<string>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The P2SVpnGateway associated with this VirtualHub.
     */
    public readonly p2SVpnGateway!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * The preferred gateway to route on-prem traffic
     */
    public readonly preferredRoutingGateway!: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the virtual hub resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * List of references to RouteMaps.
     */
    public /*out*/ readonly routeMaps!: pulumi.Output<types.outputs.SubResourceResponse[]>;
    /**
     * The routeTable associated with this virtual hub.
     */
    public readonly routeTable!: pulumi.Output<types.outputs.VirtualHubRouteTableResponse | undefined>;
    /**
     * The routing state.
     */
    public /*out*/ readonly routingState!: pulumi.Output<string>;
    /**
     * The securityPartnerProvider associated with this VirtualHub.
     */
    public readonly securityPartnerProvider!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * The Security Provider name.
     */
    public readonly securityProviderName!: pulumi.Output<string | undefined>;
    /**
     * The sku of this VirtualHub.
     */
    public readonly sku!: pulumi.Output<string | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * List of all virtual hub route table v2s associated with this VirtualHub.
     */
    public readonly virtualHubRouteTableV2s!: pulumi.Output<types.outputs.VirtualHubRouteTableV2Response[] | undefined>;
    /**
     * VirtualRouter ASN.
     */
    public readonly virtualRouterAsn!: pulumi.Output<number | undefined>;
    /**
     * The VirtualHub Router autoscale configuration.
     */
    public readonly virtualRouterAutoScaleConfiguration!: pulumi.Output<types.outputs.VirtualRouterAutoScaleConfigurationResponse | undefined>;
    /**
     * VirtualRouter IPs.
     */
    public readonly virtualRouterIps!: pulumi.Output<string[] | undefined>;
    /**
     * The VirtualWAN to which the VirtualHub belongs.
     */
    public readonly virtualWan!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * The VpnGateway associated with this VirtualHub.
     */
    public readonly vpnGateway!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;

    /**
     * Create a VirtualHub resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualHubArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["addressPrefix"] = args ? args.addressPrefix : undefined;
            resourceInputs["allowBranchToBranchTraffic"] = args ? args.allowBranchToBranchTraffic : undefined;
            resourceInputs["azureFirewall"] = args ? args.azureFirewall : undefined;
            resourceInputs["expressRouteGateway"] = args ? args.expressRouteGateway : undefined;
            resourceInputs["hubRoutingPreference"] = args ? args.hubRoutingPreference : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["p2SVpnGateway"] = args ? args.p2SVpnGateway : undefined;
            resourceInputs["preferredRoutingGateway"] = args ? args.preferredRoutingGateway : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["routeTable"] = args ? args.routeTable : undefined;
            resourceInputs["securityPartnerProvider"] = args ? args.securityPartnerProvider : undefined;
            resourceInputs["securityProviderName"] = args ? args.securityProviderName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["virtualHubName"] = args ? args.virtualHubName : undefined;
            resourceInputs["virtualHubRouteTableV2s"] = args ? args.virtualHubRouteTableV2s : undefined;
            resourceInputs["virtualRouterAsn"] = args ? args.virtualRouterAsn : undefined;
            resourceInputs["virtualRouterAutoScaleConfiguration"] = args ? args.virtualRouterAutoScaleConfiguration : undefined;
            resourceInputs["virtualRouterIps"] = args ? args.virtualRouterIps : undefined;
            resourceInputs["virtualWan"] = args ? args.virtualWan : undefined;
            resourceInputs["vpnGateway"] = args ? args.vpnGateway : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["bgpConnections"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["ipConfigurations"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["routeMaps"] = undefined /*out*/;
            resourceInputs["routingState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["addressPrefix"] = undefined /*out*/;
            resourceInputs["allowBranchToBranchTraffic"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["azureFirewall"] = undefined /*out*/;
            resourceInputs["bgpConnections"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["expressRouteGateway"] = undefined /*out*/;
            resourceInputs["hubRoutingPreference"] = undefined /*out*/;
            resourceInputs["ipConfigurations"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["p2SVpnGateway"] = undefined /*out*/;
            resourceInputs["preferredRoutingGateway"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["routeMaps"] = undefined /*out*/;
            resourceInputs["routeTable"] = undefined /*out*/;
            resourceInputs["routingState"] = undefined /*out*/;
            resourceInputs["securityPartnerProvider"] = undefined /*out*/;
            resourceInputs["securityProviderName"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualHubRouteTableV2s"] = undefined /*out*/;
            resourceInputs["virtualRouterAsn"] = undefined /*out*/;
            resourceInputs["virtualRouterAutoScaleConfiguration"] = undefined /*out*/;
            resourceInputs["virtualRouterIps"] = undefined /*out*/;
            resourceInputs["virtualWan"] = undefined /*out*/;
            resourceInputs["vpnGateway"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20180401:VirtualHub" }, { type: "azure-native:network/v20180601:VirtualHub" }, { type: "azure-native:network/v20180701:VirtualHub" }, { type: "azure-native:network/v20180801:VirtualHub" }, { type: "azure-native:network/v20181001:VirtualHub" }, { type: "azure-native:network/v20181101:VirtualHub" }, { type: "azure-native:network/v20181201:VirtualHub" }, { type: "azure-native:network/v20190201:VirtualHub" }, { type: "azure-native:network/v20190401:VirtualHub" }, { type: "azure-native:network/v20190601:VirtualHub" }, { type: "azure-native:network/v20190701:VirtualHub" }, { type: "azure-native:network/v20190801:VirtualHub" }, { type: "azure-native:network/v20190901:VirtualHub" }, { type: "azure-native:network/v20191101:VirtualHub" }, { type: "azure-native:network/v20191201:VirtualHub" }, { type: "azure-native:network/v20200301:VirtualHub" }, { type: "azure-native:network/v20200401:VirtualHub" }, { type: "azure-native:network/v20200501:VirtualHub" }, { type: "azure-native:network/v20200601:VirtualHub" }, { type: "azure-native:network/v20200701:VirtualHub" }, { type: "azure-native:network/v20200801:VirtualHub" }, { type: "azure-native:network/v20201101:VirtualHub" }, { type: "azure-native:network/v20210201:VirtualHub" }, { type: "azure-native:network/v20210301:VirtualHub" }, { type: "azure-native:network/v20210501:VirtualHub" }, { type: "azure-native:network/v20210801:VirtualHub" }, { type: "azure-native:network/v20220101:VirtualHub" }, { type: "azure-native:network/v20220501:VirtualHub" }, { type: "azure-native:network/v20220701:VirtualHub" }, { type: "azure-native:network/v20220901:VirtualHub" }, { type: "azure-native:network/v20221101:VirtualHub" }, { type: "azure-native:network/v20230201:VirtualHub" }, { type: "azure-native:network/v20230401:VirtualHub" }, { type: "azure-native:network/v20230501:VirtualHub" }, { type: "azure-native:network/v20230601:VirtualHub" }, { type: "azure-native:network/v20230901:VirtualHub" }, { type: "azure-native:network/v20231101:VirtualHub" }, { type: "azure-native:network/v20240101:VirtualHub" }, { type: "azure-native:network/v20240301:VirtualHub" }, { type: "azure-native:network/v20240501:VirtualHub" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VirtualHub.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualHub resource.
 */
export interface VirtualHubArgs {
    /**
     * Address-prefix for this VirtualHub.
     */
    addressPrefix?: pulumi.Input<string>;
    /**
     * Flag to control transit for VirtualRouter hub.
     */
    allowBranchToBranchTraffic?: pulumi.Input<boolean>;
    /**
     * The azureFirewall associated with this VirtualHub.
     */
    azureFirewall?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * The expressRouteGateway associated with this VirtualHub.
     */
    expressRouteGateway?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * The hubRoutingPreference of this VirtualHub.
     */
    hubRoutingPreference?: pulumi.Input<string | types.enums.HubRoutingPreference>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The P2SVpnGateway associated with this VirtualHub.
     */
    p2SVpnGateway?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * The preferred gateway to route on-prem traffic
     */
    preferredRoutingGateway?: pulumi.Input<string | types.enums.PreferredRoutingGateway>;
    /**
     * The resource group name of the VirtualHub.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The routeTable associated with this virtual hub.
     */
    routeTable?: pulumi.Input<types.inputs.VirtualHubRouteTableArgs>;
    /**
     * The securityPartnerProvider associated with this VirtualHub.
     */
    securityPartnerProvider?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * The Security Provider name.
     */
    securityProviderName?: pulumi.Input<string>;
    /**
     * The sku of this VirtualHub.
     */
    sku?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the VirtualHub.
     */
    virtualHubName?: pulumi.Input<string>;
    /**
     * List of all virtual hub route table v2s associated with this VirtualHub.
     * These are also available as standalone resources. Do not mix inline and standalone resource as they will conflict with each other, leading to resources deletion.
     */
    virtualHubRouteTableV2s?: pulumi.Input<pulumi.Input<types.inputs.VirtualHubRouteTableV2Args>[]>;
    /**
     * VirtualRouter ASN.
     */
    virtualRouterAsn?: pulumi.Input<number>;
    /**
     * The VirtualHub Router autoscale configuration.
     */
    virtualRouterAutoScaleConfiguration?: pulumi.Input<types.inputs.VirtualRouterAutoScaleConfigurationArgs>;
    /**
     * VirtualRouter IPs.
     */
    virtualRouterIps?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The VirtualWAN to which the VirtualHub belongs.
     */
    virtualWan?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * The VpnGateway associated with this VirtualHub.
     */
    vpnGateway?: pulumi.Input<types.inputs.SubResourceArgs>;
}