import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the details of a virtual wan p2s vpn gateway.
 */
export function getP2sVpnGateway(args: GetP2sVpnGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetP2sVpnGatewayResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230201:getP2sVpnGateway", {
        "gatewayName": args.gatewayName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetP2sVpnGatewayArgs {
    /**
     * The name of the gateway.
     */
    gatewayName: string;
    /**
     * The resource group name of the P2SVpnGateway.
     */
    resourceGroupName: string;
}

/**
 * P2SVpnGateway Resource.
 */
export interface GetP2sVpnGatewayResult {
    /**
     * List of all customer specified DNS servers IP addresses.
     */
    readonly customDnsServers?: string[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * Enable Routing Preference property for the Public IP Interface of the P2SVpnGateway.
     */
    readonly isRoutingPreferenceInternet?: boolean;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * List of all p2s connection configurations of the gateway.
     */
    readonly p2SConnectionConfigurations?: types.outputs.P2SConnectionConfigurationResponse[];
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
     * All P2S VPN clients' connection health status.
     */
    readonly vpnClientConnectionHealth: types.outputs.VpnClientConnectionHealthResponse;
    /**
     * The scale unit for this p2s vpn gateway.
     */
    readonly vpnGatewayScaleUnit?: number;
    /**
     * The VpnServerConfiguration to which the p2sVpnGateway is attached to.
     */
    readonly vpnServerConfiguration?: types.outputs.SubResourceResponse;
}
/**
 * Retrieves the details of a virtual wan p2s vpn gateway.
 */
export function getP2sVpnGatewayOutput(args: GetP2sVpnGatewayOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetP2sVpnGatewayResult> {
    return pulumi.output(args).apply((a: any) => getP2sVpnGateway(a, opts))
}

export interface GetP2sVpnGatewayOutputArgs {
    /**
     * The name of the gateway.
     */
    gatewayName: pulumi.Input<string>;
    /**
     * The resource group name of the P2SVpnGateway.
     */
    resourceGroupName: pulumi.Input<string>;
}