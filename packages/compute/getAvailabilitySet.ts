import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves information about an availability set.
 *
 * Uses Azure REST API version 2023-03-01.
 *
 * Other available API versions: 2023-07-01, 2023-09-01, 2024-03-01, 2024-07-01, 2024-11-01.
 */
export function getAvailabilitySet(args: GetAvailabilitySetArgs, opts?: pulumi.InvokeOptions): Promise<GetAvailabilitySetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:compute:getAvailabilitySet", {
        "availabilitySetName": args.availabilitySetName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAvailabilitySetArgs {
    /**
     * The name of the availability set.
     */
    availabilitySetName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, see [Availability sets overview](https://docs.microsoft.com/azure/virtual-machines/availability-set-overview). For more information on Azure planned maintenance, see [Maintenance and updates for Virtual Machines in Azure](https://docs.microsoft.com/azure/virtual-machines/maintenance-and-updates). Currently, a VM can only be added to an availability set at creation time. An existing VM cannot be added to an availability set.
 */
export interface GetAvailabilitySetResult {
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Fault Domain count.
     */
    readonly platformFaultDomainCount?: number;
    /**
     * Update Domain count.
     */
    readonly platformUpdateDomainCount?: number;
    /**
     * Specifies information about the proximity placement group that the availability set should be assigned to. Minimum api-version: 2018-04-01.
     */
    readonly proximityPlacementGroup?: types.outputs.SubResourceResponse;
    /**
     * Sku of the availability set, only name is required to be set. See AvailabilitySetSkuTypes for possible set of values. Use 'Aligned' for virtual machines with managed disks and 'Classic' for virtual machines with unmanaged disks. Default value is 'Classic'.
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * The resource status information.
     */
    readonly statuses: types.outputs.InstanceViewStatusResponse[];
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * A list of references to all virtual machines in the availability set.
     */
    readonly virtualMachines?: types.outputs.SubResourceResponse[];
}
/**
 * Retrieves information about an availability set.
 *
 * Uses Azure REST API version 2023-03-01.
 *
 * Other available API versions: 2023-07-01, 2023-09-01, 2024-03-01, 2024-07-01, 2024-11-01.
 */
export function getAvailabilitySetOutput(args: GetAvailabilitySetOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAvailabilitySetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:compute:getAvailabilitySet", {
        "availabilitySetName": args.availabilitySetName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAvailabilitySetOutputArgs {
    /**
     * The name of the availability set.
     */
    availabilitySetName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}