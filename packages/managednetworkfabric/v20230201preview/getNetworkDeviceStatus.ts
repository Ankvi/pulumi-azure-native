import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the running status of the Network Device.
 */
export function getNetworkDeviceStatus(args: GetNetworkDeviceStatusArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkDeviceStatusResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetworkfabric/v20230201preview:getNetworkDeviceStatus", {
        "networkDeviceName": args.networkDeviceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkDeviceStatusArgs {
    /**
     * Name of the NetworkDevice.
     */
    networkDeviceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Get Device status response properties.
 */
export interface GetNetworkDeviceStatusResult {
    /**
     * Primary or Secondary power end.
     */
    readonly operationalStatus: string;
    /**
     * On or Off power cycle state.
     */
    readonly powerCycleState: string;
    /**
     * The serial number of the device
     */
    readonly serialNumber: string;
}
/**
 * Get the running status of the Network Device.
 */
export function getNetworkDeviceStatusOutput(args: GetNetworkDeviceStatusOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkDeviceStatusResult> {
    return pulumi.output(args).apply((a: any) => getNetworkDeviceStatus(a, opts))
}

export interface GetNetworkDeviceStatusOutputArgs {
    /**
     * Name of the NetworkDevice.
     */
    networkDeviceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}