import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties of the specified volume container name.
 *
 * Uses Azure REST API version 2017-06-01.
 */
export function getVolumeContainer(args: GetVolumeContainerArgs, opts?: pulumi.InvokeOptions): Promise<GetVolumeContainerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storsimple:getVolumeContainer", {
        "deviceName": args.deviceName,
        "managerName": args.managerName,
        "resourceGroupName": args.resourceGroupName,
        "volumeContainerName": args.volumeContainerName,
    }, opts);
}

export interface GetVolumeContainerArgs {
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
     * The name of the volume container.
     */
    volumeContainerName: string;
}

/**
 * The volume container.
 */
export interface GetVolumeContainerResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The bandwidth-rate set on the volume container.
     */
    readonly bandWidthRateInMbps?: number;
    /**
     * The ID of the bandwidth setting associated with the volume container.
     */
    readonly bandwidthSettingId?: string;
    /**
     * The key used to encrypt data in the volume container. It is required when property 'EncryptionStatus' is "Enabled".
     */
    readonly encryptionKey?: types.outputs.AsymmetricEncryptedSecretResponse;
    /**
     * The flag to denote whether encryption is enabled or not.
     */
    readonly encryptionStatus: string;
    /**
     * The path ID that uniquely identifies the object.
     */
    readonly id: string;
    /**
     * The Kind of the object. Currently only Series8000 is supported
     */
    readonly kind?: string;
    /**
     * The name of the object.
     */
    readonly name: string;
    /**
     * The owner ship status of the volume container. Only when the status is "NotOwned", the delete operation on the volume container is permitted.
     */
    readonly ownerShipStatus: string;
    /**
     * The path ID of storage account associated with the volume container.
     */
    readonly storageAccountCredentialId: string;
    /**
     * The total cloud storage for the volume container.
     */
    readonly totalCloudStorageUsageInBytes: number;
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
    /**
     * The number of volumes in the volume Container.
     */
    readonly volumeCount: number;
}
/**
 * Gets the properties of the specified volume container name.
 *
 * Uses Azure REST API version 2017-06-01.
 */
export function getVolumeContainerOutput(args: GetVolumeContainerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVolumeContainerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:storsimple:getVolumeContainer", {
        "deviceName": args.deviceName,
        "managerName": args.managerName,
        "resourceGroupName": args.resourceGroupName,
        "volumeContainerName": args.volumeContainerName,
    }, opts);
}

export interface GetVolumeContainerOutputArgs {
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
     * The name of the volume container.
     */
    volumeContainerName: pulumi.Input<string>;
}