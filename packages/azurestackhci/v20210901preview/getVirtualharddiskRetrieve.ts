import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets virtualharddisks by resource name
 */
export function getVirtualharddiskRetrieve(args: GetVirtualharddiskRetrieveArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualharddiskRetrieveResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci/v20210901preview:getVirtualharddiskRetrieve", {
        "resourceGroupName": args.resourceGroupName,
        "virtualharddisksName": args.virtualharddisksName,
    }, opts);
}

export interface GetVirtualharddiskRetrieveArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    virtualharddisksName: string;
}

/**
 * The virtual hard disk resource definition.
 */
export interface GetVirtualharddiskRetrieveResult {
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
     * diskSizeBytes - size of the disk in GB
     */
    readonly diskSizeBytes?: number;
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
    readonly provisioningState: string;
    /**
     * name of the object to be used in moc
     */
    readonly resourceName?: string;
    /**
     * VirtualHardDiskStatus defines the observed state of virtualharddisks
     */
    readonly status: types.outputs.VirtualHardDiskStatusResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
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
 * Gets virtualharddisks by resource name
 */
export function getVirtualharddiskRetrieveOutput(args: GetVirtualharddiskRetrieveOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualharddiskRetrieveResult> {
    return pulumi.output(args).apply((a: any) => getVirtualharddiskRetrieve(a, opts))
}

export interface GetVirtualharddiskRetrieveOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    virtualharddisksName: pulumi.Input<string>;
}
