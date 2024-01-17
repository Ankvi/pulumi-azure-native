import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Implements VirtualNetwork GET method.
 * Azure REST API version: 2022-05-21-preview.
 *
 * Other available API versions: 2023-04-01-preview, 2023-10-07.
 */
export function getVirtualNetwork(args: GetVirtualNetworkArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualNetworkResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:scvmm:getVirtualNetwork", {
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworkName": args.virtualNetworkName,
    }, opts);
}

export interface GetVirtualNetworkArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * Name of the VirtualNetwork.
     */
    virtualNetworkName: string;
}

/**
 * The VirtualNetworks resource definition.
 */
export interface GetVirtualNetworkResult {
    /**
     * The extended location.
     */
    readonly extendedLocation: types.outputs.ExtendedLocationResponse;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Gets or sets the inventory Item ID for the resource.
     */
    readonly inventoryItemId?: string;
    /**
     * Gets or sets the location.
     */
    readonly location: string;
    /**
     * Resource Name
     */
    readonly name: string;
    /**
     * Name of the virtual network in vmmServer.
     */
    readonly networkName: string;
    /**
     * Gets or sets the provisioning state.
     */
    readonly provisioningState: string;
    /**
     * The system data.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource Type
     */
    readonly type: string;
    /**
     * Unique ID of the virtual network.
     */
    readonly uuid?: string;
    /**
     * ARM Id of the vmmServer resource in which this resource resides.
     */
    readonly vmmServerId?: string;
}
/**
 * Implements VirtualNetwork GET method.
 * Azure REST API version: 2022-05-21-preview.
 *
 * Other available API versions: 2023-04-01-preview, 2023-10-07.
 */
export function getVirtualNetworkOutput(args: GetVirtualNetworkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualNetworkResult> {
    return pulumi.output(args).apply((a: any) => getVirtualNetwork(a, opts))
}

export interface GetVirtualNetworkOutputArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the VirtualNetwork.
     */
    virtualNetworkName: pulumi.Input<string>;
}