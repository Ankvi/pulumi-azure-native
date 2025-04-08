import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A common class for general resource information.
 *
 * Uses Azure REST API version 2024-05-01. In version 2.x of the Azure Native provider, it used API version 2023-02-01.
 *
 * Other available API versions: 2018-06-01, 2018-07-01, 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class VirtualNetworkGatewayConnection extends pulumi.CustomResource {
    /**
     * Get an existing VirtualNetworkGatewayConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualNetworkGatewayConnection {
        return new VirtualNetworkGatewayConnection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:VirtualNetworkGatewayConnection';

    /**
     * Returns true if the given object is an instance of VirtualNetworkGatewayConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualNetworkGatewayConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualNetworkGatewayConnection.__pulumiType;
    }

    /**
     * The authorizationKey.
     */
    public readonly authorizationKey!: pulumi.Output<string | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The connection mode for this connection.
     */
    public readonly connectionMode!: pulumi.Output<string | undefined>;
    /**
     * Connection protocol used for this connection.
     */
    public readonly connectionProtocol!: pulumi.Output<string | undefined>;
    /**
     * Virtual Network Gateway connection status.
     */
    public /*out*/ readonly connectionStatus!: pulumi.Output<string>;
    /**
     * Gateway connection type.
     */
    public readonly connectionType!: pulumi.Output<string>;
    /**
     * The dead peer detection timeout of this connection in seconds.
     */
    public readonly dpdTimeoutSeconds!: pulumi.Output<number | undefined>;
    /**
     * The egress bytes transferred in this connection.
     */
    public /*out*/ readonly egressBytesTransferred!: pulumi.Output<number>;
    /**
     * List of egress NatRules.
     */
    public readonly egressNatRules!: pulumi.Output<types.outputs.SubResourceResponse[] | undefined>;
    /**
     * EnableBgp flag.
     */
    public readonly enableBgp!: pulumi.Output<boolean | undefined>;
    /**
     * Bypass the ExpressRoute gateway when accessing private-links. ExpressRoute FastPath (expressRouteGatewayBypass) must be enabled.
     */
    public readonly enablePrivateLinkFastPath!: pulumi.Output<boolean | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Bypass ExpressRoute Gateway for data forwarding.
     */
    public readonly expressRouteGatewayBypass!: pulumi.Output<boolean | undefined>;
    /**
     * GatewayCustomBgpIpAddresses to be used for virtual network gateway Connection.
     */
    public readonly gatewayCustomBgpIpAddresses!: pulumi.Output<types.outputs.GatewayCustomBgpIpAddressIpConfigurationResponse[] | undefined>;
    /**
     * The ingress bytes transferred in this connection.
     */
    public /*out*/ readonly ingressBytesTransferred!: pulumi.Output<number>;
    /**
     * List of ingress NatRules.
     */
    public readonly ingressNatRules!: pulumi.Output<types.outputs.SubResourceResponse[] | undefined>;
    /**
     * The IPSec Policies to be considered by this connection.
     */
    public readonly ipsecPolicies!: pulumi.Output<types.outputs.IpsecPolicyResponse[] | undefined>;
    /**
     * The reference to local network gateway resource.
     */
    public readonly localNetworkGateway2!: pulumi.Output<types.outputs.LocalNetworkGatewayResponse | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The reference to peerings resource.
     */
    public readonly peer!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * The provisioning state of the virtual network gateway connection resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The resource GUID property of the virtual network gateway connection resource.
     */
    public /*out*/ readonly resourceGuid!: pulumi.Output<string>;
    /**
     * The routing weight.
     */
    public readonly routingWeight!: pulumi.Output<number | undefined>;
    /**
     * The IPSec shared key.
     */
    public readonly sharedKey!: pulumi.Output<string | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The Traffic Selector Policies to be considered by this connection.
     */
    public readonly trafficSelectorPolicies!: pulumi.Output<types.outputs.TrafficSelectorPolicyResponse[] | undefined>;
    /**
     * Collection of all tunnels' connection health status.
     */
    public /*out*/ readonly tunnelConnectionStatus!: pulumi.Output<types.outputs.TunnelConnectionHealthResponse[]>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Use private local Azure IP for the connection.
     */
    public readonly useLocalAzureIpAddress!: pulumi.Output<boolean | undefined>;
    /**
     * Enable policy-based traffic selectors.
     */
    public readonly usePolicyBasedTrafficSelectors!: pulumi.Output<boolean | undefined>;
    /**
     * The reference to virtual network gateway resource.
     */
    public readonly virtualNetworkGateway1!: pulumi.Output<types.outputs.VirtualNetworkGatewayResponse>;
    /**
     * The reference to virtual network gateway resource.
     */
    public readonly virtualNetworkGateway2!: pulumi.Output<types.outputs.VirtualNetworkGatewayResponse | undefined>;

    /**
     * Create a VirtualNetworkGatewayConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualNetworkGatewayConnectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.connectionType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'connectionType'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.virtualNetworkGateway1 === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualNetworkGateway1'");
            }
            resourceInputs["authorizationKey"] = args ? args.authorizationKey : undefined;
            resourceInputs["connectionMode"] = args ? args.connectionMode : undefined;
            resourceInputs["connectionProtocol"] = args ? args.connectionProtocol : undefined;
            resourceInputs["connectionType"] = args ? args.connectionType : undefined;
            resourceInputs["dpdTimeoutSeconds"] = args ? args.dpdTimeoutSeconds : undefined;
            resourceInputs["egressNatRules"] = args ? args.egressNatRules : undefined;
            resourceInputs["enableBgp"] = args ? args.enableBgp : undefined;
            resourceInputs["enablePrivateLinkFastPath"] = args ? args.enablePrivateLinkFastPath : undefined;
            resourceInputs["expressRouteGatewayBypass"] = args ? args.expressRouteGatewayBypass : undefined;
            resourceInputs["gatewayCustomBgpIpAddresses"] = args ? args.gatewayCustomBgpIpAddresses : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["ingressNatRules"] = args ? args.ingressNatRules : undefined;
            resourceInputs["ipsecPolicies"] = args ? args.ipsecPolicies : undefined;
            resourceInputs["localNetworkGateway2"] = args ? args.localNetworkGateway2 : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["peer"] = args ? args.peer : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["routingWeight"] = args ? args.routingWeight : undefined;
            resourceInputs["sharedKey"] = args ? args.sharedKey : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["trafficSelectorPolicies"] = args ? args.trafficSelectorPolicies : undefined;
            resourceInputs["useLocalAzureIpAddress"] = args ? args.useLocalAzureIpAddress : undefined;
            resourceInputs["usePolicyBasedTrafficSelectors"] = args ? args.usePolicyBasedTrafficSelectors : undefined;
            resourceInputs["virtualNetworkGateway1"] = args ? args.virtualNetworkGateway1 : undefined;
            resourceInputs["virtualNetworkGateway2"] = args ? args.virtualNetworkGateway2 : undefined;
            resourceInputs["virtualNetworkGatewayConnectionName"] = args ? args.virtualNetworkGatewayConnectionName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["connectionStatus"] = undefined /*out*/;
            resourceInputs["egressBytesTransferred"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["ingressBytesTransferred"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["tunnelConnectionStatus"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["authorizationKey"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["connectionMode"] = undefined /*out*/;
            resourceInputs["connectionProtocol"] = undefined /*out*/;
            resourceInputs["connectionStatus"] = undefined /*out*/;
            resourceInputs["connectionType"] = undefined /*out*/;
            resourceInputs["dpdTimeoutSeconds"] = undefined /*out*/;
            resourceInputs["egressBytesTransferred"] = undefined /*out*/;
            resourceInputs["egressNatRules"] = undefined /*out*/;
            resourceInputs["enableBgp"] = undefined /*out*/;
            resourceInputs["enablePrivateLinkFastPath"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["expressRouteGatewayBypass"] = undefined /*out*/;
            resourceInputs["gatewayCustomBgpIpAddresses"] = undefined /*out*/;
            resourceInputs["ingressBytesTransferred"] = undefined /*out*/;
            resourceInputs["ingressNatRules"] = undefined /*out*/;
            resourceInputs["ipsecPolicies"] = undefined /*out*/;
            resourceInputs["localNetworkGateway2"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["peer"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["routingWeight"] = undefined /*out*/;
            resourceInputs["sharedKey"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["trafficSelectorPolicies"] = undefined /*out*/;
            resourceInputs["tunnelConnectionStatus"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["useLocalAzureIpAddress"] = undefined /*out*/;
            resourceInputs["usePolicyBasedTrafficSelectors"] = undefined /*out*/;
            resourceInputs["virtualNetworkGateway1"] = undefined /*out*/;
            resourceInputs["virtualNetworkGateway2"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20150615:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20160330:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20160601:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20160901:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20161201:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20170301:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20170601:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20170801:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20170901:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20171001:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20171101:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20180101:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20180201:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20180401:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20180601:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20180701:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20180801:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20181001:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20181101:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20181201:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20190201:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20190401:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20190601:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20190701:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20190801:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20190901:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20191101:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20191201:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20200301:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20200401:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20200501:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20200601:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20200701:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20200801:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20201101:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20210201:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20210301:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20210501:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20210801:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20220101:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20220501:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20220701:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20220901:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20221101:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20230201:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20230401:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20230501:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20230601:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20230901:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20231101:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20240101:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20240301:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20240501:VirtualNetworkGatewayConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VirtualNetworkGatewayConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualNetworkGatewayConnection resource.
 */
export interface VirtualNetworkGatewayConnectionArgs {
    /**
     * The authorizationKey.
     */
    authorizationKey?: pulumi.Input<string>;
    /**
     * The connection mode for this connection.
     */
    connectionMode?: pulumi.Input<string | types.enums.VirtualNetworkGatewayConnectionMode>;
    /**
     * Connection protocol used for this connection.
     */
    connectionProtocol?: pulumi.Input<string | types.enums.VirtualNetworkGatewayConnectionProtocol>;
    /**
     * Gateway connection type.
     */
    connectionType: pulumi.Input<string | types.enums.VirtualNetworkGatewayConnectionType>;
    /**
     * The dead peer detection timeout of this connection in seconds.
     */
    dpdTimeoutSeconds?: pulumi.Input<number>;
    /**
     * List of egress NatRules.
     */
    egressNatRules?: pulumi.Input<pulumi.Input<types.inputs.SubResourceArgs>[]>;
    /**
     * EnableBgp flag.
     */
    enableBgp?: pulumi.Input<boolean>;
    /**
     * Bypass the ExpressRoute gateway when accessing private-links. ExpressRoute FastPath (expressRouteGatewayBypass) must be enabled.
     */
    enablePrivateLinkFastPath?: pulumi.Input<boolean>;
    /**
     * Bypass ExpressRoute Gateway for data forwarding.
     */
    expressRouteGatewayBypass?: pulumi.Input<boolean>;
    /**
     * GatewayCustomBgpIpAddresses to be used for virtual network gateway Connection.
     */
    gatewayCustomBgpIpAddresses?: pulumi.Input<pulumi.Input<types.inputs.GatewayCustomBgpIpAddressIpConfigurationArgs>[]>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * List of ingress NatRules.
     */
    ingressNatRules?: pulumi.Input<pulumi.Input<types.inputs.SubResourceArgs>[]>;
    /**
     * The IPSec Policies to be considered by this connection.
     */
    ipsecPolicies?: pulumi.Input<pulumi.Input<types.inputs.IpsecPolicyArgs>[]>;
    /**
     * The reference to local network gateway resource.
     */
    localNetworkGateway2?: pulumi.Input<types.inputs.LocalNetworkGatewayArgs>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The reference to peerings resource.
     */
    peer?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The routing weight.
     */
    routingWeight?: pulumi.Input<number>;
    /**
     * The IPSec shared key.
     */
    sharedKey?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The Traffic Selector Policies to be considered by this connection.
     */
    trafficSelectorPolicies?: pulumi.Input<pulumi.Input<types.inputs.TrafficSelectorPolicyArgs>[]>;
    /**
     * Use private local Azure IP for the connection.
     */
    useLocalAzureIpAddress?: pulumi.Input<boolean>;
    /**
     * Enable policy-based traffic selectors.
     */
    usePolicyBasedTrafficSelectors?: pulumi.Input<boolean>;
    /**
     * The reference to virtual network gateway resource.
     */
    virtualNetworkGateway1: pulumi.Input<types.inputs.VirtualNetworkGatewayArgs>;
    /**
     * The reference to virtual network gateway resource.
     */
    virtualNetworkGateway2?: pulumi.Input<types.inputs.VirtualNetworkGatewayArgs>;
    /**
     * The name of the virtual network gateway connection.
     */
    virtualNetworkGatewayConnectionName?: pulumi.Input<string>;
}