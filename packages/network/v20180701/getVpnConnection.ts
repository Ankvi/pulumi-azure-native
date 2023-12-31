import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the details of a vpn connection.
 */
export function getVpnConnection(args: GetVpnConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetVpnConnectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20180701:getVpnConnection", {
        "connectionName": args.connectionName,
        "gatewayName": args.gatewayName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetVpnConnectionArgs {
    /**
     * The name of the vpn connection.
     */
    connectionName: string;
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
 * VpnConnection Resource.
 */
export interface GetVpnConnectionResult {
    /**
     * Expected bandwidth in MBPS.
     */
    readonly connectionBandwidthInMbps: number;
    /**
     * The connection status.
     */
    readonly connectionStatus: string;
    /**
     * Egress bytes transferred.
     */
    readonly egressBytesTransferred: number;
    /**
     * EnableBgp flag
     */
    readonly enableBgp?: boolean;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * Ingress bytes transferred.
     */
    readonly ingressBytesTransferred: number;
    /**
     * The IPSec Policies to be considered by this connection.
     */
    readonly ipsecPolicies?: types.outputs.IpsecPolicyResponse[];
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Id of the connected vpn site.
     */
    readonly remoteVpnSite?: types.outputs.SubResourceResponse;
    /**
     * routing weight for vpn connection.
     */
    readonly routingWeight?: number;
    /**
     * SharedKey for the vpn connection.
     */
    readonly sharedKey?: string;
}
/**
 * Retrieves the details of a vpn connection.
 */
export function getVpnConnectionOutput(args: GetVpnConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVpnConnectionResult> {
    return pulumi.output(args).apply((a: any) => getVpnConnection(a, opts))
}

export interface GetVpnConnectionOutputArgs {
    /**
     * The name of the vpn connection.
     */
    connectionName: pulumi.Input<string>;
    /**
     * The name of the gateway.
     */
    gatewayName: pulumi.Input<string>;
    /**
     * The resource group name of the VpnGateway.
     */
    resourceGroupName: pulumi.Input<string>;
}
