import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the Network Interface resource details.
 *
 * Uses Azure REST API version 2023-02-01-preview.
 *
 * Other available API versions: 2023-06-15.
 */
export function getNetworkInterface(args: GetNetworkInterfaceArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkInterfaceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetworkfabric:getNetworkInterface", {
        "networkDeviceName": args.networkDeviceName,
        "networkInterfaceName": args.networkInterfaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkInterfaceArgs {
    /**
     * Name of the NetworkDevice
     */
    networkDeviceName: string;
    /**
     * Name of the NetworkInterfaceName
     */
    networkInterfaceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Defines the NetworkInterface resource.
 */
export interface GetNetworkInterfaceResult {
    /**
     * administrativeState of the network interface. Example: Enabled | Disabled.
     */
    readonly administrativeState: string;
    /**
     * Switch configuration description.
     */
    readonly annotation?: string;
    /**
     * The arm resource id of the interface or compute server its connected to.
     */
    readonly connectedTo: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The Interface Type. Example: Management/Data
     */
    readonly interfaceType: string;
    /**
     * ipv4Address.
     */
    readonly ipv4Address: string;
    /**
     * ipv6Address.
     */
    readonly ipv6Address: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * physicalIdentifier of the network interface.
     */
    readonly physicalIdentifier: string;
    /**
     * Gets the provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get the Network Interface resource details.
 *
 * Uses Azure REST API version 2023-02-01-preview.
 *
 * Other available API versions: 2023-06-15.
 */
export function getNetworkInterfaceOutput(args: GetNetworkInterfaceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNetworkInterfaceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:managednetworkfabric:getNetworkInterface", {
        "networkDeviceName": args.networkDeviceName,
        "networkInterfaceName": args.networkInterfaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkInterfaceOutputArgs {
    /**
     * Name of the NetworkDevice
     */
    networkDeviceName: pulumi.Input<string>;
    /**
     * Name of the NetworkInterfaceName
     */
    networkInterfaceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}