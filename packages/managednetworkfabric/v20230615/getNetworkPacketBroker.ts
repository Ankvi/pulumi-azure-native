import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Retrieves details of this Network Packet Broker.
 */
export function getNetworkPacketBroker(args: GetNetworkPacketBrokerArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkPacketBrokerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetworkfabric/v20230615:getNetworkPacketBroker", {
        "networkPacketBrokerName": args.networkPacketBrokerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkPacketBrokerArgs {
    /**
     * Name of the Network Packet Broker.
     */
    networkPacketBrokerName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The NetworkPacketBroker resource definition.
 */
export interface GetNetworkPacketBrokerResult {
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
     * List of neighbor group IDs configured on NPB.
     */
    readonly neighborGroupIds: string[];
    /**
     * List of ARM resource IDs of Network Devices [NPB].
     */
    readonly networkDeviceIds: string[];
    /**
     * ARM resource ID of the Network Fabric.
     */
    readonly networkFabricId: string;
    /**
     * List of network Tap IDs configured on NPB.
     */
    readonly networkTapIds: string[];
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * List of network interfaces across NPB devices that are used to mirror source traffic.
     */
    readonly sourceInterfaceIds: string[];
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.managednetworkfabric.v20230615.SystemDataResponse;
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
 * Retrieves details of this Network Packet Broker.
 */
export function getNetworkPacketBrokerOutput(args: GetNetworkPacketBrokerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkPacketBrokerResult> {
    return pulumi.output(args).apply((a: any) => getNetworkPacketBroker(a, opts))
}

export interface GetNetworkPacketBrokerOutputArgs {
    /**
     * Name of the Network Packet Broker.
     */
    networkPacketBrokerName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
