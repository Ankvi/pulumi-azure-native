import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get disk.
 * Azure REST API version: 2018-09-15.
 *
 * Other available API versions: 2016-05-15.
 */
export function getDisk(args: GetDiskArgs, opts?: pulumi.InvokeOptions): Promise<GetDiskResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devtestlab:getDisk", {
        "expand": args.expand,
        "labName": args.labName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "userName": args.userName,
    }, opts);
}

export interface GetDiskArgs {
    /**
     * Specify the $expand query. Example: 'properties($select=diskType)'
     */
    expand?: string;
    /**
     * The name of the lab.
     */
    labName: string;
    /**
     * The name of the disk.
     */
    name: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the user profile.
     */
    userName: string;
}

/**
 * A Disk.
 */
export interface GetDiskResult {
    /**
     * The creation date of the disk.
     */
    readonly createdDate: string;
    /**
     * When backed by a blob, the name of the VHD blob without extension.
     */
    readonly diskBlobName?: string;
    /**
     * The size of the disk in Gibibytes.
     */
    readonly diskSizeGiB?: number;
    /**
     * The storage type for the disk (i.e. Standard, Premium).
     */
    readonly diskType?: string;
    /**
     * When backed by a blob, the URI of underlying blob.
     */
    readonly diskUri?: string;
    /**
     * The host caching policy of the disk (i.e. None, ReadOnly, ReadWrite).
     */
    readonly hostCaching?: string;
    /**
     * The identifier of the resource.
     */
    readonly id: string;
    /**
     * The resource ID of the VM to which this disk is leased.
     */
    readonly leasedByLabVmId?: string;
    /**
     * The location of the resource.
     */
    readonly location?: string;
    /**
     * When backed by managed disk, this is the ID of the compute disk resource.
     */
    readonly managedDiskId?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState: string;
    /**
     * When backed by a blob, the storage account where the blob is.
     */
    readonly storageAccountId?: string;
    /**
     * The tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier: string;
}
/**
 * Get disk.
 * Azure REST API version: 2018-09-15.
 *
 * Other available API versions: 2016-05-15.
 */
export function getDiskOutput(args: GetDiskOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDiskResult> {
    return pulumi.output(args).apply((a: any) => getDisk(a, opts))
}

export interface GetDiskOutputArgs {
    /**
     * Specify the $expand query. Example: 'properties($select=diskType)'
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the lab.
     */
    labName: pulumi.Input<string>;
    /**
     * The name of the disk.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the user profile.
     */
    userName: pulumi.Input<string>;
}