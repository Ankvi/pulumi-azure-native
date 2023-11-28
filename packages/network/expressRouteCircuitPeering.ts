import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Peering in an ExpressRouteCircuit resource.
 * Azure REST API version: 2023-02-01. Prior API version in Azure Native 1.x: 2020-11-01.
 *
 * Other available API versions: 2017-09-01, 2019-02-01, 2019-06-01, 2019-08-01, 2023-04-01, 2023-05-01, 2023-06-01.
 */
export class ExpressRouteCircuitPeering extends pulumi.CustomResource {
    /**
     * Get an existing ExpressRouteCircuitPeering resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ExpressRouteCircuitPeering {
        return new ExpressRouteCircuitPeering(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:ExpressRouteCircuitPeering';

    /**
     * Returns true if the given object is an instance of ExpressRouteCircuitPeering.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ExpressRouteCircuitPeering {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ExpressRouteCircuitPeering.__pulumiType;
    }

    /**
     * The Azure ASN.
     */
    public readonly azureASN!: pulumi.Output<number | undefined>;
    /**
     * The list of circuit connections associated with Azure Private Peering for this circuit.
     */
    public readonly connections!: pulumi.Output<types.outputs.ExpressRouteCircuitConnectionResponse[] | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The ExpressRoute connection.
     */
    public /*out*/ readonly expressRouteConnection!: pulumi.Output<types.outputs.ExpressRouteConnectionIdResponse | undefined>;
    /**
     * The GatewayManager Etag.
     */
    public readonly gatewayManagerEtag!: pulumi.Output<string | undefined>;
    /**
     * The IPv6 peering configuration.
     */
    public readonly ipv6PeeringConfig!: pulumi.Output<types.outputs.Ipv6ExpressRouteCircuitPeeringConfigResponse | undefined>;
    /**
     * Who was the last to modify the peering.
     */
    public /*out*/ readonly lastModifiedBy!: pulumi.Output<string>;
    /**
     * The Microsoft peering configuration.
     */
    public readonly microsoftPeeringConfig!: pulumi.Output<types.outputs.ExpressRouteCircuitPeeringConfigResponse | undefined>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * The peer ASN.
     */
    public readonly peerASN!: pulumi.Output<number | undefined>;
    /**
     * The list of peered circuit connections associated with Azure Private Peering for this circuit.
     */
    public /*out*/ readonly peeredConnections!: pulumi.Output<types.outputs.PeerExpressRouteCircuitConnectionResponse[]>;
    /**
     * The peering type.
     */
    public readonly peeringType!: pulumi.Output<string | undefined>;
    /**
     * The primary port.
     */
    public readonly primaryAzurePort!: pulumi.Output<string | undefined>;
    /**
     * The primary address prefix.
     */
    public readonly primaryPeerAddressPrefix!: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the express route circuit peering resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The reference to the RouteFilter resource.
     */
    public readonly routeFilter!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * The secondary port.
     */
    public readonly secondaryAzurePort!: pulumi.Output<string | undefined>;
    /**
     * The secondary address prefix.
     */
    public readonly secondaryPeerAddressPrefix!: pulumi.Output<string | undefined>;
    /**
     * The shared key.
     */
    public readonly sharedKey!: pulumi.Output<string | undefined>;
    /**
     * The peering state.
     */
    public readonly state!: pulumi.Output<string | undefined>;
    /**
     * The peering stats of express route circuit.
     */
    public readonly stats!: pulumi.Output<types.outputs.ExpressRouteCircuitStatsResponse | undefined>;
    /**
     * Type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The VLAN ID.
     */
    public readonly vlanId!: pulumi.Output<number | undefined>;

