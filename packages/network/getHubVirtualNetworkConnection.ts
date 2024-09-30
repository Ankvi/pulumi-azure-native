import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the details of a HubVirtualNetworkConnection.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01.
 */
export function getHubVirtualNetworkConnection(args: GetHubVirtualNetworkConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetHubVirtualNetworkConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getHubVirtualNetworkConnection", {
        "connectionName": args.connectionName,
        "resourceGroupName": args.resourceGroupName,
        "virtualHubName": args.virtualHubName,
    }, opts);
}

export interface GetHubVirtualNetworkConnectionArgs {
    /**
     * The name of the vpn connection.
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
 * HubVirtualNetworkConnection Resource.
 */
export interface GetHubVirtualNetworkConnectionResult {
    /**
     * Deprecated: VirtualHub to RemoteVnet transit to enabled or not.
     */
    readonly allowHubToRemoteVnetTransit?: boolean;
    /**
     * Deprecated: Allow RemoteVnet to use Virtual Hub's gateways.
     */
    readonly allowRemoteVnetToUseHubVnetGateways?: boolean;
    /**
     * Enable internet security.
     */
    readonly enableInternetSecurity?: boolean;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * The provisioning state of the hub virtual network connection resource.
     */
    readonly provisioningState: string;
    /**
     * Reference to the remote virtual network.
     */
    readonly remoteVirtualNetwork?: types.outputs.SubResourceResponse;
    /**
     * The Routing Configuration indicating the associated and propagated route tables on this connection.
     */
    readonly routingConfiguration?: types.outputs.RoutingConfigurationResponse;
}
/**
 * Retrieves the details of a HubVirtualNetworkConnection.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01.
 */
export function getHubVirtualNetworkConnectionOutput(args: GetHubVirtualNetworkConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHubVirtualNetworkConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getHubVirtualNetworkConnection", {
        "connectionName": args.connectionName,
        "resourceGroupName": args.resourceGroupName,
        "virtualHubName": args.virtualHubName,
    }, opts);
}

export interface GetHubVirtualNetworkConnectionOutputArgs {
    /**
     * The name of the vpn connection.
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