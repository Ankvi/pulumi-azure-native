import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a Network Bootstrap Device resource details.
 *
 * Uses Azure REST API version 2025-07-15.
 */
export function getNetworkBootstrapDevice(args: GetNetworkBootstrapDeviceArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkBootstrapDeviceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetworkfabric:getNetworkBootstrapDevice", {
        "networkBootstrapDeviceName": args.networkBootstrapDeviceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkBootstrapDeviceArgs {
    /**
     * Name of the Network Bootstrap Device.
     */
    networkBootstrapDeviceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The Network Bootstrap Device resource definition.
 */
export interface GetNetworkBootstrapDeviceResult {
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
     * Dhcp server IPv4 Address.
     */
    readonly dhcpV4ServerIpAddress: string;
    /**
     * The host name of the device.
     */
    readonly hostName?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The managed service identities assigned to this resource.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Network Bootstrap Device SKU name.
     */
    readonly networkDeviceSku?: string;
    /**
     * Associated Network Fabric Resource ID
     */
    readonly networkFabricId: string;
    /**
     * Primary Management IPv4 Address.
     */
    readonly primaryManagementIpv4Address: string;
    /**
     * Primary Management IPv6 Address.
     */
    readonly primaryManagementIpv6Address: string;
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Secondary Management IPv4 Address.
     */
    readonly secondaryManagementIpv4Address: string;
    /**
     * Secondary Management IPv6 Address.
     */
    readonly secondaryManagementIpv6Address: string;
    /**
     * Serial number of the device. Format of serial Number - Make;Model;HardwareRevisionId;SerialNumber.
     */
    readonly serialNumber?: string;
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
 * Gets a Network Bootstrap Device resource details.
 *
 * Uses Azure REST API version 2025-07-15.
 */
export function getNetworkBootstrapDeviceOutput(args: GetNetworkBootstrapDeviceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNetworkBootstrapDeviceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:managednetworkfabric:getNetworkBootstrapDevice", {
        "networkBootstrapDeviceName": args.networkBootstrapDeviceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkBootstrapDeviceOutputArgs {
    /**
     * Name of the Network Bootstrap Device.
     */
    networkBootstrapDeviceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}