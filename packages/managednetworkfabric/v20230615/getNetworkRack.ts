import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get Network Rack resource details.
 */
export function getNetworkRack(args: GetNetworkRackArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkRackResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetworkfabric/v20230615:getNetworkRack", {
        "networkRackName": args.networkRackName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkRackArgs {
    /**
     * Name of the Network Rack.
     */
    networkRackName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The Network Rack resource definition.
 */
export interface GetNetworkRackResult {
    /**
     * Switch configuration description.
     */
    readonly annotation?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
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
     * List of network device ARM resource IDs.
     */
    readonly networkDevices: string[];
    /**
     * ARM resource ID of the Network Fabric.
     */
    readonly networkFabricId: string;
    /**
     * Network Rack SKU name.
     */
    readonly networkRackType?: string;
    /**
     * Provisioning state of the resource.
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
 */
export function getNetworkRackOutput(args: GetNetworkRackOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkRackResult> {
    return pulumi.output(args).apply((a: any) => getNetworkRack(a, opts))
}

export interface GetNetworkRackOutputArgs {
    /**
     * Name of the Network Rack.
     */
    networkRackName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}