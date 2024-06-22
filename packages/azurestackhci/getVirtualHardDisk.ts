import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a virtual hard disk
 * Azure REST API version: 2022-12-15-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-09-01-preview, 2024-01-01, 2024-02-01-preview.
 */
export function getVirtualHardDisk(args: GetVirtualHardDiskArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualHardDiskResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci:getVirtualHardDisk", {
        "resourceGroupName": args.resourceGroupName,
        "virtualHardDiskName": args.virtualHardDiskName,
    }, opts);
}

export interface GetVirtualHardDiskArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of the virtual hard disk
     */
    virtualHardDiskName: string;
}

/**
 * The virtual hard disk resource definition.
 */
export interface GetVirtualHardDiskResult {
    readonly blockSizeBytes?: number;
    /**
     * Storage ContainerID of the storage container to be used for VHD
     */
    readonly containerId?: string;
    /**
     * The format of the actual VHD file [vhd, vhdx]
     */
    readonly diskFileFormat?: string;
    /**
     * Size of the disk in GB
     */
    readonly diskSizeGB?: number;
    /**
     * Boolean for enabling dynamic sizing on the virtual hard disk
     */
    readonly dynamic?: boolean;
    /**
     * The extendedLocation of the resource.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * The hypervisor generation of the Virtual Machine [V1, V2]
     */
    readonly hyperVGeneration?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    readonly logicalSectorBytes?: number;
    /**
     * The name of the resource
     */
    readonly name: string;
    readonly physicalSectorBytes?: number;
    /**
     * Provisioning state of the virtual hard disk.
     */
    readonly provisioningState: string;
    /**
     * The observed state of virtual hard disks
     */
    readonly status: types.outputs.VirtualHardDiskStatusResponse;
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
 * Gets a virtual hard disk
 * Azure REST API version: 2022-12-15-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-09-01-preview, 2024-01-01, 2024-02-01-preview.
 */
export function getVirtualHardDiskOutput(args: GetVirtualHardDiskOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualHardDiskResult> {
    return pulumi.output(args).apply((a: any) => getVirtualHardDisk(a, opts))
}

export interface GetVirtualHardDiskOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the virtual hard disk
     */
    virtualHardDiskName: pulumi.Input<string>;
}