import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * VpnConnection Resource.
 * Azure REST API version: 2023-02-01. Prior API version in Azure Native 1.x: 2020-11-01.
 *
 * Other available API versions: 2018-04-01, 2018-07-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01.
 */
export class VpnConnection extends pulumi.CustomResource {
    /**
     * Get an existing VpnConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VpnConnection {
        return new VpnConnection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:VpnConnection';

    /**
     * Returns true if the given object is an instance of VpnConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VpnConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VpnConnection.__pulumiType;
    }

    /**
     * Expected bandwidth in MBPS.
     */
    public readonly connectionBandwidth!: pulumi.Output<number | undefined>;
    /**
     * The connection status.
     */
    public /*out*/ readonly connectionStatus!: pulumi.Output<string>;
    /**
     * DPD timeout in seconds for vpn connection.
     */
    public readonly dpdTimeoutSeconds!: pulumi.Output<number | undefined>;
    /**
     * Egress bytes transferred.
     */
    public /*out*/ readonly egressBytesTransferred!: pulumi.Output<number>;
    /**
     * EnableBgp flag.
     */
    public readonly enableBgp!: pulumi.Output<boolean | undefined>;
    /**
     * Enable internet security.
     */
    public readonly enableInternetSecurity!: pulumi.Output<boolean | undefined>;
    /**
     * EnableBgp flag.
     */
    public readonly enableRateLimiting!: pulumi.Output<boolean | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Ingress bytes transferred.
     */
    public /*out*/ readonly ingressBytesTransferred!: pulumi.Output<number>;
    /**
     * The IPSec Policies to be considered by this connection.
     */
    public readonly ipsecPolicies!: pulumi.Output<types.outputs.IpsecPolicyResponse[] | undefined>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the VPN connection resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Id of the connected vpn site.
     */
    public readonly remoteVpnSite!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * The Routing Configuration indicating the associated and propagated route tables on this connection.
     */
    public readonly routingConfiguration!: pulumi.Output<types.outputs.RoutingConfigurationResponse | undefined>;
    /**
     * Routing weight for vpn connection.
     */
    public readonly routingWeight!: pulumi.Output<number | undefined>;
    /**
     * SharedKey for the vpn connection.
     */
    public readonly sharedKey!: pulumi.Output<string | undefined>;
    /**
     * The Traffic Selector Policies to be considered by this connection.
     */
    public readonly trafficSelectorPolicies!: pulumi.Output<types.outputs.TrafficSelectorPolicyResponse[] | undefined>;
    /**
     * Use local azure ip to initiate connection.
     */
    public readonly useLocalAzureIpAddress!: pulumi.Output<boolean | undefined>;
    /**
     * Enable policy-based traffic selectors.
     */
    public readonly usePolicyBasedTrafficSelectors!: pulumi.Output<boolean | undefined>;
    /**
     * Connection protocol used for this connection.
     */
    public readonly vpnConnectionProtocolType!: pulumi.Output<string | undefined>;
    /**
     * List of all vpn site link connections to the gateway.
     */
    public readonly vpnLinkConnections!: pulumi.Output<types.outputs.VpnSiteLinkConnectionResponse[] | undefined>;

