import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the Network Device resource details.
 *
 * Uses Azure REST API version 2023-06-15.
 *
 * Other available API versions: 2023-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native managednetworkfabric [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * Name of the Network Device.
     */
    networkDeviceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The Network Device resource definition.
 */
export interface GetNetworkDeviceResult {
    /**
     * Administrative state of the resource.
     */
    readonly administrativeState: string;
    /**
     * Switch configuration description.
     */
    readonly annotation?: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Configuration state of the resource.
     */
    readonly configurationState: string;
    /**
     * The host name of the device.
     */
    readonly hostName?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Management IPv4 Address.
     */
    readonly managementIpv4Address: string;
    /**
     * Management IPv6 Address.
     */
    readonly managementIpv6Address: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * NetworkDeviceRole is the device role: Example: CE | ToR.
     */
    readonly networkDeviceRole: string;
    /**
     * Network Device SKU name.
     */
    readonly networkDeviceSku?: string;
    /**
     * Reference to network rack resource id.
     */
    readonly networkRackId: string;
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Serial number of the device. Format of serial Number - Make;Model;HardwareRevisionId;SerialNumber.
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
 * Gets the Network Device resource details.
 *
 * Uses Azure REST API version 2023-06-15.
 *
 * Other available API versions: 2023-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native managednetworkfabric [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * Name of the Network Device.
     */
    networkDeviceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}