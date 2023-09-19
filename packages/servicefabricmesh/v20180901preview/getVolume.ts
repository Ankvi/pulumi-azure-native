import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the information about the volume resource with the given name. The information include the description and other properties of the volume.
 */
export function getVolume(args: GetVolumeArgs, opts?: pulumi.InvokeOptions): Promise<GetVolumeResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicefabricmesh/v20180901preview:getVolume", {
        "resourceGroupName": args.resourceGroupName,
        "volumeResourceName": args.volumeResourceName,
    }, opts);
}

export interface GetVolumeArgs {
    /**
     * Azure resource group name
     */
    resourceGroupName: string;
    /**
     * The identity of the volume.
     */
    volumeResourceName: string;
}

/**
 * This type describes a volume resource.
 */
export interface GetVolumeResult {
    /**
     * This type describes a volume provided by an Azure Files file share.
     */
    readonly azureFileParameters?: types.outputs.VolumeProviderParametersAzureFileResponse;
    /**
     * User readable description of the volume.
     */
    readonly description?: string;
    /**
     * Fully qualified identifier for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Provider of the volume.
     */
    readonly provider: string;
    /**
     * State of the resource.
     */
    readonly provisioningState: string;
    /**
     * Status of the volume.
     */
    readonly status: string;
    /**
     * Gives additional information about the current status of the volume.
     */
    readonly statusDetails: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
}
/**
 * Gets the information about the volume resource with the given name. The information include the description and other properties of the volume.
 */
export function getVolumeOutput(args: GetVolumeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVolumeResult> {
    return pulumi.output(args).apply((a: any) => getVolume(a, opts))
}

export interface GetVolumeOutputArgs {
    /**
     * Azure resource group name
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The identity of the volume.
     */
    volumeResourceName: pulumi.Input<string>;
}
