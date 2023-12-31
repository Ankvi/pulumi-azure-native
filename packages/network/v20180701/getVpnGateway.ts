import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the details of a virtual wan vpn gateway.
 */
export function getVpnGateway(args: GetVpnGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetVpnGatewayResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20180701:getVpnGateway", {
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
    readonly bgpSettings?: types.outputs.BgpSettingsResponse;
    /**
     * list of all vpn connections to the gateway.
     */
    readonly connections?: types.outputs.VpnConnectionResponse[];
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
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
     * The policies applied to this vpn gateway.
     */
    readonly policies?: types.outputs.PoliciesResponse;
    /**
     * The provisioning state of the resource.
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
     * The VirtualHub to which the gateway belongs
     */
    readonly virtualHub?: types.outputs.SubResourceResponse;
}
/**
 * Retrieves the details of a virtual wan vpn gateway.
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
