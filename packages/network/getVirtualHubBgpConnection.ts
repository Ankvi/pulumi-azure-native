import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the details of a Virtual Hub Bgp Connection.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getVirtualHubBgpConnection(args: GetVirtualHubBgpConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualHubBgpConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getVirtualHubBgpConnection", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
    readonly hubVirtualNetworkConnection?: types.outputs.SubResourceResponse;
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
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getVirtualHubBgpConnectionOutput(args: GetVirtualHubBgpConnectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVirtualHubBgpConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getVirtualHubBgpConnection", {
        "connectionName": args.connectionName,
        "resourceGroupName": args.resourceGroupName,
        "virtualHubName": args.virtualHubName,
    }, opts);
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