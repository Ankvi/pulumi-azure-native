import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get an Volume.
 *
 * Uses Azure REST API version 2021-11-20-preview.
 *
 * Other available API versions: 2022-12-01-preview, 2023-01-01, 2024-05-01, 2024-06-01-preview.
 */
export function getVolume(args: GetVolumeArgs, opts?: pulumi.InvokeOptions): Promise<GetVolumeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:elasticsan:getVolume", {
        "elasticSanName": args.elasticSanName,
        "resourceGroupName": args.resourceGroupName,
        "volumeGroupName": args.volumeGroupName,
        "volumeName": args.volumeName,
    }, opts);
}

export interface GetVolumeArgs {
    /**
     * The name of the ElasticSan.
     */
    elasticSanName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the VolumeGroup.
     */
    volumeGroupName: string;
    /**
     * The name of the Volume.
     */
    volumeName: string;
}

/**
 * Response for Volume request.
 */
export interface GetVolumeResult {
    /**
     * State of the operation on the resource.
     */
    readonly creationData?: types.outputs.SourceCreationDataResponse;
    /**
     * Azure resource identifier.
     */
    readonly id: string;
    /**
     * Azure resource name.
     */
    readonly name: string;
    /**
     * Volume size.
     */
    readonly sizeGiB?: number;
    /**
     * Storage target information
     */
    readonly storageTarget: types.outputs.IscsiTargetInfoResponse;
    /**
     * Resource metadata required by ARM RPC
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Azure resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Azure resource type.
     */
    readonly type: string;
    /**
     * Unique Id of the volume in GUID format
     */
    readonly volumeId: string;
}
/**
 * Get an Volume.
 *
 * Uses Azure REST API version 2021-11-20-preview.
 *
 * Other available API versions: 2022-12-01-preview, 2023-01-01, 2024-05-01, 2024-06-01-preview.
 */
export function getVolumeOutput(args: GetVolumeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVolumeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:elasticsan:getVolume", {
        "elasticSanName": args.elasticSanName,
        "resourceGroupName": args.resourceGroupName,
        "volumeGroupName": args.volumeGroupName,
        "volumeName": args.volumeName,
    }, opts);
}

export interface GetVolumeOutputArgs {
    /**
     * The name of the ElasticSan.
     */
    elasticSanName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the VolumeGroup.
     */
    volumeGroupName: pulumi.Input<string>;
    /**
     * The name of the Volume.
     */
    volumeName: pulumi.Input<string>;
}