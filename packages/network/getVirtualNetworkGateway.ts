import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified virtual network gateway by resource group.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2016-06-01, 2016-09-01, 2019-08-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01.
 */
export function getVirtualNetworkGateway(args: GetVirtualNetworkGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualNetworkGatewayResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getVirtualNetworkGateway", {
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworkGatewayName": args.virtualNetworkGatewayName,
    }, opts);
}

export interface GetVirtualNetworkGatewayArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the virtual network gateway.
     */
    virtualNetworkGatewayName: string;
}

/**
 * A common class for general resource information.
 */
export interface GetVirtualNetworkGatewayResult {
    /**
     * ActiveActive flag.
     */
    readonly activeActive?: boolean;
    /**
     * Property to indicate if the Express Route Gateway serves traffic when there are multiple Express Route Gateways in the vnet
     */
    readonly adminState?: string;
    /**
     * Configure this gateway to accept traffic from other Azure Virtual Networks. This configuration does not support connectivity to Azure Virtual WAN.
     */
    readonly allowRemoteVnetTraffic?: boolean;
    /**
     * Configures this gateway to accept traffic from remote Virtual WAN networks.
     */
    readonly allowVirtualWanTraffic?: boolean;
    /**
     * Virtual network gateway's BGP speaker settings.
     */
    readonly bgpSettings?: types.outputs.BgpSettingsResponse;
    /**
     * The reference to the address space resource which represents the custom routes address space specified by the customer for virtual network gateway and VpnClient.
     */
    readonly customRoutes?: types.outputs.AddressSpaceResponse;
    /**
     * disableIPSecReplayProtection flag.
     */
    readonly disableIPSecReplayProtection?: boolean;
    /**
     * Whether BGP is enabled for this virtual network gateway or not.
     */
    readonly enableBgp?: boolean;
    /**
     * EnableBgpRouteTranslationForNat flag.
     */
    readonly enableBgpRouteTranslationForNat?: boolean;
    /**
     * Whether dns forwarding is enabled or not.
     */
    readonly enableDnsForwarding?: boolean;
    /**
     * Whether private IP needs to be enabled on this gateway for connections or not.
     */
    readonly enablePrivateIpAddress?: boolean;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * The extended location of type local virtual network gateway.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * The reference to the LocalNetworkGateway resource which represents local network site having default routes. Assign Null value in case of removing existing default site setting.
     */
    readonly gatewayDefaultSite?: types.outputs.SubResourceResponse;
    /**
     * The type of this virtual network gateway.
     */
    readonly gatewayType?: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * The IP address allocated by the gateway to which dns requests can be sent.
     */
    readonly inboundDnsForwardingEndpoint: string;
    /**
     * IP configurations for virtual network gateway.
     */
    readonly ipConfigurations?: types.outputs.VirtualNetworkGatewayIPConfigurationResponse[];
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * NatRules for virtual network gateway.
     */
    readonly natRules?: types.outputs.VirtualNetworkGatewayNatRuleResponse[];
    /**
     * The provisioning state of the virtual network gateway resource.
     */
    readonly provisioningState: string;
    /**
     * The resource GUID property of the virtual network gateway resource.
     */
    readonly resourceGuid: string;
    /**
     * The reference to the VirtualNetworkGatewaySku resource which represents the SKU selected for Virtual network gateway.
     */
    readonly sku?: types.outputs.VirtualNetworkGatewaySkuResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * Customer vnet resource id. VirtualNetworkGateway of type local gateway is associated with the customer vnet.
     */
    readonly vNetExtendedLocationResourceId?: string;
    /**
     * The reference to the VirtualNetworkGatewayPolicyGroup resource which represents the available VirtualNetworkGatewayPolicyGroup for the gateway.
     */
    readonly virtualNetworkGatewayPolicyGroups?: types.outputs.VirtualNetworkGatewayPolicyGroupResponse[];
    /**
     * The reference to the VpnClientConfiguration resource which represents the P2S VpnClient configurations.
     */
    readonly vpnClientConfiguration?: types.outputs.VpnClientConfigurationResponse;
    /**
     * The generation for this VirtualNetworkGateway. Must be None if gatewayType is not VPN.
     */
    readonly vpnGatewayGeneration?: string;
    /**
     * The type of this virtual network gateway.
     */
    readonly vpnType?: string;
}
/**
 * Gets the specified virtual network gateway by resource group.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2016-06-01, 2016-09-01, 2019-08-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01.
 */
export function getVirtualNetworkGatewayOutput(args: GetVirtualNetworkGatewayOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualNetworkGatewayResult> {
    return pulumi.output(args).apply((a: any) => getVirtualNetworkGateway(a, opts))
}

export interface GetVirtualNetworkGatewayOutputArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the virtual network gateway.
     */
    virtualNetworkGatewayName: pulumi.Input<string>;
}