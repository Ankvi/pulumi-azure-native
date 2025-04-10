import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get details of the specified subvolume
 *
 * Uses Azure REST API version 2022-11-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-05-01, 2023-05-01-preview, 2023-07-01, 2023-07-01-preview, 2023-11-01, 2023-11-01-preview, 2024-01-01, 2024-03-01, 2024-03-01-preview, 2024-05-01, 2024-05-01-preview, 2024-07-01, 2024-07-01-preview, 2024-09-01, 2024-09-01-preview.
 */
export function getSubvolumeMetadata(args: GetSubvolumeMetadataArgs, opts?: pulumi.InvokeOptions): Promise<GetSubvolumeMetadataResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:netapp:getSubvolumeMetadata", {
        "accountName": args.accountName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
        "subvolumeName": args.subvolumeName,
        "volumeName": args.volumeName,
    }, opts);
}

export interface GetSubvolumeMetadataArgs {
    /**
     * The name of the NetApp account
     */
    accountName: string;
    /**
     * The name of the capacity pool
     */
    poolName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the subvolume.
     */
    subvolumeName: string;
    /**
     * The name of the volume
     */
    volumeName: string;
}

/**
 * Result of the post subvolume and action is to get metadata of the subvolume.
 */
export interface GetSubvolumeMetadataResult {
    /**
     * Most recent access time and date
     */
    readonly accessedTimeStamp?: string;
    /**
     * Bytes used
     */
    readonly bytesUsed?: number;
    /**
     * Most recent change time and date
     */
    readonly changedTimeStamp?: string;
    /**
     * Creation time and date
     */
    readonly creationTimeStamp?: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Most recent modification time and date
     */
    readonly modifiedTimeStamp?: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Path to the parent subvolume
     */
    readonly parentPath?: string;
    /**
     * Path to the subvolume
     */
    readonly path?: string;
    /**
     * Permissions of the subvolume
     */
    readonly permissions?: string;
    /**
     * Azure lifecycle management
     */
    readonly provisioningState?: string;
    /**
     * Size of subvolume
     */
    readonly size?: number;
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Get details of the specified subvolume
 *
 * Uses Azure REST API version 2022-11-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-05-01, 2023-05-01-preview, 2023-07-01, 2023-07-01-preview, 2023-11-01, 2023-11-01-preview, 2024-01-01, 2024-03-01, 2024-03-01-preview, 2024-05-01, 2024-05-01-preview, 2024-07-01, 2024-07-01-preview, 2024-09-01, 2024-09-01-preview.
 */
export function getSubvolumeMetadataOutput(args: GetSubvolumeMetadataOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSubvolumeMetadataResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:netapp:getSubvolumeMetadata", {
        "accountName": args.accountName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
        "subvolumeName": args.subvolumeName,
        "volumeName": args.volumeName,
    }, opts);
}

export interface GetSubvolumeMetadataOutputArgs {
    /**
     * The name of the NetApp account
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the capacity pool
     */
    poolName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the subvolume.
     */
    subvolumeName: pulumi.Input<string>;
    /**
     * The name of the volume
     */
    volumeName: pulumi.Input<string>;
}