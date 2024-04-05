import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the running status of the Network Interface.
 */
export function getNetworkInterfaceStatus(args: GetNetworkInterfaceStatusArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkInterfaceStatusResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetworkfabric/v20230201preview:getNetworkInterfaceStatus", {
        "networkDeviceName": args.networkDeviceName,
        "networkInterfaceName": args.networkInterfaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkInterfaceStatusArgs {
    /**
     * Name of the NetworkDevice.
     */
    networkDeviceName: string;
    /**
     * Name of the NetworkInterface
     */
    networkInterfaceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Interface running status properties
 */
export interface GetNetworkInterfaceStatusResult {
    /**
     * The interface administrative state.
     */
    readonly administrativeState: string;
    /**
     * Connected to ARM resource or external interface
     */
    readonly connectedTo?: string;
    /**
     * The interface operational status.
     */
    readonly operationalStatus?: string;
    /**
     * The physical status.
     */
    readonly phyStatus?: string;
    /**
     * The interface transceiver type. Example: up or down
     */
    readonly transceiverStatus?: string;
}
/**
 * Get the running status of the Network Interface.
 */
export function getNetworkInterfaceStatusOutput(args: GetNetworkInterfaceStatusOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkInterfaceStatusResult> {
    return pulumi.output(args).apply((a: any) => getNetworkInterfaceStatus(a, opts))
}

export interface GetNetworkInterfaceStatusOutputArgs {
    /**
     * Name of the NetworkDevice.
     */
    networkDeviceName: pulumi.Input<string>;
    /**
     * Name of the NetworkInterface
     */
    networkInterfaceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}