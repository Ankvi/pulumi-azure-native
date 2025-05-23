import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the information about the volume resource with the given name. The information include the description and other properties of the volume.
 *
 * Uses Azure REST API version 2018-09-01-preview.
 */
export function getVolume(args: GetVolumeArgs, opts?: pulumi.InvokeOptions): Promise<GetVolumeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicefabricmesh:getVolume", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 *
 * Uses Azure REST API version 2018-09-01-preview.
 */
export function getVolumeOutput(args: GetVolumeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVolumeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:servicefabricmesh:getVolume", {
        "resourceGroupName": args.resourceGroupName,
        "volumeResourceName": args.volumeResourceName,
    }, opts);
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