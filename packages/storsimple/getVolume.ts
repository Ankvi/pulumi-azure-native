import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Returns the properties of the specified volume name.
 *
 * Uses Azure REST API version 2017-06-01.
 */
export function getVolume(args: GetVolumeArgs, opts?: pulumi.InvokeOptions): Promise<GetVolumeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storsimple:getVolume", {
        "deviceName": args.deviceName,
        "managerName": args.managerName,
        "resourceGroupName": args.resourceGroupName,
        "volumeContainerName": args.volumeContainerName,
        "volumeName": args.volumeName,
    }, opts);
}

export interface GetVolumeArgs {
    /**
     * The device name
     */
    deviceName: string;
    /**
     * The manager name
     */
    managerName: string;
    /**
     * The resource group name
     */
    resourceGroupName: string;
    /**
     * The volume container name.
     */
    volumeContainerName: string;
    /**
     * The volume name.
     */
    volumeName: string;
}

/**
 * The volume.
 */
export interface GetVolumeResult {
    /**
     * The IDs of the access control records, associated with the volume.
     */
    readonly accessControlRecordIds: string[];
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The IDs of the backup policies, in which this volume is part of.
     */
    readonly backupPolicyIds: string[];
    /**
     * The backup status of the volume.
     */
    readonly backupStatus: string;
    /**
     * The path ID that uniquely identifies the object.
     */
    readonly id: string;
    /**
     * The Kind of the object. Currently only Series8000 is supported
     */
    readonly kind?: string;
    /**
     * The monitoring status of the volume.
     */
    readonly monitoringStatus: string;
    /**
     * The name of the object.
     */
    readonly name: string;
    /**
     * The operation status on the volume.
     */
    readonly operationStatus: string;
    /**
     * The size of the volume in bytes.
     */
    readonly sizeInBytes: number;
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
    /**
     * The ID of the volume container, in which this volume is created.
     */
    readonly volumeContainerId: string;
    /**
     * The volume status.
     */
    readonly volumeStatus: string;
    /**
     * The type of the volume.
     */
    readonly volumeType: string;
}
/**
 * Returns the properties of the specified volume name.
 *
 * Uses Azure REST API version 2017-06-01.
 */
export function getVolumeOutput(args: GetVolumeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVolumeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:storsimple:getVolume", {
        "deviceName": args.deviceName,
        "managerName": args.managerName,
        "resourceGroupName": args.resourceGroupName,
        "volumeContainerName": args.volumeContainerName,
        "volumeName": args.volumeName,
    }, opts);
}

export interface GetVolumeOutputArgs {
    /**
     * The device name
     */
    deviceName: pulumi.Input<string>;
    /**
     * The manager name
     */
    managerName: pulumi.Input<string>;
    /**
     * The resource group name
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The volume container name.
     */
    volumeContainerName: pulumi.Input<string>;
    /**
     * The volume name.
     */
    volumeName: pulumi.Input<string>;
}