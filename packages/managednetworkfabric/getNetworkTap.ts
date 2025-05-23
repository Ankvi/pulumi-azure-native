import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves details of this Network Tap.
 *
 * Uses Azure REST API version 2023-06-15.
 */
export function getNetworkTap(args: GetNetworkTapArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkTapResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetworkfabric:getNetworkTap", {
        "networkTapName": args.networkTapName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkTapArgs {
    /**
     * Name of the Network Tap.
     */
    networkTapName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The Network Tap resource definition.
 */
export interface GetNetworkTapResult {
    /**
     * Administrative state of the resource. Example -Enabled/Disabled
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
     * Gets the configurations state of the resource.
     */
    readonly configurationState: string;
    /**
     * List of destinations to send the filter traffic.
     */
    readonly destinations: types.outputs.NetworkTapPropertiesResponseDestinations[];
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
     * ARM resource ID of the Network Packet Broker.
     */
    readonly networkPacketBrokerId: string;
    /**
     * Polling type.
     */
    readonly pollingType?: string;
    /**
     * Provides you the latest status of the NFC service, whether it is Accepted, updating, Succeeded or Failed. During this process, the states keep changing based on the status of Network Tap provisioning.
     */
    readonly provisioningState: string;
    /**
     * Source Tap Rule Id. ARM Resource ID of the Network Tap Rule.
     */
    readonly sourceTapRuleId: string;
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
 * Retrieves details of this Network Tap.
 *
 * Uses Azure REST API version 2023-06-15.
 */
export function getNetworkTapOutput(args: GetNetworkTapOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNetworkTapResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:managednetworkfabric:getNetworkTap", {
        "networkTapName": args.networkTapName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkTapOutputArgs {
    /**
     * Name of the Network Tap.
     */
    networkTapName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}