    /**
     * Create a ExpressRouteCircuitPeering resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ExpressRouteCircuitPeeringArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.circuitName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'circuitName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["azureASN"] = args ? args.azureASN : undefined;
            resourceInputs["circuitName"] = args ? args.circuitName : undefined;
            resourceInputs["connections"] = args ? args.connections : undefined;
            resourceInputs["gatewayManagerEtag"] = args ? args.gatewayManagerEtag : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["ipv6PeeringConfig"] = args ? args.ipv6PeeringConfig : undefined;
            resourceInputs["microsoftPeeringConfig"] = args ? args.microsoftPeeringConfig : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["peerASN"] = args ? args.peerASN : undefined;
            resourceInputs["peeringName"] = args ? args.peeringName : undefined;
            resourceInputs["peeringType"] = args ? args.peeringType : undefined;
            resourceInputs["primaryAzurePort"] = args ? args.primaryAzurePort : undefined;
            resourceInputs["primaryPeerAddressPrefix"] = args ? args.primaryPeerAddressPrefix : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["routeFilter"] = args ? args.routeFilter : undefined;
            resourceInputs["secondaryAzurePort"] = args ? args.secondaryAzurePort : undefined;
            resourceInputs["secondaryPeerAddressPrefix"] = args ? args.secondaryPeerAddressPrefix : undefined;
            resourceInputs["sharedKey"] = args ? args.sharedKey : undefined;
            resourceInputs["state"] = args ? args.state : undefined;
            resourceInputs["stats"] = args ? args.stats : undefined;
            resourceInputs["vlanId"] = args ? args.vlanId : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["expressRouteConnection"] = undefined /*out*/;
            resourceInputs["lastModifiedBy"] = undefined /*out*/;
            resourceInputs["peeredConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureASN"] = undefined /*out*/;
            resourceInputs["connections"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["expressRouteConnection"] = undefined /*out*/;
            resourceInputs["gatewayManagerEtag"] = undefined /*out*/;
            resourceInputs["ipv6PeeringConfig"] = undefined /*out*/;
            resourceInputs["lastModifiedBy"] = undefined /*out*/;
            resourceInputs["microsoftPeeringConfig"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["peerASN"] = undefined /*out*/;
            resourceInputs["peeredConnections"] = undefined /*out*/;
            resourceInputs["peeringType"] = undefined /*out*/;
            resourceInputs["primaryAzurePort"] = undefined /*out*/;
            resourceInputs["primaryPeerAddressPrefix"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["routeFilter"] = undefined /*out*/;
            resourceInputs["secondaryAzurePort"] = undefined /*out*/;
            resourceInputs["secondaryPeerAddressPrefix"] = undefined /*out*/;
            resourceInputs["sharedKey"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["stats"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vlanId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20150501preview:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20150615:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20160330:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20160601:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20160901:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20161201:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20170301:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20170601:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20170801:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20170901:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20171001:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20171101:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20180101:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20180201:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20180401:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20180601:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20180701:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20180801:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20181001:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20181101:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20181201:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20190201:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20190401:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20190601:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20190701:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20190801:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20190901:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20191101:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20191201:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20200301:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20200401:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20200501:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20200601:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20200701:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20200801:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20201101:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20210201:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20210301:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20210501:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20210801:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20220101:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20220501:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20220701:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20220901:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20221101:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20230201:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20230401:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20230501:ExpressRouteCircuitPeering" }, { type: "azure-native:network/v20230601:ExpressRouteCircuitPeering" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ExpressRouteCircuitPeering.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ExpressRouteCircuitPeering resource.
 */
export interface ExpressRouteCircuitPeeringArgs {
    /**
     * The Azure ASN.
     */
    azureASN?: pulumi.Input<number>;
    /**
     * The name of the express route circuit.
     */
    circuitName: pulumi.Input<string>;
    /**
     * The list of circuit connections associated with Azure Private Peering for this circuit.
     * These are also available as standalone resources. Do not mix inline and standalone resource as they will conflict with each other, leading to resources deletion.
     */
    connections?: pulumi.Input<pulumi.Input<types.inputs.ExpressRouteCircuitConnectionArgs>[]>;
    /**
     * The GatewayManager Etag.
     */
    gatewayManagerEtag?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The IPv6 peering configuration.
     */
    ipv6PeeringConfig?: pulumi.Input<types.inputs.Ipv6ExpressRouteCircuitPeeringConfigArgs>;
    /**
     * The Microsoft peering configuration.
     */
    microsoftPeeringConfig?: pulumi.Input<types.inputs.ExpressRouteCircuitPeeringConfigArgs>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The peer ASN.
     */
    peerASN?: pulumi.Input<number>;
    /**
     * The name of the peering.
     */
    peeringName?: pulumi.Input<string>;
    /**
     * The peering type.
     */
    peeringType?: pulumi.Input<string | types.enums.ExpressRoutePeeringType>;
    /**
     * The primary port.
     */
    primaryAzurePort?: pulumi.Input<string>;
    /**
     * The primary address prefix.
     */
    primaryPeerAddressPrefix?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The reference to the RouteFilter resource.
     */
    routeFilter?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * The secondary port.
     */
    secondaryAzurePort?: pulumi.Input<string>;
    /**
     * The secondary address prefix.
     */
    secondaryPeerAddressPrefix?: pulumi.Input<string>;
    /**
     * The shared key.
     */
    sharedKey?: pulumi.Input<string>;
    /**
     * The peering state.
     */
    state?: pulumi.Input<string | types.enums.ExpressRoutePeeringState>;
    /**
     * The peering stats of express route circuit.
     */
    stats?: pulumi.Input<types.inputs.ExpressRouteCircuitStatsArgs>;
    /**
     * The VLAN ID.
     */
    vlanId?: pulumi.Input<number>;
}
