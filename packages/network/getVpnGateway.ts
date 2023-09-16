import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the details of a virtual wan vpn gateway.
 * Azure REST API version: 2023-02-01.
 */
export function getVpnGateway(args: GetVpnGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetVpnGatewayResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getVpnGateway", {
        "gatewayName": args.gatewayName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetVpnGatewayArgs {
    /**
     * The name of the gateway.
     */
    gatewayName: string;
    /**
     * The resource group name of the VpnGateway.
     */
    resourceGroupName: string;
}

/**
 * VpnGateway Resource.
 */
export interface GetVpnGatewayResult {
    /**
     * Local network gateway's BGP speaker settings.
     */
    readonly bgpSettings?: types.outputs.network.BgpSettingsResponse;
    /**
     * List of all vpn connections to the gateway.
     */
    readonly connections?: types.outputs.network.VpnConnectionResponse[];
    /**
     * Enable BGP routes translation for NAT on this VpnGateway.
     */
    readonly enableBgpRouteTranslationForNat?: boolean;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * List of all IPs configured on the gateway.
     */
    readonly ipConfigurations: types.outputs.network.VpnGatewayIpConfigurationResponse[];
    /**
     * Enable Routing Preference property for the Public IP Interface of the VpnGateway.
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
     * List of all the nat Rules associated with the gateway.
     */
    readonly natRules?: types.outputs.network.VpnGatewayNatRuleResponse[];
    /**
     * The provisioning state of the VPN gateway resource.
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
    readonly virtualHub?: types.outputs.network.SubResourceResponse;
    /**
     * The scale unit for this vpn gateway.
     */
    readonly vpnGatewayScaleUnit?: number;
}
/**
 * Retrieves the details of a virtual wan vpn gateway.
 * Azure REST API version: 2023-02-01.
 */
export function getVpnGatewayOutput(args: GetVpnGatewayOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVpnGatewayResult> {
    return pulumi.output(args).apply((a: any) => getVpnGateway(a, opts))
}

export interface GetVpnGatewayOutputArgs {
    /**
     * The name of the gateway.
     */
    gatewayName: pulumi.Input<string>;
    /**
     * The resource group name of the VpnGateway.
     */
    resourceGroupName: pulumi.Input<string>;
}
