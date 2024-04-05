import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get an Volume.
 */
export function getVolume(args: GetVolumeArgs, opts?: pulumi.InvokeOptions): Promise<GetVolumeResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:elasticsan/v20221201preview:getVolume", {
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
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Volume size.
     */
    readonly sizeGiB: number;
    /**
     * Storage target information
     */
    readonly storageTarget: types.outputs.IscsiTargetInfoResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Unique Id of the volume in GUID format
     */
    readonly volumeId: string;
}
/**
 * Get an Volume.
 */
export function getVolumeOutput(args: GetVolumeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVolumeResult> {
    return pulumi.output(args).apply((a: any) => getVolume(a, opts))
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