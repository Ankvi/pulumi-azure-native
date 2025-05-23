import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Volume Snapshot.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2023-01-01, 2024-06-01-preview, 2024-07-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native elasticsan [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getVolumeSnapshot(args: GetVolumeSnapshotArgs, opts?: pulumi.InvokeOptions): Promise<GetVolumeSnapshotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:elasticsan:getVolumeSnapshot", {
        "elasticSanName": args.elasticSanName,
        "resourceGroupName": args.resourceGroupName,
        "snapshotName": args.snapshotName,
        "volumeGroupName": args.volumeGroupName,
    }, opts);
}

export interface GetVolumeSnapshotArgs {
    /**
     * The name of the ElasticSan.
     */
    elasticSanName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the volume snapshot within the given volume group.
     */
    snapshotName: string;
    /**
     * The name of the VolumeGroup.
     */
    volumeGroupName: string;
}

/**
 * Response for Volume Snapshot request.
 */
export interface GetVolumeSnapshotResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Data used when creating a volume snapshot.
     */
    readonly creationData: types.outputs.SnapshotCreationDataResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * State of the operation on the resource.
     */
    readonly provisioningState: string;
    /**
     * Size of Source Volume
     */
    readonly sourceVolumeSizeGiB: number;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Source Volume Name of a snapshot
     */
    readonly volumeName: string;
}
/**
 * Get a Volume Snapshot.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2023-01-01, 2024-06-01-preview, 2024-07-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native elasticsan [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getVolumeSnapshotOutput(args: GetVolumeSnapshotOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVolumeSnapshotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:elasticsan:getVolumeSnapshot", {
        "elasticSanName": args.elasticSanName,
        "resourceGroupName": args.resourceGroupName,
        "snapshotName": args.snapshotName,
        "volumeGroupName": args.volumeGroupName,
    }, opts);
}

export interface GetVolumeSnapshotOutputArgs {
    /**
     * The name of the ElasticSan.
     */
    elasticSanName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the volume snapshot within the given volume group.
     */
    snapshotName: pulumi.Input<string>;
    /**
     * The name of the VolumeGroup.
     */
    volumeGroupName: pulumi.Input<string>;
}