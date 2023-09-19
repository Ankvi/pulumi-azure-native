import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified packet core data plane.
 * Azure REST API version: 2023-06-01.
 */
export function getPacketCoreDataPlane(args: GetPacketCoreDataPlaneArgs, opts?: pulumi.InvokeOptions): Promise<GetPacketCoreDataPlaneResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:mobilenetwork:getPacketCoreDataPlane", {
        "packetCoreControlPlaneName": args.packetCoreControlPlaneName,
        "packetCoreDataPlaneName": args.packetCoreDataPlaneName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPacketCoreDataPlaneArgs {
    /**
     * The name of the packet core control plane.
     */
    packetCoreControlPlaneName: string;
    /**
     * The name of the packet core data plane.
     */
    packetCoreDataPlaneName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Packet core data plane resource. Must be created in the same location as its parent packet core control plane.
 */
export interface GetPacketCoreDataPlaneResult {
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
     * The provisioning state of the packet core data plane resource.
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
    /**
     * The user plane interface on the access network. For 5G networks, this is the N3 interface. For 4G networks, this is the S1-U interface.
     */
    readonly userPlaneAccessInterface: types.outputs.InterfacePropertiesResponse;
}
/**
 * Gets information about the specified packet core data plane.
 * Azure REST API version: 2023-06-01.
 */
export function getPacketCoreDataPlaneOutput(args: GetPacketCoreDataPlaneOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPacketCoreDataPlaneResult> {
    return pulumi.output(args).apply((a: any) => getPacketCoreDataPlane(a, opts))
}

export interface GetPacketCoreDataPlaneOutputArgs {
    /**
     * The name of the packet core control plane.
     */
    packetCoreControlPlaneName: pulumi.Input<string>;
    /**
     * The name of the packet core data plane.
     */
    packetCoreDataPlaneName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
