import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get Network Fabric resource details.
 *
 * Uses Azure REST API version 2023-02-01-preview.
 *
 * Other available API versions: 2023-06-15.
 */
export function getNetworkFabric(args: GetNetworkFabricArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkFabricResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetworkfabric:getNetworkFabric", {
        "networkFabricName": args.networkFabricName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkFabricArgs {
    /**
     * Name of the Network Fabric
     */
    networkFabricName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The NetworkFabric resource definition.
 */
export interface GetNetworkFabricResult {
    /**
     * Switch configuration description.
     */
    readonly annotation?: string;
    /**
     * ASN of CE devices for CE/PE connectivity.
     */
    readonly fabricASN: number;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * IPv4Prefix for Management Network. Example: 10.1.0.0/19.
     */
    readonly ipv4Prefix?: string;
    /**
     * IPv6Prefix for Management Network. Example: 3FFE:FFFF:0:CD40::/59.
     */
    readonly ipv6Prefix?: string;
    /**
     * List of L2IsolationDomain resource IDs under the Network Fabric.
     */
    readonly l2IsolationDomains: string[];
    /**
     * List of L3IsolationDomain resource IDs under the Network Fabric.
     */
    readonly l3IsolationDomains: string[];
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Configuration to be used to setup the management network.
     */
    readonly managementNetworkConfiguration: types.outputs.ManagementNetworkConfigurationResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Azure resource ID for the NetworkFabricController the NetworkFabric belongs.
     */
    readonly networkFabricControllerId: string;
    /**
     * Supported Network Fabric SKU.Example: Compute / Aggregate racks. Once the user chooses a particular SKU, only supported racks can be added to the Network Fabric. The SKU determines whether it is a single / multi rack Network Fabric.
     */
    readonly networkFabricSku: string;
    /**
     * Gets the operational state of the resource.
     */
    readonly operationalState: string;
    /**
     * Gets the provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Number of racks associated to Network Fabric.Possible values are from 2-8.
     */
    readonly rackCount: number;
    /**
     * List of NetworkRack resource IDs under the Network Fabric. The number of racks allowed depends on the Network Fabric SKU.
     */
    readonly racks: string[];
    /**
     * Router Id of CE to be used for MP-BGP between PE and CE
     */
    readonly routerId: string;
    /**
     * Number of servers.Possible values are from 1-16.
     */
    readonly serverCountPerRack: number;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Network and credentials configuration currently applied to terminal server.
     */
    readonly terminalServerConfiguration: types.outputs.TerminalServerConfigurationResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get Network Fabric resource details.
 *
 * Uses Azure REST API version 2023-02-01-preview.
 *
 * Other available API versions: 2023-06-15.
 */
export function getNetworkFabricOutput(args: GetNetworkFabricOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNetworkFabricResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:managednetworkfabric:getNetworkFabric", {
        "networkFabricName": args.networkFabricName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkFabricOutputArgs {
    /**
     * Name of the Network Fabric
     */
    networkFabricName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}