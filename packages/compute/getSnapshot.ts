import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about a snapshot.
 *
 * Uses Azure REST API version 2024-03-02.
 *
 * Other available API versions: 2022-07-02, 2023-01-02, 2023-04-02, 2023-10-02. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native compute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSnapshot(args: GetSnapshotArgs, opts?: pulumi.InvokeOptions): Promise<GetSnapshotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:compute:getSnapshot", {
        "resourceGroupName": args.resourceGroupName,
        "snapshotName": args.snapshotName,
    }, opts);
}

export interface GetSnapshotArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the snapshot that is being created. The name can't be changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The max name length is 80 characters.
     */
    snapshotName: string;
}

/**
 * Snapshot resource.
 */
export interface GetSnapshotResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Percentage complete for the background copy when a resource is created via the CopyStart operation.
     */
    readonly completionPercent?: number;
    /**
     * Indicates the error details if the background copy of a resource created via the CopyStart operation fails.
     */
    readonly copyCompletionError?: types.outputs.CopyCompletionErrorResponse;
    /**
     * Disk source information. CreationData information cannot be changed after the disk has been created.
     */
    readonly creationData: types.outputs.CreationDataResponse;
    /**
     * Additional authentication requirements when exporting or uploading to a disk or snapshot.
     */
    readonly dataAccessAuthMode?: string;
    /**
     * ARM id of the DiskAccess resource for using private endpoints on disks.
     */
    readonly diskAccessId?: string;
    /**
     * The size of the disk in bytes. This field is read only.
     */
    readonly diskSizeBytes: number;
    /**
     * If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size.
     */
    readonly diskSizeGB?: number;
    /**
     * The state of the snapshot.
     */
    readonly diskState: string;
    /**
     * Encryption property can be used to encrypt data at rest with customer managed keys or platform managed keys.
     */
    readonly encryption?: types.outputs.EncryptionResponse;
    /**
     * Encryption settings collection used be Azure Disk Encryption, can contain multiple encryption settings per disk or snapshot.
     */
    readonly encryptionSettingsCollection?: types.outputs.EncryptionSettingsCollectionResponse;
    /**
     * The extended location where the snapshot will be created. Extended location cannot be changed.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * The hypervisor generation of the Virtual Machine. Applicable to OS disks only.
     */
    readonly hyperVGeneration?: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Whether a snapshot is incremental. Incremental snapshots on the same disk occupy less space than full snapshots and can be diffed.
     */
    readonly incremental?: boolean;
    /**
     * Incremental snapshots for a disk share an incremental snapshot family id. The Get Page Range Diff API can only be called on incremental snapshots with the same family id.
     */
    readonly incrementalSnapshotFamilyId: string;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Unused. Always Null.
     */
    readonly managedBy: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Policy for accessing the disk via network.
     */
    readonly networkAccessPolicy?: string;
    /**
     * The Operating System type.
     */
    readonly osType?: string;
    /**
     * The disk provisioning state.
     */
    readonly provisioningState: string;
    /**
     * Policy for controlling export on the disk.
     */
    readonly publicNetworkAccess?: string;
    /**
     * Purchase plan information for the image from which the source disk for the snapshot was originally created.
     */
    readonly purchasePlan?: types.outputs.PurchasePlanResponse;
    /**
     * Contains the security related information for the resource.
     */
    readonly securityProfile?: types.outputs.DiskSecurityProfileResponse;
    /**
     * The snapshots sku name. Can be Standard_LRS, Premium_LRS, or Standard_ZRS. This is an optional parameter for incremental snapshot and the default behavior is the SKU will be set to the same sku as the previous snapshot
     */
    readonly sku?: types.outputs.SnapshotSkuResponse;
    /**
     * List of supported capabilities for the image from which the source disk from the snapshot was originally created.
     */
    readonly supportedCapabilities?: types.outputs.SupportedCapabilitiesResponse;
    /**
     * Indicates the OS on a snapshot supports hibernation.
     */
    readonly supportsHibernation?: boolean;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * The time when the snapshot was created.
     */
    readonly timeCreated: string;
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * Unique Guid identifying the resource.
     */
    readonly uniqueId: string;
}
/**
 * Gets information about a snapshot.
 *
 * Uses Azure REST API version 2024-03-02.
 *
 * Other available API versions: 2022-07-02, 2023-01-02, 2023-04-02, 2023-10-02. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native compute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSnapshotOutput(args: GetSnapshotOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSnapshotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:compute:getSnapshot", {
        "resourceGroupName": args.resourceGroupName,
        "snapshotName": args.snapshotName,
    }, opts);
}

export interface GetSnapshotOutputArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the snapshot that is being created. The name can't be changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The max name length is 80 characters.
     */
    snapshotName: pulumi.Input<string>;
}