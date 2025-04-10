import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the Network Device resource details.
 *
 * Uses Azure REST API version 2023-02-01-preview.
 *
 * Other available API versions: 2023-06-15.
 */
export function getNetworkDevice(args: GetNetworkDeviceArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkDeviceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetworkfabric:getNetworkDevice", {
        "networkDeviceName": args.networkDeviceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkDeviceArgs {
    /**
     * Name of the Network Device
     */
    networkDeviceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The NetworkDevice resource definition.
 */
export interface GetNetworkDeviceResult {
    /**
     * Switch configuration description.
     */
    readonly annotation?: string;
    /**
     * The host Name of the device.
     */
    readonly hostName?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * networkDeviceRole is the device role: Example: CE | ToR.
     */
    readonly networkDeviceRole: string;
    /**
     * Network Device SKU name.
     */
    readonly networkDeviceSku: string;
    /**
     * Reference to network rack resource id.
     */
    readonly networkRackId: string;
    /**
     * Gets the provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * serialNumber of the format Make;Model;HardwareRevisionId;SerialNumber. Example: Arista;DCS-7280DR3-24;12.05;JPE21116969
     */
    readonly serialNumber: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Current version of the device as defined in SKU.
     */
    readonly version: string;
}
/**
 * Get the Network Device resource details.
 *
 * Uses Azure REST API version 2023-02-01-preview.
 *
 * Other available API versions: 2023-06-15.
 */
export function getNetworkDeviceOutput(args: GetNetworkDeviceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNetworkDeviceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:managednetworkfabric:getNetworkDevice", {
        "networkDeviceName": args.networkDeviceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkDeviceOutputArgs {
    /**
     * Name of the Network Device
     */
    networkDeviceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}