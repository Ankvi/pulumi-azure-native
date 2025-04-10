import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get Network Rack resource details.
 *
 * Uses Azure REST API version 2023-02-01-preview.
 *
 * Other available API versions: 2023-06-15.
 */
export function getNetworkRack(args: GetNetworkRackArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkRackResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetworkfabric:getNetworkRack", {
        "networkRackName": args.networkRackName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkRackArgs {
    /**
     * Name of the Network Rack
     */
    networkRackName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The NetworkRack resource definition.
 */
export interface GetNetworkRackResult {
    /**
     * Switch configuration description.
     */
    readonly annotation?: string;
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
     * List of network device ARM resource ids.
     */
    readonly networkDevices: string[];
    /**
     * Network Fabric ARM resource id.
     */
    readonly networkFabricId: string;
    /**
     * Network Rack SKU name.
     */
    readonly networkRackSku: string;
    /**
     * Gets the provisioning state of the resource.
     */
    readonly provisioningState: string;
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
}
/**
 * Get Network Rack resource details.
 *
 * Uses Azure REST API version 2023-02-01-preview.
 *
 * Other available API versions: 2023-06-15.
 */
export function getNetworkRackOutput(args: GetNetworkRackOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNetworkRackResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:managednetworkfabric:getNetworkRack", {
        "networkRackName": args.networkRackName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkRackOutputArgs {
    /**
     * Name of the Network Rack
     */
    networkRackName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}