    /**
     * Create a VpnConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpnConnectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.gatewayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'gatewayName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["connectionBandwidth"] = args ? args.connectionBandwidth : undefined;
            resourceInputs["connectionName"] = args ? args.connectionName : undefined;
            resourceInputs["dpdTimeoutSeconds"] = args ? args.dpdTimeoutSeconds : undefined;
            resourceInputs["enableBgp"] = args ? args.enableBgp : undefined;
            resourceInputs["enableInternetSecurity"] = args ? args.enableInternetSecurity : undefined;
            resourceInputs["enableRateLimiting"] = args ? args.enableRateLimiting : undefined;
            resourceInputs["gatewayName"] = args ? args.gatewayName : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["ipsecPolicies"] = args ? args.ipsecPolicies : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["remoteVpnSite"] = args ? args.remoteVpnSite : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["routingConfiguration"] = args ? args.routingConfiguration : undefined;
            resourceInputs["routingWeight"] = args ? args.routingWeight : undefined;
            resourceInputs["sharedKey"] = args ? args.sharedKey : undefined;
            resourceInputs["trafficSelectorPolicies"] = args ? args.trafficSelectorPolicies : undefined;
            resourceInputs["useLocalAzureIpAddress"] = args ? args.useLocalAzureIpAddress : undefined;
            resourceInputs["usePolicyBasedTrafficSelectors"] = args ? args.usePolicyBasedTrafficSelectors : undefined;
            resourceInputs["vpnConnectionProtocolType"] = args ? args.vpnConnectionProtocolType : undefined;
            resourceInputs["vpnLinkConnections"] = args ? args.vpnLinkConnections : undefined;
            resourceInputs["connectionStatus"] = undefined /*out*/;
            resourceInputs["egressBytesTransferred"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["ingressBytesTransferred"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
        } else {
            resourceInputs["connectionBandwidth"] = undefined /*out*/;
            resourceInputs["connectionStatus"] = undefined /*out*/;
            resourceInputs["dpdTimeoutSeconds"] = undefined /*out*/;
            resourceInputs["egressBytesTransferred"] = undefined /*out*/;
            resourceInputs["enableBgp"] = undefined /*out*/;
            resourceInputs["enableInternetSecurity"] = undefined /*out*/;
            resourceInputs["enableRateLimiting"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["ingressBytesTransferred"] = undefined /*out*/;
            resourceInputs["ipsecPolicies"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["remoteVpnSite"] = undefined /*out*/;
            resourceInputs["routingConfiguration"] = undefined /*out*/;
            resourceInputs["routingWeight"] = undefined /*out*/;
            resourceInputs["sharedKey"] = undefined /*out*/;
            resourceInputs["trafficSelectorPolicies"] = undefined /*out*/;
            resourceInputs["useLocalAzureIpAddress"] = undefined /*out*/;
            resourceInputs["usePolicyBasedTrafficSelectors"] = undefined /*out*/;
            resourceInputs["vpnConnectionProtocolType"] = undefined /*out*/;
            resourceInputs["vpnLinkConnections"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20180401:VpnConnection" }, { type: "azure-native:network/v20180601:VpnConnection" }, { type: "azure-native:network/v20180701:VpnConnection" }, { type: "azure-native:network/v20180801:VpnConnection" }, { type: "azure-native:network/v20181001:VpnConnection" }, { type: "azure-native:network/v20181101:VpnConnection" }, { type: "azure-native:network/v20181201:VpnConnection" }, { type: "azure-native:network/v20190201:VpnConnection" }, { type: "azure-native:network/v20190401:VpnConnection" }, { type: "azure-native:network/v20190601:VpnConnection" }, { type: "azure-native:network/v20190701:VpnConnection" }, { type: "azure-native:network/v20190801:VpnConnection" }, { type: "azure-native:network/v20190901:VpnConnection" }, { type: "azure-native:network/v20191101:VpnConnection" }, { type: "azure-native:network/v20191201:VpnConnection" }, { type: "azure-native:network/v20200301:VpnConnection" }, { type: "azure-native:network/v20200401:VpnConnection" }, { type: "azure-native:network/v20200501:VpnConnection" }, { type: "azure-native:network/v20200601:VpnConnection" }, { type: "azure-native:network/v20200701:VpnConnection" }, { type: "azure-native:network/v20200801:VpnConnection" }, { type: "azure-native:network/v20201101:VpnConnection" }, { type: "azure-native:network/v20210201:VpnConnection" }, { type: "azure-native:network/v20210301:VpnConnection" }, { type: "azure-native:network/v20210501:VpnConnection" }, { type: "azure-native:network/v20210801:VpnConnection" }, { type: "azure-native:network/v20220101:VpnConnection" }, { type: "azure-native:network/v20220501:VpnConnection" }, { type: "azure-native:network/v20220701:VpnConnection" }, { type: "azure-native:network/v20220901:VpnConnection" }, { type: "azure-native:network/v20221101:VpnConnection" }, { type: "azure-native:network/v20230201:VpnConnection" }, { type: "azure-native:network/v20230401:VpnConnection" }, { type: "azure-native:network/v20230501:VpnConnection" }, { type: "azure-native:network/v20230601:VpnConnection" }, { type: "azure-native:network/v20230901:VpnConnection" }, { type: "azure-native:network/v20231101:VpnConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VpnConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VpnConnection resource.
 */
export interface VpnConnectionArgs {
    /**
     * Expected bandwidth in MBPS.
     */
    connectionBandwidth?: pulumi.Input<number>;
    /**
     * The name of the connection.
     */
    connectionName?: pulumi.Input<string>;
    /**
     * DPD timeout in seconds for vpn connection.
     */
    dpdTimeoutSeconds?: pulumi.Input<number>;
    /**
     * EnableBgp flag.
     */
    enableBgp?: pulumi.Input<boolean>;
    /**
     * Enable internet security.
     */
    enableInternetSecurity?: pulumi.Input<boolean>;
    /**
     * EnableBgp flag.
     */
    enableRateLimiting?: pulumi.Input<boolean>;
    /**
     * The name of the gateway.
     */
    gatewayName: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The IPSec Policies to be considered by this connection.
     */
    ipsecPolicies?: pulumi.Input<pulumi.Input<types.inputs.IpsecPolicyArgs>[]>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Id of the connected vpn site.
     */
    remoteVpnSite?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * The resource group name of the VpnGateway.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Routing Configuration indicating the associated and propagated route tables on this connection.
     */
    routingConfiguration?: pulumi.Input<types.inputs.RoutingConfigurationArgs>;
    /**
     * Routing weight for vpn connection.
     */
    routingWeight?: pulumi.Input<number>;
    /**
     * SharedKey for the vpn connection.
     */
    sharedKey?: pulumi.Input<string>;
    /**
     * The Traffic Selector Policies to be considered by this connection.
     */
    trafficSelectorPolicies?: pulumi.Input<pulumi.Input<types.inputs.TrafficSelectorPolicyArgs>[]>;
    /**
     * Use local azure ip to initiate connection.
     */
    useLocalAzureIpAddress?: pulumi.Input<boolean>;
    /**
     * Enable policy-based traffic selectors.
     */
    usePolicyBasedTrafficSelectors?: pulumi.Input<boolean>;
    /**
     * Connection protocol used for this connection.
     */
    vpnConnectionProtocolType?: pulumi.Input<string | types.enums.VirtualNetworkGatewayConnectionProtocol>;
    /**
     * List of all vpn site link connections to the gateway.
     */
    vpnLinkConnections?: pulumi.Input<pulumi.Input<types.inputs.VpnSiteLinkConnectionArgs>[]>;
}