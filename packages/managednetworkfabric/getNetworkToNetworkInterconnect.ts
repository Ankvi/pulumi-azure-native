import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Implements NetworkToNetworkInterconnects GET method.
 *
 * Uses Azure REST API version 2023-02-01-preview.
 *
 * Other available API versions: 2023-06-15.
 */
export function getNetworkToNetworkInterconnect(args: GetNetworkToNetworkInterconnectArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkToNetworkInterconnectResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetworkfabric:getNetworkToNetworkInterconnect", {
        "networkFabricName": args.networkFabricName,
        "networkToNetworkInterconnectName": args.networkToNetworkInterconnectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkToNetworkInterconnectArgs {
    /**
     * Name of the NetworkFabric.
     */
    networkFabricName: string;
    /**
     * Name of the NetworkToNetworkInterconnect
     */
    networkToNetworkInterconnectName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The NetworkToNetworkInterconnect resource definition.
 */
export interface GetNetworkToNetworkInterconnectResult {
    /**
     * Gets the administrativeState of the resource. Example -Enabled/Disabled
     */
    readonly administrativeState: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Configuration to use NNI for Infrastructure Management. Example: True/False.
     */
    readonly isManagementType: string;
    /**
     * Common properties for Layer2Configuration.
     */
    readonly layer2Configuration?: types.outputs.Layer2ConfigurationResponse;
    /**
     * Common properties for Layer3Configuration.
     */
    readonly layer3Configuration?: types.outputs.Layer3ConfigurationResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Type of NNI used. Example: CE | NPB
     */
    readonly nniType?: string;
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
    /**
     * Based on this parameter the layer2/layer3 is made as mandatory. Example: True/False
     */
    readonly useOptionB: string;
}
/**
 * Implements NetworkToNetworkInterconnects GET method.
 *
 * Uses Azure REST API version 2023-02-01-preview.
 *
 * Other available API versions: 2023-06-15.
 */
export function getNetworkToNetworkInterconnectOutput(args: GetNetworkToNetworkInterconnectOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNetworkToNetworkInterconnectResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:managednetworkfabric:getNetworkToNetworkInterconnect", {
        "networkFabricName": args.networkFabricName,
        "networkToNetworkInterconnectName": args.networkToNetworkInterconnectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkToNetworkInterconnectOutputArgs {
    /**
     * Name of the NetworkFabric.
     */
    networkFabricName: pulumi.Input<string>;
    /**
     * Name of the NetworkToNetworkInterconnect
     */
    networkToNetworkInterconnectName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}