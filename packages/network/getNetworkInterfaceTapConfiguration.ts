import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the specified tap configuration on a network interface.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01.
 */
export function getNetworkInterfaceTapConfiguration(args: GetNetworkInterfaceTapConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkInterfaceTapConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getNetworkInterfaceTapConfiguration", {
        "networkInterfaceName": args.networkInterfaceName,
        "resourceGroupName": args.resourceGroupName,
        "tapConfigurationName": args.tapConfigurationName,
    }, opts);
}

export interface GetNetworkInterfaceTapConfigurationArgs {
    /**
     * The name of the network interface.
     */
    networkInterfaceName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the tap configuration.
     */
    tapConfigurationName: string;
}

/**
 * Tap configuration in a Network Interface.
 */
export interface GetNetworkInterfaceTapConfigurationResult {
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
     * The provisioning state of the network interface tap configuration resource.
     */
    readonly provisioningState: string;
    /**
     * Sub Resource type.
     */
    readonly type: string;
    /**
     * The reference to the Virtual Network Tap resource.
     */
    readonly virtualNetworkTap?: types.outputs.VirtualNetworkTapResponse;
}
/**
 * Get the specified tap configuration on a network interface.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01.
 */
export function getNetworkInterfaceTapConfigurationOutput(args: GetNetworkInterfaceTapConfigurationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkInterfaceTapConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getNetworkInterfaceTapConfiguration", {
        "networkInterfaceName": args.networkInterfaceName,
        "resourceGroupName": args.resourceGroupName,
        "tapConfigurationName": args.tapConfigurationName,
    }, opts);
}

export interface GetNetworkInterfaceTapConfigurationOutputArgs {
    /**
     * The name of the network interface.
     */
    networkInterfaceName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the tap configuration.
     */
    tapConfigurationName: pulumi.Input<string>;
}