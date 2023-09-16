import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about a private endpoint connection under a disk access resource.
 * Azure REST API version: 2022-07-02.
 */
export function getDiskAccessAPrivateEndpointConnection(args: GetDiskAccessAPrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetDiskAccessAPrivateEndpointConnectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:compute:getDiskAccessAPrivateEndpointConnection", {
        "diskAccessName": args.diskAccessName,
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDiskAccessAPrivateEndpointConnectionArgs {
    /**
     * The name of the disk access resource that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
     */
    diskAccessName: string;
    /**
     * The name of the private endpoint connection.
     */
    privateEndpointConnectionName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The Private Endpoint Connection resource.
 */
export interface GetDiskAccessAPrivateEndpointConnectionResult {
    /**
     * private endpoint connection Id
     */
    readonly id: string;
    /**
     * private endpoint connection name
     */
    readonly name: string;
    /**
     * The resource of private end point.
     */
    readonly privateEndpoint: types.outputs.compute.PrivateEndpointResponse;
    /**
     * A collection of information about the state of the connection between DiskAccess and Virtual Network.
     */
    readonly privateLinkServiceConnectionState: types.outputs.compute.PrivateLinkServiceConnectionStateResponse;
    /**
     * The provisioning state of the private endpoint connection resource.
     */
    readonly provisioningState: string;
    /**
     * private endpoint connection type
     */
    readonly type: string;
}
/**
 * Gets information about a private endpoint connection under a disk access resource.
 * Azure REST API version: 2022-07-02.
 */
export function getDiskAccessAPrivateEndpointConnectionOutput(args: GetDiskAccessAPrivateEndpointConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDiskAccessAPrivateEndpointConnectionResult> {
    return pulumi.output(args).apply((a: any) => getDiskAccessAPrivateEndpointConnection(a, opts))
}

export interface GetDiskAccessAPrivateEndpointConnectionOutputArgs {
    /**
     * The name of the disk access resource that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
     */
    diskAccessName: pulumi.Input<string>;
    /**
     * The name of the private endpoint connection.
     */
    privateEndpointConnectionName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
