import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified virtual network tap.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export function getVirtualNetworkTap(args: GetVirtualNetworkTapArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualNetworkTapResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getVirtualNetworkTap", {
        "resourceGroupName": args.resourceGroupName,
        "tapName": args.tapName,
    }, opts);
}

export interface GetVirtualNetworkTapArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of virtual network tap.
     */
    tapName: string;
}

/**
 * Virtual Network Tap resource.
 */
export interface GetVirtualNetworkTapResult {
    /**
     * The reference to the private IP address on the internal Load Balancer that will receive the tap.
     */
    readonly destinationLoadBalancerFrontEndIPConfiguration?: types.outputs.FrontendIPConfigurationResponse;
    /**
     * The reference to the private IP Address of the collector nic that will receive the tap.
     */
    readonly destinationNetworkInterfaceIPConfiguration?: types.outputs.NetworkInterfaceIPConfigurationResponse;
    /**
     * The VXLAN destination port that will receive the tapped traffic.
     */
    readonly destinationPort?: number;
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
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Specifies the list of resource IDs for the network interface IP configuration that needs to be tapped.
     */
    readonly networkInterfaceTapConfigurations: types.outputs.NetworkInterfaceTapConfigurationResponse[];
    /**
     * The provisioning state of the virtual network tap resource.
     */
    readonly provisioningState: string;
    /**
     * The resource GUID property of the virtual network tap resource.
     */
    readonly resourceGuid: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets information about the specified virtual network tap.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export function getVirtualNetworkTapOutput(args: GetVirtualNetworkTapOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVirtualNetworkTapResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getVirtualNetworkTap", {
        "resourceGroupName": args.resourceGroupName,
        "tapName": args.tapName,
    }, opts);
}

export interface GetVirtualNetworkTapOutputArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of virtual network tap.
     */
    tapName: pulumi.Input<string>;
}