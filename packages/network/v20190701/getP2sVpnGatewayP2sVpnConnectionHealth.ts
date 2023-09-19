import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the connection health of P2S clients of the virtual wan P2SVpnGateway in the specified resource group.
 */
export function getP2sVpnGatewayP2sVpnConnectionHealth(args: GetP2sVpnGatewayP2sVpnConnectionHealthArgs, opts?: pulumi.InvokeOptions): Promise<GetP2sVpnGatewayP2sVpnConnectionHealthResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20190701:getP2sVpnGatewayP2sVpnConnectionHealth", {
        "gatewayName": args.gatewayName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetP2sVpnGatewayP2sVpnConnectionHealthArgs {
    /**
     * The name of the P2SVpnGateway.
     */
    gatewayName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * P2SVpnGateway Resource.
 */
export interface GetP2sVpnGatewayP2sVpnConnectionHealthResult {
    /**
     * The reference of the address space resource which represents the custom routes specified by the customer for P2SVpnGateway and P2S VpnClient.
     */
    readonly customRoutes?: types.outputs.AddressSpaceResponse;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The P2SVpnServerConfiguration to which the p2sVpnGateway is attached to.
     */
    readonly p2SVpnServerConfiguration?: types.outputs.SubResourceResponse;
    /**
     * The provisioning state of the P2S VPN gateway resource.
     */
    readonly provisioningState: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * The VirtualHub to which the gateway belongs.
     */
    readonly virtualHub?: types.outputs.SubResourceResponse;
    /**
     * The reference of the address space resource which represents Address space for P2S VpnClient.
     */
    readonly vpnClientAddressPool?: types.outputs.AddressSpaceResponse;
    /**
     * All P2S VPN clients' connection health status.
     */
    readonly vpnClientConnectionHealth: types.outputs.VpnClientConnectionHealthResponse;
    /**
     * The scale unit for this p2s vpn gateway.
     */
    readonly vpnGatewayScaleUnit?: number;
}
/**
 * Gets the connection health of P2S clients of the virtual wan P2SVpnGateway in the specified resource group.
 */
export function getP2sVpnGatewayP2sVpnConnectionHealthOutput(args: GetP2sVpnGatewayP2sVpnConnectionHealthOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetP2sVpnGatewayP2sVpnConnectionHealthResult> {
    return pulumi.output(args).apply((a: any) => getP2sVpnGatewayP2sVpnConnectionHealth(a, opts))
}

export interface GetP2sVpnGatewayP2sVpnConnectionHealthOutputArgs {
    /**
     * The name of the P2SVpnGateway.
     */
    gatewayName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
