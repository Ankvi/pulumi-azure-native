import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Retrieves the details of a Virtual Hub Bgp Connection.
 */
export function getVirtualHubBgpConnection(args: GetVirtualHubBgpConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualHubBgpConnectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230401:getVirtualHubBgpConnection", {
        "connectionName": args.connectionName,
        "resourceGroupName": args.resourceGroupName,
        "virtualHubName": args.virtualHubName,
    }, opts);
}

export interface GetVirtualHubBgpConnectionArgs {
    /**
     * The name of the connection.
     */
    connectionName: string;
    /**
     * The resource group name of the VirtualHub.
     */
    resourceGroupName: string;
    /**
     * The name of the VirtualHub.
     */
    virtualHubName: string;
}

/**
 * Virtual Appliance Site resource.
 */
export interface GetVirtualHubBgpConnectionResult {
    /**
     * The current state of the VirtualHub to Peer.
     */
    readonly connectionState: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * The reference to the HubVirtualNetworkConnection resource.
     */
    readonly hubVirtualNetworkConnection?: types.outputs.network.v20230401.SubResourceResponse;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * Name of the connection.
     */
    readonly name?: string;
    /**
     * Peer ASN.
     */
    readonly peerAsn?: number;
    /**
     * Peer IP.
     */
    readonly peerIp?: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Connection type.
     */
    readonly type: string;
}
/**
 * Retrieves the details of a Virtual Hub Bgp Connection.
 */
export function getVirtualHubBgpConnectionOutput(args: GetVirtualHubBgpConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualHubBgpConnectionResult> {
    return pulumi.output(args).apply((a: any) => getVirtualHubBgpConnection(a, opts))
}

export interface GetVirtualHubBgpConnectionOutputArgs {
    /**
     * The name of the connection.
     */
    connectionName: pulumi.Input<string>;
    /**
     * The resource group name of the VirtualHub.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the VirtualHub.
     */
    virtualHubName: pulumi.Input<string>;
}
