import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the running status of the Network Device.
 *
 * Uses Azure REST API version 2023-02-01-preview.
 */
export function getNetworkDeviceStatus(args: GetNetworkDeviceStatusArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkDeviceStatusResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetworkfabric:getNetworkDeviceStatus", {
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
 *
 * Uses Azure REST API version 2023-02-01-preview.
 */
export function getNetworkDeviceStatusOutput(args: GetNetworkDeviceStatusOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNetworkDeviceStatusResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:managednetworkfabric:getNetworkDeviceStatus", {
        "networkDeviceName": args.networkDeviceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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