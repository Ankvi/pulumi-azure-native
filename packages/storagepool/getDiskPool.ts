import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Disk pool.
 * Azure REST API version: 2021-08-01.
 */
export function getDiskPool(args: GetDiskPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetDiskPoolResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storagepool:getDiskPool", {
        "diskPoolName": args.diskPoolName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDiskPoolArgs {
    /**
     * The name of the Disk Pool.
     */
    diskPoolName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Response for Disk Pool request.
 */
export interface GetDiskPoolResult {
    /**
     * List of additional capabilities for Disk Pool.
     */
    readonly additionalCapabilities?: string[];
    /**
     * Logical zone for Disk Pool resource; example: ["1"].
     */
    readonly availabilityZones: string[];
    /**
     * List of Azure Managed Disks to attach to a Disk Pool.
     */
    readonly disks?: types.outputs.storagepool.DiskResponse[];
    /**
     * Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives.
     */
    readonly location: string;
    /**
     * Azure resource id. Indicates if this resource is managed by another Azure resource.
     */
    readonly managedBy: string;
    /**
     * List of Azure resource ids that manage this resource.
     */
    readonly managedByExtended: string[];
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * State of the operation on the resource.
     */
    readonly provisioningState: string;
    /**
     * Operational status of the Disk Pool.
     */
    readonly status: string;
    /**
     * Azure Resource ID of a Subnet for the Disk Pool.
     */
    readonly subnetId: string;
    /**
     * Resource metadata required by ARM RPC
     */
    readonly systemData: types.outputs.storagepool.SystemMetadataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Sku tier
     */
    readonly tier?: string;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
}
/**
 * Get a Disk pool.
 * Azure REST API version: 2021-08-01.
 */
export function getDiskPoolOutput(args: GetDiskPoolOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDiskPoolResult> {
    return pulumi.output(args).apply((a: any) => getDiskPool(a, opts))
}

export interface GetDiskPoolOutputArgs {
    /**
     * The name of the Disk Pool.
     */
    diskPoolName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
