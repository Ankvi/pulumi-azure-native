import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified virtual network gateway by resource group.
 */
export function getVirtualNetworkGateway(args: GetVirtualNetworkGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualNetworkGatewayResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20190801:getVirtualNetworkGateway", {
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
     * Virtual network gateway's BGP speaker settings.
     */
    readonly bgpSettings?: types.outputs.BgpSettingsResponse;
    /**
     * The reference of the address space resource which represents the custom routes address space specified by the customer for virtual network gateway and VpnClient.
     */
    readonly customRoutes?: types.outputs.AddressSpaceResponse;
    /**
     * Whether BGP is enabled for this virtual network gateway or not.
     */
    readonly enableBgp?: boolean;
    /**
     * Whether dns forwarding is enabled or not.
     */
    readonly enableDnsForwarding?: boolean;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: string;
    /**
     * The reference of the LocalNetworkGateway resource which represents local network site having default routes. Assign Null value in case of removing existing default site setting.
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
     * The provisioning state of the virtual network gateway resource.
     */
    readonly provisioningState: string;
    /**
     * The resource GUID property of the virtual network gateway resource.
     */
    readonly resourceGuid?: string;
    /**
     * The reference of the VirtualNetworkGatewaySku resource which represents the SKU selected for Virtual network gateway.
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
     * The reference of the VpnClientConfiguration resource which represents the P2S VpnClient configurations.
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