import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A common class for general resource information.
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
    public static readonly __pulumiType = 'azure-native:network/v20190801:VirtualNetworkGatewayConnection';

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
     * The egress bytes transferred in this connection.
     */
    public /*out*/ readonly egressBytesTransferred!: pulumi.Output<number>;
    /**
     * EnableBgp flag.
     */
    public readonly enableBgp!: pulumi.Output<boolean | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * Bypass ExpressRoute Gateway for data forwarding.
     */
    public readonly expressRouteGatewayBypass!: pulumi.Output<boolean | undefined>;
    /**
     * The ingress bytes transferred in this connection.
     */
    public /*out*/ readonly ingressBytesTransferred!: pulumi.Output<number>;
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
    public readonly resourceGuid!: pulumi.Output<string | undefined>;
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
            resourceInputs["connectionProtocol"] = args ? args.connectionProtocol : undefined;
            resourceInputs["connectionType"] = args ? args.connectionType : undefined;
            resourceInputs["enableBgp"] = args ? args.enableBgp : undefined;
            resourceInputs["expressRouteGatewayBypass"] = args ? args.expressRouteGatewayBypass : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["ipsecPolicies"] = args ? args.ipsecPolicies : undefined;
            resourceInputs["localNetworkGateway2"] = args ? args.localNetworkGateway2 : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["peer"] = args ? args.peer : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceGuid"] = args ? args.resourceGuid : undefined;
            resourceInputs["routingWeight"] = args ? args.routingWeight : undefined;
            resourceInputs["sharedKey"] = args ? args.sharedKey : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["trafficSelectorPolicies"] = args ? args.trafficSelectorPolicies : undefined;
            resourceInputs["usePolicyBasedTrafficSelectors"] = args ? args.usePolicyBasedTrafficSelectors : undefined;
            resourceInputs["virtualNetworkGateway1"] = args ? args.virtualNetworkGateway1 : undefined;
            resourceInputs["virtualNetworkGateway2"] = args ? args.virtualNetworkGateway2 : undefined;
            resourceInputs["virtualNetworkGatewayConnectionName"] = args ? args.virtualNetworkGatewayConnectionName : undefined;
            resourceInputs["connectionStatus"] = undefined /*out*/;
            resourceInputs["egressBytesTransferred"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["ingressBytesTransferred"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["tunnelConnectionStatus"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["authorizationKey"] = undefined /*out*/;
            resourceInputs["connectionProtocol"] = undefined /*out*/;
            resourceInputs["connectionStatus"] = undefined /*out*/;
            resourceInputs["connectionType"] = undefined /*out*/;
            resourceInputs["egressBytesTransferred"] = undefined /*out*/;
            resourceInputs["enableBgp"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["expressRouteGatewayBypass"] = undefined /*out*/;
            resourceInputs["ingressBytesTransferred"] = undefined /*out*/;
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
            resourceInputs["usePolicyBasedTrafficSelectors"] = undefined /*out*/;
            resourceInputs["virtualNetworkGateway1"] = undefined /*out*/;
            resourceInputs["virtualNetworkGateway2"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20150615:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20160330:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20160601:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20160901:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20161201:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20170301:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20170601:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20170801:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20170901:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20171001:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20171101:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20180101:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20180201:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20180401:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20180601:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20180701:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20180801:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20181001:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20181101:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20181201:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20190201:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20190401:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20190601:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20190701:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20190901:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20191101:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20191201:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20200301:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20200401:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20200501:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20200601:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20200701:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20200801:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20201101:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20210201:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20210301:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20210501:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20210801:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20220101:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20220501:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20220701:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20220901:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20221101:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20230201:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20230401:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20230501:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20230601:VirtualNetworkGatewayConnection" }, { type: "azure-native:network/v20230901:VirtualNetworkGatewayConnection" }] };
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
     * Connection protocol used for this connection.
     */
    connectionProtocol?: pulumi.Input<string | types.enums.VirtualNetworkGatewayConnectionProtocol>;
    /**
     * Gateway connection type.
     */
    connectionType: pulumi.Input<string | types.enums.VirtualNetworkGatewayConnectionType>;
    /**
     * EnableBgp flag.
     */
    enableBgp?: pulumi.Input<boolean>;
    /**
     * Bypass ExpressRoute Gateway for data forwarding.
     */
    expressRouteGatewayBypass?: pulumi.Input<boolean>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
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
     * The resource GUID property of the virtual network gateway connection resource.
     */
    resourceGuid?: pulumi.Input<string>;
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